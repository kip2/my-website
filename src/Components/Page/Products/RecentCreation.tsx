import Title from "../../UI/Title"
import ProductCards from "./ProductCards"

const RecentCreation = () => {
    return (
        <>
            <Title title="Recent" subTitle="最近つくったもの" linkId="Recenct" />
            <ProductCards limit={3}/>
        </>
    )
}

export default RecentCreation