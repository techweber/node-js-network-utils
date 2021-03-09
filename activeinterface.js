var network = require('network');

network.get_active_interface(function(err,obj){
	console.log(obj);
});