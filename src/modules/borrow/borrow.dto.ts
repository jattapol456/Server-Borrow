export class CreateBorrowDto {
    user_id: string;
    item_id: string;
    reason: string;
    dateborrow: string;
    timeborrow: string;
    datereturn: string;
    timereturn: string;
}
export class UpdateBorrowDto {
    datereturn: string;
    status: string;
    problem: string;
}
