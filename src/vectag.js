

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

}( window.VectA = window.VectA || {}));
