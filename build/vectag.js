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
     * @param {string} canvasId
     * @param {Object} center
     * @param {number} ps
     */
    constructor(canvasId = "vacanvas", center = undefined, ps = 1) {

        /** @type {*} */
        this.canvas = document.getElementById(canvasId);

        /** @type {number} */
        this.w = this.canvas.offsetWidth;
        /** @type {number} */
        this.h = this.canvas.offsetHeight;

        this.canvas.width = this.w;
        this.canvas.height = this.h;

        /**@type {Object} */
        this.c2d = this.canvas.getContext("2d");

        // geo coordinates of the center
        /** @type {{x:number,y:number}} */
        this.center = center || { x: this.w * 0.5, y: this.h * 0.5 }

        // zoom factor: pixel size, in m/pix
        /** @type {number} */
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
        if (obj.x < this.extGeo.xMin) return false;
        if (obj.x > this.extGeo.xMax) return false;
        if (obj.y < this.extGeo.yMin) return false;
        if (obj.y > this.extGeo.yMax) return false;
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

    /**
     * Display sardin vision field
     * 
     * @param {CanvasPlus} cp 
     * @param {string} fillStyle 
     * @param {number} lineWidth 
     */
    displayVisionField(cp, fillStyle, lineWidth) {
        const c2 = cp.c2d
        c2.fillStyle = fillStyle;
        c2.lineWidth = lineWidth;

        c2.beginPath();
        c2.moveTo(cp.geoToPixX(this.x), cp.geoToPixY(this.y));
        c2.arc(cp.geoToPixX(this.x), cp.geoToPixY(this.y), this.sea.D_OBS / cp.ps,
            Math.PI - this.va + this.sea.A_OBS * 0.5, Math.PI - this.va - this.sea.A_OBS * 0.5);
        c2.closePath();
        c2.fill();
    }

    /**
     * Display sardin vision links
     * 
     * @param {CanvasPlus} cp 
     * @param {string} strokeStyle 
     * @param {number} lineWidth 
     */
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

    /**
     * Display sardin collision field
     * 
     * @param {CanvasPlus} cp 
     * @param {string} strokeStyle 
     * @param {number} lineWidth 
     */
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




/** */
class Sea {

    /**
     * 
     * @param {number} w 
     * @param {number} h 
     */
    constructor(w, h) {

        //TODO should become static attributes of Sardin class

        //observation
        /** @type {number} */
        this.D_OBS = 50
        /** @type {number} */
        this.A_OBS = 200 * Math.PI / 180

        //collision
        /** @type {number} */
        this.D_COL = 10

        //speed
        /** @type {number} */
        this.V_TARGET = 0.3
        /** @type {number} */
        this.V_MAX = 0.6

        //shark
        /** @type {number} */
        this.D_SHARK_EAT = 12
        /** @type {number} */
        this.EATEN_SARDIN_NB = 0


        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {Array.<Sardin>} */
        this.fish = []

        /** @type {SpatialIndex.<Sardin>} */
        this.grid = new _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__["SpatialIndex"]();

        //TODO
        this.shark = null;

        /** @type {Array.<Sardin>} */
        this.killed = [];
    }

    /**
     * @param {number} timeStepMs 
     */
    step(timeStepMs = 10) {

        //observe
        for (let sa of this.fish)
            sa.observe();

        //move
        for (let sa of this.fish)
            sa.move(timeStepMs);

        //shark eat fish
        this.sharkEat();
    }


    /**
     * 
     */
    sharkEat() {
        if (this.shark == null) return;

        /** @type {Array.<Sardin>} */
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

    /**
     * Add fish
     * 
     * @param {number} nb 
     * @returns {this}
     */
    addFish(nb = 1) {
        for (let i = 0; i < nb; i++)
            this.fish.push(new _Sardin__WEBPACK_IMPORTED_MODULE_0__["Sardin"](this));
        return this
    }

    /**
     * Set random speed for all fish
     * @returns {this}
     */
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

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        //TODO
        //add eaten fish nb label

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_1__["CanvasPlus"]();
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        /** @type {boolean} */
        this.showFishVisionField = false
        /** @type {boolean} */
        this.showFishVisionLinks = false
        /** @type {boolean} */
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
     * @param {number} density 
     * @returns {this}
     */
    initRandom(density = 0.001) {
        this.sea.addFish(density * this.sea.w * this.sea.h);
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
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./src/gol/Cell.js");
//@ts-check




//TODO zoom/pan, with canvas transform: better universe limits
//TODO buttons (play, stop, speed, draw, pan)
//TODO check canvas animation


class GoLSimulation {

    constructor(opts) {
        opts = opts || {};

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_0__["CanvasPlus"]();

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

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_2__["CanvasPlus"]();
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

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new _base_CanvasPlus__WEBPACK_IMPORTED_MODULE_2__["CanvasPlus"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9ub2RlX21vZHVsZXMvcmJ1c2gvcmJ1c2gubWluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL0NhbnZhc1BsdXMuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvU3BhdGlhbEluZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL2xpYi5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9TYXJkaW4uanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvU2VhLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9nb2wvQ2VsbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL1VuaXZlcnNlLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9nb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wbGFuZXRzL1BsYW5ldC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvQW5pbWFsLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wcC9MYW5kLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9wcC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsbUJBQW1CLEtBQUs7QUFDeEIsd0JBQXdCLDBDQUFJOztBQUU1Qjs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQSxvQkFBb0IsOENBQU07QUFDMUI7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0Esb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ087QUFDUDtBQUNBIiwiZmlsZSI6InZlY3RhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsaSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoaSk6KHQ9dHx8c2VsZikuUkJ1c2g9aSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LHIsZSxhLGgpeyFmdW5jdGlvbiB0KG4scixlLGEsaCl7Zm9yKDthPmU7KXtpZihhLWU+NjAwKXt2YXIgbz1hLWUrMSxzPXItZSsxLGw9TWF0aC5sb2cobyksZj0uNSpNYXRoLmV4cCgyKmwvMyksdT0uNSpNYXRoLnNxcnQobCpmKihvLWYpL28pKihzLW8vMjwwPy0xOjEpLG09TWF0aC5tYXgoZSxNYXRoLmZsb29yKHItcypmL28rdSkpLGM9TWF0aC5taW4oYSxNYXRoLmZsb29yKHIrKG8tcykqZi9vK3UpKTt0KG4scixtLGMsaCl9dmFyIHA9bltyXSxkPWUseD1hO2ZvcihpKG4sZSxyKSxoKG5bYV0scCk+MCYmaShuLGUsYSk7ZDx4Oyl7Zm9yKGkobixkLHgpLGQrKyx4LS07aChuW2RdLHApPDA7KWQrKztmb3IoO2goblt4XSxwKT4wOyl4LS19MD09PWgobltlXSxwKT9pKG4sZSx4KTppKG4sKyt4LGEpLHg8PXImJihlPXgrMSkscjw9eCYmKGE9eC0xKX19KHQscixlfHwwLGF8fHQubGVuZ3RoLTEsaHx8bil9ZnVuY3Rpb24gaSh0LGksbil7dmFyIHI9dFtpXTt0W2ldPXRbbl0sdFtuXT1yfWZ1bmN0aW9uIG4odCxpKXtyZXR1cm4gdDxpPy0xOnQ+aT8xOjB9dmFyIHI9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9OSksdGhpcy5fbWF4RW50cmllcz1NYXRoLm1heCg0LHQpLHRoaXMuX21pbkVudHJpZXM9TWF0aC5tYXgoMixNYXRoLmNlaWwoLjQqdGhpcy5fbWF4RW50cmllcykpLHRoaXMuY2xlYXIoKX07ZnVuY3Rpb24gZSh0LGksbil7aWYoIW4pcmV0dXJuIGkuaW5kZXhPZih0KTtmb3IodmFyIHI9MDtyPGkubGVuZ3RoO3IrKylpZihuKHQsaVtyXSkpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gYSh0LGkpe2godCwwLHQuY2hpbGRyZW4ubGVuZ3RoLGksdCl9ZnVuY3Rpb24gaCh0LGksbixyLGUpe2V8fChlPXAobnVsbCkpLGUubWluWD0xLzAsZS5taW5ZPTEvMCxlLm1heFg9LTEvMCxlLm1heFk9LTEvMDtmb3IodmFyIGE9aTthPG47YSsrKXt2YXIgaD10LmNoaWxkcmVuW2FdO28oZSx0LmxlYWY/cihoKTpoKX1yZXR1cm4gZX1mdW5jdGlvbiBvKHQsaSl7cmV0dXJuIHQubWluWD1NYXRoLm1pbih0Lm1pblgsaS5taW5YKSx0Lm1pblk9TWF0aC5taW4odC5taW5ZLGkubWluWSksdC5tYXhYPU1hdGgubWF4KHQubWF4WCxpLm1heFgpLHQubWF4WT1NYXRoLm1heCh0Lm1heFksaS5tYXhZKSx0fWZ1bmN0aW9uIHModCxpKXtyZXR1cm4gdC5taW5YLWkubWluWH1mdW5jdGlvbiBsKHQsaSl7cmV0dXJuIHQubWluWS1pLm1pbll9ZnVuY3Rpb24gZih0KXtyZXR1cm4odC5tYXhYLXQubWluWCkqKHQubWF4WS10Lm1pblkpfWZ1bmN0aW9uIHUodCl7cmV0dXJuIHQubWF4WC10Lm1pblgrKHQubWF4WS10Lm1pblkpfWZ1bmN0aW9uIG0odCxpKXtyZXR1cm4gdC5taW5YPD1pLm1pblgmJnQubWluWTw9aS5taW5ZJiZpLm1heFg8PXQubWF4WCYmaS5tYXhZPD10Lm1heFl9ZnVuY3Rpb24gYyh0LGkpe3JldHVybiBpLm1pblg8PXQubWF4WCYmaS5taW5ZPD10Lm1heFkmJmkubWF4WD49dC5taW5YJiZpLm1heFk+PXQubWluWX1mdW5jdGlvbiBwKHQpe3JldHVybntjaGlsZHJlbjp0LGhlaWdodDoxLGxlYWY6ITAsbWluWDoxLzAsbWluWToxLzAsbWF4WDotMS8wLG1heFk6LTEvMH19ZnVuY3Rpb24gZChpLG4scixlLGEpe2Zvcih2YXIgaD1bbixyXTtoLmxlbmd0aDspaWYoISgocj1oLnBvcCgpKS0obj1oLnBvcCgpKTw9ZSkpe3ZhciBvPW4rTWF0aC5jZWlsKChyLW4pL2UvMikqZTt0KGksbyxuLHIsYSksaC5wdXNoKG4sbyxvLHIpfX1yZXR1cm4gci5wcm90b3R5cGUuYWxsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FsbCh0aGlzLmRhdGEsW10pfSxyLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24odCl7dmFyIGk9dGhpcy5kYXRhLG49W107aWYoIWModCxpKSlyZXR1cm4gbjtmb3IodmFyIHI9dGhpcy50b0JCb3gsZT1bXTtpOyl7Zm9yKHZhciBhPTA7YTxpLmNoaWxkcmVuLmxlbmd0aDthKyspe3ZhciBoPWkuY2hpbGRyZW5bYV0sbz1pLmxlYWY/cihoKTpoO2ModCxvKSYmKGkubGVhZj9uLnB1c2goaCk6bSh0LG8pP3RoaXMuX2FsbChoLG4pOmUucHVzaChoKSl9aT1lLnBvcCgpfXJldHVybiBufSxyLnByb3RvdHlwZS5jb2xsaWRlcz1mdW5jdGlvbih0KXt2YXIgaT10aGlzLmRhdGE7aWYoIWModCxpKSlyZXR1cm4hMTtmb3IodmFyIG49W107aTspe2Zvcih2YXIgcj0wO3I8aS5jaGlsZHJlbi5sZW5ndGg7cisrKXt2YXIgZT1pLmNoaWxkcmVuW3JdLGE9aS5sZWFmP3RoaXMudG9CQm94KGUpOmU7aWYoYyh0LGEpKXtpZihpLmxlYWZ8fG0odCxhKSlyZXR1cm4hMDtuLnB1c2goZSl9fWk9bi5wb3AoKX1yZXR1cm4hMX0sci5wcm90b3R5cGUubG9hZD1mdW5jdGlvbih0KXtpZighdHx8IXQubGVuZ3RoKXJldHVybiB0aGlzO2lmKHQubGVuZ3RoPHRoaXMuX21pbkVudHJpZXMpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXRoaXMuaW5zZXJ0KHRbaV0pO3JldHVybiB0aGlzfXZhciBuPXRoaXMuX2J1aWxkKHQuc2xpY2UoKSwwLHQubGVuZ3RoLTEsMCk7aWYodGhpcy5kYXRhLmNoaWxkcmVuLmxlbmd0aClpZih0aGlzLmRhdGEuaGVpZ2h0PT09bi5oZWlnaHQpdGhpcy5fc3BsaXRSb290KHRoaXMuZGF0YSxuKTtlbHNle2lmKHRoaXMuZGF0YS5oZWlnaHQ8bi5oZWlnaHQpe3ZhciByPXRoaXMuZGF0YTt0aGlzLmRhdGE9bixuPXJ9dGhpcy5faW5zZXJ0KG4sdGhpcy5kYXRhLmhlaWdodC1uLmhlaWdodC0xLCEwKX1lbHNlIHRoaXMuZGF0YT1uO3JldHVybiB0aGlzfSxyLnByb3RvdHlwZS5pbnNlcnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnRoaXMuX2luc2VydCh0LHRoaXMuZGF0YS5oZWlnaHQtMSksdGhpc30sci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhPXAoW10pLHRoaXN9LHIucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0LGkpe2lmKCF0KXJldHVybiB0aGlzO2Zvcih2YXIgbixyLGEsaD10aGlzLmRhdGEsbz10aGlzLnRvQkJveCh0KSxzPVtdLGw9W107aHx8cy5sZW5ndGg7KXtpZihofHwoaD1zLnBvcCgpLHI9c1tzLmxlbmd0aC0xXSxuPWwucG9wKCksYT0hMCksaC5sZWFmKXt2YXIgZj1lKHQsaC5jaGlsZHJlbixpKTtpZigtMSE9PWYpcmV0dXJuIGguY2hpbGRyZW4uc3BsaWNlKGYsMSkscy5wdXNoKGgpLHRoaXMuX2NvbmRlbnNlKHMpLHRoaXN9YXx8aC5sZWFmfHwhbShoLG8pP3I/KG4rKyxoPXIuY2hpbGRyZW5bbl0sYT0hMSk6aD1udWxsOihzLnB1c2goaCksbC5wdXNoKG4pLG49MCxyPWgsaD1oLmNoaWxkcmVuWzBdKX1yZXR1cm4gdGhpc30sci5wcm90b3R5cGUudG9CQm94PWZ1bmN0aW9uKHQpe3JldHVybiB0fSxyLnByb3RvdHlwZS5jb21wYXJlTWluWD1mdW5jdGlvbih0LGkpe3JldHVybiB0Lm1pblgtaS5taW5YfSxyLnByb3RvdHlwZS5jb21wYXJlTWluWT1mdW5jdGlvbih0LGkpe3JldHVybiB0Lm1pblktaS5taW5ZfSxyLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhfSxyLnByb3RvdHlwZS5mcm9tSlNPTj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kYXRhPXQsdGhpc30sci5wcm90b3R5cGUuX2FsbD1mdW5jdGlvbih0LGkpe2Zvcih2YXIgbj1bXTt0Oyl0LmxlYWY/aS5wdXNoLmFwcGx5KGksdC5jaGlsZHJlbik6bi5wdXNoLmFwcGx5KG4sdC5jaGlsZHJlbiksdD1uLnBvcCgpO3JldHVybiBpfSxyLnByb3RvdHlwZS5fYnVpbGQ9ZnVuY3Rpb24odCxpLG4scil7dmFyIGUsaD1uLWkrMSxvPXRoaXMuX21heEVudHJpZXM7aWYoaDw9bylyZXR1cm4gYShlPXAodC5zbGljZShpLG4rMSkpLHRoaXMudG9CQm94KSxlO3J8fChyPU1hdGguY2VpbChNYXRoLmxvZyhoKS9NYXRoLmxvZyhvKSksbz1NYXRoLmNlaWwoaC9NYXRoLnBvdyhvLHItMSkpKSwoZT1wKFtdKSkubGVhZj0hMSxlLmhlaWdodD1yO3ZhciBzPU1hdGguY2VpbChoL28pLGw9cypNYXRoLmNlaWwoTWF0aC5zcXJ0KG8pKTtkKHQsaSxuLGwsdGhpcy5jb21wYXJlTWluWCk7Zm9yKHZhciBmPWk7Zjw9bjtmKz1sKXt2YXIgdT1NYXRoLm1pbihmK2wtMSxuKTtkKHQsZix1LHMsdGhpcy5jb21wYXJlTWluWSk7Zm9yKHZhciBtPWY7bTw9dTttKz1zKXt2YXIgYz1NYXRoLm1pbihtK3MtMSx1KTtlLmNoaWxkcmVuLnB1c2godGhpcy5fYnVpbGQodCxtLGMsci0xKSl9fXJldHVybiBhKGUsdGhpcy50b0JCb3gpLGV9LHIucHJvdG90eXBlLl9jaG9vc2VTdWJ0cmVlPWZ1bmN0aW9uKHQsaSxuLHIpe2Zvcig7ci5wdXNoKGkpLCFpLmxlYWYmJnIubGVuZ3RoLTEhPT1uOyl7Zm9yKHZhciBlPTEvMCxhPTEvMCxoPXZvaWQgMCxvPTA7bzxpLmNoaWxkcmVuLmxlbmd0aDtvKyspe3ZhciBzPWkuY2hpbGRyZW5bb10sbD1mKHMpLHU9KG09dCxjPXMsKE1hdGgubWF4KGMubWF4WCxtLm1heFgpLU1hdGgubWluKGMubWluWCxtLm1pblgpKSooTWF0aC5tYXgoYy5tYXhZLG0ubWF4WSktTWF0aC5taW4oYy5taW5ZLG0ubWluWSkpLWwpO3U8YT8oYT11LGU9bDxlP2w6ZSxoPXMpOnU9PT1hJiZsPGUmJihlPWwsaD1zKX1pPWh8fGkuY2hpbGRyZW5bMF19dmFyIG0sYztyZXR1cm4gaX0sci5wcm90b3R5cGUuX2luc2VydD1mdW5jdGlvbih0LGksbil7dmFyIHI9bj90OnRoaXMudG9CQm94KHQpLGU9W10sYT10aGlzLl9jaG9vc2VTdWJ0cmVlKHIsdGhpcy5kYXRhLGksZSk7Zm9yKGEuY2hpbGRyZW4ucHVzaCh0KSxvKGEscik7aT49MCYmZVtpXS5jaGlsZHJlbi5sZW5ndGg+dGhpcy5fbWF4RW50cmllczspdGhpcy5fc3BsaXQoZSxpKSxpLS07dGhpcy5fYWRqdXN0UGFyZW50QkJveGVzKHIsZSxpKX0sci5wcm90b3R5cGUuX3NwbGl0PWZ1bmN0aW9uKHQsaSl7dmFyIG49dFtpXSxyPW4uY2hpbGRyZW4ubGVuZ3RoLGU9dGhpcy5fbWluRW50cmllczt0aGlzLl9jaG9vc2VTcGxpdEF4aXMobixlLHIpO3ZhciBoPXRoaXMuX2Nob29zZVNwbGl0SW5kZXgobixlLHIpLG89cChuLmNoaWxkcmVuLnNwbGljZShoLG4uY2hpbGRyZW4ubGVuZ3RoLWgpKTtvLmhlaWdodD1uLmhlaWdodCxvLmxlYWY9bi5sZWFmLGEobix0aGlzLnRvQkJveCksYShvLHRoaXMudG9CQm94KSxpP3RbaS0xXS5jaGlsZHJlbi5wdXNoKG8pOnRoaXMuX3NwbGl0Um9vdChuLG8pfSxyLnByb3RvdHlwZS5fc3BsaXRSb290PWZ1bmN0aW9uKHQsaSl7dGhpcy5kYXRhPXAoW3QsaV0pLHRoaXMuZGF0YS5oZWlnaHQ9dC5oZWlnaHQrMSx0aGlzLmRhdGEubGVhZj0hMSxhKHRoaXMuZGF0YSx0aGlzLnRvQkJveCl9LHIucHJvdG90eXBlLl9jaG9vc2VTcGxpdEluZGV4PWZ1bmN0aW9uKHQsaSxuKXtmb3IodmFyIHIsZSxhLG8scyxsLHUsbT0xLzAsYz0xLzAscD1pO3A8PW4taTtwKyspe3ZhciBkPWgodCwwLHAsdGhpcy50b0JCb3gpLHg9aCh0LHAsbix0aGlzLnRvQkJveCksdj0oZT1kLGE9eCxvPXZvaWQgMCxzPXZvaWQgMCxsPXZvaWQgMCx1PXZvaWQgMCxvPU1hdGgubWF4KGUubWluWCxhLm1pblgpLHM9TWF0aC5tYXgoZS5taW5ZLGEubWluWSksbD1NYXRoLm1pbihlLm1heFgsYS5tYXhYKSx1PU1hdGgubWluKGUubWF4WSxhLm1heFkpLE1hdGgubWF4KDAsbC1vKSpNYXRoLm1heCgwLHUtcykpLE09ZihkKStmKHgpO3Y8bT8obT12LHI9cCxjPU08Yz9NOmMpOnY9PT1tJiZNPGMmJihjPU0scj1wKX1yZXR1cm4gcnx8bi1pfSxyLnByb3RvdHlwZS5fY2hvb3NlU3BsaXRBeGlzPWZ1bmN0aW9uKHQsaSxuKXt2YXIgcj10LmxlYWY/dGhpcy5jb21wYXJlTWluWDpzLGU9dC5sZWFmP3RoaXMuY29tcGFyZU1pblk6bDt0aGlzLl9hbGxEaXN0TWFyZ2luKHQsaSxuLHIpPHRoaXMuX2FsbERpc3RNYXJnaW4odCxpLG4sZSkmJnQuY2hpbGRyZW4uc29ydChyKX0sci5wcm90b3R5cGUuX2FsbERpc3RNYXJnaW49ZnVuY3Rpb24odCxpLG4scil7dC5jaGlsZHJlbi5zb3J0KHIpO2Zvcih2YXIgZT10aGlzLnRvQkJveCxhPWgodCwwLGksZSkscz1oKHQsbi1pLG4sZSksbD11KGEpK3UocyksZj1pO2Y8bi1pO2YrKyl7dmFyIG09dC5jaGlsZHJlbltmXTtvKGEsdC5sZWFmP2UobSk6bSksbCs9dShhKX1mb3IodmFyIGM9bi1pLTE7Yz49aTtjLS0pe3ZhciBwPXQuY2hpbGRyZW5bY107byhzLHQubGVhZj9lKHApOnApLGwrPXUocyl9cmV0dXJuIGx9LHIucHJvdG90eXBlLl9hZGp1c3RQYXJlbnRCQm94ZXM9ZnVuY3Rpb24odCxpLG4pe2Zvcih2YXIgcj1uO3I+PTA7ci0tKW8oaVtyXSx0KX0sci5wcm90b3R5cGUuX2NvbmRlbnNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgaT10Lmxlbmd0aC0xLG49dm9pZCAwO2k+PTA7aS0tKTA9PT10W2ldLmNoaWxkcmVuLmxlbmd0aD9pPjA/KG49dFtpLTFdLmNoaWxkcmVuKS5zcGxpY2Uobi5pbmRleE9mKHRbaV0pLDEpOnRoaXMuY2xlYXIoKTphKHRbaV0sdGhpcy50b0JCb3gpfSxyfSk7XG4iLCIvL0B0cy1jaGVja1xuZXhwb3J0IGNsYXNzIENhbnZhc1BsdXMge1xuXG4gICAgLy9jaGVjazpcbiAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9rYW5nYXgvZmFicmljLmpzL1xuICAgIC8vaHR0cDovL2tpbmV0aWNqcy5jb20vXG4gICAgLy9odHRwOi8vd3d3LmNyZWF0ZWpzLmNvbS9Eb2NzL0Vhc2VsSlMvY2xhc3Nlcy9Nb3VzZUV2ZW50Lmh0bWxcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYW52YXNJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZW50ZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNJZCA9IFwidmFjYW52YXNcIiwgY2VudGVyID0gdW5kZWZpbmVkLCBwcyA9IDEpIHtcblxuICAgICAgICAvKiogQHR5cGUgeyp9ICovXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudztcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oO1xuXG4gICAgICAgIC8qKkB0eXBlIHtPYmplY3R9ICovXG4gICAgICAgIHRoaXMuYzJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIC8vIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyXG4gICAgICAgIC8qKiBAdHlwZSB7e3g6bnVtYmVyLHk6bnVtYmVyfX0gKi9cbiAgICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXIgfHwgeyB4OiB0aGlzLncgKiAwLjUsIHk6IHRoaXMuaCAqIDAuNSB9XG5cbiAgICAgICAgLy8gem9vbSBmYWN0b3I6IHBpeGVsIHNpemUsIGluIG0vcGl4XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnBzID0gcHM7XG5cbiAgICAgICAgLy9leHRlbnRcbiAgICAgICAgLyoqIEB0eXBlIHt7eE1pbjpudW1iZXIseE1heDpudW1iZXIseU1pbjpudW1iZXIseU1heDpudW1iZXJ9fSAqL1xuICAgICAgICB0aGlzLmV4dEdlbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51cGRhdGVFeHRlbnRHZW8oKVxuXG4gICAgICAgIC8vbW91c2UgY2xpY2sgLSBwYW5cbiAgICAgICAgbGV0IG1wYW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4geyBtcGFuID0gdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChtcGFuKSB0aGlzLnBhbigtZS5tb3ZlbWVudFggKiB0aGlzLnBzLCBlLm1vdmVtZW50WSAqIHRoaXMucHMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlID0+IHsgbXBhbiA9IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vbW91c2Ugd2hlZWwgLSB6b29tXG4gICAgICAgIGNvbnN0IGYgPSAxLjVcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZl8gPSBlLmRlbHRhWSA+IDAgPyBmIDogMSAvIGY7XG4gICAgICAgICAgICB0aGlzLnpvb20oZl8sIHRoaXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHRoaXMucGl4VG9HZW9ZKGUub2Zmc2V0WSkpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm5zIHt0aGlzfSAqL1xuICAgIHJlZHJhdygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPdmVycmlkZSByZWRyYXcgbWV0aG9kXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL2NvbnZlcnNpb24gZnVuY3Rpb25zXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhHZW9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2VvVG9QaXhYKHhHZW8pIHsgcmV0dXJuICh4R2VvIC0gdGhpcy5jZW50ZXIueCkgLyB0aGlzLnBzICsgdGhpcy53ICogMC41OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlHZW9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2VvVG9QaXhZKHlHZW8pIHsgcmV0dXJuIC0oeUdlbyAtIHRoaXMuY2VudGVyLnkpIC8gdGhpcy5wcyArIHRoaXMuaCAqIDAuNTsgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIHBpeFRvR2VvWCh4KSB7IHJldHVybiAoeCAtIHRoaXMudyAqIDAuNSkgKiB0aGlzLnBzICsgdGhpcy5jZW50ZXIueDsgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIHBpeFRvR2VvWSh5KSB7IHJldHVybiAtKHkgLSB0aGlzLmggKiAwLjUpICogdGhpcy5wcyArIHRoaXMuY2VudGVyLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeEdlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeUdlb1xuICAgICAqL1xuICAgIHBhbihkeEdlbywgZHlHZW8pIHtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSBkeEdlbztcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSBkeUdlbztcbiAgICAgICAgdGhpcy51cGRhdGVFeHRlbnRHZW8oKVxuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhHZW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUdlb1xuICAgICAqL1xuICAgIHpvb20oZiA9IDEsIHhHZW8gPSB0aGlzLmNlbnRlci54LCB5R2VvID0gdGhpcy5jZW50ZXIueSkge1xuICAgICAgICB0aGlzLnBzICo9IGY7XG4gICAgICAgIHRoaXMuY2VudGVyLnggKz0gKHhHZW8gLSB0aGlzLmNlbnRlci54KSAqICgxIC0gZilcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSAoeUdlbyAtIHRoaXMuY2VudGVyLnkpICogKDEgLSBmKVxuICAgICAgICB0aGlzLnVwZGF0ZUV4dGVudEdlbygpXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hcmdpblB4IFxuICAgICAqL1xuICAgIHVwZGF0ZUV4dGVudEdlbyhtYXJnaW5QeCA9IDIwKSB7XG4gICAgICAgIHRoaXMuZXh0R2VvID0ge1xuICAgICAgICAgICAgeE1pbjogdGhpcy5waXhUb0dlb1goLW1hcmdpblB4KSxcbiAgICAgICAgICAgIHhNYXg6IHRoaXMucGl4VG9HZW9YKHRoaXMudyArIG1hcmdpblB4KSxcbiAgICAgICAgICAgIHlNaW46IHRoaXMucGl4VG9HZW9ZKHRoaXMuaCArIG1hcmdpblB4KSxcbiAgICAgICAgICAgIHlNYXg6IHRoaXMucGl4VG9HZW9ZKC1tYXJnaW5QeClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvYmplY3QgaGFzIHRvIGJlIGRyYXduXG4gICAgICogXG4gICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBvYmogXG4gICAgICovXG4gICAgdG9EcmF3KG9iaikge1xuICAgICAgICBpZiAob2JqLnggPCB0aGlzLmV4dEdlby54TWluKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChvYmoueCA+IHRoaXMuZXh0R2VvLnhNYXgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG9iai55IDwgdGhpcy5leHRHZW8ueU1pbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAob2JqLnkgPiB0aGlzLmV4dEdlby55TWF4KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIiwiLy9AdHMtY2hlY2tcblxuLy9zZWUgaHR0cHM6Ly9naXRodWIuY29tL21vdXJuZXIvcmJ1c2hcbmltcG9ydCBSQnVzaCBmcm9tICdyYnVzaCc7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZXhwb3J0IGNsYXNzIFNwYXRpYWxJbmRleCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2xhc3MgTXlSQnVzaCBleHRlbmRzIFJCdXNoIHtcbiAgICAgICAgICAgIC8qKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IG9iaiAgKi9cbiAgICAgICAgICAgIHRvQkJveChvYmopIHsgcmV0dXJuIHsgbWluWDogb2JqLngsIG1pblk6IG9iai55LCBtYXhYOiBvYmoueCwgbWF4WTogb2JqLnkgfTsgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGEgXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGIgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbXBhcmVNaW5YKGEsIGIpIHsgcmV0dXJuIGEueCAtIGIueDsgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGEgXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGIgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbXBhcmVNaW5ZKGEsIGIpIHsgcmV0dXJuIGEueSAtIGIueTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHtNeVJCdXNofSAqL1xuICAgICAgICB0aGlzLnRyZWUgPSBuZXcgTXlSQnVzaCgpO1xuICAgIH1cblxuICAgIC8vVE9ETyBidWxrIGluc2VydCBhbmQgcmVtb3ZlID9cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHltaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1heFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWF4XG4gICAgICogQHJldHVybiB7QXJyYXkuPFQ+fVxuICAgICAqL1xuICAgIGdldCh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuc2VhcmNoKHtcbiAgICAgICAgICAgIG1pblg6IHhtaW4sXG4gICAgICAgICAgICBtaW5ZOiB5bWluLFxuICAgICAgICAgICAgbWF4WDogeG1heCxcbiAgICAgICAgICAgIG1heFk6IHltYXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKi9cbiAgICBpbnNlcnQob2JqKSB7XG4gICAgICAgIHRoaXMudHJlZS5pbnNlcnQob2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqL1xuICAgIHJlbW92ZShvYmopIHtcbiAgICAgICAgdGhpcy50cmVlLnJlbW92ZShvYmopXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gKi9cbmV4cG9ydCBjb25zdCBvYmpUb0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBvdXQucHVzaChvYmpba2V5XSk7XG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBhcnJcbiAqIEBwYXJhbSB7VH0gb2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zZyBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaiwgbXNnID0gdHJ1ZSkge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgaWYgKG1zZykgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG5cbi8qKlxuICogXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtBcnJheS48VD59IG9ianMgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zZyBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheVMgPSBmdW5jdGlvbiAoYXJyLCBvYmpzLCBtc2cgPSB0cnVlKSB7XG4gICAgZm9yIChsZXQgb2JqIG9mIG9ianMpXG4gICAgICAgIHJlbW92ZUZyb21BcnJheShhcnIsIG9iaiwgbXNnKVxufTtcbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTZWEgfSBmcm9tIFwiLi9TZWFcIlxuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gXCIuLi9iYXNlL0NhbnZhc1BsdXNcIlxuXG4vKiogKi9cbmV4cG9ydCBjbGFzcyBTYXJkaW4ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZWF9IHNlYSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdnggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlYSwgeCA9IHNlYS53ICogTWF0aC5yYW5kb20oKSwgeSA9IHNlYS5oICogTWF0aC5yYW5kb20oKSwgdnggPSB1bmRlZmluZWQsIHZ5ID0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtTZWF9ICovXG4gICAgICAgIHRoaXMuc2VhID0gc2VhO1xuXG4gICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBzZWEudyA/IHNlYS53IDogeFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geSA8IDAgPyAwIDogeSA+IHNlYS5oID8gc2VhLmggOiB5XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eSA9IDA7XG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICBpZiAoIXZ4ICYmICF2eSkge1xuICAgICAgICAgICAgdGhpcy5zZXRSYW5kb21TcGVlZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgICAgICAgICB0aGlzLnYgPSBNYXRoLmh5cG90KHZ4LCB2eSk7XG4gICAgICAgICAgICB0aGlzLnZhID0gTWF0aC5hdGFuMih2eSwgdngpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hY2NlbGVyYXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuYXggPSAwXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmF5ID0gMFxuXG4gICAgICAgIC8vYWRkIHRvIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgdGhpcy5zZWEuZ3JpZC5pbnNlcnQodGhpcylcblxuICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiB2aXNpb24gZmllbGRcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5vYnMgPSBbXVxuICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiBjb2xsaXNpb24gZmllbGRcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5jb2wgPSBbXVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0IHJhbmRvbSBzcGVlZFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICovXG4gICAgc2V0UmFuZG9tU3BlZWQobWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IHRoaXMuc2VhLlZfTUFYKSB7XG4gICAgICAgIHRoaXMudmEgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMudiA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgdGhpcy52eCA9IHRoaXMudiAqIE1hdGguY29zKHRoaXMudmEpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52ICogTWF0aC5zaW4odGhpcy52YSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuXG4gICAgICAgIC8vaW5pdGlhbGlzZSBsaXN0c1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLm9icyA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLmNvbCA9IFtdO1xuXG4gICAgICAgIC8vZ2V0IHNhcmRpbnMgYXJvdW5kIHVzaW5nIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLnNlYS5ncmlkLmdldCh0aGlzLnggLSB0aGlzLnNlYS5EX09CUywgdGhpcy55IC0gdGhpcy5zZWEuRF9PQlMsIHRoaXMueCArIHRoaXMuc2VhLkRfT0JTLCB0aGlzLnkgKyB0aGlzLnNlYS5EX09CUyk7XG5cbiAgICAgICAgLy9nZXQgc2FyZGlucyBpbiBvYnNlcnZhdGlvbiBhbmQgY29sbGlzaW9uIGZpZWxkc1xuICAgICAgICBmb3IgKGxldCBzIG9mIHNzKSB7XG4gICAgICAgICAgICBpZiAocyA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQocykgPD0gdGhpcy5zZWEuRF9DT0wpIHRoaXMuY29sLnB1c2gocyk7XG4gICAgICAgICAgICBpZiAodGhpcy5kKHMpIDw9IHRoaXMuc2VhLkRfT0JTKSB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBhbmdsZVxuICAgICAgICAgICAgICAgIGxldCBkYSA9IE1hdGguYXRhbjIocy55IC0gdGhpcy55LCBzLnggLSB0aGlzLngpIC0gdGhpcy52YTtcbiAgICAgICAgICAgICAgICBpZiAoZGEgPiBNYXRoLlBJKSBkYSAtPSAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYSA8PSAtTWF0aC5QSSkgZGEgKz0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZGEgPSBNYXRoLmFicyhkYSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gdGhpcy5zZWEuQV9PQlMgKiAwLjUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzLnB1c2gocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2luaXRpYWxpc2UgYWNjZWxlcmF0aW9uXG4gICAgICAgIHRoaXMuYXggPSAwOyB0aGlzLmF5ID0gMDtcblxuICAgICAgICAvL2NvbGxpc2lvbjogcmVwdWxzaW9uXG4gICAgICAgIGZvciAobGV0IHMgb2YgdGhpcy5jb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmQocyk7XG4gICAgICAgICAgICBjb25zdCBhID0gMS4wICogKDEgLyAoZCAqIGQpIC0gMSAvICh0aGlzLnNlYS5EX0NPTCAqIHRoaXMuc2VhLkRfQ09MKSk7XG4gICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiAodGhpcy54IC0gcy54KSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gcy55KSAvIGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b3dhcmQgdiB0YXJnZXRcbiAgICAgICAgY29uc3QgZHYgPSAodGhpcy5zZWEuVl9UQVJHRVQgLSB0aGlzLnYpICogMC4wMTtcbiAgICAgICAgdGhpcy5heCArPSBkdiAqIHRoaXMudnggLyB0aGlzLnY7XG4gICAgICAgIHRoaXMuYXkgKz0gZHYgKiB0aGlzLnZ5IC8gdGhpcy52O1xuXG4gICAgICAgIC8vdG93YXJkIHRoZSBvYnNlcnZlZCBtZWFuIHBvc2l0aW9uXG4gICAgICAgIC8qaWYob2JzLnNpemUoKT4xKXtcbiAgICAgICAgICAgIGRvdWJsZSB4bj0wLHluPTA7XG4gICAgICAgICAgICBmb3IoU2FyZGluIHM6b2JzKXtcbiAgICAgICAgICAgICAgICB4bis9cy54O1xuICAgICAgICAgICAgICAgIHluKz1zLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4bj14bi9vYnMuc2l6ZSgpO1xuICAgICAgICAgICAgeW49eW4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIGRvdWJsZSBkPU1hdGguaHlwb3QoeG4teCx5bi15KTtcbiAgICAgICAgICAgIGF4Kz0tMC4xKih4LXhuKS9kO1xuICAgICAgICAgICAgYXkrPS0wLjEqKHkteW4pL2Q7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIC8vdG93YXJkIHRoZSBvYnNlcnZlZCBzcGVlZFxuICAgICAgICBjb25zdCB0ID0gMC45O1xuICAgICAgICBpZiAodGhpcy5vYnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IGR2eCA9IDAsIGR2eSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICAgICAgZHZ4ICs9IHMudng7XG4gICAgICAgICAgICAgICAgZHZ5ICs9IHMudnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkdnggPSAodCAtIDEpICogdGhpcy52eCArICgxIC0gdCkgKiBkdnggLyB0aGlzLm9icy5sZW5ndGg7XG4gICAgICAgICAgICBkdnkgPSAodCAtIDEpICogdGhpcy52eSArICgxIC0gdCkgKiBkdnkgLyB0aGlzLm9icy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNvbnN0IGEgPSAwLjE7XG4gICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiBkdng7XG4gICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiBkdnk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2F2b2lkIHNoYXJrXG4gICAgICAgIGlmICh0aGlzLnNlYS5zaGFyayAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5zZWEuc2hhcms7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5oeXBvdCgocy54IC0gdGhpcy54KSwgKHMueSAtIHRoaXMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPD0gdGhpcy5zZWEuRF9PQlMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gNS4wICogKDEgLyAoZCAqIGQpIC0gMSAvICh0aGlzLnNlYS5EX09CUyAqIHRoaXMuc2VhLkRfT0JTKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIHMueCkgLyBkO1xuICAgICAgICAgICAgICAgIHRoaXMuYXkgKz0gYSAqICh0aGlzLnkgLSBzLnkpIC8gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBtb3ZlKHRpbWVTdGVwTXMgPSAxMCkge1xuICAgICAgICB0aGlzLnNlYS5ncmlkLnJlbW92ZSh0aGlzKTtcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgICAgIHRoaXMudnggKz0gdGhpcy5heCAqIHRpbWVTdGVwTXMgKyAoMSAtIDIgKiBNYXRoLnJhbmRvbSgpKSAqIDAuMDI7XG4gICAgICAgIHRoaXMudnkgKz0gdGhpcy5heSAqIHRpbWVTdGVwTXMgKyAoMSAtIDIgKiBNYXRoLnJhbmRvbSgpKSAqIDAuMDI7XG4gICAgICAgIHRoaXMudiA9IE1hdGguaHlwb3QodGhpcy52eCwgdGhpcy52eSk7XG4gICAgICAgIHRoaXMudmEgPSBNYXRoLmF0YW4yKHRoaXMudnksIHRoaXMudngpO1xuICAgICAgICBpZiAodGhpcy52ID4gdGhpcy5zZWEuVl9NQVgpIHtcbiAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuc2VhLlZfTUFYO1xuICAgICAgICAgICAgdGhpcy52eCA9IHRoaXMuc2VhLlZfTUFYICogTWF0aC5jb3ModGhpcy52YSk7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLnNpbih0aGlzLnZhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9saW1pdFxuICAgICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gdGhpcy5zZWEudztcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IHRoaXMuc2VhLmg7XG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLnNlYS53KSB0aGlzLnggPSAwO1xuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5zZWEuaCkgdGhpcy55ID0gMDtcblxuICAgICAgICAvL1xuICAgICAgICB0aGlzLnNlYS5ncmlkLmluc2VydCh0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2FyZGlufSBzIFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0byBhbm90aGVyIHNhcmRpbi5cbiAgICAgKi9cbiAgICBkKHMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguaHlwb3QoKHMueCAtIHRoaXMueCksIChzLnkgLSB0aGlzLnkpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYSBzYXJkaW4gYm9keVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3AgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBcbiAgICAgKi9cbiAgICBkaXNwbGF5KGNwLCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgY29uc3QgYyA9IE1hdGguZmxvb3IoMjU1ICogTWF0aC5hYnModGhpcy52YSkgLyBNYXRoLlBJKTtcbiAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcInJnYigyNTUsIDI1NSwgXCIgKyBjICsgXCIpXCJcbiAgICAgICAgY29uc3QgYSA9IGxlbmd0aCAvIHRoaXMudjtcbiAgICAgICAgY29uc3QgZHggPSBhICogdGhpcy52eCAqIDAuNTtcbiAgICAgICAgY29uc3QgZHkgPSBhICogdGhpcy52eSAqIDAuNTtcblxuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIubW92ZVRvKGNwLmdlb1RvUGl4WCh0aGlzLnggLSBkeCksIGNwLmdlb1RvUGl4WSh0aGlzLnkgLSBkeSkpO1xuICAgICAgICBjMi5saW5lVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCArIGR4KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSArIGR5KSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHNhcmRpbiB2aXNpb24gZmllbGRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsU3R5bGUgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVXaWR0aCBcbiAgICAgKi9cbiAgICBkaXNwbGF5VmlzaW9uRmllbGQoY3AsIGZpbGxTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5zZWEuRF9PQlMgLyBjcC5wcyxcbiAgICAgICAgICAgIE1hdGguUEkgLSB0aGlzLnZhICsgdGhpcy5zZWEuQV9PQlMgKiAwLjUsIE1hdGguUEkgLSB0aGlzLnZhIC0gdGhpcy5zZWEuQV9PQlMgKiAwLjUpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuZmlsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgc2FyZGluIHZpc2lvbiBsaW5rc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3AgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cm9rZVN0eWxlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lV2lkdGggXG4gICAgICovXG4gICAgZGlzcGxheVZpc2lvbkxpbmtzKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgZm9yIChsZXQgc2EyIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSkpO1xuICAgICAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WChzYTIueCksIGNwLmdlb1RvUGl4WShzYTIueSkpO1xuICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgc2FyZGluIGNvbGxpc2lvbiBmaWVsZFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3AgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cm9rZVN0eWxlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lV2lkdGggXG4gICAgICovXG4gICAgZGlzcGxheUNvbGxpc2lvbkZpZWxkKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuYzJkXG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLmFyYyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHRoaXMuc2VhLkRfQ09MICogMC41IC8gY3AucHMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLnN0cm9rZSgpO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFNhcmRpbiB9IGZyb20gJy4vU2FyZGluJztcbmltcG9ydCB7IFNwYXRpYWxJbmRleCB9IGZyb20gJy4uL2Jhc2UvU3BhdGlhbEluZGV4JztcbmltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcblxuLyoqICovXG5leHBvcnQgY2xhc3MgU2VhIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL1RPRE8gc2hvdWxkIGJlY29tZSBzdGF0aWMgYXR0cmlidXRlcyBvZiBTYXJkaW4gY2xhc3NcblxuICAgICAgICAvL29ic2VydmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLkRfT0JTID0gNTBcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuQV9PQlMgPSAyMDAgKiBNYXRoLlBJIC8gMTgwXG5cbiAgICAgICAgLy9jb2xsaXNpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuRF9DT0wgPSAxMFxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuVl9UQVJHRVQgPSAwLjNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuVl9NQVggPSAwLjZcblxuICAgICAgICAvL3NoYXJrXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLkRfU0hBUktfRUFUID0gMTJcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuRUFURU5fU0FSRElOX05CID0gMFxuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMuZmlzaCA9IFtdXG5cbiAgICAgICAgLyoqIEB0eXBlIHtTcGF0aWFsSW5kZXguPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBTcGF0aWFsSW5kZXgoKTtcblxuICAgICAgICAvL1RPRE9cbiAgICAgICAgdGhpcy5zaGFyayA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBzdGVwKHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vb2JzZXJ2ZVxuICAgICAgICBmb3IgKGxldCBzYSBvZiB0aGlzLmZpc2gpXG4gICAgICAgICAgICBzYS5vYnNlcnZlKCk7XG5cbiAgICAgICAgLy9tb3ZlXG4gICAgICAgIGZvciAobGV0IHNhIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIHNhLm1vdmUodGltZVN0ZXBNcyk7XG5cbiAgICAgICAgLy9zaGFyayBlYXQgZmlzaFxuICAgICAgICB0aGlzLnNoYXJrRWF0KCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzaGFya0VhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSB0aGlzLmdyaWQuZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkVBVEVOX1NBUkRJTl9OQiArPSB0aGlzLmtpbGxlZC5sZW5ndGg7XG4gICAgICAgIC8vZWF0ZW5GaXNoTmIuc2V0VGV4dChcIkVhdGVuIGZpc2g6IFwiICsgRUFURU5fU0FSRElOX05CKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGZpc2hcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgYWRkRmlzaChuYiA9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKVxuICAgICAgICAgICAgdGhpcy5maXNoLnB1c2gobmV3IFNhcmRpbih0aGlzKSk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHJhbmRvbSBzcGVlZCBmb3IgYWxsIGZpc2hcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzZXRSYW5kb21TcGVlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpc2gpXG4gICAgICAgICAgICBmLnNldFJhbmRvbVNwZWVkKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTZWEgfSBmcm9tICcuL1NlYSc7XG5pbXBvcnQgeyBDYW52YXNQbHVzIH0gZnJvbSAnLi4vYmFzZS9DYW52YXNQbHVzJztcblxuY2xhc3MgRmlzaFNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9UT0RPXG4gICAgICAgIC8vYWRkIGVhdGVuIGZpc2ggbmIgbGFiZWxcblxuICAgICAgICAvKiogQHR5cGUge0NhbnZhc1BsdXN9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgQ2FudmFzUGx1cygpO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuYzJkLmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuc2hvd0Zpc2hWaXNpb25GaWVsZCA9IGZhbHNlXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5zaG93RmlzaFZpc2lvbkxpbmtzID0gZmFsc2VcbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLnNob3dGaXNoQ29sbGlzaW9uRmllbGQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuYzJkXG4gICAgICAgICAgICBjb25zdCBzID0gdGguc2VhXG5cbiAgICAgICAgICAgIC8vY2xlYXJcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgxMjAsMTIwLDI1NSwwLjYpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkZpZWxkKHRoaXMsIFwicmdiYSgyMDAsMjAwLDIwMCwwLjE1KVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBsaW5rc1xuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uTGlua3MpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkxpbmtzKHRoaXMsIFwicmdiYSgyNTUsMTAwLDEwMCwwLjMpXCIsIDEpXG4gICAgICAgICAgICAvL3Nob3cgY29sbGlzaW9uIGZpZWxkXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hDb2xsaXNpb25GaWVsZClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhzYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5Q29sbGlzaW9uRmllbGQodGhpcywgXCJwdXJwbGVcIiwgMSlcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2FyZGluc1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMiAvIHRoaXMucHNcbiAgICAgICAgICAgIGNvbnN0IHNhcmRpbkxlbmd0aCA9IDdcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMuZmlzaClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5KHRoaXMsIHNhcmRpbkxlbmd0aClcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2hhcmtcbiAgICAgICAgICAgIGlmIChzLnNoYXJrICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDQgLyB0aGlzLnBzXG4gICAgICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJrTGVuZ3RoID0gMTIgLyB0aGlzLnBzXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzaGFya0xlbmd0aCAqIE1hdGguY29zKHMuc2hhcmsuYW5nbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc2hhcmtMZW5ndGggKiBNYXRoLnNpbihzLnNoYXJrLmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzLnNoYXJrLngpLCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpKTtcbiAgICAgICAgICAgICAgICBjMi5saW5lVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSAtIGR4LCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpIC0gZHkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYmxvb2Qgc3BvdFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDFcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIubW92ZVRvKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSk7XG4gICAgICAgICAgICAgICAgYzIuYXJjKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCkgLSAzLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpIC0gMywgdGgudyAvIHRoaXMucHMgKyAzLCB0aC5oIC8gdGhpcy5wcyArIDMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZSA9PiB7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSB7IHg6IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpLCB5OiB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKSwgYW5nbGU6IDAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhHID0gdGguY3BsdXMucGl4VG9HZW9YKGUub2Zmc2V0WCk7XG4gICAgICAgICAgICBjb25zdCB5RyA9IHRoLmNwbHVzLnBpeFRvR2VvWShlLm9mZnNldFkpO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKC15RyArIHRoLnNlYS5zaGFyay55LCB4RyAtIHRoLnNlYS5zaGFyay54KTtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IHsgeDogeEcsIHk6IHlHLCBhbmdsZTogYW5nbGUgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0gbnVsbDtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKiogQHR5cGUge1NlYX0gKi9cbiAgICAgICAgdGhpcy5zZWEgPSBuZXcgU2VhKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVuc2l0eSBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0UmFuZG9tKGRlbnNpdHkgPSAwLjAwMSkge1xuICAgICAgICB0aGlzLnNlYS5hZGRGaXNoKGRlbnNpdHkgKiB0aGlzLnNlYS53ICogdGhpcy5zZWEuaCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuc2VhLnN0ZXAodGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gKi9cbmV4cG9ydCBjb25zdCBmaXNoID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IEZpc2hTaW11bGF0aW9uKG9wdHMpXG59XG4iLCIvL0B0cy1jaGVja1xuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgQ2VsbCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbmI9MCkge1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5uYiA9IG5iXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgb2JqVG9BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL0NhbnZhc1BsdXMnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5cbi8qKlxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsQ2VsbD59ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge0NlbGx8bnVsbH1cbiAgICAgKi9cbiAgICBhZGQoeCwgeSkge1xuXG4gICAgICAgIC8vZmluZCBjZWxsIGF0IGxvY2F0aW9uXG4gICAgICAgIC8qKkB0eXBlIHtzdHJpbmd9Ki9cbiAgICAgICAgY29uc3QgaWQgPSB4ICsgXCJfXCIgKyB5O1xuICAgICAgICBpZiAodGhpcy5wb3B1bGF0aW9uSVtpZF0pIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgIC8qKkB0eXBlIHtDZWxsfSAqL1xuICAgICAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoeCwgeSwgMClcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goY2VsbClcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtpZF0gPSBjZWxsXG4gICAgICAgIHJldHVybiBjZWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RlcCgpIHtcblxuICAgICAgICAvL1RPRE8gZG91YmxlIGluZGV4aW5nPyBieSByYXcgYW5kIHRoZW4gY29sdW1uID9cbiAgICAgICAgLy9wb3B1bGF0ZSBjZWxsIHN1cnJvdW5kaW5nc1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3Qgc3VySSA9IHt9O1xuICAgICAgICAvL2dvIHRocm91Z2ggbGlzdCBvZiBjZWxsc1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgLy8gKzEgc3Vycm91bmRpbmcgY2VsbHNcbiAgICAgICAgICAgIGNvbnN0IHNycyA9IFVuaXZlcnNlLmdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB0aGlzKTtcbiAgICAgICAgICAgIGZvciAobGV0IHN1ciBvZiBzcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VyXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3VyXykge1xuICAgICAgICAgICAgICAgICAgICBzdXJfLm5iKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyLm5iID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3VySVtrZXldID0gc3VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQjMvUzIzXG4gICAgICAgIC8va2lsbCBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXAgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwSSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2VsbC54ICsgXCJfXCIgKyBjZWxsLnk7XG4gICAgICAgICAgICBjb25zdCBjZWxsXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgIGlmICghY2VsbF8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy9pZiAobmI8MiBvciBuYj4zKSAtPiBraWxsXG4gICAgICAgICAgICBpZiAoY2VsbF8ubmIgPCAyIHx8IGNlbGxfLm5iID4gMykgY29udGludWU7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcC5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXBJW2tleV0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IGNlbGxzVG9LZWVwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0gY2VsbHNUb0tlZXBJO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3Qgc3VycyA9IG9ialRvQXJyYXkoc3VySSk7XG4gICAgICAgIGZvciAobGV0IHN1ciBvZiBzdXJzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdXIubmIgIT09IDMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGFscmVhZHkgYWxpdmVcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtrZXldO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goc3VyKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbklba2V5XSA9IHN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TVNcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1BsdXN9IGNwbHVzXG4gICAgICogQHJldHVybiB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RhcnQobmIsIHRpbWVvdXRNUywgY3BsdXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB1bmkgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgdW5pLnN0ZXAoKTtcbiAgICAgICAgICAgIGNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iID4gMCAmJiBpKysgPiBuYikgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIHRpbWVvdXRNUyk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NlbGx9IGNlbGxcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1bmlcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48Q2VsbD59XG4gICAgICovXG4gICAgc3RhdGljIGdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB1bmkpIHtcbiAgICAgICAgY29uc3QgeDEgPSBjZWxsLnggPT09IDAgPyB1bmkudyAtIDEgOiBjZWxsLnggLSAxO1xuICAgICAgICBjb25zdCB4MiA9IGNlbGwueCA9PT0gdW5pLncgLSAxID8gMCA6IGNlbGwueCArIDE7XG4gICAgICAgIGNvbnN0IHkxID0gY2VsbC55ID09PSAwID8gdW5pLmggLSAxIDogY2VsbC55IC0gMTtcbiAgICAgICAgY29uc3QgeTIgPSBjZWxsLnkgPT09IHVuaS5oIC0gMSA/IDAgOiBjZWxsLnkgKyAxO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IENlbGwoeDEsIHkxKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgxLCBjZWxsLnkpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDEsIHkyKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKGNlbGwueCwgeTEpLFxuICAgICAgICAgICAgbmV3IENlbGwoY2VsbC54LCB5MiksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MiwgeTEpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDIsIGNlbGwueSksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MiwgeTIpLFxuICAgICAgICBdO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL0NhbnZhc1BsdXMnO1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tICcuL1VuaXZlcnNlJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuL0NlbGwnO1xuXG4vL1RPRE8gem9vbS9wYW4sIHdpdGggY2FudmFzIHRyYW5zZm9ybTogYmV0dGVyIHVuaXZlcnNlIGxpbWl0c1xuLy9UT0RPIGJ1dHRvbnMgKHBsYXksIHN0b3AsIHNwZWVkLCBkcmF3LCBwYW4pXG4vL1RPRE8gY2hlY2sgY2FudmFzIGFuaW1hdGlvblxuXG5cbmNsYXNzIEdvTFNpbXVsYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMoKTtcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kcmF3IGNlbGxzXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGgudW5pLnBvcHVsYXRpb24pXG4gICAgICAgICAgICAgICAgYzIuZmlsbFJlY3QodGhpcy5nZW9Ub1BpeFgoY2VsbC54KSwgdGhpcy5nZW9Ub1BpeFkoY2VsbC55KSwgMSAvIHRoaXMucHMsIDEgLyB0aGlzLnBzKTtcblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImxpZ2h0Z3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5wcywgdGguaCAvIHRoaXMucHMpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKGRlbnNpdHkgPSAwLjA1KSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IG5iID0gdGhpcy51bmkudyAqIHRoaXMudW5pLmggKiBkZW5zaXR5O1xuICAgICAgICB3aGlsZSAoaSA8IG5iKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS53ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy51bmkuYWRkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8vXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudW5pLnN0YXJ0KC0xLCAwLCB0aGlzLmNwbHVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IGdhbWVPZkxpZmUgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgR29MU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcblxuZXhwb3J0ICogZnJvbSBcIi4vcGxhbmV0cy9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb2wvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlzaC9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcC9pbmRleFwiXG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tIFwiLi9Vbml2ZXJzZVwiO1xuaW1wb3J0IHtDYW52YXNQbHVzfSBmcm9tIFwiLi4vYmFzZS9DYW52YXNQbHVzXCJcblxuZXhwb3J0IGNsYXNzIFBsYW5ldCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1VuaXZlcnNlfSB1IFRoZSB1bml2ZXJzZSB0aGUgcGxhbmV0IGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIG1hc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ4IFRoZSBzcGVlZCB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZ5IFRoZSBzcGVlZCB5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodSwgbSwgeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm0gPSBtO1xuXG4gICAgICAgIC8vY29tcHV0ZSByYWRpdXNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcblxuICAgICAgICAvL3NldCBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IHIgPyByIDogeCA+IHUudyAtIHIgPyB1LncgLSByIDogeDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCByID8gciA6IHkgPiB1LmggLSByID8gdS5oIC0gciA6IHk7XG5cbiAgICAgICAgLy9zZXQgc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudnkgPSB2eTtcblxuICAgICAgICAvL3NldCBmb3JjZVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZ5ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGZvcmNlLCBiYXNlZCBvbiB0aGUgZ3Jhdml0eSBvZiBvdGhlciBwbGFuZXRzLlxuICAgICAqL1xuICAgIG9ic2VydmUoKSB7XG5cbiAgICAgICAgdGhpcy5meCA9IDA7XG4gICAgICAgIHRoaXMuZnkgPSAwO1xuXG4gICAgICAgIC8vY2hlY2sgYWxsIG90aGVyIHBsYW5ldHMgaW4gdGhlIHVuaXZlcnNlXG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy51LnBzKSB7XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NvbXB1dGUgYW5kIGFkZCBncmF2aXR5IGZvcmNlXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5kKHApO1xuICAgICAgICAgICAgaWYgKGQgPT09IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGQgPSBkICogZCAqIGQ7XG4gICAgICAgICAgICB0aGlzLmZ4ICs9IDAuMDEgKiAocC54IC0gdGhpcy54KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmZ5ICs9IDAuMDEgKiAocC55IC0gdGhpcy55KSAqIHRoaXMubSAqIHAubSAvIGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIHRoZSBwbGFuZXQgcC5cbiAgICAgKi9cbiAgICBkKHApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGR4ID0gcC54IC0gdGhpcy54O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgcGxhbmV0LCBkZXBlbmRpbmcgb24gaXRzIG1hc3MuXG4gICAgICovXG4gICAgcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMubSAvIE1hdGguUEksIDAuNSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBib3VuY2UgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZtYXggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgY2hhbmdlKGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCB0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL2NvbXB1dGUgYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheCA9IHRoaXMuZnggLyB0aGlzLm07XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBheSA9IHRoaXMuZnkgLyB0aGlzLm07XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnZ4ICs9IGF4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy52eSArPSBheSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9jaGVjayB2bWF4XG4gICAgICAgIGlmICh2bWF4ID4gMCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5zcXJ0KHRoaXMudnggKiB0aGlzLnZ4ICsgdGhpcy52eSAqIHRoaXMudnkpO1xuICAgICAgICAgICAgaWYgKHYgPiB2bWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IHZtYXggKiB0aGlzLnZ4IC8gdjtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdm1heCAqIHRoaXMudnkgLyB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IG54ID0gdGhpcy54ICsgdGhpcy52eCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBsZXQgbnkgPSB0aGlzLnkgKyB0aGlzLnZ5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2hhbmRsZSBwb3NpdGlvbiBsaW1pdFxuICAgICAgICBpZiAoYm91bmNlKSB7XG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG4gICAgICAgICAgICBjb25zdCBlID0gMTtcbiAgICAgICAgICAgIGlmIChueCA8IHIpIHsgbnggPSByOyB0aGlzLnZ4ID0gLXRoaXMudnggKiBlOyB9XG4gICAgICAgICAgICBpZiAobnkgPCByKSB7IG55ID0gcjsgdGhpcy52eSA9IC10aGlzLnZ5ICogZTsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncgLSByKSB7IG54ID0gdGhpcy51LncgLSByOyB0aGlzLnZ4ID0gLXRoaXMudnggKiBlOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCAtIHIpIHsgbnkgPSB0aGlzLnUuaCAtIHI7IHRoaXMudnkgPSAtdGhpcy52eSAqIGU7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChueCA8IDApIHsgbnggPSB0aGlzLnUudzsgfVxuICAgICAgICAgICAgaWYgKG55IDwgMCkgeyBueSA9IHRoaXMudS5oOyB9XG4gICAgICAgICAgICBpZiAobnggPiB0aGlzLnUudykgeyBueCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChueSA+IHRoaXMudS5oKSB7IG55ID0gMDsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9tb3ZlIHBsYW5ldFxuICAgICAgICB0aGlzLnUubW92ZSh0aGlzLCBueCwgbnkpXG4gICAgfVxuXG5cbiAgICAvKiogXG4gICAgKiBTZXQgcmFuZG9tIHNwZWVkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICovXG4gICAgc2V0UmFuZG9tU3BlZWQobWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMudnggPSBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICB0aGlzLnZ5ID0gc3BlZWQgKiBNYXRoLnNpbihhbmdsZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHBsYW5ldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3AgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGxTdHlsZSBcbiAgICAgKi9cbiAgICBkaXNwbGF5KGNwLCBmaWxsU3R5bGUpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jMmRcbiAgICAgICAgYzIuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5yKCkgLyBjcC5wcywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuZmlsbCgpO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IHJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL2Jhc2UvbGliJztcbmltcG9ydCB7IFNwYXRpYWxJbmRleCB9IGZyb20gJy4uL2Jhc2UvU3BhdGlhbEluZGV4JztcbmltcG9ydCB7IFBsYW5ldCB9IGZyb20gJy4vUGxhbmV0JztcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG5cbiAgICAgICAgLyoqIEB0eXBlIHtTcGF0aWFsSW5kZXguPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBTcGF0aWFsSW5kZXgoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBtYXNzIG9mIHRoZSB1bml2ZXJzZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbSgpIHtcbiAgICAgICAgbGV0IG0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBtICs9IHAubTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG0gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeSBcbiAgICAgKiBAcmV0dXJucyB7UGxhbmV0fVxuICAgICAqL1xuICAgIGNyZWF0ZVBsYW5ldChtLCB4LCB5LCBzeCA9IDAsIHN5ID0gMCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldCh0aGlzLCBtLCB4LCB5LCBzeCwgc3kpO1xuICAgICAgICB0aGlzLmFkZChwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAgXG4gICAgICovXG4gICAgYWRkKHApIHtcbiAgICAgICAgcC51ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcy5wdXNoKHApO1xuICAgICAgICB0aGlzLmdyaWQuaW5zZXJ0KHApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHBsYW5ldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwIFxuICAgICAqL1xuICAgIHJlbW92ZShwKSB7XG4gICAgICAgIHAudSA9IG51bGw7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBwKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlbW92ZShwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcGxhbmV0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnlcbiAgICAgKi9cbiAgICBtb3ZlKHAsIG54LCBueSkge1xuICAgICAgICB0aGlzLmdyaWQucmVtb3ZlKHApO1xuICAgICAgICBwLnggPSBueDsgcC55ID0gbnk7XG4gICAgICAgIHRoaXMuZ3JpZC5pbnNlcnQocCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWdncmVnYXRlIHR3byBwbGFuZXRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAxXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAyXG4gICAgICogQHJldHVybnMge1BsYW5ldH1cbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUocDEsIHAyKSB7XG4gICAgICAgIGNvbnN0IG0gPSBwMS5tICsgcDIubTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlUGxhbmV0KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ4ICogcDEubSArIHAyLnZ4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnZ5ICogcDEubSArIHAyLnZ5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHAxKTtcbiAgICAgICAgdGhpcy5yZW1vdmUocDIpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3JcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFBsYW5ldD59XG4gICAgICovXG4gICAgZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHBpIG9mIHRoaXMucHMpIHtcblxuICAgICAgICAgICAgY29uc3QgdyA9IDIgKiBwaS5yKCk7XG4gICAgICAgICAgICBjb25zdCBjYW5kID0gdGhpcy5ncmlkLmdldChwaS54IC0gdywgcGkueSAtIHcsIHBpLnggKyB3LCBwaS55ICsgdyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHBqIG9mIGNhbmQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChwaSA9PSBwaikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMSA9IHBpLmQocGopO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQyID0gKHBpLnIoKSArIHBqLnIoKSkgKiBjb2xsaXNpb25GYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbcGksIHBqXTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIHBsYW5ldHMgd2l0aCByYW5kb20gc3BlZWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGFkZFBsYW5ldHMobmIgPSAxLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZVBsYW5ldChtaSwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBwLnNldFJhbmRvbVNwZWVkKG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2bWF4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3IgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RlcChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLm9ic2VydmUoKTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICAvL2ZpbmQgZmlyc3QgY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIGxldCBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSlcbiAgICAgICAgICAgIC8vZmluZCBuZXh0IGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbiByYW5kb20gc3BlZWQgdG8gYWxsIHBsYW5ldHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5zZXRSYW5kb21TcGVlZChtaW5TcGVlZCwgbWF4U3BlZWQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1BsYW5ldH0gVGhlIGxhcmdlc3QgcGxhbmV0IG9mIHRoZSB1bml2ZXJzZSwgdXN1YWxseSB0aGUgc3Rhci5cbiAgICAgKi9cbiAgICBnZXRMYXJnZXN0UGxhbmV0KCkge1xuICAgICAgICBsZXQgcE0gPSBudWxsLCBtTSA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIGlmIChwLm0gPiBtTSkgeyBwTSA9IHA7IG1NID0gcC5tIH1cbiAgICAgICAgcmV0dXJuIHBNXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGxhcmdlc3QgcGxhbmV0IGFuZCBleHBsb2RlIGl0LlxuICAgICAqL1xuICAgIGV4cGxvZGVMYXJnZXN0UGxhbmV0KCkge1xuICAgICAgICBjb25zdCBwID0gdGhpcy5nZXRMYXJnZXN0UGxhbmV0KClcbiAgICAgICAgdGhpcy5leHBsb2RlKHApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwbG9kZSBhIHBsYW5ldCBpbnRvIHBpZWNlc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWQgXG4gICAgICovXG4gICAgZXhwbG9kZShwLCBuYiA9IC0xLCBtaW5TcGVlZCA9IDAuOCwgbWF4U3BlZWQgPSAxLjUsIHJhZCA9IC0xKSB7XG4gICAgICAgIGlmIChuYiA8PSAwKSBuYiA9IE1hdGguZmxvb3IocC5tKTtcbiAgICAgICAgaWYgKG5iIDw9IDApIHJldHVybjtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMiAqIE1hdGguUEkgLyBuYjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICAvL2NyZWF0ZSBwbGFuZXRcblxuICAgICAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICAgICAgaWYgKHJhZCA8IDApIHJhZCA9IDIgKiBwLnIoKVxuICAgICAgICAgICAgY29uc3QgZCA9IHJhZCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBjb25zdCBhID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgIGNvbnN0IHggPSBkICogTWF0aC5jb3MoYSksIHkgPSBkICogTWF0aC5zaW4oYSk7XG5cbiAgICAgICAgICAgIC8vc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gbWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKG1heFNwZWVkIC0gbWluU3BlZWQpO1xuICAgICAgICAgICAgY29uc3QgYVMgPSBhICsgMiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gc3BlZWQgKiBNYXRoLmNvcyhhUyksIHN5ID0gc3BlZWQgKiBNYXRoLnNpbihhUyk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxhbmV0KHAubSAvIG5iLCBwLnggKyB4LCBwLnkgKyB5LCBwLnZ4ICsgc3gsIHAudnkgKyBzeSlcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBwIGZyb20gdW5pdmVyc2VcbiAgICAgICAgdGhpcy5yZW1vdmUocClcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuaW1wb3J0IHsgQ2FudmFzUGx1cyB9IGZyb20gJy4uL2Jhc2UvQ2FudmFzUGx1cyc7XG5cbi8qKiAgKi9cbmNsYXNzIFBsYW5ldFNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMoKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jMmRcblxuICAgICAgICAgICAgLy9jbGVhciwgd2l0aCB0cmFuc3BhcmVuY3lcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjA1KVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBwbGFuZXRzXG4gICAgICAgICAgICBmb3IgKGxldCBwIG9mIHRoLnVuaS5wcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50b0RyYXcocCkpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHAubSAvIHRoLnVuaS5tKCk7XG4gICAgICAgICAgICAgICAgcC5kaXNwbGF5KHRoaXMsIFwicmdiKDI1NSwyNTUsXCIgKyBNYXRoLmZsb29yKDI1NSAqICgxIC0gdCkpICsgXCIpXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vbGFiZWxcbiAgICAgICAgICAgIC8qYzIuZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDIwMCwyMDApXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICBjMi5maWxsVGV4dCh0aC51bmkucHMubGVuZ3RoICsgXCIgcGxhbmV0c1wiLCAyLCAxMCk7Ki9cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLnBzLCB0aC5oIC8gdGhpcy5wcyk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSB3aXRoIHJhbmRvbSBwbGFuZXRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRSYW5kb20obmIgPSAxMDAwLCBtaSA9IDAuNSwgbWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnVuaS5wcyA9IFtdO1xuICAgICAgICB0aGlzLnVuaS5hZGRQbGFuZXRzKG5iLCBtaSwgbWluU3BlZWQsIG1heFNwZWVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSB3aXRoIGJpZyBiYW5nIHNldHVwXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWQgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgaW5pdEJpZ0JhbmcobmIgPSAxMDAwLCBtaSA9IDEsIG1pblNwZWVkID0gMC4zNSwgbWF4U3BlZWQgPSAwLjcsIHJhZCA9IDEwMCkge1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnVuaS5wcyA9IFtdO1xuICAgICAgICAvL2NyZWF0ZSBiaWcgcGxhbmV0IGluIHRoZSBtaWRkbGVcbiAgICAgICAgY29uc3QgY3ggPSB0aGlzLncgKiAwLjUsIGN5ID0gdGhpcy5oICogMC41O1xuICAgICAgICBjb25zdCBwID0gdGhpcy51bmkuY3JlYXRlUGxhbmV0KG5iICogbWksIGN4LCBjeSwgMCwgMCk7XG4gICAgICAgIC8vZXhwbG9kZSBpdFxuICAgICAgICB0aGlzLnVuaS5leHBsb2RlKHAsIG5iLCBtaW5TcGVlZCwgbWF4U3BlZWQsIHJhZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgc2ltdWxhdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2bWF4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3IgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydChib3VuY2UgPSBmYWxzZSwgdm1heCA9IDAuOCwgY29sbGlzaW9uRmFjdG9yID0gMC44LCB0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQudW5pLnN0ZXAoYm91bmNlLCB2bWF4LCBjb2xsaXNpb25GYWN0b3IsIHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3N0b3BcbiAgICBzdG9wKCkge1xuICAgICAgICAvL1RPRE9cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBcbiAqL1xuZXhwb3J0IGNvbnN0IHBsYW5ldHMgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUGxhbmV0U2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IExhbmQgfSBmcm9tIFwiLi9MYW5kXCJcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tIFwiLi4vYmFzZS9DYW52YXNQbHVzXCJcblxuZXhwb3J0IGNsYXNzIEFuaW1hbCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSBcbiAgICAgKiBAcGFyYW0ge0xhbmR9IGwgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodHlwZSwgbCwgeCA9IDAsIHkgPSAwKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIC8qKiBAdHlwZSB7TGFuZH0gKi9cbiAgICAgICAgdGhpcy5sID0gbDtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4IDwgMCA/IDAgOiB4ID4gbC53ID8gbC53IDogeFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geSA8IDAgPyAwIDogeSA+IGwuaCA/IGwuaCA6IHlcblxuICAgICAgICAvL3NwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnZ4ID0gMFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy52eSA9IDA7XG5cbiAgICAgICAgLy90aGUgb3RoZXIgYW5pbWFscyBhcm91bmRcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXVxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZXlzID0gW11cblxuICAgICAgICAvL2FkZCB0byB0aGUgc3BhdGlhbCBpbmRleFxuICAgICAgICBsLmdyaWQuaW5zZXJ0KHRoaXMpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGlzdGFuY2UgdG8gYW5vdGhlciBhbmltYWxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0FuaW1hbH0gYSBcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgoYS54IC0gdGhpcy54KSwgKGEueSAtIHRoaXMueSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSB0aW1lU3RlcE1zIFxuICAgICAqL1xuICAgIG1vdmUodGltZVN0ZXBNcyA9IDEwKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxcbiAgICAgICAgbC5ncmlkLnJlbW92ZSh0aGlzKTtcblxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgciA9IDAuMDEgKiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIHRoaXMudnggKz0gciAqIE1hdGguY29zKGFuZ2xlKSAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ID4gbC5WX01BWCA/IGwuVl9NQVggOiB0aGlzLnZ4IDwgLWwuVl9NQVggPyAtbC5WX01BWCA6IHRoaXMudnhcblxuICAgICAgICB0aGlzLnZ5ICs9IHIgKiBNYXRoLnNpbihhbmdsZSkgKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSA+IGwuVl9NQVggPyBsLlZfTUFYIDogdGhpcy52eSA8IC1sLlZfTUFYID8gLWwuVl9NQVggOiB0aGlzLnZ5XG5cbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggPCAwID8gbC53IDogdGhpcy54ID4gbC53ID8gMCA6IHRoaXMueFxuXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy55ID0gdGhpcy55IDwgMCA/IGwuaCA6IHRoaXMueSA+IGwuaCA/IDAgOiB0aGlzLnlcblxuICAgICAgICBsLmdyaWQuaW5zZXJ0KHRoaXMpO1xuICAgIH1cblxuXG4gICAgLyoqIE9ic2VydmUgKi9cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5sXG5cbiAgICAgICAgLy9nZXQgYW5pbWFscyBhcm91bmRcbiAgICAgICAgY29uc3QgYXMgPSBsLmdyaWQuZ2V0KHRoaXMueCAtIGwuZCwgdGhpcy55IC0gbC5kLCB0aGlzLnggKyBsLmQsIHRoaXMueSArIGwuZCk7XG5cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdO1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGEgb2YgYXMpIHtcbiAgICAgICAgICAgIGlmIChhID09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChhKSA+IGwuZCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoYS50eXBlID09IDApXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV5cy5wdXNoKGEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucHJlZGF0b3JzLnB1c2goYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQHJldHVybnMge0FuaW1hbH0gKi9cbiAgICBtYWtlQ2hpbGQoKSB7XG4gICAgICAgIC8vZG8gYmV0dGVyOiBtYWtlIGNoaWxkIGFyb3VuZFxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hbCh0aGlzLnR5cGUsIHRoaXMubCwgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IGFuaW1hbFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q2FudmFzUGx1c30gY3AgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxTdHlsZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBcbiAgICAgKi9cbiAgICBkaXNwbGF5KGNwLCBmaWxsU3R5bGUgPSBcImJsdWVcIiwgc2l6ZSA9IDIpIHtcbiAgICAgICAgY29uc3QgcyA9IHNpemUgLyBjcC5wc1xuICAgICAgICBjcC5jMmQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjcC5jMmQuZmlsbFJlY3QoY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpLCBzLCBzKTtcbiAgICAgICAgLypjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGEueCwgYS55LCAwLjUsIDAsIDIqTWF0aC5QSSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7Ki9cbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTcGF0aWFsSW5kZXggfSBmcm9tICcuLi9iYXNlL1NwYXRpYWxJbmRleCc7XG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXlTIH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHtBbmltYWx9IGZyb20gXCIuL0FuaW1hbFwiXG5cbmV4cG9ydCBjbGFzcyBMYW5kIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL3RoZSBtYXggc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuVl9NQVggPSAwLjFcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5wID0gMC4wMiAvL3ByZWRhdG9yIGRlYXRoIHByb2JhYmlsaXR5XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnEgPSAwLjEgLy9wcmV5IHJlcHJvZHVjdGlvbiBwcm9iYWJpbGl0eVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5yID0gMC41IC8vZWF0ZW4gcHJleSB0cmFuc2Zvcm1hdGlvbiBwcm9iYWJpbGl0eVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5uYiA9IDMgLy9uZWlnaGJvcnMgbnVtYmVyXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHdcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGhcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJleXMgPSBbXVxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmQgPSAxMFxuICAgICAgICAvKiogQHR5cGUge1NwYXRpYWxJbmRleC48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IFNwYXRpYWxJbmRleCgpO1xuXG4gICAgICAgIC8qaW50W11bXSBoaXN0bztcbiAgICAgICAgaW50IGluZGV4PTA7XG4gICAgICAgIHRoaXMuYzJDaGFydD1jMkNoYXJ0O1xuICAgICAgICB0aGlzLmhDaGFydD1oQ2hhcnQ7XG4gICAgICAgIHRoaXMuaGlzdG89bmV3IGludFt3Q2hhcnRdW107XG4gICAgICAgIGZvcihpbnQgaT0wO2k8d0NoYXJ0O2krKylcbiAgICAgICAgICAgIGhpc3RvW2ldPW5ldyBpbnRbXXswLDB9OyovXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBzdGVwKHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vb2JzZXJ2ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpIGEub2JzZXJ2ZSgpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJlZGF0b3JzKSBhLm9ic2VydmUoKTtcblxuICAgICAgICBjb25zdCBwcmV5c1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZXlzVG9EaWUgPSBbXVxuICAgICAgICBjb25zdCBwcmVkc1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZWRzVG9EaWUgPSBbXVxuXG4gICAgICAgIC8vcHJleVxuICAgICAgICBmb3IgKGxldCBwcmV5IG9mIHRoaXMucHJleXMpIHtcbiAgICAgICAgICAgIC8vcmVwcm9kdWN0aW9uIGlmIG5vIHByZWRhdG9yIGFyb3VuZFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiB0aGlzLnEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHByZXkucHJlZGF0b3JzLmxlbmd0aCAhPSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwcmV5LnByZXlzLmxlbmd0aCA+PSB0aGlzLm5iKSBjb250aW51ZTtcbiAgICAgICAgICAgIHByZXlzVG9Cb3JuLnB1c2gocHJleS5tYWtlQ2hpbGQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3ByZWRhdG9yXG4gICAgICAgIGZvciAobGV0IHByZWQgb2YgdGhpcy5wcmVkYXRvcnMpIHtcbiAgICAgICAgICAgIC8vbm8gcHJleSBhcm91bmQ6IHByZWRhdG9yIGRpZXMgd2l0aCBwcm9iYWJpbGl0eSBwXG4gICAgICAgICAgICBpZiAocHJlZC5wcmV5cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgdGhpcy5wKSBwcmVkc1RvRGllLnB1c2gocHJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3ByZXkgYXJvdW5kXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2VhdCBwcmV5XG4gICAgICAgICAgICAgICAgLy9jaG9vc2UgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV5VG9FYXQgPSBwcmVkLnByZXlzW01hdGguZmxvb3IocHJlZC5wcmV5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgICAgICAgICAgcHJleXNUb0RpZS5wdXNoKHByZXlUb0VhdCk7XG5cbiAgICAgICAgICAgICAgICAvL3ByZWRhdG9yIHJlcHJvZHVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy5yKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZC5wcmVkYXRvcnMubGVuZ3RoID49IHRoaXMubmIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHByZWRzVG9Cb3JuLnB1c2gocHJlZC5tYWtlQ2hpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXlzLnB1c2goLi4ucHJleXNUb0Jvcm4pO1xuICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKC4uLnByZWRzVG9Cb3JuKTtcblxuICAgICAgICByZW1vdmVGcm9tQXJyYXlTKHRoaXMucHJleXMsIHByZXlzVG9EaWUsIGZhbHNlKVxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZXlzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSk7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheVModGhpcy5wcmVkYXRvcnMsIHByZWRzVG9EaWUsIGZhbHNlKVxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZWRzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSk7XG5cbiAgICAgICAgLy9tb3ZlXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmV5cylcbiAgICAgICAgICAgIGEubW92ZSh0aW1lU3RlcE1zKTtcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZWRhdG9ycylcbiAgICAgICAgICAgIGEubW92ZSh0aW1lU3RlcE1zKTtcblxuICAgICAgICAvKi9oaXN0b1xuICAgICAgICBoaXN0b1tpbmRleF0gPSBuZXcgaW50W117IHByZXlzLnNpemUoKSwgcHJlZGF0b3JzLnNpemUoKSB9O1xuICAgICAgICBpZiAoaW5kZXggPT0gaGlzdG8ubGVuZ3RoIC0gMSkgaW5kZXggPSAwO1xuICAgICAgICBlbHNlIGluZGV4Kys7Ki9cblxuICAgIH1cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBMYW5kIH0gZnJvbSAnLi9MYW5kJztcbmltcG9ydCB7IEFuaW1hbCB9IGZyb20gJy4vQW5pbWFsJztcbmltcG9ydCB7IENhbnZhc1BsdXMgfSBmcm9tICcuLi9iYXNlL0NhbnZhc1BsdXMnO1xuXG4vKiogKi9cbmNsYXNzIFByZXlQcmVkYXRvclNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW52YXNQbHVzfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IENhbnZhc1BsdXMoKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jMmQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNwbHVzLmMyZC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmMyZFxuXG4gICAgICAgICAgICAvL3RyYW5zcGFyZW5jeVxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYW5pbWFsc1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0aC5sYW5kLnByZXlzKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhhKSlcbiAgICAgICAgICAgICAgICAgICAgYS5kaXNwbGF5KHRoaXMsIFwiYmx1ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgb2YgdGgubGFuZC5wcmVkYXRvcnMpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9EcmF3KGEpKVxuICAgICAgICAgICAgICAgICAgICBhLmRpc3BsYXkodGhpcywgXCJyZWRcIik7XG5cbiAgICAgICAgICAgIC8qL2xhYmVsXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImxpZ2h0Z3JheVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgNjUsIDEzKTtcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGMyLmZpbGxUZXh0KHByZXlzLmxlbmd0aCArIFwiL1wiICsgcHJlZGF0b3JzLmxlbmd0aCwgMiwgMTApOyovXG5cbiAgICAgICAgICAgIC8vY2hhcnRcbiAgICAgICAgICAgIC8vYzJDaGFydC5zZXRGaWxsU3R5bGUoYmFja0NvbG9yMik7XG4gICAgICAgICAgICAvL2MyQ2hhcnQuZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAgICAgICAgIC8vZG91YmxlIG1heCA9IGdldE1heEhpc3RvKCk7XG4gICAgICAgICAgICAvKnB1YmxpYyBpbnQgZ2V0TWF4SGlzdG8oKSB7XG4gICAgICAgICAgICAgICAgaW50IG1heD0wO1xuICAgICAgICAgICAgICAgIGZvcihpbnQgaT0wO2k8aGlzdG8ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpc3RvW2ldWzBdPm1heCkgbWF4PWhpc3RvW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZihoaXN0b1tpXVsxXT5tYXgpIG1heD1oaXN0b1tpXVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdWJsZSBoMSwgaDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBoaXN0by5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSA9IGhDaGFydCAqIGhpc3RvW2ldWzBdIC8gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiA9IGhDaGFydCAqIGhpc3RvW2ldWzFdIC8gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShwcmV5Q29sb3IyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpLCBoQ2hhcnQgLSBoMSwgMSwgaDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShwcmVkYXRvckNvbG9yMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaSwgaENoYXJ0IC0gaDIsIDEsIGgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LnNldEZpbGxTdHlsZShDc3NDb2xvci5tYWtlKDI1NSwgMjU1LCAyNTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaW5kZXgsIDAsIDEsIGhDaGFydCk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMucHMsIHRoLmggLyB0aGlzLnBzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtMYW5kfSAqL1xuICAgICAgICB0aGlzLmxhbmQgPSBuZXcgTGFuZCh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG5cbiAgICAvL1RPRE8gdGVzdCBpbml0IGluIGEgYnViYmxlID9cbiAgICAvL1RPRE8gdXNlIGRlbnNpdHkgYXMgaW5wdXQgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIG5iXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJleURlbnNpdHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByZWRhdG9yRGVuc2l0eSBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0UmFuZG9tKHByZXlEZW5zaXR5ID0gMC4wMDMsIHByZWRhdG9yRGVuc2l0eSA9IDAuMDAzKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxhbmRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV5RGVuc2l0eSAqIGwudyAqIGwuaDsgaSsrKVxuICAgICAgICAgICAgbC5wcmV5cy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMCwgbCwgbC53ICogTWF0aC5yYW5kb20oKSwgbC5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZGF0b3JEZW5zaXR5ICogbC53ICogbC5oOyBpKyspXG4gICAgICAgICAgICBsLnByZWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMSwgbCwgbC53ICogTWF0aC5yYW5kb20oKSwgbC5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQubGFuZC5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgcHJleVByZWRhdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFByZXlQcmVkYXRvclNpbXVsYXRpb24ob3B0cylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=