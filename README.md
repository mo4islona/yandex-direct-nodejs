yandex-direct-nodejs 0.1.0
====================

Wrapper for Yandex Direct API (JSON)

Usage
```
var YandexDirect = require('yandex-direct');

var api = YandexDirect({
    token: '09d9ae29555d44f836020e286d99892', // required.
    locale: en, // optional; default is 'en'.
    live: true, // optional; default is false.
    sandbox: true, // optional; default is false.
    version: 4 // optional; default is 4.
});

// Request without params.
api.call('GetVersion', function(err, data){
    //do something
});

// Request with params.
api.call('GetCampaignParams', {CampaignID: 7745629}, function(err, data){
    //do something
});
```