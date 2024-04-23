import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4 py-5 text-2xl">
                <Link to="/" className="lg:col-start-2 flex justify-center bg-slate-300/10 hover:bg-gray-600 border-2 rounded-xl border-slate-400/10 py-2 max-w-56 transition duration-500 ease-in-out">Top</Link>
                <Link to="/about" className="flex justify-center bg-slate-300/10 hover:bg-gray-600 border-2 rounded-xl border-slate-400/10 py-2 max-w-56 transition duration-500 ease-in-out">About</Link>
                <Link to="/products" className="flex justify-center bg-slate-300/10 hover:bg-gray-600 border-2 rounded-xl border-slate-400/10 py-2 max-w-56 transition duration-500 ease-in-out">Products</Link>
            </div>
        </>
    )
}

export default Header