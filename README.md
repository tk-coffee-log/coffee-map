# Coffee Map 神奈川版

T/K Coffee Log（note）で紹介した神奈川の珈琲屋を、エリアや好みで探せるWebアプリです。

- 公開URL: https://tk-coffee-log.github.io/coffee-map/
- 地図: [地理院タイル](https://maps.gsi.go.jp/development/ichiran.html)（国土地理院）
- 地図ライブラリ: [Leaflet](https://leafletjs.com/) 1.9.4（`leaflet.js` としてこのリポジトリに同梱。ライセンスは `LEAFLET-LICENSE.txt`）
- 記事: [T/K Coffee Log](https://note.com/tk_coffee_log)

このページは `index.html` 1枚で動きます。中身は別リポジトリの作成ツールで生成しています。

## 安全対策

- 外部から読み込むプログラムはありません（Leafletも同梱）。
- Content Security Policy で、読み込める場所を地理院タイルとGoogle Fontsに限定しています。

## ページの構成

- `/` トップ(エリアの入口)
- `/map/` 地図アプリ
- `/yokohama/` `/kamakura/` `/zushi-hayama/` `/shonan/` エリアごとのページと、その中の地区ページ
- `/roasters/` と各エリアの `/roasters/` ロースター・自家焙煎の店
- `/shop/〇〇/` 店ごとのページ(まだ行っていない店は検索結果に出さない設定)
- `sitemap.xml` `robots.txt` 検索エンジン向け

すべて別リポジトリの作成ツール(build_site.py)がデータから自動で作ります。
