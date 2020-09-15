//no funciona, debe devolver las posiciones de los numeros del array que entra en el
//argumento cuya suma es el target.
var twoSum = function(nums, target) {
    let response = [];
    for (i=0;i<=nums.length-1;i++)
        {
            for (j=0;j<=nums.length-1;j++)
                {
                    if ( nums [j] + nums [i] != target )
                        {
                            if ( nums [j] + nums [i] === target  )
                                {
                                    response.push (j);
                                    response.push (i);
                                    j = nums.length;
                                    i = nums.length;
                                }
                            
                            
                        }
                }
        }
    
    return response;
};

console.log ( twoSum ( [ 2,7,3 ] , 5 ) );
