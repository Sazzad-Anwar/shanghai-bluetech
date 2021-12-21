/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../Api';

const Nav = () => {

    const [currentNav, setCurrentNav] = useState('filter-pitcher');
    const [categories, setCategories] = useState([]);

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

        const getAPIdata = async () => {
            const { data: categoriesData } = await getCategories();
            setCurrentNav((categoriesData[0].attributes.name.toLowerCase()).split(' ').join('-'))
            setCategories(categoriesData);
        }

        getAPIdata();

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
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <a onClick={() => { }} className="menu-item expand-btn text-lg nav-menu font-semibold">
                            <div className="flex items-center">
                                <span>
                                    Products
                                </span>
                            </div>
                            <i className="bi bi-plus-lg show-on-mobile"></i>
                        </a>
                        <div className="mega-menu expandable">
                            <div className="content container mx-auto grid grid-cols-6 gap-2 items-center">
                                <ul className="list-none mega-menu-list">
                                    {categories && categories.map((category) => (
                                        <li key={category.id} onMouseOver={() => setCurrentNav((category.attributes.name.toLowerCase()).split(' ').join('-'))}>
                                            <Link to={`/category/${(category.attributes.name.toLowerCase()).split(' ').join('-')}`} className="py-2 text-lg">{category.attributes.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {categories && categories.map(category => {
                                    if (currentNav === (category.attributes.name.toLowerCase()).split(' ').join('-')) {
                                        return (
                                            <>
                                                {category.attributes.products.data.slice(0, 4).map(product => (
                                                    <div className="item h-82 w-63 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group ">
                                                        <img
                                                            className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                                            src={product.attributes.images.data[0].attributes.url} alt={product.attributes.images.data[0].attributes.alternativeText}
                                                        />

                                                        <h1 className="flex absolute bottom-0 py-3 text-white w-full bg-primary text-xl justify-center items-center">
                                                            {product.attributes.name}
                                                        </h1>

                                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                                            <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                                                <i className="bi bi-eye-fill text-xl px-3"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )
                                    }
                                    return (
                                        <> </>
                                    );
                                })}
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/services" className="menu-item text-lg nav-menu font-semibold">
                            <div className="flex items-center">
                                <span>
                                    Services
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="menu-item text-lg nav-menu font-semibold">
                            <div className="flex items-center">
                                <span>
                                    About Us
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="menu-item text-lg nav-menu font-semibold">
                            <div className="flex items-center">
                                <span>
                                    Contact Us
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a onClick={() => { }} className=''>
                            <div className='bg-transparent rounded-xl border px-3 active:outline-none focus:outline-none h-7 overflow-hidden' id="google_translate_element"></div>
                        </a>
                    </li>
                </ul>
            </header>
            {/* <div style={{ minHeight: 80 }}></div> */}
        </>
    );
};

export default Nav;
