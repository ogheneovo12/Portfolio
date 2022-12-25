import React from 'react';

import Container from 'components/Container';
import { Button } from 'antd';
import Image from 'next/image';

function HeroSection() {
    return (
        <Container sectionClass="pt-[40px] pb-[100px]" containerClass="flex justify-between flex-col lg:flex-row">
            <div className="w-full max-w-[679px]">
                <h1 className="animate__fadeInUp  animate__animated  text-center md:text-left text-3xl sm:text-[40px] sm:leading-[44px] md:text-6xl font-extrabold md:leading-[75.6px]">
                    👋 <span className="gradient-text">I&apos;m Ogheneovo Software Developer.</span>
                </h1>
                <div className="flex justify-center md:justify-start lg:hidden  mt-[60px]">
                    <div className="after_box w-full animated   max-w-[411px]  h-[365px]">
                        <Image
                            className="animate__animated wow animate__rotateInUpRight"
                            layout="responsive"
                            width={411}
                            height={365}
                            src="/dp.png"
                            alt="ukuanovwe ovo avatar"
                        />
                    </div>
                </div>

                <p className="animation-delay-1000 animate__fadeInUp  animate__animated text-center md:text-left text-light text-lg sm:text-2xl md:leading-[36.96px] mt-10 mb-10">
                    I am a motivated software developer, dedicated to delivering high-quality applications through
                    collaboration and a solutions-oriented approach.
                </p>
                <div className=" animation-delay-2000 animate__fadeInUp animate__animated  space-x-6 flex items-center justify-center md:justify-start">
                    <Button
                        href="/#services"
                        className=" flex items-center justify-center py-0 max-w-[189px] w-full h-[56px] border-primary bg-primary text-white hover:bg-primary hover:text-white"
                    >
                        {' '}
                        Get Started{' '}
                    </Button>
                    <Button
                        href="https://drive.google.com/uc?export=download&id=1dref-Gwx0TBBkUQ8HgaiVutUZTc-MJaX"
                        className=" flex items-center justify-center py-0 h-[56px] max-w-[236px] w-full text-white bg-transparent"
                    >
                        Download My Cv
                    </Button>
                </div>
            </div>
            <div className="justify-end items-center hidden lg:flex w-full max-w-[500px]">
                <div className="after_box animated w-full max-w-[411px] ">
                    <Image
                        className="animate__animated wow animate__rotateInUpRight"
                        layout="responsive"
                        width={411}
                        height={365}
                        src="/dp.png"
                        alt="ukuanovwe ovo avatar"
                    />
                </div>
            </div>
        </Container>
    );
}

HeroSection.propTypes = {};

export default HeroSection;
