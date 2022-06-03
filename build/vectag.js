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
        c2.moveTo(cp.geoToPixX(this.x - dx), cp.geoToPixY(this.y - dy));
        c2.lineTo(cp.geoToPixX(this.x + dx), cp.geoToPixY(this.y + dy));
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
        c2.moveTo(cp.geoToPixX(this.x), cp.geoToPixY(this.y));
        c2.arc(cp.geoToPixX(this.x), cp.geoToPixY(this.y), this.sea.D_OBS / cp.getZf(),
            -this.sa - this.sea.A_OBS * 0.5,
            -this.sa + this.sea.A_OBS * 0.5
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
            c2.moveTo(cp.geoToPixX(this.x), cp.geoToPixY(this.y));
            c2.lineTo(cp.geoToPixX(sa2.x), cp.geoToPixY(sa2.y));
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
        c2.arc(cp.geoToPixX(this.x), cp.geoToPixY(this.y), this.sea.D_COL * 0.5 / cp.getZf(), 0, 2 * Math.PI);
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
            c2.lineWidth = 2 / this.getZf()
            const sardinLength = 7
            for (let sa of s.fish)
                if (this.toDraw(sa))
                    sa.display(this, sardinLength)


            //display shark
            if (s.shark != null) {

                c2.lineWidth = 4 / this.getZf()
                c2.strokeStyle = "black"

                const sharkLength = 12 / this.getZf()
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
            c2.rect(this.geoToPixX(0) - 3, this.geoToPixY(this.h) - 3, th.w / this.getZf() + 3, th.h / this.getZf() + 3);
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

            this.initCanvasTransform();

            /*/label
            c2.fillStyle = "rgb(200,200,200)";
            c2.fillRect(0, 0, 65, 13);
            c2.fillStyle = "rgb(0,0,0)";
            c2.fillText(th.uni.ps.length + " planets", 2, 10);*/

            //frame
            c2.strokeStyle = "darkgray";
            c2.lineWidth = 1;
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.getZf(), th.h / this.getZf());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0YWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3RhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0YWcvLi9ub2RlX21vZHVsZXMvcmJ1c2gvcmJ1c2gubWluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL0FnZW50UG9pbnQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Jhc2UvR2VvVmlld2VyLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9iYXNlL1NwYXRpYWxJbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvYmFzZS9saWIuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2Zpc2gvU2FyZGluLmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9maXNoL1NlYS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZmlzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL0NlbGwuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL2dvbC9Vbml2ZXJzZS5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvZ29sL2luZGV4LmpzIiwid2VicGFjazovL3ZlY3RhZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcGxhbmV0cy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvVW5pdmVyc2UuanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BsYW5ldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmVjdGFnLy4vc3JjL3BwL0FuaW1hbC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvTGFuZC5qcyIsIndlYnBhY2s6Ly92ZWN0YWcvLi9zcmMvcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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b250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInZlY3RhZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2ZWN0YWdcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsaSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoaSk6KHQ9dHx8c2VsZikuUkJ1c2g9aSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LHIsZSxhLGgpeyFmdW5jdGlvbiB0KG4scixlLGEsaCl7Zm9yKDthPmU7KXtpZihhLWU+NjAwKXt2YXIgbz1hLWUrMSxzPXItZSsxLGw9TWF0aC5sb2cobyksZj0uNSpNYXRoLmV4cCgyKmwvMyksdT0uNSpNYXRoLnNxcnQobCpmKihvLWYpL28pKihzLW8vMjwwPy0xOjEpLG09TWF0aC5tYXgoZSxNYXRoLmZsb29yKHItcypmL28rdSkpLGM9TWF0aC5taW4oYSxNYXRoLmZsb29yKHIrKG8tcykqZi9vK3UpKTt0KG4scixtLGMsaCl9dmFyIHA9bltyXSxkPWUseD1hO2ZvcihpKG4sZSxyKSxoKG5bYV0scCk+MCYmaShuLGUsYSk7ZDx4Oyl7Zm9yKGkobixkLHgpLGQrKyx4LS07aChuW2RdLHApPDA7KWQrKztmb3IoO2goblt4XSxwKT4wOyl4LS19MD09PWgobltlXSxwKT9pKG4sZSx4KTppKG4sKyt4LGEpLHg8PXImJihlPXgrMSkscjw9eCYmKGE9eC0xKX19KHQscixlfHwwLGF8fHQubGVuZ3RoLTEsaHx8bil9ZnVuY3Rpb24gaSh0LGksbil7dmFyIHI9dFtpXTt0W2ldPXRbbl0sdFtuXT1yfWZ1bmN0aW9uIG4odCxpKXtyZXR1cm4gdDxpPy0xOnQ+aT8xOjB9dmFyIHI9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9OSksdGhpcy5fbWF4RW50cmllcz1NYXRoLm1heCg0LHQpLHRoaXMuX21pbkVudHJpZXM9TWF0aC5tYXgoMixNYXRoLmNlaWwoLjQqdGhpcy5fbWF4RW50cmllcykpLHRoaXMuY2xlYXIoKX07ZnVuY3Rpb24gZSh0LGksbil7aWYoIW4pcmV0dXJuIGkuaW5kZXhPZih0KTtmb3IodmFyIHI9MDtyPGkubGVuZ3RoO3IrKylpZihuKHQsaVtyXSkpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gYSh0LGkpe2godCwwLHQuY2hpbGRyZW4ubGVuZ3RoLGksdCl9ZnVuY3Rpb24gaCh0LGksbixyLGUpe2V8fChlPXAobnVsbCkpLGUubWluWD0xLzAsZS5taW5ZPTEvMCxlLm1heFg9LTEvMCxlLm1heFk9LTEvMDtmb3IodmFyIGE9aTthPG47YSsrKXt2YXIgaD10LmNoaWxkcmVuW2FdO28oZSx0LmxlYWY/cihoKTpoKX1yZXR1cm4gZX1mdW5jdGlvbiBvKHQsaSl7cmV0dXJuIHQubWluWD1NYXRoLm1pbih0Lm1pblgsaS5taW5YKSx0Lm1pblk9TWF0aC5taW4odC5taW5ZLGkubWluWSksdC5tYXhYPU1hdGgubWF4KHQubWF4WCxpLm1heFgpLHQubWF4WT1NYXRoLm1heCh0Lm1heFksaS5tYXhZKSx0fWZ1bmN0aW9uIHModCxpKXtyZXR1cm4gdC5taW5YLWkubWluWH1mdW5jdGlvbiBsKHQsaSl7cmV0dXJuIHQubWluWS1pLm1pbll9ZnVuY3Rpb24gZih0KXtyZXR1cm4odC5tYXhYLXQubWluWCkqKHQubWF4WS10Lm1pblkpfWZ1bmN0aW9uIHUodCl7cmV0dXJuIHQubWF4WC10Lm1pblgrKHQubWF4WS10Lm1pblkpfWZ1bmN0aW9uIG0odCxpKXtyZXR1cm4gdC5taW5YPD1pLm1pblgmJnQubWluWTw9aS5taW5ZJiZpLm1heFg8PXQubWF4WCYmaS5tYXhZPD10Lm1heFl9ZnVuY3Rpb24gYyh0LGkpe3JldHVybiBpLm1pblg8PXQubWF4WCYmaS5taW5ZPD10Lm1heFkmJmkubWF4WD49dC5taW5YJiZpLm1heFk+PXQubWluWX1mdW5jdGlvbiBwKHQpe3JldHVybntjaGlsZHJlbjp0LGhlaWdodDoxLGxlYWY6ITAsbWluWDoxLzAsbWluWToxLzAsbWF4WDotMS8wLG1heFk6LTEvMH19ZnVuY3Rpb24gZChpLG4scixlLGEpe2Zvcih2YXIgaD1bbixyXTtoLmxlbmd0aDspaWYoISgocj1oLnBvcCgpKS0obj1oLnBvcCgpKTw9ZSkpe3ZhciBvPW4rTWF0aC5jZWlsKChyLW4pL2UvMikqZTt0KGksbyxuLHIsYSksaC5wdXNoKG4sbyxvLHIpfX1yZXR1cm4gci5wcm90b3R5cGUuYWxsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FsbCh0aGlzLmRhdGEsW10pfSxyLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24odCl7dmFyIGk9dGhpcy5kYXRhLG49W107aWYoIWModCxpKSlyZXR1cm4gbjtmb3IodmFyIHI9dGhpcy50b0JCb3gsZT1bXTtpOyl7Zm9yKHZhciBhPTA7YTxpLmNoaWxkcmVuLmxlbmd0aDthKyspe3ZhciBoPWkuY2hpbGRyZW5bYV0sbz1pLmxlYWY/cihoKTpoO2ModCxvKSYmKGkubGVhZj9uLnB1c2goaCk6bSh0LG8pP3RoaXMuX2FsbChoLG4pOmUucHVzaChoKSl9aT1lLnBvcCgpfXJldHVybiBufSxyLnByb3RvdHlwZS5jb2xsaWRlcz1mdW5jdGlvbih0KXt2YXIgaT10aGlzLmRhdGE7aWYoIWModCxpKSlyZXR1cm4hMTtmb3IodmFyIG49W107aTspe2Zvcih2YXIgcj0wO3I8aS5jaGlsZHJlbi5sZW5ndGg7cisrKXt2YXIgZT1pLmNoaWxkcmVuW3JdLGE9aS5sZWFmP3RoaXMudG9CQm94KGUpOmU7aWYoYyh0LGEpKXtpZihpLmxlYWZ8fG0odCxhKSlyZXR1cm4hMDtuLnB1c2goZSl9fWk9bi5wb3AoKX1yZXR1cm4hMX0sci5wcm90b3R5cGUubG9hZD1mdW5jdGlvbih0KXtpZighdHx8IXQubGVuZ3RoKXJldHVybiB0aGlzO2lmKHQubGVuZ3RoPHRoaXMuX21pbkVudHJpZXMpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXRoaXMuaW5zZXJ0KHRbaV0pO3JldHVybiB0aGlzfXZhciBuPXRoaXMuX2J1aWxkKHQuc2xpY2UoKSwwLHQubGVuZ3RoLTEsMCk7aWYodGhpcy5kYXRhLmNoaWxkcmVuLmxlbmd0aClpZih0aGlzLmRhdGEuaGVpZ2h0PT09bi5oZWlnaHQpdGhpcy5fc3BsaXRSb290KHRoaXMuZGF0YSxuKTtlbHNle2lmKHRoaXMuZGF0YS5oZWlnaHQ8bi5oZWlnaHQpe3ZhciByPXRoaXMuZGF0YTt0aGlzLmRhdGE9bixuPXJ9dGhpcy5faW5zZXJ0KG4sdGhpcy5kYXRhLmhlaWdodC1uLmhlaWdodC0xLCEwKX1lbHNlIHRoaXMuZGF0YT1uO3JldHVybiB0aGlzfSxyLnByb3RvdHlwZS5pbnNlcnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnRoaXMuX2luc2VydCh0LHRoaXMuZGF0YS5oZWlnaHQtMSksdGhpc30sci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhPXAoW10pLHRoaXN9LHIucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0LGkpe2lmKCF0KXJldHVybiB0aGlzO2Zvcih2YXIgbixyLGEsaD10aGlzLmRhdGEsbz10aGlzLnRvQkJveCh0KSxzPVtdLGw9W107aHx8cy5sZW5ndGg7KXtpZihofHwoaD1zLnBvcCgpLHI9c1tzLmxlbmd0aC0xXSxuPWwucG9wKCksYT0hMCksaC5sZWFmKXt2YXIgZj1lKHQsaC5jaGlsZHJlbixpKTtpZigtMSE9PWYpcmV0dXJuIGguY2hpbGRyZW4uc3BsaWNlKGYsMSkscy5wdXNoKGgpLHRoaXMuX2NvbmRlbnNlKHMpLHRoaXN9YXx8aC5sZWFmfHwhbShoLG8pP3I/KG4rKyxoPXIuY2hpbGRyZW5bbl0sYT0hMSk6aD1udWxsOihzLnB1c2goaCksbC5wdXNoKG4pLG49MCxyPWgsaD1oLmNoaWxkcmVuWzBdKX1yZXR1cm4gdGhpc30sci5wcm90b3R5cGUudG9CQm94PWZ1bmN0aW9uKHQpe3JldHVybiB0fSxyLnByb3RvdHlwZS5jb21wYXJlTWluWD1mdW5jdGlvbih0LGkpe3JldHVybiB0Lm1pblgtaS5taW5YfSxyLnByb3RvdHlwZS5jb21wYXJlTWluWT1mdW5jdGlvbih0LGkpe3JldHVybiB0Lm1pblktaS5taW5ZfSxyLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhfSxyLnByb3RvdHlwZS5mcm9tSlNPTj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kYXRhPXQsdGhpc30sci5wcm90b3R5cGUuX2FsbD1mdW5jdGlvbih0LGkpe2Zvcih2YXIgbj1bXTt0Oyl0LmxlYWY/aS5wdXNoLmFwcGx5KGksdC5jaGlsZHJlbik6bi5wdXNoLmFwcGx5KG4sdC5jaGlsZHJlbiksdD1uLnBvcCgpO3JldHVybiBpfSxyLnByb3RvdHlwZS5fYnVpbGQ9ZnVuY3Rpb24odCxpLG4scil7dmFyIGUsaD1uLWkrMSxvPXRoaXMuX21heEVudHJpZXM7aWYoaDw9bylyZXR1cm4gYShlPXAodC5zbGljZShpLG4rMSkpLHRoaXMudG9CQm94KSxlO3J8fChyPU1hdGguY2VpbChNYXRoLmxvZyhoKS9NYXRoLmxvZyhvKSksbz1NYXRoLmNlaWwoaC9NYXRoLnBvdyhvLHItMSkpKSwoZT1wKFtdKSkubGVhZj0hMSxlLmhlaWdodD1yO3ZhciBzPU1hdGguY2VpbChoL28pLGw9cypNYXRoLmNlaWwoTWF0aC5zcXJ0KG8pKTtkKHQsaSxuLGwsdGhpcy5jb21wYXJlTWluWCk7Zm9yKHZhciBmPWk7Zjw9bjtmKz1sKXt2YXIgdT1NYXRoLm1pbihmK2wtMSxuKTtkKHQsZix1LHMsdGhpcy5jb21wYXJlTWluWSk7Zm9yKHZhciBtPWY7bTw9dTttKz1zKXt2YXIgYz1NYXRoLm1pbihtK3MtMSx1KTtlLmNoaWxkcmVuLnB1c2godGhpcy5fYnVpbGQodCxtLGMsci0xKSl9fXJldHVybiBhKGUsdGhpcy50b0JCb3gpLGV9LHIucHJvdG90eXBlLl9jaG9vc2VTdWJ0cmVlPWZ1bmN0aW9uKHQsaSxuLHIpe2Zvcig7ci5wdXNoKGkpLCFpLmxlYWYmJnIubGVuZ3RoLTEhPT1uOyl7Zm9yKHZhciBlPTEvMCxhPTEvMCxoPXZvaWQgMCxvPTA7bzxpLmNoaWxkcmVuLmxlbmd0aDtvKyspe3ZhciBzPWkuY2hpbGRyZW5bb10sbD1mKHMpLHU9KG09dCxjPXMsKE1hdGgubWF4KGMubWF4WCxtLm1heFgpLU1hdGgubWluKGMubWluWCxtLm1pblgpKSooTWF0aC5tYXgoYy5tYXhZLG0ubWF4WSktTWF0aC5taW4oYy5taW5ZLG0ubWluWSkpLWwpO3U8YT8oYT11LGU9bDxlP2w6ZSxoPXMpOnU9PT1hJiZsPGUmJihlPWwsaD1zKX1pPWh8fGkuY2hpbGRyZW5bMF19dmFyIG0sYztyZXR1cm4gaX0sci5wcm90b3R5cGUuX2luc2VydD1mdW5jdGlvbih0LGksbil7dmFyIHI9bj90OnRoaXMudG9CQm94KHQpLGU9W10sYT10aGlzLl9jaG9vc2VTdWJ0cmVlKHIsdGhpcy5kYXRhLGksZSk7Zm9yKGEuY2hpbGRyZW4ucHVzaCh0KSxvKGEscik7aT49MCYmZVtpXS5jaGlsZHJlbi5sZW5ndGg+dGhpcy5fbWF4RW50cmllczspdGhpcy5fc3BsaXQoZSxpKSxpLS07dGhpcy5fYWRqdXN0UGFyZW50QkJveGVzKHIsZSxpKX0sci5wcm90b3R5cGUuX3NwbGl0PWZ1bmN0aW9uKHQsaSl7dmFyIG49dFtpXSxyPW4uY2hpbGRyZW4ubGVuZ3RoLGU9dGhpcy5fbWluRW50cmllczt0aGlzLl9jaG9vc2VTcGxpdEF4aXMobixlLHIpO3ZhciBoPXRoaXMuX2Nob29zZVNwbGl0SW5kZXgobixlLHIpLG89cChuLmNoaWxkcmVuLnNwbGljZShoLG4uY2hpbGRyZW4ubGVuZ3RoLWgpKTtvLmhlaWdodD1uLmhlaWdodCxvLmxlYWY9bi5sZWFmLGEobix0aGlzLnRvQkJveCksYShvLHRoaXMudG9CQm94KSxpP3RbaS0xXS5jaGlsZHJlbi5wdXNoKG8pOnRoaXMuX3NwbGl0Um9vdChuLG8pfSxyLnByb3RvdHlwZS5fc3BsaXRSb290PWZ1bmN0aW9uKHQsaSl7dGhpcy5kYXRhPXAoW3QsaV0pLHRoaXMuZGF0YS5oZWlnaHQ9dC5oZWlnaHQrMSx0aGlzLmRhdGEubGVhZj0hMSxhKHRoaXMuZGF0YSx0aGlzLnRvQkJveCl9LHIucHJvdG90eXBlLl9jaG9vc2VTcGxpdEluZGV4PWZ1bmN0aW9uKHQsaSxuKXtmb3IodmFyIHIsZSxhLG8scyxsLHUsbT0xLzAsYz0xLzAscD1pO3A8PW4taTtwKyspe3ZhciBkPWgodCwwLHAsdGhpcy50b0JCb3gpLHg9aCh0LHAsbix0aGlzLnRvQkJveCksdj0oZT1kLGE9eCxvPXZvaWQgMCxzPXZvaWQgMCxsPXZvaWQgMCx1PXZvaWQgMCxvPU1hdGgubWF4KGUubWluWCxhLm1pblgpLHM9TWF0aC5tYXgoZS5taW5ZLGEubWluWSksbD1NYXRoLm1pbihlLm1heFgsYS5tYXhYKSx1PU1hdGgubWluKGUubWF4WSxhLm1heFkpLE1hdGgubWF4KDAsbC1vKSpNYXRoLm1heCgwLHUtcykpLE09ZihkKStmKHgpO3Y8bT8obT12LHI9cCxjPU08Yz9NOmMpOnY9PT1tJiZNPGMmJihjPU0scj1wKX1yZXR1cm4gcnx8bi1pfSxyLnByb3RvdHlwZS5fY2hvb3NlU3BsaXRBeGlzPWZ1bmN0aW9uKHQsaSxuKXt2YXIgcj10LmxlYWY/dGhpcy5jb21wYXJlTWluWDpzLGU9dC5sZWFmP3RoaXMuY29tcGFyZU1pblk6bDt0aGlzLl9hbGxEaXN0TWFyZ2luKHQsaSxuLHIpPHRoaXMuX2FsbERpc3RNYXJnaW4odCxpLG4sZSkmJnQuY2hpbGRyZW4uc29ydChyKX0sci5wcm90b3R5cGUuX2FsbERpc3RNYXJnaW49ZnVuY3Rpb24odCxpLG4scil7dC5jaGlsZHJlbi5zb3J0KHIpO2Zvcih2YXIgZT10aGlzLnRvQkJveCxhPWgodCwwLGksZSkscz1oKHQsbi1pLG4sZSksbD11KGEpK3UocyksZj1pO2Y8bi1pO2YrKyl7dmFyIG09dC5jaGlsZHJlbltmXTtvKGEsdC5sZWFmP2UobSk6bSksbCs9dShhKX1mb3IodmFyIGM9bi1pLTE7Yz49aTtjLS0pe3ZhciBwPXQuY2hpbGRyZW5bY107byhzLHQubGVhZj9lKHApOnApLGwrPXUocyl9cmV0dXJuIGx9LHIucHJvdG90eXBlLl9hZGp1c3RQYXJlbnRCQm94ZXM9ZnVuY3Rpb24odCxpLG4pe2Zvcih2YXIgcj1uO3I+PTA7ci0tKW8oaVtyXSx0KX0sci5wcm90b3R5cGUuX2NvbmRlbnNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgaT10Lmxlbmd0aC0xLG49dm9pZCAwO2k+PTA7aS0tKTA9PT10W2ldLmNoaWxkcmVuLmxlbmd0aD9pPjA/KG49dFtpLTFdLmNoaWxkcmVuKS5zcGxpY2Uobi5pbmRleE9mKHRbaV0pLDEpOnRoaXMuY2xlYXIoKTphKHRbaV0sdGhpcy50b0JCb3gpfSxyfSk7XG4iLCIvL0B0cy1jaGVja1xuXG4vKiogKi9cbmV4cG9ydCBjbGFzcyBBZ2VudFBvaW50IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3kgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCwgeSwgc3g9MCwgc3k9MCkge1xuXG4gICAgICAgIC8vcG9zaXRpb25cblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geVxuXG4gICAgICAgIC8vc3BlZWRcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5zeCA9IHN4XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnN5ID0gc3lcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMucyA9IHVuZGVmaW5lZFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5zYSA9IHVuZGVmaW5lZFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBZ2VudFBvaW50fSBhXG4gICAgICogQHJldHVybnMge251bWJlcn0gVGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgYWdlbnQuXG4gICAgICovXG4gICAgZChhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRQKGEueCwgYS55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdG8gYSBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBkUCh4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KCh4IC0gdGhpcy54KSwgKHkgLSB0aGlzLnkpKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgKiBTZXQgcmFuZG9tIHNwZWVkXG4gICAgKiBcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFNwZWVkXG4gICAgKi9cbiAgICBzZXRSYW5kb21TcGVlZChtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIHRoaXMucyA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgdGhpcy5zYSA9IDIgKiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgdGhpcy5zeCA9IHRoaXMucyAqIE1hdGguY29zKHRoaXMuc2EpXG4gICAgICAgIHRoaXMuc3kgPSB0aGlzLnMgKiBNYXRoLnNpbih0aGlzLnNhKVxuICAgIH1cblxuICAgIC8qKiAqL1xuICAgIGNvbXB1dGVTcGVlZCgpIHtcbiAgICAgICAgdGhpcy5zID0gTWF0aC5oeXBvdCh0aGlzLnN4LCB0aGlzLnN5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc1xuICAgIH1cblxuICAgIC8qKiAqL1xuICAgIGNvbXB1dGVTcGVlZEFuZ2xlKCkge1xuICAgICAgICB0aGlzLnNhID0gTWF0aC5hdGFuMih0aGlzLnN5LCB0aGlzLnN4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG4vKiogQHR5cGVkZWYgeyB7eE1pbjogbnVtYmVyLCB4TWF4OiBudW1iZXIsIHlNaW46IG51bWJlciwgeU1heDogbnVtYmVyfSB9IEVudmVsb3BlICovXG5cbi8qKlxuICogQSBIVE1MIGNhbnZhcywgZW5oYW5jZWQgd2l0aCB6b29tIGFuZCBwYW4gY2FwYWJpbGl0aWVzLlxuICogXG4gKiBAYXV0aG9yIEp1bGllbiBHYWZmdXJpXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW9WaWV3ZXIge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhbnZhc0lkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNlbnRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB6ZlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0lkID0gXCJ2YWNhbnZhc1wiLCBjZW50ZXIgPSB1bmRlZmluZWQsIHpmID0gMSkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcblxuICAgICAgICAvKipAdHlwZSB7b2JqZWN0fSAqL1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAvLyBzZXQgZ2VvIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJcbiAgICAgICAgdGhpcy5zZXRDZW50ZXIoY2VudGVyIHx8IHsgeDogdGhpcy53ICogMC41LCB5OiB0aGlzLmggKiAwLjUgfSlcblxuICAgICAgICAvLyBzZXQgem9vbSBmYWN0b3I6IHBpeGVsIHNpemUsIGluIG0vcGl4XG4gICAgICAgIHRoaXMuc2V0WmYoemYpO1xuXG4gICAgICAgIC8vZXh0ZW50XG4gICAgICAgIC8qKiBAdHlwZSB7RW52ZWxvcGV9ICovXG4gICAgICAgIHRoaXMuZXh0R2VvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVwZGF0ZUV4dGVudEdlbygpXG5cbiAgICAgICAgLy9tb3VzZSBjbGljayAtIHBhblxuICAgICAgICBsZXQgbXBhbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7IG1wYW4gPSB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKG1wYW4pIHRoaXMucGFuKC1lLm1vdmVtZW50WCAqIHRoaXMuZ2V0WmYoKSwgZS5tb3ZlbWVudFkgKiB0aGlzLmdldFpmKCkpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlID0+IHsgbXBhbiA9IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vbW91c2Ugd2hlZWwgLSB6b29tXG4gICAgICAgIGNvbnN0IGYgPSAxLjVcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZl8gPSBlLmRlbHRhWSA+IDAgPyBmIDogMSAvIGY7XG4gICAgICAgICAgICB0aGlzLnpvb20oZl8sIHRoaXMucGl4VG9HZW9YKGUub2Zmc2V0WCksIHRoaXMucGl4VG9HZW9ZKGUub2Zmc2V0WSkpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICAvKiogQHBhcmFtIHt7eDpudW1iZXIseTpudW1iZXJ9fSB2ICovXG4gICAgc2V0Q2VudGVyKHYpIHsgdGhpcy5jZW50ZXIgPSB2OyB9XG4gICAgLyoqIEByZXR1cm5zIHt7eDpudW1iZXIseTpudW1iZXJ9fSAqL1xuICAgIGdldENlbnRlcigpIHsgcmV0dXJuIHRoaXMuY2VudGVyOyB9XG5cbiAgICAvKiogQHBhcmFtIHtudW1iZXJ9IHYgKi9cbiAgICBzZXRaZih2KSB7IHRoaXMuemYgPSB2OyB9XG4gICAgLyoqIEByZXR1cm5zIHtudW1iZXJ9ICovXG4gICAgZ2V0WmYoKSB7IHJldHVybiB0aGlzLnpmOyB9XG5cblxuXG5cbiAgICAvKiogKi9cbiAgICBpbml0Q2FudmFzVHJhbnNmb3JtKCkge1xuICAgICAgICB0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgfVxuXG4gICAgLyoqICovXG4gICAgc2V0Q2FudmFzVHJhbnNmb3JtKCkge1xuICAgICAgICBjb25zdCBrID0gMS90aGlzLmdldFpmKCk7XG4gICAgICAgIGNvbnN0IHR4ID0gLXRoaXMuY2VudGVyLngvdGhpcy5nZXRaZigpICsgdGhpcy53KjAuNTtcbiAgICAgICAgY29uc3QgdHkgPSB0aGlzLmNlbnRlci55L3RoaXMuZ2V0WmYoKSArIHRoaXMuaCowLjU7XG4gICAgICAgIHRoaXMuY3R4LnNldFRyYW5zZm9ybShrLCAwLCAwLCAtaywgdHgsIHR5KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqL1xuICAgIHJlZHJhdygpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgcmVkcmF3IG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgYXBwIHNjcmVlbi5cbiAgICAgKiBUbyBiZSB1c2VkIGJlZm9yZSBhIHJlZHJhdyBmb3IgZXhhbXBsZS5cbiAgICAgKiBAcGFyYW0geyp9IGNvbG9yIFxuICAgICAqL1xuICAgIGNsZWFyKGNvbG9yID0gXCJ3aGl0ZVwiKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG4gICAgfVxuXG4gICAgLy9jb252ZXJzaW9uIGZ1bmN0aW9uc1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4R2VvXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdlb1RvUGl4WCh4R2VvKSB7IHJldHVybiAoeEdlbyAtIHRoaXMuY2VudGVyLngpIC8gdGhpcy5nZXRaZigpICsgdGhpcy53ICogMC41OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlHZW9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2VvVG9QaXhZKHlHZW8pIHsgcmV0dXJuIC0oeUdlbyAtIHRoaXMuY2VudGVyLnkpIC8gdGhpcy5nZXRaZigpICsgdGhpcy5oICogMC41OyB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgcGl4VG9HZW9YKHgpIHsgcmV0dXJuICh4IC0gdGhpcy53ICogMC41KSAqIHRoaXMuZ2V0WmYoKSArIHRoaXMuY2VudGVyLng7IH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBwaXhUb0dlb1koeSkgeyByZXR1cm4gLSh5IC0gdGhpcy5oICogMC41KSAqIHRoaXMuZ2V0WmYoKSArIHRoaXMuY2VudGVyLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeEdlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkeUdlb1xuICAgICAqL1xuICAgIHBhbihkeEdlbywgZHlHZW8pIHtcbiAgICAgICAgdGhpcy5jZW50ZXIueCArPSBkeEdlbztcbiAgICAgICAgdGhpcy5jZW50ZXIueSArPSBkeUdlbztcbiAgICAgICAgdGhpcy51cGRhdGVFeHRlbnRHZW8oKVxuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhHZW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geUdlb1xuICAgICAqL1xuICAgIHpvb20oZiA9IDEsIHhHZW8gPSB0aGlzLmNlbnRlci54LCB5R2VvID0gdGhpcy5jZW50ZXIueSkge1xuICAgICAgICB0aGlzLnNldFpmKGYgKiB0aGlzLmdldFpmKCkpO1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9ICh4R2VvIC0gdGhpcy5jZW50ZXIueCkgKiAoMSAtIGYpXG4gICAgICAgIHRoaXMuY2VudGVyLnkgKz0gKHlHZW8gLSB0aGlzLmNlbnRlci55KSAqICgxIC0gZilcbiAgICAgICAgdGhpcy51cGRhdGVFeHRlbnRHZW8oKVxuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXJnaW5QeCBcbiAgICAgKiBAcmV0dXJucyB7RW52ZWxvcGV9XG4gICAgICovXG4gICAgdXBkYXRlRXh0ZW50R2VvKG1hcmdpblB4ID0gMjApIHtcbiAgICAgICAgdGhpcy5leHRHZW8gPSB7XG4gICAgICAgICAgICB4TWluOiB0aGlzLnBpeFRvR2VvWCgtbWFyZ2luUHgpLFxuICAgICAgICAgICAgeE1heDogdGhpcy5waXhUb0dlb1godGhpcy53ICsgbWFyZ2luUHgpLFxuICAgICAgICAgICAgeU1pbjogdGhpcy5waXhUb0dlb1kodGhpcy5oICsgbWFyZ2luUHgpLFxuICAgICAgICAgICAgeU1heDogdGhpcy5waXhUb0dlb1koLW1hcmdpblB4KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmV4dEdlbztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgb2JqZWN0IGhhcyB0byBiZSBkcmF3blxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7e3g6bnVtYmVyLHk6bnVtYmVyfX0gb2JqIFxuICAgICAqL1xuICAgIHRvRHJhdyhvYmopIHtcbiAgICAgICAgaWYgKG9iai54IDwgdGhpcy5leHRHZW8ueE1pbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAob2JqLnggPiB0aGlzLmV4dEdlby54TWF4KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChvYmoueSA8IHRoaXMuZXh0R2VvLnlNaW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG9iai55ID4gdGhpcy5leHRHZW8ueU1heCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcblxuLy9zZWUgaHR0cHM6Ly9naXRodWIuY29tL21vdXJuZXIvcmJ1c2hcbmltcG9ydCBSQnVzaCBmcm9tICdyYnVzaCc7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZXhwb3J0IGNsYXNzIFNwYXRpYWxJbmRleCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2xhc3MgTXlSQnVzaCBleHRlbmRzIFJCdXNoIHtcbiAgICAgICAgICAgIC8qKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IG9iaiAgKi9cbiAgICAgICAgICAgIHRvQkJveChvYmopIHsgcmV0dXJuIHsgbWluWDogb2JqLngsIG1pblk6IG9iai55LCBtYXhYOiBvYmoueCwgbWF4WTogb2JqLnkgfTsgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGEgXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGIgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbXBhcmVNaW5YKGEsIGIpIHsgcmV0dXJuIGEueCAtIGIueDsgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGEgXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3t4Om51bWJlcix5Om51bWJlcn19IGIgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbXBhcmVNaW5ZKGEsIGIpIHsgcmV0dXJuIGEueSAtIGIueTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHtNeVJCdXNofSAqL1xuICAgICAgICB0aGlzLnRyZWUgPSBuZXcgTXlSQnVzaCgpO1xuICAgIH1cblxuICAgIC8vVE9ETyBidWxrIHJlbW92ZSA/XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5bWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhtYXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geW1heFxuICAgICAqIEByZXR1cm4ge0FycmF5LjxUPn1cbiAgICAgKi9cbiAgICBnZXQoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLnNlYXJjaCh7XG4gICAgICAgICAgICBtaW5YOiB4bWluLFxuICAgICAgICAgICAgbWluWTogeW1pbixcbiAgICAgICAgICAgIG1heFg6IHhtYXgsXG4gICAgICAgICAgICBtYXhZOiB5bWF4XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VH0gb2JqXG4gICAgICovXG4gICAgaW5zZXJ0KG9iaikge1xuICAgICAgICB0aGlzLnRyZWUuaW5zZXJ0KG9iaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVsayBpbnNlcnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxUPn0gb2Jqc1xuICAgICAqL1xuICAgIGxvYWQob2Jqcykge1xuICAgICAgICB0aGlzLnRyZWUubG9hZChvYmpzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R9IG9ialxuICAgICAqL1xuICAgIHJlbW92ZShvYmopIHtcbiAgICAgICAgdGhpcy50cmVlLnJlbW92ZShvYmopXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudHJlZS5jbGVhcigpXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtPYmplY3QuPD8sIFQ+fSBvYmpcbiAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gKi9cbmV4cG9ydCBjb25zdCBvYmpUb0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBvdXQucHVzaChvYmpba2V5XSk7XG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXkuPFQ+fSBhcnJcbiAqIEBwYXJhbSB7VH0gb2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zZyBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIsIG9iaiwgbXNnID0gdHJ1ZSkge1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKG9iaik7XG4gICAgaWYgKGluZGV4ID4gLTEpXG4gICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGVsc2VcbiAgICAgICAgaWYgKG1zZykgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIHJlbW92ZSBlbGVtZW50IG5vdCBwcmVzZW50IGluIGFycmF5LlwiKTtcbn07XG5cbi8qKlxuICogXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheS48VD59IGFyclxuICogQHBhcmFtIHtBcnJheS48VD59IG9ianMgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zZyBcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21BcnJheVMgPSBmdW5jdGlvbiAoYXJyLCBvYmpzLCBtc2cgPSB0cnVlKSB7XG4gICAgZm9yIChsZXQgb2JqIG9mIG9ianMpXG4gICAgICAgIHJlbW92ZUZyb21BcnJheShhcnIsIG9iaiwgbXNnKVxufTtcbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTZWEgfSBmcm9tIFwiLi9TZWFcIlxuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSBcIi4uL2Jhc2UvR2VvVmlld2VyXCJcbmltcG9ydCB7IEFnZW50UG9pbnQgfSBmcm9tIFwiLi4vYmFzZS9BZ2VudFBvaW50XCI7XG5pbXBvcnQgeyBTcGF0aWFsSW5kZXggfSBmcm9tICcuLi9iYXNlL1NwYXRpYWxJbmRleCc7XG5cbi8qKiAqL1xuZXhwb3J0IGNsYXNzIFNhcmRpbiBleHRlbmRzIEFnZW50UG9pbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZWF9IHNlYSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN5IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlYSwgeCA9IHNlYS53ICogTWF0aC5yYW5kb20oKSwgeSA9IHNlYS5oICogTWF0aC5yYW5kb20oKSwgc3ggPSB1bmRlZmluZWQsIHN5ID0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgLy9cbiAgICAgICAgc3VwZXIoeCwgeSwgc3gsIHN5KVxuXG4gICAgICAgIC8qKiBAdHlwZSB7U2VhfSAqL1xuICAgICAgICB0aGlzLnNlYSA9IHNlYTtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4IDwgMCA/IDAgOiB4ID4gc2VhLncgPyBzZWEudyA6IHhcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCAwID8gMCA6IHkgPiBzZWEuaCA/IHNlYS5oIDogeVxuXG4gICAgICAgIC8vc3BlZWRcbiAgICAgICAgaWYgKCFzeCAmJiAhc3kpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tU3BlZWQoMCwgdGhpcy5zZWEuVl9NQVgpXG5cbiAgICAgICAgICAgIC8vYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIHRoaXMuYXggPSAwXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIHRoaXMuYXkgPSAwXG5cbiAgICAgICAgICAgIC8vbGlzdCBvZiBzYXJkaW5zIGluIHZpc2lvbiBmaWVsZFxuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgICAgIHRoaXMub2JzID0gW11cbiAgICAgICAgICAgIC8vbGlzdCBvZiBzYXJkaW5zIGluIGNvbGxpc2lvbiBmaWVsZFxuICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgICAgIHRoaXMuY29sID0gW11cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTcGF0aWFsSW5kZXguPFNhcmRpbj59IHNpbmRleCBcbiAgICAgKi9cbiAgICBvYnNlcnZlKHNpbmRleCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7U2VhfSAqL1xuICAgICAgICBjb25zdCBzID0gdGhpcy5zZWFcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IGRPID0gcy5EX09CU1xuXG4gICAgICAgIC8vaW5pdGlhbGlzZSBsaXN0c1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLm9icyA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLmNvbCA9IFtdO1xuXG4gICAgICAgIC8vZ2V0IHNhcmRpbnMgYXJvdW5kIHVzaW5nIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgY29uc3Qgc3MgPSBzaW5kZXguZ2V0KHRoaXMueCAtIGRPLCB0aGlzLnkgLSBkTywgdGhpcy54ICsgZE8sIHRoaXMueSArIGRPKTtcblxuICAgICAgICAvL2dldCBzYXJkaW5zIGluIG9ic2VydmF0aW9uIGFuZCBjb2xsaXNpb24gZmllbGRzXG4gICAgICAgIGZvciAobGV0IGYgb2Ygc3MpIHtcbiAgICAgICAgICAgIGlmIChmID09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZChmKSA8PSBzLkRfQ09MKVxuICAgICAgICAgICAgICAgIHRoaXMuY29sLnB1c2goZik7XG4gICAgICAgICAgICBpZiAodGhpcy5kKGYpIDw9IGRPKSB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBhbmdsZVxuICAgICAgICAgICAgICAgIGxldCBkYSA9IE1hdGguYXRhbjIoZi55IC0gdGhpcy55LCBmLnggLSB0aGlzLngpIC0gdGhpcy5zYTtcbiAgICAgICAgICAgICAgICBpZiAoZGEgPiBNYXRoLlBJKSBkYSAtPSAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYSA8PSAtTWF0aC5QSSkgZGEgKz0gMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZGEgPSBNYXRoLmFicyhkYSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhID4gcy5BX09CUyAqIDAuNSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnMucHVzaChmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaW5pdGlhbGlzZSBhY2NlbGVyYXRpb25cbiAgICAgICAgdGhpcy5heCA9IDA7IHRoaXMuYXkgPSAwO1xuXG4gICAgICAgIC8vY29sbGlzaW9uOiByZXB1bHNpb25cbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmNvbCkge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZChmKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSAxLjAgKiAoMSAvIChkICogZCkgLSAxIC8gKHMuRF9DT0wgKiBzLkRfQ09MKSk7XG4gICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiAodGhpcy54IC0gZi54KSAvIGQ7XG4gICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gZi55KSAvIGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b3dhcmQgdGFyZ2V0IHNwZWVkXG4gICAgICAgIGNvbnN0IGR2ID0gKHMuVl9UQVJHRVQgLSB0aGlzLnMpICogMC4wMTtcbiAgICAgICAgdGhpcy5heCArPSBkdiAqIHRoaXMuc3ggLyB0aGlzLnM7XG4gICAgICAgIHRoaXMuYXkgKz0gZHYgKiB0aGlzLnN5IC8gdGhpcy5zO1xuXG4gICAgICAgIC8vdG93YXJkIHRoZSBvYnNlcnZlZCBtZWFuIHBvc2l0aW9uXG4gICAgICAgIC8qaWYob2JzLnNpemUoKT4xKXtcbiAgICAgICAgICAgIGRvdWJsZSB4bj0wLHluPTA7XG4gICAgICAgICAgICBmb3IoU2FyZGluIHM6b2JzKXtcbiAgICAgICAgICAgICAgICB4bis9cy54O1xuICAgICAgICAgICAgICAgIHluKz1zLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4bj14bi9vYnMuc2l6ZSgpO1xuICAgICAgICAgICAgeW49eW4vb2JzLnNpemUoKTtcbiAgICAgICAgICAgIGRvdWJsZSBkPU1hdGguaHlwb3QoeG4teCx5bi15KTtcbiAgICAgICAgICAgIGF4Kz0tMC4xKih4LXhuKS9kO1xuICAgICAgICAgICAgYXkrPS0wLjEqKHkteW4pL2Q7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIC8vdG93YXJkIHRoZSBvYnNlcnZlZCBzcGVlZFxuICAgICAgICBjb25zdCB0ID0gMC45O1xuICAgICAgICBpZiAodGhpcy5vYnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IGRzeCA9IDAsIGRzeSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICAgICAgZHN4ICs9IHMuc3g7XG4gICAgICAgICAgICAgICAgZHN5ICs9IHMuc3k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3ggPSAodCAtIDEpICogdGhpcy5zeCArICgxIC0gdCkgKiBkc3ggLyB0aGlzLm9icy5sZW5ndGg7XG4gICAgICAgICAgICBkc3kgPSAodCAtIDEpICogdGhpcy5zeSArICgxIC0gdCkgKiBkc3kgLyB0aGlzLm9icy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNvbnN0IGEgPSAwLjE7XG4gICAgICAgICAgICB0aGlzLmF4ICs9IGEgKiBkc3g7XG4gICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiBkc3k7XG4gICAgICAgIH1cblxuICAgICAgICAvL2F2b2lkIHNoYXJrXG4gICAgICAgIGNvbnN0IHNoID0gcy5zaGFyaztcbiAgICAgICAgaWYgKHNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLmh5cG90KChzaC54IC0gdGhpcy54KSwgKHNoLnkgLSB0aGlzLnkpKTtcbiAgICAgICAgICAgIGlmIChkIDw9IHMuRF9PQlMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gNS4wICogKDEgLyAoZCAqIGQpIC0gMSAvIChkTyAqIGRPKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5heCArPSBhICogKHRoaXMueCAtIHNoLngpIC8gZDtcbiAgICAgICAgICAgICAgICB0aGlzLmF5ICs9IGEgKiAodGhpcy55IC0gc2gueSkgLyBkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqL1xuICAgIG1vdmUodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBzcGVlZFxuICAgICAgICB0aGlzLnN4ICs9IHRoaXMuYXggKiB0aW1lU3RlcE1zICsgKDEgLSAyICogTWF0aC5yYW5kb20oKSkgKiAwLjAyO1xuICAgICAgICB0aGlzLnN5ICs9IHRoaXMuYXkgKiB0aW1lU3RlcE1zICsgKDEgLSAyICogTWF0aC5yYW5kb20oKSkgKiAwLjAyO1xuICAgICAgICB0aGlzLnMgPSB0aGlzLmNvbXB1dGVTcGVlZCgpXG4gICAgICAgIGlmICh0aGlzLnMgPiB0aGlzLnNlYS5WX01BWCkge1xuICAgICAgICAgICAgdGhpcy5zID0gdGhpcy5zZWEuVl9NQVg7XG4gICAgICAgICAgICB0aGlzLnN4ID0gdGhpcy5zZWEuVl9NQVggKiBNYXRoLmNvcyh0aGlzLnNhKTtcbiAgICAgICAgICAgIHRoaXMuc3kgPSB0aGlzLnNlYS5WX01BWCAqIE1hdGguc2luKHRoaXMuc2EpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb21wdXRlIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zeCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnN5ICogdGltZVN0ZXBNcztcblxuICAgICAgICAvL2xpbWl0XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSB0aGlzLnNlYS53O1xuICAgICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gdGhpcy5zZWEuaDtcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuc2VhLncpIHRoaXMueCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLnNlYS5oKSB0aGlzLnkgPSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBhIHNhcmRpbiBib2R5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtHZW9WaWV3ZXJ9IGNwIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggXG4gICAgICovXG4gICAgZGlzcGxheShjcCwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuY3R4XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmZsb29yKDI1NSAqIE1hdGguYWJzKHRoaXMuc2EpIC8gTWF0aC5QSSk7XG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJyZ2IoMjU1LCAyNTUsIFwiICsgYyArIFwiKVwiXG4gICAgICAgIGNvbnN0IGEgPSBsZW5ndGggLyB0aGlzLnM7XG4gICAgICAgIGNvbnN0IGR4ID0gYSAqIHRoaXMuc3ggKiAwLjU7XG4gICAgICAgIGNvbnN0IGR5ID0gYSAqIHRoaXMuc3kgKiAwLjU7XG5cbiAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54IC0gZHgpLCBjcC5nZW9Ub1BpeFkodGhpcy55IC0gZHkpKTtcbiAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WCh0aGlzLnggKyBkeCksIGNwLmdlb1RvUGl4WSh0aGlzLnkgKyBkeSkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzYXJkaW4gdmlzaW9uIGZpZWxkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHZW9WaWV3ZXJ9IGNwIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsU3R5bGUgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVXaWR0aCBcbiAgICAgKi9cbiAgICBkaXNwbGF5VmlzaW9uRmllbGQoY3AsIGZpbGxTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuY3R4XG4gICAgICAgIGMyLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8oY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5zZWEuRF9PQlMgLyBjcC5nZXRaZigpLFxuICAgICAgICAgICAgLXRoaXMuc2EgLSB0aGlzLnNlYS5BX09CUyAqIDAuNSxcbiAgICAgICAgICAgIC10aGlzLnNhICsgdGhpcy5zZWEuQV9PQlMgKiAwLjVcbiAgICAgICAgKTtcbiAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgIGMyLmZpbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHNhcmRpbiB2aXNpb24gbGlua3NcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dlb1ZpZXdlcn0gY3AgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cm9rZVN0eWxlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lV2lkdGggXG4gICAgICovXG4gICAgZGlzcGxheVZpc2lvbkxpbmtzKGNwLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuY3R4XG4gICAgICAgIGMyLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIGMyLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgZm9yIChsZXQgc2EyIG9mIHRoaXMub2JzKSB7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLm1vdmVUbyhjcC5nZW9Ub1BpeFgodGhpcy54KSwgY3AuZ2VvVG9QaXhZKHRoaXMueSkpO1xuICAgICAgICAgICAgYzIubGluZVRvKGNwLmdlb1RvUGl4WChzYTIueCksIGNwLmdlb1RvUGl4WShzYTIueSkpO1xuICAgICAgICAgICAgYzIuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgc2FyZGluIGNvbGxpc2lvbiBmaWVsZFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7R2VvVmlld2VyfSBjcCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3Ryb2tlU3R5bGUgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVXaWR0aCBcbiAgICAgKi9cbiAgICBkaXNwbGF5Q29sbGlzaW9uRmllbGQoY3AsIHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgpIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jdHhcbiAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGNwLmdlb1RvUGl4WCh0aGlzLngpLCBjcC5nZW9Ub1BpeFkodGhpcy55KSwgdGhpcy5zZWEuRF9DT0wgKiAwLjUgLyBjcC5nZXRaZigpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5zdHJva2UoKTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTYXJkaW4gfSBmcm9tICcuL1NhcmRpbic7XG5pbXBvcnQgeyBTcGF0aWFsSW5kZXggfSBmcm9tICcuLi9iYXNlL1NwYXRpYWxJbmRleCc7XG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5cbi8qKiAqL1xuZXhwb3J0IGNsYXNzIFNlYSB7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG5cbiAgICAgICAgLy9UT0RPIHNob3VsZCBiZWNvbWUgc3RhdGljIGF0dHJpYnV0ZXMgb2YgU2FyZGluIGNsYXNzXG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5EX09CUyA9IDUwXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLkFfT0JTID0gMjAwICogTWF0aC5QSSAvIDE4MFxuXG4gICAgICAgIC8vY29sbGlzaW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLkRfQ09MID0gMTBcblxuICAgICAgICAvL3NwZWVkXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLlZfVEFSR0VUID0gMC4zXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLlZfTUFYID0gMC42XG5cbiAgICAgICAgLy9zaGFya1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5EX1NIQVJLX0VBVCA9IDEyXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLkVBVEVOX1NBUkRJTl9OQiA9IDBcblxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLmZpc2ggPSBbXVxuXG4gICAgICAgIC8vVE9ET1xuICAgICAgICB0aGlzLnNoYXJrID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxTYXJkaW4+fSAqL1xuICAgICAgICB0aGlzLmtpbGxlZCA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqL1xuICAgIHN0ZXAodGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9pbmlcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpc2gpIHtcbiAgICAgICAgICAgIGYuY29tcHV0ZVNwZWVkKClcbiAgICAgICAgICAgIGYuY29tcHV0ZVNwZWVkQW5nbGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9tYWxlIHNwYXRpYWwgaW5kZXhcbiAgICAgICAgLyoqIEB0eXBlIHtTcGF0aWFsSW5kZXguPFNhcmRpbj59ICovXG4gICAgICAgIGNvbnN0IHNpbmRleCA9IG5ldyBTcGF0aWFsSW5kZXgoKTtcbiAgICAgICAgc2luZGV4LmxvYWQodGhpcy5maXNoKVxuXG4gICAgICAgIC8vb2JzZXJ2ZVxuICAgICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZmlzaClcbiAgICAgICAgICAgIGYub2JzZXJ2ZShzaW5kZXgpO1xuXG4gICAgICAgIC8vc2hhcmsgZWF0IGZpc2hcbiAgICAgICAgdGhpcy5zaGFya0VhdChzaW5kZXgpO1xuXG4gICAgICAgIC8vZGlzcG9zZSBzcGF0aWFsIGluZGV4XG4gICAgICAgIC8vc2luZGV4LmNsZWFyKClcblxuICAgICAgICAvL21vdmVcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZpc2gpXG4gICAgICAgICAgICBmLm1vdmUodGltZVN0ZXBNcyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NwYXRpYWxJbmRleC48U2FyZGluPn0gc2luZGV4IFxuICAgICAqL1xuICAgIHNoYXJrRWF0KHNpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5zaGFyayA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48U2FyZGluPn0gKi9cbiAgICAgICAgdGhpcy5raWxsZWQgPSBbXTtcblxuICAgICAgICBjb25zdCB4ID0gdGhpcy5zaGFyay54LCB5ID0gdGhpcy5zaGFyay55O1xuICAgICAgICBjb25zdCBzcyA9IHNpbmRleC5nZXQoeCAtIHRoaXMuRF9TSEFSS19FQVQsIHkgLSB0aGlzLkRfU0hBUktfRUFULCB4ICsgdGhpcy5EX1NIQVJLX0VBVCwgeSArIHRoaXMuRF9TSEFSS19FQVQpO1xuICAgICAgICBmb3IgKGxldCBzIG9mIHNzKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5oeXBvdCgoeCAtIHMueCksICh5IC0gcy55KSk7XG4gICAgICAgICAgICBpZiAoZCA+IHRoaXMuRF9TSEFSS19FQVQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpcy5raWxsZWQucHVzaChzKTtcbiAgICAgICAgICAgIHJlbW92ZUZyb21BcnJheSh0aGlzLmZpc2gsIHMpXG4gICAgICAgICAgICAvL3NpbmRleC5yZW1vdmUocyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FQVRFTl9TQVJESU5fTkIgKz0gdGhpcy5raWxsZWQubGVuZ3RoO1xuICAgICAgICAvL2VhdGVuRmlzaE5iLnNldFRleHQoXCJFYXRlbiBmaXNoOiBcIiArIEVBVEVOX1NBUkRJTl9OQik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBmaXNoXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGFkZEZpc2gobmIgPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKylcbiAgICAgICAgICAgIHRoaXMuZmlzaC5wdXNoKG5ldyBTYXJkaW4odGhpcykpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCByYW5kb20gc3BlZWQgZm9yIGFsbCBmaXNoXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc2V0UmFuZG9tU3BlZWQoKSB7XG4gICAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5maXNoKVxuICAgICAgICAgICAgZi5zZXRSYW5kb21TcGVlZCgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG59XG4iLCIvL0B0cy1jaGVja1xuaW1wb3J0IHsgU2VhIH0gZnJvbSAnLi9TZWEnO1xuaW1wb3J0IHsgR2VvVmlld2VyIH0gZnJvbSAnLi4vYmFzZS9HZW9WaWV3ZXInO1xuXG5jbGFzcyBGaXNoU2ltdWxhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgICAgIG9wdHMuY2FudmFzSWQgPSBvcHRzLmNhbnZhc0lkIHx8IFwidmFjYW52YXNcIjtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5jYW52YXNJZCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IG9wdHMudyB8fCBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBvcHRzLmggfHwgY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgICAgICAvL1RPRE9cbiAgICAgICAgLy9hZGQgZWF0ZW4gZmlzaCBuYiBsYWJlbFxuXG4gICAgICAgIC8qKiBAdHlwZSB7R2VvVmlld2VyfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IEdlb1ZpZXdlcigpO1xuICAgICAgICB0aGlzLmNwbHVzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuc2hvd0Zpc2hWaXNpb25GaWVsZCA9IGZhbHNlXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5zaG93RmlzaFZpc2lvbkxpbmtzID0gZmFsc2VcbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLnNob3dGaXNoQ29sbGlzaW9uRmllbGQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuY3R4XG4gICAgICAgICAgICBjb25zdCBzID0gdGguc2VhXG5cbiAgICAgICAgICAgIC8vY2xlYXJcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwicmdiYSgxMjAsMTIwLDI1NSwwLjYpXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uRmllbGQpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkZpZWxkKHRoaXMsIFwicmdiYSgyMDAsMjAwLDIwMCwwLjE1KVwiLCAxKVxuICAgICAgICAgICAgLy9zaG93IHZpc2lvbiBsaW5rc1xuICAgICAgICAgICAgaWYgKHRoLnNob3dGaXNoVmlzaW9uTGlua3MpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoc2EpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2EuZGlzcGxheVZpc2lvbkxpbmtzKHRoaXMsIFwicmdiYSgyNTUsMTAwLDEwMCwwLjMpXCIsIDEpXG4gICAgICAgICAgICAvL3Nob3cgY29sbGlzaW9uIGZpZWxkXG4gICAgICAgICAgICBpZiAodGguc2hvd0Zpc2hDb2xsaXNpb25GaWVsZClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYSBvZiBzLmZpc2gpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhzYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzYS5kaXNwbGF5Q29sbGlzaW9uRmllbGQodGhpcywgXCJwdXJwbGVcIiwgMSlcblxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgc2FyZGluc1xuICAgICAgICAgICAgYzIubGluZVdpZHRoID0gMiAvIHRoaXMuZ2V0WmYoKVxuICAgICAgICAgICAgY29uc3Qgc2FyZGluTGVuZ3RoID0gN1xuICAgICAgICAgICAgZm9yIChsZXQgc2Egb2Ygcy5maXNoKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvRHJhdyhzYSkpXG4gICAgICAgICAgICAgICAgICAgIHNhLmRpc3BsYXkodGhpcywgc2FyZGluTGVuZ3RoKVxuXG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBzaGFya1xuICAgICAgICAgICAgaWYgKHMuc2hhcmsgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgYzIubGluZVdpZHRoID0gNCAvIHRoaXMuZ2V0WmYoKVxuICAgICAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFya0xlbmd0aCA9IDEyIC8gdGhpcy5nZXRaZigpXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzaGFya0xlbmd0aCAqIE1hdGguY29zKHMuc2hhcmsuYW5nbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc2hhcmtMZW5ndGggKiBNYXRoLnNpbihzLnNoYXJrLmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh0aGlzLmdlb1RvUGl4WChzLnNoYXJrLngpLCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpKTtcbiAgICAgICAgICAgICAgICBjMi5saW5lVG8odGhpcy5nZW9Ub1BpeFgocy5zaGFyay54KSAtIGR4LCB0aGlzLmdlb1RvUGl4WShzLnNoYXJrLnkpIC0gZHkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgYmxvb2Qgc3BvdFxuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDFcbiAgICAgICAgICAgIGZvciAobGV0IHNhIG9mIHMua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYzIubW92ZVRvKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSk7XG4gICAgICAgICAgICAgICAgYzIuYXJjKHRoaXMuZ2VvVG9QaXhYKHNhLngpLCB0aGlzLmdlb1RvUGl4WShzYS55KSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9mcmFtZVxuICAgICAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCI7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCkgLSAzLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpIC0gMywgdGgudyAvIHRoaXMuZ2V0WmYoKSArIDMsIHRoLmggLyB0aGlzLmdldFpmKCkgKyAzKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNwbHVzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgdGguc2VhLnNoYXJrID0geyB4OiB0aC5jcGx1cy5waXhUb0dlb1goZS5vZmZzZXRYKSwgeTogdGguY3BsdXMucGl4VG9HZW9ZKGUub2Zmc2V0WSksIGFuZ2xlOiAwIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4RyA9IHRoLmNwbHVzLnBpeFRvR2VvWChlLm9mZnNldFgpO1xuICAgICAgICAgICAgY29uc3QgeUcgPSB0aC5jcGx1cy5waXhUb0dlb1koZS5vZmZzZXRZKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMigteUcgKyB0aC5zZWEuc2hhcmsueSwgeEcgLSB0aC5zZWEuc2hhcmsueCk7XG4gICAgICAgICAgICB0aC5zZWEuc2hhcmsgPSB7IHg6IHhHLCB5OiB5RywgYW5nbGU6IGFuZ2xlIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3BsdXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoLnNlYS5zaGFyayA9IG51bGw7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtTZWF9ICovXG4gICAgICAgIHRoaXMuc2VhID0gbmV3IFNlYSh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbnNpdHkgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgaW5pdFJhbmRvbShkZW5zaXR5ID0gMC4wMDEpIHtcbiAgICAgICAgdGhpcy5zZWEuYWRkRmlzaChkZW5zaXR5ICogdGhpcy5zZWEudyAqIHRoaXMuc2VhLmgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYkl0ZXJhdGlvbnMgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgc3RhcnQodGltZVN0ZXBNcyA9IDEwLCBuYkl0ZXJhdGlvbnMgPSAtMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnNlYS5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgZmlzaCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBGaXNoU2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcblxuLyoqXG4gKiBcbiAqL1xuZXhwb3J0IGNsYXNzIENlbGwge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIG5iPTApIHtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubmIgPSBuYlxuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IG9ialRvQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBHZW9WaWV3ZXIgfSBmcm9tICcuLi9iYXNlL0dlb1ZpZXdlcic7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9DZWxsJztcblxuLyoqXG4gKiBcbiAqL1xuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih3LCBoKSB7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBoO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxDZWxsPn0gKi9cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7Q2VsbHxudWxsfVxuICAgICAqL1xuICAgIGFkZCh4LCB5KSB7XG5cbiAgICAgICAgLy9maW5kIGNlbGwgYXQgbG9jYXRpb25cbiAgICAgICAgLyoqQHR5cGUge3N0cmluZ30qL1xuICAgICAgICBjb25zdCBpZCA9IHggKyBcIl9cIiArIHk7XG4gICAgICAgIGlmICh0aGlzLnBvcHVsYXRpb25JW2lkXSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxcbiAgICAgICAgLyoqQHR5cGUge0NlbGx9ICovXG4gICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbCh4LCB5LCAwKVxuICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChjZWxsKVxuICAgICAgICB0aGlzLnBvcHVsYXRpb25JW2lkXSA9IGNlbGxcbiAgICAgICAgcmV0dXJuIGNlbGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGVwKCkge1xuXG4gICAgICAgIC8vVE9ETyBkb3VibGUgaW5kZXhpbmc/IGJ5IHJhdyBhbmQgdGhlbiBjb2x1bW4gP1xuICAgICAgICAvL3BvcHVsYXRlIGNlbGwgc3Vycm91bmRpbmdzXG4gICAgICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIENlbGw+fVxuICAgICAgICAgKiBAZGljdCAqL1xuICAgICAgICBjb25zdCBzdXJJID0ge307XG4gICAgICAgIC8vZ28gdGhyb3VnaCBsaXN0IG9mIGNlbGxzXG4gICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGhpcy5wb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICAvLyArMSBzdXJyb3VuZGluZyBjZWxsc1xuICAgICAgICAgICAgY29uc3Qgc3JzID0gVW5pdmVyc2UuZ2V0Q2VsbFN1cnJvdW5kaW5nKGNlbGwsIHRoaXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgc3VyIG9mIHNycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHN1ci54ICsgXCJfXCIgKyBzdXIueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChzdXJfKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cl8ubmIrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdXIubmIgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzdXJJW2tleV0gPSBzdXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9CMy9TMjNcbiAgICAgICAgLy9raWxsIGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICBjb25zdCBjZWxsc1RvS2VlcCA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge09iamVjdC48c3RyaW5nLCBDZWxsPn1cbiAgICAgICAgICogQGRpY3QgKi9cbiAgICAgICAgY29uc3QgY2VsbHNUb0tlZXBJID0ge307XG4gICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGhpcy5wb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjZWxsLnggKyBcIl9cIiArIGNlbGwueTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxfID0gc3VySVtrZXldO1xuICAgICAgICAgICAgaWYgKCFjZWxsXykgY29udGludWU7XG4gICAgICAgICAgICAvL2lmIChuYjwyIG9yIG5iPjMpIC0+IGtpbGxcbiAgICAgICAgICAgIGlmIChjZWxsXy5uYiA8IDIgfHwgY2VsbF8ubmIgPiAzKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNlbGxzVG9LZWVwLnB1c2goY2VsbCk7XG4gICAgICAgICAgICBjZWxsc1RvS2VlcElba2V5XSA9IGNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gY2VsbHNUb0tlZXA7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkkgPSBjZWxsc1RvS2VlcEk7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IGNlbGxzXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENlbGw+fSAqL1xuICAgICAgICBjb25zdCBzdXJzID0gb2JqVG9BcnJheShzdXJJKTtcbiAgICAgICAgZm9yIChsZXQgc3VyIG9mIHN1cnMpIHtcblxuICAgICAgICAgICAgaWYgKHN1ci5uYiAhPT0gMykgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgYWxyZWFkeSBhbGl2ZVxuICAgICAgICAgICAgY29uc3Qga2V5ID0gc3VyLnggKyBcIl9cIiArIHN1ci55O1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB0aGlzLnBvcHVsYXRpb25JW2tleV07XG4gICAgICAgICAgICBpZiAoY2VsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBjZWxsXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24ucHVzaChzdXIpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSVtrZXldID0gc3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXRNU1xuICAgICAqIEBwYXJhbSB7R2VvVmlld2VyfSBjcGx1c1xuICAgICAqIEByZXR1cm4ge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHN0YXJ0KG5iLCB0aW1lb3V0TVMsIGNwbHVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdW5pID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIHVuaS5zdGVwKCk7XG4gICAgICAgICAgICBjcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYiA+IDAgJiYgaSsrID4gbmIpIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5naW5lLCB0aW1lb3V0TVMpO1xuICAgICAgICB9O1xuICAgICAgICBlbmdpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDZWxsfSBjZWxsXG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdW5pXG4gICAgICogQHJldHVybiB7QXJyYXkuPENlbGw+fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDZWxsU3Vycm91bmRpbmcoY2VsbCwgdW5pKSB7XG4gICAgICAgIGNvbnN0IHgxID0gY2VsbC54ID09PSAwID8gdW5pLncgLSAxIDogY2VsbC54IC0gMTtcbiAgICAgICAgY29uc3QgeDIgPSBjZWxsLnggPT09IHVuaS53IC0gMSA/IDAgOiBjZWxsLnggKyAxO1xuICAgICAgICBjb25zdCB5MSA9IGNlbGwueSA9PT0gMCA/IHVuaS5oIC0gMSA6IGNlbGwueSAtIDE7XG4gICAgICAgIGNvbnN0IHkyID0gY2VsbC55ID09PSB1bmkuaCAtIDEgPyAwIDogY2VsbC55ICsgMTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBDZWxsKHgxLCB5MSksXG4gICAgICAgICAgICBuZXcgQ2VsbCh4MSwgY2VsbC55KSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgxLCB5MiksXG4gICAgICAgICAgICBuZXcgQ2VsbChjZWxsLngsIHkxKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKGNlbGwueCwgeTIpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDIsIHkxKSxcbiAgICAgICAgICAgIG5ldyBDZWxsKHgyLCBjZWxsLnkpLFxuICAgICAgICAgICAgbmV3IENlbGwoeDIsIHkyKSxcbiAgICAgICAgXTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBHZW9WaWV3ZXIgfSBmcm9tICcuLi9iYXNlL0dlb1ZpZXdlcic7XG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gJy4vVW5pdmVyc2UnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5cbi8vVE9ETyB6b29tL3Bhbiwgd2l0aCBjYW52YXMgdHJhbnNmb3JtOiBiZXR0ZXIgdW5pdmVyc2UgbGltaXRzXG4vL1RPRE8gYnV0dG9ucyAocGxheSwgc3RvcCwgc3BlZWQsIGRyYXcsIHBhbilcbi8vVE9ETyBjaGVjayBjYW52YXMgYW5pbWF0aW9uXG5cblxuY2xhc3MgR29MU2ltdWxhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgICAgIG9wdHMuY2FudmFzSWQgPSBvcHRzLmNhbnZhc0lkIHx8IFwidmFjYW52YXNcIjtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5jYW52YXNJZCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IG9wdHMudyB8fCBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmggPSBvcHRzLmggfHwgY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgICAgICAvKiogQHR5cGUge0dlb1ZpZXdlcn0gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBHZW9WaWV3ZXIoKTtcblxuICAgICAgICBjb25zdCB0aCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3BsdXMucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYzIgPSB0aGlzLmN0eFxuXG4gICAgICAgICAgICAvL2NsZWFyXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCB0aC53LCB0aC5oKTtcblxuICAgICAgICAgICAgLy9kcmF3IGNlbGxzXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGNlbGwgb2YgdGgudW5pLnBvcHVsYXRpb24pXG4gICAgICAgICAgICAgICAgYzIuZmlsbFJlY3QodGhpcy5nZW9Ub1BpeFgoY2VsbC54KSwgdGhpcy5nZW9Ub1BpeFkoY2VsbC55KSwgMSAvIHRoaXMuZ2V0WmYoKSwgMSAvIHRoaXMuZ2V0WmYoKSk7XG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJsaWdodGdyYXlcIjtcbiAgICAgICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgYzIucmVjdCh0aGlzLmdlb1RvUGl4WCgwKSwgdGhpcy5nZW9Ub1BpeFkodGhpcy5oKSwgdGgudyAvIHRoaXMuZ2V0WmYoKSwgdGguaCAvIHRoaXMuZ2V0WmYoKSk7XG4gICAgICAgICAgICBjMi5zdHJva2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVuaSA9IG5ldyBVbml2ZXJzZSh0aGlzLncsIHRoaXMuaCk7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIGluaXRSYW5kb20oZGVuc2l0eSA9IDAuMDUpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgY29uc3QgbmIgPSB0aGlzLnVuaS53ICogdGhpcy51bmkuaCAqIGRlbnNpdHk7XG4gICAgICAgIHdoaWxlIChpIDwgbmIpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHRoaXMudW5pLncgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHRoaXMudW5pLmggKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7Q2VsbH0gKi9cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnVuaS5hZGQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoY2VsbCkgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy51bmkuc3RhcnQoLTEsIDAsIHRoaXMuY3BsdXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgZ2FtZU9mTGlmZSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBHb0xTaW11bGF0aW9uKG9wdHMpXG59XG4iLCIvL0B0cy1jaGVja1xuXG5leHBvcnQgKiBmcm9tIFwiLi9wbGFuZXRzL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL2dvbC9pbmRleFwiXG5leHBvcnQgKiBmcm9tIFwiLi9maXNoL2luZGV4XCJcbmV4cG9ydCAqIGZyb20gXCIuL3BwL2luZGV4XCJcbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBVbml2ZXJzZSB9IGZyb20gXCIuL1VuaXZlcnNlXCI7XG5pbXBvcnQgeyBHZW9WaWV3ZXIgfSBmcm9tIFwiLi4vYmFzZS9HZW9WaWV3ZXJcIlxuaW1wb3J0IHsgQWdlbnRQb2ludCB9IGZyb20gXCIuLi9iYXNlL0FnZW50UG9pbnRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYW5ldCBleHRlbmRzIEFnZW50UG9pbnQge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtVbml2ZXJzZX0gdSBUaGUgdW5pdmVyc2UgdGhlIHBsYW5ldCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSBtYXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeCBUaGUgc3BlZWQgeFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeSBUaGUgc3BlZWQgeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHUsIG0sIHgsIHksIHN4ID0gMCwgc3kgPSAwKSB7XG5cbiAgICAgICAgLy9cbiAgICAgICAgc3VwZXIoeCwgeSwgc3gsIHN5KVxuXG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIHUucHMucHVzaCh0aGlzKVxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLm0gPSBtO1xuXG4gICAgICAgIC8vY29tcHV0ZSByYWRpdXNcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIoKTtcblxuICAgICAgICAvL3NldCBwb3NpdGlvblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy54ID0geCA8IHIgPyByIDogeCA+IHUudyAtIHIgPyB1LncgLSByIDogeDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMueSA9IHkgPCByID8gciA6IHkgPiB1LmggLSByID8gdS5oIC0gciA6IHk7XG5cbiAgICAgICAgLy9hY2NlbGVyYXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuYXggPSAwO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5heSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBmb3JjZSwgYmFzZWQgb24gdGhlIGdyYXZpdHkgb2Ygb3RoZXIgcGxhbmV0cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZXhwb25lbnRcbiAgICAgKi9cbiAgICBvYnNlcnZlKGV4cG9uZW50KSB7XG5cbiAgICAgICAgLy9jb21wdXRlIGdyYXZpdHkgZmllbGQgYXQgcGxhbmV0IGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLnUuZ2V0R3Jhdml0eUZpZWxkKHRoaXMueCwgdGhpcy55LCB0aGlzLCBleHBvbmVudCk7XG5cbiAgICAgICAgLy9zZXQgYWNjZWxlcmF0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmF4ID0gZy5neDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuYXkgPSBnLmd5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBwbGFuZXQsIGRlcGVuZGluZyBvbiBpdHMgbWFzcy5cbiAgICAgKi9cbiAgICByKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5tIC8gTWF0aC5QSSwgMC41KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBjaGFuZ2UoYm91bmNlID0gZmFsc2UsIG1heFNwZWVkID0gMC44LCB0aW1lU3RlcE1zID0gMTApIHtcblxuICAgICAgICAvL2NvbXB1dGUgbmV3IHNwZWVkXG4gICAgICAgIHRoaXMuc3ggKz0gdGhpcy5heCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMuc3kgKz0gdGhpcy5heSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9jaGVjayB2bWF4XG4gICAgICAgIGlmIChtYXhTcGVlZCA+IDApIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGguc3FydCh0aGlzLnN4ICogdGhpcy5zeCArIHRoaXMuc3kgKiB0aGlzLnN5KTtcbiAgICAgICAgICAgIGlmICh2ID4gbWF4U3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN4ID0gbWF4U3BlZWQgKiB0aGlzLnN4IC8gdjtcbiAgICAgICAgICAgICAgICB0aGlzLnN5ID0gbWF4U3BlZWQgKiB0aGlzLnN5IC8gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29tcHV0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIGxldCBueCA9IHRoaXMueCArIHRoaXMuc3ggKiB0aW1lU3RlcE1zO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgbGV0IG55ID0gdGhpcy55ICsgdGhpcy5zeSAqIHRpbWVTdGVwTXM7XG5cbiAgICAgICAgLy9oYW5kbGUgcG9zaXRpb24gbGltaXRcbiAgICAgICAgaWYgKGJvdW5jZSkge1xuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMucigpO1xuICAgICAgICAgICAgY29uc3QgZSA9IDE7XG4gICAgICAgICAgICBpZiAobnggPCByKSB7IG54ID0gcjsgdGhpcy5zeCA9IC10aGlzLnN4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55IDwgcikgeyBueSA9IHI7IHRoaXMuc3kgPSAtdGhpcy5zeSAqIGU7IH1cbiAgICAgICAgICAgIGlmIChueCA+IHRoaXMudS53IC0gcikgeyBueCA9IHRoaXMudS53IC0gcjsgdGhpcy5zeCA9IC10aGlzLnN4ICogZTsgfVxuICAgICAgICAgICAgaWYgKG55ID4gdGhpcy51LmggLSByKSB7IG55ID0gdGhpcy51LmggLSByOyB0aGlzLnN5ID0gLXRoaXMuc3kgKiBlOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobnggPCAwKSB7IG54ID0gdGhpcy51Lnc7IH1cbiAgICAgICAgICAgIGlmIChueSA8IDApIHsgbnkgPSB0aGlzLnUuaDsgfVxuICAgICAgICAgICAgaWYgKG54ID4gdGhpcy51LncpIHsgbnggPSAwOyB9XG4gICAgICAgICAgICBpZiAobnkgPiB0aGlzLnUuaCkgeyBueSA9IDA7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbW92ZVxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHBsYW5ldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7R2VvVmlld2VyfSBjcCBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsbFN0eWxlIFxuICAgICAqL1xuICAgIGRpc3BsYXkoY3AsIGZpbGxTdHlsZSkge1xuICAgICAgICBjb25zdCBjMiA9IGNwLmN0eFxuICAgICAgICBjMi5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucigpIC8gY3AuZ2V0WmYoKSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjMi5jbG9zZVBhdGgoKTtcbiAgICAgICAgYzIuZmlsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgcGxhbmV0IGFjY2VsZXJhdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7R2VvVmlld2VyfSBjcCBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3Ryb2tlU3R5bGUgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVXaWR0aCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZmFjdG9yIFxuICAgICAqL1xuICAgIGRpc3BsYXlBY2NlbGVyYXRpb24oY3AsIHN0cm9rZVN0eWxlID0gXCJjeWFuXCIsIGxpbmVXaWR0aCA9IDEsIGZhY3RvciA9IDUwMDApIHtcbiAgICAgICAgY29uc3QgYzIgPSBjcC5jdHhcbiAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgICAgYzIubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXG4gICAgICAgIGMyLmJlZ2luUGF0aCgpO1xuICAgICAgICBjMi5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjMi5saW5lVG8odGhpcy54ICsgZmFjdG9yICogdGhpcy5heCwgdGhpcy55ICsgZmFjdG9yICogdGhpcy5heSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5zdHJva2UoKTtcbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9iYXNlL2xpYic7XG5pbXBvcnQgeyBTcGF0aWFsSW5kZXggfSBmcm9tICcuLi9iYXNlL1NwYXRpYWxJbmRleCc7XG5pbXBvcnQgeyBQbGFuZXQgfSBmcm9tICcuL1BsYW5ldCc7XG5cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodywgaCkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gaDtcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICB0aGlzLnBzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgbWFzcyBvZiB0aGUgdW5pdmVyc2UsIGFzIHRoZSBzdW0gb2YgdGhlIG1hc3Mgb2YgaXRzIHBsYW5ldHMuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtKCkge1xuICAgICAgICBsZXQgbSA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIG0gKz0gcC5tO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICAgICAqIEBwYXJhbSB7UGxhbmV0fSBwSWdub3JlIEEgcGxhbmV0IHRvIGlnbm9yZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBleHBvbmVudFxuICAgICAqIEByZXR1cm5zIHt7Z3g6bnVtYmVyLGd5Om51bWJlcn19XG4gICAgICovXG4gICAgZ2V0R3Jhdml0eUZpZWxkKHgsIHksIHBJZ25vcmUgPSB1bmRlZmluZWQsIGV4cG9uZW50ID0gMikge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBsZXQgZ3ggPSAwXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICBsZXQgZ3kgPSAwXG5cbiAgICAgICAgLy9nb3Rocm91Z2ggYWxsIHBsYW5ldHMgaW4gdGhlIHVuaXZlcnNlXG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcykge1xuXG4gICAgICAgICAgICAvL2lnbm9yZSBwbGFuZXRcbiAgICAgICAgICAgIGlmIChwSWdub3JlICYmIHAgPT0gcElnbm9yZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy9jb21wdXRlIGRpc3RhbmNlXG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCBkID0gcC5kUCh4LCB5KTtcbiAgICAgICAgICAgIGlmIChkID09PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL2NvbXB1dGUgYW5kIGFkZCBjb250cmlidXRpb25cbiAgICAgICAgICAgIGQgPSBkICogTWF0aC5wb3coZCwgZXhwb25lbnQpO1xuICAgICAgICAgICAgZ3ggKz0gMC4wMSAqIChwLnggLSB4KSAqIHAubSAvIGQ7XG4gICAgICAgICAgICBneSArPSAwLjAxICogKHAueSAtIHkpICogcC5tIC8gZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBneDogZ3gsIGd5OiBneSB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZ2dyZWdhdGUgdHdvIHBsYW5ldHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcDFcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcDJcbiAgICAgKiBAcGFyYW0ge1NwYXRpYWxJbmRleC48UGxhbmV0Pn0gc2luZGV4XG4gICAgICogQHJldHVybnMge1BsYW5ldH1cbiAgICAgKi9cbiAgICBhZ2dyZWdhdGUocDEsIHAyLCBzaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbSA9IHAxLm0gKyBwMi5tO1xuICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgKHAxLnggKiBwMS5tICsgcDIueCAqIHAyLm0pIC8gbSxcbiAgICAgICAgICAgIChwMS55ICogcDEubSArIHAyLnkgKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEuc3ggKiBwMS5tICsgcDIuc3ggKiBwMi5tKSAvIG0sXG4gICAgICAgICAgICAocDEuc3kgKiBwMS5tICsgcDIuc3kgKiBwMi5tKSAvIG1cbiAgICAgICAgKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIHAxKTtcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIHAyKTtcblxuICAgICAgICBpZiAoc2luZGV4KSB7XG4gICAgICAgICAgICBzaW5kZXgucmVtb3ZlKHAxKVxuICAgICAgICAgICAgc2luZGV4LnJlbW92ZShwMilcbiAgICAgICAgICAgIHNpbmRleC5pbnNlcnQocClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NwYXRpYWxJbmRleC48UGxhbmV0Pn0gc2luZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbGxpc2lvbkZhY3RvclxuICAgICAqIEByZXR1cm5zIHtBcnJheS48UGxhbmV0Pn1cbiAgICAgKi9cbiAgICBmaW5kQ29sbGlzaW9uKHNpbmRleCwgY29sbGlzaW9uRmFjdG9yID0gMSkge1xuICAgICAgICBmb3IgKGxldCBwaSBvZiB0aGlzLnBzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHcgPSAyICogcGkucigpO1xuICAgICAgICAgICAgY29uc3QgY2FuZCA9IHNpbmRleC5nZXQocGkueCAtIHcsIHBpLnkgLSB3LCBwaS54ICsgdywgcGkueSArIHcpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwaiBvZiBjYW5kKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocGkgPT0gcGopIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICAgICAgY29uc3QgZDEgPSBwaS5kKHBqKTtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgICAgICBjb25zdCBkMiA9IChwaS5yKCkgKyBwai5yKCkpICogY29sbGlzaW9uRmFjdG9yO1xuICAgICAgICAgICAgICAgIGlmIChkMSA+IGQyKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3BpLCBwal07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZCBwbGFuZXRzIHdpdGggcmFuZG9tIHNwZWVkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaSBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3BlZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWRcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBhZGRQbGFuZXRzKG5iID0gMSwgbWkgPSAwLjUsIG1pblNwZWVkID0gMCwgbWF4U3BlZWQgPSAwLjEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldCh0aGlzLCBtaSwgdGhpcy53ICogTWF0aC5yYW5kb20oKSwgdGhpcy5oICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBwLnNldFJhbmRvbVNwZWVkKG1pblNwZWVkLCBtYXhTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2bWF4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBleHBvbmVudCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sbGlzaW9uRmFjdG9yIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RlcE1zIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0ZXAoYm91bmNlID0gZmFsc2UsIHZtYXggPSAwLjgsIGV4cG9uZW50ID0gMiwgY29sbGlzaW9uRmFjdG9yID0gMSwgdGltZVN0ZXBNcyA9IDEwKSB7XG5cbiAgICAgICAgLy9vYnNlcnZhdGlvblxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBwLm9ic2VydmUoZXhwb25lbnQpO1xuXG4gICAgICAgIC8vYWN0aW9uXG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIHAuY2hhbmdlKGJvdW5jZSwgdm1heCwgdGltZVN0ZXBNcyk7XG5cblxuICAgICAgICAvL2NvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zKGNvbGxpc2lvbkZhY3RvcilcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sbGlzaW9uRmFjdG9yIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGRldGVjdENvbGxpc2lvbnMoY29sbGlzaW9uRmFjdG9yID0gMSkge1xuXG4gICAgICAgIC8qKiBAdHlwZSB7U3BhdGlhbEluZGV4LjxQbGFuZXQ+fSAqL1xuICAgICAgICBjb25zdCBzaW5kZXggPSBuZXcgU3BhdGlhbEluZGV4KCk7XG4gICAgICAgIHNpbmRleC5sb2FkKHRoaXMucHMpXG5cbiAgICAgICAgLy9maW5kIGZpcnN0IGNvbGxpc2lvblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxQbGFuZXQ+fSAqL1xuICAgICAgICBsZXQgcGFpciA9IHRoaXMuZmluZENvbGxpc2lvbihzaW5kZXgsIGNvbGxpc2lvbkZhY3Rvcik7XG4gICAgICAgIHdoaWxlIChwYWlyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vYWdncmVnYXRlXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5hZ2dyZWdhdGUocGFpclswXSwgcGFpclsxXSwgc2luZGV4KVxuXG4gICAgICAgICAgICAvL2ZpbmQgbmV4dCBjb2xsaXNpb25cbiAgICAgICAgICAgIHBhaXIgPSB0aGlzLmZpbmRDb2xsaXNpb24oc2luZGV4LCBjb2xsaXNpb25GYWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gcmFuZG9tIHNwZWVkIHRvIGFsbCBwbGFuZXRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzZXRSYW5kb21TcGVlZChtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wcylcbiAgICAgICAgICAgIHAuc2V0UmFuZG9tU3BlZWQobWluU3BlZWQsIG1heFNwZWVkKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQbGFuZXR9IFRoZSBsYXJnZXN0IHBsYW5ldCBvZiB0aGUgdW5pdmVyc2UsIHVzdWFsbHkgdGhlIHN0YXIuXG4gICAgICovXG4gICAgZ2V0TGFyZ2VzdFBsYW5ldCgpIHtcbiAgICAgICAgbGV0IHBNID0gbnVsbCwgbU0gPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucHMpXG4gICAgICAgICAgICBpZiAocC5tID4gbU0pIHsgcE0gPSBwOyBtTSA9IHAubSB9XG4gICAgICAgIHJldHVybiBwTVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBsYXJnZXN0IHBsYW5ldCBhbmQgZXhwbG9kZSBpdC5cbiAgICAgKi9cbiAgICBleHBsb2RlTGFyZ2VzdFBsYW5ldCgpIHtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZ2V0TGFyZ2VzdFBsYW5ldCgpXG4gICAgICAgIHRoaXMuZXhwbG9kZShwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGxvZGUgYSBwbGFuZXQgaW50byBwaWVjZXNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BsYW5ldH0gcCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNwZWVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkIFxuICAgICAqL1xuICAgIGV4cGxvZGUocCwgbmIgPSAtMSwgbWluU3BlZWQgPSAwLjgsIG1heFNwZWVkID0gMS41LCByYWQgPSAtMSkge1xuICAgICAgICBpZiAobmIgPD0gMCkgbmIgPSBNYXRoLmZsb29yKHAubSk7XG4gICAgICAgIGlmIChuYiA8PSAwKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDIgKiBNYXRoLlBJIC8gbmI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgLy9jcmVhdGUgcGxhbmV0XG5cbiAgICAgICAgICAgIC8vcG9zaXRpb25cbiAgICAgICAgICAgIGlmIChyYWQgPCAwKSByYWQgPSAyICogcC5yKClcbiAgICAgICAgICAgIGNvbnN0IGQgPSByYWQgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgY29uc3QgYSA9IGkgKiBhbmdsZVN0ZXA7XG4gICAgICAgICAgICBjb25zdCB4ID0gZCAqIE1hdGguY29zKGEpLCB5ID0gZCAqIE1hdGguc2luKGEpO1xuXG4gICAgICAgICAgICAvL3NwZWVkXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IG1pblNwZWVkICsgTWF0aC5yYW5kb20oKSAqIChtYXhTcGVlZCAtIG1pblNwZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IGFTID0gYSArIDIgKiAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogTWF0aC5QSSAvIDM7XG4gICAgICAgICAgICBjb25zdCBzeCA9IHNwZWVkICogTWF0aC5jb3MoYVMpLCBzeSA9IHNwZWVkICogTWF0aC5zaW4oYVMpO1xuXG4gICAgICAgICAgICBuZXcgUGxhbmV0KHRoaXMsIHAubSAvIG5iLCBwLnggKyB4LCBwLnkgKyB5LCBwLnN4ICsgc3gsIHAuc3kgKyBzeSlcbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZSBwIGZyb20gdW5pdmVyc2VcbiAgICAgICAgcmVtb3ZlRnJvbUFycmF5KHRoaXMucHMsIHApO1xuICAgIH1cblxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSAnLi9Vbml2ZXJzZSc7XG5pbXBvcnQgeyBQbGFuZXQgfSBmcm9tICcuL1BsYW5ldCc7XG5pbXBvcnQgeyBHZW9WaWV3ZXIgfSBmcm9tICcuLi9iYXNlL0dlb1ZpZXdlcic7XG5cbi8qKiAgKi9cbmNsYXNzIFBsYW5ldFNpbXVsYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICBvcHRzLmNhbnZhc0lkID0gb3B0cy5jYW52YXNJZCB8fCBcInZhY2FudmFzXCI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuY2FudmFzSWQpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLncgPSBvcHRzLncgfHwgY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5oID0gb3B0cy5oIHx8IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSBvcHRzLm1heFNwZWVkIHx8IDAuODtcbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLmJvdW5jZSA9IG9wdHMuYm91bmNlIHx8IGZhbHNlXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmV4cG9uZW50ID0gb3B0cy5leHBvbmVudCB8fCAyO1xuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5jb2xsaXNpb25GYWN0b3IgPSBvcHRzLmNvbGxpc2lvbkZhY3RvciB8fCAxO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5zaG93UGxhbmV0QWNjZWxlcmF0aW9uID0gZmFsc2VcblxuICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgdGhpcy5zaG93RmllbGQgPSB1bmRlZmluZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuZmllbGRSZXMgPSAyMFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5maWVsZEZhY3RvciA9IDEwMDBcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIHRoaXMuZmllbGRTdHJva2VTdHlsZSA9IFwiIzk5YmJmZlwiO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnRhaWxpbmdzID0gb3B0cy50YWlsaW5ncyB8fCAwLjE7XG5cblxuICAgICAgICAvKiogQHR5cGUge0dlb1ZpZXdlcn0gKi9cbiAgICAgICAgdGhpcy5jcGx1cyA9IG5ldyBHZW9WaWV3ZXIoKTtcbiAgICAgICAgdGhpcy5jcGx1cy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNwbHVzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgY29uc3QgdGggPSB0aGlzO1xuICAgICAgICB0aGlzLmNwbHVzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gdGhpcy5jdHhcblxuICAgICAgICAgICAgdGhpcy5pbml0Q2FudmFzVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgIC8vY2xlYXIsIHdpdGggdHJhbnNwYXJlbmN5XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsXCIgKyB0aC50YWlsaW5ncyArIFwiKVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG4gICAgICAgICAgICAvL2MyLmZpbGxSZWN0KC0xZTIwLCAtMWUyMCwgMmUyMCwgMmUyMCk7IC8vdG9kb1xuXG4gICAgICAgICAgICAvL2Rpc3BsYXkgZ3Jhdml0eSBmaWVsZFxuICAgICAgICAgICAgaWYgKHRoLnNob3dGaWVsZCA9PT0gXCJmXCIpXG4gICAgICAgICAgICAgICAgdGguZGlzcGxheUdyYXZpdHlGaWVsZCh0aGlzLCB0cnVlKVxuICAgICAgICAgICAgZWxzZSBpZiAodGguc2hvd0ZpZWxkID09PSBcImlcIilcbiAgICAgICAgICAgICAgICB0aC5kaXNwbGF5R3Jhdml0eUZpZWxkKHRoaXMsIGZhbHNlKVxuXG5cbiAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzVHJhbnNmb3JtKClcblxuICAgICAgICAgICAgLy9kaXNwbGF5IHBsYW5ldHNcbiAgICAgICAgICAgIGZvciAobGV0IHAgb2YgdGgudW5pLnBzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvRHJhdyhwKSkgY29udGludWVcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcC5tIC8gdGgudW5pLm0oKTtcbiAgICAgICAgICAgICAgICBwLmRpc3BsYXkodGhpcywgXCJyZ2IoMjU1LDI1NSxcIiArIE1hdGguZmxvb3IoMjU1ICogKDEgLSB0KSkgKyBcIilcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9kaXNwbGF5IHBsYW5ldHMgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICBpZiAodGguc2hvd1BsYW5ldEFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHAgb2YgdGgudW5pLnBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50b0RyYXcocCkpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIHAuZGlzcGxheUFjY2VsZXJhdGlvbih0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0Q2FudmFzVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgIC8qL2xhYmVsXG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYigyMDAsMjAwLDIwMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxSZWN0KDAsIDAsIDY1LCAxMyk7XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIGMyLmZpbGxUZXh0KHRoLnVuaS5wcy5sZW5ndGggKyBcIiBwbGFuZXRzXCIsIDIsIDEwKTsqL1xuXG4gICAgICAgICAgICAvL2ZyYW1lXG4gICAgICAgICAgICBjMi5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIjtcbiAgICAgICAgICAgIGMyLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGMyLnJlY3QodGhpcy5nZW9Ub1BpeFgoMCksIHRoaXMuZ2VvVG9QaXhZKHRoaXMuaCksIHRoLncgLyB0aGlzLmdldFpmKCksIHRoLmggLyB0aGlzLmdldFpmKCkpO1xuICAgICAgICAgICAgYzIuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7VW5pdmVyc2V9ICovXG4gICAgICAgIHRoaXMudW5pID0gbmV3IFVuaXZlcnNlKHRoaXMudywgdGhpcy5oKVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtHZW9WaWV3ZXJ9IGNwIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZmllbGQgXG4gICAgICovXG4gICAgZGlzcGxheUdyYXZpdHlGaWVsZChjcCwgZmllbGQgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGMyID0gY3AuY3R4XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuZmllbGRSZXNcbiAgICAgICAgY29uc3QgZiA9IHRoaXMuZmllbGRGYWN0b3JcbiAgICAgICAgY29uc3QgZl8gPSBmaWVsZCA/IDAuMyAqIHJlcyA6IDAuNiAqIHJlcztcbiAgICAgICAgYzIuc3Ryb2tlU3R5bGUgPSB0aGlzLmZpZWxkU3Ryb2tlU3R5bGVcbiAgICAgICAgZm9yIChsZXQgeCA9IHJlcyAqIDAuNTsgeCA8IHRoaXMudzsgeCArPSByZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHhHID0gY3AucGl4VG9HZW9YKHgpO1xuICAgICAgICAgICAgaWYgKHhHID4gdGhpcy51bmkudyB8fCB4RyA8IDApIGNvbnRpbnVlXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gcmVzIC8gMjsgeSA8IHRoaXMuaDsgeSArPSByZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB5RyA9IGNwLnBpeFRvR2VvWSh5KTtcbiAgICAgICAgICAgICAgICBpZiAoeUcgPiB0aGlzLnVuaS5oIHx8IHlHIDwgMCkgY29udGludWVcbiAgICAgICAgICAgICAgICAvL2dldCBncmF2aXR5IGZpZWxkXG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IHRoaXMudW5pLmdldEdyYXZpdHlGaWVsZCh4RywgeUcsIHVuZGVmaW5lZCwgdGhpcy5leHBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ18gPSBNYXRoLmh5cG90KGcuZ3gsIGcuZ3kpXG5cbiAgICAgICAgICAgICAgICBjMi5saW5lV2lkdGggPSBNYXRoLm1pbihmICogZ18sIDAuMyAqIHJlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBmXyAqIGcuZ3ggLyBnXywgZHkgPSBmXyAqIGcuZ3kgLyBnX1xuXG4gICAgICAgICAgICAgICAgLy9kcmF3XG4gICAgICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZ3Jhdml0eSBmaWVsZFxuICAgICAgICAgICAgICAgICAgICBjMi5tb3ZlVG8oeCAtIGR4LCB5ICsgZHkpO1xuICAgICAgICAgICAgICAgICAgICBjMi5saW5lVG8oeCArIGR4LCB5IC0gZHkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaXNvcG90ZW50aWFsIGxpbmVzXG4gICAgICAgICAgICAgICAgICAgIGMyLm1vdmVUbyh4ICsgZHksIHkgKyBkeCk7XG4gICAgICAgICAgICAgICAgICAgIGMyLmxpbmVUbyh4IC0gZHksIHkgLSBkeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHdpdGggcmFuZG9tIHBsYW5ldHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgaW5pdFJhbmRvbShuYiA9IDEwMDAsIG1pID0gMC41LCBtaW5TcGVlZCA9IDAsIG1heFNwZWVkID0gMC4xKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIHRoaXMudW5pLmFkZFBsYW5ldHMobmIsIG1pLCBtaW5TcGVlZCwgbWF4U3BlZWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHdpdGggYmlnIGJhbmcgc2V0dXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcGVlZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4U3BlZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZCBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0QmlnQmFuZyhuYiA9IDEwMDAsIG1pID0gMSwgbWluU3BlZWQgPSAwLjM1LCBtYXhTcGVlZCA9IDAuNywgcmFkID0gMTAwKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPFBsYW5ldD59ICovXG4gICAgICAgIHRoaXMudW5pLnBzID0gW107XG4gICAgICAgIC8vY3JlYXRlIGJpZyBwbGFuZXQgaW4gdGhlIG1pZGRsZVxuICAgICAgICBjb25zdCBjeCA9IHRoaXMudyAqIDAuNSwgY3kgPSB0aGlzLmggKiAwLjU7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUGxhbmV0KHRoaXMudW5pLCBuYiAqIG1pLCBjeCwgY3ksIDAsIDApO1xuICAgICAgICAvL2V4cGxvZGUgaXRcbiAgICAgICAgdGhpcy51bmkuZXhwbG9kZShwLCBuYiwgbWluU3BlZWQsIG1heFNwZWVkLCByYWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHNpbXVsYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmJJdGVyYXRpb25zIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0YXJ0KHRpbWVTdGVwTXMgPSAxMCwgbmJJdGVyYXRpb25zID0gLTEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCB0ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC51bmkuc3RlcCh0LmJvdW5jZSwgdC5tYXhTcGVlZCwgdC5leHBvbmVudCwgdC5jb2xsaXNpb25GYWN0b3IsIHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3N0b3BcbiAgICBzdG9wKCkge1xuICAgICAgICAvL1RPRE9cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBcbiAqL1xuZXhwb3J0IGNvbnN0IHBsYW5ldHMgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUGxhbmV0U2ltdWxhdGlvbihvcHRzKVxufVxuIiwiLy9AdHMtY2hlY2tcbmltcG9ydCB7IExhbmQgfSBmcm9tIFwiLi9MYW5kXCJcbmltcG9ydCB7IEdlb1ZpZXdlciB9IGZyb20gXCIuLi9iYXNlL0dlb1ZpZXdlclwiXG5pbXBvcnQgeyBBZ2VudFBvaW50IH0gZnJvbSBcIi4uL2Jhc2UvQWdlbnRQb2ludFwiXG5cbi8qKiAqL1xuZXhwb3J0IGNsYXNzIEFuaW1hbCBleHRlbmRzIEFnZW50UG9pbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgXG4gICAgICogQHBhcmFtIHtMYW5kfSBsIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGwsIHggPSAwLCB5ID0gMCkge1xuXG4gICAgICAgIHN1cGVyKHgsIHkpXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIC8qKiBAdHlwZSB7TGFuZH0gKi9cbiAgICAgICAgdGhpcy5sID0gbDtcblxuICAgICAgICAvL3Bvc2l0aW9uXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnggPSB4IDwgMCA/IDAgOiB4ID4gbC53ID8gbC53IDogeFxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy55ID0geSA8IDAgPyAwIDogeSA+IGwuaCA/IGwuaCA6IHlcblxuICAgICAgICAvL3RoZSBvdGhlciBhbmltYWxzIGFyb3VuZFxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJleXMgPSBbXVxuXG4gICAgICAgIC8vYWRkIHRvIHRoZSBzcGF0aWFsIGluZGV4XG4gICAgICAgIGwuZ3JpZC5pbnNlcnQodGhpcyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHRpbWVTdGVwTXMgXG4gICAgICovXG4gICAgbW92ZSh0aW1lU3RlcE1zID0gMTApIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMubFxuICAgICAgICBsLmdyaWQucmVtb3ZlKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCByID0gMC4wMSAqIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgdGhpcy5zeCArPSByICogTWF0aC5jb3MoYW5nbGUpICogdGltZVN0ZXBNcztcbiAgICAgICAgdGhpcy5zeCA9IHRoaXMuc3ggPiBsLlZfTUFYID8gbC5WX01BWCA6IHRoaXMuc3ggPCAtbC5WX01BWCA/IC1sLlZfTUFYIDogdGhpcy5zeFxuXG4gICAgICAgIHRoaXMuc3kgKz0gciAqIE1hdGguc2luKGFuZ2xlKSAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMuc3kgPSB0aGlzLnN5ID4gbC5WX01BWCA/IGwuVl9NQVggOiB0aGlzLnN5IDwgLWwuVl9NQVggPyAtbC5WX01BWCA6IHRoaXMuc3lcblxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zeCAqIHRpbWVTdGVwTXM7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCA8IDAgPyBsLncgOiB0aGlzLnggPiBsLncgPyAwIDogdGhpcy54XG5cbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3kgKiB0aW1lU3RlcE1zO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPCAwID8gbC5oIDogdGhpcy55ID4gbC5oID8gMCA6IHRoaXMueVxuXG4gICAgICAgIGwuZ3JpZC5pbnNlcnQodGhpcyk7XG4gICAgfVxuXG5cbiAgICAvKiogT2JzZXJ2ZSAqL1xuICAgIG9ic2VydmUoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxcblxuICAgICAgICAvL2dldCBhbmltYWxzIGFyb3VuZFxuICAgICAgICBjb25zdCBhcyA9IGwuZ3JpZC5nZXQodGhpcy54IC0gbC5kLCB0aGlzLnkgLSBsLmQsIHRoaXMueCArIGwuZCwgdGhpcy55ICsgbC5kKTtcblxuICAgICAgICB0aGlzLnByZXlzID0gW107XG4gICAgICAgIHRoaXMucHJlZGF0b3JzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgYSBvZiBhcykge1xuICAgICAgICAgICAgaWYgKGEgPT0gdGhpcykgY29udGludWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kKGEpID4gbC5kKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT0gMClcbiAgICAgICAgICAgICAgICB0aGlzLnByZXlzLnB1c2goYSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVkYXRvcnMucHVzaChhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAcmV0dXJucyB7QW5pbWFsfSAqL1xuICAgIG1ha2VDaGlsZCgpIHtcbiAgICAgICAgLy9kbyBiZXR0ZXI6IG1ha2UgY2hpbGQgYXJvdW5kXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWFsKHRoaXMudHlwZSwgdGhpcy5sLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYW5pbWFsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHZW9WaWV3ZXJ9IGNwIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxsU3R5bGUgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgXG4gICAgICovXG4gICAgZGlzcGxheShjcCwgZmlsbFN0eWxlID0gXCJibHVlXCIsIHNpemUgPSAyKSB7XG4gICAgICAgIGNvbnN0IHMgPSBzaXplIC8gY3AuZ2V0WmYoKVxuICAgICAgICBjcC5jdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjcC5jdHguZmlsbFJlY3QoY3AuZ2VvVG9QaXhYKHRoaXMueCksIGNwLmdlb1RvUGl4WSh0aGlzLnkpLCBzLCBzKTtcbiAgICAgICAgLypjMi5iZWdpblBhdGgoKTtcbiAgICAgICAgYzIuYXJjKGEueCwgYS55LCAwLjUsIDAsIDIqTWF0aC5QSSk7XG4gICAgICAgIGMyLmNsb3NlUGF0aCgpO1xuICAgICAgICBjMi5maWxsKCk7Ki9cbiAgICB9XG5cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBTcGF0aWFsSW5kZXggfSBmcm9tICcuLi9iYXNlL1NwYXRpYWxJbmRleCc7XG5pbXBvcnQgeyByZW1vdmVGcm9tQXJyYXlTIH0gZnJvbSAnLi4vYmFzZS9saWInO1xuaW1wb3J0IHtBbmltYWx9IGZyb20gXCIuL0FuaW1hbFwiXG5cbmV4cG9ydCBjbGFzcyBMYW5kIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3IFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHcsIGgpIHtcblxuICAgICAgICAvL3RoZSBtYXggc3BlZWRcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuVl9NQVggPSAwLjFcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5wID0gMC4wMiAvL3ByZWRhdG9yIGRlYXRoIHByb2JhYmlsaXR5XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLnEgPSAwLjEgLy9wcmV5IHJlcHJvZHVjdGlvbiBwcm9iYWJpbGl0eVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5yID0gMC41IC8vZWF0ZW4gcHJleSB0cmFuc2Zvcm1hdGlvbiBwcm9iYWJpbGl0eVxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5uYiA9IDMgLy9uZWlnaGJvcnMgbnVtYmVyXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMudyA9IHdcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IGhcblxuICAgICAgICAvKiogQHR5cGUge0FycmF5LjxBbmltYWw+fSAqL1xuICAgICAgICB0aGlzLnByZWRhdG9ycyA9IFtdXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPEFuaW1hbD59ICovXG4gICAgICAgIHRoaXMucHJleXMgPSBbXVxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLmQgPSAxMFxuICAgICAgICAvKiogQHR5cGUge1NwYXRpYWxJbmRleC48QW5pbWFsPn0gKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IFNwYXRpYWxJbmRleCgpO1xuXG4gICAgICAgIC8qaW50W11bXSBoaXN0bztcbiAgICAgICAgaW50IGluZGV4PTA7XG4gICAgICAgIHRoaXMuYzJDaGFydD1jMkNoYXJ0O1xuICAgICAgICB0aGlzLmhDaGFydD1oQ2hhcnQ7XG4gICAgICAgIHRoaXMuaGlzdG89bmV3IGludFt3Q2hhcnRdW107XG4gICAgICAgIGZvcihpbnQgaT0wO2k8d0NoYXJ0O2krKylcbiAgICAgICAgICAgIGhpc3RvW2ldPW5ldyBpbnRbXXswLDB9OyovXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0ZXBNcyBcbiAgICAgKi9cbiAgICBzdGVwKHRpbWVTdGVwTXMgPSAxMCkge1xuXG4gICAgICAgIC8vb2JzZXJ2ZVxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJleXMpIGEub2JzZXJ2ZSgpO1xuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMucHJlZGF0b3JzKSBhLm9ic2VydmUoKTtcblxuICAgICAgICBjb25zdCBwcmV5c1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZXlzVG9EaWUgPSBbXVxuICAgICAgICBjb25zdCBwcmVkc1RvQm9ybiA9IFtdXG4gICAgICAgIGNvbnN0IHByZWRzVG9EaWUgPSBbXVxuXG4gICAgICAgIC8vcHJleVxuICAgICAgICBmb3IgKGxldCBwcmV5IG9mIHRoaXMucHJleXMpIHtcbiAgICAgICAgICAgIC8vcmVwcm9kdWN0aW9uIGlmIG5vIHByZWRhdG9yIGFyb3VuZFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiB0aGlzLnEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHByZXkucHJlZGF0b3JzLmxlbmd0aCAhPSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwcmV5LnByZXlzLmxlbmd0aCA+PSB0aGlzLm5iKSBjb250aW51ZTtcbiAgICAgICAgICAgIHByZXlzVG9Cb3JuLnB1c2gocHJleS5tYWtlQ2hpbGQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3ByZWRhdG9yXG4gICAgICAgIGZvciAobGV0IHByZWQgb2YgdGhpcy5wcmVkYXRvcnMpIHtcbiAgICAgICAgICAgIC8vbm8gcHJleSBhcm91bmQ6IHByZWRhdG9yIGRpZXMgd2l0aCBwcm9iYWJpbGl0eSBwXG4gICAgICAgICAgICBpZiAocHJlZC5wcmV5cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgdGhpcy5wKSBwcmVkc1RvRGllLnB1c2gocHJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3ByZXkgYXJvdW5kXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2VhdCBwcmV5XG4gICAgICAgICAgICAgICAgLy9jaG9vc2UgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV5VG9FYXQgPSBwcmVkLnByZXlzW01hdGguZmxvb3IocHJlZC5wcmV5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgICAgICAgICAgcHJleXNUb0RpZS5wdXNoKHByZXlUb0VhdCk7XG5cbiAgICAgICAgICAgICAgICAvL3ByZWRhdG9yIHJlcHJvZHVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy5yKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZC5wcmVkYXRvcnMubGVuZ3RoID49IHRoaXMubmIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHByZWRzVG9Cb3JuLnB1c2gocHJlZC5tYWtlQ2hpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXlzLnB1c2goLi4ucHJleXNUb0Jvcm4pO1xuICAgICAgICB0aGlzLnByZWRhdG9ycy5wdXNoKC4uLnByZWRzVG9Cb3JuKTtcblxuICAgICAgICByZW1vdmVGcm9tQXJyYXlTKHRoaXMucHJleXMsIHByZXlzVG9EaWUsIGZhbHNlKVxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZXlzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSk7XG4gICAgICAgIHJlbW92ZUZyb21BcnJheVModGhpcy5wcmVkYXRvcnMsIHByZWRzVG9EaWUsIGZhbHNlKVxuICAgICAgICBmb3IgKGxldCBhIG9mIHByZWRzVG9EaWUpIHRoaXMuZ3JpZC5yZW1vdmUoYSk7XG5cbiAgICAgICAgLy9tb3ZlXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5wcmV5cylcbiAgICAgICAgICAgIGEubW92ZSh0aW1lU3RlcE1zKTtcbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLnByZWRhdG9ycylcbiAgICAgICAgICAgIGEubW92ZSh0aW1lU3RlcE1zKTtcblxuICAgICAgICAvKi9oaXN0b1xuICAgICAgICBoaXN0b1tpbmRleF0gPSBuZXcgaW50W117IHByZXlzLnNpemUoKSwgcHJlZGF0b3JzLnNpemUoKSB9O1xuICAgICAgICBpZiAoaW5kZXggPT0gaGlzdG8ubGVuZ3RoIC0gMSkgaW5kZXggPSAwO1xuICAgICAgICBlbHNlIGluZGV4Kys7Ki9cblxuICAgIH1cbn1cbiIsIi8vQHRzLWNoZWNrXG5pbXBvcnQgeyBMYW5kIH0gZnJvbSAnLi9MYW5kJztcbmltcG9ydCB7IEFuaW1hbCB9IGZyb20gJy4vQW5pbWFsJztcbmltcG9ydCB7IEdlb1ZpZXdlciB9IGZyb20gJy4uL2Jhc2UvR2VvVmlld2VyJztcblxuLyoqICovXG5jbGFzcyBQcmV5UHJlZGF0b3JTaW11bGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgb3B0cy5jYW52YXNJZCA9IG9wdHMuY2FudmFzSWQgfHwgXCJ2YWNhbnZhc1wiO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmNhbnZhc0lkKTtcblxuICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgdGhpcy53ID0gb3B0cy53IHx8IGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgIHRoaXMuaCA9IG9wdHMuaCB8fCBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7R2VvVmlld2VyfSAqL1xuICAgICAgICB0aGlzLmNwbHVzID0gbmV3IEdlb1ZpZXdlcigpO1xuICAgICAgICB0aGlzLmNwbHVzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3BsdXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcblxuXG4gICAgICAgIGNvbnN0IHRoID0gdGhpcztcbiAgICAgICAgdGhpcy5jcGx1cy5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IHRoaXMuY3R4XG5cbiAgICAgICAgICAgIC8vdHJhbnNwYXJlbmN5XG4gICAgICAgICAgICBjMi5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiO1xuICAgICAgICAgICAgYzIuZmlsbFJlY3QoMCwgMCwgdGgudywgdGguaCk7XG5cbiAgICAgICAgICAgIC8vZGlzcGxheSBhbmltYWxzXG4gICAgICAgICAgICBmb3IgKGxldCBhIG9mIHRoLmxhbmQucHJleXMpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9EcmF3KGEpKVxuICAgICAgICAgICAgICAgICAgICBhLmRpc3BsYXkodGhpcywgXCJibHVlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0aC5sYW5kLnByZWRhdG9ycylcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b0RyYXcoYSkpXG4gICAgICAgICAgICAgICAgICAgIGEuZGlzcGxheSh0aGlzLCBcInJlZFwiKTtcblxuICAgICAgICAgICAgLyovbGFiZWxcbiAgICAgICAgICAgIGMyLmZpbGxTdHlsZSA9IFwibGlnaHRncmF5XCI7XG4gICAgICAgICAgICBjMi5maWxsUmVjdCgwLCAwLCA2NSwgMTMpO1xuICAgICAgICAgICAgYzIuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgYzIuZmlsbFRleHQocHJleXMubGVuZ3RoICsgXCIvXCIgKyBwcmVkYXRvcnMubGVuZ3RoLCAyLCAxMCk7Ki9cblxuICAgICAgICAgICAgLy9jaGFydFxuICAgICAgICAgICAgLy9jMkNoYXJ0LnNldEZpbGxTdHlsZShiYWNrQ29sb3IyKTtcbiAgICAgICAgICAgIC8vYzJDaGFydC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgICAgICAgICAgLy9kb3VibGUgbWF4ID0gZ2V0TWF4SGlzdG8oKTtcbiAgICAgICAgICAgIC8qcHVibGljIGludCBnZXRNYXhIaXN0bygpIHtcbiAgICAgICAgICAgICAgICBpbnQgbWF4PTA7XG4gICAgICAgICAgICAgICAgZm9yKGludCBpPTA7aTxoaXN0by5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGlzdG9baV1bMF0+bWF4KSBtYXg9aGlzdG9baV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpc3RvW2ldWzFdPm1heCkgbWF4PWhpc3RvW2ldWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG91YmxlIGgxLCBoMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGhpc3RvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxID0gaENoYXJ0ICogaGlzdG9baV1bMF0gLyBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyID0gaENoYXJ0ICogaGlzdG9baV1bMV0gLyBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKHByZXlDb2xvcjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMkNoYXJ0LmZpbGxSZWN0KGksIGhDaGFydCAtIGgxLCAxLCBoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKHByZWRhdG9yQ29sb3IyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpLCBoQ2hhcnQgLSBoMiwgMSwgaDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGMyQ2hhcnQuc2V0RmlsbFN0eWxlKENzc0NvbG9yLm1ha2UoMjU1LCAyNTUsIDI1NSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYzJDaGFydC5maWxsUmVjdChpbmRleCwgMCwgMSwgaENoYXJ0KTtcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vZnJhbWVcbiAgICAgICAgICAgIGMyLnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiO1xuICAgICAgICAgICAgYzIuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjMi5yZWN0KHRoaXMuZ2VvVG9QaXhYKDApLCB0aGlzLmdlb1RvUGl4WSh0aGlzLmgpLCB0aC53IC8gdGhpcy5nZXRaZigpLCB0aC5oIC8gdGhpcy5nZXRaZigpKTtcbiAgICAgICAgICAgIGMyLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLyoqIEB0eXBlIHtMYW5kfSAqL1xuICAgICAgICB0aGlzLmxhbmQgPSBuZXcgTGFuZCh0aGlzLncsIHRoaXMuaClcblxuICAgIH1cblxuXG5cbiAgICAvL1RPRE8gdGVzdCBpbml0IGluIGEgYnViYmxlID9cbiAgICAvL1RPRE8gdXNlIGRlbnNpdHkgYXMgaW5wdXQgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIG5iXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJleURlbnNpdHkgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByZWRhdG9yRGVuc2l0eSBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBpbml0UmFuZG9tKHByZXlEZW5zaXR5ID0gMC4wMDMsIHByZWRhdG9yRGVuc2l0eSA9IDAuMDAzKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmxhbmRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV5RGVuc2l0eSAqIGwudyAqIGwuaDsgaSsrKVxuICAgICAgICAgICAgbC5wcmV5cy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMCwgbCwgbC53ICogTWF0aC5yYW5kb20oKSwgbC5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZGF0b3JEZW5zaXR5ICogbC53ICogbC5oOyBpKyspXG4gICAgICAgICAgICBsLnByZWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBBbmltYWwoMSwgbCwgbC53ICogTWF0aC5yYW5kb20oKSwgbC5oICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGVwTXMgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5iSXRlcmF0aW9ucyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGFydCh0aW1lU3RlcE1zID0gMTAsIG5iSXRlcmF0aW9ucyA9IC0xKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQubGFuZC5zdGVwKHRpbWVTdGVwTXMpO1xuICAgICAgICAgICAgdC5jcGx1cy5yZWRyYXcoKTtcbiAgICAgICAgICAgIGlmIChuYkl0ZXJhdGlvbnMgPiAwICYmIGkrKyA+IG5iSXRlcmF0aW9ucylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVuZ2luZSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIGVuZ2luZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFxuICovXG5leHBvcnQgY29uc3QgcHJleVByZWRhdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFByZXlQcmVkYXRvclNpbXVsYXRpb24ob3B0cylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=