import React, { Fragment, useState } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner'

function App() {

  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] =  useState(false);

  let componente;
  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      cantidad={cantidad}
      total={total}
      plazo={plazo}
     />
  }


  return (

    <Fragment>
      <Header
        titulo="Prestamigo Ya!"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
      <div className="mensajes">
        {componente}
      </div>
      </div>

    </Fragment>

  );
}

export default App;
