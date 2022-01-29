import { CloseOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";

const PopUpModal = ({ children, setShowModal, showModal, className }) => {

    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(window !== undefined && window.innerHeight);
        if (showModal) {
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [showModal])

    return (<>
        {showModal &&
            <div className={`fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-[#61616142] z-30 ${showModal ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'} ${className}`}>
                <div className="">
                    <div style={{ maxHeight: height }} className="w-11/12 border border-[#6AC9F3] rounded-lg shadow-lg h-auto bg-transparent z-30 overflow-auto relative">
                        {children}
                        <div onClick={() => setShowModal(false)} className="h-14 w-14 absolute right-0 top-0 flex justify-center items-center bg-primary cursor-pointer">
                            <CloseOutlined className="text-center text-white" />
                        </div>
                    </div>
                </div>
            </div>
        }
    </>

    )
}

export default PopUpModal;