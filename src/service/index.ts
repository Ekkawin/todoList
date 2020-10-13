import { getConnection } from 'typeorm';

export const findUser = async () => {
    const connection = await getConnection()
    console.log('connection', connection)
    return ("I connected")
}
