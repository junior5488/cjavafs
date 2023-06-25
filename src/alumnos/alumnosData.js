export function configurarAlumnos() {
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
}