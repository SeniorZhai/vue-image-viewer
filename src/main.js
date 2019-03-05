import imageViewer from "./components/image-viewer";
const install = vue => {
    if (install.installed) return;
    vue.component("imageViewer", imageViewer);
    vue.prototype.$imageViewer = imageViewer;
};

if (window && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
