import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import MarkdownViewer from "../../Functions/MarkdownViewer"

function Products() {
    return(
        <>
            <Header />
            <h1>My Products!</h1>
            <Blank />
            <div className=" text-xl mx-auto w-fit mb-7 max-md:text-4xl">
                <MarkdownViewer filepath="/src/markdown/Products/sample.md" />
            </div>
            <Footer />
        </>
    )
}

export default Products