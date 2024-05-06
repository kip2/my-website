
![remote-procedure-call](/pages/Products/page/remote-procedure-call/img/remote-procedure-call_t.jpg)    

## 概要  

---    

使用言語：JavaScript, python      
作成日 : 2023/08/31    
作成期間：4日（実作業は2日）      
総コミット数：12コミット      
Github : [GitHub - Remote-Procedure-Call_RecursionCS](https://github.com/kip2/Remote-Procedure-Call_RecursionCS)      

---    

## Remote Procedure Call    

RecursionCSの、RPCを学ぶための課題。    
サーバー側の関数をクライアントから呼び出すというコマンドアプリ。  
サーバーサイドにpython。クライアントサイドにJavaScriptを使用した。      

### 機能  

以下の機能を持つ。  
- floor : 指定された数字の小数点以下を切り捨てた整数を返す。  
- nroot : 対数の底を求める。  
- reverse: 指定された文字列を反転して返す。  
- validAnagram: 引数で指定された二つの文字列が、アナグラムの関係になっているかを判定する。  
- sort: 指定された文字列の配列を、ソートして返す。  

### 苦労した点  

それまではpythonのみを使っていて、このとき初めてNode.js触ったので、いろいろ困惑したのを覚えている。  
JavaScript自体あまりよくわかっていなかったので、最初にクライアントをpythonで実装し、それを元にしてJavaScriptコードに直すなど、苦労した覚えがある。  

しかし、pythonと同じだろうと実装しようと思ったら、JSは非同期が基本であるため、そのままでは動かないなど、JavaScriptとの違いに困惑した記憶がある。  

### 学んだこと  

ネットワーク越しに関数を呼び出すことは最初は不自然に感じたが、作ってみると、なかなかどうして意義深いことをやっているのだとわかった。  
サーバー側に処理を任せることができるので、クライアント側だけうまく実装してあれば利用が可能という、APIの基礎の考え方を学んでいる。  
