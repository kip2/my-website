import LanguageSmallIcon from "./LanguageSmallIcon"

interface LangageSmallIconsProps {
    iconsData: Array<string | [string, string]>
}

const LanguageSmallIcons:React.FC<LangageSmallIconsProps> = ({ iconsData }) => {
    return (
        <>
            <div className="flex flex-wrap">
                {iconsData.map((item, index) => (
                    <LanguageSmallIcon key={index} language={item} />
                ))}
            </div>
        </>
    )
}

export default LanguageSmallIcons