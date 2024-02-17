import Controller from "../abstract/Controller";

class HomePageController extends Controller {
    static get COMPONENTS(){
        return [
            "HomePageComponent"
        ]
    }
}

export default HomePageController;