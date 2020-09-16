
/*class PROBLEMA2 {
    constructor(){
        this.=;
    }
    
    sumarMultiplos(){
                
    }

}*/

function fibonacci(numero)
    {
        let fibo=[0,1];
        for (let i = 2; i <= 19; i++) {
            fibo.push(fibo[i - 2] + fibo[i - 1]);
        }
        return fibo;
    }
