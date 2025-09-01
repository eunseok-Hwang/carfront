import axios from "axios";
import type { Car } from "../type";

//자동차 목록 조회
export const getCars = async (): Promise<Car[]> => {
    const response = await axios.get("http://localhost:8080/cars");
    return response.data;
}

export const deleteCar = (id:number): Promise<number> => {
    alert(id + '번 데이터를 삭제합니다.');
    return Promise.resolve(id);
}

export const addCar = (car: Car): Promise<Car> => {
    const res: Car = {...car, id: 999};
    return Promise.resolve(res);
}

export const updateCar = (car: Car): Promise<Car> => {
    const res: Car = {...car}
    return Promise.resolve(res);
}