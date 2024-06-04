import iconMap from "./iconMap"

interface LanguageIconProps  {
    language: string | [string, string]
}

const LanguageIcon:React.FC<LanguageIconProps> = ({ language }) => {
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
                text-6xl  px-1 mx-1 my-1
                icon-content
            `}>
                <div className="language-tooltip">{displayName}</div>
            </i>
        </>
    )
}

export default LanguageIcon