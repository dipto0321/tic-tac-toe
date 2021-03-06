/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"td {\\n  border: 2px solid #333;\\n  height: 100px;\\n  width: 100px;\\n  text-align: center;\\n  vertical-align: middle;\\n  font-family: \\\"Comic Sans MS\\\", cursive, sans-serif;\\n  font-size: 70px;\\n  cursor: pointer;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  position: absolute;\\n  left: 50%;\\n  margin-left: -155px;\\n  top: 50px;\\n}\\n\\ntable tr:first-child td {\\n  border-top: 0;\\n}\\n\\ntable tr:last-child td {\\n  border-bottom: 0;\\n}\\n\\ntable tr td:first-child {\\n  border-left: 0;\\n}\\n\\ntable tr td:last-child {\\n  border-right: 0;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n#endgame {\\n  width: 200px;\\n  top: 120px;\\n  background-color: rgba(205, 133, 63, 0.8);\\n  position: absolute;\\n  left: 50%;\\n  margin-left: -100px;\\n  padding-top: 50px;\\n  padding-bottom: 50px;\\n  text-align: center;\\n  border-radius: 5px;\\n  color: white;\\n  font-size: 2em;\\n  z-index: 100;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/factories/game.js":
/*!**********************************!*\
  !*** ./src/js/factories/game.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Game = (gameArgs) => {\n  const {\n    board,\n    human,\n    computer,\n    level,\n    aiFn,\n  } = gameArgs;\n\n  function turn(humanChoice) {\n    if (!this.endGame()) this.human.turn(humanChoice);\n    if (!this.endGame()) {\n      const computerChoice = this.computer.makeChoice(this, this.level, aiFn);\n      this.computer.turn(computerChoice);\n      return computerChoice;\n    }\n  }\n\n  function checkWin(player) {\n    return board.winningCombo.some(combo => combo.every(num => player.moves.includes(num)));\n  }\n\n  function endGame() {\n    return this.checkWin(this.human) ||\n      this.checkWin(this.computer) ||\n      this.board.emptySquares().length === 0;\n  }\n\n  return {\n    level,\n    human,\n    computer,\n    board,\n    turn,\n    checkWin,\n    endGame,\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/js/factories/game.js?");

/***/ }),

/***/ "./src/js/factories/gameBoard.js":
/*!***************************************!*\
  !*** ./src/js/factories/gameBoard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameBoard = () => ({\n  grid: [0, 1, 2, 3, 4, 5, 6, 7, 8],\n  winningCombo: [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [6, 4, 2],\n  ],\n  receiveChoice(target, player) {\n    this.grid[target] = player.sign;\n  },\n  emptySquares() {\n    return this.grid.filter(box => (typeof box) === 'number');\n  },\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n//# sourceURL=webpack:///./src/js/factories/gameBoard.js?");

/***/ }),

/***/ "./src/js/factories/player.js":
/*!************************************!*\
  !*** ./src/js/factories/player.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = playerArgs => ({\n  name: playerArgs.name,\n  sign: playerArgs.sign,\n  board: playerArgs.board,\n  moves: [],\n  turn(index) {\n    this.moves.push(index);\n    this.board.receiveChoice(index, this);\n  },\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/js/factories/player.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factories_gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/gameBoard */ \"./src/js/factories/gameBoard.js\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/player */ \"./src/js/factories/player.js\");\n/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mixins */ \"./src/js/utils/mixins.js\");\n/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories/game */ \"./src/js/factories/game.js\");\n/* harmony import */ var _lib_minimax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/minimax */ \"./src/js/lib/minimax.js\");\n/* harmony import */ var _utils_gameDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/gameDisplay */ \"./src/js/utils/gameDisplay.js\");\n/* harmony import */ var _utils_callbacks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/callbacks */ \"./src/js/utils/callbacks.js\");\n/* harmony import */ var _utils_gameModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/gameModule */ \"./src/js/utils/gameModule.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst name = prompt(`What's your name? `);\n\nconst level = document.getElementById(\"level\").value;\n\nconst game = Object(_utils_gameModule__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n  name,\n  level,\n  mixin: _utils_mixins__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  boardFactory: _factories_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  playerFactory: _factories_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  gameFactory: _factories_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  aiFn: _lib_minimax__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\ndocument.body.appendChild(Object(_utils_gameDisplay__WEBPACK_IMPORTED_MODULE_6__[\"gameBoardDisplay\"])());\n\ngame.handler = Object(_utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"clickHandler\"])().bind(window, game);\n\nObject(_utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"addListenerToBoxes\"])(\"click\", \"cell\", game.handler);\n\ndocument.getElementById(\"reset\").addEventListener(\"click\", () => {\n  Object(_utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"resetGame\"])({\n    newGame: _utils_gameModule__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    name,\n    mixin: _utils_mixins__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    gameBoardDisplayFn: _utils_gameDisplay__WEBPACK_IMPORTED_MODULE_6__[\"gameBoardDisplay\"],\n    listenerToBoxes: _utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"addListenerToBoxes\"],\n    handler: _utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"clickHandler\"],\n    boardFactory: _factories_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    playerFactory: _factories_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    gameFactory: _factories_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    aiFn: _lib_minimax__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  });\n});\n\ndocument.getElementById(\"level\").addEventListener(\"change\", () => {\n  Object(_utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"levelSelection\"])(_utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"resetGame\"], {\n    newGame: _utils_gameModule__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    name,\n    level,\n    mixin: _utils_mixins__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    gameBoardDisplayFn: _utils_gameDisplay__WEBPACK_IMPORTED_MODULE_6__[\"gameBoardDisplay\"],\n    listenerToBoxes: _utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"addListenerToBoxes\"],\n    handler: _utils_callbacks__WEBPACK_IMPORTED_MODULE_7__[\"clickHandler\"],\n    boardFactory: _factories_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    playerFactory: _factories_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    gameFactory: _factories_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    aiFn: _lib_minimax__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  });\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/lib/minimax.js":
/*!*******************************!*\
  !*** ./src/js/lib/minimax.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst minimaxProcessor = (game, player) => {\n  const {\n    board,\n    human,\n    computer,\n  } = game;\n  const availableSpots = board.emptySquares();\n  if (game.checkWin(human)) {\n    return {\n      score: -10,\n    };\n  }\n  if (game.checkWin(computer)) {\n    return {\n      score: 10,\n    };\n  }\n  if (availableSpots.length === 0) {\n    return {\n      score: 0,\n    };\n  }\n\n  const moves = [];\n\n  availableSpots.forEach((spot) => {\n    const move = {};\n    move.index = board.grid[spot];\n    player.moves.push(board.grid[spot]);\n    board.grid[spot] = player.sign;\n    let result;\n    if (player === computer) {\n      result = minimaxProcessor(game, human);\n    } else if (player === human) {\n      result = minimaxProcessor(game, computer);\n    }\n\n    move.score = result.score;\n\n    board.grid[spot] = move.index;\n    player.moves.pop();\n    moves.push(move);\n  });\n  let best;\n  if (player === computer) {\n    // eslint-disable-next-line prefer-destructuring\n    best = moves.sort((a, b) => b.score - a.score)[0];\n    // eslint-disable-next-line prefer-destructuring\n  } else if (player === human) {\n    // eslint-disable-next-line prefer-destructuring\n    best = moves.sort((a, b) => a.score - b.score)[0];\n  }\n  return best;\n};\n\nconst minimax = (game, player) => minimaxProcessor(game, player).index;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (minimax);\n\n//# sourceURL=webpack:///./src/js/lib/minimax.js?");

/***/ }),

/***/ "./src/js/utils/callbacks.js":
/*!***********************************!*\
  !*** ./src/js/utils/callbacks.js ***!
  \***********************************/
/*! exports provided: clickHandler, addListenerToBoxes, removeListenerFromBoxes, resetGame, levelSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListenerToBoxes\", function() { return addListenerToBoxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeListenerFromBoxes\", function() { return removeListenerFromBoxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGame\", function() { return resetGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levelSelection\", function() { return levelSelection; });\n/* harmony import */ var _gameDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameDisplay */ \"./src/js/utils/gameDisplay.js\");\n\n\nfunction clickHandler() {\n  return function innerFunction(game, e) {\n    const humanChoice = Number(e.target.id);\n    const computerChoice = game.turn(humanChoice, game.level);\n    e.target.innerText = game.board.grid[humanChoice];\n    if (game.endGame()) removeListenerFromBoxes(\"click\", \"cell\", game.handler);\n    if (computerChoice !== undefined) {\n      document.getElementById(computerChoice).innerText =\n        game.board.grid[computerChoice];\n      document\n        .getElementById(computerChoice)\n        .removeEventListener(\"click\", game.handler);\n    }\n    if (game.endGame()) {\n      removeListenerFromBoxes(\"click\", \"cell\", game.handler);\n      showEndGameDiv(game);\n    }\n  };\n}\n\nfunction showEndGameDiv(game) {\n  const winner = game.checkWin(game.human) ? game.human.name : \"Computer\";\n  const endGameDiv = document.getElementById(\"endgame\");\n  endGameDiv.classList.remove(\"d-none\");\n  if (game.checkWin(game.human) || game.checkWin(game.computer)) {\n    endGameDiv.innerText = `${winner} wins!`;\n  } else if (game.board.emptySquares()) {\n    endGameDiv.innerText = `It's a draw!`;\n  }\n}\n\nfunction resetGame(newGameArgs) {\n  const {\n    newGame,\n    gameBoardDisplayFn,\n    listenerToBoxes,\n    name,\n    mixin,\n    handler,\n    boardFactory,\n    playerFactory,\n    gameFactory,\n    aiFn\n  } = newGameArgs;\n  const game = newGame({\n    name,\n    level: document.getElementById(\"level\").value,\n    mixin,\n    boardFactory,\n    playerFactory,\n    gameFactory,\n    aiFn\n  });\n  let mainBoard = document.getElementById(\"mainBoard\");\n  mainBoard.innerHTML = \"\";\n  mainBoard = gameBoardDisplayFn();\n  document.getElementById(\"endgame\").innerText = \"\";\n  document.getElementById(\"endgame\").classList.add(\"d-none\");\n  document.body.appendChild(mainBoard);\n  game.handler = handler().bind(window, game);\n  listenerToBoxes(\"click\", \"cell\", game.handler);\n}\n\nfunction levelSelection(resetGameFn, newGameArgs) {\n  resetGameFn(\n    Object.assign(newGameArgs, {\n      level: document.getElementById(\"level\").value\n    })\n  );\n}\n\nfunction addListenerToBoxes(e, collection, callBack) {\n  const boxes = [...document.getElementsByClassName(collection)];\n  boxes.forEach(box =>\n    box.addEventListener(e, callBack, {\n      once: true\n    })\n  );\n}\n\nfunction removeListenerFromBoxes(e, collection, callBack) {\n  const boxes = [...document.getElementsByClassName(collection)];\n  boxes.forEach(box => box.removeEventListener(e, callBack));\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/utils/callbacks.js?");

/***/ }),

/***/ "./src/js/utils/gameDisplay.js":
/*!*************************************!*\
  !*** ./src/js/utils/gameDisplay.js ***!
  \*************************************/
/*! exports provided: gameBoardDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardDisplay\", function() { return gameBoardDisplay; });\nconst gameBoardDisplay = () => {\n  const mainGameBoard = document.getElementById('mainBoard');\n\n  for (let i = 0, j = 0; i < 3; i += 1, j += 3) {\n    const tr = document.createElement('tr');\n    for (let k = 0; k < 3; k += 1) {\n      const td = document.createElement('td');\n      td.setAttribute('class', 'cell');\n      td.setAttribute('id', j + k);\n      tr.appendChild(td);\n    }\n    mainGameBoard.appendChild(tr);\n  };\n  return mainGameBoard;\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/gameDisplay.js?");

/***/ }),

/***/ "./src/js/utils/gameModule.js":
/*!************************************!*\
  !*** ./src/js/utils/gameModule.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst newGame = (gameArgs) => {\n  const {\n    boardFactory,\n    playerFactory,\n    gameFactory,\n    name,\n    level,\n    mixin,\n    aiFn,\n  } = gameArgs;\n\n  const board = boardFactory();\n  const human = playerFactory({\n    name,\n    board,\n    sign: 'X',\n  });\n  const computer = Object.assign(playerFactory({\n    board,\n    name: 'Computer',\n    sign: 'O',\n  }), {\n    makeChoice: mixin.makeChoice,\n  });\n  const game = gameFactory({\n    board,\n    human,\n    computer,\n    level,\n    aiFn,\n  });\n  return game;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newGame);\n\n//# sourceURL=webpack:///./src/js/utils/gameModule.js?");

/***/ }),

/***/ "./src/js/utils/mixins.js":
/*!********************************!*\
  !*** ./src/js/utils/mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mixin = (() => ({\n  makeChoice(game, level, intelligentFn) {\n    return level === \"easy\" ? this.board.emptySquares()[0] : intelligentFn(game, this);\n  },\n}))();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mixin);\n\n//# sourceURL=webpack:///./src/js/utils/mixins.js?");

/***/ })

/******/ });