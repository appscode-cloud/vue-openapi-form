import{defineComponent as r,resolveDirective as t,withDirectives as n,openBlock as e,createElementBlock as o,createTextVNode as s,toDisplayString as a,vShow as l,createElementVNode as i}from"vue";var c=r({name:"ComponentErrors",props:{errors:{type:Array,default:function(){return[]}}},computed:{tooltipObj:function(){return{content:this.htmlContent,html:!0}},htmlContent:function(){var r="<ul class='errors-wrapper'>";return this.errors.forEach((function(t){r+='<li class=\'error-element\'><span class="pr-5"><i class="fa fa-warning"></i></span>'.concat(t,"</li>")})),r+="</ul>"}}}),p={class:"has-text-danger has-text-weight-normal is-italic is-size-6 pl-8"},u=i("i",{class:"fa fa-warning"},null,-1);c.render=function(r,i,c,f,h,m){var g=t("tooltip");return n((e(),o("span",p,[u,s(" Error in "+a(r.errors.length)+" field"+a(r.errors.length>1?"s":""),1)])),[[l,r.errors.length>0],[g,r.tooltipObj]])};export{c as default};