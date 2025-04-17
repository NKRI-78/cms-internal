import { getUserId } from "@lib/utils";

import axios from 'axios';
import Swal from "sweetalert2";

import Cookies from "js-cookie";

export const login = async (payload: LoginPayload) => {
  try {
    
    const response = await axios.post('https://api-rakhsa.inovatiftujuh8.com/api/v1/auth/login', payload);

    const data: LoginResponse = response.data;

    const token = data.data.token;
    const userName = data.data.user.name;
    const userId = data.data.user.id;
    const access = data.data.user.access;

    Cookies.set("token", token, {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });

    Cookies.set("user_id", userId, {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });

    Cookies.set("username", userName, {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });

    Cookies.set("access", access, {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });

  } catch (e: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
}

export const isLoggedIn = async (type: string) => {
  try {
    await axios.post('https://api-rakhsa.inovatiftujuh8.com/api/v1/auth/is-logged-in',
      {
        user_id: getUserId(),
        type: type
      }
    );
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
};
