const navbar = require('../components/navbar');
const footer = require('../components/footer');

module.exports = (content, title = 'Portal Berita - Terkini & Terpercaya') => {
    return `<!DOCTYPE html>
<html class="light" lang="id">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>${title}</title>
    <!-- Google Fonts: Inter & Merriweather (for news titles) -->
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
    <!-- Material Symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries,typography"></script>
    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#e11d48", // rose-600
                        "primary-content": "#ffffff",
                        "background-light": "#f1f5f9", // slate-100 (subtle background for modern news)
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "serif": ["Merriweather", "serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Merriweather', serif; }
        /* Line clamp utilities for news excerpts */
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
    </style>
</head>
<body class="bg-background-light text-slate-900 font-display overflow-x-hidden antialiased">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        ${navbar()}
        <!-- Main Content -->
        <main class="flex-grow w-full max-w-[1240px] mx-auto bg-white shadow-sm min-h-screen">
            ${content}
        </main>
        ${footer()}
    </div>
    <script src="/js/app.js"></script>
    <!-- Add some extra script for responsive nav if needed -->
    <script>
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          menu.classList.add('flex');
        } else {
          menu.classList.add('hidden');
          menu.classList.remove('flex');
        }
      }
    </script>
</body>
</html>`;
};
