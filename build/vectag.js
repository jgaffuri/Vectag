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
    setRandomSpeed() {
        this.va = Math.random() * 2 * Math.PI - Math.PI;
        this.v = Math.random() * this.sea.V_MAX;
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
        for (let f of this.fish) {
            f.setRandomSpeed()
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvbGliLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NhcmRpbi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9TZWEuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BwL0FuaW1hbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvTGFuZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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dUIsZ0JBQWdCO0FBQ3ZDO0FBQ0Esb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR087QUFDUDtBQUNBIiwiZmlsZSI6InZlY3RhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgY2xhc3MgQ2FudmFzUGx1cyB7XG5cbiAgICAvL2NoZWNrOlxuICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL2thbmdheC9mYWJyaWMuanMvXG4gICAgLy9odHRwOi8va2luZXRpY2pzLmNvbS9cbiAgICAvL2h0dHA6Ly93d3cuY3JlYXRlanMuY29tL0RvY3MvRWFzZWxKUy9jbGFzc2VzL01vdXNlRXZlbnQuaHRtbFxuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHN0cnVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkaXZJZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRpdklkID0gXCJ2YWRpdlwiLCBjYW52YXNJZCA9IFwidmFjYW52YXNcIiwgY2VudGVyID0gdW5kZWZpbmVkLCBwcyA9IDEpIHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vbWFrZSBjYW52YXMgd2l0aGluIGRpdlxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gY2FudmFzSWQ7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmg7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcblxuICAgICAgICAvKipAdHlwZSB7T2JqZWN0fSAqL1xuICAgICAgICB0aGlzLmMyZCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvLyBnZW8gY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlciB8fCB7IHg6IHRoaXMudyAqIDAuNSwgeTogdGhpcy5oICogMC41IH1cbiAgICAgICAgLy8gem9vbSBmYWN0b3I6IHBpeGVsIHNpemUsIGluIG0vcGl4XG4gICAgICAgIHRoaXMucHMgPSBwcztcblxuICAgICAgICAvL21vdXNlIGNsaWNrIC0gcGFuXG4gICAgICAgIGxldCBtcGFuID0gZmFsc2VcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHsgbXBhbiA9IHRydWUgfSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBpZiAobXBhbikgdGhpcy5wYW4oLWUubW92ZW1lbnRYICogdGhpcy5wcywgZS5tb3ZlbWVudFkgKiB0aGlzLnBzKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZSA9PiB7IG1wYW4gPSBmYWxzZSB9KTtcblxuICAgICAgICAvL21vdXNlIHdoZWVsIC0gem9vbVxuICAgICAgICBjb25zdCBmID0gMS41XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZfID0gZS5kZWx0YVkgPiAwID8gZiA6IDEgLyBmO1xuICAgICAgICAgICAgdGhpcy56b29tKGZfLCB0aGlzLnBpeFRvR2VvWChlLm9mZnNldFgpLCB0aGlzLnBpeFRvR2VvWShlLm9mZnNldFkpKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKiBAcmV0dXJuIHtDYW5QbC5DYW52YXNQbHVzfSAqL1xuICAgIHJlZHJhdygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPdmVycmlkZSByZWRyYXcgbWV0aG9kXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL2NvbnZlcnNpb24gZnVuY3Rpb25zXG4gICAgZ2VvVG9QaXhYKHhHZW8pIHsgcmV0dXJuICh4R2VvIC0gdGhpcy5jZW50ZXIueCkgLyB0aGlzLnBzICsgdGhpcy53ICogMC41OyB9XG4gICAgZ2VvVG9QaXhZKHlHZW8pIHsgcmV0dXJuIC0oeUdlbyAtIHRoaXMuY2VudGVyLnkpIC8gdGhpcy5wcyArIHRoaXMuaCAqIDAuNTsgfVxuICAgIHBpeFRvR2VvWCh4KSB7IHJldHVybiAoeCAtIHRoaXMudyAqIDAuNSkgKiB0aGlzLnBzICsgdGhpcy5jZW50ZXIueDsgfVxuICAgIHBpeFRvR2VvWSh5KSB7IHJldHVybiAtKHkgLSB0aGlzLmggKiAwLjUpICogdGhpcy5wcyArIHRoaXMuY2VudGVyLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKi9cbiAgICBwYW4oZHhHZW8sIGR5R2VvKSB7XG4gICAgICAgIHRoaXMuY2VudGVyLnggKz0gZHhHZW87XG4gICAgICAgIHRoaXMuY2VudGVyLnkgKz0gZHlHZW87XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmXG4gICAgICovXG4gICAgem9vbShmID0gMSwgeEdlbyA9IHRoaXMuY2VudGVyLngsIHlHZW8gPSB0aGlzLmNlbnRlci55KSB7XG4gICAgICAgIHRoaXMucHMgKj0gZjtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSAoeEdlby10aGlzLmNlbnRlci54KSooMS1mKVxuICAgICAgICB0aGlzLmNlbnRlci55ICs9ICh5R2VvLXRoaXMuY2VudGVyLnkpKigxLWYpXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbmV4cG9ydCBjbGFzcyBHcmlkIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBzdHJ1Y3RcbiAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCwgcmVzKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMucmVzID0gcmVzO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmxlbmd0aFggPSBNYXRoLmZsb29yKHcgLyByZXMgKyAxKTtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5sZW5ndGhZID0gTWF0aC5mbG9vcihoIC8gcmVzICsgMSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QXJyYXkuPEFycmF5LjxUPj4+fSAqL1xuICAgICAgICB0aGlzLmNlbGxzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aFg7IGkrKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QXJyYXkuPFQ+Pn0gKi9cbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sZW5ndGhZOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxUPn0gKi9cbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW2ldW2pdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtYXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1heFxuICAgICAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAgICAgKi9cbiAgICBnZXQoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgICAgICBjb25zdCBhcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcih4bWluIC8gdGhpcy5yZXMpOyBpIDwgTWF0aC5mbG9vcih4bWF4IC8gdGhpcy5yZXMgKyAxKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmxlbmd0aFgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gTWF0aC5mbG9vcih5bWluIC8gdGhpcy5yZXMpOyBqIDwgTWF0aC5mbG9vcih5bWF4IC8gdGhpcy5yZXMgKyAxKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPCAwIHx8IGogPj0gdGhpcy5sZW5ndGhZKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBhcy5wdXNoLmFwcGx5KGFzLCB0aGlzLmNlbGxzW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGFkZChvYmosIHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbTWF0aC5mbG9vcih4IC8gdGhpcy5yZXMpXVtNYXRoLmZsb29yKHkgLyB0aGlzLnJlcyldLnB1c2gob2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKi9cbiAgICByZW1vdmUob2JqLCB4LCB5KSB7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLmNlbGxzW01hdGguZmxvb3IoeCAvIHRoaXMucmVzKV1bTWF0aC5mbG9vcih5IC8gdGhpcy5yZXMpXSwgb2JqKTtcbiAgICB9XG5cblxuICAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4SW5pXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlJbmlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEZpblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5RmluXG4gICAgICovXG4gICAgbW92ZShvYmosIHhJbmksIHlJbmksIHhGaW4sIHlGaW4pIHtcbiAgICAgICAgY29uc3QgaUluaSA9IE1hdGguZmxvb3IoeEluaSAvIHRoaXMucmVzKTtcbiAgICAgICAgY29uc3QgakluaSA9IE1hdGguZmxvb3IoeUluaSAvIHRoaXMucmVzKTtcbiAgICAgICAgY29uc3QgaUZpbiA9IE1hdGguZmxvb3IoeEZpbiAvIHRoaXMucmVzKTtcbiAgICAgICAgY29uc3QgakZpbiA9IE1hdGguZmxvb3IoeUZpbiAvIHRoaXMucmVzKTtcblxuICAgICAgICAvL25vIGNoYW5nZSwgc3RpbGwgc2FtZSBjZWxsXG4gICAgICAgIGlmKGlJbmk9PWlGaW4gJiYgakluaT09akZpbikgcmV0dXJuO1xuXG4gICAgICAgIC8vY2hhbmdlIGNlbGxcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMuY2VsbHNbaUluaV1bakluaV0sIG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW2lGaW5dW2pGaW5dLnB1c2gob2JqKTtcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7T2JqZWN0Ljw/LCBUPn0gb2JqXG4gKiBAcmV0dXJuIHtBcnJheS48VD59XG4gKi9cbmV4cG9ydCBjb25zdCBvYmpUb0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBvdXQucHVzaChvYmpba2V5XSk7XG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBhcnJcbiAqIEBwYXJhbSB7VH0gb2JqXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCBvYmopIHtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihvYmopO1xuICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBlbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byByZW1vdmUgZWxlbWVudCBub3QgcHJlc2VudCBpbiBhcnJheS5cIik7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFNhcmRpbiB7XG5cbiAgICAvKlxuICAgICAgICBTZWEgc2VhO1xuICAgICAgICB4LHkgcG9zaXRpb24sIGluIHBpeFxuICAgICAgICB2eCx2eSBzcGVlZCwgaW4gcGl4IHBlciBtc1xuICAgICAgICB2LCB2YSBzcGVlZCBhbmdsZSAoaW4gLVBpLFBpKSBhbmQgbm9ybVxuICAgICAgICBheCwgYXkgYWNjZWxlcmF0aW9uLCBpbiBwaXggcGVyIHMyXG4gICAgICAgICovXG4gICAgY29uc3RydWN0b3Ioc2VhLCB4ID0gc2VhLncgKiBNYXRoLnJhbmRvbSgpLCB5ID0gc2VhLmggKiBNYXRoLnJhbmRvbSgpLCB2eCA9IHVuZGVmaW5lZCwgdnkgPSB1bmRlZmluZWQpIHtcblxuICAgICAgICB0aGlzLnNlYSA9IHNlYTtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBzZWEudyA/IHNlYS53IDogeFxuICAgICAgICB0aGlzLnkgPSB5IDwgMCA/IDAgOiB5ID4gc2VhLmggPyBzZWEuaCA6IHlcblxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgaWYgKCF2eCAmJiAhdnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICAgICAgdGhpcy52eSA9IHZ5O1xuICAgICAgICAgICAgdGhpcy52ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgICAgICAgdGhpcy52YSA9IE1hdGguYXRhbjIodnksIHZ4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWNjZWxlcmF0aW9uXG4gICAgICAgIHRoaXMuYXggPSAwXG4gICAgICAgIHRoaXMuYXkgPSAwXG5cbiAgICAgICAgLy9hZGQgdG8gc3BhdGlhbCBpbmRleFxuICAgICAgICB0aGlzLnNlYS5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSlcblxuICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiB2aXNpb24gZmllbGRcbiAgICAgICAgdGhpcy5vYnMgPSBbXVxuICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiBjb2xsaXNpb24gZmllbGRcbiAgICAgICAgdGhpcy5jb2wgPSBbXVxuXG4gICAgfVxuXG5cbiAgICAvKiogU2V0IHJhbmRvbSBzcGVlZCAqL1xuICAgIHNldFJhbmRvbVNwZWVkKCkge1xuICAgICAgICB0aGlzLnZhID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJIC0gTWF0aC5QSTtcbiAgICAgICAgdGhpcy52ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2VhLlZfTUFYO1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52ICogTWF0aC5jb3ModGhpcy52YSk7XG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnYgKiBNYXRoLnNpbih0aGlzLnZhKTtcbiAgICB9XG5cblxuICAgIC8qKiAqL1xuICAgIG9ic2VydmUoKSB7XG5cbiAgICAgICAgLy9pbml0aWFsaXNlIGxpc3RzXG4gICAgICAgIHRoaXMub2JzID0gW107XG4gICAgICAgIHRoaXMuY29sID0gW107XG5cbiAgICAgICAgLy9nZXQgc2FyZGlucyBhcm91bmQgdXNpbmcgc3BhdGlhbCBpbmRleFxuICAgICAgICBjb25zdCBzcyA9IHRoaXMuc2VhLmdyaWQuZ2V0KHRoaXMueCAtIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnkgLSB0aGlzLnNlYS5EX09CUywgdGhpcy54ICsgdGhpcy5zZWEuRF9PQlMsIHRoaXMueSArIHRoaXMuc2VhLkRfT0JTKTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGluIG9ic2VydmF0aW9uIGFuZCBjb2xsaXNpb24gZmllbGRzXG4gICAgICAgIGZvciAobGV0IHMgb2Ygc3MpIHtcbiAgICAgICAgICAgIGlmIChzID09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChzKSA8PSB0aGlzLnNlYS5EX0NPTCkgdGhpcy5jb2wucHVzaChzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQocykgPD0gdGhpcy5zZWEuRF9PQlMpIHtcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGFuZ2xlXG4gICAgICAgICAgICAgICAgbGV0IGRhID0gTWF0aC5hdGFuMihzLnkgLSB0aGlzLnksIHMueCAtIHRoaXMueCkgLSB0aGlzLnZhO1xuICAgICAgICAgICAgICAgIGlmIChkYSA+IE1hdGguUEkpIGRhIC09IDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhIDw9IC1NYXRoLlBJKSBkYSArPSAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBkYSA9IE1hdGguYWJzKGRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGEgPiB0aGlzLnNlYS5BX09CUyAqIDAuNSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnMucHVzaChzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaW5pdGlhbGlzZSBhY2NlbGVyYXRpb25cbiAgICAgICAgdGhpcy5heCA9IDA7IHRoaXMuYXkgPSAwO1xuXG4gICAgICAgIC8vY29sbGlzaW9uOiByZXB1bHNpb25cbiAgICAgICAgZm9yIChsZXQgcyBvZiB0aGlzLmNvbCkge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZChzKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSAxLjAgKiAoMSAvIChkICogZCkgLSAxIC8gKHRoaXMuc2VhLkRfQ09MICogdGhpcy5zZWEuRF9DT0wpKTtcbiAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqICh0aGlzLnggLSBzLngpIC8gZDtcbiAgICAgICAgICAgIHRoaXMuYXkgKz0gYSAqICh0aGlzLnkgLSBzLnkpIC8gZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvd2FyZCB2IHRhcmdldFxuICAgICAgICBjb25zdCBkdiA9ICh0aGlzLnNlYS5WX1RBUkdFVCAtIHRoaXMudikgKiAwLjAxO1xuICAgICAgICB0aGlzLmF4ICs9IGR2ICogdGhpcy52eCAvIHRoaXMudjtcbiAgICAgICAgdGhpcy5heSArPSBkdiAqIHRoaXMudnkgLyB0aGlzLnY7XG5cbiAgICAgICAgLy90b3dhcmQgdGhlIG9ic2VydmVkIG1lYW4gcG9zaXRpb25cbiAgICAgICAgLyppZihvYnMuc2l6ZSgpPjEpe1xuICAgICAgICAgICAgZG91YmxlIHhuPTAseW49MDtcbiAgICAgICAgICAgIGZvcihTYXJkaW4gczpvYnMpe1xuICAgICAgICAgICAgICAgIHhuKz1zLng7XG4gICAgICAgICAgICAgICAgeW4rPXMueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhuPXhuL29icy5zaXplKCk7XG4gICAgICAgICAgICB5bj15bi9vYnMuc2l6ZSgpO1xuICAgICAgICAgICAgZG91YmxlIGQ9TWF0aC5oeXBvdCh4bi14LHluLXkpO1xuICAgICAgICAgICAgYXgrPS0wLjEqKHgteG4pL2Q7XG4gICAgICAgICAgICBheSs9LTAuMSooeS15bikvZDtcbiAgICAgICAgfSovXG5cbiAgICAgICAgLy90b3dhcmQgdGhlIG9ic2VydmVkIHNwZWVkXG4gICAgICAgIGNvbnN0IHQgPSAwLjk7XG4gICAgICAgIGlmICh0aGlzLm9icy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgZHZ4ID0gMCwgZHZ5ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IHMgb2YgdGhpcy5vYnMpIHtcbiAgICAgICAgICAgICAgICBkdnggKz0gcy52eDtcbiAgICAgICAgICAgICAgICBkdnkgKz0gcy52eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR2eCA9ICh0IC0gMSkgKiB0aGlzLnZ4ICsgKDEgLSB0KSAqIGR2eCAvIHRoaXMub2JzLmxlbmd0aDtcbiAgICAgICAgICAgIGR2eSA9ICh0IC0gMSkgKiB0aGlzLnZ5ICsgKDEgLSB0KSAqIGR2eSAvIHRoaXMub2JzLmxlbmd0aDtcblxuICAgICAgICAgICAgY29uc3QgYSA9IDAuMTtcbiAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqIGR2eDtcbiAgICAgICAgICAgIHRoaXMuYXkgKz0gYSAqIGR2eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYXZvaWQgc2hhcmtcbiAgICAgICAgaWYgKHRoaXMuc2VhLnNoYXJrICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnNlYS5zaGFyaztcbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLmh5cG90KChzLnggLSB0aGlzLngpLCAocy55IC0gdGhpcy55KSk7XG4gICAgICAgICAgICBpZiAoZCA8PSB0aGlzLnNlYS5EX09CUykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSA1LjAgKiAoMSAvIChkICogZCkgLSAxIC8gKHRoaXMuc2VhLkRfT0JTICogdGhpcy5zZWEuRF9PQlMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiAodGhpcy54IC0gcy54KSAvIGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIHMueSkgLyBkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgLyoqICovXG4gICAgbW92ZSh0aW1lU3RlcE1zID0gMTApIHtcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5yZW1vdmUodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgc3BlZWRcbiAgICAgICAgdGhpcy52eCArPSB0aGlzLmF4ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLmF5ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy52ID0gTWF0aC5oeXBvdCh0aGlzLnZ4LCB0aGlzLnZ5KTtcbiAgICAgICAgdGhpcy52YSA9IE1hdGguYXRhbjIodGhpcy52eSwgdGhpcy52eCk7XG4gICAgICAgIGlmICh0aGlzLnYgPiB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5zZWEuVl9NQVg7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgICAgIHRoaXMudnkgPSB0aGlzLnNlYS5WX01BWCAqIE1hdGguc2luKHRoaXMudmEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2xpbWl0XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSB0aGlzLnNlYS53O1xuICAgICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gdGhpcy5zZWEuaDtcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuc2VhLncpIHRoaXMueCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnNlYS5oKSB0aGlzLnkgPSAwO1xuXG4gICAgICAgIC8vVE9ETyB1c2UgbW92ZT9cbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqIERpc3RhbmNlIHRvIG90aGVyIHNhcmRpbiAqL1xuICAgIGQocykge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgocy54IC0gdGhpcy54KSwgKHMueSAtIHRoaXMueSkpO1xuICAgIH1cblxuXG4gICAgLyoqIERpc3BsYXkgYSBzYXJkaW4gYm9keSAqL1xuICAgIGRpc3BsYXkoY3AsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjb25zdCBjID0gTWF0aC5mbG9vcigyNTUgKiBNYXRoLmFicyh0aGlzLnZhKSAvIE1hdGguUEkpO1xuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwicmdiKDI1NSwgMjU1LCBcIiArIGMgKyBcIilcIlxuICAgICAgICBjb25zdCBhID0gbGVuZ3RoIC8gdGhpcy52O1xuICAgICAgICBjb25zdCBkeCA9IGEgKiB0aGlzLnZ4ICogMC41O1xuICAgICAgICBjb25zdCBkeSA9IGEgKiB0aGlzLnZ5ICogMC41O1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCAtIGR4KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSAtIGR5KSk7XG4gICAgICAgIGMyLmxpbmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54ICsgZHgpLCBjcC5nZW9Ub1BpeFkodGhpcy55ICsgZHkpKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8qKiBEaXNwbGF5IHNhcmRpbiB2aXNpb24gZmllbGQgKi9cbiAgICBkaXNwbGF5VmlzaW9uRmllbGQoY3AsIGZpbGxTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIubW92ZVRvKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSk7XG4gICAgICAgIC8vVE9ETyBjb3JyZWN0IHRoYXQgIVxuICAgICAgICBjMi5hcmMoY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpLCB0aGlzLnNlYS5EX09CUyAvIGNwLnBzLFxuICAgICAgICAgICAgTWF0aC5QSSAtIHRoaXMudmEgKyB0aGlzLnNlYS5BX09CUyAqIDAuNSwgTWF0aC5QSSAtIHRoaXMudmEgLSB0aGlzLnNlYS5BX09CUyAqIDAuNSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7XG4gICAgfVxuXG4gICAgLyoqIERpc3BsYXkgc2FyZGluIHZpc2lvbiBsaW5rcyAqL1xuICAgIGRpc3BsYXlWaXNpb25MaW5rcyhjcCwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGZvciAobGV0IHNhMiBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgICAgIGMyLmxpbmVUbyhjcC5nZW9Ub1BpeFgoc2EyLngpLCBjcC5nZW9Ub1BpeFkoc2EyLnkpKTtcbiAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRGlzcGxheSBzYXJkaW4gY29sbGlzaW9uIGZpZWxkICovXG4gICAgZGlzcGxheUNvbGxpc2lvbkZpZWxkKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMuc2VhLkRfQ09MICogMC41IC8gY3AucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgU2FyZGluIH0gZnJvbSAnLi9TYXJkaW4nO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2Jhc2UvZ3JpZCc7XG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbmV4cG9ydCBjbGFzcyBTZWEge1xuXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8vVE9ETyBzaG91bGQgYmVjb21lIHN0YXRpYyBhdHRyaWJ1dGVzIG9mIFNhcmRpbiBjbGFzc1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgdGhpcy5EX09CUyA9IDUwXG4gICAgICAgIHRoaXMuQV9PQlMgPSAyMDAgKiBNYXRoLlBJIC8gMTgwXG5cbiAgICAgICAgLy9jb2xsaXNpb25cbiAgICAgICAgdGhpcy5EX0NPTCA9IDEwXG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICB0aGlzLlZfVEFSR0VUID0gMC4zXG4gICAgICAgIHRoaXMuVl9NQVggPSAwLjZcblxuXG4gICAgICAgIC8vc2hhcmtcbiAgICAgICAgdGhpcy5EX1NIQVJLX0VBVCA9IDEyXG4gICAgICAgIHRoaXMuRUFURU5fU0FSRElOX05CID0gMFxuXG5cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgdGhpcy5oID0gaDtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgdGhpcy5EX09CUyk7XG5cbiAgICAgICAgdGhpcy5maXNoID0gW11cblxuICAgICAgICB0aGlzLnNoYXJrID0gbnVsbDtcbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cblxuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IHNhIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIHNhLm9ic2VydmUoKTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgc2Egb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgc2EubW92ZSgpO1xuXG4gICAgICAgIC8vc2hhcmsgZWF0IGZpc2hcbiAgICAgICAgdGhpcy5zaGFya0VhdCgpO1xuICAgIH1cblxuXG5cbiAgICBzaGFya0VhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLmdyaWQuZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShzLCBzLngsIHMueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgKz0gdGhpcy5raWxsZWQubGVuZ3RoO1xuICAgICAgICAvL2VhdGVuRmlzaE5iLnNldFRleHQoXCJFYXRlbiBmaXNoOiBcIiArIEVBVEVOX1NBUkRJTl9OQik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogQWRkIGEgbnVtYmVyIG9mIGZpc2ggKi9cbiAgICBhZGRGaXNoKG5iID0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspXG4gICAgICAgICAgICB0aGlzLmZpc2gucHVzaChuZXcgU2FyZGluKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKiogU2V0IHJhbmRvbSBzcGVlZCBmb3IgYWxsIGZpc2ggKi9cbiAgICBzZXRSYW5kb21TcGVlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpc2gpIHtcbiAgICAgICAgICAgIGYuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBTZWEgfSBmcm9tICcuL1NlYSc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9jYW52YXNwbHVzJztcblxuY2xhc3MgRmlzaFNpbXVsYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5kaXZJZCA9IG9wdHMuZGl2SWQgfHwgXCJ2YWRpdlwiO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAvL1RPRE9cbiAgICAgICAgLy9hZGQgZWF0ZW4gZmlzaCBuYiBsYWJlbFxuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgdGhpcy5zaG93RmlzaFZpc2lvbkZpZWxkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaG93RmlzaFZpc2lvbkxpbmtzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaG93RmlzaENvbGxpc2lvbkZpZWxkID0gZmFsc2VcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuICAgICAgICAgICAgY29uc3QgcyA9IHRoLnNlYVxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMTIwLDEyMCwyNTUsMC42KVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vc2hvdyB2aXNpb24gZmllbGRcbiAgICAgICAgICAgIGlmICh0aC5zaG93RmlzaFZpc2lvbkZpZWxkKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkZpZWxkKHRoaXMsIFwicmdiYSgyMDAsMjAwLDIwMCwwLjE1KVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBsaW5rc1xuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uTGlua3MpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5VmlzaW9uTGlua3ModGhpcywgXCJyZ2JhKDI1NSwxMDAsMTAwLDAuMylcIiwgMSlcbiAgICAgICAgICAgIC8vc2hvdyBjb2xsaXNpb24gZmllbGRcbiAgICAgICAgICAgIGlmICh0aC5zaG93RmlzaENvbGxpc2lvbkZpZWxkKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheUNvbGxpc2lvbkZpZWxkKHRoaXMsIFwicHVycGxlXCIsIDEpXG5cblxuICAgICAgICAgICAgLy9kaXNwbGF5IHNhcmRpbnNcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDIgLyB0aGlzLnBzXG4gICAgICAgICAgICBjb25zdCBzYXJkaW5MZW5ndGggPSA3XG4gICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgc2EuZGlzcGxheSh0aGlzLCBzYXJkaW5MZW5ndGgpXG5cblxuICAgICAgICAgICAgLy9kaXNwbGF5IHNoYXJrXG4gICAgICAgICAgICBpZiAocy5zaGFyayAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBjMi5saW5lV2lkdGggPSA0IC8gdGhpcy5wc1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFya0xlbmd0aCA9IDEyIC8gdGhpcy5wc1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gc2hhcmtMZW5ndGggKiBNYXRoLmNvcyhzLnNoYXJrLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHNoYXJrTGVuZ3RoICogTWF0aC5zaW4ocy5zaGFyay5hbmdsZSk7XG5cbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSwgdGhpcy5nZW9Ub1BpeFkocy5zaGFyay55KSk7XG4gICAgICAgICAgICAgICAgYzIubGluZVRvKHRoaXMuZ2VvVG9QaXhYKHMuc2hhcmsueCkgLSBkeCwgdGhpcy5nZW9Ub1BpeFkocy5zaGFyay55KSAtIGR5KTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9kaXNwbGF5IGJsb29kIHNwb3RcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjMi5saW5lV2lkdGggPSAxXG4gICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmtpbGxlZCkge1xuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSkpO1xuICAgICAgICAgICAgICAgIGMyLmFyYyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSksIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5maWxsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApIC0gMywgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSAtIDMsIHRoLncgLyB0aGlzLnBzICsgMywgdGguaCAvIHRoaXMucHMgKyAzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZSA9PiB7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSB7IHg6IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpLCB5OiB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKSwgYW5nbGU6IDAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhHID0gdGguY3BsdXMucGl4VG9HZW9YKGUub2Zmc2V0WCk7XG4gICAgICAgICAgICBjb25zdCB5RyA9IHRoLmNwbHVzLnBpeFRvR2VvWShlLm9mZnNldFkpO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKC15RyArIHRoLnNlYS5zaGFyay55LCB4RyAtIHRoLnNlYS5zaGFyay54KTtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IHsgeDogeEcsIHk6IHlHLCBhbmdsZTogYW5nbGUgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0gbnVsbDtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKiogQHR5cGUge1NlYX0gKi9cbiAgICAgICAgdGhpcy5zZWEgPSBuZXcgU2VhKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cbiAgICBpbml0UmFuZG9tKG5iID0gMTUwMCkge1xuICAgICAgICB0aGlzLnNlYS5hZGRGaXNoKG5iKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cblxuICAgIHN0YXJ0KHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5zZWEuc3RlcCh0aW1lU3RlcE1zKTtcbiAgICAgICAgICAgIHQuY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIDApO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGZpc2ggPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgRmlzaFNpbXVsYXRpb24ob3B0cylcbn1cbiIsImltcG9ydCB7IG9ialRvQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7Q2VsbH1cbiAgICAgKi9cbiAgICBhZGQoeCwgeSkge1xuICAgICAgICAvL2ZpbmQgYWdlbnQgYXQgbG9jYXRpb25cbiAgICAgICAgLyoqQHR5cGUge3N0cmluZ30qL1xuICAgICAgICBjb25zdCBpZCA9IHggKyBcIl9cIiArIHk7XG4gICAgICAgIGlmICh0aGlzLnBvcHVsYXRpb25JW2lkXSkgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgIC8qKkB0eXBlIHtDZWxsfSAqL1xuICAgICAgICBjb25zdCBjZWxsID0geyB4OiB4LCB5OiB5LCBuYjogMCB9O1xuICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChjZWxsKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtpZF0gPSBjZWxsO1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICBzdGVwKCkge1xuXG4gICAgICAgIC8vVE9ETyBkb3VibGUgaW5kZXhpbmc/IGJ5IHJhdyBhbmQgdGhlbiBjb2x1bW4gP1xuICAgICAgICAvL3BvcHVsYXRlIGNlbGwgc3Vycm91bmRpbmdzXG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICBjb25zdCBzdXJJID0ge307XG4gICAgICAgIC8vZ28gdGhyb3VnaCBsaXN0IG9mIGNlbGxzXG4gICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGhpcy5wb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICAvLyArMSBzdXJyb3VuZGluZyBjZWxsc1xuICAgICAgICAgICAgY29uc3Qgc3JzID0gVW5pdmVyc2UuZ2V0Q2VsbFN1cnJvdW5kaW5nKGNlbGwsIHRoaXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgc3VyIG9mIHNycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdXJfKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cl8ubmIrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdXIubmIgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzdXJJW2tleV0gPSBzdXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9CMy9TMjNcbiAgICAgICAgLy9raWxsIGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICBjb25zdCBjZWxsc1RvS2VlcCA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXBJID0ge307XG4gICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGhpcy5wb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjZWxsLnggKyBcIl9cIiArIGNlbGwueTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgaWYgKCFjZWxsXykgY29udGludWU7XG4gICAgICAgICAgICAvL2lmIChuYjwyIG9yIG5iPjMpIC0+IGtpbGxcbiAgICAgICAgICAgIGlmIChjZWxsXy5uYiA8IDIgfHwgY2VsbF8ubmIgPiAzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwLnB1c2goY2VsbCk7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcElba2V5XSA9IGNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gY2VsbHNUb0tlZXA7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSBjZWxsc1RvS2VlcEk7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICBjb25zdCBzdXJzID0gb2JqVG9BcnJheShzdXJJKTtcbiAgICAgICAgZm9yIChsZXQgc3VyIG9mIHN1cnMpIHtcblxuICAgICAgICAgICAgaWYgKHN1ci5uYiAhPT0gMykgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgYWxyZWFkeSBhbGl2ZVxuICAgICAgICAgICAgY29uc3Qga2V5ID0gc3VyLnggKyBcIl9cIiArIHN1ci55O1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB0aGlzLnBvcHVsYXRpb25JW2tleV07XG4gICAgICAgICAgICBpZiAoY2VsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChzdXIpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtrZXldID0gc3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXRNU1xuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3BsdXNcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICBzdGFydChuYiwgdGltZW91dE1TLCBjcGx1cykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHVuaSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICB1bmkuc3RlcCgpO1xuICAgICAgICAgICAgY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmIgPiAwICYmIGkrKyA+IG5iKSByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgdGltZW91dE1TKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Q2VsbH0gY2VsbFxuICAgICAqIEBwYXJhbSB7VW5pdmVyc2V9IHVuaVxuICAgICAqIEByZXR1cm4ge0FycmF5LjxDZWxsPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2VsbFN1cnJvdW5kaW5nKGNlbGwsIHVuaSkge1xuICAgICAgICBjb25zdCB4MSA9IGNlbGwueCA9PT0gMCA/IHVuaS53IC0gMSA6IGNlbGwueCAtIDE7XG4gICAgICAgIGNvbnN0IHgyID0gY2VsbC54ID09PSB1bmkudyAtIDEgPyAwIDogY2VsbC54ICsgMTtcbiAgICAgICAgY29uc3QgeTEgPSBjZWxsLnkgPT09IDAgPyB1bmkuaCAtIDEgOiBjZWxsLnkgLSAxO1xuICAgICAgICBjb25zdCB5MiA9IGNlbGwueSA9PT0gdW5pLmggLSAxID8gMCA6IGNlbGwueSArIDE7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IHg6IHgxLCB5OiB5MSB9LFxuICAgICAgICAgICAgeyB4OiB4MSwgeTogY2VsbC55IH0sXG4gICAgICAgICAgICB7IHg6IHgxLCB5OiB5MiB9LFxuICAgICAgICAgICAgeyB4OiBjZWxsLngsIHk6IHkxIH0sXG4gICAgICAgICAgICB7IHg6IGNlbGwueCwgeTogeTIgfSxcbiAgICAgICAgICAgIHsgeDogeDIsIHk6IHkxIH0sXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiBjZWxsLnkgfSxcbiAgICAgICAgICAgIHsgeDogeDIsIHk6IHkyIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tICcuL1VuaXZlcnNlJztcblxuLy9UT0RPIHpvb20vcGFuLCB3aXRoIGNhbnZhcyB0cmFuc2Zvcm06IGJldHRlciB1bml2ZXJzZSBsaW1pdHNcbi8vVE9ETyBidXR0b25zIChwbGF5LCBzdG9wLCBzcGVlZCwgZHJhdywgcGFuKVxuLy9UT0RPIGNoZWNrIGNhbnZhcyBhbmltYXRpb25cblxuXG5jbGFzcyBHb0xTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcblxuICAgICAgICAgICAgLy9jbGVhclxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vZHJhdyBjZWxsc1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoLnVuaS5wb3B1bGF0aW9uKVxuICAgICAgICAgICAgICAgIGMyLmZpbGxSZWN0KHRoaXMuZ2VvVG9QaXhYKGNlbGwueCksIHRoaXMuZ2VvVG9QaXhZKGNlbGwueSksIDEgLyB0aGlzLnBzLCAxIC8gdGhpcy5wcyk7XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudW5pID0gbmV3IFVuaXZlcnNlKHRoaXMudywgdGhpcy5oKTtcbiAgICB9XG5cblxuICAgIC8vXG4gICAgaW5pdFJhbmRvbShkZW5zaXR5ID0gMC4wNSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBuYiA9IHRoaXMudW5pLncgKiB0aGlzLnVuaS5oICogZGVuc2l0eTtcbiAgICAgICAgd2hpbGUgKGkgPCBuYikge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQodGhpcy51bmkudyAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQodGhpcy51bmkuaCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMudW5pLmFkZCh4LCB5KTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnVuaS5zdGFydCgtMSwgMCwgdGhpcy5jcGx1cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBjb25zdCBnYW1lT2ZMaWZlID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEdvTFNpbXVsYXRpb24ob3B0cylcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldHMvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ29sL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zpc2gvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHAvaW5kZXhcIlxuIiwiZXhwb3J0IGNsYXNzIFBsYW5ldCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdSBUaGUgdW5pdmVyc2UgdGhlIHBsYW5ldCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSBtYXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eCBUaGUgc3BlZWQgeFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eSBUaGUgc3BlZWQgeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHUsIG0sIHgsIHksIHZ4LCB2eSkge1xuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnUgPSB1O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5tID0gbTtcblxuICAgICAgICAvL2NvbXB1dGUgcmFkaXVzXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG5cbiAgICAgICAgLy9zZXQgcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCByID8gciA6IHggPiB1LncgLSByID8gdS53IC0gciA6IHg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgciA/IHIgOiB5ID4gdS5oIC0gciA/IHUuaCAtIHIgOiB5O1xuXG4gICAgICAgIC8vc2V0IHNwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBmb3JjZSwgYmFzZWQgb24gdGhlIGdyYXZpdHkgb2Ygb3RoZXIgcGxhbmV0cy5cbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ4ID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZnkgPSAwO1xuXG4gICAgICAgIC8vY2hlY2sgYWxsIG90aGVyIHBsYW5ldHMgaW4gdGhlIHVuaXZlcnNlXG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy51LnBzKSB7XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NvbXB1dGUgYW5kIGFkZCBncmF2aXR5IGZvcmNlXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5kKHApO1xuICAgICAgICAgICAgaWYgKGQgPT09IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGQgPSBkICogZCAqIGQ7XG4gICAgICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmZ5ICs9IDAuMDEgKiAocC55IC0gdGhpcy55KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIHRoZSBwbGFuZXQgcC5cbiAgICAgKi9cbiAgICBkKHApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR4ID0gcC54IC0gdGhpcy54O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgcGxhbmV0LCBkZXBlbmRpbmcgb24gaXRzIG1hc3MuXG4gICAgICovXG4gICAgcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMubSAvIE1hdGguUEksIDAuNSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBib3VuY2VcbiAgICAgKi9cbiAgICBjaGFuZ2UoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vY29tcHV0ZSBhY2NlbGVyYXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGF4ID0gdGhpcy5meCAvIHRoaXMubTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGF5ID0gdGhpcy5meSAvIHRoaXMubTtcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgICAgIHRoaXMudnggKz0gYXggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnZ5ICs9IGF5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2NoZWNrIHZtYXhcbiAgICAgICAgaWYgKHZtYXggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5zcXJ0KHRoaXMudnggKiB0aGlzLnZ4ICsgdGhpcy52eSAqIHRoaXMudnkpO1xuICAgICAgICAgICAgaWYgKHYgPiB2bWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IHZtYXggKiB0aGlzLnZ4IC8gdjtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdm1heCAqIHRoaXMudnkgLyB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICBsZXQgbnggPSB0aGlzLnggKyB0aGlzLnZ4ICogdGltZVN0ZXBNcztcbiAgICAgICAgbGV0IG55ID0gdGhpcy55ICsgdGhpcy52eSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9oYW5kbGUgcG9zaXRpb24gbGltaXRcbiAgICAgICAgaWYgKGJvdW5jZSkge1xuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucigpO1xuICAgICAgICAgICAgY29uc3QgZSA9IDE7XG4gICAgICAgICAgICBpZiAobnggPCByKSB7IG54ID0gcjsgdGhpcy52eCA9IC10aGlzLnZ4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55IDwgcikgeyBueSA9IHI7IHRoaXMudnkgPSAtdGhpcy52eSAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53IC0gcikgeyBueCA9IHRoaXMudS53IC0gcjsgdGhpcy52eCA9IC10aGlzLnZ4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmggLSByKSB7IG55ID0gdGhpcy51LmggLSByOyB0aGlzLnZ5ID0gLXRoaXMudnkgKiBlOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobnggPCAwKSB7IG54ID0gdGhpcy51Lnc7IH1cbiAgICAgICAgICAgIGlmIChueSA8IDApIHsgbnkgPSB0aGlzLnUuaDsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncpIHsgbnggPSAwOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCkgeyBueSA9IDA7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbW92ZSBwbGFuZXRcbiAgICAgICAgdGhpcy51Lm1vdmUodGhpcywgbngsIG55KVxuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2Jhc2UvZ3JpZCc7XG5pbXBvcnQgeyBQbGFuZXQgfSBmcm9tICcuL1BsYW5ldCc7XG5cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAc3RydWN0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIGdyZXMgPSBNYXRoLm1pbih3LCBoKSAvIDEwMC4wKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG5cbiAgICAgICAgLyoqIEB0eXBlIHtHcmlkfSAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh3LCBoLCBncmVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBtYXNzIG9mIHRoZSB1bml2ZXJzZVxuICAgICAqL1xuICAgIG0oKSB7XG4gICAgICAgIGxldCBtID0gMDtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgbSArPSBwLm07XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBsYW5ldFxuICAgICAqL1xuICAgIGNyZWF0ZVBsYW5ldChtLCB4LCB5LCBzeCwgc3kpIHtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQbGFuZXQodGhpcywgbSwgeCwgeSwgc3gsIHN5KTtcbiAgICAgICAgdGhpcy5hZGQocCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcGxhbmV0XG4gICAgICovXG4gICAgYWRkKHApIHtcbiAgICAgICAgcC51ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcy5wdXNoKHApO1xuICAgICAgICB0aGlzLmdyaWQuYWRkKHAsIHAueCwgcC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBwbGFuZXRcbiAgICAgKi9cbiAgICByZW1vdmUocCkge1xuICAgICAgICBwLnUgPSBudWxsO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5wcywgcCk7XG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmUocCwgcC54LCBwLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwbGFuZXRcbiAgICAgKi9cbiAgICBtb3ZlKHAsIG54LCBueSkge1xuICAgICAgICB0aGlzLmdyaWQubW92ZShwLCBwLngsIHAueSwgbngsIG55KTtcbiAgICAgICAgcC54ID0gbng7IHAueSA9IG55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFnZ3JlZ2F0ZSB0d28gcGxhbmV0c1xuICAgICAqL1xuICAgIGFnZ3JlZ2F0ZShwMSwgcDIpIHtcbiAgICAgICAgY29uc3QgbSA9IHAxLm0gKyBwMi5tO1xuICAgICAgICBjb25zdCBwID0gdGhpcy5jcmVhdGVQbGFuZXQoXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgKHAxLnggKiBwMS5tICsgcDIueCAqIHAyLm0pIC8gbSxcbiAgICAgICAgICAgIChwMS55ICogcDEubSArIHAyLnkgKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEudnggKiBwMS5tICsgcDIudnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEudnkgKiBwMS5tICsgcDIudnkgKiBwMi5tKSAvIG1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDEpO1xuICAgICAgICB0aGlzLnJlbW92ZShwMik7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXkuPFBsYW5ldD59XG4gICAgICovXG4gICAgZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHBpIG9mIHRoaXMucHMpIHtcblxuICAgICAgICAgICAgY29uc3QgdyA9IDIgKiBwaS5yKCk7XG4gICAgICAgICAgICBjb25zdCBjYW5kID0gdGhpcy5ncmlkLmdldChwaS54IC0gdywgcGkueSAtIHcsIHBpLnggKyB3LCBwaS55ICsgdyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBqIG9mIGNhbmQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChwaSA9PSBwaikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMSA9IHBpLmQocGopO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQyID0gKHBpLnIoKSArIHBqLnIoKSkgKiBjb2xsaXNpb25GYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcGksIHBqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICovXG4gICAgc3RlcChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICAvL2ZpbmQgZmlyc3QgY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIGxldCBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSlcbiAgICAgICAgICAgIC8vZmluZCBuZXh0IGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5cbi8vVE9ETyBhZGQgcmVzdGFydC9iaWcgYmFuZyBidXR0b25cbi8qIEJ1dHRvbiByZXN0YXJ0ID0gbmV3IEJ1dHRvbihcIlJlY29tbWVuY2VyIVwiKTtcbiByZXN0YXJ0LmFkZENsaWNrSGFuZGxlcihuZXcgQ2xpY2tIYW5kbGVyKCkge1xuIEBPdmVycmlkZVxuIHB1YmxpYyB2b2lkIG9uQ2xpY2soQ2xpY2tFdmVudCBldmVudCkge1xuIHUuZmlsbCgpO1xuIGMuZ2V0Q29udGV4dDJkKCkuc2V0RmlsbFN0eWxlKENzc0NvbG9yLm1ha2UoMCwwLDApKTtcbiBjLmdldENvbnRleHQyZCgpLmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuIH1cbiB9KTtcbiBSb290UGFuZWwuZ2V0KFwiYlwiKS5hZGQocmVzdGFydCk7Ki9cblxuY2xhc3MgUGxhbmV0U2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcblxuICAgICAgICAgICAgLy9jbGVhciwgd2l0aCB0cmFuc3BhcmVuY3lcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjA1KVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBwbGFuZXRzXG4gICAgICAgICAgICBmb3IgKGxldCBwIG9mIHRoLnVuaS5wcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBwLm0gLyB0aC51bmkubSgpO1xuICAgICAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiKDI1NSwyNTUsXCIgKyBNYXRoLmZsb29yKDI1NSAqICgxIC0gdCkpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIuYXJjKHRoaXMuZ2VvVG9QaXhYKHAueCksIHRoaXMuZ2VvVG9QaXhZKHAueSksIHAucigpIC8gdGhpcy5wcywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9sYWJlbFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDIwMCwyMDApXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICBjMi5maWxsVGV4dCh0aC51bmkucHMubGVuZ3RoICsgXCIgcGxhbmV0c1wiLCAyLCAxMCk7XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpXG4gICAgfVxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKG5iID0gMTAwMCwgbWkgPSAwLjUsIG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy51bmkuY3JlYXRlUGxhbmV0KG1pLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpLCBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKSwgc3BlZWQgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vXG4gICAgaW5pdEJpZ0JhbmcobmIgPSAxMDAwLCBtaSA9IDEsIG1pblNwZWVkID0gMC4zNSwgbWF4U3BlZWQgPSAwLjcsIHJhZCA9IDEwMCkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnVuaS5wcyA9IFtdO1xuICAgICAgICBjb25zdCBjeCA9IHRoaXMudyAqIDAuNSwgY3kgPSB0aGlzLmggKiAwLjU7XG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDIgKiBNYXRoLlBJIC8gbmI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYSA9IGkgKiBhbmdsZVN0ZXA7XG5cbiAgICAgICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgICAgIGNvbnN0IGQgPSByYWQgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGN4ICsgZCAqIE1hdGguY29zKGEpLCB5ID0gY3kgKyBkICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIC8vc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgY29uc3QgYVMgPSBhICsgMiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gc3BlZWQgKiBNYXRoLmNvcyhhUyksIHN5ID0gc3BlZWQgKiBNYXRoLnNpbihhUyk7XG5cbiAgICAgICAgICAgIHRoaXMudW5pLmNyZWF0ZVBsYW5ldChtaSwgeCwgeSwgc3gsIHN5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3N0YXJ0XG4gICAgc3RhcnQoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIGNvbGxpc2lvbkZhY3RvciA9IDAuOCwgdGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnVuaS5zdGVwKGJvdW5jZSwgdm1heCwgY29sbGlzaW9uRmFjdG9yLCB0aW1lU3RlcE1zKTtcbiAgICAgICAgICAgIHQuY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIDApO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9zdG9wXG4gICAgc3RvcCgpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHBsYW5ldHMgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUGxhbmV0U2ltdWxhdGlvbihvcHRzKVxufVxuIiwiXG5leHBvcnQgY2xhc3MgQW5pbWFsIHtcblxuICAgIC8vQW5pbWFsLlBSRVkgPSAwO1xuICAgIC8vQW5pbWFsLlBSRURBVE9SID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGwsIHggPSAwLCB5ID0gMCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmwgPSBsO1xuXG4gICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgdGhpcy54ID0geCA8IDAgPyAwIDogeCA+IGwudyA/IGwudyA6IHhcbiAgICAgICAgdGhpcy55ID0geSA8IDAgPyAwIDogeSA+IGwuaCA/IGwuaCA6IHlcblxuICAgICAgICAvL3NwZWVkXG4gICAgICAgIHRoaXMudnggPSAwXG4gICAgICAgIHRoaXMudnkgPSAwO1xuXG4gICAgICAgIC8vPyB0aGUgb25lcyBhcm91bmQgP1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdXG4gICAgICAgIHRoaXMucHJleXMgPSBbXVxuXG4gICAgICAgIC8vYWRkIHRvIHRoZSBzcGF0aWFsIGluZGV4XG4gICAgICAgIGwuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgZChhKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KChhLnggLSB0aGlzLngpLCAoYS55IC0gdGhpcy55KSk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMubFxuICAgICAgICBsLmdyaWQucmVtb3ZlKHRoaXMsIHRoaXMueCwgdGhpcy55KTtcblxuICAgICAgICBjb25zdCBhID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCByID0gMC4wMSAqIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgdGhpcy52eCArPSByICogTWF0aC5jb3MoYSkgKiBsLnRpbWVTdGVwTXM7XG4gICAgICAgIGlmICh0aGlzLnZ4ID4gbC5WX01BWClcbiAgICAgICAgICAgIHRoaXMudnggPSBsLlZfTUFYO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnZ4IDwgLWwuVl9NQVgpXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLWwuVl9NQVg7XG5cbiAgICAgICAgdGhpcy52eSArPSByICogTWF0aC5zaW4oYSkgKiBsLnRpbWVTdGVwTXM7XG4gICAgICAgIGlmICh0aGlzLnZ5ID4gbC5WX01BWClcbiAgICAgICAgICAgIHRoaXMudnkgPSBsLlZfTUFYO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnZ5IDwgLWwuVl9NQVgpXG4gICAgICAgICAgICB0aGlzLnZ5ID0gLWwuVl9NQVg7XG5cbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggKiBsLnRpbWVTdGVwTXM7XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSBsLnc7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueCA+IGwudykgdGhpcy54ID0gMDtcblxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIGwudGltZVN0ZXBNcztcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IGwuaDtcbiAgICAgICAgZWxzZSBpZiAodGhpcy55ID4gbC5oKSB0aGlzLnkgPSAwO1xuXG4gICAgICAgIC8vVE9ETyB1c2UgbW92ZSBpbnN0ZWFkID9cbiAgICAgICAgbC5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICBjb25zdCBhcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucHJleXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBhIG9mIGFzKSB7XG4gICAgICAgICAgICBpZiAoYSA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQoYSkgPiBsLmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSBBbmltYWwuUFJFWSlcbiAgICAgICAgICAgICAgICB0aGlzLnByZXlzLnB1c2goYSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVkYXRvcnMucHVzaChhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VDaGlsZCgpIHtcbiAgICAgICAgLy9kbyBiZXR0ZXI6IG1ha2UgY2hpbGQgYXJvdW5kXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWFsKHRoaXMudHlwZSwgdGhpcy5sLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vYmFzZS9ncmlkJztcblxuZXhwb3J0IGNsYXNzIExhbmQge1xuXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8vdGhlIG1heCBzcGVlZFxuICAgICAgICB0aGlzLlZfTUFYID0gMC4xO1xuXG4gICAgICAgIHRoaXMucCA9IDAuMDI7IC8vcHJlZGF0b3IgZGVhdGggcHJvYmFiaWxpdHlcbiAgICAgICAgdGhpcy5xID0gMC4xOyAvL3ByZXkgcmVwcm9kdWN0aW9uIHByb2JhYmlsaXR5XG4gICAgICAgIHRoaXMuciA9IDAuNTsgLy9lYXRlbiBwcmV5IHRyYW5zZm9ybWF0aW9uIHByb2JhYmlsaXR5XG4gICAgICAgIHRoaXMubmIgPSAzOyAvL25laWdoYm9ycyBudW1iZXJcblxuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdXG4gICAgICAgIHRoaXMucHJleXMgPSBbXVxuICAgICAgICB0aGlzLmQgPSAxMFxuICAgICAgICB0aGlzLnRpbWVTdGVwTXMgPSAyMFxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh3LCBoLCB0aGlzLmQpO1xuXG5cblxuICAgICAgICAvKmludFtdW10gaGlzdG87XG4gICAgICAgIGludCBpbmRleD0wO1xuICAgICAgICB0aGlzLmMyQ2hhcnQ9YzJDaGFydDtcbiAgICAgICAgdGhpcy5oQ2hhcnQ9aENoYXJ0O1xuICAgICAgICB0aGlzLmhpc3RvPW5ldyBpbnRbd0NoYXJ0XVtdO1xuICAgICAgICBmb3IoaW50IGk9MDtpPHdDaGFydDtpKyspXG4gICAgICAgICAgICBoaXN0b1tpXT1uZXcgaW50W117MCwwfTsqL1xuXG5cbiAgICB9XG5cblxuICAgIHN0ZXAodGltZVN0ZXBNcykge1xuXG4gICAgICAgIC8vb2JzZXJ2ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpIGEub2JzZXJ2ZSgpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJlZGF0b3JzKSBhLm9ic2VydmUoKTtcblxuICAgICAgICBjb25zdCBwcmV5c1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZXlzVG9EaWUgPSBbXVxuICAgICAgICBjb25zdCBwcmVkc1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZWRzVG9EaWUgPSBbXVxuXG4gICAgICAgIC8vcHJleSByZXByb2R1Y3Rpb24gaWYgbm8gcHJlZGF0b3IgYXJvdW5kXG4gICAgICAgIGZvciAobGV0IHByZXkgb2YgdGhpcy5wcmV5cykge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiB0aGlzLnEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHByZXkucHJlZGF0b3JzLmxlbmd0aCAhPSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwcmV5LnByZXlzLmxlbmd0aCA+PSB0aGlzLm5iKSBjb250aW51ZTtcbiAgICAgICAgICAgIHByZXlzVG9Cb3JuLnB1c2gocHJleS5tYWtlQ2hpbGQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwcmVkIG9mIHRoaXMucHJlZGF0b3JzKSB7XG4gICAgICAgICAgICBpZiAocHJlZC5wcmV5cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vbm8gcHJleSBhcm91bmQ6IHByZWRhdG9yIGRpZXMgd2l0aCBwcm9iYWJpbGl0eSBwXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCB0aGlzLnApIHByZWRzVG9EaWUucHVzaChwcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9wcmV5IGVhdGVuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJleVRvRWF0ID0gcHJlZC5wcmV5cy5nZXQoKGludCkocHJlZC5wcmV5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgICAgICAgICAgcHJleXNUb0RpZS5wdXNoKHByZXlUb0VhdCk7XG5cbiAgICAgICAgICAgICAgICAvL3ByZWRhdG9yIHJlcHJvZHVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gcikgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHByZWQucHJlZGF0b3JzLmxlbmd0aCA+PSBuYikgY29udGludWU7XG4gICAgICAgICAgICAgICAgcHJlZHNUb0Jvcm4ucHVzaChwcmVkLm1ha2VDaGlsZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJleXMucHVzaCguLi5wcmV5c1RvQm9ybik7XG4gICAgICAgIHRoaXMucHJlZGF0b3JzLnB1c2goLi4ucHJlZHNUb0Jvcm4pO1xuICAgICAgICAvL3RoaXMucHJleXMucmVtb3ZlQWxsKHByZXlzVG9EaWUpO1xuICAgICAgICB0aGlzLnByZXlzID0gdGhpcy5wcmV5cy5maWx0ZXIoeCA9PiAhcHJleXNUb0RpZS5oYXMoeCkpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHByZXlzVG9EaWUpIGdyaWQucmVtb3ZlKGEsIGEueCwgYS55KTtcbiAgICAgICAgLy90aGlzLnByZWRhdG9ycy5yZW1vdmVBbGwocHJlZHNUb0RpZSk7XG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gdGhpcy5wcmVkYXRvcnMuZmlsdGVyKHggPT4gIXByZWRzVG9EaWUuaGFzKHgpKTtcbiAgICAgICAgZm9yIChsZXQgYSBvZiBwcmVkc1RvRGllKSBncmlkLnJlbW92ZShhLCBhLngsIGEueSk7XG5cbiAgICAgICAgLy9tb3ZlXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmV5cylcbiAgICAgICAgICAgIGEubW92ZSgpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJlZGF0b3JzKVxuICAgICAgICAgICAgYS5tb3ZlKCk7XG5cbiAgICAgICAgLyovaGlzdG9cbiAgICAgICAgaGlzdG9baW5kZXhdID0gbmV3IGludFtdeyBwcmV5cy5zaXplKCksIHByZWRhdG9ycy5zaXplKCkgfTtcbiAgICAgICAgaWYgKGluZGV4ID09IGhpc3RvLmxlbmd0aCAtIDEpIGluZGV4ID0gMDtcbiAgICAgICAgZWxzZSBpbmRleCsrOyovXG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMYW5kIH0gZnJvbSAnLi9MYW5kJztcbmltcG9ydCB7IEFuaW1hbCB9IGZyb20gJy4vQW5pbWFsJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuXG5jbGFzcyBQcmV5UHJlZGF0b3JTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cblxuICAgICAgICAvL2Rpc3BsYXkgYW5pbWFsXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoYS54LCBhLnksIDMsIDMpO1xuICAgICAgICAgICAgLypjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLmFyYyhhLngsIGEueSwgMC41LCAwLCAyKk1hdGguUEkpO1xuICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjMi5maWxsKCk7Ki9cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcblxuICAgICAgICAgICAgLy90cmFuc3BhcmVuY3lcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgICAgICAgICAgLy9kaXNwbGF5IGFuaW1hbHNcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiBwcmV5cylcbiAgICAgICAgICAgICAgICBkaXNwbGF5KGEpO1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGEgb2YgcHJlZGF0b3JzKVxuICAgICAgICAgICAgICAgIGRpc3BsYXkoYSk7XG5cbiAgICAgICAgICAgIC8vbGFiZWxcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgYzIuZmlsbFRleHQocHJleXMubGVuZ3RoICsgXCIvXCIgKyBwcmVkYXRvcnMubGVuZ3RoLCAyLCAxMCk7XG5cbiAgICAgICAgICAgIC8vY2hhcnRcbiAgICAgICAgICAgIC8vYzJDaGFydC5zZXRGaWxsU3R5bGUoYmFja0NvbG9yMik7XG4gICAgICAgICAgICAvL2MyQ2hhcnQuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAgICAgICAgIC8vZG91YmxlIG1heCA9IGdldE1heEhpc3RvKCk7XG4gICAgICAgICAgICAvKnB1YmxpYyBpbnQgZ2V0TWF4SGlzdG8oKSB7XG4gICAgICAgICAgICAgICAgaW50IG1heD0wO1xuICAgICAgICAgICAgICAgIGZvcihpbnQgaT0wO2k8aGlzdG8ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpc3RvW2ldWzBdPm1heCkgbWF4PWhpc3RvW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZihoaXN0b1tpXVsxXT5tYXgpIG1heD1oaXN0b1tpXVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdWJsZSBoMSwgaDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBoaXN0by5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSA9IGhDaGFydCAqIGhpc3RvW2ldWzBdIC8gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiA9IGhDaGFydCAqIGhpc3RvW2ldWzFdIC8gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShwcmV5Q29sb3IyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpLCBoQ2hhcnQgLSBoMSwgMSwgaDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShwcmVkYXRvckNvbG9yMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaSwgaENoYXJ0IC0gaDIsIDEsIGgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShDc3NDb2xvci5tYWtlKDI1NSwgMjU1LCAyNTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaW5kZXgsIDAsIDEsIGhDaGFydCk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtMYW5kfSAqL1xuICAgICAgICB0aGlzLmxhbmQgPSBuZXcgTGFuZCh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG4gICAgaW5pdFJhbmRvbShuYlByZXkgPSA1LCBuYlByZWRhdG9yID0gMTUwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQcmV5OyBpKyspXG4gICAgICAgICAgICB0aGlzLmxhbmQucHJleXMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgQW5pbWFsKDAsIHRoaXMubGFuZCwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQcmVkYXRvcjsgaSsrKVxuICAgICAgICAgICAgdGhpcy5sYW5kLnByZWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMSwgdGhpcy5sYW5kLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvL3N0YXJ0XG4gICAgc3RhcnQodGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LmxhbmQuc3RlcCh0aW1lU3RlcE1zKTtcbiAgICAgICAgICAgIHQuY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIDApO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHByZXlQcmVkYXRvciA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcmV5UHJlZGF0b3JTaW11bGF0aW9uKG9wdHMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9