import Controller from "../abstract/Controller";

class AboutPageController extends Controller {
    static get COMPONENTS(){
        return [
            "AboutPageComponent"
        ]
    }
}

export default AboutPageController;