
document.querySelector("ul").onclick = function () {
    alert("小介紹");
  };

  document.querySelector("a").onclick = function () {
    alert("嘶嘶嘶");
  };



  function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png.jpg";
}

document.body.onmousedown = function () {
    changeImage("skin");
}
document.body.onmouseup = function () {
    changeImage("no-1");
}

  
  
  
//   function changeImage(src) {
//     document.querySelector("img").src =  src ;
// }
// let count=0
// document.body.onmousedown = function () {
//     count += 1;
//     document.querySelector("#pop").textContent = count;
//     changeImage("./images/skin.png.jpg");
// }
//    document.body.onmouseup = function () {
//     changeImage("./images/maxresdefault.jpg)}

