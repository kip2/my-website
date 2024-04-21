import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"

function TopProfile() {
    return (
        <>
            <div className="mx-auto flex justify-center gap-16 max-lg:flex-col max-lg:items-center">
                <div className="grid place-content-center">
                    <img className="rounded-full w-60 h-60"
                            src="myimage.png" alt="my image"/>
                </div>
                <div className="flex flex-col items-center w-96 max-lg:w-100">
                    <h2 className=" text-4xl pb-2 mx-auto">kip2 (@kip2)</h2>
                    <p className="py-2 mx-auto text-left leading-8">
                    プログラミングに魅せられてしまい、沼に沈んだオタク<br/>
                    なんでもすぐに手を出すためなんにも身についていない<br/>
                    vimとコンソールとパソカタと、プログラミング言語と名の付くものならなんでも好き<br/>
                    生涯をかけてコンピュータとお友達になりたい<br/>
                    </p>
                    <p className="pt-5 text-xl">特筆して憧れている言語(2024年時点)</p>
                    <p className=" leading-9">
                    Rust<br/>
                    Lisp系言語(Common Lisp, Scheme, Gauche, Clojure)<br/>
                    関数型系統の言語(F#, Haskell, Scala, etc...)<br/>
                    </p>
                    <div className="pt-7">
                            <a href="https://github.com/kip2" className="text-4xl mx-1 px-2 border-2 border-gray-700 rounded-xl hover:text-blue-300">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://twitter.com/kip2_ret_0" className="text-4xl px-2 mx-1 border-2 border-gray-700 rounded-xl hover:text-blue-300">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopProfile