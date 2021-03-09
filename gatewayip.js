var network = require('network');

network.get_gateway_ip(function(err,ip){
	console.log(err || ip);
});