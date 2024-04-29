import Book from "./Books/Book"
import booksData from "../../../json/BookData.json"

function TopBooks() {
    return (
        <>
            <div className="border-t border-white mb-20 mt-7 w-96 mx-auto"></div>
            <h1 className=" text-6xl mx-auto w-fit mb-7 max-md:text-4xl">
                影響を受けたもの
            </h1>
            <div className="font-thin text-center text-xl mx-auto w-80 mb-2 italic">
                <p>Books are the mirrors of the soul.</p>
                <p className="flex justify-end">Virginia Woolf</p>
            </div>
            <div>
                {booksData.map((book, index) => (
                    <Book key={index} title={book.title} isbn={book.isbn} description={book.description} />
                ))}
            </div>
        </>
    )
}

export default TopBooks