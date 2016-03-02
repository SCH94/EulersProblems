var sum = 0;
var sol = function(input) {

  for (var i = 1; i < input; i++) {
    if (i % 3 === 0 || (i % 5 === 0) ) {
      sum += i;
    }
   
  }
};
sol(1000);
document.write(sum);

