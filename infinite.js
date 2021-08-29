export default class Infinite {

    firstSerie(n) {
        let e = 1;
        let factorial = 1;

        for(let i = 1; i <= n; i++) {
            factorial *= i;
            e += (1/factorial);
        }
        return e;
    } 
    
    secondSerie(n) {
        let s = 4;         

        for(let i = 3; i <= n; i += 4) {
            s -= (4/i);
        }
        
        for(let j = 5; j <= n; j += 4) {            
            s += (4/j);     
        }
        return s;   
    }
}

let a = new Infinite()
console.log(a.firstSerie(9));
console.log(a.secondSerie(7));