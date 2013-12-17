var request = require('request');

const API = 'https://api.direct.yandex.ru/';

const DEFAULT_CONF = {live: false, version: 4};

function deepMerge(target, source) {
    for (var key in source) {
        var original = target[key];
        var next = source[key];
        if (original && next && typeof next == "object") {
            deepMerge(original, next);
        } else if (original == undefined) {
            target[key] = next;
        }
    }
    return target;
}

function YandexDirect(options) {
    if (!(this instanceof YandexDirect)) {
        return new YandexDirect(options);
    }
    options = deepMerge(options || {}, DEFAULT_CONF);
    var url = API;
    if (options.live) {
        url += 'live/';
    }
    url += 'v' + options.version + '/json/';
    this.url = url;
    this.token = options.token;
    this.options = options;
    return this;
}

YandexDirect.prototype.call = function(method, params, cb) {
    if (typeof params == "function") {
        cb = params;
        params = {};
    }
    request({
        method: 'post',
        json: true,
        uri: this.url,
        body: {
            method: method,
            token: this.token,
            param: params
        }
    }, this.callback(cb));
};

YandexDirect.prototype.callback = function(cb) {
    return function(e, r, body){
        if (!e && r.statusCode == 200 && body) {
            if (body.data) {
                cb(null, body.data);
            } else {
                cb({
                    code: body.error_code,
                    message: body.error_str,
                    detail: body.error_detail
                });
            }
            return;
        }
        cb({error: e, response: r});
    }
};

module.exports = YandexDirect;
