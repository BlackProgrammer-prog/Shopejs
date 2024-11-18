document.addEventListener("DOMContentLoaded", () => {
    // بررسی اطلاعات ذخیره شده در localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
  
    if (savedUsername && savedPassword) {
      // اگر اطلاعات موجود است، به صورت پیش‌فرض در فرم قرار می‌گیرد
      document.getElementById("username").value = savedUsername;
      document.getElementById("password").value = savedPassword;
      document.getElementById("remember-me").checked = true; // تیک Remember Me زده می‌شود
    }
  });
  
  document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    // گرفتن مقادیر وارد شده توسط کاربر
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;
  
    try {
      // ارسال درخواست به JSON Server
      const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
      const data = await response.json();
  
      if (data.length > 0) {
        // نام کاربری و رمز عبور صحیح است
        alert("Login successful!");
        if (rememberMe) {
          // ذخیره اطلاعات در localStorage اگر Remember Me فعال باشد
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
        } else {
          // حذف اطلاعات از localStorage اگر Remember Me فعال نباشد
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }
        window.location.href = "main.html"; // انتقال به صفحه اصلی
      } else {
        // نمایش خطا
        document.getElementById("error-message").style.display = "block";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  });