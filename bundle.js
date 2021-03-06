(function(modules, entryId$$) {
             var require = (function () {
  require.__byId = __byId;
  return require;

  function require(name) {
    var scope$$ = window.__livereactload$$;
    var myId = arguments.length > 1 ? arguments[arguments.length - 1] : null;
    return __byId(moduleKey(scope$$, myId, name), false);
  }

  function __byId(id, isReload) {
    var oldRequire = typeof window.require === "function" ? window.require : null;
    var scope$$ = window.__livereactload$$;
    var _module = findModule(scope$$, id);

    if (_module) {
      scope$$.exports[_module.id] = !isReload ? scope$$.exports[_module.id] || {} : {};
      var _exports2 = scope$$.exports[_module.id];
      var mod = {
        exports: _exports2,
        onReload: function onReload(fn) {
          scope$$.reloaders[_module.file] = fn;
        }
      };
      // TODO: there should be still one argument to pass.. figure out which is it
      var oldReloader = scope$$.reloaders[_module.file];
      _module[0].apply(this, [require, mod, _exports2, _module[0], scope$$.modules, scope$$.exports]);
      scope$$.exports[_module.id] = mod.exports;

      if (isReload && typeof oldReloader === "function") {
        var accept = oldReloader.call();
        if (accept === true) {
          throw { accepted: true };
        }
      }
      return mod.exports;
    } else if (oldRequire) {
      return oldRequire.apply(undefined, arguments);
    } else {
      var e = new Error("Module not found: " + name);
      e.code = "MODULE_NOT_FOUND";
      throw e;
    }
  }

  function moduleKey(_ref, callerId, name) {
    var modules = _ref.modules;

    var _ref2 = modules[callerId] || {};

    var _ref2$deps = _ref2.deps;
    var deps = _ref2$deps === undefined ? {} : _ref2$deps;

    return deps[name];
  }

  // resolve module so that de-duplicated modules are skipped and the
  // original module is returned
  function findModule(_ref3, id) {
    var modules = _ref3.modules;

    var mod = modules[id];
    if (mod) {
      if (mod.dedupeIndex && mod.sameDeps) {
        var orig = null;
        Object.keys(modules).forEach(function (id) {
          if (modules[id].index === mod.dedupeIndex) {
            orig = findModule({ modules: modules }, id);
          }
        });
        return orig;
      } else {
        return mod;
      }
    }
  }
})();;

       window.__livereactload$$ = {
         require: require,
         modules: modules,
         exports: {},
         reloaders: {},
         initModules: initModules
       };

       initModules();

       function initModules() {
         var allExports = window.__livereactload$$.exports;
         var modules    = window.__livereactload$$.modules;
         // initialize Browserify compatibility
         Object.keys(modules).forEach(function(id) {
           modules[id][0] = (function(require, module, exports) {
             if (!modules[id].__inited) {
               modules[id].__inited = true
               var __init = new Function("require", "module", "exports", modules[id].source);
               var _require = (function() { return require.apply(require, Array.prototype.slice.call(arguments).concat(id)); });
               __init(_require, module, exports, arguments[3], arguments[4], arguments[5], arguments[6]);
             } else if (allExports[id] && allExports[id] !== exports) {
               Object.assign(exports, allExports[id])
             }
           })
           modules[id][1] = modules[id].deps;
         })
       }
             (function() {
               require("livereactload/client", entryId$$).call(null,{"port":4474,"host":null});
require("./app.js", entryId$$);
             })();
           })({
  "1": {
    "id": 1,
    "index": 1,
    "file": "/Users/Dmitry/react-workshop/lib/___livereactload_entry.js",
    "source": "require(\"livereactload/client\", entryId$$).call(null,{\"port\":4474,\"host\":null});\nrequire(\"./app.js\", entryId$$);",
    "deps": {
      "./app.js": 2,
      "livereactload/client": 3
    },
    "entry": true,
    "hash": "1ef11072b3c506bbc8b6010473ba80e8"
  },
  "2": {
    "id": 2,
    "index": 2,
    "file": "/Users/Dmitry/react-workshop/lib/app.js",
    "source": "\"use strict\";\n\nconsole.error(\"Error: Cannot find module './site.js' from '/Users/Dmitry/react-workshop'\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFFBQVEsQUFBUixNQUFjLEFBQWQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5lcnJvcihcIkVycm9yOiBDYW5ub3QgZmluZCBtb2R1bGUgJy4vc2l0ZS5qcycgZnJvbSAnL1VzZXJzL0RtaXRyeS9yZWFjdC13b3Jrc2hvcCdcIik7Il19",
    "deps": {},
    "hash": "d09cf9f8056d61dcbfc055f2466d8d6a"
  },
  "3": {
    "id": 3,
    "index": 3,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/client.js",
    "source": "\nmodule.exports = require(\"./lib/client/main.js\")\n",
    "deps": {
      "./lib/client/main.js": 6
    },
    "hash": "e497cd554968c27200a06c783e327db6"
  },
  "4": {
    "id": 4,
    "index": 4,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/lib/client/console.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.info = info;\nexports.warn = warn;\nexports.error = error;\n\nfunction info(msg) {\n  console.info(\"LiveReactload ::\", msg);\n}\n\nfunction warn(msg) {\n  console.warn(\"LiveReactload ::\", msg);\n}\n\nfunction error(msg) {\n  console.error(\"LiveReactload ::\", msg);\n}",
    "deps": {},
    "hash": "11513f6385ea1806391ce619957ad341"
  },
  "5": {
    "id": 5,
    "index": 5,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/lib/client/handleChange.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = handleChanges;\n\nvar _reloadUtils = require(\"./reloadUtils\");\n\nvar _console = require(\"./console\");\n\nvar _common = require(\"../common\");\n\nfunction handleChanges(scope$$, _ref) {\n  var newModules = _ref.modules;\n  var newEntryId = _ref.entryId;\n  var modules = scope$$.modules;\n  var __require = scope$$.require;\n\n  var modulesToReload = (0, _reloadUtils.diff)(modules, newModules, newEntryId);\n  (0, _reloadUtils.patchMetaData)(scope$$, newModules);\n\n  if (modulesToReload.length === 0) {\n    (0, _console.info)(\"Nothing to patch\");\n    return;\n  }\n\n  var patch = modulesToReload.map(function (mod) {\n    return {\n      id: mod.id,\n      changed: mod.changed,\n      file: mod.file,\n      source: mod.source,\n      parents: mod.parents.map(Number),\n      isNew: mod.isNew\n    };\n  });\n\n  var propagationGuards = {};\n  patch.forEach(function (_ref2) {\n    var id = _ref2.id;\n    var changed = _ref2.changed;\n    var parents = _ref2.parents;\n\n    propagationGuards[id] = (propagationGuards[id] || 0) + (changed ? 1 : 0);\n    parents.forEach(function (p) {\n      return propagationGuards[p] = (propagationGuards[p] || 0) + 1;\n    });\n  });\n\n  (0, _console.info)(\"Apply patch\");\n  try {\n    patch.forEach(function (_ref3) {\n      var id = _ref3.id;\n      var file = _ref3.file;\n      var parents = _ref3.parents;\n      var isNew = _ref3.isNew;\n\n      if (propagationGuards[id] > 0) {\n        if (isNew) {\n          console.log(\" > Add new module  ::\", file);\n        } else {\n          console.log(\" > Patch module    ::\", file);\n        }\n\n        var reloadedExports = undefined,\n            accepted = false;\n        try {\n          // ATTENTION: must use scope object because it has been mutated during \"pathMetaData\"\n          delete scope$$.exports[id];\n          scope$$.modules[id].__inited = false;\n          reloadedExports = __require.__byId(id, true);\n        } catch (e) {\n          if (e.accepted) {\n            console.log(\" > Manually accepted\");\n            accepted = true;\n          } else {\n            console.error(e);\n            (0, _console.warn)(\"Abort patching\");\n            throw { aborted: true };\n          }\n        }\n\n        if (!isNew && (accepted || isStoppable(reloadedExports || {}))) {\n          preventPropagation(parents);\n        }\n      } else {\n        // this will prevent propagation to ancestor files\n        preventPropagation(parents);\n      }\n    });\n    (0, _console.info)(\"Patching complete\");\n  } catch (e) {\n    if (!e.aborted) {\n      console.error(e);\n    }\n  }\n\n  function preventPropagation(parents) {\n    parents.forEach(function (p) {\n      var parent = (0, _common.find)(patch, function (_ref4) {\n        var id = _ref4.id;\n        return id === p;\n      });\n      if (parent) {\n        propagationGuards[parent.id]--;\n      }\n    });\n  }\n}\n\nfunction isStoppable(exports) {\n  if (isProxied(exports)) {\n    return true;\n  } else if ((0, _common.isPlainObj)(exports)) {\n    return !!(0, _common.find)((0, _common.values)(exports), isProxied);\n  }\n  return false;\n}\n\nfunction isProxied(o) {\n  return o && !!o.__reactPatchProxy;\n}\nmodule.exports = exports[\"default\"];",
    "deps": {
      "./console": 4,
      "../common": 9,
      "./reloadUtils": 7
    },
    "hash": "26f36cba73d9f428180e9229d05604b1"
  },
  "6": {
    "id": 6,
    "index": 6,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/lib/client/main.js",
    "source": "function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _startClient = require(\"./startClient\");\n\nvar _startClient2 = _interopRequireDefault(_startClient);\n\nvar _handleChange = require(\"./handleChange\");\n\nvar _handleChange2 = _interopRequireDefault(_handleChange);\n\nvar _console = require(\"./console\");\n\nmodule.exports = function client(opts) {\n  var start = arguments.length <= 1 || arguments[1] === undefined ? _startClient2[\"default\"] : arguments[1];\n\n  var scope$$ = window.__livereactload$$;\n  scope$$.options = opts;\n  start(scope$$, {\n    change: function change(msg) {\n      (0, _console.info)(\"Bundle changed\");\n      (0, _handleChange2[\"default\"])(scope$$, msg.data);\n    },\n    bundle_error: function bundle_error(msg) {\n      (0, _console.error)(msg.data.error);\n    }\n  });\n};",
    "deps": {
      "./console": 4,
      "./handleChange": 5,
      "./startClient": 8
    },
    "hash": "2ca69629fb81079d237678ec528fcd20"
  },
  "7": {
    "id": 7,
    "index": 7,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/lib/client/reloadUtils.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; })();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.patchMetaData = patchMetaData;\nexports.diff = diff;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\nvar _common = require(\"../common\");\n\nfunction patchMetaData(scope$$, newModules) {\n  var modules = scope$$.modules;\n  var exports = scope$$.exports;\n\n  var oldModulesByFile = {};\n  (0, _common.values)(modules).forEach(function (mod) {\n    return oldModulesByFile[mod.file] = mod;\n  });\n\n  var rearrangedExports = {};\n  (0, _common.keys)(newModules).forEach(function (id) {\n    var oldModule = oldModulesByFile[newModules[id].file];\n    if (oldModule) {\n      rearrangedExports[id] = exports[oldModule.id];\n      newModules[id].__inited = true;\n    }\n  });\n\n  scope$$.exports = rearrangedExports;\n  scope$$.modules = newModules;\n  scope$$.initModules();\n}\n\nfunction diff(modules, newModules, newEntryId) {\n  var oldModulesByFile = {};\n  (0, _common.values)(modules).forEach(function (mod) {\n    return oldModulesByFile[mod.file] = mod;\n  });\n\n  var changedModules = (0, _common.values)(newModules).filter(function (_ref) {\n    var entry = _ref.entry;\n    var file = _ref.file;\n    var hash = _ref.hash;\n\n    return !oldModulesByFile[file] || oldModulesByFile[file].hash !== hash;\n  });\n\n  // resolve reverse dependencies so that we can calculate\n  // weights for correct reloading order\n  var dependencies = {};\n  function resolveDeps(mod) {\n    var deps = (0, _common.values)(mod.deps);\n    dependencies[mod.id] = deps;\n    deps.forEach(function (d) {\n      if (!dependencies[d] && newModules[d]) resolveDeps(newModules[d]);\n    });\n  }\n  resolveDeps(newModules[newEntryId]);\n\n  var parents = {};\n  (0, _common.pairs)(dependencies).forEach(function (_ref2) {\n    var _ref22 = _slicedToArray(_ref2, 2);\n\n    var id = _ref22[0];\n    var deps = _ref22[1];\n\n    deps.forEach(function (d) {\n      return parents[d] = [id].concat(_toConsumableArray(parents[d] || []));\n    });\n  });\n\n  // idea behind weighting: each file has initial weight = 1\n  // each file gets also the sum of its dependency weights\n  // finally files are sorted by weight => smaller ones must\n  // be reloaded before their dependants (bigger weights)\n  var weights = {};\n  var hasChanged = {};\n  changedModules.forEach(function (_ref3) {\n    var id = _ref3.id;\n\n    hasChanged[id] = true;\n    addWeightsStartingFrom(id, weights, parents);\n  });\n\n  var modulesToReload = (0, _common.sortBy)((0, _common.pairs)(weights), function (_ref4) {\n    var _ref42 = _slicedToArray(_ref4, 2);\n\n    var _ = _ref42[0];\n    var weight = _ref42[1];\n    return weight;\n  }).map(function (_ref5) {\n    var _ref52 = _slicedToArray(_ref5, 1);\n\n    var id = _ref52[0];\n    return newModules[id];\n  }).filter(function (module) {\n    return !!module && !module.entry;\n  }).map(function (module) {\n    return _extends({}, module, {\n      changed: !!hasChanged[module.id],\n      parents: parents[module.id] || [],\n      isNew: !oldModulesByFile[module.file]\n    });\n  });\n\n  return modulesToReload;\n\n  function addWeightsStartingFrom(id, weights, parents) {\n    var visited = {};\n    weightRecur(id, 1);\n    function weightRecur(id, w) {\n      if (visited[id]) {\n        // prevent circular dependency stack overflow\n        return;\n      }\n      var dependants = parents[id] || [];\n      visited[id] = true;\n      weights[id] = (weights[id] || 0) + w;\n      dependants.forEach(function (d) {\n        return weightRecur(d, weights[id] + 1);\n      });\n    }\n  }\n}",
    "deps": {
      "../common": 9
    },
    "hash": "cb4b5861924f758a3c8fdd9ad2b77f21"
  },
  "8": {
    "id": 8,
    "index": 8,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/lib/client/startClient.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = startClient;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _ws = require(\"ws\");\n\nvar _ws2 = _interopRequireDefault(_ws);\n\nvar _console = require(\"./console\");\n\nvar noop = function noop() {};\n\nfunction startClient(scope$$, onMsg) {\n  if (!scope$$.ws) {\n    (function () {\n      var url = makeHostUrl(scope$$);\n      (0, _console.info)(\"Connect reload client to \" + url);\n\n      var ws = new _ws2[\"default\"](url);\n      ws.onopen = function () {\n        return (0, _console.info)(\"WebSocket client listening for changes...\");\n      };\n\n      ws.onmessage = function (m) {\n        var msg = JSON.parse(m.data);\n        var res = (onMsg[msg.type] || noop)(msg);\n        if (res) {\n          ws.send(JSON.stringify(res));\n        }\n      };\n\n      scope$$.ws = ws;\n    })();\n  }\n}\n\nfunction makeHostUrl(_ref) {\n  var _ref$options = _ref.options;\n  var host = _ref$options.host;\n  var port = _ref$options.port;\n\n  var protocol = window.location.protocol === \"https:\" ? \"wss\" : \"ws\";\n  return protocol + \"://\" + (host || window.location.hostname) + \":\" + port;\n}\nmodule.exports = exports[\"default\"];",
    "deps": {
      "./console": 4,
      "ws": 10
    },
    "hash": "84ddd03cda4b3420390330721ed6bf3d"
  },
  "9": {
    "id": 9,
    "index": 9,
    "file": "/Users/Dmitry/react-workshop/node_modules/livereactload/lib/common.js",
    "source": "Object.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports.keys = keys;\nexports.values = values;\nexports.pairs = pairs;\nexports.sortBy = sortBy;\nexports.extend = extend;\nexports.find = find;\nexports.isPlainObj = isPlainObj;\n\nfunction keys(obj) {\n  return Object.keys(obj);\n}\n\nfunction values(obj) {\n  return keys(obj).map(function (k) {\n    return obj[k];\n  });\n}\n\nfunction pairs(obj) {\n  return keys(obj).map(function (k) {\n    return [k, obj[k]];\n  });\n}\n\nfunction sortBy(arr, comp) {\n  return arr.slice().sort(function (a, b) {\n    return comp(a) < comp(b) ? -1 : comp(a) > comp(b) ? 1 : 0;\n  });\n}\n\nfunction extend(dest) {\n  for (var _len = arguments.length, objs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objs[_key - 1] = arguments[_key];\n  }\n\n  objs.forEach(function (obj) {\n    var o = obj || {};\n    keys(o).forEach(function (k) {\n      if (o.hasOwnProperty(k)) {\n        dest[k] = o[k];\n      }\n    });\n  });\n  return dest;\n}\n\nfunction find(arr, predicate) {\n  var results = (arr || []).filter(predicate);\n  return results.length ? results[0] : undefined;\n}\n\nfunction isPlainObj(o) {\n  return typeof o == 'object' && o.constructor == Object;\n}",
    "deps": {},
    "hash": "2dd5bb1a473ce8ca0c7f8761d262b4fe"
  },
  "10": {
    "id": 10,
    "index": 10,
    "file": "/Users/Dmitry/react-workshop/node_modules/ws/lib/browser.js",
    "source": "\n/**\n * Module dependencies.\n */\n\nvar global = (function() { return this; })();\n\n/**\n * WebSocket constructor.\n */\n\nvar WebSocket = global.WebSocket || global.MozWebSocket;\n\n/**\n * Module exports.\n */\n\nmodule.exports = WebSocket ? ws : null;\n\n/**\n * WebSocket constructor.\n *\n * The third `opts` options object gets ignored in web browsers, since it's\n * non-standard, and throws a TypeError if passed to the constructor.\n * See: https://github.com/einaros/ws/issues/227\n *\n * @param {String} uri\n * @param {Array} protocols (optional)\n * @param {Object) opts (optional)\n * @api public\n */\n\nfunction ws(uri, protocols, opts) {\n  var instance;\n  if (protocols) {\n    instance = new WebSocket(uri, protocols);\n  } else {\n    instance = new WebSocket(uri);\n  }\n  return instance;\n}\n\nif (WebSocket) ws.prototype = WebSocket.prototype;\n",
    "deps": {},
    "hash": "1e2bdb9308fb7f3575a514332777131f"
  }
}, 1);