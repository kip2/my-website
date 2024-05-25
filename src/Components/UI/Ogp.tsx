import { Helmet } from 'react-helmet-async'

const Ogp = () => {
    return(
        <>
            <Helmet>
                <meta property="og:title" content="kip2 Home Page"/>
                <meta property="og:description" content="kip2がいろいろなものを虫干しするホームページ"/>
                <meta property="og:image" content="https://www.kip2.dev/img/ogpimage.jpg" />
                <meta property="og:url" content="https://www.kip2.dev/"/>
                <meta property="og:type" content="website"/>

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@_kip2" />
                <meta name="twitter:title" content="kip2 Home Page" />
                <meta name="twitter:description" content="kip2がいろいろなものを虫干しするホームページ" />
                <meta name="twitter:image" content="https://www.kip2.dev/img/ogpimage.jpg" />
            </Helmet>
        </>
    )
}

export default Ogp