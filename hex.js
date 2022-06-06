const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// select elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add event listener
btn.addEventListener("click", function () {
  let hexColor = "#";
  //   let randomNumber = Math.floor(Math.random() * hex.length);
  const randomNumber = function () {
    let randomNumber = Math.floor(Math.random() * hex.length);
    return randomNumber;
  };
  //这个for loop得到的value6位是一样的。需要让hex[]这个括号里是一个得到random的函数，而不是一个value。
  for (i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
    console.log(hexColor);
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

/*生成hex color的原理：
hex color的构成：
# + 6位value
这个六位value由0~9共10个数字构成，然后是A~F代表10~15。
生成6位：使用Loop。
*/
