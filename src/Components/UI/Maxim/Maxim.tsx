import { useState, useEffect } from 'react'
import LoadingMaxim from './LoadingMaxim'

interface Maxim {
    content: string,
    author: string,
}

const Maxim = () => {
    const [maxim, setMaxim] = useState<Maxim | null>(null)

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then((data: Maxim) => {
                setMaxim(data)
            })
            .catch(e => console.error("Error fetching quote:", e))
    }, [])

    return (
        <>
        <div>
            <h1 className='mx-auto text-center text-5xl font-serif italic'>
                Maxim
            </h1>
            <p className="text-sm text-center mt-3 mb-5 italic">
                〜 本日の金言 〜
            </p>
            {maxim ? (
                <blockquote className=' font-thin mx-auto w-144 max-md:w-100 max-sm:w-80 text-xl mt-5 text-center italic'>
                    {maxim.content}
                    <footer className='flex justify-end mr-10'>{maxim.author}</footer>
                </blockquote>
            ) : (
                <LoadingMaxim />
            )}
        </div>
        <div className="border-t border-white my-5 w-80 mx-auto"></div>
        </>
    )
}

export default Maxim