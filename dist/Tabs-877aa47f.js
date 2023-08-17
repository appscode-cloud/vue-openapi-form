import{defineComponent as a,openBlock as i,createElementBlock as s,createElementVNode as e,normalizeClass as t,withModifiers as n}from"vue";var l=a({name:"Tabs",props:{modelValue:{type:String,default:"form"}},emits:["update:modelValue"],data:function(){return{activeTab:"form"}},methods:{showForm:function(){this.activeTab="form",this.$emit("update:modelValue","form")},showJson:function(){this.activeTab="json",this.$emit("update:modelValue","json")},showYaml:function(){this.activeTab="yaml",this.$emit("update:modelValue","yaml")}}}),o={class:"tabs ac-tabs is-line"},c=[e("span",{class:"icon is-small"},[e("i",{class:"fa fa-file-text fa-flip-horizontal","aria-hidden":"true"})],-1),e("span",null,"Form",-1)],r=[e("span",{class:"icon is-small"},[e("i",{class:"fa fa-code","aria-hidden":"true"})],-1),e("span",null,"YAML",-1)],u=[e("span",{class:"icon is-small"},[e("i",{class:"fa fa-code","aria-hidden":"true"})],-1),e("span",null,"JSON",-1)];l.render=function(a,l,m,f,d,p){return i(),s("div",o,[e("ul",null,[e("li",{class:t({"is-active":"form"===a.activeTab})},[e("a",{onClick:l[0]||(l[0]=n((function(i){return a.showForm()}),["prevent"]))},c)],2),e("li",{class:t({"is-active":"yaml"===a.activeTab})},[e("a",{onClick:l[1]||(l[1]=n((function(i){return a.showYaml()}),["prevent"]))},r)],2),e("li",{class:t({"is-active":"json"===a.activeTab})},[e("a",{onClick:l[2]||(l[2]=n((function(i){return a.showJson()}),["prevent"]))},u)],2)])])};export{l as default};