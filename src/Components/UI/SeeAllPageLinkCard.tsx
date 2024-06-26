import { Link } from "react-router-dom"

interface SeeAllPageLinkCardPProps {
    url: string,
    title: string,
    subtitle: string,
}

const SeeAllPageLinkCard:React.FC<SeeAllPageLinkCardPProps> = ({ url, title, subtitle }) => {
    return (
        <div className="bg-slate-900">
            <Link to={url} className=" h-40 rounded-md border-2 border-slate-500 overflow-hidden
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                    max-sm:max-w-[368px] max-sm:h-32 max-sm:min-w-[368px]
                    max-[390px]:min-w-[260px]
                    flex flex-col items-center  justify-center
                    w-full
                ">
                <p className="text-2xl font-serif italic">{title}</p>
                <p className="text-sm m-1">〜 {subtitle} 〜</p>
            </Link>
        </div>
    )
}

export default SeeAllPageLinkCard
