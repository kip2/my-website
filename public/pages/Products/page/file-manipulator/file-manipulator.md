
![file-manipulator](/pages/Products/page/file-manipulator/img/file-manipulator_t.jpg)    

## 概要  

---    

使用言語：python, shell    
作成期間：14日(うち、課題の範囲の作成は2日)    
作成日 : 2023/08/28    
総コミット数：54コミット    
Github : [GitHub - File-Manipulator-Program_RecursionCS](https://github.com/kip2/File-Manipulator-Program_RecursionCS)    

---    

### 機能

Linuxのコマンドに似たコマンドをpythonで実装したコマンドラインアプリ。  

:::LittleBlank

- ファイルの文字列の反転
- ファイルのコピーの作成
- ファイルの内容を複製してマージ
- ファイルの文字列を置換

:::LittleBlank

以上4つの機能を基本として、他にも以下のコマンドを実装した。
Linuxコマンドと全く同じとは言えないが（オプションが足りないなど）、基本機能としては同じことができる。

:::LittleBlank

- pwd    
- cd    
- ls    
- whoami    
- exit    
- cat    
- rm    

:::LittleBlank

なお、REPLによる対話型処理を行っている。  

### 課題の要件  

システムコールを学ぶためのRecursionCSの課題。    
元々の課題としては、4つのコマンドを作成するものだった。    

:::LittleBlank  

- reverse : ファイルの文字列を反転して、別ファイルに保存するコマンド。  
- copy : ファイルのコピーを作成し、保存するコマンド。  
- duplicate-contents : ファイルの内容を指定した回数複製し、元のファイルに統合するコマンド。  
- replace-string : ファイルのすべての文字列を置換するコマンド。  

### 拡張して開発した点  

REPLのアプリを作る楽しさに抗えず、課題の4コマンドを完成した後に以下の点を拡張。    

:::LittleBlank

 - Tabキーによるコマンド補完    
	 - コマンド入力途中にTabキーを押すとコマンドが補完される機能    
 - 拡張に対応するため、コマンドファイルの外部からのインポート＆dictへの登録による、コマンドの追加をできるように抽象化した。    
 - 拡張の練習として以下のコマンドを追加した    
	 - pwd    
	 - cd    
	 - ls    
	 - whoami    
	 - exit    
	 - cat    
	 - rm    

:::LittleBlank

本に影響されて、当時[オープン・クローズの原則](https://ja.wikipedia.org/wiki/%E9%96%8B%E6%94%BE/%E9%96%89%E9%8E%96%E5%8E%9F%E5%89%87)を意識して開発していたため、要件としてはなかったが、拡張が簡単なように工夫している。  
大変ではあったが、ちゃんと開発時に苦労しておけば、後で拡張しやすいんだなーということが学べた点は良かったと思う。  
 
### テストコードについて  
テストコードをシェルスクリプトで作成している。この辺りのシェルでテストする技法は植山類さんのコンパイラ作成時のスタイルから学んでいる。    
その辺りの詳細は[こちら](https://www.kip2.dev/influenced/Introduction-C-compiler)を参照。  

### 感想  

REPLを作るのはやっぱり楽しいなーってなりました。  
はい。  
 