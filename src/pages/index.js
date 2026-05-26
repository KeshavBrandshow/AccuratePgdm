import Hero from "@/components/Hero";
import WhyAccurate from "@/components/WhyAccurate";
import Programmes from "@/components/Programmes";
import Certifications from "@/components/Certifications";
import PracticalLearning from "@/components/PracticalLearning";
import EntrepreneurshipReport from "@/components/EntrepreneurshipReport";
import DiverseCohort from "@/components/DiverseCohort";
import CorporateHub from "@/components/CorporateHub";
import StudentLife from "@/components/StudentLife";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-clip font-sans">
      <Hero />
      <WhyAccurate />
      <Programmes />
      <PracticalLearning />
      <Certifications />
      <EntrepreneurshipReport />
      <DiverseCohort />
      <CorporateHub />
      <StudentLife />
    </main>
  );
}


