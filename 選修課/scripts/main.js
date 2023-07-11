
document.querySelector("ul").onclick = function () {
    alert("ヽ(✿ﾟ▽ﾟ)ノ");
  };

  document.querySelector("a").onclick = function () {
    alert("你推zotomayo,我們就是朋友");
  };


  

  let count = 0;
  
  function changeImage(src) {
    document.querySelector("img").src =  src ;
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("./images/s0135_25_0.png");
}
document.body.onmouseup = function () {
    changeImage("./images/s0135_27_0.png");
}

