export function getFullTimeLine() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`
}

export function getTotal(quantity, rate, type) {
    let itemsCost = quantity * rate;
    let result = 0;
    if (type === "Cash") {
        result = itemsCost - 30;
    } else if (type === "Credit") {
        result = itemsCost - 25;
    }
    return result;
}
