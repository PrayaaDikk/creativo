import { Button } from "@/components/ui/button";

const CollaborationSection = () => {
    return (
        <section className="sec-p lg:sec-p-lg bg-black text-white">
            <main className="max-container flex flex-col gap-7">
                <p className="text-xl">Let&apos;s Collaborate</p>
                <div className="flex flex-col gap-14">
                    <h1 className="text-4xl leading-12 font-medium">
                        Ready to turn your ideas into exceptional designs?
                        Contact us today, and let&apos;s make something amazing
                        together!
                    </h1>
                    <Button className="w-full rounded-lg bg-white py-6 font-bold text-black hover:bg-white/90 sm:max-w-56">
                        LET&apos;S TALK
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default CollaborationSection;
