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

/***/ "./src/fish/Sardin.js":
/*!****************************!*\
  !*** ./src/fish/Sardin.js ***!
  \****************************/
/*! exports provided: Sardin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sardin", function() { return Sardin; });
class Sardin {

    /*
        Sea sea;
        x,y position, in pix
        vx,vy speed, in pix per ms
        v, va speed angle (in -Pi,Pi) and norm
        ax, ay acceleration, in pix per s2
        */
    constructor(sea, x = sea.w * Math.random(), y = sea.h * Math.random(), vx = undefined, vy = undefined) {

        this.sea = sea;

        //position
        this.x = x < 0 ? 0 : x > sea.w ? sea.w : x
        this.y = y < 0 ? 0 : y > sea.h ? sea.h : y


        //speed
        if (!vx && !vy) {
            this.va = Math.random() * 2 * Math.PI - Math.PI;
            this.v = Math.random() * this.sea.V_MAX;
            this.vx = this.v * Math.cos(this.va);
            this.vy = this.v * Math.sin(this.va);
        } else {
            this.vx = vx;
            this.vy = vy;
            this.v = Math.hypot(vx, vy);
            this.va = Math.atan2(vy, vx);
        }

        //acceleration
        this.ax = 0
        this.ay = 0

        //add to spatial index
        this.sea.grid.add(this, this.x, this.y)

        //list of sardins in vision field
        this.obs = []
        //list of sardins in collision field
        this.col = []

    }



    /** */
    observe() {

        //initialise lists
        this.obs = [];
        this.col = [];

        //get sardins around using spatial index
        const ss = this.sea.grid.get(this.x - this.sea.D_OBS, this.y - this.sea.D_OBS, this.x + this.sea.D_OBS, this.y + this.sea.D_OBS);

        //get sardins in observation and collision fields
        for (let s of ss) {
            if (s == this) continue;
            if (this.d(s) <= this.sea.D_COL) this.col.push(s);
            if (this.d(s) <= this.sea.D_OBS) {
                //check angle
                let da = Math.atan2(s.y - this.y, s.x - this.x) - this.va;
                if (da > Math.PI) da -= 2 * Math.PI;
                else if (da <= -Math.PI) da += 2 * Math.PI;
                da = Math.abs(da);
                if (da > this.sea.A_OBS * 0.5) continue;
                this.obs.push(s);
            }
        }

        //initialise acceleration
        this.ax = 0; this.ay = 0;

        //collision: repulsion
        for (let s of this.col) {
            const d = this.d(s);
            const a = 1.0 * (1 / (d * d) - 1 / (this.sea.D_COL * this.sea.D_COL));
            this.ax += a * (this.x - s.x) / d;
            this.ay += a * (this.y - s.y) / d;
        }

        // toward v target
        const dv = (this.sea.V_TARGET - this.v) * 0.01;
        this.ax += dv * this.vx / this.v;
        this.ay += dv * this.vy / this.v;

        //toward the observed mean position
        /*if(obs.size()>1){
            double xn=0,yn=0;
            for(Sardin s:obs){
                xn+=s.x;
                yn+=s.y;
            }
            xn=xn/obs.size();
            yn=yn/obs.size();
            double d=Math.hypot(xn-x,yn-y);
            ax+=-0.1*(x-xn)/d;
            ay+=-0.1*(y-yn)/d;
        }*/

        //toward the observed speed
        const t = 0.9;
        if (this.obs.length > 1) {
            let dvx = 0, dvy = 0;
            for (let s of this.obs) {
                dvx += s.vx;
                dvy += s.vy;
            }
            dvx = (t - 1) * this.vx + (1 - t) * dvx / this.obs.length;
            dvy = (t - 1) * this.vy + (1 - t) * dvy / this.obs.length;

            const a = 0.1;
            this.ax += a * dvx;
            this.ay += a * dvy;
        }

        //avoid shark
        if (this.sea.shark != null) {
            const s = this.sea.shark;
            const d = Math.hypot((s.x - this.x), (s.y - this.y));
            if (d <= this.sea.D_OBS) {
                const a = 5.0 * (1 / (d * d) - 1 / (this.sea.D_OBS * this.sea.D_OBS));
                this.ax += a * (this.x - s.x) / d;
                this.ay += a * (this.y - s.y) / d;
            }
        }

    }



    /** */
    move(timeStepMs = 10) {
        this.sea.grid.remove(this, this.x, this.y);

        //compute new speed
        this.vx += this.ax * timeStepMs + (1 - 2 * Math.random()) * 0.02;
        this.vy += this.ay * timeStepMs + (1 - 2 * Math.random()) * 0.02;
        this.v = Math.hypot(this.vx, this.vy);
        this.va = Math.atan2(this.vy, this.vx);
        if (this.v > this.sea.V_MAX) {
            this.v = this.sea.V_MAX;
            this.vx = this.sea.V_MAX * Math.cos(this.va);
            this.vy = this.sea.V_MAX * Math.sin(this.va);
        }

        //compute new position
        this.x += this.vx * timeStepMs;
        this.y += this.vy * timeStepMs;

        //limit
        if (this.x < 0) this.x = this.sea.w;
        if (this.y < 0) this.y = this.sea.h;
        if (this.x > this.sea.w) this.x = 0;
        if (this.y > this.sea.h) this.y = 0;

        //TODO use move?
        this.sea.grid.add(this, this.x, this.y);
    }


    /** Distance to other sardin */
    d(s) {
        return Math.hypot((s.x - this.x), (s.y - this.y));
    }

}


/***/ }),

/***/ "./src/fish/Sea.js":
/*!*************************!*\
  !*** ./src/fish/Sea.js ***!
  \*************************/
/*! exports provided: Sea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea", function() { return Sea; });
/* harmony import */ var _base_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/grid */ "./src/base/grid.js");
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");



class Sea {

    constructor(w, h) {

        //observation
        this.D_OBS = 50
        this.A_OBS = 200 * Math.PI / 180

        //collision
        this.D_COL = 10

        //speed
        this.V_TARGET = 0.3
        this.V_MAX = 0.6

        //shark
        this.D_SHARK_EAT = 12
        this.EATEN_SARDIN_NB = 0

        this.w = w;
        this.h = h;
        this.grid = new _base_grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](w, h, this.D_OBS);

        this.fish = []

        this.shark = null;
        this.killed = [];
    }


    step(timeStepMs = 10) {

        //observe
        for (let sa of this.fish)
            sa.observe();

        //move
        for (let sa of this.fish)
            sa.move();

        //shark eat fish
        this.sharkEat();
    }



    sharkEat() {
        if (this.shark == null) return;

        this.killed = [];

        const x = this.shark.x, y = this.shark.y;
        const ss = this.grid.get(x - this.D_SHARK_EAT, y - this.D_SHARK_EAT, x + this.D_SHARK_EAT, y + this.D_SHARK_EAT);
        for (let s of ss) {
            const d = Math.hypot((x - s.x), (y - s.y));
            if (d > this.D_SHARK_EAT) continue;
            this.killed.push(s);
            Object(_base_lib__WEBPACK_IMPORTED_MODULE_1__["removeFromArray"])(this.fish, s)
            this.grid.remove(s, s.x, s.y);
        }
        this.EATEN_SARDIN_NB += this.killed.length;
        //eatenFishNb.setText("Eaten fish: " + EATEN_SARDIN_NB);
        return;
    }

}


/***/ }),

/***/ "./src/fish/index.js":
/*!***************************!*\
  !*** ./src/fish/index.js ***!
  \***************************/
/*! exports provided: fish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fish", function() { return fish; });
/* harmony import */ var _Sea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sea */ "./src/fish/Sea.js");
/* harmony import */ var _Sardin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sardin */ "./src/fish/Sardin.js");
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");




class FishSimulation {

    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        //TODO
        //add fish button
        //add eaten fish nb label
        //add visibility checkboxes
        //pc.add(s.fishView);
        //pc.add(s.fishHalo);


        /** @type {CanvasPlus} */
        this.cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_2__["CanvasPlus"](opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        this.fishView = false
        this.fishHalo = false

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d
            const s = th.sea

            //clear
            c2.fillStyle = "rgba(120,120,255,0.6)";
            c2.fillRect(0, 0, th.w, th.h);

            //display sardins
            c2.lineWidth = 2 / this.ps
            const sardinLength = 7
            for (let sa of s.fish) {
                const c = Math.floor(255 * Math.abs(sa.va) / Math.PI);
                c2.strokeStyle = "rgb(255, 255, " + c + ")"
                const a = sardinLength / sa.v;
                const dx = a * sa.vx * 0.5;
                const dy = a * sa.vy * 0.5;

                c2.beginPath();
                c2.moveTo(this.geoToPixX(sa.x - dx), this.geoToPixY(sa.y - dy));
                c2.lineTo(this.geoToPixX(sa.x + dx), this.geoToPixY(sa.y + dy));
                c2.closePath();
                c2.stroke();
            }

            //display halos
            //vision
            if (th.fishView) {
                c2.fillStyle = "rgba(255,255,255,0.3)";
                c2.lineWidth = 1;
                for (let sa of s.fish) {
                    c2.beginPath();
                    c2.moveTo(this.geoToPixX(sa.x), this.geoToPixY(sa.y));
                    //TODO check angle
                    c2.arc(this.geoToPixX(sa.x), this.geoToPixY(sa.y), s.D_OBS / this.ps, sa.va - s.A_OBS * 0.5, sa.va + s.A_OBS * 0.5);
                    c2.closePath();
                    c2.fill();
                }
                c2.strokeStyle = "rgb(255,0,255)";
                c2.lineWidth = 0.5;
                for (let sa of s.fish) {
                    for (let sa2 of sa.obs) {
                        c2.beginPath();
                        c2.moveTo(this.geoToPixX(sa.x), this.geoToPixY(sa.y));
                        c2.lineTo(this.geoToPixX(sa2.x), this.geoToPixY(sa2.y));
                        c2.closePath();
                        c2.stroke();
                    }
                }
            }
            //collision
            if (th.fishHalo) {
                c2.strokeStyle = "red";
                c2.lineWidth = 1;
                for (let sa of s.fish) {
                    c2.beginPath();
                    c2.arc(this.geoToPixX(sa.x), this.geoToPixY(sa.y), s.D_COL * 0.5 / this.ps, 0, 2 * Math.PI);
                    c2.closePath();
                    c2.stroke();
                }
            }

            //display shark
            if (s.shark != null) {

                c2.lineWidth = 4 / this.ps
                c2.strokeStyle = "black"

                const sharkLength = 12 / this.ps
                const dx = sharkLength * Math.cos(s.shark.angle);
                const dy = sharkLength * Math.sin(s.shark.angle);

                c2.beginPath();
                c2.moveTo(this.geoToPixX(s.shark.x), this.geoToPixY(s.shark.y));
                c2.lineTo(this.geoToPixX(s.shark.x) - dx, this.geoToPixY(s.shark.y) - dy);
                c2.closePath();
                c2.stroke();
            }

            //display blood spot
            c2.fillStyle = "red";
            c2.lineWidth = 1
            for (let sa of s.killed) {
                c2.beginPath();
                c2.moveTo(this.geoToPixX(sa.x), this.geoToPixY(sa.y));
                c2.arc(this.geoToPixX(sa.x), this.geoToPixY(sa.y), 4, 0, 2 * Math.PI);
                c2.closePath();
                c2.fill();
            }


            //frame
            c2.strokeStyle = "darkgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0) - 3, this.geoToPixY(this.h) - 3, th.w / this.ps + 3, th.h / this.ps + 3);
            c2.stroke();
        };


        this.cplus.canvas.addEventListener("mouseover", e => {
            th.sea.shark = { x: th.cplus.pixToGeoX(e.offsetX), y: th.cplus.pixToGeoY(e.offsetY), angle: 0 }
        });
        this.cplus.canvas.addEventListener("mousemove", e => {
            const xG = th.cplus.pixToGeoX(e.offsetX);
            const yG = th.cplus.pixToGeoY(e.offsetY);
            const angle = Math.atan2(yG - th.sea.shark.y, xG - th.sea.shark.x);
            //TODO check angle
            //console.log(angle)
            th.sea.shark = { x: xG, y: yG, angle: angle }
        });
        this.cplus.canvas.addEventListener("mouseout", e => {
            th.sea.shark = null;
        });


        /** @type {Sea} */
        this.sea = new _Sea__WEBPACK_IMPORTED_MODULE_0__["Sea"](this.w, this.h)

    }


    initRandom(nb = 1500) {
        for (let i = 0; i < nb; i++)
            this.sea.fish.push(new _Sardin__WEBPACK_IMPORTED_MODULE_1__["Sardin"](this.sea));
        return this
    }


    start(timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.sea.step(timeStepMs);
            t.cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();

    }

}

const fish = function (opts) {
    return new FishSimulation(opts)
}


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

            //clear
            this.c2d.clearRect(0, 0, th.w, th.h);
            this.c2d.fillStyle = "#0000FF";

            //draw cells
            for (let i = 0; i < th.uni.population.length; i++) {
                /** @type {Cell} */
                const cell = th.uni.population[i];
                //ctx.beginPath();
                //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
                //ctx.fill();
                this.c2d.fillRect(this.geoToPixX(cell.x), this.geoToPixY(cell.y), 1 / this.ps, 1 / this.ps);
            }

            //frame
            this.c2d.strokeStyle = "lightgray";
            this.c2d.beginPath();
            this.c2d.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            this.c2d.stroke();
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
/*! exports provided: planets, gameOfLife, fish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _planets_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets/index */ "./src/planets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return _planets_index__WEBPACK_IMPORTED_MODULE_0__["planets"]; });

/* harmony import */ var _gol_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gol/index */ "./src/gol/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return _gol_index__WEBPACK_IMPORTED_MODULE_1__["gameOfLife"]; });

/* harmony import */ var _fish_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fish/index */ "./src/fish/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fish", function() { return _fish_index__WEBPACK_IMPORTED_MODULE_2__["fish"]; });






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

            //clear, with transparency
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

            //frame
            this.c2d.strokeStyle = "darkgray";
            this.c2d.beginPath();
            this.c2d.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            this.c2d.stroke();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvbGliLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NhcmRpbi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9TZWEuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FB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QTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1Qix1QkFBdUIsa0RBQVE7QUFDL0I7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ1A7QUFDQSIsImZpbGUiOiJ2ZWN0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGNsYXNzIENhbnZhc1BsdXMge1xuXG4gICAgLy9jaGVjazpcbiAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9rYW5nYXgvZmFicmljLmpzL1xuICAgIC8vaHR0cDovL2tpbmV0aWNqcy5jb20vXG4gICAgLy9odHRwOi8vd3d3LmNyZWF0ZWpzLmNvbS9Eb2NzL0Vhc2VsSlMvY2xhc3Nlcy9Nb3VzZUV2ZW50Lmh0bWxcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGl2SWRcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkaXZJZCA9IFwidmFkaXZcIiwgY2FudmFzSWQgPSBcInZhY2FudmFzXCIsIGNlbnRlciA9IHVuZGVmaW5lZCwgcHMgPSAxKSB7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAvL21ha2UgY2FudmFzIHdpdGhpbiBkaXZcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5pZCA9IGNhbnZhc0lkO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudztcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXG5cbiAgICAgICAgLyoqQHR5cGUge09iamVjdH0gKi9cbiAgICAgICAgdGhpcy5jMmQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy8gZ2VvIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXIgfHwgeyB4OiB0aGlzLncgKiAwLjUsIHk6IHRoaXMuaCAqIDAuNSB9XG4gICAgICAgIC8vIHpvb20gZmFjdG9yOiBwaXhlbCBzaXplLCBpbiBtL3BpeFxuICAgICAgICB0aGlzLnBzID0gcHM7XG5cbiAgICAgICAgLy9tb3VzZSBjbGljayAtIHBhblxuICAgICAgICBsZXQgbXBhbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7IG1wYW4gPSB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKG1wYW4pIHRoaXMucGFuKC1lLm1vdmVtZW50WCAqIHRoaXMucHMsIGUubW92ZW1lbnRZICogdGhpcy5wcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGUgPT4geyBtcGFuID0gZmFsc2UgfSk7XG5cbiAgICAgICAgLy9tb3VzZSB3aGVlbCAtIHpvb21cbiAgICAgICAgY29uc3QgZiA9IDEuNVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmXyA9IGUuZGVsdGFZID4gMCA/IGYgOiAxIC8gZjtcbiAgICAgICAgICAgIHRoaXMuem9vbShmXywgdGhpcy5waXhUb0dlb1goZS5vZmZzZXRYKSwgdGhpcy5waXhUb0dlb1koZS5vZmZzZXRZKSlcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiogQHJldHVybiB7Q2FuUGwuQ2FudmFzUGx1c30gKi9cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcnJpZGUgcmVkcmF3IG1ldGhvZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9jb252ZXJzaW9uIGZ1bmN0aW9uc1xuICAgIGdlb1RvUGl4WCh4R2VvKSB7IHJldHVybiAoeEdlbyAtIHRoaXMuY2VudGVyLngpIC8gdGhpcy5wcyArIHRoaXMudyAqIDAuNTsgfVxuICAgIGdlb1RvUGl4WSh5R2VvKSB7IHJldHVybiAtKHlHZW8gLSB0aGlzLmNlbnRlci55KSAvIHRoaXMucHMgKyB0aGlzLmggKiAwLjU7IH1cbiAgICBwaXhUb0dlb1goeCkgeyByZXR1cm4gKHggLSB0aGlzLncgKiAwLjUpICogdGhpcy5wcyArIHRoaXMuY2VudGVyLng7IH1cbiAgICBwaXhUb0dlb1koeSkgeyByZXR1cm4gLSh5IC0gdGhpcy5oICogMC41KSAqIHRoaXMucHMgKyB0aGlzLmNlbnRlci55OyB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICovXG4gICAgcGFuKGR4R2VvLCBkeUdlbykge1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9IGR4R2VvO1xuICAgICAgICB0aGlzLmNlbnRlci55ICs9IGR5R2VvO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZlxuICAgICAqL1xuICAgIHpvb20oZiA9IDEsIHhHZW8gPSB0aGlzLmNlbnRlci54LCB5R2VvID0gdGhpcy5jZW50ZXIueSkge1xuICAgICAgICB0aGlzLnBzICo9IGY7XG4gICAgICAgIHRoaXMuY2VudGVyLnggKz0gKHhHZW8tdGhpcy5jZW50ZXIueCkqKDEtZilcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSAoeUdlby10aGlzLmNlbnRlci55KSooMS1mKVxuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgR3JpZCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHRlbXBsYXRlIFRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIHJlcykge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnJlcyA9IHJlcztcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5sZW5ndGhYID0gTWF0aC5mbG9vcih3IC8gcmVzICsgMSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubGVuZ3RoWSA9IE1hdGguZmxvb3IoaCAvIHJlcyArIDEpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFycmF5LjxBcnJheS48VD4+Pn0gKi9cbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGhYOyBpKyspIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFycmF5LjxUPj59ICovXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoWTsgaisrKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48VD59ICovXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tpXVtqXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4bWF4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHltYXhcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48VD59XG4gICAgICovXG4gICAgZ2V0KHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICAgICAgY29uc3QgYXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IoeG1pbiAvIHRoaXMucmVzKTsgaSA8IE1hdGguZmxvb3IoeG1heCAvIHRoaXMucmVzICsgMSk7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5sZW5ndGhYKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IE1hdGguZmxvb3IoeW1pbiAvIHRoaXMucmVzKTsgaiA8IE1hdGguZmxvb3IoeW1heCAvIHRoaXMucmVzICsgMSk7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqIDwgMCB8fCBqID49IHRoaXMubGVuZ3RoWSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgYXMucHVzaC5hcHBseShhcywgdGhpcy5jZWxsc1tpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBhZGQob2JqLCB4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW01hdGguZmxvb3IoeCAvIHRoaXMucmVzKV1bTWF0aC5mbG9vcih5IC8gdGhpcy5yZXMpXS5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICovXG4gICAgcmVtb3ZlKG9iaiwgeCwgeSkge1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5jZWxsc1tNYXRoLmZsb29yKHggLyB0aGlzLnJlcyldW01hdGguZmxvb3IoeSAvIHRoaXMucmVzKV0sIG9iaik7XG4gICAgfVxuXG5cbiAgICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEluaVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5SW5pXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhGaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUZpblxuICAgICAqL1xuICAgIG1vdmUob2JqLCB4SW5pLCB5SW5pLCB4RmluLCB5RmluKSB7XG4gICAgICAgIGNvbnN0IGlJbmkgPSBNYXRoLmZsb29yKHhJbmkgLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGpJbmkgPSBNYXRoLmZsb29yKHlJbmkgLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGlGaW4gPSBNYXRoLmZsb29yKHhGaW4gLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGpGaW4gPSBNYXRoLmZsb29yKHlGaW4gLyB0aGlzLnJlcyk7XG5cbiAgICAgICAgLy9ubyBjaGFuZ2UsIHN0aWxsIHNhbWUgY2VsbFxuICAgICAgICBpZihpSW5pPT1pRmluICYmIGpJbmk9PWpGaW4pIHJldHVybjtcblxuICAgICAgICAvL2NoYW5nZSBjZWxsXG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLmNlbGxzW2lJbmldW2pJbmldLCBvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpRmluXVtqRmluXS5wdXNoKG9iaik7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge09iamVjdC48PywgVD59IG9ialxuICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICovXG5leHBvcnQgY29uc3Qgb2JqVG9BcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5LjxUPn0gYXJyXG4gKiBAcGFyYW0ge1R9IG9ialxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFyciwgb2JqKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2Yob2JqKTtcbiAgICBpZiAoaW5kZXggPiAtMSlcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gcmVtb3ZlIGVsZW1lbnQgbm90IHByZXNlbnQgaW4gYXJyYXkuXCIpO1xufTtcbiIsImV4cG9ydCBjbGFzcyBTYXJkaW4ge1xuXG4gICAgLypcbiAgICAgICAgU2VhIHNlYTtcbiAgICAgICAgeCx5IHBvc2l0aW9uLCBpbiBwaXhcbiAgICAgICAgdngsdnkgc3BlZWQsIGluIHBpeCBwZXIgbXNcbiAgICAgICAgdiwgdmEgc3BlZWQgYW5nbGUgKGluIC1QaSxQaSkgYW5kIG5vcm1cbiAgICAgICAgYXgsIGF5IGFjY2VsZXJhdGlvbiwgaW4gcGl4IHBlciBzMlxuICAgICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlYSwgeCA9IHNlYS53ICogTWF0aC5yYW5kb20oKSwgeSA9IHNlYS5oICogTWF0aC5yYW5kb20oKSwgdnggPSB1bmRlZmluZWQsIHZ5ID0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgdGhpcy5zZWEgPSBzZWE7XG5cbiAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICB0aGlzLnggPSB4IDwgMCA/IDAgOiB4ID4gc2VhLncgPyBzZWEudyA6IHhcbiAgICAgICAgdGhpcy55ID0geSA8IDAgPyAwIDogeSA+IHNlYS5oID8gc2VhLmggOiB5XG5cblxuICAgICAgICAvL3NwZWVkXG4gICAgICAgIGlmICghdnggJiYgIXZ5KSB7XG4gICAgICAgICAgICB0aGlzLnZhID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJIC0gTWF0aC5QSTtcbiAgICAgICAgICAgIHRoaXMudiA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNlYS5WX01BWDtcbiAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnYgKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgICAgIHRoaXMudnkgPSB0aGlzLnYgKiBNYXRoLnNpbih0aGlzLnZhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgICAgIHRoaXMudnkgPSB2eTtcbiAgICAgICAgICAgIHRoaXMudiA9IE1hdGguaHlwb3QodngsIHZ5KTtcbiAgICAgICAgICAgIHRoaXMudmEgPSBNYXRoLmF0YW4yKHZ5LCB2eCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2FjY2VsZXJhdGlvblxuICAgICAgICB0aGlzLmF4ID0gMFxuICAgICAgICB0aGlzLmF5ID0gMFxuXG4gICAgICAgIC8vYWRkIHRvIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpXG5cbiAgICAgICAgLy9saXN0IG9mIHNhcmRpbnMgaW4gdmlzaW9uIGZpZWxkXG4gICAgICAgIHRoaXMub2JzID0gW11cbiAgICAgICAgLy9saXN0IG9mIHNhcmRpbnMgaW4gY29sbGlzaW9uIGZpZWxkXG4gICAgICAgIHRoaXMuY29sID0gW11cblxuICAgIH1cblxuXG5cbiAgICAvKiogKi9cbiAgICBvYnNlcnZlKCkge1xuXG4gICAgICAgIC8vaW5pdGlhbGlzZSBsaXN0c1xuICAgICAgICB0aGlzLm9icyA9IFtdO1xuICAgICAgICB0aGlzLmNvbCA9IFtdO1xuXG4gICAgICAgIC8vZ2V0IHNhcmRpbnMgYXJvdW5kIHVzaW5nIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLnNlYS5ncmlkLmdldCh0aGlzLnggLSB0aGlzLnNlYS5EX09CUywgdGhpcy55IC0gdGhpcy5zZWEuRF9PQlMsIHRoaXMueCArIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnkgKyB0aGlzLnNlYS5EX09CUyk7XG5cbiAgICAgICAgLy9nZXQgc2FyZGlucyBpbiBvYnNlcnZhdGlvbiBhbmQgY29sbGlzaW9uIGZpZWxkc1xuICAgICAgICBmb3IgKGxldCBzIG9mIHNzKSB7XG4gICAgICAgICAgICBpZiAocyA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQocykgPD0gdGhpcy5zZWEuRF9DT0wpIHRoaXMuY29sLnB1c2gocyk7XG4gICAgICAgICAgICBpZiAodGhpcy5kKHMpIDw9IHRoaXMuc2VhLkRfT0JTKSB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBhbmdsZVxuICAgICAgICAgICAgICAgIGxldCBkYSA9IE1hdGguYXRhbjIocy55IC0gdGhpcy55LCBzLnggLSB0aGlzLngpIC0gdGhpcy52YTtcbiAgICAgICAgICAgICAgICBpZiAoZGEgPiBNYXRoLlBJKSBkYSAtPSAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYSA8PSAtTWF0aC5QSSkgZGEgKz0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZGEgPSBNYXRoLmFicyhkYSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gdGhpcy5zZWEuQV9PQlMgKiAwLjUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzLnB1c2gocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2luaXRpYWxpc2UgYWNjZWxlcmF0aW9uXG4gICAgICAgIHRoaXMuYXggPSAwOyB0aGlzLmF5ID0gMDtcblxuICAgICAgICAvL2NvbGxpc2lvbjogcmVwdWxzaW9uXG4gICAgICAgIGZvciAobGV0IHMgb2YgdGhpcy5jb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmQocyk7XG4gICAgICAgICAgICBjb25zdCBhID0gMS4wICogKDEgLyAoZCAqIGQpIC0gMSAvICh0aGlzLnNlYS5EX0NPTCAqIHRoaXMuc2VhLkRfQ09MKSk7XG4gICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiAodGhpcy54IC0gcy54KSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gcy55KSAvIGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b3dhcmQgdiB0YXJnZXRcbiAgICAgICAgY29uc3QgZHYgPSAodGhpcy5zZWEuVl9UQVJHRVQgLSB0aGlzLnYpICogMC4wMTtcbiAgICAgICAgdGhpcy5heCArPSBkdiAqIHRoaXMudnggLyB0aGlzLnY7XG4gICAgICAgIHRoaXMuYXkgKz0gZHYgKiB0aGlzLnZ5IC8gdGhpcy52O1xuXG4gICAgICAgIC8vdG93YXJkIHRoZSBvYnNlcnZlZCBtZWFuIHBvc2l0aW9uXG4gICAgICAgIC8qaWYob2JzLnNpemUoKT4xKXtcbiAgICAgICAgICAgIGRvdWJsZSB4bj0wLHluPTA7XG4gICAgICAgICAgICBmb3IoU2FyZGluIHM6b2JzKXtcbiAgICAgICAgICAgICAgICB4bis9cy54O1xuICAgICAgICAgICAgICAgIHluKz1zLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4bj14bi9vYnMuc2l6ZSgpO1xuICAgICAgICAgICAgeW49eW4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIGRvdWJsZSBkPU1hdGguaHlwb3QoeG4teCx5bi15KTtcbiAgICAgICAgICAgIGF4Kz0tMC4xKih4LXhuKS9kO1xuICAgICAgICAgICAgYXkrPS0wLjEqKHkteW4pL2Q7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIC8vdG93YXJkIHRoZSBvYnNlcnZlZCBzcGVlZFxuICAgICAgICBjb25zdCB0ID0gMC45O1xuICAgICAgICBpZiAodGhpcy5vYnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IGR2eCA9IDAsIGR2eSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICAgICAgZHZ4ICs9IHMudng7XG4gICAgICAgICAgICAgICAgZHZ5ICs9IHMudnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkdnggPSAodCAtIDEpICogdGhpcy52eCArICgxIC0gdCkgKiBkdnggLyB0aGlzLm9icy5sZW5ndGg7XG4gICAgICAgICAgICBkdnkgPSAodCAtIDEpICogdGhpcy52eSArICgxIC0gdCkgKiBkdnkgLyB0aGlzLm9icy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNvbnN0IGEgPSAwLjE7XG4gICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiBkdng7XG4gICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiBkdnk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2F2b2lkIHNoYXJrXG4gICAgICAgIGlmICh0aGlzLnNlYS5zaGFyayAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5zZWEuc2hhcms7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5oeXBvdCgocy54IC0gdGhpcy54KSwgKHMueSAtIHRoaXMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPD0gdGhpcy5zZWEuRF9PQlMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gNS4wICogKDEgLyAoZCAqIGQpIC0gMSAvICh0aGlzLnNlYS5EX09CUyAqIHRoaXMuc2VhLkRfT0JTKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIHMueCkgLyBkO1xuICAgICAgICAgICAgICAgIHRoaXMuYXkgKz0gYSAqICh0aGlzLnkgLSBzLnkpIC8gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIC8qKiAqL1xuICAgIG1vdmUodGltZVN0ZXBNcyA9IDEwKSB7XG4gICAgICAgIHRoaXMuc2VhLmdyaWQucmVtb3ZlKHRoaXMsIHRoaXMueCwgdGhpcy55KTtcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgICAgIHRoaXMudnggKz0gdGhpcy5heCAqIHRpbWVTdGVwTXMgKyAoMSAtIDIgKiBNYXRoLnJhbmRvbSgpKSAqIDAuMDI7XG4gICAgICAgIHRoaXMudnkgKz0gdGhpcy5heSAqIHRpbWVTdGVwTXMgKyAoMSAtIDIgKiBNYXRoLnJhbmRvbSgpKSAqIDAuMDI7XG4gICAgICAgIHRoaXMudiA9IE1hdGguaHlwb3QodGhpcy52eCwgdGhpcy52eSk7XG4gICAgICAgIHRoaXMudmEgPSBNYXRoLmF0YW4yKHRoaXMudnksIHRoaXMudngpO1xuICAgICAgICBpZiAodGhpcy52ID4gdGhpcy5zZWEuVl9NQVgpIHtcbiAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuc2VhLlZfTUFYO1xuICAgICAgICAgICAgdGhpcy52eCA9IHRoaXMuc2VhLlZfTUFYICogTWF0aC5jb3ModGhpcy52YSk7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLnNpbih0aGlzLnZhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9saW1pdFxuICAgICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gdGhpcy5zZWEudztcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IHRoaXMuc2VhLmg7XG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLnNlYS53KSB0aGlzLnggPSAwO1xuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5zZWEuaCkgdGhpcy55ID0gMDtcblxuICAgICAgICAvL1RPRE8gdXNlIG1vdmU/XG4gICAgICAgIHRoaXMuc2VhLmdyaWQuYWRkKHRoaXMsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKiBEaXN0YW5jZSB0byBvdGhlciBzYXJkaW4gKi9cbiAgICBkKHMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguaHlwb3QoKHMueCAtIHRoaXMueCksIChzLnkgLSB0aGlzLnkpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9iYXNlL2dyaWQnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgU2VhIHtcblxuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL29ic2VydmF0aW9uXG4gICAgICAgIHRoaXMuRF9PQlMgPSA1MFxuICAgICAgICB0aGlzLkFfT0JTID0gMjAwICogTWF0aC5QSSAvIDE4MFxuXG4gICAgICAgIC8vY29sbGlzaW9uXG4gICAgICAgIHRoaXMuRF9DT0wgPSAxMFxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgdGhpcy5WX1RBUkdFVCA9IDAuM1xuICAgICAgICB0aGlzLlZfTUFYID0gMC42XG5cbiAgICAgICAgLy9zaGFya1xuICAgICAgICB0aGlzLkRfU0hBUktfRUFUID0gMTJcbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgPSAwXG5cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgdGhpcy5oID0gaDtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgdGhpcy5EX09CUyk7XG5cbiAgICAgICAgdGhpcy5maXNoID0gW11cblxuICAgICAgICB0aGlzLnNoYXJrID0gbnVsbDtcbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cblxuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IHNhIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIHNhLm9ic2VydmUoKTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgc2Egb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgc2EubW92ZSgpO1xuXG4gICAgICAgIC8vc2hhcmsgZWF0IGZpc2hcbiAgICAgICAgdGhpcy5zaGFya0VhdCgpO1xuICAgIH1cblxuXG5cbiAgICBzaGFya0VhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLmdyaWQuZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShzLCBzLngsIHMueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgKz0gdGhpcy5raWxsZWQubGVuZ3RoO1xuICAgICAgICAvL2VhdGVuRmlzaE5iLnNldFRleHQoXCJFYXRlbiBmaXNoOiBcIiArIEVBVEVOX1NBUkRJTl9OQik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFNlYSB9IGZyb20gJy4vU2VhJztcbmltcG9ydCB7IFNhcmRpbiB9IGZyb20gJy4vU2FyZGluJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuXG5jbGFzcyBGaXNoU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2FkZCBmaXNoIGJ1dHRvblxuICAgICAgICAvL2FkZCBlYXRlbiBmaXNoIG5iIGxhYmVsXG4gICAgICAgIC8vYWRkIHZpc2liaWxpdHkgY2hlY2tib3hlc1xuICAgICAgICAvL3BjLmFkZChzLmZpc2hWaWV3KTtcbiAgICAgICAgLy9wYy5hZGQocy5maXNoSGFsbyk7XG5cblxuICAgICAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuICAgICAgICB0aGlzLmZpc2hWaWV3ID0gZmFsc2VcbiAgICAgICAgdGhpcy5maXNoSGFsbyA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aC5zZWFcblxuICAgICAgICAgICAgLy9jbGVhclxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDEyMCwxMjAsMjU1LDAuNilcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2FyZGluc1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMiAvIHRoaXMucHNcbiAgICAgICAgICAgIGNvbnN0IHNhcmRpbkxlbmd0aCA9IDdcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBNYXRoLmZsb29yKDI1NSAqIE1hdGguYWJzKHNhLnZhKSAvIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJyZ2IoMjU1LCAyNTUsIFwiICsgYyArIFwiKVwiXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IHNhcmRpbkxlbmd0aCAvIHNhLnY7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBhICogc2EudnggKiAwLjU7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSBhICogc2EudnkgKiAwLjU7XG5cbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgoc2EueCAtIGR4KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSAtIGR5KSk7XG4gICAgICAgICAgICAgICAgYzIubGluZVRvKHRoaXMuZ2VvVG9QaXhYKHNhLnggKyBkeCksIHRoaXMuZ2VvVG9QaXhZKHNhLnkgKyBkeSkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgaGFsb3NcbiAgICAgICAgICAgIC8vdmlzaW9uXG4gICAgICAgICAgICBpZiAodGguZmlzaFZpZXcpIHtcbiAgICAgICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiO1xuICAgICAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgoc2EueCksIHRoaXMuZ2VvVG9QaXhZKHNhLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPIGNoZWNrIGFuZ2xlXG4gICAgICAgICAgICAgICAgICAgIGMyLmFyYyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSksIHMuRF9PQlMgLyB0aGlzLnBzLCBzYS52YSAtIHMuQV9PQlMgKiAwLjUsIHNhLnZhICsgcy5BX09CUyAqIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjMi5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJyZ2IoMjU1LDAsMjU1KVwiO1xuICAgICAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc2EyIG9mIHNhLm9icykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgoc2EueCksIHRoaXMuZ2VvVG9QaXhZKHNhLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMyLmxpbmVUbyh0aGlzLmdlb1RvUGl4WChzYTIueCksIHRoaXMuZ2VvVG9QaXhZKHNhMi55KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb2xsaXNpb25cbiAgICAgICAgICAgIGlmICh0aC5maXNoSGFsbykge1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBjMi5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaCkge1xuICAgICAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgYzIuYXJjKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSwgcy5EX0NPTCAqIDAuNSAvIHRoaXMucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9kaXNwbGF5IHNoYXJrXG4gICAgICAgICAgICBpZiAocy5zaGFyayAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBjMi5saW5lV2lkdGggPSA0IC8gdGhpcy5wc1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFya0xlbmd0aCA9IDEyIC8gdGhpcy5wc1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gc2hhcmtMZW5ndGggKiBNYXRoLmNvcyhzLnNoYXJrLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHNoYXJrTGVuZ3RoICogTWF0aC5zaW4ocy5zaGFyay5hbmdsZSk7XG5cbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSwgdGhpcy5nZW9Ub1BpeFkocy5zaGFyay55KSk7XG4gICAgICAgICAgICAgICAgYzIubGluZVRvKHRoaXMuZ2VvVG9QaXhYKHMuc2hhcmsueCkgLSBkeCwgdGhpcy5nZW9Ub1BpeFkocy5zaGFyay55KSAtIGR5KTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9kaXNwbGF5IGJsb29kIHNwb3RcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjMi5saW5lV2lkdGggPSAxXG4gICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmtpbGxlZCkge1xuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSkpO1xuICAgICAgICAgICAgICAgIGMyLmFyYyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSksIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5maWxsKCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCkgLSAzLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpIC0gMywgdGgudyAvIHRoaXMucHMgKyAzLCB0aC5oIC8gdGhpcy5wcyArIDMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0geyB4OiB0aC5jcGx1cy5waXhUb0dlb1goZS5vZmZzZXRYKSwgeTogdGguY3BsdXMucGl4VG9HZW9ZKGUub2Zmc2V0WSksIGFuZ2xlOiAwIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4RyA9IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpO1xuICAgICAgICAgICAgY29uc3QgeUcgPSB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5RyAtIHRoLnNlYS5zaGFyay55LCB4RyAtIHRoLnNlYS5zaGFyay54KTtcbiAgICAgICAgICAgIC8vVE9ETyBjaGVjayBhbmdsZVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhbmdsZSlcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IHsgeDogeEcsIHk6IHlHLCBhbmdsZTogYW5nbGUgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0gbnVsbDtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKiogQHR5cGUge1NlYX0gKi9cbiAgICAgICAgdGhpcy5zZWEgPSBuZXcgU2VhKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cbiAgICBpbml0UmFuZG9tKG5iID0gMTUwMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspXG4gICAgICAgICAgICB0aGlzLnNlYS5maXNoLnB1c2gobmV3IFNhcmRpbih0aGlzLnNlYSkpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuXG4gICAgc3RhcnQodGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnNlYS5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBmaXNoID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEZpc2hTaW11bGF0aW9uKG9wdHMpXG59XG4iLCJpbXBvcnQgeyBvYmpUb0FycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge0NlbGx9XG4gICAgICovXG4gICAgYWRkKHgsIHkpIHtcbiAgICAgICAgLy9maW5kIGFnZW50IGF0IGxvY2F0aW9uXG4gICAgICAgIC8qKkB0eXBlIHtzdHJpbmd9Ki9cbiAgICAgICAgY29uc3QgaWQgPSB4ICsgXCJfXCIgKyB5O1xuICAgICAgICBpZiAodGhpcy5wb3B1bGF0aW9uSVtpZF0pIHJldHVybiBudWxsO1xuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAvKipAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgY29uc3QgY2VsbCA9IHsgeDogeCwgeTogeSwgbmI6IDAgfTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goY2VsbCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbklbaWRdID0gY2VsbDtcbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RlcCgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGxldCBpLCBqO1xuICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgIGxldCBjZWxsLCBjZWxsXztcbiAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICBsZXQgc3VyLCBzdXJfO1xuICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgbGV0IGtleTtcblxuICAgICAgICAvL3BvcHVsYXRlIGNlbGwgc3Vycm91bmRpbmdzXG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICBjb25zdCBzdXJJID0ge307XG4gICAgICAgIC8vZ28gdGhyb3VnaCBsaXN0IG9mIGNlbGxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICsxIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHNycyA9IFVuaXZlcnNlLmdldENlbGxTdXJyb3VuZGluZyh0aGlzLnBvcHVsYXRpb25baV0sIHRoaXMpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHNycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHN1ciA9IHNyc1tqXTtcbiAgICAgICAgICAgICAgICBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICAgICAgc3VyXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3VyXykge1xuICAgICAgICAgICAgICAgICAgICBzdXJfLm5iKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyLm5iID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3VySVtrZXldID0gc3VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQjMvUzIzXG4gICAgICAgIC8va2lsbCBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXAgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwSSA9IHt9O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb3B1bGF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsID0gdGhpcy5wb3B1bGF0aW9uW2ldO1xuICAgICAgICAgICAga2V5ID0gY2VsbC54ICsgXCJfXCIgKyBjZWxsLnk7XG4gICAgICAgICAgICBjZWxsXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgIGlmICghY2VsbF8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy9pZiAobmI8MiBvciBuYj4zKSAtPiBraWxsXG4gICAgICAgICAgICBpZiAoY2VsbF8ubmIgPCAyIHx8IGNlbGxfLm5iID4gMykgY29udGludWU7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcC5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXBJW2tleV0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IGNlbGxzVG9LZWVwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0gY2VsbHNUb0tlZXBJO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3Qgc3VycyA9IG9ialRvQXJyYXkoc3VySSk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdXIgPSBzdXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VyLm5iICE9PSAzKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jaGVjayBpZiBhbHJlYWR5IGFsaXZlXG4gICAgICAgICAgICBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtrZXldO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goc3VyKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbklba2V5XSA9IHN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TVNcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwbHVzXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RhcnQobmIsIHRpbWVvdXRNUywgY3BsdXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB1bmkgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgdW5pLnN0ZXAoKTtcbiAgICAgICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iID4gMCAmJiBpKysgPiBuYikgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIHRpbWVvdXRNUyk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NlbGx9IGNlbGxcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1bmlcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48Q2VsbD59XG4gICAgICovXG4gICAgc3RhdGljIGdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB1bmkpIHtcbiAgICAgICAgY29uc3QgeDEgPSBjZWxsLnggPT09IDAgPyB1bmkudyAtIDEgOiBjZWxsLnggLSAxO1xuICAgICAgICBjb25zdCB4MiA9IGNlbGwueCA9PT0gdW5pLncgLSAxID8gMCA6IGNlbGwueCArIDE7XG4gICAgICAgIGNvbnN0IHkxID0gY2VsbC55ID09PSAwID8gdW5pLmggLSAxIDogY2VsbC55IC0gMTtcbiAgICAgICAgY29uc3QgeTIgPSBjZWxsLnkgPT09IHVuaS5oIC0gMSA/IDAgOiBjZWxsLnkgKyAxO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgeyB4OiB4MSwgeTogeTEgfSxcbiAgICAgICAgICAgIHsgeDogeDEsIHk6IGNlbGwueSB9LFxuICAgICAgICAgICAgeyB4OiB4MSwgeTogeTIgfSxcbiAgICAgICAgICAgIHsgeDogY2VsbC54LCB5OiB5MSB9LFxuICAgICAgICAgICAgeyB4OiBjZWxsLngsIHk6IHkyIH0sXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiB5MSB9LFxuICAgICAgICAgICAgeyB4OiB4MiwgeTogY2VsbC55IH0sXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiB5MiB9XG4gICAgICAgIF07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5cbi8vVE9ETyB6b29tL3Bhbiwgd2l0aCBjYW52YXMgdHJhbnNmb3JtOiBiZXR0ZXIgdW5pdmVyc2UgbGltaXRzXG4vL1RPRE8gYnV0dG9ucyAocGxheSwgc3RvcCwgc3BlZWQsIGRyYXcsIHBhbilcbi8vVE9ETyBjaGVjayBjYW52YXMgYW5pbWF0aW9uXG5cblxuY2xhc3MgR29MU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vY2xlYXJcbiAgICAgICAgICAgIHRoaXMuYzJkLmNsZWFyUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxTdHlsZSA9IFwiIzAwMDBGRlwiO1xuXG4gICAgICAgICAgICAvL2RyYXcgY2VsbHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGgudW5pLnBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoLnVuaS5wb3B1bGF0aW9uW2ldO1xuICAgICAgICAgICAgICAgIC8vY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIC8vY3R4LmFyYyhjZWxsLngsY2VsbC55LDEsMCwyKk1hdGguUEkpO1xuICAgICAgICAgICAgICAgIC8vY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmMyZC5maWxsUmVjdCh0aGlzLmdlb1RvUGl4WChjZWxsLngpLCB0aGlzLmdlb1RvUGl4WShjZWxsLnkpLCAxIC8gdGhpcy5wcywgMSAvIHRoaXMucHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICB0aGlzLmMyZC5zdHJva2VTdHlsZSA9IFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICB0aGlzLmMyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuYzJkLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLnBzLCB0aC5oIC8gdGhpcy5wcyk7XG4gICAgICAgICAgICB0aGlzLmMyZC5zdHJva2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVuaSA9IG5ldyBVbml2ZXJzZSh0aGlzLncsIHRoaXMuaCk7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIGluaXRSYW5kb20oZGVuc2l0eSA9IDAuMDUpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgbmIgPSB0aGlzLnVuaS53ICogdGhpcy51bmkuaCAqIGRlbnNpdHk7XG4gICAgICAgIHdoaWxlIChpIDwgbmIpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHRoaXMudW5pLncgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHRoaXMudW5pLmggKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnVuaS5hZGQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoY2VsbCkgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy51bmkuc3RhcnQoLTEsIDAsIHRoaXMuY3BsdXMpO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBjb25zdCBnYW1lT2ZMaWZlID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEdvTFNpbXVsYXRpb24ob3B0cylcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldHMvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ29sL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zpc2gvaW5kZXhcIlxuIiwiZXhwb3J0IGNsYXNzIFBsYW5ldCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdSBUaGUgdW5pdmVyc2UgdGhlIHBsYW5ldCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSBtYXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eCBUaGUgc3BlZWQgeFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eSBUaGUgc3BlZWQgeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHUsIG0sIHgsIHksIHZ4LCB2eSkge1xuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnUgPSB1O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5tID0gbTtcblxuICAgICAgICAvL2NvbXB1dGUgcmFkaXVzXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG5cbiAgICAgICAgLy9zZXQgcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCByID8gciA6IHggPiB1LncgLSByID8gdS53IC0gciA6IHg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgciA/IHIgOiB5ID4gdS5oIC0gciA/IHUuaCAtIHIgOiB5O1xuXG4gICAgICAgIC8vc2V0IHNwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBmb3JjZSwgYmFzZWQgb24gdGhlIGdyYXZpdHkgb2Ygb3RoZXIgcGxhbmV0cy5cbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ4ID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZnkgPSAwO1xuXG4gICAgICAgIC8vY2hlY2sgYWxsIG90aGVyIHBsYW5ldHMgaW4gdGhlIHVuaXZlcnNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51LnBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnUucHNbaV07XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NvbXB1dGUgYW5kIGFkZCBncmF2aXR5IGZvcmNlXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5kKHApO1xuICAgICAgICAgICAgaWYgKGQgPT09IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGQgPSBkICogZCAqIGQ7XG4gICAgICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmZ5ICs9IDAuMDEgKiAocC55IC0gdGhpcy55KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIHRoZSBwbGFuZXQgcC5cbiAgICAgKi9cbiAgICBkKHApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR4ID0gcC54IC0gdGhpcy54O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgcGxhbmV0LCBkZXBlbmRpbmcgb24gaXRzIG1hc3MuXG4gICAgICovXG4gICAgcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMubSAvIE1hdGguUEksIDAuNSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBib3VuY2VcbiAgICAgKi9cbiAgICBjaGFuZ2UoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vY29tcHV0ZSBhY2NlbGVyYXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGF4ID0gdGhpcy5meCAvIHRoaXMubTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGF5ID0gdGhpcy5meSAvIHRoaXMubTtcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgICAgIHRoaXMudnggKz0gYXggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnZ5ICs9IGF5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2NoZWNrIHZtYXhcbiAgICAgICAgaWYgKHZtYXggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5zcXJ0KHRoaXMudnggKiB0aGlzLnZ4ICsgdGhpcy52eSAqIHRoaXMudnkpO1xuICAgICAgICAgICAgaWYgKHYgPiB2bWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IHZtYXggKiB0aGlzLnZ4IC8gdjtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdm1heCAqIHRoaXMudnkgLyB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICBsZXQgbnggPSB0aGlzLnggKyB0aGlzLnZ4ICogdGltZVN0ZXBNcztcbiAgICAgICAgbGV0IG55ID0gdGhpcy55ICsgdGhpcy52eSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9oYW5kbGUgcG9zaXRpb24gbGltaXRcbiAgICAgICAgaWYgKGJvdW5jZSkge1xuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucigpO1xuICAgICAgICAgICAgY29uc3QgZSA9IDE7XG4gICAgICAgICAgICBpZiAobnggPCByKSB7IG54ID0gcjsgdGhpcy52eCA9IC10aGlzLnZ4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55IDwgcikgeyBueSA9IHI7IHRoaXMudnkgPSAtdGhpcy52eSAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53IC0gcikgeyBueCA9IHRoaXMudS53IC0gcjsgdGhpcy52eCA9IC10aGlzLnZ4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmggLSByKSB7IG55ID0gdGhpcy51LmggLSByOyB0aGlzLnZ5ID0gLXRoaXMudnkgKiBlOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobnggPCAwKSB7IG54ID0gdGhpcy51Lnc7IH1cbiAgICAgICAgICAgIGlmIChueSA8IDApIHsgbnkgPSB0aGlzLnUuaDsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncpIHsgbnggPSAwOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCkgeyBueSA9IDA7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbW92ZSBwbGFuZXRcbiAgICAgICAgdGhpcy51Lm1vdmUodGhpcywgbngsIG55KVxuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2Jhc2UvZ3JpZCc7XG5pbXBvcnQgeyBQbGFuZXQgfSBmcm9tICcuL1BsYW5ldCc7XG5cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge251bWJlcn0gd1xuICogQHBhcmFtIHtudW1iZXJ9IGhcbiAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIGdyZXMgPSBNYXRoLm1pbih3LGgpLzEwMC4wKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG5cbiAgICAgICAgLyoqIEB0eXBlIHtHcmlkfSAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh3LCBoLCBncmVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBtYXNzIG9mIHRoZSB1bml2ZXJzZVxuICAgICAqL1xuICAgIG0oKSB7XG4gICAgICAgIGxldCBtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgbSArPSB0aGlzLnBzW2ldLm07XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBsYW5ldFxuICAgICAqL1xuICAgIGNyZWF0ZVBsYW5ldChtLCB4LCB5LCBzeCwgc3kpIHtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQbGFuZXQodGhpcywgbSwgeCwgeSwgc3gsIHN5KTtcbiAgICAgICAgdGhpcy5hZGQocCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcGxhbmV0XG4gICAgICovXG4gICAgYWRkKHApIHtcbiAgICAgICAgcC51ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcy5wdXNoKHApO1xuICAgICAgICB0aGlzLmdyaWQuYWRkKHAsIHAueCwgcC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBwbGFuZXRcbiAgICAgKi9cbiAgICByZW1vdmUocCkge1xuICAgICAgICBwLnUgPSBudWxsO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5wcywgcCk7XG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmUocCwgcC54LCBwLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwbGFuZXRcbiAgICAgKi9cbiAgICBtb3ZlKHAsIG54LCBueSkge1xuICAgICAgICB0aGlzLmdyaWQubW92ZShwLCBwLngsIHAueSwgbngsIG55KTtcbiAgICAgICAgcC54ID0gbng7IHAueSA9IG55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFnZ3JlZ2F0ZSB0d28gcGxhbmV0c1xuICAgICAqL1xuICAgIGFnZ3JlZ2F0ZShwMSwgcDIpIHtcbiAgICAgICAgY29uc3QgbSA9IHAxLm0gKyBwMi5tO1xuICAgICAgICBjb25zdCBwID0gdGhpcy5jcmVhdGVQbGFuZXQoXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgKHAxLnggKiBwMS5tICsgcDIueCAqIHAyLm0pIC8gbSxcbiAgICAgICAgICAgIChwMS55ICogcDEubSArIHAyLnkgKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEudnggKiBwMS5tICsgcDIudnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEudnkgKiBwMS5tICsgcDIudnkgKiBwMi5tKSAvIG1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDEpO1xuICAgICAgICB0aGlzLnJlbW92ZShwMik7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXkuPFBsYW5ldD59XG4gICAgICovXG4gICAgZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICBjb25zdCBwaSA9IHRoaXMucHNbaV07XG4gICAgICAgICAgICBjb25zdCB3ID0gMipwaS5yKCk7XG4gICAgICAgICAgICBjb25zdCBjYW5kID0gdGhpcy5ncmlkLmdldChwaS54LXcsIHBpLnktdywgcGkueCt3LCBwaS55K3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYW5kLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgcGogPSBjYW5kW2pdO1xuXG4gICAgICAgICAgICAgICAgaWYocGkgPT0gcGopIGNvbnRpbnVlO1xuICAgIFxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQxID0gcGkuZChwaik7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgZDIgPSAocGkucigpICsgcGoucigpKSAqIGNvbGxpc2lvbkZhY3RvcjtcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwaSwgcGpdO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBzdGVwKGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCBjb2xsaXNpb25GYWN0b3IgPSAxLCB0aW1lU3RlcE1zID0gMTApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGxldCBpO1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLnBzW2ldLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMucHNbaV0uY2hhbmdlKGJvdW5jZSwgdm1heCwgdGltZVN0ZXBNcyk7XG5cbiAgICAgICAgLy9jb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAgICAgIC8vZmluZCBmaXJzdCBjb2xsaXNpb25cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgbGV0IHBhaXIgPSB0aGlzLmZpbmRDb2xsaXNpb24oY29sbGlzaW9uRmFjdG9yKTtcbiAgICAgICAgd2hpbGUgKHBhaXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vYWdncmVnYXRlXG4gICAgICAgICAgICB0aGlzLmFnZ3JlZ2F0ZShwYWlyWzBdLCBwYWlyWzFdKVxuICAgICAgICAgICAgLy9maW5kIG5leHQgY29sbGlzaW9uXG4gICAgICAgICAgICBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcblxuLy9UT0RPIGFkZCByZXN0YXJ0L2JpZyBiYW5nIGJ1dHRvblxuLyogQnV0dG9uIHJlc3RhcnQgPSBuZXcgQnV0dG9uKFwiUmVjb21tZW5jZXIhXCIpO1xuIHJlc3RhcnQuYWRkQ2xpY2tIYW5kbGVyKG5ldyBDbGlja0hhbmRsZXIoKSB7XG4gQE92ZXJyaWRlXG4gcHVibGljIHZvaWQgb25DbGljayhDbGlja0V2ZW50IGV2ZW50KSB7XG4gdS5maWxsKCk7XG4gYy5nZXRDb250ZXh0MmQoKS5zZXRGaWxsU3R5bGUoQ3NzQ29sb3IubWFrZSgwLDAsMCkpO1xuIGMuZ2V0Q29udGV4dDJkKCkuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG4gfVxuIH0pO1xuIFJvb3RQYW5lbC5nZXQoXCJiXCIpLmFkZChyZXN0YXJ0KTsqL1xuXG5jbGFzcyBQbGFuZXRTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy9jbGVhciwgd2l0aCB0cmFuc3BhcmVuY3lcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjA1KVwiO1xuICAgICAgICAgICAgdGhpcy5jMmQuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG4gICAgXG4gICAgICAgICAgICAvL2Rpc3BsYXkgcGxhbmV0c1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aC51bmkucHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGgudW5pLnBzW2pdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBwLm0gLyB0aC51bmkubSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxTdHlsZSA9IFwicmdiKDI1NSwyNTUsXCIgKyBNYXRoLmZsb29yKDI1NSAqICgxIC0gdCkpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jMmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jMmQuYXJjKHRoaXMuZ2VvVG9QaXhYKHAueCksIHRoaXMuZ2VvVG9QaXhZKHAueSksIHAucigpIC8gdGhpcy5wcywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYzJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYzJkLmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vbGFiZWxcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxTdHlsZSA9IFwicmdiKDIwMCwyMDAsMjAwKVwiO1xuICAgICAgICAgICAgdGhpcy5jMmQuZmlsbFJlY3QoMCwgMCwgNjUsIDEzKTtcbiAgICAgICAgICAgIHRoaXMuYzJkLmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jMmQuZmlsbFRleHQodGgudW5pLnBzLmxlbmd0aCArIFwiIHBsYW5ldHNcIiwgMiwgMTApO1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICB0aGlzLmMyZC5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIHRoaXMuYzJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jMmQucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIHRoaXMuYzJkLnN0cm9rZSgpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnVuaSA9IG5ldyBVbml2ZXJzZSh0aGlzLncsIHRoaXMuaClcbiAgICB9XG5cbiAgICAvL1xuICAgIGluaXRSYW5kb20obmIgPSAxMDAwLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnVuaS5wcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgICAgICB0aGlzLnVuaS5jcmVhdGVQbGFuZXQobWksIHRoaXMudyAqIE1hdGgucmFuZG9tKCksIHRoaXMuaCAqIE1hdGgucmFuZG9tKCksIHNwZWVkICogTWF0aC5jb3MoYW5nbGUpLCBzcGVlZCAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9cbiAgICBpbml0QmlnQmFuZyhuYiA9IDEwMDAsIG1pID0gMSwgbWluU3BlZWQgPSAwLjM1LCBtYXhTcGVlZCA9IDAuNywgcmFkID0gMTAwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIGNvbnN0IGN4ID0gdGhpcy53ICogMC41LCBjeSA9IHRoaXMuaCAqIDAuNTtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMipNYXRoLlBJIC8gbmI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYSA9IGkgKiBhbmdsZVN0ZXA7XG5cbiAgICAgICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IGQgPSByYWQgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGN4ICsgZCAqIE1hdGguY29zKGEpLCB5ID0gY3kgKyBkICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIC8vc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgY29uc3QgYVMgPSBhICsgMiooTWF0aC5yYW5kb20oKS0wLjUpICogMipNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gc3BlZWQgKiBNYXRoLmNvcyhhUyksIHN5ID0gc3BlZWQgKiBNYXRoLnNpbihhUyk7XG5cbiAgICAgICAgICAgIHRoaXMudW5pLmNyZWF0ZVBsYW5ldChtaSwgeCwgeSwgc3gsIHN5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3N0YXJ0XG4gICAgc3RhcnQoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIGNvbGxpc2lvbkZhY3RvciA9IDAuOCwgdGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnVuaS5zdGVwKGJvdW5jZSwgdm1heCwgY29sbGlzaW9uRmFjdG9yLCB0aW1lU3RlcE1zKTtcbiAgICAgICAgICAgIHQuY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIDApO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICB9XG5cbiAgICAvL3N0b3BcbiAgICBzdG9wKCkge1xuICAgICAgICAvL1RPRE9cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgcGxhbmV0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBQbGFuZXRTaW11bGF0aW9uKG9wdHMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9