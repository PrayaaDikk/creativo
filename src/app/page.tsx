import CollaborationSection from "@/components/collaboration-section";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <CollaborationSection />
            <Footer />
        </>
    );
};

export default Home;
