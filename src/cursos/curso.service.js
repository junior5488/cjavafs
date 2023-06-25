import config from 'config';
import { FetchCursos } from '@/cursos/fetch-cursos';


//localhost:8086/api/cursos
const baseUrl = `${config.apiUrl}/cursos`;

export const cursoService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


function getAll() {
    return FetchCursos.get(baseUrl);
}

function getById(id) {
    return FetchCursos.get(`${baseUrl}/${id}`);
}

function create(params) {
    return FetchCursos.post(baseUrl, params);
}

function update(id, params) {
    return FetchCursos.put(`${baseUrl}/${id}`, params);
}

function _delete(id) {
    return FetchCursos.delete(`${baseUrl}/${id}`);
}
