// Data Wiki lengkap dengan path gambar lokal Anda
const dataResep = [
    {
        id: 1,
        nama: "Porridge (Bubur biasa)",
        harga: "100 Koin",
        gambar: "images/bubur.png", // Lokasi gambar makanan utama
        detail: "Makanan pokok sederhana yang sangat cepat dibuat untuk mengisi energi dasar karakter Anda.",
        // Daftar bahan yang dibutuhkan untuk membuat makanan ini
        bahan: [
            { namaBahan: "Gandum", ikonBahan: "images/gandum.png" }
        ]
    },
    {
        id: 2,
        nama: "Milk Pottage",
        harga: "350 Koin",
        gambar: "images/milk_pottage.png",
        detail: "Kombinasi karbohidrat gandum dengan kalsium dari susu segar. Memberikan pemulihan rasa lapar lebih lama.",
        bahan: [
            { namaBahan: "Gandum", ikonBahan: "images/gandum.png" },
            { namaBahan: "Suku/Susu", ikonBahan: "images/susu.png" }
        ]
    },
    {
        id: 3,
        nama: "Royal Banquet Stew",
        harga: "1,500 Koin",
        gambar: "images/royal_stew.png",
        detail: "Makanan kelas tertinggi (Legendary) yang menggabungkan seluruh nutrisi dari berbagai jenis kelompok makanan premium.",
        bahan: [
            { namaBahan: "Gandum", ikonBahan: "images/gandum.png" },
            { namaBahan: "Sayur", ikonBahan: "images/sayur.png" },
            { namaBahan: "Buah", ikonBahan: "images/buah.png" },
            { namaBahan: "Daging", ikonBahan: "images/daging.png" },
            { namaBahan: "Susu", ikonBahan: "images/susu.png" }
        ]
    }
];

const listContainer = document.getElementById('recipe-list');
const priceTag = document.getElementById('recipe-price');
const recipeTitle = document.getElementById('recipe-title');
const recipeDescription = document.getElementById('recipe-description');
const recipeImg = document.getElementById('recipe-img');
const ingredientsSection = document.getElementById('ingredients-section');
const ingredientsList = document.getElementById('ingredients-list');

// 1. Memunculkan daftar di kiri (dilengkapi gambar kecil)
function tampilkanDaftarResep() {
    dataResep.forEach(resep => {
        const li = document.createElement('li');
        
        // Buat elemen gambar kecil untuk ditaruh di sebelah teks nama resep
        const imgIcon = document.createElement('img');
        imgIcon.src = resep.gambar;
        imgIcon.classList.add('sidebar-icon');
        
        const textNode = document.createTextNode(resep.nama);
        
        li.appendChild(imgIcon);
        li.appendChild(textNode);
        
        li.addEventListener('click', () => {
            tampilkanDetailResep(resep);
        });
        
        listContainer.appendChild(li);
    });
}

// 2. Mengubah visual konten sebelah kanan saat menu diklik
function tampilkanDetailResep(resep) {
    priceTag.textContent = resep.harga;
    recipeTitle.textContent = resep.nama;
    recipeDescription.textContent = resep.detail;
    
    // Tampilkan gambar utama
    recipeImg.src = resep.gambar;
    recipeImg.style.display = "block";
    
    // Kosongkan daftar bahan lama sebelum memuat bahan resep yang baru
    ingredientsList.innerHTML = "";
    
    // Tampilkan bagian bahan pembuatan
    if(resep.bahan && resep.bahan.length > 0) {
        ingredientsSection.style.display = "block";
        
        resep.bahan.forEach(b => {
            const itemBox = document.createElement('div');
            itemBox.classList.add('ingredient-item');
            
            const bImg = document.createElement('img');
            bImg.src = b.ikonBahan;
            
            const bName = document.createElement('span');
            bName.textContent = b.namaBahan;
            
            itemBox.appendChild(bImg);
            itemBox.appendChild(bName);
            ingredientsList.appendChild(itemBox);
        });
    } else {
        ingredientsSection.style.display = "none";
    }
}

tampilkanDaftarResep();
