"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[776],{6776:(Zt,x,l)=>{l.r(x),l.d(x,{TurnosModule:()=>Tt});var p=l(8583),Z=l(611),d=l(8239),v=l(8259),u=l.n(v),t=l(7716),h=l(5160),g=l(4132);function C(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",9),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).seleccionarPaciente(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.lnq("",null==e?null:e.nombre," ",e.apellido," - ",e.dni,"")}}function b(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",9),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).seleccionarEspecialidad(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function A(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).cancelarTurno(o)}),t.qZA()}}function q(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).rechazarTurno(o)}),t.qZA()}}function M(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",22),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).aceptarTurno(o)}),t.qZA()}}function E(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",23),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).finalizarTurno(o)}),t.qZA()}}function k(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",24),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).verComentario(o)}),t.qZA()}}function F(n,s){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"uppercase"),t.qZA(),t.TgZ(14,"td"),t.YNc(15,A,1,0,"i",15),t.YNc(16,q,1,0,"i",16),t.YNc(17,M,1,0,"i",17),t.YNc(18,E,1,0,"i",18),t.YNc(19,k,1,0,"i",19),t.qZA(),t._UZ(20,"td"),t.qZA()),2&n){const e=s.$implicit,i=t.oxw(3);t.xp6(2),t.Oqu(e.fecha),t.xp6(2),t.Oqu(e.hora),t.xp6(2),t.Oqu(e.especialidad),t.xp6(2),t.lnq("",null==i.especialista?null:i.especialista.nombre," ",null==i.especialista?null:i.especialista.apellido," - ",null==i.especialista?null:i.especialista.dni,""),t.xp6(2),t.lnq("",null==e.pacienteCompleto?null:e.pacienteCompleto.nombre," ",null==e.pacienteCompleto?null:e.pacienteCompleto.apellido," - ",null==e.pacienteCompleto?null:e.pacienteCompleto.dni,""),t.xp6(2),t.Oqu(t.lcZ(13,15,e.estado)),t.xp6(3),t.Q6J("ngIf","aceptado"!==e.estado&&"cancelado"!==e.estado&&"rechazado"!==e.estado),t.xp6(1),t.Q6J("ngIf","aceptado"!==e.estado&&"realizado"!==e.estado&&"rechazado"!==e.estado&&"cancelado"!==e.estado),t.xp6(1),t.Q6J("ngIf","realizado"!==e.estado&&"cancelado"!==e.estado&&"rechazado"!==e.estado&&"aceptado"!==e.estado),t.xp6(1),t.Q6J("ngIf","aceptado"===e.estado),t.xp6(1),t.Q6J("ngIf",(null==e?null:e.comentario)||(null==e?null:e.razon))}}function O(n,s){if(1&n&&(t.TgZ(0,"div",10),t.TgZ(1,"table",11),t.TgZ(2,"thead"),t.TgZ(3,"th",12),t._uU(4,"Fecha"),t.qZA(),t.TgZ(5,"th",12),t._uU(6,"Hora"),t.qZA(),t.TgZ(7,"th",12),t._uU(8,"Especialidad"),t.qZA(),t.TgZ(9,"th",12),t._uU(10,"Especialista"),t.qZA(),t.TgZ(11,"th",12),t._uU(12,"Paciente"),t.qZA(),t.TgZ(13,"th",12),t._uU(14,"Estado"),t.qZA(),t.TgZ(15,"th",13),t._uU(16,"Accion"),t.qZA(),t.qZA(),t.TgZ(17,"tbody"),t.YNc(18,F,21,17,"tr",14),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(18),t.Q6J("ngForOf",e.turnosMostrar)}}function N(n,s){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"span",25),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.mensaje)}}function U(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"h2",3),t._uU(2,"Listado de mis turnos"),t.qZA(),t.TgZ(3,"i",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().limpiarFiltros()}),t._uU(4,"Limpiar filtros"),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,C,2,3,"span",6),t.qZA(),t.TgZ(7,"div",5),t.YNc(8,b,2,1,"span",6),t.qZA(),t.YNc(9,O,19,1,"div",7),t.YNc(10,N,3,1,"div",8),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.pacientes),t.xp6(2),t.Q6J("ngForOf",e.especialidades),t.xp6(1),t.Q6J("ngIf",""===e.mensaje),t.xp6(1),t.Q6J("ngIf",""!==e.mensaje)}}function y(n,s){1&n&&t._UZ(0,"app-spinner")}let J=(()=>{class n{constructor(e){var i=this;this.firestore=e,this.turnos=[],this.turnosMostrar=[],this.pacientes=[],this.mensaje="",this.firestore.turnosObs.subscribe(function(){var o=(0,d.Z)(function*(a){i.especialista=JSON.parse(localStorage.getItem("usuario")),i.turnos=[];let c=0;i.especialidades=[];for(let r of a)r.especialista===i.especialista.dni&&(i.turnos.push(r),c=i.especialidades.indexOf(r.especialidad),-1===c&&i.especialidades.push(r.especialidad));yield i.getPacientes(),i.turnosMostrar=i.turnos});return function(a){return o.apply(this,arguments)}}())}ngOnInit(){}limpiarFiltros(){this.mensaje="",this.turnosMostrar=this.turnos}getPacientes(){var e=this;return(0,d.Z)(function*(){let o;for(let a of e.turnos)o=yield e.firestore.getPaciente(a.paciente),a.pacienteCompleto=o,e.pacientes.push(o);e.pacientes=e.eliminarObjetosDuplicados(e.pacientes,"dni")})()}eliminarObjetosDuplicados(e,i){var o=[],a={};for(let c in e)a[e[c][i]]=e[c];for(let c in a)o.push(a[c]);return o}seleccionarPaciente(e){this.turnosMostrar=[],this.paciente=e;for(let i of this.turnos)i.paciente===e.dni&&this.turnosMostrar.push(i);0===this.turnosMostrar.length&&(this.mensaje="No hay turnos con el paciente seleccionado")}seleccionarEspecialidad(e){this.mensaje="",this.turnosMostrar=[],this.especialidad=e;for(let i of this.turnos)i.especialidad===e&&this.turnosMostrar.push(i);0===this.turnosMostrar.length&&(this.mensaje="No hay turnos con la especialidad seleccionada")}aceptarTurno(e){e.estado="aceptado",this.firestore.modificarEstadoTurno(e)}rechazarTurno(e){var i=this;return(0,d.Z)(function*(){const{value:o}=yield u().fire({title:"Finalizar turno",input:"text",inputLabel:"Ingrese un la razon por la que rechaza el turno: "});o&&(e.estado="rechazado",e.razon=o,i.firestore.modificarEstadoTurno(e))})()}cancelarTurno(e){var i=this;return(0,d.Z)(function*(){const{value:o}=yield u().fire({title:"Finalizar turno",input:"text",inputLabel:"Ingrese la razon por la que cancela el turno: "});o&&(e.estado="cancelado",e.razon=o,i.firestore.modificarEstadoTurno(e))})()}finalizarTurno(e){var i=this;return(0,d.Z)(function*(){const{value:o}=yield u().fire({title:"Finalizar turno",input:"text",inputLabel:"Ingrese un comentario sobre el turno: "});o&&(e.estado="realizado",e.comentario=o,i.firestore.modificarEstadoTurno(e))})()}verComentario(e){(null==e?void 0:e.comentario)?u().fire({title:"Comentario sobre el turno",text:e.comentario}):(null==e?void 0:e.razon)&&u().fire({title:"Motivo de cancelacion/rechazo del turno",text:e.razon})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-mis-turnos-especialista"]],decls:4,vars:2,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["spinner",""],[1,"text-center","text-light"],[1,"bi","bi-funnel-fill","text-info","noselect",3,"click"],[1,"col-12","col-sm-6"],["class","badge rounded-pill bg-dark text-light m-1 mt-2 p-2 noselect",3,"click",4,"ngFor","ngForOf"],["class","table-responsive text-center",4,"ngIf"],[4,"ngIf"],[1,"badge","rounded-pill","bg-dark","text-light","m-1","mt-2","p-2","noselect",3,"click"],[1,"table-responsive","text-center"],[1,"table","table-dark","table-hover","noselect"],["scope","col"],["scope","col-2"],[4,"ngFor","ngForOf"],["class","bi bi-x-square-fill","title","Cancelar turno",3,"click",4,"ngIf"],["class","bi bi-x-lg ms-1","title","Rechazar turno",3,"click",4,"ngIf"],["class","bi bi-check-circle ms-1","title","Aceptar turno",3,"click",4,"ngIf"],["class","bi bi-check-square-fill ms-1","title","Finalizar turno",3,"click",4,"ngIf"],["class","bi bi-layout-text-sidebar-reverse ms-1","title","Ver rese\xf1a",3,"click",4,"ngIf"],["title","Cancelar turno",1,"bi","bi-x-square-fill",3,"click"],["title","Rechazar turno",1,"bi","bi-x-lg","ms-1",3,"click"],["title","Aceptar turno",1,"bi","bi-check-circle","ms-1",3,"click"],["title","Finalizar turno",1,"bi","bi-check-square-fill","ms-1",3,"click"],["title","Ver rese\xf1a",1,"bi","bi-layout-text-sidebar-reverse","ms-1",3,"click"],[1,"text-danger"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,U,11,4,"div",1),t.YNc(2,y,1,0,"ng-template",null,2,t.W1O),t.qZA()),2&e){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.turnosMostrar.length)("ngIfElse",o)}},directives:[p.O5,p.sg,g.O],pipes:[p.gd],styles:[""]}),n})();function I(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",9),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).seleccionarEspecialista(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.lnq("",null==e?null:e.nombre," ",e.apellido," - ",e.dni,"")}}function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",9),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).seleccionarEspecialidad(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function z(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",18),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).cancelarTurno(o)}),t.qZA()}}function Y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).verComentario(o)}),t.qZA()}}function S(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"uppercase"),t.qZA(),t.TgZ(14,"td"),t.YNc(15,z,1,0,"i",15),t.YNc(16,Y,1,0,"i",16),t.TgZ(17,"i",17),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).verEncuesta()}),t.qZA(),t.qZA(),t._UZ(18,"td"),t.qZA()}if(2&n){const e=s.$implicit,i=t.oxw(3);t.xp6(2),t.Oqu(e.fecha),t.xp6(2),t.Oqu(e.hora),t.xp6(2),t.Oqu(e.especialidad),t.xp6(2),t.lnq("",null==e.especialistaCompleto?null:e.especialistaCompleto.nombre," ",null==e.especialistaCompleto?null:e.especialistaCompleto.apellido," - ",null==e.especialistaCompleto?null:e.especialistaCompleto.dni,""),t.xp6(2),t.lnq("",null==i.paciente?null:i.paciente.nombre," ",null==i.paciente?null:i.paciente.apellido," - ",null==i.paciente?null:i.paciente.dni,""),t.xp6(2),t.Oqu(t.lcZ(13,12,e.estado)),t.xp6(3),t.Q6J("ngIf","aceptado"!==e.estado&&"cancelado"!==e.estado&&"rechazado"!==e.estado),t.xp6(1),t.Q6J("ngIf",(null==e?null:e.comentario)||(null==e?null:e.razon))}}function P(n,s){if(1&n&&(t.TgZ(0,"div",10),t.TgZ(1,"table",11),t.TgZ(2,"thead"),t.TgZ(3,"th",12),t._uU(4,"Fecha"),t.qZA(),t.TgZ(5,"th",12),t._uU(6,"Hora"),t.qZA(),t.TgZ(7,"th",12),t._uU(8,"Especialidad"),t.qZA(),t.TgZ(9,"th",12),t._uU(10,"Especialista"),t.qZA(),t.TgZ(11,"th",12),t._uU(12,"Paciente"),t.qZA(),t.TgZ(13,"th",12),t._uU(14,"Estado"),t.qZA(),t.TgZ(15,"th",13),t._uU(16,"Accion"),t.qZA(),t.qZA(),t.TgZ(17,"tbody"),t.YNc(18,S,19,14,"tr",14),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(18),t.Q6J("ngForOf",e.turnosMostrar)}}function j(n,s){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"span",20),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.mensaje)}}function Q(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"h2",3),t._uU(2,"Listado de mis turnos"),t.qZA(),t.TgZ(3,"i",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().limpiarFiltros()}),t._uU(4,"Limpiar filtros"),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,I,2,3,"span",6),t.qZA(),t.TgZ(7,"div",5),t.YNc(8,w,2,1,"span",6),t.qZA(),t.YNc(9,P,19,1,"div",7),t.YNc(10,j,3,1,"div",8),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.especialistas),t.xp6(2),t.Q6J("ngForOf",e.especialidades),t.xp6(1),t.Q6J("ngIf",""===e.mensaje),t.xp6(1),t.Q6J("ngIf",""!==e.mensaje)}}function D(n,s){1&n&&t._UZ(0,"app-spinner")}let H=(()=>{class n{constructor(e){var i=this;this.firestore=e,this.turnos=[],this.pacientes=[],this.especialistas=[],this.especialidades=[],this.mensaje="",this.firestore.turnosObs.subscribe(function(){var o=(0,d.Z)(function*(a){i.paciente=JSON.parse(localStorage.getItem("usuario"));let c=0;for(let r of a)r.paciente===i.paciente.dni&&(i.turnos.push(r),c=i.especialidades.indexOf(r.especialidad),-1===c&&i.especialidades.push(r.especialidad));yield i.getEspecialista(),console.log(i.especialidades),i.turnosMostrar=i.turnos});return function(a){return o.apply(this,arguments)}}())}ngOnInit(){}limpiarFiltros(){this.mensaje="",this.turnosMostrar=this.turnos}getEspecialista(){var e=this;return(0,d.Z)(function*(){let o;for(let a of e.turnos)o=yield e.firestore.getEspecialista(a.especialista),a.especialistaCompleto=o,e.especialistas.push(o);e.especialistas=e.eliminarObjetosDuplicados(e.especialistas,"dni"),console.log(e.especialistas)})()}eliminarObjetosDuplicados(e,i){var o=[],a={};for(let c in e)a[e[c][i]]=e[c];for(let c in a)o.push(a[c]);return o}seleccionarEspecialista(e){this.turnosMostrar=[],this.especialista=e;for(let i of this.turnos)i.especialista===e.dni&&this.turnosMostrar.push(i);0===this.turnosMostrar.length&&(this.mensaje="No hay turnos con el especialista seleccionado")}seleccionarEspecialidad(e){this.mensaje="",this.turnosMostrar=[],this.especialidad=e;for(let i of this.turnos)i.especialidad===e&&this.turnosMostrar.push(i);0===this.turnosMostrar.length&&(this.mensaje="No hay turnos con la especialidad seleccionada")}cancelarTurno(e){var i=this;return(0,d.Z)(function*(){const{value:o}=yield u().fire({title:"Cancelaci\xf3n de turno",input:"text",inputLabel:"Motivo de cancelaci\xf3n",inputValue:"",showCancelButton:!0,inputValidator:a=>a?"":"Debe especificar el motivo de la cancelaci\xf3n",inputAttributes:{required:"true"}});o?(e.estado="cancelado",e.razon=o,i.firestore.modificarEstadoTurno(e)):u().fire({text:"El turno no ha podido ser cancelado. Motivo: Debe especificar una razon",timer:2500,timerProgressBar:!0,icon:"error",position:"bottom",toast:!0})})()}verComentario(e){(null==e?void 0:e.comentario)?u().fire({title:"Comentario sobre el turno",text:e.comentario}):(null==e?void 0:e.razon)&&u().fire({title:"Motivo de cancelacion/rechazo del turno",text:e.razon})}verEncuesta(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-mis-turnos-paciente"]],decls:4,vars:2,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["spinner",""],[1,"text-center","text-light"],[1,"bi","bi-funnel-fill","text-info","noselect",3,"click"],[1,"col-12","col-sm-6"],["class","badge rounded-pill bg-dark text-light m-1 mt-2 p-2 noselect",3,"click",4,"ngFor","ngForOf"],["class","table-responsive text-center",4,"ngIf"],[4,"ngIf"],[1,"badge","rounded-pill","bg-dark","text-light","m-1","mt-2","p-2","noselect",3,"click"],[1,"table-responsive","text-center"],[1,"table","table-dark","table-hover","noselect"],["scope","col"],["scope","col-2"],[4,"ngFor","ngForOf"],["class","bi bi-x-square-fill","title","Cancelar turno",3,"click",4,"ngIf"],["class","bi bi-layout-text-sidebar-reverse ms-1","title","Ver rese\xf1a",3,"click",4,"ngIf"],[1,"bi","bi-ui-checks","ms-2",3,"click"],["title","Cancelar turno",1,"bi","bi-x-square-fill",3,"click"],["title","Ver rese\xf1a",1,"bi","bi-layout-text-sidebar-reverse","ms-1",3,"click"],[1,"text-danger"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,Q,11,4,"div",1),t.YNc(2,D,1,0,"ng-template",null,2,t.W1O),t.qZA()),2&e){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.turnosMostrar)("ngIfElse",o)}},directives:[p.O5,p.sg,g.O],pipes:[p.gd],styles:[""]}),n})();var f=l(665),$=l(7989);function L(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-tabla-paciente",14),t.NdJ("enviar",function(o){return t.CHM(e),t.oxw(2).recibirPaciente(o)}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("pacientes",e.pacientes)}}function B(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,L,1,1,"app-tabla-paciente",13),t.qZA()),2&n){const e=t.oxw(),i=t.MAs(20);t.xp6(1),t.Q6J("ngIf",void 0!==e.pacientes)("ngIfElse",i)}}function V(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.lnq("Turno para el paciente ",e.paciente.nombre," ",e.paciente.apellido," con DNI: ",e.paciente.dni,"")}}function R(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().cambioEspecialidad(a.especialidad)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.Oqu(null==e?null:e.especialidad)}}function X(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",16),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().cambiarEspecialista(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.AsE("",null==e?null:e.nombre," ",null==e?null:e.apellido,"")}}function W(n,s){if(1&n&&(t.TgZ(0,"span",17),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",null==e.fechaSeleccionada?null:e.fechaSeleccionada.dia," ")}}function G(n,s){if(1&n&&(t.TgZ(0,"span",17),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.hora," ")}}function K(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",20),t.TgZ(1,"div",21),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).seleccionarFecha(a)}),t.TgZ(2,"span",22),t._uU(3),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(3),t.hij(" ",e.dia," ")}}function tt(n,s){if(1&n&&(t.TgZ(0,"div",18),t.YNc(1,K,4,1,"div",19),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.fechasEspecialistaActual)}}function et(n,s){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",23),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.mensaje)}}function it(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",26),t.TgZ(1,"span",27),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).seleccionarHora(a)}),t._uU(2),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(2),t.Oqu(e)}}function nt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",18),t.YNc(1,it,3,1,"div",24),t.TgZ(2,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().fechaSeleccionada=void 0}),t._uU(3,"Volver atras"),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==e.fechaSeleccionada?null:e.fechaSeleccionada.turnosDelDia)}}function ot(n,s){1&n&&t._UZ(0,"app-spinner")}function at(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",13),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(3).seleccionarEspecialista(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.lnq("",null==e?null:e.nombre," ",e.apellido," - ",e.dni,"")}}function ct(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",13),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(3).seleccionarEspecialidad(a)}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function rt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"td"),t.TgZ(1,"i",14),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).cancelarTurno(o)}),t.qZA(),t.qZA()}}function lt(n,s){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"uppercase"),t.qZA(),t.YNc(14,rt,2,0,"td",12),t._UZ(15,"td"),t.qZA()),2&n){const e=s.$implicit;t.xp6(2),t.Oqu(e.fecha),t.xp6(2),t.Oqu(e.hora),t.xp6(2),t.Oqu(e.especialidad),t.xp6(2),t.lnq("",null==e.especialistaCompleto?null:e.especialistaCompleto.nombre," ",null==e.especialistaCompleto?null:e.especialistaCompleto.apellido," - ",null==e.especialistaCompleto?null:e.especialistaCompleto.dni,""),t.xp6(2),t.lnq("",null==e.pacienteCompleto?null:e.pacienteCompleto.nombre," ",null==e.pacienteCompleto?null:e.pacienteCompleto.apellido," - ",null==e.pacienteCompleto?null:e.pacienteCompleto.dni,""),t.xp6(2),t.Oqu(t.lcZ(13,11,e.estado)),t.xp6(2),t.Q6J("ngIf","aceptado"!==e.estado&&"realizado"!==e.estado&&"rechazado"!==e.estado&&"cancelado"!==e.estado)}}function pt(n,s){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"span",15),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw(3);t.xp6(2),t.Oqu(e.mensaje)}}function ut(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"h2",3),t._uU(2,"Listado de mis turnos"),t.qZA(),t.TgZ(3,"i",4),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).limpiarFiltros()}),t._uU(4,"Limpiar filtros"),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,at,2,3,"span",6),t.qZA(),t.TgZ(7,"div",5),t.YNc(8,ct,2,1,"span",6),t.qZA(),t.TgZ(9,"div",7),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"th",9),t._uU(13,"Fecha"),t.qZA(),t.TgZ(14,"th",9),t._uU(15,"Hora"),t.qZA(),t.TgZ(16,"th",9),t._uU(17,"Especialidad"),t.qZA(),t.TgZ(18,"th",9),t._uU(19,"Especialista"),t.qZA(),t.TgZ(20,"th",9),t._uU(21,"Paciente"),t.qZA(),t.TgZ(22,"th",9),t._uU(23,"Estado"),t.qZA(),t.TgZ(24,"th",10),t._uU(25,"Accion"),t.qZA(),t.qZA(),t.TgZ(26,"tbody"),t.YNc(27,lt,16,13,"tr",11),t.qZA(),t.qZA(),t.qZA(),t.YNc(28,pt,3,1,"div",12),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(6),t.Q6J("ngForOf",e.especialistas),t.xp6(2),t.Q6J("ngForOf",e.especialidades),t.xp6(19),t.Q6J("ngForOf",e.turnosMostrar),t.xp6(1),t.Q6J("ngIf",""!==e.mensaje)}}function dt(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,ut,29,4,"div",1),t.qZA()),2&n){const e=t.oxw(),i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",e.turnos[0].especialistaCompleto)("ngIfElse",i)}}function _t(n,s){1&n&&t._UZ(0,"app-spinner")}const mt=[{path:"mis-turnos/especialista",component:J},{path:"mis-turnos/paciente",component:H},{path:"solicitar-turno",component:(()=>{class n{constructor(e,i){this.firestore=e,this.datePipe=i,this.especialidadActual="",this.paciente=null,this.array=[],this.turnos=[],this.turnosM=[],this.turnosT=[],this.fechas=[],this.fechasEspecialistaActual=[],this.fecha="",this.hora="",this.mensaje="",this.recibido=!1,this.turnosM=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30"],this.turnosT=["13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30"],this.turnos=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30"],this.getEspecialidades(),this.getEspecialistas(),this.getPacientes(),this.obtenerProximosDias(new Date,15)}ngOnInit(){}cambiarEspecialista(e){var i;"paciente"===(null===(i=this.firestore.usuarioActual)||void 0===i?void 0:i.perfil)&&!this.paciente&&(this.paciente=this.firestore.usuarioActual,console.log(this.paciente)),this.especialista!==e&&(this.mensaje="",this.especialista=e,this.fechasEspecialistaActual=[],this.cargarHorarios())}seleccionarFecha(e){this.fechaSeleccionada=e}cargarHorarios(){var e,i,o,a;if(null===(e=this.especialista)||void 0===e?void 0:e.horarios)for(let c of this.fechas)for(let r of null===(i=this.especialista)||void 0===i?void 0:i.horarios){let _;if(c.getDay()===r.dia){if(6!==c.getDay()?"T-M"===r.turno?(_={dia:this.datePipe.transform(c,"dd/MM/yyyy"),turnosDelDia:this.turnos.map(m=>m)},console.log(_.turnosDelDia)):_="M"===r.turno?{dia:this.datePipe.transform(c,"dd/MM/yyyy"),turnosDelDia:this.turnosM.map(m=>m)}:{dia:this.datePipe.transform(c,"dd/MM/yyyy"),turnosDelDia:this.turnosT.map(m=>m)}:_={dia:this.datePipe.transform(c,"dd/MM/yyyy"),turnosDelDia:this.turnosM.map((m,T)=>{if(T<13)return m})},null===(a=null===(o=this.especialista)||void 0===o?void 0:o.turno)||void 0===a?void 0:a.length)for(let m of this.especialista.turno)if(m.fecha===_.dia){let T=_.turnosDelDia.indexOf(m.hora);if(-1!==T){let xt=_.turnosDelDia.splice(T,1);console.log(xt[0])}}console.log(_),this.fechasEspecialistaActual.push(_)}}else this.mensaje="El especialista no tiene disponibilidad horaria",console.log(this.mensaje)}seleccionarHora(e){this.hora=e,console.log("El turno es el dia: ",this.fechaSeleccionada.dia," a la hora: ",this.hora)}getEspecialidades(){this.firestore.especialidadesObs.subscribe(e=>{this.especialidades=e})}getEspecialistas(){this.firestore.especialistasObs.subscribe(e=>{this.especialistas=e})}getPacientes(){this.firestore.pacientesObs.subscribe(e=>{this.pacientes=e})}cambioEspecialidad(e){this.hora="",this.fechaSeleccionada=null,this.especialidadActual=e,this.array=this.especialistas.filter(i=>{let o=!1;for(let a of i.especialidad)if(e===a){o=!0;break}return o?i:null})}solicitarTurno(){var e,i,o;console.log(this.paciente);let a={fecha:this.fechaSeleccionada.dia,hora:this.hora,dniPaciente:this.paciente.dni,especialidad:this.especialidadActual};(null===(e=this.especialista)||void 0===e?void 0:e.turno)||(this.especialista.turno=[]),(null===(i=this.paciente)||void 0===i?void 0:i.turno)||(this.paciente.turno=[]),this.especialista.turno.push(a);let c={especialidad:this.especialidadActual,especialista:null===(o=this.especialista)||void 0===o?void 0:o.dni,fecha:this.fechaSeleccionada.dia,hora:this.hora};this.paciente.turno.push(c),this.firestore.addTurnoPaciente(this.paciente.turno,this.paciente.id),this.firestore.addTurnoEspecialista(this.especialista),c.especialista=this.especialista.dni,c.paciente=this.paciente.dni,c.estado="pendiente",this.firestore.addTurno(c),u().fire({text:"Turno sacado con exito",timer:2e3,timerProgressBar:!0,icon:"success",toast:!0,position:"bottom"})}obtenerProximosDias(e,i){for(let o=0;o<i;o++)e.setDate(e.getDate()+1),this.fechas.push(new Date(e))}recibirPaciente(e){this.recibido=!0,this.paciente=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.C),t.Y36(p.uU))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-solicitar-turno"]],decls:21,vars:10,consts:[[1,"container"],[4,"ngIf"],[3,"ngSubmit"],[1,"col-12","col-sm-6","text-light"],[1,"col-12","col-sm-6"],["class","badge rounded-pill bg-info text-dark mt-2 m-1 noselect p-2",3,"click",4,"ngFor","ngForOf"],["class","badge rounded-pill bg-dark text-light m-1 mt-2 p-2 noselect",3,"click",4,"ngFor","ngForOf"],["class","badge rounded-pill bg-warning text-dark m-1 mt-2 p-2 noselect",4,"ngIf"],[1,"col-12","mt-2"],["class","row",4,"ngIf"],["class","col-4",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],["spinner",""],[3,"pacientes","enviar",4,"ngIf","ngIfElse"],[3,"pacientes","enviar"],[1,"badge","rounded-pill","bg-info","text-dark","mt-2","m-1","noselect","p-2",3,"click"],[1,"badge","rounded-pill","bg-dark","text-light","m-1","mt-2","p-2","noselect",3,"click"],[1,"badge","rounded-pill","bg-warning","text-dark","m-1","mt-2","p-2","noselect"],[1,"row"],["class","col-4",4,"ngFor","ngForOf"],[1,"col-4"],[3,"click"],[1,"badge","rounded-pill","bg-dark","text-light","m-1","mt-2","p-2","noselect"],[1,"text-danger"],["class","col-2",4,"ngFor","ngForOf"],[1,"btn","btn-info","mt-2",3,"click"],[1,"col-2"],[1,"badge","rounded-pill","bg-dark","text-light","p-2","noselect",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,B,2,2,"div",1),t.TgZ(2,"div"),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return i.solicitarTurno()}),t.TgZ(4,"div",3),t.YNc(5,V,2,3,"span",1),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,R,2,1,"span",5),t.qZA(),t.TgZ(8,"div",4),t.YNc(9,X,2,2,"span",6),t.YNc(10,W,2,1,"span",7),t.YNc(11,G,2,1,"span",7),t.qZA(),t.TgZ(12,"div",8),t.YNc(13,tt,2,1,"div",9),t.YNc(14,et,3,1,"div",10),t.YNc(15,nt,4,1,"div",9),t.qZA(),t.TgZ(16,"div",8),t.TgZ(17,"button",11),t._uU(18,"Solicitar turno"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(19,ot,1,0,"ng-template",null,12,t.W1O),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf","admin"===(null==i.firestore||null==i.firestore.usuarioActual?null:i.firestore.usuarioActual.perfil)),t.xp6(4),t.Q6J("ngIf",i.paciente),t.xp6(2),t.Q6J("ngForOf",i.especialidades),t.xp6(2),t.Q6J("ngForOf",i.array),t.xp6(1),t.Q6J("ngIf",i.fechaSeleccionada),t.xp6(1),t.Q6J("ngIf",i.hora),t.xp6(2),t.Q6J("ngIf",!i.fechaSeleccionada&&""===i.mensaje),t.xp6(1),t.Q6J("ngIf",""!==i.mensaje),t.xp6(1),t.Q6J("ngIf",i.fechaSeleccionada),t.xp6(2),t.Q6J("disabled",""===i.hora||null===i.paciente))},directives:[p.O5,f._Y,f.JL,f.F,p.sg,$._,g.O],styles:[""]}),n})()},{path:"",component:(()=>{class n{constructor(e){var i=this;this.firestore=e,this.mensaje="",this.firestore.turnosObs.subscribe(function(){var o=(0,d.Z)(function*(a){let c;i.turnos=a,i.especialidades=[];for(let r of i.turnos)c=i.especialidades.indexOf(r.especialidad),-1===c&&i.especialidades.push(r.especialidad);yield i.getPacientes(),yield i.getEspecialistas(),console.log(i.turnos),i.turnosMostrar=i.turnos});return function(a){return o.apply(this,arguments)}}())}ngOnInit(){}getPacientes(){var e=this;return(0,d.Z)(function*(){for(let i of e.turnos)i.pacienteCompleto=yield e.firestore.getPaciente(i.paciente)})()}getEspecialistas(){var e=this;return(0,d.Z)(function*(){let o;e.especialistas=[];for(let a of e.turnos)o=yield e.firestore.getEspecialista(a.especialista),a.especialistaCompleto=o,e.especialistas.push(o);e.especialistas=e.eliminarObjetosDuplicados(e.especialistas,"dni"),console.log(e.especialistas)})()}limpiarFiltros(){this.mensaje="",this.turnosMostrar=this.turnos}seleccionarEspecialista(e){this.turnosMostrar=[],this.especialista=e;for(let i of this.turnos)i.especialista===e.dni&&this.turnosMostrar.push(i);0===this.turnosMostrar.length&&(this.mensaje="No hay turnos con el especialista seleccionado")}seleccionarEspecialidad(e){this.mensaje="",this.turnosMostrar=[],this.especialidad=e;for(let i of this.turnos)i.especialidad===e&&this.turnosMostrar.push(i);0===this.turnosMostrar.length&&(this.mensaje="No hay turnos con la especialidad seleccionada")}eliminarObjetosDuplicados(e,i){var o=[],a={};for(let c in e)a[e[c][i]]=e[c];for(let c in a)o.push(a[c]);return o}cancelarTurno(e){var i=this;return(0,d.Z)(function*(){const{value:o}=yield u().fire({title:"Cancelaci\xf3n de turno",input:"text",inputLabel:"Motivo de cancelaci\xf3n",inputValue:"",showCancelButton:!0,inputValidator:a=>a?"":"Debe especificar el motivo de la cancelaci\xf3n",inputAttributes:{required:"true"}});o?(e.estado="cancelado",e.razon=o,i.firestore.modificarEstadoTurno(e)):u().fire({text:"El turno no ha podido ser cancelado. Motivo: Debe especificar una razon",timer:2500,timerProgressBar:!0,icon:"error",position:"bottom",toast:!0})})()}verComentario(e){(null==e?void 0:e.comentario)?u().fire({title:"Comentario sobre el turno",text:e.comentario}):(null==e?void 0:e.razon)&&u().fire({title:"Motivo de cancelacion/rechazo del turno",text:e.razon})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-turnos"]],decls:4,vars:2,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["spinner",""],[1,"text-center","text-light"],[1,"bi","bi-funnel-fill","text-info","noselect",3,"click"],[1,"col-12","col-sm-6"],["class","badge rounded-pill bg-dark text-light m-1 mt-2 p-2 noselect",3,"click",4,"ngFor","ngForOf"],[1,"table-responsive","text-center"],[1,"table","table-dark","table-hover","noselect"],["scope","col"],["scope","col-2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"badge","rounded-pill","bg-dark","text-light","m-1","mt-2","p-2","noselect",3,"click"],["title","Cancelar turno",1,"bi","bi-x-square-fill",3,"click"],[1,"text-danger"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,dt,2,2,"div",1),t.YNc(2,_t,1,0,"ng-template",null,2,t.W1O),t.qZA()),2&e){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.turnosMostrar)("ngIfElse",o)}},directives:[p.O5,p.sg,g.O],pipes:[p.gd],styles:[""]}),n})()}];let ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(mt)],Z.Bz]}),n})();var ht=l(2271),gt=l(9433);let Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[p.uU],imports:[[p.ez,ft,f.u5,f.UX,ht.m,gt.UsuariosModule]]}),n})()}}]);