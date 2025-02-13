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

    // ถ้ามีการลบพารามิเตอร์ออก ให้เชื่อมต่อไปยังลิงก์จริง (URL ใหม่)
    if (hasRemoved) {
        // ไปยัง URL ใหม่โดยไม่มีพารามิเตอร์
        window.location.href = url.toString();
    }
})();