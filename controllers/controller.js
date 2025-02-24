async function testServer(req, res) {
    consolejson.log('Server is running correctly backend-test');
    res.status(200).json({ message: 'Server is running correctly backend-test' });
}

module.exports = {
    testServer
}