const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt');

const checkJwt = (req, res, next) =>{

    //alias 'path' to url
    const {url: path} = req;

    const excludedPath = [
        '/auth/sign-up', 
        '/auth/sign-in',
        '/auth/refresh',
    ];

    const isExcluded = !!excludedPath.find( p => p.startsWith(path));
    if(isExcluded) return next();

    const token = getTokenFromHeaders(req.headers);

    if(!token){
        return res.jsonUnauthorized(null, 'Invalid token');
    }

    try{

        const decoded = verifyJwt(token)
        req.accountId = decoded.id;
        next();

    }catch(error){
        return res.jsonUnauthorized(null, 'Invalid token');
    }
}

module.exports = checkJwt;