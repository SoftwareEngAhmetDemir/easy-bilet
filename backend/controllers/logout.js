const express = require("express");
const api = express.Router();

api.post("/", async (req, res) => {
  req.session.token = "";
  res.json({ msg: "destroyed" });
});
export default api;