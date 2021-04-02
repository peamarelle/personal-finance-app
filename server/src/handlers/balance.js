module.exports = (amounts) => {

    let balance = 0;

    if(amounts) {
        balance = amounts["icome"] - amounts["expense"];
    }

    return balance;
}