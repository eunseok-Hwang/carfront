import { useEffect, useState } from "react";
import { deleteCar, getCars } from "../api/carApi";
import { DataGrid } from "@mui/x-data-grid";
import type { GridCellParams, GridColDef } from "@mui/x-data-grid";
import type { Car } from "../type";
import { Snackbar } from "@mui/material";

export default function CarList() {
    const [data, setData] = useState<Car[]>([]);
    const [toastVal, setToastVal] = useState({
        open: false, msg: ''
    })

    const loadCarData = () => {
        const carData = getCars();
        setData(carData);
    }

    const columns: GridColDef[] = [
        {field: 'brand', headerName: '브랜드', width: 200},
        {field: 'model', headerName: '모델', width: 200},
        {field: 'color', headerName: '색상', width: 200},
        {field: 'registrationNumber' , headerName: '등록넘버', width: 150},
        {field: 'modelYear', headerName: '연식', width: 150},
        {field: 'price', headerName: '가격', width: 150},
        {
            field: 'delete',
            headerName : '',
            width: 90,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) => (
                <button onClick={() => deleteCar(params.row.id)}>삭제</button>
            )
        }
    ]

    useEffect(() => {
        loadCarData();        
    },[]);

    return(
        <>
            <DataGrid 
                rows={data}
                columns={columns}
                getRowId={row => row.id}
            />
            <Snackbar 
                open={toastVal.open}
                onClick={() => setToastVal({open: false, msg: ''})}
                message={toastVal.msg}
                autoHideDuration={2000}
            />
        </>
    )
}