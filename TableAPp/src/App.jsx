import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const columns = [
    { name: "ID", selector: (row) => row.age, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },
  ];

  const data = [
    { id: 1, name: "Arshad", email: "arshad@gmail.com", age: 21 },
    { id: 2, name: "Abhinav", email: "abhinav@gmail.com", age: 20 },
    { id: 3, name: "Raj", email: "raj@gmail.com", age: 19 },
    { id: 4, name: "Rishabh", email: "rishabh@gmail.com", age: 21 },
    { id: 5, name: "Raju", email: "raju@gmail.com", age: 21 },
    { id: 6, name: "Aamir", email: "aamir@gmail.com", age: 22 },
    { id: 7, name: "Sahil", email: "sahil@gmail.com", age: 23 },
    { id: 8, name: "Sonu", email: "sonu@gmail.com", age: 20 },
    { id: 9, name: "Ankur", email: "ankur@gmail.com", age: 21 },
    { id: 10, name: "Aasu", email: "aasu@gmail.com", age: 22 },
    { id: 11, name: "Mantu", email: "mantu@gmail.com", age: 21 },
    { id: 12, name: "Sadab", email: "sadab@gmail.com", age: 21 },
    { id: 13, name: "Aman", email: "aman@gmail.com", age: 20 },
    { id: 14, name: "Gaurav", email: "gaurav@gmail.com", age: 23 },
    { id: 15, name: "Rajut", email: "rajut@gmail.com", age: 24 },
    { id: 16, name: "Karan", email: "karan@gmail.com", age: 21 },
    { id: 17, name: "Ram", email: "ram@gmail.com", age: 22 },
    { id: 18, name: "Kunal", email: "kunal@gmail.com", age: 20 },
    { id: 19, name: "Vikram", email: "vikram@gmail.com", age: 23 },
    { id: 20, name: "Rohan", email: "rohan@gmail.com", age: 22 },
    { id: 21, name: "Mohit", email: "mohit@gmail.com", age: 21 },
    { id: 22, name: "Sandeep", email: "sandeep@gmail.com", age: 23 },
    { id: 23, name: "Rahul", email: "rahul@gmail.com", age: 24 },
    { id: 24, name: "Piyush", email: "piyush@gmail.com", age: 21 },
    { id: 25, name: "Manish", email: "manish@gmail.com", age: 20 },
    { id: 26, name: "Yash", email: "yash@gmail.com", age: 23 },
    { id: 27, name: "Sameer", email: "sameer@gmail.com", age: 22 },
    { id: 28, name: "Nitin", email: "nitin@gmail.com", age: 21 },
    { id: 29, name: "Vivek", email: "vivek@gmail.com", age: 24 },
    { id: 30, name: "Tushar", email: "tushar@gmail.com", age: 21 },
    { id: 31, name: "Rajat", email: "rajat@gmail.com", age: 22 },
    { id: 32, name: "Prashant", email: "prashant@gmail.com", age: 21 },
    { id: 33, name: "Saurabh", email: "saurabh@gmail.com", age: 23 },
    { id: 34, name: "Nishant", email: "nishant@gmail.com", age: 24 },
    { id: 35, name: "Vikas", email: "vikas@gmail.com", age: 21 },
    { id: 36, name: "Ashish", email: "ashish@gmail.com", age: 22 },
    { id: 37, name: "Sandeep", email: "sandeep1@gmail.com", age: 21 },
    { id: 38, name: "Ajay", email: "ajay@gmail.com", age: 23 },
    { id: 39, name: "Shubham", email: "shubham@gmail.com", age: 24 },
    { id: 40, name: "Varun", email: "varun@gmail.com", age: 21 },
    { id: 41, name: "Arjun", email: "arjun@gmail.com", age: 22 },
    { id: 42, name: "Deepak", email: "deepak@gmail.com", age: 21 },
    { id: 43, name: "Dev", email: "dev@gmail.com", age: 23 },
    { id: 44, name: "Kapil", email: "kapil@gmail.com", age: 24 },
    { id: 45, name: "Suraj", email: "suraj@gmail.com", age: 21 },
    { id: 46, name: "Rakesh", email: "rakesh@gmail.com", age: 22 },
    { id: 47, name: "Sushil", email: "sushil@gmail.com", age: 21 },
    { id: 48, name: "Praveen", email: "praveen@gmail.com", age: 23 },
    { id: 49, name: "Vinay", email: "vinay@gmail.com", age: 24 },
    { id: 50, name: "Ravi", email: "ravi@gmail.com", age: 21 },
    { id: 51, name: "Arvind", email: "arvind@gmail.com", age: 22 },
    { id: 52, name: "Vijay", email: "vijay@gmail.com", age: 21 },
    { id: 53, name: "Kishan", email: "kishan@gmail.com", age: 23 },
    { id: 54, name: "Harish", email: "harish@gmail.com", age: 24 },
    { id: 55, name: "Bhavesh", email: "bhavesh@gmail.com", age: 21 },
    { id: 56, name: "Mohan", email: "mohan@gmail.com", age: 22 },
    { id: 57, name: "Mahesh", email: "mahesh@gmail.com", age: 21 },
    { id: 58, name: "Umesh", email: "umesh@gmail.com", age: 23 },
    { id: 59, name: "Ajeet", email: "ajeet@gmail.com", age: 24 },
    { id: 60, name: "Narendra", email: "narendra@gmail.com", age: 21 },
    { id: 61, name: "Neeraj", email: "neeraj@gmail.com", age: 22 },
    { id: 62, name: "Tarun", email: "tarun@gmail.com", age: 21 },
    { id: 63, name: "Akhil", email: "akhil@gmail.com", age: 23 },
    { id: 64, name: "Pankaj", email: "pankaj@gmail.com", age: 24 },
    { id: 65, name: "Lokesh", email: "lokesh@gmail.com", age: 21 },
    { id: 66, name: "Anil", email: "anil@gmail.com", age: 22 },
    { id: 67, name: "Santosh", email: "santosh@gmail.com", age: 21 },
    { id: 68, name: "Peter", email: "peter@gmail.com", age: 23 },
    { id: 69, name: "Yadav", email: "yadav@gmail.com", age: 24 },
    { id: 70, name: "Kamran", email: "kamran@gmail.com", age: 21 },
    { id: 71, name: "Sandeep", email: "sandeep2@gmail.com", age: 22 },
    { id: 72, name: "Anwer", email: "anwer@gmail.com", age: 21 },
    { id: 73, name: "Razi", email: "razi@gmail.com", age: 23 },
    { id: 74, name: "Singh", email: "singh@gmail.com", age: 24 },
    { id: 75, name: "Arif", email: "arif@gmail.com", age: 21 },
    { id: 76, name: "Salman", email: "salman@gmail.com", age: 22 },
    { id: 77, name: "Laxman", email: "laxman@gmail.com", age: 21 },
    { id: 78, name: "Firoz", email: "firoz@gmail.com", age: 23 },
    { id: 79, name: "Zakir", email: "zakir@gmail.com", age: 24 },
    { id: 80, name: "Mithun", email: "mithun@gmail.com", age: 21 },
    { id: 81, name: "Surendra", email: "surendra@gmail.com", age: 22 },
    { id: 82, name: "Gopal", email: "gopal@gmail.com", age: 21 },
    { id: 83, name: "Ashok", email: "ashok@gmail.com", age: 23 },
    { id: 84, name: "Anup", email: "anup@gmail.com", age: 24 },
    { id: 85, name: "Naveen", email: "naveen@gmail.com", age: 21 },
    { id: 86, name: "Subhash", email: "subhash@gmail.com", age: 22 },
    { id: 87, name: "Chandra", email: "chandra@gmail.com", age: 21 },
    { id: 88, name: "Inder", email: "inder@gmail.com", age: 23 },
    { id: 89, name: "Prem", email: "prem@gmail.com", age: 24 },
    { id: 90, name: "Suresh", email: "suresh@gmail.com", age: 21 },
    { id: 91, name: "Jitendra", email: "jitendra@gmail.com", age: 22 },
    { id: 92, name: "Rajesh", email: "rajesh@gmail.com", age: 21 },
    { id: 93, name: "Lalit", email: "lalit@gmail.com", age: 23 },
    { id: 94, name: "Bharat", email: "bharat@gmail.com", age: 24 },
    { id: 95, name: "Vinod", email: "vinod@gmail.com", age: 21 },
    { id: 96, name: "Jagat", email: "jagat@gmail.com", age: 22 },
    { id: 97, name: "Tej", email: "tej@gmail.com", age: 21 },
    { id: 98, name: "Satyam", email: "satyam@gmail.com", age: 23 },
    { id: 99, name: "Gagan", email: "gagan@gmail.com", age: 24 },
    { id: 100, name: "Manoj", email: "manoj@gmail.com", age: 21 },
  ];


  const [record, setRecord] = useState(data);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [selectedRowCount, setSelectedRowCount] = useState(0);

 
  useEffect(() => {
    const storedRowIds = localStorage.getItem("selectedRowIds");
    if (storedRowIds) {
      const parsedIds = JSON.parse(storedRowIds);
      setSelectedRowIds(parsedIds);
      setSelectedRowCount(parsedIds.length); // Set initial count
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("selectedRowIds", JSON.stringify(selectedRowIds));
    setSelectedRowCount(selectedRowIds.length); 
  }, [selectedRowIds]);

  const handleFilter = (event) => {
    const newData = data.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecord(newData);
  };

  const handleRowClick = (row) => {
    if (selectedRowIds.includes(row.id)) {
      setSelectedRowIds(selectedRowIds.filter((id) => id !== row.id));
    } else {
      setSelectedRowIds([...selectedRowIds, row.id]);
    }
  };

  const conditionalRowStyles = [
    {
      when: (row) => selectedRowIds.includes(row.id),
      style: {
        backgroundColor: "skyblue",
        cursor: "pointer",
      },
    },
  ];

  return (
    <div
      className="container mt-5 container-fluid"
      style={{
        backgroundColor: "skyblue",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div className="mb-3">
        <div className="row">
          <div className="col-md-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleFilter}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <DataTable
          columns={columns}
          data={record}
          fixedHeader
          pagination
          highlightOnHover
          striped
          onRowClicked={handleRowClick}
          conditionalRowStyles={conditionalRowStyles}
          className="table table-striped table-bordered"
        />
      </div>
      {selectedRowCount > 0 && (
        <div className="col-md-9">
          <h5>{selectedRowCount} row(s) selected</h5>
        </div>
      )}
    </div>
  );
}

export default App;
