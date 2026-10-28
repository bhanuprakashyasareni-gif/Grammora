(() => {
  const restriction = document.getElementById("mobile-restriction");

  if (!restriction) return;

  function checkDevice() {
    const ua = navigator.userAgent || "";

    const isMobile =
      /Android.*Mobile|iPhone|iPod|Windows Phone|Mobile.*Firefox/i.test(ua);

    const isSmallScreen = window.innerWidth <= 767;

    const allowed = isMobile && isSmallScreen;

    restriction.style.display = allowed ? "none" : "flex";
    document.documentElement.style.overflow = allowed ? "" : "hidden";
  }

  checkDevice();

  window.addEventListener("resize", checkDevice);
  window.addEventListener("orientationchange", checkDevice);
})();