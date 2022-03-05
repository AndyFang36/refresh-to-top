/**
 * @name refreshToTop
 * @description Making document return to top when refreshing the current page.
 * @author <a href=mailto:andylovesapple666@icloud.com>Andy Fang</a>
 * @version 1.1.0
 * @licence MPL-2.0
 */
export const refreshToTop = () => {
    window.addEventListener("unload", () => {
        window.scrollTo(0, 0);
    });
}