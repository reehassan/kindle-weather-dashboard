const { getMoonPhaseFromDate, setsUnitsSymbolFromApiUrl } = require('../js/utils');

test('getMoonPhaseFromDate returns a number between 0 and 1', () => {
    const date = new Date('2025-09-20');
    const phase = getMoonPhaseFromDate(date);
    expect(phase).toBeGreaterThanOrEqual(0);
    expect(phase).toBeLessThanOrEqual(1);
});

test('setsUnitsSymbolFromApiUrl sets correct units', () => {
    expect(setsUnitsSymbolFromApiUrl('units=metric')).toBe("<i class='wi wi-celsius'></i>");
    expect(setsUnitsSymbolFromApiUrl('units=imperial')).toBe("<i class='wi wi-fahrenheit'></i>");
    expect(setsUnitsSymbolFromApiUrl('')).toBe("<span>K</span>");
});
