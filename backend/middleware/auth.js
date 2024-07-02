const jwt = require('jsonwebtoken');

function authMiddllware(role) {
    return (request, response, next) => {
        const token = request.headers['Authorization'];
        if (!token) return response.status(401).send('Access denied!');

        try {
            const verified = jwt.verify(token, 'secretKey');
            request.user = verified;
            if (role && !role.includes(verified.role)) {
                return response.status(403).send('Forbidden');
            }
            next();
        } catch (error) {
            response.status(400).send('Invalid token');
        }
    };
}

module.exports = authMiddllware;