import { PageWithLayout } from '@/common/types/interfaces';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import ContactSection from 'components/Portfolio/ContactSection';
import HeroSection from 'components/Portfolio/HeroSection';
import Projects from 'components/Portfolio/ProjectSection';
import ServiceSection from 'components/Portfolio/ServiceSection';
import Head from 'next/head';

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Ukuanovwe Ogheneovo</title>

                <meta name="application-name" content="Portfolio Website of Ukuanovwe Ogheneovo" />
                <meta
                    name="description"
                    content="I am a software developer with a focus on frontend development, but also have some experience with backend and design work."
                />
                <meta name="twitter:title" content="Portfolio Website of Ukuanovwe Ogheneovo" />
                <meta name="twitter:image" content="/dp.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@coder4christ" />
                <meta name="twitter:creator" content="@coder4christ" />
                <meta
                    name="twitter:description"
                    content="I am a software developer with a focus on frontend development, but also have some experience with backend and design work."
                />
                <meta name="keywords" content="Ukuanovwe, Ogheneovo, Coder4Christ, portfolio, Reactjs, developer" />
                <meta name="author" content="Ukuanovwe Ogheneovo" />
                <meta name="robots" content="index,follow" />
                <meta name="designer" content="Ukuanovwe Ogheneovo" />
                <meta name="reply-to" content="ukuanovweogheneovo@gmail.com" />
                <meta name="coverage" content="Worldwide" />
                <meta name="url" content="http://www.coder4christ.dev" />
                <meta name="target" content="all" />
                <meta name="rating" content="General" />
                <meta name="apple-mobile-web-app-title" content="Portfolio Website of Ukuanovwe Ogheneovo" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#211e25" />
                <meta property="og:title" content="Portfolio Website of Ukuanovwe Ogheneovo" />
                <meta property="og:type" content="site" />
                <meta property="og:url" content="http://www.coder4christ.dev" />
                <meta property="og:image" content="/dp.png" />
                <meta property="og:site_name" content="Coder4Christ" />
                <meta
                    property="og:description"
                    content="I am a software developer with a focus on frontend development, but also have some experience with backend and design work."
                />
            </Head>
            <HeroSection />
            <ServiceSection />
            <Projects />
            <ContactSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
