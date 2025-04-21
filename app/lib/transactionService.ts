import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchAllTransaction = async (orderId: string) => {
  try {
    const response = await axios.get(`https://api-internal.langitdigital78.com/api/v1/payment/transaction-list?order_id=${orderId}`);
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

export const fetchPpobListTransaction = async () => {
  try {
    const response = await axios.get('https://api-internal.langitdigital78.com/api/v1/ppob/transaction-list');
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