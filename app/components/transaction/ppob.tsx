"use client";

import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";

import { LoadingSpinner } from "@components/loading/Spinner";

import { AppDispatch, RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoading,
  setError,
  fetchAllTransactionAsync,
} from "@redux/slices/userSlice";

import { AllTransactionPayment } from "@interfaces/transaction/all_transaction";
import { formatDate, formatRupiah } from "@lib/utils";

const AllTransactionPPOB: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const transactions = useSelector((state: RootState) => state.users.allTransaction)
  const isLoading = useSelector((state: RootState) => state.users.isLoading);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredTransaction = useMemo(() => {
    const search = debouncedSearch.toLowerCase();
    return transactions
      .filter((transaction: AllTransactionPayment) => {
        const orderId = transaction.order_id.toString().toLowerCase() || "";
        const App = transaction.app.toString().toLowerCase() || "";
        return orderId.includes(search)
      })
      .sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  }, [transactions, debouncedSearch]);

  const columns: any = [
    {
      name: "No",
      cell: (_: AllTransactionPayment, index: number) => (
        <span>{(currentPage - 1) * rowsPerPage + index + 1}</span>
      ),
      sortable: false,
      width: "70px",
    },
    {
      name: "App",
      selector: (row: AllTransactionPayment) => row.app.toUpperCase(),
      sortable: false,
      width: "250px",
    },
    {
      name: "Order ID",
      selector: (row: AllTransactionPayment) => row.order_id,
      sortable: false,
      width: "250px",
    },
    {
      name: "Gross Amount",
      selector: (row: AllTransactionPayment) => formatRupiah(row.gross_amount),
      sortable: false,
      width: "150px",
    },
    {
      name: "Total Amount",
      selector: (row: AllTransactionPayment) => formatRupiah(row.total_amount),
      sortable: true,
      width: "150px",
    },
    {
      name: "Status",
      selector: (row: AllTransactionPayment) => row.transaction_status,
      sortable: true,
      width: "150px",
    },
    {
      name: "Date",
      selector: (row: AllTransactionPayment) => formatDate(row.created_at),
      sortable: true,
      width: "150px",
    }
  ];

  useEffect(() => {
    dispatch(setIsLoading(true));
    try {
      dispatch(fetchAllTransactionAsync("ppob"));
    } catch (error) {
      dispatch(setError((error as Error).message));
    } finally {
      dispatch(setIsLoading(false));
    }
  }, []);

  const subHeaderComponent = (
    <div className="flex items-center w-full justify-between my-1">
      <input
        type="text"
        placeholder="Search by Order ID or App"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded text-sm text-black p-2 w-1/2"
      />
    </div>
  );

  return isLoading ? (
    <div className="w-full flex items-center justify-center h-screen">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="bg-white h-screen p-4 py-10 w-full">
      <div className="overflow-x-auto max-w-[1400px] max-h-[900px]">
        <DataTable
          columns={columns}
          data={filteredTransaction}
          pagination
          defaultSortAsc
          persistTableHead
          subHeader
          responsive={true}
          subHeaderComponent={subHeaderComponent}
          paginationPerPage={rowsPerPage}
          onChangePage={(page) => setCurrentPage(page)}
          onChangeRowsPerPage={(currentRowsPerPage, page) => {
            setRowsPerPage(currentRowsPerPage);
            setCurrentPage(page);
          }}
          fixedHeader
          fixedHeaderScrollHeight="540px"
        />
      </div>
    </div>
  );
};

export default AllTransactionPPOB;