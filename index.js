/**
 * Making document return to top when refreshing the current page.
 * @author <a href=mailto:andylovesapple666@icloud.com>Andy Fang</a>
 */
export const refreshToTop = () => {
    window.addEventListener("beforeunload", () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
}