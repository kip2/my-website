
---

RecursionCS課題
使用言語：python, shell
作成期間：14日(うち、課題の範囲の作成は2日)
総コミット数：54コミット
Github : [GitHub - File-Manipulator-Program_RecursionCS](https://github.com/kip2/File-Manipulator-Program_RecursionCS)

---

## File Manipulator Program

CLI動作のみ
システムコールを学ぶためのRecursionCSの課題。
テストコードをシェルスクリプトで作成している。この辺りのシェルでテストする技法は植山類さんのコンパイラ作成時のスタイルから学んでいる。
課題としては4つの関数を作成するものだった。
reverse : 
copy : 
duplicate-contents : 
replace-string : 

完成後、REPLのアプリを作る楽しさに抗えず、以下の点を拡張している。
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
 
 REPLを作るのはやっぱり楽しいなと思いました、まる


