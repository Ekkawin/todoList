import { getConnection, getRepository } from 'typeorm';
import {User} from '../entity/User'
// import {Task} from '../interfaces/index'


interface Task {
    name:string,
    date:string,
    task:string
}




export const findUser = async (name: {name:string}) => {
    console.log('name', name)
    try{

        const connection = await getConnection()
        const userRepository = await connection.getRepository(User)
        const findUser = await userRepository.find(name)
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
        const connection = await getConnection()
        const userRepository = await connection.getRepository(User)
        const createUser = await userRepository.save(props)
        return createUser
        
    }
    catch(error)
    {
        console.error(error)
        return error
    }
    
        
    }

