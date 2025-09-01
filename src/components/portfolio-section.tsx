import ResponsiveImage from "@/components/ui/responsive-image";

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="sec-p lg:sec-p-lg">
            <div className="max-container">
                <main className="flex flex-col gap-7 xl:flex-row">
                    <p className="text-xl lg:min-w-44 lg:py-2">Our Portfolio</p>
                    <div className="flex w-full flex-col gap-24">
                        <h1 className="max-w-5xl text-4xl leading-12 font-medium">
                            We envision a world where every idea, product, or
                            service is brought to life through exceptional
                            design.
                        </h1>
                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div className="space-y-6" key={i}>
                                    <figure>
                                        <ResponsiveImage
                                            src={`/images/portfolio-${
                                                i + 1
                                            }.webp`}
                                            smallSrc={`/images/portfolio-${
                                                i + 1
                                            }-small.webp`}
                                            alt={`Portfolio Image ${i + 1}`}
                                            width={370}
                                            height={472}
                                            loading="lazy"
                                            className="h-auto w-full rounded-xl"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </figure>
                                    <p className="text-lg leading-8 text-black/70">
                                        <span className="font-bold">
                                            Daily App
                                        </span>{" "}
                                        - Increasing your productivity
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default PortfolioSection;
