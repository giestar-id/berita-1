module.exports = (categoryName) => {
    // Helper for placeholder images
    const imgUrl = (id) => `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
    const getTitle = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);
    
    const catTitle = getTitle(categoryName);

    // Dummy List of articles for category
    const articles = [
        { title: "Laporan Khusus: Perkembangan Infrastruktur Digital di Daerah Tertinggal 2024", time: "2 Menit lalu", img: '1504384308090-c894fdcc538d', excerpt: "Akses internet mulai merata, masyarakat daerah menyambut gembira realisasi serat optik yang dijanjikan." },
        { title: "Dibalik Layar Diskusi Alot Penentuan Anggaran Sektor Pendidikan", time: "1 Jam lalu", img: '1449034446536-5982d109d883', excerpt: "Kementerian Pendidikan kembali memprioritaskan alokasi beasiswa demi menjangkau lebih dari 1 juta siswa." },
        { title: "Kejuaraan Dunia: Atlet Kebanggaan Tanah Air Tembus Kualifikasi Terbaik", time: "3 Jam lalu", img: '1461896836934-ffe607ba8211', excerpt: "Persiapan matang dan latihan intensif membuahkan hasil, sang atlet berhasil mencatatkan rekor baru." },
        { title: "Tips Mengatur Keuangan di Usia Muda, Hindari Beli Barang Tak Perlu", time: "5 Jam lalu", img: '1518770660439-4636190af475', excerpt: "Generasi milenial dan Gen Z diingatkan untuk rajin menabung, apalagi dengan angka inflasi yang terus bergerak." },
        { title: "Konser Amal Kumpulkan Donasi Miliaran Rupiah untuk Korban Bencana", time: "Hari Ini", img: '1529333166437-7750a6dd5a70', excerpt: "Puluhan musisi ternama bergantian tampil menyumbangkan suara di atas panggung besar di pusat kota." },
        { title: "Fenomena Perubahan Iklim yang Semakin Nyata di Berbagai Belahan Dunia", time: "Kemarin", img: '1611162617213-7d7a39e9b1d7', excerpt: "Cuaca ekstrem, banjir bandang, hingga kemarau panjang; laporan terbaru ilmuwan peringatkan umat manusia." }
    ];

    return `
    <div class="px-4 py-8 max-w-5xl mx-auto">
        
        <!-- Breadcrumbs -->
        <div class="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
            <a href="/" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[14px]">home</span></a>
            <span class="mx-2">/</span>
            <span class="text-primary">${catTitle}</span>
        </div>

        <div class="flex items-center border-b-4 border-black pb-4 mb-8">
            <h1 class="text-3xl md:text-5xl font-black font-serif uppercase tracking-tight text-gray-900">Indeks: ${catTitle}</h1>
        </div>

        <!-- Main Categories Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <!-- Article List -->
            <div class="lg:col-span-8 space-y-8">
                ${articles.map(article => `
                <a href="/article?id=1" class="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 border-b border-gray-100 pb-8">
                    <div class="w-full md:w-5/12 overflow-hidden rounded">
                        <img src="${imgUrl(article.img)}" class="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700" alt="News Image">
                    </div>
                    <div class="w-full md:w-7/12 flex flex-col justify-center pr-4">
                        <span class="text-[11px] font-bold text-primary uppercase tracking-wider mb-2 block">${catTitle}</span>
                        <h2 class="text-xl md:text-2xl font-bold font-serif mb-3 leading-snug group-hover:text-primary transition">
                            ${article.title}
                        </h2>
                        <p class="text-gray-600 text-sm line-clamp-3 mb-4">
                            ${article.excerpt}
                        </p>
                        <div class="text-xs text-gray-400 font-medium inline-flex items-center">
                            <span class="material-symbols-outlined text-[14px] mr-1">history</span> ${article.time}
                        </div>
                    </div>
                </a>
                `).join('')}

                <!-- Pagination -->
                <div class="flex justify-center mt-12 space-x-2">
                    <button class="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-500 hover:bg-gray-50 transition">Sebelumnya</button>
                    <button class="w-10 h-10 bg-primary text-white rounded text-sm font-bold shadow">1</button>
                    <button class="w-10 h-10 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 text-gray-700 transition">2</button>
                    <button class="w-10 h-10 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 text-gray-700 transition">3</button>
                    <span class="py-2 px-1 text-gray-400">...</span>
                    <button class="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition">Selanjutnya</button>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-4 hidden lg:block border-l border-gray-200 pl-8">
                <div class="sticky top-24">
                     <div class="flex items-center justify-between border-b-2 border-primary pb-2 mb-6">
                        <h3 class="text-lg font-bold font-serif uppercase tracking-tight">Berita Trending</h3>
                     </div>

                     <div class="space-y-6">
                        <a href="/article?id=2" class="group flex space-x-4">
                            <span class="text-3xl font-black text-gray-200 font-serif">1</span>
                            <div>
                                <h4 class="font-bold text-sm leading-snug font-serif group-hover:text-primary transition">Harga Minyak Dunia Melonjak Usai Ketegangan Geopolitik Baru</h4>
                            </div>
                        </a>
                        <a href="/article?id=2" class="group flex space-x-4">
                            <span class="text-3xl font-black text-gray-200 font-serif">2</span>
                            <div>
                                <h4 class="font-bold text-sm leading-snug font-serif group-hover:text-primary transition">Presiden Resmikan Jalan Tol Trans Sumatera Seksi Final</h4>
                            </div>
                        </a>
                        <a href="/article?id=2" class="group flex space-x-4">
                            <span class="text-3xl font-black text-gray-200 font-serif">3</span>
                            <div>
                                <h4 class="font-bold text-sm leading-snug font-serif group-hover:text-primary transition">Spesifikasi iPhone 18 Bocor ke Publik, Gunakan Baterai Nuklir?</h4>
                            </div>
                        </a>
                        <a href="/article?id=2" class="group flex space-x-4">
                            <span class="text-3xl font-black text-gray-200 font-serif">4</span>
                            <div>
                                <h4 class="font-bold text-sm leading-snug font-serif group-hover:text-primary transition">Bursa Transfer: Pemain Bintang Eropa Ini Segera Bergabung Liga Lokal</h4>
                            </div>
                        </a>
                     </div>

                     <!-- Promo Box -->
                     <div class="mt-8 bg-black text-white p-6 rounded text-center">
                         <span class="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Iklan Digital</span>
                         <h4 class="font-bold text-xl mb-4">Gunakan BERITAKU Premium!</h4>
                         <p class="text-gray-400 text-sm mb-6">Baca berita tanpa terganggu iklan dengan biaya berlangganan murah per bulan.</p>
                         <button class="bg-primary hover:bg-red-700 px-6 py-2 rounded text-sm font-bold w-full transition">Mulai Langganan</button>
                     </div>
                </div>
            </div>

        </div>
    </div>
    `;
};
