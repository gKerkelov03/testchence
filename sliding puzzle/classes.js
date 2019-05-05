class Square {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.value = 0;        
    }

    drawMyself(){
        ctx.lineWidth = squaresStrokeWidth;
        ctx.strokeStyle = squaresStrokeColor;
        ctx.fillStyle = squaresColors[this.value];

        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.strokeRect(this.x, this.y, this.size, this.size);   
        
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
    }

    drawMyValue(){
        if(this.value !== 0){
            let length = this.value.toString().length,
            pixels = squaresValuesSizes[length];
            
            ctx.font = pixels + "px Ariel";            
            
            switch (length) {
                case 1:
                    ctx.fillStyle = "black";                

                    ctx.fillText(this.value, this.x + this.size / 2 - pixels / 3 + 4, this.y + this.size / 2 + pixels / 3);                                
                    break;
                case 2:
                    ctx.fillStyle = "white";                             
                    ctx.strokeStyle = "black";

                    ctx.fillText(this.value, this.x + this.size / 2 - pixels / 2 - 2, this.y + this.size / 2 + pixels / 3);               
                    ctx.strokeText(this.value, this.x + this.size / 2 - pixels / 2 - 2, this.y + this.size / 2 + pixels / 3);               
                    break;
                case 3:
                    ctx.fillStyle = "white";

                    ctx.fillText(this.value, this.x + this.size / 2 - pixels + 7, this.y + this.size / 2 + pixels / 3);                
                    break;
                case 4:
                    ctx.fillStyle = this.value == 1024 ? "black" :  "red";

                    ctx.fillText(this.value, this.x + this.size / 2 - pixels, this.y + this.size / 2 + pixels / 3);                
                    break;
            }        
        }
    }
}

class Movements {
    static moveLeft(){
        allRows.forEach((row) => {
            this.slideLeft(row, true);
            this.combineLeft(row);
            this.slideLeft(row);
        });
    }

    static moveRight(){
        allRows.forEach((row) => {
            this.slideRight(row, true);
            this.combineRight(row);
            this.slideRight(row);
        });
    }

    static moveUp(){           
        allColumns.forEach((column) => {
            this.slideRight(column, true);
            this.combineRight(column);
            this.slideRight(column);
        });
       
        fetchAllRows();        
    }

    static moveDown(){        
        allColumns.forEach((column) => {
            this.slideLeft(column, true);
            this.combineLeft(column);
            this.slideLeft(column);
        });

        fetchAllRows();        
    }

    static slideLeft(array, shouldCheck){
        for(let i = 0; i < array.length; i++){
            for(let j = array.length - 1; j >= 1; j--){
                if (array[j] !== 0 && array[j - 1] === 0){
                    let temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;

                    if(shouldCheck){
                        shouldAddNumber = true;
                    }
                }
            }
        }
    }
    
    static combineLeft(array){
       for(let i = 0; i < array.length - 1; i++){
           if(array[i] !== 0 && array[i] === array[i + 1]){
               array[i] *= 2;
               array[i + 1] = 0;
               score += array[i];
               i += 1;               
           }
       }

    }

    static slideRight(array, shouldCheck){    
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if(array[j] != 0 && array[j + 1] == 0){
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;

                    if (shouldCheck){
                        shouldAddNumber = true;
                    }
                }          
            }
        }
    
    }
    
    static combineRight(array){
        for (let i = array.length - 1; i >= 1; i--) {
            if(array[i] !== 0 && array[i] === array[i - 1]){
                array[i] *= 2;
                array[i - 1]  = 0;    
                score += array[i];            
            }
        }  
    }
}