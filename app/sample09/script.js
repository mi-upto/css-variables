document.getElementById("btn").addEventListener(
  "click",
  () => {
    const box = document.querySelector(".box");
    box.style.setProperty("--size", "100px");
  },
  false
);
