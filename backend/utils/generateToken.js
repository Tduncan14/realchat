import jwt from "jsonwebtoken";


export const generateTokenAndSetCookie = (userId, res) => {


    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })


    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,// prevent xxs attack cross-site scripting attacks  not accesible by javascripte,
        sameSite: "strict" // CRSF ATTACK cross-site request forgery attack
    })


}