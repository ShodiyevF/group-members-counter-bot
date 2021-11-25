const { groupsbymembers } = require('./ctrl')

const express = require('express')
const router = express.Router()

router.get('/groups', (req, res) => groupsbymembers(req, res))

module.exports = router