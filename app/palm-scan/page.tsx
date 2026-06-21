
import Image from "next/image";
import PalmForm from "@/components/Palm/PalmForm";
import { PalmData } from "@/Data/PalData";

export const metadata = {
    title: "Checking Palm To Tell Career",
    description:
        "Upload your palm and answer a few questions for personalized reading.",
};

export default function Page() {
    return (
        <main className="min-h-screen bg-[#F8F3EA] text-[#211D19]">

            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* Thumbnail */}

                <div className="flex justify-center">

                    <Image
                        src="/Palm.png"
                        alt="Palm Image"
                        width={700}
                        height={500}
                        priority
                        className="
              w-full
              max-w-3xl
              rounded-[32px]
              object-cover
            "
                    />

                </div>

                {/* Text */}

                <div className="mt-10 space-y-5">

                    <p
                        className="
            text-[14px]
            tracking-[0.25em]
            uppercase
            text-[#9B7A58]
          "
                    >
                        Palm Scan Reading
                    </p>

                    <h1
                        className="
            text-4xl
            md:text-5xl
            leading-tight
            font-semibold
          "
                    >
                        Upload Your Palm
                        <br />
                        And Discover Your Future
                    </h1>

                    <p
                        className="
            text-[#62574E]
            leading-8
            max-w-2xl
          "
                    >
                        Upload a clear palm image and tell us a little
                        about yourself. More details can help create a
                        more personalized reading experience.
                    </p>

                </div>

                {/* Form */}

                <div className="mt-12">
                    <PalmForm />
                </div>


                <div className="mt-12">



                    <div className="mt-12"> {PalmData.map((section) => (<div key={section.title} className=" mb-8 bg-[#EFE6D8] rounded-[28px] p-7 " > {section.tags && (<div className="flex gap-2 mb-5 flex-wrap"> {section.tags.map((tag) => (<span key={tag} className=" px-4 py-2 rounded-full bg-[#F8F3EA] text-[#7D654D] " > {tag} </span>))} </div>)} <h2 className="text-2xl font-semibold mb-4"> {section.title} </h2> {section.description && (<p className="text-[#62574E] leading-8"> {section.description} </p>)} {section.content && (<div className="mt-6 space-y-4"> {section.content.map((item) => (<div key={item.label} className=" rounded-2xl bg-[#F8F3EA] p-5 " > <h3 className="font-medium"> {item.label} </h3> <p className="mt-2 text-[#62574E]"> {item.value} </p> </div>))} </div>)} {section.faq && (<div className="mt-6 space-y-4"> {section.faq.map((item) => (<div key={item.question} className=" border-b border-[#DDD1C0] pb-4 " > <h3 className="font-medium"> {item.question} </h3> <p className="mt-2 text-[#62574E]"> {item.answer} </p> </div>))} </div>)} </div>))} </div>






                </div>

            </div>

        </main>
    );
}

