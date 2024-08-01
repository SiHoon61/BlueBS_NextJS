import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const secretKey = process.env.JWT_SECRET;

export default function handler(req, res) {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie || '');
        console.log(cookies);
        const token = cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            return res.status(200).json({ message: 'Token is valid', user: decoded });
        });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
