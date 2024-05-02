import Blank from "../../UI/Blank"
import ReturnButton from "../../UI/ReturnButton"

const NotFoundPage = () => {
    return (
        <section className="my-auto mx-auto text-6xl italic grid justify-items-center">
            <Blank/>
            <Blank/>
            <h1>404</h1>
            <h1>Not Found</h1>
            <Blank />
            <Blank />
            <ReturnButton path="/"/>
            <p className="mt-5 text-lg">return to top page...</p>
        </section>
    )
}

export default NotFoundPage