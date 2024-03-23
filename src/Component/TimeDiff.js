export const GetDiffrence = (orderTime) => {
    const currentTime = Date.now();
    let diff = currentTime - orderTime;
    var minutes = Math.floor(diff / 60000);
    var seconds = ((diff % 60000) / 1000).toFixed(0);
    return minutes+'.'+seconds;
}

export const GetDiffrenceText = (orderTime) => {
    const currentTime = Date.now();
    let diff = currentTime - orderTime;
    var minutes = Math.floor(diff / 60000);
    var seconds = ((diff % 60000) / 1000).toFixed(0);
    return minutes + ' min ' + seconds + ' sec';
}
export const getOrderId = (number) => {
    return ("00" + number).slice(-3)
}