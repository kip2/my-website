![seeder](/pages/Products/page/seeder/img/seeder.jpg)  

:::LittleBlank  

---    

使用言語：Rust    
作成日 : 2024/07/28    
作成期間：49日(うち、実作業時間は12時間)    
総コミット数：69コミット    
Github : [GitHub - seeder](https://github.com/kip2/seeder)    

---    

## 概要    

Rust製のseederアプリ。  
seederとは、LaravelにおけるDB初期化機能の一つで、DBに初期データを追加する機能を指す、らしい(Laravel知らないので、よく知らない)。    

:::LittleBlank

PostgreSQLに対応。    

### 使い方  

使い方は以下のような手順  

- .envファイルにDBへの接続情報を記載する。    
- `seeder -c`コマンドを使用し、投入データ設定用のJSONファイルを作成する。  
- `seeder -f`コマンドを使用し、JSONファイルに定義したデータをテーブルに追加する。  

### ランダムデータの投入も可能  

なお、ランダムデータの追加も可能となっている。  

- .envファイルにDBへの接続情報を記載する。    
- `seeder -c`コマンドを使用し、カラムデータ設定用のJSONファイルを作成する。  
- `seeder -r`コマンドを使用して、ランダムに生成したデータをテーブルに追加する。  

### ヘルプ  

コマンドの使い方に迷ったとき用に、ヘルプも参照可能となっている。  

```sh  
seeder -h  
```  

:::Blank  

---  

## このツールについて  

[RecursionCS](https://recursionist.io)のバックエンドプロジェクトにおいて必要となったために作成したツール。  

:::LittleBlank

要件把握と設計をどうするかという部分で悩みに悩んだ末にできた、難産の賜物。  
二ヶ月近くかけて、ようやく完成した。

### なぜ時間がかかったか  

端的にいうとスランプである。  

:::LittleBlank

### 経緯について

RecursionCSにはバックエンドプロジェクトという、カリキュラムがある。  
そのカリキュラムではphpが推奨言語だったが、他の言語でも実装して良いという方針だったため「Rustでやってみよう」と考えてプロジェクトに取り掛かった。  

:::Blank

そして、この選択がいらぬ苦労の始まりであった。  

:::Blank

このseederツールについては、元々サンプルとして用意されているコードがあり、そのコードを利用してseederの原理とDB操作を学ぶ、というのがプロジェクトの趣旨。  
そして、このサンプルコードを拡張していきながらプロジェクトの課題作成を行なっていく、という流れになっている。  

:::Blank

さて、Rustで進めるにあたってはそのサンプルコードがない（当たり前だ）。  
なので、サンプルコードを自力で実装する必要が発生した。  

:::LittleBlank

サンプルコード自力実装にあたって必要な作業は以下のようなもの。  

- phpで書かれたseederのコードがどのようなものかを把握する  
- Rustでその要件を満たすようにコードを書く  

:::LittleBlank

こうして書いてみるとなんでもないことのようだが、これが大きな壁となった。  

:::LittleBlank

壁になった理由としては、次のようなものが挙げられるだろう。 

- Rustとphpでプログラミングのパラダイムが異なっており、単純移植ができない。パラダイムの違いを吸収した上で、要件を満たすコードを構築する必要がある。  
- 元のサンプルコードは、phpのスクリプト言語の強みを最大限活かしたコード。Rustはコンパイル型。その差から生じる問題を解決しなくてはいけない。  
- そもそも自分の頭が良くない(はい)。  

:::LittleBlank

さて、以上のような問題を解決してどう実装するのか、ということを一ヶ月半近く悩み続け、ようやく完成したのがこのアプリだった、ということ。  

### 苦しんだけど、後悔している？

Rustを生涯の友としたいと考えているので、苦しかったけど、同時に苦しみを楽しんでいたので無問題(本当に苦しかったけども)。  

むしろ完成した今ではRustに少しでも近づけた気がして嬉しいですね...えへへ...(変人)   

:::LittleBlank

---

:::LittleBlank

### なぜPostgreSQLのみの対応か？  

バックエンドプロジェクトのためのツールだが、バックエンドプロジェクトではMySQLを使っている。  

:::LittleBlank

では、なぜMySQLではなく、PostgreSQLを選択したのか。  

:::LittleBlank

端的にいうと、デプロイすしたいDBサーバーが、PostgreSQLをサポートしているからである。

:::LittleBlank

バックエンドプロジェクトの今回の課題は、動的なwebサービスをデプロイするという趣旨のもの。
そのため、デプロイ先としてクラウドサービスなどを利用する必要があり、お金がどうしてもかかる(自分がお金のかからないやり方を知らないだけかもだけど)。  

:::LittleBlank

「あまりお金をかけたくない」  
「できれば無料でデプロイできるサービスを使いたい」   

:::LittleBlank

全てを解決できそうなサービスは見つからなかったが、探している中で、ServerlessDBというものを発見。  
これを使えば、DBだけでも無料でできそうだな、とあたりがついた。

:::LittleBlank

しかしこのサービス、無料のサービスでMySQLをサポートしたところが少なく、PostgreSQLなら結構サポートしていることが判明。  
そのため、PostgreSQLを使うことに決定。  

:::LittleBlank

PostgreSQLを使うことに決定したので、ツールに関してもPostgreSQLに対応する必要がある。  

:::LittleBlank

これまでのプロジェクトサポート用に作ったツールについては、どちらのDBでも使えるように作ってきているので大丈夫。  
新規作成のseederアプリもPostgreSQLへ対応した、ということである。  

### MySQL使えるように拡張しないのか？  

今回使用しているsqlx crateは、複数のDBでの実装も作りやすいものとなっているため、拡張自体は可能。  
また、今まで作った[アプリ](https://kip2.dev/products/migrate)でも、MySQLとPostgreSQLの両対応していた。  

:::LittleBlank

しかし、今回は上記のスランプもあり(正直疲れていたし、モチベーションがやばかった...)、都合よくYAGNIの法則を言い訳にし、拡張しない方向で決定。  

:::Blank

とはいえ、拡張自体は興味深いし、ツールとしての利用範囲も広がるので、余裕が出てくれば対応予定である。  
そのうち、そのうちな......  
