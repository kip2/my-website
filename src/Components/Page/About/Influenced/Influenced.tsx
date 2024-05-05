import LittleBlank from "../../../UI/Blanks/LittleBlank"
import Title from "../../../UI/Title"
import InfluencedCards from "./InfluencedCards"

const Influenced = () => {
    return (
        <>
            <Title title="Influenced" linkId="Influenced" subTitle="影響を受けたもの" />
            <div className="font-thin text-center text-xl mx-auto w-80 mb-2 italic">
                <p>Books are the mirrors of the soul.</p>
                <p className="flex justify-end">Virginia Woolf</p>
            </div>
            <LittleBlank />
            <InfluencedCards limit={5}/>
        </>
    )
}

export default Influenced