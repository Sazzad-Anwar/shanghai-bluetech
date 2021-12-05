import { useEffect, useState } from "react"

const Breadcrumb = ({ title, cateogry, setPageTitle, setProductCategory, bgImage }) => {

    const [breadCrumbTitle, setBreadCrumbTitle] = useState('')

    useEffect(() => {

        const capitalize = (word) => {
            let wordArray = word.split('-')
            let newArry = []
            wordArray.map(ele => {
                let splitLetter = ele.split('')
                splitLetter[0] = splitLetter[0]?.toUpperCase()
                ele = splitLetter.join('')
                return newArry.push(ele);
            })

            return newArry.join(' ')
        }
        setBreadCrumbTitle(capitalize(title));
        if (setPageTitle) {
            setPageTitle(capitalize(title));
        }
        if (setProductCategory) {
            setProductCategory(capitalize(cateogry));
        }

    }, [cateogry, setPageTitle, setProductCategory, title])


    return (
        <div className=" h-96 py-80 relative" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage ? bgImage : '/images/breadcrumb-bg.webp'}) no-repeat center center`,
            backgroundSize: 'cover',
        }}>
            <div className="container mx-auto">
                <div className="flex justify-start items-center">
                    <div className="animate__animated animate__fadeInDown wow">
                        <img className="pb-2 animate-pulse" src="/images/logo-white.png" alt="logo" />
                        <h1 className="text-white text-xl lg:text-4xl font-semibold">{breadCrumbTitle}</h1>
                        <p className="text-white text-lg lg:text-2xl uppercase">Drink clean and safe water with Bluetech</p>
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1638609662">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Breadcrumb
