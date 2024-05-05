import LittleBlank from "../../../UI/Blanks/LittleBlank"
import Title from "../../../UI/Title/Title"
import InfluencedCards from "./InfluencedCards"

const Influenced = () => {
    return (
        <>
            <Title title="Influenced" linkId="Influenced" subTitle="影響を受けたもの" />
            <InfluencedCards limit={5}/>
            <LittleBlank />
        </>
    )
}

export default Influenced