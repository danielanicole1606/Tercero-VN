$(function(){ //cuando se cargue la pagina
    let c=0;
    let row="";
    datos.map( (fila)=> {
        c++;
    row+=`<tr> 
            <td>${c}</td> 
             <td>${fila.apellidos }</td> 
             <td>${fila.nombres }</td> 
             <td>${fila.cedula }</td> 
             <td>${fila.correo }</td> 
             <td>${fila.ciudad }</td> 
             <td>${fila.sexo }</td> 
          </tr>`;
    });
    $("#tbody_datos").html(row);

})

$(document).on("click","#btn_registrar",()=>{
	let ap=$('#apellidos').val();
	let nm=$('#nombres').val();
	let tf=$('#cedula').val();
	let co=$('#correo').val();

	if(ap.trim().length<5){
		$('#msj_apellidos').attr("class","text-danger");
		return false;
	}
	if(nm.trim().length<5){
		$('#msj_nombres').attr("class","text-danger");
		return false;
	}
	if(tf.trim().length<10){
		$('#msj_cedula').attr("class","text-danger");
		return false;
	}
	if(co.trim().length<16){
		$('#msj_correo').attr("class","text-danger");
		return false;
	}
    let city=$('#ciudad').val();
    if(city.length==0){
    	$('#msj_ciudad').attr("class","bg-danger");
    		return false;
    }
    let obj_sexo=$(".obj_radio");
    let sexo="";
    $(obj_sexo).map(function(){
    	if( $(this).prop('checked')==true){
    		sexo=$(this).val();
    	}   	  	
    });
    if(sexo==""){
    	alert('Seleccione una opción');
    	return false;
    }
    let terminos=$('#terminos');
    if( $(terminos).prop('checked')==false){
        alerta('error','Debe aceptar los términos','Alerta',true,'center',0);
        return false;
    }
    alerta('success','Datos registrados correctamente','Proceso correcto',false,'bottom-end',2000);
})
const alerta=(icon,text,title,showConfirmButton,position,timer)=>{
Swal.fire({
    icon: icon,
    text: text,
    title: title,
    position:position,
    showConfirmButton:showConfirmButton ,
    timer: timer,
    
})
}
const datos=[
    {apellidos:'Vinueza', nombres:'Daniela', cedula:'1710241926', correo:'danielav@gmail.com',
     ciudad:'Quito', sexo:'Mujer'},
    {apellidos:'Andrade', nombres:'Camila', cedula:'1794247702', correo:'andradecm@gmail.com',
     ciudad:'Quito', sexo:'Mujer'},
    {apellidos:'Lopez', nombres:'Elena', cedula:'1708891206', correo:'lpzelena@gmail.com',
     ciudad:'Cuenca', sexo:'Mujer'},
    {apellidos:'Jaramillo', nombres:'Pablo', cedula:'1700931856', correo:'pabjm@gmail.com',
     ciudad:'Guayaquil', sexo:'Hombre'},
    {apellidos:'Gutierrez', nombres:'Luis', cedula:'1702551606', correo:'gutluis@gmail.com',
     ciudad:'Cuenca', sexo:'Hombre'},
    {apellidos:'Gonzalez', nombres:'Ismael', cedula:'1722031121', correo:'ismaelgn@gmail.com',
     ciudad:'Quito', sexo:'Hombre'},
    {apellidos:'Arcos', nombres:'Adriana', cedula:'1794708542', correo:'adriarcos2v@gmail.com',
     ciudad:'Guayaquil', sexo:'Mujer'},
    {apellidos:'Rivera', nombres:'Cristian', cedula:'1719008155', correo:'crisriv6@gmail.com',
     ciudad:'Guayaquil', sexo:'Hombre'},
    {apellidos:'Medina', nombres:'Israel', cedula:'1797235217', correo:'medinais@gmail.com',
     ciudad:'Quito', sexo:'Hombre'}

];