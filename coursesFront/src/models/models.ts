

export interface Course{
    id:number;
    title: string;
    imageUrl: string;
    description?: string;
    duration:string|number;
    teacher: Teacher|null;
}

export interface Teacher{
    id:number;
    name:string;
    bio:string;
}