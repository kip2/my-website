import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ProductCards from "./ProductCards"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title"
import ProductsInPageLinks from "./ProductsInPageLinks"
import Line from "../../UI/Lines/Line"
import Tools from "./Tools"
import Game from "./Game"
import LongLine from "../../UI/Lines/LongLine"
import Study from "./Study"
import LittleBlank from "../../UI/Blanks/LittleBlank"

const Products = () =>  {
    return(
        <>
            <Header />
            <Blank />
            <Title title="My Products" subTitle="つくったもの" linkId="Products" />
            <ProductsInPageLinks/>
            <LittleBlank />

            <LongLine />
            <LongLine />
            <LittleBlank />
            <Tools />
            <ProductCards />

            <Blank />
            <LongLine />
            <LongLine />
            <LittleBlank />
            <Game />
            <ProductCards />

            <Blank />
            <LongLine />
            <LongLine />
            <LittleBlank />
            <Study />
            <ProductCards />

            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default Products