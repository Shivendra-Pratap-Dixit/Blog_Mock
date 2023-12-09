// const JWT = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"].split(" ")[1];
//     JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(200).send({
//           message: "Auth Fialed",
//           success: false,
//         });
//       } else {
//         req.body.userId = decode.id;
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       message: "Auth Failed",
//       success: false,
//     });
//   }
// };
const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if the "Authorization" header is present
    if (!req.headers["authorization"]) {
      return res.status(401).send({
        message: "Auth Failed - Authorization header missing",
        success: false,
      });
    }

    const token = req.headers["authorization"].split(" ")[1];

    // Log the token to see what's being received
    console.log("Received Token:", token);

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.error("JWT Verification Error:", err);
        return res.status(401).send({
          message: "Auth Failed - Invalid token",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.error("Middleware Error:", error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
