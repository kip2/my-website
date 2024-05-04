import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LongLine from "../../UI/Lines/LongLine"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title"
import Profile from "./Profile"
import AboutInPageLinks from "./AboutInPageLinks"
import Favorite from "./Favorite/Favorite"
import Histories from "./History/Histories"
import Influenced from "./Influenced/Influenced"
import Introduction from "./Introduction"
import Qualifications from "./Qualification/Qualifications"

const About = () => {
    
    return (
        <>
            <Header />

            <section>
                <Blank/>
                <Title title="About" linkId="About" subTitle="私について" />
                <AboutInPageLinks/>
                <LittleBlank/>
                <LongLine />
                <LongLine />
            </section>

            <section>
                <LittleBlank/>
                <Profile />
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
                <Favorite />
                <LittleBlank />
            </section>

            <section>
                <LongLine />
                <LongLine />
                <Blank />
                <Influenced/>
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