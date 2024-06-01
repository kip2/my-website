import iconMap from "./iconMap"

interface LanguageIconProps  {
    language: string
}

const LanguageIcon:React.FC<LanguageIconProps> = ({ language }) => {
    const iconClass = iconMap[language.toLowerCase()]

    return <i className={iconClass}/>
}

export default LanguageIcon