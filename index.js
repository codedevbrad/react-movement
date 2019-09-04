"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ReactMovement = function ReactMovement(props) {
  var className = props["class"];
  var oldx = 0,
      oldy = 0,
      coordinates = [];

  var translateImage = function translateImage(e) {
    e.pageX < oldx ? coordinates[0] = 3 : coordinates[0] = -3;
    e.pageY < oldy ? coordinates[1] = 3 : coordinates[1] = -3;
    oldx = e.pageX;
    oldy = e.pageY;
    var xTranslate = coordinates[0] + 'px';
    var yTranslate = coordinates[1] + 'px';
    e.target.style.transform = "translate(" + xTranslate + "," + yTranslate + ")";
  };

  return _react["default"].createElement("div", {
    className: className,
    onMouseMove: function onMouseMove(e) {
      return translateImage(e);
    }
  }, props.children);
};

var _default = ReactMovement;
exports["default"] = _default;
