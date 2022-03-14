import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from "@nestjs/common";
import { get } from "http";
import { CreateNotiDto } from "./noti.dto";
import { NotiService } from "./noti.service";

@Controller("notis")
export class NotiController{
    constructor(private readonly notiService: NotiService) { }

    @Get()
    findAll(@Request() req){
        const jwt = require('jsonwebtoken');
        const res = jwt.verify(req.headers.authorization.split(" ")[1],"secret")
        return this.notiService.findAll(res._id)
    }

    @Delete("/:id")
    admindeletenoti(@Param("id") id :string, @Request() req) {
        const jwt = require('jsonwebtoken');
        const res = jwt.verify(req.headers.authorization.split(" ")[1],"secret")
        return this.notiService.create({borrow_id:id,user_id:res._id})
    } 

}