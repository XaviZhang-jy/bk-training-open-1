(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{102:function(e,t,a){"use strict";a.r(t);var i=a(103);var s=a.n(i);for(var l in i)if(l!=="default")(function(e){a.d(t,e,function(){return i[e]})})(l);t["default"]=s.a},103:function(e,t,a){"use strict";var i=a(0);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=i(a(92));function l(e,t){var a=typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=r(e))||t&&e&&typeof e.length==="number"){if(a)e=a;var i=0;var s=function e(){};return{s:s,n:function t(){if(i>=e.length)return{done:true};return{done:false,value:e[i++]}},e:function e(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l=true,n=false,o;return{s:function t(){a=a.call(e)},n:function e(){var t=a.next();l=t.done;return t},e:function e(t){n=true;o=t},f:function e(){try{if(!l&&a.return!=null)a.return()}finally{if(n)throw o}}}}function r(e,t){if(!e)return;if(typeof e==="string")return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}function n(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,i=new Array(t);a<t;a++){i[a]=e[a]}return i}var o={data:function e(){return{groupList:[],memberDaily:[],dailyDetailDialog:{visible:false,width:600,headerPosition:"left"},newApplyDialog:{visible:false,width:600,headerPosition:"left"},hasNotSubmitDialog:{visible:false,width:600,headerPosition:"left"},shareAllDialog:{visible:false,width:600,headerPosition:"left"},newApplyData:[],dialogMember:{evaluate:[],hasComment:false},myComment:"",myPastComment:"",myNewComment:"",customOption:{disabledDate:function e(t){if(t>new Date){return true}}},curDate:null,formatDate:"",selectGroupId:0,hasRemindAll:false,shareAllList:[],shareAllIdList:[],hasSharedIdList:[],currentUserName:this.$store.state.user.username,hasSubmitDaily:[],currentGroupAdmin:[]}},computed:{hasNotSubmitMember:function e(){var t=this;return this.memberDaily.filter(function(e){return!e.write_status&&t.currentGroupAdmin.indexOf(e.create_by)===-1})}},created:function e(){var t=this.$route.query.group;if(t!==undefined){this.selectGroupId=parseInt(t)}var a=this.$route.query.date;if(a!==undefined){this.curDate=new Date(a)}else{this.curDate=new Date}this.formatDate=(0,s.default)(this.curDate).format(s.default.HTML5_FMT.DATE)},activated:function e(){if(!this.groupList.length){this.init()}else{this.changeGroup(this.selectGroupId)}},methods:{init:function e(){var t=this;this.$http.get("/list_admin_group/").then(function(e){t.groupList=e.data;if(t.groupList.length>0){if(t.selectGroupId>0){t.changeGroup(t.selectGroupId)}else{t.selectGroupId=t.groupList[0].id}t.$http.get("/list_group_admin/"+t.selectGroupId+"/").then(function(e){if(e.result){t.currentGroupAdmin=e.data}else{t.$bkMessage({theme:"warning",message:e.message})}})}})},loadApply:function e(){var t=this;this.$http.get("/get_apply_for_group_users/"+this.selectGroupId+"/").then(function(e){t.newApplyData=e.data})},judgeFloatString:function e(t){if(t==="0.0"||t==="0"||!t){return false}else if(typeof t==="string"&&t[0]==="0"){return false}else{return true}},remindAll:function e(){var t=this;this.$http.post("/notice_non_report_users/"+this.selectGroupId+"/",{date:this.formatDate}).then(function(e){if(e.result){t.hasRemindAll=true;t.hasNotSubmitDialog.visible=false;t.$bkMessage({theme:"success",message:e.message})}else{t.$bkMessage({theme:"error",message:e.message})}})},shareAll:function e(){var t=this;this.$http.post("/send_evaluate_all/"+this.selectGroupId+"/",{daily_ids:this.shareAllIdList}).then(function(e){if(e.result){t.shareAllDialog.visible=false;var a=l(t.shareAllIdList),i;try{for(a.s();!(i=a.n()).done;){var s=i.value;t.hasSharedIdList.push(s)}}catch(e){a.e(e)}finally{a.f()}t.shareAllIdList=[];t.shareAllList=[];t.$bkMessage({theme:"success",message:e.message})}else{t.$bkMessage({theme:"error",message:e.message})}})},dealShareAll:function e(t){if(this.hasSharedIdList.indexOf(t.id)!==-1){this.$bkMessage({theme:"error",message:"您已经分享过该日报啦"})}else if(this.shareAllIdList.indexOf(t.id)===-1){this.shareAllList.push(t);this.shareAllIdList.push(t.id);this.$bkMessage({theme:"success",message:"加入成功"})}else{this.$bkMessage({theme:"error",message:"您已经将该日报加入啦"})}},removeFromShareList:function e(t){var a=this;this.$bkInfo({title:"确认不再分享"+this.shareAllList[t].create_name+"的日报？",showFooter:true,confirmFn:function e(){a.shareAllList.splice(t,1);a.shareAllIdList.splice(t,1);a.$bkMessage({theme:"success",message:"移除成功"})}})},openDialog:function e(t){this.dialogMember=t;this.dialogMember.hasComment=false;this.dailyDetailDialog.visible=true;var a=l(this.dialogMember.evaluate),i;try{for(a.s();!(i=a.n()).done;){var s=i.value;if(s.name===this.currentUserName){this.myPastComment=s.evaluate;this.myNewComment=s.evaluate;this.dialogMember.hasComment=true;break}}}catch(e){a.e(e)}finally{a.f()}},submitMyComment:function e(){var t=this;if(this.myComment.length){this.$http.post("/evaluate_daily/",{daily_id:this.dialogMember.id,evaluate:this.myComment}).then(function(e){t.getDaily(t.selectGroupId,t.formatDate).then(function(a){if(e.result){t.$bkMessage({theme:"success",message:e.message});t.dailyDetailDialog.visible=false}else{t.$bkMessage({theme:"error",message:e.message})}})});this.myComment="";this.dailyDetailDialog.visible=false}else{this.$bkMessage({theme:"warning",message:"点评内容为空"})}},operateMyComment:function e(t){var a=this;if(t===0){this.$http.post("/update_evaluate_daily/"+this.selectGroupId+"/"+this.dialogMember.id+"/",{evaluate_content:this.myNewComment}).then(function(e){a.getDaily(a.selectGroupId,a.formatDate).then(function(t){if(e.result){a.dailyDetailDialog.visible=false;a.$bkMessage({theme:"success",message:e.message})}else{a.$bkMessage({theme:"error",message:e.message})}})})}else{this.$http.delete("/delete_evaluate_daily/"+this.selectGroupId+"/"+this.dialogMember.id+"/").then(function(e){a.getDaily(a.selectGroupId,a.formatDate).then(function(t){if(e.result){a.dailyDetailDialog.visible=false;a.$bkMessage({theme:"success",message:e.message})}else{a.$bkMessage({theme:"error",message:e.message})}})})}},getDaily:function e(t,a){var i=this;return this.$http.get("/list_member_daily/"+t+"/?date="+a).then(function(e){i.memberDaily=e.data;i.hasSubmitDaily=i.memberDaily.filter(function(e){return e.write_status})})},changeDate:function e(t){this.formatDate=(0,s.default)(t).format(s.default.HTML5_FMT.DATE);this.shareAllList=[];this.shareAllIdList=[];this.getDaily(this.selectGroupId,this.formatDate)},changeGroup:function e(t){this.selectGroupId=t;this.shareAllList=[];this.shareAllIdList=[];this.getDaily(this.selectGroupId,this.formatDate);this.loadApply()},dealNewApply:function e(t,a){var i=this;this.$http.post("/deal_join_group/"+this.selectGroupId+"/",{user_id:t.user_id,status:a}).then(function(e){if(e.result){for(var a in i.newApplyData){if(i.newApplyData[a].hasOwnProperty("user_id")&&i.newApplyData[a].user_id===t.user_id){i.newApplyData.splice(a,1)}}i.$bkMessage({theme:"success",message:e.message})}else{i.$bkMessage({theme:"error",message:e.message})}})},dailyDetailDialogChange:function e(t){if(t===false){this.myComment=""}},setPerfect:function e(t,a){var i=this;this.$http.patch("/update_daily_perfect_status/"+this.selectGroupId+"/"+t.id+"/").then(function(e){if(e.result){i.hasSubmitDaily[a].is_perfect=!t.is_perfect}else{i.$bkMessage({theme:"error",message:e.message})}})}}};t.default=o},104:function(e,t,a){},243:function(e,t,a){"use strict";var i=a(104);var s=a.n(i);var l=s.a},248:function(e,t,a){"use strict";var i=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"top_container"},[a("div",{staticStyle:{width:"24%","max-width":"261px"}},[a("bk-select",{staticStyle:{width:"100%",display:"inline-block"},attrs:{disabled:false,placeholder:"选择组",searchable:""},on:{change:function(t){e.changeGroup(e.selectGroupId)}},model:{value:e.selectGroupId,callback:function(t){e.selectGroupId=t},expression:"selectGroupId"}},e._l(e.groupList,function(e){return a("bk-option",{key:e.id,attrs:{id:e.id,name:e.name}})}),1)],1),e._v(" "),a("div",{staticClass:"date_picker",staticStyle:{width:"24%","max-width":"261px"}},[a("bk-date-picker",{staticStyle:{position:"relative",width:"100%"},attrs:{placeholder:"选择日期",options:e.customOption},on:{change:function(t){e.changeDate(e.curDate)}},model:{value:e.curDate,callback:function(t){e.curDate=t},expression:"curDate"}})],1),e._v(" "),a("div",{staticStyle:{"margin-left":"2%"}},[a("bk-badge",{attrs:{theme:"danger",max:99,val:e.newApplyData.length,visible:e.newApplyData.length}},[a("bk-button",{attrs:{theme:"primary"},on:{click:function(t){e.newApplyDialog.visible=true}}},[e._v("\n                        入组申请\n                    ")])],1)],1),e._v(" "),a("bk-dialog",{attrs:{title:"入组申请","header-position":e.newApplyDialog.headerPosition,width:e.newApplyDialog.width},model:{value:e.newApplyDialog.visible,callback:function(t){e.$set(e.newApplyDialog,"visible",t)},expression:"newApplyDialog.visible"}},[a("bk-table",{staticStyle:{"margin-top":"15px"},attrs:{"virtual-render":true,data:e.newApplyData,height:"200px"}},[a("bk-table-column",{attrs:{prop:"username",label:"用户id"}}),e._v(" "),a("bk-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),a("bk-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){e.dealNewApply(t.row,1)}}},[e._v("\n                                同意\n                            ")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){e.dealNewApply(t.row,2)}}},[e._v("\n                                拒绝\n                            ")])]}}])})],1)],1),e._v(" "),a("div",[a("bk-badge",{attrs:{theme:"danger",max:99,val:e.hasNotSubmitMember.length,visible:e.hasNotSubmitMember.length}},[a("bk-button",{attrs:{theme:"primary",title:"未提交"},on:{click:function(t){e.hasNotSubmitDialog.visible=true}}},[e._v("\n                        未提交日报\n                    ")])],1)],1),e._v(" "),a("bk-dialog",{attrs:{title:"今日未提交报告名单","header-position":e.hasNotSubmitDialog.headerPosition,width:e.hasNotSubmitDialog.width},model:{value:e.hasNotSubmitDialog.visible,callback:function(t){e.$set(e.hasNotSubmitDialog,"visible",t)},expression:"hasNotSubmitDialog.visible"}},[a("div",e._l(e.hasNotSubmitMember,function(t){return a("bk-tag",{key:t.id,staticClass:"mr10",staticStyle:{margin:"10px 0"}},[e._v("\n                        "+e._s(t.create_name)+"\n                    ")])}),1),e._v(" "),a("div",{staticClass:"dialog-foot",attrs:{slot:"footer"},slot:"footer"},[a("div",[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"确认",size:"large",disabled:e.hasRemindAll},on:{click:e.remindAll}},[e._v("\n                            "+e._s(e.hasRemindAll?"已提醒":"一键提醒")+"\n                        ")])],1)])]),e._v(" "),a("div",[a("bk-badge",{attrs:{theme:"danger",max:99,val:e.shareAllList.length,visible:e.shareAllList.length}},[a("bk-button",{attrs:{theme:"primary",title:"分享日报"},on:{click:function(t){e.shareAllDialog.visible=true}}},[e._v("\n                        分享日报\n                    ")])],1)],1),e._v(" "),a("bk-dialog",{attrs:{title:"分享日报列表","header-position":e.shareAllDialog.headerPosition,width:e.shareAllDialog.width},model:{value:e.shareAllDialog.visible,callback:function(t){e.$set(e.shareAllDialog,"visible",t)},expression:"shareAllDialog.visible"}},[a("div",[e._l(e.shareAllList,function(t,i){return[a("a",{key:i,staticStyle:{cursor:"pointer"},on:{click:function(t){e.removeFromShareList(i)}}},[a("bk-badge",{key:i,staticClass:"mr15",attrs:{theme:"danger",val:"X"}},[a("bk-tag",{key:i,staticStyle:{"margin-bottom":"10px"}},[e._v("\n                                    "+e._s(t.create_name)+"\n                                ")])],1)],1)]})],2),e._v(" "),a("div",{staticClass:"dialog-foot",attrs:{slot:"footer"},slot:"footer"},[a("div",[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"分享",size:"large",disabled:!e.shareAllList.length},on:{click:e.shareAll}},[e._v("\n                            一键分享\n                        ")])],1)])])],1),e._v(" "),a("div",{staticClass:"bottom_container"},[!e.hasSubmitDaily.length?a("div",{staticStyle:{margin:"200px auto",width:"140px"}},[e._v("\n                没有日报内容哟~\n            ")]):a("div",[a("div",{staticClass:"cards"},[e._l(e.hasSubmitDaily,function(t,i){return a("div",{key:t,staticClass:"flexcard"},[a("bk-card",{staticClass:"card",attrs:{"show-head":true,"show-foot":true}},[a("div",{staticClass:"head-main",attrs:{slot:"header"},slot:"header"},[a("div",[e._v(e._s(t.create_name)+"的日报")]),e._v(" "),a("div",{staticClass:"state-bar"},[a("bk-tag",{directives:[{name:"show",rawName:"v-show",value:!t.is_normal,expression:"!daily.is_normal"}],staticClass:"mr15",attrs:{theme:"warning"}},[e._v("补签")]),e._v(" "),t.evaluate.length?a("div",{staticStyle:{color:"#3A84FF"}},[e._v("已点评")]):a("div",{staticStyle:{color:"#63656E"}},[e._v("未点评")])],1)]),e._v(" "),a("div",e._l(t.content,function(t,i){return a("div",{key:i},[a("h5",{staticStyle:{"font-size":"16px !important",margin:"6px 0 !important"}},[e._v(e._s(t.title))]),e._v(" "),t.type==="table"?a("div",{staticStyle:{"font-size":"18px"}},e._l(t.content,function(t,i){return a("div",{key:i},[a("pre",{staticClass:"card-pre"},[e._v("                                                "),a("div",{staticClass:"content-wapper"},[e._v("\n                                                    "),a("span",{staticClass:"time-wapper"},[e._v("\n                                                        "),a("bk-tag",{directives:[{name:"show",rawName:"v-show",value:!t.isPrivate&&e.judgeFloatString(t.cost),expression:"!row.isPrivate && judgeFloatString(row.cost)"}],attrs:{theme:"info"}},[e._v("\n                                                            "+e._s(typeof t.cost==="string"?t.cost:t.cost.toFixed(1)+"小时")+"\n                                                        ")]),e._v("\n                                                        "),a("bk-tag",{directives:[{name:"show",rawName:"v-show",value:t.isPrivate||!e.judgeFloatString(t.cost),expression:"row.isPrivate || !judgeFloatString(row.cost)"}],attrs:{theme:"info"}},[e._v("\n                                                            - -\n                                                        ")]),e._v("\n                                                    ")],1),e._v("\n                                                    "+e._s(t.text)+"\n                                                ")]),e._v("\n                                            ")])])}),0):a("div",{staticStyle:{"font-size":"14px","line-height":"22px"}},[e._v("\n                                        "+e._s(t.text)+"\n                                    ")])])}),0),e._v(" "),t.evaluate.length?a("div",[a("h4",[e._v("点评情况")]),e._v(" "),a("div",e._l(t.evaluate,function(t,i){return a("div",{key:i,staticClass:"singleComment"},[a("p",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.name+"："))]),e._v(" "),a("span",[e._v(e._s(t.evaluate))])])}),0)]):e._e(),e._v(" "),a("div",{staticClass:"foot-main",attrs:{slot:"footer"},slot:"footer"},[a("div",[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"去点评",size:"small"},on:{click:function(a){e.openDialog(t)}}},[e._v("\n                                        去点评\n                                    ")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"去点评",size:"small"},on:{click:function(a){e.setPerfect(t,i)}}},[e._v("\n                                        "+e._s(t.is_perfect?"取消优秀":"设为优秀")+"\n                                    ")])],1)])])],1)}),e._v(" "),a("bk-dialog",{attrs:{"header-position":e.dailyDetailDialog.headerPosition,width:e.dailyDetailDialog.width,title:"我的点评"},on:{"value-change":e.dailyDetailDialogChange},model:{value:e.dailyDetailDialog.visible,callback:function(t){e.$set(e.dailyDetailDialog,"visible",t)},expression:"dailyDetailDialog.visible"}},[e.dialogMember.hasComment?a("div",[a("div",{staticClass:"singleComment"},[a("bk-input",{staticStyle:{margin:"15px 0"},attrs:{type:"textarea","font-size":"large",clearable:true,rows:3},model:{value:e.myNewComment,callback:function(t){e.myNewComment=t},expression:"myNewComment"}})],1)]):a("div",[a("bk-input",{staticStyle:{margin:"15px 0"},attrs:{placeholder:"请输入",clearable:true,type:"textarea","font-size":"large",rows:3},model:{value:e.myComment,callback:function(t){e.myComment=t},expression:"myComment"}})],1),e._v(" "),a("div",{staticClass:"dialog-foot",attrs:{slot:"footer"},slot:"footer"},[a("div",[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"分享",size:"large"},on:{click:function(t){e.dealShareAll(e.dialogMember)}}},[e._v("\n                                    加入待分享\n                                ")]),e._v(" "),e.dialogMember.hasComment?[a("bk-button",{staticClass:"mr10",attrs:{theme:"warning",title:"确认修改",size:"large",disabled:e.myNewComment===e.myPastComment},on:{click:function(t){e.operateMyComment(0)}}},[e._v("\n                                        修改\n                                    ")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"danger",title:"删除评论",size:"large"},on:{click:function(t){e.operateMyComment(1)}}},[e._v("\n                                        删除\n                                    ")])]:e._e(),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"确认",size:"large"},on:{click:e.submitMyComment}},[e._v("\n                                    发送给他\n                                ")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"default",title:"关闭",size:"large"},on:{click:function(t){e.dailyDetailDialog.visible=false}}},[e._v("\n                                    关闭\n                                ")])],2)])])],2)])])])])};var s=[];a.d(t,"a",function(){return i});a.d(t,"b",function(){return s})},89:function(e,t,a){"use strict";a.r(t);var i=a(248);var s=a(102);for(var l in s)if(l!=="default")(function(e){a.d(t,e,function(){return s[e]})})(l);var r=a(243);var n=a(3);var o=Object(n["a"])(s["default"],i["a"],i["b"],false,null,"168b215c",null);t["default"]=o.exports}}]);