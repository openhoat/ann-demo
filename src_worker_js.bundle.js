/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ann/connection/index.js":
/*!*************************************!*\
  !*** ./src/ann/connection/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronConnection": () => /* binding */ NeuronConnection
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_id_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/id-generator */ "./src/utils/id-generator.js");
/* harmony import */ var _neuron_connections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neuron-connections */ "./src/ann/connection/neuron-connections.js");






var NeuronConnection = /*#__PURE__*/function () {
  function NeuronConnection(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NeuronConnection);

    this.type = this.constructor.name;
    this.source = opt.source;
    this.target = opt.target;
    this.weight = typeof opt.weight === 'function' ? opt.weight() : opt.weight;
    this.id = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.get(opt, 'id', _utils_id_generator__WEBPACK_IMPORTED_MODULE_3__.default.getId());
    this.source.outputs.push(this);
    this.target.inputs.push(this);
    _neuron_connections__WEBPACK_IMPORTED_MODULE_4__.NeuronConnections.all.push(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NeuronConnection, [{
    key: "updateWeight",
    value: function updateWeight(delta, learningRate) {
      var minWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MIN_VALUE;
      var maxWeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MAX_VALUE;
      var oldWeight = this.weight;
      this.weight = oldWeight + _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.clip(delta * this.source.value * learningRate, minWeight, maxWeight);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        sourceRef: this.source.id,
        targetRef: this.target.id,
        type: this.type,
        weight: this.weight
      };
    }
  }], [{
    key: "build",
    value: function build(opt) {
      return new NeuronConnection(opt);
    }
  }, {
    key: "defaultWeight",
    value: function defaultWeight() {
      return Math.random() * 0.01;
    }
  }]);

  return NeuronConnection;
}();



/***/ }),

/***/ "./src/ann/connection/neuron-connections.js":
/*!**************************************************!*\
  !*** ./src/ann/connection/neuron-connections.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeuronConnections": () => /* binding */ NeuronConnections
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/jsonable-collection */ "./src/utils/jsonable-collection.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var NeuronConnections = /*#__PURE__*/function (_JsonableCollection) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NeuronConnections, _JsonableCollection);

  var _super = _createSuper(NeuronConnections);

  function NeuronConnections() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NeuronConnections);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NeuronConnections, [{
    key: "updateWeights",
    value: function updateWeights(delta, learningRate, minWeight, maxWeight) {
      this.forEach(function (item) {
        item.updateWeight(delta, learningRate, minWeight, maxWeight);
      });
    }
  }], [{
    key: "build",
    value: function build() {
      return new NeuronConnections();
    }
  }, {
    key: "get",
    value: function get(id) {
      return NeuronConnections.all.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return NeuronConnections;
}(_utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_5__.JsonableCollection);

NeuronConnections.all = new NeuronConnections();


/***/ }),

/***/ "./src/ann/index.js":
/*!**************************!*\
  !*** ./src/ann/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnNetwork": () => /* binding */ AnnNetwork
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/log */ "./src/utils/log.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./connection */ "./src/ann/connection/index.js");
/* harmony import */ var _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./connection/neuron-connections */ "./src/ann/connection/neuron-connections.js");
/* harmony import */ var _layer_hidden_layer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layer/hidden-layer */ "./src/ann/layer/hidden-layer.js");
/* harmony import */ var _layer_hidden_layers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layer/hidden-layers */ "./src/ann/layer/hidden-layers.js");
/* harmony import */ var _layer_input_layer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layer/input-layer */ "./src/ann/layer/input-layer.js");
/* harmony import */ var _layer_output_layer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layer/output-layer */ "./src/ann/layer/output-layer.js");
/* harmony import */ var _neuron_inter_neuron__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./neuron/inter-neuron */ "./src/ann/neuron/inter-neuron.js");
/* harmony import */ var _neuron_motor_neuron__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./neuron/motor-neuron */ "./src/ann/neuron/motor-neuron.js");
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./neuron/neurons */ "./src/ann/neuron/neurons.js");
/* harmony import */ var _neuron_sensory_neuron__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./neuron/sensory-neuron */ "./src/ann/neuron/sensory-neuron.js");
/* harmony import */ var _normalizer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./normalizer */ "./src/ann/normalizer/index.js");
/* harmony import */ var _normalizer_default__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./normalizer/default */ "./src/ann/normalizer/default.js");
/* harmony import */ var _strategy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./strategy */ "./src/ann/strategy/index.js");
/* harmony import */ var _strategy_identity__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./strategy/identity */ "./src/ann/strategy/identity.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var AnnNetwork = /*#__PURE__*/function () {
  function AnnNetwork(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, AnnNetwork);

    var id = opt.id,
        inputLayer = opt.inputLayer,
        hiddenLayers = opt.hiddenLayers,
        outputLayer = opt.outputLayer,
        strategy = opt.strategy;
    this.id = id;
    this.inputLayer = inputLayer;
    this.hiddenLayers = hiddenLayers;
    this.outputLayer = outputLayer;
    this.strategy = strategy;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(AnnNetwork, [{
    key: "connect",
    value: function connect() {
      var firstHiddenLayer = this.hiddenLayers.first;
      var lastHiddenLayer = this.hiddenLayers.last;
      var inputTargetLayer = firstHiddenLayer ? firstHiddenLayer : this.outputLayer;
      this.inputLayer.connectTo(inputTargetLayer);

      if (lastHiddenLayer) {
        this.hiddenLayers.reduce(function (prevLayer, nextLayer) {
          prevLayer.connectTo(nextLayer);
          return nextLayer;
        });
        lastHiddenLayer.connectTo(this.outputLayer);
      }

      return this;
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(index, value) {
      var neuron = this.inputLayer.get(index);
      neuron.normalizeValue(value);
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(values) {
      var _this = this;

      this.inputLayer.forEach(function (__, index) {
        _this.setInputValue(index, values[index]);
      });
    }
  }, {
    key: "getOutputValue",
    value: function getOutputValue(index) {
      var neuron = this.outputLayer.get(index);
      return neuron.getDenormalizedValue();
    }
  }, {
    key: "getOutputValues",
    value: function getOutputValues() {
      var _this2 = this;

      return this.outputLayer.map(function (__, index) {
        return _this2.getOutputValue(index);
      });
    }
  }, {
    key: "run",
    value: function run(inputs) {
      this.setInputValues(inputs);
      this.hiddenLayers.activate();
      this.outputLayer.activate();
      return this.getOutputValues();
    }
  }, {
    key: "adjustFromUsecase",
    value: function adjustFromUsecase(usecase) {
      var learningRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
      var outputValues = this.getOutputValues();
      var isEqualToExpected = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.isEqual(outputValues, _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.toArray(usecase.outputs));

      if (!isEqualToExpected) {
        var outputs = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.toArray(usecase.outputs);
        this.outputLayer.forEach(function (item, index) {
          item.expectedValue = item.normalizer.to(outputs[index]);
          item.calculateDelta();
          item.updateWeights(learningRate);
        });
        _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.reverse(this.hiddenLayers.items).forEach(function (layer) {
          layer.forEach(function (neuron) {
            neuron.calculateDelta();
            neuron.updateWeights(learningRate);
          });
        });
      }

      return isEqualToExpected;
    }
  }, {
    key: "trainFromUsecase",
    value: function trainFromUsecase(usecase, learningRate) {
      this.run(usecase.inputs);
      return this.adjustFromUsecase(usecase, learningRate);
    }
  }, {
    key: "trainFromUsecases",
    value: function trainFromUsecases(usecases, learningRate) {
      var _this3 = this;

      return usecases.reduce(function (acc, usecase) {
        return _this3.trainFromUsecase(usecase, learningRate) && acc;
      }, true);
    }
  }, {
    key: "train",
    value: function () {
      var _train = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(opt) {
        var usecases, expectedMaxIterations, learningRate, hook, startTime, result, hookResult, endTime;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _utils_log__WEBPACK_IMPORTED_MODULE_9__.default.info('starting training...');
                usecases = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.get(opt, 'usecases');
                _utils_log__WEBPACK_IMPORTED_MODULE_9__.default.info('usecases :', usecases.slice(0, 10).map(function (_ref) {
                  var inputs = _ref.inputs,
                      outputs = _ref.outputs;
                  return "".concat(inputs.join(','), " : ").concat(Array.isArray(outputs) ? outputs.join(',') : outputs);
                }).join('\n'));
                expectedMaxIterations = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.get(opt, 'expectedMaxIterations');
                learningRate = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.get(opt, 'learningRate', 0.2);
                hook = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.get(opt, 'hook');
                startTime = performance.now();
                result = {
                  averageDuration: 0,
                  equalToExpected: true,
                  iterations: 0,
                  totalDuration: 0
                };
                hookResult = true;

              case 9:
                result.iterations += 1;
                result.equalToExpected = this.trainFromUsecases(usecases, learningRate);

                if (!(typeof hook === 'function')) {
                  _context.next = 15;
                  break;
                }

                _context.next = 14;
                return hook(result);

              case 14:
                hookResult = _context.sent;

              case 15:
                if (hookResult !== false && !result.equalToExpected && result.iterations < expectedMaxIterations) {
                  _context.next = 9;
                  break;
                }

              case 16:
                if (result.iterations) {
                  endTime = performance.now();
                  result.totalDuration = endTime - startTime;
                  result.averageDuration = Math.round(result.totalDuration / result.iterations);
                }

                _utils_log__WEBPACK_IMPORTED_MODULE_9__.default.info('training result :', result);
                return _context.abrupt("return", result);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function train(_x) {
        return _train.apply(this, arguments);
      }

      return train;
    }()
  }, {
    key: "toJSON",
    value: function toJSON(options) {
      var inputs = this.inputLayer.toJSON(options).items.map(function (item) {
        // eslint-disable-next-line no-unused-vars
        var type = item.type,
            data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(item, ["type"]);

        return data;
      });
      var hiddenLayers = this.hiddenLayers.toJSON(options).items.map(function (hiddenLayer) {
        return hiddenLayer.items.map(function (item) {
          // eslint-disable-next-line no-unused-vars
          var strategy = item.strategy,
              type = item.type,
              data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(item, ["strategy", "type"]);

          return data;
        });
      });
      var outputs = this.outputLayer.toJSON(options).items.map(function (item) {
        // eslint-disable-next-line no-unused-vars
        var strategy = item.strategy,
            type = item.type,
            data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(item, ["strategy", "type"]);

        return data;
      });
      var connections = _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_11__.NeuronConnections.all.toJSON(options).items.map(function (item) {
        // eslint-disable-next-line no-unused-vars
        var type = item.type,
            data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(item, ["type"]);

        return data;
      });
      return {
        id: this.id,
        inputs: inputs,
        // eslint-disable-next-line sort-keys
        hiddenLayers: hiddenLayers,
        outputs: outputs,
        strategy: this.strategy.toJSON(options),
        // eslint-disable-next-line sort-keys
        connections: connections
      };
    }
  }], [{
    key: "build",
    value: function build() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var id = config.id;
      var strategy = _strategy__WEBPACK_IMPORTED_MODULE_22__.default.get(config.strategy.id) || _strategy_identity__WEBPACK_IMPORTED_MODULE_23__.identityStrategy;
      strategy.options = config.strategy.options;
      var inputLayer, hiddenLayers, outputLayer;

      if (config.inputs) {
        inputLayer = _layer_input_layer__WEBPACK_IMPORTED_MODULE_14__.InputLayer.build.apply(_layer_input_layer__WEBPACK_IMPORTED_MODULE_14__.InputLayer, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(config.inputs.map(function (item, index) {
          var Normalizer = _normalizer__WEBPACK_IMPORTED_MODULE_20__.default.get(item.normalizerRef) || _normalizer_default__WEBPACK_IMPORTED_MODULE_21__.default;
          var normalizer = Normalizer.build(item.normalizerOptions);
          return _neuron_sensory_neuron__WEBPACK_IMPORTED_MODULE_19__.SensoryNeuron.build({
            bias: item.bias,
            id: item.id,
            index: index,
            normalizer: normalizer
          });
        })));
      }

      if (config.hiddenLayers) {
        hiddenLayers = _layer_hidden_layers__WEBPACK_IMPORTED_MODULE_13__.HiddenLayers.build.apply(_layer_hidden_layers__WEBPACK_IMPORTED_MODULE_13__.HiddenLayers, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(config.hiddenLayers.map(function (hiddenLayer) {
          return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(_layer_hidden_layer__WEBPACK_IMPORTED_MODULE_12__.HiddenLayer, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(hiddenLayer.map(function (item) {
            return _neuron_inter_neuron__WEBPACK_IMPORTED_MODULE_16__.InterNeuron.build(_objectSpread(_objectSpread({}, item), {}, {
              strategy: strategy
            }));
          })));
        })));
      } else if (config.hiddenLayersCounts) {
        hiddenLayers = _layer_hidden_layers__WEBPACK_IMPORTED_MODULE_13__.HiddenLayers.build.apply(_layer_hidden_layers__WEBPACK_IMPORTED_MODULE_13__.HiddenLayers, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(config.hiddenLayersCounts.map(function (count, depth) {
          return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(_layer_hidden_layer__WEBPACK_IMPORTED_MODULE_12__.HiddenLayer, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.mapCount(count, function (__, index) {
            return _neuron_inter_neuron__WEBPACK_IMPORTED_MODULE_16__.InterNeuron.build({
              depth: depth + 1,
              index: index,
              strategy: strategy
            });
          })));
        })));
      }

      if (config.outputs) {
        outputLayer = _layer_output_layer__WEBPACK_IMPORTED_MODULE_15__.OutputLayer.build.apply(_layer_output_layer__WEBPACK_IMPORTED_MODULE_15__.OutputLayer, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(config.outputs.map(function (item, index) {
          var Normalizer = _normalizer__WEBPACK_IMPORTED_MODULE_20__.default.get(item.normalizerRef) || _normalizer_default__WEBPACK_IMPORTED_MODULE_21__.default;
          var normalizer = Normalizer.build(item.normalizerOptions);
          return _neuron_motor_neuron__WEBPACK_IMPORTED_MODULE_17__.MotorNeuron.build({
            bias: item.bias,
            depth: (hiddenLayers ? hiddenLayers.length : 0) + 1,
            id: item.id,
            index: index,
            normalizer: normalizer,
            strategy: strategy
          });
        })));
      }

      var network = new AnnNetwork({
        hiddenLayers: hiddenLayers,
        id: id,
        inputLayer: inputLayer,
        outputLayer: outputLayer,
        strategy: strategy
      });

      if (config.connections) {
        config.connections.map(function (item) {
          return _connection__WEBPACK_IMPORTED_MODULE_10__.NeuronConnection.build({
            id: item.id,
            source: _neuron_neurons__WEBPACK_IMPORTED_MODULE_18__.Neurons.get(item.sourceRef),
            target: _neuron_neurons__WEBPACK_IMPORTED_MODULE_18__.Neurons.get(item.targetRef),
            weight: item.weight
          });
        });
      } else {
        network.connect();
      }

      return network;
    }
  }, {
    key: "buildNormalizer",
    value: function buildNormalizer(io) {
      var Normalizer = _normalizer__WEBPACK_IMPORTED_MODULE_20__.default.get(io.normalizerRef) || _normalizer_default__WEBPACK_IMPORTED_MODULE_21__.default;
      return Normalizer.build(io.normalizerOptions);
    }
  }]);

  return AnnNetwork;
}();



/***/ }),

/***/ "./src/ann/layer/hidden-layer.js":
/*!***************************************!*\
  !*** ./src/ann/layer/hidden-layer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiddenLayer": () => /* binding */ HiddenLayer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connection */ "./src/ann/connection/index.js");
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../neuron/neurons */ "./src/ann/neuron/neurons.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var HiddenLayer = /*#__PURE__*/function (_Neurons) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(HiddenLayer, _Neurons);

  var _super = _createSuper(HiddenLayer);

  function HiddenLayer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HiddenLayer);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HiddenLayer, [{
    key: "connectTo",
    value: function connectTo(targetLayer) {
      var weight = _utils_helper__WEBPACK_IMPORTED_MODULE_6__.default.heEtAlWeightbuilder(this.length);
      this.forEach(function (source) {
        targetLayer.forEach(function (target) {
          _connection__WEBPACK_IMPORTED_MODULE_7__.NeuronConnection.build({
            source: source,
            target: target,
            weight: weight
          });
        });
      });
    }
  }, {
    key: "activate",
    value: function activate() {
      this.forEach(function (item) {
        item.activate();
      });
    }
  }], [{
    key: "build",
    value: function build() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(HiddenLayer, items);
    }
  }]);

  return HiddenLayer;
}(_neuron_neurons__WEBPACK_IMPORTED_MODULE_8__.Neurons);



/***/ }),

/***/ "./src/ann/layer/hidden-layers.js":
/*!****************************************!*\
  !*** ./src/ann/layer/hidden-layers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiddenLayers": () => /* binding */ HiddenLayers
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/jsonable-collection */ "./src/utils/jsonable-collection.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var HiddenLayers = /*#__PURE__*/function (_JsonableCollection) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(HiddenLayers, _JsonableCollection);

  var _super = _createSuper(HiddenLayers);

  function HiddenLayers() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HiddenLayers);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HiddenLayers, [{
    key: "activate",
    value: function activate() {
      this.forEach(function (item) {
        item.activate();
      });
    }
  }], [{
    key: "build",
    value: function build() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(HiddenLayers, items);
    }
  }]);

  return HiddenLayers;
}(_utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_6__.JsonableCollection);



/***/ }),

/***/ "./src/ann/layer/input-layer.js":
/*!**************************************!*\
  !*** ./src/ann/layer/input-layer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputLayer": () => /* binding */ InputLayer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connection */ "./src/ann/connection/index.js");
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../neuron/neurons */ "./src/ann/neuron/neurons.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var InputLayer = /*#__PURE__*/function (_Neurons) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InputLayer, _Neurons);

  var _super = _createSuper(InputLayer);

  function InputLayer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InputLayer);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InputLayer, [{
    key: "connectTo",
    value: function connectTo(targetLayer) {
      var weight = _utils_helper__WEBPACK_IMPORTED_MODULE_6__.default.heEtAlWeightbuilder(this.length);
      this.forEach(function (source) {
        targetLayer.forEach(function (target) {
          _connection__WEBPACK_IMPORTED_MODULE_7__.NeuronConnection.build({
            source: source,
            target: target,
            weight: weight
          });
        });
      });
    }
  }], [{
    key: "build",
    value: function build() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(InputLayer, items);
    }
  }]);

  return InputLayer;
}(_neuron_neurons__WEBPACK_IMPORTED_MODULE_8__.Neurons);



/***/ }),

/***/ "./src/ann/layer/output-layer.js":
/*!***************************************!*\
  !*** ./src/ann/layer/output-layer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputLayer": () => /* binding */ OutputLayer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../neuron/neurons */ "./src/ann/neuron/neurons.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var OutputLayer = /*#__PURE__*/function (_Neurons) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(OutputLayer, _Neurons);

  var _super = _createSuper(OutputLayer);

  function OutputLayer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, OutputLayer);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(OutputLayer, [{
    key: "activate",
    value: function activate() {
      this.forEach(function (item) {
        item.activate();
      });
    }
  }, {
    key: "updateWeights",
    value: function updateWeights() {
      this.forEach(function (item) {
        item.updateWeight();
      });
    }
  }], [{
    key: "build",
    value: function build() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(OutputLayer, items);
    }
  }]);

  return OutputLayer;
}(_neuron_neurons__WEBPACK_IMPORTED_MODULE_6__.Neurons);



/***/ }),

/***/ "./src/ann/neuron/index.js":
/*!*********************************!*\
  !*** ./src/ann/neuron/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Neuron": () => /* binding */ Neuron
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_id_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/id-generator */ "./src/utils/id-generator.js");
/* harmony import */ var _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connection/neuron-connections */ "./src/ann/connection/neuron-connections.js");
/* harmony import */ var _neurons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neurons */ "./src/ann/neuron/neurons.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Neuron = /*#__PURE__*/function () {
  function Neuron(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Neuron);

    this.type = this.constructor.name;
    this.id = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'id', _utils_id_generator__WEBPACK_IMPORTED_MODULE_4__.default.getId());
    this.index = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'index', 0);
    this.depth = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'depth', 0);
    this.color = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'color', '#909090');
    this.value = Math.random();
    this.normalizer = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'normalizer');
    this.bias = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'bias', _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.random(-1, 1));

    if (opt.inputs) {
      this.delta = 0;
      this.inputs = _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__.NeuronConnections.build();
      this.strategy = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(opt, 'strategy');
    }

    if (opt.outputs) {
      this.outputs = _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__.NeuronConnections.build();
    }

    _neurons__WEBPACK_IMPORTED_MODULE_6__.Neurons.all.push(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Neuron, [{
    key: "activate",
    value: function activate() {
      var bias = this.bias,
          inputs = this.inputs,
          strategy = this.strategy;

      if (!strategy) {
        return;
      }

      var activation = strategy.combine(inputs.map(function (input) {
        return input.source.value;
      }).concat(1), inputs.map(function (input) {
        return input.weight;
      }).concat(bias));
      this.value = strategy.activate(activation);
    }
  }, {
    key: "calculateDelta",
    value: function calculateDelta() {
      var expectedValue = this.expectedValue,
          outputs = this.outputs,
          strategy = this.strategy,
          value = this.value;

      if (typeof expectedValue !== 'undefined') {
        this.delta = expectedValue - value;
        return;
      }

      if (!strategy) {
        return;
      }

      var error = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.sum(outputs.map(function (output) {
        return output.weight * output.target.delta;
      }));
      this.delta = strategy.delta(error, value);
    }
  }, {
    key: "updateWeights",
    value: function updateWeights(learningRate) {
      var bias = this.bias,
          delta = this.delta,
          inputs = this.inputs,
          strategy = this.strategy;

      if (!strategy) {
        return;
      }

      var minWeight = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(strategy, 'options.minWeight');
      var maxWeight = _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.get(strategy, 'options.maxWeight');

      if (!inputs.isEmpty()) {
        inputs.updateWeights(delta, learningRate, minWeight, maxWeight);
      }

      this.bias = bias + delta * learningRate;
    }
  }, {
    key: "toJSON",
    value: function toJSON(options) {
      var jsonableConfig = _objectSpread({
        withoutValues: false
      }, options);

      var withoutValues = jsonableConfig.withoutValues;
      return _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.omitBy(_objectSpread(_objectSpread({}, _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.pick(this, 'bias', 'depth', 'id', 'index', 'type')), {}, {
        normalizerRef: this.normalizer && this.normalizer.id,
        // eslint-disable-next-line sort-keys
        normalizerOptions: this.normalizer && this.normalizer.options,
        strategy: this.strategy && this.strategy.toJSON(options)
      }, !withoutValues && {
        delta: this.delta,
        value: this.value
      }), _utils_helper__WEBPACK_IMPORTED_MODULE_3__.default.isNil);
    }
  }]);

  return Neuron;
}();



/***/ }),

/***/ "./src/ann/neuron/inter-neuron.js":
/*!****************************************!*\
  !*** ./src/ann/neuron/inter-neuron.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterNeuron": () => /* binding */ InterNeuron
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./src/ann/neuron/index.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var InterNeuron = /*#__PURE__*/function (_Neuron) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InterNeuron, _Neuron);

  var _super = _createSuper(InterNeuron);

  function InterNeuron(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InterNeuron);

    return _super.call(this, _objectSpread(_objectSpread({
      color: '#909090'
    }, opt), {}, {
      inputs: true,
      outputs: true
    }));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InterNeuron, null, [{
    key: "build",
    value: function build(opt) {
      return new InterNeuron(opt);
    }
  }]);

  return InterNeuron;
}(___WEBPACK_IMPORTED_MODULE_6__.Neuron);



/***/ }),

/***/ "./src/ann/neuron/motor-neuron.js":
/*!****************************************!*\
  !*** ./src/ann/neuron/motor-neuron.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotorNeuron": () => /* binding */ MotorNeuron
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./src/ann/neuron/index.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var MotorNeuron = /*#__PURE__*/function (_Neuron) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(MotorNeuron, _Neuron);

  var _super = _createSuper(MotorNeuron);

  function MotorNeuron(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MotorNeuron);

    return _super.call(this, _objectSpread(_objectSpread({
      color: '#1d4efd'
    }, opt), {}, {
      inputs: true
    }));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MotorNeuron, [{
    key: "getDenormalizedValue",
    value: function getDenormalizedValue() {
      return this.normalizer.from(this.value);
    }
  }], [{
    key: "build",
    value: function build(opt) {
      return new MotorNeuron(opt);
    }
  }]);

  return MotorNeuron;
}(___WEBPACK_IMPORTED_MODULE_6__.Neuron);



/***/ }),

/***/ "./src/ann/neuron/neurons.js":
/*!***********************************!*\
  !*** ./src/ann/neuron/neurons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Neurons": () => /* binding */ Neurons
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/jsonable-collection */ "./src/utils/jsonable-collection.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Neurons = /*#__PURE__*/function (_JsonableCollection) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Neurons, _JsonableCollection);

  var _super = _createSuper(Neurons);

  function Neurons() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Neurons);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Neurons, null, [{
    key: "get",
    value: function get(id) {
      return Neurons.all.find(function (item) {
        return item.id === id;
      });
    }
  }]);

  return Neurons;
}(_utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_5__.JsonableCollection);

Neurons.all = new Neurons();


/***/ }),

/***/ "./src/ann/neuron/sensory-neuron.js":
/*!******************************************!*\
  !*** ./src/ann/neuron/sensory-neuron.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensoryNeuron": () => /* binding */ SensoryNeuron
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./src/ann/neuron/index.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var SensoryNeuron = /*#__PURE__*/function (_Neuron) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SensoryNeuron, _Neuron);

  var _super = _createSuper(SensoryNeuron);

  function SensoryNeuron(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SensoryNeuron);

    return _super.call(this, _objectSpread(_objectSpread({
      color: '#ee651d'
    }, opt), {}, {
      outputs: true
    }));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SensoryNeuron, [{
    key: "normalizeValue",
    value: function normalizeValue(value) {
      this.value = this.normalizer.to(value);
    }
  }], [{
    key: "build",
    value: function build(opt) {
      return new SensoryNeuron(opt);
    }
  }]);

  return SensoryNeuron;
}(___WEBPACK_IMPORTED_MODULE_6__.Neuron);



/***/ }),

/***/ "./src/ann/normalizer/boolean.js":
/*!***************************************!*\
  !*** ./src/ann/normalizer/boolean.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");




var BooleanNormalizer = /*#__PURE__*/function () {
  function BooleanNormalizer(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BooleanNormalizer);

    this.id = BooleanNormalizer.type;
    this.options = options;
    this.threshold = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.get(options, 'threshold', 0.5);
    this.trueValue = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.get(options, 'trueValue', 1);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BooleanNormalizer, [{
    key: "from",
    value: function from(value) {
      return value >= this.threshold;
    }
  }, {
    key: "to",
    value: function to(value) {
      return value ? this.trueValue : 0;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.omitBy({
        id: this.id,
        options: this.options
      }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.isNil);
    }
  }], [{
    key: "build",
    value: function build(options) {
      return new BooleanNormalizer(options);
    }
  }]);

  return BooleanNormalizer;
}();

BooleanNormalizer.type = 'boolean';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BooleanNormalizer);

/***/ }),

/***/ "./src/ann/normalizer/default.js":
/*!***************************************!*\
  !*** ./src/ann/normalizer/default.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");




var DefaultNormalizer = /*#__PURE__*/function () {
  function DefaultNormalizer(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DefaultNormalizer);

    this.id = DefaultNormalizer.type;
    this.options = options;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DefaultNormalizer, [{
    key: "from",
    value: function from(value) {
      return value;
    }
  }, {
    key: "to",
    value: function to(value) {
      return value;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.omitBy({
        id: this.id,
        options: this.options
      }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.isNil);
    }
  }], [{
    key: "build",
    value: function build(options) {
      return new DefaultNormalizer(options);
    }
  }]);

  return DefaultNormalizer;
}();

DefaultNormalizer.type = 'default';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultNormalizer);

/***/ }),

/***/ "./src/ann/normalizer/index.js":
/*!*************************************!*\
  !*** ./src/ann/normalizer/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./src/ann/normalizer/boolean.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "./src/ann/normalizer/default.js");
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integer */ "./src/ann/normalizer/integer.js");
/* harmony import */ var _phrase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phrase */ "./src/ann/normalizer/phrase.js");




var normalizers = new Map([_default__WEBPACK_IMPORTED_MODULE_1__.default, _boolean__WEBPACK_IMPORTED_MODULE_0__.default, _integer__WEBPACK_IMPORTED_MODULE_2__.default, _phrase__WEBPACK_IMPORTED_MODULE_3__.default].map(function (Normalizer) {
  return [Normalizer.type, Normalizer];
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizers);

/***/ }),

/***/ "./src/ann/normalizer/integer.js":
/*!***************************************!*\
  !*** ./src/ann/normalizer/integer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");



var fixZero = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.fixZero;

var IntegerNormalizer = /*#__PURE__*/function () {
  function IntegerNormalizer(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IntegerNormalizer);

    this.id = IntegerNormalizer.type;
    this.options = options;
    this.min = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.get(options, 'min', Number.MIN_SAFE_INTEGER);
    var max = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.get(options, 'max', Number.MAX_SAFE_INTEGER);
    this.length = max - this.min;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(IntegerNormalizer, [{
    key: "from",
    value: function from(value) {
      return fixZero(Math.round(value * this.length + this.min));
    }
  }, {
    key: "to",
    value: function to(value) {
      return (value - this.min) / this.length;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.omitBy({
        id: this.id,
        options: this.options
      }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.isNil);
    }
  }], [{
    key: "build",
    value: function build(options) {
      return new IntegerNormalizer(options);
    }
  }]);

  return IntegerNormalizer;
}();

IntegerNormalizer.type = 'integer';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegerNormalizer);

/***/ }),

/***/ "./src/ann/normalizer/phrase.js":
/*!**************************************!*\
  !*** ./src/ann/normalizer/phrase.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integer */ "./src/ann/normalizer/integer.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var PhraseNormalizer = /*#__PURE__*/function (_IntegerNormalizer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PhraseNormalizer, _IntegerNormalizer);

  var _super = _createSuper(PhraseNormalizer);

  function PhraseNormalizer(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhraseNormalizer);

    _this = _super.call(this, options);
    _this.id = PhraseNormalizer.type;
    _this.min = 0;
    _this.length = PhraseNormalizer.phrases.length - _this.min;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhraseNormalizer, [{
    key: "from",
    value: function from(value) {
      return PhraseNormalizer.phrases[_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(PhraseNormalizer.prototype), "from", this).call(this, value)];
    }
  }, {
    key: "to",
    value: function to(value) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(PhraseNormalizer.prototype), "to", this).call(this, Math.max(PhraseNormalizer.phrases.indexOf(value), 0));
    }
  }], [{
    key: "build",
    value: // https://medium.com/twyla-ai/40-small-talk-questions-your-chatbot-needs-to-know-and-why-it-matters-63caf03347f6
    function build(options) {
      return new PhraseNormalizer(options);
    }
  }]);

  return PhraseNormalizer;
}(_integer__WEBPACK_IMPORTED_MODULE_6__.default);

PhraseNormalizer.phrases = [' ', 'am', 'are', 'do', 'fine', 'how', 'i', 'is', 'know', 'love', 'marry', 'me', 'my', 'name', 'not', 'old', 'robert', 'single', 'thank', 'what', 'will', 'years', 'you', 'your', '?'];
PhraseNormalizer.type = 'phrase';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhraseNormalizer);

/***/ }),

/***/ "./src/ann/strategy/divide.js":
/*!************************************!*\
  !*** ./src/ann/strategy/divide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivideStrategy": () => /* binding */ DivideStrategy,
/* harmony export */   "divideStrategy": () => /* binding */ divideStrategy
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");




var DivideStrategy = /*#__PURE__*/function () {
  function DivideStrategy(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DivideStrategy);

    this.id = 'divide';
    this.options = options;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DivideStrategy, [{
    key: "activate",
    value: function activate(value) {
      return value;
    }
  }, {
    key: "combine",
    value: function combine(inputs, weights) {
      return inputs.reduce(function (acc, input, index) {
        return acc * input * weights[index];
      }, 1);
    }
  }, {
    key: "delta",
    value: function delta(error) {
      return error;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.omitBy({
        id: this.id,
        options: this.options
      }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.isNil);
    }
  }]);

  return DivideStrategy;
}();

var divideStrategy = new DivideStrategy();


/***/ }),

/***/ "./src/ann/strategy/identity.js":
/*!**************************************!*\
  !*** ./src/ann/strategy/identity.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityStrategy": () => /* binding */ IdentityStrategy,
/* harmony export */   "identityStrategy": () => /* binding */ identityStrategy
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");



var sum = _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.sum;

var IdentityStrategy = /*#__PURE__*/function () {
  function IdentityStrategy(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IdentityStrategy);

    this.id = 'identity';
    this.options = options;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(IdentityStrategy, [{
    key: "activate",
    value: function activate(value) {
      return value;
    }
  }, {
    key: "combine",
    value: function combine(inputs, weights) {
      return sum(inputs.map(function (input, index) {
        return input * weights[index];
      }));
    }
  }, {
    key: "delta",
    value: function delta(error) {
      return error;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.omitBy({
        id: this.id,
        options: this.options
      }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.isNil);
    }
  }]);

  return IdentityStrategy;
}();

var identityStrategy = new IdentityStrategy();


/***/ }),

/***/ "./src/ann/strategy/index.js":
/*!***********************************!*\
  !*** ./src/ann/strategy/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divide */ "./src/ann/strategy/divide.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");
/* harmony import */ var _logistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logistic */ "./src/ann/strategy/logistic.js");
/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiply */ "./src/ann/strategy/multiply.js");
/* harmony import */ var _relu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relu */ "./src/ann/strategy/relu.js");
/* harmony import */ var _tanh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tanh */ "./src/ann/strategy/tanh.js");






var strategies = new Map([_divide__WEBPACK_IMPORTED_MODULE_0__.divideStrategy, _identity__WEBPACK_IMPORTED_MODULE_1__.identityStrategy, _logistic__WEBPACK_IMPORTED_MODULE_2__.logisticStrategy, _multiply__WEBPACK_IMPORTED_MODULE_3__.multiplyStrategy, _relu__WEBPACK_IMPORTED_MODULE_4__.reluStrategy, _tanh__WEBPACK_IMPORTED_MODULE_5__.tanhStrategy].map(function (strategy) {
  return [strategy.id, strategy];
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strategies);

/***/ }),

/***/ "./src/ann/strategy/logistic.js":
/*!**************************************!*\
  !*** ./src/ann/strategy/logistic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogisticStrategy": () => /* binding */ LogisticStrategy,
/* harmony export */   "logisticStrategy": () => /* binding */ logisticStrategy
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var LogisticStrategy = /*#__PURE__*/function (_IdentityStrategy) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LogisticStrategy, _IdentityStrategy);

  var _super = _createSuper(LogisticStrategy);

  function LogisticStrategy() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LogisticStrategy);

    _this = _super.call(this);
    _this.id = 'logistic';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LogisticStrategy, [{
    key: "activate",
    value: function activate(value) {
      return 1 / (1 + Math.exp(-value));
    }
  }, {
    key: "delta",
    value: function delta(error, output) {
      return error * (output * (1 - output));
    }
  }]);

  return LogisticStrategy;
}(_identity__WEBPACK_IMPORTED_MODULE_5__.IdentityStrategy);

var logisticStrategy = new LogisticStrategy();


/***/ }),

/***/ "./src/ann/strategy/multiply.js":
/*!**************************************!*\
  !*** ./src/ann/strategy/multiply.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplyStrategy": () => /* binding */ MultiplyStrategy,
/* harmony export */   "multiplyStrategy": () => /* binding */ multiplyStrategy
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");




var MultiplyStrategy = /*#__PURE__*/function () {
  function MultiplyStrategy(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MultiplyStrategy);

    this.id = 'multiply';
    this.options = options;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MultiplyStrategy, [{
    key: "activate",
    value: function activate(value) {
      return value;
    }
  }, {
    key: "combine",
    value: function combine(inputs, weights) {
      return inputs.reduce(function (acc, input, index) {
        return acc * input * weights[index];
      }, 1);
    }
  }, {
    key: "delta",
    value: function delta(error) {
      return error;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.omitBy({
        id: this.id,
        options: this.options
      }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.default.isNil);
    }
  }]);

  return MultiplyStrategy;
}();

var multiplyStrategy = new MultiplyStrategy();


/***/ }),

/***/ "./src/ann/strategy/relu.js":
/*!**********************************!*\
  !*** ./src/ann/strategy/relu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReluStrategy": () => /* binding */ ReluStrategy,
/* harmony export */   "reluStrategy": () => /* binding */ reluStrategy
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ReluStrategy = /*#__PURE__*/function (_IdentityStrategy) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ReluStrategy, _IdentityStrategy);

  var _super = _createSuper(ReluStrategy);

  function ReluStrategy() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReluStrategy);

    _this = _super.call(this);
    _this.id = 'relu';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReluStrategy, [{
    key: "activate",
    value: function activate(value) {
      return Math.max(0, value);
    }
  }, {
    key: "delta",
    value: function delta(error, output) {
      return error * (output > 0 ? 1 : 0);
    }
  }]);

  return ReluStrategy;
}(_identity__WEBPACK_IMPORTED_MODULE_5__.IdentityStrategy);

var reluStrategy = new ReluStrategy();


/***/ }),

/***/ "./src/ann/strategy/tanh.js":
/*!**********************************!*\
  !*** ./src/ann/strategy/tanh.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TanhStrategy": () => /* binding */ TanhStrategy,
/* harmony export */   "tanhStrategy": () => /* binding */ tanhStrategy
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var TanhStrategy = /*#__PURE__*/function (_IdentityStrategy) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(TanhStrategy, _IdentityStrategy);

  var _super = _createSuper(TanhStrategy);

  function TanhStrategy() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TanhStrategy);

    _this = _super.call(this);
    _this.id = 'tanh';
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TanhStrategy, [{
    key: "activate",
    value: function activate(value) {
      return 2 / (1 + Math.exp(-2 * value)) - 1;
    }
  }, {
    key: "delta",
    value: function delta(error, output) {
      return error * (1 - Math.pow(output, 2));
    }
  }]);

  return TanhStrategy;
}(_identity__WEBPACK_IMPORTED_MODULE_5__.IdentityStrategy);

var tanhStrategy = new TanhStrategy();


/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _networks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./networks */ "./src/config/networks/index.js");

var config = {
  networks: _networks__WEBPACK_IMPORTED_MODULE_0__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./src/config/networks/arithmetic/add.js":
/*!***********************************************!*\
  !*** ./src/config/networks/arithmetic/add.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _add_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.yml */ "./src/config/networks/arithmetic/add.yml");
/* harmony import */ var _add_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_yml__WEBPACK_IMPORTED_MODULE_2__);


var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var buildArray = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.buildArray;
var minX = (_yamlConfig$inputs$ = _add_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
var maxX = (_yamlConfig$inputs$2 = _add_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
var minY = (_yamlConfig$inputs$3 = _add_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
var maxY = (_yamlConfig$inputs$4 = _add_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
var usecases = buildArray(maxX - minX + 1).reduce(function (acc, i) {
  var x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(function (j) {
    var y = j + minY;
    return {
      inputs: [x, y],
      outputs: x + y
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread(_objectSpread({}, _add_yml__WEBPACK_IMPORTED_MODULE_2__), {}, {
  training: _objectSpread(_objectSpread({}, _add_yml__WEBPACK_IMPORTED_MODULE_2__.training), {}, {
    usecases: usecases
  })
}));

/***/ }),

/***/ "./src/config/networks/arithmetic/divide.js":
/*!**************************************************!*\
  !*** ./src/config/networks/arithmetic/divide.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _divide_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./divide.yml */ "./src/config/networks/arithmetic/divide.yml");
/* harmony import */ var _divide_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divide_yml__WEBPACK_IMPORTED_MODULE_2__);


var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var buildArray = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.buildArray;
var minX = (_yamlConfig$inputs$ = _divide_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
var maxX = (_yamlConfig$inputs$2 = _divide_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
var minY = (_yamlConfig$inputs$3 = _divide_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
var maxY = (_yamlConfig$inputs$4 = _divide_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
var usecases = buildArray(maxX - minX + 1).reduce(function (acc, i) {
  var x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(function (j) {
    var y = j + minY;
    return {
      inputs: [x, y],
      outputs: Math.round(x / y)
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread(_objectSpread({}, _divide_yml__WEBPACK_IMPORTED_MODULE_2__), {}, {
  training: _objectSpread(_objectSpread({}, _divide_yml__WEBPACK_IMPORTED_MODULE_2__.training), {}, {
    usecases: usecases
  })
}));

/***/ }),

/***/ "./src/config/networks/arithmetic/index.js":
/*!*************************************************!*\
  !*** ./src/config/networks/arithmetic/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => /* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "divide": () => /* reexport safe */ _divide__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "multiply": () => /* reexport safe */ _multiply__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "sub": () => /* reexport safe */ _sub__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./src/config/networks/arithmetic/add.js");
/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divide */ "./src/config/networks/arithmetic/divide.js");
/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply */ "./src/config/networks/arithmetic/multiply.js");
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub */ "./src/config/networks/arithmetic/sub.js");






/***/ }),

/***/ "./src/config/networks/arithmetic/multiply.js":
/*!****************************************************!*\
  !*** ./src/config/networks/arithmetic/multiply.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _multiply_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply.yml */ "./src/config/networks/arithmetic/multiply.yml");
/* harmony import */ var _multiply_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_multiply_yml__WEBPACK_IMPORTED_MODULE_2__);


var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var buildArray = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.buildArray;
var minX = (_yamlConfig$inputs$ = _multiply_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
var maxX = (_yamlConfig$inputs$2 = _multiply_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
var minY = (_yamlConfig$inputs$3 = _multiply_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
var maxY = (_yamlConfig$inputs$4 = _multiply_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
var usecases = buildArray(maxX - minX + 1).reduce(function (acc, i) {
  var x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(function (j) {
    var y = j + minY;
    return {
      inputs: [x, y],
      outputs: x * y
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread(_objectSpread({}, _multiply_yml__WEBPACK_IMPORTED_MODULE_2__), {}, {
  training: _objectSpread(_objectSpread({}, _multiply_yml__WEBPACK_IMPORTED_MODULE_2__.training), {}, {
    usecases: usecases
  })
}));

/***/ }),

/***/ "./src/config/networks/arithmetic/sub.js":
/*!***********************************************!*\
  !*** ./src/config/networks/arithmetic/sub.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _sub_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub.yml */ "./src/config/networks/arithmetic/sub.yml");
/* harmony import */ var _sub_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sub_yml__WEBPACK_IMPORTED_MODULE_2__);


var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var buildArray = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.buildArray;
var minX = (_yamlConfig$inputs$ = _sub_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
var maxX = (_yamlConfig$inputs$2 = _sub_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
var minY = (_yamlConfig$inputs$3 = _sub_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
var maxY = (_yamlConfig$inputs$4 = _sub_yml__WEBPACK_IMPORTED_MODULE_2__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
var usecases = buildArray(maxX - minX + 1).reduce(function (acc, i) {
  var x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(function (j) {
    var y = j + minY;
    return {
      inputs: [x, y],
      outputs: x - y
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread(_objectSpread({}, _sub_yml__WEBPACK_IMPORTED_MODULE_2__), {}, {
  training: _objectSpread(_objectSpread({}, _sub_yml__WEBPACK_IMPORTED_MODULE_2__.training), {}, {
    usecases: usecases
  })
}));

/***/ }),

/***/ "./src/config/networks/boolean/index.js":
/*!**********************************************!*\
  !*** ./src/config/networks/boolean/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => /* reexport module object */ _and_yml__WEBPACK_IMPORTED_MODULE_0__,
/* harmony export */   "or": () => /* reexport module object */ _or_yml__WEBPACK_IMPORTED_MODULE_1__,
/* harmony export */   "xor": () => /* reexport module object */ _xor_yml__WEBPACK_IMPORTED_MODULE_2__
/* harmony export */ });
/* harmony import */ var _and_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and.yml */ "./src/config/networks/boolean/and.yml");
/* harmony import */ var _and_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_and_yml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _or_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./or.yml */ "./src/config/networks/boolean/or.yml");
/* harmony import */ var _or_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_or_yml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xor_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xor.yml */ "./src/config/networks/boolean/xor.yml");
/* harmony import */ var _xor_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xor_yml__WEBPACK_IMPORTED_MODULE_2__);







/***/ }),

/***/ "./src/config/networks/index.js":
/*!**************************************!*\
  !*** ./src/config/networks/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arithmetic": () => /* reexport module object */ _arithmetic__WEBPACK_IMPORTED_MODULE_0__,
/* harmony export */   "boolean": () => /* reexport module object */ _boolean__WEBPACK_IMPORTED_MODULE_1__,
/* harmony export */   "other": () => /* reexport module object */ _other__WEBPACK_IMPORTED_MODULE_2__,
/* harmony export */   "trained": () => /* reexport module object */ _trained__WEBPACK_IMPORTED_MODULE_3__
/* harmony export */ });
/* harmony import */ var _arithmetic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic */ "./src/config/networks/arithmetic/index.js");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boolean */ "./src/config/networks/boolean/index.js");
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other */ "./src/config/networks/other/index.js");
/* harmony import */ var _trained__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trained */ "./src/config/networks/trained/index.js");









/***/ }),

/***/ "./src/config/networks/other/index.js":
/*!********************************************!*\
  !*** ./src/config/networks/other/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chat": () => /* reexport module object */ _chat_yml__WEBPACK_IMPORTED_MODULE_0__,
/* harmony export */   "led": () => /* reexport module object */ _led_yml__WEBPACK_IMPORTED_MODULE_1__
/* harmony export */ });
/* harmony import */ var _chat_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.yml */ "./src/config/networks/other/chat.yml");
/* harmony import */ var _chat_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_yml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _led_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./led.yml */ "./src/config/networks/other/led.yml");
/* harmony import */ var _led_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_led_yml__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/config/networks/trained/index.js":
/*!**********************************************!*\
  !*** ./src/config/networks/trained/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => /* reexport module object */ _add_yml__WEBPACK_IMPORTED_MODULE_0__,
/* harmony export */   "and": () => /* reexport module object */ _and_yml__WEBPACK_IMPORTED_MODULE_1__,
/* harmony export */   "chat": () => /* reexport module object */ _chat_yml__WEBPACK_IMPORTED_MODULE_2__,
/* harmony export */   "led": () => /* reexport module object */ _led_yml__WEBPACK_IMPORTED_MODULE_3__,
/* harmony export */   "sub": () => /* reexport module object */ _sub_yml__WEBPACK_IMPORTED_MODULE_4__
/* harmony export */ });
/* harmony import */ var _add_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.yml */ "./src/config/networks/trained/add.yml");
/* harmony import */ var _add_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_yml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _and_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./and.yml */ "./src/config/networks/trained/and.yml");
/* harmony import */ var _and_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_and_yml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chat_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.yml */ "./src/config/networks/trained/chat.yml");
/* harmony import */ var _chat_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chat_yml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _led_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./led.yml */ "./src/config/networks/trained/led.yml");
/* harmony import */ var _led_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_led_yml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sub_yml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub.yml */ "./src/config/networks/trained/sub.yml");
/* harmony import */ var _sub_yml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sub_yml__WEBPACK_IMPORTED_MODULE_4__);







/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.identity */ "./node_modules/lodash.identity/index.js");
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_identity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_invert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.invert */ "./node_modules/lodash.invert/index.js");
/* harmony import */ var lodash_invert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_invert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isnil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.isnil */ "./node_modules/lodash.isnil/index.js");
/* harmony import */ var lodash_isnil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isnil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_omitby__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.omitby */ "./node_modules/lodash.omitby/index.js");
/* harmony import */ var lodash_omitby__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_omitby__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.pick */ "./node_modules/lodash.pick/index.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.reverse */ "./node_modules/lodash.reverse/index.js");
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_reverse__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.round */ "./node_modules/lodash.round/index.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_11__);












var helper = {
  arrayCount: function arrayCount(count) {
    return Array.from(Array(count));
  },
  buildArray: function buildArray(count) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : helper.identity;
    var iterator = typeof value === 'function' ? value : function () {
      return value;
    };
    return helper.arrayCount(count).map(function (__, index) {
      return iterator(index);
    });
  },
  clip: function clip(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },
  compact: function compact(array) {
    return array.filter(function (item) {
      return !!item;
    });
  },
  delay: function () {
    var _delay = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var ms,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ms = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
              return _context.abrupt("return", new Promise(function (resolve) {
                setTimeout(resolve, ms);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function delay() {
      return _delay.apply(this, arguments);
    }

    return delay;
  }(),
  // eslint-disable-next-line no-compare-neg-zero
  fixZero: function fixZero(x) {
    return x === -0 ? 0 : x;
  },
  get: lodash_get__WEBPACK_IMPORTED_MODULE_2__,
  heEtAlWeightbuilder: function heEtAlWeightbuilder(layerLength) {
    return function () {
      return Math.random() * Math.sqrt(2 / layerLength);
    };
  },
  identity: lodash_identity__WEBPACK_IMPORTED_MODULE_3__,
  invert: lodash_invert__WEBPACK_IMPORTED_MODULE_4__,
  isEmpty: lodash_isempty__WEBPACK_IMPORTED_MODULE_5__,
  isEqual: lodash_isequal__WEBPACK_IMPORTED_MODULE_6__,
  isNil: lodash_isnil__WEBPACK_IMPORTED_MODULE_7__,
  mapCount: function mapCount(count, iterator) {
    return helper.arrayCount(count).map(iterator);
  },
  omitBy: lodash_omitby__WEBPACK_IMPORTED_MODULE_8__,
  pick: lodash_pick__WEBPACK_IMPORTED_MODULE_9__,
  random: function random(min, max) {
    return Math.random() * (max - min) + min;
  },
  repeat: function repeat(count, iterator) {
    helper.arrayCount(count).forEach(function (value, index) {
      iterator(index);
    });
  },
  reverse: lodash_reverse__WEBPACK_IMPORTED_MODULE_10__,
  round: lodash_round__WEBPACK_IMPORTED_MODULE_11__,
  sum: function sum(values) {
    return values.reduce(function (acc, value) {
      return acc + value;
    }, 0);
  },
  toArray: function toArray(o) {
    return Array.isArray(o) ? o : [o];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helper);

/***/ }),

/***/ "./src/utils/id-generator.js":
/*!***********************************!*\
  !*** ./src/utils/id-generator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/utils/helper.js");

var counts = new Map();
var idGenerator = {
  clearIds: function clearIds() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    if (_helper__WEBPACK_IMPORTED_MODULE_0__.default.isNil(key)) {
      counts.delete(key);
    } else {
      counts.clear();
    }
  },
  getId: function getId() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var count = counts.get(key);
    var newCount = typeof count !== 'undefined' ? count + 1 : 1;
    counts.set(key, newCount);
    return "".concat(newCount);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idGenerator);

/***/ }),

/***/ "./src/utils/jsonable-collection.js":
/*!******************************************!*\
  !*** ./src/utils/jsonable-collection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonableCollection": () => /* binding */ JsonableCollection
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var JsonableCollection = /*#__PURE__*/function () {
  function JsonableCollection() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JsonableCollection);

    this.type = this.constructor.name;

    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    this.items = [].concat(items);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JsonableCollection, [{
    key: "first",
    get: function get() {
      return this.items[0];
    }
  }, {
    key: "last",
    get: function get() {
      return this.items[this.items.length - 1];
    }
  }, {
    key: "length",
    get: function get() {
      return this.items.length;
    }
  }, {
    key: "clear",
    value: function clear() {
      while (this.length > 0) {
        this.pop();
      }
    }
  }, {
    key: "find",
    value: function find(predicate) {
      return this.items.find(predicate);
    }
  }, {
    key: "forEach",
    value: function forEach(iterator) {
      this.items.forEach(iterator);
    }
  }, {
    key: "get",
    value: function get(index) {
      return this.items[index];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length < 1;
    }
  }, {
    key: "map",
    value: function map(iterator) {
      return this.items.map(iterator);
    }
  }, {
    key: "reduce",
    value: function reduce(reducer, initialValue) {
      return typeof initialValue === 'undefined' ? this.items.reduce(reducer) : this.items.reduce(reducer, initialValue);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.items.pop();
    }
  }, {
    key: "push",
    value: function push() {
      var _this$items;

      return (_this$items = this.items).push.apply(_this$items, arguments);
    }
  }, {
    key: "toJSON",
    value: function toJSON(options) {
      return {
        items: this.map(function (item) {
          return item.toJSON(options);
        }),
        type: this.type
      };
    }
  }]);

  return JsonableCollection;
}();



/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var log = {
  enabled: false,
  info: function info() {
    var _console;

    if (!log.enabled) {
      return;
    }

    (_console = console).log.apply(_console, arguments);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (log);

/***/ }),

/***/ "./src/utils/timer.js":
/*!****************************!*\
  !*** ./src/utils/timer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => /* binding */ Timer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/utils/helper.js");




var Timer = /*#__PURE__*/function () {
  function Timer(opt) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Timer);

    this.freq = Number(_helper__WEBPACK_IMPORTED_MODULE_2__.default.get(opt, 'freq', 1));
    this.handle = _helper__WEBPACK_IMPORTED_MODULE_2__.default.get(opt, 'handle');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Timer, [{
    key: "start",
    value: function start() {
      if (this.id) {
        return false;
      }

      this.id = setInterval(this.handle, this.freq);
      return true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.id) {
        return false;
      }

      clearInterval(this.id);
      this.id = undefined;
      return true;
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var _ann__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ann */ "./src/ann/index.js");
/* harmony import */ var _ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ann/connection/neuron-connections */ "./src/ann/connection/neuron-connections.js");
/* harmony import */ var _ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ann/neuron/neurons */ "./src/ann/neuron/neurons.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_id_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/id-generator */ "./src/utils/id-generator.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/log */ "./src/utils/log.js");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/timer */ "./src/utils/timer.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var networkConfig, network;

var postJsonMessage = function postJsonMessage(o) {
  postMessage(JSON.stringify(o));
};

onmessage = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref) {
    var data, cmd, category, type, inputs, outputs, _networkConfig, training, expectedMaxIterations, learningRate, usecases, hook, timer, trainingResult, networkExport;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = _ref.data;
            cmd = data.cmd;
            _utils_log__WEBPACK_IMPORTED_MODULE_10__.default.info("worker received ".concat(cmd, " command"));
            _context2.t0 = cmd;
            _context2.next = _context2.t0 === 'reset' ? 6 : _context2.t0 === 'run' ? 15 : _context2.t0 === 'train' ? 22 : 36;
            break;

          case 6:
            category = data.category, type = data.type;
            _ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_6__.Neurons.all.clear();
            _ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__.NeuronConnections.all.clear();
            _utils_id_generator__WEBPACK_IMPORTED_MODULE_9__.default.clearIds();
            networkConfig = _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.get(_config__WEBPACK_IMPORTED_MODULE_7__.default.networks, [category, type]);
            network = _ann__WEBPACK_IMPORTED_MODULE_4__.AnnNetwork.build(networkConfig);
            postJsonMessage(_ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_6__.Neurons.all.toJSON());
            postJsonMessage(_ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__.NeuronConnections.all.toJSON());
            return _context2.abrupt("break", 36);

          case 15:
            inputs = data.inputs;
            _context2.next = 18;
            return network.run(inputs.map(function (item, index) {
              var input = network.inputLayer.get(index);

              switch (input.normalizer.id) {
                case 'boolean':
                  return item === 'true';

                case 'integer':
                  return parseInt(item, 10);

                case 'string':
                default:
                  return item;
              }
            }));

          case 18:
            outputs = _context2.sent;
            postJsonMessage({
              outputs: outputs,
              type: 'runResult'
            });
            postJsonMessage(_ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_6__.Neurons.all.toJSON());
            return _context2.abrupt("break", 36);

          case 22:
            _networkConfig = networkConfig, training = _networkConfig.training;
            expectedMaxIterations = training.expectedMaxIterations, learningRate = training.learningRate, usecases = training.usecases;

            hook = /*#__PURE__*/function () {
              var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref3) {
                var iterations;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        iterations = _ref3.iterations;
                        postJsonMessage({
                          expectedMaxIterations: expectedMaxIterations,
                          iterations: iterations,
                          type: 'trainingIteration'
                        });
                        _context.next = 4;
                        return _utils_helper__WEBPACK_IMPORTED_MODULE_8__.default.delay(50);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function hook(_x2) {
                return _ref4.apply(this, arguments);
              };
            }();

            timer = new _utils_timer__WEBPACK_IMPORTED_MODULE_11__.Timer({
              freq: 500,
              handle: function handle() {
                postJsonMessage(_ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__.NeuronConnections.all.toJSON());
              }
            });
            timer.start();
            _context2.next = 29;
            return network.train({
              expectedMaxIterations: expectedMaxIterations,
              hook: hook,
              learningRate: learningRate,
              usecases: usecases
            });

          case 29:
            trainingResult = _context2.sent;
            timer.stop();
            networkExport = network.toJSON({
              withoutValues: true
            });
            console.log((0,js_yaml__WEBPACK_IMPORTED_MODULE_3__.dump)(_objectSpread(_objectSpread({}, networkExport), {}, {
              training: training
            }), {
              noRefs: true
            }));
            postJsonMessage(_ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_5__.NeuronConnections.all.toJSON());
            postJsonMessage({
              trainingResult: trainingResult,
              type: 'trainingResult'
            });
            return _context2.abrupt("break", 36);

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function onmessage(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/config/networks/arithmetic/add.yml":
/*!************************************************!*\
  !*** ./src/config/networks/arithmetic/add.yml ***!
  \************************************************/
/***/ ((module) => {

const doc = [({"id":"ADD operation", "inputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})}), ({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})})], "outputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":200})})], "hiddenLayersCounts":[], "strategy":({"id":"identity", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":50, "learningRate":0.2})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/arithmetic/divide.yml":
/*!***************************************************!*\
  !*** ./src/config/networks/arithmetic/divide.yml ***!
  \***************************************************/
/***/ ((module) => {

const doc = [({"id":"DIVIDE operation", "inputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":1, "max":10})}), ({"normalizerRef":"integer", "normalizerOptions":({"min":1, "max":10})})], "outputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":10})})], "hiddenLayersCounts":[2, 3, 2], "strategy":({"id":"identity", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":1000, "learningRate":0.2})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/arithmetic/multiply.yml":
/*!*****************************************************!*\
  !*** ./src/config/networks/arithmetic/multiply.yml ***!
  \*****************************************************/
/***/ ((module) => {

const doc = [({"id":"MULTIPLY operation", "inputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":10})}), ({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":10})})], "outputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})})], "hiddenLayersCounts":[], "strategy":({"id":"multiply", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":2, "learningRate":0.2})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/arithmetic/sub.yml":
/*!************************************************!*\
  !*** ./src/config/networks/arithmetic/sub.yml ***!
  \************************************************/
/***/ ((module) => {

const doc = [({"id":"SUB operation", "inputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})}), ({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})})], "outputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":-100, "max":100})})], "hiddenLayersCounts":[], "strategy":({"id":"identity", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":50, "learningRate":0.2})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/boolean/and.yml":
/*!*********************************************!*\
  !*** ./src/config/networks/boolean/and.yml ***!
  \*********************************************/
/***/ ((module) => {

const doc = [({"id":"AND operation", "inputs":[({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"})], "hiddenLayersCounts":[3], "outputs":[({"normalizerRef":"boolean"})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":100, "learningRate":0.2, "usecases":[({"inputs":[false, false], "outputs":false}), ({"inputs":[false, true], "outputs":false}), ({"inputs":[true, false], "outputs":false}), ({"inputs":[true, true], "outputs":true})]})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/boolean/or.yml":
/*!********************************************!*\
  !*** ./src/config/networks/boolean/or.yml ***!
  \********************************************/
/***/ ((module) => {

const doc = [({"id":"OR operation", "inputs":[({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"})], "hiddenLayersCounts":[3], "outputs":[({"normalizerRef":"boolean"})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":100, "learningRate":0.2, "usecases":[({"inputs":[false, false], "outputs":false}), ({"inputs":[false, true], "outputs":true}), ({"inputs":[true, false], "outputs":true}), ({"inputs":[true, true], "outputs":true})]})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/boolean/xor.yml":
/*!*********************************************!*\
  !*** ./src/config/networks/boolean/xor.yml ***!
  \*********************************************/
/***/ ((module) => {

const doc = [({"id":"XOR operation", "inputs":[({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"})], "hiddenLayersCounts":[3], "outputs":[({"normalizerRef":"boolean"})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":3000, "learningRate":0.2, "usecases":[({"inputs":[false, false], "outputs":false}), ({"inputs":[false, true], "outputs":true}), ({"inputs":[true, false], "outputs":true}), ({"inputs":[true, true], "outputs":false})]})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/other/chat.yml":
/*!********************************************!*\
  !*** ./src/config/networks/other/chat.yml ***!
  \********************************************/
/***/ ((module) => {

const doc = [({"id":"Chat bot", "inputs":[({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"})], "hiddenLayersCounts":[6], "outputs":[({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"}), ({"normalizerRef":"phrase"})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":2000, "learningRate":0.2, "usecases":[({"inputs":["how", "are", "you", "?", " "], "outputs":["fine", "thank", "you", " ", " "]}), ({"inputs":["what", "is", "your", "name", "?"], "outputs":["my", "name", "is", "robert", " "]}), ({"inputs":["how", "old", "are", "you", "?"], "outputs":["i", "do", "not", "know", " "]}), ({"inputs":["do", "you", "love", "me", "?"], "outputs":["i", "love", "you", " ", " "]}), ({"inputs":["will", "you", "marry", "me", "?"], "outputs":["are", "you", "single", "?", " "]})]})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/other/led.yml":
/*!*******************************************!*\
  !*** ./src/config/networks/other/led.yml ***!
  \*******************************************/
/***/ ((module) => {

const doc = [({"id":"LED operation", "inputs":[({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"}), ({"normalizerRef":"boolean"})], "hiddenLayersCounts":[8], "outputs":[({"normalizerRef":"integer", "normalizerOptions":({"min":0, "max":9})})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "training":({"expectedMaxIterations":2000, "learningRate":0.2, "usecases":[({"inputs":[true, true, true, true, true, true, false], "outputs":0}), ({"inputs":[false, true, true, false, false, false, false], "outputs":1}), ({"inputs":[true, true, false, true, true, false, true], "outputs":2}), ({"inputs":[true, true, true, true, false, false, true], "outputs":3}), ({"inputs":[false, true, true, false, false, true, true], "outputs":4}), ({"inputs":[true, false, true, true, false, true, true], "outputs":5}), ({"inputs":[true, false, true, true, true, true, true], "outputs":6}), ({"inputs":[true, true, true, false, false, false, false], "outputs":7}), ({"inputs":[true, true, true, true, true, true, true], "outputs":8}), ({"inputs":[true, true, true, true, false, true, true], "outputs":9})]})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/trained/add.yml":
/*!*********************************************!*\
  !*** ./src/config/networks/trained/add.yml ***!
  \*********************************************/
/***/ ((module) => {

const doc = [({"id":"ADD operation", "inputs":[({"bias":0, "depth":0, "id":"1", "index":0, "normalizerOptions":({"min":0, "max":100}), "normalizerRef":"integer"}), ({"bias":0, "depth":0, "id":"2", "index":1, "normalizerOptions":({"min":0, "max":100}), "normalizerRef":"integer"})], "hiddenLayers":[], "outputs":[({"bias":0, "depth":1, "id":"3", "index":0, "normalizerOptions":({"min":0, "max":200}), "normalizerRef":"integer"})], "strategy":({"id":"identity", "options":({"minWeight":-1000, "maxWeight":1000})}), "connections":[({"id":"4", "sourceRef":"1", "targetRef":"3", "weight":0.5}), ({"id":"5", "sourceRef":"2", "targetRef":"3", "weight":0.5})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/trained/and.yml":
/*!*********************************************!*\
  !*** ./src/config/networks/trained/and.yml ***!
  \*********************************************/
/***/ ((module) => {

const doc = [({"id":"AND operation", "inputs":[({"bias":-0.837520028419775, "depth":0, "id":"1", "index":0, "normalizerRef":"boolean"}), ({"bias":-0.9848074921519561, "depth":0, "id":"2", "index":1, "normalizerRef":"boolean"})], "hiddenLayers":[[({"bias":-0.20410244501524996, "depth":1, "id":"3", "index":0}), ({"bias":-0.22622223281926324, "depth":1, "id":"4", "index":1}), ({"bias":0.8429391423118401, "depth":1, "id":"5", "index":2})]], "outputs":[({"bias":-0.5400357699485421, "depth":2, "id":"6", "index":0, "normalizerRef":"boolean"})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "connections":[({"id":"7", "sourceRef":"1", "targetRef":"3", "weight":0.07048612690459811}), ({"id":"8", "sourceRef":"1", "targetRef":"4", "weight":0.9808563762099686}), ({"id":"9", "sourceRef":"1", "targetRef":"5", "weight":0.8228271648764652}), ({"id":"10", "sourceRef":"2", "targetRef":"3", "weight":0.9550733622028551}), ({"id":"11", "sourceRef":"2", "targetRef":"4", "weight":0.8200947797809954}), ({"id":"12", "sourceRef":"2", "targetRef":"5", "weight":0.2730735167633184}), ({"id":"13", "sourceRef":"3", "targetRef":"6", "weight":0.12478003943482976}), ({"id":"14", "sourceRef":"4", "targetRef":"6", "weight":0.07692732528922198}), ({"id":"15", "sourceRef":"5", "targetRef":"6", "weight":0.49442324722038644})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/trained/chat.yml":
/*!**********************************************!*\
  !*** ./src/config/networks/trained/chat.yml ***!
  \**********************************************/
/***/ ((module) => {

const doc = [({"id":"Chat bot", "inputs":[({"bias":0.8610184746710541, "depth":0, "id":"1", "index":0, "normalizerRef":"phrase"}), ({"bias":-0.8699452909197398, "depth":0, "id":"2", "index":1, "normalizerRef":"phrase"}), ({"bias":-0.4564835452036764, "depth":0, "id":"3", "index":2, "normalizerRef":"phrase"}), ({"bias":0.14613567773935765, "depth":0, "id":"4", "index":3, "normalizerRef":"phrase"}), ({"bias":0.9495839327351137, "depth":0, "id":"5", "index":4, "normalizerRef":"phrase"})], "hiddenLayers":[[({"bias":0.39919925865685923, "depth":1, "id":"6", "index":0}), ({"bias":-2.497797745695511, "depth":1, "id":"7", "index":1}), ({"bias":1.5677478356612664, "depth":1, "id":"8", "index":2}), ({"bias":-1.829842349810092, "depth":1, "id":"9", "index":3}), ({"bias":-0.6292813057014113, "depth":1, "id":"10", "index":4}), ({"bias":1.465522169546769, "depth":1, "id":"11", "index":5})]], "outputs":[({"bias":-1.355342302942448, "depth":2, "id":"12", "index":0, "normalizerRef":"phrase"}), ({"bias":0.2868915493765967, "depth":2, "id":"13", "index":1, "normalizerRef":"phrase"}), ({"bias":0.6901393095491567, "depth":2, "id":"14", "index":2, "normalizerRef":"phrase"}), ({"bias":-3.3672816131594834, "depth":2, "id":"15", "index":3, "normalizerRef":"phrase"}), ({"bias":-2.6233476669316076, "depth":2, "id":"16", "index":4, "normalizerRef":"phrase"})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "connections":[({"id":"17", "sourceRef":"1", "targetRef":"6", "weight":1.2027775289415104}), ({"id":"18", "sourceRef":"1", "targetRef":"7", "weight":5.225895647809238}), ({"id":"19", "sourceRef":"1", "targetRef":"8", "weight":-0.39628026025375224}), ({"id":"20", "sourceRef":"1", "targetRef":"9", "weight":4.877178361249887}), ({"id":"21", "sourceRef":"1", "targetRef":"10", "weight":0.340464529217619}), ({"id":"22", "sourceRef":"1", "targetRef":"11", "weight":0.49774336803416874}), ({"id":"23", "sourceRef":"2", "targetRef":"6", "weight":2.084220528538878}), ({"id":"24", "sourceRef":"2", "targetRef":"7", "weight":1.7471636315545662}), ({"id":"25", "sourceRef":"2", "targetRef":"8", "weight":0.6407058461998039}), ({"id":"26", "sourceRef":"2", "targetRef":"9", "weight":-3.1429536147275665}), ({"id":"27", "sourceRef":"2", "targetRef":"10", "weight":0.21750511069953507}), ({"id":"28", "sourceRef":"2", "targetRef":"11", "weight":0.858050547608829}), ({"id":"29", "sourceRef":"3", "targetRef":"6", "weight":1.3166752909805717}), ({"id":"30", "sourceRef":"3", "targetRef":"7", "weight":-3.7681713451847294}), ({"id":"31", "sourceRef":"3", "targetRef":"8", "weight":0.553162407969252}), ({"id":"32", "sourceRef":"3", "targetRef":"9", "weight":-1.7660213072696682}), ({"id":"33", "sourceRef":"3", "targetRef":"10", "weight":-2.1468917353126917}), ({"id":"34", "sourceRef":"3", "targetRef":"11", "weight":0.8322780833902329}), ({"id":"35", "sourceRef":"4", "targetRef":"6", "weight":-1.527423145291119}), ({"id":"36", "sourceRef":"4", "targetRef":"7", "weight":-0.5538158554051614}), ({"id":"37", "sourceRef":"4", "targetRef":"8", "weight":0.9441022256774074}), ({"id":"38", "sourceRef":"4", "targetRef":"9", "weight":0.1683707445685575}), ({"id":"39", "sourceRef":"4", "targetRef":"10", "weight":0.6159434224840831}), ({"id":"40", "sourceRef":"4", "targetRef":"11", "weight":0.8373515105347205}), ({"id":"41", "sourceRef":"5", "targetRef":"6", "weight":-1.489064616009017}), ({"id":"42", "sourceRef":"5", "targetRef":"7", "weight":-0.2406569998646229}), ({"id":"43", "sourceRef":"5", "targetRef":"8", "weight":0.33146996908224685}), ({"id":"44", "sourceRef":"5", "targetRef":"9", "weight":3.1499688337591336}), ({"id":"45", "sourceRef":"5", "targetRef":"10", "weight":2.0165480718673834}), ({"id":"46", "sourceRef":"5", "targetRef":"11", "weight":0.8200873670538696}), ({"id":"47", "sourceRef":"6", "targetRef":"12", "weight":0.6853413617276275}), ({"id":"48", "sourceRef":"6", "targetRef":"13", "weight":3.0108526877601265}), ({"id":"49", "sourceRef":"6", "targetRef":"14", "weight":1.1874103547782775}), ({"id":"50", "sourceRef":"6", "targetRef":"15", "weight":-0.8952815600403676}), ({"id":"51", "sourceRef":"6", "targetRef":"16", "weight":-1.2820951486474452}), ({"id":"52", "sourceRef":"7", "targetRef":"12", "weight":-3.3255386968274525}), ({"id":"53", "sourceRef":"7", "targetRef":"13", "weight":3.643691241869853}), ({"id":"54", "sourceRef":"7", "targetRef":"14", "weight":1.7313851855814975}), ({"id":"55", "sourceRef":"7", "targetRef":"15", "weight":4.495955314573213}), ({"id":"56", "sourceRef":"7", "targetRef":"16", "weight":-0.6367873787255275}), ({"id":"57", "sourceRef":"8", "targetRef":"12", "weight":-0.34463996232967403}), ({"id":"58", "sourceRef":"8", "targetRef":"13", "weight":-0.5462488194826626}), ({"id":"59", "sourceRef":"8", "targetRef":"14", "weight":0.5918095543677917}), ({"id":"60", "sourceRef":"8", "targetRef":"15", "weight":-1.8110224512538466}), ({"id":"61", "sourceRef":"8", "targetRef":"16", "weight":-1.6312062001968717}), ({"id":"62", "sourceRef":"9", "targetRef":"12", "weight":1.7213368922882109}), ({"id":"63", "sourceRef":"9", "targetRef":"13", "weight":-0.4190602584810193}), ({"id":"64", "sourceRef":"9", "targetRef":"14", "weight":-3.911892989839252}), ({"id":"65", "sourceRef":"9", "targetRef":"15", "weight":6.985006430827335}), ({"id":"66", "sourceRef":"9", "targetRef":"16", "weight":-1.171882746618629}), ({"id":"67", "sourceRef":"10", "targetRef":"12", "weight":0.6345543294486099}), ({"id":"68", "sourceRef":"10", "targetRef":"13", "weight":-3.3109637770872955}), ({"id":"69", "sourceRef":"10", "targetRef":"14", "weight":0.31427998940207247}), ({"id":"70", "sourceRef":"10", "targetRef":"15", "weight":1.2089564572547253}), ({"id":"71", "sourceRef":"10", "targetRef":"16", "weight":-1.1723518995608773}), ({"id":"72", "sourceRef":"11", "targetRef":"12", "weight":-0.47938341644396626}), ({"id":"73", "sourceRef":"11", "targetRef":"13", "weight":-0.2594886687417807}), ({"id":"74", "sourceRef":"11", "targetRef":"14", "weight":0.2361783687884133}), ({"id":"75", "sourceRef":"11", "targetRef":"15", "weight":-1.3671001136274}), ({"id":"76", "sourceRef":"11", "targetRef":"16", "weight":-2.0638244029341934})], "training":({"expectedMaxIterations":2000, "learningRate":0.2, "usecases":[({"inputs":["how", "are", "you", "?", " "], "outputs":["fine", "thank", "you", " ", " "]}), ({"inputs":["what", "is", "your", "name", "?"], "outputs":["my", "name", "is", "robert", " "]}), ({"inputs":["how", "old", "are", "you", "?"], "outputs":["i", "do", "not", "know", " "]}), ({"inputs":["do", "you", "love", "me", "?"], "outputs":["i", "love", "you", " ", " "]}), ({"inputs":["will", "you", "marry", "me", "?"], "outputs":["are", "you", "single", "?", " "]})]})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/trained/led.yml":
/*!*********************************************!*\
  !*** ./src/config/networks/trained/led.yml ***!
  \*********************************************/
/***/ ((module) => {

const doc = [({"id":"LED operation", "inputs":[({"bias":-0.7432137687409002, "depth":0, "id":"1", "index":0, "normalizerRef":"boolean"}), ({"bias":-0.33900914308822383, "depth":0, "id":"2", "index":1, "normalizerRef":"boolean"}), ({"bias":-0.0019701190220540177, "depth":0, "id":"3", "index":2, "normalizerRef":"boolean"}), ({"bias":-0.7334466359956395, "depth":0, "id":"4", "index":3, "normalizerRef":"boolean"}), ({"bias":-0.3788240143990702, "depth":0, "id":"5", "index":4, "normalizerRef":"boolean"}), ({"bias":-0.5569988015184082, "depth":0, "id":"6", "index":5, "normalizerRef":"boolean"}), ({"bias":0.7822162011928584, "depth":0, "id":"7", "index":6, "normalizerRef":"boolean"})], "hiddenLayers":[[({"bias":0.19488066957307212, "depth":1, "id":"8", "index":0}), ({"bias":-0.931916338862864, "depth":1, "id":"9", "index":1}), ({"bias":-2.1010182733021168, "depth":1, "id":"10", "index":2}), ({"bias":-2.667224694623567, "depth":1, "id":"11", "index":3}), ({"bias":-0.4534802447884449, "depth":1, "id":"12", "index":4}), ({"bias":1.364504008677613, "depth":1, "id":"13", "index":5}), ({"bias":0.06474847421798936, "depth":1, "id":"14", "index":6}), ({"bias":1.1183529829355265, "depth":1, "id":"15", "index":7})]], "outputs":[({"bias":-2.3680045702868844, "depth":2, "id":"16", "index":0, "normalizerRef":"integer", "normalizerOptions":({"min":0, "max":9})})], "strategy":({"id":"logistic", "options":({"minWeight":-1000, "maxWeight":1000})}), "connections":[({"id":"17", "sourceRef":"1", "targetRef":"8", "weight":0.6378712753050386}), ({"id":"18", "sourceRef":"1", "targetRef":"9", "weight":0.7560360286534732}), ({"id":"19", "sourceRef":"1", "targetRef":"10", "weight":3.9393701275477335}), ({"id":"20", "sourceRef":"1", "targetRef":"11", "weight":0.9808387373669091}), ({"id":"21", "sourceRef":"1", "targetRef":"12", "weight":0.6327869106021276}), ({"id":"22", "sourceRef":"1", "targetRef":"13", "weight":0.1737807021424238}), ({"id":"23", "sourceRef":"1", "targetRef":"14", "weight":0.2271750990775105}), ({"id":"24", "sourceRef":"1", "targetRef":"15", "weight":0.2654365131950569}), ({"id":"25", "sourceRef":"2", "targetRef":"8", "weight":0.3585400619792773}), ({"id":"26", "sourceRef":"2", "targetRef":"9", "weight":0.25167266488698103}), ({"id":"27", "sourceRef":"2", "targetRef":"10", "weight":-0.4570849435288354}), ({"id":"28", "sourceRef":"2", "targetRef":"11", "weight":2.2131509414878856}), ({"id":"29", "sourceRef":"2", "targetRef":"12", "weight":0.2675623729351179}), ({"id":"30", "sourceRef":"2", "targetRef":"13", "weight":0.560237740192189}), ({"id":"31", "sourceRef":"2", "targetRef":"14", "weight":0.6188667519041672}), ({"id":"32", "sourceRef":"2", "targetRef":"15", "weight":0.25269499288220004}), ({"id":"33", "sourceRef":"3", "targetRef":"8", "weight":0.8811941808424776}), ({"id":"34", "sourceRef":"3", "targetRef":"9", "weight":0.20211133793684333}), ({"id":"35", "sourceRef":"3", "targetRef":"10", "weight":-0.5165038261794364}), ({"id":"36", "sourceRef":"3", "targetRef":"11", "weight":0.6741762064512934}), ({"id":"37", "sourceRef":"3", "targetRef":"12", "weight":0.6353994984275747}), ({"id":"38", "sourceRef":"3", "targetRef":"13", "weight":0.6904700715446427}), ({"id":"39", "sourceRef":"3", "targetRef":"14", "weight":0.7747398637849097}), ({"id":"40", "sourceRef":"3", "targetRef":"15", "weight":0.4883248118343551}), ({"id":"41", "sourceRef":"4", "targetRef":"8", "weight":0.7013381825513382}), ({"id":"42", "sourceRef":"4", "targetRef":"9", "weight":0.3586347566970062}), ({"id":"43", "sourceRef":"4", "targetRef":"10", "weight":0.3931318835417196}), ({"id":"44", "sourceRef":"4", "targetRef":"11", "weight":-5.209867869614708}), ({"id":"45", "sourceRef":"4", "targetRef":"12", "weight":0.1617318075977359}), ({"id":"46", "sourceRef":"4", "targetRef":"13", "weight":0.8945027098686905}), ({"id":"47", "sourceRef":"4", "targetRef":"14", "weight":1.1365144773342486}), ({"id":"48", "sourceRef":"4", "targetRef":"15", "weight":0.9749553023838016}), ({"id":"49", "sourceRef":"5", "targetRef":"8", "weight":0.43306169689665225}), ({"id":"50", "sourceRef":"5", "targetRef":"9", "weight":-0.009533175563254387}), ({"id":"51", "sourceRef":"5", "targetRef":"10", "weight":-0.3356942850435067}), ({"id":"52", "sourceRef":"5", "targetRef":"11", "weight":0.19909194096270116}), ({"id":"53", "sourceRef":"5", "targetRef":"12", "weight":-0.1810510304231916}), ({"id":"54", "sourceRef":"5", "targetRef":"13", "weight":0.10488800652534391}), ({"id":"55", "sourceRef":"5", "targetRef":"14", "weight":0.06472978184854933}), ({"id":"56", "sourceRef":"5", "targetRef":"15", "weight":0.5939600996736686}), ({"id":"57", "sourceRef":"6", "targetRef":"8", "weight":0.6248117453900757}), ({"id":"58", "sourceRef":"6", "targetRef":"9", "weight":0.4806974248619475}), ({"id":"59", "sourceRef":"6", "targetRef":"10", "weight":-1.593615619562083}), ({"id":"60", "sourceRef":"6", "targetRef":"11", "weight":3.045343168775982}), ({"id":"61", "sourceRef":"6", "targetRef":"12", "weight":0.02449214427988382}), ({"id":"62", "sourceRef":"6", "targetRef":"13", "weight":0.6029287356412771}), ({"id":"63", "sourceRef":"6", "targetRef":"14", "weight":0.8126926869352356}), ({"id":"64", "sourceRef":"6", "targetRef":"15", "weight":0.9258614869489713}), ({"id":"65", "sourceRef":"7", "targetRef":"8", "weight":0.8066151277041237}), ({"id":"66", "sourceRef":"7", "targetRef":"9", "weight":0.48119690151660044}), ({"id":"67", "sourceRef":"7", "targetRef":"10", "weight":2.7007449202080234}), ({"id":"68", "sourceRef":"7", "targetRef":"11", "weight":2.987288298187818}), ({"id":"69", "sourceRef":"7", "targetRef":"12", "weight":0.6562678080318937}), ({"id":"70", "sourceRef":"7", "targetRef":"13", "weight":0.556475124644938}), ({"id":"71", "sourceRef":"7", "targetRef":"14", "weight":1.2219846282501396}), ({"id":"72", "sourceRef":"7", "targetRef":"15", "weight":0.9172944608533895}), ({"id":"73", "sourceRef":"8", "targetRef":"16", "weight":-0.760302206957252}), ({"id":"74", "sourceRef":"9", "targetRef":"16", "weight":0.6545527700411367}), ({"id":"75", "sourceRef":"10", "targetRef":"16", "weight":4.478158032331868}), ({"id":"76", "sourceRef":"11", "targetRef":"16", "weight":5.986720161183776}), ({"id":"77", "sourceRef":"12", "targetRef":"16", "weight":0.4221580668807277}), ({"id":"78", "sourceRef":"13", "targetRef":"16", "weight":-1.5625779617460855}), ({"id":"79", "sourceRef":"14", "targetRef":"16", "weight":-1.1703665289627498}), ({"id":"80", "sourceRef":"15", "targetRef":"16", "weight":-1.6386486272633674})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./src/config/networks/trained/sub.yml":
/*!*********************************************!*\
  !*** ./src/config/networks/trained/sub.yml ***!
  \*********************************************/
/***/ ((module) => {

const doc = [({"id":"SUB operation", "inputs":[({"bias":0.4125315860985901, "depth":0, "id":"1", "index":0, "normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})}), ({"bias":-0.08786108084946953, "depth":0, "id":"2", "index":1, "normalizerRef":"integer", "normalizerOptions":({"min":0, "max":100})})], "hiddenLayers":[], "outputs":[({"bias":0.5019079399994767, "depth":1, "id":"3", "index":0, "normalizerRef":"integer", "normalizerOptions":({"min":-100, "max":100})})], "strategy":({"id":"identity", "options":({"minWeight":-1000, "maxWeight":1000})}), "connections":[({"id":"4", "sourceRef":"1", "targetRef":"3", "weight":0.495754211459289}), ({"id":"5", "sourceRef":"2", "targetRef":"3", "weight":-0.500072143450385})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module
/******/ 		__webpack_require__("./src/worker.js");
/******/ 		// This entry module used 'exports' so it can't be inlined
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-ce5482").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var chunkLoadingCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts("" + __webpack_require__.u(chunkId));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkann"] = self["webpackChunkann"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = chunkLoadingCallback;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL2Nvbm5lY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9jb25uZWN0aW9uL25ldXJvbi1jb25uZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbGF5ZXIvaGlkZGVuLWxheWVyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbGF5ZXIvaGlkZGVuLWxheWVycy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL2xheWVyL2lucHV0LWxheWVyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbGF5ZXIvb3V0cHV0LWxheWVyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbmV1cm9uL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbmV1cm9uL2ludGVyLW5ldXJvbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25ldXJvbi9tb3Rvci1uZXVyb24uanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9uZXVyb24vbmV1cm9ucy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25ldXJvbi9zZW5zb3J5LW5ldXJvbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25vcm1hbGl6ZXIvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25vcm1hbGl6ZXIvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25vcm1hbGl6ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9ub3JtYWxpemVyL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9ub3JtYWxpemVyL3BocmFzZS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L2lkZW50aXR5LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vc3RyYXRlZ3kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9zdHJhdGVneS9sb2dpc3RpYy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L211bHRpcGx5LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vc3RyYXRlZ3kvcmVsdS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L3RhbmguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL2FyaXRobWV0aWMvYWRkLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9kaXZpZGUuanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9hcml0aG1ldGljL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL2FyaXRobWV0aWMvc3ViLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3Mvb3RoZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy90cmFpbmVkL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL3V0aWxzL2lkLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvdXRpbHMvanNvbmFibGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvdXRpbHMvbG9nLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy91dGlscy90aW1lci5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvd29ya2VyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9hZGQueW1sIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9kaXZpZGUueW1sIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9tdWx0aXBseS55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9hcml0aG1ldGljL3N1Yi55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9ib29sZWFuL2FuZC55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9ib29sZWFuL29yLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL2Jvb2xlYW4veG9yLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL290aGVyL2NoYXQueW1sIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3Mvb3RoZXIvbGVkLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL3RyYWluZWQvYWRkLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL3RyYWluZWQvYW5kLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL3RyYWluZWQvY2hhdC55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy90cmFpbmVkL2xlZC55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy90cmFpbmVkL3N1Yi55bWwiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fubi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hbm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fubi93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2Fubi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly9hbm4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJOZXVyb25Db25uZWN0aW9uIiwib3B0IiwidHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInNvdXJjZSIsInRhcmdldCIsIndlaWdodCIsImlkIiwiaGVscGVyIiwiaWRHZW5lcmF0b3IiLCJvdXRwdXRzIiwicHVzaCIsImlucHV0cyIsIk5ldXJvbkNvbm5lY3Rpb25zIiwiZGVsdGEiLCJsZWFybmluZ1JhdGUiLCJtaW5XZWlnaHQiLCJOdW1iZXIiLCJNSU5fVkFMVUUiLCJtYXhXZWlnaHQiLCJNQVhfVkFMVUUiLCJvbGRXZWlnaHQiLCJ2YWx1ZSIsInNvdXJjZVJlZiIsInRhcmdldFJlZiIsIk1hdGgiLCJyYW5kb20iLCJmb3JFYWNoIiwiaXRlbSIsInVwZGF0ZVdlaWdodCIsImFsbCIsImZpbmQiLCJKc29uYWJsZUNvbGxlY3Rpb24iLCJBbm5OZXR3b3JrIiwiaW5wdXRMYXllciIsImhpZGRlbkxheWVycyIsIm91dHB1dExheWVyIiwic3RyYXRlZ3kiLCJmaXJzdEhpZGRlbkxheWVyIiwiZmlyc3QiLCJsYXN0SGlkZGVuTGF5ZXIiLCJsYXN0IiwiaW5wdXRUYXJnZXRMYXllciIsImNvbm5lY3RUbyIsInJlZHVjZSIsInByZXZMYXllciIsIm5leHRMYXllciIsImluZGV4IiwibmV1cm9uIiwiZ2V0Iiwibm9ybWFsaXplVmFsdWUiLCJ2YWx1ZXMiLCJfXyIsInNldElucHV0VmFsdWUiLCJnZXREZW5vcm1hbGl6ZWRWYWx1ZSIsIm1hcCIsImdldE91dHB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZXMiLCJhY3RpdmF0ZSIsImdldE91dHB1dFZhbHVlcyIsInVzZWNhc2UiLCJvdXRwdXRWYWx1ZXMiLCJpc0VxdWFsVG9FeHBlY3RlZCIsImV4cGVjdGVkVmFsdWUiLCJub3JtYWxpemVyIiwidG8iLCJjYWxjdWxhdGVEZWx0YSIsInVwZGF0ZVdlaWdodHMiLCJpdGVtcyIsImxheWVyIiwicnVuIiwiYWRqdXN0RnJvbVVzZWNhc2UiLCJ1c2VjYXNlcyIsImFjYyIsInRyYWluRnJvbVVzZWNhc2UiLCJsb2ciLCJzbGljZSIsImpvaW4iLCJBcnJheSIsImlzQXJyYXkiLCJleHBlY3RlZE1heEl0ZXJhdGlvbnMiLCJob29rIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXN1bHQiLCJhdmVyYWdlRHVyYXRpb24iLCJlcXVhbFRvRXhwZWN0ZWQiLCJpdGVyYXRpb25zIiwidG90YWxEdXJhdGlvbiIsImhvb2tSZXN1bHQiLCJ0cmFpbkZyb21Vc2VjYXNlcyIsImVuZFRpbWUiLCJyb3VuZCIsIm9wdGlvbnMiLCJ0b0pTT04iLCJkYXRhIiwiaGlkZGVuTGF5ZXIiLCJjb25uZWN0aW9ucyIsImNvbmZpZyIsInN0cmF0ZWdpZXMiLCJpZGVudGl0eVN0cmF0ZWd5IiwiSW5wdXRMYXllciIsIk5vcm1hbGl6ZXIiLCJub3JtYWxpemVycyIsIm5vcm1hbGl6ZXJSZWYiLCJEZWZhdWx0Tm9ybWFsaXplciIsImJ1aWxkIiwibm9ybWFsaXplck9wdGlvbnMiLCJTZW5zb3J5TmV1cm9uIiwiYmlhcyIsIkhpZGRlbkxheWVycyIsIkhpZGRlbkxheWVyIiwiSW50ZXJOZXVyb24iLCJoaWRkZW5MYXllcnNDb3VudHMiLCJjb3VudCIsImRlcHRoIiwiT3V0cHV0TGF5ZXIiLCJNb3Rvck5ldXJvbiIsImxlbmd0aCIsIm5ldHdvcmsiLCJOZXVyb25zIiwiY29ubmVjdCIsImlvIiwidGFyZ2V0TGF5ZXIiLCJOZXVyb24iLCJjb2xvciIsImFjdGl2YXRpb24iLCJjb21iaW5lIiwiaW5wdXQiLCJjb25jYXQiLCJlcnJvciIsIm91dHB1dCIsImlzRW1wdHkiLCJqc29uYWJsZUNvbmZpZyIsIndpdGhvdXRWYWx1ZXMiLCJmcm9tIiwiQm9vbGVhbk5vcm1hbGl6ZXIiLCJ0aHJlc2hvbGQiLCJ0cnVlVmFsdWUiLCJNYXAiLCJJbnRlZ2VyTm9ybWFsaXplciIsIlBocmFzZU5vcm1hbGl6ZXIiLCJmaXhaZXJvIiwibWluIiwiTUlOX1NBRkVfSU5URUdFUiIsIm1heCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJwaHJhc2VzIiwiaW5kZXhPZiIsIkRpdmlkZVN0cmF0ZWd5Iiwid2VpZ2h0cyIsImRpdmlkZVN0cmF0ZWd5Iiwic3VtIiwiSWRlbnRpdHlTdHJhdGVneSIsImxvZ2lzdGljU3RyYXRlZ3kiLCJtdWx0aXBseVN0cmF0ZWd5IiwicmVsdVN0cmF0ZWd5IiwidGFuaFN0cmF0ZWd5IiwiTG9naXN0aWNTdHJhdGVneSIsImV4cCIsIk11bHRpcGx5U3RyYXRlZ3kiLCJSZWx1U3RyYXRlZ3kiLCJUYW5oU3RyYXRlZ3kiLCJwb3ciLCJuZXR3b3JrcyIsImJ1aWxkQXJyYXkiLCJtaW5YIiwieWFtbENvbmZpZyIsIm1heFgiLCJtaW5ZIiwibWF4WSIsImkiLCJ4IiwiaiIsInkiLCJ0cmFpbmluZyIsImFycmF5Q291bnQiLCJpZGVudGl0eSIsIml0ZXJhdG9yIiwiY2xpcCIsImNvbXBhY3QiLCJhcnJheSIsImZpbHRlciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoZUV0QWxXZWlnaHRidWlsZGVyIiwibGF5ZXJMZW5ndGgiLCJzcXJ0IiwiaW52ZXJ0IiwiaXNFcXVhbCIsImlzTmlsIiwibWFwQ291bnQiLCJvbWl0QnkiLCJwaWNrIiwicmVwZWF0IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJvIiwiY291bnRzIiwiY2xlYXJJZHMiLCJrZXkiLCJkZWxldGUiLCJjbGVhciIsImdldElkIiwibmV3Q291bnQiLCJzZXQiLCJwb3AiLCJwcmVkaWNhdGUiLCJyZWR1Y2VyIiwiaW5pdGlhbFZhbHVlIiwiZW5hYmxlZCIsImluZm8iLCJjb25zb2xlIiwiVGltZXIiLCJmcmVxIiwiaGFuZGxlIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidW5kZWZpbmVkIiwibmV0d29ya0NvbmZpZyIsInBvc3RKc29uTWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9ubWVzc2FnZSIsImNtZCIsImNhdGVnb3J5IiwicGFyc2VJbnQiLCJ0aW1lciIsInN0YXJ0IiwidHJhaW4iLCJ0cmFpbmluZ1Jlc3VsdCIsInN0b3AiLCJuZXR3b3JrRXhwb3J0IiwiZHVtcCIsIm5vUmVmcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLGdCO0FBU0osNEJBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQyxJQUFMLEdBQVksS0FBS0MsV0FBTCxDQUFpQkMsSUFBN0I7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLEdBQUcsQ0FBQ0ksTUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNMLEdBQUcsQ0FBQ0ssTUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsT0FBT04sR0FBRyxDQUFDTSxNQUFYLEtBQXNCLFVBQXRCLEdBQW1DTixHQUFHLENBQUNNLE1BQUosRUFBbkMsR0FB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRixFOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0hBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBOztXQUVBLGtCOzs7O1VDbENBO1VBQ0EiLCJmaWxlIjoic3JjX3dvcmtlcl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVscGVyIGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcidcbmltcG9ydCBpZEdlbmVyYXRvciBmcm9tICcuLi8uLi91dGlscy9pZC1nZW5lcmF0b3InXG5pbXBvcnQgeyBOZXVyb25Db25uZWN0aW9ucyB9IGZyb20gJy4vbmV1cm9uLWNvbm5lY3Rpb25zJ1xuXG5jbGFzcyBOZXVyb25Db25uZWN0aW9uIHtcbiAgc3RhdGljIGJ1aWxkKG9wdCkge1xuICAgIHJldHVybiBuZXcgTmV1cm9uQ29ubmVjdGlvbihvcHQpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFdlaWdodCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIDAuMDFcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdCkge1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuc291cmNlID0gb3B0LnNvdXJjZVxuICAgIHRoaXMudGFyZ2V0ID0gb3B0LnRhcmdldFxuICAgIHRoaXMud2VpZ2h0ID0gdHlwZW9mIG9wdC53ZWlnaHQgPT09ICdmdW5jdGlvbicgPyBvcHQud2VpZ2h0KCkgOiBvcHQud2VpZ2h0XG4gICAgdGhpcy5pZCA9IGhlbHBlci5nZXQob3B0LCAnaWQnLCBpZEdlbmVyYXRvci5nZXRJZCgpKVxuICAgIHRoaXMuc291cmNlLm91dHB1dHMucHVzaCh0aGlzKVxuICAgIHRoaXMudGFyZ2V0LmlucHV0cy5wdXNoKHRoaXMpXG4gICAgTmV1cm9uQ29ubmVjdGlvbnMuYWxsLnB1c2godGhpcylcbiAgfVxuXG4gIHVwZGF0ZVdlaWdodChkZWx0YSwgbGVhcm5pbmdSYXRlLCBtaW5XZWlnaHQgPSBOdW1iZXIuTUlOX1ZBTFVFLCBtYXhXZWlnaHQgPSBOdW1iZXIuTUFYX1ZBTFVFKSB7XG4gICAgY29uc3Qgb2xkV2VpZ2h0ID0gdGhpcy53ZWlnaHRcbiAgICB0aGlzLndlaWdodCA9XG4gICAgICBvbGRXZWlnaHQgKyBoZWxwZXIuY2xpcChkZWx0YSAqIHRoaXMuc291cmNlLnZhbHVlICogbGVhcm5pbmdSYXRlLCBtaW5XZWlnaHQsIG1heFdlaWdodClcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBzb3VyY2VSZWY6IHRoaXMuc291cmNlLmlkLFxuICAgICAgdGFyZ2V0UmVmOiB0aGlzLnRhcmdldC5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHdlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IE5ldXJvbkNvbm5lY3Rpb24gfVxuIiwiaW1wb3J0IHsgSnNvbmFibGVDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvanNvbmFibGUtY29sbGVjdGlvbidcblxuY2xhc3MgTmV1cm9uQ29ubmVjdGlvbnMgZXh0ZW5kcyBKc29uYWJsZUNvbGxlY3Rpb24ge1xuICBzdGF0aWMgYWxsID0gbmV3IE5ldXJvbkNvbm5lY3Rpb25zKClcblxuICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgcmV0dXJuIG5ldyBOZXVyb25Db25uZWN0aW9ucygpXG4gIH1cblxuICBzdGF0aWMgZ2V0KGlkKSB7XG4gICAgcmV0dXJuIE5ldXJvbkNvbm5lY3Rpb25zLmFsbC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClcbiAgfVxuXG4gIHVwZGF0ZVdlaWdodHMoZGVsdGEsIGxlYXJuaW5nUmF0ZSwgbWluV2VpZ2h0LCBtYXhXZWlnaHQpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0udXBkYXRlV2VpZ2h0KGRlbHRhLCBsZWFybmluZ1JhdGUsIG1pbldlaWdodCwgbWF4V2VpZ2h0KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgTmV1cm9uQ29ubmVjdGlvbnMgfVxuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi91dGlscy9oZWxwZXInXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCB7IE5ldXJvbkNvbm5lY3Rpb24gfSBmcm9tICcuL2Nvbm5lY3Rpb24nXG5pbXBvcnQgeyBOZXVyb25Db25uZWN0aW9ucyB9IGZyb20gJy4vY29ubmVjdGlvbi9uZXVyb24tY29ubmVjdGlvbnMnXG5pbXBvcnQgeyBIaWRkZW5MYXllciB9IGZyb20gJy4vbGF5ZXIvaGlkZGVuLWxheWVyJ1xuaW1wb3J0IHsgSGlkZGVuTGF5ZXJzIH0gZnJvbSAnLi9sYXllci9oaWRkZW4tbGF5ZXJzJ1xuaW1wb3J0IHsgSW5wdXRMYXllciB9IGZyb20gJy4vbGF5ZXIvaW5wdXQtbGF5ZXInXG5pbXBvcnQgeyBPdXRwdXRMYXllciB9IGZyb20gJy4vbGF5ZXIvb3V0cHV0LWxheWVyJ1xuaW1wb3J0IHsgSW50ZXJOZXVyb24gfSBmcm9tICcuL25ldXJvbi9pbnRlci1uZXVyb24nXG5pbXBvcnQgeyBNb3Rvck5ldXJvbiB9IGZyb20gJy4vbmV1cm9uL21vdG9yLW5ldXJvbidcbmltcG9ydCB7IE5ldXJvbnMgfSBmcm9tICcuL25ldXJvbi9uZXVyb25zJ1xuaW1wb3J0IHsgU2Vuc29yeU5ldXJvbiB9IGZyb20gJy4vbmV1cm9uL3NlbnNvcnktbmV1cm9uJ1xuaW1wb3J0IG5vcm1hbGl6ZXJzIGZyb20gJy4vbm9ybWFsaXplcidcbmltcG9ydCBEZWZhdWx0Tm9ybWFsaXplciBmcm9tICcuL25vcm1hbGl6ZXIvZGVmYXVsdCdcbmltcG9ydCBzdHJhdGVnaWVzIGZyb20gJy4vc3RyYXRlZ3knXG5pbXBvcnQgeyBpZGVudGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9pZGVudGl0eSdcblxuY2xhc3MgQW5uTmV0d29yayB7XG4gIHN0YXRpYyBidWlsZChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbmZpZ1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gc3RyYXRlZ2llcy5nZXQoY29uZmlnLnN0cmF0ZWd5LmlkKSB8fCBpZGVudGl0eVN0cmF0ZWd5XG4gICAgc3RyYXRlZ3kub3B0aW9ucyA9IGNvbmZpZy5zdHJhdGVneS5vcHRpb25zXG4gICAgbGV0IGlucHV0TGF5ZXIsIGhpZGRlbkxheWVycywgb3V0cHV0TGF5ZXJcbiAgICBpZiAoY29uZmlnLmlucHV0cykge1xuICAgICAgaW5wdXRMYXllciA9IElucHV0TGF5ZXIuYnVpbGQoXG4gICAgICAgIC4uLmNvbmZpZy5pbnB1dHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IE5vcm1hbGl6ZXIgPSBub3JtYWxpemVycy5nZXQoaXRlbS5ub3JtYWxpemVyUmVmKSB8fCBEZWZhdWx0Tm9ybWFsaXplclxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZXIgPSBOb3JtYWxpemVyLmJ1aWxkKGl0ZW0ubm9ybWFsaXplck9wdGlvbnMpXG4gICAgICAgICAgcmV0dXJuIFNlbnNvcnlOZXVyb24uYnVpbGQoe1xuICAgICAgICAgICAgYmlhczogaXRlbS5iaWFzLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZXIsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuICAgIGlmIChjb25maWcuaGlkZGVuTGF5ZXJzKSB7XG4gICAgICBoaWRkZW5MYXllcnMgPSBIaWRkZW5MYXllcnMuYnVpbGQoXG4gICAgICAgIC4uLmNvbmZpZy5oaWRkZW5MYXllcnMubWFwKFxuICAgICAgICAgIChoaWRkZW5MYXllcikgPT5cbiAgICAgICAgICAgIG5ldyBIaWRkZW5MYXllcihcbiAgICAgICAgICAgICAgLi4uaGlkZGVuTGF5ZXIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEludGVyTmV1cm9uLmJ1aWxkKHsgLi4uaXRlbSwgc3RyYXRlZ3kgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29uZmlnLmhpZGRlbkxheWVyc0NvdW50cykge1xuICAgICAgaGlkZGVuTGF5ZXJzID0gSGlkZGVuTGF5ZXJzLmJ1aWxkKFxuICAgICAgICAuLi5jb25maWcuaGlkZGVuTGF5ZXJzQ291bnRzLm1hcChcbiAgICAgICAgICAoY291bnQsIGRlcHRoKSA9PlxuICAgICAgICAgICAgbmV3IEhpZGRlbkxheWVyKFxuICAgICAgICAgICAgICAuLi5oZWxwZXIubWFwQ291bnQoY291bnQsIChfXywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgSW50ZXJOZXVyb24uYnVpbGQoe1xuICAgICAgICAgICAgICAgICAgZGVwdGg6IGRlcHRoICsgMSxcbiAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29uZmlnLm91dHB1dHMpIHtcbiAgICAgIG91dHB1dExheWVyID0gT3V0cHV0TGF5ZXIuYnVpbGQoXG4gICAgICAgIC4uLmNvbmZpZy5vdXRwdXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBOb3JtYWxpemVyID0gbm9ybWFsaXplcnMuZ2V0KGl0ZW0ubm9ybWFsaXplclJlZikgfHwgRGVmYXVsdE5vcm1hbGl6ZXJcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVyID0gTm9ybWFsaXplci5idWlsZChpdGVtLm5vcm1hbGl6ZXJPcHRpb25zKVxuICAgICAgICAgIHJldHVybiBNb3Rvck5ldXJvbi5idWlsZCh7XG4gICAgICAgICAgICBiaWFzOiBpdGVtLmJpYXMsXG4gICAgICAgICAgICBkZXB0aDogKGhpZGRlbkxheWVycyA/IGhpZGRlbkxheWVycy5sZW5ndGggOiAwKSArIDEsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgbm9ybWFsaXplcixcbiAgICAgICAgICAgIHN0cmF0ZWd5LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBuZXR3b3JrID0gbmV3IEFubk5ldHdvcmsoe1xuICAgICAgaGlkZGVuTGF5ZXJzLFxuICAgICAgaWQsXG4gICAgICBpbnB1dExheWVyLFxuICAgICAgb3V0cHV0TGF5ZXIsXG4gICAgICBzdHJhdGVneSxcbiAgICB9KVxuICAgIGlmIChjb25maWcuY29ubmVjdGlvbnMpIHtcbiAgICAgIGNvbmZpZy5jb25uZWN0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIE5ldXJvbkNvbm5lY3Rpb24uYnVpbGQoe1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIHNvdXJjZTogTmV1cm9ucy5nZXQoaXRlbS5zb3VyY2VSZWYpLFxuICAgICAgICAgIHRhcmdldDogTmV1cm9ucy5nZXQoaXRlbS50YXJnZXRSZWYpLFxuICAgICAgICAgIHdlaWdodDogaXRlbS53ZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXR3b3JrLmNvbm5lY3QoKVxuICAgIH1cbiAgICByZXR1cm4gbmV0d29ya1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkTm9ybWFsaXplcihpbykge1xuICAgIGNvbnN0IE5vcm1hbGl6ZXIgPSBub3JtYWxpemVycy5nZXQoaW8ubm9ybWFsaXplclJlZikgfHwgRGVmYXVsdE5vcm1hbGl6ZXJcbiAgICByZXR1cm4gTm9ybWFsaXplci5idWlsZChpby5ub3JtYWxpemVyT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdCkge1xuICAgIGNvbnN0IHsgaWQsIGlucHV0TGF5ZXIsIGhpZGRlbkxheWVycywgb3V0cHV0TGF5ZXIsIHN0cmF0ZWd5IH0gPSBvcHRcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmlucHV0TGF5ZXIgPSBpbnB1dExheWVyXG4gICAgdGhpcy5oaWRkZW5MYXllcnMgPSBoaWRkZW5MYXllcnNcbiAgICB0aGlzLm91dHB1dExheWVyID0gb3V0cHV0TGF5ZXJcbiAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3lcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3QgZmlyc3RIaWRkZW5MYXllciA9IHRoaXMuaGlkZGVuTGF5ZXJzLmZpcnN0XG4gICAgY29uc3QgbGFzdEhpZGRlbkxheWVyID0gdGhpcy5oaWRkZW5MYXllcnMubGFzdFxuICAgIGNvbnN0IGlucHV0VGFyZ2V0TGF5ZXIgPSBmaXJzdEhpZGRlbkxheWVyID8gZmlyc3RIaWRkZW5MYXllciA6IHRoaXMub3V0cHV0TGF5ZXJcbiAgICB0aGlzLmlucHV0TGF5ZXIuY29ubmVjdFRvKGlucHV0VGFyZ2V0TGF5ZXIpXG4gICAgaWYgKGxhc3RIaWRkZW5MYXllcikge1xuICAgICAgdGhpcy5oaWRkZW5MYXllcnMucmVkdWNlKChwcmV2TGF5ZXIsIG5leHRMYXllcikgPT4ge1xuICAgICAgICBwcmV2TGF5ZXIuY29ubmVjdFRvKG5leHRMYXllcilcbiAgICAgICAgcmV0dXJuIG5leHRMYXllclxuICAgICAgfSlcbiAgICAgIGxhc3RIaWRkZW5MYXllci5jb25uZWN0VG8odGhpcy5vdXRwdXRMYXllcilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNldElucHV0VmFsdWUoaW5kZXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV1cm9uID0gdGhpcy5pbnB1dExheWVyLmdldChpbmRleClcbiAgICBuZXVyb24ubm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBzZXRJbnB1dFZhbHVlcyh2YWx1ZXMpIHtcbiAgICB0aGlzLmlucHV0TGF5ZXIuZm9yRWFjaCgoX18sIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUoaW5kZXgsIHZhbHVlc1tpbmRleF0pXG4gICAgfSlcbiAgfVxuXG4gIGdldE91dHB1dFZhbHVlKGluZGV4KSB7XG4gICAgY29uc3QgbmV1cm9uID0gdGhpcy5vdXRwdXRMYXllci5nZXQoaW5kZXgpXG4gICAgcmV0dXJuIG5ldXJvbi5nZXREZW5vcm1hbGl6ZWRWYWx1ZSgpXG4gIH1cblxuICBnZXRPdXRwdXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0TGF5ZXIubWFwKChfXywgaW5kZXgpID0+IHRoaXMuZ2V0T3V0cHV0VmFsdWUoaW5kZXgpKVxuICB9XG5cbiAgcnVuKGlucHV0cykge1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZXMoaW5wdXRzKVxuICAgIHRoaXMuaGlkZGVuTGF5ZXJzLmFjdGl2YXRlKClcbiAgICB0aGlzLm91dHB1dExheWVyLmFjdGl2YXRlKClcbiAgICByZXR1cm4gdGhpcy5nZXRPdXRwdXRWYWx1ZXMoKVxuICB9XG5cbiAgYWRqdXN0RnJvbVVzZWNhc2UodXNlY2FzZSwgbGVhcm5pbmdSYXRlID0gMC4yKSB7XG4gICAgY29uc3Qgb3V0cHV0VmFsdWVzID0gdGhpcy5nZXRPdXRwdXRWYWx1ZXMoKVxuICAgIGNvbnN0IGlzRXF1YWxUb0V4cGVjdGVkID0gaGVscGVyLmlzRXF1YWwob3V0cHV0VmFsdWVzLCBoZWxwZXIudG9BcnJheSh1c2VjYXNlLm91dHB1dHMpKVxuICAgIGlmICghaXNFcXVhbFRvRXhwZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG91dHB1dHMgPSBoZWxwZXIudG9BcnJheSh1c2VjYXNlLm91dHB1dHMpXG4gICAgICB0aGlzLm91dHB1dExheWVyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uZXhwZWN0ZWRWYWx1ZSA9IGl0ZW0ubm9ybWFsaXplci50byhvdXRwdXRzW2luZGV4XSlcbiAgICAgICAgaXRlbS5jYWxjdWxhdGVEZWx0YSgpXG4gICAgICAgIGl0ZW0udXBkYXRlV2VpZ2h0cyhsZWFybmluZ1JhdGUpXG4gICAgICB9KVxuICAgICAgaGVscGVyLnJldmVyc2UodGhpcy5oaWRkZW5MYXllcnMuaXRlbXMpLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgIGxheWVyLmZvckVhY2goKG5ldXJvbikgPT4ge1xuICAgICAgICAgIG5ldXJvbi5jYWxjdWxhdGVEZWx0YSgpXG4gICAgICAgICAgbmV1cm9uLnVwZGF0ZVdlaWdodHMobGVhcm5pbmdSYXRlKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGlzRXF1YWxUb0V4cGVjdGVkXG4gIH1cblxuICB0cmFpbkZyb21Vc2VjYXNlKHVzZWNhc2UsIGxlYXJuaW5nUmF0ZSkge1xuICAgIHRoaXMucnVuKHVzZWNhc2UuaW5wdXRzKVxuICAgIHJldHVybiB0aGlzLmFkanVzdEZyb21Vc2VjYXNlKHVzZWNhc2UsIGxlYXJuaW5nUmF0ZSlcbiAgfVxuXG4gIHRyYWluRnJvbVVzZWNhc2VzKHVzZWNhc2VzLCBsZWFybmluZ1JhdGUpIHtcbiAgICByZXR1cm4gdXNlY2FzZXMucmVkdWNlKFxuICAgICAgKGFjYywgdXNlY2FzZSkgPT4gdGhpcy50cmFpbkZyb21Vc2VjYXNlKHVzZWNhc2UsIGxlYXJuaW5nUmF0ZSkgJiYgYWNjLFxuICAgICAgdHJ1ZSxcbiAgICApXG4gIH1cblxuICBhc3luYyB0cmFpbihvcHQpIHtcbiAgICBsb2cuaW5mbygnc3RhcnRpbmcgdHJhaW5pbmcuLi4nKVxuICAgIGNvbnN0IHVzZWNhc2VzID0gaGVscGVyLmdldChvcHQsICd1c2VjYXNlcycpXG4gICAgbG9nLmluZm8oXG4gICAgICAndXNlY2FzZXMgOicsXG4gICAgICB1c2VjYXNlc1xuICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKHsgaW5wdXRzLCBvdXRwdXRzIH0pID0+XG4gICAgICAgICAgICBgJHtpbnB1dHMuam9pbignLCcpfSA6ICR7QXJyYXkuaXNBcnJheShvdXRwdXRzKSA/IG91dHB1dHMuam9pbignLCcpIDogb3V0cHV0c31gLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCdcXG4nKSxcbiAgICApXG4gICAgY29uc3QgZXhwZWN0ZWRNYXhJdGVyYXRpb25zID0gaGVscGVyLmdldChvcHQsICdleHBlY3RlZE1heEl0ZXJhdGlvbnMnKVxuICAgIGNvbnN0IGxlYXJuaW5nUmF0ZSA9IGhlbHBlci5nZXQob3B0LCAnbGVhcm5pbmdSYXRlJywgMC4yKVxuICAgIGNvbnN0IGhvb2sgPSBoZWxwZXIuZ2V0KG9wdCwgJ2hvb2snKVxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXZlcmFnZUR1cmF0aW9uOiAwLFxuICAgICAgZXF1YWxUb0V4cGVjdGVkOiB0cnVlLFxuICAgICAgaXRlcmF0aW9uczogMCxcbiAgICAgIHRvdGFsRHVyYXRpb246IDAsXG4gICAgfVxuICAgIGxldCBob29rUmVzdWx0ID0gdHJ1ZVxuICAgIGRvIHtcbiAgICAgIHJlc3VsdC5pdGVyYXRpb25zICs9IDFcbiAgICAgIHJlc3VsdC5lcXVhbFRvRXhwZWN0ZWQgPSB0aGlzLnRyYWluRnJvbVVzZWNhc2VzKHVzZWNhc2VzLCBsZWFybmluZ1JhdGUpXG4gICAgICBpZiAodHlwZW9mIGhvb2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaG9va1Jlc3VsdCA9IGF3YWl0IGhvb2socmVzdWx0KVxuICAgICAgfVxuICAgIH0gd2hpbGUgKFxuICAgICAgaG9va1Jlc3VsdCAhPT0gZmFsc2UgJiZcbiAgICAgICFyZXN1bHQuZXF1YWxUb0V4cGVjdGVkICYmXG4gICAgICByZXN1bHQuaXRlcmF0aW9ucyA8IGV4cGVjdGVkTWF4SXRlcmF0aW9uc1xuICAgIClcbiAgICBpZiAocmVzdWx0Lml0ZXJhdGlvbnMpIHtcbiAgICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgcmVzdWx0LnRvdGFsRHVyYXRpb24gPSBlbmRUaW1lIC0gc3RhcnRUaW1lXG4gICAgICByZXN1bHQuYXZlcmFnZUR1cmF0aW9uID0gTWF0aC5yb3VuZChyZXN1bHQudG90YWxEdXJhdGlvbiAvIHJlc3VsdC5pdGVyYXRpb25zKVxuICAgIH1cbiAgICBsb2cuaW5mbygndHJhaW5pbmcgcmVzdWx0IDonLCByZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgdG9KU09OKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmlucHV0TGF5ZXIudG9KU09OKG9wdGlvbnMpLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICBjb25zdCB7IHR5cGUsIC4uLmRhdGEgfSA9IGl0ZW1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgICBjb25zdCBoaWRkZW5MYXllcnMgPSB0aGlzLmhpZGRlbkxheWVycy50b0pTT04ob3B0aW9ucykuaXRlbXMubWFwKChoaWRkZW5MYXllcikgPT4ge1xuICAgICAgcmV0dXJuIGhpZGRlbkxheWVyLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSwgdHlwZSwgLi4uZGF0YSB9ID0gaXRlbVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnN0IG91dHB1dHMgPSB0aGlzLm91dHB1dExheWVyLnRvSlNPTihvcHRpb25zKS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgY29uc3QgeyBzdHJhdGVneSwgdHlwZSwgLi4uZGF0YSB9ID0gaXRlbVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gTmV1cm9uQ29ubmVjdGlvbnMuYWxsLnRvSlNPTihvcHRpb25zKS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgY29uc3QgeyB0eXBlLCAuLi5kYXRhIH0gPSBpdGVtXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgaW5wdXRzLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvcnQta2V5c1xuICAgICAgaGlkZGVuTGF5ZXJzLFxuICAgICAgb3V0cHV0cyxcbiAgICAgIHN0cmF0ZWd5OiB0aGlzLnN0cmF0ZWd5LnRvSlNPTihvcHRpb25zKSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzb3J0LWtleXNcbiAgICAgIGNvbm5lY3Rpb25zLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBBbm5OZXR3b3JrIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0IHsgTmV1cm9uQ29ubmVjdGlvbiB9IGZyb20gJy4uL2Nvbm5lY3Rpb24nXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi4vbmV1cm9uL25ldXJvbnMnXG5cbmNsYXNzIEhpZGRlbkxheWVyIGV4dGVuZHMgTmV1cm9ucyB7XG4gIHN0YXRpYyBidWlsZCguLi5pdGVtcykge1xuICAgIHJldHVybiBuZXcgSGlkZGVuTGF5ZXIoLi4uaXRlbXMpXG4gIH1cblxuICBjb25uZWN0VG8odGFyZ2V0TGF5ZXIpIHtcbiAgICBjb25zdCB3ZWlnaHQgPSBoZWxwZXIuaGVFdEFsV2VpZ2h0YnVpbGRlcih0aGlzLmxlbmd0aClcbiAgICB0aGlzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgdGFyZ2V0TGF5ZXIuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgIE5ldXJvbkNvbm5lY3Rpb24uYnVpbGQoeyBzb3VyY2UsIHRhcmdldCwgd2VpZ2h0IH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWN0aXZhdGUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgSGlkZGVuTGF5ZXIgfVxuIiwiaW1wb3J0IHsgSnNvbmFibGVDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvanNvbmFibGUtY29sbGVjdGlvbidcblxuY2xhc3MgSGlkZGVuTGF5ZXJzIGV4dGVuZHMgSnNvbmFibGVDb2xsZWN0aW9uIHtcbiAgc3RhdGljIGJ1aWxkKC4uLml0ZW1zKSB7XG4gICAgcmV0dXJuIG5ldyBIaWRkZW5MYXllcnMoLi4uaXRlbXMpXG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWN0aXZhdGUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgSGlkZGVuTGF5ZXJzIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0IHsgTmV1cm9uQ29ubmVjdGlvbiB9IGZyb20gJy4uL2Nvbm5lY3Rpb24nXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi4vbmV1cm9uL25ldXJvbnMnXG5cbmNsYXNzIElucHV0TGF5ZXIgZXh0ZW5kcyBOZXVyb25zIHtcbiAgc3RhdGljIGJ1aWxkKC4uLml0ZW1zKSB7XG4gICAgcmV0dXJuIG5ldyBJbnB1dExheWVyKC4uLml0ZW1zKVxuICB9XG5cbiAgY29ubmVjdFRvKHRhcmdldExheWVyKSB7XG4gICAgY29uc3Qgd2VpZ2h0ID0gaGVscGVyLmhlRXRBbFdlaWdodGJ1aWxkZXIodGhpcy5sZW5ndGgpXG4gICAgdGhpcy5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgIHRhcmdldExheWVyLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICBOZXVyb25Db25uZWN0aW9uLmJ1aWxkKHsgc291cmNlLCB0YXJnZXQsIHdlaWdodCB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IElucHV0TGF5ZXIgfVxuIiwiaW1wb3J0IHsgTmV1cm9ucyB9IGZyb20gJy4uL25ldXJvbi9uZXVyb25zJ1xuXG5jbGFzcyBPdXRwdXRMYXllciBleHRlbmRzIE5ldXJvbnMge1xuICBzdGF0aWMgYnVpbGQoLi4uaXRlbXMpIHtcbiAgICByZXR1cm4gbmV3IE91dHB1dExheWVyKC4uLml0ZW1zKVxuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFjdGl2YXRlKClcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlV2VpZ2h0cygpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0udXBkYXRlV2VpZ2h0KClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IE91dHB1dExheWVyIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0IGlkR2VuZXJhdG9yIGZyb20gJy4uLy4uL3V0aWxzL2lkLWdlbmVyYXRvcidcbmltcG9ydCB7IE5ldXJvbkNvbm5lY3Rpb25zIH0gZnJvbSAnLi4vY29ubmVjdGlvbi9uZXVyb24tY29ubmVjdGlvbnMnXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi9uZXVyb25zJ1xuXG5jbGFzcyBOZXVyb24ge1xuICBjb25zdHJ1Y3RvcihvcHQpIHtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB0aGlzLmlkID0gaGVscGVyLmdldChvcHQsICdpZCcsIGlkR2VuZXJhdG9yLmdldElkKCkpXG4gICAgdGhpcy5pbmRleCA9IGhlbHBlci5nZXQob3B0LCAnaW5kZXgnLCAwKVxuICAgIHRoaXMuZGVwdGggPSBoZWxwZXIuZ2V0KG9wdCwgJ2RlcHRoJywgMClcbiAgICB0aGlzLmNvbG9yID0gaGVscGVyLmdldChvcHQsICdjb2xvcicsICcjOTA5MDkwJylcbiAgICB0aGlzLnZhbHVlID0gTWF0aC5yYW5kb20oKVxuICAgIHRoaXMubm9ybWFsaXplciA9IGhlbHBlci5nZXQob3B0LCAnbm9ybWFsaXplcicpXG4gICAgdGhpcy5iaWFzID0gaGVscGVyLmdldChvcHQsICdiaWFzJywgaGVscGVyLnJhbmRvbSgtMSwgMSkpXG4gICAgaWYgKG9wdC5pbnB1dHMpIHtcbiAgICAgIHRoaXMuZGVsdGEgPSAwXG4gICAgICB0aGlzLmlucHV0cyA9IE5ldXJvbkNvbm5lY3Rpb25zLmJ1aWxkKClcbiAgICAgIHRoaXMuc3RyYXRlZ3kgPSBoZWxwZXIuZ2V0KG9wdCwgJ3N0cmF0ZWd5JylcbiAgICB9XG4gICAgaWYgKG9wdC5vdXRwdXRzKSB7XG4gICAgICB0aGlzLm91dHB1dHMgPSBOZXVyb25Db25uZWN0aW9ucy5idWlsZCgpXG4gICAgfVxuICAgIE5ldXJvbnMuYWxsLnB1c2godGhpcylcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIGNvbnN0IHsgYmlhcywgaW5wdXRzLCBzdHJhdGVneSB9ID0gdGhpc1xuICAgIGlmICghc3RyYXRlZ3kpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhY3RpdmF0aW9uID0gc3RyYXRlZ3kuY29tYmluZShcbiAgICAgIGlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC5zb3VyY2UudmFsdWUpLmNvbmNhdCgxKSxcbiAgICAgIGlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC53ZWlnaHQpLmNvbmNhdChiaWFzKSxcbiAgICApXG4gICAgdGhpcy52YWx1ZSA9IHN0cmF0ZWd5LmFjdGl2YXRlKGFjdGl2YXRpb24pXG4gIH1cblxuICBjYWxjdWxhdGVEZWx0YSgpIHtcbiAgICBjb25zdCB7IGV4cGVjdGVkVmFsdWUsIG91dHB1dHMsIHN0cmF0ZWd5LCB2YWx1ZSB9ID0gdGhpc1xuICAgIGlmICh0eXBlb2YgZXhwZWN0ZWRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZGVsdGEgPSBleHBlY3RlZFZhbHVlIC0gdmFsdWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXN0cmF0ZWd5KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZXJyb3IgPSBoZWxwZXIuc3VtKG91dHB1dHMubWFwKChvdXRwdXQpID0+IG91dHB1dC53ZWlnaHQgKiBvdXRwdXQudGFyZ2V0LmRlbHRhKSlcbiAgICB0aGlzLmRlbHRhID0gc3RyYXRlZ3kuZGVsdGEoZXJyb3IsIHZhbHVlKVxuICB9XG5cbiAgdXBkYXRlV2VpZ2h0cyhsZWFybmluZ1JhdGUpIHtcbiAgICBjb25zdCB7IGJpYXMsIGRlbHRhLCBpbnB1dHMsIHN0cmF0ZWd5IH0gPSB0aGlzXG4gICAgaWYgKCFzdHJhdGVneSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG1pbldlaWdodCA9IGhlbHBlci5nZXQoc3RyYXRlZ3ksICdvcHRpb25zLm1pbldlaWdodCcpXG4gICAgY29uc3QgbWF4V2VpZ2h0ID0gaGVscGVyLmdldChzdHJhdGVneSwgJ29wdGlvbnMubWF4V2VpZ2h0JylcbiAgICBpZiAoIWlucHV0cy5pc0VtcHR5KCkpIHtcbiAgICAgIGlucHV0cy51cGRhdGVXZWlnaHRzKGRlbHRhLCBsZWFybmluZ1JhdGUsIG1pbldlaWdodCwgbWF4V2VpZ2h0KVxuICAgIH1cbiAgICB0aGlzLmJpYXMgPSBiaWFzICsgZGVsdGEgKiBsZWFybmluZ1JhdGVcbiAgfVxuXG4gIHRvSlNPTihvcHRpb25zKSB7XG4gICAgY29uc3QganNvbmFibGVDb25maWcgPSB7IHdpdGhvdXRWYWx1ZXM6IGZhbHNlLCAuLi5vcHRpb25zIH1cbiAgICBjb25zdCB7IHdpdGhvdXRWYWx1ZXMgfSA9IGpzb25hYmxlQ29uZmlnXG4gICAgcmV0dXJuIGhlbHBlci5vbWl0QnkoXG4gICAgICB7XG4gICAgICAgIC4uLmhlbHBlci5waWNrKHRoaXMsICdiaWFzJywgJ2RlcHRoJywgJ2lkJywgJ2luZGV4JywgJ3R5cGUnKSxcbiAgICAgICAgbm9ybWFsaXplclJlZjogdGhpcy5ub3JtYWxpemVyICYmIHRoaXMubm9ybWFsaXplci5pZCxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvcnQta2V5c1xuICAgICAgICBub3JtYWxpemVyT3B0aW9uczogdGhpcy5ub3JtYWxpemVyICYmIHRoaXMubm9ybWFsaXplci5vcHRpb25zLFxuICAgICAgICBzdHJhdGVneTogdGhpcy5zdHJhdGVneSAmJiB0aGlzLnN0cmF0ZWd5LnRvSlNPTihvcHRpb25zKSxcbiAgICAgICAgLi4uKCF3aXRob3V0VmFsdWVzICYmIHtcbiAgICAgICAgICBkZWx0YTogdGhpcy5kZWx0YSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgaGVscGVyLmlzTmlsLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgeyBOZXVyb24gfVxuIiwiaW1wb3J0IHsgTmV1cm9uIH0gZnJvbSAnLi8nXG5cbmNsYXNzIEludGVyTmV1cm9uIGV4dGVuZHMgTmV1cm9uIHtcbiAgc3RhdGljIGJ1aWxkKG9wdCkge1xuICAgIHJldHVybiBuZXcgSW50ZXJOZXVyb24ob3B0KVxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0KSB7XG4gICAgc3VwZXIoeyBjb2xvcjogJyM5MDkwOTAnLCAuLi5vcHQsIGlucHV0czogdHJ1ZSwgb3V0cHV0czogdHJ1ZSB9KVxuICB9XG59XG5cbmV4cG9ydCB7IEludGVyTmV1cm9uIH1cbiIsImltcG9ydCB7IE5ldXJvbiB9IGZyb20gJy4vJ1xuXG5jbGFzcyBNb3Rvck5ldXJvbiBleHRlbmRzIE5ldXJvbiB7XG4gIHN0YXRpYyBidWlsZChvcHQpIHtcbiAgICByZXR1cm4gbmV3IE1vdG9yTmV1cm9uKG9wdClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdCkge1xuICAgIHN1cGVyKHsgY29sb3I6ICcjMWQ0ZWZkJywgLi4ub3B0LCBpbnB1dHM6IHRydWUgfSlcbiAgfVxuXG4gIGdldERlbm9ybWFsaXplZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZXIuZnJvbSh0aGlzLnZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCB7IE1vdG9yTmV1cm9uIH1cbiIsImltcG9ydCB7IEpzb25hYmxlQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2pzb25hYmxlLWNvbGxlY3Rpb24nXG5cbmNsYXNzIE5ldXJvbnMgZXh0ZW5kcyBKc29uYWJsZUNvbGxlY3Rpb24ge1xuICBzdGF0aWMgYWxsID0gbmV3IE5ldXJvbnMoKVxuXG4gIHN0YXRpYyBnZXQoaWQpIHtcbiAgICByZXR1cm4gTmV1cm9ucy5hbGwuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpXG4gIH1cbn1cblxuZXhwb3J0IHsgTmV1cm9ucyB9XG4iLCJpbXBvcnQgeyBOZXVyb24gfSBmcm9tICcuLydcblxuY2xhc3MgU2Vuc29yeU5ldXJvbiBleHRlbmRzIE5ldXJvbiB7XG4gIHN0YXRpYyBidWlsZChvcHQpIHtcbiAgICByZXR1cm4gbmV3IFNlbnNvcnlOZXVyb24ob3B0KVxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0KSB7XG4gICAgc3VwZXIoeyBjb2xvcjogJyNlZTY1MWQnLCAuLi5vcHQsIG91dHB1dHM6IHRydWUgfSlcbiAgfVxuXG4gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMubm9ybWFsaXplci50byh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgeyBTZW5zb3J5TmV1cm9uIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuXG5jbGFzcyBCb29sZWFuTm9ybWFsaXplciB7XG4gIHN0YXRpYyB0eXBlID0gJ2Jvb2xlYW4nXG5cbiAgc3RhdGljIGJ1aWxkKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEJvb2xlYW5Ob3JtYWxpemVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pZCA9IEJvb2xlYW5Ob3JtYWxpemVyLnR5cGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy50aHJlc2hvbGQgPSBoZWxwZXIuZ2V0KG9wdGlvbnMsICd0aHJlc2hvbGQnLCAwLjUpXG4gICAgdGhpcy50cnVlVmFsdWUgPSBoZWxwZXIuZ2V0KG9wdGlvbnMsICd0cnVlVmFsdWUnLCAxKVxuICB9XG5cbiAgZnJvbSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSB0aGlzLnRocmVzaG9sZFxuICB9XG5cbiAgdG8odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPyB0aGlzLnRydWVWYWx1ZSA6IDBcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gaGVscGVyLm9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBoZWxwZXIuaXNOaWwsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5Ob3JtYWxpemVyXG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcidcblxuY2xhc3MgRGVmYXVsdE5vcm1hbGl6ZXIge1xuICBzdGF0aWMgdHlwZSA9ICdkZWZhdWx0J1xuXG4gIHN0YXRpYyBidWlsZChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0Tm9ybWFsaXplcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaWQgPSBEZWZhdWx0Tm9ybWFsaXplci50eXBlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZnJvbSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdG8odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gaGVscGVyLm9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBoZWxwZXIuaXNOaWwsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHROb3JtYWxpemVyXG4iLCJpbXBvcnQgQm9vbGVhbk5vcm1hbGl6ZXIgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IERlZmF1bHROb3JtYWxpemVyIGZyb20gJy4vZGVmYXVsdCdcbmltcG9ydCBJbnRlZ2VyTm9ybWFsaXplciBmcm9tICcuL2ludGVnZXInXG5pbXBvcnQgUGhyYXNlTm9ybWFsaXplciBmcm9tICcuL3BocmFzZSdcblxuY29uc3Qgbm9ybWFsaXplcnMgPSBuZXcgTWFwKFxuICBbRGVmYXVsdE5vcm1hbGl6ZXIsIEJvb2xlYW5Ob3JtYWxpemVyLCBJbnRlZ2VyTm9ybWFsaXplciwgUGhyYXNlTm9ybWFsaXplcl0ubWFwKChOb3JtYWxpemVyKSA9PiBbXG4gICAgTm9ybWFsaXplci50eXBlLFxuICAgIE5vcm1hbGl6ZXIsXG4gIF0pLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVyc1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi91dGlscy9oZWxwZXInXG5cbmNvbnN0IHsgZml4WmVybyB9ID0gaGVscGVyXG5cbmNsYXNzIEludGVnZXJOb3JtYWxpemVyIHtcbiAgc3RhdGljIHR5cGUgPSAnaW50ZWdlcidcblxuICBzdGF0aWMgYnVpbGQob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgSW50ZWdlck5vcm1hbGl6ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gSW50ZWdlck5vcm1hbGl6ZXIudHlwZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLm1pbiA9IGhlbHBlci5nZXQob3B0aW9ucywgJ21pbicsIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKVxuICAgIGNvbnN0IG1heCA9IGhlbHBlci5nZXQob3B0aW9ucywgJ21heCcsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIHRoaXMubGVuZ3RoID0gbWF4IC0gdGhpcy5taW5cbiAgfVxuXG4gIGZyb20odmFsdWUpIHtcbiAgICByZXR1cm4gZml4WmVybyhNYXRoLnJvdW5kKHZhbHVlICogdGhpcy5sZW5ndGggKyB0aGlzLm1pbikpXG4gIH1cblxuICB0byh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLmxlbmd0aFxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBoZWxwZXIub21pdEJ5KFxuICAgICAge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgfSxcbiAgICAgIGhlbHBlci5pc05pbCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdlck5vcm1hbGl6ZXJcbiIsImltcG9ydCBJbnRlZ2VyTm9ybWFsaXplciBmcm9tICcuL2ludGVnZXInXG5cbmNsYXNzIFBocmFzZU5vcm1hbGl6ZXIgZXh0ZW5kcyBJbnRlZ2VyTm9ybWFsaXplciB7XG4gIHN0YXRpYyBwaHJhc2VzID0gW1xuICAgICcgJyxcbiAgICAnYW0nLFxuICAgICdhcmUnLFxuICAgICdkbycsXG4gICAgJ2ZpbmUnLFxuICAgICdob3cnLFxuICAgICdpJyxcbiAgICAnaXMnLFxuICAgICdrbm93JyxcbiAgICAnbG92ZScsXG4gICAgJ21hcnJ5JyxcbiAgICAnbWUnLFxuICAgICdteScsXG4gICAgJ25hbWUnLFxuICAgICdub3QnLFxuICAgICdvbGQnLFxuICAgICdyb2JlcnQnLFxuICAgICdzaW5nbGUnLFxuICAgICd0aGFuaycsXG4gICAgJ3doYXQnLFxuICAgICd3aWxsJyxcbiAgICAneWVhcnMnLFxuICAgICd5b3UnLFxuICAgICd5b3VyJyxcbiAgICAnPycsXG4gIF1cbiAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL3R3eWxhLWFpLzQwLXNtYWxsLXRhbGstcXVlc3Rpb25zLXlvdXItY2hhdGJvdC1uZWVkcy10by1rbm93LWFuZC13aHktaXQtbWF0dGVycy02M2NhZjAzMzQ3ZjZcblxuICBzdGF0aWMgdHlwZSA9ICdwaHJhc2UnXG5cbiAgc3RhdGljIGJ1aWxkKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFBocmFzZU5vcm1hbGl6ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMuaWQgPSBQaHJhc2VOb3JtYWxpemVyLnR5cGVcbiAgICB0aGlzLm1pbiA9IDBcbiAgICB0aGlzLmxlbmd0aCA9IFBocmFzZU5vcm1hbGl6ZXIucGhyYXNlcy5sZW5ndGggLSB0aGlzLm1pblxuICB9XG5cbiAgZnJvbSh2YWx1ZSkge1xuICAgIHJldHVybiBQaHJhc2VOb3JtYWxpemVyLnBocmFzZXNbc3VwZXIuZnJvbSh2YWx1ZSldXG4gIH1cblxuICB0byh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci50byhNYXRoLm1heChQaHJhc2VOb3JtYWxpemVyLnBocmFzZXMuaW5kZXhPZih2YWx1ZSksIDApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBocmFzZU5vcm1hbGl6ZXJcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuXG5jbGFzcyBEaXZpZGVTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gJ2RpdmlkZSdcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBhY3RpdmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgY29tYmluZShpbnB1dHMsIHdlaWdodHMpIHtcbiAgICByZXR1cm4gaW5wdXRzLnJlZHVjZSgoYWNjLCBpbnB1dCwgaW5kZXgpID0+IGFjYyAqIGlucHV0ICogd2VpZ2h0c1tpbmRleF0sIDEpXG4gIH1cblxuICBkZWx0YShlcnJvcikge1xuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBoZWxwZXIub21pdEJ5KFxuICAgICAge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgfSxcbiAgICAgIGhlbHBlci5pc05pbCxcbiAgICApXG4gIH1cbn1cblxuY29uc3QgZGl2aWRlU3RyYXRlZ3kgPSBuZXcgRGl2aWRlU3RyYXRlZ3koKVxuXG5leHBvcnQgeyBEaXZpZGVTdHJhdGVneSwgZGl2aWRlU3RyYXRlZ3kgfVxuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi91dGlscy9oZWxwZXInXG5cbmNvbnN0IHsgc3VtIH0gPSBoZWxwZXJcblxuY2xhc3MgSWRlbnRpdHlTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gJ2lkZW50aXR5J1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGFjdGl2YXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBjb21iaW5lKGlucHV0cywgd2VpZ2h0cykge1xuICAgIHJldHVybiBzdW0oaW5wdXRzLm1hcCgoaW5wdXQsIGluZGV4KSA9PiBpbnB1dCAqIHdlaWdodHNbaW5kZXhdKSlcbiAgfVxuXG4gIGRlbHRhKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIGhlbHBlci5vbWl0QnkoXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgaGVscGVyLmlzTmlsLFxuICAgIClcbiAgfVxufVxuXG5jb25zdCBpZGVudGl0eVN0cmF0ZWd5ID0gbmV3IElkZW50aXR5U3RyYXRlZ3koKVxuXG5leHBvcnQgeyBJZGVudGl0eVN0cmF0ZWd5LCBpZGVudGl0eVN0cmF0ZWd5IH1cbiIsImltcG9ydCB7IGRpdmlkZVN0cmF0ZWd5IH0gZnJvbSAnLi9kaXZpZGUnXG5pbXBvcnQgeyBpZGVudGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9pZGVudGl0eSdcbmltcG9ydCB7IGxvZ2lzdGljU3RyYXRlZ3kgfSBmcm9tICcuL2xvZ2lzdGljJ1xuaW1wb3J0IHsgbXVsdGlwbHlTdHJhdGVneSB9IGZyb20gJy4vbXVsdGlwbHknXG5pbXBvcnQgeyByZWx1U3RyYXRlZ3kgfSBmcm9tICcuL3JlbHUnXG5pbXBvcnQgeyB0YW5oU3RyYXRlZ3kgfSBmcm9tICcuL3RhbmgnXG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSBuZXcgTWFwKFxuICBbXG4gICAgZGl2aWRlU3RyYXRlZ3ksXG4gICAgaWRlbnRpdHlTdHJhdGVneSxcbiAgICBsb2dpc3RpY1N0cmF0ZWd5LFxuICAgIG11bHRpcGx5U3RyYXRlZ3ksXG4gICAgcmVsdVN0cmF0ZWd5LFxuICAgIHRhbmhTdHJhdGVneSxcbiAgXS5tYXAoKHN0cmF0ZWd5KSA9PiBbc3RyYXRlZ3kuaWQsIHN0cmF0ZWd5XSksXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0cmF0ZWdpZXNcbiIsImltcG9ydCB7IElkZW50aXR5U3RyYXRlZ3kgfSBmcm9tICcuL2lkZW50aXR5J1xuXG5jbGFzcyBMb2dpc3RpY1N0cmF0ZWd5IGV4dGVuZHMgSWRlbnRpdHlTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmlkID0gJ2xvZ2lzdGljJ1xuICB9XG5cbiAgYWN0aXZhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gMSAvICgxICsgTWF0aC5leHAoLXZhbHVlKSlcbiAgfVxuXG4gIGRlbHRhKGVycm9yLCBvdXRwdXQpIHtcbiAgICByZXR1cm4gZXJyb3IgKiAob3V0cHV0ICogKDEgLSBvdXRwdXQpKVxuICB9XG59XG5cbmNvbnN0IGxvZ2lzdGljU3RyYXRlZ3kgPSBuZXcgTG9naXN0aWNTdHJhdGVneSgpXG5cbmV4cG9ydCB7IExvZ2lzdGljU3RyYXRlZ3ksIGxvZ2lzdGljU3RyYXRlZ3kgfVxuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi91dGlscy9oZWxwZXInXG5cbmNsYXNzIE11bHRpcGx5U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pZCA9ICdtdWx0aXBseSdcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBhY3RpdmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgY29tYmluZShpbnB1dHMsIHdlaWdodHMpIHtcbiAgICByZXR1cm4gaW5wdXRzLnJlZHVjZSgoYWNjLCBpbnB1dCwgaW5kZXgpID0+IGFjYyAqIGlucHV0ICogd2VpZ2h0c1tpbmRleF0sIDEpXG4gIH1cblxuICBkZWx0YShlcnJvcikge1xuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBoZWxwZXIub21pdEJ5KFxuICAgICAge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgfSxcbiAgICAgIGhlbHBlci5pc05pbCxcbiAgICApXG4gIH1cbn1cblxuY29uc3QgbXVsdGlwbHlTdHJhdGVneSA9IG5ldyBNdWx0aXBseVN0cmF0ZWd5KClcblxuZXhwb3J0IHsgTXVsdGlwbHlTdHJhdGVneSwgbXVsdGlwbHlTdHJhdGVneSB9XG4iLCJpbXBvcnQgeyBJZGVudGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9pZGVudGl0eSdcblxuY2xhc3MgUmVsdVN0cmF0ZWd5IGV4dGVuZHMgSWRlbnRpdHlTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmlkID0gJ3JlbHUnXG4gIH1cblxuICBhY3RpdmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCB2YWx1ZSlcbiAgfVxuXG4gIGRlbHRhKGVycm9yLCBvdXRwdXQpIHtcbiAgICByZXR1cm4gZXJyb3IgKiAob3V0cHV0ID4gMCA/IDEgOiAwKVxuICB9XG59XG5cbmNvbnN0IHJlbHVTdHJhdGVneSA9IG5ldyBSZWx1U3RyYXRlZ3koKVxuXG5leHBvcnQgeyBSZWx1U3RyYXRlZ3ksIHJlbHVTdHJhdGVneSB9XG4iLCJpbXBvcnQgeyBJZGVudGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9pZGVudGl0eSdcblxuY2xhc3MgVGFuaFN0cmF0ZWd5IGV4dGVuZHMgSWRlbnRpdHlTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmlkID0gJ3RhbmgnXG4gIH1cblxuICBhY3RpdmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiAyIC8gKDEgKyBNYXRoLmV4cCgtMiAqIHZhbHVlKSkgLSAxXG4gIH1cblxuICBkZWx0YShlcnJvciwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIGVycm9yICogKDEgLSBNYXRoLnBvdyhvdXRwdXQsIDIpKVxuICB9XG59XG5cbmNvbnN0IHRhbmhTdHJhdGVneSA9IG5ldyBUYW5oU3RyYXRlZ3koKVxuXG5leHBvcnQgeyBUYW5oU3RyYXRlZ3ksIHRhbmhTdHJhdGVneSB9XG4iLCJpbXBvcnQgKiBhcyBuZXR3b3JrcyBmcm9tICcuL25ldHdvcmtzJ1xuXG5jb25zdCBjb25maWcgPSB7IG5ldHdvcmtzIH1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4uLy4uLy4uL3V0aWxzL2hlbHBlcidcbmltcG9ydCAqIGFzIHlhbWxDb25maWcgZnJvbSAnLi9hZGQueW1sJ1xuXG5jb25zdCB7IGJ1aWxkQXJyYXkgfSA9IGhlbHBlclxuXG5jb25zdCBtaW5YID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5taW5cbmNvbnN0IG1heFggPSB5YW1sQ29uZmlnLmlucHV0c1swXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1heFxuY29uc3QgbWluWSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhZID0geWFtbENvbmZpZy5pbnB1dHNbMV0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcblxuY29uc3QgdXNlY2FzZXMgPSBidWlsZEFycmF5KG1heFggLSBtaW5YICsgMSkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgY29uc3QgeCA9IGkgKyBtaW5YXG4gIHJldHVybiBhY2MuY29uY2F0KFxuICAgIGJ1aWxkQXJyYXkobWF4WSAtIG1pblkgKyAxKS5tYXAoKGopID0+IHtcbiAgICAgIGNvbnN0IHkgPSBqICsgbWluWVxuICAgICAgcmV0dXJuIHsgaW5wdXRzOiBbeCwgeV0sIG91dHB1dHM6IHggKyB5IH1cbiAgICB9KSxcbiAgKVxufSwgW10pXG5cbmV4cG9ydCBkZWZhdWx0IHsgLi4ueWFtbENvbmZpZywgdHJhaW5pbmc6IHsgLi4ueWFtbENvbmZpZy50cmFpbmluZywgdXNlY2FzZXMgfSB9XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4uLy4uLy4uL3V0aWxzL2hlbHBlcidcbmltcG9ydCAqIGFzIHlhbWxDb25maWcgZnJvbSAnLi9kaXZpZGUueW1sJ1xuXG5jb25zdCB7IGJ1aWxkQXJyYXkgfSA9IGhlbHBlclxuXG5jb25zdCBtaW5YID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5taW5cbmNvbnN0IG1heFggPSB5YW1sQ29uZmlnLmlucHV0c1swXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1heFxuY29uc3QgbWluWSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhZID0geWFtbENvbmZpZy5pbnB1dHNbMV0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcblxuY29uc3QgdXNlY2FzZXMgPSBidWlsZEFycmF5KG1heFggLSBtaW5YICsgMSkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgY29uc3QgeCA9IGkgKyBtaW5YXG4gIHJldHVybiBhY2MuY29uY2F0KFxuICAgIGJ1aWxkQXJyYXkobWF4WSAtIG1pblkgKyAxKS5tYXAoKGopID0+IHtcbiAgICAgIGNvbnN0IHkgPSBqICsgbWluWVxuICAgICAgcmV0dXJuIHsgaW5wdXRzOiBbeCwgeV0sIG91dHB1dHM6IE1hdGgucm91bmQoeCAvIHkpIH1cbiAgICB9KSxcbiAgKVxufSwgW10pXG5cbmV4cG9ydCBkZWZhdWx0IHsgLi4ueWFtbENvbmZpZywgdHJhaW5pbmc6IHsgLi4ueWFtbENvbmZpZy50cmFpbmluZywgdXNlY2FzZXMgfSB9XG4iLCJpbXBvcnQgYWRkIGZyb20gJy4vYWRkJ1xuaW1wb3J0IGRpdmlkZSBmcm9tICcuL2RpdmlkZSdcbmltcG9ydCBtdWx0aXBseSBmcm9tICcuL211bHRpcGx5J1xuaW1wb3J0IHN1YiBmcm9tICcuL3N1YidcblxuZXhwb3J0IHsgYWRkLCBkaXZpZGUsIG11bHRpcGx5LCBzdWIgfVxuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi8uLi91dGlscy9oZWxwZXInXG5pbXBvcnQgKiBhcyB5YW1sQ29uZmlnIGZyb20gJy4vbXVsdGlwbHkueW1sJ1xuXG5jb25zdCB7IGJ1aWxkQXJyYXkgfSA9IGhlbHBlclxuXG5jb25zdCBtaW5YID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5taW5cbmNvbnN0IG1heFggPSB5YW1sQ29uZmlnLmlucHV0c1swXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1heFxuY29uc3QgbWluWSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhZID0geWFtbENvbmZpZy5pbnB1dHNbMV0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcblxuY29uc3QgdXNlY2FzZXMgPSBidWlsZEFycmF5KG1heFggLSBtaW5YICsgMSkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgY29uc3QgeCA9IGkgKyBtaW5YXG4gIHJldHVybiBhY2MuY29uY2F0KFxuICAgIGJ1aWxkQXJyYXkobWF4WSAtIG1pblkgKyAxKS5tYXAoKGopID0+IHtcbiAgICAgIGNvbnN0IHkgPSBqICsgbWluWVxuICAgICAgcmV0dXJuIHsgaW5wdXRzOiBbeCwgeV0sIG91dHB1dHM6IHggKiB5IH1cbiAgICB9KSxcbiAgKVxufSwgW10pXG5cbmV4cG9ydCBkZWZhdWx0IHsgLi4ueWFtbENvbmZpZywgdHJhaW5pbmc6IHsgLi4ueWFtbENvbmZpZy50cmFpbmluZywgdXNlY2FzZXMgfSB9XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4uLy4uLy4uL3V0aWxzL2hlbHBlcidcbmltcG9ydCAqIGFzIHlhbWxDb25maWcgZnJvbSAnLi9zdWIueW1sJ1xuXG5jb25zdCB7IGJ1aWxkQXJyYXkgfSA9IGhlbHBlclxuXG5jb25zdCBtaW5YID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5taW5cbmNvbnN0IG1heFggPSB5YW1sQ29uZmlnLmlucHV0c1swXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1heFxuY29uc3QgbWluWSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhZID0geWFtbENvbmZpZy5pbnB1dHNbMV0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcblxuY29uc3QgdXNlY2FzZXMgPSBidWlsZEFycmF5KG1heFggLSBtaW5YICsgMSkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgY29uc3QgeCA9IGkgKyBtaW5YXG4gIHJldHVybiBhY2MuY29uY2F0KFxuICAgIGJ1aWxkQXJyYXkobWF4WSAtIG1pblkgKyAxKS5tYXAoKGopID0+IHtcbiAgICAgIGNvbnN0IHkgPSBqICsgbWluWVxuICAgICAgcmV0dXJuIHsgaW5wdXRzOiBbeCwgeV0sIG91dHB1dHM6IHggLSB5IH1cbiAgICB9KSxcbiAgKVxufSwgW10pXG5cbmV4cG9ydCBkZWZhdWx0IHsgLi4ueWFtbENvbmZpZywgdHJhaW5pbmc6IHsgLi4ueWFtbENvbmZpZy50cmFpbmluZywgdXNlY2FzZXMgfSB9XG4iLCJpbXBvcnQgKiBhcyBjaGF0IGZyb20gJy4vY2hhdC55bWwnXG5pbXBvcnQgKiBhcyBsZWQgZnJvbSAnLi9sZWQueW1sJ1xuXG5leHBvcnQgeyBjaGF0LCBsZWQgfVxuIiwiaW1wb3J0ICogYXMgYWRkIGZyb20gJy4vYWRkLnltbCdcbmltcG9ydCAqIGFzIGFuZCBmcm9tICcuL2FuZC55bWwnXG5pbXBvcnQgKiBhcyBjaGF0IGZyb20gJy4vY2hhdC55bWwnXG5pbXBvcnQgKiBhcyBsZWQgZnJvbSAnLi9sZWQueW1sJ1xuaW1wb3J0ICogYXMgc3ViIGZyb20gJy4vc3ViLnltbCdcblxuZXhwb3J0IHsgYWRkLCBhbmQsIGNoYXQsIGxlZCwgc3ViIH1cbiIsImltcG9ydCAqIGFzIGdldCBmcm9tICdsb2Rhc2guZ2V0J1xuaW1wb3J0ICogYXMgaWRlbnRpdHkgZnJvbSAnbG9kYXNoLmlkZW50aXR5J1xuaW1wb3J0ICogYXMgaW52ZXJ0IGZyb20gJ2xvZGFzaC5pbnZlcnQnXG5pbXBvcnQgKiBhcyBpc0VtcHR5IGZyb20gJ2xvZGFzaC5pc2VtcHR5J1xuaW1wb3J0ICogYXMgaXNFcXVhbCBmcm9tICdsb2Rhc2guaXNlcXVhbCdcbmltcG9ydCAqIGFzIGlzTmlsIGZyb20gJ2xvZGFzaC5pc25pbCdcbmltcG9ydCAqIGFzIG9taXRCeSBmcm9tICdsb2Rhc2gub21pdGJ5J1xuaW1wb3J0ICogYXMgcGljayBmcm9tICdsb2Rhc2gucGljaydcbmltcG9ydCAqIGFzIHJldmVyc2UgZnJvbSAnbG9kYXNoLnJldmVyc2UnXG5pbXBvcnQgKiBhcyByb3VuZCBmcm9tICdsb2Rhc2gucm91bmQnXG5cbmNvbnN0IGhlbHBlciA9IHtcbiAgYXJyYXlDb3VudDogKGNvdW50KSA9PiBBcnJheS5mcm9tKEFycmF5KGNvdW50KSksXG4gIGJ1aWxkQXJyYXk6IChjb3VudCwgdmFsdWUgPSBoZWxwZXIuaWRlbnRpdHkpID0+IHtcbiAgICBjb25zdCBpdGVyYXRvciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogKCkgPT4gdmFsdWVcbiAgICByZXR1cm4gaGVscGVyLmFycmF5Q291bnQoY291bnQpLm1hcCgoX18sIGluZGV4KSA9PiBpdGVyYXRvcihpbmRleCkpXG4gIH0sXG4gIGNsaXA6ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpLFxuICBjb21wYWN0OiAoYXJyYXkpID0+IGFycmF5LmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKSxcbiAgZGVsYXk6IGFzeW5jIChtcyA9IDApID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXG4gICAgfSksXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb21wYXJlLW5lZy16ZXJvXG4gIGZpeFplcm86ICh4KSA9PiAoeCA9PT0gLTAgPyAwIDogeCksXG4gIGdldCxcbiAgaGVFdEFsV2VpZ2h0YnVpbGRlcjogKGxheWVyTGVuZ3RoKSA9PiAoKSA9PiBNYXRoLnJhbmRvbSgpICogTWF0aC5zcXJ0KDIgLyBsYXllckxlbmd0aCksXG4gIGlkZW50aXR5LFxuICBpbnZlcnQsXG4gIGlzRW1wdHksXG4gIGlzRXF1YWwsXG4gIGlzTmlsLFxuICBtYXBDb3VudDogKGNvdW50LCBpdGVyYXRvcikgPT4gaGVscGVyLmFycmF5Q291bnQoY291bnQpLm1hcChpdGVyYXRvciksXG4gIG9taXRCeSxcbiAgcGljayxcbiAgcmFuZG9tOiAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbixcbiAgcmVwZWF0OiAoY291bnQsIGl0ZXJhdG9yKSA9PiB7XG4gICAgaGVscGVyLmFycmF5Q291bnQoY291bnQpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaXRlcmF0b3IoaW5kZXgpXG4gICAgfSlcbiAgfSxcbiAgcmV2ZXJzZSxcbiAgcm91bmQsXG4gIHN1bTogKHZhbHVlcykgPT4gdmFsdWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApLFxuICB0b0FycmF5OiAobykgPT4gKEFycmF5LmlzQXJyYXkobykgPyBvIDogW29dKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyXG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJ1xuXG5jb25zdCBjb3VudHMgPSBuZXcgTWFwKClcblxuY29uc3QgaWRHZW5lcmF0b3IgPSB7XG4gIGNsZWFySWRzOiAoa2V5ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgaWYgKGhlbHBlci5pc05pbChrZXkpKSB7XG4gICAgICBjb3VudHMuZGVsZXRlKGtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnRzLmNsZWFyKClcbiAgICB9XG4gIH0sXG4gIGdldElkOiAoa2V5ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBjb3VudHMuZ2V0KGtleSlcbiAgICBjb25zdCBuZXdDb3VudCA9IHR5cGVvZiBjb3VudCAhPT0gJ3VuZGVmaW5lZCcgPyBjb3VudCArIDEgOiAxXG4gICAgY291bnRzLnNldChrZXksIG5ld0NvdW50KVxuICAgIHJldHVybiBgJHtuZXdDb3VudH1gXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlkR2VuZXJhdG9yXG4iLCJjbGFzcyBKc29uYWJsZUNvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciguLi5pdGVtcykge1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuaXRlbXMgPSBbLi4uaXRlbXNdXG4gIH1cblxuICBnZXQgZmlyc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbMF1cbiAgfVxuXG4gIGdldCBsYXN0KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV1cbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB3aGlsZSAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBvcCgpXG4gICAgfVxuICB9XG5cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKHByZWRpY2F0ZSlcbiAgfVxuXG4gIGZvckVhY2goaXRlcmF0b3IpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlcmF0b3IpXG4gIH1cblxuICBnZXQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF1cbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoIDwgMVxuICB9XG5cbiAgbWFwKGl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKGl0ZXJhdG9yKVxuICB9XG5cbiAgcmVkdWNlKHJlZHVjZXIsIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgaW5pdGlhbFZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLml0ZW1zLnJlZHVjZShyZWR1Y2VyKVxuICAgICAgOiB0aGlzLml0ZW1zLnJlZHVjZShyZWR1Y2VyLCBpbml0aWFsVmFsdWUpXG4gIH1cblxuICBwb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMucG9wKClcbiAgfVxuXG4gIHB1c2goLi4uaXRlbXMpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5wdXNoKC4uLml0ZW1zKVxuICB9XG5cbiAgdG9KU09OKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHRoaXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnRvSlNPTihvcHRpb25zKVxuICAgICAgfSksXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IEpzb25hYmxlQ29sbGVjdGlvbiB9XG4iLCJjb25zdCBsb2cgPSB7XG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBpbmZvOiAoLi4uYXJncykgPT4ge1xuICAgIGlmICghbG9nLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInXG5cbmNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3Iob3B0KSB7XG4gICAgdGhpcy5mcmVxID0gTnVtYmVyKGhlbHBlci5nZXQob3B0LCAnZnJlcScsIDEpKVxuICAgIHRoaXMuaGFuZGxlID0gaGVscGVyLmdldChvcHQsICdoYW5kbGUnKVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGUsIHRoaXMuZnJlcSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjbGVhckludGVydmFsKHRoaXMuaWQpXG4gICAgdGhpcy5pZCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IHsgVGltZXIgfVxuIiwiaW1wb3J0IHsgZHVtcCB9IGZyb20gJ2pzLXlhbWwnXG5cbmltcG9ydCB7IEFubk5ldHdvcmsgfSBmcm9tICcuL2FubidcbmltcG9ydCB7IE5ldXJvbkNvbm5lY3Rpb25zIH0gZnJvbSAnLi9hbm4vY29ubmVjdGlvbi9uZXVyb24tY29ubmVjdGlvbnMnXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi9hbm4vbmV1cm9uL25ldXJvbnMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL3V0aWxzL2hlbHBlcidcbmltcG9ydCBpZEdlbmVyYXRvciBmcm9tICcuL3V0aWxzL2lkLWdlbmVyYXRvcidcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vdXRpbHMvdGltZXInXG5cbmxldCBuZXR3b3JrQ29uZmlnLCBuZXR3b3JrXG5cbmNvbnN0IHBvc3RKc29uTWVzc2FnZSA9IChvKSA9PiB7XG4gIHBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG8pKVxufVxuXG5vbm1lc3NhZ2UgPSBhc3luYyAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgeyBjbWQgfSA9IGRhdGFcbiAgbG9nLmluZm8oYHdvcmtlciByZWNlaXZlZCAke2NtZH0gY29tbWFuZGApXG4gIHN3aXRjaCAoY21kKSB7XG4gICAgY2FzZSAncmVzZXQnOiB7XG4gICAgICBjb25zdCB7IGNhdGVnb3J5LCB0eXBlIH0gPSBkYXRhXG4gICAgICBOZXVyb25zLmFsbC5jbGVhcigpXG4gICAgICBOZXVyb25Db25uZWN0aW9ucy5hbGwuY2xlYXIoKVxuICAgICAgaWRHZW5lcmF0b3IuY2xlYXJJZHMoKVxuICAgICAgbmV0d29ya0NvbmZpZyA9IGhlbHBlci5nZXQoY29uZmlnLm5ldHdvcmtzLCBbY2F0ZWdvcnksIHR5cGVdKVxuICAgICAgbmV0d29yayA9IEFubk5ldHdvcmsuYnVpbGQobmV0d29ya0NvbmZpZylcbiAgICAgIHBvc3RKc29uTWVzc2FnZShOZXVyb25zLmFsbC50b0pTT04oKSlcbiAgICAgIHBvc3RKc29uTWVzc2FnZShOZXVyb25Db25uZWN0aW9ucy5hbGwudG9KU09OKCkpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBjYXNlICdydW4nOiB7XG4gICAgICBjb25zdCB7IGlucHV0cyB9ID0gZGF0YVxuICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IG5ldHdvcmsucnVuKFxuICAgICAgICBpbnB1dHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlucHV0ID0gbmV0d29yay5pbnB1dExheWVyLmdldChpbmRleClcbiAgICAgICAgICBzd2l0Y2ggKGlucHV0Lm5vcm1hbGl6ZXIuaWQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gJ3RydWUnXG4gICAgICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKVxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICAgIHBvc3RKc29uTWVzc2FnZSh7IG91dHB1dHMsIHR5cGU6ICdydW5SZXN1bHQnIH0pXG4gICAgICBwb3N0SnNvbk1lc3NhZ2UoTmV1cm9ucy5hbGwudG9KU09OKCkpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBjYXNlICd0cmFpbic6IHtcbiAgICAgIGNvbnN0IHsgdHJhaW5pbmcgfSA9IG5ldHdvcmtDb25maWdcbiAgICAgIGNvbnN0IHsgZXhwZWN0ZWRNYXhJdGVyYXRpb25zLCBsZWFybmluZ1JhdGUsIHVzZWNhc2VzIH0gPSB0cmFpbmluZ1xuICAgICAgY29uc3QgaG9vayA9IGFzeW5jICh7IGl0ZXJhdGlvbnMgfSkgPT4ge1xuICAgICAgICBwb3N0SnNvbk1lc3NhZ2UoeyBleHBlY3RlZE1heEl0ZXJhdGlvbnMsIGl0ZXJhdGlvbnMsIHR5cGU6ICd0cmFpbmluZ0l0ZXJhdGlvbicgfSlcbiAgICAgICAgYXdhaXQgaGVscGVyLmRlbGF5KDUwKVxuICAgICAgfVxuICAgICAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIoe1xuICAgICAgICBmcmVxOiA1MDAsXG4gICAgICAgIGhhbmRsZTogKCkgPT4ge1xuICAgICAgICAgIHBvc3RKc29uTWVzc2FnZShOZXVyb25Db25uZWN0aW9ucy5hbGwudG9KU09OKCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgdGltZXIuc3RhcnQoKVxuICAgICAgY29uc3QgdHJhaW5pbmdSZXN1bHQgPSBhd2FpdCBuZXR3b3JrLnRyYWluKHtcbiAgICAgICAgZXhwZWN0ZWRNYXhJdGVyYXRpb25zLFxuICAgICAgICBob29rLFxuICAgICAgICBsZWFybmluZ1JhdGUsXG4gICAgICAgIHVzZWNhc2VzLFxuICAgICAgfSlcbiAgICAgIHRpbWVyLnN0b3AoKVxuICAgICAgY29uc3QgbmV0d29ya0V4cG9ydCA9IG5ldHdvcmsudG9KU09OKHsgd2l0aG91dFZhbHVlczogdHJ1ZSB9KVxuICAgICAgY29uc29sZS5sb2coZHVtcCh7IC4uLm5ldHdvcmtFeHBvcnQsIHRyYWluaW5nIH0sIHsgbm9SZWZzOiB0cnVlIH0pKVxuICAgICAgcG9zdEpzb25NZXNzYWdlKE5ldXJvbkNvbm5lY3Rpb25zLmFsbC50b0pTT04oKSlcbiAgICAgIHBvc3RKc29uTWVzc2FnZSh7IHRyYWluaW5nUmVzdWx0LCB0eXBlOiAndHJhaW5pbmdSZXN1bHQnIH0pXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiQUREIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTAwfSl9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwMH0pfSldLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjIwMH0pfSldLCBcImhpZGRlbkxheWVyc0NvdW50c1wiOltdLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJpZGVudGl0eVwiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6NTAsIFwibGVhcm5pbmdSYXRlXCI6MC4yfSl9KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJESVZJREUgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MSwgXCJtYXhcIjoxMH0pfSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MSwgXCJtYXhcIjoxMH0pfSldLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwfSl9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6WzIsIDMsIDJdLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJpZGVudGl0eVwiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6MTAwMCwgXCJsZWFybmluZ1JhdGVcIjowLjJ9KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIk1VTFRJUExZIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTB9KX0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTB9KX0pXSwgXCJvdXRwdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KX0pXSwgXCJoaWRkZW5MYXllcnNDb3VudHNcIjpbXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibXVsdGlwbHlcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjIsIFwibGVhcm5pbmdSYXRlXCI6MC4yfSl9KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJTVUIgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KX0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTAwfSl9KV0sIFwib3V0cHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOi0xMDAsIFwibWF4XCI6MTAwfSl9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6W10sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImlkZW50aXR5XCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJ0cmFpbmluZ1wiOih7XCJleHBlY3RlZE1heEl0ZXJhdGlvbnNcIjo1MCwgXCJsZWFybmluZ1JhdGVcIjowLjJ9KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkFORCBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSldLCBcImhpZGRlbkxheWVyc0NvdW50c1wiOlszXSwgXCJvdXRwdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImxvZ2lzdGljXCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJ0cmFpbmluZ1wiOih7XCJleHBlY3RlZE1heEl0ZXJhdGlvbnNcIjoxMDAsIFwibGVhcm5pbmdSYXRlXCI6MC4yLCBcInVzZWNhc2VzXCI6Wyh7XCJpbnB1dHNcIjpbZmFsc2UsIGZhbHNlXSwgXCJvdXRwdXRzXCI6ZmFsc2V9KSwgKHtcImlucHV0c1wiOltmYWxzZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOmZhbHNlfSksICh7XCJpbnB1dHNcIjpbdHJ1ZSwgZmFsc2VdLCBcIm91dHB1dHNcIjpmYWxzZX0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIHRydWVdLCBcIm91dHB1dHNcIjp0cnVlfSldfSl9KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJPUiBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSldLCBcImhpZGRlbkxheWVyc0NvdW50c1wiOlszXSwgXCJvdXRwdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImxvZ2lzdGljXCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJ0cmFpbmluZ1wiOih7XCJleHBlY3RlZE1heEl0ZXJhdGlvbnNcIjoxMDAsIFwibGVhcm5pbmdSYXRlXCI6MC4yLCBcInVzZWNhc2VzXCI6Wyh7XCJpbnB1dHNcIjpbZmFsc2UsIGZhbHNlXSwgXCJvdXRwdXRzXCI6ZmFsc2V9KSwgKHtcImlucHV0c1wiOltmYWxzZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOnRydWV9KSwgKHtcImlucHV0c1wiOlt0cnVlLCBmYWxzZV0sIFwib3V0cHV0c1wiOnRydWV9KSwgKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlXSwgXCJvdXRwdXRzXCI6dHJ1ZX0pXX0pfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiWE9SIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6WzNdLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjMwMDAsIFwibGVhcm5pbmdSYXRlXCI6MC4yLCBcInVzZWNhc2VzXCI6Wyh7XCJpbnB1dHNcIjpbZmFsc2UsIGZhbHNlXSwgXCJvdXRwdXRzXCI6ZmFsc2V9KSwgKHtcImlucHV0c1wiOltmYWxzZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOnRydWV9KSwgKHtcImlucHV0c1wiOlt0cnVlLCBmYWxzZV0sIFwib3V0cHV0c1wiOnRydWV9KSwgKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlXSwgXCJvdXRwdXRzXCI6ZmFsc2V9KV19KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkNoYXQgYm90XCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6WzZdLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjIwMDAsIFwibGVhcm5pbmdSYXRlXCI6MC4yLCBcInVzZWNhc2VzXCI6Wyh7XCJpbnB1dHNcIjpbXCJob3dcIiwgXCJhcmVcIiwgXCJ5b3VcIiwgXCI/XCIsIFwiIFwiXSwgXCJvdXRwdXRzXCI6W1wiZmluZVwiLCBcInRoYW5rXCIsIFwieW91XCIsIFwiIFwiLCBcIiBcIl19KSwgKHtcImlucHV0c1wiOltcIndoYXRcIiwgXCJpc1wiLCBcInlvdXJcIiwgXCJuYW1lXCIsIFwiP1wiXSwgXCJvdXRwdXRzXCI6W1wibXlcIiwgXCJuYW1lXCIsIFwiaXNcIiwgXCJyb2JlcnRcIiwgXCIgXCJdfSksICh7XCJpbnB1dHNcIjpbXCJob3dcIiwgXCJvbGRcIiwgXCJhcmVcIiwgXCJ5b3VcIiwgXCI/XCJdLCBcIm91dHB1dHNcIjpbXCJpXCIsIFwiZG9cIiwgXCJub3RcIiwgXCJrbm93XCIsIFwiIFwiXX0pLCAoe1wiaW5wdXRzXCI6W1wiZG9cIiwgXCJ5b3VcIiwgXCJsb3ZlXCIsIFwibWVcIiwgXCI/XCJdLCBcIm91dHB1dHNcIjpbXCJpXCIsIFwibG92ZVwiLCBcInlvdVwiLCBcIiBcIiwgXCIgXCJdfSksICh7XCJpbnB1dHNcIjpbXCJ3aWxsXCIsIFwieW91XCIsIFwibWFycnlcIiwgXCJtZVwiLCBcIj9cIl0sIFwib3V0cHV0c1wiOltcImFyZVwiLCBcInlvdVwiLCBcInNpbmdsZVwiLCBcIj9cIiwgXCIgXCJdfSldfSl9KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJMRUQgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6WzhdLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjl9KX0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjIwMDAsIFwibGVhcm5pbmdSYXRlXCI6MC4yLCBcInVzZWNhc2VzXCI6Wyh7XCJpbnB1dHNcIjpbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdLCBcIm91dHB1dHNcIjowfSksICh7XCJpbnB1dHNcIjpbZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSwgXCJvdXRwdXRzXCI6MX0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjJ9KSwgKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWVdLCBcIm91dHB1dHNcIjozfSksICh7XCJpbnB1dHNcIjpbZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjR9KSwgKHtcImlucHV0c1wiOlt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdLCBcIm91dHB1dHNcIjo1fSksICh7XCJpbnB1dHNcIjpbdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWVdLCBcIm91dHB1dHNcIjo2fSksICh7XCJpbnB1dHNcIjpbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLCBcIm91dHB1dHNcIjo3fSksICh7XCJpbnB1dHNcIjpbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjh9KSwgKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjl9KV19KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkFERCBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcImJpYXNcIjowLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMVwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwMH0pLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIn0pLCAoe1wiYmlhc1wiOjAsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIyXCIsIFwiaW5kZXhcIjoxLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTAwfSksIFwibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwifSldLCBcImhpZGRlbkxheWVyc1wiOltdLCBcIm91dHB1dHNcIjpbKHtcImJpYXNcIjowLCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiM1wiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjIwMH0pLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwiaWRlbnRpdHlcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcImNvbm5lY3Rpb25zXCI6Wyh7XCJpZFwiOlwiNFwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiM1wiLCBcIndlaWdodFwiOjAuNX0pLCAoe1wiaWRcIjpcIjVcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjNcIiwgXCJ3ZWlnaHRcIjowLjV9KV19KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJBTkQgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJiaWFzXCI6LTAuODM3NTIwMDI4NDE5Nzc1LCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMVwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjotMC45ODQ4MDc0OTIxNTE5NTYxLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMlwiLCBcImluZGV4XCI6MSwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzXCI6W1soe1wiYmlhc1wiOi0wLjIwNDEwMjQ0NTAxNTI0OTk2LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiM1wiLCBcImluZGV4XCI6MH0pLCAoe1wiYmlhc1wiOi0wLjIyNjIyMjIzMjgxOTI2MzI0LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiNFwiLCBcImluZGV4XCI6MX0pLCAoe1wiYmlhc1wiOjAuODQyOTM5MTQyMzExODQwMSwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjVcIiwgXCJpbmRleFwiOjJ9KV1dLCBcIm91dHB1dHNcIjpbKHtcImJpYXNcIjotMC41NDAwMzU3Njk5NDg1NDIxLCBcImRlcHRoXCI6MiwgXCJpZFwiOlwiNlwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImxvZ2lzdGljXCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJjb25uZWN0aW9uc1wiOlsoe1wiaWRcIjpcIjdcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjNcIiwgXCJ3ZWlnaHRcIjowLjA3MDQ4NjEyNjkwNDU5ODExfSksICh7XCJpZFwiOlwiOFwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiNFwiLCBcIndlaWdodFwiOjAuOTgwODU2Mzc2MjA5OTY4Nn0pLCAoe1wiaWRcIjpcIjlcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjVcIiwgXCJ3ZWlnaHRcIjowLjgyMjgyNzE2NDg3NjQ2NTJ9KSwgKHtcImlkXCI6XCIxMFwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiM1wiLCBcIndlaWdodFwiOjAuOTU1MDczMzYyMjAyODU1MX0pLCAoe1wiaWRcIjpcIjExXCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCI0XCIsIFwid2VpZ2h0XCI6MC44MjAwOTQ3Nzk3ODA5OTU0fSksICh7XCJpZFwiOlwiMTJcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjVcIiwgXCJ3ZWlnaHRcIjowLjI3MzA3MzUxNjc2MzMxODR9KSwgKHtcImlkXCI6XCIxM1wiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOjAuMTI0NzgwMDM5NDM0ODI5NzZ9KSwgKHtcImlkXCI6XCIxNFwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOjAuMDc2OTI3MzI1Mjg5MjIxOTh9KSwgKHtcImlkXCI6XCIxNVwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOjAuNDk0NDIzMjQ3MjIwMzg2NDR9KV19KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJDaGF0IGJvdFwiLCBcImlucHV0c1wiOlsoe1wiYmlhc1wiOjAuODYxMDE4NDc0NjcxMDU0MSwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjFcIiwgXCJpbmRleFwiOjAsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcImJpYXNcIjotMC44Njk5NDUyOTA5MTk3Mzk4LCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMlwiLCBcImluZGV4XCI6MSwgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wiYmlhc1wiOi0wLjQ1NjQ4MzU0NTIwMzY3NjQsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIzXCIsIFwiaW5kZXhcIjoyLCBcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJiaWFzXCI6MC4xNDYxMzU2Nzc3MzkzNTc2NSwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjRcIiwgXCJpbmRleFwiOjMsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcImJpYXNcIjowLjk0OTU4MzkzMjczNTExMzcsIFwiZGVwdGhcIjowLCBcImlkXCI6XCI1XCIsIFwiaW5kZXhcIjo0LCBcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSldLCBcImhpZGRlbkxheWVyc1wiOltbKHtcImJpYXNcIjowLjM5OTE5OTI1ODY1Njg1OTIzLCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiNlwiLCBcImluZGV4XCI6MH0pLCAoe1wiYmlhc1wiOi0yLjQ5Nzc5Nzc0NTY5NTUxMSwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjdcIiwgXCJpbmRleFwiOjF9KSwgKHtcImJpYXNcIjoxLjU2Nzc0NzgzNTY2MTI2NjQsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCI4XCIsIFwiaW5kZXhcIjoyfSksICh7XCJiaWFzXCI6LTEuODI5ODQyMzQ5ODEwMDkyLCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiOVwiLCBcImluZGV4XCI6M30pLCAoe1wiYmlhc1wiOi0wLjYyOTI4MTMwNTcwMTQxMTMsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIxMFwiLCBcImluZGV4XCI6NH0pLCAoe1wiYmlhc1wiOjEuNDY1NTIyMTY5NTQ2NzY5LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiMTFcIiwgXCJpbmRleFwiOjV9KV1dLCBcIm91dHB1dHNcIjpbKHtcImJpYXNcIjotMS4zNTUzNDIzMDI5NDI0NDgsIFwiZGVwdGhcIjoyLCBcImlkXCI6XCIxMlwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wiYmlhc1wiOjAuMjg2ODkxNTQ5Mzc2NTk2NywgXCJkZXB0aFwiOjIsIFwiaWRcIjpcIjEzXCIsIFwiaW5kZXhcIjoxLCBcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJiaWFzXCI6MC42OTAxMzkzMDk1NDkxNTY3LCBcImRlcHRoXCI6MiwgXCJpZFwiOlwiMTRcIiwgXCJpbmRleFwiOjIsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcImJpYXNcIjotMy4zNjcyODE2MTMxNTk0ODM0LCBcImRlcHRoXCI6MiwgXCJpZFwiOlwiMTVcIiwgXCJpbmRleFwiOjMsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcImJpYXNcIjotMi42MjMzNDc2NjY5MzE2MDc2LCBcImRlcHRoXCI6MiwgXCJpZFwiOlwiMTZcIiwgXCJpbmRleFwiOjQsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KV0sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImxvZ2lzdGljXCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJjb25uZWN0aW9uc1wiOlsoe1wiaWRcIjpcIjE3XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCI2XCIsIFwid2VpZ2h0XCI6MS4yMDI3Nzc1Mjg5NDE1MTA0fSksICh7XCJpZFwiOlwiMThcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjdcIiwgXCJ3ZWlnaHRcIjo1LjIyNTg5NTY0NzgwOTIzOH0pLCAoe1wiaWRcIjpcIjE5XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6LTAuMzk2MjgwMjYwMjUzNzUyMjR9KSwgKHtcImlkXCI6XCIyMFwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjQuODc3MTc4MzYxMjQ5ODg3fSksICh7XCJpZFwiOlwiMjFcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6MC4zNDA0NjQ1MjkyMTc2MTl9KSwgKHtcImlkXCI6XCIyMlwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjowLjQ5Nzc0MzM2ODAzNDE2ODc0fSksICh7XCJpZFwiOlwiMjNcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjZcIiwgXCJ3ZWlnaHRcIjoyLjA4NDIyMDUyODUzODg3OH0pLCAoe1wiaWRcIjpcIjI0XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCI3XCIsIFwid2VpZ2h0XCI6MS43NDcxNjM2MzE1NTQ1NjYyfSksICh7XCJpZFwiOlwiMjVcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjY0MDcwNTg0NjE5OTgwMzl9KSwgKHtcImlkXCI6XCIyNlwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOi0zLjE0Mjk1MzYxNDcyNzU2NjV9KSwgKHtcImlkXCI6XCIyN1wiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjowLjIxNzUwNTExMDY5OTUzNTA3fSksICh7XCJpZFwiOlwiMjhcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6MC44NTgwNTA1NDc2MDg4Mjl9KSwgKHtcImlkXCI6XCIyOVwiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOjEuMzE2Njc1MjkwOTgwNTcxN30pLCAoe1wiaWRcIjpcIjMwXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCI3XCIsIFwid2VpZ2h0XCI6LTMuNzY4MTcxMzQ1MTg0NzI5NH0pLCAoe1wiaWRcIjpcIjMxXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC41NTMxNjI0MDc5NjkyNTJ9KSwgKHtcImlkXCI6XCIzMlwiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOi0xLjc2NjAyMTMwNzI2OTY2ODJ9KSwgKHtcImlkXCI6XCIzM1wiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjotMi4xNDY4OTE3MzUzMTI2OTE3fSksICh7XCJpZFwiOlwiMzRcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6MC44MzIyNzgwODMzOTAyMzI5fSksICh7XCJpZFwiOlwiMzVcIiwgXCJzb3VyY2VSZWZcIjpcIjRcIiwgXCJ0YXJnZXRSZWZcIjpcIjZcIiwgXCJ3ZWlnaHRcIjotMS41Mjc0MjMxNDUyOTExMTl9KSwgKHtcImlkXCI6XCIzNlwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiN1wiLCBcIndlaWdodFwiOi0wLjU1MzgxNTg1NTQwNTE2MTR9KSwgKHtcImlkXCI6XCIzN1wiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiOFwiLCBcIndlaWdodFwiOjAuOTQ0MTAyMjI1Njc3NDA3NH0pLCAoe1wiaWRcIjpcIjM4XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6MC4xNjgzNzA3NDQ1Njg1NTc1fSksICh7XCJpZFwiOlwiMzlcIiwgXCJzb3VyY2VSZWZcIjpcIjRcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6MC42MTU5NDM0MjI0ODQwODMxfSksICh7XCJpZFwiOlwiNDBcIiwgXCJzb3VyY2VSZWZcIjpcIjRcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6MC44MzczNTE1MTA1MzQ3MjA1fSksICh7XCJpZFwiOlwiNDFcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjZcIiwgXCJ3ZWlnaHRcIjotMS40ODkwNjQ2MTYwMDkwMTd9KSwgKHtcImlkXCI6XCI0MlwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiN1wiLCBcIndlaWdodFwiOi0wLjI0MDY1Njk5OTg2NDYyMjl9KSwgKHtcImlkXCI6XCI0M1wiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiOFwiLCBcIndlaWdodFwiOjAuMzMxNDY5OTY5MDgyMjQ2ODV9KSwgKHtcImlkXCI6XCI0NFwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjMuMTQ5OTY4ODMzNzU5MTMzNn0pLCAoe1wiaWRcIjpcIjQ1XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOjIuMDE2NTQ4MDcxODY3MzgzNH0pLCAoe1wiaWRcIjpcIjQ2XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjAuODIwMDg3MzY3MDUzODY5Nn0pLCAoe1wiaWRcIjpcIjQ3XCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjAuNjg1MzQxMzYxNzI3NjI3NX0pLCAoe1wiaWRcIjpcIjQ4XCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjMuMDEwODUyNjg3NzYwMTI2NX0pLCAoe1wiaWRcIjpcIjQ5XCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjEuMTg3NDEwMzU0Nzc4Mjc3NX0pLCAoe1wiaWRcIjpcIjUwXCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOi0wLjg5NTI4MTU2MDA0MDM2NzZ9KSwgKHtcImlkXCI6XCI1MVwiLCBcInNvdXJjZVJlZlwiOlwiNlwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjotMS4yODIwOTUxNDg2NDc0NDUyfSksICh7XCJpZFwiOlwiNTJcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6LTMuMzI1NTM4Njk2ODI3NDUyNX0pLCAoe1wiaWRcIjpcIjUzXCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjMuNjQzNjkxMjQxODY5ODUzfSksICh7XCJpZFwiOlwiNTRcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MS43MzEzODUxODU1ODE0OTc1fSksICh7XCJpZFwiOlwiNTVcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6NC40OTU5NTUzMTQ1NzMyMTN9KSwgKHtcImlkXCI6XCI1NlwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjotMC42MzY3ODczNzg3MjU1Mjc1fSksICh7XCJpZFwiOlwiNTdcIiwgXCJzb3VyY2VSZWZcIjpcIjhcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6LTAuMzQ0NjM5OTYyMzI5Njc0MDN9KSwgKHtcImlkXCI6XCI1OFwiLCBcInNvdXJjZVJlZlwiOlwiOFwiLCBcInRhcmdldFJlZlwiOlwiMTNcIiwgXCJ3ZWlnaHRcIjotMC41NDYyNDg4MTk0ODI2NjI2fSksICh7XCJpZFwiOlwiNTlcIiwgXCJzb3VyY2VSZWZcIjpcIjhcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC41OTE4MDk1NTQzNjc3OTE3fSksICh7XCJpZFwiOlwiNjBcIiwgXCJzb3VyY2VSZWZcIjpcIjhcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6LTEuODExMDIyNDUxMjUzODQ2Nn0pLCAoe1wiaWRcIjpcIjYxXCIsIFwic291cmNlUmVmXCI6XCI4XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0xLjYzMTIwNjIwMDE5Njg3MTd9KSwgKHtcImlkXCI6XCI2MlwiLCBcInNvdXJjZVJlZlwiOlwiOVwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjoxLjcyMTMzNjg5MjI4ODIxMDl9KSwgKHtcImlkXCI6XCI2M1wiLCBcInNvdXJjZVJlZlwiOlwiOVwiLCBcInRhcmdldFJlZlwiOlwiMTNcIiwgXCJ3ZWlnaHRcIjotMC40MTkwNjAyNTg0ODEwMTkzfSksICh7XCJpZFwiOlwiNjRcIiwgXCJzb3VyY2VSZWZcIjpcIjlcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6LTMuOTExODkyOTg5ODM5MjUyfSksICh7XCJpZFwiOlwiNjVcIiwgXCJzb3VyY2VSZWZcIjpcIjlcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6Ni45ODUwMDY0MzA4MjczMzV9KSwgKHtcImlkXCI6XCI2NlwiLCBcInNvdXJjZVJlZlwiOlwiOVwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjotMS4xNzE4ODI3NDY2MTg2Mjl9KSwgKHtcImlkXCI6XCI2N1wiLCBcInNvdXJjZVJlZlwiOlwiMTBcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6MC42MzQ1NTQzMjk0NDg2MDk5fSksICh7XCJpZFwiOlwiNjhcIiwgXCJzb3VyY2VSZWZcIjpcIjEwXCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOi0zLjMxMDk2Mzc3NzA4NzI5NTV9KSwgKHtcImlkXCI6XCI2OVwiLCBcInNvdXJjZVJlZlwiOlwiMTBcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC4zMTQyNzk5ODk0MDIwNzI0N30pLCAoe1wiaWRcIjpcIjcwXCIsIFwic291cmNlUmVmXCI6XCIxMFwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjoxLjIwODk1NjQ1NzI1NDcyNTN9KSwgKHtcImlkXCI6XCI3MVwiLCBcInNvdXJjZVJlZlwiOlwiMTBcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6LTEuMTcyMzUxODk5NTYwODc3M30pLCAoe1wiaWRcIjpcIjcyXCIsIFwic291cmNlUmVmXCI6XCIxMVwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjotMC40NzkzODM0MTY0NDM5NjYyNn0pLCAoe1wiaWRcIjpcIjczXCIsIFwic291cmNlUmVmXCI6XCIxMVwiLCBcInRhcmdldFJlZlwiOlwiMTNcIiwgXCJ3ZWlnaHRcIjotMC4yNTk0ODg2Njg3NDE3ODA3fSksICh7XCJpZFwiOlwiNzRcIiwgXCJzb3VyY2VSZWZcIjpcIjExXCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjAuMjM2MTc4MzY4Nzg4NDEzM30pLCAoe1wiaWRcIjpcIjc1XCIsIFwic291cmNlUmVmXCI6XCIxMVwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjotMS4zNjcxMDAxMTM2Mjc0fSksICh7XCJpZFwiOlwiNzZcIiwgXCJzb3VyY2VSZWZcIjpcIjExXCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0yLjA2MzgyNDQwMjkzNDE5MzR9KV0sIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6MjAwMCwgXCJsZWFybmluZ1JhdGVcIjowLjIsIFwidXNlY2FzZXNcIjpbKHtcImlucHV0c1wiOltcImhvd1wiLCBcImFyZVwiLCBcInlvdVwiLCBcIj9cIiwgXCIgXCJdLCBcIm91dHB1dHNcIjpbXCJmaW5lXCIsIFwidGhhbmtcIiwgXCJ5b3VcIiwgXCIgXCIsIFwiIFwiXX0pLCAoe1wiaW5wdXRzXCI6W1wid2hhdFwiLCBcImlzXCIsIFwieW91clwiLCBcIm5hbWVcIiwgXCI/XCJdLCBcIm91dHB1dHNcIjpbXCJteVwiLCBcIm5hbWVcIiwgXCJpc1wiLCBcInJvYmVydFwiLCBcIiBcIl19KSwgKHtcImlucHV0c1wiOltcImhvd1wiLCBcIm9sZFwiLCBcImFyZVwiLCBcInlvdVwiLCBcIj9cIl0sIFwib3V0cHV0c1wiOltcImlcIiwgXCJkb1wiLCBcIm5vdFwiLCBcImtub3dcIiwgXCIgXCJdfSksICh7XCJpbnB1dHNcIjpbXCJkb1wiLCBcInlvdVwiLCBcImxvdmVcIiwgXCJtZVwiLCBcIj9cIl0sIFwib3V0cHV0c1wiOltcImlcIiwgXCJsb3ZlXCIsIFwieW91XCIsIFwiIFwiLCBcIiBcIl19KSwgKHtcImlucHV0c1wiOltcIndpbGxcIiwgXCJ5b3VcIiwgXCJtYXJyeVwiLCBcIm1lXCIsIFwiP1wiXSwgXCJvdXRwdXRzXCI6W1wiYXJlXCIsIFwieW91XCIsIFwic2luZ2xlXCIsIFwiP1wiLCBcIiBcIl19KV19KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkxFRCBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcImJpYXNcIjotMC43NDMyMTM3Njg3NDA5MDAyLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMVwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjotMC4zMzkwMDkxNDMwODgyMjM4MywgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjJcIiwgXCJpbmRleFwiOjEsIFwibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJiaWFzXCI6LTAuMDAxOTcwMTE5MDIyMDU0MDE3NywgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjNcIiwgXCJpbmRleFwiOjIsIFwibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJiaWFzXCI6LTAuNzMzNDQ2NjM1OTk1NjM5NSwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjRcIiwgXCJpbmRleFwiOjMsIFwibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJiaWFzXCI6LTAuMzc4ODI0MDE0Mzk5MDcwMiwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjVcIiwgXCJpbmRleFwiOjQsIFwibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJiaWFzXCI6LTAuNTU2OTk4ODAxNTE4NDA4MiwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjZcIiwgXCJpbmRleFwiOjUsIFwibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJiaWFzXCI6MC43ODIyMTYyMDExOTI4NTg0LCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiN1wiLCBcImluZGV4XCI6NiwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzXCI6W1soe1wiYmlhc1wiOjAuMTk0ODgwNjY5NTczMDcyMTIsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCI4XCIsIFwiaW5kZXhcIjowfSksICh7XCJiaWFzXCI6LTAuOTMxOTE2MzM4ODYyODY0LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiOVwiLCBcImluZGV4XCI6MX0pLCAoe1wiYmlhc1wiOi0yLjEwMTAxODI3MzMwMjExNjgsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIxMFwiLCBcImluZGV4XCI6Mn0pLCAoe1wiYmlhc1wiOi0yLjY2NzIyNDY5NDYyMzU2NywgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjExXCIsIFwiaW5kZXhcIjozfSksICh7XCJiaWFzXCI6LTAuNDUzNDgwMjQ0Nzg4NDQ0OSwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjEyXCIsIFwiaW5kZXhcIjo0fSksICh7XCJiaWFzXCI6MS4zNjQ1MDQwMDg2Nzc2MTMsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIxM1wiLCBcImluZGV4XCI6NX0pLCAoe1wiYmlhc1wiOjAuMDY0NzQ4NDc0MjE3OTg5MzYsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIxNFwiLCBcImluZGV4XCI6Nn0pLCAoe1wiYmlhc1wiOjEuMTE4MzUyOTgyOTM1NTI2NSwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjE1XCIsIFwiaW5kZXhcIjo3fSldXSwgXCJvdXRwdXRzXCI6Wyh7XCJiaWFzXCI6LTIuMzY4MDA0NTcwMjg2ODg0NCwgXCJkZXB0aFwiOjIsIFwiaWRcIjpcIjE2XCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjl9KX0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcImNvbm5lY3Rpb25zXCI6Wyh7XCJpZFwiOlwiMTdcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjYzNzg3MTI3NTMwNTAzODZ9KSwgKHtcImlkXCI6XCIxOFwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjAuNzU2MDM2MDI4NjUzNDczMn0pLCAoe1wiaWRcIjpcIjE5XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOjMuOTM5MzcwMTI3NTQ3NzMzNX0pLCAoe1wiaWRcIjpcIjIwXCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjAuOTgwODM4NzM3MzY2OTA5MX0pLCAoe1wiaWRcIjpcIjIxXCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjAuNjMyNzg2OTEwNjAyMTI3Nn0pLCAoe1wiaWRcIjpcIjIyXCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuMTczNzgwNzAyMTQyNDIzOH0pLCAoe1wiaWRcIjpcIjIzXCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjAuMjI3MTc1MDk5MDc3NTEwNX0pLCAoe1wiaWRcIjpcIjI0XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOjAuMjY1NDM2NTEzMTk1MDU2OX0pLCAoe1wiaWRcIjpcIjI1XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC4zNTg1NDAwNjE5NzkyNzczfSksICh7XCJpZFwiOlwiMjZcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjlcIiwgXCJ3ZWlnaHRcIjowLjI1MTY3MjY2NDg4Njk4MTAzfSksICh7XCJpZFwiOlwiMjdcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6LTAuNDU3MDg0OTQzNTI4ODM1NH0pLCAoe1wiaWRcIjpcIjI4XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjIuMjEzMTUwOTQxNDg3ODg1Nn0pLCAoe1wiaWRcIjpcIjI5XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjAuMjY3NTYyMzcyOTM1MTE3OX0pLCAoe1wiaWRcIjpcIjMwXCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuNTYwMjM3NzQwMTkyMTg5fSksICh7XCJpZFwiOlwiMzFcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC42MTg4NjY3NTE5MDQxNjcyfSksICh7XCJpZFwiOlwiMzJcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6MC4yNTI2OTQ5OTI4ODIyMDAwNH0pLCAoe1wiaWRcIjpcIjMzXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC44ODExOTQxODA4NDI0Nzc2fSksICh7XCJpZFwiOlwiMzRcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjlcIiwgXCJ3ZWlnaHRcIjowLjIwMjExMTMzNzkzNjg0MzMzfSksICh7XCJpZFwiOlwiMzVcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6LTAuNTE2NTAzODI2MTc5NDM2NH0pLCAoe1wiaWRcIjpcIjM2XCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjAuNjc0MTc2MjA2NDUxMjkzNH0pLCAoe1wiaWRcIjpcIjM3XCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjAuNjM1Mzk5NDk4NDI3NTc0N30pLCAoe1wiaWRcIjpcIjM4XCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuNjkwNDcwMDcxNTQ0NjQyN30pLCAoe1wiaWRcIjpcIjM5XCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjAuNzc0NzM5ODYzNzg0OTA5N30pLCAoe1wiaWRcIjpcIjQwXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOjAuNDg4MzI0ODExODM0MzU1MX0pLCAoe1wiaWRcIjpcIjQxXCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC43MDEzMzgxODI1NTEzMzgyfSksICh7XCJpZFwiOlwiNDJcIiwgXCJzb3VyY2VSZWZcIjpcIjRcIiwgXCJ0YXJnZXRSZWZcIjpcIjlcIiwgXCJ3ZWlnaHRcIjowLjM1ODYzNDc1NjY5NzAwNjJ9KSwgKHtcImlkXCI6XCI0M1wiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjowLjM5MzEzMTg4MzU0MTcxOTZ9KSwgKHtcImlkXCI6XCI0NFwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjotNS4yMDk4Njc4Njk2MTQ3MDh9KSwgKHtcImlkXCI6XCI0NVwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjowLjE2MTczMTgwNzU5NzczNTl9KSwgKHtcImlkXCI6XCI0NlwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTNcIiwgXCJ3ZWlnaHRcIjowLjg5NDUwMjcwOTg2ODY5MDV9KSwgKHtcImlkXCI6XCI0N1wiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjoxLjEzNjUxNDQ3NzMzNDI0ODZ9KSwgKHtcImlkXCI6XCI0OFwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjowLjk3NDk1NTMwMjM4MzgwMTZ9KSwgKHtcImlkXCI6XCI0OVwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiOFwiLCBcIndlaWdodFwiOjAuNDMzMDYxNjk2ODk2NjUyMjV9KSwgKHtcImlkXCI6XCI1MFwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOi0wLjAwOTUzMzE3NTU2MzI1NDM4N30pLCAoe1wiaWRcIjpcIjUxXCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOi0wLjMzNTY5NDI4NTA0MzUwNjd9KSwgKHtcImlkXCI6XCI1MlwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjowLjE5OTA5MTk0MDk2MjcwMTE2fSksICh7XCJpZFwiOlwiNTNcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6LTAuMTgxMDUxMDMwNDIzMTkxNn0pLCAoe1wiaWRcIjpcIjU0XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuMTA0ODg4MDA2NTI1MzQzOTF9KSwgKHtcImlkXCI6XCI1NVwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjowLjA2NDcyOTc4MTg0ODU0OTMzfSksICh7XCJpZFwiOlwiNTZcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6MC41OTM5NjAwOTk2NzM2Njg2fSksICh7XCJpZFwiOlwiNTdcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjYyNDgxMTc0NTM5MDA3NTd9KSwgKHtcImlkXCI6XCI1OFwiLCBcInNvdXJjZVJlZlwiOlwiNlwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjAuNDgwNjk3NDI0ODYxOTQ3NX0pLCAoe1wiaWRcIjpcIjU5XCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOi0xLjU5MzYxNTYxOTU2MjA4M30pLCAoe1wiaWRcIjpcIjYwXCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjMuMDQ1MzQzMTY4Nzc1OTgyfSksICh7XCJpZFwiOlwiNjFcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6MC4wMjQ0OTIxNDQyNzk4ODM4Mn0pLCAoe1wiaWRcIjpcIjYyXCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuNjAyOTI4NzM1NjQxMjc3MX0pLCAoe1wiaWRcIjpcIjYzXCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjAuODEyNjkyNjg2OTM1MjM1Nn0pLCAoe1wiaWRcIjpcIjY0XCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOjAuOTI1ODYxNDg2OTQ4OTcxM30pLCAoe1wiaWRcIjpcIjY1XCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC44MDY2MTUxMjc3MDQxMjM3fSksICh7XCJpZFwiOlwiNjZcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjlcIiwgXCJ3ZWlnaHRcIjowLjQ4MTE5NjkwMTUxNjYwMDQ0fSksICh7XCJpZFwiOlwiNjdcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6Mi43MDA3NDQ5MjAyMDgwMjM0fSksICh7XCJpZFwiOlwiNjhcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6Mi45ODcyODgyOTgxODc4MTh9KSwgKHtcImlkXCI6XCI2OVwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjowLjY1NjI2NzgwODAzMTg5Mzd9KSwgKHtcImlkXCI6XCI3MFwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTNcIiwgXCJ3ZWlnaHRcIjowLjU1NjQ3NTEyNDY0NDkzOH0pLCAoe1wiaWRcIjpcIjcxXCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjEuMjIxOTg0NjI4MjUwMTM5Nn0pLCAoe1wiaWRcIjpcIjcyXCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOjAuOTE3Mjk0NDYwODUzMzg5NX0pLCAoe1wiaWRcIjpcIjczXCIsIFwic291cmNlUmVmXCI6XCI4XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0wLjc2MDMwMjIwNjk1NzI1Mn0pLCAoe1wiaWRcIjpcIjc0XCIsIFwic291cmNlUmVmXCI6XCI5XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOjAuNjU0NTUyNzcwMDQxMTM2N30pLCAoe1wiaWRcIjpcIjc1XCIsIFwic291cmNlUmVmXCI6XCIxMFwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjo0LjQ3ODE1ODAzMjMzMTg2OH0pLCAoe1wiaWRcIjpcIjc2XCIsIFwic291cmNlUmVmXCI6XCIxMVwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjo1Ljk4NjcyMDE2MTE4Mzc3Nn0pLCAoe1wiaWRcIjpcIjc3XCIsIFwic291cmNlUmVmXCI6XCIxMlwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjowLjQyMjE1ODA2Njg4MDcyNzd9KSwgKHtcImlkXCI6XCI3OFwiLCBcInNvdXJjZVJlZlwiOlwiMTNcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6LTEuNTYyNTc3OTYxNzQ2MDg1NX0pLCAoe1wiaWRcIjpcIjc5XCIsIFwic291cmNlUmVmXCI6XCIxNFwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjotMS4xNzAzNjY1Mjg5NjI3NDk4fSksICh7XCJpZFwiOlwiODBcIiwgXCJzb3VyY2VSZWZcIjpcIjE1XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0xLjYzODY0ODYyNzI2MzM2NzR9KV19KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJTVUIgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJiaWFzXCI6MC40MTI1MzE1ODYwOTg1OTAxLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMVwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KX0pLCAoe1wiYmlhc1wiOi0wLjA4Nzg2MTA4MDg0OTQ2OTUzLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMlwiLCBcImluZGV4XCI6MSwgXCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KX0pXSwgXCJoaWRkZW5MYXllcnNcIjpbXSwgXCJvdXRwdXRzXCI6Wyh7XCJiaWFzXCI6MC41MDE5MDc5Mzk5OTk0NzY3LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiM1wiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6LTEwMCwgXCJtYXhcIjoxMDB9KX0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwiaWRlbnRpdHlcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcImNvbm5lY3Rpb25zXCI6Wyh7XCJpZFwiOlwiNFwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiM1wiLCBcIndlaWdodFwiOjAuNDk1NzU0MjExNDU5Mjg5fSksICh7XCJpZFwiOlwiNVwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiM1wiLCBcIndlaWdodFwiOi0wLjUwMDA3MjE0MzQ1MDM4NX0pXX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGVcblx0X193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3dvcmtlci5qc1wiKTtcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxufTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYmFiZWxfcnVudGltZV9oZWxwZXJzX2FzeW5jVG9HZW5lcmF0b3JfanMtbm9kZV9tb2R1bGVzX2JhYmVsX3J1bnRpbWVfaGVsLWNlNTQ4MlwiKS50aGVuKG5leHQpO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcmNfd29ya2VyX2pzXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGNodW5rTG9hZGluZ0NhbGxiYWNrID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5pID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aW1wb3J0U2NyaXB0cyhcIlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKTtcblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthbm5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYW5uXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBjaHVua0xvYWRpbmdDYWxsYmFjaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIi8vIHJ1biBzdGFydHVwXG5fX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=