import Nav from './Nav';

const Layout = ({ children, className }) => {
    return (
        <div className={className}>
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
