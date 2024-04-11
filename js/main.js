const canvas=document.getElementById("canvas");
let ctx = canvas.getContext('2d');

//optiene las dimenciones de la pantalla actual
const window_height=window.innerHeight;
const window_width=window.innerWidth;

//el canvas tiene las mismas dimenciones que la pantalla
canvas.height=window_height;
canvas.width=window_width;

canvas.style.backgroundColor='#ff8';

class Circle {
    constructor(x, y, radius, color, text){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }
    draw(context){
        context.beginPath();
        
        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline="middle";
        context.font = '20px Arial';
        context.fillText(this.text, this.x, this.y);
       
        context.lineWidth=2;
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        context.stroke();
        context.closePath();
    }
}

let arrayCircle = [];

for  (let i=0; i<10; i++){

    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let randomRadius = Math.floor(Math.random() * 100 + 20);

    let miCirculo = new Circle(randomX, randomY, randomRadius, 'red', i+1);

    //agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);
}

/* let miCirculo = new Circle(100,100,50,'red', 'tec');
miCirculo.draw(ctx);

let miCirculo2 = new Circle(270,270,50,'green', 'pachuca');
miCirculo2.draw(ctx); */