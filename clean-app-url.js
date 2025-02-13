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

    // ถ้ามีการลบพารามิเตอร์ออก ให้เปลี่ยน URL โดยไม่รีเฟรช
    if (hasRemoved) {
        // ตรวจสอบว่า URL ถูกต้องหรือไม่
        if (!url.href.includes('public-shop.github.io')) {
            // ถ้าไม่ใช่ URL ที่ต้องการ (เช่น https://public-shop.github.io/dashboard/) ให้เปลี่ยนเส้นทาง
            window.location.href = "https://public-shop.github.io/dashboard/";
        } else {
            window.history.replaceState({}, document.title, url.pathname + url.search);
        }
    }
})();