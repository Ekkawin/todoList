import { JsonController ,Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import {findUser, createUser} from '../service/index'
import {Task} from '../interfaces/index'


@Controller("/user")
export class UserController {
 
    @Get("/:name")
    async getUser (@Param("name") name: string) {
        console.log('name', name)
        const user = await findUser(name)
        console.log("findUser");
        
        return user;
     }

     @Post()
     async createUser (@Body() body:any) {
         console.log('body', body)
         const user = await createUser(body)
         console.log("create User done");
         
         return "create User"
     }
}