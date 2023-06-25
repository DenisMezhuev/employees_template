import React, { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employeer-add-form/employeer-add-form";
import { v4 as uuidv4 } from "uuid";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: true, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id != id),
      };
    });
  };

  addEmployeer = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: uuidv4(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, rise: !item.rise } : item
      ),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  // first
  /*
  zp = () => {
    this.setState(({ data, filter }) => ({
      data: data.filter((item) => {
        return item.salary > 1000;
      }),
    }));
    console.log(this.state.data);
  };
 */
  /*
  zp = () => {
    this.setState(({ data, filter }) => ({
      data: data.filter((item) => {
        return item.salary > 1000;
      }),
    }));
    console.log(this.state.data);
  };
  onRise = () => {
    this.setState(({ data }) => ({
      data: data.filter((item) => {
        return item.rise;
      }),
    }));
  };
  allEmployees = () => {
    return this.setState(({ data }) => {
      const newArr = [...data];
      return {
        data: newArr,
      };
    });
  };
*/
  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
        break;
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
        break;
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increase={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm addEmployeer={this.addEmployeer} />
      </div>
    );
  }
}

export default App;
