
![video-compressor-service](/pages/Products/page/video-compressor-service/img/video-compressor-service.jpg)  


:::LittleBlank

---  

使用言語：python  
作成日 : 2023/10/03  
作成期間：5日(実作業は4日)  
総コミット数：81コミット  
Github : [GitHub - VideoCompressorService_RecursionCS](https://github.com/kip2/VideoCompressorService_RecursionCS)  

---  

## 概要

RecursionCS課題。  
クライアントとサーバ間でファイルの受け渡しを行い、加工処理をしたものを再度ダウンロードするサービス。  

:::LittleBlank

対象はmp4ファイル。  
サーバ側の処理でffmpegを使用。   
なお、サーバ側もクライアント側もpythonで実装している。  

### 機能について

使用できる機能としては、以下の4つ。  

:::LittleBlank

- 動画の圧縮  
- 動画の解像度の変更  
- mp4からmp3へ変換(音声が入っている動画のみ)  
- 時間を指定した範囲で動画を切り出して、GIF形式への変換  

:::LittleBlank

REPLでの対話処理を実装しており、あらかじめコマンドを覚えておかなくても、指示に従えば変換ができるようになっている。  

### 使い方

サーバ側のpythonを立ち上げておき、その上でクライアント側のpythonを立ち上げて、REPLに従ってファイルを編集する。  
基本的にはそのように使用する。  

:::LittleBlank

詳細な使い方は[こちら](https://github.com/kip2/VideoCompressorService_RecursionCS)を参照。  

### 今振り返っての感想

web上でファイルをコンバートしてくれるサービスを、mp4の変換で作成してみようという課題なのかと思う。  
はじめてそういったwebアプリを作ることができたので、個人的には思い入れがある。  

### コードについて

また、ソースコードを別ファイルに積極的に分割して開発しているようだ。  
それまではモノリスなソースコードで開発していた覚えがあるので、色々冒険している。  
なんかアドレスのバリデーションとかも実装している。  
しかも正規表現でバリデーションしている。  

### 公開について

「課題としておわらずwebサービスとして公開したらいい」という意見があったので、公開しようかと考えていた。  

:::LittleBlank

考えていたのだが、ffmpegのH.264のライセンス上、パブリックに公開して良いかについて疑義が生じたので、権利関係を調査してからいずれ取り掛かろうと考えている（とはいえ保留中してかなり時間がたってしまったけども）。  

:::LittleBlank

権利関係ほんと難しい。    
誰か詳しい人いたら教えてもらえませんか？（他力本願）    
