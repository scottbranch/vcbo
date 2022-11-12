
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/egrucza/Projects/vcbo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/egrucza/Projects/vcbo/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/egrucza/Projects/vcbo/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/egrucza/Projects/vcbo/src/pages/index.js")),
  "component---src-pages-page-slug-js": preferDefault(require("/Users/egrucza/Projects/vcbo/src/pages/{Page.slug}.js"))
}

