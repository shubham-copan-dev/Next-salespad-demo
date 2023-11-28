import axiosInstance from "../index";

const authenticate = async (props: any) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_AUTH_API_KEY;
    const URL = `/v1/accounts:signInWithPassword?key=${apiKey}`;
    const response = await axiosInstance({ ...props, url: URL });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default authenticate;
