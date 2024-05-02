import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);  
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button onClick={scrollToTop} disabled={isTop}
            className=' border-2 rounded-full
                border-zinc-400 bg-indigo-900
                bottom-5 right-5 z-50 fixed text-lg
                py-2 px-5
                shadow opacity-50
                transition-opacity duration-300
            ' 
            style={{
                opacity: isTop ? 0.3 : 0.8,
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" 
                    width={32} height={32} >
                    <rect width="256" height="256" fill="none"/>
                    <polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                </svg>
            </button>
        </>
    );
};

export default ScrollToTopButton;
