import jwt from "jsonwebtoken";

export let tokenGenratetor = (id) =>   jwt.sign(id, process.env.SECRETKEY) 

 