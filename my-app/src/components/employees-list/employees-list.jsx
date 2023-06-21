import EmployeerListItem from "../employeer-list-item/employeer-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeerListItem key={id} {...itemProps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;

/*
      <EmployeerListItem name="John C." salary={800} />
      <EmployeerListItem name="Alex M." salary={3000} />
      <EmployeerListItem name="Carl W." salary={5000} />
*/
