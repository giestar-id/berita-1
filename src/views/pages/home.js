module.exports = () => {
    // Helper for placeholder images
    const imgUrl = (id) => `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
    
    // Sample News Data (Dummy)
    const topHeadline = {
        title: "Pemilu 2029: Dinamika Politik Baru Membawa Angin Segar Bagi Demokrasi Indonesia",
        category: "Politik",
        excerpt: "Berbagai pakar memprediksi bahwa pemilihan umum yang akan datang akan dipenuhi oleh kejutan dari tokoh-tokoh muda yang mulai merebut kursi parlemen...",
        time: "1 Jam yang lalu",
        img: '1585829365295-ab7cd400c167', // News camera
        link: "/article?id=1"
    };

    const sideHeadlines = [
        { title: "Bank Indonesia Tahan Suku Bunga Acuan, Pasar Merespons Positif", time: "3 Jam yang lalu", img: '1593672755342-7efbbbaf44ba', link: "/article?id=2" },
        { title: "Start-up Lokal Raih Pendanaan Seri B Senilai Rp 500 Miliar", time: "5 Jam yang lalu", img: '1504384308090-c894fdcc538d', link: "/article?id=3" },
        { title: "Kemenkes Beri Peringatan Terkait Varian Virus Baru", time: "6 Jam yang lalu", img: '1584036561584-b036f2cae5d4', link: "/article?id=4" }
    ];

    const techNews = [
        { title: "Peluncuran Chip AI Generasi Terbaru Diklaim 10x Lebih Cepat", time: "18 Mar", img: '1518770660439-4636190af475', excerpt: "Perkembangan AI semakin masif dengan hadirnya teknologi chip terbaru ini yang mampu memproses triliunan data per detik." },
        { title: "Aplikasi Media Sosial Ini Tutup Akibat Pelanggaran Privasi", time: "17 Mar", img: '1611162617213-7d7a39e9b1d7', excerpt: "Skandal kebocoran data pengguna kembali terjadi, kali ini menimpa platform yang memiliki jutaan pengguna aktif harian." },
        { title: "Mobil Terbang Bukan Lagi Sekedar Khayalan, Uji Coba Berhasil", time: "15 Mar", img: '1560958089-b8a1929cea89', excerpt: "Masa depan transportasi kian dekat. Prototipe mobil terbang ini berhasil melayang 10 meter di atas tanah." },
        { title: "Layanan Cloud Terbesar Mengalami Gangguan Global", time: "14 Mar", img: '1558494949-ef010cbdcc31', excerpt: "Ribuan situs web dan aplikasi tidak dapat diakses selama 3 jam akibat pemadaman mendadak pusat data." }
    ];

    return `
    <div class="px-4 py-8">
        
        <!-- Breaking News Alert -->
        <div class="mb-8 flex items-center bg-red-50 border-l-4 border-red-600 p-3 rounded-r-md">
            <span class="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase rounded-sm mr-3 animate-pulse">Breaking News</span>
            <marquee class="text-sm font-medium text-red-900">
                Pemerintah akhirnya mengesahkan undang-undang terbaru terkait perlindungan data pribadi (PDP) &nbsp;&bull;&nbsp; Nilai tukar Rupiah menguat terhadap Dolar AS
            </marquee>
        </div>

        <!-- Hero Section: Top Headline & Side Editor Picks -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            
            <!-- Main Headline -->
            <div class="lg:col-span-8 group relative rounded-lg overflow-hidden shadow-sm">
                <a href="${topHeadline.link}" class="block h-full">
                    <img src="${imgUrl(topHeadline.img)}" alt="Main Headline" class="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                    <!-- Gradient overlay for text -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                        <span class="inline-block bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-3">${topHeadline.category}</span>
                        <h1 class="text-2xl md:text-4xl font-serif font-bold text-white leading-tight mb-3 group-hover:text-gray-200 transition">
                            ${topHeadline.title}
                        </h1>
                        <p class="text-gray-300 text-sm md:text-base hidden md:block line-clamp-2 mb-3">
                            ${topHeadline.excerpt}
                        </p>
                        <div class="flex items-center text-xs text-gray-400 font-medium space-x-4">
                            <span><span class="material-symbols-outlined text-[14px] align-middle mr-1">schedule</span>${topHeadline.time}</span>
                            <span><span class="material-symbols-outlined text-[14px] align-middle mr-1">person</span>Oleh Redaksi</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Side Headlines -->
            <div class="lg:col-span-4 flex flex-col space-y-6">
                <div class="flex items-center justify-between border-b-2 border-primary pb-2">
                    <h2 class="text-lg font-bold font-serif uppercase tracking-tight">Terpopuler</h2>
                    <a href="#" class="text-xs text-gray-500 hover:text-primary transition">Lihat Semua ></a>
                </div>
                
                ${sideHeadlines.map((news, idx) => `
                <a href="${news.link}" class="flex space-x-4 group">
                    <div class="w-1/3 flex-shrink-0 relative overflow-hidden rounded">
                        <span class="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold px-2 py-1 z-10">${idx + 1}</span>
                        <img src="${imgUrl(news.img)}" class="w-full h-24 object-cover transform group-hover:scale-110 transition duration-500" alt="News thumbnail" />
                    </div>
                    <div class="w-2/3 flex flex-col justify-center">
                        <h3 class="text-sm font-bold font-serif leading-snug group-hover:text-primary transition line-clamp-3 mb-2">${news.title}</h3>
                        <span class="text-xs text-gray-500 font-medium inline-flex items-center">
                            <span class="material-symbols-outlined text-[12px] mr-1">schedule</span>${news.time}
                        </span>
                    </div>
                </a>
                `).join('')}

                <!-- Small Ad space -->
                <div class="w-full h-48 bg-gray-100 mt-2 flex items-center justify-center border border-gray-200">
                    <span class="text-gray-400 text-xs font-semibold uppercase tracking-widest">Kolom Iklan</span>
                </div>
            </div>
        </div>

        <!-- Section: Teknologi Latest -->
        <div class="mb-12">
            <div class="flex items-center justify-between border-b-[3px] border-black mb-6 pb-2">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-6 bg-primary"></div>
                    <h2 class="text-2xl font-black font-serif uppercase tracking-tight">Teknologi Terkini</h2>
                </div>
                <a href="/category?name=teknologi" class="text-sm font-medium hover:text-primary transition inline-flex items-center">Indeks Teknologi <span class="material-symbols-outlined text-sm ml-1">arrow_forward</span></a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${techNews.map(news => `
                <div class="group flex flex-col">
                    <a href="/article?id=123" class="w-full h-48 relative overflow-hidden rounded-md mb-4 group block">
                        <img src="${imgUrl(news.img)}" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
                    </a>
                    <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">${news.time}</span>
                    <a href="/article?id=123">
                        <h3 class="font-bold text-lg font-serif leading-tight mb-2 group-hover:text-primary transition line-clamp-2">${news.title}</h3>
                    </a>
                    <p class="text-gray-600 text-sm line-clamp-3">${news.excerpt}</p>
                </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Banner Ad Middle -->
        <div class="w-full max-w-4xl mx-auto h-24 md:h-32 bg-gray-200 mb-12 flex items-center justify-center">
             <span class="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase">Ruang Iklan Banner (970x250)</span>
        </div>

        <!-- Editors Choice Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100">
             <div class="col-span-1 lg:col-span-3 mb-2 flex items-center space-x-3">
                 <span class="material-symbols-outlined text-primary text-3xl">star_rate</span>
                 <h2 class="text-2xl font-black font-serif uppercase tracking-tight">Pilihan Redaksi</h2>
             </div>
             
             <!-- Article 1 -->
             <a href="/article?id=1" class="group">
                 <img src="${imgUrl('1526498460520-4c246339dccb')}" class="w-full h-56 object-cover rounded shadow-sm mb-4" />
                 <span class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Kesehatan</span>
                 <h3 class="font-bold text-xl font-serif mb-2 group-hover:text-primary transition">Pola Hidup Sehat di Era Modern: Mengatasi Stres Pekerjaan</h3>
                 <p class="text-gray-600 text-sm mb-3 line-clamp-3">Kesibukan harian seringkali membuat kita lupa pentingnya menjaga asupan gizi dan pikiran yang jernih. Berikut tips ahli gizi...</p>
                 <span class="text-xs text-gray-500 font-medium inline-flex items-center"><span class="material-symbols-outlined text-[14px] mr-1">history</span> Kemarin</span>
             </a>

             <!-- Article 2 -->
             <a href="/article?id=2" class="group">
                 <img src="${imgUrl('1449034446536-5982d109d883')}" class="w-full h-56 object-cover rounded shadow-sm mb-4" />
                 <span class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Investasi</span>
                 <h3 class="font-bold text-xl font-serif mb-2 group-hover:text-primary transition">Prediksi Pasar Properti 2024: Apakah Waktu yang Tepat untuk Membeli?</h3>
                 <p class="text-gray-600 text-sm mb-3 line-clamp-3">Sektor properti diproyeksikan mengalami rebound setelah stagnasi dua tahun terakhir. Banyak developer kini menawarkan skema kredit mudah...</p>
                 <span class="text-xs text-gray-500 font-medium inline-flex items-center"><span class="material-symbols-outlined text-[14px] mr-1">history</span> 2 Hari Lalu</span>
             </a>

             <!-- List Articles -->
             <div class="flex flex-col space-y-4 pt-2">
                 <a href="/article?id=3" class="group flex space-x-4 items-center">
                     <img src="${imgUrl('1517649763962-0c623066013b')}" class="w-24 h-24 object-cover rounded" />
                     <div>
                         <span class="text-[10px] font-bold text-primary uppercase mb-1 block">Otomotif</span>
                         <h4 class="font-bold font-serif text-sm leading-snug group-hover:text-primary transition">Mobil Listrik Terbaru Resmi Mengaspal di Ibukota</h4>
                     </div>
                 </a>
                 <div class="border-b border-gray-200"></div>
                 <a href="/article?id=4" class="group flex space-x-4 items-center">
                     <img src="${imgUrl('1461896836934-ffe607ba8211')}" class="w-24 h-24 object-cover rounded" />
                     <div>
                         <span class="text-[10px] font-bold text-primary uppercase mb-1 block">Olahraga</span>
                         <h4 class="font-bold font-serif text-sm leading-snug group-hover:text-primary transition">Timnas Sukses Lolos ke Semifinal Piala Asia</h4>
                     </div>
                 </a>
                 <div class="border-b border-gray-200"></div>
                 <a href="/article?id=5" class="group flex space-x-4 items-center">
                     <img src="${imgUrl('1529333166437-7750a6dd5a70')}" class="w-24 h-24 object-cover rounded" />
                     <div>
                         <span class="text-[10px] font-bold text-primary uppercase mb-1 block">Hiburan</span>
                         <h4 class="font-bold font-serif text-sm leading-snug group-hover:text-primary transition">Konser Band Legendaris Dipadati Puluhan Ribu Penonton</h4>
                     </div>
                 </a>
             </div>
        </div>

    </div>
    `;
};
