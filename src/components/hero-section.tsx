import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="bg-white flex flex-col gap-16">
            <div className="py-5 px-7">
                <main className="flex flex-col gap-6">
                    <div className="h-1.5 rounded-full w-24 bg-blueTheme mt-10"></div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-4xl text-blueTheme leading-12 max-sm:max-w-[268px]">
                            Where Design Meets Innovation!
                        </h1>
                        <div className="space-y-8">
                            <p className="text-lg text-blueTheme/70 leading-10">
                                Whether you&apos;re a startup looking to
                                establish your brand identity or an established
                                business aiming to refresh your image,
                                we&apos;ve got the creative firepower to make it
                                happen.
                            </p>
                            <Button className="bg-blueTheme font-bold text-white py-6 rounded-lg w-full max-w-48 hover:bg-blueTheme/95">
                                LET&apos;S TALK
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
            <figure className="w-full overflow-x-hidden flex justify-center">
                <Image
                    src="/images/svg/hero-image.svg"
                    alt="Hero Image"
                    width={774}
                    height={500}
                    className="h-auto max-w-none"
                    priority
                />
            </figure>
        </section>
    );
};

export default HeroSection;
