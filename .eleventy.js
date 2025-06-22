module.exports = async function(eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
  const pluginRss = await import("@11ty/eleventy-plugin-rss");
  const pluginSyntaxHighlight = await import("@11ty/eleventy-plugin-syntaxhighlight");
  const pluginNavigation = await import("@11ty/eleventy-navigation");
  const Image = await import("@11ty/eleventy-img");
  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginRss.default);
  eleventyConfig.addPlugin(pluginSyntaxHighlight.default);
  eleventyConfig.addPlugin(pluginNavigation.default);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/cdn.min.js": "assets/js/alpine.js",
    "node_modules/lucide/dist/umd/lucide.js": "assets/js/lucide.js"
  });
  eleventyConfig.addPassthroughCopy("src/_includes/js/view-transitions.js");

  // Watch targets
  eleventyConfig.addWatchTarget("src/_includes/css/");

  // Image shortcode with modern optimization
  eleventyConfig.addShortcode("image", async function(src, alt, sizes = "100vw") {
    if (!alt) {
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    let metadata = await Image.default(src, {
      widths: [300, 600, 900, 1200],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/assets/images/",
      urlPath: "/assets/images/",
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Development server settings
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080,
    watch: [],
    showVersion: true,
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};