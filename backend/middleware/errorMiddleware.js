const notFound = (req, res, next) => {
    console.log('I am in not found')
    const error = new error (`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}
const errorHandler =(err, req, res, next)=> {
    console.log("I am in the error Handler")
    console.log(`res.statuscod: ${res.statusCode}`)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message
    })
}

export {notFound, errorHandler}