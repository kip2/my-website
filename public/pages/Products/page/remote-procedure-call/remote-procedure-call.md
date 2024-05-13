
![remote-procedure-call](/pages/Products/page/remote-procedure-call/img/remote-procedure-call_t.jpg)    

:::LittleBlank

---    

使用言語：JavaScript, python      
作成日 : 2023/08/31    
作成期間：4日（実作業は2日）      
総コミット数：12コミット      
Github : [GitHub - Remote-Procedure-Call_RecursionCS](https://github.com/kip2/Remote-Procedure-Call_RecursionCS)      

---    

## 概要  

サーバー側の関数をクライアントから呼び出すための、コマンドアプリ。  
サーバーサイドにpython。  
クライアントサイドにJavaScriptを使用している。      
RecursionCSの、RPCを学ぶための課題。    

### 機能  

次のような関数を実行できる。  

- floor : 指定された数字の小数点以下を切り捨てた整数を返す。  
- nroot : 対数の底を求める。  
- reverse: 指定された文字列を反転して返す。  
- validAnagram: 引数で指定された二つの文字列が、アナグラムの関係になっているかを判定する。  
- sort: 指定された文字列の配列を、ソートして返す。  

### 使い方

習作のため仔細には書かない。  
詳細な使い方については[GithubのREADMEを参照](https://github.com/kip2/Remote-Procedure-Call_RecursionCS)してください。

### 苦労した点  

それまではpythonのみを使っていて、このとき初めてNode.js触ったので、使い勝手の違いなどに困惑したのを覚えている。  

:::LittleBlank
なお、クライアントサイドをJavaScriptで実装してのは最終的な話で、最初にクライアントをpythonで実装し、それを元にしてJavaScriptコードに直すなど、工夫して実装した。
その時、「とはいえ、pythonと同じようなものじゃないの」と、舐めた感想を持ちながら実装しようと思ったら、JavaScriptは非同期が基本であるのでそのままpythonコードを引き写したようなコードでは動かない、といった洗礼を受けた(もう二度と舐めたことは言いません)。

### 学んだこと  

それまではローカルの関数を呼び出すことしか実装しておらず、ネットワーク越しに関数を呼び出すことは不自然に感じたものだが、作ってみると、なかなかどうして意義深いことをやっているのだということがわかった。  
サーバー側に処理を任せ、クライアント側からは呼び出すだけで決まった機能が使えるという、APIに通じる考え方を学べた課題。  


