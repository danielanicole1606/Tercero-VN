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
    	alert("Debe aceptar los términos y condiciones");
    	return false;
    }
    alert("Datos correctos");
// 	Swal.fire({
//     icon: 'success',
//     title: 'Registro completo',
//     text: 'Datos correctamente ingresados',
// })

})