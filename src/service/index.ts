import { getConnection, getRepository } from 'typeorm';
import {User} from '../entity/User'
import {Task} from '../interfaces/index'




export const findUser = async (name:string) => {
    try{

        const connection = await getConnection()
        const userRepository = await connection.getRepository(User)
        const findUser = await userRepository.findOne({name})
        return findUser
        
    }
    catch(error)
    {
        console.error(error)
        return error
    }
    
    
}

export const createUser = async (props:Task)=> {
console.log('props', props)
    try{
        // const connection = await getConnection()
        // const userRepository = await connection.getRepository(User)
        // const findUser = await userRepository.create(props)
        return "createUser"
        
    }
    catch(error)
    {
        console.error(error)
        return error
    }
    
        
    }

