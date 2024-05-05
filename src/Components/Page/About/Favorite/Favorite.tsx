import LittleBlank from "../../../UI/Blanks/LittleBlank"
import Title from "../../../UI/Title/Title"
import FavoriteCards from "./FavoriteCards"

const Favorite = () => {
    return(
        <>
            <Title title="Favorites" linkId="Favorites" subTitle="好きなもの" />
            <FavoriteCards limit={5} />
            <LittleBlank />
        </>
    )
}

export default Favorite