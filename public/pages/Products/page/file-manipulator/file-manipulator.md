
![file-manipulator](/pages/Products/page/file-manipulator/img/file-manipulator_t.jpg)    

## 概要  

---    

使用言語：python, shell    
作成期間：14日(うち、課題の範囲の作成は2日)    
作成日 : 2023/08/28    
総コミット数：54コミット    
Github : [GitHub - File-Manipulator-Program_RecursionCS](https://github.com/kip2/File-Manipulator-Program_RecursionCS)    

---    

## File Manipulator Program    

システムコールを学ぶためのRecursionCSの課題。    
### 課題の要件  

課題としては4つの関数を作成するものだった。    

:::LittleBlank  

- reverse : ファイルの文字列を反転して、別ファイルに保存するコマンド。  
- copy : ファイルのコピーを作成し、保存するコマンド。  
- duplicate-contents : ファイルの内容を指定した回数複製し、元のファイルに統合するコマンド。  
- replace-string : ファイルのすべての文字列を置換するコマンド。  

### 拡張して開発した点  

REPLのアプリを作る楽しさに抗えず、課題の4コマンドを完成した後に以下の点を拡張している。    

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
 
### テストコードについて  
テストコードをシェルスクリプトで作成している。この辺りのシェルでテストする技法は植山類さんのコンパイラ作成時のスタイルから学んでいる。    

### 総評  

 REPLを作るのはやっぱり楽しいなと思いました、まる    
 


