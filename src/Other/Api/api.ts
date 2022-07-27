import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_BASE_URL;

export const getApi = async (path: string) => {
  const url = SERVER_URL + path;
  try {
    const response = await axios.get(url);
    return { success: true, data: response.data, error: null };
  } catch (error) {
    return { success: false, data: null, error };
  }
};

export const postApi = async (path: string, body: object) => {
  const url = SERVER_URL + path;
  try {
    const response = await axios.post(url, body);
    return { seccess: true, data: response.data, error: null };
  } catch (error) {
    return { success: false, data: null, error };
  }
};

export const putApi = async (path: string, body: object) => {
  const url = SERVER_URL + path;
  try {
    const response = await axios.put(url, body);
    return { success: true, data: response.data, error: null };
  } catch (error) {
    return { success: false, data: null, error };
  }
};

export const deleteApi = async (path: string) => {
  const url = SERVER_URL + path;
  try {
    const response = await axios.delete(url);
    return {
      success: true,
      data: response.data,
      error: null
    };
  } catch (error) {
    return { success: false, data: null, error };
  }
};
