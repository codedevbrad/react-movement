"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactMovement = function ReactMovement(_ref) {
  var children = _ref.children,
      elClass = _ref.elClass,
      distance = _ref.distance,
      wrapper = _ref.wrapper;
  if (!distance) distance = 3;
  var Tag = wrapper || 'div';
  var oldx = 0,
      oldy = 0,
      coordinates = [];

  var translateImage = function translateImage(e) {
    e.pageX < oldx ? coordinates[0] = distance : coordinates[0] = -distance;
    e.pageY < oldy ? coordinates[1] = distance : coordinates[1] = -distance;
    oldx = e.pageX;
    oldy = e.pageY;
    var xTranslate = coordinates[0] + 'px';
    var yTranslate = coordinates[1] + 'px';
    e.currentTarget.style.transform = "translate(" + xTranslate + "," + yTranslate + ")";
  };

  return /*#__PURE__*/_react["default"].createElement(Tag, {
    className: elClass,
    onMouseMove: function onMouseMove(e) {
      return translateImage(e);
    }
  }, children);
};

var _default = ReactMovement;
exports["default"] = _default;
