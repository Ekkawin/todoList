import { JsonController ,Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import {findUser} from '../service/index'
import {Task} from '../interfaces/index'


@Controller("/users")
export class UserController {
 
    @Get("/:name")
    async getUser (@Param("name") name: string) {
        console.log('name', name)
        await findUser()
        console.log("findUser");
        
        return "Saving user...";
     }

     @Post("/:name")
     async createUser (@Param('name') name:string, @Body() body:Task) {
         return "create User"
     }
}