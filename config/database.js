import { connect } from "mongoose"


export const connectDatabase = async () => {
    try {
        const conection = await connect("mongodb://localhost:27018/db_usuarios");
        return conection;
    } catch (error) {
        throw Error("ERROR: " + error.message)
    }
}