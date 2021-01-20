$(document).on("click","#btn_registrar",()=>{
	let ap=$('#apellidos').val();
	let nm=$('#nombres').val();
	let tf=$('#telefono').val();
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
		$('#msj_telefono').attr("class","text-danger");
		return false;
	}
	if(co.trim().length<16){
		$('#msj_correo').attr("class","text-danger");
		return false;
	}
	Swal.fire({
    icon: 'success',
    title: 'Registro completo',
    text: 'Datos correctamente ingresados',
})

})
// window.addEventListener("load",()=>{
// 	document.getElementById('btn_registrar').addEventListener("click",()=>{
// 		let ap=document.getElementById('apellidos');
// 		if(ap.value.trim().length>5 ){
// 			document.getElementById('msj_apellidos').innerHTML='Error: debe escribir mínimo 6 caracteres';
// 			document.getElementById('msj_apellidos').className='text-danger';
//             // return false;
// 		}
// 		let nm=document.getElementById('nombres');
//         if(nm.value.trim().length>5 ){
// 			document.getElementById('msj_nombres').innerHTML='Error: debe escribir mínimo 6 caracteres';
// 			document.getElementById('msj_nombres').className='text-danger';
//             // return false;
// 		}
// 		let tf=document.getElementById('telefono');
//         if(tf.value.trim().length>5 ){
// 			document.getElementById('msj_telefono').innerHTML='Error: debe escribir mínimo 6 caracteres';
// 			document.getElementById('msj_telefono').className='text-danger';
//             // return false;
// 		}
// 		let co=document.getElementById('correo');
//         if(co.value.trim().length>5 ){
// 			document.getElementById('msj_correo').innerHTML='Error: debe escribir mínimo 6 caracteres';
// 			document.getElementById('msj_correo').className='text-danger';
//             // return false;
// 		}
        
//         alert("formulario completo");
		
// 	})
// })
