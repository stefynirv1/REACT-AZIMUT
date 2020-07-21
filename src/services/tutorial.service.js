import http from "../http-common";

class TutorialDataService {
    getAll(){
        return http.get("/tutorials");
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data){
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`);
    }
    findByNombreUsuario(nombre_usuario) {
        return http.get(`/tutorials?nombre_usuario=${nombre_usuario}`);
    }
}
export default new TutorialDataService();