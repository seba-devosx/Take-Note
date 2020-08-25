window.onbeforeunload = function() {
  return "¿Desea recargar la página web?";
};
//objeto nota
const nota={
    id:0,
    titulo:'',
    nota:'',
    
  }
  
  //funcion para validar si hay notas creadas de no haber notas debera mostrar el mensaje que no hay notas 
  window.onload=function(){
    if(nota.id==1){
    //   alert("no hay notas");
      const h1 = document.createElement("DIV");
      h1.innerHTML = "<div id='titulo'class='text-center'><h1>No hay notas</h1></div>";
      document.body.appendChild(note_view).appendChild(h1);
    }
    else{
    //   alert("si hay notas");
      const div = document.createElement("DIV");
      // div.innerHTML = "<div id='titulo'class='text-center'><h1>Si hay Notas</h1></div><br>";
      document.body.appendChild(note_view).appendChild(div);
    }
    
  }
  //funcion para poder almacenar la notas y poder crear objeto nota
  function guardar(){
    const id =nota.id = nota.id+1;
    const titulo = nota.titulo = document.getElementById('titulo').value;
    const note = nota.nota = document.getElementById('nota').value
    
    if(document.getElementById("titulo").value==''){
      alert("Completa el campo titulo")
    }
    else if(document.getElementById("nota").value==''){
      alert("Anota tu idea")
    }
    else{
      console.log(id+" "+titulo+" "+note);
      // const div = document.createElement("DIV");
      // div.innerHTML = "<div class='note'id="+id+"><ID id="+id+">"+id+"<br>"+"TITULO"+titulo+"<br>"+"NOTA:"+note+"<br>"+"<button onClick='eliminar("+id+");'>borrar</button>";
     
      const div = document.createElement("DIV");
      div.innerHTML=
      `<div id="${id}" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">nota${id} <button type="button" id="borrar" class="close text-warning" aria-label="Close" onClick='eliminar(${id})'>
          <span aria-hidden="true">&times;</span>
        </button></div>
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${note}</p>
      </div>
 
    </div>`
    document.body.appendChild(note_view).appendChild(div);
    }
    
    
  }

  //funcion para ocultar y mostrar el boton
  function eliminar(id){
   
      var c;
      if(confirm(`¿estas seguro que deseas eliminar nota ${id}?`)){
        c="has seleccionado si"
        document.getElementById(id).remove();
      }
      else{
        c ="has seleccionado no"
      }
    
     
     
     
     console.log(id);
    
    
  }