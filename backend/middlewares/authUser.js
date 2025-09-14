import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log("token is", token);
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized login again ",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("req body in authUser is ", req.body);

    req.userId = token_decode.id;
    console.log("req userId is ", req.userId);
    next();
  } catch (error) {
    console.log("error", error);
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
