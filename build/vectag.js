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

/***/ "./node_modules/rbush/rbush.min.js":
/*!*****************************************!*\
  !*** ./node_modules/rbush/rbush.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,function(){"use strict";function t(t,r,e,a,h){!function t(n,r,e,a,h){for(;a>e;){if(a-e>600){var o=a-e+1,s=r-e+1,l=Math.log(o),f=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*f*(o-f)/o)*(s-o/2<0?-1:1),m=Math.max(e,Math.floor(r-s*f/o+u)),c=Math.min(a,Math.floor(r+(o-s)*f/o+u));t(n,r,m,c,h)}var p=n[r],d=e,x=a;for(i(n,e,r),h(n[a],p)>0&&i(n,e,a);d<x;){for(i(n,d,x),d++,x--;h(n[d],p)<0;)d++;for(;h(n[x],p)>0;)x--}0===h(n[e],p)?i(n,e,x):i(n,++x,a),x<=r&&(e=x+1),r<=x&&(a=x-1)}}(t,r,e||0,a||t.length-1,h||n)}function i(t,i,n){var r=t[i];t[i]=t[n],t[n]=r}function n(t,i){return t<i?-1:t>i?1:0}var r=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function e(t,i,n){if(!n)return i.indexOf(t);for(var r=0;r<i.length;r++)if(n(t,i[r]))return r;return-1}function a(t,i){h(t,0,t.children.length,i,t)}function h(t,i,n,r,e){e||(e=p(null)),e.minX=1/0,e.minY=1/0,e.maxX=-1/0,e.maxY=-1/0;for(var a=i;a<n;a++){var h=t.children[a];o(e,t.leaf?r(h):h)}return e}function o(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,n,r,e,a){for(var h=[n,r];h.length;)if(!((r=h.pop())-(n=h.pop())<=e)){var o=n+Math.ceil((r-n)/e/2)*e;t(i,o,n,r,a),h.push(n,o,o,r)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(t){var i=this.data,n=[];if(!c(t,i))return n;for(var r=this.toBBox,e=[];i;){for(var a=0;a<i.children.length;a++){var h=i.children[a],o=i.leaf?r(h):h;c(t,o)&&(i.leaf?n.push(h):m(t,o)?this._all(h,n):e.push(h))}i=e.pop()}return n},r.prototype.collides=function(t){var i=this.data;if(!c(t,i))return!1;for(var n=[];i;){for(var r=0;r<i.children.length;r++){var e=i.children[r],a=i.leaf?this.toBBox(e):e;if(c(t,a)){if(i.leaf||m(t,a))return!0;n.push(e)}}i=n.pop()}return!1},r.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0;i<t.length;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},r.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},r.prototype.clear=function(){return this.data=p([]),this},r.prototype.remove=function(t,i){if(!t)return this;for(var n,r,a,h=this.data,o=this.toBBox(t),s=[],l=[];h||s.length;){if(h||(h=s.pop(),r=s[s.length-1],n=l.pop(),a=!0),h.leaf){var f=e(t,h.children,i);if(-1!==f)return h.children.splice(f,1),s.push(h),this._condense(s),this}a||h.leaf||!m(h,o)?r?(n++,h=r.children[n],a=!1):h=null:(s.push(h),l.push(n),n=0,r=h,h=h.children[0])}return this},r.prototype.toBBox=function(t){return t},r.prototype.compareMinX=function(t,i){return t.minX-i.minX},r.prototype.compareMinY=function(t,i){return t.minY-i.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(t){return this.data=t,this},r.prototype._all=function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},r.prototype._build=function(t,i,n,r){var e,h=n-i+1,o=this._maxEntries;if(h<=o)return a(e=p(t.slice(i,n+1)),this.toBBox),e;r||(r=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/Math.pow(o,r-1))),(e=p([])).leaf=!1,e.height=r;var s=Math.ceil(h/o),l=s*Math.ceil(Math.sqrt(o));d(t,i,n,l,this.compareMinX);for(var f=i;f<=n;f+=l){var u=Math.min(f+l-1,n);d(t,f,u,s,this.compareMinY);for(var m=f;m<=u;m+=s){var c=Math.min(m+s-1,u);e.children.push(this._build(t,m,c,r-1))}}return a(e,this.toBBox),e},r.prototype._chooseSubtree=function(t,i,n,r){for(;r.push(i),!i.leaf&&r.length-1!==n;){for(var e=1/0,a=1/0,h=void 0,o=0;o<i.children.length;o++){var s=i.children[o],l=f(s),u=(m=t,c=s,(Math.max(c.maxX,m.maxX)-Math.min(c.minX,m.minX))*(Math.max(c.maxY,m.maxY)-Math.min(c.minY,m.minY))-l);u<a?(a=u,e=l<e?l:e,h=s):u===a&&l<e&&(e=l,h=s)}i=h||i.children[0]}var m,c;return i},r.prototype._insert=function(t,i,n){var r=n?t:this.toBBox(t),e=[],a=this._chooseSubtree(r,this.data,i,e);for(a.children.push(t),o(a,r);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(r,e,i)},r.prototype._split=function(t,i){var n=t[i],r=n.children.length,e=this._minEntries;this._chooseSplitAxis(n,e,r);var h=this._chooseSplitIndex(n,e,r),o=p(n.children.splice(h,n.children.length-h));o.height=n.height,o.leaf=n.leaf,a(n,this.toBBox),a(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},r.prototype._splitRoot=function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(t,i,n){for(var r,e,a,o,s,l,u,m=1/0,c=1/0,p=i;p<=n-i;p++){var d=h(t,0,p,this.toBBox),x=h(t,p,n,this.toBBox),v=(e=d,a=x,o=void 0,s=void 0,l=void 0,u=void 0,o=Math.max(e.minX,a.minX),s=Math.max(e.minY,a.minY),l=Math.min(e.maxX,a.maxX),u=Math.min(e.maxY,a.maxY),Math.max(0,l-o)*Math.max(0,u-s)),M=f(d)+f(x);v<m?(m=v,r=p,c=M<c?M:c):v===m&&M<c&&(c=M,r=p)}return r||n-i},r.prototype._chooseSplitAxis=function(t,i,n){var r=t.leaf?this.compareMinX:s,e=t.leaf?this.compareMinY:l;this._allDistMargin(t,i,n,r)<this._allDistMargin(t,i,n,e)&&t.children.sort(r)},r.prototype._allDistMargin=function(t,i,n,r){t.children.sort(r);for(var e=this.toBBox,a=h(t,0,i,e),s=h(t,n-i,n,e),l=u(a)+u(s),f=i;f<n-i;f++){var m=t.children[f];o(a,t.leaf?e(m):m),l+=u(a)}for(var c=n-i-1;c>=i;c--){var p=t.children[c];o(s,t.leaf?e(p):p),l+=u(s)}return l},r.prototype._adjustParentBBoxes=function(t,i,n){for(var r=n;r>=0;r--)o(i[r],t)},r.prototype._condense=function(t){for(var i=t.length-1,n=void 0;i>=0;i--)0===t[i].children.length?i>0?(n=t[i-1].children).splice(n.indexOf(t[i]),1):this.clear():a(t[i],this.toBBox)},r});


/***/ }),

/***/ "./src/base/CanvasPlus.js":
/*!********************************!*\
  !*** ./src/base/CanvasPlus.js ***!
  \********************************/
/*! exports provided: CanvasPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPlus", function() { return CanvasPlus; });
//@ts-check
class CanvasPlus {

    //check:
    //https://github.com/kangax/fabric.js/
    //http://kineticjs.com/
    //http://www.createjs.com/Docs/EaselJS/classes/MouseEvent.html

    /**
     * @constructor
     * @param {string} divId
     * @param {string} canvasId
     * @param {Object} center
     * @param {number} ps
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

    /** @returns {this} */
    redraw() {
        console.log("Override redraw method");
        return this;
    }

    //conversion functions
    /**
     * @param {number} xGeo
     * @returns {number}
    */
    geoToPixX(xGeo) { return (xGeo - this.center.x) / this.ps + this.w * 0.5; }
    /**
     * @param {number} yGeo
     * @returns {number}
    */
    geoToPixY(yGeo) { return -(yGeo - this.center.y) / this.ps + this.h * 0.5; }
    /**
     * @param {number} x
     * @returns {number}
    */
    pixToGeoX(x) { return (x - this.w * 0.5) * this.ps + this.center.x; }
    /**
     * @param {number} y
     * @returns {number}
    */
    pixToGeoY(y) { return -(y - this.h * 0.5) * this.ps + this.center.y; }

    /**
     * @param {number} dxGeo
     * @param {number} dyGeo
     */
    pan(dxGeo, dyGeo) {
        this.center.x += dxGeo;
        this.center.y += dyGeo;
        this.redraw();
    }

    /**
     * @param {number} f
     * @param {number} xGeo
     * @param {number} yGeo
     */
    zoom(f = 1, xGeo = this.center.x, yGeo = this.center.y) {
        this.ps *= f;
        this.center.x += (xGeo - this.center.x) * (1 - f)
        this.center.y += (yGeo - this.center.y) * (1 - f)
        this.redraw();
    }

}


/***/ }),

/***/ "./src/base/Grid.js":
/*!**************************!*\
  !*** ./src/base/Grid.js ***!
  \**************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./src/base/lib.js");
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rbush */ "./node_modules/rbush/rbush.min.js");
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rbush__WEBPACK_IMPORTED_MODULE_1__);
//@ts-check



/**
 * @template T
 */
class Grid {

    /**
     * @constructor
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

        /** @type {RBush} */
        this.tree = new rbush__WEBPACK_IMPORTED_MODULE_1___default.a();
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
     * @returns {number}
     */
    add(obj, x, y) {
        return this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)].push(obj);
    }

    /**
     * @param {T} obj
     * @param {number} x
     * @param {number} y
     */
    remove(obj, x, y, msg=true) {
        Object(_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.cells[Math.floor(x / this.res)][Math.floor(y / this.res)], obj, msg);
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
        Object(_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.cells[iIni][jIni], obj);
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
//@ts-check
/**
 * @template T
 * @param {Object.<?, T>} obj
 * @returns {Array.<T>}
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
 * @param {boolean} msg 
 */
const removeFromArray = function (arr, obj, msg = true) {
    /** @type {number} */
    var index = arr.indexOf(obj);
    if (index > -1)
        arr.splice(index, 1);
    else
        if (msg) console.log("Impossible to remove element not present in array.");
};

/**
 * 
 * @template T
 * @param {Array.<T>} arr
 * @param {Array.<T>} objs 
 * @param {boolean} msg 
 */
const removeFromArrayS = function (arr, objs, msg = true) {
    for (let obj of objs)
        removeFromArray(arr, obj, msg)
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
/* harmony import */ var _Sea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sea */ "./src/fish/Sea.js");
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
//@ts-check



/** */
class Sardin {

    /**
     * @param {Sea} sea 
     * @param {number} x 
     * @param {number} y 
     * @param {number} vx 
     * @param {number} vy 
     */
    constructor(sea, x = sea.w * Math.random(), y = sea.h * Math.random(), vx = undefined, vy = undefined) {

        /** @type {Sea} */
        this.sea = sea;

        //position
        /** @type {number} */
        this.x = x < 0 ? 0 : x > sea.w ? sea.w : x
        /** @type {number} */
        this.y = y < 0 ? 0 : y > sea.h ? sea.h : y

        /** @type {number} */
        this.vx = 0;
        /** @type {number} */
        this.vy = 0;

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
        /** @type {number} */
        this.ax = 0
        /** @type {number} */
        this.ay = 0

        //add to spatial index
        this.sea.grid.add(this, this.x, this.y)

        //list of sardins in vision field
        /** @type {Array.<Sardin>} */
        this.obs = []
        //list of sardins in collision field
        /** @type {Array.<Sardin>} */
        this.col = []
    }


    /**
     * Set random speed
     * 
     * @param {number} minSpeed 
     * @param {number} maxSpeed 
     */
    setRandomSpeed(minSpeed = 0, maxSpeed = this.sea.V_MAX) {
        this.va = 2 * Math.random() * Math.PI;
        this.v = minSpeed + Math.random() * (maxSpeed - minSpeed);
        this.vx = this.v * Math.cos(this.va);
        this.vy = this.v * Math.sin(this.va);
    }


    /**
     * 
     */
    observe() {

        //initialise lists
        /** @type {Array.<Sardin>} */
        this.obs = [];
        /** @type {Array.<Sardin>} */
        this.col = [];

        //get sardins around using spatial index
        /** @type {Array.<Sardin>} */
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


    /**
     * @param {number} timeStepMs 
     */
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


    /**
     * @param {Sardin} s 
     * @returns {number} The distance to another sardin.
     */
    d(s) {
        return Math.hypot((s.x - this.x), (s.y - this.y));
    }


    /**
     * Display a sardin body
     * 
     * @param {CanvasPlus} cp 
     * @param {number} length 
     */
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
/* harmony import */ var _base_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Grid */ "./src/base/Grid.js");
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");
//@ts-check




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
        /** @type {Grid.<Sardin>} */
        this.grid = new _base_Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](w, h, this.D_OBS);

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
        return this;
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
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
//@ts-check



class FishSimulation {

    /**
     * @param {Object} opts 
     */
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
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"](opts.divId, "vacanvas");
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

            return this;
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


    /**
     * @param {number} nb 
     * @returns {this}
     */
    initRandom(nb = 1500) {
        this.sea.addFish(nb);
        return this
    }

    /**
     * 
     * @param {number} timeStepMs 
     * @param {number} nbIterations 
     * @returns {this}
     */
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

/**
 * @param {Object} opts 
 */
const fish = function (opts) {
    return new FishSimulation(opts)
}


/***/ }),

/***/ "./src/gol/Cell.js":
/*!*************************!*\
  !*** ./src/gol/Cell.js ***!
  \*************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
//@ts-check

/**
 * 
 */
class Cell {

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} nb 
     */
    constructor(x, y, nb=0) {
        /** @type {number} */
        this.x = x
        /** @type {number} */
        this.y = y
        /** @type {number} */
        this.nb = nb
    }

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
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./src/gol/Cell.js");
//@ts-check




/**
 * 
 */
class Universe {

    /**
     * @constructor
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
        /** @type {Object.<string,Cell>} */
        this.populationI = {};
    }

    /**
     * @param {number} x
     * @param {number} y
     * @returns {Cell|null}
     */
    add(x, y) {

        //find cell at location
        /**@type {string}*/
        const id = x + "_" + y;
        if (this.populationI[id]) return null;

        //create new cell
        /**@type {Cell} */
        const cell = new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x, y, 0)
        this.population.push(cell)
        this.populationI[id] = cell
        return cell
    }

    /**
     * @returns {this}
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
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x1, y1),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x1, cell.y),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x1, y2),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](cell.x, y1),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](cell.x, y2),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x2, y1),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x2, cell.y),
            new _Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](x2, y2),
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
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
/* harmony import */ var _Universe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Universe */ "./src/gol/Universe.js");
//@ts-check



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

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_0__["CanvasPlus"](opts.divId, "vacanvas");

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

            return this
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

//@ts-check







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
/* harmony import */ var _Universe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Universe */ "./src/planets/Universe.js");
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
//@ts-check



class Planet {

    /**
     * @constructor
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

        //set force
        /** @type {number} */
        this.fx = 0;
        /** @type {number} */
        this.fy = 0;
    }

    /**
     * Update the force, based on the gravity of other planets.
     */
    observe() {

        this.fx = 0;
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
     * 
     * @param {boolean} bounce 
     * @param {number} vmax 
     * @param {number} timeStepMs 
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
            /** @type {number} */
            const v = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (v > vmax) {
                this.vx = vmax * this.vx / v;
                this.vy = vmax * this.vy / v;
            }
        }

        //compute new position
        /** @type {number} */
        let nx = this.x + this.vx * timeStepMs;
        /** @type {number} */
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


    /** 
    * Set random speed
    * @param {number} minSpeed
    * @param {number} maxSpeed
    */
    setRandomSpeed(minSpeed = 0, maxSpeed = 0.1) {
        const angle = 2 * Math.random() * Math.PI;
        const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        this.vx = speed * Math.cos(angle)
        this.vy = speed * Math.sin(angle)
    }

    /**
     * Display planet
     * 
     * @param {CanvasPlus} cp 
     * @param {String} fillStyle 
     */
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
/* harmony import */ var _base_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Grid */ "./src/base/Grid.js");
/* harmony import */ var _Planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Planet */ "./src/planets/Planet.js");
//@ts-check




class Universe {

    /**
     * @constructor
     * @param {number} w
     * @param {number} h
     * @param {number} gres
     */
    constructor(w, h, gres = Math.min(w, h) / 100.0) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {Array.<Planet>} */
        this.ps = [];

        /** @type {Grid.<Planet>} */
        this.grid = new _base_Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](w, h, gres);
    }

    /**
     * Compute the mass of the universe
     * @returns {number}
     */
    m() {
        let m = 0;
        for (let p of this.ps)
            m += p.m;
        return m;
    }

    /**
     * Create a planet
     * 
     * @param {number} m 
     * @param {number} x 
     * @param {number} y 
     * @param {number} sx 
     * @param {number} sy 
     * @returns {Planet}
     */
    createPlanet(m, x, y, sx = 0, sy = 0) {
        const p = new _Planet__WEBPACK_IMPORTED_MODULE_2__["Planet"](this, m, x, y, sx, sy);
        this.add(p);
        return p;
    }

    /**
     * Add a planet
     * 
     * @param {Planet} p 
     */
    add(p) {
        p.u = this;
        this.ps.push(p);
        this.grid.add(p, p.x, p.y);
    }

    /**
     * Remove a planet
     * 
     * @param {Planet} p 
     */
    remove(p) {
        p.u = null;
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, p);
        this.grid.remove(p, p.x, p.y);
    }

    /**
     * Move a planet
     * 
     * @param {Planet} p
     * @param {number} nx
     * @param {number} ny
     */
    move(p, nx, ny) {
        this.grid.move(p, p.x, p.y, nx, ny);
        p.x = nx; p.y = ny;
    }

    /**
     * Aggregate two planets
     * 
     * @param {Planet} p1
     * @param {Planet} p2
     * @returns {Planet}
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
     * @param {number} collisionFactor
     * @returns {Array.<Planet>}
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
     * Add planets with random speed
     * 
     * @param {number} nb 
     * @param {number} mi 
     * @param {number} minSpeed
     * @param {number} maxSpeed
     * @returns {this}
     */
    addPlanets(nb = 1, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        for (let i = 0; i < nb; i++) {
            const p = this.createPlanet(mi, this.w * Math.random(), this.h * Math.random());
            p.setRandomSpeed(minSpeed, maxSpeed);
        }
        return this;
    }



    /**
     * 
     * @param {boolean} bounce 
     * @param {number} vmax 
     * @param {number} collisionFactor 
     * @param {number} timeStepMs 
     * @returns {this}
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

    /**
     * Assign random speed to all planets
     * 
     * @param {number} minSpeed 
     * @param {number} maxSpeed 
     * @returns {this}
     */
    setRandomSpeed(minSpeed = 0, maxSpeed = 0.1) {
        for (let p of this.ps)
            p.setRandomSpeed(minSpeed, maxSpeed)
        return this
    }

    /**
     * @returns {Planet} The largest planet of the universe, usually the star.
     */
    getLargestPlanet() {
        let pM = null, mM = 0;
        for (let p of this.ps)
            if (p.m > mM) { pM = p; mM = p.m }
        return pM
    }

    /**
     * Get largest planet and explode it.
     */
    explodeLargestPlanet() {
        const p = this.getLargestPlanet()
        this.explode(p)
    }

    /**
     * Explode a planet into pieces
     * 
     * @param {Planet} p 
     * @param {number} nb 
     * @param {number} minSpeed 
     * @param {number} maxSpeed 
     * @param {number} rad 
     */
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
/* harmony import */ var _Planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Planet */ "./src/planets/Planet.js");
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
//@ts-check




/**  */
class PlanetSimulation {

    /**
     * @param {Object} opts 
     */
    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = opts.w || div.offsetWidth;
        /** @type {number} */
        this.h = opts.h || div.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_2__["CanvasPlus"](opts.divId, "vacanvas");
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

            return this;
        };

        /** @type {Universe} */
        this.uni = new _Universe__WEBPACK_IMPORTED_MODULE_0__["Universe"](this.w, this.h)
    }

    /**
     * Initialise with random planets
     * 
     * @param {number} nb 
     * @param {number} mi 
     * @param {number} minSpeed 
     * @param {number} maxSpeed 
     * @returns {this}
     */
    initRandom(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        this.uni.addPlanets(nb, mi, minSpeed, maxSpeed);
        return this;
    }

    /**
     * Initialise with big bang setup
     * 
     * @param {number} nb 
     * @param {number} mi 
     * @param {number} minSpeed 
     * @param {number} maxSpeed 
     * @param {number} rad 
     * @returns {this}
     */
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

    /**
     * Start simulation
     * 
     * @param {boolean} bounce 
     * @param {number} vmax 
     * @param {number} collisionFactor 
     * @param {number} timeStepMs 
     * @param {number} nbIterations 
     * @returns {this}
     */
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

/**
 * @param {Object} opts 
 */
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
/* harmony import */ var _Land__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Land */ "./src/pp/Land.js");
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
//@ts-check



class Animal {

    /**
     * @param {number} type 
     * @param {Land} l 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(type, l, x = 0, y = 0) {

        /** @type {number} */
        this.type = type;
        /** @type {Land} */
        this.l = l;

        //position
        /** @type {number} */
        this.x = x < 0 ? 0 : x > l.w ? l.w : x
        /** @type {number} */
        this.y = y < 0 ? 0 : y > l.h ? l.h : y

        //speed
        /** @type {number} */
        this.vx = 0
        /** @type {number} */
        this.vy = 0;

        //the other animals around
        /** @type {Array.<Animal>} */
        this.predators = []
        /** @type {Array.<Animal>} */
        this.preys = []

        //add to the spatial index
        l.grid.add(this, this.x, this.y);
    }


    /**
     * Distance to another animal
     * 
     * @param {Animal} a 
     * @returns {number}
     */
    d(a) {
        return Math.hypot((a.x - this.x), (a.y - this.y));
    }


    /**
     * @param {*} timeStepMs 
     */
    move(timeStepMs = 10) {
        const l = this.l
        l.grid.remove(this, this.x, this.y);

        const angle = Math.random() * 2 * Math.PI;
        const r = 0.01 * Math.random();

        this.vx += r * Math.cos(angle) * timeStepMs;
        this.vx = this.vx > l.V_MAX ? l.V_MAX : this.vx < -l.V_MAX ? -l.V_MAX : this.vx

        this.vy += r * Math.sin(angle) * timeStepMs;
        this.vy = this.vy > l.V_MAX ? l.V_MAX : this.vy < -l.V_MAX ? -l.V_MAX : this.vy

        this.x += this.vx * timeStepMs;
        this.x = this.x < 0 ? l.w : this.x > l.w ? 0 : this.x

        this.y += this.vy * timeStepMs;
        this.y = this.y < 0 ? l.h : this.y > l.h ? 0 : this.y

        l.grid.add(this, this.x, this.y);
    }


    /** Observe */
    observe() {
        const l = this.l

        //get animals around
        const as = l.grid.get(this.x - l.d, this.y - l.d, this.x + l.d, this.y + l.d);

        this.preys = [];
        this.predators = [];

        for (let a of as) {
            if (a == this) continue;
            if (this.d(a) > l.d) continue;
            if (a.type == 0)
                this.preys.push(a);
            else
                this.predators.push(a);
        }
    }

    /** @returns {Animal} */
    makeChild() {
        //do better: make child around
        return new Animal(this.type, this.l, this.x, this.y);
    }



    /**
     * Display animal
     * 
     * @param {CanvasPlus} cp 
     * @param {string} fillStyle 
     * @param {number} size 
     */
    display(cp, fillStyle = "blue", size = 2) {
        const s = size / cp.ps
        cp.c2d.fillStyle = fillStyle;
        cp.c2d.fillRect(cp.geoToPixX(this.x), cp.geoToPixY(this.y), s, s);
        /*c2.beginPath();
        c2.arc(a.x, a.y, 0.5, 0, 2*Math.PI);
        c2.closePath();
        c2.fill();*/
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
/* harmony import */ var _base_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Grid */ "./src/base/Grid.js");
/* harmony import */ var _base_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/lib */ "./src/base/lib.js");
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animal */ "./src/pp/Animal.js");
//@ts-check




class Land {

    /**
     * 
     * @param {number} w 
     * @param {number} h 
     */
    constructor(w, h) {

        //the max speed
        /** @type {number} */
        this.V_MAX = 0.1

        /** @type {number} */
        this.p = 0.02 //predator death probability
        /** @type {number} */
        this.q = 0.1 //prey reproduction probability
        /** @type {number} */
        this.r = 0.5 //eaten prey transformation probability
        /** @type {number} */
        this.nb = 3 //neighbors number

        /** @type {number} */
        this.w = w
        /** @type {number} */
        this.h = h

        /** @type {Array.<Animal>} */
        this.predators = []
        /** @type {Array.<Animal>} */
        this.preys = []

        /** @type {number} */
        this.d = 10
        /** @type {Grid.<Animal>} */
        this.grid = new _base_Grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](w, h, this.d);

        /*int[][] histo;
        int index=0;
        this.c2Chart=c2Chart;
        this.hChart=hChart;
        this.histo=new int[wChart][];
        for(int i=0;i<wChart;i++)
            histo[i]=new int[]{0,0};*/

    }

    /**
     * @param {number} timeStepMs 
     */
    step(timeStepMs = 10) {

        //observe
        for (let a of this.preys) a.observe();
        for (let a of this.predators) a.observe();

        const preysToBorn = []
        const preysToDie = []
        const predsToBorn = []
        const predsToDie = []

        //prey
        for (let prey of this.preys) {
            //reproduction if no predator around
            if (Math.random() > this.q) continue;
            if (prey.predators.length != 0) continue;
            if (prey.preys.length >= this.nb) continue;
            preysToBorn.push(prey.makeChild());
        }

        //predator
        for (let pred of this.predators) {
            //no prey around: predator dies with probability p
            if (pred.preys.length == 0) {
                if (Math.random() < this.p) predsToDie.push(pred);
            }
            //prey around
            else {
                //eat prey
                //choose randomly
                const preyToEat = pred.preys[Math.floor(pred.preys.length * Math.random())];
                preysToDie.push(preyToEat);

                //predator reproduction
                if (Math.random() > this.r) continue;
                if (pred.predators.length >= this.nb) continue;
                predsToBorn.push(pred.makeChild());
            }
        }

        this.preys.push(...preysToBorn);
        this.predators.push(...predsToBorn);

        Object(_base_lib__WEBPACK_IMPORTED_MODULE_1__["removeFromArrayS"])(this.preys, preysToDie, false)
        for (let a of preysToDie) this.grid.remove(a, a.x, a.y, false);
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_1__["removeFromArrayS"])(this.predators, predsToDie, false)
        for (let a of predsToDie) this.grid.remove(a, a.x, a.y, false);

        //move
        for (let a of this.preys)
            a.move(timeStepMs);
        for (let a of this.predators)
            a.move(timeStepMs);

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
/* harmony import */ var _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/CanvasPlus */ "./src/base/CanvasPlus.js");
//@ts-check




/** */
class PreyPredatorSimulation {

    /**
     * @param {Object} opts 
     */
    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_2__["CanvasPlus"](opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "white";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);


        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d

            //transparency
            c2.fillStyle = "rgba(255,255,255,0.5)";
            c2.fillRect(0, 0, th.w, th.h);

            //display animals
            for (let a of th.land.preys)
                a.display(this, "blue");
            for (let a of th.land.predators)
                a.display(this, "red");

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

            return this
        };


        /** @type {Land} */
        this.land = new _Land__WEBPACK_IMPORTED_MODULE_0__["Land"](this.w, this.h)

    }


    /**
     * 
     * @param {number} nbPrey 
     * @param {number} nbPredator 
     * @returns {this}
     */
    initRandom(nbPrey = 200, nbPredator = 1000) {
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


    /**
     * 
     * @param {number} timeStepMs 
     * @param {number} nbIterations 
     * @returns {this}
     */
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


/**
 * @param {Object} opts 
 */
const preyPredator = function (opts) {
    return new PreyPredatorSimulation(opts)
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9ub2RlX21vZHVsZXMvcmJ1c2gvcmJ1c2gubWluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL0NhbnZhc1BsdXMuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvR3JpZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9saWIuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvU2FyZGluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NlYS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL0NlbGwuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BwL0FuaW1hbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvTGFuZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7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QSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBLG1CQUFtQixXQUFXO0FBQzlCLHlCQUF5QiwyREFBVTtBQUNuQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0JBQWtCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxtQkFBbUIsS0FBSztBQUN4Qix3QkFBd0IsMENBQUk7O0FBRTVCOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0Esb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNPO0FBQ1A7QUFDQSIsImZpbGUiOiJ2ZWN0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PXR8fHNlbGYpLlJCdXNoPWkoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxyLGUsYSxoKXshZnVuY3Rpb24gdChuLHIsZSxhLGgpe2Zvcig7YT5lOyl7aWYoYS1lPjYwMCl7dmFyIG89YS1lKzEscz1yLWUrMSxsPU1hdGgubG9nKG8pLGY9LjUqTWF0aC5leHAoMipsLzMpLHU9LjUqTWF0aC5zcXJ0KGwqZiooby1mKS9vKSoocy1vLzI8MD8tMToxKSxtPU1hdGgubWF4KGUsTWF0aC5mbG9vcihyLXMqZi9vK3UpKSxjPU1hdGgubWluKGEsTWF0aC5mbG9vcihyKyhvLXMpKmYvbyt1KSk7dChuLHIsbSxjLGgpfXZhciBwPW5bcl0sZD1lLHg9YTtmb3IoaShuLGUsciksaChuW2FdLHApPjAmJmkobixlLGEpO2Q8eDspe2ZvcihpKG4sZCx4KSxkKysseC0tO2gobltkXSxwKTwwOylkKys7Zm9yKDtoKG5beF0scCk+MDspeC0tfTA9PT1oKG5bZV0scCk/aShuLGUseCk6aShuLCsreCxhKSx4PD1yJiYoZT14KzEpLHI8PXgmJihhPXgtMSl9fSh0LHIsZXx8MCxhfHx0Lmxlbmd0aC0xLGh8fG4pfWZ1bmN0aW9uIGkodCxpLG4pe3ZhciByPXRbaV07dFtpXT10W25dLHRbbl09cn1mdW5jdGlvbiBuKHQsaSl7cmV0dXJuIHQ8aT8tMTp0Pmk/MTowfXZhciByPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTkpLHRoaXMuX21heEVudHJpZXM9TWF0aC5tYXgoNCx0KSx0aGlzLl9taW5FbnRyaWVzPU1hdGgubWF4KDIsTWF0aC5jZWlsKC40KnRoaXMuX21heEVudHJpZXMpKSx0aGlzLmNsZWFyKCl9O2Z1bmN0aW9uIGUodCxpLG4pe2lmKCFuKXJldHVybiBpLmluZGV4T2YodCk7Zm9yKHZhciByPTA7cjxpLmxlbmd0aDtyKyspaWYobih0LGlbcl0pKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIGEodCxpKXtoKHQsMCx0LmNoaWxkcmVuLmxlbmd0aCxpLHQpfWZ1bmN0aW9uIGgodCxpLG4scixlKXtlfHwoZT1wKG51bGwpKSxlLm1pblg9MS8wLGUubWluWT0xLzAsZS5tYXhYPS0xLzAsZS5tYXhZPS0xLzA7Zm9yKHZhciBhPWk7YTxuO2ErKyl7dmFyIGg9dC5jaGlsZHJlblthXTtvKGUsdC5sZWFmP3IoaCk6aCl9cmV0dXJuIGV9ZnVuY3Rpb24gbyh0LGkpe3JldHVybiB0Lm1pblg9TWF0aC5taW4odC5taW5YLGkubWluWCksdC5taW5ZPU1hdGgubWluKHQubWluWSxpLm1pblkpLHQubWF4WD1NYXRoLm1heCh0Lm1heFgsaS5tYXhYKSx0Lm1heFk9TWF0aC5tYXgodC5tYXhZLGkubWF4WSksdH1mdW5jdGlvbiBzKHQsaSl7cmV0dXJuIHQubWluWC1pLm1pblh9ZnVuY3Rpb24gbCh0LGkpe3JldHVybiB0Lm1pblktaS5taW5ZfWZ1bmN0aW9uIGYodCl7cmV0dXJuKHQubWF4WC10Lm1pblgpKih0Lm1heFktdC5taW5ZKX1mdW5jdGlvbiB1KHQpe3JldHVybiB0Lm1heFgtdC5taW5YKyh0Lm1heFktdC5taW5ZKX1mdW5jdGlvbiBtKHQsaSl7cmV0dXJuIHQubWluWDw9aS5taW5YJiZ0Lm1pblk8PWkubWluWSYmaS5tYXhYPD10Lm1heFgmJmkubWF4WTw9dC5tYXhZfWZ1bmN0aW9uIGModCxpKXtyZXR1cm4gaS5taW5YPD10Lm1heFgmJmkubWluWTw9dC5tYXhZJiZpLm1heFg+PXQubWluWCYmaS5tYXhZPj10Lm1pbll9ZnVuY3Rpb24gcCh0KXtyZXR1cm57Y2hpbGRyZW46dCxoZWlnaHQ6MSxsZWFmOiEwLG1pblg6MS8wLG1pblk6MS8wLG1heFg6LTEvMCxtYXhZOi0xLzB9fWZ1bmN0aW9uIGQoaSxuLHIsZSxhKXtmb3IodmFyIGg9W24scl07aC5sZW5ndGg7KWlmKCEoKHI9aC5wb3AoKSktKG49aC5wb3AoKSk8PWUpKXt2YXIgbz1uK01hdGguY2VpbCgoci1uKS9lLzIpKmU7dChpLG8sbixyLGEpLGgucHVzaChuLG8sbyxyKX19cmV0dXJuIHIucHJvdG90eXBlLmFsbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9hbGwodGhpcy5kYXRhLFtdKX0sci5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKHQpe3ZhciBpPXRoaXMuZGF0YSxuPVtdO2lmKCFjKHQsaSkpcmV0dXJuIG47Zm9yKHZhciByPXRoaXMudG9CQm94LGU9W107aTspe2Zvcih2YXIgYT0wO2E8aS5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgaD1pLmNoaWxkcmVuW2FdLG89aS5sZWFmP3IoaCk6aDtjKHQsbykmJihpLmxlYWY/bi5wdXNoKGgpOm0odCxvKT90aGlzLl9hbGwoaCxuKTplLnB1c2goaCkpfWk9ZS5wb3AoKX1yZXR1cm4gbn0sci5wcm90b3R5cGUuY29sbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGk9dGhpcy5kYXRhO2lmKCFjKHQsaSkpcmV0dXJuITE7Zm9yKHZhciBuPVtdO2k7KXtmb3IodmFyIHI9MDtyPGkuY2hpbGRyZW4ubGVuZ3RoO3IrKyl7dmFyIGU9aS5jaGlsZHJlbltyXSxhPWkubGVhZj90aGlzLnRvQkJveChlKTplO2lmKGModCxhKSl7aWYoaS5sZWFmfHxtKHQsYSkpcmV0dXJuITA7bi5wdXNoKGUpfX1pPW4ucG9wKCl9cmV0dXJuITF9LHIucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24odCl7aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm4gdGhpcztpZih0Lmxlbmd0aDx0aGlzLl9taW5FbnRyaWVzKXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl0aGlzLmluc2VydCh0W2ldKTtyZXR1cm4gdGhpc312YXIgbj10aGlzLl9idWlsZCh0LnNsaWNlKCksMCx0Lmxlbmd0aC0xLDApO2lmKHRoaXMuZGF0YS5jaGlsZHJlbi5sZW5ndGgpaWYodGhpcy5kYXRhLmhlaWdodD09PW4uaGVpZ2h0KXRoaXMuX3NwbGl0Um9vdCh0aGlzLmRhdGEsbik7ZWxzZXtpZih0aGlzLmRhdGEuaGVpZ2h0PG4uaGVpZ2h0KXt2YXIgcj10aGlzLmRhdGE7dGhpcy5kYXRhPW4sbj1yfXRoaXMuX2luc2VydChuLHRoaXMuZGF0YS5oZWlnaHQtbi5oZWlnaHQtMSwhMCl9ZWxzZSB0aGlzLmRhdGE9bjtyZXR1cm4gdGhpc30sci5wcm90b3R5cGUuaW5zZXJ0PWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0aGlzLl9pbnNlcnQodCx0aGlzLmRhdGEuaGVpZ2h0LTEpLHRoaXN9LHIucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT1wKFtdKSx0aGlzfSxyLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCxpKXtpZighdClyZXR1cm4gdGhpcztmb3IodmFyIG4scixhLGg9dGhpcy5kYXRhLG89dGhpcy50b0JCb3godCkscz1bXSxsPVtdO2h8fHMubGVuZ3RoOyl7aWYoaHx8KGg9cy5wb3AoKSxyPXNbcy5sZW5ndGgtMV0sbj1sLnBvcCgpLGE9ITApLGgubGVhZil7dmFyIGY9ZSh0LGguY2hpbGRyZW4saSk7aWYoLTEhPT1mKXJldHVybiBoLmNoaWxkcmVuLnNwbGljZShmLDEpLHMucHVzaChoKSx0aGlzLl9jb25kZW5zZShzKSx0aGlzfWF8fGgubGVhZnx8IW0oaCxvKT9yPyhuKyssaD1yLmNoaWxkcmVuW25dLGE9ITEpOmg9bnVsbDoocy5wdXNoKGgpLGwucHVzaChuKSxuPTAscj1oLGg9aC5jaGlsZHJlblswXSl9cmV0dXJuIHRoaXN9LHIucHJvdG90eXBlLnRvQkJveD1mdW5jdGlvbih0KXtyZXR1cm4gdH0sci5wcm90b3R5cGUuY29tcGFyZU1pblg9ZnVuY3Rpb24odCxpKXtyZXR1cm4gdC5taW5YLWkubWluWH0sci5wcm90b3R5cGUuY29tcGFyZU1pblk9ZnVuY3Rpb24odCxpKXtyZXR1cm4gdC5taW5ZLWkubWluWX0sci5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YX0sci5wcm90b3R5cGUuZnJvbUpTT049ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZGF0YT10LHRoaXN9LHIucHJvdG90eXBlLl9hbGw9ZnVuY3Rpb24odCxpKXtmb3IodmFyIG49W107dDspdC5sZWFmP2kucHVzaC5hcHBseShpLHQuY2hpbGRyZW4pOm4ucHVzaC5hcHBseShuLHQuY2hpbGRyZW4pLHQ9bi5wb3AoKTtyZXR1cm4gaX0sci5wcm90b3R5cGUuX2J1aWxkPWZ1bmN0aW9uKHQsaSxuLHIpe3ZhciBlLGg9bi1pKzEsbz10aGlzLl9tYXhFbnRyaWVzO2lmKGg8PW8pcmV0dXJuIGEoZT1wKHQuc2xpY2UoaSxuKzEpKSx0aGlzLnRvQkJveCksZTtyfHwocj1NYXRoLmNlaWwoTWF0aC5sb2coaCkvTWF0aC5sb2cobykpLG89TWF0aC5jZWlsKGgvTWF0aC5wb3cobyxyLTEpKSksKGU9cChbXSkpLmxlYWY9ITEsZS5oZWlnaHQ9cjt2YXIgcz1NYXRoLmNlaWwoaC9vKSxsPXMqTWF0aC5jZWlsKE1hdGguc3FydChvKSk7ZCh0LGksbixsLHRoaXMuY29tcGFyZU1pblgpO2Zvcih2YXIgZj1pO2Y8PW47Zis9bCl7dmFyIHU9TWF0aC5taW4oZitsLTEsbik7ZCh0LGYsdSxzLHRoaXMuY29tcGFyZU1pblkpO2Zvcih2YXIgbT1mO208PXU7bSs9cyl7dmFyIGM9TWF0aC5taW4obStzLTEsdSk7ZS5jaGlsZHJlbi5wdXNoKHRoaXMuX2J1aWxkKHQsbSxjLHItMSkpfX1yZXR1cm4gYShlLHRoaXMudG9CQm94KSxlfSxyLnByb3RvdHlwZS5fY2hvb3NlU3VidHJlZT1mdW5jdGlvbih0LGksbixyKXtmb3IoO3IucHVzaChpKSwhaS5sZWFmJiZyLmxlbmd0aC0xIT09bjspe2Zvcih2YXIgZT0xLzAsYT0xLzAsaD12b2lkIDAsbz0wO288aS5jaGlsZHJlbi5sZW5ndGg7bysrKXt2YXIgcz1pLmNoaWxkcmVuW29dLGw9ZihzKSx1PShtPXQsYz1zLChNYXRoLm1heChjLm1heFgsbS5tYXhYKS1NYXRoLm1pbihjLm1pblgsbS5taW5YKSkqKE1hdGgubWF4KGMubWF4WSxtLm1heFkpLU1hdGgubWluKGMubWluWSxtLm1pblkpKS1sKTt1PGE/KGE9dSxlPWw8ZT9sOmUsaD1zKTp1PT09YSYmbDxlJiYoZT1sLGg9cyl9aT1ofHxpLmNoaWxkcmVuWzBdfXZhciBtLGM7cmV0dXJuIGl9LHIucHJvdG90eXBlLl9pbnNlcnQ9ZnVuY3Rpb24odCxpLG4pe3ZhciByPW4/dDp0aGlzLnRvQkJveCh0KSxlPVtdLGE9dGhpcy5fY2hvb3NlU3VidHJlZShyLHRoaXMuZGF0YSxpLGUpO2ZvcihhLmNoaWxkcmVuLnB1c2godCksbyhhLHIpO2k+PTAmJmVbaV0uY2hpbGRyZW4ubGVuZ3RoPnRoaXMuX21heEVudHJpZXM7KXRoaXMuX3NwbGl0KGUsaSksaS0tO3RoaXMuX2FkanVzdFBhcmVudEJCb3hlcyhyLGUsaSl9LHIucHJvdG90eXBlLl9zcGxpdD1mdW5jdGlvbih0LGkpe3ZhciBuPXRbaV0scj1uLmNoaWxkcmVuLmxlbmd0aCxlPXRoaXMuX21pbkVudHJpZXM7dGhpcy5fY2hvb3NlU3BsaXRBeGlzKG4sZSxyKTt2YXIgaD10aGlzLl9jaG9vc2VTcGxpdEluZGV4KG4sZSxyKSxvPXAobi5jaGlsZHJlbi5zcGxpY2UoaCxuLmNoaWxkcmVuLmxlbmd0aC1oKSk7by5oZWlnaHQ9bi5oZWlnaHQsby5sZWFmPW4ubGVhZixhKG4sdGhpcy50b0JCb3gpLGEobyx0aGlzLnRvQkJveCksaT90W2ktMV0uY2hpbGRyZW4ucHVzaChvKTp0aGlzLl9zcGxpdFJvb3QobixvKX0sci5wcm90b3R5cGUuX3NwbGl0Um9vdD1mdW5jdGlvbih0LGkpe3RoaXMuZGF0YT1wKFt0LGldKSx0aGlzLmRhdGEuaGVpZ2h0PXQuaGVpZ2h0KzEsdGhpcy5kYXRhLmxlYWY9ITEsYSh0aGlzLmRhdGEsdGhpcy50b0JCb3gpfSxyLnByb3RvdHlwZS5fY2hvb3NlU3BsaXRJbmRleD1mdW5jdGlvbih0LGksbil7Zm9yKHZhciByLGUsYSxvLHMsbCx1LG09MS8wLGM9MS8wLHA9aTtwPD1uLWk7cCsrKXt2YXIgZD1oKHQsMCxwLHRoaXMudG9CQm94KSx4PWgodCxwLG4sdGhpcy50b0JCb3gpLHY9KGU9ZCxhPXgsbz12b2lkIDAscz12b2lkIDAsbD12b2lkIDAsdT12b2lkIDAsbz1NYXRoLm1heChlLm1pblgsYS5taW5YKSxzPU1hdGgubWF4KGUubWluWSxhLm1pblkpLGw9TWF0aC5taW4oZS5tYXhYLGEubWF4WCksdT1NYXRoLm1pbihlLm1heFksYS5tYXhZKSxNYXRoLm1heCgwLGwtbykqTWF0aC5tYXgoMCx1LXMpKSxNPWYoZCkrZih4KTt2PG0/KG09dixyPXAsYz1NPGM/TTpjKTp2PT09bSYmTTxjJiYoYz1NLHI9cCl9cmV0dXJuIHJ8fG4taX0sci5wcm90b3R5cGUuX2Nob29zZVNwbGl0QXhpcz1mdW5jdGlvbih0LGksbil7dmFyIHI9dC5sZWFmP3RoaXMuY29tcGFyZU1pblg6cyxlPXQubGVhZj90aGlzLmNvbXBhcmVNaW5ZOmw7dGhpcy5fYWxsRGlzdE1hcmdpbih0LGksbixyKTx0aGlzLl9hbGxEaXN0TWFyZ2luKHQsaSxuLGUpJiZ0LmNoaWxkcmVuLnNvcnQocil9LHIucHJvdG90eXBlLl9hbGxEaXN0TWFyZ2luPWZ1bmN0aW9uKHQsaSxuLHIpe3QuY2hpbGRyZW4uc29ydChyKTtmb3IodmFyIGU9dGhpcy50b0JCb3gsYT1oKHQsMCxpLGUpLHM9aCh0LG4taSxuLGUpLGw9dShhKSt1KHMpLGY9aTtmPG4taTtmKyspe3ZhciBtPXQuY2hpbGRyZW5bZl07byhhLHQubGVhZj9lKG0pOm0pLGwrPXUoYSl9Zm9yKHZhciBjPW4taS0xO2M+PWk7Yy0tKXt2YXIgcD10LmNoaWxkcmVuW2NdO28ocyx0LmxlYWY/ZShwKTpwKSxsKz11KHMpfXJldHVybiBsfSxyLnByb3RvdHlwZS5fYWRqdXN0UGFyZW50QkJveGVzPWZ1bmN0aW9uKHQsaSxuKXtmb3IodmFyIHI9bjtyPj0wO3ItLSlvKGlbcl0sdCl9LHIucHJvdG90eXBlLl9jb25kZW5zZT1mdW5jdGlvbih0KXtmb3IodmFyIGk9dC5sZW5ndGgtMSxuPXZvaWQgMDtpPj0wO2ktLSkwPT09dFtpXS5jaGlsZHJlbi5sZW5ndGg/aT4wPyhuPXRbaS0xXS5jaGlsZHJlbikuc3BsaWNlKG4uaW5kZXhPZih0W2ldKSwxKTp0aGlzLmNsZWFyKCk6YSh0W2ldLHRoaXMudG9CQm94KX0scn0pO1xuIiwiLy9AdHMtY2hlY2tcbmV4cG9ydCBjbGFzcyBDYW52YXNQbHVzIHtcblxuICAgIC8vY2hlY2s6XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20va2FuZ2F4L2ZhYnJpYy5qcy9cbiAgICAvL2h0dHA6Ly9raW5ldGljanMuY29tL1xuICAgIC8vaHR0cDovL3d3dy5jcmVhdGVqcy5jb20vRG9jcy9FYXNlbEpTL2NsYXNzZXMvTW91c2VFdmVudC5odG1sXG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGl2SWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FudmFzSWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2VudGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGl2SWQgPSBcInZhZGl2XCIsIGNhbnZhc0lkID0gXCJ2YWNhbnZhc1wiLCBjZW50ZXIgPSB1bmRlZmluZWQsIHBzID0gMSkge1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9tYWtlIGNhbnZhcyB3aXRoaW4gZGl2XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSBjYW52YXNJZDtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuXG4gICAgICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgICAgIHRoaXMuYzJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyXG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyIHx8IHsgeDogdGhpcy53ICogMC41LCB5OiB0aGlzLmggKiAwLjUgfVxuICAgICAgICAvLyB6b29tIGZhY3RvcjogcGl4ZWwgc2l6ZSwgaW4gbS9waXhcbiAgICAgICAgdGhpcy5wcyA9IHBzO1xuXG4gICAgICAgIC8vbW91c2UgY2xpY2sgLSBwYW5cbiAgICAgICAgbGV0IG1wYW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4geyBtcGFuID0gdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChtcGFuKSB0aGlzLnBhbigtZS5tb3ZlbWVudFggKiB0aGlzLnBzLCBlLm1vdmVtZW50WSAqIHRoaXMucHMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlID0+IHsgbXBhbiA9IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vbW91c2Ugd2hlZWwgLSB6b29tXG4gICAgICAgIGNvbnN0IGYgPSAxLjVcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZl8gPSBlLmRlbHRhWSA+IDAgPyBmIDogMSAvIGY7XG4gICAgICAgICAgICB0aGlzLnpvb20oZl8sIHRoaXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHRoaXMucGl4VG9HZW9ZKGUub2Zmc2V0WSkpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm5zIHt0aGlzfSAqL1xuICAgIHJlZHJhdygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPdmVycmlkZSByZWRyYXcgbWV0aG9kXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL2NvbnZlcnNpb24gZnVuY3Rpb25zXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhHZW9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2VvVG9QaXhYKHhHZW8pIHsgcmV0dXJuICh4R2VvIC0gdGhpcy5jZW50ZXIueCkgLyB0aGlzLnBzICsgdGhpcy53ICogMC41OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlHZW9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2VvVG9QaXhZKHlHZW8pIHsgcmV0dXJuIC0oeUdlbyAtIHRoaXMuY2VudGVyLnkpIC8gdGhpcy5wcyArIHRoaXMuaCAqIDAuNTsgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIHBpeFRvR2VvWCh4KSB7IHJldHVybiAoeCAtIHRoaXMudyAqIDAuNSkgKiB0aGlzLnBzICsgdGhpcy5jZW50ZXIueDsgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIHBpeFRvR2VvWSh5KSB7IHJldHVybiAtKHkgLSB0aGlzLmggKiAwLjUpICogdGhpcy5wcyArIHRoaXMuY2VudGVyLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeEdlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeUdlb1xuICAgICAqL1xuICAgIHBhbihkeEdlbywgZHlHZW8pIHtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSBkeEdlbztcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSBkeUdlbztcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4R2VvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlHZW9cbiAgICAgKi9cbiAgICB6b29tKGYgPSAxLCB4R2VvID0gdGhpcy5jZW50ZXIueCwgeUdlbyA9IHRoaXMuY2VudGVyLnkpIHtcbiAgICAgICAgdGhpcy5wcyAqPSBmO1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9ICh4R2VvIC0gdGhpcy5jZW50ZXIueCkgKiAoMSAtIGYpXG4gICAgICAgIHRoaXMuY2VudGVyLnkgKz0gKHlHZW8gLSB0aGlzLmNlbnRlci55KSAqICgxIC0gZilcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuL2xpYic7XG5pbXBvcnQgUkJ1c2ggZnJvbSAncmJ1c2gnO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmlkIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCwgcmVzKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMucmVzID0gcmVzO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmxlbmd0aFggPSBNYXRoLmZsb29yKHcgLyByZXMgKyAxKTtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5sZW5ndGhZID0gTWF0aC5mbG9vcihoIC8gcmVzICsgMSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QXJyYXkuPEFycmF5LjxUPj4+fSAqL1xuICAgICAgICB0aGlzLmNlbGxzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aFg7IGkrKykge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QXJyYXkuPFQ+Pn0gKi9cbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sZW5ndGhZOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxUPn0gKi9cbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW2ldW2pdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUge1JCdXNofSAqL1xuICAgICAgICB0aGlzLnRyZWUgPSBuZXcgUkJ1c2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtYXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1heFxuICAgICAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAgICAgKi9cbiAgICBnZXQoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgICAgICBjb25zdCBhcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcih4bWluIC8gdGhpcy5yZXMpOyBpIDwgTWF0aC5mbG9vcih4bWF4IC8gdGhpcy5yZXMgKyAxKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmxlbmd0aFgpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gTWF0aC5mbG9vcih5bWluIC8gdGhpcy5yZXMpOyBqIDwgTWF0aC5mbG9vcih5bWF4IC8gdGhpcy5yZXMgKyAxKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPCAwIHx8IGogPj0gdGhpcy5sZW5ndGhZKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBhcy5wdXNoLmFwcGx5KGFzLCB0aGlzLmNlbGxzW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBhZGQob2JqLCB4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW01hdGguZmxvb3IoeCAvIHRoaXMucmVzKV1bTWF0aC5mbG9vcih5IC8gdGhpcy5yZXMpXS5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICovXG4gICAgcmVtb3ZlKG9iaiwgeCwgeSwgbXNnPXRydWUpIHtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMuY2VsbHNbTWF0aC5mbG9vcih4IC8gdGhpcy5yZXMpXVtNYXRoLmZsb29yKHkgLyB0aGlzLnJlcyldLCBvYmosIG1zZyk7XG4gICAgfVxuXG5cbiAgICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEluaVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5SW5pXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhGaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUZpblxuICAgICAqL1xuICAgIG1vdmUob2JqLCB4SW5pLCB5SW5pLCB4RmluLCB5RmluKSB7XG4gICAgICAgIGNvbnN0IGlJbmkgPSBNYXRoLmZsb29yKHhJbmkgLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGpJbmkgPSBNYXRoLmZsb29yKHlJbmkgLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGlGaW4gPSBNYXRoLmZsb29yKHhGaW4gLyB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGpGaW4gPSBNYXRoLmZsb29yKHlGaW4gLyB0aGlzLnJlcyk7XG5cbiAgICAgICAgLy9ubyBjaGFuZ2UsIHN0aWxsIHNhbWUgY2VsbFxuICAgICAgICBpZihpSW5pPT1pRmluICYmIGpJbmk9PWpGaW4pIHJldHVybjtcblxuICAgICAgICAvL2NoYW5nZSBjZWxsXG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLmNlbGxzW2lJbmldW2pJbmldLCBvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpRmluXVtqRmluXS5wdXNoKG9iaik7XG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gKi9cbmV4cG9ydCBjb25zdCBvYmpUb0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBvdXQucHVzaChvYmpba2V5XSk7XG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBhcnJcbiAqIEBwYXJhbSB7VH0gb2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zZyBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaiwgbXNnID0gdHJ1ZSkge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgaWYgKG1zZykgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG5cbi8qKlxuICogXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtBcnJheS48VD59IG9ianMgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zZyBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheVMgPSBmdW5jdGlvbiAoYXJyLCBvYmpzLCBtc2cgPSB0cnVlKSB7XG4gICAgZm9yIChsZXQgb2JqIG9mIG9ianMpXG4gICAgICAgIHJlbW92ZUZyb21BcnJheShhcnIsIG9iaiwgbXNnKVxufTtcbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTZWEgfSBmcm9tIFwiLi9TZWFcIlxuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gXCIuLi9iYXNlL0NhbnZhc1BsdXNcIlxuXG4vKiogKi9cbmV4cG9ydCBjbGFzcyBTYXJkaW4ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZWF9IHNlYSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdnggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlYSwgeCA9IHNlYS53ICogTWF0aC5yYW5kb20oKSwgeSA9IHNlYS5oICogTWF0aC5yYW5kb20oKSwgdnggPSB1bmRlZmluZWQsIHZ5ID0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtTZWF9ICovXG4gICAgICAgIHRoaXMuc2VhID0gc2VhO1xuXG4gICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBzZWEudyA/IHNlYS53IDogeFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geSA8IDAgPyAwIDogeSA+IHNlYS5oID8gc2VhLmggOiB5XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eSA9IDA7XG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICBpZiAoIXZ4ICYmICF2eSkge1xuICAgICAgICAgICAgdGhpcy5zZXRSYW5kb21TcGVlZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgICAgICAgICB0aGlzLnYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICAgICAgICB0aGlzLnZhID0gTWF0aC5hdGFuMih2eSwgdngpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hY2NlbGVyYXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuYXggPSAwXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmF5ID0gMFxuXG4gICAgICAgIC8vYWRkIHRvIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpXG5cbiAgICAgICAgLy9saXN0IG9mIHNhcmRpbnMgaW4gdmlzaW9uIGZpZWxkXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMub2JzID0gW11cbiAgICAgICAgLy9saXN0IG9mIHNhcmRpbnMgaW4gY29sbGlzaW9uIGZpZWxkXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMuY29sID0gW11cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldCByYW5kb20gc3BlZWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICB0aGlzLnZhID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICB0aGlzLnYgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnYgKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudiAqIE1hdGguc2luKHRoaXMudmEpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgb2JzZXJ2ZSgpIHtcblxuICAgICAgICAvL2luaXRpYWxpc2UgbGlzdHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5vYnMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5jb2wgPSBbXTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGFyb3VuZCB1c2luZyBzcGF0aWFsIGluZGV4XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIGNvbnN0IHNzID0gdGhpcy5zZWEuZ3JpZC5nZXQodGhpcy54IC0gdGhpcy5zZWEuRF9PQlMsIHRoaXMueSAtIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnggKyB0aGlzLnNlYS5EX09CUywgdGhpcy55ICsgdGhpcy5zZWEuRF9PQlMpO1xuXG4gICAgICAgIC8vZ2V0IHNhcmRpbnMgaW4gb2JzZXJ2YXRpb24gYW5kIGNvbGxpc2lvbiBmaWVsZHNcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgaWYgKHMgPT0gdGhpcykgY29udGludWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kKHMpIDw9IHRoaXMuc2VhLkRfQ09MKSB0aGlzLmNvbC5wdXNoKHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChzKSA8PSB0aGlzLnNlYS5EX09CUykge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgYW5nbGVcbiAgICAgICAgICAgICAgICBsZXQgZGEgPSBNYXRoLmF0YW4yKHMueSAtIHRoaXMueSwgcy54IC0gdGhpcy54KSAtIHRoaXMudmE7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gTWF0aC5QSSkgZGEgLT0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGEgPD0gLU1hdGguUEkpIGRhICs9IDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGRhID0gTWF0aC5hYnMoZGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYSA+IHRoaXMuc2VhLkFfT0JTICogMC41KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9icy5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pbml0aWFsaXNlIGFjY2VsZXJhdGlvblxuICAgICAgICB0aGlzLmF4ID0gMDsgdGhpcy5heSA9IDA7XG5cbiAgICAgICAgLy9jb2xsaXNpb246IHJlcHVsc2lvblxuICAgICAgICBmb3IgKGxldCBzIG9mIHRoaXMuY29sKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kKHMpO1xuICAgICAgICAgICAgY29uc3QgYSA9IDEuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAodGhpcy5zZWEuRF9DT0wgKiB0aGlzLnNlYS5EX0NPTCkpO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIHMueCkgLyBkO1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIHMueSkgLyBkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG93YXJkIHYgdGFyZ2V0XG4gICAgICAgIGNvbnN0IGR2ID0gKHRoaXMuc2VhLlZfVEFSR0VUIC0gdGhpcy52KSAqIDAuMDE7XG4gICAgICAgIHRoaXMuYXggKz0gZHYgKiB0aGlzLnZ4IC8gdGhpcy52O1xuICAgICAgICB0aGlzLmF5ICs9IGR2ICogdGhpcy52eSAvIHRoaXMudjtcblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgbWVhbiBwb3NpdGlvblxuICAgICAgICAvKmlmKG9icy5zaXplKCk+MSl7XG4gICAgICAgICAgICBkb3VibGUgeG49MCx5bj0wO1xuICAgICAgICAgICAgZm9yKFNhcmRpbiBzOm9icyl7XG4gICAgICAgICAgICAgICAgeG4rPXMueDtcbiAgICAgICAgICAgICAgICB5bis9cy55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeG49eG4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIHluPXluL29icy5zaXplKCk7XG4gICAgICAgICAgICBkb3VibGUgZD1NYXRoLmh5cG90KHhuLXgseW4teSk7XG4gICAgICAgICAgICBheCs9LTAuMSooeC14bikvZDtcbiAgICAgICAgICAgIGF5Kz0tMC4xKih5LXluKS9kO1xuICAgICAgICB9Ki9cblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgc3BlZWRcbiAgICAgICAgY29uc3QgdCA9IDAuOTtcbiAgICAgICAgaWYgKHRoaXMub2JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBkdnggPSAwLCBkdnkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgICAgIGR2eCArPSBzLnZ4O1xuICAgICAgICAgICAgICAgIGR2eSArPSBzLnZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHZ4ID0gKHQgLSAxKSAqIHRoaXMudnggKyAoMSAtIHQpICogZHZ4IC8gdGhpcy5vYnMubGVuZ3RoO1xuICAgICAgICAgICAgZHZ5ID0gKHQgLSAxKSAqIHRoaXMudnkgKyAoMSAtIHQpICogZHZ5IC8gdGhpcy5vYnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBjb25zdCBhID0gMC4xO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogZHZ4O1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogZHZ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hdm9pZCBzaGFya1xuICAgICAgICBpZiAodGhpcy5zZWEuc2hhcmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc2VhLnNoYXJrO1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHMueCAtIHRoaXMueCksIChzLnkgLSB0aGlzLnkpKTtcbiAgICAgICAgICAgIGlmIChkIDw9IHRoaXMuc2VhLkRfT0JTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IDUuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAodGhpcy5zZWEuRF9PQlMgKiB0aGlzLnNlYS5EX09CUykpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqICh0aGlzLnggLSBzLngpIC8gZDtcbiAgICAgICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gcy55KSAvIGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgbW92ZSh0aW1lU3RlcE1zID0gMTApIHtcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5yZW1vdmUodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgc3BlZWRcbiAgICAgICAgdGhpcy52eCArPSB0aGlzLmF4ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLmF5ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy52ID0gTWF0aC5oeXBvdCh0aGlzLnZ4LCB0aGlzLnZ5KTtcbiAgICAgICAgdGhpcy52YSA9IE1hdGguYXRhbjIodGhpcy52eSwgdGhpcy52eCk7XG4gICAgICAgIGlmICh0aGlzLnYgPiB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5zZWEuVl9NQVg7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgICAgIHRoaXMudnkgPSB0aGlzLnNlYS5WX01BWCAqIE1hdGguc2luKHRoaXMudmEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2xpbWl0XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSB0aGlzLnNlYS53O1xuICAgICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gdGhpcy5zZWEuaDtcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuc2VhLncpIHRoaXMueCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnNlYS5oKSB0aGlzLnkgPSAwO1xuXG4gICAgICAgIC8vVE9ETyB1c2UgbW92ZT9cbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTYXJkaW59IHMgXG4gICAgICogQHJldHVybnMge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgc2FyZGluLlxuICAgICAqL1xuICAgIGQocykge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgocy54IC0gdGhpcy54KSwgKHMueSAtIHRoaXMueSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBhIHNhcmRpbiBib2R5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtDYW52YXNQbHVzfSBjcCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFxuICAgICAqL1xuICAgIGRpc3BsYXkoY3AsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjb25zdCBjID0gTWF0aC5mbG9vcigyNTUgKiBNYXRoLmFicyh0aGlzLnZhKSAvIE1hdGguUEkpO1xuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwicmdiKDI1NSwgMjU1LCBcIiArIGMgKyBcIilcIlxuICAgICAgICBjb25zdCBhID0gbGVuZ3RoIC8gdGhpcy52O1xuICAgICAgICBjb25zdCBkeCA9IGEgKiB0aGlzLnZ4ICogMC41O1xuICAgICAgICBjb25zdCBkeSA9IGEgKiB0aGlzLnZ5ICogMC41O1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCAtIGR4KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSAtIGR5KSk7XG4gICAgICAgIGMyLmxpbmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54ICsgZHgpLCBjcC5nZW9Ub1BpeFkodGhpcy55ICsgZHkpKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8qKiBEaXNwbGF5IHNhcmRpbiB2aXNpb24gZmllbGQgKi9cbiAgICBkaXNwbGF5VmlzaW9uRmllbGQoY3AsIGZpbGxTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIubW92ZVRvKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSk7XG4gICAgICAgIC8vVE9ETyBjb3JyZWN0IHRoYXQgIVxuICAgICAgICBjMi5hcmMoY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpLCB0aGlzLnNlYS5EX09CUyAvIGNwLnBzLFxuICAgICAgICAgICAgTWF0aC5QSSAtIHRoaXMudmEgKyB0aGlzLnNlYS5BX09CUyAqIDAuNSwgTWF0aC5QSSAtIHRoaXMudmEgLSB0aGlzLnNlYS5BX09CUyAqIDAuNSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7XG4gICAgfVxuXG4gICAgLyoqIERpc3BsYXkgc2FyZGluIHZpc2lvbiBsaW5rcyAqL1xuICAgIGRpc3BsYXlWaXNpb25MaW5rcyhjcCwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmMyZFxuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGZvciAobGV0IHNhMiBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgICAgIGMyLmxpbmVUbyhjcC5nZW9Ub1BpeFgoc2EyLngpLCBjcC5nZW9Ub1BpeFkoc2EyLnkpKTtcbiAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRGlzcGxheSBzYXJkaW4gY29sbGlzaW9uIGZpZWxkICovXG4gICAgZGlzcGxheUNvbGxpc2lvbkZpZWxkKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMuc2VhLkRfQ09MICogMC41IC8gY3AucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFNhcmRpbiB9IGZyb20gJy4vU2FyZGluJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9iYXNlL0dyaWQnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgU2VhIHtcblxuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL1RPRE8gc2hvdWxkIGJlY29tZSBzdGF0aWMgYXR0cmlidXRlcyBvZiBTYXJkaW4gY2xhc3NcblxuICAgICAgICAvL29ic2VydmF0aW9uXG4gICAgICAgIHRoaXMuRF9PQlMgPSA1MFxuICAgICAgICB0aGlzLkFfT0JTID0gMjAwICogTWF0aC5QSSAvIDE4MFxuXG4gICAgICAgIC8vY29sbGlzaW9uXG4gICAgICAgIHRoaXMuRF9DT0wgPSAxMFxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgdGhpcy5WX1RBUkdFVCA9IDAuM1xuICAgICAgICB0aGlzLlZfTUFYID0gMC42XG5cblxuICAgICAgICAvL3NoYXJrXG4gICAgICAgIHRoaXMuRF9TSEFSS19FQVQgPSAxMlxuICAgICAgICB0aGlzLkVBVEVOX1NBUkRJTl9OQiA9IDBcblxuXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIHRoaXMuaCA9IGg7XG4gICAgICAgIC8qKiBAdHlwZSB7R3JpZC48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodywgaCwgdGhpcy5EX09CUyk7XG5cbiAgICAgICAgdGhpcy5maXNoID0gW11cblxuICAgICAgICB0aGlzLnNoYXJrID0gbnVsbDtcbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cblxuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IHNhIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIHNhLm9ic2VydmUoKTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgc2Egb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgc2EubW92ZSgpO1xuXG4gICAgICAgIC8vc2hhcmsgZWF0IGZpc2hcbiAgICAgICAgdGhpcy5zaGFya0VhdCgpO1xuICAgIH1cblxuXG5cbiAgICBzaGFya0VhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLmdyaWQuZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShzLCBzLngsIHMueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgKz0gdGhpcy5raWxsZWQubGVuZ3RoO1xuICAgICAgICAvL2VhdGVuRmlzaE5iLnNldFRleHQoXCJFYXRlbiBmaXNoOiBcIiArIEVBVEVOX1NBUkRJTl9OQik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKiBBZGQgYSBudW1iZXIgb2YgZmlzaCAqL1xuICAgIGFkZEZpc2gobmIgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKylcbiAgICAgICAgICAgIHRoaXMuZmlzaC5wdXNoKG5ldyBTYXJkaW4odGhpcykpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKiBTZXQgcmFuZG9tIHNwZWVkIGZvciBhbGwgZmlzaCAqL1xuICAgIHNldFJhbmRvbVNwZWVkKCkge1xuICAgICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIGYuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFNlYSB9IGZyb20gJy4vU2VhJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL0NhbnZhc1BsdXMnO1xuXG5jbGFzcyBGaXNoU2ltdWxhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL2FkZCBlYXRlbiBmaXNoIG5iIGxhYmVsXG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgdGhpcy5zaG93RmlzaFZpc2lvbkZpZWxkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaG93RmlzaFZpc2lvbkxpbmtzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaG93RmlzaENvbGxpc2lvbkZpZWxkID0gZmFsc2VcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuICAgICAgICAgICAgY29uc3QgcyA9IHRoLnNlYVxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMTIwLDEyMCwyNTUsMC42KVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vc2hvdyB2aXNpb24gZmllbGRcbiAgICAgICAgICAgIGlmICh0aC5zaG93RmlzaFZpc2lvbkZpZWxkKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkZpZWxkKHRoaXMsIFwicmdiYSgyMDAsMjAwLDIwMCwwLjE1KVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBsaW5rc1xuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uTGlua3MpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5VmlzaW9uTGlua3ModGhpcywgXCJyZ2JhKDI1NSwxMDAsMTAwLDAuMylcIiwgMSlcbiAgICAgICAgICAgIC8vc2hvdyBjb2xsaXNpb24gZmllbGRcbiAgICAgICAgICAgIGlmICh0aC5zaG93RmlzaENvbGxpc2lvbkZpZWxkKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheUNvbGxpc2lvbkZpZWxkKHRoaXMsIFwicHVycGxlXCIsIDEpXG5cblxuICAgICAgICAgICAgLy9kaXNwbGF5IHNhcmRpbnNcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDIgLyB0aGlzLnBzXG4gICAgICAgICAgICBjb25zdCBzYXJkaW5MZW5ndGggPSA3XG4gICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgc2EuZGlzcGxheSh0aGlzLCBzYXJkaW5MZW5ndGgpXG5cblxuICAgICAgICAgICAgLy9kaXNwbGF5IHNoYXJrXG4gICAgICAgICAgICBpZiAocy5zaGFyayAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBjMi5saW5lV2lkdGggPSA0IC8gdGhpcy5wc1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFya0xlbmd0aCA9IDEyIC8gdGhpcy5wc1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gc2hhcmtMZW5ndGggKiBNYXRoLmNvcyhzLnNoYXJrLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHNoYXJrTGVuZ3RoICogTWF0aC5zaW4ocy5zaGFyay5hbmdsZSk7XG5cbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSwgdGhpcy5nZW9Ub1BpeFkocy5zaGFyay55KSk7XG4gICAgICAgICAgICAgICAgYzIubGluZVRvKHRoaXMuZ2VvVG9QaXhYKHMuc2hhcmsueCkgLSBkeCwgdGhpcy5nZW9Ub1BpeFkocy5zaGFyay55KSAtIGR5KTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9kaXNwbGF5IGJsb29kIHNwb3RcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjMi5saW5lV2lkdGggPSAxXG4gICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmtpbGxlZCkge1xuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSkpO1xuICAgICAgICAgICAgICAgIGMyLmFyYyh0aGlzLmdlb1RvUGl4WChzYS54KSwgdGhpcy5nZW9Ub1BpeFkoc2EueSksIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5maWxsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApIC0gMywgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSAtIDMsIHRoLncgLyB0aGlzLnBzICsgMywgdGguaCAvIHRoaXMucHMgKyAzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0geyB4OiB0aC5jcGx1cy5waXhUb0dlb1goZS5vZmZzZXRYKSwgeTogdGguY3BsdXMucGl4VG9HZW9ZKGUub2Zmc2V0WSksIGFuZ2xlOiAwIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4RyA9IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpO1xuICAgICAgICAgICAgY29uc3QgeUcgPSB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMigteUcgKyB0aC5zZWEuc2hhcmsueSwgeEcgLSB0aC5zZWEuc2hhcmsueCk7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSB7IHg6IHhHLCB5OiB5RywgYW5nbGU6IGFuZ2xlIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IG51bGw7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtTZWF9ICovXG4gICAgICAgIHRoaXMuc2VhID0gbmV3IFNlYSh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRSYW5kb20obmIgPSAxNTAwKSB7XG4gICAgICAgIHRoaXMuc2VhLmFkZEZpc2gobmIpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYkl0ZXJhdGlvbnMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RhcnQodGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnNlYS5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgZmlzaCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBGaXNoU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcblxuLyoqXG4gKiBcbiAqL1xuZXhwb3J0IGNsYXNzIENlbGwge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIG5iPTApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubmIgPSBuYlxuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IG9ialRvQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9DYW52YXNQbHVzJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuL0NlbGwnO1xuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLENlbGw+fSAqL1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHtDZWxsfG51bGx9XG4gICAgICovXG4gICAgYWRkKHgsIHkpIHtcblxuICAgICAgICAvL2ZpbmQgY2VsbCBhdCBsb2NhdGlvblxuICAgICAgICAvKipAdHlwZSB7c3RyaW5nfSovXG4gICAgICAgIGNvbnN0IGlkID0geCArIFwiX1wiICsgeTtcbiAgICAgICAgaWYgKHRoaXMucG9wdWxhdGlvbklbaWRdKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAvKipAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgY29uc3QgY2VsbCA9IG5ldyBDZWxsKHgsIHksIDApXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKGNlbGwpXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbklbaWRdID0gY2VsbFxuICAgICAgICByZXR1cm4gY2VsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0ZXAoKSB7XG5cbiAgICAgICAgLy9UT0RPIGRvdWJsZSBpbmRleGluZz8gYnkgcmF3IGFuZCB0aGVuIGNvbHVtbiA/XG4gICAgICAgIC8vcG9wdWxhdGUgY2VsbCBzdXJyb3VuZGluZ3NcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IHN1ckkgPSB7fTtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGxpc3Qgb2YgY2VsbHNcbiAgICAgICAgZm9yIChsZXQgY2VsbCBvZiB0aGlzLnBvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIC8vICsxIHN1cnJvdW5kaW5nIGNlbGxzXG4gICAgICAgICAgICBjb25zdCBzcnMgPSBVbml2ZXJzZS5nZXRDZWxsU3Vycm91bmRpbmcoY2VsbCwgdGhpcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBzdXIgb2Ygc3JzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gc3VyLnggKyBcIl9cIiArIHN1ci55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1cl8gPSBzdXJJW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHN1cl8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyXy5uYisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1ci5uYiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHN1cklba2V5XSA9IHN1cjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0IzL1MyM1xuICAgICAgICAvL2tpbGwgY2VsbHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICBjb25zdCBjZWxsc1RvS2VlcEkgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgY2VsbCBvZiB0aGlzLnBvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNlbGwueCArIFwiX1wiICsgY2VsbC55O1xuICAgICAgICAgICAgY29uc3QgY2VsbF8gPSBzdXJJW2tleV07XG4gICAgICAgICAgICBpZiAoIWNlbGxfKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vaWYgKG5iPDIgb3IgbmI+MykgLT4ga2lsbFxuICAgICAgICAgICAgaWYgKGNlbGxfLm5iIDwgMiB8fCBjZWxsXy5uYiA+IDMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXAucHVzaChjZWxsKTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwSVtrZXldID0gY2VsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSBjZWxsc1RvS2VlcDtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSSA9IGNlbGxzVG9LZWVwSTtcblxuICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48Q2VsbD59ICovXG4gICAgICAgIGNvbnN0IHN1cnMgPSBvYmpUb0FycmF5KHN1ckkpO1xuICAgICAgICBmb3IgKGxldCBzdXIgb2Ygc3Vycykge1xuXG4gICAgICAgICAgICBpZiAoc3VyLm5iICE9PSAzKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jaGVjayBpZiBhbHJlYWR5IGFsaXZlXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMucG9wdWxhdGlvbklba2V5XTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi5wdXNoKHN1cik7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JW2tleV0gPSBzdXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dE1TXG4gICAgICogQHBhcmFtIHtDYW52YXNQbHVzfSBjcGx1c1xuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHN0YXJ0KG5iLCB0aW1lb3V0TVMsIGNwbHVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdW5pID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgICAgICBjcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYiA+IDAgJiYgaSsrID4gbmIpIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCB0aW1lb3V0TVMpO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDZWxsfSBjZWxsXG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdW5pXG4gICAgICogQHJldHVybiB7QXJyYXkuPENlbGw+fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDZWxsU3Vycm91bmRpbmcoY2VsbCwgdW5pKSB7XG4gICAgICAgIGNvbnN0IHgxID0gY2VsbC54ID09PSAwID8gdW5pLncgLSAxIDogY2VsbC54IC0gMTtcbiAgICAgICAgY29uc3QgeDIgPSBjZWxsLnggPT09IHVuaS53IC0gMSA/IDAgOiBjZWxsLnggKyAxO1xuICAgICAgICBjb25zdCB5MSA9IGNlbGwueSA9PT0gMCA/IHVuaS5oIC0gMSA6IGNlbGwueSAtIDE7XG4gICAgICAgIGNvbnN0IHkyID0gY2VsbC55ID09PSB1bmkuaCAtIDEgPyAwIDogY2VsbC55ICsgMTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBDZWxsKHgxLCB5MSksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MSwgY2VsbC55KSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgxLCB5MiksXG4gICAgICAgICAgICBuZXcgQ2VsbChjZWxsLngsIHkxKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKGNlbGwueCwgeTIpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDIsIHkxKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgyLCBjZWxsLnkpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDIsIHkyKSxcbiAgICAgICAgXTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9DYW52YXNQbHVzJztcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5cbi8vVE9ETyB6b29tL3Bhbiwgd2l0aCBjYW52YXMgdHJhbnNmb3JtOiBiZXR0ZXIgdW5pdmVyc2UgbGltaXRzXG4vL1RPRE8gYnV0dG9ucyAocGxheSwgc3RvcCwgc3BlZWQsIGRyYXcsIHBhbilcbi8vVE9ETyBjaGVjayBjYW52YXMgYW5pbWF0aW9uXG5cblxuY2xhc3MgR29MU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLmRpdklkID0gb3B0cy5kaXZJZCB8fCBcInZhZGl2XCI7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5kaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcblxuICAgICAgICAgICAgLy9jbGVhclxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vZHJhdyBjZWxsc1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoLnVuaS5wb3B1bGF0aW9uKVxuICAgICAgICAgICAgICAgIGMyLmZpbGxSZWN0KHRoaXMuZ2VvVG9QaXhYKGNlbGwueCksIHRoaXMuZ2VvVG9QaXhZKGNlbGwueSksIDEgLyB0aGlzLnBzLCAxIC8gdGhpcy5wcyk7XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudW5pID0gbmV3IFVuaXZlcnNlKHRoaXMudywgdGhpcy5oKTtcbiAgICB9XG5cblxuICAgIC8vXG4gICAgaW5pdFJhbmRvbShkZW5zaXR5ID0gMC4wNSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBuYiA9IHRoaXMudW5pLncgKiB0aGlzLnVuaS5oICogZGVuc2l0eTtcbiAgICAgICAgd2hpbGUgKGkgPCBuYikge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQodGhpcy51bmkudyAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQodGhpcy51bmkuaCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtDZWxsfSAqL1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMudW5pLmFkZCh4LCB5KTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnVuaS5zdGFydCgtMSwgMCwgdGhpcy5jcGx1cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBjb25zdCBnYW1lT2ZMaWZlID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEdvTFNpbXVsYXRpb24ob3B0cylcbn1cbiIsIi8vQHRzLWNoZWNrXG5cbmV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldHMvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ29sL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zpc2gvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHAvaW5kZXhcIlxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSBcIi4vVW5pdmVyc2VcIjtcbmltcG9ydCB7Q2FudmFzUGx1c30gZnJvbSBcIi4uL2Jhc2UvQ2FudmFzUGx1c1wiXG5cbmV4cG9ydCBjbGFzcyBQbGFuZXQge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdSBUaGUgdW5pdmVyc2UgdGhlIHBsYW5ldCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSBtYXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eCBUaGUgc3BlZWQgeFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eSBUaGUgc3BlZWQgeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHUsIG0sIHgsIHksIHZ4LCB2eSkge1xuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnUgPSB1O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5tID0gbTtcblxuICAgICAgICAvL2NvbXB1dGUgcmFkaXVzXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG5cbiAgICAgICAgLy9zZXQgcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCByID8gciA6IHggPiB1LncgLSByID8gdS53IC0gciA6IHg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgciA/IHIgOiB5ID4gdS5oIC0gciA/IHUuaCAtIHIgOiB5O1xuXG4gICAgICAgIC8vc2V0IHNwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ5ID0gdnk7XG5cbiAgICAgICAgLy9zZXQgZm9yY2VcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZnggPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBmb3JjZSwgYmFzZWQgb24gdGhlIGdyYXZpdHkgb2Ygb3RoZXIgcGxhbmV0cy5cbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuXG4gICAgICAgIHRoaXMuZnggPSAwO1xuICAgICAgICB0aGlzLmZ5ID0gMDtcblxuICAgICAgICAvL2NoZWNrIGFsbCBvdGhlciBwbGFuZXRzIGluIHRoZSB1bml2ZXJzZVxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMudS5wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMgPT0gcClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jb21wdXRlIGFuZCBhZGQgZ3Jhdml0eSBmb3JjZVxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBsZXQgZCA9IHRoaXMuZChwKTtcbiAgICAgICAgICAgIGlmIChkID09PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBkID0gZCAqIGQgKiBkO1xuICAgICAgICAgICAgdGhpcy5meCArPSAwLjAxICogKHAueCAtIHRoaXMueCkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICAgICAgdGhpcy5meSArPSAwLjAxICogKHAueSAtIHRoaXMueSkgKiB0aGlzLm0gKiBwLm0gLyBkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0byB0aGUgcGxhbmV0IHAuXG4gICAgICovXG4gICAgZChwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBkeCA9IHAueCAtIHRoaXMueDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR5ID0gcC55IC0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIHBsYW5ldCwgZGVwZW5kaW5nIG9uIGl0cyBtYXNzLlxuICAgICAqL1xuICAgIHIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLm0gLyBNYXRoLlBJLCAwLjUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2bWF4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqL1xuICAgIGNoYW5nZShib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9jb21wdXRlIGFjY2VsZXJhdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgYXggPSB0aGlzLmZ4IC8gdGhpcy5tO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgYXkgPSB0aGlzLmZ5IC8gdGhpcy5tO1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgc3BlZWRcbiAgICAgICAgdGhpcy52eCArPSBheCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMudnkgKz0gYXkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vY2hlY2sgdm1heFxuICAgICAgICBpZiAodm1heCA+IDApIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGguc3FydCh0aGlzLnZ4ICogdGhpcy52eCArIHRoaXMudnkgKiB0aGlzLnZ5KTtcbiAgICAgICAgICAgIGlmICh2ID4gdm1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSB2bWF4ICogdGhpcy52eCAvIHY7XG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IHZtYXggKiB0aGlzLnZ5IC8gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGxldCBueCA9IHRoaXMueCArIHRoaXMudnggKiB0aW1lU3RlcE1zO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IG55ID0gdGhpcy55ICsgdGhpcy52eSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9oYW5kbGUgcG9zaXRpb24gbGltaXRcbiAgICAgICAgaWYgKGJvdW5jZSkge1xuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucigpO1xuICAgICAgICAgICAgY29uc3QgZSA9IDE7XG4gICAgICAgICAgICBpZiAobnggPCByKSB7IG54ID0gcjsgdGhpcy52eCA9IC10aGlzLnZ4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55IDwgcikgeyBueSA9IHI7IHRoaXMudnkgPSAtdGhpcy52eSAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53IC0gcikgeyBueCA9IHRoaXMudS53IC0gcjsgdGhpcy52eCA9IC10aGlzLnZ4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmggLSByKSB7IG55ID0gdGhpcy51LmggLSByOyB0aGlzLnZ5ID0gLXRoaXMudnkgKiBlOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobnggPCAwKSB7IG54ID0gdGhpcy51Lnc7IH1cbiAgICAgICAgICAgIGlmIChueSA8IDApIHsgbnkgPSB0aGlzLnUuaDsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncpIHsgbnggPSAwOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCkgeyBueSA9IDA7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbW92ZSBwbGFuZXRcbiAgICAgICAgdGhpcy51Lm1vdmUodGhpcywgbngsIG55KVxuICAgIH1cblxuXG4gICAgLyoqIFxuICAgICogU2V0IHJhbmRvbSBzcGVlZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWRcbiAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICB0aGlzLnZ4ID0gc3BlZWQgKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgICAgdGhpcy52eSA9IHNwZWVkICogTWF0aC5zaW4oYW5nbGUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBwbGFuZXRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxsU3R5bGUgXG4gICAgICovXG4gICAgZGlzcGxheShjcCwgZmlsbFN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMucigpIC8gY3AucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vYmFzZS9HcmlkJztcbmltcG9ydCB7IFBsYW5ldCB9IGZyb20gJy4vUGxhbmV0JztcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3Jlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIGdyZXMgPSBNYXRoLm1pbih3LCBoKSAvIDEwMC4wKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG5cbiAgICAgICAgLyoqIEB0eXBlIHtHcmlkLjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh3LCBoLCBncmVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBtYXNzIG9mIHRoZSB1bml2ZXJzZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbSgpIHtcbiAgICAgICAgbGV0IG0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBtICs9IHAubTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeSBcbiAgICAgKiBAcmV0dXJucyB7UGxhbmV0fVxuICAgICAqL1xuICAgIGNyZWF0ZVBsYW5ldChtLCB4LCB5LCBzeCA9IDAsIHN5ID0gMCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldCh0aGlzLCBtLCB4LCB5LCBzeCwgc3kpO1xuICAgICAgICB0aGlzLmFkZChwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAgXG4gICAgICovXG4gICAgYWRkKHApIHtcbiAgICAgICAgcC51ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcy5wdXNoKHApO1xuICAgICAgICB0aGlzLmdyaWQuYWRkKHAsIHAueCwgcC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBwbGFuZXRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcCBcbiAgICAgKi9cbiAgICByZW1vdmUocCkge1xuICAgICAgICBwLnUgPSBudWxsO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5wcywgcCk7XG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmUocCwgcC54LCBwLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwbGFuZXRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBueFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBueVxuICAgICAqL1xuICAgIG1vdmUocCwgbngsIG55KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5tb3ZlKHAsIHAueCwgcC55LCBueCwgbnkpO1xuICAgICAgICBwLnggPSBueDsgcC55ID0gbnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWdncmVnYXRlIHR3byBwbGFuZXRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAxXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAyXG4gICAgICogQHJldHVybnMge1BsYW5ldH1cbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUocDEsIHAyKSB7XG4gICAgICAgIGNvbnN0IG0gPSBwMS5tICsgcDIubTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlUGxhbmV0KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ5ICogcDEubSArIHAyLnZ5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHAxKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDIpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3JcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFBsYW5ldD59XG4gICAgICovXG4gICAgZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHBpIG9mIHRoaXMucHMpIHtcblxuICAgICAgICAgICAgY29uc3QgdyA9IDIgKiBwaS5yKCk7XG4gICAgICAgICAgICBjb25zdCBjYW5kID0gdGhpcy5ncmlkLmdldChwaS54IC0gdywgcGkueSAtIHcsIHBpLnggKyB3LCBwaS55ICsgdyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBqIG9mIGNhbmQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChwaSA9PSBwaikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMSA9IHBpLmQocGopO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQyID0gKHBpLnIoKSArIHBqLnIoKSkgKiBjb2xsaXNpb25GYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcGksIHBqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIHBsYW5ldHMgd2l0aCByYW5kb20gc3BlZWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGFkZFBsYW5ldHMobmIgPSAxLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBsYW5ldChtaSwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBwLnNldFJhbmRvbVNwZWVkKG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2bWF4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3IgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RlcChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICAvL2ZpbmQgZmlyc3QgY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIGxldCBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSlcbiAgICAgICAgICAgIC8vZmluZCBuZXh0IGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbiByYW5kb20gc3BlZWQgdG8gYWxsIHBsYW5ldHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5zZXRSYW5kb21TcGVlZChtaW5TcGVlZCwgbWF4U3BlZWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1BsYW5ldH0gVGhlIGxhcmdlc3QgcGxhbmV0IG9mIHRoZSB1bml2ZXJzZSwgdXN1YWxseSB0aGUgc3Rhci5cbiAgICAgKi9cbiAgICBnZXRMYXJnZXN0UGxhbmV0KCkge1xuICAgICAgICBsZXQgcE0gPSBudWxsLCBtTSA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIGlmIChwLm0gPiBtTSkgeyBwTSA9IHA7IG1NID0gcC5tIH1cbiAgICAgICAgcmV0dXJuIHBNXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGxhcmdlc3QgcGxhbmV0IGFuZCBleHBsb2RlIGl0LlxuICAgICAqL1xuICAgIGV4cGxvZGVMYXJnZXN0UGxhbmV0KCkge1xuICAgICAgICBjb25zdCBwID0gdGhpcy5nZXRMYXJnZXN0UGxhbmV0KClcbiAgICAgICAgdGhpcy5leHBsb2RlKHApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwbG9kZSBhIHBsYW5ldCBpbnRvIHBpZWNlc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWQgXG4gICAgICovXG4gICAgZXhwbG9kZShwLCBuYiA9IC0xLCBtaW5TcGVlZCA9IDAuOCwgbWF4U3BlZWQgPSAxLjUsIHJhZCA9IC0xKSB7XG4gICAgICAgIGlmIChuYiA8PSAwKSBuYiA9IE1hdGguZmxvb3IocC5tKTtcbiAgICAgICAgaWYgKG5iIDw9IDApIHJldHVybjtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMiAqIE1hdGguUEkgLyBuYjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICAvL2NyZWF0ZSBwbGFuZXRcblxuICAgICAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICAgICAgaWYgKHJhZCA8IDApIHJhZCA9IDIgKiBwLnIoKVxuICAgICAgICAgICAgY29uc3QgZCA9IHJhZCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBjb25zdCBhID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgIGNvbnN0IHggPSBkICogTWF0aC5jb3MoYSksIHkgPSBkICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIC8vc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgY29uc3QgYVMgPSBhICsgMiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gc3BlZWQgKiBNYXRoLmNvcyhhUyksIHN5ID0gc3BlZWQgKiBNYXRoLnNpbihhUyk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxhbmV0KHAubSAvIG5iLCBwLnggKyB4LCBwLnkgKyB5LCBwLnZ4ICsgc3gsIHAudnkgKyBzeSlcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBwIGZyb20gdW5pdmVyc2VcbiAgICAgICAgdGhpcy5yZW1vdmUocClcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvQ2FudmFzUGx1cyc7XG5cbi8qKiAgKi9cbmNsYXNzIFBsYW5ldFNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5kaXZJZCA9IG9wdHMuZGl2SWQgfHwgXCJ2YWRpdlwiO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gb3B0cy53IHx8IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IG9wdHMuaCB8fCBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG5cbiAgICAgICAgICAgIC8vY2xlYXIsIHdpdGggdHJhbnNwYXJlbmN5XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgcGxhbmV0c1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiB0aC51bmkucHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcC5tIC8gdGgudW5pLm0oKTtcbiAgICAgICAgICAgICAgICBwLmRpc3BsYXkodGhpcywgXCJyZ2IoMjU1LDI1NSxcIiArIE1hdGguZmxvb3IoMjU1ICogKDEgLSB0KSkgKyBcIilcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9sYWJlbFxuICAgICAgICAgICAgLypjMi5maWxsU3R5bGUgPSBcInJnYigyMDAsMjAwLDIwMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxUZXh0KHRoLnVuaS5wcy5sZW5ndGggKyBcIiBwbGFuZXRzXCIsIDIsIDEwKTsqL1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnVuaSA9IG5ldyBVbml2ZXJzZSh0aGlzLncsIHRoaXMuaClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHdpdGggcmFuZG9tIHBsYW5ldHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgaW5pdFJhbmRvbShuYiA9IDEwMDAsIG1pID0gMC41LCBtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIHRoaXMudW5pLmFkZFBsYW5ldHMobmIsIG1pLCBtaW5TcGVlZCwgbWF4U3BlZWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHdpdGggYmlnIGJhbmcgc2V0dXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZCBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0QmlnQmFuZyhuYiA9IDEwMDAsIG1pID0gMSwgbWluU3BlZWQgPSAwLjM1LCBtYXhTcGVlZCA9IDAuNywgcmFkID0gMTAwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIC8vY3JlYXRlIGJpZyBwbGFuZXQgaW4gdGhlIG1pZGRsZVxuICAgICAgICBjb25zdCBjeCA9IHRoaXMudyAqIDAuNSwgY3kgPSB0aGlzLmggKiAwLjU7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnVuaS5jcmVhdGVQbGFuZXQobmIgKiBtaSwgY3gsIGN5LCAwLCAwKTtcbiAgICAgICAgLy9leHBsb2RlIGl0XG4gICAgICAgIHRoaXMudW5pLmV4cGxvZGUocCwgbmIsIG1pblNwZWVkLCBtYXhTcGVlZCwgcmFkKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBzaW11bGF0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBib3VuY2UgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZtYXggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbGxpc2lvbkZhY3RvciBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJJdGVyYXRpb25zIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0YXJ0KGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCBjb2xsaXNpb25GYWN0b3IgPSAwLjgsIHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC51bmkuc3RlcChib3VuY2UsIHZtYXgsIGNvbGxpc2lvbkZhY3RvciwgdGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vc3RvcFxuICAgIHN0b3AoKSB7XG4gICAgICAgIC8vVE9ET1xuICAgIH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgcGxhbmV0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBQbGFuZXRTaW11bGF0aW9uKG9wdHMpXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgTGFuZCB9IGZyb20gXCIuL0xhbmRcIlxuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gXCIuLi9iYXNlL0NhbnZhc1BsdXNcIlxuXG5leHBvcnQgY2xhc3MgQW5pbWFsIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFxuICAgICAqIEBwYXJhbSB7TGFuZH0gbCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBsLCB4ID0gMCwgeSA9IDApIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgLyoqIEB0eXBlIHtMYW5kfSAqL1xuICAgICAgICB0aGlzLmwgPSBsO1xuXG4gICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBsLncgPyBsLncgOiB4XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgMCA/IDAgOiB5ID4gbC5oID8gbC5oIDogeVxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSAwXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ5ID0gMDtcblxuICAgICAgICAvL3RoZSBvdGhlciBhbmltYWxzIGFyb3VuZFxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJleXMgPSBbXVxuXG4gICAgICAgIC8vYWRkIHRvIHRoZSBzcGF0aWFsIGluZGV4XG4gICAgICAgIGwuZ3JpZC5hZGQodGhpcywgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGlzdGFuY2UgdG8gYW5vdGhlciBhbmltYWxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0FuaW1hbH0gYSBcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgoYS54IC0gdGhpcy54KSwgKGEueSAtIHRoaXMueSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSB0aW1lU3RlcE1zIFxuICAgICAqL1xuICAgIG1vdmUodGltZVN0ZXBNcyA9IDEwKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxcbiAgICAgICAgbC5ncmlkLnJlbW92ZSh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHIgPSAwLjAxICogTWF0aC5yYW5kb20oKTtcblxuICAgICAgICB0aGlzLnZ4ICs9IHIgKiBNYXRoLmNvcyhhbmdsZSkgKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52eCA+IGwuVl9NQVggPyBsLlZfTUFYIDogdGhpcy52eCA8IC1sLlZfTUFYID8gLWwuVl9NQVggOiB0aGlzLnZ4XG5cbiAgICAgICAgdGhpcy52eSArPSByICogTWF0aC5zaW4oYW5nbGUpICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgPiBsLlZfTUFYID8gbC5WX01BWCA6IHRoaXMudnkgPCAtbC5WX01BWCA/IC1sLlZfTUFYIDogdGhpcy52eVxuXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy54ID0gdGhpcy54IDwgMCA/IGwudyA6IHRoaXMueCA+IGwudyA/IDAgOiB0aGlzLnhcblxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSA8IDAgPyBsLmggOiB0aGlzLnkgPiBsLmggPyAwIDogdGhpcy55XG5cbiAgICAgICAgbC5ncmlkLmFkZCh0aGlzLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKiogT2JzZXJ2ZSAqL1xuICAgIG9ic2VydmUoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxcblxuICAgICAgICAvL2dldCBhbmltYWxzIGFyb3VuZFxuICAgICAgICBjb25zdCBhcyA9IGwuZ3JpZC5nZXQodGhpcy54IC0gbC5kLCB0aGlzLnkgLSBsLmQsIHRoaXMueCArIGwuZCwgdGhpcy55ICsgbC5kKTtcblxuICAgICAgICB0aGlzLnByZXlzID0gW107XG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgYSBvZiBhcykge1xuICAgICAgICAgICAgaWYgKGEgPT0gdGhpcykgY29udGludWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kKGEpID4gbC5kKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT0gMClcbiAgICAgICAgICAgICAgICB0aGlzLnByZXlzLnB1c2goYSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVkYXRvcnMucHVzaChhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAcmV0dXJucyB7QW5pbWFsfSAqL1xuICAgIG1ha2VDaGlsZCgpIHtcbiAgICAgICAgLy9kbyBiZXR0ZXI6IG1ha2UgY2hpbGQgYXJvdW5kXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWFsKHRoaXMudHlwZSwgdGhpcy5sLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYW5pbWFsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtDYW52YXNQbHVzfSBjcCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsbFN0eWxlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFxuICAgICAqL1xuICAgIGRpc3BsYXkoY3AsIGZpbGxTdHlsZSA9IFwiYmx1ZVwiLCBzaXplID0gMikge1xuICAgICAgICBjb25zdCBzID0gc2l6ZSAvIGNwLnBzXG4gICAgICAgIGNwLmMyZC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGNwLmMyZC5maWxsUmVjdChjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHMsIHMpO1xuICAgICAgICAvKmMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5hcmMoYS54LCBhLnksIDAuNSwgMCwgMipNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTsqL1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9iYXNlL0dyaWQnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5UyB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7QW5pbWFsfSBmcm9tIFwiLi9BbmltYWxcIlxuXG5leHBvcnQgY2xhc3MgTGFuZCB7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG5cbiAgICAgICAgLy90aGUgbWF4IHNwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLlZfTUFYID0gMC4xXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMucCA9IDAuMDIgLy9wcmVkYXRvciBkZWF0aCBwcm9iYWJpbGl0eVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5xID0gMC4xIC8vcHJleSByZXByb2R1Y3Rpb24gcHJvYmFiaWxpdHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuciA9IDAuNSAvL2VhdGVuIHByZXkgdHJhbnNmb3JtYXRpb24gcHJvYmFiaWxpdHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubmIgPSAzIC8vbmVpZ2hib3JzIG51bWJlclxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoXG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXVxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZXlzID0gW11cblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5kID0gMTBcbiAgICAgICAgLyoqIEB0eXBlIHtHcmlkLjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh3LCBoLCB0aGlzLmQpO1xuXG4gICAgICAgIC8qaW50W11bXSBoaXN0bztcbiAgICAgICAgaW50IGluZGV4PTA7XG4gICAgICAgIHRoaXMuYzJDaGFydD1jMkNoYXJ0O1xuICAgICAgICB0aGlzLmhDaGFydD1oQ2hhcnQ7XG4gICAgICAgIHRoaXMuaGlzdG89bmV3IGludFt3Q2hhcnRdW107XG4gICAgICAgIGZvcihpbnQgaT0wO2k8d0NoYXJ0O2krKylcbiAgICAgICAgICAgIGhpc3RvW2ldPW5ldyBpbnRbXXswLDB9OyovXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBzdGVwKHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vb2JzZXJ2ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpIGEub2JzZXJ2ZSgpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJlZGF0b3JzKSBhLm9ic2VydmUoKTtcblxuICAgICAgICBjb25zdCBwcmV5c1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZXlzVG9EaWUgPSBbXVxuICAgICAgICBjb25zdCBwcmVkc1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZWRzVG9EaWUgPSBbXVxuXG4gICAgICAgIC8vcHJleVxuICAgICAgICBmb3IgKGxldCBwcmV5IG9mIHRoaXMucHJleXMpIHtcbiAgICAgICAgICAgIC8vcmVwcm9kdWN0aW9uIGlmIG5vIHByZWRhdG9yIGFyb3VuZFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiB0aGlzLnEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHByZXkucHJlZGF0b3JzLmxlbmd0aCAhPSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwcmV5LnByZXlzLmxlbmd0aCA+PSB0aGlzLm5iKSBjb250aW51ZTtcbiAgICAgICAgICAgIHByZXlzVG9Cb3JuLnB1c2gocHJleS5tYWtlQ2hpbGQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3ByZWRhdG9yXG4gICAgICAgIGZvciAobGV0IHByZWQgb2YgdGhpcy5wcmVkYXRvcnMpIHtcbiAgICAgICAgICAgIC8vbm8gcHJleSBhcm91bmQ6IHByZWRhdG9yIGRpZXMgd2l0aCBwcm9iYWJpbGl0eSBwXG4gICAgICAgICAgICBpZiAocHJlZC5wcmV5cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgdGhpcy5wKSBwcmVkc1RvRGllLnB1c2gocHJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3ByZXkgYXJvdW5kXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2VhdCBwcmV5XG4gICAgICAgICAgICAgICAgLy9jaG9vc2UgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV5VG9FYXQgPSBwcmVkLnByZXlzW01hdGguZmxvb3IocHJlZC5wcmV5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgICAgICAgICAgcHJleXNUb0RpZS5wdXNoKHByZXlUb0VhdCk7XG5cbiAgICAgICAgICAgICAgICAvL3ByZWRhdG9yIHJlcHJvZHVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy5yKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZC5wcmVkYXRvcnMubGVuZ3RoID49IHRoaXMubmIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHByZWRzVG9Cb3JuLnB1c2gocHJlZC5tYWtlQ2hpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXlzLnB1c2goLi4ucHJleXNUb0Jvcm4pO1xuICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKC4uLnByZWRzVG9Cb3JuKTtcblxuICAgICAgICByZW1vdmVGcm9tQXJyYXlTKHRoaXMucHJleXMsIHByZXlzVG9EaWUsIGZhbHNlKVxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZXlzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSwgYS54LCBhLnksIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5Uyh0aGlzLnByZWRhdG9ycywgcHJlZHNUb0RpZSwgZmFsc2UpXG4gICAgICAgIGZvciAobGV0IGEgb2YgcHJlZHNUb0RpZSkgdGhpcy5ncmlkLnJlbW92ZShhLCBhLngsIGEueSwgZmFsc2UpO1xuXG4gICAgICAgIC8vbW92ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpXG4gICAgICAgICAgICBhLm1vdmUodGltZVN0ZXBNcyk7XG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmVkYXRvcnMpXG4gICAgICAgICAgICBhLm1vdmUodGltZVN0ZXBNcyk7XG5cbiAgICAgICAgLyovaGlzdG9cbiAgICAgICAgaGlzdG9baW5kZXhdID0gbmV3IGludFtdeyBwcmV5cy5zaXplKCksIHByZWRhdG9ycy5zaXplKCkgfTtcbiAgICAgICAgaWYgKGluZGV4ID09IGhpc3RvLmxlbmd0aCAtIDEpIGluZGV4ID0gMDtcbiAgICAgICAgZWxzZSBpbmRleCsrOyovXG5cbiAgICB9XG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgTGFuZCB9IGZyb20gJy4vTGFuZCc7XG5pbXBvcnQgeyBBbmltYWwgfSBmcm9tICcuL0FuaW1hbCc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9DYW52YXNQbHVzJztcblxuLyoqICovXG5jbGFzcyBQcmV5UHJlZGF0b3JTaW11bGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL3RyYW5zcGFyZW5jeVxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYW5pbWFsc1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0aC5sYW5kLnByZXlzKVxuICAgICAgICAgICAgICAgIGEuZGlzcGxheSh0aGlzLCBcImJsdWVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBhIG9mIHRoLmxhbmQucHJlZGF0b3JzKVxuICAgICAgICAgICAgICAgIGEuZGlzcGxheSh0aGlzLCBcInJlZFwiKTtcblxuICAgICAgICAgICAgLyovbGFiZWxcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgYzIuZmlsbFRleHQocHJleXMubGVuZ3RoICsgXCIvXCIgKyBwcmVkYXRvcnMubGVuZ3RoLCAyLCAxMCk7Ki9cblxuICAgICAgICAgICAgLy9jaGFydFxuICAgICAgICAgICAgLy9jMkNoYXJ0LnNldEZpbGxTdHlsZShiYWNrQ29sb3IyKTtcbiAgICAgICAgICAgIC8vYzJDaGFydC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgICAgICAgICAgLy9kb3VibGUgbWF4ID0gZ2V0TWF4SGlzdG8oKTtcbiAgICAgICAgICAgIC8qcHVibGljIGludCBnZXRNYXhIaXN0bygpIHtcbiAgICAgICAgICAgICAgICBpbnQgbWF4PTA7XG4gICAgICAgICAgICAgICAgZm9yKGludCBpPTA7aTxoaXN0by5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlzdG9baV1bMF0+bWF4KSBtYXg9aGlzdG9baV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpc3RvW2ldWzFdPm1heCkgbWF4PWhpc3RvW2ldWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG91YmxlIGgxLCBoMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGhpc3RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxID0gaENoYXJ0ICogaGlzdG9baV1bMF0gLyBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyID0gaENoYXJ0ICogaGlzdG9baV1bMV0gLyBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKHByZXlDb2xvcjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGksIGhDaGFydCAtIGgxLCAxLCBoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKHByZWRhdG9yQ29sb3IyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpLCBoQ2hhcnQgLSBoMiwgMSwgaDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKENzc0NvbG9yLm1ha2UoMjU1LCAyNTUsIDI1NSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpbmRleCwgMCwgMSwgaENoYXJ0KTtcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH07XG5cblxuICAgICAgICAvKiogQHR5cGUge0xhbmR9ICovXG4gICAgICAgIHRoaXMubGFuZCA9IG5ldyBMYW5kKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJQcmV5IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlByZWRhdG9yIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRSYW5kb20obmJQcmV5ID0gMjAwLCBuYlByZWRhdG9yID0gMTAwMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUHJleTsgaSsrKVxuICAgICAgICAgICAgdGhpcy5sYW5kLnByZXlzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEFuaW1hbCgwLCB0aGlzLmxhbmQsIHRoaXMudyAqIE1hdGgucmFuZG9tKCksIHRoaXMuaCAqIE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUHJlZGF0b3I7IGkrKylcbiAgICAgICAgICAgIHRoaXMubGFuZC5wcmVkYXRvcnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgQW5pbWFsKDEsIHRoaXMubGFuZCwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQubGFuZC5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgcHJleVByZWRhdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFByZXlQcmVkYXRvclNpbXVsYXRpb24ob3B0cylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=