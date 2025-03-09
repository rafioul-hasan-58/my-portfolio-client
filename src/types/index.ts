export interface IPortfolio {
    _id: string;
    title: string;
    link: string;
    image: string;
    description: string
}
export interface IBlog {
    _id: string;
    title: string;
    image: string;
    description: string
}
export interface IMessage {
    _id: string;
    name: string;
    number: number;
    subject: string;
    message: string;
    email: string;
}