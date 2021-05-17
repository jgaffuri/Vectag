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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: planets, gameOfLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sims_planets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sims/planets */ "./src/sims/planets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return _sims_planets__WEBPACK_IMPORTED_MODULE_0__["planets"]; });

/* harmony import */ var _sims_gol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sims/gol */ "./src/sims/gol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameOfLife", function() { return _sims_gol__WEBPACK_IMPORTED_MODULE_1__["gameOfLife"]; });





/***/ }),

/***/ "./src/sims/gol.js":
/*!*************************!*\
  !*** ./src/sims/gol.js ***!
  \*************************/
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

/***/ "./src/sims/planets.js":
/*!*****************************!*\
  !*** ./src/sims/planets.js ***!
  \*****************************/
/*! exports provided: planets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planets", function() { return planets; });
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");
/* harmony import */ var _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/canvasplus */ "./src/base/canvasplus.js");



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
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, agg[0]);
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, agg[1]);
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

    console.log(cdiv)
    console.log(w,h)

    var nb = 1000, mi = 0.5;
    /** @type {Universe} */
    var uni = new Universe(w, h, 10).fillRandomly(nb, mi, 0, 0.1);

    /** @type {CanvasPlus} */
    var cplus = new _base_canvasplus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](canvasId, w, h);
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9jYW52YXNwbHVzLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2xpYi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3NpbXMvZ29sLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9zaW1zL3BsYW5ldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FB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QTs7QUFFQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUMsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGlDQUFpQyIsImZpbGUiOiJ2ZWN0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vY2hlY2s6XG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9rYW5nYXgvZmFicmljLmpzL1xuLy9odHRwOi8va2luZXRpY2pzLmNvbS9cbi8vaHR0cDovL3d3dy5jcmVhdGVqcy5jb20vRG9jcy9FYXNlbEpTL2NsYXNzZXMvTW91c2VFdmVudC5odG1sXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gZGl2XG4gKiBAcGFyYW0ge251bWJlcj19IHdcbiAqIEBwYXJhbSB7bnVtYmVyPX0gaFxuICovXG5leHBvcnQgY29uc3QgQ2FudmFzUGx1cyA9IGZ1bmN0aW9uIChkaXYsIHcsIGgpIHtcblxuICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgdmFyIGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdik7XG5cbiAgICAvKipAdHlwZSB7T2JqZWN0fSAqL1xuICAgIHZhciBjdHggPSBjdnMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICh3KSBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBpZiAoaCkgY3R4LmNhbnZhcy5oZWlnaHQgPSBoO1xuICAgIC8qKkByZXR1cm4ge09iamVjdH0gKi9cbiAgICB0aGlzLmdldENvbnRleHQyRCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN0eDsgfTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0NhblBsLkNhbnZhc1BsdXN9XG4gICAgICovXG4gICAgdGhpcy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcnJpZGUgcmVkcmF3IG1ldGhvZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKi9cbiAgICB2YXIgcGFuID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgLy9UT0RPIGNsZWFyXG4gICAgICAgIC8vVE9ETyBjdHgudHJhbnNsYXRlKDEwLDEwKTtcbiAgICAgICAgLy9UT0RPIHVwZGF0ZWxpbWl0c1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZcbiAgICAgKi9cbiAgICB2YXIgem9vbSA9IGZ1bmN0aW9uICh4LCB5LCBmKSB7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2N0eC5zY2FsZSgyLDIpO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG4gICAgLypcbiAgICAgICAgICAgICQoXCIjXCIrZGl2KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FudmFzQ2xpY2tQb3NpdGlvbihjdnMsIGUpKTtcbiAgICAgICAgICAgICAgICAvL1RPRE8gcGFuXG4gICAgICAgICAgICB9KTtcbiAgICAqL1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbHRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZVxuICAgICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBudW1iZXI+fVxuICAgICAqL1xuICAgIHZhciBjYW52YXNDbGlja1Bvc2l0aW9uID0gZnVuY3Rpb24gKGVsdCwgZSkge1xuICAgICAgICBpZiAoZS5vZmZzZXRYICYmIGUub2Zmc2V0WSlcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH07XG4gICAgICAgIHZhciB0WCA9IDAsIHRZID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdFggKz0gZWx0Lm9mZnNldExlZnQgLSBlbHQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIHRZICs9IGVsdC5vZmZzZXRUb3AgLSBlbHQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgZWx0ID0gZWx0Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfSB3aGlsZSAoZWx0KTtcbiAgICAgICAgcmV0dXJuIHsgeDogZS5wYWdlWCAtIHRYLCB5OiBlLnBhZ2VZIC0gdFkgfTtcbiAgICB9O1xuXG59O1xuIiwiLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9ialRvQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIG91dC5wdXNoKG9ialtrZXldKTtcbiAgICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtUfSBvYmpcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaikge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zaW1zL3BsYW5ldHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2ltcy9nb2xcIlxuIiwiaW1wb3J0IHsgb2JqVG9BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL2NhbnZhc3BsdXMnO1xuXG5cbi8vVE9ETyB6b29tL3Bhbiwgd2l0aCBjYW52YXMgdHJhbnNmb3JtOiBiZXR0ZXIgdW5pdmVyc2UgbGltaXRzXG4vL1RPRE8gdGVzdCBnYyB3aXQgYWxsICsgZXh0ZXJucy9leHBvcnRcbi8vVE9ETyBhdXRvbWF0ZSBkZXBsb3ltZW50ICh1c2UgYW50PykgLSBzdGVwcyBhcmU6IChjbG9zdXJlIGNvbXBpbGVyICsgaHRtbCArKSBnaXQgbWVyZ2UgdG93YXJkIGJyYW5jaCBnaC1wYWdlcyArIGdpdCBwdXNoXG4vL1RPRE8gYnV0dG9ucyAocGxheSwgc3RvcCwgc3BlZWQsIGRyYXcsIHBhbilcbi8vVE9ETyBqc2hpbnRcbi8vVE9ETyBmaXggYmx1ZSBzdHVmZiBpbiBhbm5vdGF0aW9uc1xuLy9UT0RPIGNoZWNrIGNhbnZhcyBhbmltYXRpb25cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzdHJ1Y3RcbiAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gKiBAcGFyYW0ge251bWJlcn0gaFxuICovXG5jb25zdCBVbml2ZXJzZSA9IGZ1bmN0aW9uICh3LCBoKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy53ID0gdztcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB0aGlzLmggPSBoO1xuICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgIHRoaXMucG9wdWxhdGlvbiA9IFtdO1xuICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsQ2VsbD59XG4gICAgICogQGRpY3QgKi9cbiAgICB0aGlzLnBvcHVsYXRpb25JID0ge307XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7Q2VsbH1cbiAgICAgKi9cbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIC8vZmluZCBhZ2VudCBhdCBsb2NhdGlvblxuICAgICAgICAvKipAdHlwZSB7c3RyaW5nfSovXG4gICAgICAgIHZhciBpZCA9IHggKyBcIl9cIiArIHk7XG4gICAgICAgIC8qKkB0eXBlIHtDZWxsfSAqL1xuICAgICAgICB2YXIgY2VsbCA9IHRoaXMucG9wdWxhdGlvbklbaWRdO1xuICAgICAgICBpZiAoY2VsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgIGNlbGwgPSB7IHg6IHgsIHk6IHksIG5iOiAwIH07XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKGNlbGwpO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JW2lkXSA9IGNlbGw7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVuc2l0eVxuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHRoaXMuZmlsbFJhbmRvbWx5ID0gZnVuY3Rpb24gKGRlbnNpdHkpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdmFyIG5iID0gdGhpcy53ICogdGhpcy5oICogZGVuc2l0eTtcbiAgICAgICAgd2hpbGUgKGkgPCBuYikge1xuICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJvdW5kKHRoaXMudyAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLnJvdW5kKHRoaXMuaCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICAgICAgdmFyIGNlbGwgPSB0aGlzLmFkZCh4LCB5KTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHRoaXMuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBpLCBqO1xuICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgIHZhciBjZWxsLCBjZWxsXztcbiAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICB2YXIgc3VyLCBzdXJfO1xuICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAvL3BvcHVsYXRlIGNlbGwgc3Vycm91bmRpbmdzXG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICB2YXIgc3VySSA9IHt9O1xuICAgICAgICAvL2dvIHRocm91Z2ggbGlzdCBvZiBjZWxsc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb3B1bGF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyArMSBzdXJyb3VuZGluZyBjZWxsc1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgICAgICB2YXIgc3JzID0gZ2V0Q2VsbFN1cnJvdW5kaW5nKHRoaXMucG9wdWxhdGlvbltpXSwgdGhpcyk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3VyID0gc3JzW2pdO1xuICAgICAgICAgICAgICAgIGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgICAgICBzdXJfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdXJfKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cl8ubmIrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdXIubmIgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzdXJJW2tleV0gPSBzdXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9CMy9TMjNcblxuICAgICAgICAvL2tpbGwgY2VsbHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIHZhciBjZWxsc1RvS2VlcCA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgdmFyIGNlbGxzVG9LZWVwSSA9IHt9O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb3B1bGF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsID0gdGhpcy5wb3B1bGF0aW9uW2ldO1xuICAgICAgICAgICAga2V5ID0gY2VsbC54ICsgXCJfXCIgKyBjZWxsLnk7XG4gICAgICAgICAgICBjZWxsXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgIGlmICghY2VsbF8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy9pZiAobmI8MiBvciBuYj4zKSAtPiBraWxsXG4gICAgICAgICAgICBpZiAoY2VsbF8ubmIgPCAyIHx8IGNlbGxfLm5iID4gMykgY29udGludWU7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcC5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXBJW2tleV0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IGNlbGxzVG9LZWVwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0gY2VsbHNUb0tlZXBJO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdmFyIHN1cnMgPSBvYmpUb0FycmF5KHN1ckkpO1xuICAgICAgICBzdXJJID0gbnVsbDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN1cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1ciA9IHN1cnNbaV07XG5cbiAgICAgICAgICAgIGlmIChzdXIubmIgIT09IDMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGFscmVhZHkgYWxpdmVcbiAgICAgICAgICAgIGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgIGNlbGwgPSB0aGlzLnBvcHVsYXRpb25JW2tleV07XG4gICAgICAgICAgICBpZiAoY2VsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChzdXIpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtrZXldID0gc3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dE1TXG4gICAgICogQHBhcmFtIHtDYW52YXNQbHVzfSBjcGx1c1xuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAobmIsIHRpbWVvdXRNUywgY3BsdXMpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgdW5pID0gdGhpcztcbiAgICAgICAgdmFyIGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICB1bmkuc3RlcCgpO1xuICAgICAgICAgICAgY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmIgPiAwICYmIGkrKyA+IG5iKSByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgdGltZW91dE1TKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59O1xuXG4vKiogQHR5cGVkZWYge3t4Om51bWJlcix5Om51bWJlcixuYjo/bnVtYmVyfX0gQ2VsbCAqL1xuXG4vKipcbiAqIEBwYXJhbSB7Q2VsbH0gY2VsbFxuICogQHBhcmFtIHtVbml2ZXJzZX0gdW5pXG4gKiBAcmV0dXJuIHtBcnJheS48Q2VsbD59XG4gKi9cbnZhciBnZXRDZWxsU3Vycm91bmRpbmcgPSBmdW5jdGlvbiAoY2VsbCwgdW5pKSB7XG4gICAgdmFyIHgxID0gY2VsbC54ID09PSAwID8gdW5pLncgLSAxIDogY2VsbC54IC0gMTtcbiAgICB2YXIgeDIgPSBjZWxsLnggPT09IHVuaS53IC0gMSA/IDAgOiBjZWxsLnggKyAxO1xuICAgIHZhciB5MSA9IGNlbGwueSA9PT0gMCA/IHVuaS5oIC0gMSA6IGNlbGwueSAtIDE7XG4gICAgdmFyIHkyID0gY2VsbC55ID09PSB1bmkuaCAtIDEgPyAwIDogY2VsbC55ICsgMTtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IHg6IHgxLCB5OiB5MSB9LFxuICAgICAgICB7IHg6IHgxLCB5OiBjZWxsLnkgfSxcbiAgICAgICAgeyB4OiB4MSwgeTogeTIgfSxcbiAgICAgICAgeyB4OiBjZWxsLngsIHk6IHkxIH0sXG4gICAgICAgIHsgeDogY2VsbC54LCB5OiB5MiB9LFxuICAgICAgICB7IHg6IHgyLCB5OiB5MSB9LFxuICAgICAgICB7IHg6IHgyLCB5OiBjZWxsLnkgfSxcbiAgICAgICAgeyB4OiB4MiwgeTogeTIgfVxuICAgIF07XG59O1xuXG5cblxuXG4vL2VudHJ5IHBvaW50XG5leHBvcnQgY29uc3QgZ2FtZU9mTGlmZSA9IGZ1bmN0aW9uKGRpdklkLCBjYW52YXNJZCkge1xuXG52YXIgY2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKTtcbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xudmFyIHcgPSBjZGl2Lm9mZnNldFdpZHRoO1xuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG52YXIgaCA9IGNkaXYub2Zmc2V0SGVpZ2h0O1xuXG52YXIgdW5pID0gbmV3IFVuaXZlcnNlKHcsIGgpLmZpbGxSYW5kb21seSgwLjA1KTtcbi8vdmFyIHVuaSA9IG5ldyBVbml2ZXJzZSg1MDAsIDMwMCkuZmlsbFJhbmRvbWx5KDAuMDUpO1xuXG52YXIgY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhjYW52YXNJZCwgdywgaCk7XG5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMuZ2V0Q29udGV4dDJEKCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDBGRlwiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pLnBvcHVsYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICB2YXIgY2VsbCA9IHVuaS5wb3B1bGF0aW9uW2ldO1xuICAgICAgICAvL2N0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy9jdHguYXJjKGNlbGwueCxjZWxsLnksMSwwLDIqTWF0aC5QSSk7XG4gICAgICAgIC8vY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KGNlbGwueCwgY2VsbC55LCAxLCAxKTtcbiAgICB9XG59O1xuXG4vL3N0YXJ0XG51bmkuc3RhcnQoLTEsIDAsIGNwbHVzKTtcblxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvY2FudmFzcGx1cyc7XG5cbi8vVE9ETyB1c2Ugc3BhdGlhbCBpbmRleCB0byBib29zdCBjb2xsaXNpb24gZGV0ZWN0aW9uXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAcGFyYW0ge1VuaXZlcnNlfSB1XG4gKiBAcGFyYW0ge251bWJlcn0gbVxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge251bWJlcn0gdnhcbiAqIEBwYXJhbSB7bnVtYmVyfSB2eVxuICovXG5jb25zdCBQbGFuZXQgPSBmdW5jdGlvbiAodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICB0aGlzLnUgPSB1O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubSA9IG07XG5cbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgciA9IHRoaXMucigpO1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy54ID0gMDtcbiAgICBpZiAoeCA8IHIpIHRoaXMueCA9IHI7XG4gICAgZWxzZSBpZiAoeCA+IHUudyAtIHIpIHRoaXMueCA9IHUudyAtIHI7XG4gICAgZWxzZSB0aGlzLnggPSB4O1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy55ID0gMDtcbiAgICBpZiAoeSA8IHIpIHRoaXMueSA9IHI7XG4gICAgZWxzZSBpZiAoeSA+IHUuaCAtIHIpIHRoaXMueSA9IHUuaCAtIHI7XG4gICAgZWxzZSB0aGlzLnkgPSB5O1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy52eCA9IHZ4O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMudnkgPSB2eTtcbn07XG5cbi8qKlxuICovXG5QbGFuZXQucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy91cGRhdGUgdGhlIGZvcmNlXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5meCA9IDA7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5meSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnUucHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgIHZhciBwID0gdGhpcy51LnBzW2ldO1xuICAgICAgICBpZiAodGhpcyA9PSBwKSBjb250aW51ZTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHZhciBkID0gdGhpcy5kKHApO1xuICAgICAgICBkID0gZCAqIGQgKiBkO1xuICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIHRoaXMuZnkgKz0gMC4wMSAqIChwLnkgLSB0aGlzLnkpICogdGhpcy5tICogcC5tIC8gZDtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7UGxhbmV0fSBwXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblBsYW5ldC5wcm90b3R5cGUuZCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIGR4ID0gcC54IC0gdGhpcy54O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBkeSA9IHAueSAtIHRoaXMueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblBsYW5ldC5wcm90b3R5cGUuciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubSAvIE1hdGguUEkpO1xufTtcblxuLyoqXG4gKi9cblBsYW5ldC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vY29tcHV0ZSBhY2NlbGVyYXRpb25cbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgYXggPSB0aGlzLmZ4IC8gdGhpcy5tO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgdGhpcy52eCArPSBheCAqIHRoaXMudS50aW1lU3RlcE1zO1xuICAgIHRoaXMudnkgKz0gYXkgKiB0aGlzLnUudGltZVN0ZXBNcztcblxuICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICB0aGlzLnggKz0gdGhpcy52eCAqIHRoaXMudS50aW1lU3RlcE1zO1xuICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGhpcy51LnRpbWVTdGVwTXM7XG5cbiAgICAvL2xpbWl0XG4gICAgLypkb3VibGUgcj1yKCk7XG4gICAgIGlmKHg8cikgeyB4PXI7IHZ4PS12eCplOyB9XG4gICAgIGlmKHk8cikgeyB5PXI7IHZ5PS12eSplOyB9XG4gICAgIGlmKHg+dS53LXIpIHsgeD11Lnctcjsgdng9LXZ4KmU7IH1cbiAgICAgaWYoeT51LmgtcikgeyB5PXUuaC1yOyB2eT0tdnkqZTsgfSovXG4gICAgaWYgKHRoaXMueCA8IDApIHsgdGhpcy54ID0gdGhpcy51Lnc7IH1cbiAgICBpZiAodGhpcy55IDwgMCkgeyB0aGlzLnkgPSB0aGlzLnUuaDsgfVxuICAgIGlmICh0aGlzLnggPiB0aGlzLnUudykgeyB0aGlzLnggPSAwOyB9XG4gICAgaWYgKHRoaXMueSA+IHRoaXMudS5oKSB7IHRoaXMueSA9IDA7IH1cbn07XG5cblxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHN0cnVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHdcbiAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNc1xuICovXG5jb25zdCBVbml2ZXJzZSA9IGZ1bmN0aW9uICh3LCBoLCB0aW1lU3RlcE1zKSB7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy53ID0gdztcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB0aGlzLmggPSBoO1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy50aW1lU3RlcE1zID0gdGltZVN0ZXBNcztcblxuICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgdGhpcy5wcyA9IFtdO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICogQHBhcmFtIHtudW1iZXJ9IG1pXG4gKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICogQHJldHVybiB7VW5pdmVyc2V9XG4gKi9cblVuaXZlcnNlLnByb3RvdHlwZS5maWxsUmFuZG9tbHkgPSBmdW5jdGlvbiAobmIsIG1pLCBtaW5TcGVlZCwgbWF4U3BlZWQpIHtcbiAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgIHRoaXMucHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgdmFyIHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICB2YXIgYW5nbGUgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMucHMucHVzaChuZXcgUGxhbmV0KHRoaXMsIG1pLCB0aGlzLncgKiBNYXRoLnJhbmRvbSgpLCB0aGlzLmggKiBNYXRoLnJhbmRvbSgpLCBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKSwgc3BlZWQgKiBNYXRoLnNpbihhbmdsZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICovXG5Vbml2ZXJzZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgaTtcblxuICAgIC8vb2JzZXJ2YXRpb25cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKylcbiAgICAgICAgdGhpcy5wc1tpXS5vYnNlcnZlKCk7XG5cbiAgICAvL2FjdGlvblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBzLmxlbmd0aDsgaSsrKVxuICAgICAgICB0aGlzLnBzW2ldLmNoYW5nZSgpO1xuXG4gICAgLy9jb2xsaXNpb24gZGV0ZWN0aW9uc1xuICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgdmFyIGFnZyA9IHRoaXMuZmluZENvbGxpc2lvbigpO1xuICAgIHdoaWxlIChhZ2cgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcy5wdXNoKHRoaXMuYWdncmVnYXRlKGFnZykpO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5wcywgYWdnWzBdKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIGFnZ1sxXSk7XG4gICAgICAgIGFnZyA9IHRoaXMuZmluZENvbGxpc2lvbigpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPFBsYW5ldD59XG4gKi9cblVuaXZlcnNlLnByb3RvdHlwZS5maW5kQ29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICAgICAgdmFyIHBpID0gdGhpcy5wc1tpXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdGhpcy5wcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgICAgICAgICB2YXIgcGogPSB0aGlzLnBzW2pdO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICB2YXIgZDEgPSBwaS5kKHBqKTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgdmFyIGQyID0gcGkucigpICsgcGoucigpO1xuICAgICAgICAgICAgaWYgKGQxID4gZDIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIFtwaSwgcGpdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxQbGFuZXQ+fSBhZ2dcbiAqL1xuVW5pdmVyc2UucHJvdG90eXBlLmFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIChhZ2cpIHtcbiAgICAvKiogQHR5cGUge1BsYW5ldH0gKi9cbiAgICB2YXIgcDEgPSBhZ2dbMF07XG4gICAgLyoqIEB0eXBlIHtQbGFuZXR9ICovXG4gICAgdmFyIHAyID0gYWdnWzFdO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBtID0gcDEubSArIHAyLm07XG4gICAgcmV0dXJuIG5ldyBQbGFuZXQodGhpcyxcbiAgICAgICAgbSxcbiAgICAgICAgKHAxLnggKiBwMS5tICsgcDIueCAqIHAyLm0pIC8gbSxcbiAgICAgICAgKHAxLnkgKiBwMS5tICsgcDIueSAqIHAyLm0pIC8gbSxcbiAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAocDEudnkgKiBwMS5tICsgcDIudnkgKiBwMi5tKSAvIG1cbiAgICApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbmJcbiAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3BsdXNcbiAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICovXG5Vbml2ZXJzZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAobmIsIGNwbHVzKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciB1bmkgPSB0aGlzO1xuICAgIHZhciBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICBpZiAobmIgPiAwICYmIGkrKyA+IG5iKSByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICB9O1xuICAgIGVuZ2luZSgpO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG5cbi8vZW50cnkgcG9pbnRcbmV4cG9ydCBjb25zdCBwbGFuZXRzID0gZnVuY3Rpb24gKGRpdklkLCBjYW52YXNJZCkge1xuXG4gICAgdmFyIGNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdmFyIHcgPSBjZGl2Lm9mZnNldFdpZHRoO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBoID0gY2Rpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zb2xlLmxvZyhjZGl2KVxuICAgIGNvbnNvbGUubG9nKHcsaClcblxuICAgIHZhciBuYiA9IDEwMDAsIG1pID0gMC41O1xuICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgdmFyIHVuaSA9IG5ldyBVbml2ZXJzZSh3LCBoLCAxMCkuZmlsbFJhbmRvbWx5KG5iLCBtaSwgMCwgMC4xKTtcblxuICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICB2YXIgY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhjYW52YXNJZCwgdywgaCk7XG4gICAgdmFyIGN0eCA9IGNwbHVzLmdldENvbnRleHQyRCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICBjcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjA1KVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAgICAgLy9kaXNwbGF5IHBsYW5ldHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmkucHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7UGxhbmV0fSAqL1xuICAgICAgICAgICAgdmFyIHAgPSB1bmkucHNbaV07XG4gICAgICAgICAgICB2YXIgdCA9IHAubSAvIChuYiAqIG1pKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMjU1LFwiICsgTWF0aC5mbG9vcigyNTUgKiAoMSAtIHQpKSArIFwiKVwiO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhwLngsIHAueSwgcC5yKCksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2xhYmVsXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyMDAsMjAwLDIwMClcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHVuaS5wcy5sZW5ndGggKyBcIiBwbGFuZXRzXCIsIDIsIDEwKTtcbiAgICB9O1xuXG4gICAgLy9zdGFydFxuICAgIHVuaS5zdGFydCgtMSwgY3BsdXMpO1xuXG59XG5cblxuICAgICAgICAgLy9UT0RPIGFkZCByZXN0YXJ0L2JpZyBiYW5nIGJ1dHRvblxuLyogQnV0dG9uIHJlc3RhcnQgPSBuZXcgQnV0dG9uKFwiUmVjb21tZW5jZXIhXCIpO1xuIHJlc3RhcnQuYWRkQ2xpY2tIYW5kbGVyKG5ldyBDbGlja0hhbmRsZXIoKSB7XG4gQE92ZXJyaWRlXG4gcHVibGljIHZvaWQgb25DbGljayhDbGlja0V2ZW50IGV2ZW50KSB7XG4gdS5maWxsKCk7XG4gYy5nZXRDb250ZXh0MmQoKS5zZXRGaWxsU3R5bGUoQ3NzQ29sb3IubWFrZSgwLDAsMCkpO1xuIGMuZ2V0Q29udGV4dDJkKCkuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG4gfVxuIH0pO1xuIFJvb3RQYW5lbC5nZXQoXCJiXCIpLmFkZChyZXN0YXJ0KTsqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==