import { Col, Row } from 'antd';
import Container from 'components/Container';
import ServiceCard, { IServiceCardProps } from 'components/ServiceCard';
import React from 'react';
import { v4 } from 'uuid';
import cx from 'classnames';

const services: (IServiceCardProps & { className?: string })[] = [
    {
        title: 'Front-end Development',
        description:
            '3+ years as a frontend developer, skilled in pixel-perfect design and seamless UX. Proficient in ReactJS, NextJS, Grommet UI, Tailwind, Chakra UI, Ant Design, Sass, TypeScript, JavaScript, HTML5, CSS3, GraphQL Client. Expertise in setting up frontend project deployment pipelines."            ',
        className: 'after_box top-left',
    },
    {
        title: 'Back-end Development',
        description:
            'I have extensive experience working with Node.js-based backend solutions, including CRUD APIs, documentation, media services, and fintech/Web3 projects. Proficient in Express.js, NestJS, Docker, Mongoose, MySQL, Postgres, MongoDB, and both monolithic and distributed/microservices architectures',
    },
    {
        title: 'Team Lead',
        description:
            'As a team lead throughout my career, I have fostered collaboration and clear communication of business objectives among team members. I have also motivated and supported team members, and provided resources and guidance to address any learning or skill gaps.',
        className: 'after_box bottom-right',
    },
];
export default function ServiceSection() {
    return (
        <Container
            id="services"
            containerClass="py-[100px] px-[30px]"
            sectionClass="flex flex-col justify-center items-center md:min-h-screen min-h-[670px] bg-[#1D172F]"
        >
            <h2 className="section-title text-center gradient-text mb-[107px] animate__animated wow animate__fadeIn">
                My Services
            </h2>
            <Row gutter={[24, 24]}>
                {services?.map(({ className, ...item }) => (
                    <Col
                        className={cx(className, 'animated wow animate__animated animate__rollIn')}
                        sm={24}
                        md={12}
                        lg={8}
                        key={v4()}
                    >
                        <ServiceCard {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
