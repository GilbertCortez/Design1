(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d224c4b"],{e219:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("q-btn",{attrs:{label:"Add Training",icon:"add",color:"green"}}),e("br"),e("br"),e("q-table",{attrs:{data:n.trainings,columns:n.columns,"row-key":"name"},scopedSlots:n._u([{key:"body",fn:function(t){return e("q-tr",{attrs:{props:t}},[e("q-td",{key:"training",attrs:{props:t},nativeOn:{click:function(t){return n.clickRow(t)}}},[n._v("\n               "+n._s(t.row.training)+"\n            ")])],1)}}])}),e("q-action-sheet",{attrs:{title:"Actions",actions:[{label:"View",icon:"remove_red_eye",color:"primary",handler:n.viewAction},{label:"Edit",icon:"edit",color:"green",handler:n.editAction},{label:"Delete",icon:"delete",color:"red",handler:n.deleteAction}]},model:{value:n.actionSheet,callback:function(t){n.actionSheet=t},expression:"actionSheet"}})],1)},o=[];i._withStripped=!0;var r={data:function(){return{actionSheet:!1,trainings:[],columns:[{name:"training",label:"Training",align:"left"}]}},mounted:function(){this.$binding("trainings",this.$db.firestore().collection("trainings"))},methods:{clickRow:function(){this.actionSheet=!0},viewAction:function(){alert("view")},editAction:function(){alert("edit")},deleteAction:function(){alert("delete")}}},a=r,c=e("2877"),l=Object(c["a"])(a,i,o,!1,null,null,null);l.options.__file="trainings.vue";t["default"]=l.exports}}]);