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
        <section className="sec-p bg-black text-white">
            <main className="flex flex-col gap-7">
                <p className="text-xl">Our Services</p>
                <div>
                    <div>
                        {SERVICES.map((service, i) => (
                            <article className="space-y-6" key={i}>
                                <div
                                    className="flex justify-between items-start cursor-pointer"
                                    onClick={() => handleToggle(i)}
                                >
                                    <h1 className="font-medium text-3xl leading-12">
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
                                    className={`h-[1px] bg-white/50 mb-6 transition-colors duration-300 ${
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
                                        <p className="leading-8 text-white/70">
                                            {service.description}
                                        </p>
                                        <div className="h-[1px] bg-white/50 mb-6"></div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default ServicesSection;
