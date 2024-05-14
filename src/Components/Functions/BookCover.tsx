import React, { useState, useEffect } from "react"

interface BookCoverProps {
    isbn: string
}

const BookCover: React.FC<BookCoverProps> = ({ isbn }) => {
    const [coverUrl, setCoverUrl] = useState("")
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

    useEffect(() => {
        const fetchBookCover = async () => {
            const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`
            try {
                const response = await fetch(url)
                const data = await response.json()
                if (data.items && data.items.length > 0) {
                    let imageUrl = data.items[0].volumeInfo.imageLinks?.thumbnail
                    if (imageUrl && imageUrl.startsWith("http://")) {
                        imageUrl = imageUrl.replace("http://", "https://")
                    }
                    setCoverUrl(imageUrl)
                }
            } catch (e) {
                console.error("Error fetching book data:", e)
            }
        }

        fetchBookCover()
    }, [isbn, apiKey])

    return (
        <div className="w-full">
            {coverUrl ? (
                <img className="h-96 w-96" style={{ width: "18rem !important"}} src={coverUrl} alt="Book cover" />
            ) : (
                <p className="text-center">No cover available</p>
            )}
        </div>
    )
}

export default BookCover