import LittleBlank from "../../../UI/Blanks/LittleBlank"
import SubTitle from "../../../UI/Title/SubTitle"
import ProductCards from "../ProductCards"

const RecentCreation = () => {
    return (
        <>
            <SubTitle title="Recent Creation" subTitle="最近つくったもの" linkId="Recenct" />
            <LittleBlank />
            <ProductCards limit={3}/>
        </>
    )
}

export default RecentCreation