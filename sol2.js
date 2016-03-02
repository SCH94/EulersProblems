var a = 0;
var b = 1;
var c = a + b;
var t = 0
var sol2 = function(input){
for ( var i = 0; c < input ; i++) {
  if (c % 2 === 0 ) {
    t += c;
  }
  c= a + b;
  a = b;
  b = c;
};
};
sol2(4000000000);
document.write(t);
