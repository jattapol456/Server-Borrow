import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from "@nestjs/common";
import { CreateBorrowDto, UpdateBorrowDto } from "./borrow.dto";
import { BorrowService } from "./borrow.service";

@Controller("borrows")
export class BorrowController{
    constructor(private readonly borrowService: BorrowService) { }

    @Get()
    findAll(){
        return this.borrowService.findAll()
    }
    @Get("/userborrow")
    retunItem(@Request() req){
        const jwt = require('jsonwebtoken');
        const res = jwt.verify(req.headers.authorization.split(" ")[1],"secret")
        
        return this.borrowService.findByUserId(res._id)
    }
    @Get("adminfindborrow")
    adminfindItem(){
        return this.borrowService.adminfindItem()
    }
    @Get("adminfindborrowreturn")
    adminfindItemreturn(){
        return this.borrowService.adminfindItemreturn()
    }
    
    @Get("/borrowByItemId/:id")
    borrowByItemId(@Param("id") id :string){
        return this.borrowService.borrowByItemId(id)
    }

    @Get(":id")
    findById(@Param("id") id :string){
        return this.borrowService.findById(id)
    }
    @Post("")
    borrowItem(@Request() req, @Body() body:CreateBorrowDto){
        const jwt = require('jsonwebtoken');
        const res = jwt.verify(req.headers.authorization.split(" ")[1],"secret")
        body.user_id = res._id
        return this.borrowService.create(body)
    }
    @Patch("adminstatus/:id")
    update(@Param("id") id :string, @Request() req, @Body() body:UpdateBorrowDto) {
        return this.borrowService.update(id, body)
    }
    
    @Delete(":id")
    deleteById(@Param("id") id :string){
        return this.borrowService.deleteById(id)
    }

}