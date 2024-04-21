import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Quotes from "../../UI/Quotes"
import TopBooks from "./TopBooks"
import TopProfile from "./TopProfile"

function Top() {
    return (
        <>
            <Header/>
            <Blank />
            <Quotes />
            <Blank />
            <TopProfile/>
            <Blank />
            <TopBooks/>
            <Footer/>
        </>
    )
}

export default Top