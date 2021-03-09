var network = require('network');

network.get_public_ip(function(err,ip){
	console.log(err || ip);
});

