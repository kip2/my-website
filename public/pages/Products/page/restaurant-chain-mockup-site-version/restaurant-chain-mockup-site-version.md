
![restaurant-chain-mockup web app](/pages/Products/page/restaurant-chain-mockup-site-version/img/restaurant-chain-mockup-site-version.jpg)  

## 概要

---  

使用言語：php  
作成日 : 2023/10/30  
作成期間：25日(うち、実作業時間は14日)  
総コミット数：155コミット  
Github : [GitHub - Restaurant_Chain_MockUp_Extension_RecursionCS](https://github.com/kip2/Restaurant_Chain_MockUp_Extension_RecursionCS)  

---  

:::LittleBlank

ReacursionCSのバックエンドプロジェクトの課題。  

### 機能

ランダムにレストランチェーン店のモックアップデータを作成するwebアプリ。  

:::LittleBlank

作成したデータは以下の形式でダウンロードできる。  
- Markdown  
- JSON  
- TEXT  

:::LittleBlank

もしくはHTMLでページとして表示されるようになっている。  

:::LittleBlank

**HTMLで取得した場合のイメージ**

![HTMLとして取得したイメージ](/pages/Products/page/restaurant-chain-mockup-site-version/img/html-image.jpg)  

### 使い方

使い方は、
- パラメータの数値を設定する
- フォーマットを選択
- 「Generate」ボタンを押す

となっている。

:::LittleBlank

使用の例としては以下のようなものが考えられると思う。  
- HTMLに変換して、望んだ形式のモックアップが作成できているかを確認する。  
- その後、再度別の形式で生成し直す。  
- すると、ランダムに生成されたレストランチェーン店のモックアップがデータとして取得できる。  

### 学んだこと

phpで習作を作って学んできたことを活かして、一つのwebアプリを作成できたこと自体が大きな学びだったと思う。  
hjsonなどの別の形式を使うときの、htmlヘッダの様式についても学べた(Content-type/textのやつ)。

習作の面は大きいが、それでもphpで動作するwebアプリが作れたのは感動ものであった。  

### 注意事項

当時、静的なサイトのサーバへのデプロイは学んでいたが、動的なサイトに関してはよくわかっていなかったので、デプロイはしていない。　　
使用する場合はローカルでのサーバの立ち上げが必要となる点、要注意。  

### その他

コード量が増えて全体の見通しが悪くなったので、doxygenを用いて自動で簡単なドキュメント化を行なっている。  
詳細は[GithubのREADMEを参照](https://github.com/kip2/Restaurant_Chain_MockUp_Extension_RecursionCS)。  

### 感想

htmlやcssが苦手すぎて敬遠していたが、結局web作るのなら避けて通ることはできないと悟った頃だったと思う。  
そのため、見た目も多少こだわって作成しているのが伺える。  
