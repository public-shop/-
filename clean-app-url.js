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

    // ถ้ามีการลบพารามิเตอร์ออก
    if (hasRemoved) {
        // ตรวจสอบว่า URL ไม่ใช่ https://public-shop.github.io/dashboard/
        if (url.href !== "https://public-shop.github.io/dashboard") {
            // ถ้าไม่ใช่ URL ที่ต้องการ ให้เปลี่ยนเส้นทาง
            window.location.href = "https://public-shop.github.io/dashboard";
        } else {
            // ถ้าเป็น URL ที่ต้องการ ให้เปลี่ยน URL โดยไม่รีเฟรช
            window.history.replaceState({}, document.title, url.pathname + url.search);
        }
    }
})();