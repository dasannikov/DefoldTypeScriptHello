const fs = require('fs');
const path = require('path')

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;


    return hour + ":" + min + ":" + sec;
}

function moveFiles(inFolder, outFolder, newExt) {
    fs.readdir(inFolder, (err, files) => {
        files.forEach(file => {
            if (path.extname(file) == ".lua") {
                fileT = path.basename(file, '.lua')
                fs.renameSync(inFolder + file, outFolder + fileT + newExt);
                timeN = getDateTime()
                //console.log(file + ':\t' + inFolder + file + ' -> ' + outFolder + fileT + newExt);
                console.log(timeN + ' : ' + file)
            }
        });
    })
}

function intervalFunc() {
    moveFiles('modules/', '../modules/', '.lua')
    moveFiles('./', '../scripts/', '')
}

setInterval(intervalFunc, 500);