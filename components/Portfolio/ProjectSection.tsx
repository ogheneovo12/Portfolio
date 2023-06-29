import { Col, Row } from 'antd';
import Container from 'components/Container';
import ProjectCard, { IProjectCardProps } from 'components/ProjectCard';
import { v4 } from 'uuid';
import React from 'react';

const project: IProjectCardProps[] = [
    {
        title: 'OptionUp',
        actionLink: 'https://optionup.netlify.app/',
        image: '/previews/optionup/1.png',
        previewGroups: '/previews/optionup',
        previewCount: 4,
        type: 'Contract',
        logo: 'https://optionup.netlify.app/favicon.ico',
        description:
            "Achieved pixel-perfect implementation of OptionUp's design interface, leading the implementation of key features like Google authentication, Stripe integration, refresh token strategy, MDX-based static site generation, and data tables, while effectively utilizing API consumption and implementing Redux and Redux Toolkit for business logic, and developing a custom persistence storage solution to enhance platform performance and functionality.",
    },
    {
        title: 'ThinkMusik',
        actionLink: 'https://www.thinkmusik.com/',
        image: '/previews/thinkmusik/1.png',
        previewGroups: '/previews/thinkmusik',
        previewCount: 5,
        type: 'Contract',
        logo: 'https://www.thinkmusik.com/favicon.png',
        description:
            'Successfully implemented a pixel-perfect Thinkmusik waiting list 5-page website design, integrated Google Firebase Analytics Tracking, Google Firestore for user data storage, and leveraging the latest features of Next.js 13 for improved functionality and user experience.',
    },
    {
        title: 'Project744',
        actionLink: 'https://www.project774.ng/',
        image: '/previews/project744/1.png',
        previewGroups: '/previews/project744',
        previewCount: 2,
        type: 'Volunteer',
        logo: 'https://www.project774.ng/favicon.ico',
        description:
            'Successfully collaborated with other volunteers to implement the revamped Project 774 website and integrated an MDX-based static site generation for event lists and page details, eliminating the need for an extra API server.',
    },
    {
        title: 'Bridge Africa',
        actionLink: 'https://bridge.africa',
        image: '/previews/bridge/1.png',
        previewGroups: '/previews/bridge',
        previewCount: 12,
        type: 'Contract',
        logo: 'https://www.bridge.africa/favicon.ico',
        description:
            "I played a key role in improving Bridge Africa's online presence by implementing their v2 business page, designing email templates, creating a visually appealing internal admin dashboard using APIs, and contributing to SEO improvements.",
    },
    {
        title: 'bitnautic',
        actionLink: 'https://bitnautic.com',
        image: '/previews/bitnautic/1.png',
        previewGroups: ['/previews/bitnautic/1.png', '/previews/bitnautic/2.png'],
        logo: '/previews/bitnautic/logo.png',
        type: 'Contract',
        description:
            'I worked on a landing page for Bitnuatic, a global shipping company, for a total of three days. The project included some design revisions and I used Tailwind, Flowbite, SCSS, and JavaScript.',
    },
    {
        title: 'Fitted Groups',
        actionLink: 'https://groups.fitted.ng',
        image: '/previews/groups/1.png',
        previewGroups: [
            '/previews/groups/1.png',
            '/previews/groups/2.png',
            '/previews/groups/1.png',
            '/previews/groups/3.png',
            '/previews/groups/4.png',
            '/previews/groups/5.png',
        ],
        logo: '/previews/groups/logo.webp',
        type: 'Fulltime',
        description:
            'I worked on the group orders platform for FittedNG, a fashion-tech company. I initially built the project using ReactJS, Javascript and ChakraUI, but later migrated it to Typescript and NextJS. I used Ant Design and Tailwind CSS, and also developed a male and female measurement npm module.',
    },
    {
        title: 'Tutadoo Event Dashboards',
        actionLink: 'https://www.tutadoo.com/',
        image: '/previews/tutadoo/1.png',
        previewGroups: [
            '/previews/tutadoo/1.png',
            '/previews/tutadoo/2.png',
            '/previews/tutadoo/1.png',
            '/previews/tutadoo/3.png',
            '/previews/tutadoo/4.png',
        ],
        logo: '/previews/tutadoo/logo.png',
        type: 'Contract',
        description:
            "I worked on a one-month contract with Tutadoo, a Kenyan-based event management system, to set up their event organizers' dashboards, event dashboard, and attendee dashboard. I used Gatsby,Typescript, Hasura, and Apollo GraphQL in this project.",
    },
    {
        title: 'Fitted Store Setup',
        actionLink: 'shop.fitted.ng',
        image: '/previews/store/1.png',
        previewGroups: ["/previews/store/1.png',"],
        logo: '/previews/groups/logo.webp',
        type: 'Fulltime',
        description:
            'I initiated and managed the store deployment pipeline on an AWS Lightsail LAMP instance, and worked to reduce the operating costs of a malicious attack on the storefront. I also migrated the store from AWS to a new platform to further minimize running costs.',
    },
    {
        title: 'Easyshare Africa',
        actionLink: 'https://easyshare.africa/',
        image: '/previews/easyshare/1.png',
        previewGroups: ['/previews/easyshare/1.png', '/previews/easyshare/2.png', '/previews/easyshare/3.png'],
        type: 'Fulltime',
        description:
            'I was responsible for implementing the design screens, creating a Crypto Conversion NPM module, improving the send and receive flow, and working on the Affiliate Dashboard. I also served as a team lead.',
    },
    {
        title: 'Dev Jobs',
        actionLink: 'https://coderjobs.netlify.app/',
        image: '/previews/devjobs/1.png',
        previewGroups: ['/previews/devjobs/1.png', '/previews/devjobs/2.png', '/previews/devjobs/3.png'],
        type: 'Personal',
        description:
            'Devjobs is a project that I am working on as part of a challenge from Front End Mentors. I have completed the basic user interface and integrated Auth0 authentication, but the project is still in progress. I plan to add real job search data to the backend once it is finished.',
    },
];

function Projects() {
    return (
        <Container
            id="works"
            containerClass="py-10 px-[30px]"
            sectionClass="flex flex-col justify-center items-center md:min-h-screen min-h-[670px]"
        >
            <h2 className="section-title text-center gradient-text mb-[107px] animate__animated wow animate__fadeIn">
                My Works
            </h2>
            <Row gutter={[24, 24]}>
                {project?.map((item) => (
                    <Col className="w-full animate__animated wow animate__jello" sm={24} md={12} lg={8} key={v4()}>
                        <ProjectCard {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

Projects.propTypes = {};

export default Projects;
