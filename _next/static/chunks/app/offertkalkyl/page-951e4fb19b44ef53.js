(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{477:()=>{},3552:(e,l,a)=>{Promise.resolve().then(a.bind(a,6042))},6042:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>U});var s=a(5155),n=a(8633),r=a(8998),t=a(3038),o=a(5480),i=a(2111),d=a(7216);function u(e){let{value:l,onChange:a,items:n,label:u,required:c}=e;return n.length>0&&(0,s.jsx)(r.A,{className:"w-full",children:(0,s.jsxs)(i.A,{required:c,fullWidth:!0,children:[(0,s.jsx)(t.A,{id:"demo-simple-select-label",children:u}),(0,s.jsx)(d.A,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l.toString(),label:u,onChange:e=>{a(parseInt(e.target.value))},children:n.map((e,l)=>(0,s.jsx)(o.A,{value:e.value,children:e.label},l))})]})})}var c=a(152);function x(e){let{label:l,value:a,onChange:n,required:r}=e;return(0,s.jsx)(c.A,{id:"outlined-basic",type:"number",label:l,variant:"outlined",value:a||"",onChange:e=>n(Number(e.target.value)),required:r,className:"w-full"})}var h=a(2115),b=a(628),m=a(257),p=a(8871),g=a(6821);function j(e){let{items:l,label:a,value:n,onChange:r,required:t}=e;return l.length>0&&(0,s.jsxs)(i.A,{required:t,className:"w-full",children:[(0,s.jsx)(g.A,{id:"demo-row-radio-buttons-group-label",children:a}),(0,s.jsx)(m.A,{row:!0,value:n,onChange:e=>r(Number(e.target.value)),"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:l.map((e,l)=>(0,s.jsx)(p.A,{className:"rounded-none",value:e.value,control:(0,s.jsx)(b.A,{sx:{"&.Mui-checked":{color:"#6567E4"}}}),label:e.label},l))})]})}var f=a(2710);let v=(0,f.Ay)(b.A)(()=>({"& .MuiSvgIcon-root":{display:"none"},padding:0,width:24,height:24,marginRight:8,"&:before":{content:'""',width:24,height:24,display:"block",border:"2px solid #e0e0e0",borderRadius:"4px",transition:"all 0.2s"},"&.Mui-checked:before":{backgroundColor:"#6567E4",borderColor:"#6567E4"}})),A=(0,f.Ay)(p.A)(()=>({margin:0,"& .MuiFormControlLabel-label":{padding:"8px 20px"},"& .MuiRadio-root":{display:"none"},".MuiTypography-root":{fontSize:"14px"},border:"2px solid #e0e0e0",borderRadius:"8px",transition:"all 0.2s",cursor:"pointer","&:hover":{borderColor:"#6567E4"},"&.Mui-checked":{backgroundColor:"#6567E4",borderColor:"#6567E4",color:"white"}}));function y(e){let{items:l,label:a,value:n,onChange:r,required:t}=e;return l.length>0&&(0,s.jsxs)(i.A,{required:t,className:"w-full flex flex-col gap-[8px]",children:[(0,s.jsx)(g.A,{id:"demo-row-radio-buttons-group-label",children:a}),(0,s.jsx)(m.A,{row:!0,value:n,onChange:e=>{r(Number(e.target.value))},"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",className:"w-full flex gap-[8px]",children:l.map((e,l)=>(0,s.jsx)(A,{value:e.value,control:(0,s.jsx)(v,{}),label:e.label,className:"".concat(n===e.value?"Mui-checked":"")},l))})]})}let w=[{label:"Ja",value:1},{label:"Nej",value:0}],k=[{label:"1",value:1},{label:"2 +",value:2}],E=[{label:"Betongpannor (33kr)",value:33},{label:"Tegelpannor (56kr)",value:56},{label:"Takpl\xe5t (22kr)",value:22},{label:"Ytpapp (89kr)",value:89}],C=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"];var N=a(5617),S=a(884);let R=S.vv.create({page:{flexDirection:"column",backgroundColor:"#FFFFFF",padding:30},section:{margin:10,padding:10},title:{fontSize:24,marginBottom:20},row:{flexDirection:"row",marginBottom:10},label:{width:200,fontWeight:"bold"},value:{flex:1}}),Y=e=>{let{formData:l}=e,a=e=>1===e?"Ja":"Nej";return(0,s.jsx)(S.yo,{children:(0,s.jsx)(S.YW,{size:"A4",style:R.page,children:(0,s.jsxs)(S.Ss,{style:R.section,children:[(0,s.jsx)(S.EY,{style:R.title,children:"Takoffertkalkyl"}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"Typ av takmaterial:"}),(0,s.jsx)(S.EY,{style:R.value,children:(e=>{let l=E.find(l=>l.value===e);return(null==l?void 0:l.label)||"Ok\xe4nd"})(l.type)})]}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"Storlek:"}),(0,s.jsxs)(S.EY,{style:R.value,children:[l.size," m\xb2"]})]}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"R\xe5spont:"}),(0,s.jsx)(S.EY,{style:R.value,children:a(l.raspont)})]}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"Antal fastighets\xe4gare:"}),(0,s.jsx)(S.EY,{style:R.value,children:l.owners})]}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"Solpaneler:"}),(0,s.jsx)(S.EY,{style:R.value,children:a(l.sunPanels)})]}),1===l.sunPanels&&(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"Antal solpaneler:"}),(0,s.jsx)(S.EY,{style:R.value,children:l.numberOfSunPanels})]}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"Manuell justering:"}),(0,s.jsx)(S.EY,{style:R.value,children:l.manualAdjustment})]}),(0,s.jsxs)(S.Ss,{style:R.row,children:[(0,s.jsx)(S.EY,{style:R.label,children:"ROT-justering:"}),(0,s.jsx)(S.EY,{style:R.value,children:l.ROT})]})]})})})};var O=a(8173),M=a.n(O),T=a(2138),F=a(1185),q=a(4616);let D={src:"/_next/static/media/logo.e5b06c59.png",height:228,width:478,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEX///719ffk4+Pc3dbL2O/y8efW1daEpM7Z2Ni+wamjrIs4cNb/+qZZqHxDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJklEQVR4nBXBhxEAMAgDsTcGUvefNxcJ4Fp8tUcCUp5VEtFhz44HBq8AbH1dxuQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4};var P=a(5565);function U(){let[e,l]=(0,h.useState)({type:0,size:0,raspont:0,owners:0,sunPanels:0,numberOfSunPanels:0,manualAdjustment:0,ROT:0}),[a,r]=(0,h.useState)(!1),t=l=>{l.preventDefault(),r(!0),console.log("Form submitted:",e)},o=async()=>{let l=await (0,S.x8)((0,s.jsx)(Y,{formData:e})).toBlob(),a=URL.createObjectURL(l);window.open(a)},i=async()=>{let l=await (0,S.x8)((0,s.jsx)(Y,{formData:e})).toBlob(),a=URL.createObjectURL(l),n=new Date,r=n.getDate(),t=C[n.getMonth()],o=n.getFullYear(),i="".concat(r,"-").concat(t,"-").concat(o),d=document.createElement("a");d.href=a,d.download="offertkalkyl-".concat(i,".pdf"),document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(a)},d=0==e.type||0==e.size||0===e.owners;return(0,s.jsxs)("div",{className:"px-4 flex flex-col lg:flex-row items-center justify-end lg:justify-evenly h-screen",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"hidden lg:block text-center mb-2 text-2xl lg:text-4xl xl:text-5xl",children:"Takoffertkalkyl"}),(0,s.jsx)("h2",{className:"hidden lg:block text-center mb-2 text-lg",children:"Fyll i dina uppgifter f\xf6r att f\xe5 en offert"}),(0,s.jsx)(P.default,{className:"hidden lg:block",width:"300",height:"200",src:D,alt:"Svenska Takvision\xe4rerna logo"}),(0,s.jsx)(P.default,{className:"block lg:hidden absolute right-6 top-6",width:"80",height:"80",src:D,alt:"Svenska Takvision\xe4rerna logo"}),(0,s.jsx)("div",{className:"absolute left-6 top-6",children:(0,s.jsx)(M(),{href:"/",children:(0,s.jsx)(n.default,{variant:"contained",startIcon:(0,s.jsx)(T.A,{}),children:"Tillbaka"})})})]}),(0,s.jsx)("div",{className:"bg-gray mb-8 lg:mb-0 sm:min-w-[600px] min-w-full p-8 rounded-xl shadow-lg",children:(0,s.jsxs)("form",{onSubmit:t,className:"flex gap-4 items-center flex-col",children:[(0,s.jsx)(u,{required:!0,label:"Typ av takmaterial",items:E,value:e.type,onChange:e=>l(l=>({...l,type:e}))}),(0,s.jsx)(x,{required:!0,label:"Storlek (m2)",value:e.size,onChange:e=>l(l=>({...l,size:e}))}),(0,s.jsx)(j,{required:!1,label:"R\xe5spont",items:w,value:e.raspont,onChange:e=>l(l=>({...l,raspont:e}))}),(0,s.jsx)(y,{required:!0,label:"Antal fastighets\xe4gare",items:k,value:e.owners,onChange:e=>l(l=>({...l,owners:e}))}),(0,s.jsx)(j,{required:!1,label:"Finns solpaneler?",items:w,value:e.sunPanels,onChange:e=>l(l=>({...l,sunPanels:e}))}),1===e.sunPanels&&(0,s.jsx)(x,{required:!1,label:"Antal solpaneler",value:e.numberOfSunPanels,onChange:e=>l(l=>({...l,numberOfSunPanels:e}))}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)(g.A,{className:"pb-2",children:["Manuell justering ",e.manualAdjustment,"%"]}),(0,s.jsx)(N.Ay,{value:e.manualAdjustment,onChange:(e,a)=>l(e=>({...e,manualAdjustment:a})),defaultValue:0,"aria-label":"Default",valueLabelDisplay:"auto",sx:{color:"#6567E4","& .MuiSlider-thumb":{"&:hover, &.Mui-focusVisible":{boxShadow:"0px 0px 0px 8px rgba(101, 103, 228, 0.16)"}}}})]}),(0,s.jsx)(x,{required:!1,label:"ROT-justering",value:e.ROT,onChange:e=>l(l=>({...l,ROT:e}))}),(0,s.jsx)(n.default,{className:"w-full !py-[10px] !text-[18px]",variant:"contained",disabled:d,type:"submit",sx:{backgroundColor:"#6567E4","&:hover":{backgroundColor:"#5254c7"}},onClick:t,children:"Ber\xe4kna offert"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 w-full",children:[(0,s.jsx)(n.default,{className:"w-full",variant:"contained",disabled:!a,type:"submit",color:"info",onClick:i,endIcon:(0,s.jsx)(F.A,{}),children:"Ladda ner PDF"}),(0,s.jsx)(n.default,{className:"w-full",variant:"contained",disabled:!a,type:"submit",color:"success",onClick:o,endIcon:(0,s.jsx)(q.A,{}),children:"\xd6ppna PDF"})]})]})})]})}}},e=>{var l=l=>e(e.s=l);e.O(0,[247,788,746,792,304,563,318,441,517,358],()=>l(3552)),_N_E=e.O()}]);