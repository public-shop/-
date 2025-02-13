function resetWebsite() {
    // 1. รีเซ็ตข้อมูลที่แสดงบนหน้าเว็บ
    if (window.allProducts) {
        displayProducts(window.allProducts); // แสดงสินค้าทั้งหมดใหม่
    }

    // 2. เคลียร์ข้อมูลแคชของเบราว์เซอร์
    localStorage.clear();   // ล้าง localStorage
    sessionStorage.clear(); // ล้าง sessionStorage

    console.log("เว็บไซต์ถูกเคลียร์ข้อมูลเรียบร้อย!"); // แสดงใน Console
}

// ทำงานอัตโนมัติหลังจากโหลดเว็บเสร็จ 10 วินาที
setTimeout(resetWebsite, 10000);