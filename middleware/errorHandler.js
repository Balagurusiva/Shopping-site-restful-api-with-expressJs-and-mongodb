export const notFound = (req, res, next ) => {
    const error = new Error(`not found ${req.originalUrl}`)
    res.status(404)
    next(error)
}

export const errorHandler = (err, req, res, next) => {
    const statuscode = 500
    res.status(statuscode)
    res.json({
        msg:err?.message,
        stack:err?.stack
    })
}
