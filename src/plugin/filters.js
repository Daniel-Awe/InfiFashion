export const maskString = (str,left, center, right) => {
    let c = "";
    for (let i = 0; i < center; i++) {
        c += "*";
    }
    return str.slice(0, left) + c + str.slice(str.length - right);
}