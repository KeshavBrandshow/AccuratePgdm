import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAccurate from "@/components/WhyAccurate";
import Programmes from "@/components/Programmes";
import PracticalLearning from "@/components/PracticalLearning";
import EntrepreneurshipReport from "@/components/EntrepreneurshipReport";
import DiverseCohort from "@/components/DiverseCohort";
import CorporateHub from "@/components/CorporateHub";
import StudentLife from "@/components/StudentLife";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-clip">
      <Navbar />
      <Hero />
      <WhyAccurate />
      <Programmes />
      <PracticalLearning />
      <EntrepreneurshipReport />
      <DiverseCohort />
      <CorporateHub />
      <StudentLife />
      <Footer />
    </main>
  );
}

