import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { userList } from "../../../../utils/Api";

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
        <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
          <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
            <div className="w-[100%] h-full flex-col">
              <div className="w-full h-auto text-start text-3xl p-1">
                New Account Request
              </div>

              <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
              Manage all the account requests from users
              </div>
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
