const fs = require('fs');
const path = require('path');
const front = require('yaml-front-matter');
const marked = require('marked');
const blogdir = 'content/blog/'
const files = fs.readdirSync(blogdir);

// Loop them all with the new for...of
const posts = []
for(const file of files) {
  const slug = file.split('.')[0]
  const data = front.loadFront(fs.readFileSync(blogdir + file).toString())
  const title = data.title
  const html = marked(data.__content)
  posts.push({title, slug, html})
}

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
