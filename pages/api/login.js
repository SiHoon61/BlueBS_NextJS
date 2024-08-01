import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const secretKey = process.env.JWT_SECRET;
const encryptedPW = bcrypt.hashSync('bluebs2021+', 8);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { id, pw } = req.body;
            if (id === 'admin' && bcrypt.compareSync(pw, encryptedPW)) {
                const payload = { userId: id };
                const token = jwt.sign(payload, secretKey, { expiresIn: "1200m" });

                res.setHeader('Set-Cookie', cookie.serialize('token', token, {
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true,
                    maxAge: 34000000,
                }));

                res.status(200).json({
                    code: 200,
                    message: "Token is created",
                    token: token
                });
            } else {
                throw new Error('아이디와 비밀번호를 확인해주세요');
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
