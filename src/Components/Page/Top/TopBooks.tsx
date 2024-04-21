import Book from "./Books/Book"

function TopBooks() {
    return (
        <>
            <div className="border-t border-white my-10 w-96 mx-auto"></div>
            <h1 className=" text-6xl mx-auto w-fit mb-12 max-md:text-4xl">
                影響を受けた本
            </h1>
            <Book />
        </>
    )
}

export default TopBooks