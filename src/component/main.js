import React from 'react'
import QRimage from './Images/image-qr-code.png';

function Main() {
    return (<>
        <section class="text-gray-600 body-font">
            <div class="container px-6 py-24 mx-auto">
                <div class="flex justify-center flex-wrap -m-4">
                    <div class="p-4 lg:w-[450px] md:w-[350px] sm:[250px] xs-[150px] lg:h-[666px]">
                        <div class="h-full shadow-xl bg-white px-6 py-6 rounded-[25px] overflow-hidden text-center flex justify-center flex-col items-center">
                            <img src={QRimage} className="rounded-[15px]" />
                            <h1 className='font-[700] text-[23px] p-2 lg:w-[300px]' style={{ color: "hsl(218, 44%, 22%)" }}>
                                Improve your front-end skills by building projects
                            </h1>
                            <p className='font-[400] text-[15px] p-2 lg:w-[250px]' style={{ color: "hsl(220, 15%, 55%)" }}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Main