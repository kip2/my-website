function Header() {
    return (
        <>
            <div className="grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4 py-5 text-2xl">
                <a className="flex justify-center bg-slate-300/10 hover:bg-gray-600 border-2 rounded-xl border-slate-400/10 py-2 max-w-56">Top</a>
                <a className="flex justify-center bg-slate-300/10 hover:bg-gray-600 border-2 rounded-xl border-slate-400/10 py-2 max-w-56">About</a>
                <a className="flex justify-center bg-slate-300/10 hover:bg-gray-600 border-2 rounded-xl border-slate-400/10 py-2 max-w-56">Products</a>
            </div>
            <div className="border-t border-white my-1"></div>
        </>
    )
}

export default Header