/**
 * @name refreshToTop
 * @description Making document return to top when refreshing / jumping.
 * @author <a href=mailto:andylovesapple666@icloud.com>Andy Fang</a>
 * @version 2.0.0
 * @licence MPL-2.0
 */

import {useLocation} from "node:module/react-router-dom";
import {useEffect} from "node:module/react";

const refreshToTop = () => {
  window.addEventListener("unload", () => {
    window.scrollTo(0, 0);
  });
};

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export {refreshToTop, ScrollToTop};
