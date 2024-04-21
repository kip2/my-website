import Book from "./Books/Book"
import booksData from "../../../../public/json/BookData.json"

function TopBooks() {
    return (
        <>
            <div className="border-t border-white my-10 w-96 mx-auto"></div>
            <h1 className=" text-6xl mx-auto w-fit mb-12 max-md:text-4xl">
                影響を受けた本
            </h1>
            <div>
                {booksData.map((book, index) => (
                    <Book key={index} title={book.title} isbn={book.isbn} description={book.description} />
                ))}
            </div>
        </>
    )
}

export default TopBooks