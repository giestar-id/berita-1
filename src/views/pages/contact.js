module.exports = () => {
    return `
    <div class="px-4 py-8 max-w-5xl mx-auto">
        <!-- Breadcrumbs -->
        <div class="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
            <a href="/" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[14px]">home</span></a>
            <span class="mx-2">/</span>
            <span class="text-primary truncate w-64 md:w-auto">Bantuan & Corporate</span>
        </div>

        <div class="flex flex-col border-b border-gray-100 pb-10 mb-10">
            <h1 class="text-4xl md:text-5xl font-black font-serif uppercase tracking-tight text-gray-900 mb-6">
                Redaksi & Informasi Perusahaan
            </h1>
            <p class="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
                BERITAKU adalah jaringan portal berita independen di Indonesia yang fokus menyajikan jurnalisme bermutu dan membangun ekosistem informasi digital yang terpercaya. 
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <!-- Contact Addresses -->
            <div class="space-y-10">
                <div>
                     <h3 class="flex items-center text-xl font-bold font-serif border-l-4 border-primary pl-4 mb-4">
                        <span class="material-symbols-outlined text-primary mr-2">location_on</span>
                        Kantor Pusat
                     </h3>
                     <address class="not-italic text-gray-600 leading-relaxed font-light pl-6">
                        Gedung Menara Jurnalis Lt. 15<br>
                        Jalan Jenderal Sudirman Kav. 45<br>
                        Jakarta Pusat, 10220, Indonesia<br>
                     </address>
                </div>

                <div>
                     <h3 class="flex items-center text-xl font-bold font-serif border-l-4 border-primary pl-4 mb-4">
                        <span class="material-symbols-outlined text-primary mr-2">contact_support</span>
                        Layanan Kontak
                     </h3>
                     <ul class="text-gray-600 leading-relaxed font-light pl-6 space-y-2">
                        <li><strong class="font-bold text-gray-800 uppercase tracking-widest text-[11px]">Telepon:</strong> +62 21 555-0198</li>
                        <li><strong class="font-bold text-gray-800 uppercase tracking-widest text-[11px]">Redaksi:</strong> redaksi@beritaku.co.id</li>
                        <li><strong class="font-bold text-gray-800 uppercase tracking-widest text-[11px]">Iklan/Bisnis:</strong> ads@beritaku.co.id</li>
                        <li><strong class="font-bold text-gray-800 uppercase tracking-widest text-[11px]">Kerjasama:</strong> partnership@beritaku.co.id</li>
                     </ul>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-gray-50 border border-gray-100 p-8 pt-10 rounded-md relative shadow-sm">
                <span class="absolute top-0 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-md">Tinggalkan Pesan</span>
                <h3 class="text-2xl font-bold font-serif mb-6 text-gray-800">Kirim Masukan</h3>
                
                <form class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5" for="name">Nama Lengkap</label>
                            <input class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition text-sm" id="name" type="text" placeholder="John Doe">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5" for="email">Alamat Email</label>
                            <input class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition text-sm" id="email" type="email" placeholder="john@example.com">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5" for="topic">Topik Pesan</label>
                        <select class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition text-sm appearance-none bg-white" id="topic">
                            <option>Saran / Masukan Redaksi</option>
                            <option>Pertanyaan Pemasangan Iklan</option>
                            <option>Koreksi Berita (Hak Jawab)</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1.5" for="message">Pesan Anda</label>
                        <textarea class="w-full px-4 py-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition text-sm" id="message" rows="5" placeholder="Ketikan pesan anda disini..."></textarea>
                    </div>
                    <div class="pt-2">
                        <button class="w-full sm:w-auto bg-primary text-white font-bold tracking-widest uppercase text-xs px-8 py-3 rounded shadow hover:bg-red-800 hover:shadow-lg transition-all" type="button">Kirim Pesan Sekarang</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Pedoman Media Siber Snippet -->
        <div class="mt-8 pt-8 border-t border-gray-200">
            <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Ringkasan Pedoman Media Siber</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-2">Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB. Keberadaan media siber di Indonesia juga merupakan bagian dari kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers.</p>
            <a href="#" class="text-xs text-primary font-bold hover:underline transition">Baca Pedoman Selengkapnya &rarr;</a>
        </div>
    </div>
    `;
};
