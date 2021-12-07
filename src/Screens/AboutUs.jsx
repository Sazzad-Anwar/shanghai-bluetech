import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';

const AboutUs = () => {
    return (
        <Layout>
            <Breadcrumb title="about-us" bgImage="/images/about-bluetech.jpg" />

            <section className="my-10">
                <div className="container mx-auto">
                    <h1 className="text-center">About Us</h1>
                </div>
            </section>
        </Layout>
    )
}

export default AboutUs
