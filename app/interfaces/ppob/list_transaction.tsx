export interface PPOBListTransaction {
    app: App;
    value: string;
    idpel: string;
    product: string;
    created_at: string;
}

interface App {
    id: number;
    name: string[];
}