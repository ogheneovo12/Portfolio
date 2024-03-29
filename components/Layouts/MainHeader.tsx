import { Avatar, Button } from 'antd';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuStyle from './header.styles';

function MainHeader() {
    const ref = useRef<HTMLUListElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const showMobileMenu = () => {
        const body = document.querySelector('body');
        if (ref.current) {
            if (body) {
                body.style.overflowY = 'hidden';
            }
            ref.current.classList.remove('hide');
            ref.current.classList.add('show');
        }
    };

    const hideMobileMenu = () => {
        const body = document.querySelector('body');
        if (ref.current) {
            if (body) {
                body.style.overflowY = 'scroll';
            }
            ref.current.classList.remove('show');
            ref.current.classList.add('hide');
        }
    };

    useEffect(() => {
        function onScroll() {
            if (window) {
                const scrollTop =
                    window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document.documentElement || document.body.parentNode || document.body).scrollTop;

                if (headerRef.current) {
                    if (scrollTop > 100) {
                        headerRef.current.classList.add('shadow-lg');
                    } else {
                        headerRef.current.classList.remove('shadow-lg');
                    }
                }
            }
        }
        onScroll();
        if (window) {
            window.addEventListener('scroll', onScroll);
        }
        return () => window && window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            ref={headerRef}
            className="flex fixed left-0 right-0 w-full top-0 z-[999] bg-secondary  items-center  min-h-[70px] py-10 text-white animate__fadeInDown animate__animated"
        >
            <nav className="nav container flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Avatar src="/dp.png" />
                    <p className="text-xl font-semibold text-light">Ukuanovwe Ogheneovo</p>
                </div>
                <div className="flex items-center">
                    <MenuStyle ref={ref} className="m-0 items-center md:space-x-10 ">
                        <Button
                            onClick={hideMobileMenu}
                            className="md:hidden relative right-0  bg-transparent float-right text-white"
                        >
                            <FaTimes />
                        </Button>
                        <li>
                            <Link href="/#">
                                <span
                                    className="hover:text-primary active:bg-primary cursor-pointer"
                                    onClick={hideMobileMenu}
                                >
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#services">
                                <span
                                    className="hover:text-primary active:bg-primary cursor-pointer"
                                    onClick={hideMobileMenu}
                                >
                                    Services
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#works">
                                <span
                                    className="hover:text-primary active:bg-primary cursor-pointer"
                                    onClick={hideMobileMenu}
                                >
                                    my works
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact">
                                <span
                                    className="hover:text-primary active:bg-primary cursor-pointer"
                                    onClick={hideMobileMenu}
                                >
                                    {' '}
                                    Contact
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Button
                                onClick={hideMobileMenu}
                                href="/#contact"
                                className="text-white py-0 bg-transparent flex items-center  justify-center border-primary border h-[46px] w-[124px] hover:bg-primary hover:text-white"
                            >
                                Hire Me
                            </Button>
                        </li>
                    </MenuStyle>
                    <Button onClick={showMobileMenu} className="text-white md:hidden  bg-transparent">
                        <FaBars />
                    </Button>
                </div>
            </nav>
        </header>
    );
}

MainHeader.propTypes = {};

export default MainHeader;
