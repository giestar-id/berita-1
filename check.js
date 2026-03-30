try {
  require('./src/views/layouts/layout.js');
  console.log("No syntax errors in layout and its dependencies");
} catch(e) {
  console.log("Error in layout:");
  console.log(e.stack);
}

try {
  require('./src/views/pages/home.js');
  console.log("No syntax errors in home");
} catch(e) {
  console.log("Error in home:");
  console.log(e.stack);
}

try {
  require('./src/views/pages/article.js');
  console.log("No syntax errors in article");
} catch(e) {
  console.log("Error in article:");
  console.log(e.stack);
}

try {
  require('./src/route.js');
  console.log("No syntax errors in route");
} catch(e) {
  console.log("Error in route:");
  console.log(e.stack);
}
