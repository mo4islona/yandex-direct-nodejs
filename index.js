module.exports = process.env.YANDEX_DIRECT_COV
    ? require('./lib-cov/yandex-direct')
    : require('./lib/yandex-direct');
