var YandexDirect = require('./index');

var api = YandexDirect({
    token: '09d9ae29550f438f836020e286d99892',
    live: true,
    version: 4
});

console.log(api);

api.call('GetCampaignsList', function(err, data){
    api.call('GetCampaignParams', {CampaignID: 7745629}, function(err, data){
        console.log(err, data);
    });
});
