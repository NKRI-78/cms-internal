interface SosDataRating {
    rate: string;
    fullname: string
}

interface SosData {
    id: string;
    media: string;
    type: string;
    ticket: string;
    ratings: SosDataRating[];
    location: string;
    country: string;
    chat_id: string;
    lat: string;
    lng: string;
    time: string;
    created: string;
    created_at: string;
    status: string;
    platform_type: string;
    sender: { 
        id: string
        name: string 
    };
    agent: { 
        id: string
        name: string 
    };
}

interface SosResponse {
    data: SosData[];
}

interface ConfirmSosResponse {
    data: {
        agent_id: string;
        agent_name: string;
        chat_id: string;
        sos_id: string;
    };
    error: boolean;
    message: string;
    status: number;
}