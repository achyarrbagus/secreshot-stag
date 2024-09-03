(function () {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c7a1ce90 (migrate to next js 14)
    var toggler = document.querySelector('.theme-toggler input[type="checkbox"]'),
        root = document.documentElement,
        currentTheme = localStorage.getItem('theme') || "dark";

    if (currentTheme == "light") toggler.removeAttribute('checked');

    else toggler.checked = true;
    root.setAttribute('data-theme', currentTheme);

    toggler.addEventListener('change', toggleTheme, false);

    function toggleTheme(e) {
        if (this.checked) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');

        }
    }
<<<<<<< HEAD
})();
=======
  var toggler = document.querySelector('.theme-toggler input[type="checkbox"]'),
    root = document.documentElement,
    currentTheme = localStorage.getItem("theme") || "dark";

  if (currentTheme == "light") toggler.removeAttribute("checked");
  else toggler.checked = true;
  root.setAttribute("data-theme", currentTheme);

  toggler.addEventListener("change", toggleTheme, false);

  function toggleTheme(e) {
    if (this.checked) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
})();
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
=======
})();
>>>>>>> c7a1ce90 (migrate to next js 14)
