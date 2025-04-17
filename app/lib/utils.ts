import Cookies from "js-cookie";
import DOMPurify from "dompurify";

export const getUserId = (): string | undefined => {
    return Cookies.get("user_id");
};

export const getUserName = (): string | undefined => {
    return Cookies.get("username");
};

export const getToken = (): string | undefined => {
    return Cookies.get("token");
};

export const handleDescriptionTruncate = (description: string, maxLength: number = 100) => {
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html);
};