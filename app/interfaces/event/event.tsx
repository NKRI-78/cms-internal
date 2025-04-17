export interface Event {
    id: number;
    title: string;
    description: string;
    state: string;
    continent: string;
    start_day: string;
    end_day: string;
    start_date: string;
    end_date: string;
    user: User;
}