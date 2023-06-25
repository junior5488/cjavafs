export function configurarCursos() {
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
}