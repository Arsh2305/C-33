class Snow{
    constructor(x,y){
        var options={
            'weight':5.0
        }
     this.body=Bodies.rectangle(x,y,width,height,options)
     this.height=height
     this.width=width
    this.image=loadImage(snow4.webp)
    }
    display(){
    image(this.image, 0, 0, this.width, this.height);
    }
}