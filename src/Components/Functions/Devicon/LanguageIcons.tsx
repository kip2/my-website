import LanguageIcon from "./LanguageIcon"

interface LangageIconsProps {
    iconsData: Array<string | [string, string]>
}

const LanguageIcons:React.FC<LangageIconsProps> = ({ iconsData }) => {
    return (
        <>
            <div className="flex flex-wrap">
                {iconsData.map((item, index) => (
                    <LanguageIcon key={index} language={item} />
                ))}
            </div>
        </>
    )
}

export default LanguageIcons