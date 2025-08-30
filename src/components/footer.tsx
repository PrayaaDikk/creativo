import { FOOTER_LISTS, SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";

const Footer = () => {
    return (
        <section className="bg-black text-white">
            <main>
                <div className="sec-p flex flex-col gap-20">
                    <div className="space-y-6">
                        <Image
                            src="/images/svg/logo-light.svg"
                            alt="Logo"
                            width={162}
                            height={35}
                        />
                        <p className="leading-8 text-white/50 max-w-80">
                            Creativo is where your imagination and our expertise
                            converge to create design solutions that elevate
                            your brand and set you apart from the competition.
                        </p>
                        <p className="text-lg font-semibold leading-8">
                            hello@creativo.com
                        </p>
                        <p className="text-lg font-semibold leading-8">
                            +1-800-123 4567
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-8 sm:*:flex-1">
                        {FOOTER_LISTS.map(({ title, list }) => (
                            <ul key={title} className="space-y-6">
                                <li className="font-bold leading-6">{title}</li>
                                {list.map((item) => (
                                    <li className=" text-white/50" key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="p-7 space-y-6 border-t-2 border-[#27243D]">
                    <p className="text-center text-white/50 text-sm leading-8">
                        Copyright © 2032 Creativo®. All rights reserved. | Made
                        by Fadil Prayadika
                    </p>
                    <div className="flex items-center justify-center gap-7">
                        {SOCIAL_MEDIAS.map(({ name, icon }) => (
                            <div
                                key={name}
                                className="flex items-center justify-center bg-white rounded-lg p-3"
                            >
                                <Image
                                    src={icon}
                                    alt={name}
                                    width={24}
                                    height={24}
                                    className="max-w-5 h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Footer;
