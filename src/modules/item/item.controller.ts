import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTtemDto, UpdateItemDto } from "./item.dto";
import { ItemService } from "./item.service";

@Controller("items")
export class ItemController{
    constructor(private readonly itemService: ItemService) { }

    @Get()
    findAll(){
        return this.itemService.findAll()
    }
    @Get(":id")
    findById(@Param("id") id :string){
        return this.itemService.findById(id)
    }
    @Post()
    create(@Body() body:CreateTtemDto){
        return this.itemService.create(body)
    }
    @Patch(":id")
    update(@Param("id") id :string, @Body() body:UpdateItemDto){
        return this.itemService.updateById(id,body)
    }
    @Delete(":id")
    deleteById(@Param("id") id :string){
        return this.itemService.deleteById(id)
    }

}