window.LEVELS = {
  "title": "日本自駕情境教學遊戲：關卡設計",
  "version": "v3c",
  "updated": "2026-10-24",
  "scoring": {
    "rule": "每個關卡（B1–B8）總分 100；按重要性分 A/B/C 權重 3/2/1 依比例分配（最大餘數法取整）；待確認題 0 分。第一次答錯即扣該題分數，重試不還分，每題最低 0。",
    "rubric": {
      "A": {
        "weight": 3,
        "desc": "致命或刑事風險：酒駕、平交道、行人、止まれ、逆向／左側通行、紅黃燈、高速倒車、冠水、一氧化碳、兒童留車、安全帶"
      },
      "B": {
        "weight": 2,
        "desc": "罰款、扣點或事故風險：一般交通規則、高速與雪地操作、事故處理"
      },
      "C": {
        "weight": 1,
        "desc": "程序、禮儀、租車手續：證件、ETC、繳罰款、NOC、還車"
      }
    }
  },
  "options_rule": "每題恰 4 個選項、恰 1 個正確（建置時 assert）。JSON 內選項已用題號 SHA-256 為種子固定打亂；shuffle_options=true 時遊戲每次顯示再隨機打亂一次，correct_index 只對應 JSON 內的順序。",
  "sign_images": [
    {
      "file": "jp_330A_tomare.svg",
      "caption": "止まれ（一時停止）",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_330-A.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B2-01"
      ]
    },
    {
      "file": "jp_407A_crosswalk.svg",
      "caption": "横断歩道",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_407-A.svg",
      "author": "Fry1989 eh?",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B2-04",
        "B2-14"
      ]
    },
    {
      "file": "jp_311C_straight_only.svg",
      "caption": "指定方向外進行禁止（直進のみ）",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_311-C.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B2-09"
      ]
    },
    {
      "file": "jp_313_no_uturn.svg",
      "caption": "転回禁止",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_313.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B2-15"
      ]
    },
    {
      "file": "jp_327-4_bus_lane.svg",
      "caption": "専用通行帯（バス専用）",
      "source": "https://commons.wikimedia.org/wiki/File:Japanese_road_sign_327-4.svg",
      "author": "Monaneko (talk)",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B2-17"
      ]
    },
    {
      "file": "jp_214-2_deer.svg",
      "caption": "動物が飛び出すおそれあり（鹿）",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_214-2.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B3-09",
        "B3-10"
      ]
    },
    {
      "file": "jp_207B_level_crossing.svg",
      "caption": "踏切あり",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_207-B.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B3-01",
        "B3-02",
        "B3-07"
      ]
    },
    {
      "file": "jp_323_speed30.svg",
      "caption": "最高速度 30",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_323_(30).svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B3-05"
      ]
    },
    {
      "file": "photo_zone30_marking.jpg",
      "caption": "ゾーン30 路面標示（實拍）",
      "source": "https://commons.wikimedia.org/wiki/File:Zone_30_on_the_road_surface.jpg",
      "author": "運動会プロテインパワー",
      "license": "CC BY-SA 4.0",
      "license_note": "需標示作者與授權，改作須以相同授權釋出",
      "questions": [
        "B3-05"
      ]
    },
    {
      "file": "jp_323_speed80.svg",
      "caption": "最高速度 80（示意）",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_323_(80).svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B4-05"
      ]
    },
    {
      "file": "jp_316_no_parking.svg",
      "caption": "駐車禁止",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_316.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B5-01",
        "B5-04"
      ]
    },
    {
      "file": "jp_315_no_stopping.svg",
      "caption": "駐停車禁止",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_315.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B5-04"
      ]
    },
    {
      "file": "jp_310-3_chains_required.svg",
      "caption": "タイヤチェーンを取り付けていない車両通行止め",
      "source": "https://commons.wikimedia.org/wiki/File:Japan_road_sign_310-3.svg",
      "author": "Monaneko",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B8-03"
      ]
    },
    {
      "file": "wakaba_mark.svg",
      "caption": "初心者マーク（若葉マーク）",
      "source": "https://commons.wikimedia.org/wiki/File:Wakaba_mark.svg",
      "author": "Eiim",
      "license": "CC BY-SA 3.0",
      "license_note": "需標示作者與授權，改作須以相同授權釋出",
      "questions": [
        "B2-11"
      ]
    },
    {
      "file": "photo_etc_lane_sign.jpg",
      "caption": "ETC 車道指示牌（橫濱，實拍）",
      "source": "https://commons.wikimedia.org/wiki/File:Sign_showing_lanes_with_ETC_system.jpg",
      "author": "Nikm",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B4-01",
        "B4-02"
      ]
    },
    {
      "file": "anim_signal_right_arrow.gif",
      "caption": "紅燈＋綠色右箭頭（動畫）",
      "source": "https://commons.wikimedia.org/wiki/File:Japanese_traffic_light_at_normal_cycle_and_right_arrow_1.gif",
      "author": "JEXP",
      "license": "Public domain",
      "license_note": "公有領域",
      "questions": [
        "B2-13"
      ]
    },
    {
      "file": "photo_signal_red_right_arrow.jpg",
      "caption": "紅燈＋右箭頭號誌（大津，實拍）",
      "source": "https://commons.wikimedia.org/wiki/File:Traffic_signal_-_red_and_right_arrow,_Otsu_2024-01.jpg",
      "author": "運動会プロテインパワー",
      "license": "CC BY-SA 4.0",
      "license_note": "需標示作者與授權，改作須以相同授權釋出",
      "questions": [
        "B2-13"
      ]
    },
    {
      "file": "photo_flashing_signal.jpg",
      "caption": "閃爍號誌（京都，實拍）",
      "source": "https://commons.wikimedia.org/wiki/File:One_light_Flashing_system_Traffic_Signals.JPG",
      "author": "Kamigata0",
      "license": "CC BY-SA 4.0",
      "license_note": "需標示作者與授權，改作須以相同授權釋出",
      "questions": [
        "B2-12"
      ]
    }
  ],
  "structure": "單一關卡序列 B1–B8，全部開放可自由挑選；四季題目已併入各關，season 欄位（春/夏/秋/冬/無）只用於顯示徽章",
  "id_map": {
    "SP-01": "B5-05",
    "SP-02": "B4-06",
    "SP-03": "B8-01",
    "SU-01": "B2-17",
    "SU-02": "B4-07",
    "SU-03": "B3-08",
    "SU-04": "B5-06",
    "AU-01": "B2-18",
    "AU-02": "B3-09",
    "AU-03": "B3-10",
    "WI-01": "B8-02",
    "WI-02": "B8-03",
    "WI-03": "B8-04",
    "WI-04": "B8-05",
    "WI-05": "B8-06",
    "WI-06": "B8-07",
    "WI-07": "B8-08"
  },
  "levels": [
    {
      "id": "B1",
      "name": "取車出發",
      "setting": "任一機場或車站旁的租車店",
      "cover": "assets/b1/cover.jpg"
    },
    {
      "id": "B2",
      "name": "市區路口",
      "setting": "東京、大阪、福岡等市區",
      "cover": "assets/b2/cover.jpg"
    },
    {
      "id": "B3",
      "name": "鄉道與平交道",
      "setting": "地方鄉道、山區單線道",
      "cover": "assets/b3/cover.jpg"
    },
    {
      "id": "B4",
      "name": "高速公路",
      "setting": "各地高速公路與收費站",
      "cover": "assets/b4/cover.jpg"
    },
    {
      "id": "B5",
      "name": "停車與罰單",
      "setting": "觀光地市區",
      "cover": "assets/b5/cover.jpg"
    },
    {
      "id": "B6",
      "name": "事故與補償",
      "setting": "旅途中任一處",
      "cover": "assets/b6/cover.jpg"
    },
    {
      "id": "B7",
      "name": "還車",
      "setting": "回到租車店",
      "cover": "assets/b7/cover.jpg"
    },
    {
      "id": "B8",
      "name": "天候與雪地",
      "setting": "北陸、東北、北海道的雪地與山區；春季山區殘雪",
      "cover": "assets/b8/cover.png"
    }
  ],
  "sources": {
    "egov": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "egov_rei": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "npa_leaf": "https://www.npa.go.jp/policies/application/license_renewal/pdf/china_leaflet_web_ver2.pdf",
    "npa_cross": "https://www.npa.go.jp/bureau/traffic/oudanhodou/info.html",
    "npa_keitai": "https://www.npa.go.jp/bureau/traffic/keitai/info.html",
    "mpd_fine": "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html",
    "kanagawa": "https://www.police.pref.kanagawa.jp/kotsu/kotsu_ihan/mesf2006.html",
    "jaf_cross": "https://jaf.or.jp/common/kuruma-qa/category-drive/subcategory-safety/faq291",
    "jaf_rail": "https://jaf.or.jp/common/kuruma-qa/category-accident/subcategory-rule/faq118",
    "jaf_escape": "https://jaf.or.jp/common/safety-drive/car-learning/self-check/troubleshooting/escape",
    "cnexco_snow": "https://www.c-nexco.co.jp/special/snow/point.html",
    "wnexco_etc": "https://www.w-nexco.co.jp/etc/etc-only/",
    "mlit_chain": "https://www.mlit.go.jp/road/bosai/fuyumichi/tirechains.html",
    "mlit_takayama": "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html",
    "tottori": "https://www.pref.tottori.lg.jp/item/1415434.htm",
    "t_license": "https://www.timescar-rental.com/zh_tw/japan/license.html",
    "t_etc": "https://www.timescar-rental.com/zh_tw/japan/etc.html",
    "t_rules": "https://www.timescar-rental.com/zh_tw/japan/rules.html",
    "t_snow": "https://www.timescar-rental.com/zh_tw/japan/snowdrive.html",
    "t_stop": "https://www.timescar-rental.com/zh_tw/japan/stop.html",
    "t_trouble": "https://www.timescar-rental.com/zh_tw/help/trouble.html",
    "t_faq": "https://www.timescar-rental.com/zh_tw/faq/",
    "budget": "https://www.budgetrentacar.co.jp/files/rental_zh_sp_ari.pdf",
    "toyota_ins": "https://rent.toyota.co.jp/static/service/insurance/",
    "toyota_jiko": "https://rent.toyota.co.jp/static/guide/irregular/index.html",
    "toyota_etc": "https://rent.toyota.co.jp/static/service/option/etc.html",
    "nippon_guide": "https://www.nipponrentacar.co.jp/guide/userguide.html",
    "nippon_eco": "https://www.nipponrentacar.co.jp/car_price/coverageoption.html",
    "nippon_etc": "https://www.nipponrentacar.co.jp/service/etc/",
    "orix_ins": "https://car.orix.co.jp/userguide/insurance.html",
    "mpd_mark": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/mark/mark.html",
    "npa_hakubo": "https://www.npa.go.jp/bureau/traffic/anzen/hakubo.html",
    "hok_deer": "https://www.pref.hokkaido.lg.jp/ks/skn/est/ht/traffic_accident.html",
    "hkd_deer": "https://www.hkd.mlit.go.jp/ab/douro_keikaku/v6dkjr0000003r6j.html",
    "oki_bus": "https://www.police.pref.okinawa.jp/docs/2015030300110/",
    "oki_bus_pdf": "https://www.police.pref.okinawa.jp/docs/2015030300110/file_contents/R07_.pdf",
    "jaf_summer": "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/summer",
    "jaf_spring": "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/spring",
    "jaf_heat2023": "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/comparison",
    "mlit_flood": "https://www.mlit.go.jp/jidosha/carinf/rcl/carsafety_sub/carsafety033.html",
    "wnexco_rain": "https://corp.w-nexco.co.jp/corporate/release/hq/h30/0626a/",
    "enexco_rain": "https://www.e-nexco.co.jp/news/important_info/2025/0612/00015029.html",
    "npa_signal": "https://www.npa.go.jp/bureau/traffic/seibi2/kisei/traffic-light/traffic-light_english.pdf",
    "npa_seikatsu": "https://www.npa.go.jp/bureau/traffic/seikatsudouro/seikatsudoro.html",
    "npa_bike": "https://www.npa.go.jp/bureau/traffic/bicycle/202603.pdf",
    "egov_api": "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json",
    "egov_rei_api": "https://laws.e-gov.go.jp/api/2/law_data/335CO0000000270?response_format=json",
    "tw_rule": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040013"
  },
  "questions": [
    {
      "id": "B1-01",
      "stage": "B1",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "你持台灣駕照到日本租車店取車，店員請你出示證件。",
      "sign": null,
      "options": [
        {
          "text": "台灣駕照正本＋日文譯本＋護照",
          "correct": true,
          "consequence": "順利取車",
          "explanation": "台灣駕照須附政令指定機關（台灣日本關係協會、JAF 等）製作的日文譯本才可在日本駕駛（道路交通法第107條之2）。"
        },
        {
          "text": "只帶台灣駕照，用手機翻譯",
          "correct": false,
          "consequence": "無法租車",
          "explanation": "沒有指定機關的譯本，不能在日本駕駛。"
        },
        {
          "text": "國際駕照（IDP）就好",
          "correct": false,
          "consequence": "無法租車",
          "explanation": "台灣走「本國駕照＋日文譯本」制度，不是國際駕照制度（Times 中文說明頁）。"
        },
        {
          "text": "譯本上的地址跟駕照不一致",
          "correct": false,
          "consequence": "可能被拒（以 Times 為例明確會拒）",
          "explanation": "Times 明載：地址與駕照不完全一致時譯本不被接受。其他公司是否同樣嚴格，以各公司規定為準。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.timescar-rental.com/zh_tw/japan/license.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 9,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B1-01.jpg"
      }
    },
    {
      "id": "B1-02",
      "stage": "B1",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "你入境時走了自動通關閘門，護照上沒有入境章。",
      "sign": null,
      "options": [
        {
          "text": "只要駕照譯本在有效期內，入境日不重要",
          "correct": false,
          "consequence": "可能無法租車",
          "explanation": "譯本制度只在入境後 1 年內有效（第107條之2），所以要證明入境日。"
        },
        {
          "text": "到租車店再說，給店員看機票",
          "correct": false,
          "consequence": "可能無法租車（Times 明載會拒）",
          "explanation": "Times 以入境章或上陸許可貼紙確認入境日。"
        },
        {
          "text": "入境時就請審查人員蓋章（或貼上陸許可貼紙）",
          "correct": true,
          "consequence": "可證明入境日",
          "explanation": "駕照＋譯本只在入境後 1 年內有效（第107條之2），租車店需確認入境日。"
        },
        {
          "text": "在入境時拍一張機票截圖就夠了",
          "correct": false,
          "consequence": "可能無法租車",
          "explanation": "Times 以入境章或上陸許可貼紙確認入境日，機票不在列。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.timescar-rental.com/zh_tw/japan/license.html"
      ],
      "verification": "已查證",
      "note": "Times 有明文；其他公司對自動閘門旅客的處理方式待各自確認。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 9,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B1-02.jpg"
      }
    },
    {
      "id": "B1-03",
      "stage": "B1",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "店員問要不要租 ETC 卡。你打算走高速公路。",
      "sign": null,
      "options": [
        {
          "text": "向租車公司租 ETC 卡，還車時結算過路費",
          "correct": true,
          "consequence": "高速收費站順暢",
          "explanation": "ETC 卡只發給日本居民；Times、Toyota、Nippon 都有出租 ETC 卡（部分店舗不提供）。不租也可以走「一般」車道付現（Times），只是要排隊。"
        },
        {
          "text": "不租，開進「ETC専用」車道，到閘門再付現",
          "correct": false,
          "consequence": "閘門不開，只能等人員處理",
          "explanation": "Times：沒有 ETC 卡時要走「一般」車道；「ETC専用」車道沒有收費員。"
        },
        {
          "text": "把台灣信用卡插進 ETC 機",
          "correct": false,
          "consequence": "閘門不開",
          "explanation": "Times：插信用卡無法通過 ETC 車道。"
        },
        {
          "text": "拿台灣的 ETC 電子標籤卡試試看",
          "correct": false,
          "consequence": "閘門不開",
          "explanation": "ETC 卡只發給日本居民；外國卡無法用於日本 ETC（Times）。"
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/japan/etc.html",
        "https://rent.toyota.co.jp/static/service/option/etc.html",
        "https://www.nipponrentacar.co.jp/service/etc/"
      ],
      "verification": "已查證",
      "note": "各公司價格不同：Times 每次 300 日圓＋稅（官方頁已核對）。Toyota 每次 550 日圓（含稅）、Nippon 7 日內 330 日圓（含稅）只見於搜尋摘要，官方頁為動態內容未能直接核對，標待確認。Orix 的 ETC 頁本次 404。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 9,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B1-03.jpg"
      }
    },
    {
      "id": "B1-04",
      "stage": "B1",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "從租車店開出來，你要右轉上雙向道路。",
      "sign": null,
      "options": [
        {
          "text": "先開在右側，等看到對向車再換到左邊",
          "correct": false,
          "consequence": "與對向車正面相遇",
          "explanation": "日本靠左行駛（第17條第4項）。"
        },
        {
          "text": "右轉大彎，進入遠側的左側車道",
          "correct": true,
          "consequence": "順利上路",
          "explanation": "日本靠左行駛（道路交通法第17條第4項；警察廳宣導單）。"
        },
        {
          "text": "右轉小彎，切進最近的車道",
          "correct": false,
          "consequence": "逆向，被按喇叭",
          "explanation": "最近的那條是對向車道。"
        },
        {
          "text": "跟著前車走就好，不用管左右",
          "correct": false,
          "consequence": "前車轉彎後你仍可能進錯車道",
          "explanation": "日本靠左行駛（第17條第4項）；要自己確認行駛位置。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.npa.go.jp/policies/application/license_renewal/pdf/china_leaflet_web_ver2.pdf",
        "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040013"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）",
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": "台灣：無分向線的道路「應靠右行駛」（道路交通安全規則第95條）。日本相反，靠左。右轉在日本是「大轉彎、跨越對向」，相當於台灣的左轉。",
      "weight": "A",
      "points": 28,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B1-04.jpg",
        "footage": [
          "footage/samples/GH014743_t0000.4.jpg",
          "footage/samples/GH014750_t0362.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014686_t0029.1.jpg"
        ]
      }
    },
    {
      "id": "B1-05",
      "stage": "B1",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "第一個路口要右轉，你伸手打方向燈，結果雨刷動了。",
      "sign": null,
      "options": [
        {
          "text": "不打燈直接轉",
          "correct": false,
          "consequence": "被攔下：合図不履行，普通車反則金 6,000 日圓",
          "explanation": ""
        },
        {
          "text": "低頭找撥桿",
          "correct": false,
          "consequence": "分心偏出車道",
          "explanation": "第70條安全駕駛義務。"
        },
        {
          "text": "先轉了再補打燈",
          "correct": false,
          "consequence": "轉彎時未事先打燈",
          "explanation": "第53條：要在轉彎前打方向燈。"
        },
        {
          "text": "穩住方向，改用另一側撥桿確實打燈後再轉",
          "correct": true,
          "consequence": "安全轉彎",
          "explanation": "第53條：右左轉、變換車道須打方向燈。撥桿位置依車型不同，出發前先試。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": "「撥桿在右側」只是多數日本車的情況，不當作規則。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 18,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B1-05.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014692_t0054.2.jpg",
          "footage_haneda_okayama/samples/haneda_GH014717_t0065.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014718_t0036.6.jpg"
        ]
      }
    },
    {
      "id": "B1-06",
      "stage": "B1",
      "season": "無",
      "tier": "初級",
      "topic": "安全帶",
      "situation": "全家四人上車：你、配偶、後座一位大人和一個 4 歲小孩。",
      "sign": null,
      "options": [
        {
          "text": "全部座位都繫安全帶，4 歲孩子用兒童座椅（取車時向租車公司預約）",
          "correct": true,
          "consequence": "安全",
          "explanation": "第71條之3：駕駛人須讓前後座乘客都繫安全帶；未滿 6 歲的幼兒須使用兒童座椅（幼兒定義見第14條第3項）。"
        },
        {
          "text": "小孩抱在大人腿上",
          "correct": false,
          "consequence": "急煞時孩子飛出",
          "explanation": ""
        },
        {
          "text": "只有前座要繫，後座看個人",
          "correct": false,
          "consequence": "急煞時後座乘客受傷；駕駛人違規",
          "explanation": "第71條之3 也包括後座。"
        },
        {
          "text": "後座不用繫",
          "correct": false,
          "consequence": "急煞時後座乘客受傷；駕駛人違規",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": "「向租車公司預約兒童座椅」為建議；各公司費用未核對。",
      "research_id": null,
      "inspired_by": [
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）",
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）",
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 27,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B1-06.jpg",
        "footage": [
          "footage_haneda_okayama/samples/okayama_GH014702_t0030.9.jpg"
        ]
      }
    },
    {
      "id": "B2-01",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "大阪住宅區小路口，倒三角牌寫「止まれ」，左右看起來沒車。",
      "sign": "紅色倒三角「止まれ」",
      "options": [
        {
          "text": "只要停止線附近沒有行人，就可以不停",
          "correct": false,
          "consequence": "被側邊來車撞上",
          "explanation": "第43條：有止まれ標誌就要在停止線前停車，與有沒有行人無關。"
        },
        {
          "text": "停止線前完全停車，左右確認再起步",
          "correct": true,
          "consequence": "安全通過",
          "explanation": "第43條；警察廳宣導單：看到此標誌要徹底停車。"
        },
        {
          "text": "慢慢滑過去",
          "correct": false,
          "consequence": "被攔下：指定場所一時不停止等，普通車反則金 7,000 日圓、2 點",
          "explanation": ""
        },
        {
          "text": "沒車照速通過",
          "correct": false,
          "consequence": "被側邊來車撞上",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.npa.go.jp/policies/application/license_renewal/pdf/china_leaflet_web_ver2.pdf",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）",
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_330A_tomare.svg",
            "caption": "止まれ（一時停止）"
          }
        ],
        "photo": "assets/scenarios/B2-01.jpg",
        "footage": [
          "footage_haneda_okayama/samples/okayama_GH014694_t0005.8.jpg",
          "footage_haneda_okayama/samples/okayama_GH014690_t0010.1.jpg",
          "footage_haneda_okayama/samples/okayama_GH014692_t0008.6.jpg"
        ]
      }
    },
    {
      "id": "B2-02",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "東京市區綠燈，你要右轉，對向有直行車。",
      "sign": null,
      "options": [
        {
          "text": "小彎切過去",
          "correct": false,
          "consequence": "切入對向車道",
          "explanation": ""
        },
        {
          "text": "綠燈就搶轉",
          "correct": false,
          "consequence": "與直行車擦撞",
          "explanation": ""
        },
        {
          "text": "進到路口中央等，讓直行車與行人先過",
          "correct": true,
          "consequence": "安全右轉",
          "explanation": "第37條：右轉不得妨礙直行、左轉車；第34條第2項：沿路口中心內側右轉。"
        },
        {
          "text": "對向車還遠，先慢慢切進去，讓它減速",
          "correct": false,
          "consequence": "與直行車擦撞",
          "explanation": "第37條：右轉車不得妨礙直行車。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.npa.go.jp/policies/application/license_renewal/pdf/china_leaflet_web_ver2.pdf"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）",
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 5,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-02.jpg"
      }
    },
    {
      "id": "B2-03",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "福岡市區要左轉，左後方有自行車，斑馬線上有人。",
      "sign": null,
      "options": [
        {
          "text": "只看右邊就轉",
          "correct": false,
          "consequence": "捲入自行車",
          "explanation": ""
        },
        {
          "text": "按喇叭叫自行車停",
          "correct": false,
          "consequence": "沒有讓行，捲入風險仍在",
          "explanation": "左轉時要讓自行車與行人先過；按喇叭不能取代讓行。"
        },
        {
          "text": "看左後方，讓自行車與行人先過，靠左慢慢轉",
          "correct": true,
          "consequence": "安全",
          "explanation": "第34條第1項、第38條。"
        },
        {
          "text": "斑馬線上的人走得慢，從他後面繞過去",
          "correct": false,
          "consequence": "行人被迫停下，可能被擦撞",
          "explanation": "第38條：有人正在穿越時要停車讓行。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.npa.go.jp/bureau/traffic/oudanhodou/info.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-03.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014691_t0000.8.jpg",
          "footage_haneda_okayama/samples/haneda_GH014713_t0008.0.jpg",
          "footage_haneda_okayama/samples/haneda_GH014727_t0019.9.jpg"
        ]
      }
    },
    {
      "id": "B2-04",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "無號誌斑馬線旁有位老人站著看你。",
      "sign": "路面菱形「◇」",
      "options": [
        {
          "text": "按喇叭",
          "correct": false,
          "consequence": "同上",
          "explanation": ""
        },
        {
          "text": "斑馬線前停車讓他過",
          "correct": true,
          "consequence": "安全",
          "explanation": "第38條：有人正要穿越時須停車讓行。"
        },
        {
          "text": "他還沒踏出來，先過",
          "correct": false,
          "consequence": "被攔下：橫斷步行者等妨害等，普通車反則金 9,000 日圓、2 點",
          "explanation": ""
        },
        {
          "text": "慢慢開近，看他會不會走出來",
          "correct": false,
          "consequence": "行人踏出時來不及停",
          "explanation": "第38條：要用能在斑馬線前停下的速度接近，有人要過就停。"
        }
      ],
      "sources": [
        "https://www.npa.go.jp/bureau/traffic/oudanhodou/info.html",
        "https://jaf.or.jp/common/kuruma-qa/category-drive/subcategory-safety/faq291",
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_407A_crosswalk.svg",
            "caption": "横断歩道"
          }
        ],
        "photo": "assets/scenarios/B2-04.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014685_t0008.7.jpg",
          "footage_haneda_okayama/samples/haneda_GH014707_t0015.5.jpg",
          "footage_haneda_okayama/samples/haneda_GH014741_t0030.8.jpg"
        ]
      }
    },
    {
      "id": "B2-05",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "深夜紅燈，你要左轉（日本的「靠邊轉」，相當於台灣的右轉），路上沒人沒車。",
      "sign": null,
      "options": [
        {
          "text": "慢慢滑過停止線再停下看",
          "correct": false,
          "consequence": "同上",
          "explanation": "越過停止位置即違反紅燈的意思。"
        },
        {
          "text": "停在停止線前，等綠燈或指向左方的綠色箭頭",
          "correct": true,
          "consequence": "安全",
          "explanation": "施行令第2條：紅燈不得越過停止位置；綠色箭頭亮時才可依箭頭方向前進（警察廳號誌說明）。日本沒有「紅燈可靠邊轉」的一般例外。"
        },
        {
          "text": "沒人就轉",
          "correct": false,
          "consequence": "被攔下：信號無視（赤色），普通車反則金 9,000 日圓",
          "explanation": ""
        },
        {
          "text": "閃一下大燈提醒，然後慢慢轉",
          "correct": false,
          "consequence": "同「沒人就轉」：越過停止位置",
          "explanation": "施行令第2條：紅燈不得越過停止位置。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335CO0000000270",
        "https://www.npa.go.jp/bureau/traffic/seibi2/kisei/traffic-light/traffic-light_english.pdf",
        "https://www.npa.go.jp/policies/application/license_renewal/pdf/china_leaflet_web_ver2.pdf",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）",
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）",
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "改寫：補「靠邊轉」說明與綠色箭頭例外（JAF 題目以「紅燈也不能左轉」為重點，表達比原題清楚）",
      "taiwan_vs_japan": "台灣的右轉，在日本是左轉（靠邊轉）；兩地都要遵守紅燈，日本沒有紅燈可左轉的一般例外。",
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-05.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014694_t0009.7.jpg",
          "footage_haneda_okayama/samples/okayama_GH014689_t0073.1.jpg",
          "footage/samples/GH014742_t0023.8.jpg"
        ]
      }
    },
    {
      "id": "B2-06",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "號誌剛轉黃，你離停止線還夠遠，後面沒有緊跟的車。",
      "sign": null,
      "options": [
        {
          "text": "停在停止線前",
          "correct": true,
          "consequence": "安全",
          "explanation": "施行令第2條、警察廳號誌說明：黃燈時，除非已無法在停止位置前安全停下，否則不得越過。"
        },
        {
          "text": "按喇叭提醒行人後通過",
          "correct": false,
          "consequence": "同「加速通過」",
          "explanation": "施行令第2條：能安全停下就要停；喇叭不改變號誌。"
        },
        {
          "text": "黃燈還能走，加速通過",
          "correct": false,
          "consequence": "遊戲判定為違反號誌：普通車反則金 9,000 日圓",
          "explanation": "黃燈不是「加速」的意思；能安全停就要停。"
        },
        {
          "text": "已經快壓到停止線、急煞會被追撞時，就順勢通過",
          "correct": false,
          "consequence": "（本情境不適用）",
          "explanation": "這是黃燈的例外情況，但本題你離停止線還很遠。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335CO0000000270",
        "https://www.npa.go.jp/bureau/traffic/seibi2/kisei/traffic-light/traffic-light_english.pdf",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "改寫：加入「無法安全停下」的例外作為對照選項，區分何時該停",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-06.jpg",
        "footage": [
          "footage/samples/GH014745_t0003.0.jpg",
          "footage/samples/GH014751_t0169.2.jpg",
          "footage_haneda_okayama/samples/haneda_GH014689_t0131.5.jpg"
        ]
      }
    },
    {
      "id": "B2-07",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "三線道路口，你在直行車道才發現要右轉，地上畫著直行箭頭。",
      "sign": "路面白色箭頭",
      "options": [
        {
          "text": "先停在路口內等直行車流斷了再右轉",
          "correct": false,
          "consequence": "擋住後車與橫向車",
          "explanation": "第35條：依路面指定的行進方向行駛。"
        },
        {
          "text": "倒車回到右轉車道",
          "correct": false,
          "consequence": "與後車碰撞",
          "explanation": "第35條；在路口附近倒車會妨礙後車（第25條之2）。"
        },
        {
          "text": "照箭頭直行，之後繞回",
          "correct": true,
          "consequence": "安全",
          "explanation": "第35條：依指定通行區分行駛。"
        },
        {
          "text": "硬切右轉",
          "correct": false,
          "consequence": "被攔下：指定通行區分違反，普通車反則金 6,000 日圓",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 5,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-07.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014688_t0007.8.jpg",
          "footage_haneda_okayama/samples/haneda_GH014710_t0006.0.jpg",
          "footage/samples/GH014776_t0008.1.jpg"
        ]
      }
    },
    {
      "id": "B2-08",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "同向兩車道中間是黃色實線，導航說前方要右轉。",
      "sign": null,
      "options": [
        {
          "text": "打方向燈就可以跨過黃線",
          "correct": false,
          "consequence": "違反第26條之2第3項",
          "explanation": "打方向燈不改變禁止變換車道的標線。"
        },
        {
          "text": "等前車都過了，沒有車時再壓線",
          "correct": false,
          "consequence": "同上",
          "explanation": "禁止變換車道與有沒有車無關。"
        },
        {
          "text": "壓線切過去",
          "correct": false,
          "consequence": "被攔下：進路變更禁止違反，普通車反則金 6,000 日圓",
          "explanation": ""
        },
        {
          "text": "維持車道，錯過就繞路",
          "correct": true,
          "consequence": "安全",
          "explanation": "第26條之2第3項：不得越過禁止變換車道的標線。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": "「黃色實線＝禁止變換車道」的圖樣定義在道路標識令，本次未直接開啟。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 5,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-08.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014694_t0021.4.jpg",
          "footage_haneda_okayama/samples/haneda_GH014695_t0015.9.jpg",
          "footage_haneda_okayama/samples/haneda_GH014700_t0037.9.jpg"
        ]
      }
    },
    {
      "id": "B2-09",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "導航叫你右轉，但路口有藍底白箭頭「只能直行」標誌。",
      "sign": "藍色圓形白箭頭",
      "options": [
        {
          "text": "沒有警察就右轉",
          "correct": false,
          "consequence": "同上",
          "explanation": "標誌規定不因有沒有警察而改變。"
        },
        {
          "text": "照標誌直行",
          "correct": true,
          "consequence": "安全",
          "explanation": "警察廳宣導單：遇「指定方向外進行禁止」只能照箭頭方向。"
        },
        {
          "text": "照導航右轉",
          "correct": false,
          "consequence": "被攔下開單（金額依違規種類，看單據）",
          "explanation": "標誌優先於導航。"
        },
        {
          "text": "先右轉，被攔到再說明導航叫你轉",
          "correct": false,
          "consequence": "違規通行",
          "explanation": "警察廳宣導單：只能照箭頭方向；標誌優先於導航。"
        }
      ],
      "sources": [
        "https://www.npa.go.jp/policies/application/license_renewal/pdf/china_leaflet_web_ver2.pdf"
      ],
      "verification": "已查證",
      "note": "新聞中的 7,000 日圓未查到對應違規種類，不寫金額。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 4,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_311C_straight_only.svg",
            "caption": "指定方向外進行禁止（直進のみ）"
          }
        ],
        "photo": "assets/scenarios/B2-09.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014694_t0005.8.jpg",
          "footage_haneda_okayama/samples/haneda_GH014697_t0002.0.jpg",
          "footage_haneda_okayama/samples/haneda_GH014725_t0011.8.jpg"
        ]
      }
    },
    {
      "id": "B2-10",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "導航改路線，你想邊開邊用手機調整。",
      "sign": null,
      "options": [
        {
          "text": "手機放支架邊開邊點",
          "correct": false,
          "consequence": "追撞前車",
          "explanation": "注視畫面也在禁止範圍（警察廳）。"
        },
        {
          "text": "停到安全合法處再操作",
          "correct": true,
          "consequence": "安全",
          "explanation": "第71條第5款之5：行駛中禁止手持通話與注視畫面。"
        },
        {
          "text": "手拿手機看",
          "correct": false,
          "consequence": "被攔下：携帯電話使用等（保持），普通車反則金 18,000 日圓、3 點",
          "explanation": ""
        },
        {
          "text": "紅燈停車時快速點一下",
          "correct": false,
          "consequence": "綠燈起步時仍在看手機，起步慢或追撞",
          "explanation": "第71條第5款之5 只排除「停止中」；實際上號誌隨時會變，安全做法仍是停到路邊。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.npa.go.jp/bureau/traffic/keitai/info.html",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": "兩地都禁止開車時手持手機；日本也明定禁止注視車內畫面（第71條第5款之5）。",
      "weight": "B",
      "points": 4,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-10.jpg",
        "footage": [
          "footage_haneda_okayama/samples/okayama_GH014693_t0001.9.jpg",
          "footage_haneda_okayama/samples/okayama_GH014690_t0008.2.jpg",
          "footage_haneda_okayama/samples/haneda_GH014736_t0001.0.jpg"
        ]
      }
    },
    {
      "id": "B2-11",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "前方車子貼著綠黃色「初心者マーク」，開得很慢，你想從它前面切入。",
      "sign": "綠黃色箭羽形「初心者マーク」",
      "options": [
        {
          "text": "按喇叭催它",
          "correct": false,
          "consequence": "對方驚慌、反應更慢",
          "explanation": "警視廳：對初心者標誌車要保護，不可做出妨礙其安全的行為。"
        },
        {
          "text": "保持距離，不要幅寄せ或硬切",
          "correct": true,
          "consequence": "安全",
          "explanation": "警視廳：對貼初心者等標誌的車幅寄せ，或做出使其無法保持車距的變換車道，屬道路交通法違反。"
        },
        {
          "text": "硬切到它前面",
          "correct": false,
          "consequence": "被攔下：初心運転者等保護義務違反，普通車反則金 6,000 日圓、1 點",
          "explanation": ""
        },
        {
          "text": "貼近它的車尾，逼它讓開",
          "correct": false,
          "consequence": "違反初心運転者等保護義務",
          "explanation": "警視廳：使其無法保持車距的行為屬違反。"
        }
      ],
      "sources": [
        "https://www.keishicho.metro.tokyo.lg.jp/kotsu/mark/mark.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 4,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/wakaba_mark.svg",
            "caption": "初心者マーク（若葉マーク）"
          }
        ],
        "photo": "assets/scenarios/B2-11.jpg",
        "footage": [
          "footage_haneda_okayama/samples/okayama_GH014693_t0001.9.jpg",
          "footage_haneda_okayama/samples/okayama_GH014702_t0053.3.jpg"
        ]
      }
    },
    {
      "id": "B2-12",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": "號誌",
      "situation": "深夜路口，你這邊的紅燈一閃一閃；過一個路口，換成黃燈一閃一閃。",
      "sign": "閃爍紅燈／閃爍黃燈",
      "options": [
        {
          "text": "閃紅燈也照閃黃燈的方式，減速通過",
          "correct": false,
          "consequence": "沒停車，與橫向來車碰撞",
          "explanation": "警察廳號誌說明：閃紅燈要停車。"
        },
        {
          "text": "閃紅燈：停止線前停車確認後再走；閃黃燈：注意其他交通、小心通過",
          "correct": true,
          "consequence": "安全",
          "explanation": "警察廳號誌說明：閃紅燈時車輛須在停止位置停車；閃黃燈時可注意其他交通後前進。"
        },
        {
          "text": "兩種都當成「小心通過」",
          "correct": false,
          "consequence": "在閃紅燈路口沒停，與橫向來車碰撞",
          "explanation": ""
        },
        {
          "text": "兩種都當成停電，隨意通過",
          "correct": false,
          "consequence": "同上",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.npa.go.jp/bureau/traffic/seibi2/kisei/traffic-light/traffic-light_english.pdf",
        "https://laws.e-gov.go.jp/law/335CO0000000270"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）",
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/photo_flashing_signal.jpg",
            "caption": "閃爍號誌（京都，實拍）"
          }
        ],
        "photo": "assets/scenarios/B2-12.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014716_t0002.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014741_t0040.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014739_t0000.9.jpg"
        ]
      }
    },
    {
      "id": "B2-13",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": "號誌",
      "situation": "紅燈下方亮起箭頭燈。第一個路口是「綠色右箭頭」，第二個路口（有路面電車）是「黃色箭頭」。",
      "sign": "紅燈＋綠色右箭頭；紅燈＋黃色箭頭",
      "options": [
        {
          "text": "箭頭都一樣，亮了就走",
          "correct": false,
          "consequence": "闖入路口，與路面電車衝突",
          "explanation": ""
        },
        {
          "text": "綠色右箭頭只能右轉，不可迴轉；黃色箭頭可以小心走",
          "correct": false,
          "consequence": "黃色箭頭時闖入路口",
          "explanation": "警察廳號誌說明：右箭頭也可迴轉；黃色箭頭只限路面電車。"
        },
        {
          "text": "紅燈亮著，綠色箭頭也不能走",
          "correct": false,
          "consequence": "擋住後方車流（不違規但不必要）",
          "explanation": ""
        },
        {
          "text": "綠色右箭頭可右轉（也可迴轉）；黃色箭頭是給路面電車的，汽車不能走",
          "correct": true,
          "consequence": "安全",
          "explanation": "警察廳號誌說明：綠色箭頭時，即使圓燈為紅或黃，車輛可依箭頭方向前進，右箭頭也可迴轉；黃色箭頭只有路面電車可依箭頭前進。"
        }
      ],
      "sources": [
        "https://www.npa.go.jp/bureau/traffic/seibi2/kisei/traffic-light/traffic-light_english.pdf"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）",
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [
          {
            "file": "assets/signs/anim_signal_right_arrow.gif",
            "caption": "紅燈＋綠色右箭頭（動畫）"
          },
          {
            "file": "assets/signs/photo_signal_red_right_arrow.jpg",
            "caption": "紅燈＋右箭頭號誌（大津，實拍）"
          }
        ],
        "photo": "assets/scenarios/B2-13.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014739_t0000.9.jpg"
        ]
      }
    },
    {
      "id": "B2-14",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": "行人",
      "situation": "雙線道，左邊車道的車停在斑馬線前。你在右邊車道，前面看起來沒人。",
      "sign": null,
      "options": [
        {
          "text": "按喇叭提醒，然後通過",
          "correct": false,
          "consequence": "撞上被停車擋住的行人",
          "explanation": "第38條第2項：要先暫停。"
        },
        {
          "text": "在斑馬線前先停一下，確認沒有行人再前進",
          "correct": true,
          "consequence": "安全",
          "explanation": "第38條第2項：斑馬線前有停住的車，要從它旁邊通過到前方時，必須先暫停；第38條第3項：斑馬線前 30 公尺內不得超越前車。"
        },
        {
          "text": "照速通過",
          "correct": false,
          "consequence": "撞上被停車擋住、正在過馬路的行人",
          "explanation": ""
        },
        {
          "text": "換到左邊車道，從停住的車後面再超過去",
          "correct": false,
          "consequence": "同樣在斑馬線附近超車",
          "explanation": "第38條第3項：斑馬線前 30 公尺內不得超越前車。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_407A_crosswalk.svg",
            "caption": "横断歩道"
          }
        ],
        "photo": "assets/scenarios/B2-14.jpg",
        "footage": [
          "footage_haneda_okayama/samples/okayama_GH014686_t0022.2.jpg",
          "footage_haneda_okayama/samples/okayama_GH014689_t0102.3.jpg",
          "footage_haneda_okayama/samples/okayama_GH014697_t0010.2.jpg"
        ]
      }
    },
    {
      "id": "B2-15",
      "stage": "B2",
      "season": "無",
      "tier": "中級",
      "topic": "迴轉",
      "situation": "你走過頭了，想在一般道路上迴轉回去。",
      "sign": "藍色圓形紅斜線「轉回禁止」",
      "options": [
        {
          "text": "只要打了方向燈就可以迴轉",
          "correct": false,
          "consequence": "妨礙對向或後方車輛",
          "explanation": "第25條之2：會妨礙正常交通時不得迴轉，打燈不改變。"
        },
        {
          "text": "沒有禁止迴轉標誌、也不會妨礙行人和其他車時，才迴轉；否則繞一圈",
          "correct": true,
          "consequence": "安全",
          "explanation": "第25條之2：會妨礙正常交通時不得迴轉；標誌禁止迴轉的路段不得迴轉。高速公路本線一律禁止迴轉（第75條之5）。"
        },
        {
          "text": "有禁止迴轉標誌，但沒車就轉",
          "correct": false,
          "consequence": "被攔下開單",
          "explanation": "第25條之2第2項。"
        },
        {
          "text": "對向有車，按燈硬轉",
          "correct": false,
          "consequence": "與對向車碰撞",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json",
        "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040013"
      ],
      "verification": "已查證",
      "note": "罰款金額本次未對到警視廳表的具體項目，不寫。",
      "research_id": null,
      "inspired_by": [
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）",
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": "台灣：迴車前要暫停並打左轉燈，禁止左轉的路段不得迴車（道路交通安全規則第106條）。日本：不妨礙交通、沒有禁止標誌才可迴轉，迴轉方向是往右。",
      "weight": "B",
      "points": 4,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_313_no_uturn.svg",
            "caption": "転回禁止"
          }
        ],
        "photo": "assets/scenarios/B2-15.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014688_t0002.6.jpg"
        ]
      }
    },
    {
      "id": "B2-16",
      "stage": "B2",
      "season": "無",
      "tier": "初級",
      "topic": "行人",
      "situation": "你要從大馬路左轉進便利商店停車場，中間隔著一段人行道。",
      "sign": null,
      "options": [
        {
          "text": "按喇叭讓行人知道你要進來",
          "correct": false,
          "consequence": "行人被迫讓車",
          "explanation": "第17條第2項：要暫停並且不妨礙行人。"
        },
        {
          "text": "進人行道前先停車，確認沒有行人再進",
          "correct": true,
          "consequence": "安全",
          "explanation": "第17條第2項：為進出路外設施須穿越人行道時，要在進入人行道前暫停，不得妨礙行人。"
        },
        {
          "text": "沒看到人就直接開進去",
          "correct": false,
          "consequence": "撞上從店裡走出來的行人",
          "explanation": ""
        },
        {
          "text": "放慢就好，不用停",
          "correct": false,
          "consequence": "撞上從店裡走出來的行人",
          "explanation": "第17條第2項規定的是「暫停」。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 7,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-16.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014740_t0046.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014741_t0021.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014694_t0013.6.jpg"
        ]
      }
    },
    {
      "id": "B2-17",
      "stage": "B2",
      "season": "夏",
      "tier": "中級",
      "topic": null,
      "situation": "平日早上 8 點，沖繩那霸國道 58 號，最左車道地上寫「バス専用」。",
      "sign": "藍底「専用」標誌＋路面「バス専用」",
      "options": [
        {
          "text": "沒有公車，進去開一下",
          "correct": false,
          "consequence": "被取締",
          "explanation": "屬違規通行；遊戲不寫金額。"
        },
        {
          "text": "跟著前面的計程車進去",
          "correct": false,
          "consequence": "同上",
          "explanation": "是否可以進入依車種與時段，不是看前車。"
        },
        {
          "text": "不進最左車道",
          "correct": true,
          "consequence": "安全",
          "explanation": "沖繩縣警：國道 58 號等在平日 7:30–9:00、17:30–19:00 實施巴士專用車道，一般車不得行駛（週六日、假日、1/2、1/3、颱風等巴士停駛時除外）。"
        },
        {
          "text": "只開一小段就切出來",
          "correct": false,
          "consequence": "同樣違規通行",
          "explanation": "沖繩縣警：時段內一般車不得行駛巴士專用車道。"
        }
      ],
      "sources": [
        "https://www.police.pref.okinawa.jp/docs/2015030300110/",
        "https://www.police.pref.okinawa.jp/docs/2015030300110/file_contents/R07_.pdf"
      ],
      "verification": "已查證",
      "note": "罰款金額本次未對到警視廳表的具體項目，不寫。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 4,
      "former_id": "SU-01",
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_327-4_bus_lane.svg",
            "caption": "専用通行帯（バス専用）"
          }
        ],
        "photo": "assets/scenarios/B2-17.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014730_t0002.4.jpg",
          "footage_haneda_okayama/samples/haneda_GH014733_t0002.7.jpg"
        ]
      }
    },
    {
      "id": "B2-18",
      "stage": "B2",
      "season": "秋",
      "tier": "初級",
      "topic": null,
      "situation": "11 月傍晚 4 點半，天色開始變暗。",
      "sign": null,
      "options": [
        {
          "text": "還看得見，先不開燈",
          "correct": false,
          "consequence": "晚發現橫越的行人",
          "explanation": ""
        },
        {
          "text": "提早開大燈，留意路邊行人",
          "correct": true,
          "consequence": "看得清、被看見",
          "explanation": "警察廳：日落前後 1 小時死亡事故多，駕駛人應提早開頭燈；行人事故多在橫越時。"
        },
        {
          "text": "開遠光燈就好，不用注意行人",
          "correct": false,
          "consequence": "對向與前車被炫目",
          "explanation": "警察廳：提早開燈並留意行人；遠光要視情況切換。"
        },
        {
          "text": "只開小燈（車寬燈）",
          "correct": false,
          "consequence": "行人看不清你的車",
          "explanation": "警察廳：日落前後要提早開頭燈。"
        }
      ],
      "sources": [
        "https://www.npa.go.jp/bureau/traffic/anzen/hakubo.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 2,
      "former_id": "AU-01",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B2-18.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014706_t0008.1.jpg",
          "footage_haneda_okayama/samples/haneda_GH014722_t0001.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014741_t0045.0.jpg"
        ]
      }
    },
    {
      "id": "B3-01",
      "stage": "B3",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "鄉道平交道，柵欄升起、警報沒響，前車直接開過去。",
      "sign": null,
      "options": [
        {
          "text": "跟前車開過去",
          "correct": false,
          "consequence": "被攔下：踏切不停止等，普通車反則金 9,000 日圓",
          "explanation": ""
        },
        {
          "text": "按喇叭後通過",
          "correct": false,
          "consequence": "同「跟前車開過去」",
          "explanation": "第33條第1項：要停車確認。"
        },
        {
          "text": "停止線前完全停車，開窗看、聽，確認對面有空間再通過",
          "correct": true,
          "consequence": "安全",
          "explanation": "第33條第1項：平交道前停車確認安全；第50條第2項：前方塞住、可能停在平交道內時不得進入。JAF 測驗也提醒開窗用眼與耳確認。"
        },
        {
          "text": "減速滑過",
          "correct": false,
          "consequence": "同上",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://jaf.or.jp/common/kuruma-qa/category-accident/subcategory-rule/faq118",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": "有交通號誌的平交道依號誌通行，可不停車（第33條但書）。",
      "research_id": null,
      "inspired_by": [
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）",
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）"
      ],
      "change": "補強：加入「開窗看、聽」與對面空間的法條",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 13,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_207B_level_crossing.svg",
            "caption": "踏切あり"
          }
        ],
        "photo": "assets/scenarios/B3-01.jpg",
        "footage": [
          "footage/samples/GH014769_t0000.5.jpg"
        ]
      }
    },
    {
      "id": "B3-02",
      "stage": "B3",
      "season": "無",
      "tier": "高級",
      "topic": null,
      "situation": "你在平交道中，警報響起、柵欄開始放下。",
      "sign": null,
      "options": [
        {
          "text": "留在車上打電話給租車公司",
          "correct": false,
          "consequence": "列車撞上車輛",
          "explanation": "JAF：車子動不了就立刻下車，按緊急按鈕；沒有就用發煙筒（第33條第3項）。"
        },
        {
          "text": "不停，慢慢往前把柵欄桿推開出去",
          "correct": true,
          "consequence": "脫困",
          "explanation": "JAF：柵欄桿用車推會往斜上方抬起。"
        },
        {
          "text": "熄火後留在車內等",
          "correct": false,
          "consequence": "極度危險",
          "explanation": "JAF：車子動不了就立刻下車，按緊急按鈕；沒有就用發煙筒（第33條第3項）。"
        },
        {
          "text": "倒車退回",
          "correct": false,
          "consequence": "卡在軌道上",
          "explanation": ""
        }
      ],
      "sources": [
        "https://jaf.or.jp/common/kuruma-qa/category-accident/subcategory-rule/faq118",
        "https://jaf.or.jp/common/safety-drive/car-learning/self-check/troubleshooting/escape",
        "https://laws.e-gov.go.jp/law/335AC0000000105"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 13,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_207B_level_crossing.svg",
            "caption": "踏切あり"
          }
        ],
        "photo": "assets/scenarios/B3-02.jpg",
        "footage": [
          "footage/samples/GH014769_t0000.5.jpg"
        ]
      }
    },
    {
      "id": "B3-03",
      "stage": "B3",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "山區單線窄路，你在下坡，對向有車上坡。",
      "sign": null,
      "options": [
        {
          "text": "閃大燈示意對方退",
          "correct": false,
          "consequence": "雙方僵持，對方倒車擦撞",
          "explanation": "國交省高山國道事務所：坡道會車以上坡優先。"
        },
        {
          "text": "加速搶先通過窄處",
          "correct": false,
          "consequence": "擦撞山壁或對向車",
          "explanation": "同上。"
        },
        {
          "text": "在寬處停下讓上坡車先過",
          "correct": true,
          "consequence": "順利會車",
          "explanation": "國交省高山國道事務所：坡道會車以上坡優先，但對方不一定遵守，自己也要徐行。"
        },
        {
          "text": "硬擠過去",
          "correct": false,
          "consequence": "擦撞山壁",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 9,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B3-03.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014685_t0032.1.jpg",
          "footage_haneda_okayama/samples/haneda_GH014705_t0035.4.jpg",
          "footage_haneda_okayama/samples/haneda_GH014701_t0001.6.jpg"
        ]
      }
    },
    {
      "id": "B3-04",
      "stage": "B3",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "觀光山路你開得慢，後面排了一串車。",
      "sign": null,
      "options": [
        {
          "text": "打雙黃燈示意後車超車",
          "correct": false,
          "consequence": "後車在彎道超車",
          "explanation": "國交省高山國道事務所：應在寬處讓車，而不是讓後車在彎道超。"
        },
        {
          "text": "被逼得加速過彎",
          "correct": false,
          "consequence": "過彎打滑",
          "explanation": ""
        },
        {
          "text": "在寬處打燈讓後車先過",
          "correct": true,
          "consequence": "安全",
          "explanation": "國交省高山國道事務所：「ゆっくり運転する勇気」。"
        },
        {
          "text": "維持原速，後車自己會等",
          "correct": false,
          "consequence": "後車勉強超車，造成危險",
          "explanation": "國交省高山國道事務所：在寬處讓後車先過。"
        }
      ],
      "sources": [
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 4,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B3-04.jpg",
        "footage": [
          "footage/samples/GH014746_t0005.7.jpg",
          "footage_haneda_okayama/samples/haneda_GH014686_t0018.8.jpg",
          "footage_haneda_okayama/samples/haneda_GH014690_t0002.7.jpg"
        ]
      }
    },
    {
      "id": "B3-05",
      "stage": "B3",
      "season": "無",
      "tier": "初級",
      "topic": "速度",
      "situation": "住宅區小路，沒有中央線也沒有車道線，路邊也沒有速限標誌。現在是 2026 年 9 月以後。",
      "sign": null,
      "options": [
        {
          "text": "沒標誌就是 40 km/h",
          "correct": false,
          "consequence": "仍超速",
          "explanation": ""
        },
        {
          "text": "沒標誌就看路況，順著車流開",
          "correct": false,
          "consequence": "超過 30 km/h",
          "explanation": "警察廳：生活道路的法定速度是 30 km/h（施行令第11條）。"
        },
        {
          "text": "最快 30 km/h",
          "correct": true,
          "consequence": "安全",
          "explanation": "警察廳：自 2026 年 9 月 1 日起，沒有中央線或車道線等的一般道路（生活道路），法定最高速度由 60 改為 30 km/h（施行令第11條）。有標誌時依標誌。"
        },
        {
          "text": "沒標誌就是 60 km/h",
          "correct": false,
          "consequence": "超速被取締",
          "explanation": "這是 2026 年 8 月以前的規定。"
        }
      ],
      "sources": [
        "https://www.npa.go.jp/bureau/traffic/seikatsudouro/seikatsudoro.html",
        "https://laws.e-gov.go.jp/api/2/law_data/335CO0000000270?response_format=json",
        "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040013"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增（自行查證生效日與適用道路）",
      "taiwan_vs_japan": "台灣其實也有類似規定：沒有車道線、分向線或分向限制線的道路，時速不得超過 30 公里（道路交通安全規則第93條）。日本從 2026 年 9 月起也改成 30。",
      "weight": "B",
      "points": 9,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_323_speed30.svg",
            "caption": "最高速度 30"
          },
          {
            "file": "assets/signs/photo_zone30_marking.jpg",
            "caption": "ゾーン30 路面標示（實拍）"
          }
        ],
        "photo": "assets/scenarios/B3-05.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014716_t0003.8.jpg",
          "footage_haneda_okayama/samples/haneda_GH014717_t0003.5.jpg",
          "footage_haneda_okayama/samples/haneda_GH014718_t0032.3.jpg"
        ]
      }
    },
    {
      "id": "B3-06",
      "stage": "B3",
      "season": "無",
      "tier": "中級",
      "topic": "自行車",
      "situation": "鄉道上前方有自行車靠左騎，對向來車，你沒辦法拉開距離超過它。",
      "sign": null,
      "options": [
        {
          "text": "跨過中線超車，不用管對向車",
          "correct": false,
          "consequence": "與對向車碰撞",
          "explanation": "間隔不足時應放慢，等能安全拉開距離（警察廳資料）。"
        },
        {
          "text": "按喇叭叫它讓開",
          "correct": false,
          "consequence": "沒有減速，間隔仍不足",
          "explanation": "按喇叭不能取代減速；本題的義務是依間隔降低速度。"
        },
        {
          "text": "放慢到和間隔相稱的安全速度，等能拉開距離再超過",
          "correct": true,
          "consequence": "安全",
          "explanation": "道路交通法第18條第3項（修正後）：與自行車等間隔不足時，要用與間隔相稱的安全速度通過。警察廳的參考值：約 1 公尺以上，不足時約 20～30 km/h；這只是參考，不是固定數字。"
        },
        {
          "text": "照速貼著過去",
          "correct": false,
          "consequence": "擦撞自行車",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.npa.go.jp/bureau/traffic/bicycle/202603.pdf",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 9,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B3-06.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014705_t0027.9.jpg",
          "footage_haneda_okayama/samples/okayama_GH014694_t0001.9.jpg",
          "footage_haneda_okayama/samples/okayama_GH014699_t0016.9.jpg"
        ]
      }
    },
    {
      "id": "B3-07",
      "stage": "B3",
      "season": "無",
      "tier": "中級",
      "topic": "平交道",
      "situation": "平交道柵欄開著，但過了平交道後前方在塞車，只剩不到一輛車的空間。",
      "sign": null,
      "options": [
        {
          "text": "先開進去，柵欄放下前前面應該會動",
          "correct": false,
          "consequence": "卡在軌道上",
          "explanation": ""
        },
        {
          "text": "跟緊前車，柵欄放下前一定出得去",
          "correct": false,
          "consequence": "同上",
          "explanation": "第50條第2項：可能停在平交道內就不得進入。"
        },
        {
          "text": "停在平交道中間等前車",
          "correct": false,
          "consequence": "卡在軌道上",
          "explanation": "第50條第2項。"
        },
        {
          "text": "在平交道前等，等對面空出整輛車的空間再進",
          "correct": true,
          "consequence": "安全",
          "explanation": "第50條第2項：可能因前方車況而停在平交道內時，不得進入。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）",
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）"
      ],
      "change": "新增（原 B3-01 只帶過，獨立成題）",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 13,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_207B_level_crossing.svg",
            "caption": "踏切あり"
          }
        ],
        "photo": "assets/scenarios/B3-07.jpg",
        "footage": [
          "footage/samples/GH014769_t0000.5.jpg"
        ]
      }
    },
    {
      "id": "B3-08",
      "stage": "B3",
      "season": "夏",
      "tier": "高級",
      "topic": null,
      "situation": "九州豪雨中，前方地下道（アンダーパス）積水，看不出多深。",
      "sign": null,
      "options": [
        {
          "text": "慢慢開過去",
          "correct": false,
          "consequence": "熄火受困",
          "explanation": "國交省：水深到車門下緣時從車內很難開門。"
        },
        {
          "text": "不進入，改走別條路",
          "correct": true,
          "consequence": "安全",
          "explanation": "國交省：水深與道路邊緣看不出的地方（如地下道）不要進入；水深超過車內地板就可能熄火。"
        },
        {
          "text": "跟著前車的車輪痕走",
          "correct": false,
          "consequence": "熄火受困",
          "explanation": "國交省：看不出水深的地下道不要進入。"
        },
        {
          "text": "加速衝過去",
          "correct": false,
          "consequence": "水從進氣口進入引擎",
          "explanation": "國交省：即使水深在地板以下，車速快也可能讓水進入引擎。"
        }
      ],
      "sources": [
        "https://www.mlit.go.jp/jidosha/carinf/rcl/carsafety_sub/carsafety033.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 13,
      "former_id": "SU-03",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B3-08.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014714_t0035.9.jpg",
          "footage_haneda_okayama/samples/haneda_GH014739_t0002.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014696_t0054.2.jpg"
        ]
      }
    },
    {
      "id": "B3-09",
      "stage": "B3",
      "season": "秋",
      "tier": "中級",
      "topic": null,
      "situation": "10 月夜間，北海道道東森林旁的道路，前方路邊有東西反光。",
      "sign": "黃色菱形「動物注意（鹿）」",
      "options": [
        {
          "text": "猛打方向盤閃避",
          "correct": false,
          "consequence": "衝出路外",
          "explanation": "北海道：閃避導致路外逸脫也是常見事故型態。"
        },
        {
          "text": "開遠光燈照牠，讓牠跑走",
          "correct": false,
          "consequence": "鹿可能停住不動",
          "explanation": "北海道：鹿可能因車燈停住。"
        },
        {
          "text": "照速前進，按喇叭趕牠",
          "correct": false,
          "consequence": "撞上鹿",
          "explanation": "鹿可能因車燈或聲音停住。"
        },
        {
          "text": "立即減速，準備停車，注意後面還有鹿",
          "correct": true,
          "consequence": "安全",
          "explanation": "北海道：10–11 月是鹿繁殖、移動期，約 41% 的事故發生在此時；16–24 時占七成以上；車燈照到眼睛會反光；鹿可能停在路上不逃。"
        }
      ],
      "sources": [
        "https://www.pref.hokkaido.lg.jp/ks/skn/est/ht/traffic_accident.html",
        "https://www.hkd.mlit.go.jp/ab/douro_keikaku/v6dkjr0000003r6j.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 9,
      "former_id": "AU-02",
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_214-2_deer.svg",
            "caption": "動物が飛び出すおそれあり（鹿）"
          }
        ],
        "photo": "assets/scenarios/B3-09.jpg",
        "footage": [
          "footage_haneda_okayama/samples/okayama_GH014700_t0012.6.jpg"
        ]
      }
    },
    {
      "id": "B3-10",
      "stage": "B3",
      "season": "秋",
      "tier": "中級",
      "topic": null,
      "situation": "一頭鹿剛跑過馬路。",
      "sign": null,
      "options": [
        {
          "text": "過去了，加速",
          "correct": false,
          "consequence": "撞上第二頭",
          "explanation": ""
        },
        {
          "text": "繼續減速，鹿常成群，後面可能還有",
          "correct": true,
          "consequence": "安全",
          "explanation": "北海道開發局網走：一頭過去後可能還有群鹿。"
        },
        {
          "text": "開遠光燈加速通過",
          "correct": false,
          "consequence": "同上",
          "explanation": "同上。"
        },
        {
          "text": "按喇叭趕走後面的鹿再加速",
          "correct": false,
          "consequence": "撞上停住的鹿",
          "explanation": "北海道開發局：可能還有群鹿；鹿可能因聲音停住。"
        }
      ],
      "sources": [
        "https://www.hkd.mlit.go.jp/ab/douro_keikaku/v6dkjr0000003r6j.html",
        "https://www.pref.hokkaido.lg.jp/ks/skn/est/ht/traffic_accident.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 8,
      "former_id": "AU-03",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_214-2_deer.svg",
            "caption": "動物が飛び出すおそれあり（鹿）"
          }
        ],
        "photo": "assets/scenarios/B3-10.jpg"
      }
    },
    {
      "id": "B4-01",
      "stage": "B4",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "收費站有「ETC専用」「ETC/一般」「一般」車道。你有租 ETC 卡。",
      "sign": null,
      "options": [
        {
          "text": "確認卡已插好，走 ETC 車道並減速",
          "correct": true,
          "consequence": "閘門開啟",
          "explanation": "Times ETC 說明。"
        },
        {
          "text": "沒插卡，跟緊前車一起過閘門",
          "correct": false,
          "consequence": "閘門關閉，緊急煞停",
          "explanation": "ETC 車道要插卡才能通過（Times）。"
        },
        {
          "text": "在 ETC 車道前停下插卡",
          "correct": false,
          "consequence": "後車追撞",
          "explanation": "要在進收費站前確認插卡（Times）。"
        },
        {
          "text": "忘了插卡照樣走 ETC",
          "correct": false,
          "consequence": "閘門不開，緊急煞停",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/japan/etc.html",
        "https://www.w-nexco.co.jp/etc/etc-only/"
      ],
      "verification": "已查證",
      "note": "「20 km/h 以下通過」未在官方頁核對，只寫「減速」。",
      "research_id": null,
      "inspired_by": [
        "全国レンタカー協会 rental-car-tips.jp（https://rental-car-tips.jp/tw/rule/）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 8,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [
          {
            "file": "assets/signs/photo_etc_lane_sign.jpg",
            "caption": "ETC 車道指示牌（橫濱，實拍）"
          }
        ],
        "photo": "assets/scenarios/B4-01.jpg"
      }
    },
    {
      "id": "B4-02",
      "stage": "B4",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "沒卡卻誤入「ETC専用」料金所。",
      "sign": null,
      "options": [
        {
          "text": "不倒車，開進「サポート」車道，按對講機",
          "correct": true,
          "consequence": "由人員協助",
          "explanation": "NEXCO 西日本。"
        },
        {
          "text": "倒車退出",
          "correct": false,
          "consequence": "與後車擦撞",
          "explanation": "NEXCO：絕對不要倒車。"
        },
        {
          "text": "停在閘門前等它打開",
          "correct": false,
          "consequence": "後車堵住",
          "explanation": "NEXCO 西日本：走「サポート」車道並按對講機。"
        },
        {
          "text": "強行跟在前車後面通過",
          "correct": false,
          "consequence": "閘門關閉碰撞",
          "explanation": "NEXCO 西日本。"
        }
      ],
      "sources": [
        "https://www.w-nexco.co.jp/etc/etc-only/"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 17,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [
          {
            "file": "assets/signs/photo_etc_lane_sign.jpg",
            "caption": "ETC 車道指示牌（橫濱，實拍）"
          }
        ],
        "photo": "assets/scenarios/B4-02.jpg"
      }
    },
    {
      "id": "B4-03",
      "stage": "B4",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "單向兩車道的高速公路，你一直開在右側車道。",
      "sign": null,
      "options": [
        {
          "text": "右側比較快，一直待著",
          "correct": false,
          "consequence": "同「一直待在右側」",
          "explanation": "第20條。"
        },
        {
          "text": "平時走左側，超車後回左側",
          "correct": true,
          "consequence": "安全",
          "explanation": "第20條。"
        },
        {
          "text": "一直待在右側",
          "correct": false,
          "consequence": "被攔下：通行帯違反，普通車反則金 6,000 日圓",
          "explanation": ""
        },
        {
          "text": "改走路肩比較安全",
          "correct": false,
          "consequence": "路肩不是行車道",
          "explanation": "第75條之8：高速公路禁止停車，路肩只在緊急時用。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": "單向三線以上時，可使用最右側以外的車道（第20條第1項但書）。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 17,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B4-03.jpg",
        "footage": [
          "footage/samples/GH014766_t0024.6.jpg",
          "footage_haneda_okayama/samples/okayama_GH014704_t0010.4.jpg",
          "footage_haneda_okayama/samples/haneda_GH014691_t0008.3.jpg"
        ]
      }
    },
    {
      "id": "B4-04",
      "stage": "B4",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "高速公路上錯過了要下的出口。",
      "sign": null,
      "options": [
        {
          "text": "從下一個入口迴轉回來",
          "correct": false,
          "consequence": "本線禁止迴轉",
          "explanation": "第75條之5。"
        },
        {
          "text": "沿路肩倒車",
          "correct": false,
          "consequence": "嚴重事故",
          "explanation": ""
        },
        {
          "text": "開到下一個交流道再重新導航",
          "correct": true,
          "consequence": "安全",
          "explanation": "第75條之5：本線禁止迴轉、倒車；第75條之8：禁止停車。"
        },
        {
          "text": "在分岔處停下",
          "correct": false,
          "consequence": "後車追撞",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "JAF Japan Traffic Rules Training（https://english.jaf.or.jp/safe-driving/quiz/motorvehicles）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": "兩地高速公路都不能迴轉、倒車；日本的出口錯過了就只能開到下一個出口。",
      "weight": "A",
      "points": 25,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B4-04.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014740_t0002.7.jpg",
          "footage_haneda_okayama/samples/okayama_GH014695_t0011.4.jpg",
          "footage_haneda_okayama/samples/haneda_GH014738_t0022.4.jpg"
        ]
      }
    },
    {
      "id": "B4-05",
      "stage": "B4",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "前車開很快，你跟著超過速限。",
      "sign": null,
      "options": [
        {
          "text": "網路說超 40 才會被拍",
          "correct": false,
          "consequence": "被取締（例：高速超 20～25 km/h，普通車反則金 15,000 日圓）",
          "explanation": "網路流傳的「門檻」沒有官方依據。"
        },
        {
          "text": "跟車流一起就不會被抓",
          "correct": false,
          "consequence": "超速違規",
          "explanation": "速限依標誌；車流不改變速限（警視廳反則金表）。"
        },
        {
          "text": "只在測速照相前減速",
          "correct": false,
          "consequence": "同上",
          "explanation": "速限全路段有效。"
        },
        {
          "text": "依現場速限標誌行駛",
          "correct": true,
          "consequence": "安全",
          "explanation": "超速依超過幅度開藍單或刑事處理。"
        }
      ],
      "sources": [
        "https://www.keishicho.metro.tokyo.lg.jp/menkyo/torishimari/tetsuzuki/hansoku.html"
      ],
      "verification": "已查證",
      "note": "一般道路超 30 km/h 以上、高速超 40 km/h 以上不適用反則金，屬刑事處理（警視廳表）。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 17,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_323_speed80.svg",
            "caption": "最高速度 80（示意）"
          }
        ],
        "photo": "assets/scenarios/B4-05.jpg",
        "footage": [
          "footage/samples/GH014742_t0018.5.jpg",
          "footage/samples/GH014752_t0057.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014691_t0008.3.jpg"
        ]
      }
    },
    {
      "id": "B4-06",
      "stage": "B4",
      "season": "春",
      "tier": "中級",
      "topic": null,
      "situation": "黃金週長假，你準備上高速公路長途移動，油剩不多。",
      "sign": null,
      "options": [
        {
          "text": "開慢一點省油就好",
          "correct": false,
          "consequence": "塞車時仍可能沒油",
          "explanation": "第75條之10。"
        },
        {
          "text": "上高速前先加油",
          "correct": true,
          "consequence": "遇到塞車也安心",
          "explanation": "道路交通法第75條之10：上高速公路前須檢查燃料等，避免因燃料不足停在高速公路上。"
        },
        {
          "text": "高速公路上有休息站，路上再加",
          "correct": false,
          "consequence": "塞車時油量見底，停在路肩",
          "explanation": "第75條之8：高速公路禁止停車（緊急除外）。"
        },
        {
          "text": "先上去，油燈亮了停路肩等救援",
          "correct": false,
          "consequence": "停在路肩",
          "explanation": "第75條之10：上高速前要檢查燃料；第75條之8 禁止停車。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105"
      ],
      "verification": "已查證",
      "note": "「黃金週塞車」是情境設定；規則本身與季節無關。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 8,
      "former_id": "SP-02",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B4-06.jpg",
        "footage": [
          "footage/samples/GH014751_t0217.6.jpg",
          "footage/samples/GH014752_t0030.9.jpg",
          "footage/samples/GH014750_t0072.5.jpg"
        ]
      }
    },
    {
      "id": "B4-07",
      "stage": "B4",
      "season": "夏",
      "tier": "中級",
      "topic": null,
      "situation": "颱風接近，你計畫走高速公路。",
      "sign": null,
      "options": [
        {
          "text": "出發前查 NEXCO 交通與通行止資訊，必要時延後",
          "correct": true,
          "consequence": "避開通行止",
          "explanation": "NEXCO 西日本、東日本：雨量超過各區間基準會通行止；解除前要等點檢、清掃完成。"
        },
        {
          "text": "先上去再說",
          "correct": false,
          "consequence": "困在通行止區間",
          "explanation": ""
        },
        {
          "text": "通行止就從路肩繞過去",
          "correct": false,
          "consequence": "困在封閉區間",
          "explanation": "NEXCO：通行止要等點檢完成。"
        },
        {
          "text": "改走沿海一般道路比較快",
          "correct": false,
          "consequence": "豪雨時一般道路也可能淹水",
          "explanation": "國交省：冠水道路不要進入。"
        }
      ],
      "sources": [
        "https://corp.w-nexco.co.jp/corporate/release/hq/h30/0626a/",
        "https://www.e-nexco.co.jp/news/important_info/2025/0612/00015029.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 8,
      "former_id": "SU-02",
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B4-07.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014724_t0008.2.jpg",
          "footage_haneda_okayama/samples/okayama_GH014696_t0054.2.jpg",
          "footage_haneda_okayama/samples/okayama_GH014688_t0009.5.jpg"
        ]
      }
    },
    {
      "id": "B5-01",
      "stage": "B5",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "觀光地店門口，你想路邊停 10 分鐘。",
      "sign": null,
      "options": [
        {
          "text": "找投幣式停車場或店家停車場",
          "correct": true,
          "consequence": "安全",
          "explanation": "Times 停車說明：即使時間很短也要停在停車場。"
        },
        {
          "text": "停在別人的月租車位",
          "correct": false,
          "consequence": "被要求移車",
          "explanation": ""
        },
        {
          "text": "打雙黃燈停路邊",
          "correct": false,
          "consequence": "被貼違停貼紙；還車時若沒出示繳費證明，租車公司會收違規停車費（Times 30,000 日圓、Nippon 乗用車 25,000 日圓）",
          "explanation": "各公司金額不同，事後補繳罰款並出示收據可退還。"
        },
        {
          "text": "人留在駕駛座，在店門口路邊等一下就好",
          "correct": false,
          "consequence": "路邊停車違規或擋路",
          "explanation": "Times 停車說明：即使時間很短也要停在停車場。"
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/japan/stop.html",
        "https://www.timescar-rental.com/zh_tw/faq/",
        "https://www.nipponrentacar.co.jp/guide/userguide.html",
        "https://laws.e-gov.go.jp/law/335AC0000000105"
      ],
      "verification": "已查證",
      "note": "Orix（普通車 25,000 日圓）只見於旅行社轉載的 PDF；Toyota 本次未核對，兩家都標待確認。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 17,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_316_no_parking.svg",
            "caption": "駐車禁止"
          }
        ],
        "photo": "assets/scenarios/B5-01.jpg",
        "footage": [
          "footage/samples/GH014751_t0314.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014741_t0045.0.jpg",
          "footage_haneda_okayama/samples/okayama_GH014692_t0020.0.jpg"
        ]
      }
    },
    {
      "id": "B5-02",
      "stage": "B5",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "被貼了違停貼紙，明天要去下一個城市。",
      "sign": null,
      "options": [
        {
          "text": "不理它",
          "correct": false,
          "consequence": "還車時被收違規停車費",
          "explanation": ""
        },
        {
          "text": "請租車公司代繳就好",
          "correct": false,
          "consequence": "同上",
          "explanation": "流程是自己到警察署辦理並繳款。"
        },
        {
          "text": "寄回台灣後再處理",
          "correct": false,
          "consequence": "還車時被收違規停車費",
          "explanation": "Times、Nippon：還車時要出示繳費證明。"
        },
        {
          "text": "到管轄警察署辦手續，在銀行或郵局繳款，還車時出示告知書與收據",
          "correct": true,
          "consequence": "租車公司不再加收",
          "explanation": "Times、Nippon 的流程一致。"
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/japan/stop.html",
        "https://www.nipponrentacar.co.jp/guide/userguide.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 8,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B5-02.jpg"
      }
    },
    {
      "id": "B5-03",
      "stage": "B5",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "因「止まれ」沒停拿到藍單（青キップ）。",
      "sign": null,
      "options": [
        {
          "text": "含當天 8 日內到銀行或郵局繳納反則金",
          "correct": true,
          "consequence": "結案",
          "explanation": "神奈川縣警。逾期會被通告，須在 11 日內繳納。"
        },
        {
          "text": "去便利商店繳",
          "correct": false,
          "consequence": "繳不了（官方只寫銀行、郵局）",
          "explanation": ""
        },
        {
          "text": "帶回台灣不理",
          "correct": false,
          "consequence": "進入通告程序",
          "explanation": ""
        },
        {
          "text": "在線上用信用卡繳",
          "correct": false,
          "consequence": "繳不了（官方只寫銀行、郵局）",
          "explanation": "神奈川縣警。"
        }
      ],
      "sources": [
        "https://www.police.pref.kanagawa.jp/kotsu/kotsu_ihan/mesf2006.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 8,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B5-03.jpg"
      }
    },
    {
      "id": "B5-04",
      "stage": "B5",
      "season": "無",
      "tier": "初級",
      "topic": "停車",
      "situation": "路邊沒有禁止停車標誌，你想停在路口轉角旁邊，或平交道、公車站旁邊。",
      "sign": "路口、斑馬線、平交道、公車站旁的路邊",
      "options": [
        {
          "text": "離開：路口與斑馬線 5 公尺內、平交道與公車站 10 公尺內不能停",
          "correct": true,
          "consequence": "安全",
          "explanation": "第44條：路口側端或轉角 5 公尺內、斑馬線前後 5 公尺內、平交道前後 10 公尺內、公車站標示 10 公尺內（營運時間）禁止停車及臨時停車。"
        },
        {
          "text": "停在斑馬線上，不擋車道",
          "correct": false,
          "consequence": "同上",
          "explanation": "第44條：斑馬線本身與前後 5 公尺都不能停。"
        },
        {
          "text": "打雙黃燈停一下就好",
          "correct": false,
          "consequence": "違反第44條",
          "explanation": "第44條也禁止臨時停車。"
        },
        {
          "text": "沒有標誌就能停",
          "correct": false,
          "consequence": "被貼違停貼紙",
          "explanation": "這些位置不需要標誌也禁止。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）",
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 17,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_316_no_parking.svg",
            "caption": "駐車禁止"
          },
          {
            "file": "assets/signs/jp_315_no_stopping.svg",
            "caption": "駐停車禁止"
          }
        ],
        "photo": "assets/scenarios/B5-04.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014686_t0022.2.jpg",
          "footage_haneda_okayama/samples/haneda_GH014689_t0102.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014700_t0164.3.jpg"
        ]
      }
    },
    {
      "id": "B5-05",
      "stage": "B5",
      "season": "春",
      "tier": "初級",
      "topic": null,
      "situation": "春天晴朗午後（約 23°C），孩子在車上睡著了，你想去便利商店買個東西。",
      "sign": null,
      "options": [
        {
          "text": "開著冷氣、不熄火留在車上",
          "correct": false,
          "consequence": "誤觸讓車移動或沒油熄火",
          "explanation": "JAF：開著引擎有誤操作、燃料用盡的風險。"
        },
        {
          "text": "鎖好車門，5 分鐘就回來",
          "correct": false,
          "consequence": "車內溫度上升",
          "explanation": "JAF 春季測試：外氣 23°C 時車內最高 48.7°C。"
        },
        {
          "text": "帶孩子一起下車，一分鐘也不留",
          "correct": true,
          "consequence": "安全",
          "explanation": "JAF 春季測試：外氣 23°C 時車內最高 48.7°C、儀表板 70.8°C；短時間也可能脫水、中暑。"
        },
        {
          "text": "窗戶開個縫就好",
          "correct": false,
          "consequence": "車內仍高溫",
          "explanation": "JAF 夏季測試：窗開 3 cm 降溫效果有限。"
        }
      ],
      "sources": [
        "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/spring",
        "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/summer"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 25,
      "former_id": "SP-01",
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B5-05.jpg",
        "footage": [
          "footage/samples/GH014746_t0024.8.jpg",
          "footage_haneda_okayama/samples/haneda_GH014709_t0002.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014707_t0001.4.jpg"
        ]
      }
    },
    {
      "id": "B5-06",
      "stage": "B5",
      "season": "夏",
      "tier": "初級",
      "topic": null,
      "situation": "盛夏 35°C 停車場，你要下車去餐廳。",
      "sign": null,
      "options": [
        {
          "text": "窗戶開一點縫，讓孩子在車上等",
          "correct": false,
          "consequence": "車內仍高溫",
          "explanation": "JAF：曇天下停車 1 小時車內就超過 40°C；開窗縫不能代替把人帶下車。"
        },
        {
          "text": "人和寵物都帶下車；回來先開門通風再上車",
          "correct": true,
          "consequence": "安全",
          "explanation": "JAF：曇天下停車 1 小時車內就超過 40°C；儀表板可達 79°C，打火機、噴霧罐不要留車上。"
        },
        {
          "text": "把寵物留在車上，放一杯水",
          "correct": false,
          "consequence": "寵物中暑",
          "explanation": "JAF：曇天下停車 1 小時車內就超過 40°C。"
        },
        {
          "text": "留家人在車上開冷氣",
          "correct": false,
          "consequence": "沒油熄火或誤操作",
          "explanation": "JAF。"
        }
      ],
      "sources": [
        "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/summer",
        "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/comparison"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 25,
      "former_id": "SU-04",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B5-06.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014686_t0008.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014693_t0020.9.jpg",
          "footage_haneda_okayama/samples/haneda_GH014696_t0008.6.jpg"
        ]
      }
    },
    {
      "id": "B6-01",
      "stage": "B6",
      "season": "無",
      "tier": "高級",
      "topic": null,
      "situation": "停車場倒車擦到別人的車，對方說「算了算了」。",
      "sign": null,
      "options": [
        {
          "text": "只拍照存證，不報警",
          "correct": false,
          "consequence": "無法申請保險",
          "explanation": "第72條：要報警。Toyota：沒有事故證明可能不予補償。"
        },
        {
          "text": "各自離開",
          "correct": false,
          "consequence": "事後無法申請保險",
          "explanation": "Toyota：沒有警察事故證明時可能不予補償。"
        },
        {
          "text": "私下給錢和解",
          "correct": false,
          "consequence": "同上",
          "explanation": ""
        },
        {
          "text": "有傷撥 119，撥 110 報警，記下對方資料，聯絡租車公司事故窗口",
          "correct": true,
          "consequence": "可申請保險",
          "explanation": "第72條：事故須報警。Times、Toyota、Nippon 都要求報警並聯絡公司；Times 明載當場和解將無法申請保險、補償。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://www.timescar-rental.com/zh_tw/help/trouble.html",
        "https://rent.toyota.co.jp/static/guide/irregular/index.html",
        "https://www.nipponrentacar.co.jp/guide/userguide.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 20,
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B6-01.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014686_t0008.6.jpg",
          "footage_haneda_okayama/samples/haneda_GH014693_t0020.9.jpg",
          "footage_haneda_okayama/samples/haneda_GH014696_t0008.6.jpg"
        ]
      }
    },
    {
      "id": "B6-02",
      "stage": "B6",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "事故後車子還能開回原店。你只買了基本方案。下列哪一項各大租車公司都會收？",
      "sign": null,
      "options": [
        {
          "text": "只要沒人受傷就免費",
          "correct": false,
          "consequence": "還車時被收 NOC",
          "explanation": "NOC 依車輛能否開回收取，與有無人傷無關（Times、Toyota、Nippon、Orix）。"
        },
        {
          "text": "依修理天數計",
          "correct": false,
          "consequence": "",
          "explanation": "Times、Nippon 明載不論損傷程度或修理時間，定額收取。"
        },
        {
          "text": "NOC（營業損失補償）2 萬日圓",
          "correct": true,
          "consequence": "",
          "explanation": "Times（C-1 等車級）、Toyota、Nippon、Orix 的一般車：能自行開回預定店舗 20,000 日圓，其他情況 50,000 日圓。"
        },
        {
          "text": "都有保險，什麼都不用付",
          "correct": false,
          "consequence": "還車時被收費",
          "explanation": "另有對物、車輛免責額（各公司一般為各 5 萬日圓）。"
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/help/trouble.html",
        "https://rent.toyota.co.jp/static/service/insurance/",
        "https://www.nipponrentacar.co.jp/guide/userguide.html",
        "https://car.orix.co.jp/userguide/insurance.html"
      ],
      "verification": "已查證",
      "note": "大型車級不同：Times C-3 等 30,000／70,000、M-5 等 50,000／100,000 日圓；Toyota 巴士與大型貨車無法開回 100,000 日圓。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 10,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B6-02.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014739_t0004.3.jpg"
        ]
      }
    },
    {
      "id": "B6-03",
      "stage": "B6",
      "season": "無",
      "tier": "中級",
      "topic": null,
      "situation": "你想把 NOC 也一起免除。各公司怎麼做？",
      "sign": null,
      "options": [
        {
          "text": "發生事故後再跟櫃台談",
          "correct": false,
          "consequence": "事故後仍被收 NOC",
          "explanation": "各公司方案不同，要在取車時確認並加購。"
        },
        {
          "text": "各公司方案不同，取車時確認：Toyota「安心Wプラン」、Nippon「ECO」、Orix「RAP」",
          "correct": true,
          "consequence": "",
          "explanation": "Toyota：安心W 1,650 日圓／24 小時（含免責補償）；Nippon：ECO 440 日圓／日；Orix：RAP 660 日圓／24 小時（部分車級 1,320）。Times：官方頁寫加入免責補償仍須付 NOC。"
        },
        {
          "text": "還車時說明是對方的錯就不收",
          "correct": false,
          "consequence": "仍可能被收",
          "explanation": "依各公司條款；請在取車時確認。"
        },
        {
          "text": "買了免責補償（CDW）就包含 NOC",
          "correct": false,
          "consequence": "事故後仍被收 NOC",
          "explanation": "四家都把免責補償與 NOC 分開。"
        }
      ],
      "sources": [
        "https://rent.toyota.co.jp/static/service/insurance/",
        "https://www.nipponrentacar.co.jp/car_price/coverageoption.html",
        "https://car.orix.co.jp/userguide/insurance.html",
        "https://www.timescar-rental.com/zh_tw/help/trouble.html"
      ],
      "verification": "已查證",
      "note": "免除條件有例外（例如故意、禁止行為、污損、盜難）；以各公司條款為準。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 10,
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B6-03.jpg"
      }
    },
    {
      "id": "B6-04",
      "stage": "B6",
      "season": "無",
      "tier": "初級",
      "topic": "酒駕",
      "situation": "午餐配了一杯啤酒，一小時後要開車去下一站。",
      "sign": null,
      "options": [
        {
          "text": "今天不開，改搭大眾運輸或換沒喝酒的人開",
          "correct": true,
          "consequence": "安全",
          "explanation": "第65條第1項：喝了酒不得駕駛；刑罰的最低酒精濃度是呼氣每公升 0.15 mg（施行令第44條之3），但未達也屬禁止。"
        },
        {
          "text": "多休息一下，覺得清醒就開",
          "correct": false,
          "consequence": "同上",
          "explanation": "「覺得清醒」不代表酒精已代謝。"
        },
        {
          "text": "喝杯咖啡提神就能開",
          "correct": false,
          "consequence": "同「沒醉就好」",
          "explanation": "第65條第1項：喝了酒就不能駕駛。"
        },
        {
          "text": "一杯而已，沒醉就好",
          "correct": false,
          "consequence": "違反第65條第1項；達呼氣 0.15 mg/L 即屬刑罰對象",
          "explanation": "施行令第44條之3 定的是法第117條之2之2 的刑罰門檻。"
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json",
        "https://laws.e-gov.go.jp/api/2/law_data/335CO0000000270?response_format=json",
        "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040013"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）",
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": "台灣的處罰門檻是呼氣每公升 0.15 mg（道路交通安全規則第114條），和日本的刑罰門檻相同；但日本法條本身是「喝了酒就不能開」，沒有「沒到門檻就可以」的意思。",
      "weight": "A",
      "points": 30,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B6-04.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014730_t0011.9.jpg"
        ]
      }
    },
    {
      "id": "B6-05",
      "stage": "B6",
      "season": "無",
      "tier": "中級",
      "topic": "酒駕",
      "situation": "同行的朋友晚餐喝了酒，說「我來開，你休息」。",
      "sign": null,
      "options": [
        {
          "text": "不把車給他開",
          "correct": true,
          "consequence": "安全",
          "explanation": "第65條第2項：不得提供車輛給可能酒駕的人；第65條第3項：也不得提供酒給要開車的人。提供者本身也違法。"
        },
        {
          "text": "路程很短，讓他開",
          "correct": false,
          "consequence": "你本身就違反第65條第2項（提供車輛）",
          "explanation": ""
        },
        {
          "text": "讓他開，但只在小路上開",
          "correct": false,
          "consequence": "你本身就違反第65條第2項",
          "explanation": "第65條第2項不分道路大小。"
        },
        {
          "text": "他開，我坐旁邊看著",
          "correct": false,
          "consequence": "同樣違反第65條第2項",
          "explanation": ""
        }
      ],
      "sources": [
        "https://laws.e-gov.go.jp/law/335AC0000000105",
        "https://laws.e-gov.go.jp/api/2/law_data/335AC0000000105?response_format=json"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "dfanx Japan Driving Guide（https://dfanx.github.io/japan-driving-guide/zh-TW/）"
      ],
      "change": "新增",
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 30,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B6-05.jpg"
      }
    },
    {
      "id": "B7-01",
      "stage": "B7",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "快到還車時間，油表剩一半。",
      "sign": null,
      "options": [
        {
          "text": "在還車店附近加滿，留收據",
          "correct": true,
          "consequence": "順利還車",
          "explanation": "Times：未加滿依行駛距離收代理加油手續費。"
        },
        {
          "text": "在出發地附近加滿，之後不管",
          "correct": false,
          "consequence": "還車時不是滿油",
          "explanation": "Times：還車時要加滿。"
        },
        {
          "text": "只加到看起來差不多滿",
          "correct": false,
          "consequence": "可能被收代理加油費",
          "explanation": "Times：未加滿依行駛距離收費。"
        },
        {
          "text": "不加直接還",
          "correct": false,
          "consequence": "被收代理加油費",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/faq/"
      ],
      "verification": "已查證",
      "note": "「多近才算」各公司不同：Budget 寫 5 km 內；Toyota、Nippon、Orix 本次未核對，待確認。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 50,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B7-01.jpg"
      }
    },
    {
      "id": "B7-02",
      "stage": "B7",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "把車開進還車區準備下車。",
      "sign": null,
      "options": [
        {
          "text": "ETC 卡留在車上",
          "correct": false,
          "consequence": "還車延誤",
          "explanation": ""
        },
        {
          "text": "把個人物品留著，請店員之後寄回",
          "correct": false,
          "consequence": "還車延誤",
          "explanation": "本題要求還車時自行取出。"
        },
        {
          "text": "取出 ETC 卡與個人物品，交出違停收據（如有）",
          "correct": true,
          "consequence": "還車完成",
          "explanation": "Times ETC 說明、Times／Nippon 違停規定。"
        },
        {
          "text": "違停收據留在家裡，之後再寄",
          "correct": false,
          "consequence": "被收違規停車費",
          "explanation": "Times、Nippon：還車時出示繳費證明。"
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/japan/etc.html",
        "https://www.timescar-rental.com/zh_tw/faq/",
        "https://www.nipponrentacar.co.jp/guide/userguide.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "C",
      "points": 50,
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B7-02.jpg"
      }
    },
    {
      "id": "B7-03",
      "stage": "B7",
      "season": "無",
      "tier": "初級",
      "topic": null,
      "situation": "加油站油槍有紅（レギュラー）、黃（ハイオク）、綠（軽油）。",
      "sign": null,
      "options": [
        {
          "text": "依租車文件確認油種，一般選レギュラー",
          "correct": true,
          "consequence": "加滿",
          "explanation": "軽油＝柴油。"
        },
        {
          "text": "選最便宜的那一槍",
          "correct": false,
          "consequence": "可能加錯油",
          "explanation": "依租車文件確認油種。"
        },
        {
          "text": "選ハイオク，比較好的油總沒錯",
          "correct": false,
          "consequence": "費用較高",
          "explanation": "依租車文件確認油種。"
        },
        {
          "text": "綠色「軽油」聽起來像輕型車用油",
          "correct": false,
          "consequence": "加錯油",
          "explanation": "Orix 條款列「加錯油種造成的損害」不在補償範圍。"
        }
      ],
      "sources": [
        "https://www.budgetrentacar.co.jp/files/rental_zh_sp_ari.pdf"
      ],
      "verification": "待確認",
      "note": "油槍顏色只見於 Budget 與民間資料；「加錯油不補償」只見於旅行社轉載的 Orix PDF。上線前補官方來源。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "—",
      "points": 0,
      "shuffle_options": true,
      "correct_index": 0,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B7-03.jpg",
        "footage": [
          "footage/samples/GH014750_t0120.9.jpg",
          "footage_haneda_okayama/samples/haneda_GH014688_t0000.9.jpg",
          "footage_haneda_okayama/samples/haneda_GH014726_t0007.9.jpg"
        ]
      }
    },
    {
      "id": "B8-01",
      "stage": "B8",
      "season": "春",
      "tier": "高級",
      "topic": null,
      "situation": "4 月走山區道路，平地是春天，但山上的路可能還有雪。你租的是一般輪胎。",
      "sign": null,
      "options": [
        {
          "text": "開慢一點就沒問題",
          "correct": false,
          "consequence": "同上",
          "explanation": "同上。"
        },
        {
          "text": "看到雪再裝雪鍊",
          "correct": false,
          "consequence": "一般輪胎在規制點被要求下交流道",
          "explanation": "NEXCO 中日本：冬用輪胎規制時沒有冬胎或雪鍊不能通行。"
        },
        {
          "text": "春天了，不用管",
          "correct": false,
          "consequence": "在規制點被要求下交流道",
          "explanation": ""
        },
        {
          "text": "出發前查道路資訊；遇冬用輪胎規制就改道",
          "correct": true,
          "consequence": "安全",
          "explanation": "NEXCO 中日本：冬用輪胎規制時沒有冬胎或雪鍊不能通行。"
        }
      ],
      "sources": [
        "https://www.c-nexco.co.jp/special/snow/point.html"
      ],
      "verification": "已查證",
      "note": "「4 月仍有規制」為情境設定，NEXCO 頁面未寫出月份；上線前可補具體道路的官方春季規制資料。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 12,
      "former_id": "SP-03",
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-01.jpg",
        "footage": [
          "footage/samples/GH014746_t0009.5.jpg",
          "footage/samples/GH014747_t0028.2.jpg",
          "footage_haneda_okayama/samples/haneda_GH014710_t0007.7.jpg"
        ]
      }
    },
    {
      "id": "B8-02",
      "stage": "B8",
      "season": "冬",
      "tier": "初級",
      "topic": null,
      "situation": "冬季要去雪國，訂車頁有雪胎選項。",
      "sign": null,
      "options": [
        {
          "text": "到當地再買雪鍊就好",
          "correct": false,
          "consequence": "雪鍊規制以外仍需冬胎",
          "explanation": "NEXCO 中日本。"
        },
        {
          "text": "訂 4WD 就好",
          "correct": false,
          "consequence": "被要求下交流道",
          "explanation": "國交省高山國道事務所：不要過信 4WD。"
        },
        {
          "text": "加訂雪胎",
          "correct": true,
          "consequence": "可通行",
          "explanation": "NEXCO 中日本：冬用輪胎規制時，沒裝冬胎或雪鍊不能走，4WD 也一樣。"
        },
        {
          "text": "一般輪胎加開慢一點",
          "correct": false,
          "consequence": "被要求下交流道",
          "explanation": "NEXCO 中日本：冬用輪胎規制時沒有冬胎或雪鍊不能走。"
        }
      ],
      "sources": [
        "https://www.c-nexco.co.jp/special/snow/point.html",
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html",
        "https://www.timescar-rental.com/zh_tw/japan/snowdrive.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 12,
      "former_id": "WI-01",
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-02.jpg",
        "footage": [
          "footage/samples/GH014750_t0120.9.jpg",
          "footage/samples/GH014753_t0030.1.jpg",
          "footage_haneda_okayama/samples/haneda_GH014734_t0003.8.jpg"
        ]
      }
    },
    {
      "id": "B8-03",
      "stage": "B8",
      "season": "冬",
      "tier": "高級",
      "topic": null,
      "situation": "北陸道情報板顯示「チェーン規制」。你有雪胎，沒帶雪鍊。",
      "sign": "電子情報板「チェーン規制」",
      "options": [
        {
          "text": "開到規制區間裡再找地方裝",
          "correct": false,
          "consequence": "在路肩裝雪鍊有追撞風險",
          "explanation": "NEXCO 中日本：雪鍊要在 SA／PA 裝。"
        },
        {
          "text": "在路肩等解除",
          "correct": false,
          "consequence": "追撞風險",
          "explanation": "雪鍊要在 SA／PA 裝。"
        },
        {
          "text": "有雪胎就能過",
          "correct": false,
          "consequence": "在檢查點被要求下高速",
          "explanation": ""
        },
        {
          "text": "在規制區間前下高速或改道",
          "correct": true,
          "consequence": "安全",
          "explanation": "NEXCO 中日本、國交省：チェーン規制時雪胎也要裝雪鍊。"
        }
      ],
      "sources": [
        "https://www.c-nexco.co.jp/special/snow/point.html",
        "https://www.mlit.go.jp/road/bosai/fuyumichi/tirechains.html"
      ],
      "verification": "已查證",
      "note": "國交省列出的區間包含北陸道丸岡～加賀、木之本～今庄等。",
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 12,
      "former_id": "WI-02",
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [
          {
            "file": "assets/signs/jp_310-3_chains_required.svg",
            "caption": "タイヤチェーンを取り付けていない車両通行止め"
          }
        ],
        "photo": "assets/scenarios/B8-03.jpg",
        "footage": [
          "footage/samples/GH014753_t0030.1.jpg",
          "footage_haneda_okayama/samples/haneda_GH014737_t0014.0.jpg"
        ]
      }
    },
    {
      "id": "B8-04",
      "stage": "B8",
      "season": "冬",
      "tier": "高級",
      "topic": null,
      "situation": "情報板顯示「冬用タイヤ規制」。你有雪胎。",
      "sign": null,
      "options": [
        {
          "text": "改開路肩慢慢走",
          "correct": false,
          "consequence": "路肩不是行車道",
          "explanation": "第75條之8。"
        },
        {
          "text": "照速度規制繼續行駛",
          "correct": true,
          "consequence": "通過",
          "explanation": "可能同時有 50～80 km/h 速度規制。"
        },
        {
          "text": "有雪胎就不用管速度規制",
          "correct": false,
          "consequence": "超過規制速度",
          "explanation": "可能同時有 50～80 km/h 速度規制（NEXCO 中日本）。"
        },
        {
          "text": "沒雪胎也硬開",
          "correct": false,
          "consequence": "被要求下交流道",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.c-nexco.co.jp/special/snow/point.html"
      ],
      "verification": "已查證",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 12,
      "former_id": "WI-03",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-04.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014737_t0014.0.jpg"
        ]
      }
    },
    {
      "id": "B8-05",
      "stage": "B8",
      "season": "冬",
      "tier": "高級",
      "topic": null,
      "situation": "早上山路路面黑亮，前方是橋和短隧道。",
      "sign": null,
      "options": [
        {
          "text": "在隧道出口急煞減速",
          "correct": false,
          "consequence": "打滑",
          "explanation": "國交省高山國道事務所：避免急煞急轉。"
        },
        {
          "text": "跟緊前車的胎痕加速通過",
          "correct": false,
          "consequence": "打滑追撞",
          "explanation": "國交省高山國道事務所；Times。"
        },
        {
          "text": "上橋再煞車",
          "correct": false,
          "consequence": "打滑",
          "explanation": ""
        },
        {
          "text": "提早減速，車距拉大，不急煞急轉",
          "correct": true,
          "consequence": "平穩通過",
          "explanation": "國交省高山國道事務所；Times：車距約平時 3 倍。"
        }
      ],
      "sources": [
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html",
        "https://www.timescar-rental.com/zh_tw/japan/snowdrive.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [
        "北海道運輸局 台灣版測驗 PDF（https://hokkaido-safe-travel.mlit.go.jp/images/pdf/quiz_taiwan.pdf）"
      ],
      "change": "加註參考（內容不變）",
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 12,
      "former_id": "WI-04",
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-05.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014689_t0219.2.jpg",
          "footage_haneda_okayama/samples/haneda_GH014693_t0005.7.jpg",
          "footage_haneda_okayama/samples/haneda_GH014695_t0006.8.jpg"
        ]
      }
    },
    {
      "id": "B8-06",
      "stage": "B8",
      "season": "冬",
      "tier": "高級",
      "topic": null,
      "situation": "雪國戶外停一晚。",
      "sign": null,
      "options": [
        {
          "text": "雨刷保持貼在玻璃上",
          "correct": false,
          "consequence": "雨刷凍住",
          "explanation": "Times 冬季說明：立起雨刷。"
        },
        {
          "text": "立起雨刷、不拉手煞車（AT 打 P），出發前清車頂與燈",
          "correct": true,
          "consequence": "順利出發",
          "explanation": "Times 冬季說明、國交省高山國道事務所。"
        },
        {
          "text": "出發前不用清車頂",
          "correct": false,
          "consequence": "雪滑落擋住視線",
          "explanation": "Times、國交省高山國道事務所：出發前清車頂與燈。"
        },
        {
          "text": "照平常拉手煞車",
          "correct": false,
          "consequence": "手煞車凍住",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.timescar-rental.com/zh_tw/japan/snowdrive.html",
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 12,
      "former_id": "WI-05",
      "shuffle_options": true,
      "correct_index": 1,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-06.jpg",
        "footage": [
          "footage_haneda_okayama/samples/haneda_GH014734_t0011.3.jpg",
          "footage_haneda_okayama/samples/haneda_GH014735_t0007.4.jpg",
          "footage_haneda_okayama/samples/haneda_GH014737_t0008.4.jpg"
        ]
      }
    },
    {
      "id": "B8-07",
      "stage": "B8",
      "season": "冬",
      "tier": "高級",
      "topic": null,
      "situation": "跟在除雪車後面。",
      "sign": null,
      "options": [
        {
          "text": "超車到除雪車前面",
          "correct": false,
          "consequence": "前方路面未除雪",
          "explanation": "國交省高山國道事務所：不要緊跟，休息。"
        },
        {
          "text": "按喇叭請它讓路",
          "correct": false,
          "consequence": "除雪作業受影響",
          "explanation": "同上。"
        },
        {
          "text": "緊跟比較好開",
          "correct": false,
          "consequence": "追撞",
          "explanation": ""
        },
        {
          "text": "不緊跟，去道の駅休息",
          "correct": true,
          "consequence": "安全",
          "explanation": "國交省高山國道事務所。"
        }
      ],
      "sources": [
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "B",
      "points": 11,
      "former_id": "WI-06",
      "shuffle_options": true,
      "correct_index": 3,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-07.jpg"
      }
    },
    {
      "id": "B8-08",
      "stage": "B8",
      "season": "冬",
      "tier": "高級",
      "topic": null,
      "situation": "暴雪中車子動彈不得。",
      "sign": null,
      "options": [
        {
          "text": "排氣管被雪埋住也繼續開暖氣",
          "correct": false,
          "consequence": "一氧化碳中毒",
          "explanation": "鳥取縣：要清除排氣管周圍的雪。"
        },
        {
          "text": "開著暖氣睡覺",
          "correct": false,
          "consequence": "一氧化碳中毒",
          "explanation": ""
        },
        {
          "text": "打警示燈，聯絡租車公司救援或警察；盡量熄火，清排氣管周圍的雪",
          "correct": true,
          "consequence": "等到救援",
          "explanation": "鳥取縣：避免一氧化碳中毒。"
        },
        {
          "text": "徒步找人",
          "correct": false,
          "consequence": "失溫",
          "explanation": ""
        }
      ],
      "sources": [
        "https://www.pref.tottori.lg.jp/item/1415434.htm",
        "https://www.cbr.mlit.go.jp/takayama/gaiyou/iroha.html"
      ],
      "verification": "已查證（官方指引，非法條）",
      "note": null,
      "research_id": null,
      "inspired_by": [],
      "change": null,
      "taiwan_vs_japan": null,
      "weight": "A",
      "points": 17,
      "former_id": "WI-07",
      "shuffle_options": true,
      "correct_index": 2,
      "images": {
        "signs": [],
        "photo": "assets/scenarios/B8-08.jpg"
      }
    }
  ],
  "excluded": [
    {
      "title": "後車閃燈讓你切入、雙黃燈致謝",
      "reason": "駕駛習慣，查無官方規定"
    },
    {
      "title": "測速照相門檻（一般道 +30、高速 +40）",
      "reason": "網友說法，只作錯誤選項"
    },
    {
      "title": "春季花粉、黃砂",
      "reason": "查無官方的駕駛規定或建議，不列入"
    },
    {
      "title": "花見、紅葉季塞車",
      "reason": "只有塞車預測，沒有可教的規則；只作情境背景"
    },
    {
      "title": "海邊沙灘停車、開上沙灘",
      "reason": "只見於旅行社轉載的 Orix 條款（海岸行駛的損害不補償），未取得官方頁"
    },
    {
      "title": "開車遇到熊",
      "reason": "本次未找到針對駕駛人的官方指引"
    },
    {
      "title": "沖繩高速公路多為 80 km/h（dfanx）",
      "reason": "未取得沖繩縣或 NEXCO 原始頁核對，不放"
    },
    {
      "title": "Smart IC 必須完全停車、拉鍊式匯入（dfanx）",
      "reason": "NEXCO 原始頁本次未核對，不放"
    },
    {
      "title": "高速公路故障時到護欄外避難、放三角警示牌（dfanx、JAF）",
      "reason": "本次未核對 NEXCO 原頁與相關法條，下一版補"
    },
    {
      "title": "逆向行駛的處理（dfanx 引 NEXCO 西日本）",
      "reason": "未開啟原頁，不放"
    },
    {
      "title": "軽油＝柴油、自助加油站找零機（dfanx）",
      "reason": "只見民間資料；B7-03 維持待確認"
    },
    {
      "title": "北海道運輸局 PDF 的台灣酒駕標準「0.02 mg/100 ml 或 0.05%」",
      "reason": "與台灣法規（呼氣 0.15 mg/L、血液 0.03%）不符，改用全國法規資料庫原文"
    },
    {
      "title": "北海道運輸局 PDF「冬季路面滑 10 倍」",
      "reason": "查無原始數據來源，不當作題目答案"
    },
    {
      "title": "北海道警察 10 題正誤問題（中文版）",
      "reason": "首頁可開，但題目分頁網址猜測皆無內容，未能審閱"
    },
    {
      "title": "Toyota、Nippon 的 ETC 卡價格，Orix、Toyota 的違停費，各公司加油距離",
      "reason": "官方頁為動態內容或 404，待確認"
    }
  ]
};