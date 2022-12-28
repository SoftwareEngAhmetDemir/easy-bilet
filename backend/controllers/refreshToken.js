import { Router } from "express";
import jwt from "jsonwebtoken";
const api = Router();
api.post("/", (req, res) => {
  let {ad,email} = req.body;
  let token = jwt.sign(
    {
      ad,
      email,
    },
    "my secret word",
    { expiresIn: "1h" }
  );
  res.setHeader("token",token);
  return res.json({msg:token});
});
export default api;