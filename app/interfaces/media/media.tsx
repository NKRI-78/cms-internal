export interface FileData {
    path: string;
    name: string;
    size: string;
    mimetype: string;
  }
  
  export interface ApiResponse<T> {
    status: number;
    error: boolean;
    message: string;
    data: T;
  }
  
  // Usage example for this specific response
  export type AvatarResponse = ApiResponse<FileData>;