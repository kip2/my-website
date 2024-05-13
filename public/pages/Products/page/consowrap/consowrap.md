
![consowrap](/pages/Products/page/consowrap/img/consowrap.jpg)  


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

## 概要  

Rust製のコンソールアプリ。    

コマンド用ディレクトリにあるコマンドを実行するアプリ。  
なお、ディレクトリのパスは.envに設定する。  

### 使い方  

用途としては、プロジェクト単位でコマンドラインアプリをまとめて扱いたい場合の、窓口として使う。    

:::LittleBlank  

使用する場合のコマンド例は以下。

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

その他の詳しい使用法は[GithubのREADME](https://github.com/kip2/consowrap)を読んでほしい。  

### 目的  

RecursionCSでのバックエンドプロジェクトでツールとして利用する目的があって作成。    
ただ、汎用性は高いと思うので、今後何かしらのプロジェクトでも使っていきたいと考えている。    

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

