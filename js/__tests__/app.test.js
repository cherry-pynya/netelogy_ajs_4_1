import showHealth from "../app.js";

test.each([
    [{name: 'Маг', health: 90}, "healthy"],
    [{name: 'Маг', health: 50}, "wounded"],
    [{name: 'Маг', health: 15}, "wounded"],
    [{name: 'Маг', health: 30}, "wounded"],
    [{name: 'Маг', health: 14}, "critical"],
])(`should calculate health rating from stats %o`, (obj, expected) => {
    const result = showHealth(obj);
    expect(result).toBe(expected);
});