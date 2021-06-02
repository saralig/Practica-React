import React from 'react'
import {useState} from 'react'
import Select from 'react-select'


const App = () => {
  const [ nombreS, setNombre ] = useState('')
  const [ edadS, setEdad ] = useState('')
  const [ sexoS, setSexo ] = useState('')
  const [ tipoS, setTipo ] = useState('')
  const [ servicioS, setServicio ] = useState('')

  const [ datos, setDatos ] = useState([])
  //   [
  //   {nombre: '', sexo: '', edad: '', tipo: '', servicio: ''}
  // ])

  const sexo = [
    { value: 'macho', label: 'Macho' },
    { value: 'hembra', label: 'Hembra' },
  ]
  
  const tipo = [
    { value: 'perro', label: 'Perro' },
    { value: 'gato', label: 'Gato' },
    { value: 'hámster', label: 'Hámster' },
    { value: 'ave', label: 'Ave' },
  ]
  
  const servicio = [
    { value: 'valoración', label: 'Valoración' },
    { value: 'urgencias', label: 'Urgencias' },
    { value: 'hospitalización', label: 'Hospitalización' },
  ]

  const Tarjeta = () => {
    datos.map(e=>{
      return(<p>hola</p>)
        // <div className="card" style={{width: '18rem'}}>
        //   <div className="card-body">
        //     <h5 className="card-title">Card title</h5>
        //     <p className="card-text">{e.nombre}</p>
        //   </div>
        // </div>    
      // )
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let info = []
    info.push(nombreS, edadS, sexoS, tipoS, servicioS)
    setDatos([...datos, {nombre:nombreS, sexo:edadS, edad:sexoS, tipo:tipoS, servicio:servicioS}])
  }

  return (
    <div className='container-sm'>
      {console.log(datos.length)}
      <h1 className='display-5 text-center'>Veterinaria</h1>
      <div className='row'>
        <div className='col col-6'>
          <form className="form-group" onSubmit={handleSubmit} >
            <p>Nombre</p>
              <input type='text' className='form-control' value={nombreS} onChange={e=>setNombre(e.target.value)}/>
            <p>Edad</p>
              <input type='number' className='form-control' value={edadS} onChange={e=>setEdad(e.target.value)}/>
            <p>Sexo</p>
              <Select onChange={e=>setSexo(e.value)} options={sexo} />
            <p>Tipo</p>
              <Select onChange={e=>setTipo(e.value)} options={tipo} />
            <p>Sexo</p>
              <Select onChange={e=>setServicio(e.value)} options={servicio} /><br/>
            <input type="submit" className="btn btn-primary ml-1" value="Enviar" />
          </form>
        </div>
        <div className='col col-6 mx-auto'>
          {datos.length!==0&&<Tarjeta/>}
        </div>
      </div>
    </div>
  );
}

export default App;