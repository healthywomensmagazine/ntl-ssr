//
exports.handler = async (event, context) => {

	return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>SSR Page</title>
                </head>
                <body>
                    ${event.path}
                </body>
            </html>
        `
    }
}
