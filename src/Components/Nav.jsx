/* eslint-disable jsx-a11y/anchor-is-valid */
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
                document.querySelector('.header').classList.add('backdrop-blur-xl');
                document.querySelector('.header').classList.add('border-b');
            } else {
                document.querySelector('.header').classList.remove('shadow-xl');
                document.querySelector('.header').classList.remove('backdrop-blur-xl');
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
                        <Link to="/" className="menu-item text-lg nav-menu font-semibold flex items-center">
                            <i className="bi bi-house-door-fill pr-1"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <a onClick={() => { }} className="menu-item expand-btn text-lg nav-menu font-semibold">
                            <span className="material-icons-outlined">
                                blender
                            </span> Products <i className="bi bi-plus-lg show-on-mobile"></i>
                        </a>
                        <div className="mega-menu expandable">
                            <div className="content container mx-auto grid grid-cols-6 gap-2">
                                <ul className="list-none mega-menu-list">
                                    <li>
                                        <Link to="/products/water-filter-pitchers" className="py-2 text-lg">Filter Pitchers</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/filter-cartridges" className="py-2 text-lg">Filter Cartridges</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/glass-pitchers" className="py-2 text-lg">Glass Pitchers</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/rv-filters" className="py-2 text-lg">RV Filters</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/refrigerator-filters" className="py-2 text-lg">Refrigerator Filters</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/coffee-filters" className="py-2 text-lg">Coffe Filters</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/bottle-filters" className="py-2 text-lg">Bottle Filters</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/soda-machines" className="py-2 text-lg">Soda Machines</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/faucet-mounted-filters" className="py-2 text-lg">Faucet Mounted Filters</Link>
                                    </li>
                                    <li>
                                        <Link to="/products/water-dispencers" className="py-2 text-lg">Water Dispencers</Link>
                                    </li>
                                </ul>
                                <div className="h-full w-ful text-center group">
                                    <div className="relative rounded-lg">
                                        <img className="h-60 w-auto transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out overflow-hidden" src="/images/new-product-1.png" alt="new-product-1" />
                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                                <i className="bi bi-eye-fill text-xl px-3"></i>
                                            </Link>
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
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                                <i className="bi bi-eye-fill text-xl px-3"></i>
                                            </Link>
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
                                            <Link to="/" className="rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                                <i className="bi bi-eye-fill text-xl px-3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <h1 className="text-xl font-semibold text-center my-3">Coffee Machine Filters</h1>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/services" className="menu-item text-lg nav-menu font-semibold">
                            <span className="material-icons-outlined">
                                support_agent
                            </span> Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="menu-item text-lg nav-menu font-semibold">
                            <span className="material-icons-outlined">
                                water_drop
                            </span> About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="menu-item text-lg nav-menu font-semibold">
                            <span className="material-icons-outlined">
                                contacts
                            </span> Contact Us
                        </Link>
                    </li>
                </ul>
            </header>
            {/* <div style={{ minHeight: 80 }}></div> */}
        </>
    );
};

export default Nav;
