// import express from 'express';
// import bodyParser from 'body-parser';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//     origin: 'http://http://10.114.10.20:3000',
//     optionsSuccessStatus: 200,
//     credentials: true,
// }));

// const encryptedPW = bcrypt.hashSync('bluebs2021+', 8);

// // 로그인
// app.post('/login', async (req, res) => {
//     try {
//         if (('admin' === req.body.id) && (bcrypt.compareSync(req.body.pw, encryptedPW))) {
//             const payload = { userId: req.body.id };
//             const secretKey = '58faa95ef000af9a75391fd52e1baa6c613865a116f5635bf0718e405c03b3e0';
//             const token = jwt.sign(payload, secretKey, { expiresIn: "1200m" });
//             res.cookie('token', token, { httpOnly: true, sameSite: "none", secure: true, maxAge: 34000000 });
//             res.json({
//                 code: 200,
//                 message: "token is created",
//                 token: token
//             });
//         } else {
//             throw new Error('아이디와 비밀번호를 확인해주세요');
//         }
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // 쿠키 검증
// app.get('/verifyToken', (req, res) => {
//     const token = req.cookies.token;

//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }
//     const secretKey = '58faa95ef000af9a75391fd52e1baa6c613865a116f5635bf0718e405c03b3e0';
//     jwt.verify(token, secretKey, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Invalid token!!' });
//         }

//         return res.json({ message: 'Token is valid', user: decoded });
//     });
// });

// // 로그아웃
// app.post('/logout', (req, res) => {
//     res.clearCookie('token', {
//         httpOnly: true, sameSite: "none", secure: true
//     });
//     res.json({ message: 'Logout successful' });
// });

// const port = 8001;
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });

// export default app;
