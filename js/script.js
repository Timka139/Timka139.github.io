// var fs = require('fs');
//Запись данных в файл
// fs.writeFile('test.txt','Содержимое',function(err) {
//     if (err) throw err;
// });
// console.log(fs.readFileSync("test.txt",{encoding: 'utf-8'}));
var i;
i=2;
function menuBtn() {
     var myMenu=$(".my-nav-bar li"), style = myMenu[0].style;
     if (i%2==0) {
         style.transition = "all .8s ease-in-out";
     style.height = "160px";
     style.width = "100%";
     } else {
         style.transition = "all .8s ease-in-out";
     style.height = "0px";
     style.width = "0%";
     };
     i=i++;
}