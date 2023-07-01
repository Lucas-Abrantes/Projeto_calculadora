// classe - conjunto de métodos e atributos
// objeto - representa uma classe. Instância
// atributo - similar a uma variável, porém com mais recursos
// this - faz referência ao próprio objeto referenciado
// Encapsulamento - controla o acesso aos métodos e atributos. 
// EX: public, private, protected

// O construtor é chamado automaticamente quando há uma instância de uma classe

class CalcController{
    constructor(){
        //atributos privados
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._DateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.setDisplayTimeDate();
    }
    
    initialize(){
        
        this.setDisplayTimeDate();
        setInterval(()=>{
           this.setDisplayTimeDate();
        }, 1000)

        // innerHTML --> transforma em html, ou seja,
        // escreve no documento aquilo que atribuimos à variável
    }

    setDisplayTimeDate(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    // para acessar esses atributos é necessesário
    // get e set
    // get - para pegar 
    // set - para modificar

    //---------------------------
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    //---------------------------
    get currentDate(){
        return new Date();
    }

    set currentDate(data){
        this._currentDate = data;
    }

    //--------------------------
    get displayTime(){
        return this._timeEl
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value
    }

    //----------------------------
    get displayDate(){
        return this._DateEl.innerHTML
    }

    set displayDate(value){
        return this._DateEl.innerHTML = value
    }
    
}