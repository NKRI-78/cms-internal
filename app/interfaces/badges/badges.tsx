interface BadgesResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    live: number;
    resolved: number;
    closed: number;
    unresponded: number;
  };
}
