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
    getAllUserProfiles: (state) => {
      state.isLoading = true;
      state.profiles = [];
    },
    successAllUserProfiles: (
      state,
      { payload }: PayloadAction<IUserProfile[]>
    ) => {
      state.isLoading = false;
      state.profiles = payload;
    },
    logout: (state) => {
      state.profile = initialState.profile;
    },
    login: (state) => {},
  },
});

export const { getAllUserProfiles, successAllUserProfiles, logout, login } =
  userSlice.actions;

export default userSlice.reducer;
