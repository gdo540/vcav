var selectoutils = document.getElementById("outils");
var matiere=document.getElementById("matiere");
var diametre=document.getElementById("diametre");
var nombre_de_dent=document.getElementById("nombre_de_dent")

var vcebauche=document.getElementById("vc_ebauche");
var vcfinition=document.getElementById("vc_finition");
var tour_ebauche=document.getElementById("tour_ebauche");
var tour_finition=document.getElementById("tour_finition");

var fzebauche=document.getElementById("fz_ebauche");
var fzfinition=document.getElementById("fz_finition");
var result_avance_ebauche=document.getElementById("avance_ebauche");
var result_avance_finition=document.getElementById("avance_finition");

var rotation
var finition
var avance_ebauche_fz
var avance_finition_fz

var calculer=document.getElementById("calculer")

const ars=[[12,16,0.2,0.05],[20,30,0.2,0.05],[8,12,0.2,0.05],[100,180,0.3,0.1],[100,120,0.5,0.1],[160,300,0.8,0.1],[160,300,0.4,0.1],[160,300,0.4,0.1]];
const carburemonobloc=[[20,40,0.25,0.05],[40,60,0.25,0.05],[20,30,0.2,0.05],[120,260,0.4,0.1],[120,260,0.5,0.1],[200,260,0.8,0.1],[200,260,0.4,0.1],[200,260,0.4,0.1]];
const plaquettecarbure=[[60,80,0.3,0.05],[120,160,0.3,0.05],[60,80,0.2,0.05],[400,600,0.4,0.1],[400,600,0.5,0.1],[400,600,0.8,0.1],[400,600,0.4,0.1],[400,600,0.4,0.1]];
const percagears_vc=[[14,14],[20,20],[8,12],[40,60],[60,60],[80,80],[80,80],[80,80]];
const percagears_fz=0.1*diametre.value;
const percagecarbure_vc=[[60,80,0.3,0.1],[120,160,0.3,0.1],[60,80,0.2,0.1],[200,600,0.3,0.1],[200,200,0.2,0.1],[120,120,0.4,0.1],[200,200,0.4,0.1],[200,200,0.4,0.1]];


function calcule(){
if (selectoutils.value==0){
    //rotation
    vcebauche.innerText=ars[matiere.value][0];
    vcfinition.innerText=ars[matiere.value][1];
    rotation=rotation_ebauche_finition(ars[matiere.value][0],parseFloat(diametre.value));
    tour_ebauche.innerText=rotation;
    finition=rotation_ebauche_finition(ars[matiere.value][1],parseFloat(diametre.value));
    tour_finition.innerText=finition;
    //avance
    fzebauche.innerText= ars[matiere.value][2];
    fzfinition.innerText=ars[matiere.value][3];
    
    //tourparmin,fz,nb_de_dents
    avance_ebauche_fz=fz_ebauche_finition(rotation,ars[matiere.value][2],nombre_de_dent.value);
    result_avance_ebauche.innerText=avance_ebauche_fz;
    avance_finition_fz=fz_ebauche_finition(finition,ars[matiere.value][3],nombre_de_dent.value);
    result_avance_finition.innerText=avance_finition_fz;

}
if (selectoutils.value==1){
    //rotation
    vcebauche.innerText=carburemonobloc[matiere.value][0];
    vcfinition.innerText=carburemonobloc[matiere.value][1];
    rotation=rotation_ebauche_finition(carburemonobloc[matiere.value][0],parseFloat(diametre.value));
    tour_ebauche.innerText=rotation;
    finition=rotation_ebauche_finition(carburemonobloc[matiere.value][1],parseFloat(diametre.value));
    tour_finition.innerText=finition;
    //avance
    fzebauche.innerText= carburemonobloc[matiere.value][2];
    fzfinition.innerText=carburemonobloc[matiere.value][3];
    
    //tourparmin,fz,nb_de_dents
    avance_ebauche_fz=fz_ebauche_finition(rotation,carburemonobloc[matiere.value][2],nombre_de_dent.value);
    result_avance_ebauche.innerText=avance_ebauche_fz;
    avance_finition_fz=fz_ebauche_finition(finition,carburemonobloc[matiere.value][3],nombre_de_dent.value);
    result_avance_finition.innerText=avance_finition_fz;

}
if (selectoutils.value==2){
     //rotation
     vcebauche.innerText=plaquettecarbure[matiere.value][0];
     vcfinition.innerText=plaquettecarbure[matiere.value][1];
     rotation=rotation_ebauche_finition(plaquettecarbure[matiere.value][0],parseFloat(diametre.value));
     tour_ebauche.innerText=rotation;
     finition=rotation_ebauche_finition(plaquettecarbure[matiere.value][1],parseFloat(diametre.value));
     tour_finition.innerText=finition;
     //avance
     fzebauche.innerText= plaquettecarbure[matiere.value][2];
     fzfinition.innerText=plaquettecarbure[matiere.value][3];
     
     //tourparmin,fz,nb_de_dents
     avance_ebauche_fz=fz_ebauche_finition(rotation,plaquettecarbure[matiere.value][2],nombre_de_dent.value);
     result_avance_ebauche.innerText=avance_ebauche_fz;
     avance_finition_fz=fz_ebauche_finition(finition,plaquettecarbure[matiere.value][3],nombre_de_dent.value);
     result_avance_finition.innerText=avance_finition_fz;
     
}
if (selectoutils.value==3){
    nombre_de_dent.value=1;
    //rotation
    vcebauche.innerText=percagears_vc[matiere.value][0];
    vcfinition.innerText=percagears_vc[matiere.value][1];
    rotation=rotation_ebauche_finition(percagears_vc[matiere.value][0],parseFloat(diametre.value));
    tour_ebauche.innerText=rotation;
    finition=rotation_ebauche_finition(percagears_vc[matiere.value][1],parseFloat(diametre.value));
    tour_finition.innerText=finition;
    //avance
    fzebauche.innerText= percagears_fz;
    fzfinition.innerText=percagears_fz;
    
    //tourparmin,fz,nb_de_dents
    avance_ebauche_fz=fz_ebauche_finition(rotation,percagears_fz,1);
    result_avance_ebauche.innerText=avance_ebauche_fz;
    avance_finition_fz=fz_ebauche_finition(finition,percagears_fz,1);
    result_avance_finition.innerText=avance_finition_fz;    


    

}

if (selectoutils.value==4){
    vcebauche.innerText=percagecarbure_vc[matiere.value][0];
    vcfinition.innerText=percagecarbure_vc[matiere.value][1];
    rotation=rotation_ebauche_finition(percagecarbure_vc[matiere.value][0],parseFloat(diametre.value));
    tour_ebauche.innerText=rotation;
    finition=rotation_ebauche_finition(percagecarbure_vc[matiere.value][1],parseFloat(diametre.value));
    tour_finition.innerText=finition;
    //avance
    fzebauche.innerText= percagecarbure_vc[matiere.value][2];
    fzfinition.innerText=percagecarbure_vc[matiere.value][3];
    
    //tourparmin,fz,nb_de_dents
    avance_ebauche_fz=fz_ebauche_finition(rotation,percagecarbure_vc[matiere.value][2],nombre_de_dent.value);
    result_avance_ebauche.innerText=avance_ebauche_fz;
    avance_finition_fz=fz_ebauche_finition(finition,percagecarbure_vc[matiere.value][3],nombre_de_dent.value);
    result_avance_finition.innerText=avance_finition_fz;
}

function rotation_ebauche_finition(vcf,diametref){
    let tourparmin_ebauche=(1000*vcf)/(Math.PI*diametref.toFixed(2));
    return tourparmin_ebauche.toFixed(3);
}

function fz_ebauche_finition(tourparmin,fz,nb_de_dents){
   let avance_ebauche=tourparmin*fz*nb_de_dents;
   return avance_ebauche.toFixed(3);

}
}
calculer.addEventListener("click",calcule,false )




