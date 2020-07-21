import http from "../http-common";

class ElectrodomesticosDataService {
    getAll(){
        return http.get("/electrodomesticos");
    }

    get(id) {
        return http.get(`/electrodomesticos/${id}`);
    }

    create(data){
        return http.post("/electrodomesticos", data);
    }

    update(id, data) {
        return http.put(`/electrodomesticos/${id}`);
    }
    findByNombreElectrodomestico(nombre_electrodomestico) {
        return http.get(`/electrodomesticos?nombre_electrodomestico=${nombre_electrodomestico}`);
    }
}
export default new ElectrodomesticosDataService();