import React, { useState, useEffect } from 'react';

function Listado({ match }) {
  /*
    const { path } = match;
    const [cursos, setCursos] = useState(null);

    useEffect(() => {
      cursoService.getAll().then(x => setCursos(x));
    }, []);
  */
    let cursos = JSON.parse(localStorage.getItem('cursos')) || [{ 
      id: 1,
      nombre: 'HTML',
      horas: 12
  },
  { 
    id: 2,
    nombre: 'JavaScript',
    horas: 24
}];

  /*
    function deleteCurso(id) {
        setCursos(cursos.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        cursoService.delete(id).then(() => {
            setCursos(cursos => cursos.filter(x => x.id !== id));
        });
    }
*/
    return (
        <div>
            <h1>Cursos</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Id</th>
                        <th style={{ width: '35%' }}>Nombre</th>
                        <th style={{ width: '35%' }}>Horas</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos && cursos.map(curso =>
                      <tr key={curso.id}>
                            <td>{curso.id}</td>
                            <td>{curso.nombre}</td>
                            <td>{curso.horas}</td>
                        </tr>
                    )}
                    {cursos && !cursos.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No hay cursos para mostrar</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { Listado };