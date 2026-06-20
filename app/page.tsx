import AnswerKeyCards from "@/components/AnswerKeyCards";
import AstroLogicApp from "@/components/Birth/BirthLogic";
import Homepage from "@/components/Homepage";
import AstraCareerPage from "@/components/Palm/PalmHomepage";
import Image from "next/image";

export default function Home() {
  return (
    <>
   
  <Homepage />
  <AnswerKeyCards />
  <AstraCareerPage />
  <AstroLogicApp />
   </>
  );
}
