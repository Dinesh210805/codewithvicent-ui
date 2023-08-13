import { useMutation } from "@tanstack/react-query";
import { myAPIClient } from "../../api/axiosInstance";
import { UserAuthTypes } from "../../types/auth.types";

const registerUser = async (userDetails: UserAuthTypes) => {
  try {
    const res = await myAPIClient.post("/api/v1/auth/register", userDetails);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

function useRegister() {
  return useMutation(registerUser);
}

export default useRegister;
