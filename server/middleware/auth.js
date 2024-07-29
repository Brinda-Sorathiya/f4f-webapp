import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login again" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = decoded.id;
    console.log("i'm authed")
    next()
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
