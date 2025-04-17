export interface UserLatestLocation {
    id: string;
    username: string;
    avatar: string;
    email: string;
    contact: string;
    emergency_contact: string;
    address: string;
    nik: string;
    passport: string;
    account_created_at: string;
    tracks: Track[];

    birth_date: string,
    passport_expired: string,
    product: string,
    no_serial: string,
    os: string,
}

interface Track {
    created_at: string;
    records: TrackRecord[];
}

export interface TrackRecord {
    lat: string;
    lng: string;
    device: string;
    address: string;
    time: string;
    created_at: string;
    birth_date: string,
    passport_expired: string,
    product: string,
    no_serial: string,
    os: string,
}