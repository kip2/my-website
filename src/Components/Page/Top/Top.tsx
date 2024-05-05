import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LongLine from "../../UI/Lines/LongLine"
import Quotes from "../../UI/Quotes"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import SubTitle from "../../UI/Title/SubTitle"
import Profile from "./Profile"
import RecentProducts from "./RecentProducts"

const Top = () => {
    return (
        <>
            <Header/>
            <Blank />
            <Quotes />
            <Blank />

            <Profile />

            <section>

                <Blank/>
                <LongLine />
                <Blank/>
                <SubTitle title="Recent Creations" subTitle="最近作ったもの" linkId="TopRecent" />
                <LittleBlank />
                <RecentProducts />
            </section>

            <ScrollToTopButton />
            <Footer/>
        </>
    )
}

export default Top