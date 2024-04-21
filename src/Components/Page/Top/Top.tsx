import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import TopBooks from "./TopBooks"
import TopProfile from "./TopProfile"

function Top() {
    return (
        <>
            <Header/>
            <Blank />
            <Blank />
            <TopProfile/>
            <Blank />
            <TopBooks/>
            <Footer/>
        </>
    )
}

export default Top