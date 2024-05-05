import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import FavoriteCards from "./FavoriteCards"

const Favorite = () =>  {
    return(
        <>
            <Header />

            {/* title section */}
            <section>
                <Blank />
                <Title title="Favorite" subTitle="大好きなもの" linkId="Favorite" />
                <LittleBlank />
            </section>

            <FavoriteCards />

            <ScrollToTopButton/>
            <Blank />
            <Footer />
        </>
    )
}

export default Favorite
