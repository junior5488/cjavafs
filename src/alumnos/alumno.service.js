import config from 'config';
import { FetchAlumnos } from '@/alumnos/fetch-cursos';


//localhost:8086/api/cursos
const baseUrl = `${config.apiUrl}/alumnos`;

export const cursoService = {
    getAll,
    getById
};


function getAll() {
    return FetchCursos.get(baseUrl);
}

function getById(id) {
    return FetchCursos.get(`${baseUrl}/${id}`);
}