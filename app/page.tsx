import React, { Suspense } from "react";
import AllTransaction from "@components/transaction/all";

const Home: React.FC = () => {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <AllTransaction />
    </Suspense>
  );
};

export default Home;
