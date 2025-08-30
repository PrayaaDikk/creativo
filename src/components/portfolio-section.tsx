import Image from "next/image";

const PortfolioSection = () => {
    return (
        <section className="sec-p">
            <main className="flex flex-col gap-7">
                <p className="text-xl">Our Portfolio</p>
                <div className="flex flex-col gap-24">
                    <h1 className="text-4xl leading-12 font-medium">
                        We envision a world where every idea, product, or
                        service is brought to life through exceptional design.
                    </h1>
                    <div className="grid grid-cols-1 gap-7">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div className="space-y-6" key={i}>
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
                                <p className="text-lg leading-8 text-black/70">
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
