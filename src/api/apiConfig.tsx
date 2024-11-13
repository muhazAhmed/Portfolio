import axios from "axios";
const DB_CONNECTION = process.env.NEXT_PUBLIC_API_URL;

export const loadServer = async (payload: any) => {
  try {
    await axios.post(`${DB_CONNECTION}/api`, payload);
  } catch (error) {
    return console.log(error);
  }
};

export const sendMessage = async (payload: any, loading: any) => {
  try {
    loading(true);
    const response = await axios.post(
      `${DB_CONNECTION}/api/new-message`,
      payload
    );
    return response?.data;
  } catch (error) {
    return console.log(error);
  } finally {
    loading(false);
  }
};
