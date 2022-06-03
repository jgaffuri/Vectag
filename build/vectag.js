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

/***/ "./src/base/AgentPoint.js":
/*!********************************!*\
  !*** ./src/base/AgentPoint.js ***!
  \********************************/
/*! exports provided: AgentPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentPoint", function() { return AgentPoint; });
//@ts-check

/** */
class AgentPoint {

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} sx 
     * @param {number} sy 
     */
    constructor(x, y, sx=0, sy=0) {

        //position

        /** @type {number} */
        this.x = x
        /** @type {number} */
        this.y = y

        //speed

        /** @type {number} */
        this.sx = sx
        /** @type {number} */
        this.sy = sy
        /** @type {number} */
        this.s = undefined
        /** @type {number} */
        this.sa = undefined
    }


    /**
     * @param {AgentPoint} a
     * @returns {number} The distance to another agent.
     */
    d(a) {
        return this.dP(a.x, a.y);
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {number} The distance to a position.
     */
    dP(x, y) {
        return Math.hypot((x - this.x), (y - this.y));
    }

    /** 
    * Set random speed
    * 
    * @param {number} minSpeed
    * @param {number} maxSpeed
    */
    setRandomSpeed(minSpeed = 0, maxSpeed = 0.1) {
        this.s = minSpeed + Math.random() * (maxSpeed - minSpeed);
        this.sa = 2 * Math.random() * Math.PI;
        this.sx = this.s * Math.cos(this.sa)
        this.sy = this.s * Math.sin(this.sa)
    }

    /** */
    computeSpeed() {
        this.s = Math.hypot(this.sx, this.sy);
        return this.s
    }

    /** */
    computeSpeedAngle() {
        this.sa = Math.atan2(this.sy, this.sx);
        return this.sa
    }

}


/***/ }),

/***/ "./src/base/GeoViewer.js":
/*!*******************************!*\
  !*** ./src/base/GeoViewer.js ***!
  \*******************************/
/*! exports provided: GeoViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoViewer", function() { return GeoViewer; });
//@ts-check
/** @typedef { {xMin: number, xMax: number, yMin: number, yMax: number} } Envelope */

/**
 * A HTML canvas, enhanced with zoom and pan capabilities.
 * 
 * @author Julien Gaffuri
 */
class GeoViewer {

    /**
     * @constructor
     * @param {string} canvasId
     * @param {object} center
     * @param {number} zf
     */
    constructor(canvasId = "vacanvas", center = undefined, zf = 1) {

        /** @type {object} */
        this.canvas = document.getElementById(canvasId);

        /** @type {number} */
        this.w = this.canvas.offsetWidth;
        /** @type {number} */
        this.h = this.canvas.offsetHeight;

        this.canvas.width = this.w;
        this.canvas.height = this.h;

        /**@type {object} */
        this.ctx = this.canvas.getContext("2d");

        // set geo coordinates of the center
        this.setCenter(center || { x: this.w * 0.5, y: this.h * 0.5 })

        // set zoom factor: pixel size, in m/pix
        this.setZf(zf);

        //extent
        /** @type {Envelope} */
        this.extGeo = undefined;
        this.updateExtentGeo()

        //mouse click - pan
        let mpan = false
        this.canvas.addEventListener("mousedown", e => { mpan = true });
        this.canvas.addEventListener("mousemove", e => {
            if (mpan) this.pan(-e.movementX * this.getZf(), e.movementY * this.getZf())
        });
        this.canvas.addEventListener("mouseup", e => { mpan = false });

        //mouse wheel - zoom
        const f = 1.5
        this.canvas.addEventListener("wheel", e => {
            const f_ = e.deltaY > 0 ? f : 1 / f;
            this.zoom(f_, this.pixToGeoX(e.offsetX), this.pixToGeoY(e.offsetY))
        });

    }


    /** @param {{x:number,y:number}} v */
    setCenter(v) { this.center = v; }
    /** @returns {{x:number,y:number}} */
    getCenter() { return this.center; }

    /** @param {number} v */
    setZf(v) { this.zf = v; }
    /** @returns {number} */
    getZf() { return this.zf; }




    /** */
    initCanvasTransform() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    /** */
    setCanvasTransform() {
        const k = 1/this.getZf();
        const tx = -this.center.x/this.getZf() + this.w*0.5;
        const ty = this.center.y/this.getZf() + this.h*0.5;
        this.ctx.setTransform(k, 0, 0, -k, tx, ty);
    }


    /**
     */
    redraw() {
        throw new Error('Method redraw not implemented.');
    }

    /**
     * Clear the app screen.
     * To be used before a redraw for example.
     * @param {*} color 
     */
    clear(color = "white") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.w, this.h);
    }

    //conversion functions
    /**
     * @param {number} xGeo
     * @returns {number}
    */
    geoToPixX(xGeo) { return (xGeo - this.center.x) / this.getZf() + this.w * 0.5; }
    /**
     * @param {number} yGeo
     * @returns {number}
    */
    geoToPixY(yGeo) { return -(yGeo - this.center.y) / this.getZf() + this.h * 0.5; }
    /**
     * @param {number} x
     * @returns {number}
    */
    pixToGeoX(x) { return (x - this.w * 0.5) * this.getZf() + this.center.x; }
    /**
     * @param {number} y
     * @returns {number}
    */
    pixToGeoY(y) { return -(y - this.h * 0.5) * this.getZf() + this.center.y; }

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
        this.setZf(f * this.getZf());
        this.center.x += (xGeo - this.center.x) * (1 - f)
        this.center.y += (yGeo - this.center.y) * (1 - f)
        this.updateExtentGeo()
        this.redraw();
    }

    /**
     * @param {number} marginPx 
     * @returns {Envelope}
     */
    updateExtentGeo(marginPx = 20) {
        this.extGeo = {
            xMin: this.pixToGeoX(-marginPx),
            xMax: this.pixToGeoX(this.w + marginPx),
            yMin: this.pixToGeoY(this.h + marginPx),
            yMax: this.pixToGeoY(-marginPx)
        }
        return this.extGeo;
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

    //TODO bulk remove ?

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
     * Bulk insert
     * 
     * @param {Array.<T>} objs
     */
    load(objs) {
        this.tree.load(objs);
    }

    /**
     * @param {T} obj
     */
    remove(obj) {
        this.tree.remove(obj)
    }

    /**
     */
    clear() {
        this.tree.clear()
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
/* harmony import */ var _base_AgentPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/AgentPoint */ "./src/base/AgentPoint.js");
/* harmony import */ var _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/SpatialIndex */ "./src/base/SpatialIndex.js");
//@ts-check





/** */
class Sardin extends _base_AgentPoint__WEBPACK_IMPORTED_MODULE_2__["AgentPoint"] {

    /**
     * @param {Sea} sea 
     * @param {number} x 
     * @param {number} y 
     * @param {number} sx 
     * @param {number} sy 
     */
    constructor(sea, x = sea.w * Math.random(), y = sea.h * Math.random(), sx = undefined, sy = undefined) {

        //
        super(x, y, sx, sy)

        /** @type {Sea} */
        this.sea = sea;

        //position
        /** @type {number} */
        this.x = x < 0 ? 0 : x > sea.w ? sea.w : x
        /** @type {number} */
        this.y = y < 0 ? 0 : y > sea.h ? sea.h : y

        //speed
        if (!sx && !sy) {
            this.setRandomSpeed(0, this.sea.V_MAX)

            //acceleration
            /** @type {number} */
            this.ax = 0
            /** @type {number} */
            this.ay = 0

            //list of sardins in vision field
            /** @type {Array.<Sardin>} */
            this.obs = []
            //list of sardins in collision field
            /** @type {Array.<Sardin>} */
            this.col = []
        }
    }


    /**
     * @param {SpatialIndex.<Sardin>} sindex 
     */
    observe(sindex) {

        /** @type {Sea} */
        const s = this.sea
        /** @type {number} */
        const dO = s.D_OBS

        //initialise lists
        /** @type {Array.<Sardin>} */
        this.obs = [];
        /** @type {Array.<Sardin>} */
        this.col = [];

        //get sardins around using spatial index
        /** @type {Array.<Sardin>} */
        const ss = sindex.get(this.x - dO, this.y - dO, this.x + dO, this.y + dO);

        //get sardins in observation and collision fields
        for (let f of ss) {
            if (f == this) continue;
            if (this.d(f) <= s.D_COL)
                this.col.push(f);
            if (this.d(f) <= dO) {
                //check angle
                let da = Math.atan2(f.y - this.y, f.x - this.x) - this.sa;
                if (da > Math.PI) da -= 2 * Math.PI;
                else if (da <= -Math.PI) da += 2 * Math.PI;
                da = Math.abs(da);
                if (da > s.A_OBS * 0.5) continue;
                this.obs.push(f);
            }
        }

        //initialise acceleration
        this.ax = 0; this.ay = 0;

        //collision: repulsion
        for (let f of this.col) {
            const d = this.d(f);
            const a = 1.0 * (1 / (d * d) - 1 / (s.D_COL * s.D_COL));
            this.ax += a * (this.x - f.x) / d;
            this.ay += a * (this.y - f.y) / d;
        }

        // toward target speed
        const dv = (s.V_TARGET - this.s) * 0.01;
        this.ax += dv * this.sx / this.s;
        this.ay += dv * this.sy / this.s;

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
            let dsx = 0, dsy = 0;
            for (let s of this.obs) {
                dsx += s.sx;
                dsy += s.sy;
            }
            dsx = (t - 1) * this.sx + (1 - t) * dsx / this.obs.length;
            dsy = (t - 1) * this.sy + (1 - t) * dsy / this.obs.length;

            const a = 0.1;
            this.ax += a * dsx;
            this.ay += a * dsy;
        }

        //avoid shark
        const sh = s.shark;
        if (sh != null) {
            const d = Math.hypot((sh.x - this.x), (sh.y - this.y));
            if (d <= s.D_OBS) {
                const a = 5.0 * (1 / (d * d) - 1 / (dO * dO));
                this.ax += a * (this.x - sh.x) / d;
                this.ay += a * (this.y - sh.y) / d;
            }
        }

    }


    /**
     * @param {number} timeStepMs 
     */
    move(timeStepMs = 10) {

        //compute new speed
        this.sx += this.ax * timeStepMs + (1 - 2 * Math.random()) * 0.02;
        this.sy += this.ay * timeStepMs + (1 - 2 * Math.random()) * 0.02;
        this.s = this.computeSpeed()
        if (this.s > this.sea.V_MAX) {
            this.s = this.sea.V_MAX;
            this.sx = this.sea.V_MAX * Math.cos(this.sa);
            this.sy = this.sea.V_MAX * Math.sin(this.sa);
        }

        //compute new position
        this.x += this.sx * timeStepMs;
        this.y += this.sy * timeStepMs;

        //limit
        if (this.x < 0) this.x = this.sea.w;
        if (this.y < 0) this.y = this.sea.h;
        if (this.x > this.sea.w) this.x = 0;
        if (this.y > this.sea.h) this.y = 0;
    }


    /**
     * Display a sardin body
     * 
     * @param {GeoViewer} cp 
     * @param {number} length 
     */
    display(cp, length) {
        const c2 = cp.ctx
        const c = Math.floor(255 * Math.abs(this.sa) / Math.PI);
        c2.strokeStyle = "rgb(255, 255, " + c + ")"
        const a = length / this.s;
        const dx = a * this.sx * 0.5;
        const dy = a * this.sy * 0.5;

        c2.beginPath();
        c2.moveTo(this.x - dx, this.y - dy);
        c2.lineTo(this.x + dx, this.y + dy);
        c2.closePath();
        c2.stroke();
    }

    /**
     * Display sardin vision field
     * 
     * @param {GeoViewer} cp 
     * @param {string} fillStyle 
     * @param {number} lineWidth 
     */
    displayVisionField(cp, fillStyle, lineWidth) {
        const c2 = cp.ctx
        c2.fillStyle = fillStyle;
        c2.lineWidth = lineWidth;

        c2.beginPath();
        c2.moveTo(this.x, this.y);
        c2.arc(this.x, this.y, this.sea.D_OBS / cp.getZf(),
            this.sa - this.sea.A_OBS * 0.5,
            this.sa + this.sea.A_OBS * 0.5
        );
        c2.closePath();
        c2.fill();
    }

    /**
     * Display sardin vision links
     * 
     * @param {GeoViewer} cp 
     * @param {string} strokeStyle 
     * @param {number} lineWidth 
     */
    displayVisionLinks(cp, strokeStyle, lineWidth) {
        const c2 = cp.ctx
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;
        for (let sa2 of this.obs) {
            c2.beginPath();
            c2.moveTo(this.x, this.y);
            c2.lineTo(sa2.x, sa2.y);
            c2.closePath();
            c2.stroke();
        }
    }

    /**
     * Display sardin collision field
     * 
     * @param {GeoViewer} cp 
     * @param {string} strokeStyle 
     * @param {number} lineWidth 
     */
    displayCollisionField(cp, strokeStyle, lineWidth) {
        const c2 = cp.ctx
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;
        c2.beginPath();
        c2.arc(this.x, this.y, this.sea.D_COL * 0.5 / cp.getZf(), 0, 2 * Math.PI);
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

        //TODO
        this.shark = null;

        /** @type {Array.<Sardin>} */
        this.killed = [];
    }

    /**
     * @param {number} timeStepMs 
     */
    step(timeStepMs = 10) {

        //ini
        for (let f of this.fish) {
            f.computeSpeed()
            f.computeSpeedAngle()
        }

        //male spatial index
        /** @type {SpatialIndex.<Sardin>} */
        const sindex = new _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__["SpatialIndex"]();
        sindex.load(this.fish)

        //observe
        for (let f of this.fish)
            f.observe(sindex);

        //shark eat fish
        this.sharkEat(sindex);

        //dispose spatial index
        //sindex.clear()

        //move
        for (let f of this.fish)
            f.move(timeStepMs);
    }


    /**
     * @param {SpatialIndex.<Sardin>} sindex 
     */
    sharkEat(sindex) {
        if (this.shark == null) return;

        /** @type {Array.<Sardin>} */
        this.killed = [];

        const x = this.shark.x, y = this.shark.y;
        const ss = sindex.get(x - this.D_SHARK_EAT, y - this.D_SHARK_EAT, x + this.D_SHARK_EAT, y + this.D_SHARK_EAT);
        for (let s of ss) {
            const d = Math.hypot((x - s.x), (y - s.y));
            if (d > this.D_SHARK_EAT) continue;
            this.killed.push(s);
            Object(_base_lib__WEBPACK_IMPORTED_MODULE_2__["removeFromArray"])(this.fish, s)
            //sindex.remove(s);
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
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

        /** @type {GeoViewer} */
        this.cplus = new _base_GeoViewer__WEBPACK_IMPORTED_MODULE_1__["GeoViewer"]();
        this.cplus.ctx.fillStyle = "black";
        this.cplus.ctx.fillRect(0, 0, this.w, this.h);

        /** @type {boolean} */
        this.showFishVisionField = false
        /** @type {boolean} */
        this.showFishVisionLinks = false
        /** @type {boolean} */
        this.showFishCollisionField = false

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.ctx
            const s = th.sea

            this.initCanvasTransform()

            //clear
            c2.fillStyle = "rgba(120,120,255,0.6)";
            c2.fillRect(0, 0, th.w, th.h);

            this.setCanvasTransform()

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
            c2.lineWidth = 2
            const sardinLength = 7
            for (let sa of s.fish)
                if (this.toDraw(sa))
                    sa.display(this, sardinLength)


            //display shark
            if (s.shark != null) {

                c2.lineWidth = 4
                c2.strokeStyle = "black"

                const sharkLength = 12
                const dx = sharkLength * Math.cos(s.shark.angle);
                const dy = sharkLength * Math.sin(s.shark.angle);

                c2.beginPath();
                c2.moveTo(s.shark.x, s.shark.y);
                c2.lineTo(s.shark.x - dx, s.shark.y + dy);
                c2.closePath();
                c2.stroke();
            }

            //display blood spot
            c2.fillStyle = "red";
            c2.lineWidth = 1
            for (let sa of s.killed) {
                c2.beginPath();
                c2.moveTo(sa.x, sa.y);
                c2.arc(sa.x, sa.y, 4, 0, 2 * Math.PI);
                c2.closePath();
                c2.fill();
            }

            //frame
            c2.strokeStyle = "darkgray";
            c2.lineWidth = 1 * th.cplus.getZf();
            c2.beginPath();
            c2.rect(0, 0, th.w, th.h);
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
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
     * @param {GeoViewer} cplus
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
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

        /** @type {GeoViewer} */
        this.cplus = new _base_GeoViewer__WEBPACK_IMPORTED_MODULE_0__["GeoViewer"]();

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.ctx

            //clear
            c2.fillStyle = "white";
            c2.fillRect(0, 0, th.w, th.h);

            //draw cells
            c2.fillStyle = "blue";
            for (let cell of th.uni.population)
                c2.fillRect(this.geoToPixX(cell.x), this.geoToPixY(cell.y), 1 / this.getZf(), 1 / this.getZf());

            //frame
            c2.strokeStyle = "lightgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.getZf(), th.h / this.getZf());
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
/* harmony import */ var _base_AgentPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/AgentPoint */ "./src/base/AgentPoint.js");
//@ts-check




class Planet extends _base_AgentPoint__WEBPACK_IMPORTED_MODULE_2__["AgentPoint"] {

    /**
     * @constructor
     * @param {Universe} u The universe the planet belongs to.
     * @param {number} m The mass
     * @param {number} x The x position
     * @param {number} y The y position
     * @param {number} sx The speed x
     * @param {number} sy The speed y
     */
    constructor(u, m, x, y, sx = 0, sy = 0) {

        //
        super(x, y, sx, sy)

        /** @type {Universe} */
        this.u = u;
        u.ps.push(this)

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

        //acceleration
        /** @type {number} */
        this.ax = 0;
        /** @type {number} */
        this.ay = 0;
    }

    /**
     * Update the force, based on the gravity of other planets.
     * @param {number} exponent
     */
    observe(exponent) {

        //compute gravity field at planet location
        const g = this.u.getGravityField(this.x, this.y, this, exponent);

        //set acceleration
        /** @type {number} */
        this.ax = g.gx;
        /** @type {number} */
        this.ay = g.gy;
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
     * @param {number} maxSpeed 
     * @param {number} timeStepMs 
     */
    change(bounce = false, maxSpeed = 0.8, timeStepMs = 10) {

        //compute new speed
        this.sx += this.ax * timeStepMs;
        this.sy += this.ay * timeStepMs;

        //check vmax
        if (maxSpeed > 0) {
            /** @type {number} */
            const v = Math.sqrt(this.sx * this.sx + this.sy * this.sy);
            if (v > maxSpeed) {
                this.sx = maxSpeed * this.sx / v;
                this.sy = maxSpeed * this.sy / v;
            }
        }

        //compute new position
        /** @type {number} */
        let nx = this.x + this.sx * timeStepMs;
        /** @type {number} */
        let ny = this.y + this.sy * timeStepMs;

        //handle position limit
        if (bounce) {
            const r = this.r();
            const e = 1;
            if (nx < r) { nx = r; this.sx = -this.sx * e; }
            if (ny < r) { ny = r; this.sy = -this.sy * e; }
            if (nx > this.u.w - r) { nx = this.u.w - r; this.sx = -this.sx * e; }
            if (ny > this.u.h - r) { ny = this.u.h - r; this.sy = -this.sy * e; }
        } else {
            if (nx < 0) { nx = this.u.w; }
            if (ny < 0) { ny = this.u.h; }
            if (nx > this.u.w) { nx = 0; }
            if (ny > this.u.h) { ny = 0; }
        }

        //move
        this.x = nx;
        this.y = ny;
    }


    /**
     * Display planet
     * 
     * @param {GeoViewer} cp 
     * @param {String} fillStyle 
     */
    display(cp, fillStyle) {
        const c2 = cp.ctx
        c2.fillStyle = fillStyle;
        c2.beginPath();
        c2.arc(this.x, this.y, this.r() / cp.getZf(), 0, 2 * Math.PI);
        c2.closePath();
        c2.fill();
    }

    /**
     * Display planet acceleration
     * 
     * @param {GeoViewer} cp 
     * @param {String} strokeStyle 
     * @param {number} lineWidth 
     * @param {number} factor 
     */
    displayAcceleration(cp, strokeStyle = "cyan", lineWidth = 1, factor = 5000) {
        const c2 = cp.ctx
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;

        c2.beginPath();
        c2.moveTo(this.x, this.y);
        c2.lineTo(this.x + factor * this.ax, this.y + factor * this.ay);
        c2.closePath();
        c2.stroke();
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
    }

    /**
     * Compute the mass of the universe, as the sum of the mass of its planets.
     * @returns {number}
     */
    m() {
        let m = 0;
        for (let p of this.ps)
            m += p.m;
        return m;
    }


    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {Planet} pIgnore A planet to ignore
     * @param {number} exponent
     * @returns {{gx:number,gy:number}}
     */
    getGravityField(x, y, pIgnore = undefined, exponent = 2) {

        /** @type {number} */
        let gx = 0
        /** @type {number} */
        let gy = 0

        //gothrough all planets in the universe
        for (let p of this.ps) {

            //ignore planet
            if (pIgnore && p == pIgnore)
                continue;

            //compute distance
            /** @type {number} */
            let d = p.dP(x, y);
            if (d === 0)
                continue;

            //compute and add contribution
            d = d * Math.pow(d, exponent);
            gx += 0.01 * (p.x - x) * p.m / d;
            gy += 0.01 * (p.y - y) * p.m / d;
        }
        return { gx: gx, gy: gy }
    }


    /**
     * Aggregate two planets
     * 
     * @param {Planet} p1
     * @param {Planet} p2
     * @param {SpatialIndex.<Planet>} sindex
     * @returns {Planet}
     */
    aggregate(p1, p2, sindex) {
        const m = p1.m + p2.m;
        const p = new _Planet__WEBPACK_IMPORTED_MODULE_2__["Planet"](
            this,
            m,
            (p1.x * p1.m + p2.x * p2.m) / m,
            (p1.y * p1.m + p2.y * p2.m) / m,
            (p1.sx * p1.m + p2.sx * p2.m) / m,
            (p1.sy * p1.m + p2.sy * p2.m) / m
        );
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, p1);
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, p2);

        if (sindex) {
            sindex.remove(p1)
            sindex.remove(p2)
            sindex.insert(p)
        }

        return p;
    }



    /**
     * @param {SpatialIndex.<Planet>} sindex
     * @param {number} collisionFactor
     * @returns {Array.<Planet>}
     */
    findCollision(sindex, collisionFactor = 1) {
        for (let pi of this.ps) {

            const w = 2 * pi.r();
            const cand = sindex.get(pi.x - w, pi.y - w, pi.x + w, pi.y + w);

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
            const p = new _Planet__WEBPACK_IMPORTED_MODULE_2__["Planet"](this, mi, this.w * Math.random(), this.h * Math.random());
            p.setRandomSpeed(minSpeed, maxSpeed);
        }
        return this;
    }



    /**
     * 
     * @param {boolean} bounce 
     * @param {number} vmax 
     * @param {number} exponent 
     * @param {number} collisionFactor 
     * @param {number} timeStepMs 
     * @returns {this}
     */
    step(bounce = false, vmax = 0.8, exponent = 2, collisionFactor = 1, timeStepMs = 10) {

        //observation
        for (let p of this.ps)
            p.observe(exponent);

        //action
        for (let p of this.ps)
            p.change(bounce, vmax, timeStepMs);


        //collision detection
        this.detectCollisions(collisionFactor)

        return this;
    }

    /**
     * @param {number} collisionFactor 
     * @returns {this}
     */
    detectCollisions(collisionFactor = 1) {

        /** @type {SpatialIndex.<Planet>} */
        const sindex = new _base_SpatialIndex__WEBPACK_IMPORTED_MODULE_1__["SpatialIndex"]();
        sindex.load(this.ps)

        //find first collision
        /** @type {Array.<Planet>} */
        let pair = this.findCollision(sindex, collisionFactor);
        while (pair !== null) {

            //aggregate
            const p = this.aggregate(pair[0], pair[1], sindex)

            //find next collision
            pair = this.findCollision(sindex, collisionFactor);
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

            new _Planet__WEBPACK_IMPORTED_MODULE_2__["Planet"](this, p.m / nb, p.x + x, p.y + y, p.sx + sx, p.sy + sy)
        }
        //remove p from universe
        Object(_base_lib__WEBPACK_IMPORTED_MODULE_0__["removeFromArray"])(this.ps, p);
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
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

        /** @type {number} */
        this.maxSpeed = opts.maxSpeed || 0.8;
        /** @type {boolean} */
        this.bounce = opts.bounce || false
        /** @type {number} */
        this.exponent = opts.exponent || 2;
        /** @type {number} */
        this.collisionFactor = opts.collisionFactor || 1;

        /** @type {boolean} */
        this.showPlanetAcceleration = false

        /** @type {string} */
        this.showField = undefined
        /** @type {number} */
        this.fieldRes = 20
        /** @type {number} */
        this.fieldFactor = 1000
        /** @type {string} */
        this.fieldStrokeStyle = "#99bbff";

        /** @type {number} */
        this.tailings = opts.tailings || 0.1;


        /** @type {GeoViewer} */
        this.cplus = new _base_GeoViewer__WEBPACK_IMPORTED_MODULE_2__["GeoViewer"]();
        this.cplus.ctx.fillStyle = "black";
        this.cplus.ctx.fillRect(0, 0, this.w, this.h);

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.ctx

            this.initCanvasTransform();

            //clear, with transparency
            c2.fillStyle = "rgba(0,0,0," + th.tailings + ")";
            c2.fillRect(0, 0, th.w, th.h);
            //c2.fillRect(-1e20, -1e20, 2e20, 2e20); //todo

            //display gravity field
            if (th.showField === "f")
                th.displayGravityField(this, true)
            else if (th.showField === "i")
                th.displayGravityField(this, false)


            this.setCanvasTransform()

            //display planets
            for (let p of th.uni.ps) {
                if (!this.toDraw(p)) continue
                const t = p.m / th.uni.m();
                p.display(this, "rgb(255,255," + Math.floor(255 * (1 - t)) + ")")
            }

            //display planets acceleration
            if (th.showPlanetAcceleration) {
                for (let p of th.uni.ps) {
                    if (!this.toDraw(p)) continue
                    p.displayAcceleration(this)
                }
            }

            //frame
            c2.strokeStyle = "darkgray";
            c2.lineWidth = 1 * th.cplus.getZf();
            c2.beginPath();
            c2.rect(0, 0, th.w, th.h);
            c2.stroke();

            return this;
        };

        /** @type {Universe} */
        this.uni = new _Universe__WEBPACK_IMPORTED_MODULE_0__["Universe"](this.w, this.h)
    }


    /**
     * @param {GeoViewer} cp 
     * @param {boolean} field 
     */
    displayGravityField(cp, field = true) {
        const c2 = cp.ctx
        const res = this.fieldRes
        const f = this.fieldFactor
        const f_ = field ? 0.3 * res : 0.6 * res;
        c2.strokeStyle = this.fieldStrokeStyle
        for (let x = res * 0.5; x < this.w; x += res) {
            const xG = cp.pixToGeoX(x);
            if (xG > this.uni.w || xG < 0) continue
            for (let y = res / 2; y < this.h; y += res) {
                const yG = cp.pixToGeoY(y);
                if (yG > this.uni.h || yG < 0) continue
                //get gravity field
                const g = this.uni.getGravityField(xG, yG, undefined, this.exponent);
                const g_ = Math.hypot(g.gx, g.gy)

                c2.lineWidth = Math.min(f * g_, 0.3 * res);
                const dx = f_ * g.gx / g_, dy = f_ * g.gy / g_

                //draw
                c2.beginPath();
                if (field) {
                    //gravity field
                    c2.moveTo(x - dx, y + dy);
                    c2.lineTo(x + dx, y - dy);
                } else {
                    //isopotential lines
                    c2.moveTo(x + dy, y + dx);
                    c2.lineTo(x - dy, y - dx);
                }
                c2.closePath();
                c2.stroke();
            }
        }
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
        const p = new _Planet__WEBPACK_IMPORTED_MODULE_1__["Planet"](this.uni, nb * mi, cx, cy, 0, 0);
        //explode it
        this.uni.explode(p, nb, minSpeed, maxSpeed, rad)
        return this;
    }

    /**
     * Start simulation
     * 
     * @param {number} timeStepMs 
     * @param {number} nbIterations 
     * @returns {this}
     */
    start(timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.uni.step(t.bounce, t.maxSpeed, t.exponent, t.collisionFactor, timeStepMs);
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
/* harmony import */ var _base_AgentPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/AgentPoint */ "./src/base/AgentPoint.js");
//@ts-check




/** */
class Animal extends _base_AgentPoint__WEBPACK_IMPORTED_MODULE_2__["AgentPoint"] {

    /**
     * @param {number} type 
     * @param {Land} l 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(type, l, x = 0, y = 0) {

        super(x, y)

        /** @type {number} */
        this.type = type;
        /** @type {Land} */
        this.l = l;

        //position
        /** @type {number} */
        this.x = x < 0 ? 0 : x > l.w ? l.w : x
        /** @type {number} */
        this.y = y < 0 ? 0 : y > l.h ? l.h : y

        //the other animals around
        /** @type {Array.<Animal>} */
        this.predators = []
        /** @type {Array.<Animal>} */
        this.preys = []

        //add to the spatial index
        l.grid.insert(this);
    }


    /**
     * @param {*} timeStepMs 
     */
    move(timeStepMs = 10) {
        const l = this.l
        l.grid.remove(this);

        const angle = Math.random() * 2 * Math.PI;
        const r = 0.01 * Math.random();

        this.sx += r * Math.cos(angle) * timeStepMs;
        this.sx = this.sx > l.V_MAX ? l.V_MAX : this.sx < -l.V_MAX ? -l.V_MAX : this.sx

        this.sy += r * Math.sin(angle) * timeStepMs;
        this.sy = this.sy > l.V_MAX ? l.V_MAX : this.sy < -l.V_MAX ? -l.V_MAX : this.sy

        this.x += this.sx * timeStepMs;
        this.x = this.x < 0 ? l.w : this.x > l.w ? 0 : this.x

        this.y += this.sy * timeStepMs;
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
     * @param {GeoViewer} cp 
     * @param {string} fillStyle 
     * @param {number} size 
     */
    display(cp, fillStyle = "blue", size = 2) {
        const s = size / cp.getZf()
        cp.ctx.fillStyle = fillStyle;
        cp.ctx.fillRect(cp.geoToPixX(this.x), cp.geoToPixY(this.y), s, s);
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
/* harmony import */ var _base_GeoViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/GeoViewer */ "./src/base/GeoViewer.js");
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

        /** @type {GeoViewer} */
        this.cplus = new _base_GeoViewer__WEBPACK_IMPORTED_MODULE_2__["GeoViewer"]();
        this.cplus.ctx.fillStyle = "white";
        this.cplus.ctx.fillRect(0, 0, this.w, this.h);


        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.ctx

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
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.getZf(), th.h / this.getZf());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9ub2RlX21vZHVsZXMvcmJ1c2gvcmJ1c2gubWluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL0FnZW50UG9pbnQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvR2VvVmlld2VyLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL1NwYXRpYWxJbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9saWIuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvU2FyZGluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NlYS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL0NlbGwuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BwL0FuaW1hbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvTGFuZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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cGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmVjdGFnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PXR8fHNlbGYpLlJCdXNoPWkoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxyLGUsYSxoKXshZnVuY3Rpb24gdChuLHIsZSxhLGgpe2Zvcig7YT5lOyl7aWYoYS1lPjYwMCl7dmFyIG89YS1lKzEscz1yLWUrMSxsPU1hdGgubG9nKG8pLGY9LjUqTWF0aC5leHAoMipsLzMpLHU9LjUqTWF0aC5zcXJ0KGwqZiooby1mKS9vKSoocy1vLzI8MD8tMToxKSxtPU1hdGgubWF4KGUsTWF0aC5mbG9vcihyLXMqZi9vK3UpKSxjPU1hdGgubWluKGEsTWF0aC5mbG9vcihyKyhvLXMpKmYvbyt1KSk7dChuLHIsbSxjLGgpfXZhciBwPW5bcl0sZD1lLHg9YTtmb3IoaShuLGUsciksaChuW2FdLHApPjAmJmkobixlLGEpO2Q8eDspe2ZvcihpKG4sZCx4KSxkKysseC0tO2gobltkXSxwKTwwOylkKys7Zm9yKDtoKG5beF0scCk+MDspeC0tfTA9PT1oKG5bZV0scCk/aShuLGUseCk6aShuLCsreCxhKSx4PD1yJiYoZT14KzEpLHI8PXgmJihhPXgtMSl9fSh0LHIsZXx8MCxhfHx0Lmxlbmd0aC0xLGh8fG4pfWZ1bmN0aW9uIGkodCxpLG4pe3ZhciByPXRbaV07dFtpXT10W25dLHRbbl09cn1mdW5jdGlvbiBuKHQsaSl7cmV0dXJuIHQ8aT8tMTp0Pmk/MTowfXZhciByPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTkpLHRoaXMuX21heEVudHJpZXM9TWF0aC5tYXgoNCx0KSx0aGlzLl9taW5FbnRyaWVzPU1hdGgubWF4KDIsTWF0aC5jZWlsKC40KnRoaXMuX21heEVudHJpZXMpKSx0aGlzLmNsZWFyKCl9O2Z1bmN0aW9uIGUodCxpLG4pe2lmKCFuKXJldHVybiBpLmluZGV4T2YodCk7Zm9yKHZhciByPTA7cjxpLmxlbmd0aDtyKyspaWYobih0LGlbcl0pKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIGEodCxpKXtoKHQsMCx0LmNoaWxkcmVuLmxlbmd0aCxpLHQpfWZ1bmN0aW9uIGgodCxpLG4scixlKXtlfHwoZT1wKG51bGwpKSxlLm1pblg9MS8wLGUubWluWT0xLzAsZS5tYXhYPS0xLzAsZS5tYXhZPS0xLzA7Zm9yKHZhciBhPWk7YTxuO2ErKyl7dmFyIGg9dC5jaGlsZHJlblthXTtvKGUsdC5sZWFmP3IoaCk6aCl9cmV0dXJuIGV9ZnVuY3Rpb24gbyh0LGkpe3JldHVybiB0Lm1pblg9TWF0aC5taW4odC5taW5YLGkubWluWCksdC5taW5ZPU1hdGgubWluKHQubWluWSxpLm1pblkpLHQubWF4WD1NYXRoLm1heCh0Lm1heFgsaS5tYXhYKSx0Lm1heFk9TWF0aC5tYXgodC5tYXhZLGkubWF4WSksdH1mdW5jdGlvbiBzKHQsaSl7cmV0dXJuIHQubWluWC1pLm1pblh9ZnVuY3Rpb24gbCh0LGkpe3JldHVybiB0Lm1pblktaS5taW5ZfWZ1bmN0aW9uIGYodCl7cmV0dXJuKHQubWF4WC10Lm1pblgpKih0Lm1heFktdC5taW5ZKX1mdW5jdGlvbiB1KHQpe3JldHVybiB0Lm1heFgtdC5taW5YKyh0Lm1heFktdC5taW5ZKX1mdW5jdGlvbiBtKHQsaSl7cmV0dXJuIHQubWluWDw9aS5taW5YJiZ0Lm1pblk8PWkubWluWSYmaS5tYXhYPD10Lm1heFgmJmkubWF4WTw9dC5tYXhZfWZ1bmN0aW9uIGModCxpKXtyZXR1cm4gaS5taW5YPD10Lm1heFgmJmkubWluWTw9dC5tYXhZJiZpLm1heFg+PXQubWluWCYmaS5tYXhZPj10Lm1pbll9ZnVuY3Rpb24gcCh0KXtyZXR1cm57Y2hpbGRyZW46dCxoZWlnaHQ6MSxsZWFmOiEwLG1pblg6MS8wLG1pblk6MS8wLG1heFg6LTEvMCxtYXhZOi0xLzB9fWZ1bmN0aW9uIGQoaSxuLHIsZSxhKXtmb3IodmFyIGg9W24scl07aC5sZW5ndGg7KWlmKCEoKHI9aC5wb3AoKSktKG49aC5wb3AoKSk8PWUpKXt2YXIgbz1uK01hdGguY2VpbCgoci1uKS9lLzIpKmU7dChpLG8sbixyLGEpLGgucHVzaChuLG8sbyxyKX19cmV0dXJuIHIucHJvdG90eXBlLmFsbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9hbGwodGhpcy5kYXRhLFtdKX0sci5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKHQpe3ZhciBpPXRoaXMuZGF0YSxuPVtdO2lmKCFjKHQsaSkpcmV0dXJuIG47Zm9yKHZhciByPXRoaXMudG9CQm94LGU9W107aTspe2Zvcih2YXIgYT0wO2E8aS5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgaD1pLmNoaWxkcmVuW2FdLG89aS5sZWFmP3IoaCk6aDtjKHQsbykmJihpLmxlYWY/bi5wdXNoKGgpOm0odCxvKT90aGlzLl9hbGwoaCxuKTplLnB1c2goaCkpfWk9ZS5wb3AoKX1yZXR1cm4gbn0sci5wcm90b3R5cGUuY29sbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGk9dGhpcy5kYXRhO2lmKCFjKHQsaSkpcmV0dXJuITE7Zm9yKHZhciBuPVtdO2k7KXtmb3IodmFyIHI9MDtyPGkuY2hpbGRyZW4ubGVuZ3RoO3IrKyl7dmFyIGU9aS5jaGlsZHJlbltyXSxhPWkubGVhZj90aGlzLnRvQkJveChlKTplO2lmKGModCxhKSl7aWYoaS5sZWFmfHxtKHQsYSkpcmV0dXJuITA7bi5wdXNoKGUpfX1pPW4ucG9wKCl9cmV0dXJuITF9LHIucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24odCl7aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm4gdGhpcztpZih0Lmxlbmd0aDx0aGlzLl9taW5FbnRyaWVzKXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl0aGlzLmluc2VydCh0W2ldKTtyZXR1cm4gdGhpc312YXIgbj10aGlzLl9idWlsZCh0LnNsaWNlKCksMCx0Lmxlbmd0aC0xLDApO2lmKHRoaXMuZGF0YS5jaGlsZHJlbi5sZW5ndGgpaWYodGhpcy5kYXRhLmhlaWdodD09PW4uaGVpZ2h0KXRoaXMuX3NwbGl0Um9vdCh0aGlzLmRhdGEsbik7ZWxzZXtpZih0aGlzLmRhdGEuaGVpZ2h0PG4uaGVpZ2h0KXt2YXIgcj10aGlzLmRhdGE7dGhpcy5kYXRhPW4sbj1yfXRoaXMuX2luc2VydChuLHRoaXMuZGF0YS5oZWlnaHQtbi5oZWlnaHQtMSwhMCl9ZWxzZSB0aGlzLmRhdGE9bjtyZXR1cm4gdGhpc30sci5wcm90b3R5cGUuaW5zZXJ0PWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0aGlzLl9pbnNlcnQodCx0aGlzLmRhdGEuaGVpZ2h0LTEpLHRoaXN9LHIucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YT1wKFtdKSx0aGlzfSxyLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCxpKXtpZighdClyZXR1cm4gdGhpcztmb3IodmFyIG4scixhLGg9dGhpcy5kYXRhLG89dGhpcy50b0JCb3godCkscz1bXSxsPVtdO2h8fHMubGVuZ3RoOyl7aWYoaHx8KGg9cy5wb3AoKSxyPXNbcy5sZW5ndGgtMV0sbj1sLnBvcCgpLGE9ITApLGgubGVhZil7dmFyIGY9ZSh0LGguY2hpbGRyZW4saSk7aWYoLTEhPT1mKXJldHVybiBoLmNoaWxkcmVuLnNwbGljZShmLDEpLHMucHVzaChoKSx0aGlzLl9jb25kZW5zZShzKSx0aGlzfWF8fGgubGVhZnx8IW0oaCxvKT9yPyhuKyssaD1yLmNoaWxkcmVuW25dLGE9ITEpOmg9bnVsbDoocy5wdXNoKGgpLGwucHVzaChuKSxuPTAscj1oLGg9aC5jaGlsZHJlblswXSl9cmV0dXJuIHRoaXN9LHIucHJvdG90eXBlLnRvQkJveD1mdW5jdGlvbih0KXtyZXR1cm4gdH0sci5wcm90b3R5cGUuY29tcGFyZU1pblg9ZnVuY3Rpb24odCxpKXtyZXR1cm4gdC5taW5YLWkubWluWH0sci5wcm90b3R5cGUuY29tcGFyZU1pblk9ZnVuY3Rpb24odCxpKXtyZXR1cm4gdC5taW5ZLWkubWluWX0sci5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YX0sci5wcm90b3R5cGUuZnJvbUpTT049ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZGF0YT10LHRoaXN9LHIucHJvdG90eXBlLl9hbGw9ZnVuY3Rpb24odCxpKXtmb3IodmFyIG49W107dDspdC5sZWFmP2kucHVzaC5hcHBseShpLHQuY2hpbGRyZW4pOm4ucHVzaC5hcHBseShuLHQuY2hpbGRyZW4pLHQ9bi5wb3AoKTtyZXR1cm4gaX0sci5wcm90b3R5cGUuX2J1aWxkPWZ1bmN0aW9uKHQsaSxuLHIpe3ZhciBlLGg9bi1pKzEsbz10aGlzLl9tYXhFbnRyaWVzO2lmKGg8PW8pcmV0dXJuIGEoZT1wKHQuc2xpY2UoaSxuKzEpKSx0aGlzLnRvQkJveCksZTtyfHwocj1NYXRoLmNlaWwoTWF0aC5sb2coaCkvTWF0aC5sb2cobykpLG89TWF0aC5jZWlsKGgvTWF0aC5wb3cobyxyLTEpKSksKGU9cChbXSkpLmxlYWY9ITEsZS5oZWlnaHQ9cjt2YXIgcz1NYXRoLmNlaWwoaC9vKSxsPXMqTWF0aC5jZWlsKE1hdGguc3FydChvKSk7ZCh0LGksbixsLHRoaXMuY29tcGFyZU1pblgpO2Zvcih2YXIgZj1pO2Y8PW47Zis9bCl7dmFyIHU9TWF0aC5taW4oZitsLTEsbik7ZCh0LGYsdSxzLHRoaXMuY29tcGFyZU1pblkpO2Zvcih2YXIgbT1mO208PXU7bSs9cyl7dmFyIGM9TWF0aC5taW4obStzLTEsdSk7ZS5jaGlsZHJlbi5wdXNoKHRoaXMuX2J1aWxkKHQsbSxjLHItMSkpfX1yZXR1cm4gYShlLHRoaXMudG9CQm94KSxlfSxyLnByb3RvdHlwZS5fY2hvb3NlU3VidHJlZT1mdW5jdGlvbih0LGksbixyKXtmb3IoO3IucHVzaChpKSwhaS5sZWFmJiZyLmxlbmd0aC0xIT09bjspe2Zvcih2YXIgZT0xLzAsYT0xLzAsaD12b2lkIDAsbz0wO288aS5jaGlsZHJlbi5sZW5ndGg7bysrKXt2YXIgcz1pLmNoaWxkcmVuW29dLGw9ZihzKSx1PShtPXQsYz1zLChNYXRoLm1heChjLm1heFgsbS5tYXhYKS1NYXRoLm1pbihjLm1pblgsbS5taW5YKSkqKE1hdGgubWF4KGMubWF4WSxtLm1heFkpLU1hdGgubWluKGMubWluWSxtLm1pblkpKS1sKTt1PGE/KGE9dSxlPWw8ZT9sOmUsaD1zKTp1PT09YSYmbDxlJiYoZT1sLGg9cyl9aT1ofHxpLmNoaWxkcmVuWzBdfXZhciBtLGM7cmV0dXJuIGl9LHIucHJvdG90eXBlLl9pbnNlcnQ9ZnVuY3Rpb24odCxpLG4pe3ZhciByPW4/dDp0aGlzLnRvQkJveCh0KSxlPVtdLGE9dGhpcy5fY2hvb3NlU3VidHJlZShyLHRoaXMuZGF0YSxpLGUpO2ZvcihhLmNoaWxkcmVuLnB1c2godCksbyhhLHIpO2k+PTAmJmVbaV0uY2hpbGRyZW4ubGVuZ3RoPnRoaXMuX21heEVudHJpZXM7KXRoaXMuX3NwbGl0KGUsaSksaS0tO3RoaXMuX2FkanVzdFBhcmVudEJCb3hlcyhyLGUsaSl9LHIucHJvdG90eXBlLl9zcGxpdD1mdW5jdGlvbih0LGkpe3ZhciBuPXRbaV0scj1uLmNoaWxkcmVuLmxlbmd0aCxlPXRoaXMuX21pbkVudHJpZXM7dGhpcy5fY2hvb3NlU3BsaXRBeGlzKG4sZSxyKTt2YXIgaD10aGlzLl9jaG9vc2VTcGxpdEluZGV4KG4sZSxyKSxvPXAobi5jaGlsZHJlbi5zcGxpY2UoaCxuLmNoaWxkcmVuLmxlbmd0aC1oKSk7by5oZWlnaHQ9bi5oZWlnaHQsby5sZWFmPW4ubGVhZixhKG4sdGhpcy50b0JCb3gpLGEobyx0aGlzLnRvQkJveCksaT90W2ktMV0uY2hpbGRyZW4ucHVzaChvKTp0aGlzLl9zcGxpdFJvb3QobixvKX0sci5wcm90b3R5cGUuX3NwbGl0Um9vdD1mdW5jdGlvbih0LGkpe3RoaXMuZGF0YT1wKFt0LGldKSx0aGlzLmRhdGEuaGVpZ2h0PXQuaGVpZ2h0KzEsdGhpcy5kYXRhLmxlYWY9ITEsYSh0aGlzLmRhdGEsdGhpcy50b0JCb3gpfSxyLnByb3RvdHlwZS5fY2hvb3NlU3BsaXRJbmRleD1mdW5jdGlvbih0LGksbil7Zm9yKHZhciByLGUsYSxvLHMsbCx1LG09MS8wLGM9MS8wLHA9aTtwPD1uLWk7cCsrKXt2YXIgZD1oKHQsMCxwLHRoaXMudG9CQm94KSx4PWgodCxwLG4sdGhpcy50b0JCb3gpLHY9KGU9ZCxhPXgsbz12b2lkIDAscz12b2lkIDAsbD12b2lkIDAsdT12b2lkIDAsbz1NYXRoLm1heChlLm1pblgsYS5taW5YKSxzPU1hdGgubWF4KGUubWluWSxhLm1pblkpLGw9TWF0aC5taW4oZS5tYXhYLGEubWF4WCksdT1NYXRoLm1pbihlLm1heFksYS5tYXhZKSxNYXRoLm1heCgwLGwtbykqTWF0aC5tYXgoMCx1LXMpKSxNPWYoZCkrZih4KTt2PG0/KG09dixyPXAsYz1NPGM/TTpjKTp2PT09bSYmTTxjJiYoYz1NLHI9cCl9cmV0dXJuIHJ8fG4taX0sci5wcm90b3R5cGUuX2Nob29zZVNwbGl0QXhpcz1mdW5jdGlvbih0LGksbil7dmFyIHI9dC5sZWFmP3RoaXMuY29tcGFyZU1pblg6cyxlPXQubGVhZj90aGlzLmNvbXBhcmVNaW5ZOmw7dGhpcy5fYWxsRGlzdE1hcmdpbih0LGksbixyKTx0aGlzLl9hbGxEaXN0TWFyZ2luKHQsaSxuLGUpJiZ0LmNoaWxkcmVuLnNvcnQocil9LHIucHJvdG90eXBlLl9hbGxEaXN0TWFyZ2luPWZ1bmN0aW9uKHQsaSxuLHIpe3QuY2hpbGRyZW4uc29ydChyKTtmb3IodmFyIGU9dGhpcy50b0JCb3gsYT1oKHQsMCxpLGUpLHM9aCh0LG4taSxuLGUpLGw9dShhKSt1KHMpLGY9aTtmPG4taTtmKyspe3ZhciBtPXQuY2hpbGRyZW5bZl07byhhLHQubGVhZj9lKG0pOm0pLGwrPXUoYSl9Zm9yKHZhciBjPW4taS0xO2M+PWk7Yy0tKXt2YXIgcD10LmNoaWxkcmVuW2NdO28ocyx0LmxlYWY/ZShwKTpwKSxsKz11KHMpfXJldHVybiBsfSxyLnByb3RvdHlwZS5fYWRqdXN0UGFyZW50QkJveGVzPWZ1bmN0aW9uKHQsaSxuKXtmb3IodmFyIHI9bjtyPj0wO3ItLSlvKGlbcl0sdCl9LHIucHJvdG90eXBlLl9jb25kZW5zZT1mdW5jdGlvbih0KXtmb3IodmFyIGk9dC5sZW5ndGgtMSxuPXZvaWQgMDtpPj0wO2ktLSkwPT09dFtpXS5jaGlsZHJlbi5sZW5ndGg/aT4wPyhuPXRbaS0xXS5jaGlsZHJlbikuc3BsaWNlKG4uaW5kZXhPZih0W2ldKSwxKTp0aGlzLmNsZWFyKCk6YSh0W2ldLHRoaXMudG9CQm94KX0scn0pO1xuIiwiLy9AdHMtY2hlY2tcblxuLyoqICovXG5leHBvcnQgY2xhc3MgQWdlbnRQb2ludCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN5IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHN4PTAsIHN5PTApIHtcblxuICAgICAgICAvL3Bvc2l0aW9uXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHlcblxuICAgICAgICAvL3NwZWVkXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuc3ggPSBzeFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5zeSA9IHN5XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnMgPSB1bmRlZmluZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuc2EgPSB1bmRlZmluZWRcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QWdlbnRQb2ludH0gYVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0byBhbm90aGVyIGFnZW50LlxuICAgICAqL1xuICAgIGQoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kUChhLngsIGEueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHJldHVybnMge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIGEgcG9zaXRpb24uXG4gICAgICovXG4gICAgZFAoeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdCgoeCAtIHRoaXMueCksICh5IC0gdGhpcy55KSk7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICogU2V0IHJhbmRvbSBzcGVlZFxuICAgICogXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZFxuICAgICovXG4gICAgc2V0UmFuZG9tU3BlZWQobWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICB0aGlzLnMgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgIHRoaXMuc2EgPSAyICogTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMuc3ggPSB0aGlzLnMgKiBNYXRoLmNvcyh0aGlzLnNhKVxuICAgICAgICB0aGlzLnN5ID0gdGhpcy5zICogTWF0aC5zaW4odGhpcy5zYSlcbiAgICB9XG5cbiAgICAvKiogKi9cbiAgICBjb21wdXRlU3BlZWQoKSB7XG4gICAgICAgIHRoaXMucyA9IE1hdGguaHlwb3QodGhpcy5zeCwgdGhpcy5zeSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNcbiAgICB9XG5cbiAgICAvKiogKi9cbiAgICBjb21wdXRlU3BlZWRBbmdsZSgpIHtcbiAgICAgICAgdGhpcy5zYSA9IE1hdGguYXRhbjIodGhpcy5zeSwgdGhpcy5zeCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNhXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuLyoqIEB0eXBlZGVmIHsge3hNaW46IG51bWJlciwgeE1heDogbnVtYmVyLCB5TWluOiBudW1iZXIsIHlNYXg6IG51bWJlcn0gfSBFbnZlbG9wZSAqL1xuXG4vKipcbiAqIEEgSFRNTCBjYW52YXMsIGVuaGFuY2VkIHdpdGggem9vbSBhbmQgcGFuIGNhcGFiaWxpdGllcy5cbiAqIFxuICogQGF1dGhvciBKdWxpZW4gR2FmZnVyaVxuICovXG5leHBvcnQgY2xhc3MgR2VvVmlld2VyIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYW52YXNJZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjZW50ZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gemZcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNJZCA9IFwidmFjYW52YXNcIiwgY2VudGVyID0gdW5kZWZpbmVkLCB6ZiA9IDEpIHtcblxuICAgICAgICAvKiogQHR5cGUge29iamVjdH0gKi9cbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmg7XG5cbiAgICAgICAgLyoqQHR5cGUge29iamVjdH0gKi9cbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy8gc2V0IGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyXG4gICAgICAgIHRoaXMuc2V0Q2VudGVyKGNlbnRlciB8fCB7IHg6IHRoaXMudyAqIDAuNSwgeTogdGhpcy5oICogMC41IH0pXG5cbiAgICAgICAgLy8gc2V0IHpvb20gZmFjdG9yOiBwaXhlbCBzaXplLCBpbiBtL3BpeFxuICAgICAgICB0aGlzLnNldFpmKHpmKTtcblxuICAgICAgICAvL2V4dGVudFxuICAgICAgICAvKiogQHR5cGUge0VudmVsb3BlfSAqL1xuICAgICAgICB0aGlzLmV4dEdlbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51cGRhdGVFeHRlbnRHZW8oKVxuXG4gICAgICAgIC8vbW91c2UgY2xpY2sgLSBwYW5cbiAgICAgICAgbGV0IG1wYW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4geyBtcGFuID0gdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChtcGFuKSB0aGlzLnBhbigtZS5tb3ZlbWVudFggKiB0aGlzLmdldFpmKCksIGUubW92ZW1lbnRZICogdGhpcy5nZXRaZigpKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZSA9PiB7IG1wYW4gPSBmYWxzZSB9KTtcblxuICAgICAgICAvL21vdXNlIHdoZWVsIC0gem9vbVxuICAgICAgICBjb25zdCBmID0gMS41XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZfID0gZS5kZWx0YVkgPiAwID8gZiA6IDEgLyBmO1xuICAgICAgICAgICAgdGhpcy56b29tKGZfLCB0aGlzLnBpeFRvR2VvWChlLm9mZnNldFgpLCB0aGlzLnBpeFRvR2VvWShlLm9mZnNldFkpKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLyoqIEBwYXJhbSB7e3g6bnVtYmVyLHk6bnVtYmVyfX0gdiAqL1xuICAgIHNldENlbnRlcih2KSB7IHRoaXMuY2VudGVyID0gdjsgfVxuICAgIC8qKiBAcmV0dXJucyB7e3g6bnVtYmVyLHk6bnVtYmVyfX0gKi9cbiAgICBnZXRDZW50ZXIoKSB7IHJldHVybiB0aGlzLmNlbnRlcjsgfVxuXG4gICAgLyoqIEBwYXJhbSB7bnVtYmVyfSB2ICovXG4gICAgc2V0WmYodikgeyB0aGlzLnpmID0gdjsgfVxuICAgIC8qKiBAcmV0dXJucyB7bnVtYmVyfSAqL1xuICAgIGdldFpmKCkgeyByZXR1cm4gdGhpcy56ZjsgfVxuXG5cblxuXG4gICAgLyoqICovXG4gICAgaW5pdENhbnZhc1RyYW5zZm9ybSgpIHtcbiAgICAgICAgdGhpcy5jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIH1cblxuICAgIC8qKiAqL1xuICAgIHNldENhbnZhc1RyYW5zZm9ybSgpIHtcbiAgICAgICAgY29uc3QgayA9IDEvdGhpcy5nZXRaZigpO1xuICAgICAgICBjb25zdCB0eCA9IC10aGlzLmNlbnRlci54L3RoaXMuZ2V0WmYoKSArIHRoaXMudyowLjU7XG4gICAgICAgIGNvbnN0IHR5ID0gdGhpcy5jZW50ZXIueS90aGlzLmdldFpmKCkgKyB0aGlzLmgqMC41O1xuICAgICAgICB0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oaywgMCwgMCwgLWssIHR4LCB0eSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKi9cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIHJlZHJhdyBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGFwcCBzY3JlZW4uXG4gICAgICogVG8gYmUgdXNlZCBiZWZvcmUgYSByZWRyYXcgZm9yIGV4YW1wbGUuXG4gICAgICogQHBhcmFtIHsqfSBjb2xvciBcbiAgICAgKi9cbiAgICBjbGVhcihjb2xvciA9IFwid2hpdGVcIikge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuICAgIH1cblxuICAgIC8vY29udmVyc2lvbiBmdW5jdGlvbnNcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geEdlb1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZW9Ub1BpeFgoeEdlbykgeyByZXR1cm4gKHhHZW8gLSB0aGlzLmNlbnRlci54KSAvIHRoaXMuZ2V0WmYoKSArIHRoaXMudyAqIDAuNTsgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5R2VvXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdlb1RvUGl4WSh5R2VvKSB7IHJldHVybiAtKHlHZW8gLSB0aGlzLmNlbnRlci55KSAvIHRoaXMuZ2V0WmYoKSArIHRoaXMuaCAqIDAuNTsgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIHBpeFRvR2VvWCh4KSB7IHJldHVybiAoeCAtIHRoaXMudyAqIDAuNSkgKiB0aGlzLmdldFpmKCkgKyB0aGlzLmNlbnRlci54OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgcGl4VG9HZW9ZKHkpIHsgcmV0dXJuIC0oeSAtIHRoaXMuaCAqIDAuNSkgKiB0aGlzLmdldFpmKCkgKyB0aGlzLmNlbnRlci55OyB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHhHZW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHlHZW9cbiAgICAgKi9cbiAgICBwYW4oZHhHZW8sIGR5R2VvKSB7XG4gICAgICAgIHRoaXMuY2VudGVyLnggKz0gZHhHZW87XG4gICAgICAgIHRoaXMuY2VudGVyLnkgKz0gZHlHZW87XG4gICAgICAgIHRoaXMudXBkYXRlRXh0ZW50R2VvKClcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4R2VvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlHZW9cbiAgICAgKi9cbiAgICB6b29tKGYgPSAxLCB4R2VvID0gdGhpcy5jZW50ZXIueCwgeUdlbyA9IHRoaXMuY2VudGVyLnkpIHtcbiAgICAgICAgdGhpcy5zZXRaZihmICogdGhpcy5nZXRaZigpKTtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSAoeEdlbyAtIHRoaXMuY2VudGVyLngpICogKDEgLSBmKVxuICAgICAgICB0aGlzLmNlbnRlci55ICs9ICh5R2VvIC0gdGhpcy5jZW50ZXIueSkgKiAoMSAtIGYpXG4gICAgICAgIHRoaXMudXBkYXRlRXh0ZW50R2VvKClcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWFyZ2luUHggXG4gICAgICogQHJldHVybnMge0VudmVsb3BlfVxuICAgICAqL1xuICAgIHVwZGF0ZUV4dGVudEdlbyhtYXJnaW5QeCA9IDIwKSB7XG4gICAgICAgIHRoaXMuZXh0R2VvID0ge1xuICAgICAgICAgICAgeE1pbjogdGhpcy5waXhUb0dlb1goLW1hcmdpblB4KSxcbiAgICAgICAgICAgIHhNYXg6IHRoaXMucGl4VG9HZW9YKHRoaXMudyArIG1hcmdpblB4KSxcbiAgICAgICAgICAgIHlNaW46IHRoaXMucGl4VG9HZW9ZKHRoaXMuaCArIG1hcmdpblB4KSxcbiAgICAgICAgICAgIHlNYXg6IHRoaXMucGl4VG9HZW9ZKC1tYXJnaW5QeClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5leHRHZW87XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9iamVjdCBoYXMgdG8gYmUgZHJhd25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IG9iaiBcbiAgICAgKi9cbiAgICB0b0RyYXcob2JqKSB7XG4gICAgICAgIGlmIChvYmoueCA8IHRoaXMuZXh0R2VvLnhNaW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG9iai54ID4gdGhpcy5leHRHZW8ueE1heCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAob2JqLnkgPCB0aGlzLmV4dEdlby55TWluKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChvYmoueSA+IHRoaXMuZXh0R2VvLnlNYXgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5cbi8vc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VybmVyL3JidXNoXG5pbXBvcnQgUkJ1c2ggZnJvbSAncmJ1c2gnO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGF0aWFsSW5kZXgge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNsYXNzIE15UkJ1c2ggZXh0ZW5kcyBSQnVzaCB7XG4gICAgICAgICAgICAvKiogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBvYmogICovXG4gICAgICAgICAgICB0b0JCb3gob2JqKSB7IHJldHVybiB7IG1pblg6IG9iai54LCBtaW5ZOiBvYmoueSwgbWF4WDogb2JqLngsIG1heFk6IG9iai55IH07IH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBhIFxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBiIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb21wYXJlTWluWChhLCBiKSB7IHJldHVybiBhLnggLSBiLng7IH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBhIFxuICAgICAgICAgICAgICogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSBiIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb21wYXJlTWluWShhLCBiKSB7IHJldHVybiBhLnkgLSBiLnk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7TXlSQnVzaH0gKi9cbiAgICAgICAgdGhpcy50cmVlID0gbmV3IE15UkJ1c2goKTtcbiAgICB9XG5cbiAgICAvL1RPRE8gYnVsayByZW1vdmUgP1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4bWF4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHltYXhcbiAgICAgKiBAcmV0dXJuIHtBcnJheS48VD59XG4gICAgICovXG4gICAgZ2V0KHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5zZWFyY2goe1xuICAgICAgICAgICAgbWluWDogeG1pbixcbiAgICAgICAgICAgIG1pblk6IHltaW4sXG4gICAgICAgICAgICBtYXhYOiB4bWF4LFxuICAgICAgICAgICAgbWF4WTogeW1heFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqL1xuICAgIGluc2VydChvYmopIHtcbiAgICAgICAgdGhpcy50cmVlLmluc2VydChvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1bGsgaW5zZXJ0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtBcnJheS48VD59IG9ianNcbiAgICAgKi9cbiAgICBsb2FkKG9ianMpIHtcbiAgICAgICAgdGhpcy50cmVlLmxvYWQob2Jqcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUfSBvYmpcbiAgICAgKi9cbiAgICByZW1vdmUob2JqKSB7XG4gICAgICAgIHRoaXMudHJlZS5yZW1vdmUob2JqKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnRyZWUuY2xlYXIoKVxuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7T2JqZWN0Ljw/LCBUPn0gb2JqXG4gKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICovXG5leHBvcnQgY29uc3Qgb2JqVG9BcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5LjxUPn0gYXJyXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtib29sZWFufSBtc2cgXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCBvYmosIG1zZyA9IHRydWUpIHtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihvYmopO1xuICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBlbHNlXG4gICAgICAgIGlmIChtc2cpIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byByZW1vdmUgZWxlbWVudCBub3QgcHJlc2VudCBpbiBhcnJheS5cIik7XG59O1xuXG4vKipcbiAqIFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBhcnJcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBvYmpzIFxuICogQHBhcmFtIHtib29sZWFufSBtc2cgXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQXJyYXlTID0gZnVuY3Rpb24gKGFyciwgb2JqcywgbXNnID0gdHJ1ZSkge1xuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKVxuICAgICAgICByZW1vdmVGcm9tQXJyYXkoYXJyLCBvYmosIG1zZylcbn07XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU2VhIH0gZnJvbSBcIi4vU2VhXCJcbmltcG9ydCB7IEdlb1ZpZXdlciB9IGZyb20gXCIuLi9iYXNlL0dlb1ZpZXdlclwiXG5pbXBvcnQgeyBBZ2VudFBvaW50IH0gZnJvbSBcIi4uL2Jhc2UvQWdlbnRQb2ludFwiO1xuaW1wb3J0IHsgU3BhdGlhbEluZGV4IH0gZnJvbSAnLi4vYmFzZS9TcGF0aWFsSW5kZXgnO1xuXG4vKiogKi9cbmV4cG9ydCBjbGFzcyBTYXJkaW4gZXh0ZW5kcyBBZ2VudFBvaW50IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2VhfSBzZWEgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeSBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWEsIHggPSBzZWEudyAqIE1hdGgucmFuZG9tKCksIHkgPSBzZWEuaCAqIE1hdGgucmFuZG9tKCksIHN4ID0gdW5kZWZpbmVkLCBzeSA9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIC8vXG4gICAgICAgIHN1cGVyKHgsIHksIHN4LCBzeSlcblxuICAgICAgICAvKiogQHR5cGUge1NlYX0gKi9cbiAgICAgICAgdGhpcy5zZWEgPSBzZWE7XG5cbiAgICAgICAgLy9wb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IDAgPyAwIDogeCA+IHNlYS53ID8gc2VhLncgOiB4XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgMCA/IDAgOiB5ID4gc2VhLmggPyBzZWEuaCA6IHlcblxuICAgICAgICAvL3NwZWVkXG4gICAgICAgIGlmICghc3ggJiYgIXN5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFJhbmRvbVNwZWVkKDAsIHRoaXMuc2VhLlZfTUFYKVxuXG4gICAgICAgICAgICAvL2FjY2VsZXJhdGlvblxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICB0aGlzLmF4ID0gMFxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICB0aGlzLmF5ID0gMFxuXG4gICAgICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiB2aXNpb24gZmllbGRcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgICAgICB0aGlzLm9icyA9IFtdXG4gICAgICAgICAgICAvL2xpc3Qgb2Ygc2FyZGlucyBpbiBjb2xsaXNpb24gZmllbGRcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgICAgICB0aGlzLmNvbCA9IFtdXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3BhdGlhbEluZGV4LjxTYXJkaW4+fSBzaW5kZXggXG4gICAgICovXG4gICAgb2JzZXJ2ZShzaW5kZXgpIHtcblxuICAgICAgICAvKiogQHR5cGUge1NlYX0gKi9cbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc2VhXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCBkTyA9IHMuRF9PQlNcblxuICAgICAgICAvL2luaXRpYWxpc2UgbGlzdHNcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5vYnMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5jb2wgPSBbXTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGFyb3VuZCB1c2luZyBzcGF0aWFsIGluZGV4XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIGNvbnN0IHNzID0gc2luZGV4LmdldCh0aGlzLnggLSBkTywgdGhpcy55IC0gZE8sIHRoaXMueCArIGRPLCB0aGlzLnkgKyBkTyk7XG5cbiAgICAgICAgLy9nZXQgc2FyZGlucyBpbiBvYnNlcnZhdGlvbiBhbmQgY29sbGlzaW9uIGZpZWxkc1xuICAgICAgICBmb3IgKGxldCBmIG9mIHNzKSB7XG4gICAgICAgICAgICBpZiAoZiA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQoZikgPD0gcy5EX0NPTClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbC5wdXNoKGYpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChmKSA8PSBkTykge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgYW5nbGVcbiAgICAgICAgICAgICAgICBsZXQgZGEgPSBNYXRoLmF0YW4yKGYueSAtIHRoaXMueSwgZi54IC0gdGhpcy54KSAtIHRoaXMuc2E7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gTWF0aC5QSSkgZGEgLT0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGEgPD0gLU1hdGguUEkpIGRhICs9IDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGRhID0gTWF0aC5hYnMoZGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYSA+IHMuQV9PQlMgKiAwLjUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzLnB1c2goZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2luaXRpYWxpc2UgYWNjZWxlcmF0aW9uXG4gICAgICAgIHRoaXMuYXggPSAwOyB0aGlzLmF5ID0gMDtcblxuICAgICAgICAvL2NvbGxpc2lvbjogcmVwdWxzaW9uXG4gICAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5jb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmQoZik7XG4gICAgICAgICAgICBjb25zdCBhID0gMS4wICogKDEgLyAoZCAqIGQpIC0gMSAvIChzLkRfQ09MICogcy5EX0NPTCkpO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIGYueCkgLyBkO1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIGYueSkgLyBkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG93YXJkIHRhcmdldCBzcGVlZFxuICAgICAgICBjb25zdCBkdiA9IChzLlZfVEFSR0VUIC0gdGhpcy5zKSAqIDAuMDE7XG4gICAgICAgIHRoaXMuYXggKz0gZHYgKiB0aGlzLnN4IC8gdGhpcy5zO1xuICAgICAgICB0aGlzLmF5ICs9IGR2ICogdGhpcy5zeSAvIHRoaXMucztcblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgbWVhbiBwb3NpdGlvblxuICAgICAgICAvKmlmKG9icy5zaXplKCk+MSl7XG4gICAgICAgICAgICBkb3VibGUgeG49MCx5bj0wO1xuICAgICAgICAgICAgZm9yKFNhcmRpbiBzOm9icyl7XG4gICAgICAgICAgICAgICAgeG4rPXMueDtcbiAgICAgICAgICAgICAgICB5bis9cy55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeG49eG4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIHluPXluL29icy5zaXplKCk7XG4gICAgICAgICAgICBkb3VibGUgZD1NYXRoLmh5cG90KHhuLXgseW4teSk7XG4gICAgICAgICAgICBheCs9LTAuMSooeC14bikvZDtcbiAgICAgICAgICAgIGF5Kz0tMC4xKih5LXluKS9kO1xuICAgICAgICB9Ki9cblxuICAgICAgICAvL3Rvd2FyZCB0aGUgb2JzZXJ2ZWQgc3BlZWRcbiAgICAgICAgY29uc3QgdCA9IDAuOTtcbiAgICAgICAgaWYgKHRoaXMub2JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBkc3ggPSAwLCBkc3kgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgICAgIGRzeCArPSBzLnN4O1xuICAgICAgICAgICAgICAgIGRzeSArPSBzLnN5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN4ID0gKHQgLSAxKSAqIHRoaXMuc3ggKyAoMSAtIHQpICogZHN4IC8gdGhpcy5vYnMubGVuZ3RoO1xuICAgICAgICAgICAgZHN5ID0gKHQgLSAxKSAqIHRoaXMuc3kgKyAoMSAtIHQpICogZHN5IC8gdGhpcy5vYnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBjb25zdCBhID0gMC4xO1xuICAgICAgICAgICAgdGhpcy5heCArPSBhICogZHN4O1xuICAgICAgICAgICAgdGhpcy5heSArPSBhICogZHN5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9hdm9pZCBzaGFya1xuICAgICAgICBjb25zdCBzaCA9IHMuc2hhcms7XG4gICAgICAgIGlmIChzaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5oeXBvdCgoc2gueCAtIHRoaXMueCksIChzaC55IC0gdGhpcy55KSk7XG4gICAgICAgICAgICBpZiAoZCA8PSBzLkRfT0JTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IDUuMCAqICgxIC8gKGQgKiBkKSAtIDEgLyAoZE8gKiBkTykpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXggKz0gYSAqICh0aGlzLnggLSBzaC54KSAvIGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5heSArPSBhICogKHRoaXMueSAtIHNoLnkpIC8gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBtb3ZlKHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgc3BlZWRcbiAgICAgICAgdGhpcy5zeCArPSB0aGlzLmF4ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy5zeSArPSB0aGlzLmF5ICogdGltZVN0ZXBNcyArICgxIC0gMiAqIE1hdGgucmFuZG9tKCkpICogMC4wMjtcbiAgICAgICAgdGhpcy5zID0gdGhpcy5jb21wdXRlU3BlZWQoKVxuICAgICAgICBpZiAodGhpcy5zID4gdGhpcy5zZWEuVl9NQVgpIHtcbiAgICAgICAgICAgIHRoaXMucyA9IHRoaXMuc2VhLlZfTUFYO1xuICAgICAgICAgICAgdGhpcy5zeCA9IHRoaXMuc2VhLlZfTUFYICogTWF0aC5jb3ModGhpcy5zYSk7XG4gICAgICAgICAgICB0aGlzLnN5ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLnNpbih0aGlzLnNhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3ggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zeSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9saW1pdFxuICAgICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gdGhpcy5zZWEudztcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IHRoaXMuc2VhLmg7XG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLnNlYS53KSB0aGlzLnggPSAwO1xuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5zZWEuaCkgdGhpcy55ID0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYSBzYXJkaW4gYm9keVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7R2VvVmlld2VyfSBjcCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFxuICAgICAqL1xuICAgIGRpc3BsYXkoY3AsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmN0eFxuICAgICAgICBjb25zdCBjID0gTWF0aC5mbG9vcigyNTUgKiBNYXRoLmFicyh0aGlzLnNhKSAvIE1hdGguUEkpO1xuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwicmdiKDI1NSwgMjU1LCBcIiArIGMgKyBcIilcIlxuICAgICAgICBjb25zdCBhID0gbGVuZ3RoIC8gdGhpcy5zO1xuICAgICAgICBjb25zdCBkeCA9IGEgKiB0aGlzLnN4ICogMC41O1xuICAgICAgICBjb25zdCBkeSA9IGEgKiB0aGlzLnN5ICogMC41O1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8odGhpcy54IC0gZHgsIHRoaXMueSAtIGR5KTtcbiAgICAgICAgYzIubGluZVRvKHRoaXMueCArIGR4LCB0aGlzLnkgKyBkeSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHNhcmRpbiB2aXNpb24gZmllbGRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3AgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxTdHlsZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGluZVdpZHRoIFxuICAgICAqL1xuICAgIGRpc3BsYXlWaXNpb25GaWVsZChjcCwgZmlsbFN0eWxlLCBsaW5lV2lkdGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jdHhcbiAgICAgICAgYzIuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG5cbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGMyLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5zZWEuRF9PQlMgLyBjcC5nZXRaZigpLFxuICAgICAgICAgICAgdGhpcy5zYSAtIHRoaXMuc2VhLkFfT0JTICogMC41LFxuICAgICAgICAgICAgdGhpcy5zYSArIHRoaXMuc2VhLkFfT0JTICogMC41XG4gICAgICAgICk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzYXJkaW4gdmlzaW9uIGxpbmtzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHZW9WaWV3ZXJ9IGNwIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJva2VTdHlsZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGluZVdpZHRoIFxuICAgICAqL1xuICAgIGRpc3BsYXlWaXNpb25MaW5rcyhjcCwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmN0eFxuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGZvciAobGV0IHNhMiBvZiB0aGlzLm9icykge1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICAgICAgYzIubGluZVRvKHNhMi54LCBzYTIueSk7XG4gICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzYXJkaW4gY29sbGlzaW9uIGZpZWxkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHZW9WaWV3ZXJ9IGNwIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJva2VTdHlsZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGluZVdpZHRoIFxuICAgICAqL1xuICAgIGRpc3BsYXlDb2xsaXNpb25GaWVsZChjcCwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmN0eFxuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgICBjMi5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuc2VhLkRfQ09MICogMC41IC8gY3AuZ2V0WmYoKSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU2FyZGluIH0gZnJvbSAnLi9TYXJkaW4nO1xuaW1wb3J0IHsgU3BhdGlhbEluZGV4IH0gZnJvbSAnLi4vYmFzZS9TcGF0aWFsSW5kZXgnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuXG4vKiogKi9cbmV4cG9ydCBjbGFzcyBTZWEge1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHcgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8vVE9ETyBzaG91bGQgYmVjb21lIHN0YXRpYyBhdHRyaWJ1dGVzIG9mIFNhcmRpbiBjbGFzc1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuRF9PQlMgPSA1MFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5BX09CUyA9IDIwMCAqIE1hdGguUEkgLyAxODBcblxuICAgICAgICAvL2NvbGxpc2lvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5EX0NPTCA9IDEwXG5cbiAgICAgICAgLy9zcGVlZFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5WX1RBUkdFVCA9IDAuM1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5WX01BWCA9IDAuNlxuXG4gICAgICAgIC8vc2hhcmtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuRF9TSEFSS19FQVQgPSAxMlxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgPSAwXG5cblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5maXNoID0gW11cblxuICAgICAgICAvL1RPRE9cbiAgICAgICAgdGhpcy5zaGFyayA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBzdGVwKHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vaW5pXG4gICAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5maXNoKSB7XG4gICAgICAgICAgICBmLmNvbXB1dGVTcGVlZCgpXG4gICAgICAgICAgICBmLmNvbXB1dGVTcGVlZEFuZ2xlKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbWFsZSBzcGF0aWFsIGluZGV4XG4gICAgICAgIC8qKiBAdHlwZSB7U3BhdGlhbEluZGV4LjxTYXJkaW4+fSAqL1xuICAgICAgICBjb25zdCBzaW5kZXggPSBuZXcgU3BhdGlhbEluZGV4KCk7XG4gICAgICAgIHNpbmRleC5sb2FkKHRoaXMuZmlzaClcblxuICAgICAgICAvL29ic2VydmVcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpc2gpXG4gICAgICAgICAgICBmLm9ic2VydmUoc2luZGV4KTtcblxuICAgICAgICAvL3NoYXJrIGVhdCBmaXNoXG4gICAgICAgIHRoaXMuc2hhcmtFYXQoc2luZGV4KTtcblxuICAgICAgICAvL2Rpc3Bvc2Ugc3BhdGlhbCBpbmRleFxuICAgICAgICAvL3NpbmRleC5jbGVhcigpXG5cbiAgICAgICAgLy9tb3ZlXG4gICAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgZi5tb3ZlKHRpbWVTdGVwTXMpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTcGF0aWFsSW5kZXguPFNhcmRpbj59IHNpbmRleCBcbiAgICAgKi9cbiAgICBzaGFya0VhdChzaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmsgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFNhcmRpbj59ICovXG4gICAgICAgIHRoaXMua2lsbGVkID0gW107XG5cbiAgICAgICAgY29uc3QgeCA9IHRoaXMuc2hhcmsueCwgeSA9IHRoaXMuc2hhcmsueTtcbiAgICAgICAgY29uc3Qgc3MgPSBzaW5kZXguZ2V0KHggLSB0aGlzLkRfU0hBUktfRUFULCB5IC0gdGhpcy5EX1NIQVJLX0VBVCwgeCArIHRoaXMuRF9TSEFSS19FQVQsIHkgKyB0aGlzLkRfU0hBUktfRUFUKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzcykge1xuICAgICAgICAgICAgY29uc3QgZCA9IE1hdGguaHlwb3QoKHggLSBzLngpLCAoeSAtIHMueSkpO1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLkRfU0hBUktfRUFUKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMua2lsbGVkLnB1c2gocyk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQXJyYXkodGhpcy5maXNoLCBzKVxuICAgICAgICAgICAgLy9zaW5kZXgucmVtb3ZlKHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuRUFURU5fU0FSRElOX05CICs9IHRoaXMua2lsbGVkLmxlbmd0aDtcbiAgICAgICAgLy9lYXRlbkZpc2hOYi5zZXRUZXh0KFwiRWF0ZW4gZmlzaDogXCIgKyBFQVRFTl9TQVJESU5fTkIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmlzaFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBhZGRGaXNoKG5iID0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspXG4gICAgICAgICAgICB0aGlzLmZpc2gucHVzaChuZXcgU2FyZGluKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcmFuZG9tIHNwZWVkIGZvciBhbGwgZmlzaFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHNldFJhbmRvbVNwZWVkKCkge1xuICAgICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIGYuc2V0UmFuZG9tU3BlZWQoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFNlYSB9IGZyb20gJy4vU2VhJztcbmltcG9ydCB7IEdlb1ZpZXdlciB9IGZyb20gJy4uL2Jhc2UvR2VvVmlld2VyJztcblxuY2xhc3MgRmlzaFNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy9UT0RPXG4gICAgICAgIC8vYWRkIGVhdGVuIGZpc2ggbmIgbGFiZWxcblxuICAgICAgICAvKiogQHR5cGUge0dlb1ZpZXdlcn0gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBHZW9WaWV3ZXIoKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLnNob3dGaXNoVmlzaW9uRmllbGQgPSBmYWxzZVxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuc2hvd0Zpc2hWaXNpb25MaW5rcyA9IGZhbHNlXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5zaG93RmlzaENvbGxpc2lvbkZpZWxkID0gZmFsc2VcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmN0eFxuICAgICAgICAgICAgY29uc3QgcyA9IHRoLnNlYVxuXG4gICAgICAgICAgICB0aGlzLmluaXRDYW52YXNUcmFuc2Zvcm0oKVxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMTIwLDEyMCwyNTUsMC42KVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzVHJhbnNmb3JtKClcblxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkZpZWxkKHRoaXMsIFwicmdiYSgyMDAsMjAwLDIwMCwwLjE1KVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBsaW5rc1xuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uTGlua3MpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkxpbmtzKHRoaXMsIFwicmdiYSgyNTUsMTAwLDEwMCwwLjMpXCIsIDEpXG4gICAgICAgICAgICAvL3Nob3cgY29sbGlzaW9uIGZpZWxkXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hDb2xsaXNpb25GaWVsZClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhzYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5Q29sbGlzaW9uRmllbGQodGhpcywgXCJwdXJwbGVcIiwgMSlcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2FyZGluc1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMlxuICAgICAgICAgICAgY29uc3Qgc2FyZGluTGVuZ3RoID0gN1xuICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhzYSkpXG4gICAgICAgICAgICAgICAgICAgIHNhLmRpc3BsYXkodGhpcywgc2FyZGluTGVuZ3RoKVxuXG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBzaGFya1xuICAgICAgICAgICAgaWYgKHMuc2hhcmsgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgYzIubGluZVdpZHRoID0gNFxuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFya0xlbmd0aCA9IDEyXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzaGFya0xlbmd0aCAqIE1hdGguY29zKHMuc2hhcmsuYW5nbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc2hhcmtMZW5ndGggKiBNYXRoLnNpbihzLnNoYXJrLmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyhzLnNoYXJrLngsIHMuc2hhcmsueSk7XG4gICAgICAgICAgICAgICAgYzIubGluZVRvKHMuc2hhcmsueCAtIGR4LCBzLnNoYXJrLnkgKyBkeSk7XG4gICAgICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBibG9vZCBzcG90XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMVxuICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5raWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5tb3ZlVG8oc2EueCwgc2EueSk7XG4gICAgICAgICAgICAgICAgYzIuYXJjKHNhLngsIHNhLnksIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjMi5maWxsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMSAqIHRoLmNwbHVzLmdldFpmKCk7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QoMCwgMCwgdGgudywgdGguaCk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jcGx1cy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IHsgeDogdGguY3BsdXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHk6IHRoLmNwbHVzLnBpeFRvR2VvWShlLm9mZnNldFkpLCBhbmdsZTogMCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgeEcgPSB0aC5jcGx1cy5waXhUb0dlb1goZS5vZmZzZXRYKTtcbiAgICAgICAgICAgIGNvbnN0IHlHID0gdGguY3BsdXMucGl4VG9HZW9ZKGUub2Zmc2V0WSk7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoLXlHICsgdGguc2VhLnNoYXJrLnksIHhHIC0gdGguc2VhLnNoYXJrLngpO1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0geyB4OiB4RywgeTogeUcsIGFuZ2xlOiBhbmdsZSB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZSA9PiB7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSBudWxsO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8qKiBAdHlwZSB7U2VhfSAqL1xuICAgICAgICB0aGlzLnNlYSA9IG5ldyBTZWEodGhpcy53LCB0aGlzLmgpXG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5zaXR5IFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRSYW5kb20oZGVuc2l0eSA9IDAuMDAxKSB7XG4gICAgICAgIHRoaXMuc2VhLmFkZEZpc2goZGVuc2l0eSAqIHRoaXMuc2VhLncgKiB0aGlzLnNlYS5oKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJJdGVyYXRpb25zIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0YXJ0KHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5zZWEuc3RlcCh0aW1lU3RlcE1zKTtcbiAgICAgICAgICAgIHQuY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmJJdGVyYXRpb25zID4gMCAmJiBpKysgPiBuYkl0ZXJhdGlvbnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmdpbmUsIDApO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpc2ggPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgRmlzaFNpbXVsYXRpb24ob3B0cylcbn1cbiIsIi8vQHRzLWNoZWNrXG5cbi8qKlxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBDZWxsIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBuYj0wKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm5iID0gbmJcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBvYmpUb0FycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSAnLi4vYmFzZS9HZW9WaWV3ZXInO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5cbi8qKlxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsQ2VsbD59ICovXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge0NlbGx8bnVsbH1cbiAgICAgKi9cbiAgICBhZGQoeCwgeSkge1xuXG4gICAgICAgIC8vZmluZCBjZWxsIGF0IGxvY2F0aW9uXG4gICAgICAgIC8qKkB0eXBlIHtzdHJpbmd9Ki9cbiAgICAgICAgY29uc3QgaWQgPSB4ICsgXCJfXCIgKyB5O1xuICAgICAgICBpZiAodGhpcy5wb3B1bGF0aW9uSVtpZF0pIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgIC8qKkB0eXBlIHtDZWxsfSAqL1xuICAgICAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoeCwgeSwgMClcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goY2VsbClcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtpZF0gPSBjZWxsXG4gICAgICAgIHJldHVybiBjZWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RlcCgpIHtcblxuICAgICAgICAvL1RPRE8gZG91YmxlIGluZGV4aW5nPyBieSByYXcgYW5kIHRoZW4gY29sdW1uID9cbiAgICAgICAgLy9wb3B1bGF0ZSBjZWxsIHN1cnJvdW5kaW5nc1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3Qgc3VySSA9IHt9O1xuICAgICAgICAvL2dvIHRocm91Z2ggbGlzdCBvZiBjZWxsc1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgLy8gKzEgc3Vycm91bmRpbmcgY2VsbHNcbiAgICAgICAgICAgIGNvbnN0IHNycyA9IFVuaXZlcnNlLmdldENlbGxTdXJyb3VuZGluZyhjZWxsLCB0aGlzKTtcbiAgICAgICAgICAgIGZvciAobGV0IHN1ciBvZiBzcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBzdXIueCArIFwiX1wiICsgc3VyLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VyXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoc3VyXykge1xuICAgICAgICAgICAgICAgICAgICBzdXJfLm5iKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VyLm5iID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3VySVtrZXldID0gc3VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQjMvUzIzXG4gICAgICAgIC8va2lsbCBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXAgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQ2VsbD59XG4gICAgICAgICAqIEBkaWN0ICovXG4gICAgICAgIGNvbnN0IGNlbGxzVG9LZWVwSSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoaXMucG9wdWxhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2VsbC54ICsgXCJfXCIgKyBjZWxsLnk7XG4gICAgICAgICAgICBjb25zdCBjZWxsXyA9IHN1cklba2V5XTtcbiAgICAgICAgICAgIGlmICghY2VsbF8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy9pZiAobmI8MiBvciBuYj4zKSAtPiBraWxsXG4gICAgICAgICAgICBpZiAoY2VsbF8ubmIgPCAyIHx8IGNlbGxfLm5iID4gMykgY29udGludWU7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcC5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY2VsbHNUb0tlZXBJW2tleV0gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IGNlbGxzVG9LZWVwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JID0gY2VsbHNUb0tlZXBJO1xuXG4gICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsc1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxDZWxsPn0gKi9cbiAgICAgICAgY29uc3Qgc3VycyA9IG9ialRvQXJyYXkoc3VySSk7XG4gICAgICAgIGZvciAobGV0IHN1ciBvZiBzdXJzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdXIubmIgIT09IDMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGFscmVhZHkgYWxpdmVcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5wb3B1bGF0aW9uSVtrZXldO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgY2VsbFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uLnB1c2goc3VyKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbklba2V5XSA9IHN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TVNcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3BsdXNcbiAgICAgKiBAcmV0dXJuIHtVbml2ZXJzZX1cbiAgICAgKi9cbiAgICBzdGFydChuYiwgdGltZW91dE1TLCBjcGx1cykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHVuaSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICB1bmkuc3RlcCgpO1xuICAgICAgICAgICAgY3BsdXMucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAobmIgPiAwICYmIGkrKyA+IG5iKSByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgdGltZW91dE1TKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Q2VsbH0gY2VsbFxuICAgICAqIEBwYXJhbSB7VW5pdmVyc2V9IHVuaVxuICAgICAqIEByZXR1cm4ge0FycmF5LjxDZWxsPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2VsbFN1cnJvdW5kaW5nKGNlbGwsIHVuaSkge1xuICAgICAgICBjb25zdCB4MSA9IGNlbGwueCA9PT0gMCA/IHVuaS53IC0gMSA6IGNlbGwueCAtIDE7XG4gICAgICAgIGNvbnN0IHgyID0gY2VsbC54ID09PSB1bmkudyAtIDEgPyAwIDogY2VsbC54ICsgMTtcbiAgICAgICAgY29uc3QgeTEgPSBjZWxsLnkgPT09IDAgPyB1bmkuaCAtIDEgOiBjZWxsLnkgLSAxO1xuICAgICAgICBjb25zdCB5MiA9IGNlbGwueSA9PT0gdW5pLmggLSAxID8gMCA6IGNlbGwueSArIDE7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MSwgeTEpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDEsIGNlbGwueSksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MSwgeTIpLFxuICAgICAgICAgICAgbmV3IENlbGwoY2VsbC54LCB5MSksXG4gICAgICAgICAgICBuZXcgQ2VsbChjZWxsLngsIHkyKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgyLCB5MSksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MiwgY2VsbC55KSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgyLCB5MiksXG4gICAgICAgIF07XG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSAnLi4vYmFzZS9HZW9WaWV3ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tICcuL1VuaXZlcnNlJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuL0NlbGwnO1xuXG4vL1RPRE8gem9vbS9wYW4sIHdpdGggY2FudmFzIHRyYW5zZm9ybTogYmV0dGVyIHVuaXZlcnNlIGxpbWl0c1xuLy9UT0RPIGJ1dHRvbnMgKHBsYXksIHN0b3AsIHNwZWVkLCBkcmF3LCBwYW4pXG4vL1RPRE8gY2hlY2sgY2FudmFzIGFuaW1hdGlvblxuXG5cbmNsYXNzIEdvTFNpbXVsYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtHZW9WaWV3ZXJ9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgR2VvVmlld2VyKCk7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jdHhcblxuICAgICAgICAgICAgLy9jbGVhclxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vZHJhdyBjZWxsc1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHRoLnVuaS5wb3B1bGF0aW9uKVxuICAgICAgICAgICAgICAgIGMyLmZpbGxSZWN0KHRoaXMuZ2VvVG9QaXhYKGNlbGwueCksIHRoaXMuZ2VvVG9QaXhZKGNlbGwueSksIDEgLyB0aGlzLmdldFpmKCksIDEgLyB0aGlzLmdldFpmKCkpO1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLmdldFpmKCksIHRoLmggLyB0aGlzLmdldFpmKCkpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBpbml0UmFuZG9tKGRlbnNpdHkgPSAwLjA1KSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IG5iID0gdGhpcy51bmkudyAqIHRoaXMudW5pLmggKiBkZW5zaXR5O1xuICAgICAgICB3aGlsZSAoaSA8IG5iKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS53ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCh0aGlzLnVuaS5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAvKiogQHR5cGUge0NlbGx9ICovXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy51bmkuYWRkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8vXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudW5pLnN0YXJ0KC0xLCAwLCB0aGlzLmNwbHVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IGdhbWVPZkxpZmUgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgR29MU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcblxuZXhwb3J0ICogZnJvbSBcIi4vcGxhbmV0cy9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb2wvaW5kZXhcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlzaC9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcC9pbmRleFwiXG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tIFwiLi9Vbml2ZXJzZVwiO1xuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSBcIi4uL2Jhc2UvR2VvVmlld2VyXCJcbmltcG9ydCB7IEFnZW50UG9pbnQgfSBmcm9tIFwiLi4vYmFzZS9BZ2VudFBvaW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFuZXQgZXh0ZW5kcyBBZ2VudFBvaW50IHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7VW5pdmVyc2V9IHUgVGhlIHVuaXZlcnNlIHRoZSBwbGFuZXQgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgbWFzc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ggVGhlIHNwZWVkIHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3kgVGhlIHNwZWVkIHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1LCBtLCB4LCB5LCBzeCA9IDAsIHN5ID0gMCkge1xuXG4gICAgICAgIC8vXG4gICAgICAgIHN1cGVyKHgsIHksIHN4LCBzeSlcblxuICAgICAgICAvKiogQHR5cGUge1VuaXZlcnNlfSAqL1xuICAgICAgICB0aGlzLnUgPSB1O1xuICAgICAgICB1LnBzLnB1c2godGhpcylcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5tID0gbTtcblxuICAgICAgICAvL2NvbXB1dGUgcmFkaXVzXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBjb25zdCByID0gdGhpcy5yKCk7XG5cbiAgICAgICAgLy9zZXQgcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCByID8gciA6IHggPiB1LncgLSByID8gdS53IC0gciA6IHg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgciA/IHIgOiB5ID4gdS5oIC0gciA/IHUuaCAtIHIgOiB5O1xuXG4gICAgICAgIC8vYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmF4ID0gMDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuYXkgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZm9yY2UsIGJhc2VkIG9uIHRoZSBncmF2aXR5IG9mIG90aGVyIHBsYW5ldHMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGV4cG9uZW50XG4gICAgICovXG4gICAgb2JzZXJ2ZShleHBvbmVudCkge1xuXG4gICAgICAgIC8vY29tcHV0ZSBncmF2aXR5IGZpZWxkIGF0IHBsYW5ldCBsb2NhdGlvblxuICAgICAgICBjb25zdCBnID0gdGhpcy51LmdldEdyYXZpdHlGaWVsZCh0aGlzLngsIHRoaXMueSwgdGhpcywgZXhwb25lbnQpO1xuXG4gICAgICAgIC8vc2V0IGFjY2VsZXJhdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5heCA9IGcuZ3g7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmF5ID0gZy5neTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgcGxhbmV0LCBkZXBlbmRpbmcgb24gaXRzIG1hc3MuXG4gICAgICovXG4gICAgcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMubSAvIE1hdGguUEksIDAuNSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJvdW5jZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgY2hhbmdlKGJvdW5jZSA9IGZhbHNlLCBtYXhTcGVlZCA9IDAuOCwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuYXggKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnN5ICs9IHRoaXMuYXkgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vY2hlY2sgdm1heFxuICAgICAgICBpZiAobWF4U3BlZWQgPiAwKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLnNxcnQodGhpcy5zeCAqIHRoaXMuc3ggKyB0aGlzLnN5ICogdGhpcy5zeSk7XG4gICAgICAgICAgICBpZiAodiA+IG1heFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeCA9IG1heFNwZWVkICogdGhpcy5zeCAvIHY7XG4gICAgICAgICAgICAgICAgdGhpcy5zeSA9IG1heFNwZWVkICogdGhpcy5zeSAvIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHBvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBsZXQgbnggPSB0aGlzLnggKyB0aGlzLnN4ICogdGltZVN0ZXBNcztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGxldCBueSA9IHRoaXMueSArIHRoaXMuc3kgKiB0aW1lU3RlcE1zO1xuXG4gICAgICAgIC8vaGFuZGxlIHBvc2l0aW9uIGxpbWl0XG4gICAgICAgIGlmIChib3VuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcbiAgICAgICAgICAgIGNvbnN0IGUgPSAxO1xuICAgICAgICAgICAgaWYgKG54IDwgcikgeyBueCA9IHI7IHRoaXMuc3ggPSAtdGhpcy5zeCAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueSA8IHIpIHsgbnkgPSByOyB0aGlzLnN5ID0gLXRoaXMuc3kgKiBlOyB9XG4gICAgICAgICAgICBpZiAobnggPiB0aGlzLnUudyAtIHIpIHsgbnggPSB0aGlzLnUudyAtIHI7IHRoaXMuc3ggPSAtdGhpcy5zeCAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueSA+IHRoaXMudS5oIC0gcikgeyBueSA9IHRoaXMudS5oIC0gcjsgdGhpcy5zeSA9IC10aGlzLnN5ICogZTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG54IDwgMCkgeyBueCA9IHRoaXMudS53OyB9XG4gICAgICAgICAgICBpZiAobnkgPCAwKSB7IG55ID0gdGhpcy51Lmg7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53KSB7IG54ID0gMDsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmgpIHsgbnkgPSAwOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvL21vdmVcbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBwbGFuZXRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3AgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGxTdHlsZSBcbiAgICAgKi9cbiAgICBkaXNwbGF5KGNwLCBmaWxsU3R5bGUpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jdHhcbiAgICAgICAgYzIuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnIoKSAvIGNwLmdldFpmKCksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHBsYW5ldCBhY2NlbGVyYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3AgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cm9rZVN0eWxlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lV2lkdGggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZhY3RvciBcbiAgICAgKi9cbiAgICBkaXNwbGF5QWNjZWxlcmF0aW9uKGNwLCBzdHJva2VTdHlsZSA9IFwiY3lhblwiLCBsaW5lV2lkdGggPSAxLCBmYWN0b3IgPSA1MDAwKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuY3R4XG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcblxuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgYzIubGluZVRvKHRoaXMueCArIGZhY3RvciAqIHRoaXMuYXgsIHRoaXMueSArIGZhY3RvciAqIHRoaXMuYXkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHsgU3BhdGlhbEluZGV4IH0gZnJvbSAnLi4vYmFzZS9TcGF0aWFsSW5kZXgnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGg7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy5wcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdGhlIG1hc3Mgb2YgdGhlIHVuaXZlcnNlLCBhcyB0aGUgc3VtIG9mIHRoZSBtYXNzIG9mIGl0cyBwbGFuZXRzLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgbSgpIHtcbiAgICAgICAgbGV0IG0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBtICs9IHAubTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcElnbm9yZSBBIHBsYW5ldCB0byBpZ25vcmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZXhwb25lbnRcbiAgICAgKiBAcmV0dXJucyB7e2d4Om51bWJlcixneTpudW1iZXJ9fVxuICAgICAqL1xuICAgIGdldEdyYXZpdHlGaWVsZCh4LCB5LCBwSWdub3JlID0gdW5kZWZpbmVkLCBleHBvbmVudCA9IDIpIHtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IGd4ID0gMFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IGd5ID0gMFxuXG4gICAgICAgIC8vZ290aHJvdWdoIGFsbCBwbGFuZXRzIGluIHRoZSB1bml2ZXJzZVxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpIHtcblxuICAgICAgICAgICAgLy9pZ25vcmUgcGxhbmV0XG4gICAgICAgICAgICBpZiAocElnbm9yZSAmJiBwID09IHBJZ25vcmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY29tcHV0ZSBkaXN0YW5jZVxuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBsZXQgZCA9IHAuZFAoeCwgeSk7XG4gICAgICAgICAgICBpZiAoZCA9PT0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jb21wdXRlIGFuZCBhZGQgY29udHJpYnV0aW9uXG4gICAgICAgICAgICBkID0gZCAqIE1hdGgucG93KGQsIGV4cG9uZW50KTtcbiAgICAgICAgICAgIGd4ICs9IDAuMDEgKiAocC54IC0geCkgKiBwLm0gLyBkO1xuICAgICAgICAgICAgZ3kgKz0gMC4wMSAqIChwLnkgLSB5KSAqIHAubSAvIGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZ3g6IGd4LCBneTogZ3kgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWdncmVnYXRlIHR3byBwbGFuZXRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAxXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAyXG4gICAgICogQHBhcmFtIHtTcGF0aWFsSW5kZXguPFBsYW5ldD59IHNpbmRleFxuICAgICAqIEByZXR1cm5zIHtQbGFuZXR9XG4gICAgICovXG4gICAgYWdncmVnYXRlKHAxLCBwMiwgc2luZGV4KSB7XG4gICAgICAgIGNvbnN0IG0gPSBwMS5tICsgcDIubTtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQbGFuZXQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIChwMS54ICogcDEubSArIHAyLnggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEueSAqIHAxLm0gKyBwMi55ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnN4ICogcDEubSArIHAyLnN4ICogcDIubSkgLyBtLFxuICAgICAgICAgICAgKHAxLnN5ICogcDEubSArIHAyLnN5ICogcDIubSkgLyBtXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBwMSk7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBwMik7XG5cbiAgICAgICAgaWYgKHNpbmRleCkge1xuICAgICAgICAgICAgc2luZGV4LnJlbW92ZShwMSlcbiAgICAgICAgICAgIHNpbmRleC5yZW1vdmUocDIpXG4gICAgICAgICAgICBzaW5kZXguaW5zZXJ0KHApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTcGF0aWFsSW5kZXguPFBsYW5ldD59IHNpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xsaXNpb25GYWN0b3JcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFBsYW5ldD59XG4gICAgICovXG4gICAgZmluZENvbGxpc2lvbihzaW5kZXgsIGNvbGxpc2lvbkZhY3RvciA9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcGkgb2YgdGhpcy5wcykge1xuXG4gICAgICAgICAgICBjb25zdCB3ID0gMiAqIHBpLnIoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmQgPSBzaW5kZXguZ2V0KHBpLnggLSB3LCBwaS55IC0gdywgcGkueCArIHcsIHBpLnkgKyB3KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcGogb2YgY2FuZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHBpID09IHBqKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGQxID0gcGkuZChwaik7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgZDIgPSAocGkucigpICsgcGoucigpKSAqIGNvbGxpc2lvbkZhY3RvcjtcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwaSwgcGpdO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGQgcGxhbmV0cyB3aXRoIHJhbmRvbSBzcGVlZFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgYWRkUGxhbmV0cyhuYiA9IDEsIG1pID0gMC41LCBtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5ldyBQbGFuZXQodGhpcywgbWksIHRoaXMudyAqIE1hdGgucmFuZG9tKCksIHRoaXMuaCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgcC5zZXRSYW5kb21TcGVlZChtaW5TcGVlZCwgbWF4U3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJvdW5jZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdm1heCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZXhwb25lbnQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbGxpc2lvbkZhY3RvciBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGVwKGJvdW5jZSA9IGZhbHNlLCB2bWF4ID0gMC44LCBleHBvbmVudCA9IDIsIGNvbGxpc2lvbkZhY3RvciA9IDEsIHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vb2JzZXJ2YXRpb25cbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgcC5vYnNlcnZlKGV4cG9uZW50KTtcblxuICAgICAgICAvL2FjdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLmNoYW5nZShib3VuY2UsIHZtYXgsIHRpbWVTdGVwTXMpO1xuXG5cbiAgICAgICAgLy9jb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9ucyhjb2xsaXNpb25GYWN0b3IpXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbGxpc2lvbkZhY3RvciBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBkZXRlY3RDb2xsaXNpb25zKGNvbGxpc2lvbkZhY3RvciA9IDEpIHtcblxuICAgICAgICAvKiogQHR5cGUge1NwYXRpYWxJbmRleC48UGxhbmV0Pn0gKi9cbiAgICAgICAgY29uc3Qgc2luZGV4ID0gbmV3IFNwYXRpYWxJbmRleCgpO1xuICAgICAgICBzaW5kZXgubG9hZCh0aGlzLnBzKVxuXG4gICAgICAgIC8vZmluZCBmaXJzdCBjb2xsaXNpb25cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgbGV0IHBhaXIgPSB0aGlzLmZpbmRDb2xsaXNpb24oc2luZGV4LCBjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB3aGlsZSAocGFpciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvL2FnZ3JlZ2F0ZVxuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuYWdncmVnYXRlKHBhaXJbMF0sIHBhaXJbMV0sIHNpbmRleClcblxuICAgICAgICAgICAgLy9maW5kIG5leHQgY29sbGlzaW9uXG4gICAgICAgICAgICBwYWlyID0gdGhpcy5maW5kQ29sbGlzaW9uKHNpbmRleCwgY29sbGlzaW9uRmFjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXNzaWduIHJhbmRvbSBzcGVlZCB0byBhbGwgcGxhbmV0c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc2V0UmFuZG9tU3BlZWQobWluU3BlZWQgPSAwLCBtYXhTcGVlZCA9IDAuMSkge1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLnNldFJhbmRvbVNwZWVkKG1pblNwZWVkLCBtYXhTcGVlZClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UGxhbmV0fSBUaGUgbGFyZ2VzdCBwbGFuZXQgb2YgdGhlIHVuaXZlcnNlLCB1c3VhbGx5IHRoZSBzdGFyLlxuICAgICAqL1xuICAgIGdldExhcmdlc3RQbGFuZXQoKSB7XG4gICAgICAgIGxldCBwTSA9IG51bGwsIG1NID0gMDtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBzKVxuICAgICAgICAgICAgaWYgKHAubSA+IG1NKSB7IHBNID0gcDsgbU0gPSBwLm0gfVxuICAgICAgICByZXR1cm4gcE1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGFyZ2VzdCBwbGFuZXQgYW5kIGV4cGxvZGUgaXQuXG4gICAgICovXG4gICAgZXhwbG9kZUxhcmdlc3RQbGFuZXQoKSB7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmdldExhcmdlc3RQbGFuZXQoKVxuICAgICAgICB0aGlzLmV4cGxvZGUocClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBsb2RlIGEgcGxhbmV0IGludG8gcGllY2VzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHAgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZCBcbiAgICAgKi9cbiAgICBleHBsb2RlKHAsIG5iID0gLTEsIG1pblNwZWVkID0gMC44LCBtYXhTcGVlZCA9IDEuNSwgcmFkID0gLTEpIHtcbiAgICAgICAgaWYgKG5iIDw9IDApIG5iID0gTWF0aC5mbG9vcihwLm0pO1xuICAgICAgICBpZiAobmIgPD0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSAyICogTWF0aC5QSSAvIG5iO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIC8vY3JlYXRlIHBsYW5ldFxuXG4gICAgICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgICAgICBpZiAocmFkIDwgMCkgcmFkID0gMiAqIHAucigpXG4gICAgICAgICAgICBjb25zdCBkID0gcmFkICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpICogYW5nbGVTdGVwO1xuICAgICAgICAgICAgY29uc3QgeCA9IGQgKiBNYXRoLmNvcyhhKSwgeSA9IGQgKiBNYXRoLnNpbihhKTtcblxuICAgICAgICAgICAgLy9zcGVlZFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBtaW5TcGVlZCArIE1hdGgucmFuZG9tKCkgKiAobWF4U3BlZWQgLSBtaW5TcGVlZCk7XG4gICAgICAgICAgICBjb25zdCBhUyA9IGEgKyAyICogKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIE1hdGguUEkgLyAzO1xuICAgICAgICAgICAgY29uc3Qgc3ggPSBzcGVlZCAqIE1hdGguY29zKGFTKSwgc3kgPSBzcGVlZCAqIE1hdGguc2luKGFTKTtcblxuICAgICAgICAgICAgbmV3IFBsYW5ldCh0aGlzLCBwLm0gLyBuYiwgcC54ICsgeCwgcC55ICsgeSwgcC5zeCArIHN4LCBwLnN5ICsgc3kpXG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgcCBmcm9tIHVuaXZlcnNlXG4gICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLnBzLCBwKTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgUGxhbmV0IH0gZnJvbSAnLi9QbGFuZXQnO1xuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSAnLi4vYmFzZS9HZW9WaWV3ZXInO1xuXG4vKiogICovXG5jbGFzcyBQbGFuZXRTaW11bGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgb3B0cy5jYW52YXNJZCA9IG9wdHMuY2FudmFzSWQgfHwgXCJ2YWNhbnZhc1wiO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmNhbnZhc0lkKTtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gb3B0cy53IHx8IGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IG9wdHMuaCB8fCBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gb3B0cy5tYXhTcGVlZCB8fCAwLjg7XG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5ib3VuY2UgPSBvcHRzLmJvdW5jZSB8fCBmYWxzZVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5leHBvbmVudCA9IG9wdHMuZXhwb25lbnQgfHwgMjtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuY29sbGlzaW9uRmFjdG9yID0gb3B0cy5jb2xsaXNpb25GYWN0b3IgfHwgMTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuc2hvd1BsYW5ldEFjY2VsZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkID0gdW5kZWZpbmVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmZpZWxkUmVzID0gMjBcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZmllbGRGYWN0b3IgPSAxMDAwXG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB0aGlzLmZpZWxkU3Ryb2tlU3R5bGUgPSBcIiM5OWJiZmZcIjtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy50YWlsaW5ncyA9IG9wdHMudGFpbGluZ3MgfHwgMC4xO1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtHZW9WaWV3ZXJ9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgR2VvVmlld2VyKCk7XG4gICAgICAgIHRoaXMuY3BsdXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuY3R4XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdENhbnZhc1RyYW5zZm9ybSgpO1xuXG4gICAgICAgICAgICAvL2NsZWFyLCB3aXRoIHRyYW5zcGFyZW5jeVxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLFwiICsgdGgudGFpbGluZ3MgKyBcIilcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIHRoLncsIHRoLmgpO1xuICAgICAgICAgICAgLy9jMi5maWxsUmVjdCgtMWUyMCwgLTFlMjAsIDJlMjAsIDJlMjApOyAvL3RvZG9cblxuICAgICAgICAgICAgLy9kaXNwbGF5IGdyYXZpdHkgZmllbGRcbiAgICAgICAgICAgIGlmICh0aC5zaG93RmllbGQgPT09IFwiZlwiKVxuICAgICAgICAgICAgICAgIHRoLmRpc3BsYXlHcmF2aXR5RmllbGQodGhpcywgdHJ1ZSlcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoLnNob3dGaWVsZCA9PT0gXCJpXCIpXG4gICAgICAgICAgICAgICAgdGguZGlzcGxheUdyYXZpdHlGaWVsZCh0aGlzLCBmYWxzZSlcblxuXG4gICAgICAgICAgICB0aGlzLnNldENhbnZhc1RyYW5zZm9ybSgpXG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBwbGFuZXRzXG4gICAgICAgICAgICBmb3IgKGxldCBwIG9mIHRoLnVuaS5wcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50b0RyYXcocCkpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHAubSAvIHRoLnVuaS5tKCk7XG4gICAgICAgICAgICAgICAgcC5kaXNwbGF5KHRoaXMsIFwicmdiKDI1NSwyNTUsXCIgKyBNYXRoLmZsb29yKDI1NSAqICgxIC0gdCkpICsgXCIpXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBwbGFuZXRzIGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgaWYgKHRoLnNob3dQbGFuZXRBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwIG9mIHRoLnVuaS5wcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudG9EcmF3KHApKSBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICBwLmRpc3BsYXlBY2NlbGVyYXRpb24odGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMSAqIHRoLmNwbHVzLmdldFpmKCk7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QoMCwgMCwgdGgudywgdGguaCk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtVbml2ZXJzZX0gKi9cbiAgICAgICAgdGhpcy51bmkgPSBuZXcgVW5pdmVyc2UodGhpcy53LCB0aGlzLmgpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3AgXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmaWVsZCBcbiAgICAgKi9cbiAgICBkaXNwbGF5R3Jhdml0eUZpZWxkKGNwLCBmaWVsZCA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jdHhcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5maWVsZFJlc1xuICAgICAgICBjb25zdCBmID0gdGhpcy5maWVsZEZhY3RvclxuICAgICAgICBjb25zdCBmXyA9IGZpZWxkID8gMC4zICogcmVzIDogMC42ICogcmVzO1xuICAgICAgICBjMi5zdHJva2VTdHlsZSA9IHRoaXMuZmllbGRTdHJva2VTdHlsZVxuICAgICAgICBmb3IgKGxldCB4ID0gcmVzICogMC41OyB4IDwgdGhpcy53OyB4ICs9IHJlcykge1xuICAgICAgICAgICAgY29uc3QgeEcgPSBjcC5waXhUb0dlb1goeCk7XG4gICAgICAgICAgICBpZiAoeEcgPiB0aGlzLnVuaS53IHx8IHhHIDwgMCkgY29udGludWVcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSByZXMgLyAyOyB5IDwgdGhpcy5oOyB5ICs9IHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHlHID0gY3AucGl4VG9HZW9ZKHkpO1xuICAgICAgICAgICAgICAgIGlmICh5RyA+IHRoaXMudW5pLmggfHwgeUcgPCAwKSBjb250aW51ZVxuICAgICAgICAgICAgICAgIC8vZ2V0IGdyYXZpdHkgZmllbGRcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gdGhpcy51bmkuZ2V0R3Jhdml0eUZpZWxkKHhHLCB5RywgdW5kZWZpbmVkLCB0aGlzLmV4cG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBnXyA9IE1hdGguaHlwb3QoZy5neCwgZy5neSlcblxuICAgICAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IE1hdGgubWluKGYgKiBnXywgMC4zICogcmVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGZfICogZy5neCAvIGdfLCBkeSA9IGZfICogZy5neSAvIGdfXG5cbiAgICAgICAgICAgICAgICAvL2RyYXdcbiAgICAgICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ncmF2aXR5IGZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh4IC0gZHgsIHkgKyBkeSk7XG4gICAgICAgICAgICAgICAgICAgIGMyLmxpbmVUbyh4ICsgZHgsIHkgLSBkeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pc29wb3RlbnRpYWwgbGluZXNcbiAgICAgICAgICAgICAgICAgICAgYzIubW92ZVRvKHggKyBkeSwgeSArIGR4KTtcbiAgICAgICAgICAgICAgICAgICAgYzIubGluZVRvKHggLSBkeSwgeSAtIGR4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2Ugd2l0aCByYW5kb20gcGxhbmV0c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0UmFuZG9tKG5iID0gMTAwMCwgbWkgPSAwLjUsIG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgdGhpcy51bmkuYWRkUGxhbmV0cyhuYiwgbWksIG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2Ugd2l0aCBiaWcgYmFuZyBzZXR1cFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRCaWdCYW5nKG5iID0gMTAwMCwgbWkgPSAxLCBtaW5TcGVlZCA9IDAuMzUsIG1heFNwZWVkID0gMC43LCByYWQgPSAxMDApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48UGxhbmV0Pn0gKi9cbiAgICAgICAgdGhpcy51bmkucHMgPSBbXTtcbiAgICAgICAgLy9jcmVhdGUgYmlnIHBsYW5ldCBpbiB0aGUgbWlkZGxlXG4gICAgICAgIGNvbnN0IGN4ID0gdGhpcy53ICogMC41LCBjeSA9IHRoaXMuaCAqIDAuNTtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQbGFuZXQodGhpcy51bmksIG5iICogbWksIGN4LCBjeSwgMCwgMCk7XG4gICAgICAgIC8vZXhwbG9kZSBpdFxuICAgICAgICB0aGlzLnVuaS5leHBsb2RlKHAsIG5iLCBtaW5TcGVlZCwgbWF4U3BlZWQsIHJhZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgc2ltdWxhdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYkl0ZXJhdGlvbnMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RhcnQodGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnVuaS5zdGVwKHQuYm91bmNlLCB0Lm1heFNwZWVkLCB0LmV4cG9uZW50LCB0LmNvbGxpc2lvbkZhY3RvciwgdGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vc3RvcFxuICAgIHN0b3AoKSB7XG4gICAgICAgIC8vVE9ET1xuICAgIH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgcGxhbmV0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBQbGFuZXRTaW11bGF0aW9uKG9wdHMpXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgTGFuZCB9IGZyb20gXCIuL0xhbmRcIlxuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSBcIi4uL2Jhc2UvR2VvVmlld2VyXCJcbmltcG9ydCB7IEFnZW50UG9pbnQgfSBmcm9tIFwiLi4vYmFzZS9BZ2VudFBvaW50XCJcblxuLyoqICovXG5leHBvcnQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgQWdlbnRQb2ludCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSBcbiAgICAgKiBAcGFyYW0ge0xhbmR9IGwgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodHlwZSwgbCwgeCA9IDAsIHkgPSAwKSB7XG5cbiAgICAgICAgc3VwZXIoeCwgeSlcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgLyoqIEB0eXBlIHtMYW5kfSAqL1xuICAgICAgICB0aGlzLmwgPSBsO1xuXG4gICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHggPCAwID8gMCA6IHggPiBsLncgPyBsLncgOiB4XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnkgPSB5IDwgMCA/IDAgOiB5ID4gbC5oID8gbC5oIDogeVxuXG4gICAgICAgIC8vdGhlIG90aGVyIGFuaW1hbHMgYXJvdW5kXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW11cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdXG5cbiAgICAgICAgLy9hZGQgdG8gdGhlIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgbC5ncmlkLmluc2VydCh0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBtb3ZlKHRpbWVTdGVwTXMgPSAxMCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5sXG4gICAgICAgIGwuZ3JpZC5yZW1vdmUodGhpcyk7XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHIgPSAwLjAxICogTWF0aC5yYW5kb20oKTtcblxuICAgICAgICB0aGlzLnN4ICs9IHIgKiBNYXRoLmNvcyhhbmdsZSkgKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnN4ID0gdGhpcy5zeCA+IGwuVl9NQVggPyBsLlZfTUFYIDogdGhpcy5zeCA8IC1sLlZfTUFYID8gLWwuVl9NQVggOiB0aGlzLnN4XG5cbiAgICAgICAgdGhpcy5zeSArPSByICogTWF0aC5zaW4oYW5nbGUpICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy5zeSA9IHRoaXMuc3kgPiBsLlZfTUFYID8gbC5WX01BWCA6IHRoaXMuc3kgPCAtbC5WX01BWCA/IC1sLlZfTUFYIDogdGhpcy5zeVxuXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnN4ICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy54ID0gdGhpcy54IDwgMCA/IGwudyA6IHRoaXMueCA+IGwudyA/IDAgOiB0aGlzLnhcblxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zeSAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSA8IDAgPyBsLmggOiB0aGlzLnkgPiBsLmggPyAwIDogdGhpcy55XG5cbiAgICAgICAgbC5ncmlkLmluc2VydCh0aGlzKTtcbiAgICB9XG5cblxuICAgIC8qKiBPYnNlcnZlICovXG4gICAgb2JzZXJ2ZSgpIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMubFxuXG4gICAgICAgIC8vZ2V0IGFuaW1hbHMgYXJvdW5kXG4gICAgICAgIGNvbnN0IGFzID0gbC5ncmlkLmdldCh0aGlzLnggLSBsLmQsIHRoaXMueSAtIGwuZCwgdGhpcy54ICsgbC5kLCB0aGlzLnkgKyBsLmQpO1xuXG4gICAgICAgIHRoaXMucHJleXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVkYXRvcnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBhIG9mIGFzKSB7XG4gICAgICAgICAgICBpZiAoYSA9PSB0aGlzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmQoYSkgPiBsLmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSAwKVxuICAgICAgICAgICAgICAgIHRoaXMucHJleXMucHVzaChhKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm5zIHtBbmltYWx9ICovXG4gICAgbWFrZUNoaWxkKCkge1xuICAgICAgICAvL2RvIGJldHRlcjogbWFrZSBjaGlsZCBhcm91bmRcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYWwodGhpcy50eXBlLCB0aGlzLmwsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBhbmltYWxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3AgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGxTdHlsZSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBcbiAgICAgKi9cbiAgICBkaXNwbGF5KGNwLCBmaWxsU3R5bGUgPSBcImJsdWVcIiwgc2l6ZSA9IDIpIHtcbiAgICAgICAgY29uc3QgcyA9IHNpemUgLyBjcC5nZXRaZigpXG4gICAgICAgIGNwLmN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGNwLmN0eC5maWxsUmVjdChjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSksIHMsIHMpO1xuICAgICAgICAvKmMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5hcmMoYS54LCBhLnksIDAuNSwgMCwgMipNYXRoLlBJKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTsqL1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFNwYXRpYWxJbmRleCB9IGZyb20gJy4uL2Jhc2UvU3BhdGlhbEluZGV4JztcbmltcG9ydCB7IHJlbW92ZUZyb21BcnJheVMgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQge0FuaW1hbH0gZnJvbSBcIi4vQW5pbWFsXCJcblxuZXhwb3J0IGNsYXNzIExhbmQge1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHcgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8vdGhlIG1heCBzcGVlZFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5WX01BWCA9IDAuMVxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnAgPSAwLjAyIC8vcHJlZGF0b3IgZGVhdGggcHJvYmFiaWxpdHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMucSA9IDAuMSAvL3ByZXkgcmVwcm9kdWN0aW9uIHByb2JhYmlsaXR5XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnIgPSAwLjUgLy9lYXRlbiBwcmV5IHRyYW5zZm9ybWF0aW9uIHByb2JhYmlsaXR5XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm5iID0gMyAvL25laWdoYm9ycyBudW1iZXJcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gd1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaFxuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW11cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5wcmV5cyA9IFtdXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZCA9IDEwXG4gICAgICAgIC8qKiBAdHlwZSB7U3BhdGlhbEluZGV4LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgU3BhdGlhbEluZGV4KCk7XG5cbiAgICAgICAgLyppbnRbXVtdIGhpc3RvO1xuICAgICAgICBpbnQgaW5kZXg9MDtcbiAgICAgICAgdGhpcy5jMkNoYXJ0PWMyQ2hhcnQ7XG4gICAgICAgIHRoaXMuaENoYXJ0PWhDaGFydDtcbiAgICAgICAgdGhpcy5oaXN0bz1uZXcgaW50W3dDaGFydF1bXTtcbiAgICAgICAgZm9yKGludCBpPTA7aTx3Q2hhcnQ7aSsrKVxuICAgICAgICAgICAgaGlzdG9baV09bmV3IGludFtdezAsMH07Ki9cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqL1xuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZlXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmV5cykgYS5vYnNlcnZlKCk7XG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmVkYXRvcnMpIGEub2JzZXJ2ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByZXlzVG9Cb3JuID0gW11cbiAgICAgICAgY29uc3QgcHJleXNUb0RpZSA9IFtdXG4gICAgICAgIGNvbnN0IHByZWRzVG9Cb3JuID0gW11cbiAgICAgICAgY29uc3QgcHJlZHNUb0RpZSA9IFtdXG5cbiAgICAgICAgLy9wcmV5XG4gICAgICAgIGZvciAobGV0IHByZXkgb2YgdGhpcy5wcmV5cykge1xuICAgICAgICAgICAgLy9yZXByb2R1Y3Rpb24gaWYgbm8gcHJlZGF0b3IgYXJvdW5kXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHRoaXMucSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAocHJleS5wcmVkYXRvcnMubGVuZ3RoICE9IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHByZXkucHJleXMubGVuZ3RoID49IHRoaXMubmIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcHJleXNUb0Jvcm4ucHVzaChwcmV5Lm1ha2VDaGlsZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJlZGF0b3JcbiAgICAgICAgZm9yIChsZXQgcHJlZCBvZiB0aGlzLnByZWRhdG9ycykge1xuICAgICAgICAgICAgLy9ubyBwcmV5IGFyb3VuZDogcHJlZGF0b3IgZGllcyB3aXRoIHByb2JhYmlsaXR5IHBcbiAgICAgICAgICAgIGlmIChwcmVkLnByZXlzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCB0aGlzLnApIHByZWRzVG9EaWUucHVzaChwcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcHJleSBhcm91bmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vZWF0IHByZXlcbiAgICAgICAgICAgICAgICAvL2Nob29zZSByYW5kb21seVxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXlUb0VhdCA9IHByZWQucHJleXNbTWF0aC5mbG9vcihwcmVkLnByZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcbiAgICAgICAgICAgICAgICBwcmV5c1RvRGllLnB1c2gocHJleVRvRWF0KTtcblxuICAgICAgICAgICAgICAgIC8vcHJlZGF0b3IgcmVwcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiB0aGlzLnIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChwcmVkLnByZWRhdG9ycy5sZW5ndGggPj0gdGhpcy5uYikgY29udGludWU7XG4gICAgICAgICAgICAgICAgcHJlZHNUb0Jvcm4ucHVzaChwcmVkLm1ha2VDaGlsZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJleXMucHVzaCguLi5wcmV5c1RvQm9ybik7XG4gICAgICAgIHRoaXMucHJlZGF0b3JzLnB1c2goLi4ucHJlZHNUb0Jvcm4pO1xuXG4gICAgICAgIHJlbW92ZUZyb21BcnJheVModGhpcy5wcmV5cywgcHJleXNUb0RpZSwgZmFsc2UpXG4gICAgICAgIGZvciAobGV0IGEgb2YgcHJleXNUb0RpZSkgdGhpcy5ncmlkLnJlbW92ZShhKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5Uyh0aGlzLnByZWRhdG9ycywgcHJlZHNUb0RpZSwgZmFsc2UpXG4gICAgICAgIGZvciAobGV0IGEgb2YgcHJlZHNUb0RpZSkgdGhpcy5ncmlkLnJlbW92ZShhKTtcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZXlzKVxuICAgICAgICAgICAgYS5tb3ZlKHRpbWVTdGVwTXMpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJlZGF0b3JzKVxuICAgICAgICAgICAgYS5tb3ZlKHRpbWVTdGVwTXMpO1xuXG4gICAgICAgIC8qL2hpc3RvXG4gICAgICAgIGhpc3RvW2luZGV4XSA9IG5ldyBpbnRbXXsgcHJleXMuc2l6ZSgpLCBwcmVkYXRvcnMuc2l6ZSgpIH07XG4gICAgICAgIGlmIChpbmRleCA9PSBoaXN0by5sZW5ndGggLSAxKSBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaW5kZXgrKzsqL1xuXG4gICAgfVxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IExhbmQgfSBmcm9tICcuL0xhbmQnO1xuaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnLi9BbmltYWwnO1xuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSAnLi4vYmFzZS9HZW9WaWV3ZXInO1xuXG4vKiogKi9cbmNsYXNzIFByZXlQcmVkYXRvclNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtHZW9WaWV3ZXJ9ICovXG4gICAgICAgIHRoaXMuY3BsdXMgPSBuZXcgR2VvVmlld2VyKCk7XG4gICAgICAgIHRoaXMuY3BsdXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jcGx1cy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuXG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jdHhcblxuICAgICAgICAgICAgLy90cmFuc3BhcmVuY3lcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kaXNwbGF5IGFuaW1hbHNcbiAgICAgICAgICAgIGZvciAobGV0IGEgb2YgdGgubGFuZC5wcmV5cylcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoYSkpXG4gICAgICAgICAgICAgICAgICAgIGEuZGlzcGxheSh0aGlzLCBcImJsdWVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBhIG9mIHRoLmxhbmQucHJlZGF0b3JzKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhhKSlcbiAgICAgICAgICAgICAgICAgICAgYS5kaXNwbGF5KHRoaXMsIFwicmVkXCIpO1xuXG4gICAgICAgICAgICAvKi9sYWJlbFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjMi5maWxsVGV4dChwcmV5cy5sZW5ndGggKyBcIi9cIiArIHByZWRhdG9ycy5sZW5ndGgsIDIsIDEwKTsqL1xuXG4gICAgICAgICAgICAvL2NoYXJ0XG4gICAgICAgICAgICAvL2MyQ2hhcnQuc2V0RmlsbFN0eWxlKGJhY2tDb2xvcjIpO1xuICAgICAgICAgICAgLy9jMkNoYXJ0LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgICAgICAgICAvL2RvdWJsZSBtYXggPSBnZXRNYXhIaXN0bygpO1xuICAgICAgICAgICAgLypwdWJsaWMgaW50IGdldE1heEhpc3RvKCkge1xuICAgICAgICAgICAgICAgIGludCBtYXg9MDtcbiAgICAgICAgICAgICAgICBmb3IoaW50IGk9MDtpPGhpc3RvLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihoaXN0b1tpXVswXT5tYXgpIG1heD1oaXN0b1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlzdG9baV1bMV0+bWF4KSBtYXg9aGlzdG9baV1bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3VibGUgaDEsIGgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgaGlzdG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEgPSBoQ2hhcnQgKiBoaXN0b1tpXVswXSAvIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIgPSBoQ2hhcnQgKiBoaXN0b1tpXVsxXSAvIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5zZXRGaWxsU3R5bGUocHJleUNvbG9yMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuZmlsbFJlY3QoaSwgaENoYXJ0IC0gaDEsIDEsIGgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5zZXRGaWxsU3R5bGUocHJlZGF0b3JDb2xvcjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGksIGhDaGFydCAtIGgyLCAxLCBoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5zZXRGaWxsU3R5bGUoQ3NzQ29sb3IubWFrZSgyNTUsIDI1NSwgMjU1KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGluZGV4LCAwLCAxLCBoQ2hhcnQpO1xuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLmdldFpmKCksIHRoLmggLyB0aGlzLmdldFpmKCkpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH07XG5cblxuICAgICAgICAvKiogQHR5cGUge0xhbmR9ICovXG4gICAgICAgIHRoaXMubGFuZCA9IG5ldyBMYW5kKHRoaXMudywgdGhpcy5oKVxuXG4gICAgfVxuXG5cblxuICAgIC8vVE9ETyB0ZXN0IGluaXQgaW4gYSBidWJibGUgP1xuICAgIC8vVE9ETyB1c2UgZGVuc2l0eSBhcyBpbnB1dCBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgbmJcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcmV5RGVuc2l0eSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJlZGF0b3JEZW5zaXR5IFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGluaXRSYW5kb20ocHJleURlbnNpdHkgPSAwLjAwMywgcHJlZGF0b3JEZW5zaXR5ID0gMC4wMDMpIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMubGFuZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXlEZW5zaXR5ICogbC53ICogbC5oOyBpKyspXG4gICAgICAgICAgICBsLnByZXlzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEFuaW1hbCgwLCBsLCBsLncgKiBNYXRoLnJhbmRvbSgpLCBsLmggKiBNYXRoLnJhbmRvbSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVkYXRvckRlbnNpdHkgKiBsLncgKiBsLmg7IGkrKylcbiAgICAgICAgICAgIGwucHJlZGF0b3JzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEFuaW1hbCgxLCBsLCBsLncgKiBNYXRoLnJhbmRvbSgpLCBsLmggKiBNYXRoLnJhbmRvbSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJJdGVyYXRpb25zIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0YXJ0KHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5sYW5kLnN0ZXAodGltZVN0ZXBNcyk7XG4gICAgICAgICAgICB0LmNwbHVzLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKG5iSXRlcmF0aW9ucyA+IDAgJiYgaSsrID4gbmJJdGVyYXRpb25zKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZW5naW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gKi9cbmV4cG9ydCBjb25zdCBwcmV5UHJlZGF0b3IgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUHJleVByZWRhdG9yU2ltdWxhdGlvbihvcHRzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==