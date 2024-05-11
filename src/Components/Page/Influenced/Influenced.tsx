import useScrollToHash from "../../Hooks/ScrollToHash"
import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import Line from "../../UI/Lines/Line"
import LongLine from "../../UI/Lines/LongLine"
import ReturnButton from "../../UI/ReturnButton"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title/Title"
import InfluencedCards from "./InfluencedCards"
import InfluencedPageLinks from "./InfluencedPageLinks"

const Influenced = () =>  {
    useScrollToHash()

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
                <InfluencedPageLinks />
                <LittleBlank />
            </section>

            <section>
                <LongLine/>
                <LongLine/>
                <LittleBlank />
                <InfluencedCards />
            </section>


            <LittleBlank />
            <ReturnButton path="/about#Influenced"/>
            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default Influenced
