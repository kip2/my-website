import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title"
import ProductsInPageLinks from "./ProductsInPageLinks"
import Tool from "./Tool"
import Game from "./Game"
import LongLine from "../../UI/Lines/LongLine"
import Study from "./Study"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import RecentCreation from "./RecentCreation"

const Products = () =>  {
    return(
        <>
            <Header />

            {/* title section */}
            <section>
                <Blank />
                <Title title="My Products" subTitle="つくったもの" linkId="Products" />
                <ProductsInPageLinks/>
                <LittleBlank />
            </section>
            
            {/* Recent creation section */}
            <section>
                <LongLine />
                <LongLine />
                <LittleBlank />
                <RecentCreation />
                <Blank />
            </section>

            {/* Tool section */}
            <section>
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Tool />
            </section>

            {/* Game section */}
            <section>
                <Blank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Game />
            </section>

            {/* Study section */}
            <section>
                <Blank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Study />
            </section>

            <ScrollToTopButton/>
            <Blank />
            <Footer />
        </>
    )
}

export default Products