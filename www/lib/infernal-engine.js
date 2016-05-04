!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.InfernalEngine=e():t.InfernalEngine=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(e){"use strict";function i(t){this._facts={},this._rules={},this._relations={},this._changes=null,this._trace=null,this._agenda=new s,this._infering=!1,this.timeout=5e3,t&&(this.timeout=t)}function r(t,e,n){var i=typeof e;if("object"===i&&e instanceof Date&&(i="date"),"object"===i&&e instanceof Array&&(i="array"),"function"===i){if(!n)return;this.addRule(t,e)}else if("object"===i)for(var o in e)r.call(this,t+"/"+o,e[o],n);else this.set(t,e)}function o(t){if(void 0!==this._relations[t]){var e=this._relations[t];for(var n in e)e.hasOwnProperty(n)&&"undefined"==typeof this._agenda[n]&&(this._agenda[n]=new u(this,n))}}var s=n(2),a=n(3),u=n(4);t.exports=i,i.prototype.reset=function(){this._facts={},this._rules={},this._relations={},this._changes=null,this._agenda=new s,this._infering=!1,"function"==typeof this._trace&&e.nextTick(function(){this._trace({action:"reset"})}.bind(this))},i.prototype.get=function(t){if("/"!==t.charAt(0))return this.get("/"+t);var e=a.digPath.call(this,this._facts,t);if(void 0!==e)return e.data[e.name]},i.prototype.set=function(t,n,i){if("/"!==t.charAt(0))return this.set("/"+t,n,i);var r=this.get(t);if(!a.equals(r,n)){var s=a.digPath.call(this,this._facts,t,!0);this._changes&&(this._changes[s.fullName]=n);var r=s.data[s.name];s.data[s.name]=n,o.call(this,t),"function"!=typeof this._trace||this._infering||e.nextTick(function(){this._trace({action:"set",fact:t,oldValue:r,newValue:n})}.bind(this)),i&&this.infer(function(t){return t?void i(t):void i(null,this.getChanges())}.bind(this))}return this},i.prototype.notify=function(t){return"/"!==t.charAt(0)?this.notify("/"+t,value):(o.call(this,t),"function"!=typeof this._trace||this._infering||e.nextTick(function(){this._trace({action:"notify",fact:t,newValue:value})}.bind(this)),this)},i.prototype.addRule=function(t,e){"function"==typeof t&&(e=t,t="/"+e.name),0!==t.indexOf("/")&&(t="/"+t);var n,i=e.toString(),r=/this\.get\(["']?(.*?)["']?\)/gm,o=r.exec(i);for(this._rules[t]=e;o;){var s=a.getContext("/",t);n=a.getFullName(s,o[1]),void 0===this._relations[n]&&(this._relations[n]={}),this._relations[n][t]=!0,o=r.exec(i)}return"function"==typeof this._trace&&this._trace({action:"addRule",rule:t}),this},i.prototype.getDiff=function(){var t={};for(var e in this._changes){var n=a.digPath(t,e,!0);n.data[n.name]=this.get(e)}return t},i.prototype.getChanges=function(){return a.deepCopy(this._changes)},i.prototype.getFacts=function(){return a.deepCopy(this._facts)},i.prototype.setFacts=function(t){return r.call(this,"",t),this},i.prototype.load=function(t){return this.reset(),r.call(this,"",t,!0),this},i.prototype.infer=function(t,n){if("function"==typeof t){var i=t;return void this.infer(this.timeout,i)}if(this._agenda.isEmpty())return this._infering=!1,clearTimeout(this.timeoutId),void n();if(t>0&&(this._infering=!0,this._changes={},this.timeoutId=setTimeout(function(){this._infering=!1,n(new Error("Inference timed out after "+t+" ms"))}.bind(this),t),"function"==typeof this._trace&&e.nextTick(function(){this._trace({action:"infer"})}.bind(this))),this._infering===!1)return void n(new Error("The timeout parameter must be grater than zero to start infering."));var r=this._agenda.shift();return e.nextTick(function(){r._executeRule(function(t){return t?(this._infering=!1,clearTimeout(this.timeoutId),void n(t)):void(this._infering&&this.infer(0,n))}.bind(this))}.bind(this)),this},i.prototype.startTracing=function(t){if(!t)throw new Error("The parameter 'traceFunction' is mandatory.");return this._trace=t,this},i.prototype.stopTracing=function(){return this._trace=null,this}}).call(e,n(1))},function(t,e){function n(){f=!1,s.length?u=s.concat(u):c=-1,u.length&&i()}function i(){if(!f){var t=setTimeout(n);f=!0;for(var e=u.length;e;){for(s=u,u=[];++c<e;)s&&s[c].run();c=-1,e=u.length}s=null,f=!1,clearTimeout(t)}}function r(t,e){this.fun=t,this.array=e}function o(){}var s,a=t.exports={},u=[],f=!1,c=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new r(t,e)),1!==u.length||f||setTimeout(i,0)},r.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=o,a.addListener=o,a.once=o,a.off=o,a.removeListener=o,a.removeAllListeners=o,a.emit=o,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e){"use strict";function n(){}t.exports=n,n.prototype.shift=function(){for(var t in this)if("shift"!==t&&"isEmpty"!==t){var e=this[t];return delete this[t],e}},n.prototype.isEmpty=function(){for(var t in this)if("shift"!==t&&"isEmpty"!==t)return!1;return!0}},function(t,e){"use strict";function n(t,e,n){for(var i=e.split(/\//g),r=[t],o=t,s="";i.length>1;){var a=i.shift();if(".."===a)0!==r.length&&(r.pop(),o=0===r.length?t:r[r.length-1]);else if(""!==a){if(s+="/"+a,!o[a]){if(!n)return;o[a]={}}o=o[a],r.push(o)}}return{data:r.pop(),name:i[0],fullName:s+"/"+i[0]}}function i(t,e){var n=r(t,e),i=n.lastIndexOf("/");return n.substring(0,i+1)}function r(t,e){if(!t||0!==t.indexOf("/"))throw new Error("context must start with a '/'. Value: '"+t+"'");if(0===e.indexOf("/"))return r(e,"");for(var n=t.split("/"),i=e.split("/"),o=n.concat(i),s=[],a=0;a<o.length;a++){var u=o[a];0!==a&&""===u||(".."===u?s.length>1&&s.pop():s.push(u))}for(var f="",a=0;a<s.length;a++)a>0&&(f+="/"),f+=s[a];return f}function o(t,e){var n=typeof e;if("object"!==n)return o({},t);if("object"!==n||e instanceof Date)throw new Error("The 'source' parameter must be an object.");for(var i in e){var r=typeof e[i];"object"!==r||null===e[i]||e[i]instanceof Date||e[i]instanceof Array?"function"!==r&&(t[i]=e[i]):(t[i]=t[i]||{},o(t[i],e[i]))}return t}function s(t,e){var n=t;t instanceof Date&&(n=t.getTime());var i=e;return e instanceof Date&&(i=e.getTime()),n===i&&typeof t==typeof e}e.digPath=n,e.getContext=i,e.getFullName=r,e.deepCopy=o,e.equals=s},function(t,e,n){(function(e){"use strict";function i(t,e){this.engine=t,this.ruleName=e,this.context=r.getContext("/",e)}var r=n(3);t.exports=i,i.prototype.get=function(t){var e=r.getFullName(this.context,t);return this.engine.get(e)},i.prototype.set=function(t,n){var i=r.getFullName(this.context,t),o=this.engine.get(i);if(this.engine.set(i,n),"function"==typeof this.engine._trace&&!r.equals(o,n)){var s=this;e.nextTick(function(){s.engine._trace({action:"set",rule:s.ruleName,fact:i,oldValue:o,newValue:n})})}return this},i.prototype.notify=function(t){var e=r.getFullName(this.context,t);return this.engine.notify(e),this},i.prototype.trace=function(t){if("function"==typeof this.engine._trace){var n=this;e.nextTick(function(){n.engine._trace({action:"trace",rule:n.ruleName,message:t})})}return this},i.prototype._executeRule=function(t){return this.engine._rules[this.ruleName].call(this,t),this}}).call(e,n(1))}])});
//# sourceMappingURL=infernal-engine.min.js.map