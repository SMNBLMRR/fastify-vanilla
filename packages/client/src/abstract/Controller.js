class Controller {
  constructor() {
    this.components = {};
  }

  init() {
    try {
      let componentsList = [];
      componentsList = [...this.constructor.COMPONENTS];
      for (let c of componentsList) {
        this.instanceComponent(c);
      }
    } catch (error) {
      console.error(error);
    }
  }

  instanceComponent(componentName) {
    let selector = `[data-js-component="${componentName}"]`;
    if (document.querySelector(selector)) {
      document.querySelectorAll(selector).forEach((component) => {
        const cpName = componentName + ".js";
        import(
          /* webpackChunkName:`component-[request]` */ "../component/" + cpName
        )
          .then((res) => {
            if (!this.components[res.default.name]) {
              let component = new res.default();
              component.init();
              this.components[res.default.name] = res.default.name;
            }
          })
          .catch((err) => {
            console.error("Error in loading controller...", err);
          });
      });
    }
  }

  render() {
    console.log("Init...");
  }
}

export default Controller;
