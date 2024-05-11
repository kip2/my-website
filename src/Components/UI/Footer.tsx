
const Footer = () => {
    return (
        <>
            <div className="border-t border-white mt-10 mb-7"></div>
            <footer className="pb-3 text-center">
                <p className="text-lg font-serif font-bold mb-4">© 2024 kip2</p>
                <div className="flex justify-center">
                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    <img alt="Creative Commons License" style={{borderWidth: 0}} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
                    </a>
                </div>
                <p className="text-xs mt-3">このコンテンツは<a href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0ライセンス</a>の下で提供されています。</p>
            </footer>
        </>
    )
}

export default Footer