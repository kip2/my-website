import iconMap from "./iconMap"

interface LanguageSmallIconProps  {
    language: string
}

const LanguageSmallIcon:React.FC<LanguageSmallIconProps> = ({ language }) => {
    const iconClass = iconMap[language.toLowerCase()]

    if (!iconClass) {
        return <></>
    }

    return (
        <>
            <i className={`${iconClass}
                text-md  px-1 icon-content
                max-[368px]:pb-2
            `}>
                <div className="text-xs language-small-tooltip">{language}</div>
            </i>
        </>
    )
}

export default LanguageSmallIcon