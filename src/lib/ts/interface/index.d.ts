import { StaticImageData } from "next/image";

export interface USERTYPE{
    name: string,
    title: string,
    description: string,
    image: StaticImageData,
    email: string
}