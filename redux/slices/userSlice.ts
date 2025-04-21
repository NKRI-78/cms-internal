import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@interfaces/users/users';
import { UserLatestLocation } from '@interfaces/users/user-latest-location';

import { fetchAllTransaction, fetchPpobListTransaction } from '@lib/transactionService';
import { PPOBListTransaction } from '@/app/interfaces/transaction/list_transaction';
import { AllTransactionPayment } from '@/app/interfaces/transaction/all_transaction';

export const fetchPpobListTransactionAsync = createAsyncThunk('transaction/ppob',
  async () => {
    const response = await fetchPpobListTransaction();
    return response;
  }
);

export const fetchAllTransactionAsync = createAsyncThunk('transaction/all',
  async (orderId: string) => {
    const response = await fetchAllTransaction(orderId);
    return response;
  }
);

interface UserState {
  users: User[];
  transactions: PPOBListTransaction[];
  allTransaction: AllTransactionPayment[],
  userLatestLocations: UserLatestLocation[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  allTransaction: [],
  transactions: [],
  userLatestLocations: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTransactionAsync.fulfilled, (state, action) => {
      state.allTransaction = action.payload;
    });
    builder.addCase(fetchPpobListTransactionAsync.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
  },
});

export const { setUsers, setIsLoading, setError } = userSlice.actions;
export default userSlice.reducer;