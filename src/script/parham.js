// ذخیره‌سازی تاریخچه در LocalStorage
const searchBox = document.getElementById("search-box");
const searchHistory = document.getElementById("search-history");

// دریافت تاریخچه از LocalStorage
let history = JSON.parse(localStorage.getItem("searchHistory")) || [];

// نمایش تاریخچه
function showHistory() {
  if (history.length > 0) {
    searchHistory.innerHTML = ""; // پاک‌کردن محتوای قبلی
    history.forEach((item) => {
      const historyItem = document.createElement("div");
      historyItem.textContent = item;
      historyItem.onclick = () => {
        searchBox.value = item;
        searchHistory.classList.add("hidden");
      };
      searchHistory.appendChild(historyItem);
    });
    searchHistory.classList.remove("hidden");
  }
}

// مدیریت جستجو و ذخیره‌سازی
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = searchBox.value.trim();
    if (query && !history.includes(query)) {
      history.push(query);
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
    searchHistory.classList.add("hidden");
  }
});

// بستن لیست تاریخچه هنگام کلیک خارج از باکس
document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-container")) {
    searchHistory.classList.add("hidden");
  }
});