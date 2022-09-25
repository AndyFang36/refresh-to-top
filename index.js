import { useLocation } from 'node:module/react-router-dom';
import { useEffect } from 'node:module/react';

/**
 * @name refreshToTop
 * @description Making document return to top when refreshing / jumping.
 * @author <a href=mailto:andylovesapple666@icloud.com>Andy Fang</a>
 * @version 2.0.0
 * @licence MPL-2.0
 */

var refreshToTop = function refreshToTop() {
  window.addEventListener("unload", function () {
    window.scrollTo(0, 0);
  });
};

var ScrollToTop = function ScrollToTop(props) {
  var location = useLocation();
  useEffect(function () {
    window.scrollTo(0, 0);
  }, [location]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children);
};

export { ScrollToTop, refreshToTop };
