import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ProductPageData } from "../../interface"
import Header from "../../UI/Header"
import Footer from "../../UI/Footer"
import Blank from "../../UI/Blanks/Blank"
import MarkdownViewer from "../../Functions/MarkdownViewer"
import ReturnButton from "../../UI/ReturnButton"

const ProductDetail = () => {
    const {id} = useParams<{ id?: string }>()
    const [productData, setProductData] = useState<ProductPageData | undefined>()

    const fetchData = async (id: string) => {
        const response = await fetch("/json/ProductsData.json")
        const products = await response.json() as ProductPageData[]
        const matchData = products.find(product => product.id === id)
        setProductData(matchData)
        console.log("match data: ", matchData)
    }

    useEffect(() => {
        if (id) {
            fetchData(id)
        }
    }, [id])


    if (!productData) {
        return <div>No data product ...</div>
    }
    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-4xl my-8">{productData.title}</h1>
                <MarkdownViewer filepath={productData.path} /> 
                <ReturnButton path="/products"/>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail