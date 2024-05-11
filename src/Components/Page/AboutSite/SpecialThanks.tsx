const SpecialThanks = () => {
    const specialThanks = {
        "きよのりG" : "作成するにあたって何度も根気よくサイトの見栄えを確認していただきました。また、サイトについてのデザイン案について相談に乗っていただきました。",
    }
    return (
        <div className="text-center">
            <p className="mb-8">以下の方々に感謝を捧げます。</p>
            {Object.entries(specialThanks).map(([name, comment], index) => (
                <div className="mt-5" key={index}>
                    <p className="mb-2"><span className="font-bold text-xl">{name}</span> さん</p>
                    <p>{comment}</p>
                </div>
            ))}
                <div className="mt-5">
                    <p className="mb-2"><span className="font-bold text-xl">And You !</span></p>
                    <p>このサイトを見てくれてありがとう！</p>
                </div>
        </div>
    )
}

export default SpecialThanks