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
        div.appendChild(this.canvas)
        this.canvas.id = canvasId;
        this.canvas.width = this.w;
        this.canvas.height = this.h;

        /**@type {Object} */
        this.c2d = this.canvas.getContext("2d");

        // geo coordinates of the center
        this.center = center || { x: this.w * 0.5, y: this.h * 0.5 }
        // zoom factor: pixel size, in m/pix
        this.ps = ps;

        //extent
        /** @type {{xMin:number,xMax:number,yMin:number,yMax:number}} */
        this.extGeo = undefined;
        this.updateExtentGeo()

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
        this.updateExtentGeo()
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
        this.updateExtentGeo()
        this.redraw();
    }

    /**
     * @param {number} marginPx 
     */
    updateExtentGeo(marginPx = 20) {
        this.extGeo = {
            xMin: this.pixToGeoX(-marginPx),
            xMax: this.pixToGeoX(this.w + marginPx),
            yMin: this.pixToGeoY(this.h + marginPx),
            yMax: this.pixToGeoY(-marginPx)
        }
    }

    /**
     * Check if the object has to be drawn
     * 
     * @param {{x:number,y:number}} obj 
     */
    toDraw(obj) {
        if(obj.x < this.extGeo.xMin) return false;
        if(obj.x > this.extGeo.xMax) return false;
        if(obj.y < this.extGeo.yMin) return false;
        if(obj.y > this.extGeo.yMax) return false;
        return true
    }
}


/***/ }),

/***/ "./src/base/SpatialIndex.js":
/*!**********************************!*\
  !*** ./src/base/SpatialIndex.js ***!
  \**********************************/
/*! exports provided: SpatialIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpatialIndex", function() { return SpatialIndex; });
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rbush */ "./node_modules/rbush/rbush.min.js");
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rbush__WEBPACK_IMPORTED_MODULE_0__);
//@ts-check

//see https://github.com/mourner/rbush


/**
 * @template T
 */
class SpatialIndex {

    /**
     * @constructor
     */
    constructor() {
        class MyRBush extends rbush__WEBPACK_IMPORTED_MODULE_0___default.a {
            /** @param {{x:number,y:number}} obj  */
            toBBox(obj) { return { minX: obj.x, minY: obj.y, maxX: obj.x, maxY: obj.y }; }
            /**
             * @param {{x:number,y:number}} a 
             * @param {{x:number,y:number}} b 
             */
            compareMinX(a, b) { return a.x - b.x; }
            /**
             * @param {{x:number,y:number}} a 
             * @param {{x:number,y:number}} b 
             */
            compareMinY(a, b) { return a.y - b.y; }
        }

        /** @type {MyRBush} */
        this.tree = new MyRBush();
    }

    //TODO bulk insert and remove ?

    /**
     * @param {number} xmin
     * @param {number} ymin
     * @param {number} xmax
     * @param {number} ymax
     * @return {Array.<T>}
     */
    get(xmin, ymin, xmax, ymax) {
        return this.tree.search({
            minX: xmin,
            minY: ymin,
            maxX: xmax,
            maxY: ymax
        });
    }

    /**
     * @param {T} obj
     */
    insert(obj) {
        this.tree.insert(obj);
    }

    /**
     * @param {T} obj
     */
    remove(obj) {
        this.tree.remove(obj)
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
        this.sea.grid.insert(this)

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
        this.sea.grid.remove(this);

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

        //
        this.sea.grid.insert(this);
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
/* harmony import */ var _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/SpatialIndex */ "./src/base/SpatialIndex.js");
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
        /** @type {SpatialIndex.<Sardin>} */
        this.grid = new _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__["SpatialIndex"]();

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
            this.grid.remove(s);
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
                    if (this.toDraw(sa))
                        sa.displayVisionField(this, "rgba(200,200,200,0.15)", 1)
            //show vision links
            if (th.showFishVisionLinks)
                for (let sa of s.fish)
                    if (this.toDraw(sa))
                        sa.displayVisionLinks(this, "rgba(255,100,100,0.3)", 1)
            //show collision field
            if (th.showFishCollisionField)
                for (let sa of s.fish)
                    if (this.toDraw(sa))
                        sa.displayCollisionField(this, "purple", 1)


            //display sardins
            c2.lineWidth = 2 / this.ps
            const sardinLength = 7
            for (let sa of s.fish)
                if (this.toDraw(sa))
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
/* harmony import */ var _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/SpatialIndex */ "./src/base/SpatialIndex.js");
/* harmony import */ var _Planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Planet */ "./src/planets/Planet.js");
//@ts-check




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

        /** @type {Array.<Planet>} */
        this.ps = [];

        /** @type {SpatialIndex.<Planet>} */
        this.grid = new _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__["SpatialIndex"]();
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
        this.grid.insert(p);
    }

    /**
     * Remove a planet
     * 
     * @param {Planet} p 
     */
    remove(p) {
        p.u = null;
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, p);
        this.grid.remove(p);
    }

    /**
     * Move a planet
     * 
     * @param {Planet} p
     * @param {number} nx
     * @param {number} ny
     */
    move(p, nx, ny) {
        this.grid.remove(p);
        p.x = nx; p.y = ny;
        this.grid.insert(p);
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
                if (!this.toDraw(p)) continue
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
        l.grid.insert(this);
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
        l.grid.remove(this);

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

        l.grid.insert(this);
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
/* harmony import */ var _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/SpatialIndex */ "./src/base/SpatialIndex.js");
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
        /** @type {SpatialIndex.<Animal>} */
        this.grid = new _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_0__["SpatialIndex"]();

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
        for (let a of preysToDie) this.grid.remove(a);
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_1__["removeFromArrayS"])(this.predators, predsToDie, false)
        for (let a of predsToDie) this.grid.remove(a);

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
                if (this.toDraw(a))
                    a.display(this, "blue");
            for (let a of th.land.predators)
                if (this.toDraw(a))
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



    //TODO test init in a bubble ?
    //TODO use density as input parameters instead of nb

    /**
     * 
     * @param {number} preyDensity 
     * @param {number} predatorDensity 
     * @returns {this}
     */
    initRandom(preyDensity = 0.003, predatorDensity = 0.003) {
        const l = this.land
        for (let i = 0; i < preyDensity * l.w * l.h; i++)
            l.preys.push(
                new _Animal__WEBPACK_IMPORTED_MODULE_1__["Animal"](0, l, l.w * Math.random(), l.h * Math.random())
            );
        for (let i = 0; i < predatorDensity * l.w * l.h; i++)
            l.predators.push(
                new _Animal__WEBPACK_IMPORTED_MODULE_1__["Animal"](1, l, l.w * Math.random(), l.h * Math.random())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9ub2RlX21vZHVsZXMvcmJ1c2gvcmJ1c2gubWluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL0NhbnZhc1BsdXMuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvU3BhdGlhbEluZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2xpYi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9TYXJkaW4uanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvU2VhLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9nb2wvQ2VsbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL1VuaXZlcnNlLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9nb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL1BsYW5ldC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvQW5pbWFsLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wcC9MYW5kLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wcC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FB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Qjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN2UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2tDO0FBQ2tCO0FBQ047O0FBRXZDOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0JBQWtCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxtQkFBbUIsS0FBSztBQUN4Qix3QkFBd0IsMENBQUk7O0FBRTVCOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBLHVCQUF1QixpQ0FBaUM7QUFDeEQ7QUFDQSxvQkFBb0IsOENBQU07QUFDMUI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDTztBQUNQO0FBQ0EiLCJmaWxlIjoidmVjdGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJidWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShpKToodD10fHxzZWxmKS5SQnVzaD1pKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQscixlLGEsaCl7IWZ1bmN0aW9uIHQobixyLGUsYSxoKXtmb3IoO2E+ZTspe2lmKGEtZT42MDApe3ZhciBvPWEtZSsxLHM9ci1lKzEsbD1NYXRoLmxvZyhvKSxmPS41Kk1hdGguZXhwKDIqbC8zKSx1PS41Kk1hdGguc3FydChsKmYqKG8tZikvbykqKHMtby8yPDA/LTE6MSksbT1NYXRoLm1heChlLE1hdGguZmxvb3Ioci1zKmYvbyt1KSksYz1NYXRoLm1pbihhLE1hdGguZmxvb3Iocisoby1zKSpmL28rdSkpO3QobixyLG0sYyxoKX12YXIgcD1uW3JdLGQ9ZSx4PWE7Zm9yKGkobixlLHIpLGgoblthXSxwKT4wJiZpKG4sZSxhKTtkPHg7KXtmb3IoaShuLGQseCksZCsrLHgtLTtoKG5bZF0scCk8MDspZCsrO2Zvcig7aChuW3hdLHApPjA7KXgtLX0wPT09aChuW2VdLHApP2kobixlLHgpOmkobiwrK3gsYSkseDw9ciYmKGU9eCsxKSxyPD14JiYoYT14LTEpfX0odCxyLGV8fDAsYXx8dC5sZW5ndGgtMSxofHxuKX1mdW5jdGlvbiBpKHQsaSxuKXt2YXIgcj10W2ldO3RbaV09dFtuXSx0W25dPXJ9ZnVuY3Rpb24gbih0LGkpe3JldHVybiB0PGk/LTE6dD5pPzE6MH12YXIgcj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD05KSx0aGlzLl9tYXhFbnRyaWVzPU1hdGgubWF4KDQsdCksdGhpcy5fbWluRW50cmllcz1NYXRoLm1heCgyLE1hdGguY2VpbCguNCp0aGlzLl9tYXhFbnRyaWVzKSksdGhpcy5jbGVhcigpfTtmdW5jdGlvbiBlKHQsaSxuKXtpZighbilyZXR1cm4gaS5pbmRleE9mKHQpO2Zvcih2YXIgcj0wO3I8aS5sZW5ndGg7cisrKWlmKG4odCxpW3JdKSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBhKHQsaSl7aCh0LDAsdC5jaGlsZHJlbi5sZW5ndGgsaSx0KX1mdW5jdGlvbiBoKHQsaSxuLHIsZSl7ZXx8KGU9cChudWxsKSksZS5taW5YPTEvMCxlLm1pblk9MS8wLGUubWF4WD0tMS8wLGUubWF4WT0tMS8wO2Zvcih2YXIgYT1pO2E8bjthKyspe3ZhciBoPXQuY2hpbGRyZW5bYV07byhlLHQubGVhZj9yKGgpOmgpfXJldHVybiBlfWZ1bmN0aW9uIG8odCxpKXtyZXR1cm4gdC5taW5YPU1hdGgubWluKHQubWluWCxpLm1pblgpLHQubWluWT1NYXRoLm1pbih0Lm1pblksaS5taW5ZKSx0Lm1heFg9TWF0aC5tYXgodC5tYXhYLGkubWF4WCksdC5tYXhZPU1hdGgubWF4KHQubWF4WSxpLm1heFkpLHR9ZnVuY3Rpb24gcyh0LGkpe3JldHVybiB0Lm1pblgtaS5taW5YfWZ1bmN0aW9uIGwodCxpKXtyZXR1cm4gdC5taW5ZLWkubWluWX1mdW5jdGlvbiBmKHQpe3JldHVybih0Lm1heFgtdC5taW5YKSoodC5tYXhZLXQubWluWSl9ZnVuY3Rpb24gdSh0KXtyZXR1cm4gdC5tYXhYLXQubWluWCsodC5tYXhZLXQubWluWSl9ZnVuY3Rpb24gbSh0LGkpe3JldHVybiB0Lm1pblg8PWkubWluWCYmdC5taW5ZPD1pLm1pblkmJmkubWF4WDw9dC5tYXhYJiZpLm1heFk8PXQubWF4WX1mdW5jdGlvbiBjKHQsaSl7cmV0dXJuIGkubWluWDw9dC5tYXhYJiZpLm1pblk8PXQubWF4WSYmaS5tYXhYPj10Lm1pblgmJmkubWF4WT49dC5taW5ZfWZ1bmN0aW9uIHAodCl7cmV0dXJue2NoaWxkcmVuOnQsaGVpZ2h0OjEsbGVhZjohMCxtaW5YOjEvMCxtaW5ZOjEvMCxtYXhYOi0xLzAsbWF4WTotMS8wfX1mdW5jdGlvbiBkKGksbixyLGUsYSl7Zm9yKHZhciBoPVtuLHJdO2gubGVuZ3RoOylpZighKChyPWgucG9wKCkpLShuPWgucG9wKCkpPD1lKSl7dmFyIG89bitNYXRoLmNlaWwoKHItbikvZS8yKSplO3QoaSxvLG4scixhKSxoLnB1c2gobixvLG8scil9fXJldHVybiByLnByb3RvdHlwZS5hbGw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYWxsKHRoaXMuZGF0YSxbXSl9LHIucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbih0KXt2YXIgaT10aGlzLmRhdGEsbj1bXTtpZighYyh0LGkpKXJldHVybiBuO2Zvcih2YXIgcj10aGlzLnRvQkJveCxlPVtdO2k7KXtmb3IodmFyIGE9MDthPGkuY2hpbGRyZW4ubGVuZ3RoO2ErKyl7dmFyIGg9aS5jaGlsZHJlblthXSxvPWkubGVhZj9yKGgpOmg7Yyh0LG8pJiYoaS5sZWFmP24ucHVzaChoKTptKHQsbyk/dGhpcy5fYWxsKGgsbik6ZS5wdXNoKGgpKX1pPWUucG9wKCl9cmV0dXJuIG59LHIucHJvdG90eXBlLmNvbGxpZGVzPWZ1bmN0aW9uKHQpe3ZhciBpPXRoaXMuZGF0YTtpZighYyh0LGkpKXJldHVybiExO2Zvcih2YXIgbj1bXTtpOyl7Zm9yKHZhciByPTA7cjxpLmNoaWxkcmVuLmxlbmd0aDtyKyspe3ZhciBlPWkuY2hpbGRyZW5bcl0sYT1pLmxlYWY/dGhpcy50b0JCb3goZSk6ZTtpZihjKHQsYSkpe2lmKGkubGVhZnx8bSh0LGEpKXJldHVybiEwO24ucHVzaChlKX19aT1uLnBvcCgpfXJldHVybiExfSxyLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKHQpe2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuIHRoaXM7aWYodC5sZW5ndGg8dGhpcy5fbWluRW50cmllcyl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspdGhpcy5pbnNlcnQodFtpXSk7cmV0dXJuIHRoaXN9dmFyIG49dGhpcy5fYnVpbGQodC5zbGljZSgpLDAsdC5sZW5ndGgtMSwwKTtpZih0aGlzLmRhdGEuY2hpbGRyZW4ubGVuZ3RoKWlmKHRoaXMuZGF0YS5oZWlnaHQ9PT1uLmhlaWdodCl0aGlzLl9zcGxpdFJvb3QodGhpcy5kYXRhLG4pO2Vsc2V7aWYodGhpcy5kYXRhLmhlaWdodDxuLmhlaWdodCl7dmFyIHI9dGhpcy5kYXRhO3RoaXMuZGF0YT1uLG49cn10aGlzLl9pbnNlcnQobix0aGlzLmRhdGEuaGVpZ2h0LW4uaGVpZ2h0LTEsITApfWVsc2UgdGhpcy5kYXRhPW47cmV0dXJuIHRoaXN9LHIucHJvdG90eXBlLmluc2VydD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdGhpcy5faW5zZXJ0KHQsdGhpcy5kYXRhLmhlaWdodC0xKSx0aGlzfSxyLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGE9cChbXSksdGhpc30sci5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKHQsaSl7aWYoIXQpcmV0dXJuIHRoaXM7Zm9yKHZhciBuLHIsYSxoPXRoaXMuZGF0YSxvPXRoaXMudG9CQm94KHQpLHM9W10sbD1bXTtofHxzLmxlbmd0aDspe2lmKGh8fChoPXMucG9wKCkscj1zW3MubGVuZ3RoLTFdLG49bC5wb3AoKSxhPSEwKSxoLmxlYWYpe3ZhciBmPWUodCxoLmNoaWxkcmVuLGkpO2lmKC0xIT09ZilyZXR1cm4gaC5jaGlsZHJlbi5zcGxpY2UoZiwxKSxzLnB1c2goaCksdGhpcy5fY29uZGVuc2UocyksdGhpc31hfHxoLmxlYWZ8fCFtKGgsbyk/cj8obisrLGg9ci5jaGlsZHJlbltuXSxhPSExKTpoPW51bGw6KHMucHVzaChoKSxsLnB1c2gobiksbj0wLHI9aCxoPWguY2hpbGRyZW5bMF0pfXJldHVybiB0aGlzfSxyLnByb3RvdHlwZS50b0JCb3g9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHIucHJvdG90eXBlLmNvbXBhcmVNaW5YPWZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQubWluWC1pLm1pblh9LHIucHJvdG90eXBlLmNvbXBhcmVNaW5ZPWZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQubWluWS1pLm1pbll9LHIucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGF9LHIucHJvdG90eXBlLmZyb21KU09OPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRhdGE9dCx0aGlzfSxyLnByb3RvdHlwZS5fYWxsPWZ1bmN0aW9uKHQsaSl7Zm9yKHZhciBuPVtdO3Q7KXQubGVhZj9pLnB1c2guYXBwbHkoaSx0LmNoaWxkcmVuKTpuLnB1c2guYXBwbHkobix0LmNoaWxkcmVuKSx0PW4ucG9wKCk7cmV0dXJuIGl9LHIucHJvdG90eXBlLl9idWlsZD1mdW5jdGlvbih0LGksbixyKXt2YXIgZSxoPW4taSsxLG89dGhpcy5fbWF4RW50cmllcztpZihoPD1vKXJldHVybiBhKGU9cCh0LnNsaWNlKGksbisxKSksdGhpcy50b0JCb3gpLGU7cnx8KHI9TWF0aC5jZWlsKE1hdGgubG9nKGgpL01hdGgubG9nKG8pKSxvPU1hdGguY2VpbChoL01hdGgucG93KG8sci0xKSkpLChlPXAoW10pKS5sZWFmPSExLGUuaGVpZ2h0PXI7dmFyIHM9TWF0aC5jZWlsKGgvbyksbD1zKk1hdGguY2VpbChNYXRoLnNxcnQobykpO2QodCxpLG4sbCx0aGlzLmNvbXBhcmVNaW5YKTtmb3IodmFyIGY9aTtmPD1uO2YrPWwpe3ZhciB1PU1hdGgubWluKGYrbC0xLG4pO2QodCxmLHUscyx0aGlzLmNvbXBhcmVNaW5ZKTtmb3IodmFyIG09ZjttPD11O20rPXMpe3ZhciBjPU1hdGgubWluKG0rcy0xLHUpO2UuY2hpbGRyZW4ucHVzaCh0aGlzLl9idWlsZCh0LG0sYyxyLTEpKX19cmV0dXJuIGEoZSx0aGlzLnRvQkJveCksZX0sci5wcm90b3R5cGUuX2Nob29zZVN1YnRyZWU9ZnVuY3Rpb24odCxpLG4scil7Zm9yKDtyLnB1c2goaSksIWkubGVhZiYmci5sZW5ndGgtMSE9PW47KXtmb3IodmFyIGU9MS8wLGE9MS8wLGg9dm9pZCAwLG89MDtvPGkuY2hpbGRyZW4ubGVuZ3RoO28rKyl7dmFyIHM9aS5jaGlsZHJlbltvXSxsPWYocyksdT0obT10LGM9cywoTWF0aC5tYXgoYy5tYXhYLG0ubWF4WCktTWF0aC5taW4oYy5taW5YLG0ubWluWCkpKihNYXRoLm1heChjLm1heFksbS5tYXhZKS1NYXRoLm1pbihjLm1pblksbS5taW5ZKSktbCk7dTxhPyhhPXUsZT1sPGU/bDplLGg9cyk6dT09PWEmJmw8ZSYmKGU9bCxoPXMpfWk9aHx8aS5jaGlsZHJlblswXX12YXIgbSxjO3JldHVybiBpfSxyLnByb3RvdHlwZS5faW5zZXJ0PWZ1bmN0aW9uKHQsaSxuKXt2YXIgcj1uP3Q6dGhpcy50b0JCb3godCksZT1bXSxhPXRoaXMuX2Nob29zZVN1YnRyZWUocix0aGlzLmRhdGEsaSxlKTtmb3IoYS5jaGlsZHJlbi5wdXNoKHQpLG8oYSxyKTtpPj0wJiZlW2ldLmNoaWxkcmVuLmxlbmd0aD50aGlzLl9tYXhFbnRyaWVzOyl0aGlzLl9zcGxpdChlLGkpLGktLTt0aGlzLl9hZGp1c3RQYXJlbnRCQm94ZXMocixlLGkpfSxyLnByb3RvdHlwZS5fc3BsaXQ9ZnVuY3Rpb24odCxpKXt2YXIgbj10W2ldLHI9bi5jaGlsZHJlbi5sZW5ndGgsZT10aGlzLl9taW5FbnRyaWVzO3RoaXMuX2Nob29zZVNwbGl0QXhpcyhuLGUscik7dmFyIGg9dGhpcy5fY2hvb3NlU3BsaXRJbmRleChuLGUsciksbz1wKG4uY2hpbGRyZW4uc3BsaWNlKGgsbi5jaGlsZHJlbi5sZW5ndGgtaCkpO28uaGVpZ2h0PW4uaGVpZ2h0LG8ubGVhZj1uLmxlYWYsYShuLHRoaXMudG9CQm94KSxhKG8sdGhpcy50b0JCb3gpLGk/dFtpLTFdLmNoaWxkcmVuLnB1c2gobyk6dGhpcy5fc3BsaXRSb290KG4sbyl9LHIucHJvdG90eXBlLl9zcGxpdFJvb3Q9ZnVuY3Rpb24odCxpKXt0aGlzLmRhdGE9cChbdCxpXSksdGhpcy5kYXRhLmhlaWdodD10LmhlaWdodCsxLHRoaXMuZGF0YS5sZWFmPSExLGEodGhpcy5kYXRhLHRoaXMudG9CQm94KX0sci5wcm90b3R5cGUuX2Nob29zZVNwbGl0SW5kZXg9ZnVuY3Rpb24odCxpLG4pe2Zvcih2YXIgcixlLGEsbyxzLGwsdSxtPTEvMCxjPTEvMCxwPWk7cDw9bi1pO3ArKyl7dmFyIGQ9aCh0LDAscCx0aGlzLnRvQkJveCkseD1oKHQscCxuLHRoaXMudG9CQm94KSx2PShlPWQsYT14LG89dm9pZCAwLHM9dm9pZCAwLGw9dm9pZCAwLHU9dm9pZCAwLG89TWF0aC5tYXgoZS5taW5YLGEubWluWCkscz1NYXRoLm1heChlLm1pblksYS5taW5ZKSxsPU1hdGgubWluKGUubWF4WCxhLm1heFgpLHU9TWF0aC5taW4oZS5tYXhZLGEubWF4WSksTWF0aC5tYXgoMCxsLW8pKk1hdGgubWF4KDAsdS1zKSksTT1mKGQpK2YoeCk7djxtPyhtPXYscj1wLGM9TTxjP006Yyk6dj09PW0mJk08YyYmKGM9TSxyPXApfXJldHVybiByfHxuLWl9LHIucHJvdG90eXBlLl9jaG9vc2VTcGxpdEF4aXM9ZnVuY3Rpb24odCxpLG4pe3ZhciByPXQubGVhZj90aGlzLmNvbXBhcmVNaW5YOnMsZT10LmxlYWY/dGhpcy5jb21wYXJlTWluWTpsO3RoaXMuX2FsbERpc3RNYXJnaW4odCxpLG4scik8dGhpcy5fYWxsRGlzdE1hcmdpbih0LGksbixlKSYmdC5jaGlsZHJlbi5zb3J0KHIpfSxyLnByb3RvdHlwZS5fYWxsRGlzdE1hcmdpbj1mdW5jdGlvbih0LGksbixyKXt0LmNoaWxkcmVuLnNvcnQocik7Zm9yKHZhciBlPXRoaXMudG9CQm94LGE9aCh0LDAsaSxlKSxzPWgodCxuLWksbixlKSxsPXUoYSkrdShzKSxmPWk7ZjxuLWk7ZisrKXt2YXIgbT10LmNoaWxkcmVuW2ZdO28oYSx0LmxlYWY/ZShtKTptKSxsKz11KGEpfWZvcih2YXIgYz1uLWktMTtjPj1pO2MtLSl7dmFyIHA9dC5jaGlsZHJlbltjXTtvKHMsdC5sZWFmP2UocCk6cCksbCs9dShzKX1yZXR1cm4gbH0sci5wcm90b3R5cGUuX2FkanVzdFBhcmVudEJCb3hlcz1mdW5jdGlvbih0LGksbil7Zm9yKHZhciByPW47cj49MDtyLS0pbyhpW3JdLHQpfSxyLnByb3RvdHlwZS5fY29uZGVuc2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBpPXQubGVuZ3RoLTEsbj12b2lkIDA7aT49MDtpLS0pMD09PXRbaV0uY2hpbGRyZW4ubGVuZ3RoP2k+MD8obj10W2ktMV0uY2hpbGRyZW4pLnNwbGljZShuLmluZGV4T2YodFtpXSksMSk6dGhpcy5jbGVhcigpOmEodFtpXSx0aGlzLnRvQkJveCl9LHJ9KTtcbiIsIi8vQHRzLWNoZWNrXG5leHBvcnQgY2xhc3MgQ2FudmFzUGx1cyB7XG5cbiAgICAvL2NoZWNrOlxuICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL2thbmdheC9mYWJyaWMuanMvXG4gICAgLy9odHRwOi8va2luZXRpY2pzLmNvbS9cbiAgICAvL2h0dHA6Ly93d3cuY3JlYXRlanMuY29tL0RvY3MvRWFzZWxKUy9jbGFzc2VzL01vdXNlRXZlbnQuaHRtbFxuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpdklkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhbnZhc0lkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNlbnRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRpdklkID0gXCJ2YWRpdlwiLCBjYW52YXNJZCA9IFwidmFjYW52YXNcIiwgY2VudGVyID0gdW5kZWZpbmVkLCBwcyA9IDEpIHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vbWFrZSBjYW52YXMgd2l0aGluIGRpdlxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICAgICAgdGhpcy5jYW52YXMuaWQgPSBjYW52YXNJZDtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcblxuICAgICAgICAvKipAdHlwZSB7T2JqZWN0fSAqL1xuICAgICAgICB0aGlzLmMyZCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvLyBnZW8gY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlciB8fCB7IHg6IHRoaXMudyAqIDAuNSwgeTogdGhpcy5oICogMC41IH1cbiAgICAgICAgLy8gem9vbSBmYWN0b3I6IHBpeGVsIHNpemUsIGluIG0vcGl4XG4gICAgICAgIHRoaXMucHMgPSBwcztcblxuICAgICAgICAvL2V4dGVudFxuICAgICAgICAvKiogQHR5cGUge3t4TWluOm51bWJlcix4TWF4Om51bWJlcix5TWluOm51bWJlcix5TWF4Om51bWJlcn19ICovXG4gICAgICAgIHRoaXMuZXh0R2VvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVwZGF0ZUV4dGVudEdlbygpXG5cbiAgICAgICAgLy9tb3VzZSBjbGljayAtIHBhblxuICAgICAgICBsZXQgbXBhbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7IG1wYW4gPSB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKG1wYW4pIHRoaXMucGFuKC1lLm1vdmVtZW50WCAqIHRoaXMucHMsIGUubW92ZW1lbnRZICogdGhpcy5wcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGUgPT4geyBtcGFuID0gZmFsc2UgfSk7XG5cbiAgICAgICAgLy9tb3VzZSB3aGVlbCAtIHpvb21cbiAgICAgICAgY29uc3QgZiA9IDEuNVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmXyA9IGUuZGVsdGFZID4gMCA/IGYgOiAxIC8gZjtcbiAgICAgICAgICAgIHRoaXMuem9vbShmXywgdGhpcy5waXhUb0dlb1goZS5vZmZzZXRYKSwgdGhpcy5waXhUb0dlb1koZS5vZmZzZXRZKSlcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiogQHJldHVybnMge3RoaXN9ICovXG4gICAgcmVkcmF3KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk92ZXJyaWRlIHJlZHJhdyBtZXRob2RcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vY29udmVyc2lvbiBmdW5jdGlvbnNcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEdlb1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZW9Ub1BpeFgoeEdlbykgeyByZXR1cm4gKHhHZW8gLSB0aGlzLmNlbnRlci54KSAvIHRoaXMucHMgKyB0aGlzLncgKiAwLjU7IH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUdlb1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZW9Ub1BpeFkoeUdlbykgeyByZXR1cm4gLSh5R2VvIC0gdGhpcy5jZW50ZXIueSkgLyB0aGlzLnBzICsgdGhpcy5oICogMC41OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgcGl4VG9HZW9YKHgpIHsgcmV0dXJuICh4IC0gdGhpcy53ICogMC41KSAqIHRoaXMucHMgKyB0aGlzLmNlbnRlci54OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgcGl4VG9HZW9ZKHkpIHsgcmV0dXJuIC0oeSAtIHRoaXMuaCAqIDAuNSkgKiB0aGlzLnBzICsgdGhpcy5jZW50ZXIueTsgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGR4R2VvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGR5R2VvXG4gICAgICovXG4gICAgcGFuKGR4R2VvLCBkeUdlbykge1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9IGR4R2VvO1xuICAgICAgICB0aGlzLmNlbnRlci55ICs9IGR5R2VvO1xuICAgICAgICB0aGlzLnVwZGF0ZUV4dGVudEdlbygpXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEdlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5R2VvXG4gICAgICovXG4gICAgem9vbShmID0gMSwgeEdlbyA9IHRoaXMuY2VudGVyLngsIHlHZW8gPSB0aGlzLmNlbnRlci55KSB7XG4gICAgICAgIHRoaXMucHMgKj0gZjtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSAoeEdlbyAtIHRoaXMuY2VudGVyLngpICogKDEgLSBmKVxuICAgICAgICB0aGlzLmNlbnRlci55ICs9ICh5R2VvIC0gdGhpcy5jZW50ZXIueSkgKiAoMSAtIGYpXG4gICAgICAgIHRoaXMudXBkYXRlRXh0ZW50R2VvKClcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWFyZ2luUHggXG4gICAgICovXG4gICAgdXBkYXRlRXh0ZW50R2VvKG1hcmdpblB4ID0gMjApIHtcbiAgICAgICAgdGhpcy5leHRHZW8gPSB7XG4gICAgICAgICAgICB4TWluOiB0aGlzLnBpeFRvR2VvWCgtbWFyZ2luUHgpLFxuICAgICAgICAgICAgeE1heDogdGhpcy5waXhUb0dlb1godGhpcy53ICsgbWFyZ2luUHgpLFxuICAgICAgICAgICAgeU1pbjogdGhpcy5waXhUb0dlb1kodGhpcy5oICsgbWFyZ2luUHgpLFxuICAgICAgICAgICAgeU1heDogdGhpcy5waXhUb0dlb1koLW1hcmdpblB4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9iamVjdCBoYXMgdG8gYmUgZHJhd25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IG9iaiBcbiAgICAgKi9cbiAgICB0b0RyYXcob2JqKSB7XG4gICAgICAgIGlmKG9iai54IDwgdGhpcy5leHRHZW8ueE1pbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZihvYmoueCA+IHRoaXMuZXh0R2VvLnhNYXgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYob2JqLnkgPCB0aGlzLmV4dEdlby55TWluKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmKG9iai55ID4gdGhpcy5leHRHZW8ueU1heCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiIsIi8vQHRzLWNoZWNrXG5cbi8vc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VybmVyL3JidXNoXG5pbXBvcnQgUkJ1c2ggZnJvbSAncmJ1c2gnO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGF0aWFsSW5kZXgge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNsYXNzIE15UkJ1c2ggZXh0ZW5kcyBSQnVzaCB7XG4gICAgICAgICAgICAvKiogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBvYmogICovXG4gICAgICAgICAgICB0b0JCb3gob2JqKSB7IHJldHVybiB7IG1pblg6IG9iai54LCBtaW5ZOiBvYmoueSwgbWF4WDogb2JqLngsIG1heFk6IG9iai55IH07IH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBhIFxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBiIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb21wYXJlTWluWChhLCBiKSB7IHJldHVybiBhLnggLSBiLng7IH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBhIFxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBiIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb21wYXJlTWluWShhLCBiKSB7IHJldHVybiBhLnkgLSBiLnk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7TXlSQnVzaH0gKi9cbiAgICAgICAgdGhpcy50cmVlID0gbmV3IE15UkJ1c2goKTtcbiAgICB9XG5cbiAgICAvL1RPRE8gYnVsayBpbnNlcnQgYW5kIHJlbW92ZSA/XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtYXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1heFxuICAgICAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAgICAgKi9cbiAgICBnZXQoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLnNlYXJjaCh7XG4gICAgICAgICAgICBtaW5YOiB4bWluLFxuICAgICAgICAgICAgbWluWTogeW1pbixcbiAgICAgICAgICAgIG1heFg6IHhtYXgsXG4gICAgICAgICAgICBtYXhZOiB5bWF4XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICovXG4gICAgaW5zZXJ0KG9iaikge1xuICAgICAgICB0aGlzLnRyZWUuaW5zZXJ0KG9iaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKi9cbiAgICByZW1vdmUob2JqKSB7XG4gICAgICAgIHRoaXMudHJlZS5yZW1vdmUob2JqKVxuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7T2JqZWN0Ljw/LCBUPn0gb2JqXG4gKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICovXG5leHBvcnQgY29uc3Qgb2JqVG9BcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5LjxUPn0gYXJyXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtib29sZWFufSBtc2cgXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCBvYmosIG1zZyA9IHRydWUpIHtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihvYmopO1xuICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBlbHNlXG4gICAgICAgIGlmIChtc2cpIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byByZW1vdmUgZWxlbWVudCBub3QgcHJlc2VudCBpbiBhcnJheS5cIik7XG59O1xuXG4vKipcbiAqIFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBhcnJcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBvYmpzIFxuICogQHBhcmFtIHtib29sZWFufSBtc2cgXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQXJyYXlTID0gZnVuY3Rpb24gKGFyciwgb2JqcywgbXNnID0gdHJ1ZSkge1xuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKVxuICAgICAgICByZW1vdmVGcm9tQXJyYXkoYXJyLCBvYmosIG1zZylcbn07XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU2VhIH0gZnJvbSBcIi4vU2VhXCJcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tIFwiLi4vYmFzZS9DYW52YXNQbHVzXCJcblxuLyoqICovXG5leHBvcnQgY2xhc3MgU2FyZGluIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2VhfSBzZWEgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2eSBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWEsIHggPSBzZWEudyAqIE1hdGgucmFuZG9tKCksIHkgPSBzZWEuaCAqIE1hdGgucmFuZG9tKCksIHZ4ID0gdW5kZWZpbmVkLCB2eSA9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7U2VhfSAqL1xuICAgICAgICB0aGlzLnNlYSA9IHNlYTtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4IDwgMCA/IDAgOiB4ID4gc2VhLncgPyBzZWEudyA6IHhcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCAwID8gMCA6IHkgPiBzZWEuaCA/IHNlYS5oIDogeVxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSAwO1xuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgaWYgKCF2eCAmJiAhdnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICAgICAgdGhpcy52eSA9IHZ5O1xuICAgICAgICAgICAgdGhpcy52ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgICAgICAgdGhpcy52YSA9IE1hdGguYXRhbjIodnksIHZ4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmF4ID0gMFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5heSA9IDBcblxuICAgICAgICAvL2FkZCB0byBzcGF0aWFsIGluZGV4XG4gICAgICAgIHRoaXMuc2VhLmdyaWQuaW5zZXJ0KHRoaXMpXG5cbiAgICAgICAgLy9saXN0IG9mIHNhcmRpbnMgaW4gdmlzaW9uIGZpZWxkXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMub2JzID0gW11cbiAgICAgICAgLy9saXN0IG9mIHNhcmRpbnMgaW4gY29sbGlzaW9uIGZpZWxkXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMuY29sID0gW11cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldCByYW5kb20gc3BlZWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICB0aGlzLnZhID0gMiAqIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICB0aGlzLnYgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnYgKiBNYXRoLmNvcyh0aGlzLnZhKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudiAqIE1hdGguc2luKHRoaXMudmEpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgb2JzZXJ2ZSgpIHtcblxuICAgICAgICAvL2luaXRpYWxpc2UgbGlzdHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5vYnMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5jb2wgPSBbXTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGFyb3VuZCB1c2luZyBzcGF0aWFsIGluZGV4XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIGNvbnN0IHNzID0gdGhpcy5zZWEuZ3JpZC5nZXQodGhpcy54IC0gdGhpcy5zZWEuRF9PQlMsIHRoaXMueSAtIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnggKyB0aGlzLnNlYS5EX09CUywgdGhpcy55ICsgdGhpcy5zZWEuRF9PQlMpO1xuXG4gICAgICAgIC8vZ2V0IHNhcmRpbnMgaW4gb2JzZXJ2YXRpb24gYW5kIGNvbGxpc2lvbiBmaWVsZHNcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgaWYgKHMgPT0gdGhpcykgY29udGludWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kKHMpIDw9IHRoaXMuc2VhLkRfQ09MKSB0aGlzLmNvbC5wdXNoKHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChzKSA8PSB0aGlzLnNlYS5EX09CUykge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgYW5nbGVcbiAgICAgICAgICAgICAgICBsZXQgZGEgPSBNYXRoLmF0YW4yKHMueSAtIHRoaXMueSwgcy54IC0gdGhpcy54KSAtIHRoaXMudmE7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gTWF0aC5QSSkgZGEgLT0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGEgPD0gLU1hdGguUEkpIGRhICs9IDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGRhID0gTWF0aC5hYnMoZGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYSA+IHRoaXMuc2VhLkFfT0JTICogMC41KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9icy5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pbml0aWFsaXNlIGFjY2VsZXJhdGlvblxuICAgICAgICB0aGlzLmF4ID0gMDsgdGhpcy5heSA9IDA7XG5cbiAgICAgICAgLy9jb2xsaXNpb246IHJlcHVsc2lvblxuICAgICAgICBmb3IgKGxldCBzIG9mIHRoaXMuY29sKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kKHMpO1xuICAgICAgICAgICAgY29uc3QgYSA9IDEuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAodGhpcy5zZWEuRF9DT0wgKiB0aGlzLnNlYS5EX0NPTCkpO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIHMueCkgLyBkO1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIHMueSkgLyBkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG93YXJkIHYgdGFyZ2V0XG4gICAgICAgIGNvbnN0IGR2ID0gKHRoaXMuc2VhLlZfVEFSR0VUIC0gdGhpcy52KSAqIDAuMDE7XG4gICAgICAgIHRoaXMuYXggKz0gZHYgKiB0aGlzLnZ4IC8gdGhpcy52O1xuICAgICAgICB0aGlzLmF5ICs9IGR2ICogdGhpcy52eSAvIHRoaXMudjtcblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgbWVhbiBwb3NpdGlvblxuICAgICAgICAvKmlmKG9icy5zaXplKCk+MSl7XG4gICAgICAgICAgICBkb3VibGUgeG49MCx5bj0wO1xuICAgICAgICAgICAgZm9yKFNhcmRpbiBzOm9icyl7XG4gICAgICAgICAgICAgICAgeG4rPXMueDtcbiAgICAgICAgICAgICAgICB5bis9cy55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeG49eG4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIHluPXluL29icy5zaXplKCk7XG4gICAgICAgICAgICBkb3VibGUgZD1NYXRoLmh5cG90KHhuLXgseW4teSk7XG4gICAgICAgICAgICBheCs9LTAuMSooeC14bikvZDtcbiAgICAgICAgICAgIGF5Kz0tMC4xKih5LXluKS9kO1xuICAgICAgICB9Ki9cblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgc3BlZWRcbiAgICAgICAgY29uc3QgdCA9IDAuOTtcbiAgICAgICAgaWYgKHRoaXMub2JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBkdnggPSAwLCBkdnkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgICAgIGR2eCArPSBzLnZ4O1xuICAgICAgICAgICAgICAgIGR2eSArPSBzLnZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHZ4ID0gKHQgLSAxKSAqIHRoaXMudnggKyAoMSAtIHQpICogZHZ4IC8gdGhpcy5vYnMubGVuZ3RoO1xuICAgICAgICAgICAgZHZ5ID0gKHQgLSAxKSAqIHRoaXMudnkgKyAoMSAtIHQpICogZHZ5IC8gdGhpcy5vYnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBjb25zdCBhID0gMC4xO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogZHZ4O1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogZHZ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hdm9pZCBzaGFya1xuICAgICAgICBpZiAodGhpcy5zZWEuc2hhcmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc2VhLnNoYXJrO1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHMueCAtIHRoaXMueCksIChzLnkgLSB0aGlzLnkpKTtcbiAgICAgICAgICAgIGlmIChkIDw9IHRoaXMuc2VhLkRfT0JTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IDUuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAodGhpcy5zZWEuRF9PQlMgKiB0aGlzLnNlYS5EX09CUykpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqICh0aGlzLnggLSBzLngpIC8gZDtcbiAgICAgICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gcy55KSAvIGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgbW92ZSh0aW1lU3RlcE1zID0gMTApIHtcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5yZW1vdmUodGhpcyk7XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IHRoaXMuYXggKiB0aW1lU3RlcE1zICsgKDEgLSAyICogTWF0aC5yYW5kb20oKSkgKiAwLjAyO1xuICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuYXkgKiB0aW1lU3RlcE1zICsgKDEgLSAyICogTWF0aC5yYW5kb20oKSkgKiAwLjAyO1xuICAgICAgICB0aGlzLnYgPSBNYXRoLmh5cG90KHRoaXMudngsIHRoaXMudnkpO1xuICAgICAgICB0aGlzLnZhID0gTWF0aC5hdGFuMih0aGlzLnZ5LCB0aGlzLnZ4KTtcbiAgICAgICAgaWYgKHRoaXMudiA+IHRoaXMuc2VhLlZfTUFYKSB7XG4gICAgICAgICAgICB0aGlzLnYgPSB0aGlzLnNlYS5WX01BWDtcbiAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnNlYS5WX01BWCAqIE1hdGguY29zKHRoaXMudmEpO1xuICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMuc2VhLlZfTUFYICogTWF0aC5zaW4odGhpcy52YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHBvc2l0aW9uXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vbGltaXRcbiAgICAgICAgaWYgKHRoaXMueCA8IDApIHRoaXMueCA9IHRoaXMuc2VhLnc7XG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB0aGlzLnkgPSB0aGlzLnNlYS5oO1xuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5zZWEudykgdGhpcy54ID0gMDtcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuc2VhLmgpIHRoaXMueSA9IDA7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5pbnNlcnQodGhpcyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NhcmRpbn0gcyBcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdG8gYW5vdGhlciBzYXJkaW4uXG4gICAgICovXG4gICAgZChzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KChzLnggLSB0aGlzLngpLCAocy55IC0gdGhpcy55KSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IGEgc2FyZGluIGJvZHlcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggXG4gICAgICovXG4gICAgZGlzcGxheShjcCwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmZsb29yKDI1NSAqIE1hdGguYWJzKHRoaXMudmEpIC8gTWF0aC5QSSk7XG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJyZ2IoMjU1LCAyNTUsIFwiICsgYyArIFwiKVwiXG4gICAgICAgIGNvbnN0IGEgPSBsZW5ndGggLyB0aGlzLnY7XG4gICAgICAgIGNvbnN0IGR4ID0gYSAqIHRoaXMudnggKiAwLjU7XG4gICAgICAgIGNvbnN0IGR5ID0gYSAqIHRoaXMudnkgKiAwLjU7XG5cbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54IC0gZHgpLCBjcC5nZW9Ub1BpeFkodGhpcy55IC0gZHkpKTtcbiAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WCh0aGlzLnggKyBkeCksIGNwLmdlb1RvUGl4WSh0aGlzLnkgKyBkeSkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLyoqIERpc3BsYXkgc2FyZGluIHZpc2lvbiBmaWVsZCAqL1xuICAgIGRpc3BsYXlWaXNpb25GaWVsZChjcCwgZmlsbFN0eWxlLCBsaW5lV2lkdGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgYzIuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgLy9UT0RPIGNvcnJlY3QgdGhhdCAhXG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMuc2VhLkRfT0JTIC8gY3AucHMsXG4gICAgICAgICAgICBNYXRoLlBJIC0gdGhpcy52YSArIHRoaXMuc2VhLkFfT0JTICogMC41LCBNYXRoLlBJIC0gdGhpcy52YSAtIHRoaXMuc2VhLkFfT0JTICogMC41KTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTtcbiAgICB9XG5cbiAgICAvKiogRGlzcGxheSBzYXJkaW4gdmlzaW9uIGxpbmtzICovXG4gICAgZGlzcGxheVZpc2lvbkxpbmtzKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgZm9yIChsZXQgc2EyIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSkpO1xuICAgICAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WChzYTIueCksIGNwLmdlb1RvUGl4WShzYTIueSkpO1xuICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBEaXNwbGF5IHNhcmRpbiBjb2xsaXNpb24gZmllbGQgKi9cbiAgICBkaXNwbGF5Q29sbGlzaW9uRmllbGQoY3AsIHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5zZWEuRF9DT0wgKiAwLjUgLyBjcC5wcywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU2FyZGluIH0gZnJvbSAnLi9TYXJkaW4nO1xuaW1wb3J0IHsgU3BhdGlhbEluZGV4IH0gZnJvbSAnLi4vYmFzZS9TcGF0aWFsSW5kZXgnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG5leHBvcnQgY2xhc3MgU2VhIHtcblxuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL1RPRE8gc2hvdWxkIGJlY29tZSBzdGF0aWMgYXR0cmlidXRlcyBvZiBTYXJkaW4gY2xhc3NcblxuICAgICAgICAvL29ic2VydmF0aW9uXG4gICAgICAgIHRoaXMuRF9PQlMgPSA1MFxuICAgICAgICB0aGlzLkFfT0JTID0gMjAwICogTWF0aC5QSSAvIDE4MFxuXG4gICAgICAgIC8vY29sbGlzaW9uXG4gICAgICAgIHRoaXMuRF9DT0wgPSAxMFxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgdGhpcy5WX1RBUkdFVCA9IDAuM1xuICAgICAgICB0aGlzLlZfTUFYID0gMC42XG5cblxuICAgICAgICAvL3NoYXJrXG4gICAgICAgIHRoaXMuRF9TSEFSS19FQVQgPSAxMlxuICAgICAgICB0aGlzLkVBVEVOX1NBUkRJTl9OQiA9IDBcblxuXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIHRoaXMuaCA9IGg7XG4gICAgICAgIC8qKiBAdHlwZSB7U3BhdGlhbEluZGV4LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgU3BhdGlhbEluZGV4KCk7XG5cbiAgICAgICAgdGhpcy5maXNoID0gW11cblxuICAgICAgICB0aGlzLnNoYXJrID0gbnVsbDtcbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cblxuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IHNhIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIHNhLm9ic2VydmUoKTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgc2Egb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgc2EubW92ZSgpO1xuXG4gICAgICAgIC8vc2hhcmsgZWF0IGZpc2hcbiAgICAgICAgdGhpcy5zaGFya0VhdCgpO1xuICAgIH1cblxuXG5cbiAgICBzaGFya0VhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLmdyaWQuZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkVBVEVOX1NBUkRJTl9OQiArPSB0aGlzLmtpbGxlZC5sZW5ndGg7XG4gICAgICAgIC8vZWF0ZW5GaXNoTmIuc2V0VGV4dChcIkVhdGVuIGZpc2g6IFwiICsgRUFURU5fU0FSRElOX05CKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqIEFkZCBhIG51bWJlciBvZiBmaXNoICovXG4gICAgYWRkRmlzaChuYiA9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKVxuICAgICAgICAgICAgdGhpcy5maXNoLnB1c2gobmV3IFNhcmRpbih0aGlzKSk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFNldCByYW5kb20gc3BlZWQgZm9yIGFsbCBmaXNoICovXG4gICAgc2V0UmFuZG9tU3BlZWQoKSB7XG4gICAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgZi5zZXRSYW5kb21TcGVlZCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU2VhIH0gZnJvbSAnLi9TZWEnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvQ2FudmFzUGx1cyc7XG5cbmNsYXNzIEZpc2hTaW11bGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9UT0RPXG4gICAgICAgIC8vYWRkIGVhdGVuIGZpc2ggbmIgbGFiZWxcblxuICAgICAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cyhvcHRzLmRpdklkLCBcInZhY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuICAgICAgICB0aGlzLnNob3dGaXNoVmlzaW9uRmllbGQgPSBmYWxzZVxuICAgICAgICB0aGlzLnNob3dGaXNoVmlzaW9uTGlua3MgPSBmYWxzZVxuICAgICAgICB0aGlzLnNob3dGaXNoQ29sbGlzaW9uRmllbGQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG4gICAgICAgICAgICBjb25zdCBzID0gdGguc2VhXG5cbiAgICAgICAgICAgIC8vY2xlYXJcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgxMjAsMTIwLDI1NSwwLjYpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkZpZWxkKHRoaXMsIFwicmdiYSgyMDAsMjAwLDIwMCwwLjE1KVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBsaW5rc1xuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uTGlua3MpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkxpbmtzKHRoaXMsIFwicmdiYSgyNTUsMTAwLDEwMCwwLjMpXCIsIDEpXG4gICAgICAgICAgICAvL3Nob3cgY29sbGlzaW9uIGZpZWxkXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hDb2xsaXNpb25GaWVsZClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhzYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5Q29sbGlzaW9uRmllbGQodGhpcywgXCJwdXJwbGVcIiwgMSlcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2FyZGluc1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMiAvIHRoaXMucHNcbiAgICAgICAgICAgIGNvbnN0IHNhcmRpbkxlbmd0aCA9IDdcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5KHRoaXMsIHNhcmRpbkxlbmd0aClcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2hhcmtcbiAgICAgICAgICAgIGlmIChzLnNoYXJrICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDQgLyB0aGlzLnBzXG4gICAgICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJrTGVuZ3RoID0gMTIgLyB0aGlzLnBzXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzaGFya0xlbmd0aCAqIE1hdGguY29zKHMuc2hhcmsuYW5nbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc2hhcmtMZW5ndGggKiBNYXRoLnNpbihzLnNoYXJrLmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzLnNoYXJrLngpLCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpKTtcbiAgICAgICAgICAgICAgICBjMi5saW5lVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSAtIGR4LCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpIC0gZHkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYmxvb2Qgc3BvdFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDFcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIubW92ZVRvKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSk7XG4gICAgICAgICAgICAgICAgYzIuYXJjKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCkgLSAzLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpIC0gMywgdGgudyAvIHRoaXMucHMgKyAzLCB0aC5oIC8gdGhpcy5wcyArIDMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZSA9PiB7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSB7IHg6IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpLCB5OiB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKSwgYW5nbGU6IDAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhHID0gdGguY3BsdXMucGl4VG9HZW9YKGUub2Zmc2V0WCk7XG4gICAgICAgICAgICBjb25zdCB5RyA9IHRoLmNwbHVzLnBpeFRvR2VvWShlLm9mZnNldFkpO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKC15RyArIHRoLnNlYS5zaGFyay55LCB4RyAtIHRoLnNlYS5zaGFyay54KTtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IHsgeDogeEcsIHk6IHlHLCBhbmdsZTogYW5nbGUgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0gbnVsbDtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKiogQHR5cGUge1NlYX0gKi9cbiAgICAgICAgdGhpcy5zZWEgPSBuZXcgU2VhKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgaW5pdFJhbmRvbShuYiA9IDE1MDApIHtcbiAgICAgICAgdGhpcy5zZWEuYWRkRmlzaChuYik7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuc2VhLnN0ZXAodGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gKi9cbmV4cG9ydCBjb25zdCBmaXNoID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEZpc2hTaW11bGF0aW9uKG9wdHMpXG59XG4iLCIvL0B0cy1jaGVja1xuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgQ2VsbCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbmI9MCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5uYiA9IG5iXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgb2JqVG9BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL0NhbnZhc1BsdXMnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5cbi8qKlxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsQ2VsbD59ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge0NlbGx8bnVsbH1cbiAgICAgKi9cbiAgICBhZGQoeCwgeSkge1xuXG4gICAgICAgIC8vZmluZCBjZWxsIGF0IGxvY2F0aW9uXG4gICAgICAgIC8qKkB0eXBlIHtzdHJpbmd9Ki9cbiAgICAgICAgY29uc3QgaWQgPSB4ICsgXCJfXCIgKyB5O1xuICAgICAgICBpZiAodGhpcy5wb3B1bGF0aW9uSVtpZF0pIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgIC8qKkB0eXBlIHtDZWxsfSAqL1xuICAgICAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoeCwgeSwgMClcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goY2VsbClcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtpZF0gPSBjZWxsXG4gICAgICAgIHJldHVybiBjZWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RlcCgpIHtcblxuICAgICAgICAvL1RPRE8gZG91YmxlIGluZGV4aW5nPyBieSByYXcgYW5kIHRoZW4gY29sdW1uID9cbiAgICAgICAgLy9wb3B1bGF0ZSBjZWxsIHN1cnJvdW5kaW5nc1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3Qgc3VySSA9IHt9O1xuICAgICAgICAvL2dvIHRocm91Z2ggbGlzdCBvZiBjZWxsc1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgLy8gKzEgc3Vycm91bmRpbmcgY2VsbHNcbiAgICAgICAgICAgIGNvbnN0IHNycyA9IFVuaXZlcnNlLmdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB0aGlzKTtcbiAgICAgICAgICAgIGZvciAobGV0IHN1ciBvZiBzcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VyXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3VyXykge1xuICAgICAgICAgICAgICAgICAgICBzdXJfLm5iKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyLm5iID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3VySVtrZXldID0gc3VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQjMvUzIzXG4gICAgICAgIC8va2lsbCBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXAgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwSSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2VsbC54ICsgXCJfXCIgKyBjZWxsLnk7XG4gICAgICAgICAgICBjb25zdCBjZWxsXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgIGlmICghY2VsbF8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy9pZiAobmI8MiBvciBuYj4zKSAtPiBraWxsXG4gICAgICAgICAgICBpZiAoY2VsbF8ubmIgPCAyIHx8IGNlbGxfLm5iID4gMykgY29udGludWU7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcC5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXBJW2tleV0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IGNlbGxzVG9LZWVwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0gY2VsbHNUb0tlZXBJO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3Qgc3VycyA9IG9ialRvQXJyYXkoc3VySSk7XG4gICAgICAgIGZvciAobGV0IHN1ciBvZiBzdXJzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdXIubmIgIT09IDMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGFscmVhZHkgYWxpdmVcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtrZXldO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goc3VyKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbklba2V5XSA9IHN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TVNcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwbHVzXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RhcnQobmIsIHRpbWVvdXRNUywgY3BsdXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB1bmkgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgdW5pLnN0ZXAoKTtcbiAgICAgICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iID4gMCAmJiBpKysgPiBuYikgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIHRpbWVvdXRNUyk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NlbGx9IGNlbGxcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1bmlcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48Q2VsbD59XG4gICAgICovXG4gICAgc3RhdGljIGdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB1bmkpIHtcbiAgICAgICAgY29uc3QgeDEgPSBjZWxsLnggPT09IDAgPyB1bmkudyAtIDEgOiBjZWxsLnggLSAxO1xuICAgICAgICBjb25zdCB4MiA9IGNlbGwueCA9PT0gdW5pLncgLSAxID8gMCA6IGNlbGwueCArIDE7XG4gICAgICAgIGNvbnN0IHkxID0gY2VsbC55ID09PSAwID8gdW5pLmggLSAxIDogY2VsbC55IC0gMTtcbiAgICAgICAgY29uc3QgeTIgPSBjZWxsLnkgPT09IHVuaS5oIC0gMSA/IDAgOiBjZWxsLnkgKyAxO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IENlbGwoeDEsIHkxKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgxLCBjZWxsLnkpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDEsIHkyKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKGNlbGwueCwgeTEpLFxuICAgICAgICAgICAgbmV3IENlbGwoY2VsbC54LCB5MiksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MiwgeTEpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDIsIGNlbGwueSksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MiwgeTIpLFxuICAgICAgICBdO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL0NhbnZhc1BsdXMnO1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tICcuL1VuaXZlcnNlJztcblxuLy9UT0RPIHpvb20vcGFuLCB3aXRoIGNhbnZhcyB0cmFuc2Zvcm06IGJldHRlciB1bml2ZXJzZSBsaW1pdHNcbi8vVE9ETyBidXR0b25zIChwbGF5LCBzdG9wLCBzcGVlZCwgZHJhdywgcGFuKVxuLy9UT0RPIGNoZWNrIGNhbnZhcyBhbmltYXRpb25cblxuXG5jbGFzcyBHb0xTaW11bGF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kcmF3IGNlbGxzXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGgudW5pLnBvcHVsYXRpb24pXG4gICAgICAgICAgICAgICAgYzIuZmlsbFJlY3QodGhpcy5nZW9Ub1BpeFgoY2VsbC54KSwgdGhpcy5nZW9Ub1BpeFkoY2VsbC55KSwgMSAvIHRoaXMucHMsIDEgLyB0aGlzLnBzKTtcblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImxpZ2h0Z3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKGRlbnNpdHkgPSAwLjA1KSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IG5iID0gdGhpcy51bmkudyAqIHRoaXMudW5pLmggKiBkZW5zaXR5O1xuICAgICAgICB3aGlsZSAoaSA8IG5iKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS53ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy51bmkuYWRkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8vXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudW5pLnN0YXJ0KC0xLCAwLCB0aGlzLmNwbHVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IGdhbWVPZkxpZmUgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgR29MU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcblxuZXhwb3J0ICogZnJvbSBcIi4vcGxhbmV0cy9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb2wvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlzaC9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcC9pbmRleFwiXG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tIFwiLi9Vbml2ZXJzZVwiO1xuaW1wb3J0IHtDYW52YXNQbHVzfSBmcm9tIFwiLi4vYmFzZS9DYW52YXNQbHVzXCJcblxuZXhwb3J0IGNsYXNzIFBsYW5ldCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1IFRoZSB1bml2ZXJzZSB0aGUgcGxhbmV0IGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIG1hc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ4IFRoZSBzcGVlZCB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFRoZSBzcGVlZCB5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm0gPSBtO1xuXG4gICAgICAgIC8vY29tcHV0ZSByYWRpdXNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcblxuICAgICAgICAvL3NldCBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IHIgPyByIDogeCA+IHUudyAtIHIgPyB1LncgLSByIDogeDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCByID8gciA6IHkgPiB1LmggLSByID8gdS5oIC0gciA6IHk7XG5cbiAgICAgICAgLy9zZXQgc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSB2eTtcblxuICAgICAgICAvL3NldCBmb3JjZVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ5ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGZvcmNlLCBiYXNlZCBvbiB0aGUgZ3Jhdml0eSBvZiBvdGhlciBwbGFuZXRzLlxuICAgICAqL1xuICAgIG9ic2VydmUoKSB7XG5cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIHRoaXMuZnkgPSAwO1xuXG4gICAgICAgIC8vY2hlY2sgYWxsIG90aGVyIHBsYW5ldHMgaW4gdGhlIHVuaXZlcnNlXG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy51LnBzKSB7XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NvbXB1dGUgYW5kIGFkZCBncmF2aXR5IGZvcmNlXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5kKHApO1xuICAgICAgICAgICAgaWYgKGQgPT09IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGQgPSBkICogZCAqIGQ7XG4gICAgICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmZ5ICs9IDAuMDEgKiAocC55IC0gdGhpcy55KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIHRoZSBwbGFuZXQgcC5cbiAgICAgKi9cbiAgICBkKHApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR4ID0gcC54IC0gdGhpcy54O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgcGxhbmV0LCBkZXBlbmRpbmcgb24gaXRzIG1hc3MuXG4gICAgICovXG4gICAgcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMubSAvIE1hdGguUEksIDAuNSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBib3VuY2UgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZtYXggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgY2hhbmdlKGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCB0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL2NvbXB1dGUgYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheCA9IHRoaXMuZnggLyB0aGlzLm07XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IGF4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSArPSBheSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9jaGVjayB2bWF4XG4gICAgICAgIGlmICh2bWF4ID4gMCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5zcXJ0KHRoaXMudnggKiB0aGlzLnZ4ICsgdGhpcy52eSAqIHRoaXMudnkpO1xuICAgICAgICAgICAgaWYgKHYgPiB2bWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IHZtYXggKiB0aGlzLnZ4IC8gdjtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdm1heCAqIHRoaXMudnkgLyB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IG54ID0gdGhpcy54ICsgdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBsZXQgbnkgPSB0aGlzLnkgKyB0aGlzLnZ5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2hhbmRsZSBwb3NpdGlvbiBsaW1pdFxuICAgICAgICBpZiAoYm91bmNlKSB7XG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG4gICAgICAgICAgICBjb25zdCBlID0gMTtcbiAgICAgICAgICAgIGlmIChueCA8IHIpIHsgbnggPSByOyB0aGlzLnZ4ID0gLXRoaXMudnggKiBlOyB9XG4gICAgICAgICAgICBpZiAobnkgPCByKSB7IG55ID0gcjsgdGhpcy52eSA9IC10aGlzLnZ5ICogZTsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncgLSByKSB7IG54ID0gdGhpcy51LncgLSByOyB0aGlzLnZ4ID0gLXRoaXMudnggKiBlOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCAtIHIpIHsgbnkgPSB0aGlzLnUuaCAtIHI7IHRoaXMudnkgPSAtdGhpcy52eSAqIGU7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChueCA8IDApIHsgbnggPSB0aGlzLnUudzsgfVxuICAgICAgICAgICAgaWYgKG55IDwgMCkgeyBueSA9IHRoaXMudS5oOyB9XG4gICAgICAgICAgICBpZiAobnggPiB0aGlzLnUudykgeyBueCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChueSA+IHRoaXMudS5oKSB7IG55ID0gMDsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9tb3ZlIHBsYW5ldFxuICAgICAgICB0aGlzLnUubW92ZSh0aGlzLCBueCwgbnkpXG4gICAgfVxuXG5cbiAgICAvKiogXG4gICAgKiBTZXQgcmFuZG9tIHNwZWVkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICovXG4gICAgc2V0UmFuZG9tU3BlZWQobWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMudnggPSBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICB0aGlzLnZ5ID0gc3BlZWQgKiBNYXRoLnNpbihhbmdsZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHBsYW5ldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3AgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGxTdHlsZSBcbiAgICAgKi9cbiAgICBkaXNwbGF5KGNwLCBmaWxsU3R5bGUpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgYzIuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5yKCkgLyBjcC5wcywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuZmlsbCgpO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IFNwYXRpYWxJbmRleCB9IGZyb20gJy4uL2Jhc2UvU3BhdGlhbEluZGV4JztcbmltcG9ydCB7IFBsYW5ldCB9IGZyb20gJy4vUGxhbmV0JztcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG5cbiAgICAgICAgLyoqIEB0eXBlIHtTcGF0aWFsSW5kZXguPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBTcGF0aWFsSW5kZXgoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBtYXNzIG9mIHRoZSB1bml2ZXJzZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbSgpIHtcbiAgICAgICAgbGV0IG0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBtICs9IHAubTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeSBcbiAgICAgKiBAcmV0dXJucyB7UGxhbmV0fVxuICAgICAqL1xuICAgIGNyZWF0ZVBsYW5ldChtLCB4LCB5LCBzeCA9IDAsIHN5ID0gMCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldCh0aGlzLCBtLCB4LCB5LCBzeCwgc3kpO1xuICAgICAgICB0aGlzLmFkZChwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAgXG4gICAgICovXG4gICAgYWRkKHApIHtcbiAgICAgICAgcC51ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcy5wdXNoKHApO1xuICAgICAgICB0aGlzLmdyaWQuaW5zZXJ0KHApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHBsYW5ldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwIFxuICAgICAqL1xuICAgIHJlbW92ZShwKSB7XG4gICAgICAgIHAudSA9IG51bGw7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBwKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnlcbiAgICAgKi9cbiAgICBtb3ZlKHAsIG54LCBueSkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlKHApO1xuICAgICAgICBwLnggPSBueDsgcC55ID0gbnk7XG4gICAgICAgIHRoaXMuZ3JpZC5pbnNlcnQocCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWdncmVnYXRlIHR3byBwbGFuZXRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAxXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAyXG4gICAgICogQHJldHVybnMge1BsYW5ldH1cbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUocDEsIHAyKSB7XG4gICAgICAgIGNvbnN0IG0gPSBwMS5tICsgcDIubTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlUGxhbmV0KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ5ICogcDEubSArIHAyLnZ5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHAxKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDIpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3JcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFBsYW5ldD59XG4gICAgICovXG4gICAgZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHBpIG9mIHRoaXMucHMpIHtcblxuICAgICAgICAgICAgY29uc3QgdyA9IDIgKiBwaS5yKCk7XG4gICAgICAgICAgICBjb25zdCBjYW5kID0gdGhpcy5ncmlkLmdldChwaS54IC0gdywgcGkueSAtIHcsIHBpLnggKyB3LCBwaS55ICsgdyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBqIG9mIGNhbmQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChwaSA9PSBwaikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMSA9IHBpLmQocGopO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQyID0gKHBpLnIoKSArIHBqLnIoKSkgKiBjb2xsaXNpb25GYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcGksIHBqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIHBsYW5ldHMgd2l0aCByYW5kb20gc3BlZWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGFkZFBsYW5ldHMobmIgPSAxLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBsYW5ldChtaSwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBwLnNldFJhbmRvbVNwZWVkKG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2bWF4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3IgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RlcChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICAvL2ZpbmQgZmlyc3QgY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIGxldCBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSlcbiAgICAgICAgICAgIC8vZmluZCBuZXh0IGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbiByYW5kb20gc3BlZWQgdG8gYWxsIHBsYW5ldHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5zZXRSYW5kb21TcGVlZChtaW5TcGVlZCwgbWF4U3BlZWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1BsYW5ldH0gVGhlIGxhcmdlc3QgcGxhbmV0IG9mIHRoZSB1bml2ZXJzZSwgdXN1YWxseSB0aGUgc3Rhci5cbiAgICAgKi9cbiAgICBnZXRMYXJnZXN0UGxhbmV0KCkge1xuICAgICAgICBsZXQgcE0gPSBudWxsLCBtTSA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIGlmIChwLm0gPiBtTSkgeyBwTSA9IHA7IG1NID0gcC5tIH1cbiAgICAgICAgcmV0dXJuIHBNXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGxhcmdlc3QgcGxhbmV0IGFuZCBleHBsb2RlIGl0LlxuICAgICAqL1xuICAgIGV4cGxvZGVMYXJnZXN0UGxhbmV0KCkge1xuICAgICAgICBjb25zdCBwID0gdGhpcy5nZXRMYXJnZXN0UGxhbmV0KClcbiAgICAgICAgdGhpcy5leHBsb2RlKHApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwbG9kZSBhIHBsYW5ldCBpbnRvIHBpZWNlc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWQgXG4gICAgICovXG4gICAgZXhwbG9kZShwLCBuYiA9IC0xLCBtaW5TcGVlZCA9IDAuOCwgbWF4U3BlZWQgPSAxLjUsIHJhZCA9IC0xKSB7XG4gICAgICAgIGlmIChuYiA8PSAwKSBuYiA9IE1hdGguZmxvb3IocC5tKTtcbiAgICAgICAgaWYgKG5iIDw9IDApIHJldHVybjtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMiAqIE1hdGguUEkgLyBuYjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICAvL2NyZWF0ZSBwbGFuZXRcblxuICAgICAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICAgICAgaWYgKHJhZCA8IDApIHJhZCA9IDIgKiBwLnIoKVxuICAgICAgICAgICAgY29uc3QgZCA9IHJhZCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBjb25zdCBhID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgIGNvbnN0IHggPSBkICogTWF0aC5jb3MoYSksIHkgPSBkICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIC8vc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgY29uc3QgYVMgPSBhICsgMiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gc3BlZWQgKiBNYXRoLmNvcyhhUyksIHN5ID0gc3BlZWQgKiBNYXRoLnNpbihhUyk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxhbmV0KHAubSAvIG5iLCBwLnggKyB4LCBwLnkgKyB5LCBwLnZ4ICsgc3gsIHAudnkgKyBzeSlcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBwIGZyb20gdW5pdmVyc2VcbiAgICAgICAgdGhpcy5yZW1vdmUocClcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvQ2FudmFzUGx1cyc7XG5cbi8qKiAgKi9cbmNsYXNzIFBsYW5ldFNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5kaXZJZCA9IG9wdHMuZGl2SWQgfHwgXCJ2YWRpdlwiO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZGl2SWQpO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gb3B0cy53IHx8IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IG9wdHMuaCB8fCBkaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Q2FudmFzUGx1c30gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBDYW52YXNQbHVzKG9wdHMuZGl2SWQsIFwidmFjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG5cbiAgICAgICAgICAgIC8vY2xlYXIsIHdpdGggdHJhbnNwYXJlbmN5XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4wNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgcGxhbmV0c1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiB0aC51bmkucHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudG9EcmF3KHApKSBjb250aW51ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBwLm0gLyB0aC51bmkubSgpO1xuICAgICAgICAgICAgICAgIHAuZGlzcGxheSh0aGlzLCBcInJnYigyNTUsMjU1LFwiICsgTWF0aC5mbG9vcigyNTUgKiAoMSAtIHQpKSArIFwiKVwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2xhYmVsXG4gICAgICAgICAgICAvKmMyLmZpbGxTdHlsZSA9IFwicmdiKDIwMCwyMDAsMjAwKVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgNjUsIDEzKTtcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgYzIuZmlsbFRleHQodGgudW5pLnBzLmxlbmd0aCArIFwiIHBsYW5ldHNcIiwgMiwgMTApOyovXG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudW5pID0gbmV3IFVuaXZlcnNlKHRoaXMudywgdGhpcy5oKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2Ugd2l0aCByYW5kb20gcGxhbmV0c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0UmFuZG9tKG5iID0gMTAwMCwgbWkgPSAwLjUsIG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgdGhpcy51bmkuYWRkUGxhbmV0cyhuYiwgbWksIG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2Ugd2l0aCBiaWcgYmFuZyBzZXR1cFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRCaWdCYW5nKG5iID0gMTAwMCwgbWkgPSAxLCBtaW5TcGVlZCA9IDAuMzUsIG1heFNwZWVkID0gMC43LCByYWQgPSAxMDApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgLy9jcmVhdGUgYmlnIHBsYW5ldCBpbiB0aGUgbWlkZGxlXG4gICAgICAgIGNvbnN0IGN4ID0gdGhpcy53ICogMC41LCBjeSA9IHRoaXMuaCAqIDAuNTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMudW5pLmNyZWF0ZVBsYW5ldChuYiAqIG1pLCBjeCwgY3ksIDAsIDApO1xuICAgICAgICAvL2V4cGxvZGUgaXRcbiAgICAgICAgdGhpcy51bmkuZXhwbG9kZShwLCBuYiwgbWluU3BlZWQsIG1heFNwZWVkLCByYWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHNpbXVsYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJvdW5jZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdm1heCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sbGlzaW9uRmFjdG9yIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYkl0ZXJhdGlvbnMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RhcnQoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIGNvbGxpc2lvbkZhY3RvciA9IDAuOCwgdGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnVuaS5zdGVwKGJvdW5jZSwgdm1heCwgY29sbGlzaW9uRmFjdG9yLCB0aW1lU3RlcE1zKTtcbiAgICAgICAgICAgIHQuY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIDApO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9zdG9wXG4gICAgc3RvcCgpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgfVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gKi9cbmV4cG9ydCBjb25zdCBwbGFuZXRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFBsYW5ldFNpbXVsYXRpb24ob3B0cylcbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4vTGFuZFwiXG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSBcIi4uL2Jhc2UvQ2FudmFzUGx1c1wiXG5cbmV4cG9ydCBjbGFzcyBBbmltYWwge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgXG4gICAgICogQHBhcmFtIHtMYW5kfSBsIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGwsIHggPSAwLCB5ID0gMCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAvKiogQHR5cGUge0xhbmR9ICovXG4gICAgICAgIHRoaXMubCA9IGw7XG5cbiAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IDAgPyAwIDogeCA+IGwudyA/IGwudyA6IHhcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCAwID8gMCA6IHkgPiBsLmggPyBsLmggOiB5XG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eCA9IDBcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSAwO1xuXG4gICAgICAgIC8vdGhlIG90aGVyIGFuaW1hbHMgYXJvdW5kXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW11cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdXG5cbiAgICAgICAgLy9hZGQgdG8gdGhlIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgbC5ncmlkLmluc2VydCh0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpc3RhbmNlIHRvIGFub3RoZXIgYW5pbWFsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtBbmltYWx9IGEgXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBkKGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguaHlwb3QoKGEueCAtIHRoaXMueCksIChhLnkgLSB0aGlzLnkpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBtb3ZlKHRpbWVTdGVwTXMgPSAxMCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5sXG4gICAgICAgIGwuZ3JpZC5yZW1vdmUodGhpcyk7XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHIgPSAwLjAxICogTWF0aC5yYW5kb20oKTtcblxuICAgICAgICB0aGlzLnZ4ICs9IHIgKiBNYXRoLmNvcyhhbmdsZSkgKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52eCA+IGwuVl9NQVggPyBsLlZfTUFYIDogdGhpcy52eCA8IC1sLlZfTUFYID8gLWwuVl9NQVggOiB0aGlzLnZ4XG5cbiAgICAgICAgdGhpcy52eSArPSByICogTWF0aC5zaW4oYW5nbGUpICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgPiBsLlZfTUFYID8gbC5WX01BWCA6IHRoaXMudnkgPCAtbC5WX01BWCA/IC1sLlZfTUFYIDogdGhpcy52eVxuXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy54ID0gdGhpcy54IDwgMCA/IGwudyA6IHRoaXMueCA+IGwudyA/IDAgOiB0aGlzLnhcblxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSA8IDAgPyBsLmggOiB0aGlzLnkgPiBsLmggPyAwIDogdGhpcy55XG5cbiAgICAgICAgbC5ncmlkLmluc2VydCh0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKiBPYnNlcnZlICovXG4gICAgb2JzZXJ2ZSgpIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMubFxuXG4gICAgICAgIC8vZ2V0IGFuaW1hbHMgYXJvdW5kXG4gICAgICAgIGNvbnN0IGFzID0gbC5ncmlkLmdldCh0aGlzLnggLSBsLmQsIHRoaXMueSAtIGwuZCwgdGhpcy54ICsgbC5kLCB0aGlzLnkgKyBsLmQpO1xuXG4gICAgICAgIHRoaXMucHJleXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBhIG9mIGFzKSB7XG4gICAgICAgICAgICBpZiAoYSA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQoYSkgPiBsLmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSAwKVxuICAgICAgICAgICAgICAgIHRoaXMucHJleXMucHVzaChhKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm5zIHtBbmltYWx9ICovXG4gICAgbWFrZUNoaWxkKCkge1xuICAgICAgICAvL2RvIGJldHRlcjogbWFrZSBjaGlsZCBhcm91bmRcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYWwodGhpcy50eXBlLCB0aGlzLmwsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBhbmltYWxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsU3R5bGUgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgXG4gICAgICovXG4gICAgZGlzcGxheShjcCwgZmlsbFN0eWxlID0gXCJibHVlXCIsIHNpemUgPSAyKSB7XG4gICAgICAgIGNvbnN0IHMgPSBzaXplIC8gY3AucHNcbiAgICAgICAgY3AuYzJkLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgY3AuYzJkLmZpbGxSZWN0KGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgcywgcyk7XG4gICAgICAgIC8qYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLmFyYyhhLngsIGEueSwgMC41LCAwLCAyKk1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuZmlsbCgpOyovXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU3BhdGlhbEluZGV4IH0gZnJvbSAnLi4vYmFzZS9TcGF0aWFsSW5kZXgnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5UyB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7QW5pbWFsfSBmcm9tIFwiLi9BbmltYWxcIlxuXG5leHBvcnQgY2xhc3MgTGFuZCB7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG5cbiAgICAgICAgLy90aGUgbWF4IHNwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLlZfTUFYID0gMC4xXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMucCA9IDAuMDIgLy9wcmVkYXRvciBkZWF0aCBwcm9iYWJpbGl0eVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5xID0gMC4xIC8vcHJleSByZXByb2R1Y3Rpb24gcHJvYmFiaWxpdHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuciA9IDAuNSAvL2VhdGVuIHByZXkgdHJhbnNmb3JtYXRpb24gcHJvYmFiaWxpdHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubmIgPSAzIC8vbmVpZ2hib3JzIG51bWJlclxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoXG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXVxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZXlzID0gW11cblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5kID0gMTBcbiAgICAgICAgLyoqIEB0eXBlIHtTcGF0aWFsSW5kZXguPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBTcGF0aWFsSW5kZXgoKTtcblxuICAgICAgICAvKmludFtdW10gaGlzdG87XG4gICAgICAgIGludCBpbmRleD0wO1xuICAgICAgICB0aGlzLmMyQ2hhcnQ9YzJDaGFydDtcbiAgICAgICAgdGhpcy5oQ2hhcnQ9aENoYXJ0O1xuICAgICAgICB0aGlzLmhpc3RvPW5ldyBpbnRbd0NoYXJ0XVtdO1xuICAgICAgICBmb3IoaW50IGk9MDtpPHdDaGFydDtpKyspXG4gICAgICAgICAgICBoaXN0b1tpXT1uZXcgaW50W117MCwwfTsqL1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgc3RlcCh0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL29ic2VydmVcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZXlzKSBhLm9ic2VydmUoKTtcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZWRhdG9ycykgYS5vYnNlcnZlKCk7XG5cbiAgICAgICAgY29uc3QgcHJleXNUb0Jvcm4gPSBbXVxuICAgICAgICBjb25zdCBwcmV5c1RvRGllID0gW11cbiAgICAgICAgY29uc3QgcHJlZHNUb0Jvcm4gPSBbXVxuICAgICAgICBjb25zdCBwcmVkc1RvRGllID0gW11cblxuICAgICAgICAvL3ByZXlcbiAgICAgICAgZm9yIChsZXQgcHJleSBvZiB0aGlzLnByZXlzKSB7XG4gICAgICAgICAgICAvL3JlcHJvZHVjdGlvbiBpZiBubyBwcmVkYXRvciBhcm91bmRcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy5xKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwcmV5LnByZWRhdG9ycy5sZW5ndGggIT0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAocHJleS5wcmV5cy5sZW5ndGggPj0gdGhpcy5uYikgY29udGludWU7XG4gICAgICAgICAgICBwcmV5c1RvQm9ybi5wdXNoKHByZXkubWFrZUNoaWxkKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9wcmVkYXRvclxuICAgICAgICBmb3IgKGxldCBwcmVkIG9mIHRoaXMucHJlZGF0b3JzKSB7XG4gICAgICAgICAgICAvL25vIHByZXkgYXJvdW5kOiBwcmVkYXRvciBkaWVzIHdpdGggcHJvYmFiaWxpdHkgcFxuICAgICAgICAgICAgaWYgKHByZWQucHJleXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHRoaXMucCkgcHJlZHNUb0RpZS5wdXNoKHByZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9wcmV5IGFyb3VuZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9lYXQgcHJleVxuICAgICAgICAgICAgICAgIC8vY2hvb3NlIHJhbmRvbWx5XG4gICAgICAgICAgICAgICAgY29uc3QgcHJleVRvRWF0ID0gcHJlZC5wcmV5c1tNYXRoLmZsb29yKHByZWQucHJleXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xuICAgICAgICAgICAgICAgIHByZXlzVG9EaWUucHVzaChwcmV5VG9FYXQpO1xuXG4gICAgICAgICAgICAgICAgLy9wcmVkYXRvciByZXByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHRoaXMucikgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHByZWQucHJlZGF0b3JzLmxlbmd0aCA+PSB0aGlzLm5iKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBwcmVkc1RvQm9ybi5wdXNoKHByZWQubWFrZUNoaWxkKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV5cy5wdXNoKC4uLnByZXlzVG9Cb3JuKTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMucHVzaCguLi5wcmVkc1RvQm9ybik7XG5cbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5Uyh0aGlzLnByZXlzLCBwcmV5c1RvRGllLCBmYWxzZSlcbiAgICAgICAgZm9yIChsZXQgYSBvZiBwcmV5c1RvRGllKSB0aGlzLmdyaWQucmVtb3ZlKGEpO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXlTKHRoaXMucHJlZGF0b3JzLCBwcmVkc1RvRGllLCBmYWxzZSlcbiAgICAgICAgZm9yIChsZXQgYSBvZiBwcmVkc1RvRGllKSB0aGlzLmdyaWQucmVtb3ZlKGEpO1xuXG4gICAgICAgIC8vbW92ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpXG4gICAgICAgICAgICBhLm1vdmUodGltZVN0ZXBNcyk7XG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmVkYXRvcnMpXG4gICAgICAgICAgICBhLm1vdmUodGltZVN0ZXBNcyk7XG5cbiAgICAgICAgLyovaGlzdG9cbiAgICAgICAgaGlzdG9baW5kZXhdID0gbmV3IGludFtdeyBwcmV5cy5zaXplKCksIHByZWRhdG9ycy5zaXplKCkgfTtcbiAgICAgICAgaWYgKGluZGV4ID09IGhpc3RvLmxlbmd0aCAtIDEpIGluZGV4ID0gMDtcbiAgICAgICAgZWxzZSBpbmRleCsrOyovXG5cbiAgICB9XG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgTGFuZCB9IGZyb20gJy4vTGFuZCc7XG5pbXBvcnQgeyBBbmltYWwgfSBmcm9tICcuL0FuaW1hbCc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9DYW52YXNQbHVzJztcblxuLyoqICovXG5jbGFzcyBQcmV5UHJlZGF0b3JTaW11bGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMuZGl2SWQgPSBvcHRzLmRpdklkIHx8IFwidmFkaXZcIjtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmRpdklkKTtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IGRpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMob3B0cy5kaXZJZCwgXCJ2YWNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL3RyYW5zcGFyZW5jeVxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYW5pbWFsc1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0aC5sYW5kLnByZXlzKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhhKSlcbiAgICAgICAgICAgICAgICAgICAgYS5kaXNwbGF5KHRoaXMsIFwiYmx1ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgb2YgdGgubGFuZC5wcmVkYXRvcnMpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9EcmF3KGEpKVxuICAgICAgICAgICAgICAgICAgICBhLmRpc3BsYXkodGhpcywgXCJyZWRcIik7XG5cbiAgICAgICAgICAgIC8qL2xhYmVsXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImxpZ2h0Z3JheVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgNjUsIDEzKTtcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGMyLmZpbGxUZXh0KHByZXlzLmxlbmd0aCArIFwiL1wiICsgcHJlZGF0b3JzLmxlbmd0aCwgMiwgMTApOyovXG5cbiAgICAgICAgICAgIC8vY2hhcnRcbiAgICAgICAgICAgIC8vYzJDaGFydC5zZXRGaWxsU3R5bGUoYmFja0NvbG9yMik7XG4gICAgICAgICAgICAvL2MyQ2hhcnQuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAgICAgICAgIC8vZG91YmxlIG1heCA9IGdldE1heEhpc3RvKCk7XG4gICAgICAgICAgICAvKnB1YmxpYyBpbnQgZ2V0TWF4SGlzdG8oKSB7XG4gICAgICAgICAgICAgICAgaW50IG1heD0wO1xuICAgICAgICAgICAgICAgIGZvcihpbnQgaT0wO2k8aGlzdG8ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpc3RvW2ldWzBdPm1heCkgbWF4PWhpc3RvW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZihoaXN0b1tpXVsxXT5tYXgpIG1heD1oaXN0b1tpXVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdWJsZSBoMSwgaDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBoaXN0by5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSA9IGhDaGFydCAqIGhpc3RvW2ldWzBdIC8gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiA9IGhDaGFydCAqIGhpc3RvW2ldWzFdIC8gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShwcmV5Q29sb3IyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpLCBoQ2hhcnQgLSBoMSwgMSwgaDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShwcmVkYXRvckNvbG9yMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaSwgaENoYXJ0IC0gaDIsIDEsIGgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShDc3NDb2xvci5tYWtlKDI1NSwgMjU1LCAyNTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaW5kZXgsIDAsIDEsIGhDaGFydCk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtMYW5kfSAqL1xuICAgICAgICB0aGlzLmxhbmQgPSBuZXcgTGFuZCh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG5cbiAgICAvL1RPRE8gdGVzdCBpbml0IGluIGEgYnViYmxlID9cbiAgICAvL1RPRE8gdXNlIGRlbnNpdHkgYXMgaW5wdXQgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIG5iXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJleURlbnNpdHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByZWRhdG9yRGVuc2l0eSBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0UmFuZG9tKHByZXlEZW5zaXR5ID0gMC4wMDMsIHByZWRhdG9yRGVuc2l0eSA9IDAuMDAzKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxhbmRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV5RGVuc2l0eSAqIGwudyAqIGwuaDsgaSsrKVxuICAgICAgICAgICAgbC5wcmV5cy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMCwgbCwgbC53ICogTWF0aC5yYW5kb20oKSwgbC5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZGF0b3JEZW5zaXR5ICogbC53ICogbC5oOyBpKyspXG4gICAgICAgICAgICBsLnByZWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMSwgbCwgbC53ICogTWF0aC5yYW5kb20oKSwgbC5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQubGFuZC5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgcHJleVByZWRhdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFByZXlQcmVkYXRvclNpbXVsYXRpb24ob3B0cylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=