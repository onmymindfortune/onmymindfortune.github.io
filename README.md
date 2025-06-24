# onmymindfortune.github.io

這是一個用於 GitHub Pages 的靜態網站倉庫，目前包含以下子專案：  
- **紫微牌卡 — 線上抽牌** (`ZiWeiCards/`)：純前端抽牌應用，隨機抽取紫微牌卡並展示正/倒牌的解讀。

## 目錄

- [紫微牌卡 — 線上抽牌](#紫微牌卡—線上抽牌)  
- [專案結構](#專案結構)  
- [授權](#授權)  
- [作者資訊](#作者資訊)  

## 紫微牌卡 — 線上抽牌

### 功能特色

- 每次點擊「抽牌」隨機抽取一張正牌或倒牌  
- 顯示牌名與對應簡短解讀  
- 無需後端，開啟 `index.html` 即可使用  

## 專案結構

```
/
├─ LICENSE
├─ README.md            # 本檔
└─ ZiWeiCards/          # 紫微牌卡元件
   ├─ index.html        # 入口 HTML
   ├─ style.css         # 樣式檔
   ├─ script.js         # 抽牌邏輯
   ├─ data/             # JSON 資料
   │   ├─ main.json
   │   ├─ life.json
   │   └─ support.json
   ├─ images/           # 牌卡與 Logo 圖片
   ├─ LICENSE           # 紫微牌卡專案授權
   └─ README.md         # 紫微牌卡專案說明
```

## 授權

本倉庫採用 **Apache License 2.0**，詳見 [LICENSE](LICENSE)。

## 作者資訊

- **沐心紫微** ([@onmymind.fortune](https://www.instagram.com/onmymind.fortune/))
