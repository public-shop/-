
    let allProducts = [];

    // ฟังก์ชันถอดรหัส Base64
    function decodeBase64(encodedString) {
        return atob(encodedString);
    }

    async function fetchProducts() {
        try {
            const encodedUrl = 'aHR0cHM6Ly9wdWJsaWMtc2hvcC5naXRodWIuaW8vZGF0YWJhc2UvZGF0YWJhc2UuanNvbg==';
            const apiUrl = decodeBase64(encodedUrl);
            const response = await fetch(apiUrl);
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

    function displayProducts(products) {
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <i class="fab fa-shopify"></i>
                <p class="product-name">${product.name}</p>
            `;

            productItem.addEventListener('click', () => {
                window.location.href = product.linkshopee; // เปิดลิงก์ในแท็บเดิม
            });

            productContainer.appendChild(productItem);
        });
    }

    // ระบบเช็คแจ้งเตือนตรวจสอบ
    function searchProducts() {
        let searchInput = document.getElementById('search-input').value;

        // เช็กกรณีที่ไม่มีการกรอกข้อความ
        if (searchInput === "") {
            alert("กรุณากรอกรหัสสินค้า");
            return;
        }

        // เช็กว่ามีช่องว่างที่หน้าแรกหรือหลัง
        if (searchInput.startsWith(" ") || searchInput.endsWith(" ")) {
            alert("กรุณากรอกโดยไม่มีช่องว่าง");
            return;
        }

        // ตัดช่องว่างและแปลงเป็นตัวพิมพ์เล็ก
        searchInput = searchInput.trim().toLowerCase();

        // เช็กว่ามีช่องว่างระหว่างคำ
        if (searchInput.includes(" ")) {
            alert("กรุณากรอกโดยไม่มีช่องว่าง");
            return;
        }

        // กรองสินค้าที่ตรงกับคำที่กรอก
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchInput)
        );

        // ถ้าไม่พบสินค้าแสดงข้อความ
        if (filteredProducts.length === 0) {
            alert("ไม่พบสินค้าที่ตรงกับรหัสที่คุณกรอก");
        } else {
            displayProducts(filteredProducts);  // แสดงผลลัพธ์
        }
    }

    // ดึงข้อมูลสินค้าใหม่ทุก 1 นาที (60000 มิลลิวินาที)
    setInterval(fetchProducts, 60000);

    window.addEventListener('load', fetchProducts);

    function resizeCoverImage() {
        let cover = document.querySelector(".cover-image");
        let viewportHeight = window.innerHeight * 0.3;
        cover.style.height = viewportHeight + "px";
    }

    window.addEventListener("load", resizeCoverImage);
    window.addEventListener("resize", resizeCoverImage);