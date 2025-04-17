import React from "react";

import type { Metadata } from "next";

import TransactionPPOB from "@/app/components/transaction/ppob";

export const metadata: Metadata = {
  title: "Admin | PPOB Transaction",
  description: "PPOB Transaction",
};

const TransactionPPOBPage: React.FC = () => {
  return (
    <TransactionPPOB />
  );
};

export default TransactionPPOBPage;
