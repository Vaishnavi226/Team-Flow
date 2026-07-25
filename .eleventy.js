module.exports = function(eleventyConfig) {
  // Passthrough static assets directly to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // Helper filter to detect active navigation page
  eleventyConfig.addFilter("isActive", function(currentUrl, targetUrl) {
    if (!currentUrl || !targetUrl) return false;
    if (targetUrl === '/' || targetUrl === '/index.html') {
      return currentUrl === '/' || currentUrl === '/index.html';
    }
    return currentUrl.startsWith(targetUrl);
  });

  // Eleventy HTML Minification & Whitespace Optimization Transform
  eleventyConfig.addTransform("htmlmin", function(content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      return content
        .replace(/\s+/g, ' ')
        .replace(/<!--(?![\s\S]*?\[if[\s\S]*?\])[\s\S]*?-->/g, '')
        .trim();
    }
    return content;
  });

  return {
    dir: {
      input: ".",
      includes: "includes",
      layouts: "layouts",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
