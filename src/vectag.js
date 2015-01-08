
(function( VectA) {

    /**
     * @template T
     * @param {Object.<?, T>} obj
     * @return {Array.<T>}
     */
    VectA.objToArray = function(obj){
        var out = [];
        for (var key in obj)
            if (obj.hasOwnProperty(key))
                out.push(obj[key]);
        return out;
    };

    /**
     * @template T
     * @param {Array.<T>}
     * @param {T} obj
     */
    VectA.removeFromArray = function(arr, obj){
        var index = arr.indexOf(obj);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            console.log("Impossible to remove element not present in array.");
        }
    };

}( window.VectA = window.VectA || {}));
