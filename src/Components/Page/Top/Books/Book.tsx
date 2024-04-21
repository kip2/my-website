import BookCover from "../../../Functions/BookCover"

interface BookProps {
    title: string,
    isbn: string,
    description: string
}

const Book: React.FC<BookProps> = ({ title, isbn, description })  => {
    return(
        <div className="flex flex-col items-center justify-center mt-12"> 
            <h1 className="text-5xl max-md:text-3xl mb-8 underline underline-offset-8">{title}</h1>
            <BookCover isbn={isbn}/>
            <div className=" w-160 max-lg:w-144 max-md:w-96 mt-5">
                <p className="py-2 mx-auto text-left leading-8">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Book