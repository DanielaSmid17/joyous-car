export interface User {
    name: string;
    gender: string;
    email: string;
    hobbies: Array<Hobbies>;
    birthdate: string;
    location: string;
    color: string;
    seats: number;
    motor: string;
    
}

interface Hobbies{
    hobbie: {
        id: number,
        label: string
    }
}