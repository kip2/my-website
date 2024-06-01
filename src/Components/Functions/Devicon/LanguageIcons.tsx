import LanguageIcon from "./LanguageIcon"

interface LangageIconsProps {
    iconsData: string[]
}

const LanguageIcons:React.FC<LangageIconsProps> = ({ iconsData }) => {
    return (
        <>
            <div className="flex">
                {iconsData.map((item, index) => (
                    <LanguageIcon key={index} language={item} />
                ))}
            </div>
        </>
    )
}

export default LanguageIcons