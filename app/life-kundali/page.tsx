import Image from "next/image";
import KundaliForm from "@/components/Birth/KundaliForm";
import { KundaliData } from "@/Data/KundaliData";

export const metadata = {
    title: "Free Kundali Generation & Birth Chart Analysis",
    description: "Enter your exact birth details (date, time, and city) to generate your highly accurate personalized Kundali and astrological reading.",
};

export default function Page() {
    return (
        <main className="min-h-screen bg-[#FAF6ED] text-[#1A1A1A]">
            <div className="max-w-4xl mx-auto px-6 py-12">
                
                {/* Thumbnail */}
                <div className="flex justify-center">
                    <Image
                        src="/Birth.png"
                        alt="Kundali Birth Chart Analysis"
                        width={700}
                        height={500}
                        priority
                        className="w-full max-w-3xl rounded-[32px] object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="mt-10 space-y-5">
                    <p className="text-[14px] tracking-[0.25em] uppercase text-[#9B7A58] font-semibold">
                        Birth Chart Reading
                    </p>

                    <h1 className="text-4xl md:text-5xl leading-tight font-semibold">
                        Generate Your Kundali
                        <br />
                        <span className="text-[#3A332C]">And Discover Your Destiny</span>
                    </h1>

                    <p className="text-[#62574E] leading-8 max-w-2xl">
                        Enter your exact birth date, time, and location to create a highly accurate Vedic birth chart. This personalized Kundali reading reveals profound insights into your career, relationships, and future path.
                    </p>
                </div>

                {/* Form Section */}
                <div className="mt-12">
                    <KundaliForm />
                </div>

                {/* SEO Data Section */}
                <div className="mt-16">
                    {KundaliData.map((section) => (
                        <div key={section.title} className="mb-8 bg-[#F0EBE1] rounded-[28px] p-7">
                            
                            {section.tags && (
                                <div className="flex gap-2 mb-5 flex-wrap">
                                    {section.tags.map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-[#FAF6ED] text-[#7D654D] text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">
                                {section.title}
                            </h2>
                            
                            {section.description && (
                                <p className="text-[#62574E] leading-8">
                                    {section.description}
                                </p>
                            )}
                            
                            {section.content && (
                                <div className="mt-6 space-y-4">
                                    {section.content.map((item) => (
                                        <div key={item.label} className="rounded-2xl bg-[#FAF6ED] p-5 border border-[#E5DFD5]">
                                            <h3 className="font-semibold text-[#1A1A1A]">
                                                {item.label}
                                            </h3>
                                            <p className="mt-2 text-[#62574E]">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {section.faq && (
                                <div className="mt-6 space-y-4">
                                    {section.faq.map((item) => (
                                        <div key={item.question} className="border-b border-[#D6CFC4] pb-4">
                                            <h3 className="font-semibold text-[#1A1A1A]">
                                                {item.question}
                                            </h3>
                                            <p className="mt-2 text-[#62574E]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}