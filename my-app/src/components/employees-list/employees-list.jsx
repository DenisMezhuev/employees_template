import EmployeerListItem from "../employeer-list-item/employeer-list-item";
import "./employees-list.css";

const EmployeesList = () =>{

    return(
        <ul className="app-list list-group">
            <EmployeerListItem />
            <EmployeerListItem />
            <EmployeerListItem />
        </ul>
    );

};

export default EmployeesList;