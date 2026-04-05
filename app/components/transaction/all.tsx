'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import DataTable from 'react-data-table-component';

import { LoadingSpinner } from '@components/loading/Spinner';

import { AppDispatch, RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setError, fetchAllTransactionAsync } from '@redux/slices/userSlice';

import { AllTransactionPayment } from '@interfaces/transaction/all_transaction';
import { formatDate, formatRupiah } from '@lib/utils';

const AllTransaction: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();

  const transactions = useSelector((state: RootState) => state.users.allTransaction ?? []);
  const isLoading = useSelector((state: RootState) => state.users.isLoading);

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [appFilter, setAppFilter] = useState('all');

  useEffect(() => {
    const urlApp = (searchParams.get('app') || 'all').toLowerCase();
    setAppFilter(urlApp);
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);


  const appOptions = ['all', 'htci', 'gema', 'atj', 'lingkunganku', 'rezekimasjid', 'saka', 'pgb', 'mrhputih', 'hp3ki', 'marlinda', 'machandais'];
  const filteredTransaction = useMemo(() => {
    const search = debouncedSearch.toLowerCase();

    return transactions
      .filter((transaction: AllTransactionPayment) => {
        const orderId = transaction.order_id?.toString().toLowerCase() || '';
        const app = transaction.app?.toString().toLowerCase() || '';

        const bySearch = orderId.includes(search) || app.includes(search);
        const byApp = appFilter === 'all' ? true : app === appFilter.toLowerCase();

        return bySearch && byApp;
      })
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [transactions, debouncedSearch, appFilter]);

  const columns: any = [
    {
      name: 'No',
      cell: (_: AllTransactionPayment, index: number) => (
        <span>{(currentPage - 1) * rowsPerPage + index + 1}</span>
      ),
      sortable: false,
      width: '70px',
    },
    {
      name: 'App',
      selector: (row: AllTransactionPayment) => row.app?.toUpperCase() || '-',
      sortable: false,
      width: '250px',
    },
    {
      name: 'Order ID',
      selector: (row: AllTransactionPayment) => row.order_id,
      sortable: false,
      width: '250px',
    },
    {
      name: 'Gross Amount',
      selector: (row: AllTransactionPayment) => formatRupiah(row.gross_amount),
      sortable: false,
      width: '150px',
    },
    {
      name: 'Total Amount',
      selector: (row: AllTransactionPayment) => formatRupiah(row.total_amount),
      sortable: true,
      width: '150px',
    },
    {
      name: 'Status',
      selector: (row: AllTransactionPayment) => row.transaction_status,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Date',
      selector: (row: AllTransactionPayment) => formatDate(row.created_at),
      sortable: true,
      width: '150px',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      try {
        await dispatch(fetchAllTransactionAsync('')).unwrap();
      } catch (error) {
        dispatch(setError((error as Error).message));
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const subHeaderComponent = (
    <div className="flex items-center w-full justify-between gap-3 my-1">
      <input
        type="text"
        placeholder="Search by Order ID or App"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded text-sm text-black p-2 w-1/2"
      />
      <select
        value={appFilter}
        onChange={(e) => setAppFilter(e.target.value)}
        className="border border-gray-300 rounded text-sm text-black p-2 w-1/3"
      >
        {appOptions.map((app) => (
          <option key={app} value={app}>
            {app === 'all' ? 'All App' : app.toUpperCase()}
          </option>
        ))}
      </select>
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
          responsive
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

export default AllTransaction;
