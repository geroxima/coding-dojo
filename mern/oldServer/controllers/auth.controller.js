import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';
//REGISTER
export const register = async (req, res) => {
    const {email, password, username} = req.body;

    try{

      const userFound = await User.findOne({email})
      if (userFound) return res.status(400).json(["The email is alredy in use"]);
        //bcrypt: encriptado, más seguridad.
        // hash: hará que las contraseñas se vean así por ejemplo: mfnvilrwngwfe%$#&%$.
        const passwordHash = await bcrypt.hash(password, 10) //10: cantidad de veces que se va a ejecutar el algoritmo.

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

      const userSaved = await newUser.save();
      const token = await createAccessToken({id: userSaved._id});
      
      res.cookie('token', token);
      res.json({
         id: userSaved._id,
         username: userSaved.username,
         email: userSaved.email,
         createdAt: userSaved.createdAt,
         updatedAt: userSaved.updatedAt,
         //no pongo para pedir la contraseña, no es un dato importante jeje
       });
      console.log("Registrando Usuario");/////////////
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log("Error: No se pudo registrar");/////////////
    }
};
//LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try{

      const userFound = await User.findOne({email})

      if (!userFound) return res.status(400).json({ message: "User not found"});
      //bcrypt: encriptado, más seguridad.
      // hash: hará que las contraseñas se vean así por ejemplo: mfnvilrwngwfe%$#&%$.
      const isMatch = await bcrypt.compare(password, userFound.password) //10: cantidad de veces que se va a ejecutar el algoritmo.

      if (!isMatch) return res.status(400).json({ message: "Incorrect password"});


    const token = await createAccessToken({id: userFound._id});
    
    res.cookie('token', token);
    res.json({
       id: userFound._id,
       username: userFound.username,
       email: userFound.email,
       createdAt: userFound.createdAt,
       updatedAt: userFound.updatedAt,
       //no pongo para pedir la contraseña, no es un dato importante jeje
     });
    console.log("Login: se encontró al usuario en la base de datos")
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error: no se encontró al usuario en la base de datos")
  }
};
//LOG OUT
export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
}
//PROFILE
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)
   
  if(!userFound) return res.status(400).json({ message: "User not found"});

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  })
};

export const verifyToken = async (req, res) => {
  const {token} = req.cookies

  if(!token) return res.status(401).json({message: "Unauthorized"});

  jwt.verify(token, TOKEN_SECRET, async (err, user) =>{
    if (err) return res.status(401).json({message: "Unauthorized"});

    const userFound = await User.findById(user.id)
    if (!userFound) return res.status(401).json({message: "Unauthorized"});

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    })

  })
}