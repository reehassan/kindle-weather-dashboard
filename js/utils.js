// js/utils.js

function getMoonPhaseFromDate(date) {
    const lp = 2551443; // lunar period in seconds
    const new_moon = new Date(1970, 0, 7, 20, 35, 0);
    const phase = ((date.getTime() - new_moon.getTime()) / 1000) % lp;
    return phase / lp;
}

function setsUnitsSymbolFromApiUrl(url) {
    if (url.indexOf("units=metric") >= 0) {
        return "<i class='wi wi-celsius'></i>";
    }
    if (url.indexOf("units=imperial") >= 0) {
        return "<i class='wi wi-fahrenheit'></i>";
    }
    return "<span>K</span>";
}

module.exports = {
    getMoonPhaseFromDate,
    setsUnitsSymbolFromApiUrl
};
