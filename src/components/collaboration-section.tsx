import { Button } from "@/components/ui/button";

const CollaborationSection = () => {
    return (
        <section className="bg-black py-[100px] px-[30px] text-white">
            <main className="flex flex-col gap-[28px]">
                <p className="text-[22px]">Let&apos;s Collaborate</p>
                <div className="flex flex-col gap-[56px]">
                    <h1 className="text-[40px] font-medium leading-[60px]">
                        Ready to turn your ideas into exceptional designs?
                        Contact us today, and let&apos;s make something amazing
                        together!
                    </h1>
                    <Button className="text-black bg-white w-full text-[24px] font-bold py-10 px-4 rounded-xl">
                        LET&apos;S TALK
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default CollaborationSection;
