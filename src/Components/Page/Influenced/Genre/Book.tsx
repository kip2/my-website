import Title from "../../../UI/Title/Title"
import InfluencedCards from "../InfluencedCards"

const Book = () => {
    return(
        <>
            <Title title="Book" subTitle="本" linkId="Book" />
            <InfluencedCards genre="book" />
        </>
    )
}

export default Book