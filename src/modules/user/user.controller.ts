import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from "@nestjs/common";
import { CreateUserDto, LoginUserDto, UpdateUserDto } from "./user.dto";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';


@Controller("users")
export class UserController{
    constructor(private readonly UserService: UserService) { }

    @Get()
    findAll(){
        return this.UserService.findAll()
    }
    @Get("/profile")
    findprofile(@Request() req){
        const jwt = require('jsonwebtoken');
        const res = jwt.verify(req.headers.authorization.split(" ")[1],"secret")
        return this.UserService.findById(res._id)
    }
    @Get(":id")
    findById(@Param("id") id :string){
        return this.UserService.findById(id)
    }
    @Post()
    create(@Body() body:CreateUserDto){
        return this.UserService.create(body)
        
    }
    @Post("/login")
    async login(@Body() body:LoginUserDto) {
        const jwt = require('jsonwebtoken');
        const user = await this.UserService.findByEmail(body.email)
        if(!user||!(await bcrypt.compare(body.password,user.password))){
            return "not have token"
        }
        const token = jwt.sign({_id:user.id},"secret")
        return {token, user}
    }

    @Patch("/editprofile")
    updateById(@Request() req, @Body() body:UpdateUserDto){
        const jwt = require('jsonwebtoken');
        const res = jwt.verify(req.headers.authorization.split(" ")[1],"secret")
        return this.UserService.updateById(res._id,body)
    }

    @Delete(":id")
    deleteById(@Param("id") id :string){
        return this.UserService.deleteById(id)
    }
}