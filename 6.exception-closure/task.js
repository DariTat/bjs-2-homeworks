function parseCount(number){
    let res = Number.parseInt(number);
    if(isNaN(res)) {
        let error = new Error("Невалидное значение")
        throw error;
    }
    return res; 
}
function validateCount(number){
    try{
        let res = parseCount(number);
        return res;
    } catch(error) { 
        return error;
    }
}
class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if(((this.a + this.b) < this.c)||((this.b + this.c) < this.a)||((this.a + this.c) < this.b)){
            let error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
    }
    getPerimeter(){
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    getArea(){
        let p =(this.a + this.b + this.c)*0.5;
        let s = Number(Math.sqrt(p*(p-this.a)*(p - this.b)*(p - this.c)).toFixed(3));
        return s;

    }
}
function getTriangle(a, b, c){
    try{
        let triangle = new Triangle(a,b,c);
        return triangle;
    }catch(error){
        let tri = {
            getArea: function(){
                let error = "Ошибка! Треугольник не существует";
                return error;
            },
            getPerimeter: function(){
                let error = "Ошибка! Треугольник не существует";
                return error;
            }
            
        }
        return tri;
    }
    
    
}