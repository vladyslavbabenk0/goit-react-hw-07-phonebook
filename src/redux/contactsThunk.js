import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '../service/api';

axios.defaults.baseURL = `${BASEURL}`;

const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    return handleRequest(() => axios.get('/contacts'));
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    return handleRequest(() => axios.post('/contacts', contact));
  }
);

export const delContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    return handleRequest(() => axios.delete(`/contacts/${contactId}`));
  }
);
