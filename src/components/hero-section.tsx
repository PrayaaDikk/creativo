import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="bg-white flex flex-col gap-16">
            <div className="py-[20px] px-[30px]">
                <main className="flex flex-col gap-[28px]">
                    <div className="h-[5px] rounded-full w-[95px] bg-blueTheme mt-[40px]"></div>
                    <div className="flex flex-col gap-[25px]">
                        <h1 className="font-bold text-[40px] text-blueTheme leading-[50px] max-sm:max-w-[268px]">
                            Where Design Meets Innovation!
                        </h1>
                        <div className="space-y-[50px]">
                            <p className="text-[28px] text-blueTheme/70 leading-[50px]">
                                Whether you&apos;re a startup looking to
                                establish your brand identity or an established
                                business aiming to refresh your image,
                                we&apos;ve got the creative firepower to make it
                                happen.
                            </p>
                            <Button className="bg-blueTheme font-bold text-2xl text-white max-w-[246px] py-10 rounded-xl w-full">
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
