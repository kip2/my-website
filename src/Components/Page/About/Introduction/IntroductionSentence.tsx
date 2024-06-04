import LanguageIcons from "../../../Functions/Devicon/LanguageIcons"
import Blank from "../../../UI/Blanks/Blank"
import { IconType } from "../../../types"

const IntroductionSentense = () => {
    const frontend: IconType = ["html5", "css3", "javascript", "typescript", "react", "vitejs", "tailwindcss", "bootstrap"]
    const backend: IconType = ["Rust", "python", "PHP", "Java"]
    const infrastructure: IconType = [
        ["AWS", "AmazonWebServices"], 
        "NGINX", 
        "Docker"
    ]
    const tools: IconType = ["vscode", "vim", "neovim", "eclipse"]
    const os: IconType = [["mac", "apple"], ["windows", "windows11"], "linux"]
    const others: IconType = ["markdown", "bash", "powershell", "git", "github", "spring"]
    const experienced: IconType = [
                    "blender",
                    "C", 
                    ["C++", "cplusplus"],
                    ["C#", "csharp"],
                    "go",
                    "haskel",
                    "scala",
                    "zig",
                    "elm",
                    "clojure",
                    "perl",
                    "mysql",
                    "mongodb",
                    "graphql",
                    "postgresql",
                    "processing",
                    "awk",
                    "cmake",
                    "figma",
                    "gcc",
                    "maven",
                    "hibernate" ,
                    "intellij",
                    "latex",
                    "unity",
                    "unrealengine",
                    "WASM"
                ]

    return (
        <>
            <section className="markdown-viewer">
                <hr/>
                <Blank />
                <p>プログラミングに魅せられてしまい、沼に沈んだオタク。<br/>
                なんでもすぐに手を出すためなんにも身についていない。<br/>
                vimとコンソールとパソカタと、プログラミング言語と名の付くものならなんでも好き。<br/>
                コンピュータそのものが最推し。<br/>
                生涯をかけてコンピュータとお友達になりたい。<br/>
                推し活 is (キーボード)押し活。<br/>
                元引きこもり。現在も仕事以外は家にこもってキーボードを叩いているので、いまでも大体引きこもり。</p>
                <Blank />
                <hr/>
                <h2>使える技術など</h2>
                <p>以下のものが使える。それぞれ調べながら使えるくらいにはなっていると思う。<br/></p>
                <h4>フロントエンド</h4>
                <LanguageIcons iconsData={frontend}/>
                <h4>バックエンド</h4>
                <LanguageIcons iconsData={backend}/>
                <h4>インフラ</h4>
                <LanguageIcons iconsData={infrastructure}/>
                <h4>ツール</h4>
                <LanguageIcons iconsData={tools}/>
                <h4>OS</h4>
                <LanguageIcons iconsData={os}/>
                <h4>その他</h4>
                <LanguageIcons iconsData={others}/>
                <h3>その他触ったことのあるもの</h3>
                <p>触ったことはあるけれど、自信を持って使いこなせるとはまでは言えないもの。</p>
                <br></br>
                <p>アイコンがあるもの</p>
                <LanguageIcons iconsData={experienced}/>
                <br></br>
                <p>アイコンがないもので触ったことのあるもの</p>
                <p>VBA, CommonLisp, Scheme <br/>
                <br></br>
                increase more...</p>
                <h3>触ってみたい言語・技術</h3>
                <p>およそ、「プログラミング言語」と名のつくものならなんでも好き。<br/>
                あまりに対象が多過ぎるので書かない。</p>
                <h3>好きなマスコット</h3>
                <p><img src="/svg/lisplogo_alien.svg" alt="Lisp Alien"/></p>
                <p>パッと思いつく限りでは、</p>
                <ul>
                <li>Gopherくん</li>
                <li>Ferisくん</li>
                <li>D言語くん</li>
                <li>Lispエイリアン</li>
                <li>Denoくん</li>
                </ul>
                <p>他にも可愛いマスコットいたら教えてください。</p>
                <h3>好きなLispエイリアン</h3>
                <p>Lispエイリアン。</p>
                <Blank />
                <hr/>
                <h2>プログラミングについて</h2>
                <p>まさかりの飛んでくる向きもあるかと思うが、車輪の再発明が大好き。<br/>
                人が作った技術について、どういう風に作られているかとか興味ない？（あ、ない？ はい...）<br/>
                コンパイラ、ブラウザ、OS、シェル、etcetc......<br/>
                先人の偉大な努力あって、現在の複雑なコンピュータが動いていることを思えば、これに費やされた労力や工夫に敬意と興味が湧くというもの。<br/>
                いずれはこれらのものを作ってみたいなぁと夢想している毎日。<br/>
                身辺周辺が落ち着いたら手を出し始めます。</p>
                <h3>web系</h3>
                <p>Web系技術というのはとても面白い物だと思う。<br/>
                デスクトップアプリであれば、環境の違いなどを考慮して作らなければならない辛さがある（念の為いっておくと、そういうのはそういうので好きである）。<br/>
                しかし、web系はブラウザ上で作ることを想定して作れば、ブラウザがある環境ではどれでも大体動いてしまう。<br/>
                もちろん動かないものもあるが、共通してどの環境でも大体動いてしまうというのは強みであると同時に、面白みであると思う。<br/>
                サーバー側に環境を作って仕舞えば、あとはネット環境があれば動いてしまうのだから。<br/>
                しかも、インタフェースをちゃんと作っておけば、サーバー側のプログラミング言語は問わないときた。<br/>
                なかなか面白いじゃない、と思っている。</p>
                <h3>フロントエンド</h3>
                <p>Reactのコンポーネント分割による開発に魅せられており、Reactでの開発にハマっている。</p>
                <p>フロントエンドは進化と競争が速いと聞いているので、自分の小さな脳みそでは追ってもついていけるかがわからない。<br/>
                なので、現在はReact一本に絞ってフロント技術を磨いている。<br/>
                しかし、そこに技術があるなら知りたいのが人間の本能（？）。<br/>
                いずれ、他のものにも手を出したいと、機会を虎視眈々と伺っている。</p>
                <p>どうやら見た目をいじるのが苦手な割には結構好きらしいのは、最近わかってきた。<br/>
                見た目のデザインをいじるあたりで、気づいたらついつい時間が過ぎてしまう（最近で言うと、2時間だけやるつもりが、気づいたら9時間経っていたことがある）<br/>
                そういったレスポンシブに開発できることもReact好きに拍車をかけたらしい（ホットロード機能。React以外でも使われている）。<br/>
                細かいフィードバックを繰り返して開発していけるのはとても楽しいものである。</p>
                <h3>バックエンド</h3>
                <p>バックエンドは最も興味がある分野である。<br/>
                しかし、興味はあるが勉強中のためまだあまりよくわかっていない分野でもある。<br/>
                好きだが、苦手なのかもしれない（いずれ克服する予定）。</p>
                <p>生涯の友として何か一つ言語を収めてみたいと思っているので、Rustにアプローチをかけているところ。<br/>
                一つでなんでもできるもの、と言う意味ではC++にも興味ある（しかし、あまりの巨大さに尻込みもしている）。</p>
                <h3>Lisp</h3>
                <p>Lispが好き。<br/>
                なかなか扱うことはできていないけれど、好きと言う気持ちと憧れがものすごくある。<br/>
                なぜそんなにLispが好きかって？<br/>
                Land of Lispを読めばわかるよ。<br/>
                <a href="https://www.kip2.dev/about/history/Land-of-Lisp">Land of Lispとの出会い</a></p>
                <h3>低レイヤ</h3>
                <p>コンピュータそのものの動きに興味がものすごくあるので、低レイヤに興味がある。<br/>
                OSを作りたい、コンパイラ作りたい、リンカ作りたい、プログラミング言語作りたい、インタプリタ作りたい......</p>
                <h3>vim</h3>
                <p>vimのキーバインドがとても好き。<br/>
                Obsidianを普段使いしているが、これを使い始めたのも、vimモードが標準であるという話を聞いたからというのが理由であるくらいには好き。<br/>
                現在はObsidianのvimモード、VScodeのvimキーバインドを使って、vim活を行っている。</p>
                <p>vimのキーバインドが馴染み過ぎて、会社のパソコンで間違えて:wとかjkとか叩いてしまうこともしばしば。</p>
                <p>本当はvimとかnvimに入門していきたいが、なかなかできていない。<br/>
                設定ファイルを作って環境を決定するというのが苦手だから、躊躇している。</p>
                <p>さらに詳しいvimの話は別記事を読んでほしい。</p>
                <Blank />
                <hr/>
                <h2>その他趣味について</h2>
                <ul>
                <li>プログラミング</li>
                <li>パソカタ</li>
                <li>漫画</li>
                <li>ラノベ</li>
                <li>読書</li>
                <li>ゲーム</li>
                <li>アニメ</li>
                </ul>
                <p>大体、上の感じ。<br/>
                漫画やラノベの影響を受けたものについては好きなものページに記載しているので、興味がある向きはそちらをみてほしい。<br/>
                趣味が特殊と言われることもあるので、波長が合うかは不明。</p>
            </section>
        </>
    )
}

export default IntroductionSentense