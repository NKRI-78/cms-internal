export interface News {
    id: number;
    title: string;
    img: string;
    desc: string;
    location: string;
    lat: string;
    lng: string;
    type: string;
    created_at: string;
    state: string
}

export interface Country {
    name: string;
    id: string;
  }