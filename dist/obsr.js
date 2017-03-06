/*
	@preserve
	title: obsr
	version: 1.0.3
	license: mpl-2.0
	author: alexander elias
*/
function Obsr(){}Obsr.prototype.descriptor=function(a,b,d){return{configurable:!0,enumerable:!0,get:function(){return b},set:function(e){b=e,d(a,b)}}},Obsr.prototype.ins=function(a,b,d,e,f){('Object'===f.constructor.name||'Array'===f.constructor.name)&&(f=this.create(f,b,d+e,!0)),'Array'===a.constructor.name&&-1==e&&(e=0,a.splice(e,0,f),a=Object.defineProperty(a,e,this.descriptor(d+e,f,b)),e=a.length-1,f=a[e]),a=Object.defineProperty(a,e,this.descriptor(d+e,f,b)),b&&b(d+e,f)},Obsr.prototype.del=function(a,b,d,e){if('Object'===a.constructor.name)delete a[e];else if('Array'===a.constructor.name){var f=a.length-1;a.splice(e,1),e=f}b&&b(d+e,void 0)},Obsr.prototype.create=function(a,b,d,e){var f,g,h,i;for(g in d?d+='.':d='',i=a.constructor.name,f='Object'===i?{}:[],f=Object.defineProperty(f,'ins',{value:this.ins.bind(this,f,b,d)}),f=Object.defineProperty(f,'del',{value:this.del.bind(this,f,b,d)}),a)h=a[g],i=h.constructor.name,('Object'===i||'Array'===i)&&(h=this.create(h,b,d+g)),f=Object.defineProperty(f,g,this.descriptor(d+g,h,b)),e&&b&&b(d+g,h);return f},module.exports=function(a,b){return new Obsr().create(a,b)};