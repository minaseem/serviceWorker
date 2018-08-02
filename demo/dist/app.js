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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _preact = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.js\");\n\nvar _preact2 = _interopRequireDefault(_preact);\n\n__webpack_require__(/*! ./style.css */ \"./style.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by imamudinnaseem on 6/12/17.\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'showImage',\n        value: function showImage() {\n            this.setState({ showImage: true });\n            fetch('/app.js');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            console.log('RENDER');\n            return _preact2.default.h(\n                'div',\n                null,\n                _preact2.default.h(\n                    'h1',\n                    null,\n                    'Hello, world!'\n                ),\n                _preact2.default.h(\n                    'h3',\n                    null,\n                    'This is a service worker test'\n                ),\n                _preact2.default.h(\n                    'button',\n                    { onclick: this.showImage.bind(this) },\n                    'Show cached Image'\n                ),\n                _preact2.default.h(\n                    'div',\n                    null,\n                    this.state.showImage ? _preact2.default.h('img', { src: 'rocket.jpg', alt: 'No Image Found' }) : null\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_preact.Component);\n\n(0, _preact.render)(_preact2.default.h(App, null), document.body);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/preact/dist/preact.js":
/*!********************************************!*\
  !*** ./node_modules/preact/dist/preact.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function() {\n    'use strict';\n    function VNode() {}\n    function h(nodeName, attributes) {\n        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;\n        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);\n        if (attributes && null != attributes.children) {\n            if (!stack.length) stack.push(attributes.children);\n            delete attributes.children;\n        }\n        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {\n            if (child === !0 || child === !1) child = null;\n            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;\n            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);\n            lastSimple = simple;\n        }\n        var p = new VNode();\n        p.nodeName = nodeName;\n        p.children = children;\n        p.attributes = null == attributes ? void 0 : attributes;\n        p.key = null == attributes ? void 0 : attributes.key;\n        if (void 0 !== options.vnode) options.vnode(p);\n        return p;\n    }\n    function extend(obj, props) {\n        for (var i in props) obj[i] = props[i];\n        return obj;\n    }\n    function cloneElement(vnode, props) {\n        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);\n    }\n    function enqueueRender(component) {\n        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);\n    }\n    function rerender() {\n        var p, list = items;\n        items = [];\n        while (p = list.pop()) if (p.__d) renderComponent(p);\n    }\n    function isSameNodeType(node, vnode, hydrating) {\n        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;\n        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;\n    }\n    function isNamedNode(node, nodeName) {\n        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();\n    }\n    function getNodeProps(vnode) {\n        var props = extend({}, vnode.attributes);\n        props.children = vnode.children;\n        var defaultProps = vnode.nodeName.defaultProps;\n        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];\n        return props;\n    }\n    function createNode(nodeName, isSvg) {\n        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);\n        node.__n = nodeName;\n        return node;\n    }\n    function removeNode(node) {\n        if (node.parentNode) node.parentNode.removeChild(node);\n    }\n    function setAccessor(node, name, old, value, isSvg) {\n        if ('className' === name) name = 'class';\n        if ('key' === name) ; else if ('ref' === name) {\n            if (old) old(null);\n            if (value) value(node);\n        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {\n            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';\n            if (value && 'object' == typeof value) {\n                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';\n                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];\n            }\n        } else if ('dangerouslySetInnerHTML' === name) {\n            if (value) node.innerHTML = value.__html || '';\n        } else if ('o' == name[0] && 'n' == name[1]) {\n            var useCapture = name !== (name = name.replace(/Capture$/, ''));\n            name = name.toLowerCase().substring(2);\n            if (value) {\n                if (!old) node.addEventListener(name, eventProxy, useCapture);\n            } else node.removeEventListener(name, eventProxy, useCapture);\n            (node.__l || (node.__l = {}))[name] = value;\n        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {\n            setProperty(node, name, null == value ? '' : value);\n            if (null == value || value === !1) node.removeAttribute(name);\n        } else {\n            var ns = isSvg && name !== (name = name.replace(/^xlink\\:?/, ''));\n            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);\n        }\n    }\n    function setProperty(node, name, value) {\n        try {\n            node[name] = value;\n        } catch (e) {}\n    }\n    function eventProxy(e) {\n        return this.__l[e.type](options.event && options.event(e) || e);\n    }\n    function flushMounts() {\n        var c;\n        while (c = mounts.pop()) {\n            if (options.afterMount) options.afterMount(c);\n            if (c.componentDidMount) c.componentDidMount();\n        }\n    }\n    function diff(dom, vnode, context, mountAll, parent, componentRoot) {\n        if (!diffLevel++) {\n            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;\n            hydrating = null != dom && !('__preactattr_' in dom);\n        }\n        var ret = idiff(dom, vnode, context, mountAll, componentRoot);\n        if (parent && ret.parentNode !== parent) parent.appendChild(ret);\n        if (!--diffLevel) {\n            hydrating = !1;\n            if (!componentRoot) flushMounts();\n        }\n        return ret;\n    }\n    function idiff(dom, vnode, context, mountAll, componentRoot) {\n        var out = dom, prevSvgMode = isSvgMode;\n        if (null == vnode) vnode = '';\n        if ('string' == typeof vnode) {\n            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {\n                if (dom.nodeValue != vnode) dom.nodeValue = vnode;\n            } else {\n                out = document.createTextNode(vnode);\n                if (dom) {\n                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n                    recollectNodeTree(dom, !0);\n                }\n            }\n            out.__preactattr_ = !0;\n            return out;\n        }\n        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);\n        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;\n        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {\n            out = createNode(String(vnode.nodeName), isSvgMode);\n            if (dom) {\n                while (dom.firstChild) out.appendChild(dom.firstChild);\n                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n                recollectNodeTree(dom, !0);\n            }\n        }\n        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;\n        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {\n            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];\n        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);\n        diffAttributes(out, vnode.attributes, props);\n        isSvgMode = prevSvgMode;\n        return out;\n    }\n    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {\n        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;\n        if (0 !== len) for (var i = 0; i < len; i++) {\n            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;\n            if (null != key) {\n                keyedLen++;\n                keyed[key] = _child;\n            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;\n        }\n        if (0 !== vlen) for (var i = 0; i < vlen; i++) {\n            vchild = vchildren[i];\n            child = null;\n            var key = vchild.key;\n            if (null != key) {\n                if (keyedLen && void 0 !== keyed[key]) {\n                    child = keyed[key];\n                    keyed[key] = void 0;\n                    keyedLen--;\n                }\n            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {\n                child = c;\n                children[j] = void 0;\n                if (j === childrenLen - 1) childrenLen--;\n                if (j === min) min++;\n                break;\n            }\n            child = idiff(child, vchild, context, mountAll);\n            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);\n        }\n        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);\n        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);\n    }\n    function recollectNodeTree(node, unmountOnly) {\n        var component = node._component;\n        if (component) unmountComponent(component); else {\n            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);\n            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);\n            removeChildren(node);\n        }\n    }\n    function removeChildren(node) {\n        node = node.lastChild;\n        while (node) {\n            var next = node.previousSibling;\n            recollectNodeTree(node, !0);\n            node = next;\n        }\n    }\n    function diffAttributes(dom, attrs, old) {\n        var name;\n        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);\n        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);\n    }\n    function collectComponent(component) {\n        var name = component.constructor.name;\n        (components[name] || (components[name] = [])).push(component);\n    }\n    function createComponent(Ctor, props, context) {\n        var inst, list = components[Ctor.name];\n        if (Ctor.prototype && Ctor.prototype.render) {\n            inst = new Ctor(props, context);\n            Component.call(inst, props, context);\n        } else {\n            inst = new Component(props, context);\n            inst.constructor = Ctor;\n            inst.render = doRender;\n        }\n        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {\n            inst.__b = list[i].__b;\n            list.splice(i, 1);\n            break;\n        }\n        return inst;\n    }\n    function doRender(props, state, context) {\n        return this.constructor(props, context);\n    }\n    function setComponentProps(component, props, opts, context, mountAll) {\n        if (!component.__x) {\n            component.__x = !0;\n            if (component.__r = props.ref) delete props.ref;\n            if (component.__k = props.key) delete props.key;\n            if (!component.base || mountAll) {\n                if (component.componentWillMount) component.componentWillMount();\n            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);\n            if (context && context !== component.context) {\n                if (!component.__c) component.__c = component.context;\n                component.context = context;\n            }\n            if (!component.__p) component.__p = component.props;\n            component.props = props;\n            component.__x = !1;\n            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);\n            if (component.__r) component.__r(component);\n        }\n    }\n    function renderComponent(component, opts, mountAll, isChild) {\n        if (!component.__x) {\n            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;\n            if (isUpdate) {\n                component.props = previousProps;\n                component.state = previousState;\n                component.context = previousContext;\n                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);\n                component.props = props;\n                component.state = state;\n                component.context = context;\n            }\n            component.__p = component.__s = component.__c = component.__b = null;\n            component.__d = !1;\n            if (!skip) {\n                rendered = component.render(props, state, context);\n                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());\n                var toUnmount, base, childComponent = rendered && rendered.nodeName;\n                if ('function' == typeof childComponent) {\n                    var childProps = getNodeProps(rendered);\n                    inst = initialChildComponent;\n                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {\n                        toUnmount = inst;\n                        component._component = inst = createComponent(childComponent, childProps, context);\n                        inst.__b = inst.__b || nextBase;\n                        inst.__u = component;\n                        setComponentProps(inst, childProps, 0, context, !1);\n                        renderComponent(inst, 1, mountAll, !0);\n                    }\n                    base = inst.base;\n                } else {\n                    cbase = initialBase;\n                    toUnmount = initialChildComponent;\n                    if (toUnmount) cbase = component._component = null;\n                    if (initialBase || 1 === opts) {\n                        if (cbase) cbase._component = null;\n                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);\n                    }\n                }\n                if (initialBase && base !== initialBase && inst !== initialChildComponent) {\n                    var baseParent = initialBase.parentNode;\n                    if (baseParent && base !== baseParent) {\n                        baseParent.replaceChild(base, initialBase);\n                        if (!toUnmount) {\n                            initialBase._component = null;\n                            recollectNodeTree(initialBase, !1);\n                        }\n                    }\n                }\n                if (toUnmount) unmountComponent(toUnmount);\n                component.base = base;\n                if (base && !isChild) {\n                    var componentRef = component, t = component;\n                    while (t = t.__u) (componentRef = t).base = base;\n                    base._component = componentRef;\n                    base._componentConstructor = componentRef.constructor;\n                }\n            }\n            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {\n                flushMounts();\n                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);\n                if (options.afterUpdate) options.afterUpdate(component);\n            }\n            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);\n            if (!diffLevel && !isChild) flushMounts();\n        }\n    }\n    function buildComponentFromVNode(dom, vnode, context, mountAll) {\n        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);\n        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;\n        if (c && isOwner && (!mountAll || c._component)) {\n            setComponentProps(c, props, 3, context, mountAll);\n            dom = c.base;\n        } else {\n            if (originalComponent && !isDirectOwner) {\n                unmountComponent(originalComponent);\n                dom = oldDom = null;\n            }\n            c = createComponent(vnode.nodeName, props, context);\n            if (dom && !c.__b) {\n                c.__b = dom;\n                oldDom = null;\n            }\n            setComponentProps(c, props, 1, context, mountAll);\n            dom = c.base;\n            if (oldDom && dom !== oldDom) {\n                oldDom._component = null;\n                recollectNodeTree(oldDom, !1);\n            }\n        }\n        return dom;\n    }\n    function unmountComponent(component) {\n        if (options.beforeUnmount) options.beforeUnmount(component);\n        var base = component.base;\n        component.__x = !0;\n        if (component.componentWillUnmount) component.componentWillUnmount();\n        component.base = null;\n        var inner = component._component;\n        if (inner) unmountComponent(inner); else if (base) {\n            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);\n            component.__b = base;\n            removeNode(base);\n            collectComponent(component);\n            removeChildren(base);\n        }\n        if (component.__r) component.__r(null);\n    }\n    function Component(props, context) {\n        this.__d = !0;\n        this.context = context;\n        this.props = props;\n        this.state = this.state || {};\n    }\n    function render(vnode, parent, merge) {\n        return diff(merge, vnode, {}, !1, parent, !1);\n    }\n    var options = {};\n    var stack = [];\n    var EMPTY_CHILDREN = [];\n    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n    var items = [];\n    var mounts = [];\n    var diffLevel = 0;\n    var isSvgMode = !1;\n    var hydrating = !1;\n    var components = {};\n    extend(Component.prototype, {\n        setState: function(state, callback) {\n            var s = this.state;\n            if (!this.__s) this.__s = extend({}, s);\n            extend(s, 'function' == typeof state ? state(s, this.props) : state);\n            if (callback) (this.__h = this.__h || []).push(callback);\n            enqueueRender(this);\n        },\n        forceUpdate: function(callback) {\n            if (callback) (this.__h = this.__h || []).push(callback);\n            renderComponent(this, 2);\n        },\n        render: function() {}\n    });\n    var preact = {\n        h: h,\n        createElement: h,\n        cloneElement: cloneElement,\n        Component: Component,\n        render: render,\n        rerender: rerender,\n        options: options\n    };\n    if (true) module.exports = preact; else {}\n}();\n//# sourceMappingURL=preact.js.map\n\n//# sourceURL=webpack:///./node_modules/preact/dist/preact.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });