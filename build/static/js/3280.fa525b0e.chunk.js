"use strict";(self.webpackChunkplan_her=self.webpackChunkplan_her||[]).push([[3280],{53280:function(e,t,n){n.r(t);var a=n(42982),i=n(15861),r=n(70885),o=n(4942),d=n(87757),l=n.n(d),s=n(53767),u=n(58406),c=n(23786),p=n(72455),f=n(60729),h=n(72791),m=n(16030),v=n(87781),x=n(56889),g=n(23197),w=n(77724),j=n(26067),b=n(80184),Z=(0,p.Z)((function(e){return{aboutContainer:(0,o.Z)({paddingTop:"8em",width:"90%",textAlign:"center",margin:"auto",paddingBottom:"10em"},e.breakpoints.down("md"),{width:"95%"}),sortContainer:{display:"flex",gap:"10px",background:"white",padding:"10px",borderRadius:"8px"},sortLabel:{fontSize:"14px",color:"#696974",paddingTop:"10px",paddingRight:"10px"}}}));t.default=function(e){var t=Z(),n=(0,h.useState)(!0),o=(0,r.Z)(n,2),d=o[0],p=o[1],z=(0,h.useState)([]),C=(0,r.Z)(z,2),N=C[0],k=C[1],y=(0,h.useState)([]),A=(0,r.Z)(y,2),S=A[0],W=A[1],T=(0,h.useState)("de"),E=(0,r.Z)(T,2),R=E[0],_=E[1],G=(0,m.I0)(),H=(0,v.DE)({setTitle:j.T,getAccClaim:w.TF,updateAccClaim:w.kA},G),O=function(){var e=(0,i.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,H.getAccClaim();case 3:t=e.sent,_("de"),t&&t.length?(k((function(){return t})),W((function(){return t}))):(k((function(){return[]})),W((function(){return[]}))),p(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){H.setTitle({title:e.title}),O()}),[]);var I=function(){var e=(0,i.Z)(l().mark((function e(t,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,H.updateAccClaim({id:t,approvedStatus:n});case 3:return e.next=5,O();case 5:p(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=[{field:"name",headerName:"Name",flex:1,minWidth:120},{field:"email",headerName:"Email",flex:1,minWidth:120},{headerName:"Alternative Email",minWidth:120,flex:1,field:"altEmail"},{flex:1,headerName:"Job Title",minWidth:120,field:"jobTitle"},{flex:1,headerName:"How You Heard",field:"howYouHeard",minWidth:120},{flex:1,headerName:"Organization",minWidth:120,field:"Organization",valueGetter:function(e){var t=e.row,n="-";return t.organization&&t.organization.name&&(n=t.organization.name),n}},{flex:1,headerName:"Address",minWidth:120,field:"address",valueGetter:function(e){var t=e.row,n="-";return t.organization&&t.organization.address&&(n=t.organization.address),n}},{flex:1,headerName:"City",minWidth:120,field:"city",valueGetter:function(e){var t=e.row,n="-";return t.organization&&t.organization.city&&(n=t.organization.city),n}},{flex:1,headerName:"State",minWidth:90,field:"state",valueGetter:function(e){var t=e.row,n="-";return t.organization&&t.organization.state&&(n=t.organization.state),n}},{field:"action",headerName:"Action",sortable:!1,filterable:!1,minWidth:200,renderCell:function(e){var t=e.row;return"pending"===t.approvedStatus?(0,b.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,b.jsx)(x.Z,{name:"Approve",varient:"contained",onclick:function(){return I(t._id,"approved")}}),(0,b.jsx)(x.Z,{name:"Reject",varient:"contained",onclick:function(){return I(t._id,"cancelled")}})]}):t.approvedStatus}}];return(0,b.jsxs)("div",{className:t.aboutContainer,children:[(0,b.jsx)(s.Z,{direction:"row",justifyContent:"space-between",style:{marginBottom:"20px"},children:(0,b.jsxs)("div",{className:t.sortContainer,children:[(0,b.jsx)("div",{className:t.sortLabel,children:"View:"}),(0,b.jsxs)(u.Z,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",size:"small",variant:"standard",value:R,onChange:function(e){return t=e.target.value,k("de"!==t?function(){return S.filter((function(e){return e.approvedStatus===t}))}:function(){return S}),void _(t);var t},children:[(0,b.jsx)(c.Z,{value:"de",children:(0,b.jsx)("em",{children:"All"})}),(0,b.jsx)(c.Z,{value:"pending",children:"Pending"}),(0,b.jsx)(c.Z,{value:"approved",children:"Approved"}),(0,b.jsx)(c.Z,{value:"cancelled",children:"Rejected"})]})]})}),(0,b.jsx)("div",{style:{height:550,overflow:"auto",width:"100%"},children:(0,b.jsx)(f._,{getRowId:function(e){return e._id},rows:N||[],disableExtendRowFullWidth:!1,columns:P,disableSelectionOnClick:!0,loading:d,rowHeight:100,rowsPerPageOptions:(0,a.Z)(g.Z.pageSlot)})})]})}}}]);
//# sourceMappingURL=3280.fa525b0e.chunk.js.map