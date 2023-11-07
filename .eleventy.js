const pluginMermaid = require('@kevingimbel/eleventy-plugin-mermaid');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css/');
    eleventyConfig.addPassthroughCopy('images/');
    eleventyConfig.addPassthroughCopy('js/');

    eleventyConfig.addPassthroughCopy('manifest.json');

    eleventyConfig.addPlugin(pluginMermaid);
};
