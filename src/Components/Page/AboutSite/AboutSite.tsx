import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import SubTitle from "../../UI/Title/SubTitle"
import License from "./License"
import SpecialThanks from "./SpecialThanks"
import TechnologyStack from "./TechnologyStack"

const AboutSite = () => {
    return (
        <>
            <Header />

            <section>
                <Blank />
            </section>

            <section>
                <SubTitle title="Technology Stack" subTitle="技術スタック" linkId="TechnologyStack" />
                <TechnologyStack />
            </section>

            <section>
                <SubTitle title="License" subTitle="ライセンス" linkId="License" />
                <License />
            </section>

            <section>
                <SubTitle title="Special Thanks" subTitle="衷心からの感謝を！" linkId="SpecialThanks" />
                <SpecialThanks />
            </section>

            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default AboutSite