'use strict'

require('./index.css');
require('../common/nav-simple/index.css');
var _mm = require('util/mm.js');

$(function(){
//	通过浏览器地址栏获取参数,然后拼接成class,再把class选择器丢进
//	$()里面进行元素
	var type = _mm.getUrlParam('type') || 'default',
	$element = $('.'+ type + '-success');
	$element.show();
})