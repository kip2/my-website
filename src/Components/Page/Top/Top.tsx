import Blank from "../../UI/Blank"

function Top() {
    return (
        <>
            <Blank />
            <h1 className="text-6xl font-bold w-full text-center">My Top page!</h1>
            <Blank />
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="w-1/2 md:w-auto max-w-md mx-4 my-2">
                    <img className="rounded-full w-48 h-48"
                            src="public/myimage.png" alt="my image"/>
                </div>
                <p className="text-center mx-4 my-2">Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust Rust</p>
            </div>
        </>
    )
}

export default Top