import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userList } from "../../../../utils/Api";
import { FiSearch } from "react-icons/fi";

export default function UserAccountRequest() {
  const navigate = useNavigate();
  const [AccountRequests, setAccountRequests] = useState([]);

  const handleAcceptClick = (user_idS) => () => {
    navigate(`/MemberRegistration/${user_idS}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await userList();
        if (Array.isArray(list)) {
          setAccountRequests(list);
        } else {
          console.error("Expected an array but got:", list);
        }
      } catch (error) {
        console.error("Error fetching account requests:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-full rounded-2xl">
        <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
          <div className=" h-full flex-col">
            <div className="w-full h-[70%] text-3xl">
              New Account Request
            </div>
            <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
              Manage all the account request from users.
            </div>
          </div>

          <div className="flex justify-center m-2">
          <div className="flex w-full md:w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-full border-hidden focus:outline-none"
            />
          </div>
        </div>
        </div>
        <div className="h-4/5 overflow-scroll">
          {AccountRequests.length > 0 ? (
            AccountRequests.map((item, index) => (
              <div
                key={index}
                className="flex border-2 mx-12 my-9 justify-evenly items-center"
              >
                <div className="flex items-center w-2/4 p-4">
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {item.username}
                    </div>
                    <div className="text-sm text-gray-500">{item.email}</div>
                    <div className="text-sm text-gray-500">{item.status}</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-7 my-9">
                    <button
                      className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white"
                      onClick={handleAcceptClick(item.user_idS)}
                    >
                      Details
                    </button>
                  </div>
                  <div className="mx-7 my-9">
                    <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              No account requests found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
