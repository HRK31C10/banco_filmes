import { type } from "os";
import {Model, DataTypes} from "sequelize";

import { sequelize } from "../instances/mysql";

export interface UserInstance extends Model{
    id: number
    nome: string
    diretor: string
    anolancamento: number
}
export const User = sequelize.define<UserInstance>("User,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    },
    diretor:{
        type:DataTypes.STRING
    },
    anolancamento:{
        type:DataTypes.INTEGER
    },
},{
    tableName:'filmes',
    timestamps:false
})