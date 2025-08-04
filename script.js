// گرفتن المان‌ها
const fox = document.getElementById('foxImage');
const text = document.getElementById('studioText');
const button = document.getElementById('enterButton');

// مرحله اول: نمایش روباه برای 0.8 ثانیه
setTimeout(() => {
  fox.classList.remove('hidden');
  fox.style.opacity = 1;

  setTimeout(() => {
    fox.style.opacity = 0;

    setTimeout(() => {
      fox.style.display = 'none';
      text.classList.remove('hidden');
      text.style.opacity = 1;

      // نمایش دکمه پنجه بعد از 1 ثانیه
      setTimeout(() => {
        button.classList.remove('hidden');
        button.style.opacity = 1;
      }, 1000);
    }, 800);

  }, 800);

}, 300);

// وقتی کاربر روی پنجه کلیک کرد → بره به صفحه اصلی
button.addEventListener('click', () => {
  window.location.href = "home.html";  // صفحه اصلی که بعداً می‌سازیم
});
