import Service from '../util/service'
// 封装数据请求

let link = (url, method="get", data, params)=>{
    return new Promise((resolve, reject)=>{
        Service.request({
            url, 
            method, 
            data, 
            params
        }).then((response)=>{
            resolve(response)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export default link