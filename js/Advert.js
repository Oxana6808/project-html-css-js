
class Advert {

    constructor(obj) {
        this.obj = obj;
        this.deleteEvent = this.deleteEvent.bind(this);
        this.getTemplate();
        this.div = document.createElement('div');
        this.div.insertAdjacentHTML('afterbegin', this.template);
        this.setEvent();
        console.log (this.div);
        return this.div;
    
        
    }
    
    getTemplate(){
         this.template = `
         <div class="card-list"> ${this.obj.id}
         <div class="card card-list" id="id">
            
             <div class="card-preview ">
                 <img src="./images/default.jpg" />
             </div>
            
             <div class="card-title__info">
                 <div class="card-title">
                 ${this.obj.title}
                 </div>
                 <div class="card-cost">
                 ${this.obj.cost}
                 </div>
                 <div class="card-address">
                 ${this.obj.address}
                 </div>
             </div>

             <div class="card-action">
                 <div class="button_edit">
                     <a href="#">Редактировать </a>
                 </div>
                 <div class="button_delete">
                     <button>Удалить </button>
                 </div>
             </div>

         </div>`;

         

        return this.template;
    }
   
    setEvent() {
        this.div.querySelector('.button_delete').addEventListener('click', this.deleteEvent);
    }

    deleteEvent() {
        console.log('click');
        this.div.remove();
    }
}
