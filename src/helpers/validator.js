const messages = require('../config/messages.json');

const getMessage = (path) => {
    return messages[path] || null;
}

const getValidatorError = (error, messagePath) =>{
    if(!error) return null;

    const errorMessages = {};

    error.details.map( detail => {

        const path = `${messagePath}.${detail.context.key}.${detail.type}`
        
        const customMessage = getMessage(path);

        if(!customMessage)
            console.log('custom message not found for path:', path);

        errorMessages[detail.context.key] = getMessage(path) || detail.message;
    })
    
    return errorMessages;
}

module.exports = {getValidatorError, getMessage};