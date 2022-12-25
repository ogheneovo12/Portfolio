import Container from 'components/Container';
import Image from 'next/image';
import React from 'react';
import { Form, Formik } from 'formik';
import FormItem from 'antd/lib/form/FormItem';
import { Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

function ContactSection() {
    return (
        <Container id={'contact'} sectionClass="bg-[#1D172F]" containerClass="py-[30px]">
            <h2 className="section-title gradient-text mb-[107px] animate__animated wow animate__fadeIn">Contact </h2>
            <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                <div className="w-full max-w-[679px] text-white">
                    <h4 className=" text-2xl font-extrabold animate__animated animate__tada animate__slow animate__infinite">
                        👋<span className="gradient-text">Hire Me</span>
                    </h4>
                    <p className="my-[32px] animate__animated wow animate__fadeIn">
                        I am available for work. Connect with me via phone:{' '}
                        <span className="font-semi-bold text-primary">+2347014239218</span> or email:
                        <span className="font-semi-bold text-primary">ukuanovweogheneovo@gmail.com</span>
                    </p>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        }}
                        onSubmit={() => {}}
                    >
                        <Form>
                            <FormItem name="fullname">
                                <Input
                                    data-wow-duration=".5s"
                                    className="bg-transparent h-[55px] animate__fadeInLeft wow animate__animated"
                                    name="fullname"
                                    placeholder="Your Name"
                                />
                            </FormItem>
                            <FormItem name={'email'}>
                                <Input
                                    data-wow-duration=".5s"
                                    data-wow-delay=".5s"
                                    className="bg-transparent animate__fadeInLeft wow animate__animated h-[55px]"
                                    name="email"
                                    placeholder="Your Email*"
                                />
                            </FormItem>
                            <FormItem name="subject">
                                <Input
                                    data-wow-duration=".5s"
                                    data-wow-delay="1s"
                                    className="bg-transparent h-[55px] animate__fadeInLeft wow animate__animated"
                                    name="subject"
                                    placeholder="write a subject"
                                />
                            </FormItem>
                            <FormItem name="message">
                                <TextArea
                                    data-wow-duration=".5s"
                                    data-wow-delay="1.5s"
                                    rows={7}
                                    className="bg-transparent animate__fadeInUp wow animate__animated"
                                    placeholder="your message"
                                    name="message"
                                />
                            </FormItem>
                        </Form>
                    </Formik>
                </div>
                <div className="flex w-full justify-center md:justify-end items-center">
                    <div className="after_box w-full animated  max-w-[411px] my-[60px] h-[365px]">
                        <Image
                            className="animate__animated animate__rotateInUpRight wow"
                            layout="responsive"
                            width={411}
                            height={365}
                            src="/dp.png"
                            alt="ukuanovwe ovo avatar"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

ContactSection.propTypes = {};

export default ContactSection;
