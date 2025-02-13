(function() {
    let url = new URL(window.location);
    let paramsToRemove = ["fbclid", "igshid", "utm_source", "utm_medium", "utm_campaign"];

    let hasRemoved = false;
    paramsToRemove.forEach(param => {
        if (url.searchParams.has(param)) {
            url.searchParams.delete(param);
            hasRemoved = true;
        }
    });

    // ถ้ามีการลบพารามิเตอร์ออก ให้เปลี่ยน URL และโหลดใหม่
    if (hasRemoved) {
        window.history.replaceState({}, document.title, url.pathname + url.search);

        // ใช้วิธี reload หน้าใหม่แบบไม่โหลดแคช
        setTimeout(() => {
            location.reload();
        }, 50);
    }
})();