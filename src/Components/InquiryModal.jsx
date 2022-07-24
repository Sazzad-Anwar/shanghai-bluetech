import { LoadingOutlined } from "@ant-design/icons";
import { Input, message, Select } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { sendMsg } from "../Api";
import { countryCode } from "./CountryCode";
import PopUpModal from "./PopUpModal"
const { Option } = Select;

const { TextArea } = Input;

const InquiryModal = ({ setShowModal, showModal, popUpData }) => {

    console.log({ popUpData })

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companySite, setCompanySite] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [country, setCountry] = useState('');
    const [interestedProducts, setInterestedProducts] = useState(``);
    const [isDisabled, setIsDisabled] = useState(false);

    const selectCountryCode = value => {
        setSelectedCountryCode(value);
        setCountry(countryCode.filter(item => item.dial_code === value)[0].name);
    }

    useEffect(() => {
        let getDelay = setTimeout(() => {
            setInterestedProducts(`Hello I'm interested in ${popUpData && popUpData.name}.`)
        }, 1000)

        return () => clearTimeout(getDelay)

    }, [popUpData])

    const sendMessage = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone: selectedCountryCode + phone,
            Country: country,
            CompanyName: companyName,
            CompanySite: companySite,
            InterestedProducts: interestedProducts,
        }
        setIsDisabled(true);
        if (name && email && phone) {
            sendMsg(data).then(() => {
                setName('');
                setEmail('');
                setPhone('');
                setCountry('');
                setCompanyName('');
                setCompanySite('');
                setInterestedProducts('');
                setIsDisabled(false);
                success();
            })
        }

    }

    const success = () => {
        message.success('Message is sent to supplier.');
    };

    return (
        <PopUpModal setShowModal={setShowModal} showModal={showModal}>
            {/* email to supplier */}
            <div className="flex justify-center items-center animate__animated animate__fadeIn wow animate__delay-1s">
                <form onSubmit={sendMessage} className="bg-white p-4 lg:p-8 shadow-xl rounded-xl w-[37.5rem] mx-auto px-8">
                    <h1 className="text-xl lg:text-3xl font-bold text-center">Send Message To Supplier</h1>
                    <Input value={name} onChange={e => setName(e.target.value)} required type='text' className="my-3 py-3" placeholder="Name" />
                    <Input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="my-3 py-3" placeholder="Email" />
                    <div className='flex items-center w-full'>
                        <Select size='large' placeholder="Country Code" className='my-3 py-3' style={{ width: 200, borderRight: 'none' }} onChange={selectCountryCode}>
                            {countryCode && countryCode.map(country => (
                                <Option key={country.dial_code} value={country.dial_code}>{country.name}</Option>
                            ))}
                        </Select>
                        <Input type='tel' size='large' required value={phone} onChange={e => setPhone(e.target.value)} className='' style={{
                            borderLeft: 'none',
                        }} placeholder="Phone Number" />
                    </div>
                    <Input value={country} onChange={e => setCountry(e.target.value)} type="text" className="my-3 py-3" placeholder="Country" />
                    <Input value={companyName} onChange={e => setCompanyName(e.target.value)} type="text" className="my-3 py-3" placeholder="Company Name" />
                    <Input value={companySite} onChange={e => setCompanySite(e.target.value)} type="url" className="my-3 py-3" placeholder="Company Website" />
                    <TextArea value={interestedProducts} onChange={e => setInterestedProducts(e.target.value)} className="my-3 py-3" placeholder="Please inform us about your question or query" autoSize />
                    <button disabled={isDisabled} type="submit" className="my-3 py-2 px-3 text-base text-white bg-primary hover:bg-blue-400 outline-none shadow transition duration-300 ease-in-out">
                        {isDisabled ? <> <LoadingOutlined /> Sending...</> : <>Send <i className="bi bi-send-fill pl-2"></i></>}
                    </button>
                </form>
            </div>
        </PopUpModal>
    )
}

export default InquiryModal