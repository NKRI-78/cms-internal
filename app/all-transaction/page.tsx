import React, { Suspense } from "react";

import type { Metadata } from "next";
import AllTransaction from "@components/transaction/all";

export const metadata: Metadata = {
  title: "Admin | All Transaction",
  description: "All Transaction",
};

const AllTransactionPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}><AllTransaction/></Suspense>
  );
};

export default AllTransactionPage;
