class Snake {
    constructor(){
        this.body = []
        this.xdir = 0
        this.ydir = 0
        this.len = 0
        this.body[0] = createVector(floor(w/2),floor(h/2))
    }
    setdir(x,y){
        this.xdir = x
        this.ydir = y
    }

    update(){
        var head = this.body[this.body.length-1].copy();
        this.body.shift()
        head.x = head.x + this.xdir;
        head.y = head.y + this.ydir;
        this.body.push(head);
    }
    grow(){
        var head = this.body[this.body.length-1].copy();
        this.len = this.len+1;
        this.body.push(head);a
    }
    end(){
        var x = this.body[this.body.length-1].x;
        var y = this.body[this.body.length-1].y;
        if(x>w-1||x<0||y.h-1||y<0){
            return true ;
        }
        for(var i = 0;i<this.body.length-1;i=i+1){
         var part = this.body[i];
         if(part.x == x && part.y == y){
             return true ;
         }
        }
        return false ;
    }
    
    display(){
        for(var i = 0;i<this.body.length;i = i+1){
            fill("green")
            noStroke()
            rect(this.body[i].x,this.body[i].y,1,1);
        }
    }
}