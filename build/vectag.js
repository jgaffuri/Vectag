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

/***/ "./src/base/canvasplus.js":
/*!********************************!*\
  !*** ./src/base/canvasplus.js ***!
  \********************************/
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

/***/ "./src/base/lib.js":
/*!*************************!*\
  !*** ./src/base/lib.js ***!
  \*************************/
/*! exports provided: objToArray, removeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToArray", function() { return objToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
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


/***/ }),

/***/ "./src/gol/gol.js":
/*!************************!*\
  !*** ./src/gol/gol.js ***!
  \************************/
/*! exports provided: gameOfLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return gameOfLife; });
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");




//TODO zoom/pan, with canvas transform: better universe limits
//TODO test gc wit all + externs/export
//TODO automate deployment (use ant?) - steps are: (closure compiler + html +) git merge toward branch gh-pages + git push
//TODO buttons (play, stop, speed, draw, pan)
//TODO jshint
//TODO fix blue stuff in annotations
//TODO check canvas animation

/**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 */
const Universe = function (w, h) {
    /** @type {number} */
    this.w = w;
    /** @type {number} */
    this.h = h;
    /** @type {Array.<Cell>} */
    this.population = [];
    /** @type {Object.<string,Cell>}
     * @dict */
    this.populationI = {};

    /**
     * @param {number} x
     * @param {number} y
     * @return {Cell}
     */
    this.add = function (x, y) {
        //find agent at location
        /**@type {string}*/
        var id = x + "_" + y;
        /**@type {Cell} */
        var cell = this.populationI[id];
        if (cell) return null;
        //create new cell
        cell = { x: x, y: y, nb: 0 };
        this.population.push(cell);
        this.populationI[id] = cell;
        return cell;
    };

    /**
     * @param {number} density
     * @return {Universe}
     */
    this.fillRandomly = function (density) {
        var i = 0;
        /** @type {number} */
        var nb = this.w * this.h * density;
        while (i < nb) {
            var x = Math.round(this.w * Math.random());
            var y = Math.round(this.h * Math.random());
            /** @type {Cell} */
            var cell = this.add(x, y);
            if (cell) i++;
        }
        return this;
    };

    /**
     * @return {Universe}
     */
    this.step = function () {
        /** @type {number} */
        var i, j;
        /** @type {Cell} */
        var cell, cell_;
        /** @type {Cell} */
        var sur, sur_;
        /** @type {string} */
        var key;

        //populate cell surroundings
        /** @type {Object.<string, Cell>}
         * @dict */
        var surI = {};
        //go through list of cells
        for (i = 0; i < this.population.length; i++) {
            // +1 surrounding cells
            /** @type {Array.<Cell>} */
            var srs = getCellSurrounding(this.population[i], this);
            for (j = 0; j < srs.length; j++) {
                sur = srs[j];
                key = sur.x + "_" + sur.y;
                sur_ = surI[key];
                if (sur_) {
                    sur_.nb++;
                } else {
                    sur.nb = 1;
                    surI[key] = sur;
                }
            }
        }

        //B3/S23

        //kill cells
        /** @type {Array.<Cell>} */
        var cellsToKeep = [];
        /** @type {Object.<string, Cell>}
         * @dict */
        var cellsToKeepI = {};
        for (i = 0; i < this.population.length; i++) {
            cell = this.population[i];
            key = cell.x + "_" + cell.y;
            cell_ = surI[key];
            if (!cell_) continue;
            //if (nb<2 or nb>3) -> kill
            if (cell_.nb < 2 || cell_.nb > 3) continue;
            cellsToKeep.push(cell);
            cellsToKeepI[key] = cell;
        }
        this.population = cellsToKeep;
        this.populationI = cellsToKeepI;

        //create new cells
        /** @type {Array.<Cell>} */
        var surs = Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["objToArray"])(surI);
        surI = null;
        for (i = 0; i < surs.length; i++) {
            sur = surs[i];

            if (sur.nb !== 3) continue;

            //check if already alive
            key = sur.x + "_" + sur.y;
            cell = this.populationI[key];
            if (cell) continue;

            //create new cell
            this.population.push(sur);
            this.populationI[key] = sur;
        }
        return this;
    };

    /**
     * @param {number} nb
     * @param {number} timeoutMS
     * @param {CanvasPlus} cplus
     * @return {Universe}
     */
    this.start = function (nb, timeoutMS, cplus) {
        var i = 0;
        var uni = this;
        var engine = function () {
            //console.log(i);
            uni.step();
            cplus.redraw();
            if (nb > 0 && i++ > nb) return;
            setTimeout(engine, timeoutMS);
        };
        engine();
        return this;
    };
};

/** @typedef {{x:number,y:number,nb:?number}} Cell */

/**
 * @param {Cell} cell
 * @param {Universe} uni
 * @return {Array.<Cell>}
 */
var getCellSurrounding = function (cell, uni) {
    var x1 = cell.x === 0 ? uni.w - 1 : cell.x - 1;
    var x2 = cell.x === uni.w - 1 ? 0 : cell.x + 1;
    var y1 = cell.y === 0 ? uni.h - 1 : cell.y - 1;
    var y2 = cell.y === uni.h - 1 ? 0 : cell.y + 1;
    return [
        { x: x1, y: y1 },
        { x: x1, y: cell.y },
        { x: x1, y: y2 },
        { x: cell.x, y: y1 },
        { x: cell.x, y: y2 },
        { x: x2, y: y1 },
        { x: x2, y: cell.y },
        { x: x2, y: y2 }
    ];
};




//entry point
const gameOfLife = function(divId, canvasId) {

var cdiv = document.getElementById(divId);
/** @type {number} */
var w = cdiv.offsetWidth;
/** @type {number} */
var h = cdiv.offsetHeight;

var uni = new Universe(w, h).fillRandomly(0.05);
//var uni = new Universe(500, 300).fillRandomly(0.05);

var cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](canvasId, w, h);
cplus.redraw = function () {
    var ctx = this.getContext2D();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#0000FF";
    for (var i = 0; i < uni.population.length; i++) {
        /** @type {Cell} */
        var cell = uni.population[i];
        //ctx.beginPath();
        //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
        //ctx.fill();
        ctx.fillRect(cell.x, cell.y, 1, 1);
    }
};

//start
uni.start(-1, 0, cplus);

}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: planets, gameOfLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _planets_planets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets/planets */ "./src/planets/planets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return _planets_planets__WEBPACK_IMPORTED_MODULE_0__["planets"]; });

/* harmony import */ var _gol_gol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gol/gol */ "./src/gol/gol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return _gol_gol__WEBPACK_IMPORTED_MODULE_1__["gameOfLife"]; });





/***/ }),

/***/ "./src/planets/Planet.js":
/*!*******************************!*\
  !*** ./src/planets/Planet.js ***!
  \*******************************/
/*! exports provided: Planet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planet", function() { return Planet; });
class Planet {

    /**
     * @constructor
     * @struct
     * @param {Universe} u The universe the planet belongs to.
     * @param {number} m The mass
     * @param {number} x The x position
     * @param {number} y The y position
     * @param {number} vx The speed x
     * @param {number} vy The speed y
     */
    constructor(u, m, x, y, vx, vy) {
        /** @type {Universe} */
        this.u = u;
        /** @type {number} */
        this.m = m;

        //compute radius
        /** @type {number} */
        const r = this.r();

        //set position
        /** @type {number} */
        this.x = x < r ? r : x > u.w - r ? u.w - r : x;
        /** @type {number} */
        this.y = y < r ? r : y > u.h - r ? u.h - r : y;

        //set speed
        /** @type {number} */
        this.vx = vx;
        /** @type {number} */
        this.vy = vy;

    }

    /**
     * Update the force, based on the gravity of other planets.
     */
    observe() {

        /** @type {number} */
        this.fx = 0;
        /** @type {number} */
        this.fy = 0;

        //check all other planets in the universe
        for (let i = 0; i < this.u.ps.length; i++) {
            /** @type {Planet} */
            const p = this.u.ps[i];
            if (this == p)
                continue;

            //compute and add gravity force
            /** @type {number} */
            let d = this.d(p);
            if (d === 0)
                continue;

            d = d * d * d;
            this.fx += 0.01 * (p.x - this.x) * this.m * p.m / d;
            this.fy += 0.01 * (p.y - this.y) * this.m * p.m / d;
        }
    }

    /**
     * @param {Planet} p
     * @return {number} The distance to the planet p.
     */
    d(p) {
        /** @type {number} */
        var dx = p.x - this.x;
        /** @type {number} */
        var dy = p.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @return {number} The radius of the planet, depending on its mass.
     */
    r() {
        return Math.sqrt(this.m / Math.PI);
    }

    /**
     */
    change() {

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
    }
}


/***/ }),

/***/ "./src/planets/Universe.js":
/*!*********************************!*\
  !*** ./src/planets/Universe.js ***!
  \*********************************/
/*! exports provided: Universe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Universe", function() { return Universe; });
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");
/* harmony import */ var _Planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Planet */ "./src/planets/Planet.js");



class Universe {

    /**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 * @param {number} timeStepMs
 */
    constructor(w, h, timeStepMs) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {number} */
        this.timeStepMs = timeStepMs;

        /** @type {Array.<Planet>} */
        this.ps = [];
    }


    /**
     * @param {number} nb
     * @param {number} mi
     * @param {number} minSpeed
     * @param {number} maxSpeed
     * @return {Universe}
     */
    fillRandomly(nb, mi, minSpeed, maxSpeed) {
        /** @type {Array.<Planet>} */
        this.ps = [];
        for (var i = 0; i < nb; i++) {
            var speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            var angle = 2 * Math.random() * Math.PI;
            this.ps.push(new _Planet__WEBPACK_IMPORTED_MODULE_1__["Planet"](this, mi, this.w * Math.random(), this.h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle)));
        }
        return this;
    }

    /**
     */
    step() {
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
            Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, agg[0]);
            Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, agg[1]);
            agg = this.findCollision();
        }
    }

    /**
     * @return {Array.<Planet>}
     */
    findCollision() {
        //TODO use spatial index to boost collision detection
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
                if (d1 > d2)
                    continue;
                return [pi, pj];
            }
        }
        return null;
    }

    /**
     * Aggregate planets, after collision.
     *
     * @param {Array.<Planet>} agg
     */
    aggregate(agg) {
        /** @type {Planet} */
        var p1 = agg[0];
        /** @type {Planet} */
        var p2 = agg[1];
        /** @type {number} */
        var m = p1.m + p2.m;
        return new _Planet__WEBPACK_IMPORTED_MODULE_1__["Planet"](this,
            m,
            (p1.x * p1.m + p2.x * p2.m) / m,
            (p1.y * p1.m + p2.y * p2.m) / m,
            (p1.vx * p1.m + p2.vx * p2.m) / m,
            (p1.vy * p1.m + p2.vy * p2.m) / m
        );
    }
}


/***/ }),

/***/ "./src/planets/planets.js":
/*!********************************!*\
  !*** ./src/planets/planets.js ***!
  \********************************/
/*! exports provided: planets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return planets; });
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");
/* harmony import */ var _Universe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Universe */ "./src/planets/Universe.js");




//entry point
const planets = function (divId, canvasId, nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1, nbIterations = -1) {

    const cdiv = document.getElementById(divId);
    /** @type {number} */
    const w = cdiv.offsetWidth;
    /** @type {number} */
    const h = cdiv.offsetHeight;

    /** @type {Universe} */
    const uni = new _Universe__WEBPACK_IMPORTED_MODULE_1__["Universe"](w, h, 10).fillRandomly(nb, mi, minSpeed, maxSpeed);

    /** @type {CanvasPlus} */
    const cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_0__["CanvasPlus"](canvasId, w, h);
    const ctx = cplus.getContext2D();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    cplus.redraw = function () {
        //ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, w, h);

        //display planets
        for (let j = 0; j < uni.ps.length; j++) {
            /** @type {Planet} */
            var p = uni.ps[j];
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
    let i = 0;
    const engine = function () {
        uni.step();
        cplus.redraw();
        if (nbIterations > 0 && i++ > nbIterations)
            return;
        setTimeout(engine, 0);
    };
    engine();

    return this;

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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2xpYi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2dvbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvUGxhbmV0LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL1VuaXZlcnNlLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL3BsYW5ldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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QUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNWOzs7QUFHdEM7QUFDTzs7QUFFUDtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGVBQWUsT0FBTztBQUN0Qjs7QUFFQSxlQUFlLFNBQVM7QUFDeEIsb0JBQW9CLGtEQUFROztBQUU1QixlQUFlLFdBQVc7QUFDMUIsc0JBQXNCLDJEQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUMsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGlDQUFpQyIsImZpbGUiOiJ2ZWN0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vY2hlY2s6XG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9rYW5nYXgvZmFicmljLmpzL1xuLy9odHRwOi8va2luZXRpY2pzLmNvbS9cbi8vaHR0cDovL3d3dy5jcmVhdGVqcy5jb20vRG9jcy9FYXNlbEpTL2NsYXNzZXMvTW91c2VFdmVudC5odG1sXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gZGl2XG4gKiBAcGFyYW0ge251bWJlcj19IHdcbiAqIEBwYXJhbSB7bnVtYmVyPX0gaFxuICovXG5leHBvcnQgY29uc3QgQ2FudmFzUGx1cyA9IGZ1bmN0aW9uIChkaXYsIHcsIGgpIHtcblxuICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgdmFyIGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdik7XG5cbiAgICAvKipAdHlwZSB7T2JqZWN0fSAqL1xuICAgIHZhciBjdHggPSBjdnMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICh3KSBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBpZiAoaCkgY3R4LmNhbnZhcy5oZWlnaHQgPSBoO1xuICAgIC8qKkByZXR1cm4ge09iamVjdH0gKi9cbiAgICB0aGlzLmdldENvbnRleHQyRCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN0eDsgfTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0NhblBsLkNhbnZhc1BsdXN9XG4gICAgICovXG4gICAgdGhpcy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcnJpZGUgcmVkcmF3IG1ldGhvZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKi9cbiAgICB2YXIgcGFuID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgLy9UT0RPIGNsZWFyXG4gICAgICAgIC8vVE9ETyBjdHgudHJhbnNsYXRlKDEwLDEwKTtcbiAgICAgICAgLy9UT0RPIHVwZGF0ZWxpbWl0c1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZcbiAgICAgKi9cbiAgICB2YXIgem9vbSA9IGZ1bmN0aW9uICh4LCB5LCBmKSB7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2N0eC5zY2FsZSgyLDIpO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG4gICAgLypcbiAgICAgICAgICAgICQoXCIjXCIrZGl2KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FudmFzQ2xpY2tQb3NpdGlvbihjdnMsIGUpKTtcbiAgICAgICAgICAgICAgICAvL1RPRE8gcGFuXG4gICAgICAgICAgICB9KTtcbiAgICAqL1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbHRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZVxuICAgICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBudW1iZXI+fVxuICAgICAqL1xuICAgIHZhciBjYW52YXNDbGlja1Bvc2l0aW9uID0gZnVuY3Rpb24gKGVsdCwgZSkge1xuICAgICAgICBpZiAoZS5vZmZzZXRYICYmIGUub2Zmc2V0WSlcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH07XG4gICAgICAgIHZhciB0WCA9IDAsIHRZID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdFggKz0gZWx0Lm9mZnNldExlZnQgLSBlbHQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIHRZICs9IGVsdC5vZmZzZXRUb3AgLSBlbHQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgZWx0ID0gZWx0Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfSB3aGlsZSAoZWx0KTtcbiAgICAgICAgcmV0dXJuIHsgeDogZS5wYWdlWCAtIHRYLCB5OiBlLnBhZ2VZIC0gdFkgfTtcbiAgICB9O1xuXG59O1xuIiwiLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9ialRvQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIG91dC5wdXNoKG9ialtrZXldKTtcbiAgICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtUfSBvYmpcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaikge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG4iLCJpbXBvcnQgeyBvYmpUb0FycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5cblxuLy9UT0RPIHpvb20vcGFuLCB3aXRoIGNhbnZhcyB0cmFuc2Zvcm06IGJldHRlciB1bml2ZXJzZSBsaW1pdHNcbi8vVE9ETyB0ZXN0IGdjIHdpdCBhbGwgKyBleHRlcm5zL2V4cG9ydFxuLy9UT0RPIGF1dG9tYXRlIGRlcGxveW1lbnQgKHVzZSBhbnQ/KSAtIHN0ZXBzIGFyZTogKGNsb3N1cmUgY29tcGlsZXIgKyBodG1sICspIGdpdCBtZXJnZSB0b3dhcmQgYnJhbmNoIGdoLXBhZ2VzICsgZ2l0IHB1c2hcbi8vVE9ETyBidXR0b25zIChwbGF5LCBzdG9wLCBzcGVlZCwgZHJhdywgcGFuKVxuLy9UT0RPIGpzaGludFxuLy9UT0RPIGZpeCBibHVlIHN0dWZmIGluIGFubm90YXRpb25zXG4vL1RPRE8gY2hlY2sgY2FudmFzIGFuaW1hdGlvblxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHN0cnVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKi9cbmNvbnN0IFVuaXZlcnNlID0gZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB0aGlzLncgPSB3O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaCA9IGg7XG4gICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgdGhpcy5wb3B1bGF0aW9uID0gW107XG4gICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxDZWxsPn1cbiAgICAgKiBAZGljdCAqL1xuICAgIHRoaXMucG9wdWxhdGlvbkkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJuIHtDZWxsfVxuICAgICAqL1xuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgLy9maW5kIGFnZW50IGF0IGxvY2F0aW9uXG4gICAgICAgIC8qKkB0eXBlIHtzdHJpbmd9Ki9cbiAgICAgICAgdmFyIGlkID0geCArIFwiX1wiICsgeTtcbiAgICAgICAgLyoqQHR5cGUge0NlbGx9ICovXG4gICAgICAgIHZhciBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtpZF07XG4gICAgICAgIGlmIChjZWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxcbiAgICAgICAgY2VsbCA9IHsgeDogeCwgeTogeSwgbmI6IDAgfTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goY2VsbCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbklbaWRdID0gY2VsbDtcbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5zaXR5XG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgdGhpcy5maWxsUmFuZG9tbHkgPSBmdW5jdGlvbiAoZGVuc2l0eSkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgbmIgPSB0aGlzLncgKiB0aGlzLmggKiBkZW5zaXR5O1xuICAgICAgICB3aGlsZSAoaSA8IG5iKSB7XG4gICAgICAgICAgICB2YXIgeCA9IE1hdGgucm91bmQodGhpcy53ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICB2YXIgeSA9IE1hdGgucm91bmQodGhpcy5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICB2YXIgY2VsbCA9IHRoaXMuYWRkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgdGhpcy5zdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdmFyIGksIGo7XG4gICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgdmFyIGNlbGwsIGNlbGxfO1xuICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgIHZhciBzdXIsIHN1cl87XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIC8vcG9wdWxhdGUgY2VsbCBzdXJyb3VuZGluZ3NcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIHZhciBzdXJJID0ge307XG4gICAgICAgIC8vZ28gdGhyb3VnaCBsaXN0IG9mIGNlbGxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICsxIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgICAgIHZhciBzcnMgPSBnZXRDZWxsU3Vycm91bmRpbmcodGhpcy5wb3B1bGF0aW9uW2ldLCB0aGlzKTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdXIgPSBzcnNbal07XG4gICAgICAgICAgICAgICAga2V5ID0gc3VyLnggKyBcIl9cIiArIHN1ci55O1xuICAgICAgICAgICAgICAgIHN1cl8gPSBzdXJJW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHN1cl8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyXy5uYisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1ci5uYiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHN1cklba2V5XSA9IHN1cjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0IzL1MyM1xuXG4gICAgICAgIC8va2lsbCBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdmFyIGNlbGxzVG9LZWVwID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICB2YXIgY2VsbHNUb0tlZXBJID0ge307XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGwgPSB0aGlzLnBvcHVsYXRpb25baV07XG4gICAgICAgICAgICBrZXkgPSBjZWxsLnggKyBcIl9cIiArIGNlbGwueTtcbiAgICAgICAgICAgIGNlbGxfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgaWYgKCFjZWxsXykgY29udGludWU7XG4gICAgICAgICAgICAvL2lmIChuYjwyIG9yIG5iPjMpIC0+IGtpbGxcbiAgICAgICAgICAgIGlmIChjZWxsXy5uYiA8IDIgfHwgY2VsbF8ubmIgPiAzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwLnB1c2goY2VsbCk7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcElba2V5XSA9IGNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gY2VsbHNUb0tlZXA7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSBjZWxsc1RvS2VlcEk7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICB2YXIgc3VycyA9IG9ialRvQXJyYXkoc3VySSk7XG4gICAgICAgIHN1ckkgPSBudWxsO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VyID0gc3Vyc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN1ci5uYiAhPT0gMykgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgYWxyZWFkeSBhbGl2ZVxuICAgICAgICAgICAga2V5ID0gc3VyLnggKyBcIl9cIiArIHN1ci55O1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMucG9wdWxhdGlvbklba2V5XTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKHN1cik7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JW2tleV0gPSBzdXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TVNcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwbHVzXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uIChuYiwgdGltZW91dE1TLCBjcGx1cykge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciB1bmkgPSB0aGlzO1xuICAgICAgICB2YXIgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgICAgICBjcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYiA+IDAgJiYgaSsrID4gbmIpIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCB0aW1lb3V0TVMpO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn07XG5cbi8qKiBAdHlwZWRlZiB7e3g6bnVtYmVyLHk6bnVtYmVyLG5iOj9udW1iZXJ9fSBDZWxsICovXG5cbi8qKlxuICogQHBhcmFtIHtDZWxsfSBjZWxsXG4gKiBAcGFyYW0ge1VuaXZlcnNlfSB1bmlcbiAqIEByZXR1cm4ge0FycmF5LjxDZWxsPn1cbiAqL1xudmFyIGdldENlbGxTdXJyb3VuZGluZyA9IGZ1bmN0aW9uIChjZWxsLCB1bmkpIHtcbiAgICB2YXIgeDEgPSBjZWxsLnggPT09IDAgPyB1bmkudyAtIDEgOiBjZWxsLnggLSAxO1xuICAgIHZhciB4MiA9IGNlbGwueCA9PT0gdW5pLncgLSAxID8gMCA6IGNlbGwueCArIDE7XG4gICAgdmFyIHkxID0gY2VsbC55ID09PSAwID8gdW5pLmggLSAxIDogY2VsbC55IC0gMTtcbiAgICB2YXIgeTIgPSBjZWxsLnkgPT09IHVuaS5oIC0gMSA/IDAgOiBjZWxsLnkgKyAxO1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgeDogeDEsIHk6IHkxIH0sXG4gICAgICAgIHsgeDogeDEsIHk6IGNlbGwueSB9LFxuICAgICAgICB7IHg6IHgxLCB5OiB5MiB9LFxuICAgICAgICB7IHg6IGNlbGwueCwgeTogeTEgfSxcbiAgICAgICAgeyB4OiBjZWxsLngsIHk6IHkyIH0sXG4gICAgICAgIHsgeDogeDIsIHk6IHkxIH0sXG4gICAgICAgIHsgeDogeDIsIHk6IGNlbGwueSB9LFxuICAgICAgICB7IHg6IHgyLCB5OiB5MiB9XG4gICAgXTtcbn07XG5cblxuXG5cbi8vZW50cnkgcG9pbnRcbmV4cG9ydCBjb25zdCBnYW1lT2ZMaWZlID0gZnVuY3Rpb24oZGl2SWQsIGNhbnZhc0lkKSB7XG5cbnZhciBjZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG52YXIgdyA9IGNkaXYub2Zmc2V0V2lkdGg7XG4vKiogQHR5cGUge251bWJlcn0gKi9cbnZhciBoID0gY2Rpdi5vZmZzZXRIZWlnaHQ7XG5cbnZhciB1bmkgPSBuZXcgVW5pdmVyc2UodywgaCkuZmlsbFJhbmRvbWx5KDAuMDUpO1xuLy92YXIgdW5pID0gbmV3IFVuaXZlcnNlKDUwMCwgMzAwKS5maWxsUmFuZG9tbHkoMC4wNSk7XG5cbnZhciBjcGx1cyA9IG5ldyBDYW52YXNQbHVzKGNhbnZhc0lkLCB3LCBoKTtcbmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3R4ID0gdGhpcy5nZXRDb250ZXh0MkQoKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMEZGXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmkucG9wdWxhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgIHZhciBjZWxsID0gdW5pLnBvcHVsYXRpb25baV07XG4gICAgICAgIC8vY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvL2N0eC5hcmMoY2VsbC54LGNlbGwueSwxLDAsMipNYXRoLlBJKTtcbiAgICAgICAgLy9jdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFJlY3QoY2VsbC54LCBjZWxsLnksIDEsIDEpO1xuICAgIH1cbn07XG5cbi8vc3RhcnRcbnVuaS5zdGFydCgtMSwgMCwgY3BsdXMpO1xuXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9wbGFuZXRzL3BsYW5ldHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ29sL2dvbFwiXG4iLCJleHBvcnQgY2xhc3MgUGxhbmV0IHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1IFRoZSB1bml2ZXJzZSB0aGUgcGxhbmV0IGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIG1hc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ4IFRoZSBzcGVlZCB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFRoZSBzcGVlZCB5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm0gPSBtO1xuXG4gICAgICAgIC8vY29tcHV0ZSByYWRpdXNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcblxuICAgICAgICAvL3NldCBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IHIgPyByIDogeCA+IHUudyAtIHIgPyB1LncgLSByIDogeDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCByID8gciA6IHkgPiB1LmggLSByID8gdS5oIC0gciA6IHk7XG5cbiAgICAgICAgLy9zZXQgc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSB2eTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZm9yY2UsIGJhc2VkIG9uIHRoZSBncmF2aXR5IG9mIG90aGVyIHBsYW5ldHMuXG4gICAgICovXG4gICAgb2JzZXJ2ZSgpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ5ID0gMDtcblxuICAgICAgICAvL2NoZWNrIGFsbCBvdGhlciBwbGFuZXRzIGluIHRoZSB1bml2ZXJzZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudS5wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy51LnBzW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMgPT0gcClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jb21wdXRlIGFuZCBhZGQgZ3Jhdml0eSBmb3JjZVxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMuZChwKTtcbiAgICAgICAgICAgIGlmIChkID09PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBkID0gZCAqIGQgKiBkO1xuICAgICAgICAgICAgdGhpcy5meCArPSAwLjAxICogKHAueCAtIHRoaXMueCkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICAgICAgdGhpcy5meSArPSAwLjAxICogKHAueSAtIHRoaXMueSkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0byB0aGUgcGxhbmV0IHAuXG4gICAgICovXG4gICAgZChwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgZHggPSBwLnggLSB0aGlzLng7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgcGxhbmV0LCBkZXBlbmRpbmcgb24gaXRzIG1hc3MuXG4gICAgICovXG4gICAgcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLm0gLyBNYXRoLlBJKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBjaGFuZ2UoKSB7XG5cbiAgICAgICAgLy9jb21wdXRlIGFjY2VsZXJhdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdmFyIGF4ID0gdGhpcy5meCAvIHRoaXMubTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IGF4ICogdGhpcy51LnRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMudnkgKz0gYXkgKiB0aGlzLnUudGltZVN0ZXBNcztcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHBvc2l0aW9uXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogdGhpcy51LnRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGhpcy51LnRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9saW1pdFxuICAgICAgICAvKmRvdWJsZSByPXIoKTtcbiAgICAgICAgIGlmKHg8cikgeyB4PXI7IHZ4PS12eCplOyB9XG4gICAgICAgICBpZih5PHIpIHsgeT1yOyB2eT0tdnkqZTsgfVxuICAgICAgICAgaWYoeD51LnctcikgeyB4PXUudy1yOyB2eD0tdngqZTsgfVxuICAgICAgICAgaWYoeT51LmgtcikgeyB5PXUuaC1yOyB2eT0tdnkqZTsgfSovXG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB7IHRoaXMueCA9IHRoaXMudS53OyB9XG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB7IHRoaXMueSA9IHRoaXMudS5oOyB9XG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLnUudykgeyB0aGlzLnggPSAwOyB9XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnUuaCkgeyB0aGlzLnkgPSAwOyB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzdHJ1Y3RcbiAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gKiBAcGFyYW0ge251bWJlcn0gaFxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXNcbiAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIHRpbWVTdGVwTXMpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnRpbWVTdGVwTXMgPSB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMucHMgPSBbXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIGZpbGxSYW5kb21seShuYiwgbWksIG1pblNwZWVkLCBtYXhTcGVlZCkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy5wcy5wdXNoKG5ldyBQbGFuZXQodGhpcywgbWksIHRoaXMudyAqIE1hdGgucmFuZG9tKCksIHRoaXMuaCAqIE1hdGgucmFuZG9tKCksIHNwZWVkICogTWF0aC5jb3MoYW5nbGUpLCBzcGVlZCAqIE1hdGguc2luKGFuZ2xlKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIHN0ZXAoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICAvL29ic2VydmF0aW9uXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5wc1tpXS5vYnNlcnZlKCk7XG5cbiAgICAgICAgLy9hY3Rpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLnBzW2ldLmNoYW5nZSgpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvbnNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdmFyIGFnZyA9IHRoaXMuZmluZENvbGxpc2lvbigpO1xuICAgICAgICB3aGlsZSAoYWdnICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBzLnB1c2godGhpcy5hZ2dyZWdhdGUoYWdnKSk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5wcywgYWdnWzBdKTtcbiAgICAgICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBhZ2dbMV0pO1xuICAgICAgICAgICAgYWdnID0gdGhpcy5maW5kQ29sbGlzaW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48UGxhbmV0Pn1cbiAgICAgKi9cbiAgICBmaW5kQ29sbGlzaW9uKCkge1xuICAgICAgICAvL1RPRE8gdXNlIHNwYXRpYWwgaW5kZXggdG8gYm9vc3QgY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICAgICAgdmFyIHBpID0gdGhpcy5wc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IHRoaXMucHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgICAgICAgICB2YXIgcGogPSB0aGlzLnBzW2pdO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIHZhciBkMSA9IHBpLmQocGopO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIHZhciBkMiA9IHBpLnIoKSArIHBqLnIoKTtcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwaSwgcGpdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFnZ3JlZ2F0ZSBwbGFuZXRzLCBhZnRlciBjb2xsaXNpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxQbGFuZXQ+fSBhZ2dcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUoYWdnKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICB2YXIgcDEgPSBhZ2dbMF07XG4gICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICB2YXIgcDIgPSBhZ2dbMV07XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgbSA9IHAxLm0gKyBwMi5tO1xuICAgICAgICByZXR1cm4gbmV3IFBsYW5ldCh0aGlzLFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ5ICogcDEubSArIHAyLnZ5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuXG5cbi8vZW50cnkgcG9pbnRcbmV4cG9ydCBjb25zdCBwbGFuZXRzID0gZnVuY3Rpb24gKGRpdklkLCBjYW52YXNJZCwgbmIgPSAxMDAwLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSwgbmJJdGVyYXRpb25zID0gLTEpIHtcblxuICAgIGNvbnN0IGNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgY29uc3QgdyA9IGNkaXYub2Zmc2V0V2lkdGg7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgY29uc3QgaCA9IGNkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICBjb25zdCB1bmkgPSBuZXcgVW5pdmVyc2UodywgaCwgMTApLmZpbGxSYW5kb21seShuYiwgbWksIG1pblNwZWVkLCBtYXhTcGVlZCk7XG5cbiAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgY29uc3QgY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhjYW52YXNJZCwgdywgaCk7XG4gICAgY29uc3QgY3R4ID0gY3BsdXMuZ2V0Q29udGV4dDJEKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIGNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMDUpXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgICAgICAvL2Rpc3BsYXkgcGxhbmV0c1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVuaS5wcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICB2YXIgcCA9IHVuaS5wc1tqXTtcbiAgICAgICAgICAgIHZhciB0ID0gcC5tIC8gKG5iICogbWkpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSwyNTUsXCIgKyBNYXRoLmZsb29yKDI1NSAqICgxIC0gdCkpICsgXCIpXCI7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHAueCwgcC55LCBwLnIoKSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGFiZWxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCwyMDAsMjAwKVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgNjUsIDEzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodW5pLnBzLmxlbmd0aCArIFwiIHBsYW5ldHNcIiwgMiwgMTApO1xuICAgIH07XG5cblxuXG4gICAgLy9zdGFydFxuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICB9O1xuICAgIGVuZ2luZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbn1cblxuXG4gICAgICAgICAvL1RPRE8gYWRkIHJlc3RhcnQvYmlnIGJhbmcgYnV0dG9uXG4vKiBCdXR0b24gcmVzdGFydCA9IG5ldyBCdXR0b24oXCJSZWNvbW1lbmNlciFcIik7XG4gcmVzdGFydC5hZGRDbGlja0hhbmRsZXIobmV3IENsaWNrSGFuZGxlcigpIHtcbiBAT3ZlcnJpZGVcbiBwdWJsaWMgdm9pZCBvbkNsaWNrKENsaWNrRXZlbnQgZXZlbnQpIHtcbiB1LmZpbGwoKTtcbiBjLmdldENvbnRleHQyZCgpLnNldEZpbGxTdHlsZShDc3NDb2xvci5tYWtlKDAsMCwwKSk7XG4gYy5nZXRDb250ZXh0MmQoKS5maWxsUmVjdCgwLCAwLCB3LCBoKTtcbiB9XG4gfSk7XG4gUm9vdFBhbmVsLmdldChcImJcIikuYWRkKHJlc3RhcnQpOyovXG4iXSwic291cmNlUm9vdCI6IiJ9