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
/*! exports provided: objToArray, removeFromArray, removeFromArrayS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToArray", function() { return objToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArrayS", function() { return removeFromArrayS; });
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

const removeFromArrayS = function (arr, objs) {
    for (let obj of objs)
        removeFromArray(arr, obj)
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
            this.setRandomSpeed()
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


    /** Set random speed */
    setRandomSpeed(minSpeed = 0, maxSpeed = this.sea.V_MAX) {
        this.va = 2 * Math.random() * Math.PI;
        this.v = minSpeed + Math.random() * (maxSpeed - minSpeed);
        this.vx = this.v * Math.cos(this.va);
        this.vy = this.v * Math.sin(this.va);
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


    /** Display a sardin body */
    display(cp, length) {
        const c2 = cp.c2d
        const c = Math.floor(255 * Math.abs(this.va) / Math.PI);
        c2.strokeStyle = "rgb(255, 255, " + c + ")"
        const a = length / this.v;
        const dx = a * this.vx * 0.5;
        const dy = a * this.vy * 0.5;

        c2.beginPath();
        c2.moveTo(cp.geoToPixX(this.x - dx), cp.geoToPixY(this.y - dy));
        c2.lineTo(cp.geoToPixX(this.x + dx), cp.geoToPixY(this.y + dy));
        c2.closePath();
        c2.stroke();
    }

    /** Display sardin vision field */
    displayVisionField(cp, fillStyle, lineWidth) {
        const c2 = cp.c2d
        c2.fillStyle = fillStyle;
        c2.lineWidth = lineWidth;
        c2.beginPath();
        c2.moveTo(cp.geoToPixX(this.x), cp.geoToPixY(this.y));
        //TODO correct that !
        c2.arc(cp.geoToPixX(this.x), cp.geoToPixY(this.y), this.sea.D_OBS / cp.ps,
            Math.PI - this.va + this.sea.A_OBS * 0.5, Math.PI - this.va - this.sea.A_OBS * 0.5);
        c2.closePath();
        c2.fill();
    }

    /** Display sardin vision links */
    displayVisionLinks(cp, strokeStyle, lineWidth) {
        const c2 = cp.c2d
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;
        for (let sa2 of this.obs) {
            c2.beginPath();
            c2.moveTo(cp.geoToPixX(this.x), cp.geoToPixY(this.y));
            c2.lineTo(cp.geoToPixX(sa2.x), cp.geoToPixY(sa2.y));
            c2.closePath();
            c2.stroke();
        }
    }

    /** Display sardin collision field */
    displayCollisionField(cp, strokeStyle, lineWidth) {
        const c2 = cp.c2d
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;
        c2.beginPath();
        c2.arc(cp.geoToPixX(this.x), cp.geoToPixY(this.y), this.sea.D_COL * 0.5 / cp.ps, 0, 2 * Math.PI);
        c2.closePath();
        c2.stroke();
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
/* harmony import */ var _Sardin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sardin */ "./src/fish/Sardin.js");
/* harmony import */ var _base_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/grid */ "./src/base/grid.js");
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");




class Sea {

    constructor(w, h) {

        //TODO should become static attributes of Sardin class

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
        this.grid = new _base_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](w, h, this.D_OBS);

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
            Object(_base_lib__WEBPACK_IMPORTED_MODULE_2__["removeFromArray"])(this.fish, s)
            this.grid.remove(s, s.x, s.y);
        }
        this.EATEN_SARDIN_NB += this.killed.length;
        //eatenFishNb.setText("Eaten fish: " + EATEN_SARDIN_NB);
        return;
    }

    /** Add a number of fish */
    addFish(nb = 1) {
        for (let i = 0; i < nb; i++)
            this.fish.push(new _Sardin__WEBPACK_IMPORTED_MODULE_0__["Sardin"](this));
        return this
    }

    /** Set random speed for all fish */
    setRandomSpeed() {
        for (let f of this.fish)
            f.setRandomSpeed()
        return this
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
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");



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
        //add eaten fish nb label


        /** @type {CanvasPlus} */
        this.cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        this.showFishVisionField = false
        this.showFishVisionLinks = false
        this.showFishCollisionField = false

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d
            const s = th.sea

            //clear
            c2.fillStyle = "rgba(120,120,255,0.6)";
            c2.fillRect(0, 0, th.w, th.h);

            //show vision field
            if (th.showFishVisionField)
                for (let sa of s.fish)
                    sa.displayVisionField(this, "rgba(200,200,200,0.15)", 1)
            //show vision links
            if (th.showFishVisionLinks)
                for (let sa of s.fish)
                    sa.displayVisionLinks(this, "rgba(255,100,100,0.3)", 1)
            //show collision field
            if (th.showFishCollisionField)
                for (let sa of s.fish)
                    sa.displayCollisionField(this, "purple", 1)


            //display sardins
            c2.lineWidth = 2 / this.ps
            const sardinLength = 7
            for (let sa of s.fish)
                sa.display(this, sardinLength)


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
            const angle = Math.atan2(-yG + th.sea.shark.y, xG - th.sea.shark.x);
            th.sea.shark = { x: xG, y: yG, angle: angle }
        });
        this.cplus.canvas.addEventListener("mouseout", e => {
            th.sea.shark = null;
        });


        /** @type {Sea} */
        this.sea = new _Sea__WEBPACK_IMPORTED_MODULE_0__["Sea"](this.w, this.h)

    }


    initRandom(nb = 1500) {
        this.sea.addFish(nb);
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
        return this
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

        //TODO double indexing? by raw and then column ?
        //populate cell surroundings
        /** @type {Object.<string, Cell>}
         * @dict */
        const surI = {};
        //go through list of cells
        for (let cell of this.population) {
            // +1 surrounding cells
            const srs = Universe.getCellSurrounding(cell, this);
            for (let sur of srs) {
                const key = sur.x + "_" + sur.y;
                const sur_ = surI[key];
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
        for (let cell of this.population) {
            const key = cell.x + "_" + cell.y;
            const cell_ = surI[key];
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
        for (let sur of surs) {

            if (sur.nb !== 3) continue;

            //check if already alive
            const key = sur.x + "_" + sur.y;
            let cell = this.populationI[key];
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
            const c2 = this.c2d

            //clear
            c2.fillStyle = "white";
            c2.fillRect(0, 0, th.w, th.h);

            //draw cells
            c2.fillStyle = "blue";
            for (let cell of th.uni.population)
                c2.fillRect(this.geoToPixX(cell.x), this.geoToPixY(cell.y), 1 / this.ps, 1 / this.ps);

            //frame
            c2.strokeStyle = "lightgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            c2.stroke();
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
        return this;
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
/*! exports provided: planets, gameOfLife, fish, preyPredator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _planets_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planets/index */ "./src/planets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return _planets_index__WEBPACK_IMPORTED_MODULE_0__["planets"]; });

/* harmony import */ var _gol_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gol/index */ "./src/gol/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return _gol_index__WEBPACK_IMPORTED_MODULE_1__["gameOfLife"]; });

/* harmony import */ var _fish_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fish/index */ "./src/fish/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fish", function() { return _fish_index__WEBPACK_IMPORTED_MODULE_2__["fish"]; });

/* harmony import */ var _pp_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pp/index */ "./src/pp/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preyPredator", function() { return _pp_index__WEBPACK_IMPORTED_MODULE_3__["preyPredator"]; });







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
        for (let p of this.u.ps) {
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


    /** Set random speed */
    setRandomSpeed(minSpeed = 0, maxSpeed = 0.1) {
        const angle = 2 * Math.random() * Math.PI;
        const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        this.vx = speed * Math.cos(angle)
        this.vy = speed * Math.sin(angle)
    }

    /** Display planet */
    display(cp, fillStyle) {
        const c2 = cp.c2d
        c2.fillStyle = fillStyle;
        c2.beginPath();
        c2.arc(cp.geoToPixX(this.x), cp.geoToPixY(this.y), this.r() / cp.ps, 0, 2 * Math.PI);
        c2.closePath();
        c2.fill();
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
    constructor(w, h, gres = Math.min(w, h) / 100.0) {
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
        for (let p of this.ps)
            m += p.m;
        return m;
    }

    /**
     * Create a planet
     */
    createPlanet(m, x, y, sx = 0, sy = 0) {
        const p = new _Planet__WEBPACK_IMPORTED_MODULE_2__["Planet"](this, m, x, y, sx, sy);
        this.add(p);
        return p;
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
        for (let pi of this.ps) {

            const w = 2 * pi.r();
            const cand = this.grid.get(pi.x - w, pi.y - w, pi.x + w, pi.y + w);

            for (let pj of cand) {

                if (pi == pj) continue;

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


    /** Add panets with random speed */
    addPlanets(nb = 1, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        for (let i = 0; i < nb; i++) {
            const p = this.createPlanet(mi, this.w * Math.random(), this.h * Math.random());
            p.setRandomSpeed(minSpeed, maxSpeed);
        }
        return this;
    }



    /**
     */
    step(bounce = false, vmax = 0.8, collisionFactor = 1, timeStepMs = 10) {

        //observation
        for (let p of this.ps)
            p.observe();

        //action
        for (let p of this.ps)
            p.change(bounce, vmax, timeStepMs);

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
        return this;
    }

    /** Assign random speed to all planets */
    setRandomSpeed(minSpeed = 0, maxSpeed = 0.1) {
        for (let p of this.ps)
            p.setRandomSpeed(minSpeed, maxSpeed)
        return this
    }

    /** Return the largest planet of the universe, usually the star */
    getLargestPlanet() {
        let pM = null, mM = 0;
        for (let p of this.ps)
            if (p.m > mM) { pM = p; mM = p.m }
        return pM
    }

    /** Get largest planet and explode it */
    explodeLargestPlanet() {
        const p = this.getLargestPlanet()
        this.explode(p)
    }

    /** Explode the planet into pieces */
    explode(p, nb = -1, minSpeed = 0.8, maxSpeed = 1.5, rad = -1) {
        if (nb <= 0) nb = Math.floor(p.m);
        if (nb <= 0) return;
        const angleStep = 2 * Math.PI / nb;
        for (let i = 0; i < nb; i++) {
            //create planet

            //position
            if (rad < 0) rad = 2 * p.r()
            const d = rad * Math.random();
            const a = i * angleStep;
            const x = d * Math.cos(a), y = d * Math.sin(a);

            //speed
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const aS = a + 2 * (Math.random() - 0.5) * 2 * Math.PI / 3;
            const sx = speed * Math.cos(aS), sy = speed * Math.sin(aS);

            this.createPlanet(p.m / nb, p.x + x, p.y + y, p.vx + sx, p.vy + sy)
        }
        //remove p from universe
        this.remove(p)
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
        this.w = opts.w || div.offsetWidth;
        /** @type {number} */
        this.h = opts.h || div.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d

            //clear, with transparency
            c2.fillStyle = "rgba(0,0,0,0.05)";
            c2.fillRect(0, 0, th.w, th.h);

            //display planets
            for (let p of th.uni.ps) {
                const t = p.m / th.uni.m();
                p.display(this, "rgb(255,255," + Math.floor(255 * (1 - t)) + ")")
            }

            //label
            /*c2.fillStyle = "rgb(200,200,200)";
            c2.fillRect(0, 0, 65, 13);
            c2.fillStyle = "rgb(0,0,0)";
            c2.fillText(th.uni.ps.length + " planets", 2, 10);*/

            //frame
            c2.strokeStyle = "darkgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            c2.stroke();
        };

        /** @type {Universe} */
        this.uni = new _Universe__WEBPACK_IMPORTED_MODULE_0__["Universe"](this.w, this.h)
    }

    /** Initialise with random planets */
    initRandom(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        this.uni.addPlanets(nb, mi, minSpeed, maxSpeed);
        return this;
    }

    /** Initialise with big bang setup */
    initBigBang(nb = 1000, mi = 1, minSpeed = 0.35, maxSpeed = 0.7, rad = 100) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        //create big planet in the middle
        const cx = this.w * 0.5, cy = this.h * 0.5;
        const p = this.uni.createPlanet(nb * mi, cx, cy, 0, 0);
        //explode it
        this.uni.explode(p, nb, minSpeed, maxSpeed, rad)
        return this;
    }

    /** Start simulation */
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
        return this;
    }

    //stop
    stop() {
        //TODO
    }

}


const planets = function (opts) {
    return new PlanetSimulation(opts)
}


/***/ }),

/***/ "./src/pp/Animal.js":
/*!**************************!*\
  !*** ./src/pp/Animal.js ***!
  \**************************/
/*! exports provided: Animal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animal", function() { return Animal; });

class Animal {

    //Animal.PREY = 0;
    //Animal.PREDATOR = 1;

    constructor(type, l, x = 0, y = 0) {
        this.type = type;
        this.l = l;

        //position
        this.x = x < 0 ? 0 : x > l.w ? l.w : x
        this.y = y < 0 ? 0 : y > l.h ? l.h : y

        //speed
        this.vx = 0
        this.vy = 0;

        //? the ones around ?
        this.predators = []
        this.preys = []

        //add to the spatial index
        l.grid.add(this, this.x, this.y);
    }


    d(a) {
        return Math.hypot((a.x - this.x), (a.y - this.y));
    }

    move() {
        const l = this.l
        l.grid.remove(this, this.x, this.y);

        const a = Math.random() * 2 * Math.PI;
        const r = 0.01 * Math.random();

        this.vx += r * Math.cos(a) * l.timeStepMs;
        if (this.vx > l.V_MAX)
            this.vx = l.V_MAX;
        else if (this.vx < -l.V_MAX)
            this.vx = -l.V_MAX;

        this.vy += r * Math.sin(a) * l.timeStepMs;
        if (this.vy > l.V_MAX)
            this.vy = l.V_MAX;
        else if (this.vy < -l.V_MAX)
            this.vy = -l.V_MAX;

        this.x += this.vx * l.timeStepMs;
        if (this.x < 0) this.x = l.w;
        else if (this.x > l.w) this.x = 0;

        this.y += this.vy * l.timeStepMs;
        if (this.y < 0) this.y = l.h;
        else if (this.y > l.h) this.y = 0;

        //TODO use grid.move instead ?
        l.grid.add(this, this.x, this.y);
    }


    observe() {
        const as = [];

        this.preys = [];
        this.predators = [];

        for (let a of as) {
            if (a == this) continue;
            if (this.d(a) > l.d) continue;
            if (a.type == Animal.PREY)
                this.preys.push(a);
            else
                this.predators.push(a);
        }
    }

    makeChild() {
        //do better: make child around
        return new Animal(this.type, this.l, this.x, this.y);
    }

}


/***/ }),

/***/ "./src/pp/Land.js":
/*!************************!*\
  !*** ./src/pp/Land.js ***!
  \************************/
/*! exports provided: Land */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Land", function() { return Land; });
/* harmony import */ var _base_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/grid */ "./src/base/grid.js");
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");



class Land {

    constructor(w, h) {

        //the max speed
        this.V_MAX = 0.1;

        this.p = 0.02; //predator death probability
        this.q = 0.1; //prey reproduction probability
        this.r = 0.5; //eaten prey transformation probability
        this.nb = 3; //neighbors number

        this.predators = []
        this.preys = []
        this.d = 10
        this.timeStepMs = 20
        this.grid = new _base_grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](w, h, this.d);



        /*int[][] histo;
        int index=0;
        this.c2Chart=c2Chart;
        this.hChart=hChart;
        this.histo=new int[wChart][];
        for(int i=0;i<wChart;i++)
            histo[i]=new int[]{0,0};*/


    }


    step(timeStepMs) {

        //observe
        for (let a of this.preys) a.observe();
        for (let a of this.predators) a.observe();

        const preysToBorn = []
        const preysToDie = []
        const predsToBorn = []
        const predsToDie = []

        //prey reproduction if no predator around
        for (let prey of this.preys) {
            if (Math.random() > this.q) continue;
            if (prey.predators.length != 0) continue;
            if (prey.preys.length >= this.nb) continue;
            preysToBorn.push(prey.makeChild());
        }

        for (let pred of this.predators) {
            if (pred.preys.length == 0) {
                //no prey around: predator dies with probability p
                if (Math.random() < this.p) predsToDie.push(pred);
            } else {
                //prey eaten
                const preyToEat = pred.preys.get((int)(pred.preys.length * Math.random()));
                preysToDie.push(preyToEat);

                //predator reproduction
                if (Math.random() > r) continue;
                if (pred.predators.length >= nb) continue;
                predsToBorn.push(pred.makeChild());
            }
        }

        this.preys.push(...preysToBorn);
        this.predators.push(...predsToBorn);

        //this.preys.removeAll(preysToDie);
        //this.preys = this.preys.filter(x => !preysToDie.has(x));
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_1__["removeFromArrayS"])(this.preys, preysToDie)

        for (let a of preysToDie) this.grid.remove(a, a.x, a.y);

        //this.predators.removeAll(predsToDie);
        //this.predators = this.predators.filter(x => !predsToDie.has(x));
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_1__["removeFromArrayS"])(this.predators, predsToDie)

        for (let a of predsToDie) this.grid.remove(a, a.x, a.y);

        //move
        for (let a of this.preys)
            a.move();
        for (let a of this.predators)
            a.move();

        /*/histo
        histo[index] = new int[]{ preys.size(), predators.size() };
        if (index == histo.length - 1) index = 0;
        else index++;*/

    }
}


/***/ }),

/***/ "./src/pp/index.js":
/*!*************************!*\
  !*** ./src/pp/index.js ***!
  \*************************/
/*! exports provided: preyPredator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preyPredator", function() { return preyPredator; });
/* harmony import */ var _Land__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Land */ "./src/pp/Land.js");
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animal */ "./src/pp/Animal.js");
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");




class PreyPredatorSimulation {

    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_2__["CanvasPlus"](opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "white";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);


        //display animal
        const display = function (cp, a) {
            cp.c2d.fillRect(a.x, a.y, 3, 3);
            /*c2.beginPath();
            c2.arc(a.x, a.y, 0.5, 0, 2*Math.PI);
            c2.closePath();
            c2.fill();*/
        }


        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d

            //transparency
            c2.fillStyle = "rgba(255,255,255,0.5)";
            c2.fillRect(0, 0, th.w, th.h);

            //display animals
            c2.fillStyle = "blue";
            for (let a of th.land.preys)
                display(this, a);
            c2.fillStyle = "red";
            for (let a of th.land.predators)
                display(this, a);

            /*/label
            c2.fillStyle = "lightgray";
            c2.fillRect(0, 0, 65, 13);
            c2.fillStyle = "black";
            c2.fillText(preys.length + "/" + predators.length, 2, 10);*/

            //chart
            //c2Chart.setFillStyle(backColor2);
            //c2Chart.fillRect(0, 0, w, h);

            //double max = getMaxHisto();
            /*public int getMaxHisto() {
                int max=0;
                for(int i=0;i<histo.length;i++){
                    if(histo[i][0]>max) max=histo[i][0];
                    if(histo[i][1]>max) max=histo[i][1];
                }
                return max;
            }*/
            /*
                        if (max != 0) {
                            double h1, h2;
                            for (int i = 0; i < histo.length; i++) {
                                h1 = hChart * histo[i][0] / max;
                                h2 = hChart * histo[i][1] / max;
                                c2Chart.setFillStyle(preyColor2);
                                c2Chart.fillRect(i, hChart - h1, 1, h1);
                                c2Chart.setFillStyle(predatorColor2);
                                c2Chart.fillRect(i, hChart - h2, 1, h2);
                            }
                        }
                        c2Chart.setFillStyle(CssColor.make(255, 255, 255));
                        c2Chart.fillRect(index, 0, 1, hChart);
            */

            //frame
            c2.strokeStyle = "darkgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            c2.stroke();
        };


        /** @type {Land} */
        this.land = new _Land__WEBPACK_IMPORTED_MODULE_0__["Land"](this.w, this.h)

    }


    initRandom(nbPrey = 5, nbPredator = 150) {
        for (let i = 0; i < nbPrey; i++)
            this.land.preys.push(
                new _Animal__WEBPACK_IMPORTED_MODULE_1__["Animal"](0, this.land, this.w * Math.random(), this.h * Math.random())
            );
        for (let i = 0; i < nbPredator; i++)
            this.land.predators.push(
                new _Animal__WEBPACK_IMPORTED_MODULE_1__["Animal"](1, this.land, this.w * Math.random(), this.h * Math.random())
            );
        return this;
    }


    //start
    start(timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.land.step(timeStepMs);
            t.cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();
        return this;
    }

}


const preyPredator = function (opts) {
    return new PreyPredatorSimulation(opts)
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvbGliLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NhcmRpbi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9TZWEuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BwL0FuaW1hbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvTGFuZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtCQUFrQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLEtBQUs7QUFDeEIsd0JBQXdCLDBDQUFJOztBQUU1Qjs7O0FBR0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQSxvQkFBb0IsOENBQU07QUFDMUI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHTztBQUNQO0FBQ0EiLCJmaWxlIjoidmVjdGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJidWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmV4cG9ydCBjbGFzcyBDYW52YXNQbHVzIHtcblxuICAgIC8vY2hlY2s6XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20va2FuZ2F4L2ZhYnJpYy5qcy9cbiAgICAvL2h0dHA6Ly9raW5ldGljanMuY29tL1xuICAgIC8vaHR0cDovL3d3dy5jcmVhdGVqcy5jb20vRG9jcy9FYXNlbEpTL2NsYXNzZXMvTW91c2VFdmVudC5odG1sXG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpdklkXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSB3XG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGl2SWQgPSBcInZhZGl2XCIsIGNhbnZhc0lkID0gXCJ2YWNhbnZhc1wiLCBjZW50ZXIgPSB1bmRlZmluZWQsIHBzID0gMSkge1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9tYWtlIGNhbnZhcyB3aXRoaW4gZGl2XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSBjYW52YXNJZDtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuXG4gICAgICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgICAgIHRoaXMuYzJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyXG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyIHx8IHsgeDogdGhpcy53ICogMC41LCB5OiB0aGlzLmggKiAwLjUgfVxuICAgICAgICAvLyB6b29tIGZhY3RvcjogcGl4ZWwgc2l6ZSwgaW4gbS9waXhcbiAgICAgICAgdGhpcy5wcyA9IHBzO1xuXG4gICAgICAgIC8vbW91c2UgY2xpY2sgLSBwYW5cbiAgICAgICAgbGV0IG1wYW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4geyBtcGFuID0gdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChtcGFuKSB0aGlzLnBhbigtZS5tb3ZlbWVudFggKiB0aGlzLnBzLCBlLm1vdmVtZW50WSAqIHRoaXMucHMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlID0+IHsgbXBhbiA9IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vbW91c2Ugd2hlZWwgLSB6b29tXG4gICAgICAgIGNvbnN0IGYgPSAxLjVcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZl8gPSBlLmRlbHRhWSA+IDAgPyBmIDogMSAvIGY7XG4gICAgICAgICAgICB0aGlzLnpvb20oZl8sIHRoaXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHRoaXMucGl4VG9HZW9ZKGUub2Zmc2V0WSkpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm4ge0NhblBsLkNhbnZhc1BsdXN9ICovXG4gICAgcmVkcmF3KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk92ZXJyaWRlIHJlZHJhdyBtZXRob2RcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vY29udmVyc2lvbiBmdW5jdGlvbnNcbiAgICBnZW9Ub1BpeFgoeEdlbykgeyByZXR1cm4gKHhHZW8gLSB0aGlzLmNlbnRlci54KSAvIHRoaXMucHMgKyB0aGlzLncgKiAwLjU7IH1cbiAgICBnZW9Ub1BpeFkoeUdlbykgeyByZXR1cm4gLSh5R2VvIC0gdGhpcy5jZW50ZXIueSkgLyB0aGlzLnBzICsgdGhpcy5oICogMC41OyB9XG4gICAgcGl4VG9HZW9YKHgpIHsgcmV0dXJuICh4IC0gdGhpcy53ICogMC41KSAqIHRoaXMucHMgKyB0aGlzLmNlbnRlci54OyB9XG4gICAgcGl4VG9HZW9ZKHkpIHsgcmV0dXJuIC0oeSAtIHRoaXMuaCAqIDAuNSkgKiB0aGlzLnBzICsgdGhpcy5jZW50ZXIueTsgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqL1xuICAgIHBhbihkeEdlbywgZHlHZW8pIHtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSBkeEdlbztcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSBkeUdlbztcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZcbiAgICAgKi9cbiAgICB6b29tKGYgPSAxLCB4R2VvID0gdGhpcy5jZW50ZXIueCwgeUdlbyA9IHRoaXMuY2VudGVyLnkpIHtcbiAgICAgICAgdGhpcy5wcyAqPSBmO1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9ICh4R2VvLXRoaXMuY2VudGVyLngpKigxLWYpXG4gICAgICAgIHRoaXMuY2VudGVyLnkgKz0gKHlHZW8tdGhpcy5jZW50ZXIueSkqKDEtZilcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcblxuZXhwb3J0IGNsYXNzIEdyaWQge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEB0ZW1wbGF0ZSBUXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoLCByZXMpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5yZXMgPSByZXM7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubGVuZ3RoWCA9IE1hdGguZmxvb3IodyAvIHJlcyArIDEpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmxlbmd0aFkgPSBNYXRoLmZsb29yKGggLyByZXMgKyAxKTtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBcnJheS48QXJyYXkuPFQ+Pj59ICovXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoWDsgaSsrKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBcnJheS48VD4+fSAqL1xuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aFk7IGorKykge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFQ+fSAqL1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbaV1bal0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHltaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1heFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWF4XG4gICAgICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICAgICAqL1xuICAgIGdldCh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgICAgIGNvbnN0IGFzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKHhtaW4gLyB0aGlzLnJlcyk7IGkgPCBNYXRoLmZsb29yKHhtYXggLyB0aGlzLnJlcyArIDEpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMubGVuZ3RoWClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBNYXRoLmZsb29yKHltaW4gLyB0aGlzLnJlcyk7IGogPCBNYXRoLmZsb29yKHltYXggLyB0aGlzLnJlcyArIDEpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaiA+PSB0aGlzLmxlbmd0aFkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGFzLnB1c2guYXBwbHkoYXMsIHRoaXMuY2VsbHNbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgYWRkKG9iaiwgeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tNYXRoLmZsb29yKHggLyB0aGlzLnJlcyldW01hdGguZmxvb3IoeSAvIHRoaXMucmVzKV0ucHVzaChvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqL1xuICAgIHJlbW92ZShvYmosIHgsIHkpIHtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMuY2VsbHNbTWF0aC5mbG9vcih4IC8gdGhpcy5yZXMpXVtNYXRoLmZsb29yKHkgLyB0aGlzLnJlcyldLCBvYmopO1xuICAgIH1cblxuXG4gICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhJbmlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUluaVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4RmluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlGaW5cbiAgICAgKi9cbiAgICBtb3ZlKG9iaiwgeEluaSwgeUluaSwgeEZpbiwgeUZpbikge1xuICAgICAgICBjb25zdCBpSW5pID0gTWF0aC5mbG9vcih4SW5pIC8gdGhpcy5yZXMpO1xuICAgICAgICBjb25zdCBqSW5pID0gTWF0aC5mbG9vcih5SW5pIC8gdGhpcy5yZXMpO1xuICAgICAgICBjb25zdCBpRmluID0gTWF0aC5mbG9vcih4RmluIC8gdGhpcy5yZXMpO1xuICAgICAgICBjb25zdCBqRmluID0gTWF0aC5mbG9vcih5RmluIC8gdGhpcy5yZXMpO1xuXG4gICAgICAgIC8vbm8gY2hhbmdlLCBzdGlsbCBzYW1lIGNlbGxcbiAgICAgICAgaWYoaUluaT09aUZpbiAmJiBqSW5pPT1qRmluKSByZXR1cm47XG5cbiAgICAgICAgLy9jaGFuZ2UgY2VsbFxuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5jZWxsc1tpSW5pXVtqSW5pXSwgb2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaUZpbl1bakZpbl0ucHVzaChvYmopO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9ialRvQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIG91dC5wdXNoKG9ialtrZXldKTtcbiAgICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtUfSBvYmpcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaikge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQXJyYXlTID0gZnVuY3Rpb24gKGFyciwgb2Jqcykge1xuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKVxuICAgICAgICByZW1vdmVGcm9tQXJyYXkoYXJyLCBvYmopXG59O1xuIiwiZXhwb3J0IGNsYXNzIFNhcmRpbiB7XG5cbiAgICAvKlxuICAgICAgICBTZWEgc2VhO1xuICAgICAgICB4LHkgcG9zaXRpb24sIGluIHBpeFxuICAgICAgICB2eCx2eSBzcGVlZCwgaW4gcGl4IHBlciBtc1xuICAgICAgICB2LCB2YSBzcGVlZCBhbmdsZSAoaW4gLVBpLFBpKSBhbmQgbm9ybVxuICAgICAgICBheCwgYXkgYWNjZWxlcmF0aW9uLCBpbiBwaXggcGVyIHMyXG4gICAgICAgICovXG4gICAgY29uc3RydWN0b3Ioc2VhLCB4ID0gc2VhLncgKiBNYXRoLnJhbmRvbSgpLCB5ID0gc2VhLmggKiBNYXRoLnJhbmRvbSgpLCB2eCA9IHVuZGVmaW5lZCwgdnkgPSB1bmRlZmluZWQpIHtcblxuICAgICAgICB0aGlzLnNlYSA9IHNlYTtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBzZWEudyA/IHNlYS53IDogeFxuICAgICAgICB0aGlzLnkgPSB5IDwgMCA/IDAgOiB5ID4gc2VhLmggPyBzZWEuaCA6IHlcblxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgaWYgKCF2eCAmJiAhdnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICAgICAgdGhpcy52eSA9IHZ5O1xuICAgICAgICAgICAgdGhpcy52ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgICAgICAgdGhpcy52YSA9IE1hdGguYXRhbjIodnksIHZ4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWNjZWxlcmF0aW9uXG4gICAgICAgIHRoaXMuYXggPSAwXG4gICAgICAgIHRoaXMuYXkgPSAwXG5cbiAgICAgICAgLy9hZGQgdG8gc3BhdGlhbCBpbmRleFxuICAgICAgICB0aGlzLnNlYS5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSlcblxuICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiB2aXNpb24gZmllbGRcbiAgICAgICAgdGhpcy5vYnMgPSBbXVxuICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiBjb2xsaXNpb24gZmllbGRcbiAgICAgICAgdGhpcy5jb2wgPSBbXVxuXG4gICAgfVxuXG5cbiAgICAvKiogU2V0IHJhbmRvbSBzcGVlZCAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICB0aGlzLnZhID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICB0aGlzLnYgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnYgKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudiAqIE1hdGguc2luKHRoaXMudmEpO1xuICAgIH1cblxuXG4gICAgLyoqICovXG4gICAgb2JzZXJ2ZSgpIHtcblxuICAgICAgICAvL2luaXRpYWxpc2UgbGlzdHNcbiAgICAgICAgdGhpcy5vYnMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2wgPSBbXTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGFyb3VuZCB1c2luZyBzcGF0aWFsIGluZGV4XG4gICAgICAgIGNvbnN0IHNzID0gdGhpcy5zZWEuZ3JpZC5nZXQodGhpcy54IC0gdGhpcy5zZWEuRF9PQlMsIHRoaXMueSAtIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnggKyB0aGlzLnNlYS5EX09CUywgdGhpcy55ICsgdGhpcy5zZWEuRF9PQlMpO1xuXG4gICAgICAgIC8vZ2V0IHNhcmRpbnMgaW4gb2JzZXJ2YXRpb24gYW5kIGNvbGxpc2lvbiBmaWVsZHNcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgaWYgKHMgPT0gdGhpcykgY29udGludWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kKHMpIDw9IHRoaXMuc2VhLkRfQ09MKSB0aGlzLmNvbC5wdXNoKHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChzKSA8PSB0aGlzLnNlYS5EX09CUykge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgYW5nbGVcbiAgICAgICAgICAgICAgICBsZXQgZGEgPSBNYXRoLmF0YW4yKHMueSAtIHRoaXMueSwgcy54IC0gdGhpcy54KSAtIHRoaXMudmE7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gTWF0aC5QSSkgZGEgLT0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGEgPD0gLU1hdGguUEkpIGRhICs9IDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGRhID0gTWF0aC5hYnMoZGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYSA+IHRoaXMuc2VhLkFfT0JTICogMC41KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9icy5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pbml0aWFsaXNlIGFjY2VsZXJhdGlvblxuICAgICAgICB0aGlzLmF4ID0gMDsgdGhpcy5heSA9IDA7XG5cbiAgICAgICAgLy9jb2xsaXNpb246IHJlcHVsc2lvblxuICAgICAgICBmb3IgKGxldCBzIG9mIHRoaXMuY29sKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kKHMpO1xuICAgICAgICAgICAgY29uc3QgYSA9IDEuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAodGhpcy5zZWEuRF9DT0wgKiB0aGlzLnNlYS5EX0NPTCkpO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIHMueCkgLyBkO1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIHMueSkgLyBkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG93YXJkIHYgdGFyZ2V0XG4gICAgICAgIGNvbnN0IGR2ID0gKHRoaXMuc2VhLlZfVEFSR0VUIC0gdGhpcy52KSAqIDAuMDE7XG4gICAgICAgIHRoaXMuYXggKz0gZHYgKiB0aGlzLnZ4IC8gdGhpcy52O1xuICAgICAgICB0aGlzLmF5ICs9IGR2ICogdGhpcy52eSAvIHRoaXMudjtcblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgbWVhbiBwb3NpdGlvblxuICAgICAgICAvKmlmKG9icy5zaXplKCk+MSl7XG4gICAgICAgICAgICBkb3VibGUgeG49MCx5bj0wO1xuICAgICAgICAgICAgZm9yKFNhcmRpbiBzOm9icyl7XG4gICAgICAgICAgICAgICAgeG4rPXMueDtcbiAgICAgICAgICAgICAgICB5bis9cy55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeG49eG4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIHluPXluL29icy5zaXplKCk7XG4gICAgICAgICAgICBkb3VibGUgZD1NYXRoLmh5cG90KHhuLXgseW4teSk7XG4gICAgICAgICAgICBheCs9LTAuMSooeC14bikvZDtcbiAgICAgICAgICAgIGF5Kz0tMC4xKih5LXluKS9kO1xuICAgICAgICB9Ki9cblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgc3BlZWRcbiAgICAgICAgY29uc3QgdCA9IDAuOTtcbiAgICAgICAgaWYgKHRoaXMub2JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBkdnggPSAwLCBkdnkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgICAgIGR2eCArPSBzLnZ4O1xuICAgICAgICAgICAgICAgIGR2eSArPSBzLnZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHZ4ID0gKHQgLSAxKSAqIHRoaXMudnggKyAoMSAtIHQpICogZHZ4IC8gdGhpcy5vYnMubGVuZ3RoO1xuICAgICAgICAgICAgZHZ5ID0gKHQgLSAxKSAqIHRoaXMudnkgKyAoMSAtIHQpICogZHZ5IC8gdGhpcy5vYnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBjb25zdCBhID0gMC4xO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogZHZ4O1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogZHZ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hdm9pZCBzaGFya1xuICAgICAgICBpZiAodGhpcy5zZWEuc2hhcmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc2VhLnNoYXJrO1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHMueCAtIHRoaXMueCksIChzLnkgLSB0aGlzLnkpKTtcbiAgICAgICAgICAgIGlmIChkIDw9IHRoaXMuc2VhLkRfT0JTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IDUuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAodGhpcy5zZWEuRF9PQlMgKiB0aGlzLnNlYS5EX09CUykpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqICh0aGlzLnggLSBzLngpIC8gZDtcbiAgICAgICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gcy55KSAvIGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKiogKi9cbiAgICBtb3ZlKHRpbWVTdGVwTXMgPSAxMCkge1xuICAgICAgICB0aGlzLnNlYS5ncmlkLnJlbW92ZSh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IHRoaXMuYXggKiB0aW1lU3RlcE1zICsgKDEgLSAyICogTWF0aC5yYW5kb20oKSkgKiAwLjAyO1xuICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuYXkgKiB0aW1lU3RlcE1zICsgKDEgLSAyICogTWF0aC5yYW5kb20oKSkgKiAwLjAyO1xuICAgICAgICB0aGlzLnYgPSBNYXRoLmh5cG90KHRoaXMudngsIHRoaXMudnkpO1xuICAgICAgICB0aGlzLnZhID0gTWF0aC5hdGFuMih0aGlzLnZ5LCB0aGlzLnZ4KTtcbiAgICAgICAgaWYgKHRoaXMudiA+IHRoaXMuc2VhLlZfTUFYKSB7XG4gICAgICAgICAgICB0aGlzLnYgPSB0aGlzLnNlYS5WX01BWDtcbiAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnNlYS5WX01BWCAqIE1hdGguY29zKHRoaXMudmEpO1xuICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMuc2VhLlZfTUFYICogTWF0aC5zaW4odGhpcy52YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHBvc2l0aW9uXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vbGltaXRcbiAgICAgICAgaWYgKHRoaXMueCA8IDApIHRoaXMueCA9IHRoaXMuc2VhLnc7XG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB0aGlzLnkgPSB0aGlzLnNlYS5oO1xuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5zZWEudykgdGhpcy54ID0gMDtcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuc2VhLmgpIHRoaXMueSA9IDA7XG5cbiAgICAgICAgLy9UT0RPIHVzZSBtb3ZlP1xuICAgICAgICB0aGlzLnNlYS5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKiogRGlzdGFuY2UgdG8gb3RoZXIgc2FyZGluICovXG4gICAgZChzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KChzLnggLSB0aGlzLngpLCAocy55IC0gdGhpcy55KSk7XG4gICAgfVxuXG5cbiAgICAvKiogRGlzcGxheSBhIHNhcmRpbiBib2R5ICovXG4gICAgZGlzcGxheShjcCwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmZsb29yKDI1NSAqIE1hdGguYWJzKHRoaXMudmEpIC8gTWF0aC5QSSk7XG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJyZ2IoMjU1LCAyNTUsIFwiICsgYyArIFwiKVwiXG4gICAgICAgIGNvbnN0IGEgPSBsZW5ndGggLyB0aGlzLnY7XG4gICAgICAgIGNvbnN0IGR4ID0gYSAqIHRoaXMudnggKiAwLjU7XG4gICAgICAgIGNvbnN0IGR5ID0gYSAqIHRoaXMudnkgKiAwLjU7XG5cbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54IC0gZHgpLCBjcC5nZW9Ub1BpeFkodGhpcy55IC0gZHkpKTtcbiAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WCh0aGlzLnggKyBkeCksIGNwLmdlb1RvUGl4WSh0aGlzLnkgKyBkeSkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLyoqIERpc3BsYXkgc2FyZGluIHZpc2lvbiBmaWVsZCAqL1xuICAgIGRpc3BsYXlWaXNpb25GaWVsZChjcCwgZmlsbFN0eWxlLCBsaW5lV2lkdGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgYzIuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgLy9UT0RPIGNvcnJlY3QgdGhhdCAhXG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMuc2VhLkRfT0JTIC8gY3AucHMsXG4gICAgICAgICAgICBNYXRoLlBJIC0gdGhpcy52YSArIHRoaXMuc2VhLkFfT0JTICogMC41LCBNYXRoLlBJIC0gdGhpcy52YSAtIHRoaXMuc2VhLkFfT0JTICogMC41KTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTtcbiAgICB9XG5cbiAgICAvKiogRGlzcGxheSBzYXJkaW4gdmlzaW9uIGxpbmtzICovXG4gICAgZGlzcGxheVZpc2lvbkxpbmtzKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgZm9yIChsZXQgc2EyIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSkpO1xuICAgICAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WChzYTIueCksIGNwLmdlb1RvUGl4WShzYTIueSkpO1xuICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBEaXNwbGF5IHNhcmRpbiBjb2xsaXNpb24gZmllbGQgKi9cbiAgICBkaXNwbGF5Q29sbGlzaW9uRmllbGQoY3AsIHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5zZWEuRF9DT0wgKiAwLjUgLyBjcC5wcywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBTYXJkaW4gfSBmcm9tICcuL1NhcmRpbic7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vYmFzZS9ncmlkJztcbmltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcblxuZXhwb3J0IGNsYXNzIFNlYSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG5cbiAgICAgICAgLy9UT0RPIHNob3VsZCBiZWNvbWUgc3RhdGljIGF0dHJpYnV0ZXMgb2YgU2FyZGluIGNsYXNzXG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICB0aGlzLkRfT0JTID0gNTBcbiAgICAgICAgdGhpcy5BX09CUyA9IDIwMCAqIE1hdGguUEkgLyAxODBcblxuICAgICAgICAvL2NvbGxpc2lvblxuICAgICAgICB0aGlzLkRfQ09MID0gMTBcblxuICAgICAgICAvL3NwZWVkXG4gICAgICAgIHRoaXMuVl9UQVJHRVQgPSAwLjNcbiAgICAgICAgdGhpcy5WX01BWCA9IDAuNlxuXG5cbiAgICAgICAgLy9zaGFya1xuICAgICAgICB0aGlzLkRfU0hBUktfRUFUID0gMTJcbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgPSAwXG5cblxuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICB0aGlzLmggPSBoO1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh3LCBoLCB0aGlzLkRfT0JTKTtcblxuICAgICAgICB0aGlzLmZpc2ggPSBbXVxuXG4gICAgICAgIHRoaXMuc2hhcmsgPSBudWxsO1xuICAgICAgICB0aGlzLmtpbGxlZCA9IFtdO1xuICAgIH1cblxuXG4gICAgc3RlcCh0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL29ic2VydmVcbiAgICAgICAgZm9yIChsZXQgc2Egb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgc2Eub2JzZXJ2ZSgpO1xuXG4gICAgICAgIC8vbW92ZVxuICAgICAgICBmb3IgKGxldCBzYSBvZiB0aGlzLmZpc2gpXG4gICAgICAgICAgICBzYS5tb3ZlKCk7XG5cbiAgICAgICAgLy9zaGFyayBlYXQgZmlzaFxuICAgICAgICB0aGlzLnNoYXJrRWF0KCk7XG4gICAgfVxuXG5cblxuICAgIHNoYXJrRWF0KCkge1xuICAgICAgICBpZiAodGhpcy5zaGFyayA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcblxuICAgICAgICBjb25zdCB4ID0gdGhpcy5zaGFyay54LCB5ID0gdGhpcy5zaGFyay55O1xuICAgICAgICBjb25zdCBzcyA9IHRoaXMuZ3JpZC5nZXQoeCAtIHRoaXMuRF9TSEFSS19FQVQsIHkgLSB0aGlzLkRfU0hBUktfRUFULCB4ICsgdGhpcy5EX1NIQVJLX0VBVCwgeSArIHRoaXMuRF9TSEFSS19FQVQpO1xuICAgICAgICBmb3IgKGxldCBzIG9mIHNzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5oeXBvdCgoeCAtIHMueCksICh5IC0gcy55KSk7XG4gICAgICAgICAgICBpZiAoZCA+IHRoaXMuRF9TSEFSS19FQVQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpcy5raWxsZWQucHVzaChzKTtcbiAgICAgICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLmZpc2gsIHMpXG4gICAgICAgICAgICB0aGlzLmdyaWQucmVtb3ZlKHMsIHMueCwgcy55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkVBVEVOX1NBUkRJTl9OQiArPSB0aGlzLmtpbGxlZC5sZW5ndGg7XG4gICAgICAgIC8vZWF0ZW5GaXNoTmIuc2V0VGV4dChcIkVhdGVuIGZpc2g6IFwiICsgRUFURU5fU0FSRElOX05CKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKiBBZGQgYSBudW1iZXIgb2YgZmlzaCAqL1xuICAgIGFkZEZpc2gobmIgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKylcbiAgICAgICAgICAgIHRoaXMuZmlzaC5wdXNoKG5ldyBTYXJkaW4odGhpcykpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKiBTZXQgcmFuZG9tIHNwZWVkIGZvciBhbGwgZmlzaCAqL1xuICAgIHNldFJhbmRvbVNwZWVkKCkge1xuICAgICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIGYuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgU2VhIH0gZnJvbSAnLi9TZWEnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5cbmNsYXNzIEZpc2hTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9UT0RPXG4gICAgICAgIC8vYWRkIGVhdGVuIGZpc2ggbmIgbGFiZWxcblxuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgICAgIHRoaXMuc2hvd0Zpc2hWaXNpb25GaWVsZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2hvd0Zpc2hWaXNpb25MaW5rcyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2hvd0Zpc2hDb2xsaXNpb25GaWVsZCA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aC5zZWFcblxuICAgICAgICAgICAgLy9jbGVhclxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDEyMCwxMjAsMjU1LDAuNilcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL3Nob3cgdmlzaW9uIGZpZWxkXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hWaXNpb25GaWVsZClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIHNhLmRpc3BsYXlWaXNpb25GaWVsZCh0aGlzLCBcInJnYmEoMjAwLDIwMCwyMDAsMC4xNSlcIiwgMSlcbiAgICAgICAgICAgIC8vc2hvdyB2aXNpb24gbGlua3NcbiAgICAgICAgICAgIGlmICh0aC5zaG93RmlzaFZpc2lvbkxpbmtzKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkxpbmtzKHRoaXMsIFwicmdiYSgyNTUsMTAwLDEwMCwwLjMpXCIsIDEpXG4gICAgICAgICAgICAvL3Nob3cgY29sbGlzaW9uIGZpZWxkXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hDb2xsaXNpb25GaWVsZClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIHNhLmRpc3BsYXlDb2xsaXNpb25GaWVsZCh0aGlzLCBcInB1cnBsZVwiLCAxKVxuXG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBzYXJkaW5zXG4gICAgICAgICAgICBjMi5saW5lV2lkdGggPSAyIC8gdGhpcy5wc1xuICAgICAgICAgICAgY29uc3Qgc2FyZGluTGVuZ3RoID0gN1xuICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgIHNhLmRpc3BsYXkodGhpcywgc2FyZGluTGVuZ3RoKVxuXG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBzaGFya1xuICAgICAgICAgICAgaWYgKHMuc2hhcmsgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgYzIubGluZVdpZHRoID0gNCAvIHRoaXMucHNcbiAgICAgICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmtMZW5ndGggPSAxMiAvIHRoaXMucHNcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHNoYXJrTGVuZ3RoICogTWF0aC5jb3Mocy5zaGFyay5hbmdsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSBzaGFya0xlbmd0aCAqIE1hdGguc2luKHMuc2hhcmsuYW5nbGUpO1xuXG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIubW92ZVRvKHRoaXMuZ2VvVG9QaXhYKHMuc2hhcmsueCksIHRoaXMuZ2VvVG9QaXhZKHMuc2hhcmsueSkpO1xuICAgICAgICAgICAgICAgIGMyLmxpbmVUbyh0aGlzLmdlb1RvUGl4WChzLnNoYXJrLngpIC0gZHgsIHRoaXMuZ2VvVG9QaXhZKHMuc2hhcmsueSkgLSBkeSk7XG4gICAgICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBibG9vZCBzcG90XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMVxuICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5raWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgoc2EueCksIHRoaXMuZ2VvVG9QaXhZKHNhLnkpKTtcbiAgICAgICAgICAgICAgICBjMi5hcmModGhpcy5nZW9Ub1BpeFgoc2EueCksIHRoaXMuZ2VvVG9QaXhZKHNhLnkpLCA0LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIuZmlsbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSAtIDMsIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCkgLSAzLCB0aC53IC8gdGhpcy5wcyArIDMsIHRoLmggLyB0aGlzLnBzICsgMyk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0geyB4OiB0aC5jcGx1cy5waXhUb0dlb1goZS5vZmZzZXRYKSwgeTogdGguY3BsdXMucGl4VG9HZW9ZKGUub2Zmc2V0WSksIGFuZ2xlOiAwIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4RyA9IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpO1xuICAgICAgICAgICAgY29uc3QgeUcgPSB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMigteUcgKyB0aC5zZWEuc2hhcmsueSwgeEcgLSB0aC5zZWEuc2hhcmsueCk7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSB7IHg6IHhHLCB5OiB5RywgYW5nbGU6IGFuZ2xlIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IG51bGw7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtTZWF9ICovXG4gICAgICAgIHRoaXMuc2VhID0gbmV3IFNlYSh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG4gICAgaW5pdFJhbmRvbShuYiA9IDE1MDApIHtcbiAgICAgICAgdGhpcy5zZWEuYWRkRmlzaChuYik7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG5cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuc2VhLnN0ZXAodGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBmaXNoID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEZpc2hTaW11bGF0aW9uKG9wdHMpXG59XG4iLCJpbXBvcnQgeyBvYmpUb0FycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge0NlbGx9XG4gICAgICovXG4gICAgYWRkKHgsIHkpIHtcbiAgICAgICAgLy9maW5kIGFnZW50IGF0IGxvY2F0aW9uXG4gICAgICAgIC8qKkB0eXBlIHtzdHJpbmd9Ki9cbiAgICAgICAgY29uc3QgaWQgPSB4ICsgXCJfXCIgKyB5O1xuICAgICAgICBpZiAodGhpcy5wb3B1bGF0aW9uSVtpZF0pIHJldHVybiBudWxsO1xuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAvKipAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgY29uc3QgY2VsbCA9IHsgeDogeCwgeTogeSwgbmI6IDAgfTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goY2VsbCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbklbaWRdID0gY2VsbDtcbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RlcCgpIHtcblxuICAgICAgICAvL1RPRE8gZG91YmxlIGluZGV4aW5nPyBieSByYXcgYW5kIHRoZW4gY29sdW1uID9cbiAgICAgICAgLy9wb3B1bGF0ZSBjZWxsIHN1cnJvdW5kaW5nc1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3Qgc3VySSA9IHt9O1xuICAgICAgICAvL2dvIHRocm91Z2ggbGlzdCBvZiBjZWxsc1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgLy8gKzEgc3Vycm91bmRpbmcgY2VsbHNcbiAgICAgICAgICAgIGNvbnN0IHNycyA9IFVuaXZlcnNlLmdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB0aGlzKTtcbiAgICAgICAgICAgIGZvciAobGV0IHN1ciBvZiBzcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VyXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3VyXykge1xuICAgICAgICAgICAgICAgICAgICBzdXJfLm5iKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyLm5iID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3VySVtrZXldID0gc3VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQjMvUzIzXG4gICAgICAgIC8va2lsbCBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXAgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwSSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2VsbC54ICsgXCJfXCIgKyBjZWxsLnk7XG4gICAgICAgICAgICBjb25zdCBjZWxsXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgIGlmICghY2VsbF8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy9pZiAobmI8MiBvciBuYj4zKSAtPiBraWxsXG4gICAgICAgICAgICBpZiAoY2VsbF8ubmIgPCAyIHx8IGNlbGxfLm5iID4gMykgY29udGludWU7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcC5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXBJW2tleV0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IGNlbGxzVG9LZWVwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0gY2VsbHNUb0tlZXBJO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3Qgc3VycyA9IG9ialRvQXJyYXkoc3VySSk7XG4gICAgICAgIGZvciAobGV0IHN1ciBvZiBzdXJzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdXIubmIgIT09IDMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGFscmVhZHkgYWxpdmVcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtrZXldO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goc3VyKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbklba2V5XSA9IHN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TVNcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwbHVzXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RhcnQobmIsIHRpbWVvdXRNUywgY3BsdXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB1bmkgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgdW5pLnN0ZXAoKTtcbiAgICAgICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iID4gMCAmJiBpKysgPiBuYikgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIHRpbWVvdXRNUyk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NlbGx9IGNlbGxcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1bmlcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48Q2VsbD59XG4gICAgICovXG4gICAgc3RhdGljIGdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB1bmkpIHtcbiAgICAgICAgY29uc3QgeDEgPSBjZWxsLnggPT09IDAgPyB1bmkudyAtIDEgOiBjZWxsLnggLSAxO1xuICAgICAgICBjb25zdCB4MiA9IGNlbGwueCA9PT0gdW5pLncgLSAxID8gMCA6IGNlbGwueCArIDE7XG4gICAgICAgIGNvbnN0IHkxID0gY2VsbC55ID09PSAwID8gdW5pLmggLSAxIDogY2VsbC55IC0gMTtcbiAgICAgICAgY29uc3QgeTIgPSBjZWxsLnkgPT09IHVuaS5oIC0gMSA/IDAgOiBjZWxsLnkgKyAxO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgeyB4OiB4MSwgeTogeTEgfSxcbiAgICAgICAgICAgIHsgeDogeDEsIHk6IGNlbGwueSB9LFxuICAgICAgICAgICAgeyB4OiB4MSwgeTogeTIgfSxcbiAgICAgICAgICAgIHsgeDogY2VsbC54LCB5OiB5MSB9LFxuICAgICAgICAgICAgeyB4OiBjZWxsLngsIHk6IHkyIH0sXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiB5MSB9LFxuICAgICAgICAgICAgeyB4OiB4MiwgeTogY2VsbC55IH0sXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiB5MiB9XG4gICAgICAgIF07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5cbi8vVE9ETyB6b29tL3Bhbiwgd2l0aCBjYW52YXMgdHJhbnNmb3JtOiBiZXR0ZXIgdW5pdmVyc2UgbGltaXRzXG4vL1RPRE8gYnV0dG9ucyAocGxheSwgc3RvcCwgc3BlZWQsIGRyYXcsIHBhbilcbi8vVE9ETyBjaGVjayBjYW52YXMgYW5pbWF0aW9uXG5cblxuY2xhc3MgR29MU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG5cbiAgICAgICAgICAgIC8vY2xlYXJcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2RyYXcgY2VsbHNcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgZm9yIChsZXQgY2VsbCBvZiB0aC51bmkucG9wdWxhdGlvbilcbiAgICAgICAgICAgICAgICBjMi5maWxsUmVjdCh0aGlzLmdlb1RvUGl4WChjZWxsLngpLCB0aGlzLmdlb1RvUGl4WShjZWxsLnkpLCAxIC8gdGhpcy5wcywgMSAvIHRoaXMucHMpO1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLnBzLCB0aC5oIC8gdGhpcy5wcyk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVuaSA9IG5ldyBVbml2ZXJzZSh0aGlzLncsIHRoaXMuaCk7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIGluaXRSYW5kb20oZGVuc2l0eSA9IDAuMDUpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgbmIgPSB0aGlzLnVuaS53ICogdGhpcy51bmkuaCAqIGRlbnNpdHk7XG4gICAgICAgIHdoaWxlIChpIDwgbmIpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHRoaXMudW5pLncgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHRoaXMudW5pLmggKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnVuaS5hZGQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoY2VsbCkgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy51bmkuc3RhcnQoLTEsIDAsIHRoaXMuY3BsdXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgZ2FtZU9mTGlmZSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBHb0xTaW11bGF0aW9uKG9wdHMpXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9wbGFuZXRzL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL2dvbC9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9maXNoL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL3BwL2luZGV4XCJcbiIsImV4cG9ydCBjbGFzcyBQbGFuZXQge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEBwYXJhbSB7VW5pdmVyc2V9IHUgVGhlIHVuaXZlcnNlIHRoZSBwbGFuZXQgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgbWFzc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdnggVGhlIHNwZWVkIHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdnkgVGhlIHNwZWVkIHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1LCBtLCB4LCB5LCB2eCwgdnkpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICAgICAgdGhpcy51ID0gdTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubSA9IG07XG5cbiAgICAgICAgLy9jb21wdXRlIHJhZGl1c1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgciA9IHRoaXMucigpO1xuXG4gICAgICAgIC8vc2V0IHBvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4IDwgciA/IHIgOiB4ID4gdS53IC0gciA/IHUudyAtIHIgOiB4O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geSA8IHIgPyByIDogeSA+IHUuaCAtIHIgPyB1LmggLSByIDogeTtcblxuICAgICAgICAvL3NldCBzcGVlZFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eSA9IHZ5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZm9yY2UsIGJhc2VkIG9uIHRoZSBncmF2aXR5IG9mIG90aGVyIHBsYW5ldHMuXG4gICAgICovXG4gICAgb2JzZXJ2ZSgpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ5ID0gMDtcblxuICAgICAgICAvL2NoZWNrIGFsbCBvdGhlciBwbGFuZXRzIGluIHRoZSB1bml2ZXJzZVxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMudS5wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMgPT0gcClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jb21wdXRlIGFuZCBhZGQgZ3Jhdml0eSBmb3JjZVxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMuZChwKTtcbiAgICAgICAgICAgIGlmIChkID09PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBkID0gZCAqIGQgKiBkO1xuICAgICAgICAgICAgdGhpcy5meCArPSAwLjAxICogKHAueCAtIHRoaXMueCkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICAgICAgdGhpcy5meSArPSAwLjAxICogKHAueSAtIHRoaXMueSkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0byB0aGUgcGxhbmV0IHAuXG4gICAgICovXG4gICAgZChwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBkeCA9IHAueCAtIHRoaXMueDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR5ID0gcC55IC0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIHBsYW5ldCwgZGVwZW5kaW5nIG9uIGl0cyBtYXNzLlxuICAgICAqL1xuICAgIHIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLm0gLyBNYXRoLlBJLCAwLjUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlXG4gICAgICovXG4gICAgY2hhbmdlKGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCB0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL2NvbXB1dGUgYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheCA9IHRoaXMuZnggLyB0aGlzLm07XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IGF4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSArPSBheSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9jaGVjayB2bWF4XG4gICAgICAgIGlmICh2bWF4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGguc3FydCh0aGlzLnZ4ICogdGhpcy52eCArIHRoaXMudnkgKiB0aGlzLnZ5KTtcbiAgICAgICAgICAgIGlmICh2ID4gdm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSB2bWF4ICogdGhpcy52eCAvIHY7XG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IHZtYXggKiB0aGlzLnZ5IC8gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgbGV0IG54ID0gdGhpcy54ICsgdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIGxldCBueSA9IHRoaXMueSArIHRoaXMudnkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vaGFuZGxlIHBvc2l0aW9uIGxpbWl0XG4gICAgICAgIGlmIChib3VuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcbiAgICAgICAgICAgIGNvbnN0IGUgPSAxO1xuICAgICAgICAgICAgaWYgKG54IDwgcikgeyBueCA9IHI7IHRoaXMudnggPSAtdGhpcy52eCAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueSA8IHIpIHsgbnkgPSByOyB0aGlzLnZ5ID0gLXRoaXMudnkgKiBlOyB9XG4gICAgICAgICAgICBpZiAobnggPiB0aGlzLnUudyAtIHIpIHsgbnggPSB0aGlzLnUudyAtIHI7IHRoaXMudnggPSAtdGhpcy52eCAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueSA+IHRoaXMudS5oIC0gcikgeyBueSA9IHRoaXMudS5oIC0gcjsgdGhpcy52eSA9IC10aGlzLnZ5ICogZTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG54IDwgMCkgeyBueCA9IHRoaXMudS53OyB9XG4gICAgICAgICAgICBpZiAobnkgPCAwKSB7IG55ID0gdGhpcy51Lmg7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53KSB7IG54ID0gMDsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmgpIHsgbnkgPSAwOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvL21vdmUgcGxhbmV0XG4gICAgICAgIHRoaXMudS5tb3ZlKHRoaXMsIG54LCBueSlcblxuICAgIH1cblxuXG4gICAgLyoqIFNldCByYW5kb20gc3BlZWQgKi9cbiAgICBzZXRSYW5kb21TcGVlZChtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzcGVlZCA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgdGhpcy52eCA9IHNwZWVkICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICAgIHRoaXMudnkgPSBzcGVlZCAqIE1hdGguc2luKGFuZ2xlKVxuICAgIH1cblxuICAgIC8qKiBEaXNwbGF5IHBsYW5ldCAqL1xuICAgIGRpc3BsYXkoY3AsIGZpbGxTdHlsZSkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjMi5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5hcmMoY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpLCB0aGlzLnIoKSAvIGNwLnBzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vYmFzZS9ncmlkJztcbmltcG9ydCB7IFBsYW5ldCB9IGZyb20gJy4vUGxhbmV0JztcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCwgZ3JlcyA9IE1hdGgubWluKHcsIGgpIC8gMTAwLjApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMucHMgPSBbXTtcblxuICAgICAgICAvKiogQHR5cGUge0dyaWR9ICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHcsIGgsIGdyZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdGhlIG1hc3Mgb2YgdGhlIHVuaXZlcnNlXG4gICAgICovXG4gICAgbSgpIHtcbiAgICAgICAgbGV0IG0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBtICs9IHAubTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGxhbmV0XG4gICAgICovXG4gICAgY3JlYXRlUGxhbmV0KG0sIHgsIHksIHN4ID0gMCwgc3kgPSAwKSB7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUGxhbmV0KHRoaXMsIG0sIHgsIHksIHN4LCBzeSk7XG4gICAgICAgIHRoaXMuYWRkKHApO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwbGFuZXRcbiAgICAgKi9cbiAgICBhZGQocCkge1xuICAgICAgICBwLnUgPSB0aGlzO1xuICAgICAgICB0aGlzLnBzLnB1c2gocCk7XG4gICAgICAgIHRoaXMuZ3JpZC5hZGQocCwgcC54LCBwLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHBsYW5ldFxuICAgICAqL1xuICAgIHJlbW92ZShwKSB7XG4gICAgICAgIHAudSA9IG51bGw7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBwKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShwLCBwLngsIHAueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhIHBsYW5ldFxuICAgICAqL1xuICAgIG1vdmUocCwgbngsIG55KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5tb3ZlKHAsIHAueCwgcC55LCBueCwgbnkpO1xuICAgICAgICBwLnggPSBueDsgcC55ID0gbnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWdncmVnYXRlIHR3byBwbGFuZXRzXG4gICAgICovXG4gICAgYWdncmVnYXRlKHAxLCBwMikge1xuICAgICAgICBjb25zdCBtID0gcDEubSArIHAyLm07XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBsYW5ldChcbiAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAocDEueCAqIHAxLm0gKyBwMi54ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnkgKiBwMS5tICsgcDIueSAqIHAyLm0pIC8gbSxcbiAgICAgICAgICAgIChwMS52eCAqIHAxLm0gKyBwMi52eCAqIHAyLm0pIC8gbSxcbiAgICAgICAgICAgIChwMS52eSAqIHAxLm0gKyBwMi52eSAqIHAyLm0pIC8gbVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbW92ZShwMSk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHAyKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48UGxhbmV0Pn1cbiAgICAgKi9cbiAgICBmaW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3RvciA9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcGkgb2YgdGhpcy5wcykge1xuXG4gICAgICAgICAgICBjb25zdCB3ID0gMiAqIHBpLnIoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmQgPSB0aGlzLmdyaWQuZ2V0KHBpLnggLSB3LCBwaS55IC0gdywgcGkueCArIHcsIHBpLnkgKyB3KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcGogb2YgY2FuZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHBpID09IHBqKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQxID0gcGkuZChwaik7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgZDIgPSAocGkucigpICsgcGoucigpKSAqIGNvbGxpc2lvbkZhY3RvcjtcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwaSwgcGpdO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvKiogQWRkIHBhbmV0cyB3aXRoIHJhbmRvbSBzcGVlZCAqL1xuICAgIGFkZFBsYW5ldHMobmIgPSAxLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBsYW5ldChtaSwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBwLnNldFJhbmRvbVNwZWVkKG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqL1xuICAgIHN0ZXAoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIGNvbGxpc2lvbkZhY3RvciA9IDEsIHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5vYnNlcnZlKCk7XG5cbiAgICAgICAgLy9hY3Rpb25cbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5jaGFuZ2UoYm91bmNlLCB2bWF4LCB0aW1lU3RlcE1zKTtcblxuICAgICAgICAvL2NvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICAgICAgLy9maW5kIGZpcnN0IGNvbGxpc2lvblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICBsZXQgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB3aGlsZSAocGFpciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy9hZ2dyZWdhdGVcbiAgICAgICAgICAgIHRoaXMuYWdncmVnYXRlKHBhaXJbMF0sIHBhaXJbMV0pXG4gICAgICAgICAgICAvL2ZpbmQgbmV4dCBjb2xsaXNpb25cbiAgICAgICAgICAgIHBhaXIgPSB0aGlzLmZpbmRDb2xsaXNpb24oY29sbGlzaW9uRmFjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKiogQXNzaWduIHJhbmRvbSBzcGVlZCB0byBhbGwgcGxhbmV0cyAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5zZXRSYW5kb21TcGVlZChtaW5TcGVlZCwgbWF4U3BlZWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybiB0aGUgbGFyZ2VzdCBwbGFuZXQgb2YgdGhlIHVuaXZlcnNlLCB1c3VhbGx5IHRoZSBzdGFyICovXG4gICAgZ2V0TGFyZ2VzdFBsYW5ldCgpIHtcbiAgICAgICAgbGV0IHBNID0gbnVsbCwgbU0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBpZiAocC5tID4gbU0pIHsgcE0gPSBwOyBtTSA9IHAubSB9XG4gICAgICAgIHJldHVybiBwTVxuICAgIH1cblxuICAgIC8qKiBHZXQgbGFyZ2VzdCBwbGFuZXQgYW5kIGV4cGxvZGUgaXQgKi9cbiAgICBleHBsb2RlTGFyZ2VzdFBsYW5ldCgpIHtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZ2V0TGFyZ2VzdFBsYW5ldCgpXG4gICAgICAgIHRoaXMuZXhwbG9kZShwKVxuICAgIH1cblxuICAgIC8qKiBFeHBsb2RlIHRoZSBwbGFuZXQgaW50byBwaWVjZXMgKi9cbiAgICBleHBsb2RlKHAsIG5iID0gLTEsIG1pblNwZWVkID0gMC44LCBtYXhTcGVlZCA9IDEuNSwgcmFkID0gLTEpIHtcbiAgICAgICAgaWYgKG5iIDw9IDApIG5iID0gTWF0aC5mbG9vcihwLm0pO1xuICAgICAgICBpZiAobmIgPD0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSAyICogTWF0aC5QSSAvIG5iO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIC8vY3JlYXRlIHBsYW5ldFxuXG4gICAgICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgICAgICBpZiAocmFkIDwgMCkgcmFkID0gMiAqIHAucigpXG4gICAgICAgICAgICBjb25zdCBkID0gcmFkICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpICogYW5nbGVTdGVwO1xuICAgICAgICAgICAgY29uc3QgeCA9IGQgKiBNYXRoLmNvcyhhKSwgeSA9IGQgKiBNYXRoLnNpbihhKTtcblxuICAgICAgICAgICAgLy9zcGVlZFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgICAgICBjb25zdCBhUyA9IGEgKyAyICogKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIE1hdGguUEkgLyAzO1xuICAgICAgICAgICAgY29uc3Qgc3ggPSBzcGVlZCAqIE1hdGguY29zKGFTKSwgc3kgPSBzcGVlZCAqIE1hdGguc2luKGFTKTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGFuZXQocC5tIC8gbmIsIHAueCArIHgsIHAueSArIHksIHAudnggKyBzeCwgcC52eSArIHN5KVxuICAgICAgICB9XG4gICAgICAgIC8vcmVtb3ZlIHAgZnJvbSB1bml2ZXJzZVxuICAgICAgICB0aGlzLnJlbW92ZShwKVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tICcuL1VuaXZlcnNlJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuXG4vL1RPRE8gYWRkIHJlc3RhcnQvYmlnIGJhbmcgYnV0dG9uXG4vKiBCdXR0b24gcmVzdGFydCA9IG5ldyBCdXR0b24oXCJSZWNvbW1lbmNlciFcIik7XG4gcmVzdGFydC5hZGRDbGlja0hhbmRsZXIobmV3IENsaWNrSGFuZGxlcigpIHtcbiBAT3ZlcnJpZGVcbiBwdWJsaWMgdm9pZCBvbkNsaWNrKENsaWNrRXZlbnQgZXZlbnQpIHtcbiB1LmZpbGwoKTtcbiBjLmdldENvbnRleHQyZCgpLnNldEZpbGxTdHlsZShDc3NDb2xvci5tYWtlKDAsMCwwKSk7XG4gYy5nZXRDb250ZXh0MmQoKS5maWxsUmVjdCgwLCAwLCB3LCBoKTtcbiB9XG4gfSk7XG4gUm9vdFBhbmVsLmdldChcImJcIikuYWRkKHJlc3RhcnQpOyovXG5cbmNsYXNzIFBsYW5ldFNpbXVsYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5kaXZJZCA9IG9wdHMuZGl2SWQgfHwgXCJ2YWRpdlwiO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gb3B0cy53IHx8IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IG9wdHMuaCB8fCBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG5cbiAgICAgICAgICAgIC8vY2xlYXIsIHdpdGggdHJhbnNwYXJlbmN5XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgcGxhbmV0c1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiB0aC51bmkucHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcC5tIC8gdGgudW5pLm0oKTtcbiAgICAgICAgICAgICAgICBwLmRpc3BsYXkodGhpcywgXCJyZ2IoMjU1LDI1NSxcIiArIE1hdGguZmxvb3IoMjU1ICogKDEgLSB0KSkgKyBcIilcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9sYWJlbFxuICAgICAgICAgICAgLypjMi5maWxsU3R5bGUgPSBcInJnYigyMDAsMjAwLDIwMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxUZXh0KHRoLnVuaS5wcy5sZW5ndGggKyBcIiBwbGFuZXRzXCIsIDIsIDEwKTsqL1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudW5pID0gbmV3IFVuaXZlcnNlKHRoaXMudywgdGhpcy5oKVxuICAgIH1cblxuICAgIC8qKiBJbml0aWFsaXNlIHdpdGggcmFuZG9tIHBsYW5ldHMgKi9cbiAgICBpbml0UmFuZG9tKG5iID0gMTAwMCwgbWkgPSAwLjUsIG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgdGhpcy51bmkuYWRkUGxhbmV0cyhuYiwgbWksIG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKiBJbml0aWFsaXNlIHdpdGggYmlnIGJhbmcgc2V0dXAgKi9cbiAgICBpbml0QmlnQmFuZyhuYiA9IDEwMDAsIG1pID0gMSwgbWluU3BlZWQgPSAwLjM1LCBtYXhTcGVlZCA9IDAuNywgcmFkID0gMTAwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIC8vY3JlYXRlIGJpZyBwbGFuZXQgaW4gdGhlIG1pZGRsZVxuICAgICAgICBjb25zdCBjeCA9IHRoaXMudyAqIDAuNSwgY3kgPSB0aGlzLmggKiAwLjU7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnVuaS5jcmVhdGVQbGFuZXQobmIgKiBtaSwgY3gsIGN5LCAwLCAwKTtcbiAgICAgICAgLy9leHBsb2RlIGl0XG4gICAgICAgIHRoaXMudW5pLmV4cGxvZGUocCwgbmIsIG1pblNwZWVkLCBtYXhTcGVlZCwgcmFkKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKiogU3RhcnQgc2ltdWxhdGlvbiAqL1xuICAgIHN0YXJ0KGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCBjb2xsaXNpb25GYWN0b3IgPSAwLjgsIHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC51bmkuc3RlcChib3VuY2UsIHZtYXgsIGNvbGxpc2lvbkZhY3RvciwgdGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vc3RvcFxuICAgIHN0b3AoKSB7XG4gICAgICAgIC8vVE9ET1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBjb25zdCBwbGFuZXRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFBsYW5ldFNpbXVsYXRpb24ob3B0cylcbn1cbiIsIlxuZXhwb3J0IGNsYXNzIEFuaW1hbCB7XG5cbiAgICAvL0FuaW1hbC5QUkVZID0gMDtcbiAgICAvL0FuaW1hbC5QUkVEQVRPUiA9IDE7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBsLCB4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5sID0gbDtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBsLncgPyBsLncgOiB4XG4gICAgICAgIHRoaXMueSA9IHkgPCAwID8gMCA6IHkgPiBsLmggPyBsLmggOiB5XG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICB0aGlzLnZ4ID0gMFxuICAgICAgICB0aGlzLnZ5ID0gMDtcblxuICAgICAgICAvLz8gdGhlIG9uZXMgYXJvdW5kID9cbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXVxuICAgICAgICB0aGlzLnByZXlzID0gW11cblxuICAgICAgICAvL2FkZCB0byB0aGUgc3BhdGlhbCBpbmRleFxuICAgICAgICBsLmdyaWQuYWRkKHRoaXMsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIGQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgoYS54IC0gdGhpcy54KSwgKGEueSAtIHRoaXMueSkpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxcbiAgICAgICAgbC5ncmlkLnJlbW92ZSh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG5cbiAgICAgICAgY29uc3QgYSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgciA9IDAuMDEgKiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIHRoaXMudnggKz0gciAqIE1hdGguY29zKGEpICogbC50aW1lU3RlcE1zO1xuICAgICAgICBpZiAodGhpcy52eCA+IGwuVl9NQVgpXG4gICAgICAgICAgICB0aGlzLnZ4ID0gbC5WX01BWDtcbiAgICAgICAgZWxzZSBpZiAodGhpcy52eCA8IC1sLlZfTUFYKVxuICAgICAgICAgICAgdGhpcy52eCA9IC1sLlZfTUFYO1xuXG4gICAgICAgIHRoaXMudnkgKz0gciAqIE1hdGguc2luKGEpICogbC50aW1lU3RlcE1zO1xuICAgICAgICBpZiAodGhpcy52eSA+IGwuVl9NQVgpXG4gICAgICAgICAgICB0aGlzLnZ5ID0gbC5WX01BWDtcbiAgICAgICAgZWxzZSBpZiAodGhpcy52eSA8IC1sLlZfTUFYKVxuICAgICAgICAgICAgdGhpcy52eSA9IC1sLlZfTUFYO1xuXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogbC50aW1lU3RlcE1zO1xuICAgICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gbC53O1xuICAgICAgICBlbHNlIGlmICh0aGlzLnggPiBsLncpIHRoaXMueCA9IDA7XG5cbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiBsLnRpbWVTdGVwTXM7XG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB0aGlzLnkgPSBsLmg7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA+IGwuaCkgdGhpcy55ID0gMDtcblxuICAgICAgICAvL1RPRE8gdXNlIGdyaWQubW92ZSBpbnN0ZWFkID9cbiAgICAgICAgbC5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICBjb25zdCBhcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucHJleXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBhIG9mIGFzKSB7XG4gICAgICAgICAgICBpZiAoYSA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQoYSkgPiBsLmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSBBbmltYWwuUFJFWSlcbiAgICAgICAgICAgICAgICB0aGlzLnByZXlzLnB1c2goYSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVkYXRvcnMucHVzaChhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VDaGlsZCgpIHtcbiAgICAgICAgLy9kbyBiZXR0ZXI6IG1ha2UgY2hpbGQgYXJvdW5kXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWFsKHRoaXMudHlwZSwgdGhpcy5sLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vYmFzZS9ncmlkJztcbmltcG9ydCB7IHJlbW92ZUZyb21BcnJheVMgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbmV4cG9ydCBjbGFzcyBMYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL3RoZSBtYXggc3BlZWRcbiAgICAgICAgdGhpcy5WX01BWCA9IDAuMTtcblxuICAgICAgICB0aGlzLnAgPSAwLjAyOyAvL3ByZWRhdG9yIGRlYXRoIHByb2JhYmlsaXR5XG4gICAgICAgIHRoaXMucSA9IDAuMTsgLy9wcmV5IHJlcHJvZHVjdGlvbiBwcm9iYWJpbGl0eVxuICAgICAgICB0aGlzLnIgPSAwLjU7IC8vZWF0ZW4gcHJleSB0cmFuc2Zvcm1hdGlvbiBwcm9iYWJpbGl0eVxuICAgICAgICB0aGlzLm5iID0gMzsgLy9uZWlnaGJvcnMgbnVtYmVyXG5cbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXVxuICAgICAgICB0aGlzLnByZXlzID0gW11cbiAgICAgICAgdGhpcy5kID0gMTBcbiAgICAgICAgdGhpcy50aW1lU3RlcE1zID0gMjBcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgdGhpcy5kKTtcblxuXG5cbiAgICAgICAgLyppbnRbXVtdIGhpc3RvO1xuICAgICAgICBpbnQgaW5kZXg9MDtcbiAgICAgICAgdGhpcy5jMkNoYXJ0PWMyQ2hhcnQ7XG4gICAgICAgIHRoaXMuaENoYXJ0PWhDaGFydDtcbiAgICAgICAgdGhpcy5oaXN0bz1uZXcgaW50W3dDaGFydF1bXTtcbiAgICAgICAgZm9yKGludCBpPTA7aTx3Q2hhcnQ7aSsrKVxuICAgICAgICAgICAgaGlzdG9baV09bmV3IGludFtdezAsMH07Ki9cblxuXG4gICAgfVxuXG5cbiAgICBzdGVwKHRpbWVTdGVwTXMpIHtcblxuICAgICAgICAvL29ic2VydmVcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZXlzKSBhLm9ic2VydmUoKTtcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZWRhdG9ycykgYS5vYnNlcnZlKCk7XG5cbiAgICAgICAgY29uc3QgcHJleXNUb0Jvcm4gPSBbXVxuICAgICAgICBjb25zdCBwcmV5c1RvRGllID0gW11cbiAgICAgICAgY29uc3QgcHJlZHNUb0Jvcm4gPSBbXVxuICAgICAgICBjb25zdCBwcmVkc1RvRGllID0gW11cblxuICAgICAgICAvL3ByZXkgcmVwcm9kdWN0aW9uIGlmIG5vIHByZWRhdG9yIGFyb3VuZFxuICAgICAgICBmb3IgKGxldCBwcmV5IG9mIHRoaXMucHJleXMpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy5xKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwcmV5LnByZWRhdG9ycy5sZW5ndGggIT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAocHJleS5wcmV5cy5sZW5ndGggPj0gdGhpcy5uYikgY29udGludWU7XG4gICAgICAgICAgICBwcmV5c1RvQm9ybi5wdXNoKHByZXkubWFrZUNoaWxkKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgcHJlZCBvZiB0aGlzLnByZWRhdG9ycykge1xuICAgICAgICAgICAgaWYgKHByZWQucHJleXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvL25vIHByZXkgYXJvdW5kOiBwcmVkYXRvciBkaWVzIHdpdGggcHJvYmFiaWxpdHkgcFxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgdGhpcy5wKSBwcmVkc1RvRGllLnB1c2gocHJlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vcHJleSBlYXRlblxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXlUb0VhdCA9IHByZWQucHJleXMuZ2V0KChpbnQpKHByZWQucHJleXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgICAgICAgIHByZXlzVG9EaWUucHVzaChwcmV5VG9FYXQpO1xuXG4gICAgICAgICAgICAgICAgLy9wcmVkYXRvciByZXByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChwcmVkLnByZWRhdG9ycy5sZW5ndGggPj0gbmIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHByZWRzVG9Cb3JuLnB1c2gocHJlZC5tYWtlQ2hpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXlzLnB1c2goLi4ucHJleXNUb0Jvcm4pO1xuICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKC4uLnByZWRzVG9Cb3JuKTtcblxuICAgICAgICAvL3RoaXMucHJleXMucmVtb3ZlQWxsKHByZXlzVG9EaWUpO1xuICAgICAgICAvL3RoaXMucHJleXMgPSB0aGlzLnByZXlzLmZpbHRlcih4ID0+ICFwcmV5c1RvRGllLmhhcyh4KSk7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheVModGhpcy5wcmV5cywgcHJleXNUb0RpZSlcblxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZXlzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSwgYS54LCBhLnkpO1xuXG4gICAgICAgIC8vdGhpcy5wcmVkYXRvcnMucmVtb3ZlQWxsKHByZWRzVG9EaWUpO1xuICAgICAgICAvL3RoaXMucHJlZGF0b3JzID0gdGhpcy5wcmVkYXRvcnMuZmlsdGVyKHggPT4gIXByZWRzVG9EaWUuaGFzKHgpKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5Uyh0aGlzLnByZWRhdG9ycywgcHJlZHNUb0RpZSlcblxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZWRzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSwgYS54LCBhLnkpO1xuXG4gICAgICAgIC8vbW92ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpXG4gICAgICAgICAgICBhLm1vdmUoKTtcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZWRhdG9ycylcbiAgICAgICAgICAgIGEubW92ZSgpO1xuXG4gICAgICAgIC8qL2hpc3RvXG4gICAgICAgIGhpc3RvW2luZGV4XSA9IG5ldyBpbnRbXXsgcHJleXMuc2l6ZSgpLCBwcmVkYXRvcnMuc2l6ZSgpIH07XG4gICAgICAgIGlmIChpbmRleCA9PSBoaXN0by5sZW5ndGggLSAxKSBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaW5kZXgrKzsqL1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGFuZCB9IGZyb20gJy4vTGFuZCc7XG5pbXBvcnQgeyBBbmltYWwgfSBmcm9tICcuL0FuaW1hbCc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcblxuY2xhc3MgUHJleVByZWRhdG9yU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG5cbiAgICAgICAgLy9kaXNwbGF5IGFuaW1hbFxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZnVuY3Rpb24gKGNwLCBhKSB7XG4gICAgICAgICAgICBjcC5jMmQuZmlsbFJlY3QoYS54LCBhLnksIDMsIDMpO1xuICAgICAgICAgICAgLypjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLmFyYyhhLngsIGEueSwgMC41LCAwLCAyKk1hdGguUEkpO1xuICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjMi5maWxsKCk7Ki9cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcblxuICAgICAgICAgICAgLy90cmFuc3BhcmVuY3lcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kaXNwbGF5IGFuaW1hbHNcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0aC5sYW5kLnByZXlzKVxuICAgICAgICAgICAgICAgIGRpc3BsYXkodGhpcywgYSk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0aC5sYW5kLnByZWRhdG9ycylcbiAgICAgICAgICAgICAgICBkaXNwbGF5KHRoaXMsIGEpO1xuXG4gICAgICAgICAgICAvKi9sYWJlbFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjMi5maWxsVGV4dChwcmV5cy5sZW5ndGggKyBcIi9cIiArIHByZWRhdG9ycy5sZW5ndGgsIDIsIDEwKTsqL1xuXG4gICAgICAgICAgICAvL2NoYXJ0XG4gICAgICAgICAgICAvL2MyQ2hhcnQuc2V0RmlsbFN0eWxlKGJhY2tDb2xvcjIpO1xuICAgICAgICAgICAgLy9jMkNoYXJ0LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgICAgICAgICAvL2RvdWJsZSBtYXggPSBnZXRNYXhIaXN0bygpO1xuICAgICAgICAgICAgLypwdWJsaWMgaW50IGdldE1heEhpc3RvKCkge1xuICAgICAgICAgICAgICAgIGludCBtYXg9MDtcbiAgICAgICAgICAgICAgICBmb3IoaW50IGk9MDtpPGhpc3RvLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihoaXN0b1tpXVswXT5tYXgpIG1heD1oaXN0b1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlzdG9baV1bMV0+bWF4KSBtYXg9aGlzdG9baV1bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3VibGUgaDEsIGgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgaGlzdG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEgPSBoQ2hhcnQgKiBoaXN0b1tpXVswXSAvIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIgPSBoQ2hhcnQgKiBoaXN0b1tpXVsxXSAvIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5zZXRGaWxsU3R5bGUocHJleUNvbG9yMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaSwgaENoYXJ0IC0gaDEsIDEsIGgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5zZXRGaWxsU3R5bGUocHJlZGF0b3JDb2xvcjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGksIGhDaGFydCAtIGgyLCAxLCBoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5zZXRGaWxsU3R5bGUoQ3NzQ29sb3IubWFrZSgyNTUsIDI1NSwgMjU1KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGluZGV4LCAwLCAxLCBoQ2hhcnQpO1xuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLnBzLCB0aC5oIC8gdGhpcy5wcyk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8qKiBAdHlwZSB7TGFuZH0gKi9cbiAgICAgICAgdGhpcy5sYW5kID0gbmV3IExhbmQodGhpcy53LCB0aGlzLmgpXG5cbiAgICB9XG5cblxuICAgIGluaXRSYW5kb20obmJQcmV5ID0gNSwgbmJQcmVkYXRvciA9IDE1MCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUHJleTsgaSsrKVxuICAgICAgICAgICAgdGhpcy5sYW5kLnByZXlzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEFuaW1hbCgwLCB0aGlzLmxhbmQsIHRoaXMudyAqIE1hdGgucmFuZG9tKCksIHRoaXMuaCAqIE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUHJlZGF0b3I7IGkrKylcbiAgICAgICAgICAgIHRoaXMubGFuZC5wcmVkYXRvcnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgQW5pbWFsKDEsIHRoaXMubGFuZCwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLy9zdGFydFxuICAgIHN0YXJ0KHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5sYW5kLnN0ZXAodGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBjb25zdCBwcmV5UHJlZGF0b3IgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUHJleVByZWRhdG9yU2ltdWxhdGlvbihvcHRzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==