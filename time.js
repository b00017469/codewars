function humanReadable(seconds) {
    let timeArr = [];
    let hours = Math.floor(seconds / 3600);
    timeArr.push(hours > 9 ? hours : '0' + hours);
    let min = Math.floor((seconds % 3600) / 60);
    timeArr.push(min > 9 ? min : '0' + min);
    let sec = Math.floor(seconds % 3600 - min * 60);
    timeArr.push(sec > 9 ? sec : '0' + sec);
    return timeArr.join(':');
}

console.log(humanReadable(3600));