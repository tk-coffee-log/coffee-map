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
