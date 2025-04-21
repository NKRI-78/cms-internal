import React from "react";

import type { Metadata } from "next";

import AllTransactionTopup from "@components/transaction/topup";

export const metadata: Metadata = {
  title: "Admin | PPOB Transaction",
  description: "PPOB Transaction",
};

const TransactionTopupPage: React.FC = () => {
  return (
    <AllTransactionTopup />
  );
};

export default TransactionTopupPage;
