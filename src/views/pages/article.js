module.exports = (id) => {
    // Dummy Data to render realistic content
    const imgUrl = (imgId) => `https://images.unsplash.com/photo-${imgId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
    const sideImg = (imgId) => `https://images.unsplash.com/photo-${imgId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;
    
    return `
    <article class="px-4 py-8 max-w-[1000px] mx-auto">
        
        <!-- Breadcrumbs -->
        <div class="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
            <a href="/" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[14px]">home</span></a>
            <span class="mx-2">/</span>
            <a href="/category?name=nasional" class="hover:text-primary transition">Nasional</a>
            <span class="mx-2">/</span>
            <span class="text-primary truncate w-64 md:w-auto">Bahas Regulasi Cyber, Pemerintah Siapkan UU Terbaru Tahun Depan</span>
        </div>

        <!-- Article Header -->
        <header class="mb-8">
            <h1 class="text-3xl md:text-5xl lg:text-5xl font-black font-serif text-gray-900 leading-[1.15] mb-6">
                Bahas Regulasi Siber Baru, Kemkominfo Siapkan RUU Ketat Mulai Tahun Depan
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-600 font-serif font-light leading-relaxed mb-6 border-l-4 border-primary pl-4">
                "UU ini dirancang bukan untuk membungkam kebebasan berekspresi, melainkan bentuk perlindungan mutlak bagi data pribadi jutaan warga digital kita," tegas menteri.
            </p>

            <div class="flex flex-col md:flex-row md:items-center justify-between text-sm text-gray-500 font-medium py-4 border-y border-gray-100">
                <div class="flex items-center space-x-4 mb-4 md:mb-0">
                    <img src="${sideImg('1570295999919-56ceb5ecca61')}" alt="Author Portrait" class="w-10 h-10 rounded-full object-cover">
                    <div class="flex flex-col">
                        <span class="font-bold text-gray-800">Budi Santoso</span>
                        <span class="text-xs">Editor Senior Desk Nasional</span>
                    </div>
                </div>
                <div class="flex flex-col md:items-end">
                    <span class="flex items-center text-xs mb-1"><span class="material-symbols-outlined text-[14px] mr-1">calendar_month</span>Senin, 18 Maret 2024 - 14:30 WIB</span>
                    <span class="flex items-center text-xs text-gray-400"><span class="material-symbols-outlined text-[14px] mr-1">timer</span>Waktu baca: 4 Menit</span>
                </div>
            </div>
        </header>

        <!-- Hero Image -->
        <figure class="mb-10 group">
            <div class="overflow-hidden rounded-md shadow-md mb-3">
                <img src="${imgUrl('1581456495146-65a71b2c8e52')}" alt="Press Conference" class="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105">
            </div>
            <figcaption class="text-xs text-gray-500 italic flex justify-between">
                <span>Konferensi pers tahunan di Jakarta terkait arah pengembangan kebijakan digitalisasi.</span>
                <span>Foto: BERITAKU / Rizki Aditya</span>
            </figcaption>
        </figure>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <!-- Share Column & Body Content -->
            <div class="lg:col-span-9 flex flex-col md:flex-row gap-8 relative">
                
                <!-- Floating Social Actions -->
                <div class="hidden md:flex flex-col w-12 flex-shrink-0 space-y-4 pt-2 sticky top-24 h-max">
                    <div class="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center mb-2 -rotate-90 origin-bottom whitespace-nowrap -ml-4 mt-6">Bagikan</div>
                    <button class="w-10 h-10 rounded bg-blue-600 text-white flex justify-center items-center hover:bg-blue-700 transition"><span class="material-symbols-outlined text-sm">facebook</span></button>
                    <button class="w-10 h-10 rounded justify-center items-center bg-sky-500 text-white flex hover:bg-sky-600 transition"><span class="material-symbols-outlined text-sm">share</span></button>
                    <button class="w-10 h-10 rounded justify-center items-center bg-green-500 text-white flex hover:bg-green-600 transition"><span class="material-symbols-outlined text-sm">mail</span></button>
                    <button class="w-10 h-10 rounded justify-center items-center border border-gray-300 text-gray-500 flex hover:bg-gray-100 transition"><span class="material-symbols-outlined text-sm">link</span></button>
                </div>

                <!-- Main Content Prose -->
                <div class="prose prose-lg prose-gray max-w-none prose-a:text-primary prose-a:no-underline hover:prose-a:underline font-serif text-gray-800 leading-relaxed font-light">
                    <p><strong class="font-sans pr-2 font-black">JAKARTA, BERITAKU</strong> - Pemerintah Republik Indonesia melalui Kementerian Komunikasi dan Informatika (Kemkominfo) mengumumkan rencana perancangan Undang-Undang baru yang difokuskan pada pengamanan regulasi siber. Hal ini menanggapi keresahan masyarakat atas rentetan kasus kebocoran miliaran data publik di internet pada awal kuartal lalu.</p>
                    
                    <p>Menteri Komunikasi dan Informatika yang hadir langsung pada forum diskusi pakar telematika hari ini, menuturkan bahwa RUU tersebut ditargetkan akan masuk prioritas legislasi pada tahun 2025.</p>

                    <blockquote class="border-l-[6px] border-primary pl-6 my-8 py-2 bg-gray-50 font-medium italic text-xl text-gray-600">
                        "Eskalasi serangan peretasan yang terjadi di lingkup kementerian maupun swasta sudah sangat mengkhawatirkan. Ruang kebebasan digital harus diimbangi oleh sistem perisai hukum yang mutlak, agar hak para netizen terjamin secara konkrit," ujar Menteri.
                    </blockquote>
                    
                    <h3 class="font-sans font-bold text-2xl mt-10 mb-4 tracking-tight">Ancaman Gelombang Serangan Ransomware</h3>
                    <p>Dalam rentang bulan Januari hingga Maret, tercatat lebih dari 500 institusi berskala menengah hingga besar disandera oleh kelompok peretas menggunakan skema serangan <i>ransomware</i>. Pelaku umumnya meminta tebusan berbentuk kripto yang tidak bisa dilacak.</p>

                    <p>Melalui implementasi RUU Siber Baru (Cyber Security Act), institusi kini akan diwajibkan menyusun protokol mitigasi dan pelaporan mandiri jika terjadi anomali trafik pada pusat data mereka. Kegagalan melapor dalam 24 jam dapat dikenai denda administratif mencapai 2% dari profil operasional perusahaan tersebut.</p>

                    <!-- Advert In-article -->
                    <div class="my-8 py-6 border-y border-dashed border-gray-300 flex items-center justify-center bg-gray-50 flex-col">
                        <span class="text-xs uppercase text-gray-400 font-bold mb-2 tracking-widest">Kolom Ads</span>
                        <div class="w-full max-w-[300px] h-[250px] bg-gray-200 flex justify-center items-center text-gray-500">Iklan 300x250</div>
                    </div>

                    <h3 class="font-sans font-bold text-2xl mt-10 mb-4 tracking-tight">Tanggapan Para Pengamat Teknologi</h3>
                    <p>Usulan tersebut mendapat respon beragam. Pegiat hak-hak digital menekankan agar aturan tidak tumpang tindih dengan Undang-Undang ITE lama. "Sanksi pada perusahaan memang perlu, tetapi jangan sampai fokus perburuan justru hanya kepada peretas kecil dan abai membangun infrastrukturnya itu sendiri," kata Dr. Ilham Syah dari ICT Watch Indonesia.</p>

                    <p>Terlepas dari polemik yang ada, naskah akademik dari regulasi tersebut kini tengah disusun oleh tim ahli dan segera dilempar ke uji publik pada akhir bulan depan. Warga diharapkan berpartisipasi memberikan komentar dan masukan.</p>
                </div>
            </div>

            <!-- Article Body Sidebar -->
            <aside class="lg:col-span-3 space-y-8 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-6">
                <!-- Related or Popular Block -->
                <div class="mb-8">
                    <h3 class="text-xs uppercase font-bold tracking-widest text-primary border-b border-gray-200 pb-2 mb-4">Dibaca Banyak Orang Hari Ini</h3>
                    <ul class="space-y-4">
                        <li class="group">
                             <a href="#" class="grid grid-cols-3 gap-3">
                                <img src="${sideImg('1449034446536-5982d109d883')}" class="w-full h-16 object-cover rounded col-span-1 shadow-sm">
                                <h4 class="font-serif font-bold text-sm leading-tight col-span-2 group-hover:text-primary transition line-clamp-3">Merosot 20 Persen, Harga Properti Menengah Ke Bawah Mulai Dilirik</h4>
                             </a>
                        </li>
                        <li class="group">
                             <a href="#" class="grid grid-cols-3 gap-3">
                                <img src="${sideImg('1504384308090-c894fdcc538d')}" class="w-full h-16 object-cover rounded col-span-1 shadow-sm">
                                <h4 class="font-serif font-bold text-sm leading-tight col-span-2 group-hover:text-primary transition line-clamp-3">Analis Perkirakan Adopsi Cloud Akan Capai 90% Perusahaan </h4>
                             </a>
                        </li>
                        <li class="group">
                             <a href="#" class="grid grid-cols-3 gap-3">
                                <img src="${sideImg('1461896836934-ffe607ba8211')}" class="w-full h-16 object-cover rounded col-span-1 shadow-sm">
                                <h4 class="font-serif font-bold text-sm leading-tight col-span-2 group-hover:text-primary transition line-clamp-3">Drama Titik Putih Bawa Tim Tamu Rebut Kembali Mahkota Juara</h4>
                             </a>
                        </li>
                    </ul>
                </div>
            </aside>

        </div>
        
        <!-- Tags & Topics -->
        <div class="mt-12 flex flex-wrap items-center gap-2 pt-8 border-t border-gray-100">
             <span class="font-bold text-sm text-gray-800 mr-2 uppercase tracking-tight">Topik Terkait:</span>
             <a href="#" class="bg-gray-100 hover:bg-primary hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 transition">Regulasi Siber</a>
             <a href="#" class="bg-gray-100 hover:bg-primary hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 transition">Rekomendasi RUU</a>
             <a href="#" class="bg-gray-100 hover:bg-primary hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 transition">Kemkominfo</a>
             <a href="#" class="bg-gray-100 hover:bg-primary hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 transition">Keamanan Data</a>
        </div>
    </article>
    `
}
