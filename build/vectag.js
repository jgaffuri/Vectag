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

    var cdiv = document.getElementById(divId);
    /** @type {number} */
    var w = cdiv.offsetWidth;
    /** @type {number} */
    var h = cdiv.offsetHeight;

    /** @type {Universe} */
    var uni = new _Universe__WEBPACK_IMPORTED_MODULE_1__["Universe"](w, h, 10).fillRandomly(nb, mi, minSpeed, maxSpeed);

    /** @type {CanvasPlus} */
    var cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_0__["CanvasPlus"](canvasId, w, h);
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
    let i = 0;
    var engine = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2xpYi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2dvbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvUGxhbmV0LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL1VuaXZlcnNlLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL3BsYW5ldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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QUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNWOzs7QUFHdEM7QUFDTzs7QUFFUDtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGVBQWUsT0FBTztBQUN0Qjs7QUFFQSxlQUFlLFNBQVM7QUFDeEIsa0JBQWtCLGtEQUFROztBQUUxQixlQUFlLFdBQVc7QUFDMUIsb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUMsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsaUNBQWlDIiwiZmlsZSI6InZlY3RhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9jaGVjazpcbi8vaHR0cHM6Ly9naXRodWIuY29tL2thbmdheC9mYWJyaWMuanMvXG4vL2h0dHA6Ly9raW5ldGljanMuY29tL1xuLy9odHRwOi8vd3d3LmNyZWF0ZWpzLmNvbS9Eb2NzL0Vhc2VsSlMvY2xhc3Nlcy9Nb3VzZUV2ZW50Lmh0bWxcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzdHJ1Y3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXZcbiAqIEBwYXJhbSB7bnVtYmVyPX0gd1xuICogQHBhcmFtIHtudW1iZXI9fSBoXG4gKi9cbmV4cG9ydCBjb25zdCBDYW52YXNQbHVzID0gZnVuY3Rpb24gKGRpdiwgdywgaCkge1xuXG4gICAgLyoqQHR5cGUge09iamVjdH0gKi9cbiAgICB2YXIgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2KTtcblxuICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgdmFyIGN0eCA9IGN2cy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKHcpIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGlmIChoKSBjdHguY2FudmFzLmhlaWdodCA9IGg7XG4gICAgLyoqQHJldHVybiB7T2JqZWN0fSAqL1xuICAgIHRoaXMuZ2V0Q29udGV4dDJEID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY3R4OyB9O1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Q2FuUGwuQ2FudmFzUGx1c31cbiAgICAgKi9cbiAgICB0aGlzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPdmVycmlkZSByZWRyYXcgbWV0aG9kXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqL1xuICAgIHZhciBwYW4gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAvL1RPRE8gY2xlYXJcbiAgICAgICAgLy9UT0RPIGN0eC50cmFuc2xhdGUoMTAsMTApO1xuICAgICAgICAvL1RPRE8gdXBkYXRlbGltaXRzXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZlxuICAgICAqL1xuICAgIHZhciB6b29tID0gZnVuY3Rpb24gKHgsIHksIGYpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgICAgIC8vY3R4LnNjYWxlKDIsMik7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcbiAgICAvKlxuICAgICAgICAgICAgJChcIiNcIitkaXYpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYW52YXNDbGlja1Bvc2l0aW9uKGN2cywgZSkpO1xuICAgICAgICAgICAgICAgIC8vVE9ETyBwYW5cbiAgICAgICAgICAgIH0pO1xuICAgICovXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVsdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlXG4gICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIG51bWJlcj59XG4gICAgICovXG4gICAgdmFyIGNhbnZhc0NsaWNrUG9zaXRpb24gPSBmdW5jdGlvbiAoZWx0LCBlKSB7XG4gICAgICAgIGlmIChlLm9mZnNldFggJiYgZS5vZmZzZXRZKVxuICAgICAgICAgICAgcmV0dXJuIHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfTtcbiAgICAgICAgdmFyIHRYID0gMCwgdFkgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0WCArPSBlbHQub2Zmc2V0TGVmdCAtIGVsdC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgdFkgKz0gZWx0Lm9mZnNldFRvcCAtIGVsdC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBlbHQgPSBlbHQub2Zmc2V0UGFyZW50O1xuICAgICAgICB9IHdoaWxlIChlbHQpO1xuICAgICAgICByZXR1cm4geyB4OiBlLnBhZ2VYIC0gdFgsIHk6IGUucGFnZVkgLSB0WSB9O1xuICAgIH07XG5cbn07XG4iLCIvKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge09iamVjdC48PywgVD59IG9ialxuICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICovXG5leHBvcnQgY29uc3Qgb2JqVG9BcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5LjxUPn0gYXJyXG4gKiBAcGFyYW0ge1R9IG9ialxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgb2JqKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcbiAgICBpZiAoaW5kZXggPiAtMSlcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gcmVtb3ZlIGVsZW1lbnQgbm90IHByZXNlbnQgaW4gYXJyYXkuXCIpO1xufTtcbiIsImltcG9ydCB7IG9ialRvQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcblxuXG4vL1RPRE8gem9vbS9wYW4sIHdpdGggY2FudmFzIHRyYW5zZm9ybTogYmV0dGVyIHVuaXZlcnNlIGxpbWl0c1xuLy9UT0RPIHRlc3QgZ2Mgd2l0IGFsbCArIGV4dGVybnMvZXhwb3J0XG4vL1RPRE8gYXV0b21hdGUgZGVwbG95bWVudCAodXNlIGFudD8pIC0gc3RlcHMgYXJlOiAoY2xvc3VyZSBjb21waWxlciArIGh0bWwgKykgZ2l0IG1lcmdlIHRvd2FyZCBicmFuY2ggZ2gtcGFnZXMgKyBnaXQgcHVzaFxuLy9UT0RPIGJ1dHRvbnMgKHBsYXksIHN0b3AsIHNwZWVkLCBkcmF3LCBwYW4pXG4vL1RPRE8ganNoaW50XG4vL1RPRE8gZml4IGJsdWUgc3R1ZmYgaW4gYW5ub3RhdGlvbnNcbi8vVE9ETyBjaGVjayBjYW52YXMgYW5pbWF0aW9uXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge251bWJlcn0gd1xuICogQHBhcmFtIHtudW1iZXJ9IGhcbiAqL1xuY29uc3QgVW5pdmVyc2UgPSBmdW5jdGlvbiAodywgaCkge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMudyA9IHc7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5oID0gaDtcbiAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICB0aGlzLnBvcHVsYXRpb24gPSBbXTtcbiAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLENlbGw+fVxuICAgICAqIEBkaWN0ICovXG4gICAgdGhpcy5wb3B1bGF0aW9uSSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge0NlbGx9XG4gICAgICovXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAvL2ZpbmQgYWdlbnQgYXQgbG9jYXRpb25cbiAgICAgICAgLyoqQHR5cGUge3N0cmluZ30qL1xuICAgICAgICB2YXIgaWQgPSB4ICsgXCJfXCIgKyB5O1xuICAgICAgICAvKipAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgdmFyIGNlbGwgPSB0aGlzLnBvcHVsYXRpb25JW2lkXTtcbiAgICAgICAgaWYgKGNlbGwpIHJldHVybiBudWxsO1xuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICBjZWxsID0geyB4OiB4LCB5OiB5LCBuYjogMCB9O1xuICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChjZWxsKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtpZF0gPSBjZWxsO1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbnNpdHlcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbGxSYW5kb21seSA9IGZ1bmN0aW9uIChkZW5zaXR5KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBuYiA9IHRoaXMudyAqIHRoaXMuaCAqIGRlbnNpdHk7XG4gICAgICAgIHdoaWxlIChpIDwgbmIpIHtcbiAgICAgICAgICAgIHZhciB4ID0gTWF0aC5yb3VuZCh0aGlzLncgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIHZhciB5ID0gTWF0aC5yb3VuZCh0aGlzLmggKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgICAgIHZhciBjZWxsID0gdGhpcy5hZGQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoY2VsbCkgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICB2YXIgY2VsbCwgY2VsbF87XG4gICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgdmFyIHN1ciwgc3VyXztcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgLy9wb3B1bGF0ZSBjZWxsIHN1cnJvdW5kaW5nc1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgdmFyIHN1ckkgPSB7fTtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGxpc3Qgb2YgY2VsbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9wdWxhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gKzEgc3Vycm91bmRpbmcgY2VsbHNcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICAgICAgdmFyIHNycyA9IGdldENlbGxTdXJyb3VuZGluZyh0aGlzLnBvcHVsYXRpb25baV0sIHRoaXMpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHNycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHN1ciA9IHNyc1tqXTtcbiAgICAgICAgICAgICAgICBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICAgICAgc3VyXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3VyXykge1xuICAgICAgICAgICAgICAgICAgICBzdXJfLm5iKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyLm5iID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3VySVtrZXldID0gc3VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQjMvUzIzXG5cbiAgICAgICAgLy9raWxsIGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICB2YXIgY2VsbHNUb0tlZXAgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIHZhciBjZWxsc1RvS2VlcEkgPSB7fTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9wdWxhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMucG9wdWxhdGlvbltpXTtcbiAgICAgICAgICAgIGtleSA9IGNlbGwueCArIFwiX1wiICsgY2VsbC55O1xuICAgICAgICAgICAgY2VsbF8gPSBzdXJJW2tleV07XG4gICAgICAgICAgICBpZiAoIWNlbGxfKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vaWYgKG5iPDIgb3IgbmI+MykgLT4ga2lsbFxuICAgICAgICAgICAgaWYgKGNlbGxfLm5iIDwgMiB8fCBjZWxsXy5uYiA+IDMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXAucHVzaChjZWxsKTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwSVtrZXldID0gY2VsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSBjZWxsc1RvS2VlcDtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSSA9IGNlbGxzVG9LZWVwSTtcblxuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIHZhciBzdXJzID0gb2JqVG9BcnJheShzdXJJKTtcbiAgICAgICAgc3VySSA9IG51bGw7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdXIgPSBzdXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VyLm5iICE9PSAzKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jaGVjayBpZiBhbHJlYWR5IGFsaXZlXG4gICAgICAgICAgICBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtrZXldO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goc3VyKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbklba2V5XSA9IHN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXRNU1xuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3BsdXNcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKG5iLCB0aW1lb3V0TVMsIGNwbHVzKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHVuaSA9IHRoaXM7XG4gICAgICAgIHZhciBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgdW5pLnN0ZXAoKTtcbiAgICAgICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iID4gMCAmJiBpKysgPiBuYikgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIHRpbWVvdXRNUyk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufTtcblxuLyoqIEB0eXBlZGVmIHt7eDpudW1iZXIseTpudW1iZXIsbmI6P251bWJlcn19IENlbGwgKi9cblxuLyoqXG4gKiBAcGFyYW0ge0NlbGx9IGNlbGxcbiAqIEBwYXJhbSB7VW5pdmVyc2V9IHVuaVxuICogQHJldHVybiB7QXJyYXkuPENlbGw+fVxuICovXG52YXIgZ2V0Q2VsbFN1cnJvdW5kaW5nID0gZnVuY3Rpb24gKGNlbGwsIHVuaSkge1xuICAgIHZhciB4MSA9IGNlbGwueCA9PT0gMCA/IHVuaS53IC0gMSA6IGNlbGwueCAtIDE7XG4gICAgdmFyIHgyID0gY2VsbC54ID09PSB1bmkudyAtIDEgPyAwIDogY2VsbC54ICsgMTtcbiAgICB2YXIgeTEgPSBjZWxsLnkgPT09IDAgPyB1bmkuaCAtIDEgOiBjZWxsLnkgLSAxO1xuICAgIHZhciB5MiA9IGNlbGwueSA9PT0gdW5pLmggLSAxID8gMCA6IGNlbGwueSArIDE7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyB4OiB4MSwgeTogeTEgfSxcbiAgICAgICAgeyB4OiB4MSwgeTogY2VsbC55IH0sXG4gICAgICAgIHsgeDogeDEsIHk6IHkyIH0sXG4gICAgICAgIHsgeDogY2VsbC54LCB5OiB5MSB9LFxuICAgICAgICB7IHg6IGNlbGwueCwgeTogeTIgfSxcbiAgICAgICAgeyB4OiB4MiwgeTogeTEgfSxcbiAgICAgICAgeyB4OiB4MiwgeTogY2VsbC55IH0sXG4gICAgICAgIHsgeDogeDIsIHk6IHkyIH1cbiAgICBdO1xufTtcblxuXG5cblxuLy9lbnRyeSBwb2ludFxuZXhwb3J0IGNvbnN0IGdhbWVPZkxpZmUgPSBmdW5jdGlvbihkaXZJZCwgY2FudmFzSWQpIHtcblxudmFyIGNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4vKiogQHR5cGUge251bWJlcn0gKi9cbnZhciB3ID0gY2Rpdi5vZmZzZXRXaWR0aDtcbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xudmFyIGggPSBjZGl2Lm9mZnNldEhlaWdodDtcblxudmFyIHVuaSA9IG5ldyBVbml2ZXJzZSh3LCBoKS5maWxsUmFuZG9tbHkoMC4wNSk7XG4vL3ZhciB1bmkgPSBuZXcgVW5pdmVyc2UoNTAwLCAzMDApLmZpbGxSYW5kb21seSgwLjA1KTtcblxudmFyIGNwbHVzID0gbmV3IENhbnZhc1BsdXMoY2FudmFzSWQsIHcsIGgpO1xuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdHggPSB0aGlzLmdldENvbnRleHQyRCgpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwRkZcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaS5wb3B1bGF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgdmFyIGNlbGwgPSB1bmkucG9wdWxhdGlvbltpXTtcbiAgICAgICAgLy9jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vY3R4LmFyYyhjZWxsLngsY2VsbC55LDEsMCwyKk1hdGguUEkpO1xuICAgICAgICAvL2N0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsUmVjdChjZWxsLngsIGNlbGwueSwgMSwgMSk7XG4gICAgfVxufTtcblxuLy9zdGFydFxudW5pLnN0YXJ0KC0xLCAwLCBjcGx1cyk7XG5cbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldHMvcGxhbmV0c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9nb2wvZ29sXCJcbiIsImV4cG9ydCBjbGFzcyBQbGFuZXQge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEBwYXJhbSB7VW5pdmVyc2V9IHUgVGhlIHVuaXZlcnNlIHRoZSBwbGFuZXQgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgbWFzc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdnggVGhlIHNwZWVkIHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdnkgVGhlIHNwZWVkIHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1LCBtLCB4LCB5LCB2eCwgdnkpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICAgICAgdGhpcy51ID0gdTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubSA9IG07XG5cbiAgICAgICAgLy9jb21wdXRlIHJhZGl1c1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgciA9IHRoaXMucigpO1xuXG4gICAgICAgIC8vc2V0IHBvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4IDwgciA/IHIgOiB4ID4gdS53IC0gciA/IHUudyAtIHIgOiB4O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geSA8IHIgPyByIDogeSA+IHUuaCAtIHIgPyB1LmggLSByIDogeTtcblxuICAgICAgICAvL3NldCBzcGVlZFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eSA9IHZ5O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBmb3JjZSwgYmFzZWQgb24gdGhlIGdyYXZpdHkgb2Ygb3RoZXIgcGxhbmV0cy5cbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ4ID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZnkgPSAwO1xuXG4gICAgICAgIC8vY2hlY2sgYWxsIG90aGVyIHBsYW5ldHMgaW4gdGhlIHVuaXZlcnNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51LnBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnUucHNbaV07XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NvbXB1dGUgYW5kIGFkZCBncmF2aXR5IGZvcmNlXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5kKHApO1xuICAgICAgICAgICAgaWYgKGQgPT09IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGQgPSBkICogZCAqIGQ7XG4gICAgICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmZ5ICs9IDAuMDEgKiAocC55IC0gdGhpcy55KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIHRoZSBwbGFuZXQgcC5cbiAgICAgKi9cbiAgICBkKHApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBkeCA9IHAueCAtIHRoaXMueDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBwbGFuZXQsIGRlcGVuZGluZyBvbiBpdHMgbWFzcy5cbiAgICAgKi9cbiAgICByKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubSAvIE1hdGguUEkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGNoYW5nZSgpIHtcblxuICAgICAgICAvL2NvbXB1dGUgYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB2YXIgYXggPSB0aGlzLmZ4IC8gdGhpcy5tO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdmFyIGF5ID0gdGhpcy5meSAvIHRoaXMubTtcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgICAgIHRoaXMudnggKz0gYXggKiB0aGlzLnUudGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSArPSBheSAqIHRoaXMudS50aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggKiB0aGlzLnUudGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiB0aGlzLnUudGltZVN0ZXBNcztcblxuICAgICAgICAvL2xpbWl0XG4gICAgICAgIC8qZG91YmxlIHI9cigpO1xuICAgICAgICAgaWYoeDxyKSB7IHg9cjsgdng9LXZ4KmU7IH1cbiAgICAgICAgIGlmKHk8cikgeyB5PXI7IHZ5PS12eSplOyB9XG4gICAgICAgICBpZih4PnUudy1yKSB7IHg9dS53LXI7IHZ4PS12eCplOyB9XG4gICAgICAgICBpZih5PnUuaC1yKSB7IHk9dS5oLXI7IHZ5PS12eSplOyB9Ki9cbiAgICAgICAgaWYgKHRoaXMueCA8IDApIHsgdGhpcy54ID0gdGhpcy51Lnc7IH1cbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHsgdGhpcy55ID0gdGhpcy51Lmg7IH1cbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMudS53KSB7IHRoaXMueCA9IDA7IH1cbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMudS5oKSB7IHRoaXMueSA9IDA7IH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBQbGFuZXQgfSBmcm9tICcuL1BsYW5ldCc7XG5cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHN0cnVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNc1xuICovXG4gICAgY29uc3RydWN0b3IodywgaCwgdGltZVN0ZXBNcykge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudGltZVN0ZXBNcyA9IHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy5wcyA9IFtdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgZmlsbFJhbmRvbWx5KG5iLCBtaSwgbWluU3BlZWQsIG1heFNwZWVkKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMucHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgICAgICB0aGlzLnBzLnB1c2gobmV3IFBsYW5ldCh0aGlzLCBtaSwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSwgc3BlZWQgKiBNYXRoLmNvcyhhbmdsZSksIHNwZWVkICogTWF0aC5zaW4oYW5nbGUpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgc3RlcCgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLnBzW2ldLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMucHNbaV0uY2hhbmdlKCk7XG5cbiAgICAgICAgLy9jb2xsaXNpb24gZGV0ZWN0aW9uc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB2YXIgYWdnID0gdGhpcy5maW5kQ29sbGlzaW9uKCk7XG4gICAgICAgIHdoaWxlIChhZ2cgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHMucHVzaCh0aGlzLmFnZ3JlZ2F0ZShhZ2cpKTtcbiAgICAgICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBhZ2dbMF0pO1xuICAgICAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIGFnZ1sxXSk7XG4gICAgICAgICAgICBhZ2cgPSB0aGlzLmZpbmRDb2xsaXNpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5LjxQbGFuZXQ+fVxuICAgICAqL1xuICAgIGZpbmRDb2xsaXNpb24oKSB7XG4gICAgICAgIC8vVE9ETyB1c2Ugc3BhdGlhbCBpbmRleCB0byBib29zdCBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICB2YXIgcGkgPSB0aGlzLnBzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdGhpcy5wcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICAgICAgICAgIHZhciBwaiA9IHRoaXMucHNbal07XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgdmFyIGQxID0gcGkuZChwaik7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgdmFyIGQyID0gcGkucigpICsgcGoucigpO1xuICAgICAgICAgICAgICAgIGlmIChkMSA+IGQyKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3BpLCBwal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWdncmVnYXRlIHBsYW5ldHMsIGFmdGVyIGNvbGxpc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXkuPFBsYW5ldD59IGFnZ1xuICAgICAqL1xuICAgIGFnZ3JlZ2F0ZShhZ2cpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgIHZhciBwMSA9IGFnZ1swXTtcbiAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgIHZhciBwMiA9IGFnZ1sxXTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBtID0gcDEubSArIHAyLm07XG4gICAgICAgIHJldHVybiBuZXcgUGxhbmV0KHRoaXMsXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgKHAxLnggKiBwMS5tICsgcDIueCAqIHAyLm0pIC8gbSxcbiAgICAgICAgICAgIChwMS55ICogcDEubSArIHAyLnkgKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEudnggKiBwMS5tICsgcDIudnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEudnkgKiBwMS5tICsgcDIudnkgKiBwMi5tKSAvIG1cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5cblxuLy9lbnRyeSBwb2ludFxuZXhwb3J0IGNvbnN0IHBsYW5ldHMgPSBmdW5jdGlvbiAoZGl2SWQsIGNhbnZhc0lkLCBuYiA9IDEwMDAsIG1pID0gMC41LCBtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuXG4gICAgdmFyIGNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIHcgPSBjZGl2Lm9mZnNldFdpZHRoO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBoID0gY2Rpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgIHZhciB1bmkgPSBuZXcgVW5pdmVyc2UodywgaCwgMTApLmZpbGxSYW5kb21seShuYiwgbWksIG1pblNwZWVkLCBtYXhTcGVlZCk7XG5cbiAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgdmFyIGNwbHVzID0gbmV3IENhbnZhc1BsdXMoY2FudmFzSWQsIHcsIGgpO1xuICAgIHZhciBjdHggPSBjcGx1cy5nZXRDb250ZXh0MkQoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2N0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wNSlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgICAgIC8vZGlzcGxheSBwbGFuZXRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pLnBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgICAgIHZhciBwID0gdW5pLnBzW2ldO1xuICAgICAgICAgICAgdmFyIHQgPSBwLm0gLyAobmIgKiBtaSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDI1NSxcIiArIE1hdGguZmxvb3IoMjU1ICogKDEgLSB0KSkgKyBcIilcIjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMocC54LCBwLnksIHAucigpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sYWJlbFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDIwMCwyMDApXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh1bmkucHMubGVuZ3RoICsgXCIgcGxhbmV0c1wiLCAyLCAxMCk7XG4gICAgfTtcblxuXG5cbiAgICAvL3N0YXJ0XG4gICAgbGV0IGkgPSAwO1xuICAgIHZhciBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICB9O1xuICAgIGVuZ2luZSgpO1xuICAgIHJldHVybiB0aGlzO1xuXG59XG5cblxuICAgICAgICAgLy9UT0RPIGFkZCByZXN0YXJ0L2JpZyBiYW5nIGJ1dHRvblxuLyogQnV0dG9uIHJlc3RhcnQgPSBuZXcgQnV0dG9uKFwiUmVjb21tZW5jZXIhXCIpO1xuIHJlc3RhcnQuYWRkQ2xpY2tIYW5kbGVyKG5ldyBDbGlja0hhbmRsZXIoKSB7XG4gQE92ZXJyaWRlXG4gcHVibGljIHZvaWQgb25DbGljayhDbGlja0V2ZW50IGV2ZW50KSB7XG4gdS5maWxsKCk7XG4gYy5nZXRDb250ZXh0MmQoKS5zZXRGaWxsU3R5bGUoQ3NzQ29sb3IubWFrZSgwLDAsMCkpO1xuIGMuZ2V0Q29udGV4dDJkKCkuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG4gfVxuIH0pO1xuIFJvb3RQYW5lbC5nZXQoXCJiXCIpLmFkZChyZXN0YXJ0KTsqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==