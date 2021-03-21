module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/icons");
    eleventyConfig.addPassthroughCopy("assets/fonts");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data-live");
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("shortcuts-design-social.jpg");
    eleventyConfig.addPassthroughCopy("shortcuts-design-favicon.ico");
    eleventyConfig.addPassthroughCopy("shortcuts-design-favicon.png");
}


const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['assets/img/*.{jpg,png}'], {
        destination: '_site/assets/img',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.7, 0.9]
            })
        ]
    });

    console.log(files);
})();