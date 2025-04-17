import React from "react";

import type { Metadata } from "next";

import TransactionPPOB from "@/app/components/transaction/ppob";

export const metadata: Metadata = {
  title: "Admin | Users",
  description: "Users",
};

const TransactionPPOBPage: React.FC = () => {
  return (
    <TransactionPPOB />
  );
};

export default TransactionPPOBPage;
