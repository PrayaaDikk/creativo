"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DesktopNav, MobileMenuButton, MobileMenuOverlay } from "./header/index";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleMenuClick = (action: () => void) => {
        closeMobileMenu();
        action();
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = element.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });

            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "portfolio"];
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 0;
            const scrollPosition = window.scrollY + headerHeight + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getMenuTextColor = (sectionId: string, isMobile: boolean = false) => {
        const isActive = activeSection === sectionId;
        if (isMobile) {
            return isActive ? "text-blueTheme font-semibold" : "text-grayTheme";
        }
        return isActive
            ? "text-blueTheme font-semibold"
            : "text-grayTheme hover:text-blueTheme";
    };

    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm">
            <div className="max-container px-7 py-4 lg:px-16">
                <div className="flex items-center justify-between">
                    <Image
                        src="/images/svg/logo.svg"
                        alt="logo"
                        width={162}
                        height={35}
                        className="h-auto max-w-24"
                    />

                    <MobileMenuButton 
                        isOpen={isMobileMenuOpen} 
                        onClick={toggleMobileMenu} 
                    />

                    <DesktopNav 
                        scrollToSection={scrollToSection}
                        getMenuTextColor={getMenuTextColor}
                    />
                </div>
            </div>

            <MobileMenuOverlay
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                onMenuClick={handleMenuClick}
                scrollToSection={scrollToSection}
                getMenuTextColor={getMenuTextColor}
            />
        </header>
    );
};

export default Header;
