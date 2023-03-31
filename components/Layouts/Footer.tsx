import Container from 'components/Container';
import { GithubIcon, LinkedInIcon, TwitterIcon } from 'icons';
import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <Container sectionClass="text-light text-center min-h-[30px] py-4">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <p> © {new Date().getFullYear()}. All rights reserved by Ukuanovwe Ogheneovo</p>
                <p className="flex items-center space-x-5">
                    <Link passHref href="https://github.com/ogheneovo12">
                        <a>
                            <GithubIcon />
                        </a>
                    </Link>
                    <Link passHref href="https://twitter.com/Coder4Christ">
                        <a>
                            <TwitterIcon />
                        </a>
                    </Link>
                    <Link passHref href="https://www.linkedin.com/in/ukuanovwe-ogheneovo-306272160/">
                        <a>
                            <LinkedInIcon />
                        </a>
                    </Link>
                </p>
            </div>
        </Container>
    );
}

Footer.propTypes = {};

export default Footer;
