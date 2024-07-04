import React from 'react'

export default function UserAccountRequest() {
    const AccountRequests = [
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
    ];

    return (
        <>
            <div className='h-[80%] overflow-scroll'>

            {AccountRequests.map((item, index) => (
                <div className="flex border mx-12 my-9 justify-evenly items-center">
                    <div className="flex items-center w-2/4 p-4">
                        <div>
                            <div className="text-lg font-medium text-gray-900">
                                {item.Name}
                            </div>
                            <div className="text-sm text-gray-500">{item.email}</div>
                            <div className="text-sm text-gray-500">{item.status}</div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mx-7 my-9">
                            <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white">
                                Accept
                            </button>
                        </div>
                        <div className="mx-7 my-9">
                            <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white">
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
}
