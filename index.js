var faker = require('faker')

var Log = require('log')
var log = new Log('debug')

var fakeIP = faker.internet.ip()
log.debug('fakeIP = ' + fakeIP)
var fakeUA = faker.internet.userAgent()
log.debug('fakeUA = ' + fakeUA)

var fakeHeaders = {
    'X-Forwarded-For': fakeIP,
    'User-Agent': fakeUA
}

var fakeUserName = faker.internet.userName()
log.debug('fakeUserName = ' + fakeUserName)
var fakeEmail = faker.internet.email()
log.debug('fakeEmail = ' + fakeEmail)

faker.locale = 'zh_CN'
var fakeRealName = faker.name.firstName() + faker.name.lastName()
log.debug('fakeRealName = ' + fakeRealName)
var fakeMobile = faker.phone.phoneNumber('13#########')
log.debug('fakeMobile = ' + fakeMobile)

var fakeRegData = {
    'username': fakeUserName,
    'email': fakeEmail,
    'password': 'password',
    'password1': 'password',
    'realName': fakeRealName,
    'province': '北京市',
    'job': 'IT|互联网|通信',
    'mobile': fakeMobile,
    'address': ''
}