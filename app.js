const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// select elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add event listener
btn.addEventListener("click", function () {
  //获得随机数，用作array的index
  const index = Math.floor(Math.random() * colors.length);
  //给网页改背景颜色
  document.body.style.backgroundColor = colors[index];
  //更改显示的颜色：
  color.textContent = colors[index];
});
