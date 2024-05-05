import LittleBlank from "../../../UI/Blanks/LittleBlank"
import Title from "../../../UI/Title"
import InfluencedCards from "./InfluencedCards"

const Influenced = () => {
    return (
        <>
            <Title title="Influenced" linkId="Influenced" subTitle="影響を受けたもの" />
            <LittleBlank />
            <InfluencedCards limit={5}/>
        </>
    )
}

export default Influenced