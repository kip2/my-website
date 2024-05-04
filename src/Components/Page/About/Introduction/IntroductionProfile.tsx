import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"

const IntroductionProfile = () => {
    return (
        <>
            <div className="mx-auto flex justify-center gap-5 max-lg:flex-col max-lg:items-center">
                <div className="grid place-content-center">
                    <img className=" rounded-3xl w-96 h-96
                            max-[470px]:w-72 max-[470px]:h-72
                            "
                            src="/img/myimage.png" alt="my image"/>
                </div>
                <div className="flex flex-col justify-center items-center w-100 
                        max-lg:w-100 
                        max-[470px]:w-72 max-[470px]:text-sm
                    ">
                    <p className="text-md font-serif mb-2"><span>[kʲippɯ]</span></p>
                    <h2 className=" text-5xl mb-3 mx-auto italic font-serif max-md:text-4xl">kip2</h2>
                    <div className="mt-5">
                            <a href="https://github.com/kip2" className="text-4xl mx-1 px-2 border-2 border-gray-700 rounded-xl 
                                hover:text-black hover:bg-slate-100 duration-300
                            ">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://twitter.com/kip2_ret_0" className="text-4xl px-2 mx-1 border-2 border-gray-700 rounded-xl 
                                hover:text-black hover:bg-slate-100 duration-300
                            ">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroductionProfile