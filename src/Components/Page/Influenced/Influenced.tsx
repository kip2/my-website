import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Line from "../../UI/Lines/Line"
import ReturnButton from "../../UI/ReturnButton"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title/Title"
import InfluencedCards from "./InfluencedCards"

const Influenced = () =>  {
    return(
        <>
            <Header />

            {/* title section */}
            <section>
                <Blank />
                <Title title="Influenced" subTitle="影響を受けたもの" linkId="Influenced" />
                <div className="font-thin text-center text-xl mx-auto w-80 mb-2 italic">
                    <p>Books are the mirrors of the soul.</p>
                    <p className="flex justify-end">Virginia Woolf</p>
                </div>
                <Line />
            </section>

            <InfluencedCards />

            <LittleBlank />
            <ReturnButton path="/about#Influenced"/>
            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default Influenced
