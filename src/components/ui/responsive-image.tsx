"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ResponsiveImageProps {
    src: string;
    smallSrc: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
    loading?: "lazy" | "eager";
    sizes?: string;
}

const ResponsiveImage = ({
    src,
    smallSrc,
    alt,
    width,
    height,
    className = "",
    priority = false,
    loading = "lazy",
    sizes = "(max-width: 768px) 100vw, 50vw",
}: ResponsiveImageProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const imageSrc = isMobile ? smallSrc : src;

    return (
        <Image
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority={priority}
            loading={loading}
            sizes={sizes}
        />
    );
};

export default ResponsiveImage;
