'use strict'

import express from 'express'

const port = 8000
const host = '192.168.1.10'

const app = express()

app.get('/*', (req, res) => {
	console.log(`${req.hostname}${req.originalUrl}`)

	res.status(302)
	res.send(
		"<html>" +
		"<head>" +
		"	<title>Isacc's Lights</title>" +
		"</head>" +
		"<body>" +
		"	<form>" +
		"		<input />" +
		"		<input />" +
		"	</form>" +
		"</body>" +
		"</html>"
	)
})

app.listen(port, host, () => {
	console.log(`Listening on http://${host}:${port}`)
})
