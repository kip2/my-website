import SiteMapContent from "./SiteMapContent"

interface SiteMapProps {
    closeModal: () => void
}
const SiteMap: React.FC<SiteMapProps> = ({ closeModal }) => {
    return (
            <div className="bg-slate-500 rounded-md p-5 min-h-[300px] min-w-[300px] max-w-[400px] m-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end">
                    <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30" className="cursor-pointer">
                        <rect width="256" height="256" fill="none"/>
                        <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                    </svg>
                </div>
                <SiteMapContent />
            </div>
    );
};

export default SiteMap