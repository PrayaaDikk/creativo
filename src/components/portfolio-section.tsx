import Image from "next/image";

const PortfolioSection = () => {
    return (
        <section className="py-[100px] px-[30px]">
            <main className="flex flex-col gap-[28px]">
                <p className="text-[22px]">Our Portfolio</p>
                <div className="flex flex-col gap-[100px]">
                    <h1 className="text-[40px] leading-[60px] font-medium">
                        We envision a world where every idea, product, or
                        service is brought to life through exceptional design.
                    </h1>
                    <div className="grid grid-cols-1 gap-[28px]">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div className="space-y-[24px]" key={i}>
                                <figure>
                                    <Image
                                        src={`/images/portfolio-${
                                            i + 1
                                        }-small.webp`}
                                        alt={`Portfolio Image ${i + 1}`}
                                        width={370}
                                        height={472}
                                        loading="lazy"
                                        className="h-auto"
                                    />
                                </figure>
                                <p className="text-[28px] leading-[48px] text-black/70">
                                    <span className="font-bold">Daily App</span>{" "}
                                    - Increasing your productivity
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default PortfolioSection;
