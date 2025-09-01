import { FOOTER_LISTS, SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";

const Footer = () => {
    return (
        <section className="bg-black text-white">
            <main className="sec-p lg:sec-p-lg">
                <div className="max-container flex flex-col gap-20 lg:flex-row lg:justify-between">
                    <div className="space-y-6">
                        <Image
                            src="/images/svg/logo-light.svg"
                            alt="Logo"
                            width={162}
                            height={35}
                        />
                        <p className="max-w-80 leading-8 text-white/50">
                            Creativo is where your imagination and our expertise
                            converge to create design solutions that elevate
                            your brand and set you apart from the competition.
                        </p>
                        <p className="text-lg leading-8 font-semibold">
                            hello@creativo.com
                        </p>
                        <p className="text-lg leading-8 font-semibold">
                            +1-800-123 4567
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-10 text-sm sm:*:flex-1">
                        {FOOTER_LISTS.map(({ title, list }) => (
                            <ul key={title} className="space-y-8">
                                <li className="leading-8 font-bold">{title}</li>
                                {list.map((item) => (
                                    <li className="text-white/50" key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </main>
            <main className="max-container space-y-6 border-t-2 border-[#27243D] p-7">
                <p className="text-center text-sm leading-8 text-white/50">
                    Copyright © 2032 Creativo®. All rights reserved. | Made by
                    Fadil Prayadika
                </p>
                <div className="flex items-center justify-center gap-7">
                    {SOCIAL_MEDIAS.map(({ name, icon }) => (
                        <div
                            key={name}
                            className="flex items-center justify-center rounded-lg bg-white p-3"
                        >
                            <Image
                                src={icon}
                                alt={name}
                                width={24}
                                height={24}
                                className="h-auto max-w-5"
                            />
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Footer;
