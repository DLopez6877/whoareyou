// back-end
 var add1 = function(ned1, jamie1, cate1, cerci1){
   return ned1 + jamie1 + cate1 + cerci1;
 }
 var add2 = function(ned2, jamie2, cate2, cerci2){
   return ned2 + jamie2 + cate2 + cerci2;
 }
 var add3 = function(ned3, jamie3, cate3, cerci3){
   return ned3 + jamie3 + cate3 + cerci3;
 }
 var add4 = function(ned4, jamie4, cate4, cerci4){
   return ned4 + jamie4 + cate4 + cerci4;
 }

var total = function(add1, add2, add3, add4) {
  return add1 + add2 + add3 + add4;
}

// Front-End Logic
$(document).ready(function() {
  $("#personal-info").submit(function(event) {

    event.preventDefault();
  });
});
