![markdown-to-html-converter](/pages/Products/page/markdown-to-html-converter/img/markdown-to-html-converter_t.jpg)  

## 概要  

---    

使用言語：python    
作成日 : 2023/08/26    
作成期間：2日    
総コミット数：6コミット    
Github : [GitHub - Markdown-to-HTML-Converter_RecursionCS](https://github.com/kip2/Markdown-to-HTML-Converter_RecursionCS)    

---    

:::LittleBlank

### 機能  

markdownファイルをhtmlファイルに変換するコマンドラインアプリ。  
RecursionCSの課題で作成。

### 準備

変換にmarkdownライブラリを使用しているので、事前のインストールが必要となっています。  
pipでインストールを行なってください。  

```shell
$ pip install markdown

# もしくは
$ pip3 install markdown
```

### 使い方

次の形式のコマンドで、変換を実行します。  

:::LittleBlank  

```shell  
python3 file-convert.py markdown input-file-path output-file-path  

# example  
python3 file-convert.py markdown input.md output.html  
```  

### 感想

それまで、ライブラリを使ってpythonコードを書くことはあったが、全て本に記載されているものを使っていたので、本に載ってないライブラリを利用するのは初めてのことだった。  
なので、知らないライブラリをネットで公式ドキュメントやQiitaやzennの記事を調べて挑むというのは、ほぼ初めての試みだった(ないとは言えないと思うが、その辺り記憶が曖昧なのでお許しください)。  

:::LittleBlank

以下の英語の公式ドキュメントに困惑しながら、しかし、「公式ドキュメント読んで挑めてるよ〜」と、聖地巡礼したオタクになって喜んでいた覚えがある。
とはいえ、英語全く読めないのでヒーヒー言いながら読んでたのだけれども。

:::LittleBlank

以下は公式のGithubとレファレンス。  

[Python-Markdown](https://github.com/Python-Markdown/markdown)  
[Python-Markdown Reference](https://python-markdown.github.io/reference/)  

:::LittleBlank

最初実装した時は、何かしらの処理がおかしくなって、どうやっても解決策が見付からない。
それで、extensionsを指定すれば解決する、という情報をつかむまで苦労したんだったと思う（記憶朧げで申し訳ない）。

