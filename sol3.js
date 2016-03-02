
var r = 1;
var sol2 = function(input){
for ( var i = 0; i < input ; i++) {
  if (input % i === 0 ) {
    r= i;
  }
};
};
sol2(600851475143);
document.write(r);