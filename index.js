'use strict'

import express from "express"

const port = 80

const server = express()

server.get('/', (req, res) => {
	res.send('hi helo')
})

server.listen(port, () => {
	console.log(`Ready to say helo at http://localhost:${port}`)
})
