import EmployeerListItem from "../employeer-list-item/employeer-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleRise, onToggleIncrease }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeerListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleRise={() => onToggleRise(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
