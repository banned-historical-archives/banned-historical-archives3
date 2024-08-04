export default {
  "entity": {
    "id": "5a790475-01ac-4334-9941-63d3ee59c46c",
    "name": "认真学习毛主席重要指示——搞清楚资产阶级就在共产党内",
    "internal": false,
    "official": true,
    "type": "pdf",
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/5a790475-01ac-4334-9941-63d3ee59c46c.pdf"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "pdf",
    "articles": [
      {
        "title": "认真学习毛主席重要指示——搞清楚资产阶级就在共产党内",
        "authors": [],
        "page_start": 2,
        "page_end": 46,
        "ocr_exceptions": {
          "2": {
            "content_thresholds": [
              0.6,
              0,
              0,
              0
            ],
            "standard_paragraph_merge_strategy_threshold": 0.17,
            "differential_paragraph_merge_strategy_threshold": 0
          }
        },
        "dates": [
          {
            "year": 1976
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      }
    ],
    "ocr": {
      "standard_paragraph_merge_strategy_threshold": 0.17,
      "differential_paragraph_merge_strategy_threshold": 0
    },
    "ocr_exceptions": {}
  },
  "parser_id": "automation",
  "path": "5a790475-01ac-4334-9941-63d3ee59c46c.pdf",
  "resource_type": "book",
  "version": 2
};