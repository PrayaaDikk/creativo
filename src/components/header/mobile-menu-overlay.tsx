import { Button } from "@/components/ui/button";

interface MobileMenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    onMenuClick: (action: () => void) => void;
    scrollToSection: (sectionId: string) => void;
    getMenuTextColor: (sectionId: string, isMobile: boolean) => string;
}

const MobileMenuOverlay = ({
    isOpen,
    onClose,
    onMenuClick,
    scrollToSection,
    getMenuTextColor,
}: MobileMenuOverlayProps) => {
    return (
        <div
            className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out md:hidden ${
                isOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            }`}
        >
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
            />

            <div
                className={`absolute top-0 right-0 min-h-dvh w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="min-d-dvh flex flex-col">
                    <div className="flex justify-end px-7 py-4">
                        <button
                            onClick={onClose}
                            className="rounded-full transition-all duration-200 hover:scale-110 hover:bg-gray-100"
                            aria-label="Close mobile menu"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                            >
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex-1 px-6">
                        <ul className="space-y-6">
                            <li>
                                <button
                                    onClick={() =>
                                        onMenuClick(() =>
                                            scrollToSection("home"),
                                        )
                                    }
                                    className={`w-full py-3 text-left text-xl transition-all duration-200 hover:translate-x-2 ${getMenuTextColor("home", true)}`}
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        onMenuClick(() =>
                                            scrollToSection("about"),
                                        )
                                    }
                                    className={`w-full py-3 text-left text-xl transition-all duration-200 hover:translate-x-2 ${getMenuTextColor("about", true)}`}
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        onMenuClick(() =>
                                            scrollToSection("portfolio"),
                                        )
                                    }
                                    className={`w-full py-3 text-left text-xl transition-all duration-200 hover:translate-x-2 ${getMenuTextColor("portfolio", true)}`}
                                >
                                    Portfolio
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="border-t border-gray-200 p-6">
                        <Button className="bg-blueTheme hover:bg-blueTheme/95 w-full py-4 font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
                            GET IN TOUCH
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuOverlay;
