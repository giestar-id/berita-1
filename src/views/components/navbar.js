module.exports = () => {
    // Generate current date for the top bar
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('id-ID', options);

    return `
    <header class="w-full bg-white border-b border-gray-200">
        <!-- Top Bar -->
        <div class="bg-gray-100 text-xs text-gray-500 py-1">
            <div class="max-w-[1240px] mx-auto px-4 flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <span>${today}</span>
                    <a href="/contact" class="hover:text-primary transition">Redaksi</a>
                    <a href="#" class="hover:text-primary transition">Pedoman Media Siber</a>
                </div>
                <div class="flex items-center space-x-3">
                    <a href="#" class="hover:text-blue-600 transition"><span class="material-symbols-outlined text-sm">facebook</span></a>
                    <a href="#" class="hover:text-blue-400 transition"><span class="material-symbols-outlined text-sm">alternate_email</span></a>
                    <button class="flex items-center hover:text-primary transition">
                        <span class="material-symbols-outlined text-[16px]">light_mode</span>
                    </button>
                    <a href="#" class="text-primary font-medium hover:underline">Login / Register</a>
                </div>
            </div>
        </div>

        <!-- Main Logo Area -->
        <div class="max-w-[1240px] mx-auto px-4 py-6 flex justify-between items-center bg-white relative">
            <!-- Mobile Menu Button -->
            <button onclick="toggleMenu()" class="lg:hidden text-gray-700 hover:text-primary transition">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>

            <!-- Logo -->
            <a href="/" class="flex flex-col items-center lg:items-start group text-center lg:text-left">
                <span class="text-4xl font-serif font-black tracking-tight text-primary drop-shadow-sm group-hover:opacity-90 transition">
                    BERITAKU
                </span>
                <span class="text-[11px] font-medium tracking-[0.2em] text-gray-500 uppercase mt-1 hidden sm:block">
                    Terkini & Terpercaya
                </span>
            </a>

            <!-- Advertisement space or Search (Desktop) -->
            <div class="hidden lg:flex items-center space-x-2">
                <div class="relative">
                    <input type="text" placeholder="Cari Berita..." class="border border-gray-300 rounded-full pl-4 pr-10 py-2 w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition">
                    <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                        <span class="material-symbols-outlined text-xl">search</span>
                    </button>
                </div>
            </div>

            <!-- Mobile Search Icon -->
             <button class="lg:hidden text-gray-700 hover:text-primary transition">
                <span class="material-symbols-outlined text-2xl">search</span>
            </button>
        </div>

        <!-- Navigation Categories -->
        <nav class="bg-primary text-white sticky top-0 z-50 shadow-md">
            <div class="max-w-[1240px] mx-auto px-4">
                <ul class="hidden lg:flex space-x-1 uppercase text-sm font-semibold tracking-wide">
                    <li><a href="/" class="block px-4 py-3 hover:bg-red-700 transition">Halaman Utama</a></li>
                    <li><a href="/category?name=nasional" class="block px-4 py-3 hover:bg-red-700 transition">Nasional</a></li>
                    <li><a href="/category?name=bisnis" class="block px-4 py-3 hover:bg-red-700 transition">Bisnis</a></li>
                    <li><a href="/category?name=teknologi" class="block px-4 py-3 hover:bg-red-700 transition">Teknologi</a></li>
                    <li><a href="/category?name=olahraga" class="block px-4 py-3 hover:bg-red-700 transition">Olahraga</a></li>
                    <li><a href="/category?name=otomotif" class="block px-4 py-3 hover:bg-red-700 transition">Otomotif</a></li>
                    <li><a href="/category?name=gaya-hidup" class="block px-4 py-3 hover:bg-red-700 transition">Gaya Hidup</a></li>
                    <li><a href="/category?name=hiburan" class="block px-4 py-3 hover:bg-red-700 transition">Hiburan</a></li>
                    <li class="ml-auto"><a href="/category?name=indeks" class="block px-4 py-3 bg-red-800 hover:bg-red-900 transition flex items-center">Indeks <span class="material-symbols-outlined text-sm ml-1">list</span></a></li>
                </ul>
            </div>
        </nav>

        <!-- Mobile Menu (Hidden by default) -->
        <nav id="mobile-menu" class="hidden lg:hidden bg-white border-b border-gray-200 flex flex-col absolute w-full z-40 shadow-xl">
            <ul class="flex flex-col text-sm font-semibold text-gray-800 uppercase divide-y divide-gray-100">
                <li><a href="/" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Halaman Utama</a></li>
                <li><a href="/category?name=nasional" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Nasional</a></li>
                <li><a href="/category?name=bisnis" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Bisnis</a></li>
                <li><a href="/category?name=teknologi" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Teknologi</a></li>
                <li><a href="/category?name=olahraga" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Olahraga</a></li>
                <li><a href="/category?name=otomotif" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Otomotif</a></li>
                <li><a href="/category?name=gaya-hidup" class="block px-6 py-4 hover:text-primary hover:bg-gray-50 transition">Gaya Hidup</a></li>
            </ul>
        </nav>
    </header>
    `;
};
