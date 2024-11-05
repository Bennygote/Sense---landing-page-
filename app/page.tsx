import { Container, Main, Section } from "@/components/craft";
// import CTA from "@/components/home-page/cta";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import FeatureSet from "@/components/home-page/feature-set";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import StatisticSection from "@/components/home-page/statisticsection";
import ComparisonSection from "@/components/home-page/comparisonsection";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
         <Hero />
         <FeatureLeft />
         <FeatureRight />
         <FeatureSet />
         <StatisticSection />
         <ComparisonSection />
         <Footer />
        </Container>
      </Section>
    </Main>
  );
}
