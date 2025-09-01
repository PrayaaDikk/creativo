import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <>
            <section id="home" className="lg:sec-p-lg bg-white pt-32 lg:pt-32">
                <div className="max-container flex flex-col gap-14 lg:flex-row lg:items-center lg:*:flex-1">
                    <main className="flex flex-col gap-6 not-lg:px-7 not-lg:py-5 lg:flex-row">
                        <div className="bg-blueTheme mt-10 h-1.5 max-w-24 min-w-16 rounded-full lg:mt-5"></div>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-blueTheme text-4xl leading-12 font-bold max-sm:max-w-[268px]">
                                Where Design Meets Innovation!
                            </h1>
                            <div className="space-y-8">
                                <p className="text-blueTheme/70 text-lg leading-10">
                                    Whether you&apos;re a startup looking to
                                    establish your brand identity or an
                                    established business aiming to refresh your
                                    image, we&apos;ve got the creative firepower
                                    to make it happen.
                                </p>
                                <Button className="bg-blueTheme hover:bg-blueTheme/95 w-full max-w-48 rounded-lg py-6 font-bold text-white">
                                    LET&apos;S TALK
                                </Button>
                            </div>
                        </div>
                    </main>
                    <figure className="flex w-full justify-center overflow-x-hidden">
                        <Image
                            src="/images/svg/hero-image.svg"
                            alt="Hero Image"
                            width={774}
                            height={500}
                            className="h-auto max-w-none lg:max-w-full"
                            priority
                        />
                    </figure>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
