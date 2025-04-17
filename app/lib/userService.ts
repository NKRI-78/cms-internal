import axios from 'axios';
import Swal from "sweetalert2";

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://api-rakhsa.inovatiftujuh8.com/api/v1/admin/list/user/v2');
    const data = response.data.data;
    return data;
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

export const fetchUserLatestLocation = async () => {
  try {
    const response = await axios.get('https://api-rakhsa.inovatiftujuh8.com/api/v1/admin/list/user-latest-location');
    const data = response.data.data;
    return data;
  } catch(e: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: e?.response?.data?.message || e.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
}
