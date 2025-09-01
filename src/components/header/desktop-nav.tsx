import { Button } from "@/components/ui/button";

interface DesktopNavProps {
    scrollToSection: (sectionId: string) => void;
    getMenuTextColor: (sectionId: string) => string;
}

const DesktopNav = ({ scrollToSection, getMenuTextColor }: DesktopNavProps) => {
    return (
        <nav className="hidden md:block">
            <ul className="flex items-center gap-12">
                <li>
                    <button
                        onClick={() => scrollToSection("home")}
                        className={`py-2 transition-colors duration-200 ${getMenuTextColor("home")}`}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("about")}
                        className={`py-2 transition-colors duration-200 ${getMenuTextColor("about")}`}
                    >
                        About Us
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection("portfolio")}
                        className={`py-2 transition-colors duration-200 ${getMenuTextColor("portfolio")}`}
                    >
                        Portfolio
                    </button>
                </li>
                <li>
                    <Button className="bg-blueTheme hover:bg-blueTheme/95 px-6 py-3 font-bold text-white transition-colors duration-200 hover:scale-105">
                        GET IN TOUCH
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default DesktopNav;
