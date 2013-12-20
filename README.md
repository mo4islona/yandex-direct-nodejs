Yandex Direct API wrapper 0.1.1
====================
[![NPM](https://nodei.co/npm/yandex-direct.png?stars&downloads)](https://nodei.co/npm/yandex-direct/)

Wrapper for Yandex Direct API (JSON) http://api.yandex.com/direct/

Usage
```
var YandexDirect = require('yandex-direct');

var api = YandexDirect({
    token: '09d9ae29555d44f836020e286d99892', // required.
    locale: en, // optional; default is 'en'.
    live: true, // optional; default is false.
    sandbox: false, // optional; default is false.
    version: 4 // optional; default is 4.
    url: 'http://url.com' // optional; instead of 'live', 'sandbox', 'version' you can put this. Considering for tests.
});

// Request without params.
api.call('GetVersion', function(err, data){
    // data == 4;
    //do something
});

// Request with params.
api.call('GetCampaignParams', {CampaignID: 1111111}, function(err, data){
    // data is CampaignInfo
});
```