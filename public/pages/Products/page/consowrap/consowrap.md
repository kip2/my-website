
![consowrap](/pages/Products/page/consowrap/img/consowrap.jpg)  

## 概要  

:::LittleBlank  

---    

:::LittleBlank  

使用言語：Rust    
作成日 : 2024/04/13    
作成期間：3日    
総コミット数：42コミット    
Github : [GitHub consowrap](https://github.com/kip2/consowrap)    

:::LittleBlank  

---    

## consowrap    

Rust製のコンソールアプリ。    

あるディレクトリに集めているコマンドを実行できるアプリ。  
ディレクトリのパスは.envに設定する。  

:::LittleBlank  

### 使い方  

用途としては、プロジェクト単位でコマンドラインアプリをまとめて扱いたい場合の、窓口として使う。    

使う場合の書式としては以下になる。    

:::LittleBlank  

```shell    
# 使用例    
./consowrap command arg1 arg2    

# 使用可能なコマンドをリスト化    
./consowrap -l    

# コマンドのヘルプを見る    
./consowrap -h    
```    

:::LittleBlank  

その他の詳しい使用法はGithubのREADMEを読んでほしい。  

### 目的  

作成した目的としては、RecursionCSでのバックエンドプロジェクトでツールとして利用する目的がある。    
ただ、利用の汎用性は高いと思うので、今後何かしらのプロジェクトでも使っていきたいと考えている。    

### 配布について  

なお、バイナリファイルでの配布は行なっていない。    
万一、使用する場合は自前でビルドしてほしい。  

:::LittleBlank  

バイナリファイルでの配布についても、今後は知見を深めていきたいと思っているので、そのうちビルドファイルも用意するかも？  

### なお  

この時から、READMEも日本語と英語の両対応し始めた。    
といっても、日本語で整備したものをchatGPTに変換してもらっているのだが...  

:::LittleBlank  

いずれ英語のドキュメントも自前で書いてみたいと思う。  


:::Blank  


:::Blank  

しかし、コンソールアプリを作るのはやっぱり楽しいね。    

