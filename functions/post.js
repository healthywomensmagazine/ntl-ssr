const fs = require('fs')
const MarkdownIt = require('markdown-it')
   
exports.handler = async (event) => {

    const { postId } = event.queryStringParameters;
    const fileContents = fs.readFileSync(`./posts/post-${postId}.md`, 'utf8')
    const md = new MarkdownIt();
    const result = md.render(fileContents);
    

	return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html",
        },
        body: result,
    }
}
