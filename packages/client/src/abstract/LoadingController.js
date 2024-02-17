class LoadingController {
    constructor(){

    }

    importController(){
        const body = document.body;
        const controllerName = body.dataset.jsController + ".js";
        import(/* webpackChunkName: `controller-[request]` */ "../controller/" + controllerName).then(res => {
            let controller = new res.default;
            controller.init();
        }).catch(err => {
            console.error("Error in loading controller...",err)
        })
    }
}

export default LoadingController;