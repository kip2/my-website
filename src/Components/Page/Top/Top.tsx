import Blank from "../../UI/Blanks/Blank"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Quotes from "../../UI/Quotes"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import UnderConstruction from "../../UI/UnderConstruction"
import Profile from "./Profile"

const Top = () => {
    return (
        <>
            <UnderConstruction />
            <Header/>
            <Blank />
            <Quotes />
            <LittleBlank />

            <Profile />

            <ScrollToTopButton />
            <Footer/>
        </>
    )
}

export default Top