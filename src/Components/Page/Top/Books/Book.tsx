import BookCover from "../../../Functions/BookCover"

interface BookProps {
    title: string,
    isbn: string,
    description: string
}

const Book: React.FC<BookProps> = ({ title, isbn, description })  => {
    return(
        <div className="flex flex-col items-center justify-center"> 
            <h1 className="text-5xl max-md:text-3xl mb-8 underline underline-offset-8">{title}</h1>
            <BookCover isbn={isbn}/>
            <div className=" w-100 max-md:w-96 mt-5">
                <p className="py-2 mx-auto text-left leading-8">
                    {description}
                    {/* プログラミングの楽しさに目覚めた本。<br/>
                    オライリー本なのに、エイリアンが表紙だったり、漫画が随所随所で挟まれていたり、とにかく異色の本。<br/>
                    しかし楽しい。<br/> */}
                </p>
            </div>
        </div>
    )
}

export default Book