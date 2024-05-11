import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title/Title"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import FavoriteCards from "./FavoriteCards"
import ReturnButton from "../../UI/ReturnButton"
import useScrollToHash from "../../Hooks/ScrollToHash"
import FavoritePageLinks from "./FavoritePageLinks"
import LongLine from "../../UI/Lines/LongLine"

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

            </section>
            <FavoriteCards />

            <LittleBlank />
            <ReturnButton path="/about#Favorites"/>

            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default Favorite
