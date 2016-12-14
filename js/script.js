// var fs = require('fs');
//Запись данных в файл
// fs.writeFile('test.txt','Содержимое',function(err) {
//     if (err) throw err;
// });
// console.log(fs.readFileSync("test.txt",{encoding: 'utf-8'}));
function menuBtn() {
     var myMenu=$(".my-nav-li"), style = myMenu[0].style;
     console.log(myMenu);
     if (style.height == "160px") {
        style.transition = "all .5s ease-in-out";
     style.height = "0px";
     }  
     else {
         style.transition = "all .5s ease-in-out";
     style.height = "160px";
     style.width = "100%";
     } 
}