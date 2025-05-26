(function () {
  // 初始化 gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag('js', new Date());
  gtag('config', 'G-19P27Z96J0', {
    send_page_view: false,
    debug_mode: true  // << 加這行才會出現在 DebugView
  });

  // 發送一次 page_view
  function sendPageView() {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: location.pathname
    });
    console.log('[GA4] page_view sent:', location.pathname);
  }

  sendPageView();

  // 每秒偵測是否換頁（單頁應用）
  let lastPath = location.pathname;
  setInterval(() => {
    const newPath = location.pathname;
    if (newPath !== lastPath) {
      lastPath = newPath;
      sendPageView();
    }
  }, 1000);
})();
