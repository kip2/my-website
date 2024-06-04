import iconMap from "./iconMap"

interface LanguageSmallIconProps  {
    language: string | [string, string]
}

const LanguageSmallIcon:React.FC<LanguageSmallIconProps> = ({ language }) => {
    let displayName
    let iconKey

    if (Array.isArray(language)) {
        [displayName, iconKey] = language
    } else {
        displayName = language
        iconKey = language
    }

    const iconClass = iconMap[iconKey.toLowerCase()]

    if (!iconClass) {
        return <></>
    }

    return (
        <>
            <i className={`${iconClass}
                text-md  px-1 icon-content
                max-[368px]:pb-2
            `}>
                <div className="text-xs language-small-tooltip">{displayName}</div>
            </i>
        </>
    )
}

export default LanguageSmallIcon