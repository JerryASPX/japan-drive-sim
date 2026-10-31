(function () {
  'use strict';

  const app = document.getElementById('app');
  const homeButton = document.getElementById('home-button');
  const data = window.LEVELS;
  const footage = window.FOOTAGE || { clips: [], stills: [] };
  const optionsRule = data && typeof data.options_rule === 'string' ? data.options_rule : '';
  const signImagesMeta = Array.isArray(data && data.sign_images) ? data.sign_images : [];
  const storageKey = 'japan-drive-sim:first-answers:v1';
  let memoryAnswers = {};
  let screen = 'home';
  let session = null;

  function el(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = String(value);
    return node;
  }

  function button(label, className, onClick) {
    const node = el('button', className, label);
    node.className = `btn ${className}`.trim();
    node.type = 'button';
    node.addEventListener('click', onClick);
    return node;
  }

  function readAnswers() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw !== null) {
        const saved = JSON.parse(raw);
        if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
          memoryAnswers = saved;
        }
      }
    } catch (_) {
      // Browsers may restrict localStorage for local files; keep this session playable.
    }
    return memoryAnswers;
  }

  function writeAnswers(answers) {
    memoryAnswers = answers;
    try {
      localStorage.setItem(storageKey, JSON.stringify(answers));
    } catch (_) {
      // The in-memory record still prevents an answer changing score this session.
    }
  }

  function stages() {
    return Array.isArray(data && data.levels) ? data.levels : [];
  }

  function questions() {
    return Array.isArray(data && data.questions) ? data.questions : [];
  }

  function stageQuestions(id) {
    return questions().filter((question) => question.stage === id);
  }

  function firstAnswer(question) {
    const saved = readAnswers()[question.id];
    return saved && typeof saved.correct === 'boolean' ? saved : null;
  }

  function accuracy(id) {
    const list = stageQuestions(id);
    if (!list.length || !list.every(firstAnswer)) return null;
    const correct = list.filter((question) => firstAnswer(question).correct).length;
    return Math.round((correct / list.length) * 100);
  }

  function unlockedIds() {
    return stages().map((stage) => stage.id);
  }

  function stageScores() {
    const scores = {};
    for (const stage of stages()) {
      let sum = 0;
      for (const question of stageQuestions(stage.id)) {
        if (firstAnswer(question)?.correct) {
          sum += Number(question.points) || 0;
        }
      }
      scores[stage.id] = Math.min(100, Math.max(0, sum));
    }
    return scores;
  }

  function overallScore(scores) {
    const completed = stages().filter((stage) => {
      const list = stageQuestions(stage.id);
      return list.length > 0 && list.every(firstAnswer);
    });
    if (!completed.length) return null;
    const sum = completed.reduce((acc, stage) => acc + (scores[stage.id] || 0), 0);
    return Number((sum / completed.length).toFixed(1));
  }

  function state() {
    const scores = stageScores();
    return {
      unlocked: unlockedIds(),
      stageScores: scores,
      overall: overallScore(scores),
      answered: questions().filter(firstAnswer).length,
      screen
    };
  }

  function clipForQuestion(questionId) {
    const clips = Array.isArray(footage && footage.clips) ? footage.clips : [];
    return clips.find((clip) => Array.isArray(clip.questions) && clip.questions.includes(questionId)) || null;
  }

  function stillsForQuestion(questionId) {
    const stills = Array.isArray(footage && footage.stills) ? footage.stills : [];
    return stills.filter((still) => Array.isArray(still.questions) && still.questions.includes(questionId));
  }

  function shuffleOptions(options, shouldShuffle) {
    const list = Array.isArray(options) ? options.slice(0, 4) : [];
    if (!shouldShuffle) return list;
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  }

  function prepareQuestion() {
    if (!session) return;
    const question = session.list[session.index];
    if (!question) return;
    session.options = shuffleOptions(question.options, question.shuffle_options === true);
    const clip = clipForQuestion(question.id);
    session.clip = clip;
    session.clipUnlocked = !clip;
    session.clipError = false;
    session.videoNode = null;
    session.stillIndex = 0;
  }

  function reset() {
    memoryAnswers = {};
    try { localStorage.removeItem(storageKey); } catch (_) { /* Storage unavailable. */ }
    session = null;
    screen = 'home';
    render();
  }

  function openStage(id, replay = false) {
    if (!unlockedIds().includes(id)) return false;
    const list = stageQuestions(id);
    if (!list.length) return false;
    const firstUnanswered = list.findIndex((question) => !firstAnswer(question));
    session = {
      id,
      list,
      index: replay || firstUnanswered < 0 ? 0 : firstUnanswered,
      choice: null,
      retrying: false,
      options: [],
      clip: null,
      clipUnlocked: true,
      clipError: false,
      videoNode: null,
      stillIndex: 0
    };
    prepareQuestion();
    screen = 'question';
    render();
    return true;
  }

  function currentQuestion() {
    if (screen !== 'question' || !session) return null;
    const question = session.list[session.index];
    if (!question) return null;
    return {
      ...question,
      options: Array.isArray(session.options) && session.options.length ? session.options : question.options.slice(0, 4)
    };
  }

  function answer(optionIndex) {
    const rawQuestion = screen === 'question' && session ? session.list[session.index] : null;
    const displayed = session && Array.isArray(session.options) && session.options.length
      ? session.options
      : (rawQuestion ? rawQuestion.options.slice(0, 4) : []);
    if (!rawQuestion || session.choice !== null || !Number.isInteger(optionIndex) ||
        optionIndex < 0 || optionIndex >= displayed.length) return false;
    const chosenOption = displayed[optionIndex];
    const isCorrect = chosenOption.correct === true;
    session.choice = optionIndex;
    session.clipUnlocked = true;
    const prior = firstAnswer(rawQuestion);
    if (!prior) {
      const answers = readAnswers();
      answers[rawQuestion.id] = {
        optionIndex,
        correct: isCorrect
      };
      writeAnswers(answers);
    }
    if (session.videoNode) {
      try {
        const playResult = session.videoNode.play?.();
        if (playResult && typeof playResult.catch === 'function') playResult.catch(() => {});
      } catch (_) { /* Resuming clip is optional. */ }
    }
    render();
    return true;
  }

  function next() {
    if (screen !== 'question' || !session || session.choice === null) return false;
    if (session.index + 1 < session.list.length) {
      session.index += 1;
      session.choice = null;
      session.retrying = false;
      prepareQuestion();
      render();
    } else {
      screen = session.id === stages()[stages().length - 1]?.id ? 'results' : 'stage-end';
      render();
    }
    return true;
  }

  function goHome() {
    screen = 'home';
    session = null;
    render();
  }

  function showResults() {
    screen = 'results';
    session = null;
    render();
  }

  function verificationInfo(questionOrText) {
    const text = String(typeof questionOrText === 'object' && questionOrText !== null ? questionOrText.verification || '' : questionOrText || '');
    if (text.includes('待確認')) return { label: '待確認', className: 'badge text-bg-warning badge-pending' };
    if (text.includes('官方指引') || text.includes('非法條')) return { label: '官方指引', className: 'badge text-bg-info badge-guide' };
    if (text.includes('已查證')) return { label: '法條', className: 'badge text-bg-success badge-law' };
    return null;
  }

  function addScoreboard(parent) {
    const scores = stageScores();
    const board = el('div', 'scoreboard row g-3');
    for (const stage of stages()) {
      const hasAnswered = stageQuestions(stage.id).some(firstAnswer);
      const card = el('div', 'score-card card col-12 col-sm-6 col-lg-3');
      card.append(
        el('span', 'score-label', `${stage.id} ${stage.name}`),
        el('strong', 'score-value', hasAnswered ? scores[stage.id] : '—'),
        el('span', 'score-unit', ' / 100')
      );
      board.append(card);
    }
    const avg = overallScore(scores);
    const overall = el('div', 'score-card score-card-overall card col-12');
    overall.append(
      el('span', 'score-label', '已玩關卡平均'),
      el('strong', 'score-value', avg === null ? '—' : avg),
      el('span', 'score-unit', avg === null ? '' : ' / 100')
    );
    board.append(overall);
    parent.append(board);
  }

  function sourceLinks(parent, sources) {
    if (!Array.isArray(sources) || !sources.length) return;
    const box = el('div', 'sources');
    box.append(el('p', 'eyebrow', '資料來源'));
    const list = el('div', 'source-list');
    for (const source of sources) {
      try {
        const url = new URL(source);
        if (!['http:', 'https:'].includes(url.protocol)) continue;
        const link = el('a', 'source-link', `${url.hostname} ↗`);
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        list.append(link);
      } catch (_) { /* Ignore malformed source URLs. */ }
    }
    if (list.childElementCount) {
      box.append(list);
      parent.append(box);
    }
  }

  function verificationBadge(question) {
    const info = verificationInfo(question);
    return info ? el('span', info.className, info.label) : null;
  }

  function heroArt() {
    const art = el('div', 'hero-art');
    art.setAttribute('aria-hidden', 'true');
    art.innerHTML = `<svg viewBox="0 0 560 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 214 132 118l52 48 70-78 46 50 86-92 58 70 62-28 28 126H36z" fill="#F8E7DF"/>
      <path d="M48 214c70-8 78-86 140-86 52 0 64 58 118 50 60-8 70-92 136-78 52 12 70 58 92 54" stroke="#E8C4B6" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M40 228 128 124l48 44 66-74 50 54 84-90 56 68 64-26 36 128" stroke="#E09A88" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M28 236h506" stroke="#E7CABB" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="438" cy="78" r="22" stroke="#E7B7A8" stroke-width="1.5"/>
      <path d="M300 34c62 22 96 12 196 58" stroke="#E09A88" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M392 52c14-26 42-28 58-8" stroke="#E8B4A6" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M454 70c18-8 34 6 30 22" stroke="#E8B4A6" stroke-width="1.3" stroke-linecap="round"/>
      <g fill="#F8D9D0" stroke="#E09A88" stroke-width="1.1">
        <circle cx="318" cy="42" r="8"/><circle cx="352" cy="26" r="5.5"/><circle cx="412" cy="38" r="9"/>
        <circle cx="456" cy="24" r="6"/><circle cx="492" cy="78" r="7"/><circle cx="470" cy="96" r="4.5"/>
        <circle cx="368" cy="58" r="4"/>
      </g>
      <g fill="#C24E3A">
        <circle cx="318" cy="42" r="1.7"/><circle cx="412" cy="38" r="2"/><circle cx="492" cy="78" r="1.6"/>
        <circle cx="456" cy="24" r="1.4"/>
      </g>
      <g transform="translate(214,186)">
        <path d="M22 52h118a10 10 0 0 0 10-10V34a10 10 0 0 0-5.4-8.8L118 14H68L46 32H22a10 10 0 0 0-10 10v10z" fill="#fff" stroke="#1B2A4A" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M48 32 66 16h48l22 16" stroke="#1B2A4A" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M74 32V16M104 16v16" stroke="#1B2A4A" stroke-width="1.4"/>
        <circle cx="42" cy="54" r="9" fill="#fff" stroke="#1B2A4A" stroke-width="1.8"/>
        <circle cx="118" cy="54" r="9" fill="#fff" stroke="#1B2A4A" stroke-width="1.8"/>
        <circle cx="42" cy="54" r="3.2" fill="#C24E3A"/>
        <circle cx="118" cy="54" r="3.2" fill="#C24E3A"/>
      </g>
    </svg>`;
    return art;
  }

  function renderHome() {
    const hero = el('section', 'hero');
    const intro = el('div', 'hero-copy');
    intro.append(
      el('h1', '', '日本自駕情境模擬'),
      el('p', 'hero-subtitle', '透過情境題目認識日本交通規則。')
    );
    hero.append(intro, heroArt());
    app.append(hero);

    const scores = stageScores();
    const avg = overallScore(scores);

    const section = el('section', 'section');
    const heading = el('div', 'section-heading');
    const headingCopy = el('div', 'section-heading-copy');
    headingCopy.append(el('p', 'eyebrow', '選擇關卡'), el('h2', 'section-title', '八段自駕旅程'));
    if (avg !== null) {
      headingCopy.append(el('p', 'home-average', `已玩關卡平均：${avg}`));
    }
    heading.append(headingCopy, button('查看完整結果 ↗', 'button button-ghost', showResults));
    section.append(heading);
    const grid = el('div', 'stage-grid');
    for (const stage of stages()) {
      const card = el('article', 'stage-card');
      card.dataset.stage = stage.id;
      const media = el('div', 'card-media');
      if (stage.cover) {
        const cover = el('img', 'card-cover');
        cover.src = stage.cover;
        cover.alt = '';
        cover.loading = 'lazy';
        media.append(cover);
      }
      const badge = el('span', 'stage-badge', stage.id);
      media.append(badge);
      card.append(media);

      const body = el('div', 'stage-body');
      body.append(el('h3', 'stage-title', stage.name), el('p', 'stage-setting', stage.setting));
      const hasAnswered = stageQuestions(stage.id).some(firstAnswer);
      const stageScore = scores[stage.id];
      const isPlayed = hasAnswered && stageScore !== null && stageScore !== undefined;
      const scoreEl = el('p', isPlayed ? 'card-score' : 'card-score is-unplayed');
      scoreEl.append(
        el('span', 'card-score-label', '目前分數'),
        el('strong', 'card-score-value', isPlayed ? stageScore : '—'),
        el('span', 'card-score-unit', '/ 100')
      );
      const stats = el('div', 'stage-stats');
      const rate = accuracy(stage.id);
      stats.append(
        el('span', '', `${stageQuestions(stage.id).length} 題`),
        el('span', '', `最佳答對率 ${rate === null ? '—' : `${rate}%`}`)
      );
      const open = button('進入關卡 →', 'stage-open', () => openStage(stage.id));
      open.setAttribute('aria-label', `進入關卡：${stage.id} ${stage.name}`);
      body.append(scoreEl, stats, open);
      card.append(body);
      grid.append(card);
    }
    section.append(grid);
    app.append(section);

    const utility = el('div', 'utility-row');
    utility.append(el('p', '', '所有關卡皆可自由選擇；首次作答結果會記錄於該關分數。'));
    utility.append(button('重置進度', 'button button-text danger', () => {
      if (window.confirm('確定重置所有關卡、首次作答及分數嗎？此操作無法復原。')) reset();
    }));
    app.append(utility);
  }

  function renderFeedback(question, chosen) {
    const displayed = Array.isArray(question.options) ? question.options : [];
    const option = displayed[chosen] || {};
    const isCorrect = option.correct === true;
    const feedback = el('section', `feedback alert ${isCorrect ? 'feedback-correct alert-success' : 'feedback-wrong alert-danger'}`);
    feedback.append(el('h3', '', isCorrect ? '✅ 這次選對了' : '❌ 這次選錯了'));
    if (option.consequence) feedback.append(el('p', 'feedback-consequence', option.consequence));
    if (option.explanation) feedback.append(el('p', '', option.explanation));
    const correct = displayed.filter((item) => item.correct === true);
    const correctBox = el('div', 'correct-answers');
    correctBox.append(el('p', 'eyebrow', correct.length > 1 ? '正確選項（任選一項）' : '正確選項'));
    for (const item of correct) {
      const row = el('div', 'correct-answer');
      row.append(el('strong', '', item.text));
      if (item.explanation) row.append(el('p', '', item.explanation));
      correctBox.append(row);
    }
    feedback.append(correctBox);
    const verify = verificationBadge(question);
    if (verify) {
      const row = el('div', 'verification-row');
      row.append(verify);
      if (String(question.verification).includes('待確認') && question.note) row.append(el('p', '', question.note));
      feedback.append(row);
    }
    if (question.taiwan_vs_japan) {
      const comparison = el('div', 'comparison');
      comparison.append(el('h4', '', '🇹🇼 台灣 vs 🇯🇵 日本'), el('p', '', question.taiwan_vs_japan));
      feedback.append(comparison);
    }
    sourceLinks(feedback, question.sources);
    return feedback;
  }

  function renderClipPanel(clip, revealOptions) {
    const panel = el('div', 'footage-panel footage-clip-panel');
    if (session.clipError) panel.hidden = true;
    const head = el('div', 'footage-header');
    head.append(el('span', 'badge text-bg-primary badge-footage', '實拍決策'));
    const statusText = el('span', 'footage-status',
      session.choice !== null ? '已作答，影片可播放至結束'
      : session.clipUnlocked ? '⏸ 已暫停於決策點，請選擇下方行動'
      : `觀看實拍至 ${clip.pause_at} 秒處決策`);
    head.append(statusText);
    panel.append(head);

    let video = session.videoNode;
    if (!video) {
      video = el('video', 'footage-video');
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('preload', 'metadata');
      video.src = clip.file;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.controls = false;
      video.preload = 'metadata';
      video.currentTime = 0;
      session.videoNode = video;
    }

    const pauseAt = Number(clip.pause_at) || 0;
    const isPausedAfterStart = video.paused && (session.clipUnlocked || Number(video.currentTime) > 0);
    const playBtn = button(isPausedAfterStart ? '已暫停（點擊繼續）' : '播放實拍', 'button button-primary footage-play', () => {
      if (!video.paused) {
        try { video.pause?.(); } catch (_) { /* Ignore pause error. */ }
        playBtn.textContent = '已暫停（點擊繼續）';
        return;
      }
      if (session.choice === null && Number(video.currentTime) >= pauseAt) {
        session.clipUnlocked = false;
        statusText.textContent = `觀看實拍至 ${clip.pause_at} 秒處決策`;
        try { video.currentTime = 0; } catch (_) { /* Ignore seek error before load. */ }
      } else if (video.ended || Number(video.currentTime) >= Number(clip.duration || 0)) {
        try { video.currentTime = 0; } catch (_) { /* Ignore seek error. */ }
      }
      try {
        const result = video.play?.();
        playBtn.textContent = '播放實拍';
        if (result && typeof result.catch === 'function') {
          result.catch(() => unlockDecision());
        }
      } catch (_) {
        unlockDecision();
      }
    });

    function unlockDecision() {
      session.clipUnlocked = true;
      statusText.textContent = session.choice !== null ? '已作答，影片可播放至結束' : '⏸ 已暫停於決策點，請選擇下方行動';
      if (video.paused) playBtn.textContent = '已暫停（點擊繼續）';
      revealOptions();
    }

    if (video._onTimeUpdate) video.removeEventListener?.('timeupdate', video._onTimeUpdate);
    if (video._onError) video.removeEventListener?.('error', video._onError);
    if (video._onPlay) video.removeEventListener?.('play', video._onPlay);
    if (video._onPause) video.removeEventListener?.('pause', video._onPause);
    video._onTimeUpdate = () => {
      if (session.choice === null && !session.clipUnlocked && Number(video.currentTime) >= pauseAt) {
        try { video.pause?.(); } catch (_) { /* Ignore pause error. */ }
        unlockDecision();
      }
    };
    video._onError = () => {
      session.clipError = true;
      panel.hidden = true;
      unlockDecision();
    };
    video._onPlay = () => { playBtn.textContent = '播放實拍'; };
    video._onPause = () => { playBtn.textContent = '已暫停（點擊繼續）'; };
    video.addEventListener('timeupdate', video._onTimeUpdate);
    video.addEventListener('error', video._onError);
    video.addEventListener('play', video._onPlay);
    video.addEventListener('pause', video._onPause);

    const captionText = clip.caption && clip.caption.includes('實拍') ? clip.caption : `實拍：${clip.caption || ''}`;
    const controls = el('div', 'footage-controls');
    const skipBtn = button('跳過影片', 'button button-secondary footage-skip', () => {
      try { video.pause?.(); } catch (_) { /* Ignore pause error. */ }
      try { video.currentTime = pauseAt; } catch (_) { /* Ignore seek error. */ }
      unlockDecision();
    });
    controls.append(playBtn, skipBtn);
    panel.append(video, el('p', 'footage-caption', captionText), controls);
    return panel;
  }

  function renderStillPanel(stills) {
    const panel = el('div', 'footage-panel footage-still-panel');
    const head = el('div', 'footage-header');
    head.append(el('span', 'badge text-bg-primary badge-footage', '實拍'));
    if (stills.length > 1) {
      head.append(el('span', 'footage-status', `共 ${stills.length} 張實拍畫面`));
    }
    panel.append(head);

    const currentIdx = Math.min(stills.length - 1, Math.max(0, Number(session.stillIndex) || 0));
    const activeStill = stills[currentIdx];
    const formatCaption = (item) => (item.caption && item.caption.includes('實拍') ? item.caption : `實拍：${item.caption || ''}`);
    const img = el('img', 'footage-still-img');
    img.src = activeStill.file;
    img.alt = formatCaption(activeStill);
    img.addEventListener('error', () => { panel.hidden = true; });
    const captionNode = el('p', 'footage-caption', formatCaption(activeStill));
    panel.append(img, captionNode);

    if (stills.length > 1) {
      const strip = el('div', 'footage-strip');
      stills.forEach((stillItem, idx) => {
        const thumb = button(`實拍 ${idx + 1}`, `footage-thumb${idx === currentIdx ? ' footage-thumb-active' : ''}`, () => {
          session.stillIndex = idx;
          img.src = stillItem.file;
          img.alt = formatCaption(stillItem);
          captionNode.textContent = formatCaption(stillItem);
          strip.children.forEach((child, childIdx) => {
            child.className = `footage-thumb${childIdx === idx ? ' footage-thumb-active' : ''}`;
          });
        });
        strip.append(thumb);
      });
      panel.append(strip);
    }
    return panel;
  }

  function renderQuestionMedia(question) {
    const signs = Array.isArray(question.images && question.images.signs) ? question.images.signs : [];
    const photo = question.images && question.images.photo ? question.images.photo : null;
    if (!signs.length && !photo) return null;
    const box = el('div', 'question-media');
    for (const signItem of signs) {
      if (!signItem || !signItem.file) continue;
      const figure = el('figure', 'sign-figure');
      const img = el('img', 'sign-img');
      img.src = signItem.file;
      img.alt = signItem.caption || '';
      const meta = signImagesMeta.find((item) => signItem.file.endsWith(item.file));
      if (meta && meta.author) {
        img.title = `${signItem.caption || ''} (${meta.author}, ${meta.license})`;
      }
      img.addEventListener('error', () => { figure.hidden = true; });
      const cap = el('figcaption', 'sign-caption', signItem.caption || '');
      figure.append(img, cap);
      box.append(figure);
    }
    if (photo) {
      const photoFile = typeof photo === 'string' ? photo : photo.file;
      const photoCaption = (typeof photo === 'object' && photo.caption) ? photo.caption : (question.sign || '情境照片');
      if (photoFile) {
        const figure = el('figure', 'photo-figure');
        const img = el('img', 'photo-img');
        img.src = photoFile;
        img.alt = photoCaption;
        img.addEventListener('error', () => { figure.hidden = true; });
        const cap = el('figcaption', 'photo-caption', photoCaption);
        figure.append(img, cap);
        box.append(figure);
      }
    }
    return box;
  }

  function renderQuestion() {
    const question = currentQuestion();
    if (!question) return goHome();
    const stage = stages().find((item) => item.id === session.id);
    const section = el('section', 'question-layout');
    const header = el('div', 'question-header');
    const back = button('← 返回關卡', 'button button-text', goHome);
    header.append(back, el('span', 'question-count', `第 ${session.index + 1} / ${session.list.length} 題`));
    section.append(header);
    const progress = el('div', 'progress-track progress');
    const bar = el('div', 'progress-bar');
    bar.style.width = `${((session.index + 1) / session.list.length) * 100}%`;
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-valuemin', '1');
    progress.setAttribute('aria-valuemax', String(session.list.length));
    progress.setAttribute('aria-valuenow', String(session.index + 1));
    progress.setAttribute('aria-label', `第 ${session.index + 1} 題，共 ${session.list.length} 題`);
    progress.append(bar);
    section.append(progress);
    const card = el('article', 'question-card');
    card.append(el('p', 'eyebrow', `${session.id} · ${stage?.name || ''}`));
    const badges = el('div', 'badge-row');
    if (question.season && question.season !== '無') badges.append(el('span', `badge text-bg-info season-${question.season}`, question.season));
    badges.append(el('span', 'badge text-bg-secondary badge-tier', question.tier));
    card.append(badges);

    const options = el('div', 'options d-grid gap-2');
    const clip = session.clip;
    if (clip && !session.clipUnlocked && session.choice === null) {
      options.hidden = true;
    }
    if (clip) {
      card.append(renderClipPanel(clip, () => { options.hidden = false; }));
    }

    card.append(el('h1', 'situation', question.situation));
    if (question.sign) {
      const sign = el('div', 'sign-box');
      sign.append(el('span', 'sign-icon', '🚧'), el('span', '', `標誌：${question.sign}`));
      card.append(sign);
    }
    const mediaBox = renderQuestionMedia(question);
    if (mediaBox) card.append(mediaBox);

    if (!clip) {
      const stills = stillsForQuestion(question.id);
      if (stills.length > 0) {
        card.append(renderStillPanel(stills));
      }
    }

    options.append(el('p', 'eyebrow', '選擇你的行動'));
    question.options.slice(0, 4).forEach((option, index) => {
      let className = 'option btn btn-outline-primary';
      if (session.choice !== null && option.correct === true) className += ' option-correct';
      if (session.choice === index) className += option.correct === true ? ' option-chosen-correct' : ' option-chosen-wrong';
      const choice = button('', className, () => answer(index));
      choice.append(el('span', 'option-letter', String.fromCharCode(65 + index)), el('span', 'option-text', option.text));
      if (session.choice !== null) choice.disabled = true;
      options.append(choice);
    });
    card.append(options);
    if (session.retrying || (session.choice === null && firstAnswer(question))) {
      card.append(el('p', 'score-locked-note', '本題首次作答已記錄；重試不還分。'));
    }
    if (session.choice !== null) {
      card.append(renderFeedback(question, session.choice));
      const controls = el('div', 'question-actions');
      controls.append(button('重試此題 · 重試不還分', 'button button-secondary', () => {
        session.choice = null;
        session.retrying = true;
        prepareQuestion();
        render();
      }));
      controls.append(button('下一題 →', 'button button-primary', next));
      card.append(controls);
    }
    section.append(card);
    app.append(section);
  }

  function renderStageEnd() {
    if (!session) return goHome();
    const stage = stages().find((item) => item.id === session.id);
    const rate = accuracy(session.id) ?? 0;
    const score = stageScores()[session.id] ?? 0;
    const index = stages().findIndex((item) => item.id === session.id);
    const nextStage = stages()[index + 1];
    const section = el('section', 'end-card');
    section.append(el('p', 'eyebrow', '關卡完成'), el('h1', '', `${stage?.name || session.id} 完成！`));
    section.append(el('p', 'end-score', `${score} / 100`), el('p', 'end-caption', `本關得分（答對率 ${rate}%）`));
    if (nextStage) {
      section.append(el('p', 'end-message success', `下一關：${nextStage.name}`));
      section.append(button('前往下一關 →', 'button button-primary', () => openStage(nextStage.id)));
    }
    section.append(el('p', 'end-detail', '測驗重玩不會還分；若要重新計分，請在首頁重置進度。'));
    section.append(button('重玩本關', 'button button-secondary', () => openStage(session.id, true)));
    section.append(button('返回首頁', 'button button-ghost', goHome));
    app.append(section);
  }

  function renderResults() {
    const section = el('section', 'results');
    section.append(el('p', 'eyebrow', '成績總覽'), el('h1', 'page-title', '學習結果'),
      el('p', 'page-intro', '首次作答的結果會保留；回顧錯題並重新練習。'));
    addScoreboard(section);
    const lost = questions().filter((question) => firstAnswer(question)?.correct === false);
    const heading = el('div', 'section-heading results-heading');
    heading.append(el('div', '', undefined));
    heading.firstChild.append(el('p', 'eyebrow', '錯題回顧'), el('h2', 'section-title', `失分題目 · ${lost.length}`));
    section.append(heading);
    if (!lost.length) {
      section.append(el('div', 'empty-state', '目前沒有失分題目。'));
    } else {
      const list = el('div', 'lost-list');
      for (const question of lost) {
        const card = el('article', 'lost-card card');
        const top = el('div', 'lost-top');
        top.append(el('span', 'lost-id', question.id), el('strong', 'lost-points', `失去 ${Number(question.points) || 0} 分`));
        card.append(top, el('p', 'lost-situation', question.situation));
        const correct = question.options.filter((option) => option.correct === true).map((option) => option.text).join('／');
        card.append(el('p', 'lost-correct', `正確選項：${correct}`));
        sourceLinks(card, question.sources);
        list.append(card);
      }
      section.append(list);
    }
    section.append(button('← 返回首頁', 'button button-primary results-back', goHome));
    app.append(section);
  }

  function render() {
    app.replaceChildren();
    if (!data || !Array.isArray(data.levels) || !Array.isArray(data.questions)) {
      const error = el('section', 'end-card');
      error.append(el('h1', '', '題庫尚未載入'), el('p', '', '請在本資料夾執行 build-data.ps1 產生 data.js，然後重新開啟頁面。'));
      app.append(error);
      return;
    }
    if (screen === 'question') renderQuestion();
    else if (screen === 'stage-end') renderStageEnd();
    else if (screen === 'results') renderResults();
    else renderHome();
  }

  homeButton.addEventListener('click', goHome);
  window.__quiz = { reset, state, openStage, answer, next, currentQuestion, optionsRule, signImages: signImagesMeta, verificationInfo };
  render();
})();
