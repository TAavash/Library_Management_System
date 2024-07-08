import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Searchdata() {


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(null);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = null.filter((person) =>
            person.fullname.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className=' flex flex-col w-full h-[80%]  bg-white'>

            <div className='flex justify-center m-2'>
                <div className="flex w-[500px] items-center gap-1 border rounded ">
                    <FiSearch className="h-5 w-5 ml-1" />
                    <input type="text" placeholder='Search' className='p-1 w-[500px]  border-hidden rounded-r-xl focus:outline-none'
                        value={searchQuery}
                        onChange={handleSearch} />
                </div>
            </div>
            
        </div>
    )
}

export default Searchdata