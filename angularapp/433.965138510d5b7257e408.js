"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[433],{7989:(A,d,l)=>{l.d(d,{_:()=>Z});var n=l(7716),p=l(8583);function i(r,u){if(1&r){const o=n.EpF();n.TgZ(0,"tr",5),n.NdJ("click",function(){const m=n.CHM(o).$implicit;return n.oxw().enviarPaciente(m)}),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td"),n._uU(12),n.qZA(),n.qZA()}if(2&r){const o=u.$implicit;n.xp6(2),n.Oqu(o.nombre),n.xp6(2),n.Oqu(o.apellido),n.xp6(2),n.Oqu(o.edad),n.xp6(2),n.Oqu(o.dni),n.xp6(2),n.Oqu(o.obraSocial),n.xp6(2),n.Oqu(o.email)}}let Z=(()=>{class r{constructor(){this.enviar=new n.vpe}ngOnInit(){}enviarPaciente(o){this.enviar.emit(o)}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-tabla-paciente"]],inputs:{pacientes:"pacientes"},outputs:{enviar:"enviar"},decls:18,vars:1,consts:[[1,"container"],[1,"table-responsive","text-center"],[1,"table","table-dark","table-hover","noselect"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(o,_){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"table",2),n.TgZ(3,"thead"),n.TgZ(4,"th",3),n._uU(5,"Nombre"),n.qZA(),n.TgZ(6,"th",3),n._uU(7,"Apellido"),n.qZA(),n.TgZ(8,"th",3),n._uU(9,"Edad"),n.qZA(),n.TgZ(10,"th",3),n._uU(11,"DNI"),n.qZA(),n.TgZ(12,"th",3),n._uU(13,"Obra social"),n.qZA(),n.TgZ(14,"th",3),n._uU(15,"Email"),n.qZA(),n.qZA(),n.TgZ(16,"tbody"),n.YNc(17,i,13,6,"tr",4),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(17),n.Q6J("ngForOf",_.pacientes))},directives:[p.sg],styles:[""]}),r})()},9433:(A,d,l)=>{l.r(d),l.d(d,{UsuariosModule:()=>Y});var n=l(8583),p=l(611),i=l(7716),Z=l(5160),r=l(7989);const u=function(e,s){return{"bi-check-lg":e,"bi-x-lg":s}};function o(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"tr"),i.TgZ(1,"td"),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.TgZ(7,"td"),i._uU(8),i.qZA(),i.TgZ(9,"td"),i._uU(10),i.qZA(),i.TgZ(11,"td"),i._uU(12),i.qZA(),i.TgZ(13,"td",4),i.NdJ("click",function(){const v=i.CHM(t).$implicit;return i.oxw().actualizarEstado(v)}),i._UZ(14,"i",5),i.qZA(),i.qZA()}if(2&e){const t=s.$implicit;i.xp6(2),i.Oqu(null==t?null:t.nombre),i.xp6(2),i.Oqu(null==t?null:t.apellido),i.xp6(2),i.Oqu(null==t?null:t.edad),i.xp6(2),i.Oqu(null==t?null:t.dni),i.xp6(2),i.Oqu(null==t?null:t.especialidad),i.xp6(2),i.Oqu(null==t?null:t.email),i.xp6(1),i.Q6J("ngClass",i.WLB(7,u,!0===(null==t?null:t.habilitado),!1===(null==t?null:t.habilitado)))}}let _=(()=>{class e{constructor(t){this.firestore=t}ngOnInit(){}actualizarEstado(t){this.firestore.especialistaCollectionReference.doc(t.id).update({habilitado:!t.habilitado})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(Z.C))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-tabla-especialista"]],inputs:{especialistas:"especialistas"},decls:20,vars:1,consts:[[1,"container"],[1,"table-responsive","text-center"],[1,"table","table-dark"],[4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"bi"]],template:function(t,a){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"table",2),i.TgZ(3,"thead"),i.TgZ(4,"th"),i._uU(5,"Nombre"),i.qZA(),i.TgZ(6,"th"),i._uU(7,"Apellido"),i.qZA(),i.TgZ(8,"th"),i._uU(9,"Edad"),i.qZA(),i.TgZ(10,"th"),i._uU(11,"DNI"),i.qZA(),i.TgZ(12,"th"),i._uU(13,"Especialidad"),i.qZA(),i.TgZ(14,"th"),i._uU(15,"Email"),i.qZA(),i.TgZ(16,"th"),i._uU(17,"Habilitado"),i.qZA(),i.qZA(),i.TgZ(18,"tbody"),i.YNc(19,o,15,10,"tr",3),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(19),i.Q6J("ngForOf",a.especialistas))},directives:[n.sg,n.mk],styles:[""]}),e})();function g(e,s){if(1&e&&(i.TgZ(0,"tr"),i.TgZ(1,"td"),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.TgZ(7,"td"),i._uU(8),i.qZA(),i.TgZ(9,"td"),i._uU(10),i.qZA(),i.qZA()),2&e){const t=s.$implicit;i.xp6(2),i.Oqu(t.nombre),i.xp6(2),i.Oqu(t.apellido),i.xp6(2),i.Oqu(t.edad),i.xp6(2),i.Oqu(t.dni),i.xp6(2),i.Oqu(t.email)}}let m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-tabla-admin"]],inputs:{admins:"admins"},decls:16,vars:1,consts:[[1,"container"],[1,"table-responsive","text-center"],[1,"table","table-dark"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"table",2),i.TgZ(3,"thead"),i.TgZ(4,"th"),i._uU(5,"Nombre"),i.qZA(),i.TgZ(6,"th"),i._uU(7,"Apellido"),i.qZA(),i.TgZ(8,"th"),i._uU(9,"Edad"),i.qZA(),i.TgZ(10,"th"),i._uU(11,"DNI"),i.qZA(),i.TgZ(12,"th"),i._uU(13,"Email"),i.qZA(),i.qZA(),i.TgZ(14,"tbody"),i.YNc(15,g,11,5,"tr",3),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(15),i.Q6J("ngForOf",a.admins))},directives:[n.sg],styles:[""]}),e})();var T=l(164),f=l(916),U=l(4132);function x(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"li",4),i.TgZ(1,"a",9),i.NdJ("click",function(){return i.CHM(t),i.oxw().registroAdministrador=!0}),i._uU(2,"Agregar administrador"),i.qZA(),i.qZA()}}function q(e,s){if(1&e&&(i.TgZ(0,"div",11),i._UZ(1,"app-tabla-paciente",12),i.qZA()),2&e){const t=i.oxw(2);i.xp6(1),i.Q6J("pacientes",t.pacientes)}}function b(e,s){if(1&e&&(i.TgZ(0,"div"),i._UZ(1,"app-tabla-especialista",13),i.qZA()),2&e){const t=i.oxw(2);i.xp6(1),i.Q6J("especialistas",t.especialistas)}}function h(e,s){if(1&e&&(i.TgZ(0,"div"),i._UZ(1,"app-tabla-admin",14),i.qZA()),2&e){const t=i.oxw(2);i.xp6(1),i.Q6J("admins",t.administradores)}}function C(e,s){if(1&e&&(i.TgZ(0,"div"),i.TgZ(1,"h2"),i._uU(2),i.qZA(),i.YNc(3,q,2,1,"div",10),i.YNc(4,b,2,1,"div",7),i.YNc(5,h,2,1,"div",7),i.qZA()),2&e){const t=i.oxw();i.xp6(2),i.Oqu(t.tipoUser),i.xp6(1),i.Q6J("ngIf","Pacientes"===t.tipoUser),i.xp6(1),i.Q6J("ngIf","Especialistas"===t.tipoUser),i.xp6(1),i.Q6J("ngIf","Administradores"===t.tipoUser)}}function O(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"div"),i.TgZ(1,"app-registro",15),i.NdJ("finalizado",function(c){return i.CHM(t),i.oxw().recibirEstado(c)}),i.qZA(),i.qZA()}if(2&e){const t=i.oxw();i.xp6(1),i.Q6J("tipo",t.tipoUser)}}function E(e,s){if(1&e&&(i.TgZ(0,"div"),i.TgZ(1,"div",31),i.TgZ(2,"div",32),i.TgZ(3,"div",33),i._UZ(4,"img",34),i.qZA(),i.TgZ(5,"div",35),i._UZ(6,"img",36),i.qZA(),i.qZA(),i.TgZ(7,"button",37),i._UZ(8,"span",38),i.TgZ(9,"span",39),i._uU(10,"Previous"),i.qZA(),i.qZA(),i.TgZ(11,"button",40),i._UZ(12,"span",41),i.TgZ(13,"span",39),i._uU(14,"Next"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e){const t=i.oxw().$implicit,a=i.oxw(2);i.xp6(4),i.Q6J("defaultImage",a.defaultImage)("lazyLoad",t.imagenes[0]),i.xp6(2),i.Q6J("src",t.imagenes[1],i.LSH)}}function I(e,s){if(1&e&&(i.TgZ(0,"div"),i._UZ(1,"img",42),i.qZA()),2&e){const t=i.oxw().$implicit,a=i.oxw(2);i.xp6(1),i.Q6J("defaultImage",a.defaultImage)("lazyLoad",null==t?null:t.imagen)}}function J(e,s){if(1&e&&(i.TgZ(0,"div"),i.TgZ(1,"div",27),i._uU(2," Obra social: "),i.qZA(),i.TgZ(3,"div",30),i._uU(4),i.qZA(),i._UZ(5,"div",25),i._UZ(6,"div",29),i.qZA()),2&e){const t=i.oxw().$implicit;i.xp6(4),i.hij(" ",null==t?null:t.obraSocial," ")}}function N(e,s){if(1&e&&(i.TgZ(0,"div"),i.TgZ(1,"div",27),i._uU(2," Especialidad: "),i.qZA(),i.TgZ(3,"div",30),i._uU(4),i.qZA(),i._UZ(5,"div",25),i._UZ(6,"div",29),i.qZA()),2&e){const t=i.oxw().$implicit;i.xp6(4),i.hij(" ",null==t?null:t.especialidad," ")}}function y(e,s){if(1&e&&(i.TgZ(0,"div"),i.TgZ(1,"div",17),i.TgZ(2,"div",18),i.TgZ(3,"div",19),i._uU(4),i.qZA(),i.TgZ(5,"div",20),i.TgZ(6,"div",21),i.TgZ(7,"div",22),i.TgZ(8,"div",23),i.TgZ(9,"div",24),i.YNc(10,E,15,3,"div",7),i.qZA(),i.YNc(11,I,2,2,"div",7),i.qZA(),i.qZA(),i._UZ(12,"br"),i.qZA(),i._UZ(13,"div",25),i._UZ(14,"hr",26),i.TgZ(15,"div",27),i._uU(16," Nombre: "),i.qZA(),i.TgZ(17,"div",28),i._uU(18),i.qZA(),i._UZ(19,"div",25),i._UZ(20,"div",29),i.TgZ(21,"div",27),i._uU(22," Apellido: "),i.qZA(),i.TgZ(23,"div",30),i._uU(24),i.qZA(),i._UZ(25,"div",25),i._UZ(26,"div",29),i.TgZ(27,"div"),i.TgZ(28,"div",27),i._uU(29," Edad: "),i.qZA(),i.TgZ(30,"div",30),i._uU(31),i.qZA(),i._UZ(32,"div",25),i._UZ(33,"div",29),i.qZA(),i.YNc(34,J,7,1,"div",7),i.YNc(35,N,7,1,"div",7),i.TgZ(36,"div",27),i._uU(37," Correo electronico: "),i.qZA(),i.TgZ(38,"div",30),i._uU(39),i.qZA(),i._UZ(40,"div",25),i._UZ(41,"div",29),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e){const t=s.$implicit;i.xp6(4),i.AsE("",null==t?null:t.nombre," ",null==t?null:t.apellido,""),i.xp6(6),i.Q6J("ngIf","paciente"===(null==t?null:t.perfil)),i.xp6(1),i.Q6J("ngIf","paciente"!==(null==t?null:t.perfil)),i.xp6(7),i.hij(" ",null==t?null:t.nombre," "),i.xp6(6),i.hij(" ",null==t?null:t.apellido," "),i.xp6(7),i.hij(" ",null==t?null:t.edad," "),i.xp6(3),i.Q6J("ngIf","paciente"===(null==t?null:t.perfil)),i.xp6(1),i.Q6J("ngIf","especialista"===(null==t?null:t.perfil)),i.xp6(4),i.hij(" ",null==t?null:t.email," ")}}function k(e,s){if(1&e&&(i.TgZ(0,"div"),i.TgZ(1,"h2"),i._uU(2),i.qZA(),i.YNc(3,y,42,10,"div",16),i.qZA()),2&e){const t=i.oxw();i.xp6(2),i.Oqu(t.tipoUser),i.xp6(1),i.Q6J("ngForOf",t.usuarios)}}function w(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"button",43),i.NdJ("click",function(){return i.CHM(t),i.oxw().toggleDetalle()}),i._uU(1),i.qZA()}if(2&e){const t=i.oxw();i.xp6(1),i.Oqu(t.botonDetalle)}}function Q(e,s){1&e&&(i.TgZ(0,"div"),i._UZ(1,"app-spinner"),i.qZA())}const P=[{path:"",component:(()=>{class e{constructor(t){this.firestore=t,this.defaultImage="../../../assets/spinnerImage.gif",this.registroAdministrador=!1,this.usuarios=null,this.mostrarPacientes=!0,this.mostrarEspecialistas=!1,this.mostrarAdministradores=!1,this.tipoUser="Pacientes",this.detalle=!1,this.botonDetalle=`Ver ${this.tipoUser} en detalle`,this.getUsers()}ngOnInit(){}getUsers(){this.firestore.getPacientes().subscribe(t=>{setTimeout(()=>{this.pacientes=t,this.usuarios=t,console.log(this.usuarios)},1e3)}),this.firestore.getEspecialistas().subscribe(t=>{this.especialistas=t}),this.firestore.getAdmins().subscribe(t=>{this.administradores=t})}cambiarTipoUser(t){console.log(this.especialistas),this.tipoUser=t,this.registroAdministrador=!1,"Pacientes"===this.tipoUser?(this.usuarios=null,setTimeout(()=>{this.usuarios=this.pacientes},800)):"Especialistas"===this.tipoUser?(this.usuarios=null,setTimeout(()=>{this.usuarios=this.especialistas},800)):(this.usuarios=null,setTimeout(()=>{this.usuarios=this.administradores},800))}getAdmins(){this.firestore.getAdmins().subscribe(t=>{this.usuarios=t})}recibirEstado(t){this.registroAdministrador=t,this.cambiarTipoUser("Administradores")}toggleDetalle(){this.detalle=!this.detalle,this.botonDetalle=this.detalle?`Ver ${this.tipoUser} en formato reducido`:`Ver ${this.tipoUser} en detalle`}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(Z.C))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-usuarios"]],decls:18,vars:6,consts:[[1,"container","text-white"],[1,"nav","nav-pills","nav-fill"],[1,"nav-item","mx-2","my-1","noselect"],[1,"nav-link","bg-info","text-dark",3,"click"],[1,"nav-item","mx-2","mt-1","mb-2","noselect"],["class","nav-item mx-2 mt-1 mb-2 noselect",4,"ngIf"],[1,"row"],[4,"ngIf"],["class","btn btn-info w-50 d-block m-auto mt-2",3,"click",4,"ngIf"],[1,"nav-link","bg-warning","text-dark",3,"click"],["class","p-0",4,"ngIf"],[1,"p-0"],[3,"pacientes"],[3,"especialistas"],[3,"admins"],[3,"tipo","finalizado"],[4,"ngFor","ngForOf"],[1,"col-md-7"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-body"],[1,"box","box-info"],[1,"box-body"],[1,"col-sm-6"],["align","center"],[1,"clearfix"],[2,"margin","5px 0 5px 0"],[1,"col-sm-5","col-xs-6","title"],[1,"col-sm-7","col-xs-6"],[1,"bot-border"],[1,"col-sm-7"],["id","carouselExampleIndicators","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["alt","",1,"img-circle","img-responsive","profile-image",3,"defaultImage","lazyLoad"],[1,"carousel-item"],["alt","",1,"img-circle","img-responsive","profile-image","noselect",3,"src"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"fas","fa-chevron-left",2,"color","white"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"fas","fa-chevron-right",2,"color","white"],["alt","",1,"img-circle","img-responsive","profile-image","d-block","m-auto","noselect",3,"defaultImage","lazyLoad"],[1,"btn","btn-info","w-50","d-block","m-auto","mt-2",3,"click"]],template:function(t,a){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"ul",1),i.TgZ(2,"li",2),i.TgZ(3,"a",3),i.NdJ("click",function(){return a.cambiarTipoUser("Pacientes")}),i._uU(4,"Pacientes"),i.qZA(),i.qZA(),i.TgZ(5,"li",2),i.TgZ(6,"a",3),i.NdJ("click",function(){return a.cambiarTipoUser("Especialistas")}),i._uU(7,"Especialistas"),i.qZA(),i.qZA(),i.TgZ(8,"li",4),i.TgZ(9,"a",3),i.NdJ("click",function(){return a.cambiarTipoUser("Administradores")}),i._uU(10,"Administradores"),i.qZA(),i.qZA(),i.YNc(11,x,3,0,"li",5),i.qZA(),i.TgZ(12,"div",6),i.YNc(13,C,6,4,"div",7),i.YNc(14,O,2,1,"div",7),i.YNc(15,k,4,2,"div",7),i.YNc(16,w,2,1,"button",8),i.YNc(17,Q,2,0,"div",7),i.qZA(),i.qZA()),2&t&&(i.xp6(11),i.Q6J("ngIf","Administradores"===a.tipoUser),i.xp6(2),i.Q6J("ngIf",null!==a.usuarios&&!a.registroAdministrador&&!a.detalle),i.xp6(1),i.Q6J("ngIf",a.registroAdministrador),i.xp6(1),i.Q6J("ngIf",null!==a.usuarios&&!a.registroAdministrador&&a.detalle),i.xp6(1),i.Q6J("ngIf",null!==a.usuarios),i.xp6(1),i.Q6J("ngIf",null===a.usuarios))},directives:[n.O5,r._,_,m,T.J,n.sg,f.z1,U.O],styles:["input.hidden[_ngcontent-%COMP%]{position:absolute;left:-9999px}.profile-image[_ngcontent-%COMP%]{cursor:pointer;width:100px;height:100px;border-radius:50%}.title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.bot-border[_ngcontent-%COMP%]{border-bottom:1px #f8f8f8 solid;margin:5px 0}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[p.Bz.forChild(P)],p.Bz]}),e})();var M=l(2271);let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[n.ez,F,M.m,f.mZ]]}),e})()}}]);