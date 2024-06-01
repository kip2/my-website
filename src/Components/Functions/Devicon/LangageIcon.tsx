import iconMap from "./iconMap"

interface LanguageIconProps  {
    language: string
}

const LanguageIcon:React.FC<LanguageIconProps> = ({ language }) => {
    const iconClass = iconMap[language.toLowerCase()]

    if (!iconClass) {
        return <></>
    }

    return (
        <div className="icon-content">
            <i className={`${iconClass}
                text-xl mx-2 p-1 border-2 border-gray-700 rounded-xl 
                bg-gray-800
            `}>
            </i>
            <div className=" text-sm tooltip">{language}</div>
        </div>
    )
}

export default LanguageIcon