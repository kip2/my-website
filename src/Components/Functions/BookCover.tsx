import React, { useState, useEffect } from "react"

interface BookCoverProps {
    isbn: string
}

const BookCover: React.FC<BookCoverProps> = ({ isbn }) => {
    const [coverUrl, setCverUrl] = useState("")
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

    useEffect(() => {
        const fetchBookCover = async () => {
            const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                if (data.items && data.items.length > 0) {
                    const imageUrl = data.items[0].volumeInfo.imageLinks?.thumbnail
                    setCverUrl(imageUrl)
                }
            } catch (e) {
                console.error("Error fetching book data:", e)
            }
        }

        fetchBookCover()
    }, [isbn, apiKey])

    return (
        <div>
            {coverUrl ? (
                <img src={coverUrl} alt="Book cover" />
            ) : (
                <p>No cover available</p>
            )}
        </div>
    )
}

export default BookCover