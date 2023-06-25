import React, { useState, useEffect } from 'react';

function ListadoAlumnos({ match }) {
  let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [{ 
    id: 1,
    nombre: 'Junior',
    apellidos: 'Chavez Valverde',
    edad: 35,
    correo: 'junior05.88@hotmail.com'
},
{ 
  id: 2,
  nombre: 'Pedro',
  apellidos: 'Ramos Vasquez',
  edad: 28,
  correo: 'pedrito2626@gmail.com'
}];

    return (
        <div>
            <h1>Alumnos</h1>
            <table className="table table-warning border-primary">
                <thead class="table-dark">
                    <tr>
                        <th style={{ width: '15%' }}>Id</th>
                        <th style={{ width: '20%' }}>Nombres</th>
                        <th style={{ width: '20%' }}>Apellidos</th>
                        <th style={{ width: '20%' }}>Correo</th>          
                        <th style={{ width: '15%' }}>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos && alumnos.map(alumno =>
                      <tr key={alumno.id}>
                            <td>{alumno.id}</td>
                            <td>{alumno.nombre}</td>
                        <td>{alumno.apellidos}</td>
                        <td>{alumno.correo}</td>
                            <td>{alumno.edad}</td>
                        </tr>
                    )}
                    {alumnos && !alumnos.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No hay alumnos para mostrar</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { ListadoAlumnos };