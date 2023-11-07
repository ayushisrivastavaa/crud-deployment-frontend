import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";
function StudentList()
{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-2-x8t5.onrender.com/studentRoute")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[])

    const ListItems =() =>{
        return arr.map((val,ind)=>{
            return <StudentListRow obj={val}/>
        })
    }
    return  (
        <div>

        <h1 class=" text-center my-2">All Student Details</h1>



        <table style={{ margin: "50px auto", maxWidth: "60%" }} className="table table-bordered table-striped table-success">

        <thead>
            <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Roll Number</th>
                
                <th class="text-center">Action</th>

            </tr>
        </thead>
        <tbody>
            {ListItems()}
        </tbody>
    </table>
    </div>
    )
}

export default StudentList;