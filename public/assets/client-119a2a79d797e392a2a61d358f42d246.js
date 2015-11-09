"use strict";define("client/app",["exports","ember","ember/resolver","ember/load-initializers","client/config/environment"],function(e,t,n,i,r){var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),i["default"](a,r["default"].modulePrefix),e["default"]=a}),define("client/components/app-version",["exports","ember-cli-app-version/components/app-version","client/config/environment"],function(e,t,n){var i=n["default"].APP,r=i.name,a=i.version;e["default"]=t["default"].extend({version:a,name:r})}),define("client/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("client/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("client/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","client/config/environment"],function(e,t,n){var i=n["default"].APP,r=i.name,a=i.version;e["default"]={name:"App Version",initialize:t["default"](r,a)}}),define("client/initializers/export-application-global",["exports","ember","client/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var i,r=n["default"].exportApplicationGlobal;i="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[i]||(window[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[i]}}))}}e.initialize=i,e["default"]={name:"export-application-global",initialize:i}}),define("client/router",["exports","ember","client/config/environment"],function(e,t,n){var i=t["default"].Router.extend({location:n["default"].locationType});i.map(function(){}),e["default"]=i}),define("client/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"client/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var i=e.createTextNode("Welcome to Express Ember");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,2,2,n),i},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("client/config/environment",["ember"],function(e){var t="client";try{var n=t+"/config/environment",i=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(i));return{"default":r}}catch(a){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("client/tests/test-helper"):require("client/app")["default"].create({name:"client",version:"0.0.0+6d2504a3"});