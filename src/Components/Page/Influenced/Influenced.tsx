import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import InfluencedCards from "./InfluencedCards"

const Influenced = () =>  {
    return(
        <>
            <Header />

            {/* title section */}
            <section>
                <Blank />
                <Title title="Influenced" subTitle="影響を受けたもの" linkId="Influenced" />
                <LittleBlank />
            </section>

            <InfluencedCards />

            <ScrollToTopButton/>
            <Blank />
            <Footer />
        </>
    )
}

export default Influenced
