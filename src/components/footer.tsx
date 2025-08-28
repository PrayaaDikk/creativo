import { FOOTER_LISTS, SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";

const Footer = () => {
    return (
        <section className="bg-black text-white">
            <main>
                <div className="py-[100px] px-[30px] flex flex-col gap-[85px]">
                    <div className="space-y-[24px]">
                        <Image
                            src="/images/svg/logo-light.svg"
                            alt="Logo"
                            width={162}
                            height={35}
                        />
                        <p className="text-[18px] leading-[34px] text-white/50 max-w-[314px]">
                            Creativo is where your imagination and our expertise
                            converge to create design solutions that elevate
                            your brand and set you apart from the competition.
                        </p>
                        <p className="text-[24px] font-semibold leading-[28px]">
                            hello@creativo.com
                        </p>
                        <p className="text-[24px] font-semibold leading-[28px]">
                            +1-800-123 4567
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-[24px]">
                        {FOOTER_LISTS.map(({ title, list }) => (
                            <ul key={title}>
                                <li className="font-bold text-[20px] leading-[28px] mb-[24px]">
                                    {title}
                                </li>
                                {list.map((item) => (
                                    <li
                                        className="text-[20px] leading-[74px] text-white/50"
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="p-[30px] space-y-[24px] border-t-2 border-[#27243D]">
                    <p className="text-center text-white/50 text-[18px] leading-[34px]">
                        Copyright © 2032 Creativo®. All rights reserved. | Made
                        by Fadil Prayadika
                    </p>
                    <div className="flex items-center justify-center gap-[30px]">
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
