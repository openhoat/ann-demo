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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/id-generator */ "./src/utils/id-generator.js");
/* harmony import */ var _neuron_connections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neuron-connections */ "./src/ann/connection/neuron-connections.js");





class NeuronConnection {
  static build(opt) {
    return new NeuronConnection(opt);
  }

  static defaultWeight() {
    return Math.random() * 0.01;
  }

  constructor(opt) {
    this.type = this.constructor.name;
    this.source = opt.source;
    this.target = opt.target;
    this.weight = typeof opt.weight === 'function' ? opt.weight() : opt.weight;
    this.id = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'id', _utils_id_generator__WEBPACK_IMPORTED_MODULE_2__.default.getId());
    this.source.outputs.push(this);
    this.target.inputs.push(this);
    _neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.all.push(this);
  }

  updateWeight(delta, learningRate, minWeight = Number.MIN_VALUE, maxWeight = Number.MAX_VALUE) {
    const oldWeight = this.weight;
    this.weight = oldWeight + _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.clip(delta * this.source.value * learningRate, minWeight, maxWeight);
  }

  toJSON() {
    return {
      id: this.id,
      sourceRef: this.source.id,
      targetRef: this.target.id,
      type: this.type,
      weight: this.weight
    };
  }

}



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
/* harmony import */ var _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/jsonable-collection */ "./src/utils/jsonable-collection.js");


class NeuronConnections extends _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_0__.JsonableCollection {
  static build() {
    return new NeuronConnections();
  }

  static get(id) {
    return NeuronConnections.all.find(item => item.id === id);
  }

  updateWeights(delta, learningRate, minWeight, maxWeight) {
    this.forEach(item => {
      item.updateWeight(delta, learningRate, minWeight, maxWeight);
    });
  }

}

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./src/utils/log.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection */ "./src/ann/connection/index.js");
/* harmony import */ var _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection/neuron-connections */ "./src/ann/connection/neuron-connections.js");
/* harmony import */ var _layer_hidden_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layer/hidden-layer */ "./src/ann/layer/hidden-layer.js");
/* harmony import */ var _layer_hidden_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layer/hidden-layers */ "./src/ann/layer/hidden-layers.js");
/* harmony import */ var _layer_input_layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layer/input-layer */ "./src/ann/layer/input-layer.js");
/* harmony import */ var _layer_output_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layer/output-layer */ "./src/ann/layer/output-layer.js");
/* harmony import */ var _neuron_inter_neuron__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./neuron/inter-neuron */ "./src/ann/neuron/inter-neuron.js");
/* harmony import */ var _neuron_motor_neuron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./neuron/motor-neuron */ "./src/ann/neuron/motor-neuron.js");
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./neuron/neurons */ "./src/ann/neuron/neurons.js");
/* harmony import */ var _neuron_sensory_neuron__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./neuron/sensory-neuron */ "./src/ann/neuron/sensory-neuron.js");
/* harmony import */ var _normalizer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./normalizer */ "./src/ann/normalizer/index.js");
/* harmony import */ var _normalizer_default__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./normalizer/default */ "./src/ann/normalizer/default.js");
/* harmony import */ var _strategy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./strategy */ "./src/ann/strategy/index.js");
/* harmony import */ var _strategy_identity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./strategy/identity */ "./src/ann/strategy/identity.js");


















class AnnNetwork {
  static build(config = {}) {
    const {
      id
    } = config;
    const strategy = _strategy__WEBPACK_IMPORTED_MODULE_15__.default.get(config.strategy.id) || _strategy_identity__WEBPACK_IMPORTED_MODULE_16__.identityStrategy;
    strategy.options = config.strategy.options;
    let inputLayer, hiddenLayers, outputLayer;

    if (config.inputs) {
      inputLayer = _layer_input_layer__WEBPACK_IMPORTED_MODULE_7__.InputLayer.build(...config.inputs.map((item, index) => {
        const Normalizer = _normalizer__WEBPACK_IMPORTED_MODULE_13__.default.get(item.normalizerRef) || _normalizer_default__WEBPACK_IMPORTED_MODULE_14__.default;
        const normalizer = Normalizer.build(item.normalizerOptions);
        return _neuron_sensory_neuron__WEBPACK_IMPORTED_MODULE_12__.SensoryNeuron.build({
          bias: item.bias,
          id: item.id,
          index,
          normalizer
        });
      }));
    }

    if (config.hiddenLayers) {
      hiddenLayers = _layer_hidden_layers__WEBPACK_IMPORTED_MODULE_6__.HiddenLayers.build(...config.hiddenLayers.map(hiddenLayer => new _layer_hidden_layer__WEBPACK_IMPORTED_MODULE_5__.HiddenLayer(...hiddenLayer.map(item => {
        return _neuron_inter_neuron__WEBPACK_IMPORTED_MODULE_9__.InterNeuron.build({ ...item,
          strategy
        });
      }))));
    } else if (config.hiddenLayersCounts) {
      hiddenLayers = _layer_hidden_layers__WEBPACK_IMPORTED_MODULE_6__.HiddenLayers.build(...config.hiddenLayersCounts.map((count, depth) => new _layer_hidden_layer__WEBPACK_IMPORTED_MODULE_5__.HiddenLayer(..._utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.mapCount(count, (__, index) => _neuron_inter_neuron__WEBPACK_IMPORTED_MODULE_9__.InterNeuron.build({
        depth: depth + 1,
        index,
        strategy
      })))));
    }

    if (config.outputs) {
      outputLayer = _layer_output_layer__WEBPACK_IMPORTED_MODULE_8__.OutputLayer.build(...config.outputs.map((item, index) => {
        const Normalizer = _normalizer__WEBPACK_IMPORTED_MODULE_13__.default.get(item.normalizerRef) || _normalizer_default__WEBPACK_IMPORTED_MODULE_14__.default;
        const normalizer = Normalizer.build(item.normalizerOptions);
        return _neuron_motor_neuron__WEBPACK_IMPORTED_MODULE_10__.MotorNeuron.build({
          bias: item.bias,
          depth: (hiddenLayers ? hiddenLayers.length : 0) + 1,
          id: item.id,
          index,
          normalizer,
          strategy
        });
      }));
    }

    const network = new AnnNetwork({
      hiddenLayers,
      id,
      inputLayer,
      outputLayer,
      strategy
    });

    if (config.connections) {
      config.connections.map(item => {
        return _connection__WEBPACK_IMPORTED_MODULE_3__.NeuronConnection.build({
          id: item.id,
          source: _neuron_neurons__WEBPACK_IMPORTED_MODULE_11__.Neurons.get(item.sourceRef),
          target: _neuron_neurons__WEBPACK_IMPORTED_MODULE_11__.Neurons.get(item.targetRef),
          weight: item.weight
        });
      });
    } else {
      network.connect();
    }

    return network;
  }

  static buildNormalizer(io) {
    const Normalizer = _normalizer__WEBPACK_IMPORTED_MODULE_13__.default.get(io.normalizerRef) || _normalizer_default__WEBPACK_IMPORTED_MODULE_14__.default;
    return Normalizer.build(io.normalizerOptions);
  }

  constructor(opt) {
    const {
      id,
      inputLayer,
      hiddenLayers,
      outputLayer,
      strategy
    } = opt;
    this.id = id;
    this.inputLayer = inputLayer;
    this.hiddenLayers = hiddenLayers;
    this.outputLayer = outputLayer;
    this.strategy = strategy;
  }

  connect() {
    const firstHiddenLayer = this.hiddenLayers.first;
    const lastHiddenLayer = this.hiddenLayers.last;
    const inputTargetLayer = firstHiddenLayer ? firstHiddenLayer : this.outputLayer;
    this.inputLayer.connectTo(inputTargetLayer);

    if (lastHiddenLayer) {
      this.hiddenLayers.reduce((prevLayer, nextLayer) => {
        prevLayer.connectTo(nextLayer);
        return nextLayer;
      });
      lastHiddenLayer.connectTo(this.outputLayer);
    }

    return this;
  }

  setInputValue(index, value) {
    const neuron = this.inputLayer.get(index);
    neuron.normalizeValue(value);
  }

  setInputValues(values) {
    this.inputLayer.forEach((__, index) => {
      this.setInputValue(index, values[index]);
    });
  }

  getOutputValue(index) {
    const neuron = this.outputLayer.get(index);
    return neuron.getDenormalizedValue();
  }

  getOutputValues() {
    return this.outputLayer.map((__, index) => this.getOutputValue(index));
  }

  run(inputs) {
    this.setInputValues(inputs);
    this.hiddenLayers.activate();
    this.outputLayer.activate();
    return this.getOutputValues();
  }

  adjustFromUsecase(usecase, learningRate = 0.2) {
    const outputValues = this.getOutputValues();
    const isEqualToExpected = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(outputValues, _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.toArray(usecase.outputs));

    if (!isEqualToExpected) {
      const outputs = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.toArray(usecase.outputs);
      this.outputLayer.forEach((item, index) => {
        item.expectedValue = item.normalizer.to(outputs[index]);
        item.calculateDelta();
        item.updateWeights(learningRate);
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reverse)(this.hiddenLayers.items).forEach(layer => {
        layer.forEach(neuron => {
          neuron.calculateDelta();
          neuron.updateWeights(learningRate);
        });
      });
    }

    return isEqualToExpected;
  }

  trainFromUsecase(usecase, learningRate) {
    this.run(usecase.inputs);
    return this.adjustFromUsecase(usecase, learningRate);
  }

  trainFromUsecases(usecases, learningRate) {
    return usecases.reduce((acc, usecase) => this.trainFromUsecase(usecase, learningRate) && acc, true);
  }

  async train(opt) {
    _utils_log__WEBPACK_IMPORTED_MODULE_2__.default.info('starting training...');
    const usecases = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'usecases');
    _utils_log__WEBPACK_IMPORTED_MODULE_2__.default.info('usecases :', usecases.slice(0, 10).map(({
      inputs,
      outputs
    }) => `${inputs.join(',')} : ${Array.isArray(outputs) ? outputs.join(',') : outputs}`).join('\n'));
    const expectedMaxIterations = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'expectedMaxIterations');
    const learningRate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'learningRate', 0.2);
    const hook = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'hook');
    const startTime = performance.now();
    const result = {
      averageDuration: 0,
      equalToExpected: true,
      iterations: 0,
      totalDuration: 0
    };
    let hookResult = true;

    do {
      result.iterations += 1;
      result.equalToExpected = this.trainFromUsecases(usecases, learningRate);

      if (typeof hook === 'function') {
        hookResult = await hook(result);
      }
    } while (hookResult !== false && !result.equalToExpected && result.iterations < expectedMaxIterations);

    if (result.iterations) {
      const endTime = performance.now();
      result.totalDuration = endTime - startTime;
      result.averageDuration = Math.round(result.totalDuration / result.iterations);
    }

    _utils_log__WEBPACK_IMPORTED_MODULE_2__.default.info('training result :', result);
    return result;
  }

  toJSON(options) {
    const inputs = this.inputLayer.toJSON(options).items.map(item => {
      // eslint-disable-next-line no-unused-vars
      const {
        type,
        ...data
      } = item;
      return data;
    });
    const hiddenLayers = this.hiddenLayers.toJSON(options).items.map(hiddenLayer => {
      return hiddenLayer.items.map(item => {
        // eslint-disable-next-line no-unused-vars
        const {
          strategy,
          type,
          ...data
        } = item;
        return data;
      });
    });
    const outputs = this.outputLayer.toJSON(options).items.map(item => {
      // eslint-disable-next-line no-unused-vars
      const {
        strategy,
        type,
        ...data
      } = item;
      return data;
    });
    const connections = _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_4__.NeuronConnections.all.toJSON(options).items.map(item => {
      // eslint-disable-next-line no-unused-vars
      const {
        type,
        ...data
      } = item;
      return data;
    });
    return {
      id: this.id,
      inputs,
      // eslint-disable-next-line sort-keys
      hiddenLayers,
      outputs,
      strategy: this.strategy.toJSON(options),
      // eslint-disable-next-line sort-keys
      connections
    };
  }

}



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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connection */ "./src/ann/connection/index.js");
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neuron/neurons */ "./src/ann/neuron/neurons.js");




class HiddenLayer extends _neuron_neurons__WEBPACK_IMPORTED_MODULE_2__.Neurons {
  static build(...items) {
    return new HiddenLayer(...items);
  }

  connectTo(targetLayer) {
    const weight = _utils_helper__WEBPACK_IMPORTED_MODULE_0__.default.heEtAlWeightbuilder(this.length);
    this.forEach(source => {
      targetLayer.forEach(target => {
        _connection__WEBPACK_IMPORTED_MODULE_1__.NeuronConnection.build({
          source,
          target,
          weight
        });
      });
    });
  }

  activate() {
    this.forEach(item => {
      item.activate();
    });
  }

}



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
/* harmony import */ var _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/jsonable-collection */ "./src/utils/jsonable-collection.js");


class HiddenLayers extends _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_0__.JsonableCollection {
  static build(...items) {
    return new HiddenLayers(...items);
  }

  activate() {
    this.forEach(item => {
      item.activate();
    });
  }

}



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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connection */ "./src/ann/connection/index.js");
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neuron/neurons */ "./src/ann/neuron/neurons.js");




class InputLayer extends _neuron_neurons__WEBPACK_IMPORTED_MODULE_2__.Neurons {
  static build(...items) {
    return new InputLayer(...items);
  }

  connectTo(targetLayer) {
    const weight = _utils_helper__WEBPACK_IMPORTED_MODULE_0__.default.heEtAlWeightbuilder(this.length);
    this.forEach(source => {
      targetLayer.forEach(target => {
        _connection__WEBPACK_IMPORTED_MODULE_1__.NeuronConnection.build({
          source,
          target,
          weight
        });
      });
    });
  }

}



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
/* harmony import */ var _neuron_neurons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../neuron/neurons */ "./src/ann/neuron/neurons.js");


class OutputLayer extends _neuron_neurons__WEBPACK_IMPORTED_MODULE_0__.Neurons {
  static build(...items) {
    return new OutputLayer(...items);
  }

  activate() {
    this.forEach(item => {
      item.activate();
    });
  }

  updateWeights() {
    this.forEach(item => {
      item.updateWeight();
    });
  }

}



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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/id-generator */ "./src/utils/id-generator.js");
/* harmony import */ var _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connection/neuron-connections */ "./src/ann/connection/neuron-connections.js");
/* harmony import */ var _neurons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./neurons */ "./src/ann/neuron/neurons.js");






class Neuron {
  constructor(opt) {
    this.type = this.constructor.name;
    this.id = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'id', _utils_id_generator__WEBPACK_IMPORTED_MODULE_2__.default.getId());
    this.index = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'index', 0);
    this.depth = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'depth', 0);
    this.color = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'color', '#909090');
    this.value = Math.random();
    this.normalizer = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'normalizer');
    this.bias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'bias', _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.random(-1, 1));

    if (opt.inputs) {
      this.delta = 0;
      this.inputs = _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.build();
      this.strategy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'strategy');
    }

    if (opt.outputs) {
      this.outputs = _connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.build();
    }

    _neurons__WEBPACK_IMPORTED_MODULE_4__.Neurons.all.push(this);
  }

  activate() {
    const {
      bias,
      inputs,
      strategy
    } = this;

    if (!strategy) {
      return;
    }

    const activation = strategy.combine(inputs.map(input => input.source.value).concat(1), inputs.map(input => input.weight).concat(bias));
    this.value = strategy.activate(activation);
  }

  calculateDelta() {
    const {
      expectedValue,
      outputs,
      strategy,
      value
    } = this;

    if (typeof expectedValue !== 'undefined') {
      this.delta = expectedValue - value;
      return;
    }

    if (!strategy) {
      return;
    }

    const error = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default.sum(outputs.map(output => output.weight * output.target.delta));
    this.delta = strategy.delta(error, value);
  }

  updateWeights(learningRate) {
    const {
      bias,
      delta,
      inputs,
      strategy
    } = this;

    if (!strategy) {
      return;
    }

    const minWeight = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(strategy, 'options.minWeight');
    const maxWeight = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(strategy, 'options.maxWeight');

    if (!inputs.isEmpty()) {
      inputs.updateWeights(delta, learningRate, minWeight, maxWeight);
    }

    this.bias = bias + delta * learningRate;
  }

  toJSON(options) {
    const jsonableConfig = {
      withoutValues: false,
      ...options
    };
    const {
      withoutValues
    } = jsonableConfig;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({ ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(this, 'bias', 'depth', 'id', 'index', 'type'),
      normalizerRef: this.normalizer && this.normalizer.id,
      // eslint-disable-next-line sort-keys
      normalizerOptions: this.normalizer && this.normalizer.options,
      strategy: this.strategy && this.strategy.toJSON(options),
      ...(!withoutValues && {
        delta: this.delta,
        value: this.value
      })
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}



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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/ann/neuron/index.js");


class InterNeuron extends ___WEBPACK_IMPORTED_MODULE_0__.Neuron {
  static build(opt) {
    return new InterNeuron(opt);
  }

  constructor(opt) {
    super({
      color: '#909090',
      ...opt,
      inputs: true,
      outputs: true
    });
  }

}



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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/ann/neuron/index.js");


class MotorNeuron extends ___WEBPACK_IMPORTED_MODULE_0__.Neuron {
  static build(opt) {
    return new MotorNeuron(opt);
  }

  constructor(opt) {
    super({
      color: '#1d4efd',
      ...opt,
      inputs: true
    });
  }

  getDenormalizedValue() {
    return this.normalizer.from(this.value);
  }

}



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
/* harmony import */ var _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/jsonable-collection */ "./src/utils/jsonable-collection.js");


class Neurons extends _utils_jsonable_collection__WEBPACK_IMPORTED_MODULE_0__.JsonableCollection {
  static get(id) {
    return Neurons.all.find(item => item.id === id);
  }

}

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/ann/neuron/index.js");


class SensoryNeuron extends ___WEBPACK_IMPORTED_MODULE_0__.Neuron {
  static build(opt) {
    return new SensoryNeuron(opt);
  }

  constructor(opt) {
    super({
      color: '#ee651d',
      ...opt,
      outputs: true
    });
  }

  normalizeValue(value) {
    this.value = this.normalizer.to(value);
  }

}



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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class BooleanNormalizer {
  static build(options) {
    return new BooleanNormalizer(options);
  }

  constructor(options) {
    this.id = BooleanNormalizer.type;
    this.options = options;
    this.threshold = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(options, 'threshold', 0.5);
    this.trueValue = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(options, 'trueValue', 1);
  }

  from(value) {
    return value >= this.threshold;
  }

  to(value) {
    return value ? this.trueValue : 0;
  }

  toJSON() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({
      id: this.id,
      options: this.options
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class DefaultNormalizer {
  static build(options) {
    return new DefaultNormalizer(options);
  }

  constructor(options) {
    this.id = DefaultNormalizer.type;
    this.options = options;
  }

  from(value) {
    return value;
  }

  to(value) {
    return value;
  }

  toJSON() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({
      id: this.id,
      options: this.options
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}

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




const normalizers = new Map([_default__WEBPACK_IMPORTED_MODULE_1__.default, _boolean__WEBPACK_IMPORTED_MODULE_0__.default, _integer__WEBPACK_IMPORTED_MODULE_2__.default, _phrase__WEBPACK_IMPORTED_MODULE_3__.default].map(Normalizer => [Normalizer.type, Normalizer]));
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");


const {
  fixZero
} = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default;

class IntegerNormalizer {
  static build(options) {
    return new IntegerNormalizer(options);
  }

  constructor(options) {
    this.id = IntegerNormalizer.type;
    this.options = options;
    this.min = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(options, 'min', Number.MIN_SAFE_INTEGER);
    const max = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(options, 'max', Number.MAX_SAFE_INTEGER);
    this.length = max - this.min;
  }

  from(value) {
    return fixZero(Math.round(value * this.length + this.min));
  }

  to(value) {
    return (value - this.min) / this.length;
  }

  toJSON() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({
      id: this.id,
      options: this.options
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}

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
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integer */ "./src/ann/normalizer/integer.js");


class PhraseNormalizer extends _integer__WEBPACK_IMPORTED_MODULE_0__.default {
  // https://medium.com/twyla-ai/40-small-talk-questions-your-chatbot-needs-to-know-and-why-it-matters-63caf03347f6
  static build(options) {
    return new PhraseNormalizer(options);
  }

  constructor(options) {
    super(options);
    this.id = PhraseNormalizer.type;
    this.min = 0;
    this.length = PhraseNormalizer.phrases.length - this.min;
  }

  from(value) {
    return PhraseNormalizer.phrases[super.from(value)];
  }

  to(value) {
    return super.to(Math.max(PhraseNormalizer.phrases.indexOf(value), 0));
  }

}

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class DivideStrategy {
  constructor(options) {
    this.id = 'divide';
    this.options = options;
  }

  activate(value) {
    return value;
  }

  combine(inputs, weights) {
    return inputs.reduce((acc, input, index) => acc * input * weights[index], 1);
  }

  delta(error) {
    return error;
  }

  toJSON() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({
      id: this.id,
      options: this.options
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}

const divideStrategy = new DivideStrategy();


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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");


const {
  sum
} = _utils_helper__WEBPACK_IMPORTED_MODULE_1__.default;

class IdentityStrategy {
  constructor(options) {
    this.id = 'identity';
    this.options = options;
  }

  activate(value) {
    return value;
  }

  combine(inputs, weights) {
    return sum(inputs.map((input, index) => input * weights[index]));
  }

  delta(error) {
    return error;
  }

  toJSON() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({
      id: this.id,
      options: this.options
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}

const identityStrategy = new IdentityStrategy();


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






const strategies = new Map([_divide__WEBPACK_IMPORTED_MODULE_0__.divideStrategy, _identity__WEBPACK_IMPORTED_MODULE_1__.identityStrategy, _logistic__WEBPACK_IMPORTED_MODULE_2__.logisticStrategy, _multiply__WEBPACK_IMPORTED_MODULE_3__.multiplyStrategy, _relu__WEBPACK_IMPORTED_MODULE_4__.reluStrategy, _tanh__WEBPACK_IMPORTED_MODULE_5__.tanhStrategy].map(strategy => [strategy.id, strategy]));
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
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");


class LogisticStrategy extends _identity__WEBPACK_IMPORTED_MODULE_0__.IdentityStrategy {
  constructor() {
    super();
    this.id = 'logistic';
  }

  activate(value) {
    return 1 / (1 + Math.exp(-value));
  }

  delta(error, output) {
    return error * (output * (1 - output));
  }

}

const logisticStrategy = new LogisticStrategy();


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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class MultiplyStrategy {
  constructor(options) {
    this.id = 'multiply';
    this.options = options;
  }

  activate(value) {
    return value;
  }

  combine(inputs, weights) {
    return inputs.reduce((acc, input, index) => acc * input * weights[index], 1);
  }

  delta(error) {
    return error;
  }

  toJSON() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)({
      id: this.id,
      options: this.options
    }, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  }

}

const multiplyStrategy = new MultiplyStrategy();


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
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");


class ReluStrategy extends _identity__WEBPACK_IMPORTED_MODULE_0__.IdentityStrategy {
  constructor() {
    super();
    this.id = 'relu';
  }

  activate(value) {
    return Math.max(0, value);
  }

  delta(error, output) {
    return error * (output > 0 ? 1 : 0);
  }

}

const reluStrategy = new ReluStrategy();


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
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./src/ann/strategy/identity.js");


class TanhStrategy extends _identity__WEBPACK_IMPORTED_MODULE_0__.IdentityStrategy {
  constructor() {
    super();
    this.id = 'tanh';
  }

  activate(value) {
    return 2 / (1 + Math.exp(-2 * value)) - 1;
  }

  delta(error, output) {
    return error * (1 - Math.pow(output, 2));
  }

}

const tanhStrategy = new TanhStrategy();


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

const config = {
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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _add_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.yml */ "./src/config/networks/arithmetic/add.yml");
/* harmony import */ var _add_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_yml__WEBPACK_IMPORTED_MODULE_1__);
var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;



const {
  buildArray
} = _utils_helper__WEBPACK_IMPORTED_MODULE_0__.default;
const minX = (_yamlConfig$inputs$ = _add_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
const maxX = (_yamlConfig$inputs$2 = _add_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
const minY = (_yamlConfig$inputs$3 = _add_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
const maxY = (_yamlConfig$inputs$4 = _add_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
const usecases = buildArray(maxX - minX + 1).reduce((acc, i) => {
  const x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(j => {
    const y = j + minY;
    return {
      inputs: [x, y],
      outputs: x + y
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ..._add_yml__WEBPACK_IMPORTED_MODULE_1__,
  training: { ..._add_yml__WEBPACK_IMPORTED_MODULE_1__.training,
    usecases
  }
});

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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _divide_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divide.yml */ "./src/config/networks/arithmetic/divide.yml");
/* harmony import */ var _divide_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divide_yml__WEBPACK_IMPORTED_MODULE_1__);
var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;



const {
  buildArray
} = _utils_helper__WEBPACK_IMPORTED_MODULE_0__.default;
const minX = (_yamlConfig$inputs$ = _divide_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
const maxX = (_yamlConfig$inputs$2 = _divide_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
const minY = (_yamlConfig$inputs$3 = _divide_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
const maxY = (_yamlConfig$inputs$4 = _divide_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
const usecases = buildArray(maxX - minX + 1).reduce((acc, i) => {
  const x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(j => {
    const y = j + minY;
    return {
      inputs: [x, y],
      outputs: Math.round(x / y)
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ..._divide_yml__WEBPACK_IMPORTED_MODULE_1__,
  training: { ..._divide_yml__WEBPACK_IMPORTED_MODULE_1__.training,
    usecases
  }
});

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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _multiply_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiply.yml */ "./src/config/networks/arithmetic/multiply.yml");
/* harmony import */ var _multiply_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_multiply_yml__WEBPACK_IMPORTED_MODULE_1__);
var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;



const {
  buildArray
} = _utils_helper__WEBPACK_IMPORTED_MODULE_0__.default;
const minX = (_yamlConfig$inputs$ = _multiply_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
const maxX = (_yamlConfig$inputs$2 = _multiply_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
const minY = (_yamlConfig$inputs$3 = _multiply_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
const maxY = (_yamlConfig$inputs$4 = _multiply_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
const usecases = buildArray(maxX - minX + 1).reduce((acc, i) => {
  const x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(j => {
    const y = j + minY;
    return {
      inputs: [x, y],
      outputs: x * y
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ..._multiply_yml__WEBPACK_IMPORTED_MODULE_1__,
  training: { ..._multiply_yml__WEBPACK_IMPORTED_MODULE_1__.training,
    usecases
  }
});

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
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _sub_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub.yml */ "./src/config/networks/arithmetic/sub.yml");
/* harmony import */ var _sub_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sub_yml__WEBPACK_IMPORTED_MODULE_1__);
var _yamlConfig$inputs$, _yamlConfig$inputs$$n, _yamlConfig$inputs$2, _yamlConfig$inputs$2$, _yamlConfig$inputs$3, _yamlConfig$inputs$3$, _yamlConfig$inputs$4, _yamlConfig$inputs$4$;



const {
  buildArray
} = _utils_helper__WEBPACK_IMPORTED_MODULE_0__.default;
const minX = (_yamlConfig$inputs$ = _sub_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$ === void 0 ? void 0 : (_yamlConfig$inputs$$n = _yamlConfig$inputs$.normalizerOptions) === null || _yamlConfig$inputs$$n === void 0 ? void 0 : _yamlConfig$inputs$$n.min;
const maxX = (_yamlConfig$inputs$2 = _sub_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[0]) === null || _yamlConfig$inputs$2 === void 0 ? void 0 : (_yamlConfig$inputs$2$ = _yamlConfig$inputs$2.normalizerOptions) === null || _yamlConfig$inputs$2$ === void 0 ? void 0 : _yamlConfig$inputs$2$.max;
const minY = (_yamlConfig$inputs$3 = _sub_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$3 === void 0 ? void 0 : (_yamlConfig$inputs$3$ = _yamlConfig$inputs$3.normalizerOptions) === null || _yamlConfig$inputs$3$ === void 0 ? void 0 : _yamlConfig$inputs$3$.min;
const maxY = (_yamlConfig$inputs$4 = _sub_yml__WEBPACK_IMPORTED_MODULE_1__.inputs[1]) === null || _yamlConfig$inputs$4 === void 0 ? void 0 : (_yamlConfig$inputs$4$ = _yamlConfig$inputs$4.normalizerOptions) === null || _yamlConfig$inputs$4$ === void 0 ? void 0 : _yamlConfig$inputs$4$.max;
const usecases = buildArray(maxX - minX + 1).reduce((acc, i) => {
  const x = i + minX;
  return acc.concat(buildArray(maxY - minY + 1).map(j => {
    const y = j + minY;
    return {
      inputs: [x, y],
      outputs: x - y
    };
  }));
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ..._sub_yml__WEBPACK_IMPORTED_MODULE_1__,
  training: { ..._sub_yml__WEBPACK_IMPORTED_MODULE_1__.training,
    usecases
  }
});

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const helper = {
  arrayCount: count => Array.from(Array(count)),
  buildArray: (count, value = lodash__WEBPACK_IMPORTED_MODULE_0__.identity) => {
    const iterator = typeof value === 'function' ? value : () => value;
    return helper.arrayCount(count).map((__, index) => iterator(index));
  },
  clip: (value, min, max) => Math.min(Math.max(value, min), max),
  delay: async (ms = 0) => new Promise(resolve => {
    setTimeout(resolve, ms);
  }),
  // eslint-disable-next-line no-compare-neg-zero
  fixZero: x => x === -0 ? 0 : x,
  heEtAlWeightbuilder: layerLength => () => Math.random() * Math.sqrt(2 / layerLength),
  mapCount: (count, iterator) => helper.arrayCount(count).map(iterator),
  random: (min, max) => Math.random() * (max - min) + min,
  repeat: (count, iterator) => {
    helper.arrayCount(count).forEach((value, index) => {
      iterator(index);
    });
  },
  sum: values => values.reduce((acc, value) => acc + value, 0),
  toArray: o => Array.isArray(o) ? o : [o]
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const counts = new Map();
const idGenerator = {
  clearIds: (key = 'default') => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(key)) {
      counts.delete(key);
    } else {
      counts.clear();
    }
  },
  getId: (key = 'default') => {
    const count = counts.get(key);
    const newCount = typeof count !== 'undefined' ? count + 1 : 1;
    counts.set(key, newCount);
    return `${newCount}`;
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
class JsonableCollection {
  constructor(...items) {
    this.type = this.constructor.name;
    this.items = [...items];
  }

  get first() {
    return this.items[0];
  }

  get last() {
    return this.items[this.items.length - 1];
  }

  get length() {
    return this.items.length;
  }

  clear() {
    while (this.length > 0) {
      this.pop();
    }
  }

  find(predicate) {
    return this.items.find(predicate);
  }

  forEach(iterator) {
    this.items.forEach(iterator);
  }

  get(index) {
    return this.items[index];
  }

  isEmpty() {
    return this.items.length < 1;
  }

  map(iterator) {
    return this.items.map(iterator);
  }

  reduce(reducer, initialValue) {
    return typeof initialValue === 'undefined' ? this.items.reduce(reducer) : this.items.reduce(reducer, initialValue);
  }

  pop() {
    return this.items.pop();
  }

  push(...items) {
    return this.items.push(...items);
  }

  toJSON(options) {
    return {
      items: this.map(item => {
        return item.toJSON(options);
      }),
      type: this.type
    };
  }

}



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
const log = {
  enabled: false,
  info: (...args) => {
    if (!log.enabled) {
      return;
    }

    console.log(...args);
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class Timer {
  constructor(opt) {
    this.freq = Number((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'freq', 1));
    this.handle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(opt, 'handle');
  }

  start() {
    if (this.id) {
      return false;
    }

    this.id = setInterval(this.handle, this.freq);
    return true;
  }

  stop() {
    if (!this.id) {
      return false;
    }

    clearInterval(this.id);
    this.id = undefined;
    return true;
  }

}



/***/ }),

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ann__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ann */ "./src/ann/index.js");
/* harmony import */ var _ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ann/connection/neuron-connections */ "./src/ann/connection/neuron-connections.js");
/* harmony import */ var _ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ann/neuron/neurons */ "./src/ann/neuron/neurons.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_id_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/id-generator */ "./src/utils/id-generator.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/log */ "./src/utils/log.js");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/timer */ "./src/utils/timer.js");










let networkConfig, network;

const postJsonMessage = o => {
  postMessage(JSON.stringify(o));
};

onmessage = async ({
  data
}) => {
  const {
    cmd
  } = data;
  _utils_log__WEBPACK_IMPORTED_MODULE_8__.default.info(`worker received ${cmd} command`);

  switch (cmd) {
    case 'reset':
      {
        const {
          category,
          type
        } = data;
        _ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_4__.Neurons.all.clear();
        _ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.all.clear();
        _utils_id_generator__WEBPACK_IMPORTED_MODULE_7__.default.clearIds();
        networkConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(_config__WEBPACK_IMPORTED_MODULE_5__.default.networks, [category, type]);
        network = _ann__WEBPACK_IMPORTED_MODULE_2__.AnnNetwork.build(networkConfig);
        postJsonMessage(_ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_4__.Neurons.all.toJSON());
        postJsonMessage(_ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.all.toJSON());
        break;
      }

    case 'run':
      {
        const {
          inputs
        } = data;
        const outputs = await network.run(inputs.map((item, index) => {
          const input = network.inputLayer.get(index);

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
        postJsonMessage({
          outputs,
          type: 'runResult'
        });
        postJsonMessage(_ann_neuron_neurons__WEBPACK_IMPORTED_MODULE_4__.Neurons.all.toJSON());
        break;
      }

    case 'train':
      {
        const {
          training
        } = networkConfig;
        const {
          expectedMaxIterations,
          learningRate,
          usecases
        } = training;

        const hook = async ({
          iterations
        }) => {
          postJsonMessage({
            expectedMaxIterations,
            iterations,
            type: 'trainingIteration'
          });
          await _utils_helper__WEBPACK_IMPORTED_MODULE_6__.default.delay(50);
        };

        const timer = new _utils_timer__WEBPACK_IMPORTED_MODULE_9__.Timer({
          freq: 500,
          handle: () => {
            postJsonMessage(_ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.all.toJSON());
          }
        });
        timer.start();
        const trainingResult = await network.train({
          expectedMaxIterations,
          hook,
          learningRate,
          usecases
        });
        timer.stop();
        const networkExport = network.toJSON({
          withoutValues: true
        });
        console.log((0,js_yaml__WEBPACK_IMPORTED_MODULE_0__.dump)({ ...networkExport,
          training
        }, {
          noRefs: true
        }));
        postJsonMessage(_ann_connection_neuron_connections__WEBPACK_IMPORTED_MODULE_3__.NeuronConnections.all.toJSON());
        postJsonMessage({
          trainingResult,
          type: 'trainingResult'
        });
        break;
      }
  }
};

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			return __webpack_require__.e("vendors-node_modules_js-yaml_dist_js-yaml_mjs-node_modules_lodash_lodash_js").then(next);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL2Nvbm5lY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9jb25uZWN0aW9uL25ldXJvbi1jb25uZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbGF5ZXIvaGlkZGVuLWxheWVyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbGF5ZXIvaGlkZGVuLWxheWVycy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL2xheWVyL2lucHV0LWxheWVyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbGF5ZXIvb3V0cHV0LWxheWVyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbmV1cm9uL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vbmV1cm9uL2ludGVyLW5ldXJvbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25ldXJvbi9tb3Rvci1uZXVyb24uanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9uZXVyb24vbmV1cm9ucy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25ldXJvbi9zZW5zb3J5LW5ldXJvbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25vcm1hbGl6ZXIvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25vcm1hbGl6ZXIvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL25vcm1hbGl6ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9ub3JtYWxpemVyL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9ub3JtYWxpemVyL3BocmFzZS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L2RpdmlkZS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L2lkZW50aXR5LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vc3RyYXRlZ3kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2Fubi9zdHJhdGVneS9sb2dpc3RpYy5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L211bHRpcGx5LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9hbm4vc3RyYXRlZ3kvcmVsdS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvYW5uL3N0cmF0ZWd5L3RhbmguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL2FyaXRobWV0aWMvYWRkLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9kaXZpZGUuanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9hcml0aG1ldGljL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9tdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL2FyaXRobWV0aWMvc3ViLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3Mvb3RoZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy90cmFpbmVkL2luZGV4LmpzIiwid2VicGFjazovL2Fubi8uL3NyYy91dGlscy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL3V0aWxzL2lkLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvdXRpbHMvanNvbmFibGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvdXRpbHMvbG9nLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy91dGlscy90aW1lci5qcyIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvd29ya2VyLmpzIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9hZGQueW1sIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9kaXZpZGUueW1sIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3MvYXJpdGhtZXRpYy9tdWx0aXBseS55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9hcml0aG1ldGljL3N1Yi55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9ib29sZWFuL2FuZC55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy9ib29sZWFuL29yLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL2Jvb2xlYW4veG9yLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL290aGVyL2NoYXQueW1sIiwid2VicGFjazovL2Fubi8uL3NyYy9jb25maWcvbmV0d29ya3Mvb3RoZXIvbGVkLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL3RyYWluZWQvYWRkLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL3RyYWluZWQvYW5kLnltbCIsIndlYnBhY2s6Ly9hbm4vLi9zcmMvY29uZmlnL25ldHdvcmtzL3RyYWluZWQvY2hhdC55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy90cmFpbmVkL2xlZC55bWwiLCJ3ZWJwYWNrOi8vYW5uLy4vc3JjL2NvbmZpZy9uZXR3b3Jrcy90cmFpbmVkL3N1Yi55bWwiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fubi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hbm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fubi93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2Fubi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly9hbm4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYW5uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJOZXVyb25Db25uZWN0aW9uIiwiYnVpbGQiLCJvcHQiLCJkZWZhdWx0V2VpZ2h0IiwiTWF0aCIsInJhbmRvbSIsImNvbnN0cnVjdG9yIiwidHlwZSIsIm5hbWUiLCJzb3VyY2UiLCJ0YXJnZXQiLCJ3ZWlnaHQiLCJpZCIsImdldCIsImlkR2VuZXJhdG9yIiwib3V0cHV0cyIsInB1c2giLCJpbnB1dHMiLCJOZXVyb25Db25uZWN0aW9ucyIsInVwZGF0ZVdlaWdodCIsImRlbHRhIiwibGVhcm5pbmdSYXRlIiwibWluV2VpZ2h0IiwiTnVtYmVyIiwiTUlOX1ZBTFVFIiwibWF4V2VpZ2h0IiwiTUFYX1ZBTFVFIiwib2xkV2VpZ2h0IiwiaGVscGVyIiwidmFsdWUiLCJ0b0pTT04iLCJzb3VyY2VSZWYiLCJ0YXJnZXRSZWYiLCJKc29uYWJsZUNvbGxlY3Rpb24iLCJhbGwiLCJmaW5kIiwiaXRlbSIsInVwZGF0ZVdlaWdodHMiLCJmb3JFYWNoIiwiQW5uTmV0d29yayIsImNvbmZpZyIsInN0cmF0ZWd5Iiwic3RyYXRlZ2llcyIsImlkZW50aXR5U3RyYXRlZ3kiLCJvcHRpb25zIiwiaW5wdXRMYXllciIsImhpZGRlbkxheWVycyIsIm91dHB1dExheWVyIiwiSW5wdXRMYXllciIsIm1hcCIsImluZGV4IiwiTm9ybWFsaXplciIsIm5vcm1hbGl6ZXJzIiwibm9ybWFsaXplclJlZiIsIkRlZmF1bHROb3JtYWxpemVyIiwibm9ybWFsaXplciIsIm5vcm1hbGl6ZXJPcHRpb25zIiwiU2Vuc29yeU5ldXJvbiIsImJpYXMiLCJIaWRkZW5MYXllcnMiLCJoaWRkZW5MYXllciIsIkhpZGRlbkxheWVyIiwiSW50ZXJOZXVyb24iLCJoaWRkZW5MYXllcnNDb3VudHMiLCJjb3VudCIsImRlcHRoIiwiX18iLCJPdXRwdXRMYXllciIsIk1vdG9yTmV1cm9uIiwibGVuZ3RoIiwibmV0d29yayIsImNvbm5lY3Rpb25zIiwiTmV1cm9ucyIsImNvbm5lY3QiLCJidWlsZE5vcm1hbGl6ZXIiLCJpbyIsImZpcnN0SGlkZGVuTGF5ZXIiLCJmaXJzdCIsImxhc3RIaWRkZW5MYXllciIsImxhc3QiLCJpbnB1dFRhcmdldExheWVyIiwiY29ubmVjdFRvIiwicmVkdWNlIiwicHJldkxheWVyIiwibmV4dExheWVyIiwic2V0SW5wdXRWYWx1ZSIsIm5ldXJvbiIsIm5vcm1hbGl6ZVZhbHVlIiwic2V0SW5wdXRWYWx1ZXMiLCJ2YWx1ZXMiLCJnZXRPdXRwdXRWYWx1ZSIsImdldERlbm9ybWFsaXplZFZhbHVlIiwiZ2V0T3V0cHV0VmFsdWVzIiwicnVuIiwiYWN0aXZhdGUiLCJhZGp1c3RGcm9tVXNlY2FzZSIsInVzZWNhc2UiLCJvdXRwdXRWYWx1ZXMiLCJpc0VxdWFsVG9FeHBlY3RlZCIsImlzRXF1YWwiLCJleHBlY3RlZFZhbHVlIiwidG8iLCJjYWxjdWxhdGVEZWx0YSIsInJldmVyc2UiLCJpdGVtcyIsImxheWVyIiwidHJhaW5Gcm9tVXNlY2FzZSIsInRyYWluRnJvbVVzZWNhc2VzIiwidXNlY2FzZXMiLCJhY2MiLCJ0cmFpbiIsImxvZyIsInNsaWNlIiwiam9pbiIsIkFycmF5IiwiaXNBcnJheSIsImV4cGVjdGVkTWF4SXRlcmF0aW9ucyIsImhvb2siLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3VsdCIsImF2ZXJhZ2VEdXJhdGlvbiIsImVxdWFsVG9FeHBlY3RlZCIsIml0ZXJhdGlvbnMiLCJ0b3RhbER1cmF0aW9uIiwiaG9va1Jlc3VsdCIsImVuZFRpbWUiLCJyb3VuZCIsImRhdGEiLCJ0YXJnZXRMYXllciIsIk5ldXJvbiIsImNvbG9yIiwiYWN0aXZhdGlvbiIsImNvbWJpbmUiLCJpbnB1dCIsImNvbmNhdCIsImVycm9yIiwib3V0cHV0IiwiaXNFbXB0eSIsImpzb25hYmxlQ29uZmlnIiwid2l0aG91dFZhbHVlcyIsIm9taXRCeSIsInBpY2siLCJpc05pbCIsImZyb20iLCJCb29sZWFuTm9ybWFsaXplciIsInRocmVzaG9sZCIsInRydWVWYWx1ZSIsIk1hcCIsIkludGVnZXJOb3JtYWxpemVyIiwiUGhyYXNlTm9ybWFsaXplciIsImZpeFplcm8iLCJtaW4iLCJNSU5fU0FGRV9JTlRFR0VSIiwibWF4IiwiTUFYX1NBRkVfSU5URUdFUiIsInBocmFzZXMiLCJpbmRleE9mIiwiRGl2aWRlU3RyYXRlZ3kiLCJ3ZWlnaHRzIiwiZGl2aWRlU3RyYXRlZ3kiLCJzdW0iLCJJZGVudGl0eVN0cmF0ZWd5IiwibG9naXN0aWNTdHJhdGVneSIsIm11bHRpcGx5U3RyYXRlZ3kiLCJyZWx1U3RyYXRlZ3kiLCJ0YW5oU3RyYXRlZ3kiLCJMb2dpc3RpY1N0cmF0ZWd5IiwiZXhwIiwiTXVsdGlwbHlTdHJhdGVneSIsIlJlbHVTdHJhdGVneSIsIlRhbmhTdHJhdGVneSIsInBvdyIsIm5ldHdvcmtzIiwiYnVpbGRBcnJheSIsIm1pblgiLCJ5YW1sQ29uZmlnIiwibWF4WCIsIm1pblkiLCJtYXhZIiwiaSIsIngiLCJqIiwieSIsInRyYWluaW5nIiwiYXJyYXlDb3VudCIsImlkZW50aXR5IiwiaXRlcmF0b3IiLCJjbGlwIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhlRXRBbFdlaWdodGJ1aWxkZXIiLCJsYXllckxlbmd0aCIsInNxcnQiLCJtYXBDb3VudCIsInJlcGVhdCIsInRvQXJyYXkiLCJvIiwiY291bnRzIiwiY2xlYXJJZHMiLCJrZXkiLCJkZWxldGUiLCJjbGVhciIsImdldElkIiwibmV3Q291bnQiLCJzZXQiLCJwb3AiLCJwcmVkaWNhdGUiLCJyZWR1Y2VyIiwiaW5pdGlhbFZhbHVlIiwiZW5hYmxlZCIsImluZm8iLCJhcmdzIiwiY29uc29sZSIsIlRpbWVyIiwiZnJlcSIsImhhbmRsZSIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInVuZGVmaW5lZCIsIm5ldHdvcmtDb25maWciLCJwb3N0SnNvbk1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbm1lc3NhZ2UiLCJjbWQiLCJjYXRlZ29yeSIsInBhcnNlSW50IiwidGltZXIiLCJ0cmFpbmluZ1Jlc3VsdCIsIm5ldHdvcmtFeHBvcnQiLCJkdW1wIiwibm9SZWZzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQU4sQ0FBdUI7QUFDVCxTQUFMQyxLQUFLLENBQUNDLEdBQUQsRUFBTTtBQUNoQixXQUFPLElBQUlGLGdCQUFKLENBQXFCRSxHQUFyQixDQUFQO0FBQ0Q7O0FBRW1CLFNBQWJDLGFBQWEsR0FBRztBQUNyQixXQUFPQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsSUFBdkI7QUFDRDs7QUFFREMsYUFBVyxDQUFDSixHQUFELEVBQU07QUFDZixTQUFLSyxJQUFMLEdBQVksS0FBS0QsV0FBTCxDQUFpQkUsSUFBN0I7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O1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0hBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBOztXQUVBLGtCOzs7O1VDbENBO1VBQ0EiLCJmaWxlIjoic3JjX3dvcmtlcl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0IGlkR2VuZXJhdG9yIGZyb20gJy4uLy4uL3V0aWxzL2lkLWdlbmVyYXRvcidcbmltcG9ydCB7IE5ldXJvbkNvbm5lY3Rpb25zIH0gZnJvbSAnLi9uZXVyb24tY29ubmVjdGlvbnMnXG5cbmNsYXNzIE5ldXJvbkNvbm5lY3Rpb24ge1xuICBzdGF0aWMgYnVpbGQob3B0KSB7XG4gICAgcmV0dXJuIG5ldyBOZXVyb25Db25uZWN0aW9uKG9wdClcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0V2VpZ2h0KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogMC4wMVxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0KSB7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgdGhpcy5zb3VyY2UgPSBvcHQuc291cmNlXG4gICAgdGhpcy50YXJnZXQgPSBvcHQudGFyZ2V0XG4gICAgdGhpcy53ZWlnaHQgPSB0eXBlb2Ygb3B0LndlaWdodCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdC53ZWlnaHQoKSA6IG9wdC53ZWlnaHRcbiAgICB0aGlzLmlkID0gZ2V0KG9wdCwgJ2lkJywgaWRHZW5lcmF0b3IuZ2V0SWQoKSlcbiAgICB0aGlzLnNvdXJjZS5vdXRwdXRzLnB1c2godGhpcylcbiAgICB0aGlzLnRhcmdldC5pbnB1dHMucHVzaCh0aGlzKVxuICAgIE5ldXJvbkNvbm5lY3Rpb25zLmFsbC5wdXNoKHRoaXMpXG4gIH1cblxuICB1cGRhdGVXZWlnaHQoZGVsdGEsIGxlYXJuaW5nUmF0ZSwgbWluV2VpZ2h0ID0gTnVtYmVyLk1JTl9WQUxVRSwgbWF4V2VpZ2h0ID0gTnVtYmVyLk1BWF9WQUxVRSkge1xuICAgIGNvbnN0IG9sZFdlaWdodCA9IHRoaXMud2VpZ2h0XG4gICAgdGhpcy53ZWlnaHQgPVxuICAgICAgb2xkV2VpZ2h0ICsgaGVscGVyLmNsaXAoZGVsdGEgKiB0aGlzLnNvdXJjZS52YWx1ZSAqIGxlYXJuaW5nUmF0ZSwgbWluV2VpZ2h0LCBtYXhXZWlnaHQpXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgc291cmNlUmVmOiB0aGlzLnNvdXJjZS5pZCxcbiAgICAgIHRhcmdldFJlZjogdGhpcy50YXJnZXQuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICB3ZWlnaHQ6IHRoaXMud2VpZ2h0LFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBOZXVyb25Db25uZWN0aW9uIH1cbiIsImltcG9ydCB7IEpzb25hYmxlQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2pzb25hYmxlLWNvbGxlY3Rpb24nXG5cbmNsYXNzIE5ldXJvbkNvbm5lY3Rpb25zIGV4dGVuZHMgSnNvbmFibGVDb2xsZWN0aW9uIHtcbiAgc3RhdGljIGFsbCA9IG5ldyBOZXVyb25Db25uZWN0aW9ucygpXG5cbiAgc3RhdGljIGJ1aWxkKCkge1xuICAgIHJldHVybiBuZXcgTmV1cm9uQ29ubmVjdGlvbnMoKVxuICB9XG5cbiAgc3RhdGljIGdldChpZCkge1xuICAgIHJldHVybiBOZXVyb25Db25uZWN0aW9ucy5hbGwuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpXG4gIH1cblxuICB1cGRhdGVXZWlnaHRzKGRlbHRhLCBsZWFybmluZ1JhdGUsIG1pbldlaWdodCwgbWF4V2VpZ2h0KSB7XG4gICAgdGhpcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnVwZGF0ZVdlaWdodChkZWx0YSwgbGVhcm5pbmdSYXRlLCBtaW5XZWlnaHQsIG1heFdlaWdodClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IE5ldXJvbkNvbm5lY3Rpb25zIH1cbiIsImltcG9ydCB7IGdldCwgaXNFcXVhbCwgcmV2ZXJzZSB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi91dGlscy9oZWxwZXInXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCB7IE5ldXJvbkNvbm5lY3Rpb24gfSBmcm9tICcuL2Nvbm5lY3Rpb24nXG5pbXBvcnQgeyBOZXVyb25Db25uZWN0aW9ucyB9IGZyb20gJy4vY29ubmVjdGlvbi9uZXVyb24tY29ubmVjdGlvbnMnXG5pbXBvcnQgeyBIaWRkZW5MYXllciB9IGZyb20gJy4vbGF5ZXIvaGlkZGVuLWxheWVyJ1xuaW1wb3J0IHsgSGlkZGVuTGF5ZXJzIH0gZnJvbSAnLi9sYXllci9oaWRkZW4tbGF5ZXJzJ1xuaW1wb3J0IHsgSW5wdXRMYXllciB9IGZyb20gJy4vbGF5ZXIvaW5wdXQtbGF5ZXInXG5pbXBvcnQgeyBPdXRwdXRMYXllciB9IGZyb20gJy4vbGF5ZXIvb3V0cHV0LWxheWVyJ1xuaW1wb3J0IHsgSW50ZXJOZXVyb24gfSBmcm9tICcuL25ldXJvbi9pbnRlci1uZXVyb24nXG5pbXBvcnQgeyBNb3Rvck5ldXJvbiB9IGZyb20gJy4vbmV1cm9uL21vdG9yLW5ldXJvbidcbmltcG9ydCB7IE5ldXJvbnMgfSBmcm9tICcuL25ldXJvbi9uZXVyb25zJ1xuaW1wb3J0IHsgU2Vuc29yeU5ldXJvbiB9IGZyb20gJy4vbmV1cm9uL3NlbnNvcnktbmV1cm9uJ1xuaW1wb3J0IG5vcm1hbGl6ZXJzIGZyb20gJy4vbm9ybWFsaXplcidcbmltcG9ydCBEZWZhdWx0Tm9ybWFsaXplciBmcm9tICcuL25vcm1hbGl6ZXIvZGVmYXVsdCdcbmltcG9ydCBzdHJhdGVnaWVzIGZyb20gJy4vc3RyYXRlZ3knXG5pbXBvcnQgeyBpZGVudGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9pZGVudGl0eSdcblxuY2xhc3MgQW5uTmV0d29yayB7XG4gIHN0YXRpYyBidWlsZChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbmZpZ1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gc3RyYXRlZ2llcy5nZXQoY29uZmlnLnN0cmF0ZWd5LmlkKSB8fCBpZGVudGl0eVN0cmF0ZWd5XG4gICAgc3RyYXRlZ3kub3B0aW9ucyA9IGNvbmZpZy5zdHJhdGVneS5vcHRpb25zXG4gICAgbGV0IGlucHV0TGF5ZXIsIGhpZGRlbkxheWVycywgb3V0cHV0TGF5ZXJcbiAgICBpZiAoY29uZmlnLmlucHV0cykge1xuICAgICAgaW5wdXRMYXllciA9IElucHV0TGF5ZXIuYnVpbGQoXG4gICAgICAgIC4uLmNvbmZpZy5pbnB1dHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IE5vcm1hbGl6ZXIgPSBub3JtYWxpemVycy5nZXQoaXRlbS5ub3JtYWxpemVyUmVmKSB8fCBEZWZhdWx0Tm9ybWFsaXplclxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZXIgPSBOb3JtYWxpemVyLmJ1aWxkKGl0ZW0ubm9ybWFsaXplck9wdGlvbnMpXG4gICAgICAgICAgcmV0dXJuIFNlbnNvcnlOZXVyb24uYnVpbGQoe1xuICAgICAgICAgICAgYmlhczogaXRlbS5iaWFzLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZXIsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuICAgIGlmIChjb25maWcuaGlkZGVuTGF5ZXJzKSB7XG4gICAgICBoaWRkZW5MYXllcnMgPSBIaWRkZW5MYXllcnMuYnVpbGQoXG4gICAgICAgIC4uLmNvbmZpZy5oaWRkZW5MYXllcnMubWFwKFxuICAgICAgICAgIChoaWRkZW5MYXllcikgPT5cbiAgICAgICAgICAgIG5ldyBIaWRkZW5MYXllcihcbiAgICAgICAgICAgICAgLi4uaGlkZGVuTGF5ZXIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEludGVyTmV1cm9uLmJ1aWxkKHsgLi4uaXRlbSwgc3RyYXRlZ3kgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29uZmlnLmhpZGRlbkxheWVyc0NvdW50cykge1xuICAgICAgaGlkZGVuTGF5ZXJzID0gSGlkZGVuTGF5ZXJzLmJ1aWxkKFxuICAgICAgICAuLi5jb25maWcuaGlkZGVuTGF5ZXJzQ291bnRzLm1hcChcbiAgICAgICAgICAoY291bnQsIGRlcHRoKSA9PlxuICAgICAgICAgICAgbmV3IEhpZGRlbkxheWVyKFxuICAgICAgICAgICAgICAuLi5oZWxwZXIubWFwQ291bnQoY291bnQsIChfXywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgSW50ZXJOZXVyb24uYnVpbGQoe1xuICAgICAgICAgICAgICAgICAgZGVwdGg6IGRlcHRoICsgMSxcbiAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29uZmlnLm91dHB1dHMpIHtcbiAgICAgIG91dHB1dExheWVyID0gT3V0cHV0TGF5ZXIuYnVpbGQoXG4gICAgICAgIC4uLmNvbmZpZy5vdXRwdXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBOb3JtYWxpemVyID0gbm9ybWFsaXplcnMuZ2V0KGl0ZW0ubm9ybWFsaXplclJlZikgfHwgRGVmYXVsdE5vcm1hbGl6ZXJcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVyID0gTm9ybWFsaXplci5idWlsZChpdGVtLm5vcm1hbGl6ZXJPcHRpb25zKVxuICAgICAgICAgIHJldHVybiBNb3Rvck5ldXJvbi5idWlsZCh7XG4gICAgICAgICAgICBiaWFzOiBpdGVtLmJpYXMsXG4gICAgICAgICAgICBkZXB0aDogKGhpZGRlbkxheWVycyA/IGhpZGRlbkxheWVycy5sZW5ndGggOiAwKSArIDEsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgbm9ybWFsaXplcixcbiAgICAgICAgICAgIHN0cmF0ZWd5LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBuZXR3b3JrID0gbmV3IEFubk5ldHdvcmsoe1xuICAgICAgaGlkZGVuTGF5ZXJzLFxuICAgICAgaWQsXG4gICAgICBpbnB1dExheWVyLFxuICAgICAgb3V0cHV0TGF5ZXIsXG4gICAgICBzdHJhdGVneSxcbiAgICB9KVxuICAgIGlmIChjb25maWcuY29ubmVjdGlvbnMpIHtcbiAgICAgIGNvbmZpZy5jb25uZWN0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIE5ldXJvbkNvbm5lY3Rpb24uYnVpbGQoe1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIHNvdXJjZTogTmV1cm9ucy5nZXQoaXRlbS5zb3VyY2VSZWYpLFxuICAgICAgICAgIHRhcmdldDogTmV1cm9ucy5nZXQoaXRlbS50YXJnZXRSZWYpLFxuICAgICAgICAgIHdlaWdodDogaXRlbS53ZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXR3b3JrLmNvbm5lY3QoKVxuICAgIH1cbiAgICByZXR1cm4gbmV0d29ya1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkTm9ybWFsaXplcihpbykge1xuICAgIGNvbnN0IE5vcm1hbGl6ZXIgPSBub3JtYWxpemVycy5nZXQoaW8ubm9ybWFsaXplclJlZikgfHwgRGVmYXVsdE5vcm1hbGl6ZXJcbiAgICByZXR1cm4gTm9ybWFsaXplci5idWlsZChpby5ub3JtYWxpemVyT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdCkge1xuICAgIGNvbnN0IHsgaWQsIGlucHV0TGF5ZXIsIGhpZGRlbkxheWVycywgb3V0cHV0TGF5ZXIsIHN0cmF0ZWd5IH0gPSBvcHRcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmlucHV0TGF5ZXIgPSBpbnB1dExheWVyXG4gICAgdGhpcy5oaWRkZW5MYXllcnMgPSBoaWRkZW5MYXllcnNcbiAgICB0aGlzLm91dHB1dExheWVyID0gb3V0cHV0TGF5ZXJcbiAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3lcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3QgZmlyc3RIaWRkZW5MYXllciA9IHRoaXMuaGlkZGVuTGF5ZXJzLmZpcnN0XG4gICAgY29uc3QgbGFzdEhpZGRlbkxheWVyID0gdGhpcy5oaWRkZW5MYXllcnMubGFzdFxuICAgIGNvbnN0IGlucHV0VGFyZ2V0TGF5ZXIgPSBmaXJzdEhpZGRlbkxheWVyID8gZmlyc3RIaWRkZW5MYXllciA6IHRoaXMub3V0cHV0TGF5ZXJcbiAgICB0aGlzLmlucHV0TGF5ZXIuY29ubmVjdFRvKGlucHV0VGFyZ2V0TGF5ZXIpXG4gICAgaWYgKGxhc3RIaWRkZW5MYXllcikge1xuICAgICAgdGhpcy5oaWRkZW5MYXllcnMucmVkdWNlKChwcmV2TGF5ZXIsIG5leHRMYXllcikgPT4ge1xuICAgICAgICBwcmV2TGF5ZXIuY29ubmVjdFRvKG5leHRMYXllcilcbiAgICAgICAgcmV0dXJuIG5leHRMYXllclxuICAgICAgfSlcbiAgICAgIGxhc3RIaWRkZW5MYXllci5jb25uZWN0VG8odGhpcy5vdXRwdXRMYXllcilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNldElucHV0VmFsdWUoaW5kZXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV1cm9uID0gdGhpcy5pbnB1dExheWVyLmdldChpbmRleClcbiAgICBuZXVyb24ubm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBzZXRJbnB1dFZhbHVlcyh2YWx1ZXMpIHtcbiAgICB0aGlzLmlucHV0TGF5ZXIuZm9yRWFjaCgoX18sIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUoaW5kZXgsIHZhbHVlc1tpbmRleF0pXG4gICAgfSlcbiAgfVxuXG4gIGdldE91dHB1dFZhbHVlKGluZGV4KSB7XG4gICAgY29uc3QgbmV1cm9uID0gdGhpcy5vdXRwdXRMYXllci5nZXQoaW5kZXgpXG4gICAgcmV0dXJuIG5ldXJvbi5nZXREZW5vcm1hbGl6ZWRWYWx1ZSgpXG4gIH1cblxuICBnZXRPdXRwdXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0TGF5ZXIubWFwKChfXywgaW5kZXgpID0+IHRoaXMuZ2V0T3V0cHV0VmFsdWUoaW5kZXgpKVxuICB9XG5cbiAgcnVuKGlucHV0cykge1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZXMoaW5wdXRzKVxuICAgIHRoaXMuaGlkZGVuTGF5ZXJzLmFjdGl2YXRlKClcbiAgICB0aGlzLm91dHB1dExheWVyLmFjdGl2YXRlKClcbiAgICByZXR1cm4gdGhpcy5nZXRPdXRwdXRWYWx1ZXMoKVxuICB9XG5cbiAgYWRqdXN0RnJvbVVzZWNhc2UodXNlY2FzZSwgbGVhcm5pbmdSYXRlID0gMC4yKSB7XG4gICAgY29uc3Qgb3V0cHV0VmFsdWVzID0gdGhpcy5nZXRPdXRwdXRWYWx1ZXMoKVxuICAgIGNvbnN0IGlzRXF1YWxUb0V4cGVjdGVkID0gaXNFcXVhbChvdXRwdXRWYWx1ZXMsIGhlbHBlci50b0FycmF5KHVzZWNhc2Uub3V0cHV0cykpXG4gICAgaWYgKCFpc0VxdWFsVG9FeHBlY3RlZCkge1xuICAgICAgY29uc3Qgb3V0cHV0cyA9IGhlbHBlci50b0FycmF5KHVzZWNhc2Uub3V0cHV0cylcbiAgICAgIHRoaXMub3V0cHV0TGF5ZXIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5leHBlY3RlZFZhbHVlID0gaXRlbS5ub3JtYWxpemVyLnRvKG91dHB1dHNbaW5kZXhdKVxuICAgICAgICBpdGVtLmNhbGN1bGF0ZURlbHRhKClcbiAgICAgICAgaXRlbS51cGRhdGVXZWlnaHRzKGxlYXJuaW5nUmF0ZSlcbiAgICAgIH0pXG4gICAgICByZXZlcnNlKHRoaXMuaGlkZGVuTGF5ZXJzLml0ZW1zKS5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICBsYXllci5mb3JFYWNoKChuZXVyb24pID0+IHtcbiAgICAgICAgICBuZXVyb24uY2FsY3VsYXRlRGVsdGEoKVxuICAgICAgICAgIG5ldXJvbi51cGRhdGVXZWlnaHRzKGxlYXJuaW5nUmF0ZSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBpc0VxdWFsVG9FeHBlY3RlZFxuICB9XG5cbiAgdHJhaW5Gcm9tVXNlY2FzZSh1c2VjYXNlLCBsZWFybmluZ1JhdGUpIHtcbiAgICB0aGlzLnJ1bih1c2VjYXNlLmlucHV0cylcbiAgICByZXR1cm4gdGhpcy5hZGp1c3RGcm9tVXNlY2FzZSh1c2VjYXNlLCBsZWFybmluZ1JhdGUpXG4gIH1cblxuICB0cmFpbkZyb21Vc2VjYXNlcyh1c2VjYXNlcywgbGVhcm5pbmdSYXRlKSB7XG4gICAgcmV0dXJuIHVzZWNhc2VzLnJlZHVjZShcbiAgICAgIChhY2MsIHVzZWNhc2UpID0+IHRoaXMudHJhaW5Gcm9tVXNlY2FzZSh1c2VjYXNlLCBsZWFybmluZ1JhdGUpICYmIGFjYyxcbiAgICAgIHRydWUsXG4gICAgKVxuICB9XG5cbiAgYXN5bmMgdHJhaW4ob3B0KSB7XG4gICAgbG9nLmluZm8oJ3N0YXJ0aW5nIHRyYWluaW5nLi4uJylcbiAgICBjb25zdCB1c2VjYXNlcyA9IGdldChvcHQsICd1c2VjYXNlcycpXG4gICAgbG9nLmluZm8oXG4gICAgICAndXNlY2FzZXMgOicsXG4gICAgICB1c2VjYXNlc1xuICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKHsgaW5wdXRzLCBvdXRwdXRzIH0pID0+XG4gICAgICAgICAgICBgJHtpbnB1dHMuam9pbignLCcpfSA6ICR7QXJyYXkuaXNBcnJheShvdXRwdXRzKSA/IG91dHB1dHMuam9pbignLCcpIDogb3V0cHV0c31gLFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCdcXG4nKSxcbiAgICApXG4gICAgY29uc3QgZXhwZWN0ZWRNYXhJdGVyYXRpb25zID0gZ2V0KG9wdCwgJ2V4cGVjdGVkTWF4SXRlcmF0aW9ucycpXG4gICAgY29uc3QgbGVhcm5pbmdSYXRlID0gZ2V0KG9wdCwgJ2xlYXJuaW5nUmF0ZScsIDAuMilcbiAgICBjb25zdCBob29rID0gZ2V0KG9wdCwgJ2hvb2snKVxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYXZlcmFnZUR1cmF0aW9uOiAwLFxuICAgICAgZXF1YWxUb0V4cGVjdGVkOiB0cnVlLFxuICAgICAgaXRlcmF0aW9uczogMCxcbiAgICAgIHRvdGFsRHVyYXRpb246IDAsXG4gICAgfVxuICAgIGxldCBob29rUmVzdWx0ID0gdHJ1ZVxuICAgIGRvIHtcbiAgICAgIHJlc3VsdC5pdGVyYXRpb25zICs9IDFcbiAgICAgIHJlc3VsdC5lcXVhbFRvRXhwZWN0ZWQgPSB0aGlzLnRyYWluRnJvbVVzZWNhc2VzKHVzZWNhc2VzLCBsZWFybmluZ1JhdGUpXG4gICAgICBpZiAodHlwZW9mIGhvb2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaG9va1Jlc3VsdCA9IGF3YWl0IGhvb2socmVzdWx0KVxuICAgICAgfVxuICAgIH0gd2hpbGUgKFxuICAgICAgaG9va1Jlc3VsdCAhPT0gZmFsc2UgJiZcbiAgICAgICFyZXN1bHQuZXF1YWxUb0V4cGVjdGVkICYmXG4gICAgICByZXN1bHQuaXRlcmF0aW9ucyA8IGV4cGVjdGVkTWF4SXRlcmF0aW9uc1xuICAgIClcbiAgICBpZiAocmVzdWx0Lml0ZXJhdGlvbnMpIHtcbiAgICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgcmVzdWx0LnRvdGFsRHVyYXRpb24gPSBlbmRUaW1lIC0gc3RhcnRUaW1lXG4gICAgICByZXN1bHQuYXZlcmFnZUR1cmF0aW9uID0gTWF0aC5yb3VuZChyZXN1bHQudG90YWxEdXJhdGlvbiAvIHJlc3VsdC5pdGVyYXRpb25zKVxuICAgIH1cbiAgICBsb2cuaW5mbygndHJhaW5pbmcgcmVzdWx0IDonLCByZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgdG9KU09OKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmlucHV0TGF5ZXIudG9KU09OKG9wdGlvbnMpLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICBjb25zdCB7IHR5cGUsIC4uLmRhdGEgfSA9IGl0ZW1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgICBjb25zdCBoaWRkZW5MYXllcnMgPSB0aGlzLmhpZGRlbkxheWVycy50b0pTT04ob3B0aW9ucykuaXRlbXMubWFwKChoaWRkZW5MYXllcikgPT4ge1xuICAgICAgcmV0dXJuIGhpZGRlbkxheWVyLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSwgdHlwZSwgLi4uZGF0YSB9ID0gaXRlbVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnN0IG91dHB1dHMgPSB0aGlzLm91dHB1dExheWVyLnRvSlNPTihvcHRpb25zKS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgY29uc3QgeyBzdHJhdGVneSwgdHlwZSwgLi4uZGF0YSB9ID0gaXRlbVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gTmV1cm9uQ29ubmVjdGlvbnMuYWxsLnRvSlNPTihvcHRpb25zKS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgY29uc3QgeyB0eXBlLCAuLi5kYXRhIH0gPSBpdGVtXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgaW5wdXRzLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvcnQta2V5c1xuICAgICAgaGlkZGVuTGF5ZXJzLFxuICAgICAgb3V0cHV0cyxcbiAgICAgIHN0cmF0ZWd5OiB0aGlzLnN0cmF0ZWd5LnRvSlNPTihvcHRpb25zKSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzb3J0LWtleXNcbiAgICAgIGNvbm5lY3Rpb25zLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBBbm5OZXR3b3JrIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0IHsgTmV1cm9uQ29ubmVjdGlvbiB9IGZyb20gJy4uL2Nvbm5lY3Rpb24nXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi4vbmV1cm9uL25ldXJvbnMnXG5cbmNsYXNzIEhpZGRlbkxheWVyIGV4dGVuZHMgTmV1cm9ucyB7XG4gIHN0YXRpYyBidWlsZCguLi5pdGVtcykge1xuICAgIHJldHVybiBuZXcgSGlkZGVuTGF5ZXIoLi4uaXRlbXMpXG4gIH1cblxuICBjb25uZWN0VG8odGFyZ2V0TGF5ZXIpIHtcbiAgICBjb25zdCB3ZWlnaHQgPSBoZWxwZXIuaGVFdEFsV2VpZ2h0YnVpbGRlcih0aGlzLmxlbmd0aClcbiAgICB0aGlzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgdGFyZ2V0TGF5ZXIuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgIE5ldXJvbkNvbm5lY3Rpb24uYnVpbGQoeyBzb3VyY2UsIHRhcmdldCwgd2VpZ2h0IH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWN0aXZhdGUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgSGlkZGVuTGF5ZXIgfVxuIiwiaW1wb3J0IHsgSnNvbmFibGVDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvanNvbmFibGUtY29sbGVjdGlvbidcblxuY2xhc3MgSGlkZGVuTGF5ZXJzIGV4dGVuZHMgSnNvbmFibGVDb2xsZWN0aW9uIHtcbiAgc3RhdGljIGJ1aWxkKC4uLml0ZW1zKSB7XG4gICAgcmV0dXJuIG5ldyBIaWRkZW5MYXllcnMoLi4uaXRlbXMpXG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWN0aXZhdGUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgSGlkZGVuTGF5ZXJzIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0IHsgTmV1cm9uQ29ubmVjdGlvbiB9IGZyb20gJy4uL2Nvbm5lY3Rpb24nXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi4vbmV1cm9uL25ldXJvbnMnXG5cbmNsYXNzIElucHV0TGF5ZXIgZXh0ZW5kcyBOZXVyb25zIHtcbiAgc3RhdGljIGJ1aWxkKC4uLml0ZW1zKSB7XG4gICAgcmV0dXJuIG5ldyBJbnB1dExheWVyKC4uLml0ZW1zKVxuICB9XG5cbiAgY29ubmVjdFRvKHRhcmdldExheWVyKSB7XG4gICAgY29uc3Qgd2VpZ2h0ID0gaGVscGVyLmhlRXRBbFdlaWdodGJ1aWxkZXIodGhpcy5sZW5ndGgpXG4gICAgdGhpcy5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgIHRhcmdldExheWVyLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICBOZXVyb25Db25uZWN0aW9uLmJ1aWxkKHsgc291cmNlLCB0YXJnZXQsIHdlaWdodCB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IElucHV0TGF5ZXIgfVxuIiwiaW1wb3J0IHsgTmV1cm9ucyB9IGZyb20gJy4uL25ldXJvbi9uZXVyb25zJ1xuXG5jbGFzcyBPdXRwdXRMYXllciBleHRlbmRzIE5ldXJvbnMge1xuICBzdGF0aWMgYnVpbGQoLi4uaXRlbXMpIHtcbiAgICByZXR1cm4gbmV3IE91dHB1dExheWVyKC4uLml0ZW1zKVxuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFjdGl2YXRlKClcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlV2VpZ2h0cygpIHtcbiAgICB0aGlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0udXBkYXRlV2VpZ2h0KClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IE91dHB1dExheWVyIH1cbiIsImltcG9ydCB7IGdldCwgaXNOaWwsIG9taXRCeSwgcGljayB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi91dGlscy9oZWxwZXInXG5pbXBvcnQgaWRHZW5lcmF0b3IgZnJvbSAnLi4vLi4vdXRpbHMvaWQtZ2VuZXJhdG9yJ1xuaW1wb3J0IHsgTmV1cm9uQ29ubmVjdGlvbnMgfSBmcm9tICcuLi9jb25uZWN0aW9uL25ldXJvbi1jb25uZWN0aW9ucydcbmltcG9ydCB7IE5ldXJvbnMgfSBmcm9tICcuL25ldXJvbnMnXG5cbmNsYXNzIE5ldXJvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdCkge1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuaWQgPSBnZXQob3B0LCAnaWQnLCBpZEdlbmVyYXRvci5nZXRJZCgpKVxuICAgIHRoaXMuaW5kZXggPSBnZXQob3B0LCAnaW5kZXgnLCAwKVxuICAgIHRoaXMuZGVwdGggPSBnZXQob3B0LCAnZGVwdGgnLCAwKVxuICAgIHRoaXMuY29sb3IgPSBnZXQob3B0LCAnY29sb3InLCAnIzkwOTA5MCcpXG4gICAgdGhpcy52YWx1ZSA9IE1hdGgucmFuZG9tKClcbiAgICB0aGlzLm5vcm1hbGl6ZXIgPSBnZXQob3B0LCAnbm9ybWFsaXplcicpXG4gICAgdGhpcy5iaWFzID0gZ2V0KG9wdCwgJ2JpYXMnLCBoZWxwZXIucmFuZG9tKC0xLCAxKSlcbiAgICBpZiAob3B0LmlucHV0cykge1xuICAgICAgdGhpcy5kZWx0YSA9IDBcbiAgICAgIHRoaXMuaW5wdXRzID0gTmV1cm9uQ29ubmVjdGlvbnMuYnVpbGQoKVxuICAgICAgdGhpcy5zdHJhdGVneSA9IGdldChvcHQsICdzdHJhdGVneScpXG4gICAgfVxuICAgIGlmIChvcHQub3V0cHV0cykge1xuICAgICAgdGhpcy5vdXRwdXRzID0gTmV1cm9uQ29ubmVjdGlvbnMuYnVpbGQoKVxuICAgIH1cbiAgICBOZXVyb25zLmFsbC5wdXNoKHRoaXMpXG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBjb25zdCB7IGJpYXMsIGlucHV0cywgc3RyYXRlZ3kgfSA9IHRoaXNcbiAgICBpZiAoIXN0cmF0ZWd5KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgYWN0aXZhdGlvbiA9IHN0cmF0ZWd5LmNvbWJpbmUoXG4gICAgICBpbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQuc291cmNlLnZhbHVlKS5jb25jYXQoMSksXG4gICAgICBpbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQud2VpZ2h0KS5jb25jYXQoYmlhcyksXG4gICAgKVxuICAgIHRoaXMudmFsdWUgPSBzdHJhdGVneS5hY3RpdmF0ZShhY3RpdmF0aW9uKVxuICB9XG5cbiAgY2FsY3VsYXRlRGVsdGEoKSB7XG4gICAgY29uc3QgeyBleHBlY3RlZFZhbHVlLCBvdXRwdXRzLCBzdHJhdGVneSwgdmFsdWUgfSA9IHRoaXNcbiAgICBpZiAodHlwZW9mIGV4cGVjdGVkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRlbHRhID0gZXhwZWN0ZWRWYWx1ZSAtIHZhbHVlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFzdHJhdGVneSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGVycm9yID0gaGVscGVyLnN1bShvdXRwdXRzLm1hcCgob3V0cHV0KSA9PiBvdXRwdXQud2VpZ2h0ICogb3V0cHV0LnRhcmdldC5kZWx0YSkpXG4gICAgdGhpcy5kZWx0YSA9IHN0cmF0ZWd5LmRlbHRhKGVycm9yLCB2YWx1ZSlcbiAgfVxuXG4gIHVwZGF0ZVdlaWdodHMobGVhcm5pbmdSYXRlKSB7XG4gICAgY29uc3QgeyBiaWFzLCBkZWx0YSwgaW5wdXRzLCBzdHJhdGVneSB9ID0gdGhpc1xuICAgIGlmICghc3RyYXRlZ3kpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBtaW5XZWlnaHQgPSBnZXQoc3RyYXRlZ3ksICdvcHRpb25zLm1pbldlaWdodCcpXG4gICAgY29uc3QgbWF4V2VpZ2h0ID0gZ2V0KHN0cmF0ZWd5LCAnb3B0aW9ucy5tYXhXZWlnaHQnKVxuICAgIGlmICghaW5wdXRzLmlzRW1wdHkoKSkge1xuICAgICAgaW5wdXRzLnVwZGF0ZVdlaWdodHMoZGVsdGEsIGxlYXJuaW5nUmF0ZSwgbWluV2VpZ2h0LCBtYXhXZWlnaHQpXG4gICAgfVxuICAgIHRoaXMuYmlhcyA9IGJpYXMgKyBkZWx0YSAqIGxlYXJuaW5nUmF0ZVxuICB9XG5cbiAgdG9KU09OKG9wdGlvbnMpIHtcbiAgICBjb25zdCBqc29uYWJsZUNvbmZpZyA9IHsgd2l0aG91dFZhbHVlczogZmFsc2UsIC4uLm9wdGlvbnMgfVxuICAgIGNvbnN0IHsgd2l0aG91dFZhbHVlcyB9ID0ganNvbmFibGVDb25maWdcbiAgICByZXR1cm4gb21pdEJ5KFxuICAgICAge1xuICAgICAgICAuLi5waWNrKHRoaXMsICdiaWFzJywgJ2RlcHRoJywgJ2lkJywgJ2luZGV4JywgJ3R5cGUnKSxcbiAgICAgICAgbm9ybWFsaXplclJlZjogdGhpcy5ub3JtYWxpemVyICYmIHRoaXMubm9ybWFsaXplci5pZCxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvcnQta2V5c1xuICAgICAgICBub3JtYWxpemVyT3B0aW9uczogdGhpcy5ub3JtYWxpemVyICYmIHRoaXMubm9ybWFsaXplci5vcHRpb25zLFxuICAgICAgICBzdHJhdGVneTogdGhpcy5zdHJhdGVneSAmJiB0aGlzLnN0cmF0ZWd5LnRvSlNPTihvcHRpb25zKSxcbiAgICAgICAgLi4uKCF3aXRob3V0VmFsdWVzICYmIHtcbiAgICAgICAgICBkZWx0YTogdGhpcy5kZWx0YSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgaXNOaWwsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7IE5ldXJvbiB9XG4iLCJpbXBvcnQgeyBOZXVyb24gfSBmcm9tICcuLydcblxuY2xhc3MgSW50ZXJOZXVyb24gZXh0ZW5kcyBOZXVyb24ge1xuICBzdGF0aWMgYnVpbGQob3B0KSB7XG4gICAgcmV0dXJuIG5ldyBJbnRlck5ldXJvbihvcHQpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHQpIHtcbiAgICBzdXBlcih7IGNvbG9yOiAnIzkwOTA5MCcsIC4uLm9wdCwgaW5wdXRzOiB0cnVlLCBvdXRwdXRzOiB0cnVlIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgSW50ZXJOZXVyb24gfVxuIiwiaW1wb3J0IHsgTmV1cm9uIH0gZnJvbSAnLi8nXG5cbmNsYXNzIE1vdG9yTmV1cm9uIGV4dGVuZHMgTmV1cm9uIHtcbiAgc3RhdGljIGJ1aWxkKG9wdCkge1xuICAgIHJldHVybiBuZXcgTW90b3JOZXVyb24ob3B0KVxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0KSB7XG4gICAgc3VwZXIoeyBjb2xvcjogJyMxZDRlZmQnLCAuLi5vcHQsIGlucHV0czogdHJ1ZSB9KVxuICB9XG5cbiAgZ2V0RGVub3JtYWxpemVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplci5mcm9tKHRoaXMudmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IHsgTW90b3JOZXVyb24gfVxuIiwiaW1wb3J0IHsgSnNvbmFibGVDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvanNvbmFibGUtY29sbGVjdGlvbidcblxuY2xhc3MgTmV1cm9ucyBleHRlbmRzIEpzb25hYmxlQ29sbGVjdGlvbiB7XG4gIHN0YXRpYyBhbGwgPSBuZXcgTmV1cm9ucygpXG5cbiAgc3RhdGljIGdldChpZCkge1xuICAgIHJldHVybiBOZXVyb25zLmFsbC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClcbiAgfVxufVxuXG5leHBvcnQgeyBOZXVyb25zIH1cbiIsImltcG9ydCB7IE5ldXJvbiB9IGZyb20gJy4vJ1xuXG5jbGFzcyBTZW5zb3J5TmV1cm9uIGV4dGVuZHMgTmV1cm9uIHtcbiAgc3RhdGljIGJ1aWxkKG9wdCkge1xuICAgIHJldHVybiBuZXcgU2Vuc29yeU5ldXJvbihvcHQpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHQpIHtcbiAgICBzdXBlcih7IGNvbG9yOiAnI2VlNjUxZCcsIC4uLm9wdCwgb3V0cHV0czogdHJ1ZSB9KVxuICB9XG5cbiAgbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5ub3JtYWxpemVyLnRvKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCB7IFNlbnNvcnlOZXVyb24gfVxuIiwiaW1wb3J0IHsgZ2V0LCBpc05pbCwgb21pdEJ5IH0gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBCb29sZWFuTm9ybWFsaXplciB7XG4gIHN0YXRpYyB0eXBlID0gJ2Jvb2xlYW4nXG5cbiAgc3RhdGljIGJ1aWxkKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEJvb2xlYW5Ob3JtYWxpemVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pZCA9IEJvb2xlYW5Ob3JtYWxpemVyLnR5cGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy50aHJlc2hvbGQgPSBnZXQob3B0aW9ucywgJ3RocmVzaG9sZCcsIDAuNSlcbiAgICB0aGlzLnRydWVWYWx1ZSA9IGdldChvcHRpb25zLCAndHJ1ZVZhbHVlJywgMSlcbiAgfVxuXG4gIGZyb20odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gdGhpcy50aHJlc2hvbGRcbiAgfVxuXG4gIHRvKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy50cnVlVmFsdWUgOiAwXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIG9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpc05pbCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbk5vcm1hbGl6ZXJcbiIsImltcG9ydCB7IGlzTmlsLCBvbWl0QnkgfSBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIERlZmF1bHROb3JtYWxpemVyIHtcbiAgc3RhdGljIHR5cGUgPSAnZGVmYXVsdCdcblxuICBzdGF0aWMgYnVpbGQob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdE5vcm1hbGl6ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gRGVmYXVsdE5vcm1hbGl6ZXIudHlwZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGZyb20odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRvKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIG9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpc05pbCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdE5vcm1hbGl6ZXJcbiIsImltcG9ydCBCb29sZWFuTm9ybWFsaXplciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgRGVmYXVsdE5vcm1hbGl6ZXIgZnJvbSAnLi9kZWZhdWx0J1xuaW1wb3J0IEludGVnZXJOb3JtYWxpemVyIGZyb20gJy4vaW50ZWdlcidcbmltcG9ydCBQaHJhc2VOb3JtYWxpemVyIGZyb20gJy4vcGhyYXNlJ1xuXG5jb25zdCBub3JtYWxpemVycyA9IG5ldyBNYXAoXG4gIFtEZWZhdWx0Tm9ybWFsaXplciwgQm9vbGVhbk5vcm1hbGl6ZXIsIEludGVnZXJOb3JtYWxpemVyLCBQaHJhc2VOb3JtYWxpemVyXS5tYXAoKE5vcm1hbGl6ZXIpID0+IFtcbiAgICBOb3JtYWxpemVyLnR5cGUsXG4gICAgTm9ybWFsaXplcixcbiAgXSksXG4pXG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZXJzXG4iLCJpbXBvcnQgeyBnZXQsIGlzTmlsLCBvbWl0QnkgfSBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuXG5jb25zdCB7IGZpeFplcm8gfSA9IGhlbHBlclxuXG5jbGFzcyBJbnRlZ2VyTm9ybWFsaXplciB7XG4gIHN0YXRpYyB0eXBlID0gJ2ludGVnZXInXG5cbiAgc3RhdGljIGJ1aWxkKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEludGVnZXJOb3JtYWxpemVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pZCA9IEludGVnZXJOb3JtYWxpemVyLnR5cGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5taW4gPSBnZXQob3B0aW9ucywgJ21pbicsIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKVxuICAgIGNvbnN0IG1heCA9IGdldChvcHRpb25zLCAnbWF4JywgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4gICAgdGhpcy5sZW5ndGggPSBtYXggLSB0aGlzLm1pblxuICB9XG5cbiAgZnJvbSh2YWx1ZSkge1xuICAgIHJldHVybiBmaXhaZXJvKE1hdGgucm91bmQodmFsdWUgKiB0aGlzLmxlbmd0aCArIHRoaXMubWluKSlcbiAgfVxuXG4gIHRvKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIHRoaXMubWluKSAvIHRoaXMubGVuZ3RoXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIG9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpc05pbCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdlck5vcm1hbGl6ZXJcbiIsImltcG9ydCBJbnRlZ2VyTm9ybWFsaXplciBmcm9tICcuL2ludGVnZXInXG5cbmNsYXNzIFBocmFzZU5vcm1hbGl6ZXIgZXh0ZW5kcyBJbnRlZ2VyTm9ybWFsaXplciB7XG4gIHN0YXRpYyBwaHJhc2VzID0gW1xuICAgICcgJyxcbiAgICAnYW0nLFxuICAgICdhcmUnLFxuICAgICdkbycsXG4gICAgJ2ZpbmUnLFxuICAgICdob3cnLFxuICAgICdpJyxcbiAgICAnaXMnLFxuICAgICdrbm93JyxcbiAgICAnbG92ZScsXG4gICAgJ21hcnJ5JyxcbiAgICAnbWUnLFxuICAgICdteScsXG4gICAgJ25hbWUnLFxuICAgICdub3QnLFxuICAgICdvbGQnLFxuICAgICdyb2JlcnQnLFxuICAgICdzaW5nbGUnLFxuICAgICd0aGFuaycsXG4gICAgJ3doYXQnLFxuICAgICd3aWxsJyxcbiAgICAneWVhcnMnLFxuICAgICd5b3UnLFxuICAgICd5b3VyJyxcbiAgICAnPycsXG4gIF1cbiAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL3R3eWxhLWFpLzQwLXNtYWxsLXRhbGstcXVlc3Rpb25zLXlvdXItY2hhdGJvdC1uZWVkcy10by1rbm93LWFuZC13aHktaXQtbWF0dGVycy02M2NhZjAzMzQ3ZjZcblxuICBzdGF0aWMgdHlwZSA9ICdwaHJhc2UnXG5cbiAgc3RhdGljIGJ1aWxkKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFBocmFzZU5vcm1hbGl6ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMuaWQgPSBQaHJhc2VOb3JtYWxpemVyLnR5cGVcbiAgICB0aGlzLm1pbiA9IDBcbiAgICB0aGlzLmxlbmd0aCA9IFBocmFzZU5vcm1hbGl6ZXIucGhyYXNlcy5sZW5ndGggLSB0aGlzLm1pblxuICB9XG5cbiAgZnJvbSh2YWx1ZSkge1xuICAgIHJldHVybiBQaHJhc2VOb3JtYWxpemVyLnBocmFzZXNbc3VwZXIuZnJvbSh2YWx1ZSldXG4gIH1cblxuICB0byh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci50byhNYXRoLm1heChQaHJhc2VOb3JtYWxpemVyLnBocmFzZXMuaW5kZXhPZih2YWx1ZSksIDApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBocmFzZU5vcm1hbGl6ZXJcbiIsImltcG9ydCB7IGlzTmlsLCBvbWl0QnkgfSBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIERpdmlkZVN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaWQgPSAnZGl2aWRlJ1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGFjdGl2YXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBjb21iaW5lKGlucHV0cywgd2VpZ2h0cykge1xuICAgIHJldHVybiBpbnB1dHMucmVkdWNlKChhY2MsIGlucHV0LCBpbmRleCkgPT4gYWNjICogaW5wdXQgKiB3ZWlnaHRzW2luZGV4XSwgMSlcbiAgfVxuXG4gIGRlbHRhKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIG9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpc05pbCxcbiAgICApXG4gIH1cbn1cblxuY29uc3QgZGl2aWRlU3RyYXRlZ3kgPSBuZXcgRGl2aWRlU3RyYXRlZ3koKVxuXG5leHBvcnQgeyBEaXZpZGVTdHJhdGVneSwgZGl2aWRlU3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHsgaXNOaWwsIG9taXRCeSB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi91dGlscy9oZWxwZXInXG5cbmNvbnN0IHsgc3VtIH0gPSBoZWxwZXJcblxuY2xhc3MgSWRlbnRpdHlTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gJ2lkZW50aXR5J1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGFjdGl2YXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBjb21iaW5lKGlucHV0cywgd2VpZ2h0cykge1xuICAgIHJldHVybiBzdW0oaW5wdXRzLm1hcCgoaW5wdXQsIGluZGV4KSA9PiBpbnB1dCAqIHdlaWdodHNbaW5kZXhdKSlcbiAgfVxuXG4gIGRlbHRhKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIG9taXRCeShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpc05pbCxcbiAgICApXG4gIH1cbn1cblxuY29uc3QgaWRlbnRpdHlTdHJhdGVneSA9IG5ldyBJZGVudGl0eVN0cmF0ZWd5KClcblxuZXhwb3J0IHsgSWRlbnRpdHlTdHJhdGVneSwgaWRlbnRpdHlTdHJhdGVneSB9XG4iLCJpbXBvcnQgeyBkaXZpZGVTdHJhdGVneSB9IGZyb20gJy4vZGl2aWRlJ1xuaW1wb3J0IHsgaWRlbnRpdHlTdHJhdGVneSB9IGZyb20gJy4vaWRlbnRpdHknXG5pbXBvcnQgeyBsb2dpc3RpY1N0cmF0ZWd5IH0gZnJvbSAnLi9sb2dpc3RpYydcbmltcG9ydCB7IG11bHRpcGx5U3RyYXRlZ3kgfSBmcm9tICcuL211bHRpcGx5J1xuaW1wb3J0IHsgcmVsdVN0cmF0ZWd5IH0gZnJvbSAnLi9yZWx1J1xuaW1wb3J0IHsgdGFuaFN0cmF0ZWd5IH0gZnJvbSAnLi90YW5oJ1xuXG5jb25zdCBzdHJhdGVnaWVzID0gbmV3IE1hcChcbiAgW1xuICAgIGRpdmlkZVN0cmF0ZWd5LFxuICAgIGlkZW50aXR5U3RyYXRlZ3ksXG4gICAgbG9naXN0aWNTdHJhdGVneSxcbiAgICBtdWx0aXBseVN0cmF0ZWd5LFxuICAgIHJlbHVTdHJhdGVneSxcbiAgICB0YW5oU3RyYXRlZ3ksXG4gIF0ubWFwKChzdHJhdGVneSkgPT4gW3N0cmF0ZWd5LmlkLCBzdHJhdGVneV0pLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBzdHJhdGVnaWVzXG4iLCJpbXBvcnQgeyBJZGVudGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9pZGVudGl0eSdcblxuY2xhc3MgTG9naXN0aWNTdHJhdGVneSBleHRlbmRzIElkZW50aXR5U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pZCA9ICdsb2dpc3RpYydcbiAgfVxuXG4gIGFjdGl2YXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIDEgLyAoMSArIE1hdGguZXhwKC12YWx1ZSkpXG4gIH1cblxuICBkZWx0YShlcnJvciwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIGVycm9yICogKG91dHB1dCAqICgxIC0gb3V0cHV0KSlcbiAgfVxufVxuXG5jb25zdCBsb2dpc3RpY1N0cmF0ZWd5ID0gbmV3IExvZ2lzdGljU3RyYXRlZ3koKVxuXG5leHBvcnQgeyBMb2dpc3RpY1N0cmF0ZWd5LCBsb2dpc3RpY1N0cmF0ZWd5IH1cbiIsImltcG9ydCB7IGlzTmlsLCBvbWl0QnkgfSBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIE11bHRpcGx5U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pZCA9ICdtdWx0aXBseSdcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBhY3RpdmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgY29tYmluZShpbnB1dHMsIHdlaWdodHMpIHtcbiAgICByZXR1cm4gaW5wdXRzLnJlZHVjZSgoYWNjLCBpbnB1dCwgaW5kZXgpID0+IGFjYyAqIGlucHV0ICogd2VpZ2h0c1tpbmRleF0sIDEpXG4gIH1cblxuICBkZWx0YShlcnJvcikge1xuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBvbWl0QnkoXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgaXNOaWwsXG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG11bHRpcGx5U3RyYXRlZ3kgPSBuZXcgTXVsdGlwbHlTdHJhdGVneSgpXG5cbmV4cG9ydCB7IE11bHRpcGx5U3RyYXRlZ3ksIG11bHRpcGx5U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHsgSWRlbnRpdHlTdHJhdGVneSB9IGZyb20gJy4vaWRlbnRpdHknXG5cbmNsYXNzIFJlbHVTdHJhdGVneSBleHRlbmRzIElkZW50aXR5U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pZCA9ICdyZWx1J1xuICB9XG5cbiAgYWN0aXZhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgdmFsdWUpXG4gIH1cblxuICBkZWx0YShlcnJvciwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIGVycm9yICogKG91dHB1dCA+IDAgPyAxIDogMClcbiAgfVxufVxuXG5jb25zdCByZWx1U3RyYXRlZ3kgPSBuZXcgUmVsdVN0cmF0ZWd5KClcblxuZXhwb3J0IHsgUmVsdVN0cmF0ZWd5LCByZWx1U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHsgSWRlbnRpdHlTdHJhdGVneSB9IGZyb20gJy4vaWRlbnRpdHknXG5cbmNsYXNzIFRhbmhTdHJhdGVneSBleHRlbmRzIElkZW50aXR5U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pZCA9ICd0YW5oJ1xuICB9XG5cbiAgYWN0aXZhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gMiAvICgxICsgTWF0aC5leHAoLTIgKiB2YWx1ZSkpIC0gMVxuICB9XG5cbiAgZGVsdGEoZXJyb3IsIG91dHB1dCkge1xuICAgIHJldHVybiBlcnJvciAqICgxIC0gTWF0aC5wb3cob3V0cHV0LCAyKSlcbiAgfVxufVxuXG5jb25zdCB0YW5oU3RyYXRlZ3kgPSBuZXcgVGFuaFN0cmF0ZWd5KClcblxuZXhwb3J0IHsgVGFuaFN0cmF0ZWd5LCB0YW5oU3RyYXRlZ3kgfVxuIiwiaW1wb3J0ICogYXMgbmV0d29ya3MgZnJvbSAnLi9uZXR3b3JrcydcblxuY29uc3QgY29uZmlnID0geyBuZXR3b3JrcyB9XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi8uLi91dGlscy9oZWxwZXInXG5pbXBvcnQgKiBhcyB5YW1sQ29uZmlnIGZyb20gJy4vYWRkLnltbCdcblxuY29uc3QgeyBidWlsZEFycmF5IH0gPSBoZWxwZXJcblxuY29uc3QgbWluWCA9IHlhbWxDb25maWcuaW5wdXRzWzBdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhYID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcbmNvbnN0IG1pblkgPSB5YW1sQ29uZmlnLmlucHV0c1sxXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1pblxuY29uc3QgbWF4WSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWF4XG5cbmNvbnN0IHVzZWNhc2VzID0gYnVpbGRBcnJheShtYXhYIC0gbWluWCArIDEpLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gIGNvbnN0IHggPSBpICsgbWluWFxuICByZXR1cm4gYWNjLmNvbmNhdChcbiAgICBidWlsZEFycmF5KG1heFkgLSBtaW5ZICsgMSkubWFwKChqKSA9PiB7XG4gICAgICBjb25zdCB5ID0gaiArIG1pbllcbiAgICAgIHJldHVybiB7IGlucHV0czogW3gsIHldLCBvdXRwdXRzOiB4ICsgeSB9XG4gICAgfSksXG4gIClcbn0sIFtdKVxuXG5leHBvcnQgZGVmYXVsdCB7IC4uLnlhbWxDb25maWcsIHRyYWluaW5nOiB7IC4uLnlhbWxDb25maWcudHJhaW5pbmcsIHVzZWNhc2VzIH0gfVxuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi8uLi91dGlscy9oZWxwZXInXG5pbXBvcnQgKiBhcyB5YW1sQ29uZmlnIGZyb20gJy4vZGl2aWRlLnltbCdcblxuY29uc3QgeyBidWlsZEFycmF5IH0gPSBoZWxwZXJcblxuY29uc3QgbWluWCA9IHlhbWxDb25maWcuaW5wdXRzWzBdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhYID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcbmNvbnN0IG1pblkgPSB5YW1sQ29uZmlnLmlucHV0c1sxXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1pblxuY29uc3QgbWF4WSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWF4XG5cbmNvbnN0IHVzZWNhc2VzID0gYnVpbGRBcnJheShtYXhYIC0gbWluWCArIDEpLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gIGNvbnN0IHggPSBpICsgbWluWFxuICByZXR1cm4gYWNjLmNvbmNhdChcbiAgICBidWlsZEFycmF5KG1heFkgLSBtaW5ZICsgMSkubWFwKChqKSA9PiB7XG4gICAgICBjb25zdCB5ID0gaiArIG1pbllcbiAgICAgIHJldHVybiB7IGlucHV0czogW3gsIHldLCBvdXRwdXRzOiBNYXRoLnJvdW5kKHggLyB5KSB9XG4gICAgfSksXG4gIClcbn0sIFtdKVxuXG5leHBvcnQgZGVmYXVsdCB7IC4uLnlhbWxDb25maWcsIHRyYWluaW5nOiB7IC4uLnlhbWxDb25maWcudHJhaW5pbmcsIHVzZWNhc2VzIH0gfVxuIiwiaW1wb3J0IGFkZCBmcm9tICcuL2FkZCdcbmltcG9ydCBkaXZpZGUgZnJvbSAnLi9kaXZpZGUnXG5pbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi9tdWx0aXBseSdcbmltcG9ydCBzdWIgZnJvbSAnLi9zdWInXG5cbmV4cG9ydCB7IGFkZCwgZGl2aWRlLCBtdWx0aXBseSwgc3ViIH1cbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaGVscGVyJ1xuaW1wb3J0ICogYXMgeWFtbENvbmZpZyBmcm9tICcuL211bHRpcGx5LnltbCdcblxuY29uc3QgeyBidWlsZEFycmF5IH0gPSBoZWxwZXJcblxuY29uc3QgbWluWCA9IHlhbWxDb25maWcuaW5wdXRzWzBdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhYID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcbmNvbnN0IG1pblkgPSB5YW1sQ29uZmlnLmlucHV0c1sxXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1pblxuY29uc3QgbWF4WSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWF4XG5cbmNvbnN0IHVzZWNhc2VzID0gYnVpbGRBcnJheShtYXhYIC0gbWluWCArIDEpLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gIGNvbnN0IHggPSBpICsgbWluWFxuICByZXR1cm4gYWNjLmNvbmNhdChcbiAgICBidWlsZEFycmF5KG1heFkgLSBtaW5ZICsgMSkubWFwKChqKSA9PiB7XG4gICAgICBjb25zdCB5ID0gaiArIG1pbllcbiAgICAgIHJldHVybiB7IGlucHV0czogW3gsIHldLCBvdXRwdXRzOiB4ICogeSB9XG4gICAgfSksXG4gIClcbn0sIFtdKVxuXG5leHBvcnQgZGVmYXVsdCB7IC4uLnlhbWxDb25maWcsIHRyYWluaW5nOiB7IC4uLnlhbWxDb25maWcudHJhaW5pbmcsIHVzZWNhc2VzIH0gfVxuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuLi8uLi8uLi91dGlscy9oZWxwZXInXG5pbXBvcnQgKiBhcyB5YW1sQ29uZmlnIGZyb20gJy4vc3ViLnltbCdcblxuY29uc3QgeyBidWlsZEFycmF5IH0gPSBoZWxwZXJcblxuY29uc3QgbWluWCA9IHlhbWxDb25maWcuaW5wdXRzWzBdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWluXG5jb25zdCBtYXhYID0geWFtbENvbmZpZy5pbnB1dHNbMF0/Lm5vcm1hbGl6ZXJPcHRpb25zPy5tYXhcbmNvbnN0IG1pblkgPSB5YW1sQ29uZmlnLmlucHV0c1sxXT8ubm9ybWFsaXplck9wdGlvbnM/Lm1pblxuY29uc3QgbWF4WSA9IHlhbWxDb25maWcuaW5wdXRzWzFdPy5ub3JtYWxpemVyT3B0aW9ucz8ubWF4XG5cbmNvbnN0IHVzZWNhc2VzID0gYnVpbGRBcnJheShtYXhYIC0gbWluWCArIDEpLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gIGNvbnN0IHggPSBpICsgbWluWFxuICByZXR1cm4gYWNjLmNvbmNhdChcbiAgICBidWlsZEFycmF5KG1heFkgLSBtaW5ZICsgMSkubWFwKChqKSA9PiB7XG4gICAgICBjb25zdCB5ID0gaiArIG1pbllcbiAgICAgIHJldHVybiB7IGlucHV0czogW3gsIHldLCBvdXRwdXRzOiB4IC0geSB9XG4gICAgfSksXG4gIClcbn0sIFtdKVxuXG5leHBvcnQgZGVmYXVsdCB7IC4uLnlhbWxDb25maWcsIHRyYWluaW5nOiB7IC4uLnlhbWxDb25maWcudHJhaW5pbmcsIHVzZWNhc2VzIH0gfVxuIiwiaW1wb3J0ICogYXMgY2hhdCBmcm9tICcuL2NoYXQueW1sJ1xuaW1wb3J0ICogYXMgbGVkIGZyb20gJy4vbGVkLnltbCdcblxuZXhwb3J0IHsgY2hhdCwgbGVkIH1cbiIsImltcG9ydCAqIGFzIGFkZCBmcm9tICcuL2FkZC55bWwnXG5pbXBvcnQgKiBhcyBhbmQgZnJvbSAnLi9hbmQueW1sJ1xuaW1wb3J0ICogYXMgY2hhdCBmcm9tICcuL2NoYXQueW1sJ1xuaW1wb3J0ICogYXMgbGVkIGZyb20gJy4vbGVkLnltbCdcbmltcG9ydCAqIGFzIHN1YiBmcm9tICcuL3N1Yi55bWwnXG5cbmV4cG9ydCB7IGFkZCwgYW5kLCBjaGF0LCBsZWQsIHN1YiB9XG4iLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJ2xvZGFzaCdcblxuY29uc3QgaGVscGVyID0ge1xuICBhcnJheUNvdW50OiAoY291bnQpID0+IEFycmF5LmZyb20oQXJyYXkoY291bnQpKSxcbiAgYnVpbGRBcnJheTogKGNvdW50LCB2YWx1ZSA9IGlkZW50aXR5KSA9PiB7XG4gICAgY29uc3QgaXRlcmF0b3IgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSA6ICgpID0+IHZhbHVlXG4gICAgcmV0dXJuIGhlbHBlci5hcnJheUNvdW50KGNvdW50KS5tYXAoKF9fLCBpbmRleCkgPT4gaXRlcmF0b3IoaW5kZXgpKVxuICB9LFxuICBjbGlwOiAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KSxcbiAgZGVsYXk6IGFzeW5jIChtcyA9IDApID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXG4gICAgfSksXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb21wYXJlLW5lZy16ZXJvXG4gIGZpeFplcm86ICh4KSA9PiAoeCA9PT0gLTAgPyAwIDogeCksXG4gIGhlRXRBbFdlaWdodGJ1aWxkZXI6IChsYXllckxlbmd0aCkgPT4gKCkgPT4gTWF0aC5yYW5kb20oKSAqIE1hdGguc3FydCgyIC8gbGF5ZXJMZW5ndGgpLFxuICBtYXBDb3VudDogKGNvdW50LCBpdGVyYXRvcikgPT4gaGVscGVyLmFycmF5Q291bnQoY291bnQpLm1hcChpdGVyYXRvciksXG4gIHJhbmRvbTogKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4sXG4gIHJlcGVhdDogKGNvdW50LCBpdGVyYXRvcikgPT4ge1xuICAgIGhlbHBlci5hcnJheUNvdW50KGNvdW50KS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGl0ZXJhdG9yKGluZGV4KVxuICAgIH0pXG4gIH0sXG4gIHN1bTogKHZhbHVlcykgPT4gdmFsdWVzLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApLFxuICB0b0FycmF5OiAobykgPT4gKEFycmF5LmlzQXJyYXkobykgPyBvIDogW29dKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyXG4iLCJpbXBvcnQgeyBpc05pbCB9IGZyb20gJ2xvZGFzaCdcblxuY29uc3QgY291bnRzID0gbmV3IE1hcCgpXG5cbmNvbnN0IGlkR2VuZXJhdG9yID0ge1xuICBjbGVhcklkczogKGtleSA9ICdkZWZhdWx0JykgPT4ge1xuICAgIGlmIChpc05pbChrZXkpKSB7XG4gICAgICBjb3VudHMuZGVsZXRlKGtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnRzLmNsZWFyKClcbiAgICB9XG4gIH0sXG4gIGdldElkOiAoa2V5ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBjb3VudHMuZ2V0KGtleSlcbiAgICBjb25zdCBuZXdDb3VudCA9IHR5cGVvZiBjb3VudCAhPT0gJ3VuZGVmaW5lZCcgPyBjb3VudCArIDEgOiAxXG4gICAgY291bnRzLnNldChrZXksIG5ld0NvdW50KVxuICAgIHJldHVybiBgJHtuZXdDb3VudH1gXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlkR2VuZXJhdG9yXG4iLCJjbGFzcyBKc29uYWJsZUNvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciguLi5pdGVtcykge1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMuaXRlbXMgPSBbLi4uaXRlbXNdXG4gIH1cblxuICBnZXQgZmlyc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbMF1cbiAgfVxuXG4gIGdldCBsYXN0KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV1cbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB3aGlsZSAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBvcCgpXG4gICAgfVxuICB9XG5cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKHByZWRpY2F0ZSlcbiAgfVxuXG4gIGZvckVhY2goaXRlcmF0b3IpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlcmF0b3IpXG4gIH1cblxuICBnZXQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF1cbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoIDwgMVxuICB9XG5cbiAgbWFwKGl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKGl0ZXJhdG9yKVxuICB9XG5cbiAgcmVkdWNlKHJlZHVjZXIsIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgaW5pdGlhbFZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLml0ZW1zLnJlZHVjZShyZWR1Y2VyKVxuICAgICAgOiB0aGlzLml0ZW1zLnJlZHVjZShyZWR1Y2VyLCBpbml0aWFsVmFsdWUpXG4gIH1cblxuICBwb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMucG9wKClcbiAgfVxuXG4gIHB1c2goLi4uaXRlbXMpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5wdXNoKC4uLml0ZW1zKVxuICB9XG5cbiAgdG9KU09OKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHRoaXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnRvSlNPTihvcHRpb25zKVxuICAgICAgfSksXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IEpzb25hYmxlQ29sbGVjdGlvbiB9XG4iLCJjb25zdCBsb2cgPSB7XG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBpbmZvOiAoLi4uYXJncykgPT4ge1xuICAgIGlmICghbG9nLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dcbiIsImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcihvcHQpIHtcbiAgICB0aGlzLmZyZXEgPSBOdW1iZXIoZ2V0KG9wdCwgJ2ZyZXEnLCAxKSlcbiAgICB0aGlzLmhhbmRsZSA9IGdldChvcHQsICdoYW5kbGUnKVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGUsIHRoaXMuZnJlcSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjbGVhckludGVydmFsKHRoaXMuaWQpXG4gICAgdGhpcy5pZCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IHsgVGltZXIgfVxuIiwiaW1wb3J0IHsgZHVtcCB9IGZyb20gJ2pzLXlhbWwnXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEFubk5ldHdvcmsgfSBmcm9tICcuL2FubidcbmltcG9ydCB7IE5ldXJvbkNvbm5lY3Rpb25zIH0gZnJvbSAnLi9hbm4vY29ubmVjdGlvbi9uZXVyb24tY29ubmVjdGlvbnMnXG5pbXBvcnQgeyBOZXVyb25zIH0gZnJvbSAnLi9hbm4vbmV1cm9uL25ldXJvbnMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL3V0aWxzL2hlbHBlcidcbmltcG9ydCBpZEdlbmVyYXRvciBmcm9tICcuL3V0aWxzL2lkLWdlbmVyYXRvcidcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnXG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vdXRpbHMvdGltZXInXG5cbmxldCBuZXR3b3JrQ29uZmlnLCBuZXR3b3JrXG5cbmNvbnN0IHBvc3RKc29uTWVzc2FnZSA9IChvKSA9PiB7XG4gIHBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG8pKVxufVxuXG5vbm1lc3NhZ2UgPSBhc3luYyAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgeyBjbWQgfSA9IGRhdGFcbiAgbG9nLmluZm8oYHdvcmtlciByZWNlaXZlZCAke2NtZH0gY29tbWFuZGApXG4gIHN3aXRjaCAoY21kKSB7XG4gICAgY2FzZSAncmVzZXQnOiB7XG4gICAgICBjb25zdCB7IGNhdGVnb3J5LCB0eXBlIH0gPSBkYXRhXG4gICAgICBOZXVyb25zLmFsbC5jbGVhcigpXG4gICAgICBOZXVyb25Db25uZWN0aW9ucy5hbGwuY2xlYXIoKVxuICAgICAgaWRHZW5lcmF0b3IuY2xlYXJJZHMoKVxuICAgICAgbmV0d29ya0NvbmZpZyA9IGdldChjb25maWcubmV0d29ya3MsIFtjYXRlZ29yeSwgdHlwZV0pXG4gICAgICBuZXR3b3JrID0gQW5uTmV0d29yay5idWlsZChuZXR3b3JrQ29uZmlnKVxuICAgICAgcG9zdEpzb25NZXNzYWdlKE5ldXJvbnMuYWxsLnRvSlNPTigpKVxuICAgICAgcG9zdEpzb25NZXNzYWdlKE5ldXJvbkNvbm5lY3Rpb25zLmFsbC50b0pTT04oKSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ3J1bic6IHtcbiAgICAgIGNvbnN0IHsgaW5wdXRzIH0gPSBkYXRhXG4gICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgbmV0d29yay5ydW4oXG4gICAgICAgIGlucHV0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5wdXQgPSBuZXR3b3JrLmlucHV0TGF5ZXIuZ2V0KGluZGV4KVxuICAgICAgICAgIHN3aXRjaCAoaW5wdXQubm9ybWFsaXplci5pZCkge1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtID09PSAndHJ1ZSdcbiAgICAgICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTApXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgcG9zdEpzb25NZXNzYWdlKHsgb3V0cHV0cywgdHlwZTogJ3J1blJlc3VsdCcgfSlcbiAgICAgIHBvc3RKc29uTWVzc2FnZShOZXVyb25zLmFsbC50b0pTT04oKSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ3RyYWluJzoge1xuICAgICAgY29uc3QgeyB0cmFpbmluZyB9ID0gbmV0d29ya0NvbmZpZ1xuICAgICAgY29uc3QgeyBleHBlY3RlZE1heEl0ZXJhdGlvbnMsIGxlYXJuaW5nUmF0ZSwgdXNlY2FzZXMgfSA9IHRyYWluaW5nXG4gICAgICBjb25zdCBob29rID0gYXN5bmMgKHsgaXRlcmF0aW9ucyB9KSA9PiB7XG4gICAgICAgIHBvc3RKc29uTWVzc2FnZSh7IGV4cGVjdGVkTWF4SXRlcmF0aW9ucywgaXRlcmF0aW9ucywgdHlwZTogJ3RyYWluaW5nSXRlcmF0aW9uJyB9KVxuICAgICAgICBhd2FpdCBoZWxwZXIuZGVsYXkoNTApXG4gICAgICB9XG4gICAgICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcih7XG4gICAgICAgIGZyZXE6IDUwMCxcbiAgICAgICAgaGFuZGxlOiAoKSA9PiB7XG4gICAgICAgICAgcG9zdEpzb25NZXNzYWdlKE5ldXJvbkNvbm5lY3Rpb25zLmFsbC50b0pTT04oKSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICB0aW1lci5zdGFydCgpXG4gICAgICBjb25zdCB0cmFpbmluZ1Jlc3VsdCA9IGF3YWl0IG5ldHdvcmsudHJhaW4oe1xuICAgICAgICBleHBlY3RlZE1heEl0ZXJhdGlvbnMsXG4gICAgICAgIGhvb2ssXG4gICAgICAgIGxlYXJuaW5nUmF0ZSxcbiAgICAgICAgdXNlY2FzZXMsXG4gICAgICB9KVxuICAgICAgdGltZXIuc3RvcCgpXG4gICAgICBjb25zdCBuZXR3b3JrRXhwb3J0ID0gbmV0d29yay50b0pTT04oeyB3aXRob3V0VmFsdWVzOiB0cnVlIH0pXG4gICAgICBjb25zb2xlLmxvZyhkdW1wKHsgLi4ubmV0d29ya0V4cG9ydCwgdHJhaW5pbmcgfSwgeyBub1JlZnM6IHRydWUgfSkpXG4gICAgICBwb3N0SnNvbk1lc3NhZ2UoTmV1cm9uQ29ubmVjdGlvbnMuYWxsLnRvSlNPTigpKVxuICAgICAgcG9zdEpzb25NZXNzYWdlKHsgdHJhaW5pbmdSZXN1bHQsIHR5cGU6ICd0cmFpbmluZ1Jlc3VsdCcgfSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJBREQgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KX0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTAwfSl9KV0sIFwib3V0cHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MjAwfSl9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6W10sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImlkZW50aXR5XCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJ0cmFpbmluZ1wiOih7XCJleHBlY3RlZE1heEl0ZXJhdGlvbnNcIjo1MCwgXCJsZWFybmluZ1JhdGVcIjowLjJ9KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkRJVklERSBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjoxLCBcIm1heFwiOjEwfSl9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjoxLCBcIm1heFwiOjEwfSl9KV0sIFwib3V0cHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTB9KX0pXSwgXCJoaWRkZW5MYXllcnNDb3VudHNcIjpbMiwgMywgMl0sIFwic3RyYXRlZ3lcIjooe1wiaWRcIjpcImlkZW50aXR5XCIsIFwib3B0aW9uc1wiOih7XCJtaW5XZWlnaHRcIjotMTAwMCwgXCJtYXhXZWlnaHRcIjoxMDAwfSl9KSwgXCJ0cmFpbmluZ1wiOih7XCJleHBlY3RlZE1heEl0ZXJhdGlvbnNcIjoxMDAwLCBcImxlYXJuaW5nUmF0ZVwiOjAuMn0pfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiTVVMVElQTFkgb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMH0pfSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMH0pfSldLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwMH0pfSldLCBcImhpZGRlbkxheWVyc0NvdW50c1wiOltdLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJtdWx0aXBseVwiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6MiwgXCJsZWFybmluZ1JhdGVcIjowLjJ9KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIlNVQiBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwMH0pfSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KX0pXSwgXCJvdXRwdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCIsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6LTEwMCwgXCJtYXhcIjoxMDB9KX0pXSwgXCJoaWRkZW5MYXllcnNDb3VudHNcIjpbXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwiaWRlbnRpdHlcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjUwLCBcImxlYXJuaW5nUmF0ZVwiOjAuMn0pfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiQU5EIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6WzNdLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjEwMCwgXCJsZWFybmluZ1JhdGVcIjowLjIsIFwidXNlY2FzZXNcIjpbKHtcImlucHV0c1wiOltmYWxzZSwgZmFsc2VdLCBcIm91dHB1dHNcIjpmYWxzZX0pLCAoe1wiaW5wdXRzXCI6W2ZhbHNlLCB0cnVlXSwgXCJvdXRwdXRzXCI6ZmFsc2V9KSwgKHtcImlucHV0c1wiOlt0cnVlLCBmYWxzZV0sIFwib3V0cHV0c1wiOmZhbHNlfSksICh7XCJpbnB1dHNcIjpbdHJ1ZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOnRydWV9KV19KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIk9SIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzQ291bnRzXCI6WzNdLCBcIm91dHB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcInRyYWluaW5nXCI6KHtcImV4cGVjdGVkTWF4SXRlcmF0aW9uc1wiOjEwMCwgXCJsZWFybmluZ1JhdGVcIjowLjIsIFwidXNlY2FzZXNcIjpbKHtcImlucHV0c1wiOltmYWxzZSwgZmFsc2VdLCBcIm91dHB1dHNcIjpmYWxzZX0pLCAoe1wiaW5wdXRzXCI6W2ZhbHNlLCB0cnVlXSwgXCJvdXRwdXRzXCI6dHJ1ZX0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIGZhbHNlXSwgXCJvdXRwdXRzXCI6dHJ1ZX0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIHRydWVdLCBcIm91dHB1dHNcIjp0cnVlfSldfSl9KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJjb25zdCBkb2MgPSBbKHtcImlkXCI6XCJYT1Igb3BlcmF0aW9uXCIsIFwiaW5wdXRzXCI6Wyh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJoaWRkZW5MYXllcnNDb3VudHNcIjpbM10sIFwib3V0cHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSldLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJsb2dpc3RpY1wiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6MzAwMCwgXCJsZWFybmluZ1JhdGVcIjowLjIsIFwidXNlY2FzZXNcIjpbKHtcImlucHV0c1wiOltmYWxzZSwgZmFsc2VdLCBcIm91dHB1dHNcIjpmYWxzZX0pLCAoe1wiaW5wdXRzXCI6W2ZhbHNlLCB0cnVlXSwgXCJvdXRwdXRzXCI6dHJ1ZX0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIGZhbHNlXSwgXCJvdXRwdXRzXCI6dHJ1ZX0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIHRydWVdLCBcIm91dHB1dHNcIjpmYWxzZX0pXX0pfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiQ2hhdCBib3RcIiwgXCJpbnB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pXSwgXCJoaWRkZW5MYXllcnNDb3VudHNcIjpbNl0sIFwib3V0cHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSldLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJsb2dpc3RpY1wiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6MjAwMCwgXCJsZWFybmluZ1JhdGVcIjowLjIsIFwidXNlY2FzZXNcIjpbKHtcImlucHV0c1wiOltcImhvd1wiLCBcImFyZVwiLCBcInlvdVwiLCBcIj9cIiwgXCIgXCJdLCBcIm91dHB1dHNcIjpbXCJmaW5lXCIsIFwidGhhbmtcIiwgXCJ5b3VcIiwgXCIgXCIsIFwiIFwiXX0pLCAoe1wiaW5wdXRzXCI6W1wid2hhdFwiLCBcImlzXCIsIFwieW91clwiLCBcIm5hbWVcIiwgXCI/XCJdLCBcIm91dHB1dHNcIjpbXCJteVwiLCBcIm5hbWVcIiwgXCJpc1wiLCBcInJvYmVydFwiLCBcIiBcIl19KSwgKHtcImlucHV0c1wiOltcImhvd1wiLCBcIm9sZFwiLCBcImFyZVwiLCBcInlvdVwiLCBcIj9cIl0sIFwib3V0cHV0c1wiOltcImlcIiwgXCJkb1wiLCBcIm5vdFwiLCBcImtub3dcIiwgXCIgXCJdfSksICh7XCJpbnB1dHNcIjpbXCJkb1wiLCBcInlvdVwiLCBcImxvdmVcIiwgXCJtZVwiLCBcIj9cIl0sIFwib3V0cHV0c1wiOltcImlcIiwgXCJsb3ZlXCIsIFwieW91XCIsIFwiIFwiLCBcIiBcIl19KSwgKHtcImlucHV0c1wiOltcIndpbGxcIiwgXCJ5b3VcIiwgXCJtYXJyeVwiLCBcIm1lXCIsIFwiP1wiXSwgXCJvdXRwdXRzXCI6W1wiYXJlXCIsIFwieW91XCIsIFwic2luZ2xlXCIsIFwiP1wiLCBcIiBcIl19KV19KX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkxFRCBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wibm9ybWFsaXplclJlZlwiOlwiYm9vbGVhblwifSksICh7XCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJoaWRkZW5MYXllcnNDb3VudHNcIjpbOF0sIFwib3V0cHV0c1wiOlsoe1wibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6OX0pfSldLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJsb2dpc3RpY1wiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwidHJhaW5pbmdcIjooe1wiZXhwZWN0ZWRNYXhJdGVyYXRpb25zXCI6MjAwMCwgXCJsZWFybmluZ1JhdGVcIjowLjIsIFwidXNlY2FzZXNcIjpbKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZV0sIFwib3V0cHV0c1wiOjB9KSwgKHtcImlucHV0c1wiOltmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLCBcIm91dHB1dHNcIjoxfSksICh7XCJpbnB1dHNcIjpbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlXSwgXCJvdXRwdXRzXCI6Mn0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjN9KSwgKHtcImlucHV0c1wiOltmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlXSwgXCJvdXRwdXRzXCI6NH0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjV9KSwgKHtcImlucHV0c1wiOlt0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sIFwib3V0cHV0c1wiOjZ9KSwgKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sIFwib3V0cHV0c1wiOjd9KSwgKHtcImlucHV0c1wiOlt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSwgXCJvdXRwdXRzXCI6OH0pLCAoe1wiaW5wdXRzXCI6W3RydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlXSwgXCJvdXRwdXRzXCI6OX0pXX0pfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiQUREIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wiYmlhc1wiOjAsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIxXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MTAwfSksIFwibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwifSksICh7XCJiaWFzXCI6MCwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjJcIiwgXCJpbmRleFwiOjEsIFwibm9ybWFsaXplck9wdGlvbnNcIjooe1wibWluXCI6MCwgXCJtYXhcIjoxMDB9KSwgXCJub3JtYWxpemVyUmVmXCI6XCJpbnRlZ2VyXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzXCI6W10sIFwib3V0cHV0c1wiOlsoe1wiYmlhc1wiOjAsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIzXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6MjAwfSksIFwibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwifSldLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJpZGVudGl0eVwiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwiY29ubmVjdGlvbnNcIjpbKHtcImlkXCI6XCI0XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIzXCIsIFwid2VpZ2h0XCI6MC41fSksICh7XCJpZFwiOlwiNVwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiM1wiLCBcIndlaWdodFwiOjAuNX0pXX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkFORCBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcImJpYXNcIjotMC44Mzc1MjAwMjg0MTk3NzUsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIxXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wiYmlhc1wiOi0wLjk4NDgwNzQ5MjE1MTk1NjEsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIyXCIsIFwiaW5kZXhcIjoxLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJoaWRkZW5MYXllcnNcIjpbWyh7XCJiaWFzXCI6LTAuMjA0MTAyNDQ1MDE1MjQ5OTYsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIzXCIsIFwiaW5kZXhcIjowfSksICh7XCJiaWFzXCI6LTAuMjI2MjIyMjMyODE5MjYzMjQsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCI0XCIsIFwiaW5kZXhcIjoxfSksICh7XCJiaWFzXCI6MC44NDI5MzkxNDIzMTE4NDAxLCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiNVwiLCBcImluZGV4XCI6Mn0pXV0sIFwib3V0cHV0c1wiOlsoe1wiYmlhc1wiOi0wLjU0MDAzNTc2OTk0ODU0MjEsIFwiZGVwdGhcIjoyLCBcImlkXCI6XCI2XCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcImNvbm5lY3Rpb25zXCI6Wyh7XCJpZFwiOlwiN1wiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiM1wiLCBcIndlaWdodFwiOjAuMDcwNDg2MTI2OTA0NTk4MTF9KSwgKHtcImlkXCI6XCI4XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCI0XCIsIFwid2VpZ2h0XCI6MC45ODA4NTYzNzYyMDk5Njg2fSksICh7XCJpZFwiOlwiOVwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiNVwiLCBcIndlaWdodFwiOjAuODIyODI3MTY0ODc2NDY1Mn0pLCAoe1wiaWRcIjpcIjEwXCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCIzXCIsIFwid2VpZ2h0XCI6MC45NTUwNzMzNjIyMDI4NTUxfSksICh7XCJpZFwiOlwiMTFcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjRcIiwgXCJ3ZWlnaHRcIjowLjgyMDA5NDc3OTc4MDk5NTR9KSwgKHtcImlkXCI6XCIxMlwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiNVwiLCBcIndlaWdodFwiOjAuMjczMDczNTE2NzYzMzE4NH0pLCAoe1wiaWRcIjpcIjEzXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCI2XCIsIFwid2VpZ2h0XCI6MC4xMjQ3ODAwMzk0MzQ4Mjk3Nn0pLCAoe1wiaWRcIjpcIjE0XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCI2XCIsIFwid2VpZ2h0XCI6MC4wNzY5MjczMjUyODkyMjE5OH0pLCAoe1wiaWRcIjpcIjE1XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCI2XCIsIFwid2VpZ2h0XCI6MC40OTQ0MjMyNDcyMjAzODY0NH0pXX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIkNoYXQgYm90XCIsIFwiaW5wdXRzXCI6Wyh7XCJiaWFzXCI6MC44NjEwMTg0NzQ2NzEwNTQxLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMVwiLCBcImluZGV4XCI6MCwgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wiYmlhc1wiOi0wLjg2OTk0NTI5MDkxOTczOTgsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIyXCIsIFwiaW5kZXhcIjoxLCBcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJiaWFzXCI6LTAuNDU2NDgzNTQ1MjAzNjc2NCwgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjNcIiwgXCJpbmRleFwiOjIsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcImJpYXNcIjowLjE0NjEzNTY3NzczOTM1NzY1LCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiNFwiLCBcImluZGV4XCI6MywgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wiYmlhc1wiOjAuOTQ5NTgzOTMyNzM1MTEzNywgXCJkZXB0aFwiOjAsIFwiaWRcIjpcIjVcIiwgXCJpbmRleFwiOjQsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KV0sIFwiaGlkZGVuTGF5ZXJzXCI6W1soe1wiYmlhc1wiOjAuMzk5MTk5MjU4NjU2ODU5MjMsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCI2XCIsIFwiaW5kZXhcIjowfSksICh7XCJiaWFzXCI6LTIuNDk3Nzk3NzQ1Njk1NTExLCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiN1wiLCBcImluZGV4XCI6MX0pLCAoe1wiYmlhc1wiOjEuNTY3NzQ3ODM1NjYxMjY2NCwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjhcIiwgXCJpbmRleFwiOjJ9KSwgKHtcImJpYXNcIjotMS44Mjk4NDIzNDk4MTAwOTIsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCI5XCIsIFwiaW5kZXhcIjozfSksICh7XCJiaWFzXCI6LTAuNjI5MjgxMzA1NzAxNDExMywgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjEwXCIsIFwiaW5kZXhcIjo0fSksICh7XCJiaWFzXCI6MS40NjU1MjIxNjk1NDY3NjksIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIxMVwiLCBcImluZGV4XCI6NX0pXV0sIFwib3V0cHV0c1wiOlsoe1wiYmlhc1wiOi0xLjM1NTM0MjMwMjk0MjQ0OCwgXCJkZXB0aFwiOjIsIFwiaWRcIjpcIjEyXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcInBocmFzZVwifSksICh7XCJiaWFzXCI6MC4yODY4OTE1NDkzNzY1OTY3LCBcImRlcHRoXCI6MiwgXCJpZFwiOlwiMTNcIiwgXCJpbmRleFwiOjEsIFwibm9ybWFsaXplclJlZlwiOlwicGhyYXNlXCJ9KSwgKHtcImJpYXNcIjowLjY5MDEzOTMwOTU0OTE1NjcsIFwiZGVwdGhcIjoyLCBcImlkXCI6XCIxNFwiLCBcImluZGV4XCI6MiwgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wiYmlhc1wiOi0zLjM2NzI4MTYxMzE1OTQ4MzQsIFwiZGVwdGhcIjoyLCBcImlkXCI6XCIxNVwiLCBcImluZGV4XCI6MywgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pLCAoe1wiYmlhc1wiOi0yLjYyMzM0NzY2NjkzMTYwNzYsIFwiZGVwdGhcIjoyLCBcImlkXCI6XCIxNlwiLCBcImluZGV4XCI6NCwgXCJub3JtYWxpemVyUmVmXCI6XCJwaHJhc2VcIn0pXSwgXCJzdHJhdGVneVwiOih7XCJpZFwiOlwibG9naXN0aWNcIiwgXCJvcHRpb25zXCI6KHtcIm1pbldlaWdodFwiOi0xMDAwLCBcIm1heFdlaWdodFwiOjEwMDB9KX0pLCBcImNvbm5lY3Rpb25zXCI6Wyh7XCJpZFwiOlwiMTdcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjZcIiwgXCJ3ZWlnaHRcIjoxLjIwMjc3NzUyODk0MTUxMDR9KSwgKHtcImlkXCI6XCIxOFwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiN1wiLCBcIndlaWdodFwiOjUuMjI1ODk1NjQ3ODA5MjM4fSksICh7XCJpZFwiOlwiMTlcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjotMC4zOTYyODAyNjAyNTM3NTIyNH0pLCAoe1wiaWRcIjpcIjIwXCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6NC44NzcxNzgzNjEyNDk4ODd9KSwgKHtcImlkXCI6XCIyMVwiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjowLjM0MDQ2NDUyOTIxNzYxOX0pLCAoe1wiaWRcIjpcIjIyXCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjAuNDk3NzQzMzY4MDM0MTY4NzR9KSwgKHtcImlkXCI6XCIyM1wiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOjIuMDg0MjIwNTI4NTM4ODc4fSksICh7XCJpZFwiOlwiMjRcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjdcIiwgXCJ3ZWlnaHRcIjoxLjc0NzE2MzYzMTU1NDU2NjJ9KSwgKHtcImlkXCI6XCIyNVwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiOFwiLCBcIndlaWdodFwiOjAuNjQwNzA1ODQ2MTk5ODAzOX0pLCAoe1wiaWRcIjpcIjI2XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6LTMuMTQyOTUzNjE0NzI3NTY2NX0pLCAoe1wiaWRcIjpcIjI3XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOjAuMjE3NTA1MTEwNjk5NTM1MDd9KSwgKHtcImlkXCI6XCIyOFwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjowLjg1ODA1MDU0NzYwODgyOX0pLCAoe1wiaWRcIjpcIjI5XCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCI2XCIsIFwid2VpZ2h0XCI6MS4zMTY2NzUyOTA5ODA1NzE3fSksICh7XCJpZFwiOlwiMzBcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjdcIiwgXCJ3ZWlnaHRcIjotMy43NjgxNzEzNDUxODQ3Mjk0fSksICh7XCJpZFwiOlwiMzFcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjU1MzE2MjQwNzk2OTI1Mn0pLCAoe1wiaWRcIjpcIjMyXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6LTEuNzY2MDIxMzA3MjY5NjY4Mn0pLCAoe1wiaWRcIjpcIjMzXCIsIFwic291cmNlUmVmXCI6XCIzXCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOi0yLjE0Njg5MTczNTMxMjY5MTd9KSwgKHtcImlkXCI6XCIzNFwiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjowLjgzMjI3ODA4MzM5MDIzMjl9KSwgKHtcImlkXCI6XCIzNVwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOi0xLjUyNzQyMzE0NTI5MTExOX0pLCAoe1wiaWRcIjpcIjM2XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCI3XCIsIFwid2VpZ2h0XCI6LTAuNTUzODE1ODU1NDA1MTYxNH0pLCAoe1wiaWRcIjpcIjM3XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC45NDQxMDIyMjU2Nzc0MDc0fSksICh7XCJpZFwiOlwiMzhcIiwgXCJzb3VyY2VSZWZcIjpcIjRcIiwgXCJ0YXJnZXRSZWZcIjpcIjlcIiwgXCJ3ZWlnaHRcIjowLjE2ODM3MDc0NDU2ODU1NzV9KSwgKHtcImlkXCI6XCIzOVwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjowLjYxNTk0MzQyMjQ4NDA4MzF9KSwgKHtcImlkXCI6XCI0MFwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjowLjgzNzM1MTUxMDUzNDcyMDV9KSwgKHtcImlkXCI6XCI0MVwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiNlwiLCBcIndlaWdodFwiOi0xLjQ4OTA2NDYxNjAwOTAxN30pLCAoe1wiaWRcIjpcIjQyXCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCI3XCIsIFwid2VpZ2h0XCI6LTAuMjQwNjU2OTk5ODY0NjIyOX0pLCAoe1wiaWRcIjpcIjQzXCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC4zMzE0Njk5NjkwODIyNDY4NX0pLCAoe1wiaWRcIjpcIjQ0XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6My4xNDk5Njg4MzM3NTkxMzM2fSksICh7XCJpZFwiOlwiNDVcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6Mi4wMTY1NDgwNzE4NjczODM0fSksICh7XCJpZFwiOlwiNDZcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6MC44MjAwODczNjcwNTM4Njk2fSksICh7XCJpZFwiOlwiNDdcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6MC42ODUzNDEzNjE3Mjc2Mjc1fSksICh7XCJpZFwiOlwiNDhcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6My4wMTA4NTI2ODc3NjAxMjY1fSksICh7XCJpZFwiOlwiNDlcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MS4xODc0MTAzNTQ3NzgyNzc1fSksICh7XCJpZFwiOlwiNTBcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6LTAuODk1MjgxNTYwMDQwMzY3Nn0pLCAoe1wiaWRcIjpcIjUxXCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0xLjI4MjA5NTE0ODY0NzQ0NTJ9KSwgKHtcImlkXCI6XCI1MlwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjotMy4zMjU1Mzg2OTY4Mjc0NTI1fSksICh7XCJpZFwiOlwiNTNcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6My42NDM2OTEyNDE4Njk4NTN9KSwgKHtcImlkXCI6XCI1NFwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjoxLjczMTM4NTE4NTU4MTQ5NzV9KSwgKHtcImlkXCI6XCI1NVwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjo0LjQ5NTk1NTMxNDU3MzIxM30pLCAoe1wiaWRcIjpcIjU2XCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0wLjYzNjc4NzM3ODcyNTUyNzV9KSwgKHtcImlkXCI6XCI1N1wiLCBcInNvdXJjZVJlZlwiOlwiOFwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjotMC4zNDQ2Mzk5NjIzMjk2NzQwM30pLCAoe1wiaWRcIjpcIjU4XCIsIFwic291cmNlUmVmXCI6XCI4XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOi0wLjU0NjI0ODgxOTQ4MjY2MjZ9KSwgKHtcImlkXCI6XCI1OVwiLCBcInNvdXJjZVJlZlwiOlwiOFwiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjowLjU5MTgwOTU1NDM2Nzc5MTd9KSwgKHtcImlkXCI6XCI2MFwiLCBcInNvdXJjZVJlZlwiOlwiOFwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjotMS44MTEwMjI0NTEyNTM4NDY2fSksICh7XCJpZFwiOlwiNjFcIiwgXCJzb3VyY2VSZWZcIjpcIjhcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6LTEuNjMxMjA2MjAwMTk2ODcxN30pLCAoe1wiaWRcIjpcIjYyXCIsIFwic291cmNlUmVmXCI6XCI5XCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjEuNzIxMzM2ODkyMjg4MjEwOX0pLCAoe1wiaWRcIjpcIjYzXCIsIFwic291cmNlUmVmXCI6XCI5XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOi0wLjQxOTA2MDI1ODQ4MTAxOTN9KSwgKHtcImlkXCI6XCI2NFwiLCBcInNvdXJjZVJlZlwiOlwiOVwiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjotMy45MTE4OTI5ODk4MzkyNTJ9KSwgKHtcImlkXCI6XCI2NVwiLCBcInNvdXJjZVJlZlwiOlwiOVwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjo2Ljk4NTAwNjQzMDgyNzMzNX0pLCAoe1wiaWRcIjpcIjY2XCIsIFwic291cmNlUmVmXCI6XCI5XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0xLjE3MTg4Mjc0NjYxODYyOX0pLCAoe1wiaWRcIjpcIjY3XCIsIFwic291cmNlUmVmXCI6XCIxMFwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjowLjYzNDU1NDMyOTQ0ODYwOTl9KSwgKHtcImlkXCI6XCI2OFwiLCBcInNvdXJjZVJlZlwiOlwiMTBcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6LTMuMzEwOTYzNzc3MDg3Mjk1NX0pLCAoe1wiaWRcIjpcIjY5XCIsIFwic291cmNlUmVmXCI6XCIxMFwiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjowLjMxNDI3OTk4OTQwMjA3MjQ3fSksICh7XCJpZFwiOlwiNzBcIiwgXCJzb3VyY2VSZWZcIjpcIjEwXCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOjEuMjA4OTU2NDU3MjU0NzI1M30pLCAoe1wiaWRcIjpcIjcxXCIsIFwic291cmNlUmVmXCI6XCIxMFwiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjotMS4xNzIzNTE4OTk1NjA4NzczfSksICh7XCJpZFwiOlwiNzJcIiwgXCJzb3VyY2VSZWZcIjpcIjExXCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOi0wLjQ3OTM4MzQxNjQ0Mzk2NjI2fSksICh7XCJpZFwiOlwiNzNcIiwgXCJzb3VyY2VSZWZcIjpcIjExXCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOi0wLjI1OTQ4ODY2ODc0MTc4MDd9KSwgKHtcImlkXCI6XCI3NFwiLCBcInNvdXJjZVJlZlwiOlwiMTFcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC4yMzYxNzgzNjg3ODg0MTMzfSksICh7XCJpZFwiOlwiNzVcIiwgXCJzb3VyY2VSZWZcIjpcIjExXCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOi0xLjM2NzEwMDExMzYyNzR9KSwgKHtcImlkXCI6XCI3NlwiLCBcInNvdXJjZVJlZlwiOlwiMTFcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6LTIuMDYzODI0NDAyOTM0MTkzNH0pXSwgXCJ0cmFpbmluZ1wiOih7XCJleHBlY3RlZE1heEl0ZXJhdGlvbnNcIjoyMDAwLCBcImxlYXJuaW5nUmF0ZVwiOjAuMiwgXCJ1c2VjYXNlc1wiOlsoe1wiaW5wdXRzXCI6W1wiaG93XCIsIFwiYXJlXCIsIFwieW91XCIsIFwiP1wiLCBcIiBcIl0sIFwib3V0cHV0c1wiOltcImZpbmVcIiwgXCJ0aGFua1wiLCBcInlvdVwiLCBcIiBcIiwgXCIgXCJdfSksICh7XCJpbnB1dHNcIjpbXCJ3aGF0XCIsIFwiaXNcIiwgXCJ5b3VyXCIsIFwibmFtZVwiLCBcIj9cIl0sIFwib3V0cHV0c1wiOltcIm15XCIsIFwibmFtZVwiLCBcImlzXCIsIFwicm9iZXJ0XCIsIFwiIFwiXX0pLCAoe1wiaW5wdXRzXCI6W1wiaG93XCIsIFwib2xkXCIsIFwiYXJlXCIsIFwieW91XCIsIFwiP1wiXSwgXCJvdXRwdXRzXCI6W1wiaVwiLCBcImRvXCIsIFwibm90XCIsIFwia25vd1wiLCBcIiBcIl19KSwgKHtcImlucHV0c1wiOltcImRvXCIsIFwieW91XCIsIFwibG92ZVwiLCBcIm1lXCIsIFwiP1wiXSwgXCJvdXRwdXRzXCI6W1wiaVwiLCBcImxvdmVcIiwgXCJ5b3VcIiwgXCIgXCIsIFwiIFwiXX0pLCAoe1wiaW5wdXRzXCI6W1wid2lsbFwiLCBcInlvdVwiLCBcIm1hcnJ5XCIsIFwibWVcIiwgXCI/XCJdLCBcIm91dHB1dHNcIjpbXCJhcmVcIiwgXCJ5b3VcIiwgXCJzaW5nbGVcIiwgXCI/XCIsIFwiIFwiXX0pXX0pfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiY29uc3QgZG9jID0gWyh7XCJpZFwiOlwiTEVEIG9wZXJhdGlvblwiLCBcImlucHV0c1wiOlsoe1wiYmlhc1wiOi0wLjc0MzIxMzc2ODc0MDkwMDIsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIxXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pLCAoe1wiYmlhc1wiOi0wLjMzOTAwOTE0MzA4ODIyMzgzLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiMlwiLCBcImluZGV4XCI6MSwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjotMC4wMDE5NzAxMTkwMjIwNTQwMTc3LCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiM1wiLCBcImluZGV4XCI6MiwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjotMC43MzM0NDY2MzU5OTU2Mzk1LCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiNFwiLCBcImluZGV4XCI6MywgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjotMC4zNzg4MjQwMTQzOTkwNzAyLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiNVwiLCBcImluZGV4XCI6NCwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjotMC41NTY5OTg4MDE1MTg0MDgyLCBcImRlcHRoXCI6MCwgXCJpZFwiOlwiNlwiLCBcImluZGV4XCI6NSwgXCJub3JtYWxpemVyUmVmXCI6XCJib29sZWFuXCJ9KSwgKHtcImJpYXNcIjowLjc4MjIxNjIwMTE5Mjg1ODQsIFwiZGVwdGhcIjowLCBcImlkXCI6XCI3XCIsIFwiaW5kZXhcIjo2LCBcIm5vcm1hbGl6ZXJSZWZcIjpcImJvb2xlYW5cIn0pXSwgXCJoaWRkZW5MYXllcnNcIjpbWyh7XCJiaWFzXCI6MC4xOTQ4ODA2Njk1NzMwNzIxMiwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjhcIiwgXCJpbmRleFwiOjB9KSwgKHtcImJpYXNcIjotMC45MzE5MTYzMzg4NjI4NjQsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCI5XCIsIFwiaW5kZXhcIjoxfSksICh7XCJiaWFzXCI6LTIuMTAxMDE4MjczMzAyMTE2OCwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjEwXCIsIFwiaW5kZXhcIjoyfSksICh7XCJiaWFzXCI6LTIuNjY3MjI0Njk0NjIzNTY3LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiMTFcIiwgXCJpbmRleFwiOjN9KSwgKHtcImJpYXNcIjotMC40NTM0ODAyNDQ3ODg0NDQ5LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiMTJcIiwgXCJpbmRleFwiOjR9KSwgKHtcImJpYXNcIjoxLjM2NDUwNDAwODY3NzYxMywgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjEzXCIsIFwiaW5kZXhcIjo1fSksICh7XCJiaWFzXCI6MC4wNjQ3NDg0NzQyMTc5ODkzNiwgXCJkZXB0aFwiOjEsIFwiaWRcIjpcIjE0XCIsIFwiaW5kZXhcIjo2fSksICh7XCJiaWFzXCI6MS4xMTgzNTI5ODI5MzU1MjY1LCBcImRlcHRoXCI6MSwgXCJpZFwiOlwiMTVcIiwgXCJpbmRleFwiOjd9KV1dLCBcIm91dHB1dHNcIjpbKHtcImJpYXNcIjotMi4zNjgwMDQ1NzAyODY4ODQ0LCBcImRlcHRoXCI6MiwgXCJpZFwiOlwiMTZcIiwgXCJpbmRleFwiOjAsIFwibm9ybWFsaXplclJlZlwiOlwiaW50ZWdlclwiLCBcIm5vcm1hbGl6ZXJPcHRpb25zXCI6KHtcIm1pblwiOjAsIFwibWF4XCI6OX0pfSldLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJsb2dpc3RpY1wiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwiY29ubmVjdGlvbnNcIjpbKHtcImlkXCI6XCIxN1wiLCBcInNvdXJjZVJlZlwiOlwiMVwiLCBcInRhcmdldFJlZlwiOlwiOFwiLCBcIndlaWdodFwiOjAuNjM3ODcxMjc1MzA1MDM4Nn0pLCAoe1wiaWRcIjpcIjE4XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6MC43NTYwMzYwMjg2NTM0NzMyfSksICh7XCJpZFwiOlwiMTlcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6My45MzkzNzAxMjc1NDc3MzM1fSksICh7XCJpZFwiOlwiMjBcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6MC45ODA4Mzg3MzczNjY5MDkxfSksICh7XCJpZFwiOlwiMjFcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6MC42MzI3ODY5MTA2MDIxMjc2fSksICh7XCJpZFwiOlwiMjJcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6MC4xNzM3ODA3MDIxNDI0MjM4fSksICh7XCJpZFwiOlwiMjNcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC4yMjcxNzUwOTkwNzc1MTA1fSksICh7XCJpZFwiOlwiMjRcIiwgXCJzb3VyY2VSZWZcIjpcIjFcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6MC4yNjU0MzY1MTMxOTUwNTY5fSksICh7XCJpZFwiOlwiMjVcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjM1ODU0MDA2MTk3OTI3NzN9KSwgKHtcImlkXCI6XCIyNlwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjAuMjUxNjcyNjY0ODg2OTgxMDN9KSwgKHtcImlkXCI6XCIyN1wiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjotMC40NTcwODQ5NDM1Mjg4MzU0fSksICh7XCJpZFwiOlwiMjhcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6Mi4yMTMxNTA5NDE0ODc4ODU2fSksICh7XCJpZFwiOlwiMjlcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6MC4yNjc1NjIzNzI5MzUxMTc5fSksICh7XCJpZFwiOlwiMzBcIiwgXCJzb3VyY2VSZWZcIjpcIjJcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6MC41NjAyMzc3NDAxOTIxODl9KSwgKHtcImlkXCI6XCIzMVwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiMTRcIiwgXCJ3ZWlnaHRcIjowLjYxODg2Njc1MTkwNDE2NzJ9KSwgKHtcImlkXCI6XCIzMlwiLCBcInNvdXJjZVJlZlwiOlwiMlwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjowLjI1MjY5NDk5Mjg4MjIwMDA0fSksICh7XCJpZFwiOlwiMzNcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjg4MTE5NDE4MDg0MjQ3NzZ9KSwgKHtcImlkXCI6XCIzNFwiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjAuMjAyMTExMzM3OTM2ODQzMzN9KSwgKHtcImlkXCI6XCIzNVwiLCBcInNvdXJjZVJlZlwiOlwiM1wiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjotMC41MTY1MDM4MjYxNzk0MzY0fSksICh7XCJpZFwiOlwiMzZcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6MC42NzQxNzYyMDY0NTEyOTM0fSksICh7XCJpZFwiOlwiMzdcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjEyXCIsIFwid2VpZ2h0XCI6MC42MzUzOTk0OTg0Mjc1NzQ3fSksICh7XCJpZFwiOlwiMzhcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6MC42OTA0NzAwNzE1NDQ2NDI3fSksICh7XCJpZFwiOlwiMzlcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC43NzQ3Mzk4NjM3ODQ5MDk3fSksICh7XCJpZFwiOlwiNDBcIiwgXCJzb3VyY2VSZWZcIjpcIjNcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6MC40ODgzMjQ4MTE4MzQzNTUxfSksICh7XCJpZFwiOlwiNDFcIiwgXCJzb3VyY2VSZWZcIjpcIjRcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjcwMTMzODE4MjU1MTMzODJ9KSwgKHtcImlkXCI6XCI0MlwiLCBcInNvdXJjZVJlZlwiOlwiNFwiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjAuMzU4NjM0NzU2Njk3MDA2Mn0pLCAoe1wiaWRcIjpcIjQzXCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCIxMFwiLCBcIndlaWdodFwiOjAuMzkzMTMxODgzNTQxNzE5Nn0pLCAoe1wiaWRcIjpcIjQ0XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOi01LjIwOTg2Nzg2OTYxNDcwOH0pLCAoe1wiaWRcIjpcIjQ1XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjAuMTYxNzMxODA3NTk3NzM1OX0pLCAoe1wiaWRcIjpcIjQ2XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuODk0NTAyNzA5ODY4NjkwNX0pLCAoe1wiaWRcIjpcIjQ3XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjEuMTM2NTE0NDc3MzM0MjQ4Nn0pLCAoe1wiaWRcIjpcIjQ4XCIsIFwic291cmNlUmVmXCI6XCI0XCIsIFwidGFyZ2V0UmVmXCI6XCIxNVwiLCBcIndlaWdodFwiOjAuOTc0OTU1MzAyMzgzODAxNn0pLCAoe1wiaWRcIjpcIjQ5XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCI4XCIsIFwid2VpZ2h0XCI6MC40MzMwNjE2OTY4OTY2NTIyNX0pLCAoe1wiaWRcIjpcIjUwXCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6LTAuMDA5NTMzMTc1NTYzMjU0Mzg3fSksICh7XCJpZFwiOlwiNTFcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6LTAuMzM1Njk0Mjg1MDQzNTA2N30pLCAoe1wiaWRcIjpcIjUyXCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCIxMVwiLCBcIndlaWdodFwiOjAuMTk5MDkxOTQwOTYyNzAxMTZ9KSwgKHtcImlkXCI6XCI1M1wiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjotMC4xODEwNTEwMzA0MjMxOTE2fSksICh7XCJpZFwiOlwiNTRcIiwgXCJzb3VyY2VSZWZcIjpcIjVcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6MC4xMDQ4ODgwMDY1MjUzNDM5MX0pLCAoe1wiaWRcIjpcIjU1XCIsIFwic291cmNlUmVmXCI6XCI1XCIsIFwidGFyZ2V0UmVmXCI6XCIxNFwiLCBcIndlaWdodFwiOjAuMDY0NzI5NzgxODQ4NTQ5MzN9KSwgKHtcImlkXCI6XCI1NlwiLCBcInNvdXJjZVJlZlwiOlwiNVwiLCBcInRhcmdldFJlZlwiOlwiMTVcIiwgXCJ3ZWlnaHRcIjowLjU5Mzk2MDA5OTY3MzY2ODZ9KSwgKHtcImlkXCI6XCI1N1wiLCBcInNvdXJjZVJlZlwiOlwiNlwiLCBcInRhcmdldFJlZlwiOlwiOFwiLCBcIndlaWdodFwiOjAuNjI0ODExNzQ1MzkwMDc1N30pLCAoe1wiaWRcIjpcIjU4XCIsIFwic291cmNlUmVmXCI6XCI2XCIsIFwidGFyZ2V0UmVmXCI6XCI5XCIsIFwid2VpZ2h0XCI6MC40ODA2OTc0MjQ4NjE5NDc1fSksICh7XCJpZFwiOlwiNTlcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjEwXCIsIFwid2VpZ2h0XCI6LTEuNTkzNjE1NjE5NTYyMDgzfSksICh7XCJpZFwiOlwiNjBcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjExXCIsIFwid2VpZ2h0XCI6My4wNDUzNDMxNjg3NzU5ODJ9KSwgKHtcImlkXCI6XCI2MVwiLCBcInNvdXJjZVJlZlwiOlwiNlwiLCBcInRhcmdldFJlZlwiOlwiMTJcIiwgXCJ3ZWlnaHRcIjowLjAyNDQ5MjE0NDI3OTg4MzgyfSksICh7XCJpZFwiOlwiNjJcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjEzXCIsIFwid2VpZ2h0XCI6MC42MDI5Mjg3MzU2NDEyNzcxfSksICh7XCJpZFwiOlwiNjNcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MC44MTI2OTI2ODY5MzUyMzU2fSksICh7XCJpZFwiOlwiNjRcIiwgXCJzb3VyY2VSZWZcIjpcIjZcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6MC45MjU4NjE0ODY5NDg5NzEzfSksICh7XCJpZFwiOlwiNjVcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjhcIiwgXCJ3ZWlnaHRcIjowLjgwNjYxNTEyNzcwNDEyMzd9KSwgKHtcImlkXCI6XCI2NlwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiOVwiLCBcIndlaWdodFwiOjAuNDgxMTk2OTAxNTE2NjAwNDR9KSwgKHtcImlkXCI6XCI2N1wiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTBcIiwgXCJ3ZWlnaHRcIjoyLjcwMDc0NDkyMDIwODAyMzR9KSwgKHtcImlkXCI6XCI2OFwiLCBcInNvdXJjZVJlZlwiOlwiN1wiLCBcInRhcmdldFJlZlwiOlwiMTFcIiwgXCJ3ZWlnaHRcIjoyLjk4NzI4ODI5ODE4NzgxOH0pLCAoe1wiaWRcIjpcIjY5XCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCIxMlwiLCBcIndlaWdodFwiOjAuNjU2MjY3ODA4MDMxODkzN30pLCAoe1wiaWRcIjpcIjcwXCIsIFwic291cmNlUmVmXCI6XCI3XCIsIFwidGFyZ2V0UmVmXCI6XCIxM1wiLCBcIndlaWdodFwiOjAuNTU2NDc1MTI0NjQ0OTM4fSksICh7XCJpZFwiOlwiNzFcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjE0XCIsIFwid2VpZ2h0XCI6MS4yMjE5ODQ2MjgyNTAxMzk2fSksICh7XCJpZFwiOlwiNzJcIiwgXCJzb3VyY2VSZWZcIjpcIjdcIiwgXCJ0YXJnZXRSZWZcIjpcIjE1XCIsIFwid2VpZ2h0XCI6MC45MTcyOTQ0NjA4NTMzODk1fSksICh7XCJpZFwiOlwiNzNcIiwgXCJzb3VyY2VSZWZcIjpcIjhcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6LTAuNzYwMzAyMjA2OTU3MjUyfSksICh7XCJpZFwiOlwiNzRcIiwgXCJzb3VyY2VSZWZcIjpcIjlcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6MC42NTQ1NTI3NzAwNDExMzY3fSksICh7XCJpZFwiOlwiNzVcIiwgXCJzb3VyY2VSZWZcIjpcIjEwXCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOjQuNDc4MTU4MDMyMzMxODY4fSksICh7XCJpZFwiOlwiNzZcIiwgXCJzb3VyY2VSZWZcIjpcIjExXCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOjUuOTg2NzIwMTYxMTgzNzc2fSksICh7XCJpZFwiOlwiNzdcIiwgXCJzb3VyY2VSZWZcIjpcIjEyXCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOjAuNDIyMTU4MDY2ODgwNzI3N30pLCAoe1wiaWRcIjpcIjc4XCIsIFwic291cmNlUmVmXCI6XCIxM1wiLCBcInRhcmdldFJlZlwiOlwiMTZcIiwgXCJ3ZWlnaHRcIjotMS41NjI1Nzc5NjE3NDYwODU1fSksICh7XCJpZFwiOlwiNzlcIiwgXCJzb3VyY2VSZWZcIjpcIjE0XCIsIFwidGFyZ2V0UmVmXCI6XCIxNlwiLCBcIndlaWdodFwiOi0xLjE3MDM2NjUyODk2Mjc0OTh9KSwgKHtcImlkXCI6XCI4MFwiLCBcInNvdXJjZVJlZlwiOlwiMTVcIiwgXCJ0YXJnZXRSZWZcIjpcIjE2XCIsIFwid2VpZ2h0XCI6LTEuNjM4NjQ4NjI3MjYzMzY3NH0pXX0pXTtcbm1vZHVsZS5leHBvcnRzID0gZG9jLmxlbmd0aCA8PSAxID8gZG9jWzBdIDogZG9jOyIsImNvbnN0IGRvYyA9IFsoe1wiaWRcIjpcIlNVQiBvcGVyYXRpb25cIiwgXCJpbnB1dHNcIjpbKHtcImJpYXNcIjowLjQxMjUzMTU4NjA5ODU5MDEsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIxXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwMH0pfSksICh7XCJiaWFzXCI6LTAuMDg3ODYxMDgwODQ5NDY5NTMsIFwiZGVwdGhcIjowLCBcImlkXCI6XCIyXCIsIFwiaW5kZXhcIjoxLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjowLCBcIm1heFwiOjEwMH0pfSldLCBcImhpZGRlbkxheWVyc1wiOltdLCBcIm91dHB1dHNcIjpbKHtcImJpYXNcIjowLjUwMTkwNzkzOTk5OTQ3NjcsIFwiZGVwdGhcIjoxLCBcImlkXCI6XCIzXCIsIFwiaW5kZXhcIjowLCBcIm5vcm1hbGl6ZXJSZWZcIjpcImludGVnZXJcIiwgXCJub3JtYWxpemVyT3B0aW9uc1wiOih7XCJtaW5cIjotMTAwLCBcIm1heFwiOjEwMH0pfSldLCBcInN0cmF0ZWd5XCI6KHtcImlkXCI6XCJpZGVudGl0eVwiLCBcIm9wdGlvbnNcIjooe1wibWluV2VpZ2h0XCI6LTEwMDAsIFwibWF4V2VpZ2h0XCI6MTAwMH0pfSksIFwiY29ubmVjdGlvbnNcIjpbKHtcImlkXCI6XCI0XCIsIFwic291cmNlUmVmXCI6XCIxXCIsIFwidGFyZ2V0UmVmXCI6XCIzXCIsIFwid2VpZ2h0XCI6MC40OTU3NTQyMTE0NTkyODl9KSwgKHtcImlkXCI6XCI1XCIsIFwic291cmNlUmVmXCI6XCIyXCIsIFwidGFyZ2V0UmVmXCI6XCIzXCIsIFwid2VpZ2h0XCI6LTAuNTAwMDcyMTQzNDUwMzg1fSldfSldO1xubW9kdWxlLmV4cG9ydHMgPSBkb2MubGVuZ3RoIDw9IDEgPyBkb2NbMF0gOiBkb2M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvd29ya2VyLmpzXCIpO1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG59O1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rcyBhbmQgc2libGluZyBjaHVua3MgZm9yIHRoZSBlbnRyeXBvaW50XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19qcy15YW1sX2Rpc3RfanMteWFtbF9tanMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanNcIikudGhlbihuZXh0KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic3JjX3dvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBjaHVua0xvYWRpbmdDYWxsYmFjayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGltcG9ydFNjcmlwdHMoXCJcIiArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdH1cbn07XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYW5uXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2FublwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gY2h1bmtMb2FkaW5nQ2FsbGJhY2s7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIvLyBydW4gc3RhcnR1cFxuX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9