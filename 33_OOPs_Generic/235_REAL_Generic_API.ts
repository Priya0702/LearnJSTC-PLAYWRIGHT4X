
function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T} {
    return { statusCode: statusCode, data: data};

}
let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);

let flapResp = wrapResponse<string>(200, "admin");
console.log(userResp);

