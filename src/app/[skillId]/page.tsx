import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

type Props = {
  params: Promise<{ skillId: string }>;
};

export default async function SkillPage({ params }: Props) {
  const { skillId } = await params;
  const skillSheetUrl = `https://skill-sheet.tech-yn.com/${skillId}`;

  return (
    <>
      <Header skillSheetUrl={skillSheetUrl} />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer skillSheetUrl={skillSheetUrl} />
    </>
  );
}
