var network = require('network');

network.get_private_ip(function(err,ip){
	console.log(err || ip);
});