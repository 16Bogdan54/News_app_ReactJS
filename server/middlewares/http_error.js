const messages = {
    400: "Bad request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
    500: "Server error"
}

const httpError = (status,  message = messages[status]) => {
    const err = new Error(message)
    err.status = status;
    return err;
}

module.exports = httpError;