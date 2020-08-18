function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutPageAboutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pageContent\">\n<img class=\"profileImage\" src=\"./assets/images/profile.jpg\" alt=\"../../assets/images/profile.jpg\">\n<div class=\"aboutText\">\n    <p style=\"font-size: 20px; margin: 0px;\">\nMy name is Amy Rouse. I am in my third year of studying Interior Design, Decoration and Styling at Plymouth College of Art. \nThe majority of my projects are focused around wellbeing and mental health in design as these are both aspects of Interior design that fascinate me. \nAs you can see on the projects page of this site I like to use 3d modelling and photoshop renders to make my designs fully realised however I also like to make physical items such as concrete plant pots and laser cut coasters.\n</p>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content2\" >\n    <img style=\"width:1000px\" src=\"/assets/images/plymouth-hoe-view-2800x1440.jpg\" alt=\"../../assets/images/plymouth-hoe-view-2800x1440.jpg\">\n    <div class=\"aboutText\">\n    <p style=\"font-size: 20px; margin: 10px;\">\n    Email:   &nbsp; ar.designs1005@gmail.com\n    </p>\n    <p style=\"font-size: 20px; margin: 10px;\">\n    <!-- Instagram: <a href=\"https://www.instagram.com/amyrouse_designs/\">amyrouse_designs</a> -->\n    Instagram:  &nbsp;  amyrouse_designs\n    </p>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mainPage\">\n<!-- <div class=\"imageCont\" (click)=\"make the yellow background move to the right and serve as a background for text in a modal\">\n    <img class=\"homeImage\" src=\"../../assets/images/final2.png\">\n</div> -->\n<!-- <div class=\"imageCont\" (click)=\"enlarge()\">\n    <img class=\"homeImage\" src=\"../../assets/images/final2.png\">\n</div>\n<div class=\"imageCont\">\n    <img class=\"homeImage\" src=\"../../assets/images/IMG_9167 copy.jpg\">\n</div>\n<div class=\"imageCont\">\n    <img class=\"homeImage\" src=\"../../assets/images/61031261_293797678239116_6914847181341982720_n (1).png\">\n</div>\n<div class=\"imageCont\">\n    <img class=\"homeImage\" src=\"../../assets/images/unta4itdled.png\">\n</div> -->\n<div *ngFor=\"let item of content\">\n    <div #homeItem *ngIf=\"item.enlarged || !itemEnlarged\" [@home]=\"item.enlarged ? 'enlarged': ''\" [ngClass]=\"{'enlarged': item.enlarged}\" (click)=\"enlarge(item)\" class=\"imageCont\">\n        <div class=\"mainContainer\">\n        <img class=\"homeImage\" src=\"{{item.link}}\" alt=\"{{item.altLink}}\">\n        <div *ngIf=\"item.enlarged\" class=\"textCont\">\n        <h1>{{item.title}}</h1>\n        <p>{{item.text}}</p>\n        </div>\n        </div>\n        <!-- <div class=\"showOnhover\">\n            <p>Hello</p>\n            <button>VIEW</button>\n        </div> -->\n        <div class=\"subContainer\" *ngIf=\"item.enlarged\" >\n        <div *ngFor=\"let subItem of item.content\">\n            <img class=\"subImage\" src=\"{{subItem.link}}\" alt=\"{{subItem.altLink}}\">\n        </div>\n        </div>\n    </div> \n</div>\n</div>\n<!-- <app-landing-page></app-landing-page> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div @test *ngIf=\"loaded\" class=\"container\" (click)=\"nextpage()\">\n    <div class=\"ere\">\n        <img class=\"LandingLogo\" src=\"./assets/images/107600179_751264419009341_7421634069324728299_n.png\" alt=\"../../assets/images/107600179_751264419009341_7421634069324728299_n.png\">\n    <!-- <button class=\"draw\">Draw</button> -->\n    </div>\n</div>\n<p *ngIf=\"loaded\" style=\" width: 100px;border: 2px #ffafaf solid; padding: 10px; text-align: center;\" class=\"center\" (click)=\"nextpage()\">\n    Enter\n</p>\n<div @test *ngIf=\"content\" class=\"content\" >\n    <img style=\"width:1000px\" src=\"/assets/images/plymouth-hoe-view-2800x1440.jpg\" alt=\"../../assets/images/plymouth-hoe-view-2800x1440.jpg\">\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div @bar *ngIf=\"landingService.logo\" class=\"BarContainer\">\n<img class=\"logo\" src=\"./assets/images/107600179_751264419009341_7421634069324728299_n.png\" alt=\"../../assets/images/107600179_751264419009341_7421634069324728299_n.png\">\n<div class=\"navcontainer\">\n    <p [ngClass]=\"{'active': selectedmenu == 'Home'}\" [routerLink]=\"['/']\"> Home </p>\n    <p [ngClass]=\"{'active': selectedmenu == 'Projects'}\" [routerLink]=\"['/projects']\"> Projects </p>\n    <p [ngClass]=\"{'active': selectedmenu == 'About'}\" [routerLink]=\"['/about']\"> About </p>\n    <p [ngClass]=\"{'active': selectedmenu == 'Contact'}\" [routerLink]=\"['/contact']\"> Contact </p>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/about-page/about-page.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/about-page/about-page.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutPageAboutPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profileImage {\n  height: 80vh;\n}\n\n.aboutText {\n  width: 500px;\n  border: 2px #ffafaf solid;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9DOlxcVXNlcnNcXE5vZ2RvXFxEZXNrdG9wXFxhbXktYXBwICgxKS9zcmNcXGFwcFxcYWJvdXQtcGFnZVxcYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZXtcclxuICAgIGhlaWdodDogODB2aFxyXG59XHJcbi5hYm91dFRleHR7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDJweCAjZmZhZmFmIHNvbGlkO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufSIsIi5wcm9maWxlSW1hZ2Uge1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbi5hYm91dFRleHQge1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMnB4ICNmZmFmYWYgc29saWQ7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about-page/about-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/about-page/about-page.component.ts ***!
    \****************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _landing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../landing.service */
    "./src/app/landing.service.ts");

    var AboutPageComponent = /*#__PURE__*/function () {
      function AboutPageComponent(landingService) {
        _classCallCheck(this, AboutPageComponent);

        this.landingService = landingService;
        this.content = [{
          link: '../../assets/images/final2.png',
          enlarged: false
        }, {
          link: '../../assets/images/IMG_9167 copy.jpg',
          enlarged: false
        }, {
          link: '../../assets/images/61031261_293797678239116_6914847181341982720_n (1).png',
          enlarged: false
        }, {
          link: '../../assets/images/unta4itdled.png',
          enlarged: false
        }];
      }

      _createClass(AboutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.landingService.showLogo();
          this.landingService.updateLocation('About');
          setTimeout(function () {
            console.log(_this.homeItems);
          }, 3000);
        }
      }, {
        key: "enlarge",
        value: function enlarge(item) {
          item.enlarged = !item.enlarged;
        }
      }]);

      return AboutPageComponent;
    }();

    AboutPageComponent.ctorParameters = function () {
      return [{
        type: _landing_service__WEBPACK_IMPORTED_MODULE_3__["LandingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('homeItem')], AboutPageComponent.prototype, "homeItems", void 0);
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('home', [// ...
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('enlarged', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        width: '90vw',
        height: '90vh'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => enlarged', [// style({width : '*'}),
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('enlarged => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease')])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-page.component.scss */
      "./src/app/about-page/about-page.component.scss"))["default"]]
    })], AboutPageComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-page/about-page.component */
    "./src/app/about-page/about-page.component.ts");
    /* harmony import */


    var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-page/contact-page.component */
    "./src/app/contact-page/contact-page.component.ts");

    var routes = [{
      path: '',
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }, {
      path: 'projects',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    }, {
      path: 'about',
      component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"]
    }, {
      path: 'contact',
      component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AR-Designs';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about-page/about-page.component */
    "./src/app/about-page/about-page.component.ts");
    /* harmony import */


    var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact-page/contact-page.component */
    "./src/app/contact-page/contact-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactPageContactPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content2 {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.aboutText {\n  width: 500px;\n  border: 2px #ffafaf solid;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL0M6XFxVc2Vyc1xcTm9nZG9cXERlc2t0b3BcXGFteS1hcHAgKDEpL3NyY1xcYXBwXFxjb250YWN0LXBhZ2VcXGNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudDJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWJvdXRUZXh0e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggI2ZmYWZhZiBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn0iLCIuY29udGVudDIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXRUZXh0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDJweCAjZmZhZmFmIHNvbGlkO1xuICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../landing.service */
    "./src/app/landing.service.ts");

    var ContactPageComponent = /*#__PURE__*/function () {
      function ContactPageComponent(landingService) {
        _classCallCheck(this, ContactPageComponent);

        this.landingService = landingService;
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.landingService.showLogo();
          this.landingService.updateLocation('Contact');
        }
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent.ctorParameters = function () {
      return [{
        type: _landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"]
      }];
    };

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.scss */
      "./src/app/contact-page/contact-page.component.scss"))["default"]]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/home-page/home-page.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _landing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../landing.service */
    "./src/app/landing.service.ts");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(landingService) {
        _classCallCheck(this, HomePageComponent);

        this.landingService = landingService;
        this.itemEnlarged = false;
        this.content = [{
          link: './assets/images/final2.png',
          altLink: '../../assets/images/final2.png',
          title: 'Cargo Retail Space',
          text: 'The focus for this project was to design a retail space for a range of artisan designers in a cargo container in Bristol. The design centred around visual merchandising and wellness in design, ensuring to keep an equal balance of a selection of products from the brands whilst, overall managing a calm space for buyers with a valuable function for a community of designers. My final design has a minimalistic style with pale tones to compliment the products. Within this project I also explored logo design and how to implement branding into a space. I carried out a lot of market research for this project and learnt a lot about my local artisan designers.',
          enlarged: false,
          content: [{
            link: './assets/images/CargoContainerRetailsSpace/final1.png',
            altLink: '../../assets/images/CargoContainerRetailsSpace/final1.png',
            text: 'CONTENT FOR FINAL 1'
          }, {
            link: './assets/images/CargoContainerRetailsSpace/final3.png',
            altLink: '../../assets/images/CargoContainerRetailsSpace/final3.png',
            text: 'CONTENT FOR FINAL 3'
          }, {
            link: './assets/images/CargoContainerRetailsSpace/final4.png',
            altLink: '../../assets/images/CargoContainerRetailsSpace/final4.png',
            text: 'CONTENT FOR FINAL 4'
          }, {
            link: './assets/images/CargoContainerRetailsSpace/final5.png',
            altLink: '../../assets/images/CargoContainerRetailsSpace/final5.png',
            text: 'CONTENT FOR FINAL 5'
          }]
        }, {
          link: './assets/images/IMG_9167 copy.jpg',
          altLink: '../../assets/images/IMG_9167 copy.jpg',
          title: 'Sustainable Styling',
          text: 'This was a group styling project, choosing our own trend to create our individual magazines. I created a magazine spread that showcased my styled images and focused on promoting a sustainable lifestyle. This styling project allowed me to combine my interest in interiors and photography, playing around with different lighting and editing to make all the images fit together cohesively in the final magazine. ',
          enlarged: false,
          content: [{
            link: './assets/images/SustainableStylingForMagazine/IMG_9173 copy.jpg',
            altLink: '../../assets/images/SustainableStylingForMagazine/IMG_9173 copy.jpg',
            text: 'CONTENT FOR FINAL 1'
          }, {
            link: './assets/images/SustainableStylingForMagazine/55464974_335461307174937_6684669318329794560_n.jpg',
            altLink: '../../assets/images/SustainableStylingForMagazine/55464974_335461307174937_6684669318329794560_n.jpg',
            text: 'CONTENT FOR FINAL 3'
          }, {
            link: './assets/images/SustainableStylingForMagazine/_MG_1594 copy.jpg',
            altLink: '../../assets/images/SustainableStylingForMagazine/_MG_1594 copy.jpg',
            text: 'CONTENT FOR FINAL 4'
          }, {
            link: './assets/images/SustainableStylingForMagazine/Screenshot 2019-03-20 at 11.12.00.png',
            altLink: '../../assets/images/SustainableStylingForMagazine/Screenshot 2019-03-20 at 11.12.00.png',
            text: 'CONTENT FOR FINAL 5'
          }]
        }, {
          link: './assets/images/61031261_293797678239116_6914847181341982720_n (1).png',
          altLink: '../../assets/images/61031261_293797678239116_6914847181341982720_n (1).png',
          title: 'Japanese Serviced Apartment',
          text: 'This is a project where I re-designed a serviced apartment in Japan that is intended for business executives, bringing in traditional and modern Japanese design style elements. This design brings in natural elements and trending colours to create a space that is relaxing for the working traveller as well as uplifting at the end of a long day. As a part of this project I created styled images for a welcome brochure. To go along side my apartment design I created my own laser cut products. I designed them in illustrator inspired by Japanese patterns such as the blossom tree.',
          enlarged: false,
          content: [{
            link: './assets/images/JapaneseServicedAppartment/61031261_293797678239116_6914847181341982720_n (1).png',
            altLink: '../../assets/images/JapaneseServicedAppartment/61031261_293797678239116_6914847181341982720_n (1).png',
            text: 'CONTENT FOR FINAL 1'
          }, {
            link: './assets/images/JapaneseServicedAppartment/61162955_432506604247337_5029785519731507200_n.png',
            altLink: '../../assets/images/JapaneseServicedAppartment/61162955_432506604247337_5029785519731507200_n.png',
            text: 'CONTENT FOR FINAL 3'
          }, {
            link: './assets/images/JapaneseServicedAppartment/60842139_1400813623393276_2678768650088873984_n.png',
            altLink: '../../assets/images/JapaneseServicedAppartment/60842139_1400813623393276_2678768650088873984_n.png',
            text: 'CONTENT FOR FINAL 4'
          }, {
            link: './assets/images/JapaneseServicedAppartment/IMG_9332 copy 2.JPG',
            altLink: '../../assets/images/JapaneseServicedAppartment/IMG_9332 copy 2.JPG',
            text: 'CONTENT FOR FINAL 5'
          }]
        }, {
          link: './assets/images/HarringtonHomesShowHome/Amy Rouse, 201- bedroom render.png',
          altLink: '../../assets/images/HarringtonHomesShowHome/Amy Rouse, 201- bedroom render.png',
          title: 'Harrington Homes',
          text: 'This was a live brief with Harrington Homes show home in Plymouth where I designed a concept for their new apartments in my second year of my degree. This space is designed for a young, working professional couple therefore it includes contemporary colours and furniture to compel to this market of people. ',
          enlarged: false,
          content: [{
            link: './assets/images/HarringtonHomesShowHome/53726541_292266188135838_6436163889267736576_n.jpg',
            altLink: '../../assets/images/HarringtonHomesShowHome/53726541_292266188135838_6436163889267736576_n.jpg',
            text: 'CONTENT FOR FINAL 1'
          }, {
            link: './assets/images/HarringtonHomesShowHome/Screenshot 2019-03-13 at 18.42.44.png',
            altLink: '../../assets/images/HarringtonHomesShowHome/Screenshot 2019-03-13 at 18.42.44.png',
            text: 'CONTENT FOR FINAL 3'
          }, {
            link: './assets/images/HarringtonHomesShowHome/53797687_263535004576678_78043502843265024_n.jpg',
            altLink: '../../assets/images/HarringtonHomesShowHome/53797687_263535004576678_78043502843265024_n.jpg',
            text: 'CONTENT FOR FINAL 4'
          }, {
            link: './assets/images/HarringtonHomesShowHome/living room render 2.png',
            altLink: '../../assets/images/HarringtonHomesShowHome/living room render 2.png',
            text: 'CONTENT FOR FINAL 5'
          }]
        }, {
          link: './assets/images/Photography/IMG_7302.jpg',
          altLink: '../../assets/images/Photography/IMG_7302.jpg',
          title: 'Photography',
          text: 'Studying photography at A-level really fostered my eye for aesthetic and composition and continues to be used in my interior design work through styling and design communication. These showcase my final year projects where I explored a range of subjects and photographic styles such as natural/urban landscapes then everyday objects.',
          enlarged: false,
          content: [{
            link: './assets/images/Photography/IMG_7302.jpg',
            altLink: '../../assets/images/Photography/IMG_7302.jpg',
            text: 'CONTENT FOR FINAL 1'
          }, {
            link: './assets/images/HarringtonHomesShowHome/Screenshot 2019-03-13 at 18.42.44.png',
            altLink: '../../assets/images/HarringtonHomesShowHome/Screenshot 2019-03-13 at 18.42.44.png',
            text: 'CONTENT FOR FINAL 3'
          }, {
            link: './assets/images/HarringtonHomesShowHome/53797687_263535004576678_78043502843265024_n.jpg',
            altLink: '../../assets/images/HarringtonHomesShowHome/53797687_263535004576678_78043502843265024_n.jpg',
            text: 'CONTENT FOR FINAL 4'
          }, {
            link: './assets/images/HarringtonHomesShowHome/living room render 2.png',
            altLink: '../../assets/images/HarringtonHomesShowHome/living room render 2.png',
            text: 'CONTENT FOR FINAL 5'
          }]
        }];
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.landingService.updateLocation('Projects');
          this.landingService.showLogo();
          setTimeout(function () {
            console.log(_this2.homeItems);
          }, 3000);
        }
      }, {
        key: "enlarge",
        value: function enlarge(item) {
          item.enlarged = !item.enlarged;

          if (item.enlarged === true) {
            this.itemEnlarged = true;
          } else {
            this.itemEnlarged = false;
          }
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _landing_service__WEBPACK_IMPORTED_MODULE_3__["LandingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('homeItem')], HomePageComponent.prototype, "homeItems", void 0);
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('home', [// ...
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('enlarged', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        width: '90vw',
        height: '90vh'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        marginBottom: '-50vh'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: '1',
        marginBottom: '*'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => enlarged', [// style({width : '*'}),
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('enlarged => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease')])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/home-page/home-page.component.scss"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingPageLandingPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _landing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../landing.service */
    "./src/app/landing.service.ts");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(landingService) {
        _classCallCheck(this, LandingPageComponent);

        this.landingService = landingService;
        this.loaded = false;
        this.content = false;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.landingService.updateLocation('Home');
          setTimeout(function () {
            _this3.loaded = true;
          }, 100);
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          var _this4 = this;

          this.loaded = false;
          this.landingService.showLogo();
          setTimeout(function () {
            _this4.content = true;
          }, 1000);
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ctorParameters = function () {
      return [{
        type: _landing_service__WEBPACK_IMPORTED_MODULE_3__["LandingService"]
      }];
    };

    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('test', [// ...
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        marginBottom: '-50vh'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: '1',
        marginBottom: '*'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '-50vw',
        marginTop: '-50vh',
        transform: "scale(0.3)",
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-page.component.scss */
      "./src/app/landing-page/landing-page.component.scss"))["default"]]
    })], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/landing.service.ts":
  /*!************************************!*\
    !*** ./src/app/landing.service.ts ***!
    \************************************/

  /*! exports provided: LandingService */

  /***/
  function srcAppLandingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingService", function () {
      return LandingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LandingService = /*#__PURE__*/function () {
      function LandingService() {
        _classCallCheck(this, LandingService);

        this.logo = false;
        this.position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentPos = this.position.asObservable();
      }

      _createClass(LandingService, [{
        key: "showLogo",
        value: function showLogo() {
          this.logo = true;
        }
      }, {
        key: "updateLocation",
        value: function updateLocation(location) {
          this.position.next(location);
        }
      }]);

      return LandingService;
    }();

    LandingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LandingService);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navcontainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 23vw;\n}\n\np {\n  margin: 0px;\n  color: #b4ccc1;\n  font-size: 30px;\n}\n\n.BarContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navcontainer p {\n  padding: 0 15px;\n  line-height: 64px;\n  color: #b4ccc1;\n  display: block;\n  position: relative;\n  transition: all 0.3s ease-in;\n}\n\n/* .nav-container ul li > a:hover{\n  color: white;\n  transition: all 0.3s ease-in;\n} */\n\n.navcontainer p:hover,\n.navcontainer p.active {\n  /* background: rgba(197, 199, 200); */\n  color: #A4B7E3;\n  transition: all 0.3s ease-in;\n}\n\n.navcontainer p:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #A4B7E3;\n  transition: all 0.3s ease-in;\n}\n\n.navcontainer p.active:after,\n.navcontainer p:hover:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #A4B7E3;\n  transition: all 0.3s ease-in;\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcTm9nZG9cXERlc2t0b3BcXGFteS1hcHAgKDEpL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0lKOztBREZFOzs7R0FBQTs7QUFJQTs7RUFFRSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ01KOztBREpFOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDT04iLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjN2dztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2I0Y2NjMTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uQmFyQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5hdmNvbnRhaW5lciBwe1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgICBjb2xvcjogI2I0Y2NjMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB9XHJcbiAgLyogLm5hdi1jb250YWluZXIgdWwgbGkgPiBhOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB9ICovXHJcbiAgLm5hdmNvbnRhaW5lciBwOmhvdmVyLFxyXG4gIC5uYXZjb250YWluZXIgcC5hY3RpdmV7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk5LCAyMDApOyAqL1xyXG4gICAgY29sb3I6ICNBNEI3RTM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIH1cclxuICAubmF2Y29udGFpbmVyIHA6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTRCN0UzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB9XHJcbiAgLm5hdmNvbnRhaW5lciBwLmFjdGl2ZTphZnRlcixcclxuICAubmF2Y29udGFpbmVyIHA6aG92ZXI6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNBNEI3RTM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gIH0iLCIubmF2Y29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIzdnc7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNiNGNjYzE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLkJhckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmNvbnRhaW5lciBwIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgY29sb3I6ICNiNGNjYzE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG59XG5cbi8qIC5uYXYtY29udGFpbmVyIHVsIGxpID4gYTpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufSAqL1xuLm5hdmNvbnRhaW5lciBwOmhvdmVyLFxuLm5hdmNvbnRhaW5lciBwLmFjdGl2ZSB7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTksIDIwMCk7ICovXG4gIGNvbG9yOiAjQTRCN0UzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuXG4ubmF2Y29udGFpbmVyIHA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjQTRCN0UzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuXG4ubmF2Y29udGFpbmVyIHAuYWN0aXZlOmFmdGVyLFxuLm5hdmNvbnRhaW5lciBwOmhvdmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjQTRCN0UzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICBoZWlnaHQ6IDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../landing.service */
    "./src/app/landing.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(landingService, router, activeRoute) {
        _classCallCheck(this, NavbarComponent);

        this.landingService = landingService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.menuOpen = true;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.landingService.currentPos.subscribe(function (pos) {
            console.log(pos);

            _this5.selectmenu(pos);
          });
        }
      }, {
        key: "selectmenu",
        value: function selectmenu(menuitem) {
          this.selectedmenu = menuitem;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bar', [// ...
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2s 0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: '1'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Nogdo\Desktop\amy-app (1)\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map