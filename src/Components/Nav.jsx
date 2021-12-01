import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {


    useEffect(() => {
        const menuBtn = document.querySelector('.menu-btn');
        const menuItems = document.querySelector('.menu-items');
        const expandBtn = document.querySelectorAll('.expand-btn');

        // humburger toggle
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            menuItems.classList.toggle('open');
        });

        // mobile menu expand
        expandBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                if (btn.children[0].classList[1] === 'bi-plus-lg') {
                    btn.children[0].classList.replace('bi-plus-lg', 'bi-dash-lg');
                } else {
                    btn.children[0].classList.replace('bi-dash-lg', 'bi-plus-lg');
                }
            });
        });

        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if (scrollPos > 80) {
                document.querySelector('.header').classList.add('shadow-xl');
                document.querySelector('.header').classList.add('border-b');
            } else {
                document.querySelector('.header').classList.remove('shadow-xl');
                document.querySelector('.header').classList.remove('border-b');
            }
        })

    }, []);

    return (
        <>
            <header className="header w-screen z-20">
                <Link to="/" className="logo">
                    {/* <!-- LOGO --> */}
                    <img className="h-10 w-auto" src="/logo.png" alt="logo" />
                </Link>
                <div className="menu-btn">
                    <div className="menu-btn__lines"></div>
                </div>
                <ul className="menu-items">
                    <li>
                        <Link to="/" className="menu-item text-lg nav-menu">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="menu-item expand-btn text-lg nav-menu">
                            Products <i className="bi bi-plus-lg show-on-mobile"></i>
                        </Link>
                        <div className="mega-menu expandable">
                            <div className="content container mx-auto grid grid-cols-6 gap-2">
                                <ul className="list-none mega-menu-list">
                                    <li>
                                        <Link to="/" className="py-2 text-lg">Water Filter Pitchers</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="py-2 text-lg">Faucet Mounted Filters</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="py-2 text-lg">Water Filter Bottles</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="py-2 text-lg">Refrigerator Water Filters</Link>
                                    </li>
                                </ul>
                                <div className="h-full w-ful text-center group">
                                    <div className="relative rounded-lg">
                                        <img className="h-60 w-auto transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out overflow-hidden" src="/images/new-product-1.png" alt="new-product-1" />
                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">Get Started</Link>
                                        </div>
                                    </div>
                                    <h1 className="text-xl font-semibold text-center my-3">RV Filters</h1>
                                </div>
                                <div className="h-full w-ful text-center group">
                                    <div className="relative rounded-lg">
                                        <img
                                            className="h-60 w-auto transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out overflow-hidden"
                                            src="/images/new-product-2.png"
                                            alt="new-product-2"
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">Get Started</Link>
                                        </div>
                                    </div>
                                    <h1 className="text-xl font-semibold text-center my-3">Water Bottles</h1>
                                </div>
                                <div className="h-full w-ful text-center group">
                                    <div className="relative rounded-lg">
                                        <img
                                            className="h-60 w-auto transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out overflow-hidden"
                                            src="/images/new-product-3.png"
                                            alt="new-product-3"
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">Get Started</Link>
                                        </div>
                                    </div>
                                    <h1 className="text-xl font-semibold text-center my-3">Coffee Machine Filters</h1>
                                </div>
                                {/* <div className="h-full w-ful text-center group">
                                    <div className="relative rounded-lg">
                                        <img
                                            className="h-60 w-auto transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out overflow-hidden"
                                            src="/images/new-product-4.png"
                                            alt="new-product-4"
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">Get Started</Link>
                                        </div>
                                    </div>
                                    <h1 className="text-xl font-semibold text-center my-3">Refrigerator Filters</h1>
                                </div> */}
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/" className="menu-item text-lg nav-menu">
                            About
                        </Link>
                    </li>
                </ul>
            </header>
            {/* <div style={{ minHeight: 80 }}></div> */}
        </>
    );
};

export default Nav;
