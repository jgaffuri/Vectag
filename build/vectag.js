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

class CanvasPlus {

    //check:
    //https://github.com/kangax/fabric.js/
    //http://kineticjs.com/
    //http://www.createjs.com/Docs/EaselJS/classes/MouseEvent.html

    /**
     * @constructor
     * @struct
     * @param {string} divId
     * @param {number=} w
     * @param {number=} h
     */
    constructor(divId = "vadiv", canvasId = "vacanvas", center = undefined, ps = 1) {

        const div = document.getElementById(divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        //make canvas within div
        this.canvas = document.createElement("canvas");
        this.canvas.id = canvasId;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        div.appendChild(this.canvas)

        /**@type {Object} */
        this.c2d = this.canvas.getContext("2d");

        // geo coordinates of the center
        this.center = center || { x: this.w * 0.5, y: this.h * 0.5 }
        // zoom factor: pixel size, in m/pix
        this.ps = ps;

        //mouse click - pan
        let mpan = false
        this.canvas.addEventListener("mousedown", e => { mpan = true });
        this.canvas.addEventListener("mousemove", e => {
            if (mpan) this.pan(-e.movementX * this.ps, e.movementY * this.ps)
        });
        this.canvas.addEventListener("mouseup", e => { mpan = false });

        //mouse wheel - zoom
        const f = 1.5
        this.canvas.addEventListener("wheel", e => {
            const f_ = e.deltaY > 0 ? f : 1 / f;
            this.zoom(f_, this.pixToGeoX(e.offsetX), this.pixToGeoY(e.offsetY))
        });

    }

    /** @return {CanPl.CanvasPlus} */
    redraw() {
        console.log("Override redraw method");
        return this;
    }

    //conversion functions
    geoToPixX(xGeo) { return (xGeo - this.center.x) / this.ps + this.w * 0.5; }
    geoToPixY(yGeo) { return -(yGeo - this.center.y) / this.ps + this.h * 0.5; }
    pixToGeoX(x) { return (x - this.w * 0.5) * this.ps + this.center.x; }
    pixToGeoY(y) { return -(y - this.h * 0.5) * this.ps + this.center.y; }

    /**
     * @param {number} x
     * @param {number} y
     */
    pan(dxGeo, dyGeo) {
        this.center.x += dxGeo;
        this.center.y += dyGeo;
        this.redraw();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} f
     */
    zoom(f = 1, xGeo = this.center.x, yGeo = this.center.y) {
        this.ps *= f;
        this.center.x += (xGeo-this.center.x)*(1-f)
        this.center.y += (yGeo-this.center.y)*(1-f)
        this.redraw();
    }

}


/***/ }),

/***/ "./src/base/grid.js":
/*!**************************!*\
  !*** ./src/base/grid.js ***!
  \**************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");


class Grid {

    /**
     * @constructor
     * @struct
     * @template T
     * @param {number} w
     * @param {number} h
     * @param {number} res
     */
    constructor(w, h, res) {

        /** @type {number} */
        this.res = res;

        /** @type {number} */
        this.lengthX = Math.floor(w / res + 1);

        /** @type {number} */
        this.lengthY = Math.floor(h / res + 1);

        /** @type {Array.<Array.<Array.<T>>>} */
        this.cells = [];

        for (let i = 0; i < this.lengthX; i++) {
            /** @type {Array.<Array.<T>>} */
            this.cells[i] = [];
            for (let j = 0; j < this.lengthY; j++) {
                /** @type {Array.<T>} */
                this.cells[i][j] = [];
            }
        }
    }

    /**
     * @param {number} xmin
     * @param {number} ymin
     * @param {number} xmax
     * @param {number} ymax
     * @return {Array.<T>}
     */
    get(xmin, ymin, xmax, ymax) {
        const as = [];
        for (let i = Math.floor(xmin / this.res); i < Math.floor(xmax / this.res + 1); i++) {
            if (i < 0 || i >= this.lengthX)
                continue;
            for (let j = Math.floor(ymin / this.res); j < Math.floor(ymax / this.res + 1); j++) {
                if (j < 0 || j >= this.lengthY)
                    continue;
                as.push.apply(as, this.cells[i][j]);
            }
        }
        return as;
    }

    /**
     * @param {T} obj
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    add(obj, x, y) {
        return this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)].push(obj);
    }

    /**
     * @param {T} obj
     * @param {number} x
     * @param {number} y
     */
    remove(obj, x, y) {
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)], obj);
    }


     /**
     * @param {T} obj
     * @param {number} xIni
     * @param {number} yIni
     * @param {number} xFin
     * @param {number} yFin
     */
    move(obj, xIni, yIni, xFin, yFin) {
        const iIni = Math.floor(xIni / this.res);
        const jIni = Math.floor(yIni / this.res);
        const iFin = Math.floor(xFin / this.res);
        const jFin = Math.floor(yFin / this.res);

        //no change, still same cell
        if(iIni==iFin && jIni==jFin) return;

        //change cell
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.cells[iIni][jIni], obj);
        return this.cells[iFin][jFin].push(obj);
    }

}


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

/***/ "./src/gol/Universe.js":
/*!*****************************!*\
  !*** ./src/gol/Universe.js ***!
  \*****************************/
/*! exports provided: Universe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Universe", function() { return Universe; });
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");


class Universe {

    /**
     * @constructor
     * @struct
     * @param {number} w
     * @param {number} h
     */
    constructor(w, h) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;
        /** @type {Array.<Cell>} */
        this.population = [];
        /** @type {Object.<string,Cell>}
         * @dict */
        this.populationI = {};
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {Cell}
     */
    add(x, y) {
        //find agent at location
        /**@type {string}*/
        const id = x + "_" + y;
        if (this.populationI[id]) return null;
        //create new cell
        /**@type {Cell} */
        const cell = { x: x, y: y, nb: 0 };
        this.population.push(cell);
        this.populationI[id] = cell;
        return cell;
    }

    /**
     * @return {Universe}
     */
    step() {
        /** @type {number} */
        let i, j;
        /** @type {Cell} */
        let cell, cell_;
        /** @type {Cell} */
        let sur, sur_;
        /** @type {string} */
        let key;

        //populate cell surroundings
        /** @type {Object.<string, Cell>}
         * @dict */
        const surI = {};
        //go through list of cells
        for (i = 0; i < this.population.length; i++) {
            // +1 surrounding cells
            /** @type {Array.<Cell>} */
            const srs = Universe.getCellSurrounding(this.population[i], this);
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
        const cellsToKeep = [];
        /** @type {Object.<string, Cell>}
         * @dict */
        const cellsToKeepI = {};
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
        const surs = Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["objToArray"])(surI);
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
    }


    /**
     * @param {number} nb
     * @param {number} timeoutMS
     * @param {CanvasPlus} cplus
     * @return {Universe}
     */
    start(nb, timeoutMS, cplus) {
        let i = 0;
        const uni = this;
        const engine = function () {
            //console.log(i);
            uni.step();
            cplus.redraw();
            if (nb > 0 && i++ > nb) return;
            setTimeout(engine, timeoutMS);
        };
        engine();
        return this;
    }

    /**
     * @param {Cell} cell
     * @param {Universe} uni
     * @return {Array.<Cell>}
     */
    static getCellSurrounding(cell, uni) {
        const x1 = cell.x === 0 ? uni.w - 1 : cell.x - 1;
        const x2 = cell.x === uni.w - 1 ? 0 : cell.x + 1;
        const y1 = cell.y === 0 ? uni.h - 1 : cell.y - 1;
        const y2 = cell.y === uni.h - 1 ? 0 : cell.y + 1;
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
    }

}


/***/ }),

/***/ "./src/gol/index.js":
/*!**************************!*\
  !*** ./src/gol/index.js ***!
  \**************************/
/*! exports provided: gameOfLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return gameOfLife; });
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");
/* harmony import */ var _Universe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Universe */ "./src/gol/Universe.js");



//TODO zoom/pan, with canvas transform: better universe limits
//TODO buttons (play, stop, speed, draw, pan)
//TODO check canvas animation


class GoLSimulation {

    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        this.cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_0__["CanvasPlus"](opts.divId, "vacanvas");

        const th = this;
        this.cplus.redraw = function () {
            this.c2d.clearRect(0, 0, th.w, th.h);
            this.c2d.fillStyle = "#0000FF";
            for (let i = 0; i < th.uni.population.length; i++) {
                /** @type {Cell} */
                const cell = th.uni.population[i];
                //ctx.beginPath();
                //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
                //ctx.fill();
                this.c2d.fillRect(this.geoToPixX(cell.x), this.geoToPixY(cell.y), 1/this.ps, 1/this.ps);
            }
            //this.c2d.drawRect(0, 0, th.w, th.h);
        };

        this.uni = new _Universe__WEBPACK_IMPORTED_MODULE_1__["Universe"](this.w, this.h);
    }


    //
    initRandom(density = 0.05) {
        let i = 0;
        /** @type {number} */
        const nb = this.uni.w * this.uni.h * density;
        while (i < nb) {
            const x = Math.round(this.uni.w * Math.random());
            const y = Math.round(this.uni.h * Math.random());
            /** @type {Cell} */
            const cell = this.uni.add(x, y);
            if (cell) i++;
        }
        return this;
    }


    //
    start() {
        this.uni.start(-1, 0, this.cplus);
    }

}


const gameOfLife = function (opts) {
    return new GoLSimulation(opts)
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
/* harmony import */ var _planets_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets/index */ "./src/planets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return _planets_index__WEBPACK_IMPORTED_MODULE_0__["planets"]; });

/* harmony import */ var _gol_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gol/index */ "./src/gol/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return _gol_index__WEBPACK_IMPORTED_MODULE_1__["gameOfLife"]; });





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
        const dx = p.x - this.x;
        /** @type {number} */
        const dy = p.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @return {number} The radius of the planet, depending on its mass.
     */
    r() {
        return Math.pow(this.m / Math.PI, 0.5);
    }

    /**
     * @param {boolean} bounce
     */
    change(bounce = false, vmax = 0.8, timeStepMs = 10) {

        //compute acceleration
        /** @type {number} */
        const ax = this.fx / this.m;
        /** @type {number} */
        const ay = this.fy / this.m;

        //compute new speed
        this.vx += ax * timeStepMs;
        this.vy += ay * timeStepMs;

        //check vmax
        if (vmax > 0) {
            const v = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (v > vmax) {
                this.vx = vmax * this.vx / v;
                this.vy = vmax * this.vy / v;
            }
        }

        //compute new position
        let nx = this.x + this.vx * timeStepMs;
        let ny = this.y + this.vy * timeStepMs;

        //handle position limit
        if (bounce) {
            const r = this.r();
            const e = 1;
            if (nx < r) { nx = r; this.vx = -this.vx * e; }
            if (ny < r) { ny = r; this.vy = -this.vy * e; }
            if (nx > this.u.w - r) { nx = this.u.w - r; this.vx = -this.vx * e; }
            if (ny > this.u.h - r) { ny = this.u.h - r; this.vy = -this.vy * e; }
        } else {
            if (nx < 0) { nx = this.u.w; }
            if (ny < 0) { ny = this.u.h; }
            if (nx > this.u.w) { nx = 0; }
            if (ny > this.u.h) { ny = 0; }
        }

        //move planet
        this.u.move(this, nx, ny)

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
/* harmony import */ var _base_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/grid */ "./src/base/grid.js");
/* harmony import */ var _Planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Planet */ "./src/planets/Planet.js");




class Universe {

/**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 */
    constructor(w, h, gres = Math.min(w,h)/100.0) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {Array.<Planet>} */
        this.ps = [];

        /** @type {Grid} */
        this.grid = new _base_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](w, h, gres);
    }

    /**
     * Compute the mass of the universe
     */
    m() {
        let m = 0;
        for (let i = 0; i < this.ps.length; i++)
            m += this.ps[i].m;
        return m;
    }

    /**
     * Create a planet
     */
    createPlanet(m, x, y, sx, sy) {
        const p = new _Planet__WEBPACK_IMPORTED_MODULE_2__["Planet"](this, m, x, y, sx, sy);
        this.add(p);
    }

    /**
     * Add a planet
     */
    add(p) {
        p.u = this;
        this.ps.push(p);
        this.grid.add(p, p.x, p.y);
    }

    /**
     * Remove a planet
     */
    remove(p) {
        p.u = null;
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, p);
        this.grid.remove(p, p.x, p.y);
    }

    /**
     * Move a planet
     */
    move(p, nx, ny) {
        this.grid.move(p, p.x, p.y, nx, ny);
        p.x = nx; p.y = ny;
    }

    /**
     * Aggregate two planets
     */
    aggregate(p1, p2) {
        const m = p1.m + p2.m;
        const p = this.createPlanet(
            m,
            (p1.x * p1.m + p2.x * p2.m) / m,
            (p1.y * p1.m + p2.y * p2.m) / m,
            (p1.vx * p1.m + p2.vx * p2.m) / m,
            (p1.vy * p1.m + p2.vy * p2.m) / m
        );
        this.remove(p1);
        this.remove(p2);
        return p;
    }


    /**
     * @return {Array.<Planet>}
     */
    findCollision(collisionFactor = 1) {
        for (let i = 0; i < this.ps.length; i++) {
            /** @type {Planet} */
            const pi = this.ps[i];
            const w = 2*pi.r();
            const cand = this.grid.get(pi.x-w, pi.y-w, pi.x+w, pi.y+w);
            for (let j = 0; j < cand.length; j++) {
                /** @type {Planet} */
                const pj = cand[j];

                if(pi == pj) continue;
    
                /** @type {number} */
                const d1 = pi.d(pj);
                /** @type {number} */
                const d2 = (pi.r() + pj.r()) * collisionFactor;
                if (d1 > d2)
                    continue;
                return [pi, pj];

            }
        }
        return null;
    }


    /**
     */
    step(bounce = false, vmax = 0.8, collisionFactor = 1, timeStepMs = 10) {
        /** @type {number} */
        let i;

        //observation
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].observe();

        //action
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].change(bounce, vmax, timeStepMs);

        //collision detection
        //find first collision
        /** @type {Array.<Planet>} */
        let pair = this.findCollision(collisionFactor);
        while (pair !== null) {
            //aggregate
            this.aggregate(pair[0], pair[1])
            //find next collision
            pair = this.findCollision(collisionFactor);
        }
    }

}


/***/ }),

/***/ "./src/planets/index.js":
/*!******************************!*\
  !*** ./src/planets/index.js ***!
  \******************************/
/*! exports provided: planets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return planets; });
/* harmony import */ var _Universe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Universe */ "./src/planets/Universe.js");
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");



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

class PlanetSimulation {

    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        const th = this;
        this.cplus.redraw = function () {
            //ctx.clearRect(0, 0, w, h);
            this.c2d.fillStyle = "rgba(0,0,0,0.05)";
            this.c2d.fillRect(0, 0, th.w, th.h);
    
            //display planets
            for (let j = 0; j < th.uni.ps.length; j++) {
                /** @type {Planet} */
                const p = th.uni.ps[j];
                const t = p.m / th.uni.m();
                this.c2d.fillStyle = "rgb(255,255," + Math.floor(255 * (1 - t)) + ")";
                this.c2d.beginPath();
                this.c2d.arc(this.geoToPixX(p.x), this.geoToPixY(p.y), p.r() / this.ps, 0, 2 * Math.PI);
                this.c2d.closePath();
                this.c2d.fill();
            }
    
            //label
            this.c2d.fillStyle = "rgb(200,200,200)";
            this.c2d.fillRect(0, 0, 65, 13);
            this.c2d.fillStyle = "rgb(0,0,0)";
            this.c2d.fillText(th.uni.ps.length + " planets", 2, 10);
        };
    
        /** @type {Universe} */
        this.uni = new _Universe__WEBPACK_IMPORTED_MODULE_0__["Universe"](this.w, this.h)
    }

    //
    initRandom(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        for (let i = 0; i < nb; i++) {
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const angle = 2 * Math.random() * Math.PI;
            this.uni.createPlanet(mi, this.w * Math.random(), this.h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle));
        }
        return this;
    }

    //
    initBigBang(nb = 1000, mi = 1, minSpeed = 0.35, maxSpeed = 0.7, rad = 100) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        const cx = this.w * 0.5, cy = this.h * 0.5;
        const angleStep = 2*Math.PI / nb;
        for (let i = 0; i < nb; i++) {
            const a = i * angleStep;

            //position
            const d = rad * Math.random();
            const x = cx + d * Math.cos(a), y = cy + d * Math.sin(a);

            //speed
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const aS = a + 2*(Math.random()-0.5) * 2*Math.PI / 3;
            const sx = speed * Math.cos(aS), sy = speed * Math.sin(aS);

            this.uni.createPlanet(mi, x, y, sx, sy);
        }
        return this;
    }

    //start
    start(bounce = false, vmax = 0.8, collisionFactor = 0.8, timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.uni.step(bounce, vmax, collisionFactor, timeStepMs);
            t.cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();
    }

    //stop
    stop() {
        //TODO
    }

}


const planets = function (opts) {
    return new PlanetSimulation(opts)
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvbGliLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9nb2wvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvUGxhbmV0LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL1VuaXZlcnNlLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ1A7QUFDQSIsImZpbGUiOiJ2ZWN0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGNsYXNzIENhbnZhc1BsdXMge1xuXG4gICAgLy9jaGVjazpcbiAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9rYW5nYXgvZmFicmljLmpzL1xuICAgIC8vaHR0cDovL2tpbmV0aWNqcy5jb20vXG4gICAgLy9odHRwOi8vd3d3LmNyZWF0ZWpzLmNvbS9Eb2NzL0Vhc2VsSlMvY2xhc3Nlcy9Nb3VzZUV2ZW50Lmh0bWxcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGl2SWRcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkaXZJZCA9IFwidmFkaXZcIiwgY2FudmFzSWQgPSBcInZhY2FudmFzXCIsIGNlbnRlciA9IHVuZGVmaW5lZCwgcHMgPSAxKSB7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAvL21ha2UgY2FudmFzIHdpdGhpbiBkaXZcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IGNhbnZhc0lkO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudztcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXG5cbiAgICAgICAgLyoqQHR5cGUge09iamVjdH0gKi9cbiAgICAgICAgdGhpcy5jMmQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy8gZ2VvIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXIgfHwgeyB4OiB0aGlzLncgKiAwLjUsIHk6IHRoaXMuaCAqIDAuNSB9XG4gICAgICAgIC8vIHpvb20gZmFjdG9yOiBwaXhlbCBzaXplLCBpbiBtL3BpeFxuICAgICAgICB0aGlzLnBzID0gcHM7XG5cbiAgICAgICAgLy9tb3VzZSBjbGljayAtIHBhblxuICAgICAgICBsZXQgbXBhbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7IG1wYW4gPSB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKG1wYW4pIHRoaXMucGFuKC1lLm1vdmVtZW50WCAqIHRoaXMucHMsIGUubW92ZW1lbnRZICogdGhpcy5wcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGUgPT4geyBtcGFuID0gZmFsc2UgfSk7XG5cbiAgICAgICAgLy9tb3VzZSB3aGVlbCAtIHpvb21cbiAgICAgICAgY29uc3QgZiA9IDEuNVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmXyA9IGUuZGVsdGFZID4gMCA/IGYgOiAxIC8gZjtcbiAgICAgICAgICAgIHRoaXMuem9vbShmXywgdGhpcy5waXhUb0dlb1goZS5vZmZzZXRYKSwgdGhpcy5waXhUb0dlb1koZS5vZmZzZXRZKSlcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiogQHJldHVybiB7Q2FuUGwuQ2FudmFzUGx1c30gKi9cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcnJpZGUgcmVkcmF3IG1ldGhvZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9jb252ZXJzaW9uIGZ1bmN0aW9uc1xuICAgIGdlb1RvUGl4WCh4R2VvKSB7IHJldHVybiAoeEdlbyAtIHRoaXMuY2VudGVyLngpIC8gdGhpcy5wcyArIHRoaXMudyAqIDAuNTsgfVxuICAgIGdlb1RvUGl4WSh5R2VvKSB7IHJldHVybiAtKHlHZW8gLSB0aGlzLmNlbnRlci55KSAvIHRoaXMucHMgKyB0aGlzLmggKiAwLjU7IH1cbiAgICBwaXhUb0dlb1goeCkgeyByZXR1cm4gKHggLSB0aGlzLncgKiAwLjUpICogdGhpcy5wcyArIHRoaXMuY2VudGVyLng7IH1cbiAgICBwaXhUb0dlb1koeSkgeyByZXR1cm4gLSh5IC0gdGhpcy5oICogMC41KSAqIHRoaXMucHMgKyB0aGlzLmNlbnRlci55OyB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICovXG4gICAgcGFuKGR4R2VvLCBkeUdlbykge1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9IGR4R2VvO1xuICAgICAgICB0aGlzLmNlbnRlci55ICs9IGR5R2VvO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZlxuICAgICAqL1xuICAgIHpvb20oZiA9IDEsIHhHZW8gPSB0aGlzLmNlbnRlci54LCB5R2VvID0gdGhpcy5jZW50ZXIueSkge1xuICAgICAgICB0aGlzLnBzICo9IGY7XG4gICAgICAgIHRoaXMuY2VudGVyLnggKz0gKHhHZW8tdGhpcy5jZW50ZXIueCkqKDEtZilcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSAoeUdlby10aGlzLmNlbnRlci55KSooMS1mKVxuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgR3JpZCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHRlbXBsYXRlIFRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIHJlcykge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnJlcyA9IHJlcztcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5sZW5ndGhYID0gTWF0aC5mbG9vcih3IC8gcmVzICsgMSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubGVuZ3RoWSA9IE1hdGguZmxvb3IoaCAvIHJlcyArIDEpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFycmF5LjxBcnJheS48VD4+Pn0gKi9cbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGhYOyBpKyspIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFycmF5LjxUPj59ICovXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoWTsgaisrKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48VD59ICovXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tpXVtqXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4bWF4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHltYXhcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48VD59XG4gICAgICovXG4gICAgZ2V0KHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICAgICAgY29uc3QgYXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IoeG1pbiAvIHRoaXMucmVzKTsgaSA8IE1hdGguZmxvb3IoeG1heCAvIHRoaXMucmVzICsgMSk7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5sZW5ndGhYKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IE1hdGguZmxvb3IoeW1pbiAvIHRoaXMucmVzKTsgaiA8IE1hdGguZmxvb3IoeW1heCAvIHRoaXMucmVzICsgMSk7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqIDwgMCB8fCBqID49IHRoaXMubGVuZ3RoWSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgYXMucHVzaC5hcHBseShhcywgdGhpcy5jZWxsc1tpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBhZGQob2JqLCB4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW01hdGguZmxvb3IoeCAvIHRoaXMucmVzKV1bTWF0aC5mbG9vcih5IC8gdGhpcy5yZXMpXS5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICovXG4gICAgcmVtb3ZlKG9iaiwgeCwgeSkge1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5jZWxsc1tNYXRoLmZsb29yKHggLyB0aGlzLnJlcyldW01hdGguZmxvb3IoeSAvIHRoaXMucmVzKV0sIG9iaik7XG4gICAgfVxuXG5cbiAgICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEluaVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5SW5pXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhGaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUZpblxuICAgICAqL1xuICAgIG1vdmUob2JqLCB4SW5pLCB5SW5pLCB4RmluLCB5RmluKSB7XG4gICAgICAgIGNvbnN0IGlJbmkgPSBNYXRoLmZsb29yKHhJbmkgLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGpJbmkgPSBNYXRoLmZsb29yKHlJbmkgLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGlGaW4gPSBNYXRoLmZsb29yKHhGaW4gLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGpGaW4gPSBNYXRoLmZsb29yKHlGaW4gLyB0aGlzLnJlcyk7XG5cbiAgICAgICAgLy9ubyBjaGFuZ2UsIHN0aWxsIHNhbWUgY2VsbFxuICAgICAgICBpZihpSW5pPT1pRmluICYmIGpJbmk9PWpGaW4pIHJldHVybjtcblxuICAgICAgICAvL2NoYW5nZSBjZWxsXG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLmNlbGxzW2lJbmldW2pJbmldLCBvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpRmluXVtqRmluXS5wdXNoKG9iaik7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge09iamVjdC48PywgVD59IG9ialxuICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICovXG5leHBvcnQgY29uc3Qgb2JqVG9BcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5LjxUPn0gYXJyXG4gKiBAcGFyYW0ge1R9IG9ialxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgb2JqKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcbiAgICBpZiAoaW5kZXggPiAtMSlcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gcmVtb3ZlIGVsZW1lbnQgbm90IHByZXNlbnQgaW4gYXJyYXkuXCIpO1xufTtcbiIsImltcG9ydCB7IG9ialRvQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7Q2VsbH1cbiAgICAgKi9cbiAgICBhZGQoeCwgeSkge1xuICAgICAgICAvL2ZpbmQgYWdlbnQgYXQgbG9jYXRpb25cbiAgICAgICAgLyoqQHR5cGUge3N0cmluZ30qL1xuICAgICAgICBjb25zdCBpZCA9IHggKyBcIl9cIiArIHk7XG4gICAgICAgIGlmICh0aGlzLnBvcHVsYXRpb25JW2lkXSkgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgIC8qKkB0eXBlIHtDZWxsfSAqL1xuICAgICAgICBjb25zdCBjZWxsID0geyB4OiB4LCB5OiB5LCBuYjogMCB9O1xuICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChjZWxsKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtpZF0gPSBjZWxsO1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICBzdGVwKCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IGksIGo7XG4gICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgbGV0IGNlbGwsIGNlbGxfO1xuICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgIGxldCBzdXIsIHN1cl87XG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICBsZXQga2V5O1xuXG4gICAgICAgIC8vcG9wdWxhdGUgY2VsbCBzdXJyb3VuZGluZ3NcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IHN1ckkgPSB7fTtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGxpc3Qgb2YgY2VsbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9wdWxhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gKzEgc3Vycm91bmRpbmcgY2VsbHNcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICAgICAgY29uc3Qgc3JzID0gVW5pdmVyc2UuZ2V0Q2VsbFN1cnJvdW5kaW5nKHRoaXMucG9wdWxhdGlvbltpXSwgdGhpcyk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3VyID0gc3JzW2pdO1xuICAgICAgICAgICAgICAgIGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgICAgICBzdXJfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdXJfKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cl8ubmIrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdXIubmIgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzdXJJW2tleV0gPSBzdXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9CMy9TMjNcbiAgICAgICAgLy9raWxsIGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICBjb25zdCBjZWxsc1RvS2VlcCA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXBJID0ge307XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGwgPSB0aGlzLnBvcHVsYXRpb25baV07XG4gICAgICAgICAgICBrZXkgPSBjZWxsLnggKyBcIl9cIiArIGNlbGwueTtcbiAgICAgICAgICAgIGNlbGxfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgaWYgKCFjZWxsXykgY29udGludWU7XG4gICAgICAgICAgICAvL2lmIChuYjwyIG9yIG5iPjMpIC0+IGtpbGxcbiAgICAgICAgICAgIGlmIChjZWxsXy5uYiA8IDIgfHwgY2VsbF8ubmIgPiAzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwLnB1c2goY2VsbCk7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcElba2V5XSA9IGNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gY2VsbHNUb0tlZXA7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSBjZWxsc1RvS2VlcEk7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICBjb25zdCBzdXJzID0gb2JqVG9BcnJheShzdXJJKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN1cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1ciA9IHN1cnNbaV07XG5cbiAgICAgICAgICAgIGlmIChzdXIubmIgIT09IDMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGFscmVhZHkgYWxpdmVcbiAgICAgICAgICAgIGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgIGNlbGwgPSB0aGlzLnBvcHVsYXRpb25JW2tleV07XG4gICAgICAgICAgICBpZiAoY2VsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChzdXIpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtrZXldID0gc3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXRNU1xuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3BsdXNcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICBzdGFydChuYiwgdGltZW91dE1TLCBjcGx1cykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHVuaSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICB1bmkuc3RlcCgpO1xuICAgICAgICAgICAgY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmIgPiAwICYmIGkrKyA+IG5iKSByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgdGltZW91dE1TKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Q2VsbH0gY2VsbFxuICAgICAqIEBwYXJhbSB7VW5pdmVyc2V9IHVuaVxuICAgICAqIEByZXR1cm4ge0FycmF5LjxDZWxsPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2VsbFN1cnJvdW5kaW5nKGNlbGwsIHVuaSkge1xuICAgICAgICBjb25zdCB4MSA9IGNlbGwueCA9PT0gMCA/IHVuaS53IC0gMSA6IGNlbGwueCAtIDE7XG4gICAgICAgIGNvbnN0IHgyID0gY2VsbC54ID09PSB1bmkudyAtIDEgPyAwIDogY2VsbC54ICsgMTtcbiAgICAgICAgY29uc3QgeTEgPSBjZWxsLnkgPT09IDAgPyB1bmkuaCAtIDEgOiBjZWxsLnkgLSAxO1xuICAgICAgICBjb25zdCB5MiA9IGNlbGwueSA9PT0gdW5pLmggLSAxID8gMCA6IGNlbGwueSArIDE7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IHg6IHgxLCB5OiB5MSB9LFxuICAgICAgICAgICAgeyB4OiB4MSwgeTogY2VsbC55IH0sXG4gICAgICAgICAgICB7IHg6IHgxLCB5OiB5MiB9LFxuICAgICAgICAgICAgeyB4OiBjZWxsLngsIHk6IHkxIH0sXG4gICAgICAgICAgICB7IHg6IGNlbGwueCwgeTogeTIgfSxcbiAgICAgICAgICAgIHsgeDogeDIsIHk6IHkxIH0sXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiBjZWxsLnkgfSxcbiAgICAgICAgICAgIHsgeDogeDIsIHk6IHkyIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tICcuL1VuaXZlcnNlJztcblxuLy9UT0RPIHpvb20vcGFuLCB3aXRoIGNhbnZhcyB0cmFuc2Zvcm06IGJldHRlciB1bml2ZXJzZSBsaW1pdHNcbi8vVE9ETyBidXR0b25zIChwbGF5LCBzdG9wLCBzcGVlZCwgZHJhdywgcGFuKVxuLy9UT0RPIGNoZWNrIGNhbnZhcyBhbmltYXRpb25cblxuXG5jbGFzcyBHb0xTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYzJkLmNsZWFyUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxTdHlsZSA9IFwiIzAwMDBGRlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aC51bmkucG9wdWxhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGgudW5pLnBvcHVsYXRpb25baV07XG4gICAgICAgICAgICAgICAgLy9jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgLy9jdHguYXJjKGNlbGwueCxjZWxsLnksMSwwLDIqTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgLy9jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxSZWN0KHRoaXMuZ2VvVG9QaXhYKGNlbGwueCksIHRoaXMuZ2VvVG9QaXhZKGNlbGwueSksIDEvdGhpcy5wcywgMS90aGlzLnBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5jMmQuZHJhd1JlY3QoMCwgMCwgdGgudywgdGguaCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKGRlbnNpdHkgPSAwLjA1KSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IG5iID0gdGhpcy51bmkudyAqIHRoaXMudW5pLmggKiBkZW5zaXR5O1xuICAgICAgICB3aGlsZSAoaSA8IG5iKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS53ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy51bmkuYWRkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8vXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudW5pLnN0YXJ0KC0xLCAwLCB0aGlzLmNwbHVzKTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgZ2FtZU9mTGlmZSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBHb0xTaW11bGF0aW9uKG9wdHMpXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9wbGFuZXRzL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL2dvbC9pbmRleFwiXG4iLCJleHBvcnQgY2xhc3MgUGxhbmV0IHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1IFRoZSB1bml2ZXJzZSB0aGUgcGxhbmV0IGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIG1hc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ4IFRoZSBzcGVlZCB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFRoZSBzcGVlZCB5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm0gPSBtO1xuXG4gICAgICAgIC8vY29tcHV0ZSByYWRpdXNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcblxuICAgICAgICAvL3NldCBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IHIgPyByIDogeCA+IHUudyAtIHIgPyB1LncgLSByIDogeDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCByID8gciA6IHkgPiB1LmggLSByID8gdS5oIC0gciA6IHk7XG5cbiAgICAgICAgLy9zZXQgc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSB2eTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZm9yY2UsIGJhc2VkIG9uIHRoZSBncmF2aXR5IG9mIG90aGVyIHBsYW5ldHMuXG4gICAgICovXG4gICAgb2JzZXJ2ZSgpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ5ID0gMDtcblxuICAgICAgICAvL2NoZWNrIGFsbCBvdGhlciBwbGFuZXRzIGluIHRoZSB1bml2ZXJzZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudS5wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy51LnBzW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMgPT0gcClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jb21wdXRlIGFuZCBhZGQgZ3Jhdml0eSBmb3JjZVxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMuZChwKTtcbiAgICAgICAgICAgIGlmIChkID09PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBkID0gZCAqIGQgKiBkO1xuICAgICAgICAgICAgdGhpcy5meCArPSAwLjAxICogKHAueCAtIHRoaXMueCkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICAgICAgdGhpcy5meSArPSAwLjAxICogKHAueSAtIHRoaXMueSkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0byB0aGUgcGxhbmV0IHAuXG4gICAgICovXG4gICAgZChwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBkeCA9IHAueCAtIHRoaXMueDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR5ID0gcC55IC0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIHBsYW5ldCwgZGVwZW5kaW5nIG9uIGl0cyBtYXNzLlxuICAgICAqL1xuICAgIHIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLm0gLyBNYXRoLlBJLCAwLjUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlXG4gICAgICovXG4gICAgY2hhbmdlKGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCB0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL2NvbXB1dGUgYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheCA9IHRoaXMuZnggLyB0aGlzLm07XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IGF4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSArPSBheSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9jaGVjayB2bWF4XG4gICAgICAgIGlmICh2bWF4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGguc3FydCh0aGlzLnZ4ICogdGhpcy52eCArIHRoaXMudnkgKiB0aGlzLnZ5KTtcbiAgICAgICAgICAgIGlmICh2ID4gdm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSB2bWF4ICogdGhpcy52eCAvIHY7XG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IHZtYXggKiB0aGlzLnZ5IC8gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgbGV0IG54ID0gdGhpcy54ICsgdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIGxldCBueSA9IHRoaXMueSArIHRoaXMudnkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vaGFuZGxlIHBvc2l0aW9uIGxpbWl0XG4gICAgICAgIGlmIChib3VuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcbiAgICAgICAgICAgIGNvbnN0IGUgPSAxO1xuICAgICAgICAgICAgaWYgKG54IDwgcikgeyBueCA9IHI7IHRoaXMudnggPSAtdGhpcy52eCAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueSA8IHIpIHsgbnkgPSByOyB0aGlzLnZ5ID0gLXRoaXMudnkgKiBlOyB9XG4gICAgICAgICAgICBpZiAobnggPiB0aGlzLnUudyAtIHIpIHsgbnggPSB0aGlzLnUudyAtIHI7IHRoaXMudnggPSAtdGhpcy52eCAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueSA+IHRoaXMudS5oIC0gcikgeyBueSA9IHRoaXMudS5oIC0gcjsgdGhpcy52eSA9IC10aGlzLnZ5ICogZTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG54IDwgMCkgeyBueCA9IHRoaXMudS53OyB9XG4gICAgICAgICAgICBpZiAobnkgPCAwKSB7IG55ID0gdGhpcy51Lmg7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53KSB7IG54ID0gMDsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmgpIHsgbnkgPSAwOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvL21vdmUgcGxhbmV0XG4gICAgICAgIHRoaXMudS5tb3ZlKHRoaXMsIG54LCBueSlcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9iYXNlL2dyaWQnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHN0cnVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoLCBncmVzID0gTWF0aC5taW4odyxoKS8xMDAuMCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy5wcyA9IFtdO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7R3JpZH0gKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgZ3Jlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgbWFzcyBvZiB0aGUgdW5pdmVyc2VcbiAgICAgKi9cbiAgICBtKCkge1xuICAgICAgICBsZXQgbSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIG0gKz0gdGhpcy5wc1tpXS5tO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwbGFuZXRcbiAgICAgKi9cbiAgICBjcmVhdGVQbGFuZXQobSwgeCwgeSwgc3gsIHN5KSB7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUGxhbmV0KHRoaXMsIG0sIHgsIHksIHN4LCBzeSk7XG4gICAgICAgIHRoaXMuYWRkKHApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHBsYW5ldFxuICAgICAqL1xuICAgIGFkZChwKSB7XG4gICAgICAgIHAudSA9IHRoaXM7XG4gICAgICAgIHRoaXMucHMucHVzaChwKTtcbiAgICAgICAgdGhpcy5ncmlkLmFkZChwLCBwLngsIHAueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcGxhbmV0XG4gICAgICovXG4gICAgcmVtb3ZlKHApIHtcbiAgICAgICAgcC51ID0gbnVsbDtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIHApO1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlKHAsIHAueCwgcC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcGxhbmV0XG4gICAgICovXG4gICAgbW92ZShwLCBueCwgbnkpIHtcbiAgICAgICAgdGhpcy5ncmlkLm1vdmUocCwgcC54LCBwLnksIG54LCBueSk7XG4gICAgICAgIHAueCA9IG54OyBwLnkgPSBueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZ2dyZWdhdGUgdHdvIHBsYW5ldHNcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUocDEsIHAyKSB7XG4gICAgICAgIGNvbnN0IG0gPSBwMS5tICsgcDIubTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlUGxhbmV0KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ5ICogcDEubSArIHAyLnZ5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHAxKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDIpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5LjxQbGFuZXQ+fVxuICAgICAqL1xuICAgIGZpbmRDb2xsaXNpb24oY29sbGlzaW9uRmFjdG9yID0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICAgICAgY29uc3QgcGkgPSB0aGlzLnBzW2ldO1xuICAgICAgICAgICAgY29uc3QgdyA9IDIqcGkucigpO1xuICAgICAgICAgICAgY29uc3QgY2FuZCA9IHRoaXMuZ3JpZC5nZXQocGkueC13LCBwaS55LXcsIHBpLngrdywgcGkueSt3KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2FuZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IHBqID0gY2FuZFtqXTtcblxuICAgICAgICAgICAgICAgIGlmKHBpID09IHBqKSBjb250aW51ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMSA9IHBpLmQocGopO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQyID0gKHBpLnIoKSArIHBqLnIoKSkgKiBjb2xsaXNpb25GYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcGksIHBqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICovXG4gICAgc3RlcChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBsZXQgaTtcblxuICAgICAgICAvL29ic2VydmF0aW9uXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5wc1tpXS5vYnNlcnZlKCk7XG5cbiAgICAgICAgLy9hY3Rpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLnBzW2ldLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICAvL2ZpbmQgZmlyc3QgY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIGxldCBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSlcbiAgICAgICAgICAgIC8vZmluZCBuZXh0IGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5cbi8vVE9ETyBhZGQgcmVzdGFydC9iaWcgYmFuZyBidXR0b25cbi8qIEJ1dHRvbiByZXN0YXJ0ID0gbmV3IEJ1dHRvbihcIlJlY29tbWVuY2VyIVwiKTtcbiByZXN0YXJ0LmFkZENsaWNrSGFuZGxlcihuZXcgQ2xpY2tIYW5kbGVyKCkge1xuIEBPdmVycmlkZVxuIHB1YmxpYyB2b2lkIG9uQ2xpY2soQ2xpY2tFdmVudCBldmVudCkge1xuIHUuZmlsbCgpO1xuIGMuZ2V0Q29udGV4dDJkKCkuc2V0RmlsbFN0eWxlKENzc0NvbG9yLm1ha2UoMCwwLDApKTtcbiBjLmdldENvbnRleHQyZCgpLmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuIH1cbiB9KTtcbiBSb290UGFuZWwuZ2V0KFwiYlwiKS5hZGQocmVzdGFydCk7Ki9cblxuY2xhc3MgUGxhbmV0U2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2N0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgICAgICAgICB0aGlzLmMyZC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wNSlcIjtcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuICAgIFxuICAgICAgICAgICAgLy9kaXNwbGF5IHBsYW5ldHNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGgudW5pLnBzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoLnVuaS5wc1tqXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcC5tIC8gdGgudW5pLm0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmMyZC5maWxsU3R5bGUgPSBcInJnYigyNTUsMjU1LFwiICsgTWF0aC5mbG9vcigyNTUgKiAoMSAtIHQpKSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYzJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYzJkLmFyYyh0aGlzLmdlb1RvUGl4WChwLngpLCB0aGlzLmdlb1RvUGl4WShwLnkpLCBwLnIoKSAvIHRoaXMucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICB0aGlzLmMyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmMyZC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvL2xhYmVsXG4gICAgICAgICAgICB0aGlzLmMyZC5maWxsU3R5bGUgPSBcInJnYigyMDAsMjAwLDIwMClcIjtcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICB0aGlzLmMyZC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxUZXh0KHRoLnVuaS5wcy5sZW5ndGggKyBcIiBwbGFuZXRzXCIsIDIsIDEwKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpXG4gICAgfVxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKG5iID0gMTAwMCwgbWkgPSAwLjUsIG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy51bmkuY3JlYXRlUGxhbmV0KG1pLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpLCBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKSwgc3BlZWQgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vXG4gICAgaW5pdEJpZ0JhbmcobmIgPSAxMDAwLCBtaSA9IDEsIG1pblNwZWVkID0gMC4zNSwgbWF4U3BlZWQgPSAwLjcsIHJhZCA9IDEwMCkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnVuaS5wcyA9IFtdO1xuICAgICAgICBjb25zdCBjeCA9IHRoaXMudyAqIDAuNSwgY3kgPSB0aGlzLmggKiAwLjU7XG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDIqTWF0aC5QSSAvIG5iO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpICogYW5nbGVTdGVwO1xuXG4gICAgICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBkID0gcmFkICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjeCArIGQgKiBNYXRoLmNvcyhhKSwgeSA9IGN5ICsgZCAqIE1hdGguc2luKGEpO1xuXG4gICAgICAgICAgICAvL3NwZWVkXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IGFTID0gYSArIDIqKE1hdGgucmFuZG9tKCktMC41KSAqIDIqTWF0aC5QSSAvIDM7XG4gICAgICAgICAgICBjb25zdCBzeCA9IHNwZWVkICogTWF0aC5jb3MoYVMpLCBzeSA9IHNwZWVkICogTWF0aC5zaW4oYVMpO1xuXG4gICAgICAgICAgICB0aGlzLnVuaS5jcmVhdGVQbGFuZXQobWksIHgsIHksIHN4LCBzeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9zdGFydFxuICAgIHN0YXJ0KGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCBjb2xsaXNpb25GYWN0b3IgPSAwLjgsIHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC51bmkuc3RlcChib3VuY2UsIHZtYXgsIGNvbGxpc2lvbkZhY3RvciwgdGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgfVxuXG4gICAgLy9zdG9wXG4gICAgc3RvcCgpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHBsYW5ldHMgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUGxhbmV0U2ltdWxhdGlvbihvcHRzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==