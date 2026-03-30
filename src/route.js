const layout = require('./views/layouts/layout.js');
const homeView = require('./views/pages/home.js');
const categoryView = require('./views/pages/category.js');
const articleView = require('./views/pages/article.js');
const contactView = require('./views/pages/contact.js');

module.exports = {
    '/': (query) => {
        return layout(homeView(), 'Portal Berita - Beranda');
    },
    '/category': (query) => {
        const categoryName = query.name || 'Terbaru';
        // Capitalize first letter
        const titleName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
        return layout(categoryView(categoryName), `Berita ${titleName} - Portal Berita`);
    },
    '/article': (query) => {
        const articleId = query.id || '1';
        return layout(articleView(articleId), 'Baca Artikel - Portal Berita');
    },
    '/contact': (query) => {
        return layout(contactView(), 'Hubungi Kami - Portal Berita');
    },
};
