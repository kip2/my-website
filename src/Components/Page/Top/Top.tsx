import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Top() {
    return (
        <>
            <Header/>
            <Blank />
            <div className="mx-auto flex justify-center gap-16 max-lg:flex-col max-lg:items-center">
                <div className="grid place-content-center">
                    <img className="rounded-full w-60 h-60"
                            src="myimage.png" alt="my image"/>
                </div>
                <div className="flex flex-col w-96">
                    <h2 className=" text-4xl pb-2">kip2 (@kip2)</h2>
                    <p className=" py-2 mx-auto text-left">
                    プログラミングに魅せられてしまい沼に沈んだオタク<br/>
                    なんでもすぐに手を出すから何にも身についていない<br/>
                    vimとコンソールとパソカタと、プログラミング言語と名の付くものならなんでも好き<br/>
                    生涯をかけてコンピュータとお友達になりたい<br/>
                    </p>
                    <p className="pt-2 text-xl">特筆して憧れている言語(2024年時点)</p>
                    <p>
                    Rust<br/>
                    Lisp系言語(Common Lisp, Scheme, Gauche, Clojure)<br/>
                    関数型系統の言語(F#, Haskell, Scala, etc...)<br/>
                    </p>
                    <div className="pt-5">
                            <a href="https://github.com/kip2" className="text-4xl mx-1 px-2 border-2 border-gray-700 rounded-xl hover:text-blue-300">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://twitter.com/kip2_ret_0" className="text-4xl px-2 mx-1 border-2 border-gray-700 rounded-xl hover:text-blue-300">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Top