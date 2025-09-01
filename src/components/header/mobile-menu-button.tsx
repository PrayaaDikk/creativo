interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
        >
            <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-auto w-7 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                }`}
            >
                <path
                    d="M5.625 11.252H39.375M5.625 22.502H39.375M5.625 33.752H39.375"
                    stroke="black"
                    strokeWidth="3.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default MobileMenuButton;
