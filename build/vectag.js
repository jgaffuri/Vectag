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
    setRandomSpeed(smax = this.sea.V_MAX) {
        this.va = Math.random() * 2 * Math.PI;
        this.v = Math.random() * smax;
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


    setRandomSpeed() {
        for (let p of this.ps)
            p.setRandomSpeed()
        return this
    }

    explodeSun() {
        //TODO
        //get sun
        //disaggregate it
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
                c2.fillStyle = "rgb(255,255," + Math.floor(255 * (1 - t)) + ")";
                c2.beginPath();
                c2.arc(this.geoToPixX(p.x), this.geoToPixY(p.y), p.r() / this.ps, 0, 2 * Math.PI);
                c2.closePath();
                c2.fill();
            }

            //label
            c2.fillStyle = "rgb(200,200,200)";
            c2.fillRect(0, 0, 65, 13);
            c2.fillStyle = "rgb(0,0,0)";
            c2.fillText(th.uni.ps.length + " planets", 2, 10);

            //frame
            c2.strokeStyle = "darkgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            c2.stroke();
        };

        /** @type {Universe} */
        this.uni = new _Universe__WEBPACK_IMPORTED_MODULE_0__["Universe"](this.w, this.h)
    }

    //
    initRandom(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        this.uni.addPlanets(nb, mi, minSpeed, maxSpeed);
        return this;
    }

    //
    initBigBang(nb = 1000, mi = 1, minSpeed = 0.35, maxSpeed = 0.7, rad = 100) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        const cx = this.w * 0.5, cy = this.h * 0.5;
        const angleStep = 2 * Math.PI / nb;
        for (let i = 0; i < nb; i++) {
            const a = i * angleStep;

            //position
            const d = rad * Math.random();
            const x = cx + d * Math.cos(a), y = cy + d * Math.sin(a);

            //speed
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const aS = a + 2 * (Math.random() - 0.5) * 2 * Math.PI / 3;
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

        //TODO use move instead ?
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
        this.preys = this.preys.filter(x => !preysToDie.has(x));
        for (let a of preysToDie) grid.remove(a, a.x, a.y);
        //this.predators.removeAll(predsToDie);
        this.predators = this.predators.filter(x => !predsToDie.has(x));
        for (let a of predsToDie) grid.remove(a, a.x, a.y);

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
        const display = function (a) {
            c2.fillRect(a.x, a.y, 3, 3);
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
            c2.fillRect(0, 0, w, h);

            //display animals
            c2.fillStyle = "blue";
            for (let a of preys)
                display(a);
            c2.fillStyle = "red";
            for (let a of predators)
                display(a);

            //label
            c2.fillStyle = "lightgray";
            c2.fillRect(0, 0, 65, 13);
            c2.fillStyle = "black";
            c2.fillText(preys.length + "/" + predators.length, 2, 10);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvbGliLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NhcmRpbi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9TZWEuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BwL0FuaW1hbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvTGFuZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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O0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLEtBQUs7QUFDeEIsd0JBQXdCLDBDQUFJOztBQUU1Qjs7O0FBR0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQSxvQkFBb0IsOENBQU07QUFDMUI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHTztBQUNQO0FBQ0EiLCJmaWxlIjoidmVjdGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJidWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmV4cG9ydCBjbGFzcyBDYW52YXNQbHVzIHtcblxuICAgIC8vY2hlY2s6XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20va2FuZ2F4L2ZhYnJpYy5qcy9cbiAgICAvL2h0dHA6Ly9raW5ldGljanMuY29tL1xuICAgIC8vaHR0cDovL3d3dy5jcmVhdGVqcy5jb20vRG9jcy9FYXNlbEpTL2NsYXNzZXMvTW91c2VFdmVudC5odG1sXG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpdklkXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSB3XG4gICAgICogQHBhcmFtIHtudW1iZXI9fSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGl2SWQgPSBcInZhZGl2XCIsIGNhbnZhc0lkID0gXCJ2YWNhbnZhc1wiLCBjZW50ZXIgPSB1bmRlZmluZWQsIHBzID0gMSkge1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9tYWtlIGNhbnZhcyB3aXRoaW4gZGl2XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSBjYW52YXNJZDtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuXG4gICAgICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgICAgIHRoaXMuYzJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyXG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyIHx8IHsgeDogdGhpcy53ICogMC41LCB5OiB0aGlzLmggKiAwLjUgfVxuICAgICAgICAvLyB6b29tIGZhY3RvcjogcGl4ZWwgc2l6ZSwgaW4gbS9waXhcbiAgICAgICAgdGhpcy5wcyA9IHBzO1xuXG4gICAgICAgIC8vbW91c2UgY2xpY2sgLSBwYW5cbiAgICAgICAgbGV0IG1wYW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4geyBtcGFuID0gdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChtcGFuKSB0aGlzLnBhbigtZS5tb3ZlbWVudFggKiB0aGlzLnBzLCBlLm1vdmVtZW50WSAqIHRoaXMucHMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlID0+IHsgbXBhbiA9IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vbW91c2Ugd2hlZWwgLSB6b29tXG4gICAgICAgIGNvbnN0IGYgPSAxLjVcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZl8gPSBlLmRlbHRhWSA+IDAgPyBmIDogMSAvIGY7XG4gICAgICAgICAgICB0aGlzLnpvb20oZl8sIHRoaXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHRoaXMucGl4VG9HZW9ZKGUub2Zmc2V0WSkpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm4ge0NhblBsLkNhbnZhc1BsdXN9ICovXG4gICAgcmVkcmF3KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk92ZXJyaWRlIHJlZHJhdyBtZXRob2RcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vY29udmVyc2lvbiBmdW5jdGlvbnNcbiAgICBnZW9Ub1BpeFgoeEdlbykgeyByZXR1cm4gKHhHZW8gLSB0aGlzLmNlbnRlci54KSAvIHRoaXMucHMgKyB0aGlzLncgKiAwLjU7IH1cbiAgICBnZW9Ub1BpeFkoeUdlbykgeyByZXR1cm4gLSh5R2VvIC0gdGhpcy5jZW50ZXIueSkgLyB0aGlzLnBzICsgdGhpcy5oICogMC41OyB9XG4gICAgcGl4VG9HZW9YKHgpIHsgcmV0dXJuICh4IC0gdGhpcy53ICogMC41KSAqIHRoaXMucHMgKyB0aGlzLmNlbnRlci54OyB9XG4gICAgcGl4VG9HZW9ZKHkpIHsgcmV0dXJuIC0oeSAtIHRoaXMuaCAqIDAuNSkgKiB0aGlzLnBzICsgdGhpcy5jZW50ZXIueTsgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqL1xuICAgIHBhbihkeEdlbywgZHlHZW8pIHtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSBkeEdlbztcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSBkeUdlbztcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZcbiAgICAgKi9cbiAgICB6b29tKGYgPSAxLCB4R2VvID0gdGhpcy5jZW50ZXIueCwgeUdlbyA9IHRoaXMuY2VudGVyLnkpIHtcbiAgICAgICAgdGhpcy5wcyAqPSBmO1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9ICh4R2VvLXRoaXMuY2VudGVyLngpKigxLWYpXG4gICAgICAgIHRoaXMuY2VudGVyLnkgKz0gKHlHZW8tdGhpcy5jZW50ZXIueSkqKDEtZilcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcblxuZXhwb3J0IGNsYXNzIEdyaWQge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEB0ZW1wbGF0ZSBUXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoLCByZXMpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5yZXMgPSByZXM7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubGVuZ3RoWCA9IE1hdGguZmxvb3IodyAvIHJlcyArIDEpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmxlbmd0aFkgPSBNYXRoLmZsb29yKGggLyByZXMgKyAxKTtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBcnJheS48QXJyYXkuPFQ+Pj59ICovXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoWDsgaSsrKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBcnJheS48VD4+fSAqL1xuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aFk7IGorKykge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFQ+fSAqL1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbaV1bal0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHltaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1heFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWF4XG4gICAgICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICAgICAqL1xuICAgIGdldCh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgICAgIGNvbnN0IGFzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKHhtaW4gLyB0aGlzLnJlcyk7IGkgPCBNYXRoLmZsb29yKHhtYXggLyB0aGlzLnJlcyArIDEpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMubGVuZ3RoWClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBNYXRoLmZsb29yKHltaW4gLyB0aGlzLnJlcyk7IGogPCBNYXRoLmZsb29yKHltYXggLyB0aGlzLnJlcyArIDEpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaiA+PSB0aGlzLmxlbmd0aFkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGFzLnB1c2guYXBwbHkoYXMsIHRoaXMuY2VsbHNbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgYWRkKG9iaiwgeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tNYXRoLmZsb29yKHggLyB0aGlzLnJlcyldW01hdGguZmxvb3IoeSAvIHRoaXMucmVzKV0ucHVzaChvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqL1xuICAgIHJlbW92ZShvYmosIHgsIHkpIHtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMuY2VsbHNbTWF0aC5mbG9vcih4IC8gdGhpcy5yZXMpXVtNYXRoLmZsb29yKHkgLyB0aGlzLnJlcyldLCBvYmopO1xuICAgIH1cblxuXG4gICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhJbmlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUluaVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4RmluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlGaW5cbiAgICAgKi9cbiAgICBtb3ZlKG9iaiwgeEluaSwgeUluaSwgeEZpbiwgeUZpbikge1xuICAgICAgICBjb25zdCBpSW5pID0gTWF0aC5mbG9vcih4SW5pIC8gdGhpcy5yZXMpO1xuICAgICAgICBjb25zdCBqSW5pID0gTWF0aC5mbG9vcih5SW5pIC8gdGhpcy5yZXMpO1xuICAgICAgICBjb25zdCBpRmluID0gTWF0aC5mbG9vcih4RmluIC8gdGhpcy5yZXMpO1xuICAgICAgICBjb25zdCBqRmluID0gTWF0aC5mbG9vcih5RmluIC8gdGhpcy5yZXMpO1xuXG4gICAgICAgIC8vbm8gY2hhbmdlLCBzdGlsbCBzYW1lIGNlbGxcbiAgICAgICAgaWYoaUluaT09aUZpbiAmJiBqSW5pPT1qRmluKSByZXR1cm47XG5cbiAgICAgICAgLy9jaGFuZ2UgY2VsbFxuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5jZWxsc1tpSW5pXVtqSW5pXSwgb2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaUZpbl1bakZpbl0ucHVzaChvYmopO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9ialRvQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIG91dC5wdXNoKG9ialtrZXldKTtcbiAgICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtUfSBvYmpcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaikge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG4iLCJleHBvcnQgY2xhc3MgU2FyZGluIHtcblxuICAgIC8qXG4gICAgICAgIFNlYSBzZWE7XG4gICAgICAgIHgseSBwb3NpdGlvbiwgaW4gcGl4XG4gICAgICAgIHZ4LHZ5IHNwZWVkLCBpbiBwaXggcGVyIG1zXG4gICAgICAgIHYsIHZhIHNwZWVkIGFuZ2xlIChpbiAtUGksUGkpIGFuZCBub3JtXG4gICAgICAgIGF4LCBheSBhY2NlbGVyYXRpb24sIGluIHBpeCBwZXIgczJcbiAgICAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWEsIHggPSBzZWEudyAqIE1hdGgucmFuZG9tKCksIHkgPSBzZWEuaCAqIE1hdGgucmFuZG9tKCksIHZ4ID0gdW5kZWZpbmVkLCB2eSA9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIHRoaXMuc2VhID0gc2VhO1xuXG4gICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgdGhpcy54ID0geCA8IDAgPyAwIDogeCA+IHNlYS53ID8gc2VhLncgOiB4XG4gICAgICAgIHRoaXMueSA9IHkgPCAwID8gMCA6IHkgPiBzZWEuaCA/IHNlYS5oIDogeVxuXG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICBpZiAoIXZ4ICYmICF2eSkge1xuICAgICAgICAgICAgdGhpcy5zZXRSYW5kb21TcGVlZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgICAgICAgICB0aGlzLnYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICAgICAgICB0aGlzLnZhID0gTWF0aC5hdGFuMih2eSwgdngpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hY2NlbGVyYXRpb25cbiAgICAgICAgdGhpcy5heCA9IDBcbiAgICAgICAgdGhpcy5heSA9IDBcblxuICAgICAgICAvL2FkZCB0byBzcGF0aWFsIGluZGV4XG4gICAgICAgIHRoaXMuc2VhLmdyaWQuYWRkKHRoaXMsIHRoaXMueCwgdGhpcy55KVxuXG4gICAgICAgIC8vbGlzdCBvZiBzYXJkaW5zIGluIHZpc2lvbiBmaWVsZFxuICAgICAgICB0aGlzLm9icyA9IFtdXG4gICAgICAgIC8vbGlzdCBvZiBzYXJkaW5zIGluIGNvbGxpc2lvbiBmaWVsZFxuICAgICAgICB0aGlzLmNvbCA9IFtdXG5cbiAgICB9XG5cblxuICAgIC8qKiBTZXQgcmFuZG9tIHNwZWVkICovXG4gICAgc2V0UmFuZG9tU3BlZWQoc21heCA9IHRoaXMuc2VhLlZfTUFYKSB7XG4gICAgICAgIHRoaXMudmEgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMudiA9IE1hdGgucmFuZG9tKCkgKiBzbWF4O1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52ICogTWF0aC5jb3ModGhpcy52YSk7XG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnYgKiBNYXRoLnNpbih0aGlzLnZhKTtcbiAgICB9XG5cblxuICAgIC8qKiAqL1xuICAgIG9ic2VydmUoKSB7XG5cbiAgICAgICAgLy9pbml0aWFsaXNlIGxpc3RzXG4gICAgICAgIHRoaXMub2JzID0gW107XG4gICAgICAgIHRoaXMuY29sID0gW107XG5cbiAgICAgICAgLy9nZXQgc2FyZGlucyBhcm91bmQgdXNpbmcgc3BhdGlhbCBpbmRleFxuICAgICAgICBjb25zdCBzcyA9IHRoaXMuc2VhLmdyaWQuZ2V0KHRoaXMueCAtIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnkgLSB0aGlzLnNlYS5EX09CUywgdGhpcy54ICsgdGhpcy5zZWEuRF9PQlMsIHRoaXMueSArIHRoaXMuc2VhLkRfT0JTKTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGluIG9ic2VydmF0aW9uIGFuZCBjb2xsaXNpb24gZmllbGRzXG4gICAgICAgIGZvciAobGV0IHMgb2Ygc3MpIHtcbiAgICAgICAgICAgIGlmIChzID09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChzKSA8PSB0aGlzLnNlYS5EX0NPTCkgdGhpcy5jb2wucHVzaChzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQocykgPD0gdGhpcy5zZWEuRF9PQlMpIHtcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGFuZ2xlXG4gICAgICAgICAgICAgICAgbGV0IGRhID0gTWF0aC5hdGFuMihzLnkgLSB0aGlzLnksIHMueCAtIHRoaXMueCkgLSB0aGlzLnZhO1xuICAgICAgICAgICAgICAgIGlmIChkYSA+IE1hdGguUEkpIGRhIC09IDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhIDw9IC1NYXRoLlBJKSBkYSArPSAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBkYSA9IE1hdGguYWJzKGRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGEgPiB0aGlzLnNlYS5BX09CUyAqIDAuNSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnMucHVzaChzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaW5pdGlhbGlzZSBhY2NlbGVyYXRpb25cbiAgICAgICAgdGhpcy5heCA9IDA7IHRoaXMuYXkgPSAwO1xuXG4gICAgICAgIC8vY29sbGlzaW9uOiByZXB1bHNpb25cbiAgICAgICAgZm9yIChsZXQgcyBvZiB0aGlzLmNvbCkge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZChzKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSAxLjAgKiAoMSAvIChkICogZCkgLSAxIC8gKHRoaXMuc2VhLkRfQ09MICogdGhpcy5zZWEuRF9DT0wpKTtcbiAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqICh0aGlzLnggLSBzLngpIC8gZDtcbiAgICAgICAgICAgIHRoaXMuYXkgKz0gYSAqICh0aGlzLnkgLSBzLnkpIC8gZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvd2FyZCB2IHRhcmdldFxuICAgICAgICBjb25zdCBkdiA9ICh0aGlzLnNlYS5WX1RBUkdFVCAtIHRoaXMudikgKiAwLjAxO1xuICAgICAgICB0aGlzLmF4ICs9IGR2ICogdGhpcy52eCAvIHRoaXMudjtcbiAgICAgICAgdGhpcy5heSArPSBkdiAqIHRoaXMudnkgLyB0aGlzLnY7XG5cbiAgICAgICAgLy90b3dhcmQgdGhlIG9ic2VydmVkIG1lYW4gcG9zaXRpb25cbiAgICAgICAgLyppZihvYnMuc2l6ZSgpPjEpe1xuICAgICAgICAgICAgZG91YmxlIHhuPTAseW49MDtcbiAgICAgICAgICAgIGZvcihTYXJkaW4gczpvYnMpe1xuICAgICAgICAgICAgICAgIHhuKz1zLng7XG4gICAgICAgICAgICAgICAgeW4rPXMueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhuPXhuL29icy5zaXplKCk7XG4gICAgICAgICAgICB5bj15bi9vYnMuc2l6ZSgpO1xuICAgICAgICAgICAgZG91YmxlIGQ9TWF0aC5oeXBvdCh4bi14LHluLXkpO1xuICAgICAgICAgICAgYXgrPS0wLjEqKHgteG4pL2Q7XG4gICAgICAgICAgICBheSs9LTAuMSooeS15bikvZDtcbiAgICAgICAgfSovXG5cbiAgICAgICAgLy90b3dhcmQgdGhlIG9ic2VydmVkIHNwZWVkXG4gICAgICAgIGNvbnN0IHQgPSAwLjk7XG4gICAgICAgIGlmICh0aGlzLm9icy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgZHZ4ID0gMCwgZHZ5ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IHMgb2YgdGhpcy5vYnMpIHtcbiAgICAgICAgICAgICAgICBkdnggKz0gcy52eDtcbiAgICAgICAgICAgICAgICBkdnkgKz0gcy52eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR2eCA9ICh0IC0gMSkgKiB0aGlzLnZ4ICsgKDEgLSB0KSAqIGR2eCAvIHRoaXMub2JzLmxlbmd0aDtcbiAgICAgICAgICAgIGR2eSA9ICh0IC0gMSkgKiB0aGlzLnZ5ICsgKDEgLSB0KSAqIGR2eSAvIHRoaXMub2JzLmxlbmd0aDtcblxuICAgICAgICAgICAgY29uc3QgYSA9IDAuMTtcbiAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqIGR2eDtcbiAgICAgICAgICAgIHRoaXMuYXkgKz0gYSAqIGR2eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYXZvaWQgc2hhcmtcbiAgICAgICAgaWYgKHRoaXMuc2VhLnNoYXJrICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnNlYS5zaGFyaztcbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLmh5cG90KChzLnggLSB0aGlzLngpLCAocy55IC0gdGhpcy55KSk7XG4gICAgICAgICAgICBpZiAoZCA8PSB0aGlzLnNlYS5EX09CUykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSA1LjAgKiAoMSAvIChkICogZCkgLSAxIC8gKHRoaXMuc2VhLkRfT0JTICogdGhpcy5zZWEuRF9PQlMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiAodGhpcy54IC0gcy54KSAvIGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIHMueSkgLyBkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgLyoqICovXG4gICAgbW92ZSh0aW1lU3RlcE1zID0gMTApIHtcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5yZW1vdmUodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgc3BlZWRcbiAgICAgICAgdGhpcy52eCArPSB0aGlzLmF4ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLmF5ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy52ID0gTWF0aC5oeXBvdCh0aGlzLnZ4LCB0aGlzLnZ5KTtcbiAgICAgICAgdGhpcy52YSA9IE1hdGguYXRhbjIodGhpcy52eSwgdGhpcy52eCk7XG4gICAgICAgIGlmICh0aGlzLnYgPiB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5zZWEuVl9NQVg7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgICAgIHRoaXMudnkgPSB0aGlzLnNlYS5WX01BWCAqIE1hdGguc2luKHRoaXMudmEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2xpbWl0XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSB0aGlzLnNlYS53O1xuICAgICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gdGhpcy5zZWEuaDtcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuc2VhLncpIHRoaXMueCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnNlYS5oKSB0aGlzLnkgPSAwO1xuXG4gICAgICAgIC8vVE9ETyB1c2UgbW92ZT9cbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqIERpc3RhbmNlIHRvIG90aGVyIHNhcmRpbiAqL1xuICAgIGQocykge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgocy54IC0gdGhpcy54KSwgKHMueSAtIHRoaXMueSkpO1xuICAgIH1cblxuXG4gICAgLyoqIERpc3BsYXkgYSBzYXJkaW4gYm9keSAqL1xuICAgIGRpc3BsYXkoY3AsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjb25zdCBjID0gTWF0aC5mbG9vcigyNTUgKiBNYXRoLmFicyh0aGlzLnZhKSAvIE1hdGguUEkpO1xuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwicmdiKDI1NSwgMjU1LCBcIiArIGMgKyBcIilcIlxuICAgICAgICBjb25zdCBhID0gbGVuZ3RoIC8gdGhpcy52O1xuICAgICAgICBjb25zdCBkeCA9IGEgKiB0aGlzLnZ4ICogMC41O1xuICAgICAgICBjb25zdCBkeSA9IGEgKiB0aGlzLnZ5ICogMC41O1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCAtIGR4KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSAtIGR5KSk7XG4gICAgICAgIGMyLmxpbmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54ICsgZHgpLCBjcC5nZW9Ub1BpeFkodGhpcy55ICsgZHkpKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8qKiBEaXNwbGF5IHNhcmRpbiB2aXNpb24gZmllbGQgKi9cbiAgICBkaXNwbGF5VmlzaW9uRmllbGQoY3AsIGZpbGxTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIubW92ZVRvKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSk7XG4gICAgICAgIC8vVE9ETyBjb3JyZWN0IHRoYXQgIVxuICAgICAgICBjMi5hcmMoY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpLCB0aGlzLnNlYS5EX09CUyAvIGNwLnBzLFxuICAgICAgICAgICAgTWF0aC5QSSAtIHRoaXMudmEgKyB0aGlzLnNlYS5BX09CUyAqIDAuNSwgTWF0aC5QSSAtIHRoaXMudmEgLSB0aGlzLnNlYS5BX09CUyAqIDAuNSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7XG4gICAgfVxuXG4gICAgLyoqIERpc3BsYXkgc2FyZGluIHZpc2lvbiBsaW5rcyAqL1xuICAgIGRpc3BsYXlWaXNpb25MaW5rcyhjcCwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGZvciAobGV0IHNhMiBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgICAgIGMyLmxpbmVUbyhjcC5nZW9Ub1BpeFgoc2EyLngpLCBjcC5nZW9Ub1BpeFkoc2EyLnkpKTtcbiAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRGlzcGxheSBzYXJkaW4gY29sbGlzaW9uIGZpZWxkICovXG4gICAgZGlzcGxheUNvbGxpc2lvbkZpZWxkKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMuc2VhLkRfQ09MICogMC41IC8gY3AucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgU2FyZGluIH0gZnJvbSAnLi9TYXJkaW4nO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2Jhc2UvZ3JpZCc7XG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbmV4cG9ydCBjbGFzcyBTZWEge1xuXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8vVE9ETyBzaG91bGQgYmVjb21lIHN0YXRpYyBhdHRyaWJ1dGVzIG9mIFNhcmRpbiBjbGFzc1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgdGhpcy5EX09CUyA9IDUwXG4gICAgICAgIHRoaXMuQV9PQlMgPSAyMDAgKiBNYXRoLlBJIC8gMTgwXG5cbiAgICAgICAgLy9jb2xsaXNpb25cbiAgICAgICAgdGhpcy5EX0NPTCA9IDEwXG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICB0aGlzLlZfVEFSR0VUID0gMC4zXG4gICAgICAgIHRoaXMuVl9NQVggPSAwLjZcblxuXG4gICAgICAgIC8vc2hhcmtcbiAgICAgICAgdGhpcy5EX1NIQVJLX0VBVCA9IDEyXG4gICAgICAgIHRoaXMuRUFURU5fU0FSRElOX05CID0gMFxuXG5cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgdGhpcy5oID0gaDtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgdGhpcy5EX09CUyk7XG5cbiAgICAgICAgdGhpcy5maXNoID0gW11cblxuICAgICAgICB0aGlzLnNoYXJrID0gbnVsbDtcbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cblxuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IHNhIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIHNhLm9ic2VydmUoKTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgc2Egb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgc2EubW92ZSgpO1xuXG4gICAgICAgIC8vc2hhcmsgZWF0IGZpc2hcbiAgICAgICAgdGhpcy5zaGFya0VhdCgpO1xuICAgIH1cblxuXG5cbiAgICBzaGFya0VhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLmdyaWQuZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShzLCBzLngsIHMueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgKz0gdGhpcy5raWxsZWQubGVuZ3RoO1xuICAgICAgICAvL2VhdGVuRmlzaE5iLnNldFRleHQoXCJFYXRlbiBmaXNoOiBcIiArIEVBVEVOX1NBUkRJTl9OQik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogQWRkIGEgbnVtYmVyIG9mIGZpc2ggKi9cbiAgICBhZGRGaXNoKG5iID0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspXG4gICAgICAgICAgICB0aGlzLmZpc2gucHVzaChuZXcgU2FyZGluKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKiogU2V0IHJhbmRvbSBzcGVlZCBmb3IgYWxsIGZpc2ggKi9cbiAgICBzZXRSYW5kb21TcGVlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpc2gpXG4gICAgICAgICAgICBmLnNldFJhbmRvbVNwZWVkKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFNlYSB9IGZyb20gJy4vU2VhJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuXG5jbGFzcyBGaXNoU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2FkZCBlYXRlbiBmaXNoIG5iIGxhYmVsXG5cblxuICAgICAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuICAgICAgICB0aGlzLnNob3dGaXNoVmlzaW9uRmllbGQgPSBmYWxzZVxuICAgICAgICB0aGlzLnNob3dGaXNoVmlzaW9uTGlua3MgPSBmYWxzZVxuICAgICAgICB0aGlzLnNob3dGaXNoQ29sbGlzaW9uRmllbGQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG4gICAgICAgICAgICBjb25zdCBzID0gdGguc2VhXG5cbiAgICAgICAgICAgIC8vY2xlYXJcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgxMjAsMTIwLDI1NSwwLjYpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5VmlzaW9uRmllbGQodGhpcywgXCJyZ2JhKDIwMCwyMDAsMjAwLDAuMTUpXCIsIDEpXG4gICAgICAgICAgICAvL3Nob3cgdmlzaW9uIGxpbmtzXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hWaXNpb25MaW5rcylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIHNhLmRpc3BsYXlWaXNpb25MaW5rcyh0aGlzLCBcInJnYmEoMjU1LDEwMCwxMDAsMC4zKVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IGNvbGxpc2lvbiBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoQ29sbGlzaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5Q29sbGlzaW9uRmllbGQodGhpcywgXCJwdXJwbGVcIiwgMSlcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2FyZGluc1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMiAvIHRoaXMucHNcbiAgICAgICAgICAgIGNvbnN0IHNhcmRpbkxlbmd0aCA9IDdcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICBzYS5kaXNwbGF5KHRoaXMsIHNhcmRpbkxlbmd0aClcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2hhcmtcbiAgICAgICAgICAgIGlmIChzLnNoYXJrICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDQgLyB0aGlzLnBzXG4gICAgICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJrTGVuZ3RoID0gMTIgLyB0aGlzLnBzXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzaGFya0xlbmd0aCAqIE1hdGguY29zKHMuc2hhcmsuYW5nbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc2hhcmtMZW5ndGggKiBNYXRoLnNpbihzLnNoYXJrLmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzLnNoYXJrLngpLCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpKTtcbiAgICAgICAgICAgICAgICBjMi5saW5lVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSAtIGR4LCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpIC0gZHkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYmxvb2Qgc3BvdFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDFcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIubW92ZVRvKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSk7XG4gICAgICAgICAgICAgICAgYzIuYXJjKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCkgLSAzLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpIC0gMywgdGgudyAvIHRoaXMucHMgKyAzLCB0aC5oIC8gdGhpcy5wcyArIDMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IHsgeDogdGguY3BsdXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHk6IHRoLmNwbHVzLnBpeFRvR2VvWShlLm9mZnNldFkpLCBhbmdsZTogMCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgeEcgPSB0aC5jcGx1cy5waXhUb0dlb1goZS5vZmZzZXRYKTtcbiAgICAgICAgICAgIGNvbnN0IHlHID0gdGguY3BsdXMucGl4VG9HZW9ZKGUub2Zmc2V0WSk7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoLXlHICsgdGguc2VhLnNoYXJrLnksIHhHIC0gdGguc2VhLnNoYXJrLngpO1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0geyB4OiB4RywgeTogeUcsIGFuZ2xlOiBhbmdsZSB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZSA9PiB7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSBudWxsO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8qKiBAdHlwZSB7U2VhfSAqL1xuICAgICAgICB0aGlzLnNlYSA9IG5ldyBTZWEodGhpcy53LCB0aGlzLmgpXG5cbiAgICB9XG5cblxuICAgIGluaXRSYW5kb20obmIgPSAxNTAwKSB7XG4gICAgICAgIHRoaXMuc2VhLmFkZEZpc2gobmIpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuXG4gICAgc3RhcnQodGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnNlYS5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgZmlzaCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBGaXNoU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiaW1wb3J0IHsgb2JqVG9BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJuIHtDZWxsfVxuICAgICAqL1xuICAgIGFkZCh4LCB5KSB7XG4gICAgICAgIC8vZmluZCBhZ2VudCBhdCBsb2NhdGlvblxuICAgICAgICAvKipAdHlwZSB7c3RyaW5nfSovXG4gICAgICAgIGNvbnN0IGlkID0geCArIFwiX1wiICsgeTtcbiAgICAgICAgaWYgKHRoaXMucG9wdWxhdGlvbklbaWRdKSByZXR1cm4gbnVsbDtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxcbiAgICAgICAgLyoqQHR5cGUge0NlbGx9ICovXG4gICAgICAgIGNvbnN0IGNlbGwgPSB7IHg6IHgsIHk6IHksIG5iOiAwIH07XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKGNlbGwpO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JW2lkXSA9IGNlbGw7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHN0ZXAoKSB7XG5cbiAgICAgICAgLy9UT0RPIGRvdWJsZSBpbmRleGluZz8gYnkgcmF3IGFuZCB0aGVuIGNvbHVtbiA/XG4gICAgICAgIC8vcG9wdWxhdGUgY2VsbCBzdXJyb3VuZGluZ3NcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IHN1ckkgPSB7fTtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGxpc3Qgb2YgY2VsbHNcbiAgICAgICAgZm9yIChsZXQgY2VsbCBvZiB0aGlzLnBvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIC8vICsxIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICAgICAgICBjb25zdCBzcnMgPSBVbml2ZXJzZS5nZXRDZWxsU3Vycm91bmRpbmcoY2VsbCwgdGhpcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBzdXIgb2Ygc3JzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gc3VyLnggKyBcIl9cIiArIHN1ci55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1cl8gPSBzdXJJW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHN1cl8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyXy5uYisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1ci5uYiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHN1cklba2V5XSA9IHN1cjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0IzL1MyM1xuICAgICAgICAvL2tpbGwgY2VsbHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICBjb25zdCBjZWxsc1RvS2VlcEkgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgY2VsbCBvZiB0aGlzLnBvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNlbGwueCArIFwiX1wiICsgY2VsbC55O1xuICAgICAgICAgICAgY29uc3QgY2VsbF8gPSBzdXJJW2tleV07XG4gICAgICAgICAgICBpZiAoIWNlbGxfKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vaWYgKG5iPDIgb3IgbmI+MykgLT4ga2lsbFxuICAgICAgICAgICAgaWYgKGNlbGxfLm5iIDwgMiB8fCBjZWxsXy5uYiA+IDMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXAucHVzaChjZWxsKTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwSVtrZXldID0gY2VsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSBjZWxsc1RvS2VlcDtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSSA9IGNlbGxzVG9LZWVwSTtcblxuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIGNvbnN0IHN1cnMgPSBvYmpUb0FycmF5KHN1ckkpO1xuICAgICAgICBmb3IgKGxldCBzdXIgb2Ygc3Vycykge1xuXG4gICAgICAgICAgICBpZiAoc3VyLm5iICE9PSAzKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jaGVjayBpZiBhbHJlYWR5IGFsaXZlXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMucG9wdWxhdGlvbklba2V5XTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKHN1cik7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JW2tleV0gPSBzdXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dE1TXG4gICAgICogQHBhcmFtIHtDYW52YXNQbHVzfSBjcGx1c1xuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHN0YXJ0KG5iLCB0aW1lb3V0TVMsIGNwbHVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdW5pID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgICAgICBjcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYiA+IDAgJiYgaSsrID4gbmIpIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCB0aW1lb3V0TVMpO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDZWxsfSBjZWxsXG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdW5pXG4gICAgICogQHJldHVybiB7QXJyYXkuPENlbGw+fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDZWxsU3Vycm91bmRpbmcoY2VsbCwgdW5pKSB7XG4gICAgICAgIGNvbnN0IHgxID0gY2VsbC54ID09PSAwID8gdW5pLncgLSAxIDogY2VsbC54IC0gMTtcbiAgICAgICAgY29uc3QgeDIgPSBjZWxsLnggPT09IHVuaS53IC0gMSA/IDAgOiBjZWxsLnggKyAxO1xuICAgICAgICBjb25zdCB5MSA9IGNlbGwueSA9PT0gMCA/IHVuaS5oIC0gMSA6IGNlbGwueSAtIDE7XG4gICAgICAgIGNvbnN0IHkyID0gY2VsbC55ID09PSB1bmkuaCAtIDEgPyAwIDogY2VsbC55ICsgMTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgeDogeDEsIHk6IHkxIH0sXG4gICAgICAgICAgICB7IHg6IHgxLCB5OiBjZWxsLnkgfSxcbiAgICAgICAgICAgIHsgeDogeDEsIHk6IHkyIH0sXG4gICAgICAgICAgICB7IHg6IGNlbGwueCwgeTogeTEgfSxcbiAgICAgICAgICAgIHsgeDogY2VsbC54LCB5OiB5MiB9LFxuICAgICAgICAgICAgeyB4OiB4MiwgeTogeTEgfSxcbiAgICAgICAgICAgIHsgeDogeDIsIHk6IGNlbGwueSB9LFxuICAgICAgICAgICAgeyB4OiB4MiwgeTogeTIgfVxuICAgICAgICBdO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuXG4vL1RPRE8gem9vbS9wYW4sIHdpdGggY2FudmFzIHRyYW5zZm9ybTogYmV0dGVyIHVuaXZlcnNlIGxpbWl0c1xuLy9UT0RPIGJ1dHRvbnMgKHBsYXksIHN0b3AsIHNwZWVkLCBkcmF3LCBwYW4pXG4vL1RPRE8gY2hlY2sgY2FudmFzIGFuaW1hdGlvblxuXG5cbmNsYXNzIEdvTFNpbXVsYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5kaXZJZCA9IG9wdHMuZGl2SWQgfHwgXCJ2YWRpdlwiO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kcmF3IGNlbGxzXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGgudW5pLnBvcHVsYXRpb24pXG4gICAgICAgICAgICAgICAgYzIuZmlsbFJlY3QodGhpcy5nZW9Ub1BpeFgoY2VsbC54KSwgdGhpcy5nZW9Ub1BpeFkoY2VsbC55KSwgMSAvIHRoaXMucHMsIDEgLyB0aGlzLnBzKTtcblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImxpZ2h0Z3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKGRlbnNpdHkgPSAwLjA1KSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IG5iID0gdGhpcy51bmkudyAqIHRoaXMudW5pLmggKiBkZW5zaXR5O1xuICAgICAgICB3aGlsZSAoaSA8IG5iKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS53ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy51bmkuYWRkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8vXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudW5pLnN0YXJ0KC0xLCAwLCB0aGlzLmNwbHVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IGdhbWVPZkxpZmUgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgR29MU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vcGxhbmV0cy9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb2wvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlzaC9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcC9pbmRleFwiXG4iLCJleHBvcnQgY2xhc3MgUGxhbmV0IHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1IFRoZSB1bml2ZXJzZSB0aGUgcGxhbmV0IGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIG1hc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ4IFRoZSBzcGVlZCB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFRoZSBzcGVlZCB5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm0gPSBtO1xuXG4gICAgICAgIC8vY29tcHV0ZSByYWRpdXNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcblxuICAgICAgICAvL3NldCBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IHIgPyByIDogeCA+IHUudyAtIHIgPyB1LncgLSByIDogeDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCByID8gciA6IHkgPiB1LmggLSByID8gdS5oIC0gciA6IHk7XG5cbiAgICAgICAgLy9zZXQgc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSB2eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGZvcmNlLCBiYXNlZCBvbiB0aGUgZ3Jhdml0eSBvZiBvdGhlciBwbGFuZXRzLlxuICAgICAqL1xuICAgIG9ic2VydmUoKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZnggPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meSA9IDA7XG5cbiAgICAgICAgLy9jaGVjayBhbGwgb3RoZXIgcGxhbmV0cyBpbiB0aGUgdW5pdmVyc2VcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnUucHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzID09IHApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY29tcHV0ZSBhbmQgYWRkIGdyYXZpdHkgZm9yY2VcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgbGV0IGQgPSB0aGlzLmQocCk7XG4gICAgICAgICAgICBpZiAoZCA9PT0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgZCA9IGQgKiBkICogZDtcbiAgICAgICAgICAgIHRoaXMuZnggKz0gMC4wMSAqIChwLnggLSB0aGlzLngpICogdGhpcy5tICogcC5tIC8gZDtcbiAgICAgICAgICAgIHRoaXMuZnkgKz0gMC4wMSAqIChwLnkgLSB0aGlzLnkpICogdGhpcy5tICogcC5tIC8gZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdG8gdGhlIHBsYW5ldCBwLlxuICAgICAqL1xuICAgIGQocCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgZHggPSBwLnggLSB0aGlzLng7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBwbGFuZXQsIGRlcGVuZGluZyBvbiBpdHMgbWFzcy5cbiAgICAgKi9cbiAgICByKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5tIC8gTWF0aC5QSSwgMC41KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJvdW5jZVxuICAgICAqL1xuICAgIGNoYW5nZShib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9jb21wdXRlIGFjY2VsZXJhdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgYXggPSB0aGlzLmZ4IC8gdGhpcy5tO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgYXkgPSB0aGlzLmZ5IC8gdGhpcy5tO1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgc3BlZWRcbiAgICAgICAgdGhpcy52eCArPSBheCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMudnkgKz0gYXkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vY2hlY2sgdm1heFxuICAgICAgICBpZiAodm1heCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLnNxcnQodGhpcy52eCAqIHRoaXMudnggKyB0aGlzLnZ5ICogdGhpcy52eSk7XG4gICAgICAgICAgICBpZiAodiA+IHZtYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gdm1heCAqIHRoaXMudnggLyB2O1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSB2bWF4ICogdGhpcy52eSAvIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHBvc2l0aW9uXG4gICAgICAgIGxldCBueCA9IHRoaXMueCArIHRoaXMudnggKiB0aW1lU3RlcE1zO1xuICAgICAgICBsZXQgbnkgPSB0aGlzLnkgKyB0aGlzLnZ5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2hhbmRsZSBwb3NpdGlvbiBsaW1pdFxuICAgICAgICBpZiAoYm91bmNlKSB7XG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG4gICAgICAgICAgICBjb25zdCBlID0gMTtcbiAgICAgICAgICAgIGlmIChueCA8IHIpIHsgbnggPSByOyB0aGlzLnZ4ID0gLXRoaXMudnggKiBlOyB9XG4gICAgICAgICAgICBpZiAobnkgPCByKSB7IG55ID0gcjsgdGhpcy52eSA9IC10aGlzLnZ5ICogZTsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncgLSByKSB7IG54ID0gdGhpcy51LncgLSByOyB0aGlzLnZ4ID0gLXRoaXMudnggKiBlOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCAtIHIpIHsgbnkgPSB0aGlzLnUuaCAtIHI7IHRoaXMudnkgPSAtdGhpcy52eSAqIGU7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChueCA8IDApIHsgbnggPSB0aGlzLnUudzsgfVxuICAgICAgICAgICAgaWYgKG55IDwgMCkgeyBueSA9IHRoaXMudS5oOyB9XG4gICAgICAgICAgICBpZiAobnggPiB0aGlzLnUudykgeyBueCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChueSA+IHRoaXMudS5oKSB7IG55ID0gMDsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9tb3ZlIHBsYW5ldFxuICAgICAgICB0aGlzLnUubW92ZSh0aGlzLCBueCwgbnkpXG5cbiAgICB9XG5cblxuICAgIC8qKiBTZXQgcmFuZG9tIHNwZWVkICovXG4gICAgc2V0UmFuZG9tU3BlZWQobWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMudnggPSBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICB0aGlzLnZ5ID0gc3BlZWQgKiBNYXRoLnNpbihhbmdsZSlcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9iYXNlL2dyaWQnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoLCBncmVzID0gTWF0aC5taW4odywgaCkgLyAxMDAuMCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy5wcyA9IFtdO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7R3JpZH0gKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgZ3Jlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgbWFzcyBvZiB0aGUgdW5pdmVyc2VcbiAgICAgKi9cbiAgICBtKCkge1xuICAgICAgICBsZXQgbSA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIG0gKz0gcC5tO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwbGFuZXRcbiAgICAgKi9cbiAgICBjcmVhdGVQbGFuZXQobSwgeCwgeSwgc3ggPSAwLCBzeSA9IDApIHtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQbGFuZXQodGhpcywgbSwgeCwgeSwgc3gsIHN5KTtcbiAgICAgICAgdGhpcy5hZGQocCk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHBsYW5ldFxuICAgICAqL1xuICAgIGFkZChwKSB7XG4gICAgICAgIHAudSA9IHRoaXM7XG4gICAgICAgIHRoaXMucHMucHVzaChwKTtcbiAgICAgICAgdGhpcy5ncmlkLmFkZChwLCBwLngsIHAueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcGxhbmV0XG4gICAgICovXG4gICAgcmVtb3ZlKHApIHtcbiAgICAgICAgcC51ID0gbnVsbDtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIHApO1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlKHAsIHAueCwgcC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcGxhbmV0XG4gICAgICovXG4gICAgbW92ZShwLCBueCwgbnkpIHtcbiAgICAgICAgdGhpcy5ncmlkLm1vdmUocCwgcC54LCBwLnksIG54LCBueSk7XG4gICAgICAgIHAueCA9IG54OyBwLnkgPSBueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZ2dyZWdhdGUgdHdvIHBsYW5ldHNcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUocDEsIHAyKSB7XG4gICAgICAgIGNvbnN0IG0gPSBwMS5tICsgcDIubTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlUGxhbmV0KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ5ICogcDEubSArIHAyLnZ5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHAxKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDIpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5LjxQbGFuZXQ+fVxuICAgICAqL1xuICAgIGZpbmRDb2xsaXNpb24oY29sbGlzaW9uRmFjdG9yID0gMSkge1xuICAgICAgICBmb3IgKGxldCBwaSBvZiB0aGlzLnBzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHcgPSAyICogcGkucigpO1xuICAgICAgICAgICAgY29uc3QgY2FuZCA9IHRoaXMuZ3JpZC5nZXQocGkueCAtIHcsIHBpLnkgLSB3LCBwaS54ICsgdywgcGkueSArIHcpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwaiBvZiBjYW5kKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocGkgPT0gcGopIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgZDEgPSBwaS5kKHBqKTtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMiA9IChwaS5yKCkgKyBwai5yKCkpICogY29sbGlzaW9uRmFjdG9yO1xuICAgICAgICAgICAgICAgIGlmIChkMSA+IGQyKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3BpLCBwal07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIC8qKiBBZGQgcGFuZXRzIHdpdGggcmFuZG9tIHNwZWVkICovXG4gICAgYWRkUGxhbmV0cyhuYiA9IDEsIG1pID0gMC41LCBtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlUGxhbmV0KG1pLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIHAuc2V0UmFuZG9tU3BlZWQobWluU3BlZWQsIG1heFNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICovXG4gICAgc3RlcChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICAvL2ZpbmQgZmlyc3QgY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIGxldCBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSlcbiAgICAgICAgICAgIC8vZmluZCBuZXh0IGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc2V0UmFuZG9tU3BlZWQoKSB7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIHAuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV4cGxvZGVTdW4oKSB7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2dldCBzdW5cbiAgICAgICAgLy9kaXNhZ2dyZWdhdGUgaXRcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcblxuLy9UT0RPIGFkZCByZXN0YXJ0L2JpZyBiYW5nIGJ1dHRvblxuLyogQnV0dG9uIHJlc3RhcnQgPSBuZXcgQnV0dG9uKFwiUmVjb21tZW5jZXIhXCIpO1xuIHJlc3RhcnQuYWRkQ2xpY2tIYW5kbGVyKG5ldyBDbGlja0hhbmRsZXIoKSB7XG4gQE92ZXJyaWRlXG4gcHVibGljIHZvaWQgb25DbGljayhDbGlja0V2ZW50IGV2ZW50KSB7XG4gdS5maWxsKCk7XG4gYy5nZXRDb250ZXh0MmQoKS5zZXRGaWxsU3R5bGUoQ3NzQ29sb3IubWFrZSgwLDAsMCkpO1xuIGMuZ2V0Q29udGV4dDJkKCkuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG4gfVxuIH0pO1xuIFJvb3RQYW5lbC5nZXQoXCJiXCIpLmFkZChyZXN0YXJ0KTsqL1xuXG5jbGFzcyBQbGFuZXRTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IG9wdHMudyB8fCBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBvcHRzLmggfHwgZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL2NsZWFyLCB3aXRoIHRyYW5zcGFyZW5jeVxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMDUpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kaXNwbGF5IHBsYW5ldHNcbiAgICAgICAgICAgIGZvciAobGV0IHAgb2YgdGgudW5pLnBzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHAubSAvIHRoLnVuaS5tKCk7XG4gICAgICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDI1NSxcIiArIE1hdGguZmxvb3IoMjU1ICogKDEgLSB0KSkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5hcmModGhpcy5nZW9Ub1BpeFgocC54KSwgdGhpcy5nZW9Ub1BpeFkocC55KSwgcC5yKCkgLyB0aGlzLnBzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIuZmlsbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2xhYmVsXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYigyMDAsMjAwLDIwMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxUZXh0KHRoLnVuaS5wcy5sZW5ndGggKyBcIiBwbGFuZXRzXCIsIDIsIDEwKTtcblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLnBzLCB0aC5oIC8gdGhpcy5wcyk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnVuaSA9IG5ldyBVbml2ZXJzZSh0aGlzLncsIHRoaXMuaClcbiAgICB9XG5cbiAgICAvL1xuICAgIGluaXRSYW5kb20obmIgPSAxMDAwLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnVuaS5wcyA9IFtdO1xuICAgICAgICB0aGlzLnVuaS5hZGRQbGFuZXRzKG5iLCBtaSwgbWluU3BlZWQsIG1heFNwZWVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9cbiAgICBpbml0QmlnQmFuZyhuYiA9IDEwMDAsIG1pID0gMSwgbWluU3BlZWQgPSAwLjM1LCBtYXhTcGVlZCA9IDAuNywgcmFkID0gMTAwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIGNvbnN0IGN4ID0gdGhpcy53ICogMC41LCBjeSA9IHRoaXMuaCAqIDAuNTtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMiAqIE1hdGguUEkgLyBuYjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gaSAqIGFuZ2xlU3RlcDtcblxuICAgICAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICAgICAgY29uc3QgZCA9IHJhZCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gY3ggKyBkICogTWF0aC5jb3MoYSksIHkgPSBjeSArIGQgKiBNYXRoLnNpbihhKTtcblxuICAgICAgICAgICAgLy9zcGVlZFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgICAgICBjb25zdCBhUyA9IGEgKyAyICogKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIE1hdGguUEkgLyAzO1xuICAgICAgICAgICAgY29uc3Qgc3ggPSBzcGVlZCAqIE1hdGguY29zKGFTKSwgc3kgPSBzcGVlZCAqIE1hdGguc2luKGFTKTtcblxuICAgICAgICAgICAgdGhpcy51bmkuY3JlYXRlUGxhbmV0KG1pLCB4LCB5LCBzeCwgc3kpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vc3RhcnRcbiAgICBzdGFydChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMC44LCB0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQudW5pLnN0ZXAoYm91bmNlLCB2bWF4LCBjb2xsaXNpb25GYWN0b3IsIHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3N0b3BcbiAgICBzdG9wKCkge1xuICAgICAgICAvL1RPRE9cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgcGxhbmV0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBQbGFuZXRTaW11bGF0aW9uKG9wdHMpXG59XG4iLCJcbmV4cG9ydCBjbGFzcyBBbmltYWwge1xuXG4gICAgLy9BbmltYWwuUFJFWSA9IDA7XG4gICAgLy9BbmltYWwuUFJFREFUT1IgPSAxO1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgbCwgeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubCA9IGw7XG5cbiAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICB0aGlzLnggPSB4IDwgMCA/IDAgOiB4ID4gbC53ID8gbC53IDogeFxuICAgICAgICB0aGlzLnkgPSB5IDwgMCA/IDAgOiB5ID4gbC5oID8gbC5oIDogeVxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgdGhpcy52eCA9IDBcbiAgICAgICAgdGhpcy52eSA9IDA7XG5cbiAgICAgICAgLy8/IHRoZSBvbmVzIGFyb3VuZCA/XG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW11cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdXG5cbiAgICAgICAgLy9hZGQgdG8gdGhlIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgbC5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBkKGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguaHlwb3QoKGEueCAtIHRoaXMueCksIChhLnkgLSB0aGlzLnkpKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5sXG4gICAgICAgIGwuZ3JpZC5yZW1vdmUodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIGNvbnN0IGEgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHIgPSAwLjAxICogTWF0aC5yYW5kb20oKTtcblxuICAgICAgICB0aGlzLnZ4ICs9IHIgKiBNYXRoLmNvcyhhKSAqIGwudGltZVN0ZXBNcztcbiAgICAgICAgaWYgKHRoaXMudnggPiBsLlZfTUFYKVxuICAgICAgICAgICAgdGhpcy52eCA9IGwuVl9NQVg7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudnggPCAtbC5WX01BWClcbiAgICAgICAgICAgIHRoaXMudnggPSAtbC5WX01BWDtcblxuICAgICAgICB0aGlzLnZ5ICs9IHIgKiBNYXRoLnNpbihhKSAqIGwudGltZVN0ZXBNcztcbiAgICAgICAgaWYgKHRoaXMudnkgPiBsLlZfTUFYKVxuICAgICAgICAgICAgdGhpcy52eSA9IGwuVl9NQVg7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudnkgPCAtbC5WX01BWClcbiAgICAgICAgICAgIHRoaXMudnkgPSAtbC5WX01BWDtcblxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIGwudGltZVN0ZXBNcztcbiAgICAgICAgaWYgKHRoaXMueCA8IDApIHRoaXMueCA9IGwudztcbiAgICAgICAgZWxzZSBpZiAodGhpcy54ID4gbC53KSB0aGlzLnggPSAwO1xuXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogbC50aW1lU3RlcE1zO1xuICAgICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gbC5oO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnkgPiBsLmgpIHRoaXMueSA9IDA7XG5cbiAgICAgICAgLy9UT0RPIHVzZSBtb3ZlIGluc3RlYWQgP1xuICAgICAgICBsLmdyaWQuYWRkKHRoaXMsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIG9ic2VydmUoKSB7XG4gICAgICAgIGNvbnN0IGFzID0gW107XG5cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdO1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGEgb2YgYXMpIHtcbiAgICAgICAgICAgIGlmIChhID09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChhKSA+IGwuZCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoYS50eXBlID09IEFuaW1hbC5QUkVZKVxuICAgICAgICAgICAgICAgIHRoaXMucHJleXMucHVzaChhKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZUNoaWxkKCkge1xuICAgICAgICAvL2RvIGJldHRlcjogbWFrZSBjaGlsZCBhcm91bmRcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYWwodGhpcy50eXBlLCB0aGlzLmwsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9iYXNlL2dyaWQnO1xuXG5leHBvcnQgY2xhc3MgTGFuZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG5cbiAgICAgICAgLy90aGUgbWF4IHNwZWVkXG4gICAgICAgIHRoaXMuVl9NQVggPSAwLjE7XG5cbiAgICAgICAgdGhpcy5wID0gMC4wMjsgLy9wcmVkYXRvciBkZWF0aCBwcm9iYWJpbGl0eVxuICAgICAgICB0aGlzLnEgPSAwLjE7IC8vcHJleSByZXByb2R1Y3Rpb24gcHJvYmFiaWxpdHlcbiAgICAgICAgdGhpcy5yID0gMC41OyAvL2VhdGVuIHByZXkgdHJhbnNmb3JtYXRpb24gcHJvYmFiaWxpdHlcbiAgICAgICAgdGhpcy5uYiA9IDM7IC8vbmVpZ2hib3JzIG51bWJlclxuXG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW11cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdXG4gICAgICAgIHRoaXMuZCA9IDEwXG4gICAgICAgIHRoaXMudGltZVN0ZXBNcyA9IDIwXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHcsIGgsIHRoaXMuZCk7XG5cblxuXG4gICAgICAgIC8qaW50W11bXSBoaXN0bztcbiAgICAgICAgaW50IGluZGV4PTA7XG4gICAgICAgIHRoaXMuYzJDaGFydD1jMkNoYXJ0O1xuICAgICAgICB0aGlzLmhDaGFydD1oQ2hhcnQ7XG4gICAgICAgIHRoaXMuaGlzdG89bmV3IGludFt3Q2hhcnRdW107XG4gICAgICAgIGZvcihpbnQgaT0wO2k8d0NoYXJ0O2krKylcbiAgICAgICAgICAgIGhpc3RvW2ldPW5ldyBpbnRbXXswLDB9OyovXG5cblxuICAgIH1cblxuXG4gICAgc3RlcCh0aW1lU3RlcE1zKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmV5cykgYS5vYnNlcnZlKCk7XG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmVkYXRvcnMpIGEub2JzZXJ2ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByZXlzVG9Cb3JuID0gW11cbiAgICAgICAgY29uc3QgcHJleXNUb0RpZSA9IFtdXG4gICAgICAgIGNvbnN0IHByZWRzVG9Cb3JuID0gW11cbiAgICAgICAgY29uc3QgcHJlZHNUb0RpZSA9IFtdXG5cbiAgICAgICAgLy9wcmV5IHJlcHJvZHVjdGlvbiBpZiBubyBwcmVkYXRvciBhcm91bmRcbiAgICAgICAgZm9yIChsZXQgcHJleSBvZiB0aGlzLnByZXlzKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHRoaXMucSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAocHJleS5wcmVkYXRvcnMubGVuZ3RoICE9IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHByZXkucHJleXMubGVuZ3RoID49IHRoaXMubmIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcHJleXNUb0Jvcm4ucHVzaChwcmV5Lm1ha2VDaGlsZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHByZWQgb2YgdGhpcy5wcmVkYXRvcnMpIHtcbiAgICAgICAgICAgIGlmIChwcmVkLnByZXlzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy9ubyBwcmV5IGFyb3VuZDogcHJlZGF0b3IgZGllcyB3aXRoIHByb2JhYmlsaXR5IHBcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHRoaXMucCkgcHJlZHNUb0RpZS5wdXNoKHByZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3ByZXkgZWF0ZW5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmV5VG9FYXQgPSBwcmVkLnByZXlzLmdldCgoaW50KShwcmVkLnByZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICAgICAgICBwcmV5c1RvRGllLnB1c2gocHJleVRvRWF0KTtcblxuICAgICAgICAgICAgICAgIC8vcHJlZGF0b3IgcmVwcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiByKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZC5wcmVkYXRvcnMubGVuZ3RoID49IG5iKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBwcmVkc1RvQm9ybi5wdXNoKHByZWQubWFrZUNoaWxkKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV5cy5wdXNoKC4uLnByZXlzVG9Cb3JuKTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMucHVzaCguLi5wcmVkc1RvQm9ybik7XG4gICAgICAgIC8vdGhpcy5wcmV5cy5yZW1vdmVBbGwocHJleXNUb0RpZSk7XG4gICAgICAgIHRoaXMucHJleXMgPSB0aGlzLnByZXlzLmZpbHRlcih4ID0+ICFwcmV5c1RvRGllLmhhcyh4KSk7XG4gICAgICAgIGZvciAobGV0IGEgb2YgcHJleXNUb0RpZSkgZ3JpZC5yZW1vdmUoYSwgYS54LCBhLnkpO1xuICAgICAgICAvL3RoaXMucHJlZGF0b3JzLnJlbW92ZUFsbChwcmVkc1RvRGllKTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSB0aGlzLnByZWRhdG9ycy5maWx0ZXIoeCA9PiAhcHJlZHNUb0RpZS5oYXMoeCkpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHByZWRzVG9EaWUpIGdyaWQucmVtb3ZlKGEsIGEueCwgYS55KTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZXlzKVxuICAgICAgICAgICAgYS5tb3ZlKCk7XG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmVkYXRvcnMpXG4gICAgICAgICAgICBhLm1vdmUoKTtcblxuICAgICAgICAvKi9oaXN0b1xuICAgICAgICBoaXN0b1tpbmRleF0gPSBuZXcgaW50W117IHByZXlzLnNpemUoKSwgcHJlZGF0b3JzLnNpemUoKSB9O1xuICAgICAgICBpZiAoaW5kZXggPT0gaGlzdG8ubGVuZ3RoIC0gMSkgaW5kZXggPSAwO1xuICAgICAgICBlbHNlIGluZGV4Kys7Ki9cblxuICAgIH1cbn1cbiIsImltcG9ydCB7IExhbmQgfSBmcm9tICcuL0xhbmQnO1xuaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnLi9BbmltYWwnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5cbmNsYXNzIFByZXlQcmVkYXRvclNpbXVsYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5kaXZJZCA9IG9wdHMuZGl2SWQgfHwgXCJ2YWRpdlwiO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuXG4gICAgICAgIC8vZGlzcGxheSBhbmltYWxcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBjMi5maWxsUmVjdChhLngsIGEueSwgMywgMyk7XG4gICAgICAgICAgICAvKmMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIuYXJjKGEueCwgYS55LCAwLjUsIDAsIDIqTWF0aC5QSSk7XG4gICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGMyLmZpbGwoKTsqL1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL3RyYW5zcGFyZW5jeVxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYW5pbWFsc1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBhIG9mIHByZXlzKVxuICAgICAgICAgICAgICAgIGRpc3BsYXkoYSk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiBwcmVkYXRvcnMpXG4gICAgICAgICAgICAgICAgZGlzcGxheShhKTtcblxuICAgICAgICAgICAgLy9sYWJlbFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjMi5maWxsVGV4dChwcmV5cy5sZW5ndGggKyBcIi9cIiArIHByZWRhdG9ycy5sZW5ndGgsIDIsIDEwKTtcblxuICAgICAgICAgICAgLy9jaGFydFxuICAgICAgICAgICAgLy9jMkNoYXJ0LnNldEZpbGxTdHlsZShiYWNrQ29sb3IyKTtcbiAgICAgICAgICAgIC8vYzJDaGFydC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgICAgICAgICAgLy9kb3VibGUgbWF4ID0gZ2V0TWF4SGlzdG8oKTtcbiAgICAgICAgICAgIC8qcHVibGljIGludCBnZXRNYXhIaXN0bygpIHtcbiAgICAgICAgICAgICAgICBpbnQgbWF4PTA7XG4gICAgICAgICAgICAgICAgZm9yKGludCBpPTA7aTxoaXN0by5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlzdG9baV1bMF0+bWF4KSBtYXg9aGlzdG9baV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpc3RvW2ldWzFdPm1heCkgbWF4PWhpc3RvW2ldWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG91YmxlIGgxLCBoMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGhpc3RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxID0gaENoYXJ0ICogaGlzdG9baV1bMF0gLyBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyID0gaENoYXJ0ICogaGlzdG9baV1bMV0gLyBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKHByZXlDb2xvcjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGksIGhDaGFydCAtIGgxLCAxLCBoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKHByZWRhdG9yQ29sb3IyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpLCBoQ2hhcnQgLSBoMiwgMSwgaDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKENzc0NvbG9yLm1ha2UoMjU1LCAyNTUsIDI1NSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpbmRleCwgMCwgMSwgaENoYXJ0KTtcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH07XG5cblxuICAgICAgICAvKiogQHR5cGUge0xhbmR9ICovXG4gICAgICAgIHRoaXMubGFuZCA9IG5ldyBMYW5kKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cbiAgICBpbml0UmFuZG9tKG5iUHJleSA9IDUsIG5iUHJlZGF0b3IgPSAxNTApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlByZXk7IGkrKylcbiAgICAgICAgICAgIHRoaXMubGFuZC5wcmV5cy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMCwgdGhpcy5sYW5kLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlByZWRhdG9yOyBpKyspXG4gICAgICAgICAgICB0aGlzLmxhbmQucHJlZGF0b3JzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEFuaW1hbCgxLCB0aGlzLmxhbmQsIHRoaXMudyAqIE1hdGgucmFuZG9tKCksIHRoaXMuaCAqIE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8vc3RhcnRcbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQubGFuZC5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgcHJleVByZWRhdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFByZXlQcmVkYXRvclNpbXVsYXRpb24ob3B0cylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=