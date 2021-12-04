import { useEffect } from "react";
import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';

const TermsCondition = () => {

    useEffect(() => {
        document.title = 'Bluetech | Terms & Conditions';
    }, []);

    return (
        <Layout>
            <Breadcrumb title="terms-&-condition" />
            <section className="mt-10 mb-20">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-xl lg:text-4xl font-semibold text-center pb-10">Terms & Conditions</h1>

                    {([...Array(10)].map((_, i) => (
                        <div key={i} className="my-10 animate__animated animate__fadeInDown wow">
                            <h1 className="text-gray-600 text-xl lg:text-2xl font-semibold pb-5">Terms & Conditions {i}</h1>
                            <p className="text-gray-600 text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure itaque incidunt cum in reprehenderit officiis natus, at laudantium error animi id necessitatibus est, blanditiis libero! Dolor, maiores. Iste aliquid, fuga magni minus eius nam qui ea quisquam. Ad nihil ut dignissimos repellat quibusdam vitae perspiciatis dolor quia tempora omnis blanditiis illo eos dolores error quaerat, minus autem deserunt, dicta hic nemo sit sunt laboriosam! Vel omnis praesentium, nulla exercitationem, sint at atque velit veritatis ipsum molestias obcaecati ea, temporibus inventore ipsam voluptate quidem neque modi cumque quia? Quisquam adipisci minus alias consequuntur. Unde fuga impedit quia, quibusdam voluptatibus rem blanditiis!
                            </p>
                        </div>
                    )))}
                </div>
            </section>
        </Layout>
    )
}

export default TermsCondition
