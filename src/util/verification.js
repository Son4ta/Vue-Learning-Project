// 密码强度中
export function CkStrength_mid(data){
    let reg_mid = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
    return reg_mid.test(data)
}
// 密码强度高
export function CkStrength_high(data){
    let reg_high = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,10}/
    return reg_high.test(data)
}