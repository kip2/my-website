import { useState, useEffect } from 'react'

interface Quote {
    content: string,
    author: string,
}

const Quotes = () => {
    const [quote, setQuote] = useState<Quote | null>(null)

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then((data: Quote) => {
                setQuote(data)
            })
            .catch(e => console.error("Error fetching quote:", e))
    }, [])

    return (
        <>
        <div>
            <h1 className='mx-auto w-144 max-md:w-100 max-sm:w-96 text-center text-5xl font-serif italic'>
                Maxim
            </h1>
            <p className="text-sm text-center mt-3 mb-5 italic">
                〜 本日の金言 〜
            </p>
            {quote ? (
                <blockquote className=' font-thin mx-auto w-144 max-md:w-100 max-sm:w-80 text-xl mt-5 text-center italic'>
                    {quote.content}
                    <footer className='flex justify-end mr-10'>{quote.author}</footer>
                </blockquote>
            ) : (
                <p className=' font-thin mx-auto w-144 text-center text-2xl my-10'>Loading quote...</p>
            )}
        </div>
        <div className="border-t border-white my-5 w-80 mx-auto"></div>
        </>
    )
}

export default Quotes