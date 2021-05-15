(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vectag"] = factory();
	else
		root["vectag"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvasplus.js":
/*!***************************!*\
  !*** ./src/canvasplus.js ***!
  \***************************/
/*! exports provided: CanvasPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPlus", function() { return CanvasPlus; });
//check:
//https://github.com/kangax/fabric.js/
//http://kineticjs.com/
//http://www.createjs.com/Docs/EaselJS/classes/MouseEvent.html

/**
 * @constructor
 * @struct
 * @param {string} div
 * @param {number=} w
 * @param {number=} h
 */
const CanvasPlus = function (div, w, h) {

    /**@type {Object} */
    var cvs = document.getElementById(div);

    /**@type {Object} */
    var ctx = cvs.getContext("2d");
    if (w) ctx.canvas.width = w;
    if (h) ctx.canvas.height = h;
    /**@return {Object} */
    this.getContext2D = function () { return ctx; };

    /**
     * @return {CanPl.CanvasPlus}
     */
    this.redraw = function () {
        console.log("Override redraw method");
        return this;
    };

    /**
     * @param {number} x
     * @param {number} y
     */
    var pan = function (x, y) {
        //TODO clear
        //TODO ctx.translate(10,10);
        //TODO updatelimits
        this.redraw();
    };

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} f
     */
    var zoom = function (x, y, f) {
        //TODO
        //ctx.scale(2,2);
        this.redraw();
    };
    /*
            $("#"+div).click(function(e) {
                console.log(canvasClickPosition(cvs, e));
                //TODO pan
            });
    */
    /**
     * @param {object} elt
     * @param {object} e
     * @return {Object.<string, number>}
     */
    var canvasClickPosition = function (elt, e) {
        if (e.offsetX && e.offsetY)
            return { x: e.offsetX, y: e.offsetY };
        var tX = 0, tY = 0;
        do {
            tX += elt.offsetLeft - elt.scrollLeft;
            tY += elt.offsetTop - elt.scrollTop;
            elt = elt.offsetParent;
        } while (elt);
        return { x: e.pageX - tX, y: e.pageY - tY };
    };

};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: objToArray, removeFromArray, Grid, CanvasPlus, planets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vectag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectag.js */ "./src/vectag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objToArray", function() { return _vectag_js__WEBPACK_IMPORTED_MODULE_0__["objToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return _vectag_js__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _vectag_js__WEBPACK_IMPORTED_MODULE_0__["Grid"]; });

/* harmony import */ var _canvasplus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasplus.js */ "./src/canvasplus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasPlus", function() { return _canvasplus_js__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"]; });

/* harmony import */ var _planets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets */ "./src/planets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return _planets__WEBPACK_IMPORTED_MODULE_2__["planets"]; });







/***/ }),

/***/ "./src/planets.js":
/*!************************!*\
  !*** ./src/planets.js ***!
  \************************/
/*! exports provided: planets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return planets; });
/* harmony import */ var _vectag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectag */ "./src/vectag.js");
/* harmony import */ var _canvasplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasplus */ "./src/canvasplus.js");



//TODO use spatial index to boost collision detection

/**
 * @constructor
 * @struct
 * @param {Universe} u
 * @param {number} m
 * @param {number} x
 * @param {number} y
 * @param {number} vx
 * @param {number} vy
 */
const Planet = function (u, m, x, y, vx, vy) {
    /** @type {Universe} */
    this.u = u;
    /** @type {number} */
    this.m = m;

    /** @type {number} */
    var r = this.r();

    /** @type {number} */
    this.x = 0;
    if (x < r) this.x = r;
    else if (x > u.w - r) this.x = u.w - r;
    else this.x = x;

    /** @type {number} */
    this.y = 0;
    if (y < r) this.y = r;
    else if (y > u.h - r) this.y = u.h - r;
    else this.y = y;

    /** @type {number} */
    this.vx = vx;
    /** @type {number} */
    this.vy = vy;
};

/**
 */
Planet.prototype.observe = function () {
    //update the force
    /** @type {number} */
    this.fx = 0;
    /** @type {number} */
    this.fy = 0;
    for (var i = 0; i < this.u.ps.length; i++) {
        /** @type {Planet} */
        var p = this.u.ps[i];
        if (this == p) continue;
        /** @type {number} */
        var d = this.d(p);
        d = d * d * d;
        this.fx += 0.01 * (p.x - this.x) * this.m * p.m / d;
        this.fy += 0.01 * (p.y - this.y) * this.m * p.m / d;
    }
};

/**
 * @param {Planet} p
 * @return {number}
 */
Planet.prototype.d = function (p) {
    /** @type {number} */
    var dx = p.x - this.x;
    /** @type {number} */
    var dy = p.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
};


/**
 * @return {number}
 */
Planet.prototype.r = function () {
    return Math.sqrt(this.m / Math.PI);
};

/**
 */
Planet.prototype.change = function () {
    //compute acceleration
    /** @type {number} */
    var ax = this.fx / this.m;
    /** @type {number} */
    var ay = this.fy / this.m;

    //compute new speed
    this.vx += ax * this.u.timeStepMs;
    this.vy += ay * this.u.timeStepMs;

    //compute new position
    this.x += this.vx * this.u.timeStepMs;
    this.y += this.vy * this.u.timeStepMs;

    //limit
    /*double r=r();
     if(x<r) { x=r; vx=-vx*e; }
     if(y<r) { y=r; vy=-vy*e; }
     if(x>u.w-r) { x=u.w-r; vx=-vx*e; }
     if(y>u.h-r) { y=u.h-r; vy=-vy*e; }*/
    if (this.x < 0) { this.x = this.u.w; }
    if (this.y < 0) { this.y = this.u.h; }
    if (this.x > this.u.w) { this.x = 0; }
    if (this.y > this.u.h) { this.y = 0; }
};



/**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 * @param {number} timeStepMs
 */
const Universe = function (w, h, timeStepMs) {
    /** @type {number} */
    this.w = w;
    /** @type {number} */
    this.h = h;

    /** @type {number} */
    this.timeStepMs = timeStepMs;

    /** @type {Array.<Planet>} */
    this.ps = [];
};


/**
 * @param {number} nb
 * @param {number} mi
 * @param {number} minSpeed
 * @param {number} maxSpeed
 * @return {Universe}
 */
Universe.prototype.fillRandomly = function (nb, mi, minSpeed, maxSpeed) {
    /** @type {Array.<Planet>} */
    this.ps = [];
    for (var i = 0; i < nb; i++) {
        var speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        var angle = 2 * Math.random() * Math.PI;
        this.ps.push(new Planet(this, mi, this.w * Math.random(), this.h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle)));
    }
    return this;
};


/**
 */
Universe.prototype.step = function () {
    /** @type {number} */
    var i;

    //observation
    for (i = 0; i < this.ps.length; i++)
        this.ps[i].observe();

    //action
    for (i = 0; i < this.ps.length; i++)
        this.ps[i].change();

    //collision detections
    /** @type {Array.<Planet>} */
    var agg = this.findCollision();
    while (agg !== null) {
        this.ps.push(this.aggregate(agg));
        Object(_vectag__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, agg[0]);
        Object(_vectag__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, agg[1]);
        agg = this.findCollision();
    }
};

/**
 * @return {Array.<Planet>}
 */
Universe.prototype.findCollision = function () {
    for (var i = 0; i < this.ps.length; i++) {
        /** @type {Planet} */
        var pi = this.ps[i];
        for (var j = i + 1; j < this.ps.length; j++) {
            /** @type {Planet} */
            var pj = this.ps[j];
            /** @type {number} */
            var d1 = pi.d(pj);
            /** @type {number} */
            var d2 = pi.r() + pj.r();
            if (d1 > d2) continue;
            return [pi, pj];
        }
    }
    return null;
};

/**
 * @param {Array.<Planet>} agg
 */
Universe.prototype.aggregate = function (agg) {
    /** @type {Planet} */
    var p1 = agg[0];
    /** @type {Planet} */
    var p2 = agg[1];
    /** @type {number} */
    var m = p1.m + p2.m;
    return new Planet(this,
        m,
        (p1.x * p1.m + p2.x * p2.m) / m,
        (p1.y * p1.m + p2.y * p2.m) / m,
        (p1.vx * p1.m + p2.vx * p2.m) / m,
        (p1.vy * p1.m + p2.vy * p2.m) / m
    );
};

/**
 * @param {number} nb
 * @param {CanvasPlus} cplus
 * @return {Universe}
 */
Universe.prototype.start = function (nb, cplus) {
    var i = 0;
    var uni = this;
    var engine = function () {
        uni.step();
        cplus.redraw();
        if (nb > 0 && i++ > nb) return;
        setTimeout(engine, 0);
    };
    engine();
    return this;
};



//entry point
const planets = function (divId, canvasId) {

    var cdiv = document.getElementById(divId);
    /** @type {number} */
    var w = cdiv.offsetWidth;
    /** @type {number} */
    var h = cdiv.offsetHeight;

    var nb = 1000, mi = 0.5;
    /** @type {Universe} */
    var uni = new Universe(w, h, 10).fillRandomly(nb, mi, 0, 0.1);

    /** @type {CanvasPlus} */
    var cplus = new _canvasplus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](canvasId, w, h);
    var ctx = cplus.getContext2D();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    cplus.redraw = function () {
        //ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, w, h);

        //display planets
        for (var i = 0; i < uni.ps.length; i++) {
            /** @type {Planet} */
            var p = uni.ps[i];
            var t = p.m / (nb * mi);
            ctx.fillStyle = "rgb(255,255," + Math.floor(255 * (1 - t)) + ")";
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r(), 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        //label
        ctx.fillStyle = "rgb(200,200,200)";
        ctx.fillRect(0, 0, 65, 13);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillText(uni.ps.length + " planets", 2, 10);
    };

    //start
    uni.start(-1, cplus);

}


         //TODO add restart/big bang button
/* Button restart = new Button("Recommencer!");
 restart.addClickHandler(new ClickHandler() {
 @Override
 public void onClick(ClickEvent event) {
 u.fill();
 c.getContext2d().setFillStyle(CssColor.make(0,0,0));
 c.getContext2d().fillRect(0, 0, w, h);
 }
 });
 RootPanel.get("b").add(restart);*/


/***/ }),

/***/ "./src/vectag.js":
/*!***********************!*\
  !*** ./src/vectag.js ***!
  \***********************/
/*! exports provided: objToArray, removeFromArray, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToArray", function() { return objToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });


/**
 * @template T
 * @param {Object.<?, T>} obj
 * @return {Array.<T>}
 */
const objToArray = function (obj) {
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
const removeFromArray = function (arr, obj) {
    /** @type {number} */
    var index = arr.indexOf(obj);
    if (index > -1)
        arr.splice(index, 1);
    else
        console.log("Impossible to remove element not present in array.");
};



/**
 * @constructor
 * @struct
 * @template T
 * @param {number} w
 * @param {number} h
 * @param {number} res
 */
const Grid = function (w, h, res) {
    this.res = res;
    /** @type {number} */
    this.lengthX = Math.floor(w / res + 1);
    /** @type {number} */
    this.lengthY = Math.floor(h / res + 1);
    /** @type {Array.<Array.<Array.<T>>>} */
    this.cells = [];

    for (var i = 0; i < this.lengthX; i++) {
        /** @type {Array.<Array.<T>>} */
        this.cells[i] = [];
        for (var j = 0; j < this.lengthY; j++) {
            /** @type {Array.<T>} */
            this.cells[i][j] = [];
        }
    }
};

/**
 * @param {number} xmin
 * @param {number} ymin
 * @param {number} xmax
 * @param {number} ymax
 * @return {Array.<T>}
 */
Grid.prototype.get = function (xmin, ymin, xmax, ymax) {
    var as = [];
    for (var i = Math.floor(xmin / this.res); i < Math.floor(xmax / this.res + 1); i++) {
        if (i < 0 || i >= this.lengthX) continue;
        for (var j = Math.floor(ymin / this.res); j < Math.floor(ymax / this.res + 1); j++) {
            if (j < 0 || j >= this.lengthY) continue;
            as.push.apply(as, this.cells[i][j]);
        }
    }
    return as;
};

/**
 * @param {T} obj
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
Grid.prototype.add = function (obj, x, y) {
    return this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)].push(obj);
};

/**
 * @param {T} obj
 * @param {number} x
 * @param {number} y
 */
Grid.prototype.remove = function (obj, x, y) {
    removeFromArray(this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)], obj);
};


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvY2FudmFzcGx1cy5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3ZlY3RhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xC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O0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZWN0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vY2hlY2s6XG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9rYW5nYXgvZmFicmljLmpzL1xuLy9odHRwOi8va2luZXRpY2pzLmNvbS9cbi8vaHR0cDovL3d3dy5jcmVhdGVqcy5jb20vRG9jcy9FYXNlbEpTL2NsYXNzZXMvTW91c2VFdmVudC5odG1sXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gZGl2XG4gKiBAcGFyYW0ge251bWJlcj19IHdcbiAqIEBwYXJhbSB7bnVtYmVyPX0gaFxuICovXG5leHBvcnQgY29uc3QgQ2FudmFzUGx1cyA9IGZ1bmN0aW9uIChkaXYsIHcsIGgpIHtcblxuICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgdmFyIGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdik7XG5cbiAgICAvKipAdHlwZSB7T2JqZWN0fSAqL1xuICAgIHZhciBjdHggPSBjdnMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICh3KSBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBpZiAoaCkgY3R4LmNhbnZhcy5oZWlnaHQgPSBoO1xuICAgIC8qKkByZXR1cm4ge09iamVjdH0gKi9cbiAgICB0aGlzLmdldENvbnRleHQyRCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN0eDsgfTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0NhblBsLkNhbnZhc1BsdXN9XG4gICAgICovXG4gICAgdGhpcy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcnJpZGUgcmVkcmF3IG1ldGhvZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKi9cbiAgICB2YXIgcGFuID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgLy9UT0RPIGNsZWFyXG4gICAgICAgIC8vVE9ETyBjdHgudHJhbnNsYXRlKDEwLDEwKTtcbiAgICAgICAgLy9UT0RPIHVwZGF0ZWxpbWl0c1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZcbiAgICAgKi9cbiAgICB2YXIgem9vbSA9IGZ1bmN0aW9uICh4LCB5LCBmKSB7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2N0eC5zY2FsZSgyLDIpO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG4gICAgLypcbiAgICAgICAgICAgICQoXCIjXCIrZGl2KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FudmFzQ2xpY2tQb3NpdGlvbihjdnMsIGUpKTtcbiAgICAgICAgICAgICAgICAvL1RPRE8gcGFuXG4gICAgICAgICAgICB9KTtcbiAgICAqL1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbHRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZVxuICAgICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBudW1iZXI+fVxuICAgICAqL1xuICAgIHZhciBjYW52YXNDbGlja1Bvc2l0aW9uID0gZnVuY3Rpb24gKGVsdCwgZSkge1xuICAgICAgICBpZiAoZS5vZmZzZXRYICYmIGUub2Zmc2V0WSlcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH07XG4gICAgICAgIHZhciB0WCA9IDAsIHRZID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdFggKz0gZWx0Lm9mZnNldExlZnQgLSBlbHQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIHRZICs9IGVsdC5vZmZzZXRUb3AgLSBlbHQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgZWx0ID0gZWx0Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfSB3aGlsZSAoZWx0KTtcbiAgICAgICAgcmV0dXJuIHsgeDogZS5wYWdlWCAtIHRYLCB5OiBlLnBhZ2VZIC0gdFkgfTtcbiAgICB9O1xuXG59O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vdmVjdGFnLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jYW52YXNwbHVzLmpzXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldHNcIlxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi92ZWN0YWcnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4vY2FudmFzcGx1cyc7XG5cbi8vVE9ETyB1c2Ugc3BhdGlhbCBpbmRleCB0byBib29zdCBjb2xsaXNpb24gZGV0ZWN0aW9uXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge1VuaXZlcnNlfSB1XG4gKiBAcGFyYW0ge251bWJlcn0gbVxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge251bWJlcn0gdnhcbiAqIEBwYXJhbSB7bnVtYmVyfSB2eVxuICovXG5jb25zdCBQbGFuZXQgPSBmdW5jdGlvbiAodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICB0aGlzLnUgPSB1O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubSA9IG07XG5cbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgciA9IHRoaXMucigpO1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy54ID0gMDtcbiAgICBpZiAoeCA8IHIpIHRoaXMueCA9IHI7XG4gICAgZWxzZSBpZiAoeCA+IHUudyAtIHIpIHRoaXMueCA9IHUudyAtIHI7XG4gICAgZWxzZSB0aGlzLnggPSB4O1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy55ID0gMDtcbiAgICBpZiAoeSA8IHIpIHRoaXMueSA9IHI7XG4gICAgZWxzZSBpZiAoeSA+IHUuaCAtIHIpIHRoaXMueSA9IHUuaCAtIHI7XG4gICAgZWxzZSB0aGlzLnkgPSB5O1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy52eCA9IHZ4O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMudnkgPSB2eTtcbn07XG5cbi8qKlxuICovXG5QbGFuZXQucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy91cGRhdGUgdGhlIGZvcmNlXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5meCA9IDA7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5meSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnUucHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgIHZhciBwID0gdGhpcy51LnBzW2ldO1xuICAgICAgICBpZiAodGhpcyA9PSBwKSBjb250aW51ZTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBkID0gdGhpcy5kKHApO1xuICAgICAgICBkID0gZCAqIGQgKiBkO1xuICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIHRoaXMuZnkgKz0gMC4wMSAqIChwLnkgLSB0aGlzLnkpICogdGhpcy5tICogcC5tIC8gZDtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7UGxhbmV0fSBwXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblBsYW5ldC5wcm90b3R5cGUuZCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIGR4ID0gcC54IC0gdGhpcy54O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBkeSA9IHAueSAtIHRoaXMueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblBsYW5ldC5wcm90b3R5cGUuciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubSAvIE1hdGguUEkpO1xufTtcblxuLyoqXG4gKi9cblBsYW5ldC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vY29tcHV0ZSBhY2NlbGVyYXRpb25cbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgYXggPSB0aGlzLmZ4IC8gdGhpcy5tO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgdGhpcy52eCArPSBheCAqIHRoaXMudS50aW1lU3RlcE1zO1xuICAgIHRoaXMudnkgKz0gYXkgKiB0aGlzLnUudGltZVN0ZXBNcztcblxuICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICB0aGlzLnggKz0gdGhpcy52eCAqIHRoaXMudS50aW1lU3RlcE1zO1xuICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGhpcy51LnRpbWVTdGVwTXM7XG5cbiAgICAvL2xpbWl0XG4gICAgLypkb3VibGUgcj1yKCk7XG4gICAgIGlmKHg8cikgeyB4PXI7IHZ4PS12eCplOyB9XG4gICAgIGlmKHk8cikgeyB5PXI7IHZ5PS12eSplOyB9XG4gICAgIGlmKHg+dS53LXIpIHsgeD11Lnctcjsgdng9LXZ4KmU7IH1cbiAgICAgaWYoeT51LmgtcikgeyB5PXUuaC1yOyB2eT0tdnkqZTsgfSovXG4gICAgaWYgKHRoaXMueCA8IDApIHsgdGhpcy54ID0gdGhpcy51Lnc7IH1cbiAgICBpZiAodGhpcy55IDwgMCkgeyB0aGlzLnkgPSB0aGlzLnUuaDsgfVxuICAgIGlmICh0aGlzLnggPiB0aGlzLnUudykgeyB0aGlzLnggPSAwOyB9XG4gICAgaWYgKHRoaXMueSA+IHRoaXMudS5oKSB7IHRoaXMueSA9IDA7IH1cbn07XG5cblxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHN0cnVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNc1xuICovXG5jb25zdCBVbml2ZXJzZSA9IGZ1bmN0aW9uICh3LCBoLCB0aW1lU3RlcE1zKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy53ID0gdztcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB0aGlzLmggPSBoO1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy50aW1lU3RlcE1zID0gdGltZVN0ZXBNcztcblxuICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgdGhpcy5wcyA9IFtdO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICogQHBhcmFtIHtudW1iZXJ9IG1pXG4gKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICogQHJldHVybiB7VW5pdmVyc2V9XG4gKi9cblVuaXZlcnNlLnByb3RvdHlwZS5maWxsUmFuZG9tbHkgPSBmdW5jdGlvbiAobmIsIG1pLCBtaW5TcGVlZCwgbWF4U3BlZWQpIHtcbiAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgIHRoaXMucHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgdmFyIHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICB2YXIgYW5nbGUgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMucHMucHVzaChuZXcgUGxhbmV0KHRoaXMsIG1pLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpLCBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKSwgc3BlZWQgKiBNYXRoLnNpbihhbmdsZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICovXG5Vbml2ZXJzZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgaTtcblxuICAgIC8vb2JzZXJ2YXRpb25cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKylcbiAgICAgICAgdGhpcy5wc1tpXS5vYnNlcnZlKCk7XG5cbiAgICAvL2FjdGlvblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBzLmxlbmd0aDsgaSsrKVxuICAgICAgICB0aGlzLnBzW2ldLmNoYW5nZSgpO1xuXG4gICAgLy9jb2xsaXNpb24gZGV0ZWN0aW9uc1xuICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgdmFyIGFnZyA9IHRoaXMuZmluZENvbGxpc2lvbigpO1xuICAgIHdoaWxlIChhZ2cgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcy5wdXNoKHRoaXMuYWdncmVnYXRlKGFnZykpO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5wcywgYWdnWzBdKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIGFnZ1sxXSk7XG4gICAgICAgIGFnZyA9IHRoaXMuZmluZENvbGxpc2lvbigpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPFBsYW5ldD59XG4gKi9cblVuaXZlcnNlLnByb3RvdHlwZS5maW5kQ29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgdmFyIHBpID0gdGhpcy5wc1tpXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdGhpcy5wcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICB2YXIgcGogPSB0aGlzLnBzW2pdO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICB2YXIgZDEgPSBwaS5kKHBqKTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgdmFyIGQyID0gcGkucigpICsgcGoucigpO1xuICAgICAgICAgICAgaWYgKGQxID4gZDIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIFtwaSwgcGpdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxQbGFuZXQ+fSBhZ2dcbiAqL1xuVW5pdmVyc2UucHJvdG90eXBlLmFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIChhZ2cpIHtcbiAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICB2YXIgcDEgPSBhZ2dbMF07XG4gICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgdmFyIHAyID0gYWdnWzFdO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBtID0gcDEubSArIHAyLm07XG4gICAgcmV0dXJuIG5ldyBQbGFuZXQodGhpcyxcbiAgICAgICAgbSxcbiAgICAgICAgKHAxLnggKiBwMS5tICsgcDIueCAqIHAyLm0pIC8gbSxcbiAgICAgICAgKHAxLnkgKiBwMS5tICsgcDIueSAqIHAyLm0pIC8gbSxcbiAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAocDEudnkgKiBwMS5tICsgcDIudnkgKiBwMi5tKSAvIG1cbiAgICApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbmJcbiAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3BsdXNcbiAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICovXG5Vbml2ZXJzZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAobmIsIGNwbHVzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciB1bmkgPSB0aGlzO1xuICAgIHZhciBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICBpZiAobmIgPiAwICYmIGkrKyA+IG5iKSByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICB9O1xuICAgIGVuZ2luZSgpO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG5cbi8vZW50cnkgcG9pbnRcbmV4cG9ydCBjb25zdCBwbGFuZXRzID0gZnVuY3Rpb24gKGRpdklkLCBjYW52YXNJZCkge1xuXG4gICAgdmFyIGNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIHcgPSBjZGl2Lm9mZnNldFdpZHRoO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBoID0gY2Rpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICB2YXIgbmIgPSAxMDAwLCBtaSA9IDAuNTtcbiAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgIHZhciB1bmkgPSBuZXcgVW5pdmVyc2UodywgaCwgMTApLmZpbGxSYW5kb21seShuYiwgbWksIDAsIDAuMSk7XG5cbiAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgdmFyIGNwbHVzID0gbmV3IENhbnZhc1BsdXMoY2FudmFzSWQsIHcsIGgpO1xuICAgIHZhciBjdHggPSBjcGx1cy5nZXRDb250ZXh0MkQoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2N0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wNSlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgICAgIC8vZGlzcGxheSBwbGFuZXRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pLnBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgICAgIHZhciBwID0gdW5pLnBzW2ldO1xuICAgICAgICAgICAgdmFyIHQgPSBwLm0gLyAobmIgKiBtaSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDI1NSxcIiArIE1hdGguZmxvb3IoMjU1ICogKDEgLSB0KSkgKyBcIilcIjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMocC54LCBwLnksIHAucigpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sYWJlbFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDIwMCwyMDApXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh1bmkucHMubGVuZ3RoICsgXCIgcGxhbmV0c1wiLCAyLCAxMCk7XG4gICAgfTtcblxuICAgIC8vc3RhcnRcbiAgICB1bmkuc3RhcnQoLTEsIGNwbHVzKTtcblxufVxuXG5cbiAgICAgICAgIC8vVE9ETyBhZGQgcmVzdGFydC9iaWcgYmFuZyBidXR0b25cbi8qIEJ1dHRvbiByZXN0YXJ0ID0gbmV3IEJ1dHRvbihcIlJlY29tbWVuY2VyIVwiKTtcbiByZXN0YXJ0LmFkZENsaWNrSGFuZGxlcihuZXcgQ2xpY2tIYW5kbGVyKCkge1xuIEBPdmVycmlkZVxuIHB1YmxpYyB2b2lkIG9uQ2xpY2soQ2xpY2tFdmVudCBldmVudCkge1xuIHUuZmlsbCgpO1xuIGMuZ2V0Q29udGV4dDJkKCkuc2V0RmlsbFN0eWxlKENzc0NvbG9yLm1ha2UoMCwwLDApKTtcbiBjLmdldENvbnRleHQyZCgpLmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuIH1cbiB9KTtcbiBSb290UGFuZWwuZ2V0KFwiYlwiKS5hZGQocmVzdGFydCk7Ki9cbiIsIlxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge09iamVjdC48PywgVD59IG9ialxuICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICovXG5leHBvcnQgY29uc3Qgb2JqVG9BcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5LjxUPn0gYXJyXG4gKiBAcGFyYW0ge1R9IG9ialxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgb2JqKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcbiAgICBpZiAoaW5kZXggPiAtMSlcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gcmVtb3ZlIGVsZW1lbnQgbm90IHByZXNlbnQgaW4gYXJyYXkuXCIpO1xufTtcblxuXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzXG4gKi9cbmV4cG9ydCBjb25zdCBHcmlkID0gZnVuY3Rpb24gKHcsIGgsIHJlcykge1xuICAgIHRoaXMucmVzID0gcmVzO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGVuZ3RoWCA9IE1hdGguZmxvb3IodyAvIHJlcyArIDEpO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGVuZ3RoWSA9IE1hdGguZmxvb3IoaCAvIHJlcyArIDEpO1xuICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFycmF5LjxBcnJheS48VD4+Pn0gKi9cbiAgICB0aGlzLmNlbGxzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoWDsgaSsrKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFycmF5LjxUPj59ICovXG4gICAgICAgIHRoaXMuY2VsbHNbaV0gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aFk7IGorKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48VD59ICovXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldW2pdID0gW107XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB4bWluXG4gKiBAcGFyYW0ge251bWJlcn0geW1pblxuICogQHBhcmFtIHtudW1iZXJ9IHhtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5bWF4XG4gKiBAcmV0dXJuIHtBcnJheS48VD59XG4gKi9cbkdyaWQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdmFyIGFzID0gW107XG4gICAgZm9yICh2YXIgaSA9IE1hdGguZmxvb3IoeG1pbiAvIHRoaXMucmVzKTsgaSA8IE1hdGguZmxvb3IoeG1heCAvIHRoaXMucmVzICsgMSk7IGkrKykge1xuICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmxlbmd0aFgpIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKHZhciBqID0gTWF0aC5mbG9vcih5bWluIC8gdGhpcy5yZXMpOyBqIDwgTWF0aC5mbG9vcih5bWF4IC8gdGhpcy5yZXMgKyAxKTsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaiA8IDAgfHwgaiA+PSB0aGlzLmxlbmd0aFkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgYXMucHVzaC5hcHBseShhcywgdGhpcy5jZWxsc1tpXVtqXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbkdyaWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmosIHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5jZWxsc1tNYXRoLmZsb29yKHggLyB0aGlzLnJlcyldW01hdGguZmxvb3IoeSAvIHRoaXMucmVzKV0ucHVzaChvYmopO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKi9cbkdyaWQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmosIHgsIHkpIHtcbiAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5jZWxsc1tNYXRoLmZsb29yKHggLyB0aGlzLnJlcyldW01hdGguZmxvb3IoeSAvIHRoaXMucmVzKV0sIG9iaik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==