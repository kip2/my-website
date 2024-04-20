function Header() {
    return (
        <div className="p-8 ">
            <div className="flex justify-center py-7">
                <p className="text-6xl">Welcome to My  SITE !</p>
            </div>
            <div className="mx-auto flex justify-between my-2 text-3xl">
                <h1 className="col-span-2">TOP</h1>
                <h1 className="col-span-2">ABOUT</h1>
                <h2 className="col-span-2">PRODUCTS</h2>
            </div>
        </div>
    )
}

export default Header