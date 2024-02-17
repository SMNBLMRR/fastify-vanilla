class Component {
    constructor(){}

    //basic Component logic here
    log(msg){
        console.log(msg)
    }
    warn(msg){
        console.warn(msg)
    }
    err(msg){
        console.error(msg)
    }

    init(){
        console.log("Rendering " + this.constructor.name)
    }
}

export default Component;