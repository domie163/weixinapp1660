(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xuesheng-add-or-update"],{1304:function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var a=i(t("3b8d")),o=i(t("e2b1")),n={data:function(){return{cross:"",ruleForm:{xuehao:"",mima:"",touxiang:"",xueshengxingming:"",xingbie:"",shoujihaoma:"",youxiang:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xuehao:!1,mima:!1,touxiang:!1,xueshengxingming:!1,xingbie:!1,shoujihaoma:!1,youxiang:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var t,i,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("xuesheng",this.ruleForm.id);case 12:i=r.sent,this.ruleForm=i.data;case 14:if(this.cross=e.cross,!e.cross){r.next=50;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 18:if((r.t1=r.t0()).done){r.next=50;break}if(o=r.t1.value,"xuehao"!=o){r.next=24;break}return this.ruleForm.xuehao=a[o],this.ro.xuehao=!0,r.abrupt("continue",18);case 24:if("mima"!=o){r.next=28;break}return this.ruleForm.mima=a[o],this.ro.mima=!0,r.abrupt("continue",18);case 28:if("touxiang"!=o){r.next=32;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,r.abrupt("continue",18);case 32:if("xueshengxingming"!=o){r.next=36;break}return this.ruleForm.xueshengxingming=a[o],this.ro.xueshengxingming=!0,r.abrupt("continue",18);case 36:if("xingbie"!=o){r.next=40;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,r.abrupt("continue",18);case 40:if("shoujihaoma"!=o){r.next=44;break}return this.ruleForm.shoujihaoma=a[o],this.ro.shoujihaoma=!0,r.abrupt("continue",18);case 44:if("youxiang"!=o){r.next=48;break}return this.ruleForm.youxiang=a[o],this.ro.youxiang=!0,r.abrupt("continue",18);case 48:r.next=18;break;case 50:this.styleChange();case 51:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,t,i,a,o,n,d,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.xuehao){r.next=3;break}return this.$utils.msg("学号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){r.next=9;break}return this.$utils.msg("手机号码应输入手机格式"),r.abrupt("return");case 9:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 12:if(!this.cross){r.next=28;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){r.next=28;break}if(n=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=24;break}for(d in n)d==a&&(n[d]=o);return s=uni.getStorageSync("crossTable"),r.next=22,this.$api.update("".concat(s),n);case 22:r.next=28;break;case 24:e=Number(uni.getStorageSync("userid")),t=n["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 28:if(!t||!e){r.next=50;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=t,u={page:1,limit:10,crossuserid:e,crossrefid:t},r.next=34,this.$api.list("xuesheng",u);case 34:if(l=r.sent,!(l.data.total>=i)){r.next=40;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 40:if(!this.ruleForm.id){r.next=45;break}return r.next=43,this.$api.update("xuesheng",this.ruleForm);case 43:r.next=47;break;case 45:return r.next=47,this.$api.add("xuesheng",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:r.next=58;break;case 50:if(!this.ruleForm.id){r.next=55;break}return r.next=53,this.$api.update("xuesheng",this.ruleForm);case 53:r.next=57;break;case 55:return r.next=57,this.$api.add("xuesheng",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},1680:function(r,e,t){"use strict";var i=t("f745"),a=t.n(i);a.a},"4cb3":function(r,e,t){"use strict";var i,a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("学号")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(16, 55, 94, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx 2rpx 2rpx 8rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:r.ro.xuehao,placeholder:"学号"},model:{value:r.ruleForm.xuehao,callback:function(e){r.$set(r.ruleForm,"xuehao",e)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(16, 55, 94, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx 2rpx 2rpx 8rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("头像")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.touxiang,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("学生姓名")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(16, 55, 94, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx 2rpx 2rpx 8rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:r.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:r.ruleForm.xueshengxingming,callback:function(e){r.$set(r.ruleForm,"xueshengxingming",e)},expression:"ruleForm.xueshengxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),t("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(16, 55, 94, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx 2rpx 2rpx 8rpx",width:"calc(100% - 160rpx)",lineHeight:"60rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("手机号码")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(16, 55, 94, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx 2rpx 2rpx 8rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:r.ro.shoujihaoma,placeholder:"手机号码"},model:{value:r.ruleForm.shoujihaoma,callback:function(e){r.$set(r.ruleForm,"shoujihaoma",e)},expression:"ruleForm.shoujihaoma"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("邮箱")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(16, 55, 94, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx 2rpx 2rpx 8rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:r.ro.youxiang,placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0) inset",margin:"0 auto",backgroundColor:"rgba(189, 223, 229, 1)",borderColor:"#409EFF",borderRadius:"88rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},a66b:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-5bf860bd]{padding:%?20?%}.content[data-v-5bf860bd]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220221/0f8fd9cec3184a63ad610f92e90f97c1.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-5bf860bd]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-5bf860bd]{width:%?180?%}.avator[data-v-5bf860bd]{width:%?150?%;height:%?60?%}.right-input[data-v-5bf860bd]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-5bf860bd]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-5bf860bd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-5bf860bd]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-5bf860bd]{border:0}.cu-form-group uni-input[data-v-5bf860bd]{padding:0 %?30?%}.uni-input[data-v-5bf860bd]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-5bf860bd]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-5bf860bd]::after{line-height:%?60?%}.select .uni-input[data-v-5bf860bd]{line-height:%?60?%}.input .right-input[data-v-5bf860bd]{line-height:%?68?%}',""]),r.exports=e},f19e:function(r,e,t){"use strict";t.r(e);var i=t("4cb3"),a=t("f2c1");for(var o in a)"default"!==o&&function(r){t.d(e,r,(function(){return a[r]}))}(o);t("1680");var n,d=t("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"5bf860bd",null,!1,i["a"],n);e["default"]=s.exports},f2c1:function(r,e,t){"use strict";t.r(e);var i=t("1304"),a=t.n(i);for(var o in i)"default"!==o&&function(r){t.d(e,r,(function(){return i[r]}))}(o);e["default"]=a.a},f745:function(r,e,t){var i=t("a66b");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=t("4f06").default;a("9d0ee0d0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);