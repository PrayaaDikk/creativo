"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/constants";

const ServicesSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="about" className="sec-p lg:sec-p-lg bg-black text-white">
            <div className="max-container">
                <main className="relative flex flex-col gap-7 lg:flex-row">
                    <p className="text-xl lg:min-w-44 lg:py-2">Our Services</p>
                    <div>
                        {SERVICES.map((service, i) => (
                            <article className="space-y-6" key={i}>
                                <div
                                    className="flex cursor-pointer items-start justify-between"
                                    onClick={() => handleToggle(i)}
                                >
                                    <h1 className="text-3xl leading-12 font-medium">
                                        {service.title}
                                    </h1>
                                    <figure
                                        className={`transition-transform duration-300 ${
                                            openIndex === i ? "rotate-180" : ""
                                        }`}
                                    >
                                        <Image
                                            src="/icons/expand-down.svg"
                                            alt="Expand Down Icon"
                                            width={27}
                                            height={16}
                                            className="size-auto"
                                        />
                                    </figure>
                                </div>
                                <div
                                    className={`mb-6 h-[1px] bg-white/50 transition-colors duration-300 ${
                                        openIndex === i
                                            ? "bg-white/50"
                                            : "bg-white/30"
                                    }`}
                                ></div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                        openIndex === i
                                            ? "max-h-[500px] opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="space-y-6 py-2">
                                        <p className="leading-8 text-white/70 lg:text-lg">
                                            {service.description}
                                        </p>
                                        <div className="mb-6 h-[1px] bg-white/50"></div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ServicesSection;
