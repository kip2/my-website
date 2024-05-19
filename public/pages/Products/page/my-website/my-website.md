
![my website](/pages/Products/page/my-website/img/my-website.jpg)  

:::Blank  

---    

:::LittleBlank  

使用言語 : HTML, CSS, TypeScript, ShellScritp(bash, zsh)  
使用したフレームワークなど : vite, React.js, TailwindCSS  
作成日 : 2024/05/19    
作成期間：35日(概算で120時間くらい)  
総コミット数：421コミット(公開時点)    
Access : [my website](https://www.kip2.dev/)  
Github : [GitHub - my-website](https://github.com/kip2/my-website)    

:::LittleBlank  

---    

## 概要  

自分のwebsite。  
主にReact.jsとTypeScript、それからTailwindCSS製。  
作ったものと、好きなものと、影響を受けたものの虫干しサイトとなっている。  

### 使い方  

[ここにアクセス](https://www.kip2.dev/)して、閲覧してください。  

### 目的  

RecursionCSのバックエンドプロジェクトに静的サイトを作る課題があり、それを実装したものがこれ。  

:::LittleBlank  

また、課題として作るならついでに自分の顔となるサイトにもしたかったので、自分がサイトに欲しいものを詰めた。  

:::LittleBlank  

- 趣味を開陳して、同行の士が見つかればいいなーという淡い思いを込めた。  
- コミュ障なので口頭ベースだと誤解を生みやすい。そのため、自分を理解するベースのものとして作成すれば、誤解される率が減るかなーという思い。  
- 単純に好きなものを布教したい思い。  

:::LittleBlank  

狙いが功を奏したかは、あとは時の審判に委ねるしかない。  

### あえて要件を満たしてないところ  

なお、そういった個人目的が強くあったため、元々の要件にあった経歴書のダウンロード機能は実装していない。  
記事作成現在、転職が大きな目的でないというのもある。  

### 記事作成について  

markdownファイルで記載したものを追加すればいいようになっている。  
そのため、記事作成時はhtmlの構造をあまり考えずに、記事を書くという本来の作業に集中できるようになっている。  

### ページジェネレーター  

ページはjsonファイルで管理しており、また、記事そのものは先に説明したようにmarkdownファイルとなっている。  
そのため、追加するためにはmarkdownファイルを所定のフォルダに増やし、さらにjsonに管理項目を記入しなければならない。  

:::LittleBlank  

毎回ページを増やすためにそんなことはやっていられない。  
また、時間が経てば追加の仕方も忘却の彼方となる。  

:::LittleBlank  

なので、ページを追加するための、対話型のシェルスクリプトを用意した。  

:::LittleBlank  

シェルスクリプトのおかげでページの追加が容易になったので、記事を気楽に追加できるようになっている。  

### 作成した順番について  

なお、これはバックエンドプロジェクト3の課題である。  
諸事情あってphpを先に学ぶ必要があったので、バックエンドプロジェクト4（phpが主要な言語）を進めたあとでこれを作成するという、かなり倒錯した順番で作成している。  

:::LittleBlank  

最終的に学習できてれば順番は誤差だよ、誤差！  

### Recursionユーザー向けのREADMEを作成  

Recursionユーザー向けに、設計判断などが参考になれば良いなと思い、専用のREADMEをGithub上で公開している。  
アドレスは[こちら](https://github.com/kip2/my-website/blob/main/doc/README.md)  
参考になるかは不明だが、興味のある向きは読んでみてください。  
何かしらヒントにはなるかも？  

### かかった時間  

簡単に作成しようと思っていたら、制作に1ヶ月かかってしまった。  
作業時間はちゃんと計測していないが、概算でも120時間くらいかかっていると思う。  

:::LittleBlank  

...時間かけすぎでは？  

### レスポンシブ難しすぎ問題

主にかかった時間の大半はレスポンシブの対応に追われていたように思う。
如何に世に出ているサイトがしっかり作り込まれているかというのを、身をもって知った。

:::LittleBlank  

CSSはほんと沼。

:::LittleBlank  

---  

:::LittleBlank  

### 参考にしたサイト  

以下のサイトを参考にして作成させていただきました。  
この場を借りてお礼を申し上げます。  

:::LittleBlank  

特に影響を受けたサイト  
[cp20.dev](https://cp20.dev/)  

:::LittleBlank  

その他参考にさせていただいたサイト  
[comamoca.pages.dev](https://comamoca.pages.dev/)  
[nullnyat.nca10.moe](https://nullnyat.nca10.moe/)  
[yude.jp](https://www.yude.jp/)  
[Kodai のウェブサイト](https://kodai.engineer/)  


