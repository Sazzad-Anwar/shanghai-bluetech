import { Input, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import Nav from './Nav';
const { TextArea } = Input;

const Layout = ({ children, className }) => {

    let goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={className}>
            <Nav />
            {children}

            {/* email to supplier */}
            <section className="py-20 backdrop-blur-lg relative" style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/banner-2.png) no-repeat center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container mx-auto">
                    <h1 className="text-xl lg:text-3xl font-bold text-center text-white animate__animated animate__fadeInDown wow">Send Message To Supplier</h1>
                    <div className="flex justify-center items-center mb-10 animate__animated animate__fadeInDown wow animate__delay-1s">
                        <form className="bg-white my-6 lg:my-20 p-4 lg:p-8 shadow-xl border rounded-xl">
                            <Input className="my-3 py-3" placeholder="Name" />
                            <Input className="my-3 py-3" placeholder="Email" />
                            <TextArea className="my-3 py-3" placeholder="Please inform us about your question" autoSize />
                            <button type="submit" className="my-3 py-2 px-3 text-base text-white bg-primary hover:bg-blue-400 outline-none shadow transition duration-300 ease-in-out">
                                Send <i className="bi bi-send-fill pl-2"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="custom-shape-divider-bottom-1638556171">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* footer */}
            <footer className="bg-dark-blue">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 border-b border-white pb-10">
                        <div>
                            <img src="/images/logo-white.png" alt="logo" />
                            <p className="text-base text-white mt-5 lg:pr-10">
                                Shanghai Bluetech is a a manufacturer of world class water filter products.
                                Follow us on social media to know and get updates about Bluetech.
                            </p>
                            <div className="flex items-center py-3">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-facebook pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-twitter pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-instagram pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-youtube pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-2xl font-semibold bottom-underline">Company</h1>
                            <ul className="list-none mt-8">
                                <li className="py-2.5">
                                    <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">About Us</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/contact-us" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Contact Us</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Support</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/privacy-policy" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Privacy Policy</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/terms-&-condition" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Terms & Condition</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white text-2xl font-semibold bottom-underline">Categories</h1>
                            <ul className="list-none mt-8" style={{ columnCount: 2 }}>
                                <li className="py-2.5 clear-both">
                                    <Link to="/products/water-filter-pitchers" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Filter Pitchers</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/filter-cartridges" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Filter Cartridges</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/glass-pitchers" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Glass Pitchers</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/rv-filters" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">RV Filters</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/refrigerator-filters" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Refrigerator Filters</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/coffee-filters" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Coffe Filters</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/bottle-filters" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Bottle Filters</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/soda-machines" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Soda Machines</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/faucet-mounted-filters" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Faucet Mounted Filters</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/products/water-dispencers" className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">Water Dispencers</Link>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white text-2xl font-semibold bottom-underline">Address</h1>
                            <ul className="list-none mt-8">
                                <li className="py-2.5 flex items-center">
                                    <i className="bi bi-geo-alt-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                    <span className="ml-2 text-base text-white">
                                        333 Huasong Street <br />
                                        Xidu, Fengxian, Shanghai, China.
                                    </span>
                                </li>
                                <li className="py-2.5 flex items-center">
                                    <i className="bi bi-telephone-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                    <a href="tel:+8615005826317" className="ml-2 text-base hover:text-white text-white">
                                        +8615005826317
                                    </a>
                                </li>
                                <li className="py-2.5 flex items-center">
                                    <i className="bi bi-envelope-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                    <a href="mailto:info@cn-bluetech.com" className="ml-2 hover:text-white text-base text-white">
                                        info@cn-bluetech.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-20 w-full">
                    <p className="text-base text-white font-semibold">SHANGHAI BLUETECH © 2021</p>
                    <Tooltip title="Go Top">
                        <span
                            className="material-icons-outlined bg-white text-primary ml-5 p-1 cursor-pointer rounded-full"
                            onClick={goTop}
                        >
                            expand_less
                        </span>
                    </Tooltip>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
