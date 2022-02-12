const GIGSBOAT_INPUT_DIR = 'gigsboat-eleventy-starter'
const GIGSBOAT_OUTPUT_DIR = 'docs' // For easy deployment to github pages

module.exports = function(eleventyConfig) {
  const markdownIt = require('markdown-it')
  const options = {
    html: true,
  }

  eleventyConfig.setLibrary('md', markdownIt(options).use(require('markdown-it-anchor')))
  eleventyConfig.addPassthroughCopy(`${GIGSBOAT_INPUT_DIR}/styles.css`)

  return {
    dir: {
      input: GIGSBOAT_INPUT_DIR,
      output: GIGSBOAT_OUTPUT_DIR,
    }
  }
}
