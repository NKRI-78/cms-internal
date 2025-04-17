import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@interfaces/users/users';
import { UserLatestLocation } from '@interfaces/users/user-latest-location';

import { fetchPpobListTransaction } from '@/app/lib/transactionService';
import { PPOBListTransaction } from '@/app/interfaces/ppob/list_transaction';

export const fetchPpobListTransactionAsync = createAsyncThunk(
  'ppob/list-transaction',
  async () => {
    const response = await fetchPpobListTransaction();
    return response;
  }
);

interface UserState {
  users: User[];
  transactions: PPOBListTransaction[];
  userLatestLocations: UserLatestLocation[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
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
    builder.addCase(fetchPpobListTransactionAsync.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
  },
});

export const { setUsers, setIsLoading, setError } = userSlice.actions;
export default userSlice.reducer;