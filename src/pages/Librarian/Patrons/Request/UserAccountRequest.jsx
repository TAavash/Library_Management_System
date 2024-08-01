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
        <div className="w-full h-1/5 bg-gray-200 px-12 py-8 rounded-tr-2xl">
          <div className="w-full h-full flex justify-evenly p-2 gap-1">
            <div className="w-1/2 h-full flex-col">
              <div className="w-full h-3/4 text-start text-3xl">
                New Account Request
              </div>
              <div className="w-full h-1/4 text-start text-xl text-gray-600">
                Manage all the account requests from users.
              </div>
            </div>
            <div className="w-44 h-full flex p-1 justify-evenly">
              <div className="w-full h-8 rounded-2xl bg-white border flex items-center p-1">
                <div className="w-1/5">
                  <FaBell className="w-5 h-5 justify-end fill-gray-400" />
                </div>
                <div className="text-sm w-4/5 text-gray-600">
                  2 Notifications
                </div>
              </div>
            </div>
            <div className="w-1/5 h-full flex p-1">
              <div className="w-10 h-8 rounded-2xl bg-white border flex items-center justify-start p-2">
                <div className="w-1/5">
                  <IoSettingsSharp className="w-5 h-5 fill-gray-400" />
                </div>
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
