const changeBtn = document.getElementById("changeBtn");
const colorBox = document.getElementById("colorBox");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  console.log("Toggle clicked ✅");  // 👈 Yeh line add karni hai
  document.body.classList.toggle("dark-mode");
});

const colorHistoryList = document.getElementById("colorHistory");

let colorHistory = [];

function getRandomColor() {
  const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  return hex;
}

changeBtn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorBox.textContent = newColor;
  updateHistory(newColor);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorBox.textContent);
  copyStatus.textContent = "✅ Copied!";
  setTimeout(() => {
    copyStatus.textContent = "";
  }, 1500);
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function updateHistory(color) {
  colorHistory.unshift(color);
  if (colorHistory.length > 5) colorHistory.pop();

  colorHistoryList.innerHTML = "";
  colorHistory.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    li.style.color = c;
    colorHistoryList.appendChild(li);
  });
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
