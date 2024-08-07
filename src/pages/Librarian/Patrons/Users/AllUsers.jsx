import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getAllMember } from "../../../../utils/Api";

const AllUsers = () => {
  const [allPatrons, setAllPatrons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllMember();
        console.log("Fetched response:", response);

        let list = response;
        if (response.members) {
          // Adjust this line based on your actual API response structure
          list = response.members;
        }

        if (Array.isArray(list)) {
          setFilteredData(list);
          setAllPatrons(list);
        } else {
          console.error("Expected an array but got:", JSON.stringify(list));
        }
      } catch (error) {
        console.error("Error fetching account requests:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleRowClick = (person) => {
    navigate("/MemberDetail", { state: { member_id: person.member_idS } });
    console.log(person);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = allPatrons.filter((person) =>
      person.fullname.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="w-full h-full rounded-2xl">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
          <div className="w-[100%] h-full flex-col">
            <div className="w-full h-auto text-start text-3xl p-1">
              All Users
            </div>

            <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
              Manage all users
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[80%] bg-white">
        <div className="flex justify-center m-2">
          <div className="flex w-[500px] items-center gap-1 border rounded">
            <FiSearch className="h-5 w-5 ml-1" />
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-[500px] border-hidden rounded-r-xl focus:outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="overflow-scroll h-full">
          <table className="w-full h-full border border-collapse bg-white">
            <thead>
              <tr>
                <th className="py-3 px-5 text-start">ID</th>
                <th className="p-3 text-start">First Name</th>
                <th className="p-3 text-start">Last Name</th>
                <th className="p-3 text-start">Email</th>
                <th className="p-3 text-start">Role</th>
                <th className="p-3 text-start">Status</th>
                <th className="p-3 text-start">Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((person) => (
                <tr
                  key={person.id}
                  onClick={() => handleRowClick(person)}
                  className="cursor-pointer hover:bg-gray-200"
                >
                  <td className="py-3 px-5">{person.member_idS}</td>
                  <td className="p-3">{person.first_name}</td>
                  <td className="p-3">{person.last_name}</td>
                  <td className="p-3">{person.email}</td>
                  <td className="p-3">{person.role_name}</td>
                  <td className="p-3">{person.status}</td>
                  <td className="p-3">{person.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
