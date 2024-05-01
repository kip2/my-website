import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ProductCards from "./ProductCards"

function Products() {
    return(
        <>
            <Header />
            <h1 className="text-5xl text-center mt-10">My Products</h1>
            <Blank />
            <ProductCards />
            <Footer />
        </>
    )
}

export default Products