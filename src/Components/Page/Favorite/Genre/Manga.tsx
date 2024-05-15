import Title from "../../../UI/Title/Title"
import FavoriteCards from "../FavoriteCards"

const Manga = () => {
    return(
        <>
            <Title title="Manga" subTitle="マンガ" linkId="Manga" />
            <FavoriteCards genre="manga" />
        </>
    )
}

export default Manga
