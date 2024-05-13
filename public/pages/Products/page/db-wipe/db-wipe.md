
![db-wipe](/pages/Products/page/db-wipe/img/db-wipe_t.jpg)  

:::LittleBlank

---    

使用言語：Rust    
作成日 : 2024/03/25    
作成期間 : 3日    
総コミット数：27コミット    
Github : [GitHub - db-wipe](https://github.com/kip2/db-wipe)    

---    

## 概要    

MySQLのデータをダンプしてバックアップするためのコンソールアプリ。    
mysqldumpコマンドのwrapperアプリ。    

### 機能

機能は以下のことができる。  

- MySQLのテーブルデータのバックアップをとる。  
- テーブルのデータを消去する。  
- バックアップデータから、テーブルのデータを復元する。  

### 使用用途  

- テーブルのデータやカラムをいじるので、念の為バックアップをとっておきたい時。  
- 本番環境のカラムを編集する前に、ローカル環境でカラムを変更するテストを行いたいので、手軽にバックアップを行いたい時。  

などなど...

### 使い方  

.envにDBとの接続情報を定義して、それから以下のコマンドを実行する。    

:::LittleBlank  

```shell    
# まずテーブルのデータのダンプをとる。（バックアップを取る)    
./db-wipe -d    

# テーブルのデータをクリアする。    
./db-wipe    

# ダンプを取ったデータで、テーブルを復元する。    
./db-wipe -r    
```    

:::LittleBlank  

詳細な使い方については[GithubのREADME](https://github.com/kip2/db-wipe)を読んでほしい。  

### mysqldumpを使うのと何が違うのか？  

環境情報を.envファイルに記載できるので、mysqldumpコマンドの実行時に、ユーザーネームやホストネームなどを指定する手間がないこと。  
正直そこまで差はない。

### 作成意図  

RecursionCS内での課題として作成。    
RecursinoCSのバックエンドプロジェクトでの使用を想定。  

:::LittleBlank  

また、Rustに慣れるために作成したという側面もある。  

