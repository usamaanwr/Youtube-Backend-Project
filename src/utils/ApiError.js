class ApiError extends Error{
    constructor(
        statusCode ,
        message= "something went wrong",
        errors = [],
        statck = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.errors = errors
        this.data = null
        this.message =  false;
if (statck) {
    this.stack = statck

}else{
Error.captureStackTrace(this , this.constructor)
}

    }
}
 export {ApiError}