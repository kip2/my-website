const ProductCard = () => {
    return (
        <>
            <div className="w-80 h-50 rounded-md border-2 border-slate-500 overflow-hidden 
                    hover:bg-slate-200/10 duration-500 hover:border-slate-200
                ">
                <div className="h-2/3">
                    <img className="w-full h-full object-cover" src="/img/thumbnail/yume_t.png"></img>
                </div>
                <div className="h-1/2 flex flex-col p-4 bg-slate-300/10 ">
                    <h2 className="mx-auto text-lg font-semibold pb-2 overflow-hidden">
                        せっかち夢十夜
                    </h2>
                    <p className="mx-auto text-sm overflow-hidden whitespace-nowrap">
                        {/* 40文字のみ */}
                        夢十夜を元ネタにしたClickerゲーム
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductCard