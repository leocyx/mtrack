# mtrack -- 計算花費金額

## 安裝 
```
git clone https://github.com/leocyx/mtrack.git
cd mtrack
npm install
```

## 測試
``
mocha
``

## 範例
飲食、交通、休閒共有以下資料
```
eat = {'breakfast':55,'lunch':95,'dinner':80}
play = { 'movie_ticket':250,'zoo_ticket':140,}
traffic = { "mrt":25,"bus":12,"aircraft":1500,}

```
若輸入dinner, zoo_ticket, mrt 回傳245
