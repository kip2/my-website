const SpecialThanks = () => {
    const specialThanks = {
        "すかんぴん" : "作成するにあたって、サイトの見栄えと記事の校正を、都度都度、根気よく確認していただきました。また、サイトについてのデザイン案についての相談にも乗っていただきました。",
        "もりたぬき" : "苦手なレスポンシブ周りのレイアウト崩れについて、修正案をご提案いただきました。",
        "Aki158" : "Github READMEが読み取りやすくなる書き方について、教えていただきました。",
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