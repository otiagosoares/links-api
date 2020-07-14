const { verifyJwt } = require('../helpers/jwt');

const checkJwt = (req, res, next) =>{

    //alias 'path' to url
    const {url: path} = req;

    const excludedPath = [
        '/auth/sign-up', 
        '/auth/sign-in'
    ];

    const isExcluded = !!excludedPath.find( p => p.startsWith(path));
    if(isExcluded) return next();

    let token = req.headers['authorization'];
    token = token ? token.slice(7, token.length) : null;

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