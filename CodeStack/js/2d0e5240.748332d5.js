(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e5240"],{"92e6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-btn",{attrs:{label:"Add Testimonial",icon:"add",color:"green"},nativeOn:{click:function(e){t.opened=!0}}}),n("br"),n("br"),n("q-table",{attrs:{data:t.testimonial,columns:t.columns,"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){return n("q-tr",{attrs:{props:e}},[n("q-td",{key:"testifier",attrs:{props:e},nativeOn:{click:function(e){return t.clickRow(e)}}},[t._v("\n               "+t._s(e.row.testifier)+"\n            ")]),n("q-td",{key:"testimony",attrs:{props:e},nativeOn:{click:function(e){return t.clickRow(e)}}},[t._v("\n               "+t._s(e.row.testimony)+"\n            ")])],1)}}])}),n("q-modal",{attrs:{minimized:""},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[n("q-modal-layout",[n("q-toolbar",{attrs:{slot:"header",color:"black"},slot:"header"},[n("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",icon:"keyboard_arrow_left"}}),n("q-toolbar-title",[t._v("\n        Add Testimonial\n      ")])],1)],1),n("div",{staticClass:"q-pa-md"},[n("q-input",{attrs:{type:"text","float-label":"Testifier"},model:{value:t.testifier,callback:function(e){t.testifier=e},expression:"testifier"}}),n("br"),n("q-input",{attrs:{type:"text","float-label":"Testimony"},model:{value:t.testimony,callback:function(e){t.testimony=e},expression:"testimony"}}),n("br")],1),n("div",{staticClass:"row"},[n("q-btn",{staticClass:"col-6",attrs:{color:"primary",label:"Submit"}}),n("q-btn",{staticClass:"col-6",attrs:{color:"dark",label:"Close"},on:{click:function(e){t.opened=!1}}})],1)],1)],1)},o=[];i._withStripped=!0;var l={data:function(){return{opened:!1,testifier:"",testimony:"",testimonial:[],columns:[{name:"testifier",label:"Testifier",align:"left"},{name:"testimony",label:"Testimony",align:"left"}]}},mounted:function(){this.$parent.select="Testimonial",this.$binding("testimonial",this.$db.firestore().collection("testimonial"))}},a=l,s=n("2877"),r=Object(s["a"])(a,i,o,!1,null,null,null);r.options.__file="testimonial.vue";e["default"]=r.exports}}]);