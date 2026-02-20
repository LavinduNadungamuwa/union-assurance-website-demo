import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  age: '',
  maritalStatus: '',
  spouseName: '',
};

const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    setUserFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setMaritalStatus: (state, action) => {
      state.maritalStatus = action.payload;
    },
    setSpouseName: (state, action) => {
      state.spouseName = action.payload;
    },
    resetUserForm: () => initialState,
  },
});

export const {
  setUserFormData,
  setFirstName,
  setLastName,
  setTitle,
  setDateOfBirth,
  setGender,
  setAge,
  setMaritalStatus,
  setSpouseName,
  resetUserForm,
} = userFormSlice.actions;

export default userFormSlice.reducer;
