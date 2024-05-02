import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Line from "../../UI/Lines/Line"
import LongLine from "../../UI/Lines/LongLine"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Profile from "../Top/Profile"
import AboutInPageLinks from "./AboutInPageLinks"
import Histories from "./History/Histories"
import Introduction from "./Introduction"
import Qualifications from "./Qualifications"

const About = () => {
    
    return (
        <>
            <Header />

            <section>
                <Blank/>
                <Profile />
                <Blank/>
                <AboutInPageLinks/>
                <LittleBlank />
            </section>

            <section>
                <LongLine />
                <LongLine />
                <Blank />
                <Introduction />
                <LittleBlank />
            </section>

            <section>
                <LongLine />
                <LongLine />
                <Blank />
                <Histories />
                <Blank/>
            </section>

            <section>
                <LongLine />
                <LongLine />
                <Blank />
                <Qualifications />
                <Blank/>
            </section>

            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default About