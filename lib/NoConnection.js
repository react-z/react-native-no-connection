"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoConnection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _native = _interopRequireDefault(require("styled-components/native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20;\n  text-align: center;\n  margin: 10px;\n  margin-top: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  margin-top: -60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NoConnection =
/*#__PURE__*/
function (_Component) {
  _inherits(NoConnection, _Component);

  function NoConnection(props) {
    var _this;

    _classCallCheck(this, NoConnection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoConnection).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleConnectivityChange", function (_ref) {
      var type = _ref.type;

      if (_this.state.isConnected === false && type !== 'none' && _this.props.onConnectionRestored) {
        _this.props.onConnectionRestored();
      }

      _this.setState({
        isConnected: type !== 'none'
      });
    });

    _this.state = {
      isConnected: true
    };
    return _this;
  }

  _createClass(NoConnection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _reactNative.NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _reactNative.NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isConnected) {
        return _react.default.createElement(NoConnectionWrapper, null, _react.default.createElement(NoConnectionText, null, "No wifi connection"));
      }

      return this.props.children;
    }
  }]);

  return NoConnection;
}(_react.Component);

exports.NoConnection = NoConnection;

var NoConnectionWrapper = _native.default.View(_templateObject());

var NoConnectionText = _native.default.Text(_templateObject2());