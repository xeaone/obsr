/*
	@preserve
	title: obsr
	version: 1.0.1
	license: mpl-2.0
	author: alexander elias
*/
(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Obsr',b):a.Obsr=b()})(this,function(){'use strict';function a(){}a.prototype.descriptor=function(d,e,f){return{configurable:!0,enumerable:!0,get:function(){return e},set:function(g){e=g,f(d,e)}}},a.prototype.ins=function(d,e,f,g,h){('Object'===h.constructor.name||'Array'===h.constructor.name)&&(h=this.create(h,e,f+g,!0)),'Array'===d.constructor.name&&-1==g&&(g=0,d.splice(g,0,h),d=Object.defineProperty(d,g,this.descriptor(f+g,h,e)),g=d.length-1,h=d[g]),d=Object.defineProperty(d,g,this.descriptor(f+g,h,e)),e(f+g,h)},a.prototype.del=function(d,e,f,g){if('Object'===d.constructor.name)delete d[g];else if('Array'===d.constructor.name){var h=d.length-1;d.splice(g,1),g=h}e(f+g,void 0)},a.prototype.create=function(d,e,f,g){var h,i,j,m;for(i in f?f+='.':f='',m=d.constructor.name,h='Object'===m?{}:[],h=Object.defineProperty(h,'ins',{value:this.ins.bind(this,h,e,f)}),h=Object.defineProperty(h,'del',{value:this.del.bind(this,h,e,f)}),d)j=d[i],m=j.constructor.name,('Object'===m||'Array'===m)&&(j=this.create(j,e,f+i)),h=Object.defineProperty(h,i,this.descriptor(f+i,j,e)),g&&e(f+i,j);return h};return function(d,e){return new a().create(d,e)}});