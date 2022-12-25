import { PageWithLayout } from '@/common/types/interfaces';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import ContactSection from 'components/Portfolio/ContactSection';
import HeroSection from 'components/Portfolio/HeroSection';
import Projects from 'components/Portfolio/ProjectSection';
import ServiceSection from 'components/Portfolio/ServiceSection';

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <Projects />
            <ContactSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
