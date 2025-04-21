"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowLogoutModal } from "@redux/slices/modalSlice";
import { AppDispatch } from "@redux/store";
import { getUserName } from "@lib/utils";
import { usePathname } from "next/navigation";

const LeftSidebar: React.FC = () => {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 z-[110]">
      <div className="flex items-center gap-2 mb-4">
        <img
          src={"/favicon.ico"}
          alt=""
          className="w-10 rounded-full bg-slate-200"
        />
        <h2 className="text-md font-bold">
          { isClient ? getUserName() : ""} 
        </h2>
      </div>

      <ul>
        <li className="mb-4">
          <div>
            <Link
              href="/all-transaction"
              className={`hover:text-gray-400 ${pathname === "/all-transaction" ? "underline" : ""
                }`}
            >
            All Transaction
            </Link>
          </div>
        </li>
        <li className="mb-4">
          <Link
              href="/topup-transaction"
              className={`hover:text-gray-400 ${pathname === "/topup-transaction" ? "underline" : ""
            }`}
          >
          Topup Transaction
          </Link>
        </li>
        <li className="mb-4">
          <Link
              href="/ppob-transaction"
              className={`hover:text-gray-400 ${pathname === "/ppob-transaction" ? "underline" : ""
            }`}
          >
          PPOB Transaction
          </Link>
        </li>
        <li className="mb-4">
          <button
            onClick={() => {
              dispatch(setShowLogoutModal(true));
            }}
            className="hover:text-gray-400"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
