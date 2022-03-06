export class CreateTtemDto {
    model: string;
    name: string;
    brand: string;
    code_ip: string;
    img: string;
    statusitem: string;
    problem?: string[];
}
export class UpdateItemDto {
    _id: string;
    model: string;
    name: string;
    brand: string;
    code_ip: string;
    img: string;
    statusitem: string;
    problem?: string[];
}
export class BorrowItemDto {
    
}
