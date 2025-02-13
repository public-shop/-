(function() {
    // สร้าง URL Object จาก URL ปัจจุบัน
    let url = new URL(window.location.href);

    // พารามิเตอร์ที่ต้องการลบออกจาก URL
    const paramsToRemove = ["fbclid", "igshid", "utm_source", "utm_medium", "utm_campaign"];

    // URL เป้าหมายที่ต้องการเปลี่ยนเส้นทางไป
    const targetUrl = "https://public-shop.github.io/dashboard/";

    // ตรวจสอบว่ามีการลบพารามิเตอร์หรือไม่
    let hasRemoved = false;

    // วนลูปเพื่อลบพารามิเตอร์ที่ไม่ต้องการ
    paramsToRemove.forEach(param => {
        if (url.searchParams.has(param)) {
            url.searchParams.delete(param); // ลบพารามิเตอร์
            hasRemoved = true; // ตั้งค่าเป็น true หากมีการลบ
        }
    });

    // หากมีการลบพารามิเตอร์
    if (hasRemoved) {
        // ตรวจสอบว่า URL ปัจจุบันไม่ใช่ URL เป้าหมาย
        if (url.href !== targetUrl) {
            // เปลี่ยนเส้นทางไปยัง URL เป้าหมาย
            window.location.href = targetUrl;
        } else {
            // อัพเดต URL โดยไม่ต้องโหลดหน้าใหม่
            window.history.replaceState({}, document.title, url.pathname + url.search);
        }
    }
})();