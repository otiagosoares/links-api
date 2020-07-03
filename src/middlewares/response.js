const TYPE_JSON = 'application/json';
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOk = function(data, message, metadata){
    const status = STATUS_CODE_OK;
    metadata = (metadata) ? metadata : {};
    message = (message) ? message : 'Successful request.';

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({
        message, 
        data, 
        metadata,
        status: status
    });
}

const jsonBadRequest = function(data, message, metadata){

    const status = STATUS_CODE_BAD_REQUEST;
    metadata = (metadata) ? metadata : {};
    message = (message) ? message : 'Bad request.';

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({
        message, 
        data, 
        metadata,
        status: status
    });
}

const jsonUnauthorized = function(data, message, metadata){

    const status = STATUS_CODE_UNAUTHORIZED;
    metadata = (metadata) ? metadata : {};
    message = (message) ? message : 'Unauthorized Request.';

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({
        message, 
        data, 
        metadata,
        status: status
    });
}

const jsonNotFound = function(data, message, metadata){

    const status = STATUS_CODE_NOT_FOUND;
    metadata = (metadata) ? metadata : {};
    message = (message) ? message : 'Not Found Request.';

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({
        message, 
        data, 
        metadata,
        status: status
    });
}

const jsonServerError = function(data, message, metadata){

    const status = STATUS_CODE_SERVER_ERROR;
    metadata = (metadata) ? metadata : {};
    message = (message) ? message : 'Internal server error.';

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({
        message, 
        data, 
        metadata,
        status: status
    });
}

const response = (req, res, next) => {

    res.jsonOk = jsonOk;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
};

module.exports = response;