let allProducts = [];

async function fetchProducts() {
    try {
        const encodedUrl = 'aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy91c2VyL21hc3Rlci9jb250ZW50cy9kYXRhYmFzZS5qc29uP3JlZj1tYWlu';
        const apiUrl = decodeBase64(encodedUrl);

        const response = await fetch(apiUrl, {
            headers: { "Accept": "application/vnd.github.v3.raw", "Cache-Control": "no-cache" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', error);
        alert('ไม่สามารถดึงข้อมูลสินค้าได้ กรุณาลองใหม่ในภายหลัง');
    }
}

// 📌 อัปเดตข้อมูลทุก 30 วินาที (สามารถเปลี่ยนค่าได้)
setInterval(fetchProducts, 30000);

// โหลดข้อมูลทันทีเมื่อเปิดหน้าเว็บ
window.addEventListener('load', fetchProducts);