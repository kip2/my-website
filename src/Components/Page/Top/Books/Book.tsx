import BookCover from "../../../Functions/BookCover"

function Book() {
    return(
        <div className="flex flex-col items-center justify-center"> 
            <h1>Land of Lisp</h1>
            <BookCover isbn="4873115876"/>
            <div className=" w-96">
                <p className="py-2 mx-auto text-left leading-7">
                    プログラミングの楽しさに目覚めた本。<br/>
                    オライリー本なのに、エイリアンが表紙だったり、漫画が随所随所で挟まれていたり、とにかく異色の本。<br/>
                    しかし楽しい。<br/>
                </p>
            </div>
        </div>
    )
}

export default Book