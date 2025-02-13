function resetWebsite() {
    // 1. รีเซ็ตข้อมูลที่แสดงบนหน้าเว็บ
    if (window.allProducts) {
        displayProducts(window.allProducts); // แสดงสินค้าทั้งหมดใหม่
    }

    // 2. เคลียร์ข้อมูลแคชของเบราว์เซอร์
    localStorage.clear();   // ล้าง localStorage
    sessionStorage.clear(); // ล้าง sessionStorage

    // 3. เปลี่ยน URL ของหน้าเพื่อไม่ให้มันเก็บประวัติการเข้าชม
    history.replaceState(null, '', window.location.href);

    console.log("เว็บไซต์ถูกเคลียร์ข้อมูลเรียบร้อย!");
}

// ทำงานอัตโนมัติหลังจากโหลดเว็บเสร็จ 10 วินาที
setTimeout(resetWebsite, 10000);