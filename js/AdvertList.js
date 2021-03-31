class AdvertList {

constructor(obj){
    // console.log (obj.elementId, obj.initialAdverts);
    this.elementId = obj.elementId;
    this.initialAdverts = obj.initialAdverts;
}

initAdvert(){
    // console.log("initAdvert")
    for (let key in this.initialAdverts)
    {
        // console.log (key, this.initialAdverts[key])
        this.listAdverts(this.initialAdverts[key])
    }
}

listAdverts(params){
    console.log (params);
    let advertHTML = new Advert(params);
    // console.log(advert);
    // let template = advert.getTemplate();
    this.elementId.appendChild(advertHTML);
}


}

