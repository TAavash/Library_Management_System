import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getAllFacultyMembers } from "../../../../utils/Api";

export const FacultyMembers = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFacultyMembers();
        console.log("Fetched response:", response);

        let list = response;
        if (response.Student) {
          // Adjust this line based on your actual API response structure
          list = response.Student;
        }

        if (Array.isArray(list)) {
          setFacultyMembers(list); // Set the original list of students
          setFilteredData(list); // Also set it as the initial filtered data
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

    const filtered = facultyMembers.filter((person) =>
      `${person.first_name} ${person.last_name}`.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="w-full h-full rounded-2xl">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
          <div className="w-[50%] h-full flex-col">
            <div className="w-full h-[70%] text-start text-3xl">All Users</div>
            <div className="w-full h-[30%] text-start text-[-2xl] text-[#525252]">
              Manage all the user list.
            </div>
          </div>
          <div className="w-[180px] h-full flex p-[2px] justify-evenly">
            <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
              <div className="w-[20%]">
                <FaBell className="w-[20px] h-[20px] justify-end fill-[#A3A3A3]" />
              </div>
              <div className="text-[15px] w-[80%] text-[#525252]">
                2 Notifications
              </div>
            </div>
          </div>
          <div className="w-[20%] h-full flex p-[2px]">
            <div className="w-[40px] h-[30px] rounded-2xl bg-white border flex items-center justify-start p-[10px]">
              <div className="w-[20%]">
                <IoSettingsSharp className="w-[20px] h-[20px] fill-[#A3A3A3]" />
              </div>
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
                <th className="p-3 text-start">Status</th>
                <th className="p-3 text-start">Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((person) => (
                <tr
                  key={person.member_idS}
                  onClick={() => handleRowClick(person)}
                  className="cursor-pointer hover:bg-gray-200"
                >
                  <td className="py-3 px-5">{person.member_idS}</td>
                  <td className="p-3">{person.first_name}</td>
                  <td className="p-3">{person.last_name}</td>
                  <td className="p-3">{person.email}</td>
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
