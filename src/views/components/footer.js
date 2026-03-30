module.exports = () => {
    return `
    <footer class="bg-gray-900 pt-16 pb-8 text-gray-300 mt-12 border-t-[6px] border-primary">
        <div class="max-w-[1240px] mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <!-- Brand Info Section -->
                <div>
                    <h3 class="text-3xl font-serif font-black text-white tracking-tight mb-6">
                        BERITAKU<span class="text-primary">.</span>
                    </h3>
                    <p class="text-sm leading-relaxed mb-6">
                        Portal Berita Terkini, Akurat, dan Terpercaya. Menyajikan informasi terbaru seputar Nasional, Bisnis, Teknologi, Olahraga, dan Hiburan dari seluruh penjuru Nusantara dan Dunia.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition duration-300">
                            <span class="material-symbols-outlined text-lg">facebook</span>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition duration-300">
                            <span class="material-symbols-outlined text-lg">share</span>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition duration-300">
                            <span class="material-symbols-outlined text-lg">play_arrow</span>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition duration-300">
                            <span class="material-symbols-outlined text-lg">public</span>
                        </a>
                    </div>
                </div>

                <!-- Rubrik Section -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-6 uppercase tracking-wider">Kategori Berita</h4>
                    <ul class="space-y-3 font-medium text-sm">
                        <li><a href="/category?name=nasional" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[10px] mr-2">keyboard_arrow_right</span> Nasional</a></li>
                        <li><a href="/category?name=bisnis" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[10px] mr-2">keyboard_arrow_right</span> Bisnis & Keuangan</a></li>
                        <li><a href="/category?name=teknologi" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[10px] mr-2">keyboard_arrow_right</span> Teknologi</a></li>
                        <li><a href="/category?name=olahraga" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[10px] mr-2">keyboard_arrow_right</span> Olahraga</a></li>
                        <li><a href="/category?name=otomotif" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[10px] mr-2">keyboard_arrow_right</span> Otomotif</a></li>
                        <li><a href="/category?name=gaya-hidup" class="hover:text-primary transition flex items-center"><span class="material-symbols-outlined text-[10px] mr-2">keyboard_arrow_right</span> Gaya Hidup</a></li>
                    </ul>
                </div>

                <!-- Perusahaan Section -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-6 uppercase tracking-wider">Korporat</h4>
                    <ul class="space-y-3 font-medium text-sm">
                        <li><a href="/contact" class="hover:text-white transition">Tentang Kami</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Redaksi</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Pedoman Media Siber</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Disclaimer</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Ketentuan Layanan</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Kebijakan Privasi</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Kontak Media & Iklan</a></li>
                    </ul>
                </div>

                <!-- Download App / Newsletter -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-6 uppercase tracking-wider">Berlangganan Newsletter</h4>
                    <p class="text-sm mb-4">Dapatkan update berita pilihan langsung ke email Anda setiap hari.</p>
                    <form class="flex flex-col space-y-3">
                        <input type="email" placeholder="Alamat email Anda" class="bg-gray-800 text-white rounded-md px-4 py-2 border border-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm w-full">
                        <button type="button" class="bg-primary hover:bg-red-700 text-white font-medium rounded-md px-4 py-3 transition duration-300 w-full uppercase tracking-wider text-xs shadow-md">
                            Daftar Sekarang
                        </button>
                    </form>
                </div>
            </div>

            <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
                <p>&copy; ${new Date().getFullYear()} BERITAKU Terkini & Terpercaya. Hak Cipta Dilindungi Undang-Undang.</p>
                <div class="mt-4 md:mt-0 flex space-x-6">
                    <a href="#" class="hover:text-white transition">Syarat & Ketentuan</a>
                    <a href="#" class="hover:text-white transition">Privasi</a>
                </div>
            </div>
        </div>
    </footer>
    `;
};
