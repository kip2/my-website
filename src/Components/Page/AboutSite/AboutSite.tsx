import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import SubTitle from "../../UI/Title/SubTitle"
import Title from "../../UI/Title/Title"
import License from "./License"
import SpecialThanks from "./SpecialThanks"
import TechnologyStack from "./TechnologyStack"

const AboutSite = () => {
    return (
        <>
            <Header />

            <section>
                <Blank />
                <Title title="About This Site" subTitle="このサイトについて" linkId="AboutSite" />
            </section>

            <section>
                <SubTitle title="Technology Stack" subTitle="技術スタック" linkId="TechnologyStack" />
                <LittleBlank />
                <TechnologyStack />
                <LittleBlank />
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