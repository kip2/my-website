![notesnip](/pages/Products/page/notesnip/img/notesnip.jpg)    

:::Blank    

---      

使用言語 : TypeScript, Rust, ShellScript(bash)  
使用したフレームワークなど : vite, React.js, YamadaUI, CodeMirror    
使用したサーバ：AWS, Cloudflare Pages, CockroachDB Serverless    
その他ツール等：Docker    
作成日 : 2024/09/22        
作成期間：40日(101時間5分)      
総コミット数：350コミット(公開時点)        
Access : [NoteSnip](https://notesnip.kip2.dev/)      
Github : [GitHub - NoteSnip](https://github.com/kip2/notesnip)        

---      

## 概要  

ちょっとしたコードをURLで共有できるサービス。  

:::LittleBlank

バックエンドとしてRustを採用。  
それからReact.jsとTypeScriptを使用して作成。  

:::LittleBlank

今回はUIとしてYamadaUIを採用。  
エディター部分に関してはCodeMirrorを採用しています。  

:::LittleBlank

フロント部分はCloudflare Pagesに設置。  
バックエンドはAWS。  
DBはCockroachDB Serverlessを使用しています。  

### 使い方  

[NoteSnip](https://nodesnip.kip2.dev/)にアクセスし、以下の操作を行ってください。  

:::LittleBlank

1.エディターにコードを書く、あるいはエディターにコードを貼り付けてください。  
2.書いた、あるいは貼り付けたコードの言語を選択してください。共有先でも言語の情報は共有されます。  
3.「共有URL作成」ボタンを押してください。共有のための設定画面が起動します。  
4.保存する期間をプルダウンから選択してください。ちょっと共有すればいい場合は短い時間を、長い時間保存する必要がある場合は長い保存期間を選択してください。  
5.「送信」ボタンをクリックしてください。共有用のURLの作成が始まります。  
6.作成された共有URLをクリップボードにコピーして、共有してください。  

:::LittleBlank

使い方がわからなくなったら、ロゴの隣のヘルプボタンを押すと、サイトの簡単な使い方が出てきます。  

### 目的  

RecursionCSのバックエンドプロジェクトで、コードスニペット共有サービスを作る、Text Snippet Sharing Serviceを実装したもの。  

:::LittleBlank  

また、以下の技術を習得することも目的としています。  

:::LittleBlank  

- Rust  
- Cloudflare
- CockroachDB Serverless  
- YamadaUI  
- CodeMirror  

:::LittleBlank  

他にもTanstack Routerを使いたかったんですが、SPAとして作成することになったため、断念。  

### 作成過程について  

作成の過程については別記事を作成しています。  
[こちら](https://github.com/kip2/NoteSnip/blob/main/doc/README.md)を御覧ください。  

:::LittleBlank

RecursionCSユーザーには参考になる箇所もあるかもしれません。  


### かかった時間  

バックエンドプロジェクトが発表されたのが2023年の12月半ばごろだったと記憶しています。  

:::LittleBlank

すぐに取り掛かろうと思い、Rustの学習からはじめ（？）、さらにサンプルコード部分を自力実装したり（詳細な経緯は[こちら](https://kip2.dev/products/seeder)を御覧ください）、自作website作成に脱線したり、等々、そういったことをしているうちに作成まで9ヶ月かかってしまいました。  

:::LittleBlank

いや、時間かけすぎでは...？  

:::LittleBlank

時間かけた分、いろいろなことは学べたので、無問題です。  
本当です。全く気にしていません。信じてください。  

:::LittleBlank

なお、作成時の苦労等は[こちら](https://github.com/kip2/NoteSnip/blob/main/doc/README.md)を御覧ください。  

### UIについて  

[前回ホームページを作った時](https://kip2.dev/products/my-website)は、レスポンシブにかなり悩まされていました。  

:::LittleBlank

今回はUIライブラリとして[YamadaUI](https://yamada-ui.com/ja)を使用。  

:::LittleBlank

UI部分のレスポンシブなどは自力実装ほど気にしなくて良くなったため、かなりフロントの作成が楽になりました。  

:::LittleBlank

また、UI作成時に[UIVerse](https://uiverse.io)からいくらかお借りして作成しています。  
UIVerse眺めるだけで楽しいからいいよ。  
眺めてるだけでアイデア出しにもなるしね。  


### エディターライブラリーについて  

エディターライブラリーはmonacoが推奨されていたが、CodeMirrorが使えたので（Reactを選定したため）、こちらを使用。  

:::LittleBlank

コードハイライト機能が標準である、サポートしている言語の数が多い、テーマの種類が豊富である、等々の理由から、こちらも自力で実装するよりもかなり楽に作成することができました。  


### 全体的な感想  

作成に9ヶ月かかったのはやりすぎたと思う。  

:::LittleBlank

なぜそんなにかかったかというと、  

:::LittleBlank

- Rustの習得に時間かかった（3ヶ月）  
- php特有のコードをRustに移植する必要があった。  
- 用意されていたツールを、言語をRustに変えたことで自作する必要があった。  
- 他ごとに現を抜かしていた。  

:::LittleBlank

以下の点もありましたが、こちらはそんなに時間かかってないので、主にRustでやったことによるところが大きいと思います。  

:::LittleBlank

- 各種のクラウドサービスへの乗り換え、DBサービスの利用等で、キャッチアップの必要が生じた。  

:::LittleBlank

しかし、Rustの使い方を覚えたのと基本的なツールはもう作成しているので、今後はそんなに時間かからないかも。  
...かからないといいなぁ  
