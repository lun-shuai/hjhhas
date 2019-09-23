'use strict'

var _mm = require('util/mm.js');

var _user ={
	//1.登出
	logout: function(resolve,reject){		
		_mm.request({
			url: _mm.getServerUrl('/user/logout.do'),
			method: 'POST',
			succese: resolve,
			error: reject
		});	
	},
	checkLogin: function(resolve,reject){		
		_mm.request({
			url: _mm.getServerUrl ('/user/get_user_info.do'),
			method: 'POST',
			succese: resolve,
			error: reject
		})	
	}
}

module.exports = _user;