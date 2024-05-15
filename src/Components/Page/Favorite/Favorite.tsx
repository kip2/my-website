import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import Title from "../../UI/Title/Title"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import FavoriteCards from "./FavoriteCards"
import ReturnButton from "../../UI/ReturnButton"
import useScrollToHash from "../../Hooks/ScrollToHash"
import FavoritePageLinks from "./FavoritePageLinks"
import LongLine from "../../UI/Lines/LongLine"
import Game from "./Genre/Game"
import Manga from "./Genre/Manga"
import Philosophy from "./Genre/Philosophy"

const Favorite = () =>  {
    useScrollToHash()

    return(
        <>
            <Header />

            {/* title section */}
            <section>
                <Blank />
                <Title title="Favorite" subTitle="大好きなもの" linkId="Favorite" />
                <FavoritePageLinks />
                <LittleBlank />
            </section>

            <section>
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Game />
            </section>

            <section>
                <LittleBlank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Manga />
            </section>

            <section>
                <LittleBlank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Philosophy />
            </section>

            <LittleBlank />
            <ReturnButton path="/about#Favorites"/>

            <Footer />
        </>
    )
}

export default Favorite
