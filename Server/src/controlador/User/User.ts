import{Request,Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../modulos/User/user';
import jwt from 'jsonwebtoken';


export const newUser =  async (req:Request, res:Response) =>{

    const { username , password} =req.body;
  const hasdpassword = await bcrypt.hash(password,10);
//validar si el usuario existe en la bd

const user = await User.findOne({where:{username:username}});

if (user) {
   return res.status(400).json({
        msg:'ya existe un usuario con el nombre ' + username
    })
}


try {

    //Guardamos Usuario en la bd
    await User.create({
        username:username,
        password:hasdpassword
    })
    
    
    
    res.json({
        msg:'Usuario  ' + username +' creado exitosamente',
     
    }) 
} catch (error) {
    res.status(400).json({
        msg:'Ups ocurrio un error',
        error
    })
} 



}

export const loginUser = async (req:Request, res:Response) =>{

    const { username , password} =req.body;
    
//Validar si el usuario existe en la bd
const user : any = await User.findOne({where:{username:username}});

if (!user) {
    return res.status(400).json({
        msg:' no existe un nombre con el nombre '+ username + ' en la base de datos'
    })
}
//validamos contraseña
const passawordValid = await bcrypt.compare(password, user.password)
if (!passawordValid) {
  return res.status(400).json({
    msg:'password incorrecto'
  })
}


const token = jwt.sign({
    username:username
},process.env.SECRET_KEY||'pepito123'
);

res.json(token);
//creamos token
    }