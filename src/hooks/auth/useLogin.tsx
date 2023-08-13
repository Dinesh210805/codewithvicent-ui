import { useMutation } from "@tanstack/react-query";
import { myAPIClient } from "../../api/axiosInstance";
import { UserAuthTypes } from "../../types/auth.types";

const loginUser = async (userDetails: UserAuthTypes) => {
  try {
    const res = await myAPIClient.post("/api/v1/auth/login", userDetails);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

function useLogin() {
  return useMutation(loginUser);
}

export default useLogin;
