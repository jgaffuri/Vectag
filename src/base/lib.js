/**
 * @template T
 * @param {Object.<?, T>} obj
 * @return {Array.<T>}
 */
export const objToArray = function (obj) {
    var out = [];
    for (var key in obj)
        if (obj.hasOwnProperty(key))
            out.push(obj[key]);
    return out;
};

/**
 * @template T
 * @param {Array.<T>} arr
 * @param {T} obj
 */
export const removeFromArray = function (arr, obj) {
    /** @type {number} */
    var index = arr.indexOf(obj);
    if (index > -1)
        arr.splice(index, 1);
    else
        console.log("Impossible to remove element not present in array.");
};

export const removeFromArrayS = function (arr, objs) {
    for (let obj of objs)
        removeFromArray(arr, obj)
};
