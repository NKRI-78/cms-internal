"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowLogoutModal } from "@redux/slices/modalSlice";
import { AppDispatch } from "@redux/store";
import { getUserName } from "@lib/utils";
import { usePathname } from "next/navigation";

const LeftSidebar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [openTx, setOpenTx] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const txRoutes = useMemo(
    () => ["/all-transaction", "/topup-transaction", "/ppob-transaction"],
    []
  );

  const isTxActive = txRoutes.includes(pathname || "");

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 z-[110]">
      <div className="flex items-center gap-2 mb-4">
        <img src={"/favicon.ico"} alt="" className="w-10 rounded-full bg-slate-200" />
        <h2 className="text-md font-bold">{isClient ? getUserName() : ""}</h2>
      </div>

      <ul>
        <li className="mb-3">
          <button
            type="button"
            onClick={() => setOpenTx((v) => !v)}
            className={`w-full text-left flex items-center justify-between hover:text-gray-300 ${
              isTxActive ? "text-white font-semibold" : "text-gray-100"
            }`}
          >
            <span>Transaction</span>
            <span className="text-xs">{openTx ? "▾" : "▸"}</span>
          </button>

          {openTx && (
            <ul className="mt-2 ml-3 border-l border-gray-600 pl-3 space-y-2">
              <li>
                <Link
                  href="/all-transaction"
                  className={`block hover:text-gray-300 ${pathname === "/all-transaction" ? "underline" : ""}`}
                >
                  All Transaction
                </Link>
              </li>
              <li>
                <Link
                  href="/topup-transaction"
                  className={`block hover:text-gray-300 ${pathname === "/topup-transaction" ? "underline" : ""}`}
                >
                  Topup Transaction
                </Link>
              </li>
              <li>
                <Link
                  href="/ppob-transaction"
                  className={`block hover:text-gray-300 ${pathname === "/ppob-transaction" ? "underline" : ""}`}
                >
                  PPOB Transaction
                </Link>
              </li>
              <li className="pt-2 mt-1 border-t border-gray-700 text-[11px] uppercase tracking-wide text-gray-400">By App</li>
              <li>
                <Link href="/all-transaction?app=htci" className="block hover:text-gray-300">HTCI</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=gema" className="block hover:text-gray-300">GEMA</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=atj" className="block hover:text-gray-300">ATJ</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=lingkunganku" className="block hover:text-gray-300">LINGKUNGANKU</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=rezekimasjid" className="block hover:text-gray-300">REZEKIMASJID</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=saka" className="block hover:text-gray-300">SAKA</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=pgb" className="block hover:text-gray-300">PGB</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=mrhputih" className="block hover:text-gray-300">MRHPUTIH</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=hp3ki" className="block hover:text-gray-300">HP3KI</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=marlinda" className="block hover:text-gray-300">MARLINDA</Link>
              </li>
              <li>
                <Link href="/all-transaction?app=machandais" className="block hover:text-gray-300">MACHANDAIS</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-4 mt-5">
          <button
            onClick={() => {
              dispatch(setShowLogoutModal(true));
            }}
            className="hover:text-gray-300"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
