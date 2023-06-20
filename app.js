let multiplos=[5,10,15,20,25,30];
class Pokemon{
    constructor (nombre, nivel, energia, ataque){
    this.nombre=nombre;
    this.nivel=nivel;
    this.energia=energia;
    this.ataque=ataque
    }

    entrenar(){
        if(this.energia<=1){
            console.log("No podes entrenar a tu pokemon porque tiene la energia baja");
        }
        else{
            if(multiplos.length!=0 && this.nivel<=30){
                this.nivel+=1;
                this.energia-=1;
                console.log(`! ${this.nombre} ha subido a nivel ${this.nivel}!`);
                if(this.nivel == multiplos[0]){
                    this.ataque+=3;
                    multiplos.shift();
                }
                else{
                    this.ataque+=1;
                }
            }
            else{
                alert("Se ha alcanzado el nivel de mejoras maximo");
            }

        }
    }

    alimentar(){
        if(this.energia<10){
            this.energia+=1;
        }
        else{
            console.log("Energia al maximo");
        }
    }
    
    atacar(objetivo){
        objetivo.restarEnergia(this.ataque);

    }

    restarEnergia(cantidad){
        if(this.energia>0 && cantidad<this.energia){
            this.energia= this.energia - cantidad;
            console.log(`La energia de ${this.nombre} es de ${this.energia}`);
        }
        else{
            console.log(`${this.nombre} fue vencido`);
        }

    }
}

let charmander= new Pokemon("Charmander",1,10,1);
let bulbasour= new Pokemon("bulbasour",2,10,2);