const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const pluginMermaid = require('@kevingimbel/eleventy-plugin-mermaid');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css/');
    eleventyConfig.addPassthroughCopy('images/');
    eleventyConfig.addPassthroughCopy('js/');

    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('manifest.json');

    eleventyConfig.setLiquidOptions({
        root: ['_includes']
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginMermaid);
};
