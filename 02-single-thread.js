const http = require('http')

const server = http.createServer((req, res) => {
    res.end('srver starting')
})
server.listen(8080, () => {
    console.log('服务启动')
})