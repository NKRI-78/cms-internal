export interface AllTransactionPayment {
    app: string;
    order_id: string;
    gross_amount: number;
    total_amount: number;
    transaction_status: string;
    created_at: string;
}
