import { Button } from "@/components/ui/button";

const CollaborationSection = () => {
    return (
        <section className="bg-black sec-p text-white">
            <main className="flex flex-col gap-7">
                <p className="text-xl">Let&apos;s Collaborate</p>
                <div className="flex flex-col gap-14">
                    <h1 className="text-4xl font-medium leading-12">
                        Ready to turn your ideas into exceptional designs?
                        Contact us today, and let&apos;s make something amazing
                        together!
                    </h1>
                    <Button className="text-black bg-white w-full font-bold py-6 rounded-lg hover:bg-white/90 max-w-96">
                        LET&apos;S TALK
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default CollaborationSection;
