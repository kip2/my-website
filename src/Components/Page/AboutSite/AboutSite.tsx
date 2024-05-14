import useScrollToHash from "../../Hooks/ScrollToHash"
import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import Line from "../../UI/Lines/Line"
import LongLine from "../../UI/Lines/LongLine"
import SubTitle from "../../UI/Title/SubTitle"
import Title from "../../UI/Title/Title"
import License from "./License"
import SpecialThanks from "./SpecialThanks"
import TechnologyStack from "./TechnologyStack"

const AboutSite = () => {
    useScrollToHash()

    return (
        <>
            <Header />

            <section>
                <Blank />
                <Title title="About This Site" subTitle="このサイトについて" linkId="AboutSite" />
            </section>

            <section>
                <LongLine />
                <LongLine />
                <LittleBlank />
                <LittleBlank />
                <SubTitle title="Technology Stack" subTitle="技術スタック" 
                linkId="TechnologyStack" />
                <LittleBlank />
                <TechnologyStack />
                <LittleBlank />
            </section>

            <section>
                <Line />
                <SubTitle title="License" subTitle="ライセンス" linkId="License" />
                <LittleBlank />
                <License />
                <LittleBlank />
            </section>

            <section>
                <Line />
                <SubTitle title="Special Thanks" subTitle="衷心からの感謝を！" linkId="SpecialThanks" />
                <LittleBlank />
                <LittleBlank />
                <SpecialThanks />
                <LittleBlank />
            </section>

            <Footer />
        </>
    )
}

export default AboutSite