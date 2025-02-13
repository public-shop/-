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

    // ถ้ามีการลบพารามิเตอร์ออก ให้เปลี่ยน URL และรันฟังก์ชันปรับขนาดภาพใหม่
    if (hasRemoved) {
        window.history.replaceState({}, document.title, url.pathname + url.search);

        // รอให้ URL เปลี่ยนแปลงก่อนแล้วค่อยปรับขนาดภาพใหม่
        setTimeout(() => {
            if (typeof resizeCoverImage === "function") {
                resizeCoverImage();
            }
        }, 100); // รอ 100 มิลลิวินาที
    }
})();