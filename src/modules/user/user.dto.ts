export class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    employee_id: string;
    phone_number: string;
    division: string;
    department: string;
    section: string;
    profileimg: string;
}
export class UpdateUserDto {
    firstname: string;
    lastname: string;
    phone_number: string;
    division: string;
    department: string;
    section: string;
    profileimg: string;
}
export class LoginUserDto {
    email: string;
    password: string;
}