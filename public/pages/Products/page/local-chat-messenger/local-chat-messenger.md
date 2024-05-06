![local-chat-messenger](/pages/Products/page/local-chat-messenger/img/local-chat-messenger.jpg)    

## 概要  

---    

使用言語：python    
作成日 : 2023/08/27    
作成期間：1日    
総コミット数：12コミット    
Github : [GitHub - Local-Chat-Messenger_RecursionCS](https://github.com/kip2/Local-Chat-Messenger_RecursionCS)    
 
---    

## Local Chat Messenger    

Recursionの課題で、ソケット通信とプロセスのフォークについて学ぶための課題。  

### 何を学んだか  

Linuxでは全てがファイルという世界観なので、プロセス間の通信においてもファイルを使用するということ。  
プロセスがどのようにメッセージを受け渡ししているかは長年謎だったので、ファイルで受け渡すのはとても新鮮に感じた覚えがある。  

### 工夫したところなど  

CLIでの簡易なアプリケーションだが、以下の点は工夫している。  
- REPLによる対話処理  
- タイトルの文字列を追加したり、メッセージの受け渡し時にインタラクティブになるように表示を工夫している  
- Fakerによって、擬似的にランダムなメッセージを戻すようにしている。  

:::LittleBlank  

Fakerの導入は初めてのことだったので、公式ドキュメントやネット上の情報を調べながら実装できたのは、この段階での冒険だったと記憶している。  

:::LittleBlank  

また、ソケットの扱いがなかなか癖があるのと、プロセスのフォークの扱いに色々苦慮していた覚えがある。  
いまだにフォークした時の動作については理解しきれていない。  
いずれそのあたりもしっかりと理解したいところ。  
