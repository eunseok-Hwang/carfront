import type { Car } from "../type";

//자동차 목록 조회
export const getCars = (): Car[] => {
    //서버로 데이터 조회 ==> 응답 데이터 리턴
    const getCarsDummy = [
        {
            id: 1,
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            registrationNumber: 'ADF-1121',
            modelYear: 2023,
            price: 59000
        },
        {
            id: 2,
            brand: 'Hyundai',
            model: 'Sonatn',
            color: 'gray',
            registrationNumber: 'DN8-0901',
            modelYear: 2023,
            price: 27880
        },
        {
            id: 3,
            brand: 'Genesis',
            model: 'Genesis G80',
            color: 'white',
            registrationNumber: 'GEN-5809',
            modelYear: 2025,
            price: 63000
        }

    ]
    return getCarsDummy;
}

export const deleteCar = (id:number): void => {
    alert(id + '번 데이터를 삭제합니다.');
}



