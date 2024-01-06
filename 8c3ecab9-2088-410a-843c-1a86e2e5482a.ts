export default {
  entity: {
    id: '8c3ecab9-2088-410a-843c-1a86e2e5482a',
    name: '杀劫：镜头下的西藏文革（台北2016年）',
    internal: false,
    official: false,
    type: 'pdf',
    author: '唯色著，台北2016年',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8c3ecab9-2088-410a-843c-1a86e2e5482a.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '序',
        authors: ['王力雄'],
        page_start: 10,
        page_end: 11,
        dates: [{ year: 2005, month: 9, day: 17 }],
      },
      {
        title: '关于照片',
        authors: ['唯色'],
        page_start: 12,
        page_end: 14,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '1 砸烂旧西藏 文化大革命的冲击',
        authors: ['唯色'],
        page_start: 16,
        page_end: 168,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '2 造反者的内战 “亲不亲，派来分”',
        authors: ['唯色'],
        page_start: 170,
        page_end: 209,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '3 龙在雪域 解放军与西藏',
        authors: ['唯色'],
        page_start: 210,
        page_end: 249,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '4 毛的新西藏 “革命”即“杀劫”',
        authors: ['唯色'],
        page_start: 250,
        page_end: 282,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '5 尾声 二十年的轮回',
        authors: ['唯色'],
        page_start: 284,
        page_end: 290,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '6 辅记',
        authors: ['唯色'],
        page_start: 292,
        page_end: 324,
        dates: [{ year: 2016, month: 5 }],
      },
      {
        title: '参考书目',
        authors: ['唯色'],
        page_start: 326,
        page_end: 328,
        dates: [{ year: 2016, month: 5 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.06, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/8c3ecab9-2088-410a-843c-1a86e2e5482a.pdf',
};
