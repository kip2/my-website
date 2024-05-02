import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ProductCards from "./ProductCards"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Title from "../../UI/Title"

const Products = () =>  {
    return(
        <>
            <Header />
            <Blank />
            <Blank />
            <Title
                title="My Products"
                subTitle="つくったもの"
                linkId="Products"
            />
            <Blank />
            <ProductCards />
            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default Products