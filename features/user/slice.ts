import { IUserProfile } from '../../models/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../models/users';

// redux-toolkit
const initialState: IUserState = {
  isLoading: false,
  profiles: [],
  profile: {
    id: '',
    email: '',
    username: '',
    imageUrl: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    getAllUserProfiles: (state) => {
      state.profiles = [];
    },
    setAllUserProfiles: (state, { payload }: PayloadAction<IUserProfile[]>) => {
      state.profiles = payload;
    },
    logout: (state) => {
      state.profile = initialState.profile;
    },
    login: (state) => {},
  },
});

export const {
  setLoading,
  getAllUserProfiles,
  setAllUserProfiles,
  logout,
  login,
} = userSlice.actions;

export default userSlice.reducer;
