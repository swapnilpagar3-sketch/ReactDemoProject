import React, { Profiler, Component, useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import { ErrorMessage, Field, Formik, useFormik, Form } from 'formik';
//import * as yup from 'yup';
//import { resume } from 'react-dom/server';
//import ReactDOM from "react-dom/client";
import { createPortal, unstable_batchedUpdates } from 'react-dom';
import { reach } from 'yup';
import { resume } from 'react-dom/server';

// Practise Code 29 : 

//Practise Code 28 : useEffect hook in React (Part 3)

function Employee(){
    const [employeeCount, setEmployeeCount] = useState(0);

    //const[noOfDays, setNoOfDays] = useState(0); 

    useEffect(() => {
        alert('Coming from First Effect');
        var handle = setInterval(getEmployeesCount,5000);

        return() => {
            clearInterval(handle);  
        }
    }, []);

    // useEffect(() => {
    //     alert('Coming from second Effect');
    //     fetch("https://localhost:7150/api/Test")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setNoOfDays(result);
    //         }
    //     );
    // })

    function getEmployeesCount(){
        //alert('Getting the employees count');
        fetch("https://localhost:7150/api/Employee")
        .then(res => res.json())
        .then(
         (result) => {
            setEmployeeCount(result.length);
         }
        );
    }

    function navigateToDepartment(){
        const container = document.getElementById("root");
        const newroot = createRoot(container);
        newroot.render(<Departments></Departments>);
    }

    return(
        <div>
            <h2>Welcome to Employee Component...</h2>
            <p>
                <label>Employee Count : <b>{employeeCount}</b></label>
            </p>
            {/* <p>
                <label>Last Employee Added : <b>{noOfDays} days ago...</b></label>
            </p> */}
            <button onClick={navigateToDepartment}>Departments</button>
        </div>
    )
}

function Departments(){
    return(
        <div>
            <h2>Welcome to Departments Component...</h2>
        </div>
    )
}

const container = document.getElementById("root");
const newroot = createRoot(container);
newroot.render(<Employee></Employee>);

//Practise Code 27 : useEffect hook in React

// function EmployeeComponent(){
//     const[employees, setEmployees] = useState([]);
//     const[searchText, setSearchText] = useState('');

//     useEffect(() => {
//         //alert('We are in useEffect function');
//         fetch("https://localhost:7150/api/Employee/" + searchText)
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 setEmployees(result);
//             }
//         );
//     },[searchText]);

//     function onSearchTextChange(e) {
//         setSearchText(e.target.value);
//     }

//     return(
//         <div>
//             <h2>Employees Data...</h2>
//             <p>
//                  <label>Search By Name : <input type='text' value={searchText}
//                                          onChange={onSearchTextChange}></input></label>
//             </p>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Location</th>
//                         <th>Salary</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employees.map(emp => (
//                         <tr key={emp.id}>
//                             <td>{emp.id}</td>
//                             <td>{emp.name}</td>
//                             <td>{emp.location}</td>
//                             <td>{emp.salary}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<EmployeeComponent></EmployeeComponent>);

//Practise Code 26 : useState for component communication

// function NewEmployee(){
//     const [employee, setEmployeeData] = useState({Id :'', Name :'', Location: '', Salary:''});

//     function changeEmployeeInfo(e){
//         setEmployeeData({...employee,[e.target.name] : e.target.value});
//     }

//     return(
//             <div>
//                 <h2>Welcome to Employee Function Component...</h2>
//                 <p>
//                     <label> Employee Id :
//                         <input type='text' name='Id' value={employee.Id}
//                                onChange={changeEmployeeInfo}></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label>Employee Name : <input type='text' name='Name' value={employee.Name}
//                     onChange={changeEmployeeInfo}></input></label>
//                 </p>
//                 <p>
//                     <label> Employee Location : 
//                         <input type='text' name='Location' value={employee.Location}
//                         onChange={changeEmployeeInfo}></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label> Employee Salary :
//                         <input type='text' name='Salary' value={employee.Salary}
//                         onChange={changeEmployeeInfo}></input>
//                     </label>
//                 </p>
//                 <p>
//                     Employee Id is : <b>{employee.Id}</b>, Name Is : <b>{employee.Name}</b>, 
//                     Location is : <b>{employee.Location}</b> and Salary is : <b>{employee.Salary}</b>
//                 </p>
//                 <SalaryComponent salary={employee.Salary} onSalaryChange={changeEmployeeInfo}></SalaryComponent>
//             </div>
//         )
// }

// const SalaryComponent=({onSalaryChange,salary}) => {
//     return(
//         <div>
//             <h2>Welcome to Salary Component...</h2>

//             <p>
//                 <label>Employee Salary : 
//                     <input type='text' name='Salary' value={salary}
//                            onChange={onSalaryChange}></input>
//                 </label>
//             </p>
//         </div>
//     )
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<NewEmployee></NewEmployee>);


//Practise Code 25 : useState in React

// function NewEmployee(){
//     //const [name, setName] = useState();

//     //const [location, setLocation] = useState();
//     const [employee, setEmployeeData] = useState({Id :'', Name :'', Location: '', Salary:''});

//     function changeEmployeeInfo(e){
//         setEmployeeData({...employee,[e.target.name] : e.target.value});
//     }

//     // function changeName(e){
//     //     console.log(e);
//     //     setName(e.target.value);
//     // }

//     // function changeLocation(e){
//     //     setLocation(e.target.value);
//     // }
//     return(
//             <div>
//                 <h2>Welcome to Employee Function Component...</h2>
//                 <p>
//                     <label> Employee Id :
//                         <input type='text' name='Id' value={employee.Id}
//                                onChange={changeEmployeeInfo}></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label>Employee Name : <input type='text' name='Name' value={employee.Name}
//                     onChange={changeEmployeeInfo}></input></label>
//                 </p>
//                 <p>
//                     <label> Employee Location : 
//                         <input type='text' name='Location' value={employee.Location}
//                         onChange={changeEmployeeInfo}></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label> Employee Salary :
//                         <input type='text' name='Salary' value={employee.Salary}
//                         onChange={changeEmployeeInfo}></input>
//                     </label>
//                 </p>
//                 <p>
//                     Employee Id is : <b>{employee.Id}</b>, Name Is : <b>{employee.Name}</b>, 
//                     Location is : <b>{employee.Location}</b> and Salary is : <b>{employee.Salary}</b>
//                 </p>
//             </div>
//         )
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<NewEmployee></NewEmployee>);

//Practise Code 24 : Hooks in React

// class Employee extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             Name : ''
//         }
//     }

//     changeName = (e) =>{
//         this.setState({Name : e.target.value});
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Welcome to Employee Component...</h2>
//                 <p>
//                     <label>Employee Name : <input type='text' value={this.state.Name}
//                     onChange={this.changeName}></input></label>
//                 </p>
//                 <p>
//                     Entered Name Is : <b>{this.state.Name}</b>
//                 </p>
//             </div>
//         )
//     }
// }

// // Use of Hook useState

// function NewEmployee(){
//     const [name, setName] = useState('Pragim');

//     function changeName(e){
//         setName(e.target.value);
//     }

//     return(
//             <div>
//                 <h2>Welcome to Employee Function Component...</h2>
//                 <p>
//                     <label>Employee Name : <input type='text' value={name}
//                     onChange={changeName}></input></label>
//                 </p>
//                 <p>
//                     Entered Name Is : <b>{name}</b>
//                 </p>
//             </div>
//         )
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<NewEmployee></NewEmployee>);

//Practise Code 23: Pure Components in React

// class ChangeDetection extends React.PureComponent{
//     constructor(props){
//         super(props);
//         this.state={
//             employeeCount : 0
//         };
//         setInterval(this.getEmployeesCount,5000);
//     }

//     getEmployeesCount=()=>{
//         fetch("https:localhost:7150/api/Employee")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     employeeCount : result.length
//                 });
//             }
//         );
//     }

//     componentDidMount(){
//         this.getEmployeesCount();
//     }

//     render(){
//         alert('Notification Message');
//         return(
//             <div>
//                 <h2>Welcome to Pure Component Demonstration...</h2>
//                 <p>
//                     <label>number of Employees are : <b>{this.state.employeeCount}</b></label>
//                 </p>
//             </div>
//         );
//     }
// }

// class Reports extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             employees :[]
//         };
//     }

//     componentDidMount = () => {
//         this.getEmployees();
//     }

//     getEmployees(){
//         fetch("https://localhost:7150/api/Employee")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     employees: result
//                 });
//             }
//         );
//     }

//     loadEmployees = () =>{
//         this.getEmployees();
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Employees Data...</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Location</th>
//                             <th>Salary</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.employees.map(emp => (
//                             <tr key={emp.id}>
//                                 <td>{emp.id}</td>
//                                 <td>{emp.name}</td>
//                                 <td>{emp.location}</td>
//                                 <td>{emp.salary}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//               </table>
//               <p>
//                 <button onClick={this.loadEmployees}>Reload</button>
//               </p>
//             </div>
//         );
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <ChangeDetection></ChangeDetection>
//                 <Reports></Reports>
//             </React.Fragment>
//         )
//     }
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<App></App>);

//Practise Code 22: Render Props in React

// class DisplayList extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <ul>
//                 {this.props.list.map(d => (
//                     <li>{d}</li>
//                 ))}
//             </ul>
//         )
//     }
// }

// class Department extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             list:['Dev', 'Big Data', 'Mobility']
//         };
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Department List...</h2>
                
//                 {this.props.render(this.state.list)}
//             </div>
//         );
//     }
// }

// class Project extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Project List ...</h2>
//                 {this.props.render(this.props.list)}
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <Department render={(data) => <DisplayList list={data}></DisplayList>}></Department>
//                 <Project render={(data) => <DisplayList list={['P-1','P-2','P-3']}></DisplayList>}></Project>
//             </React.Fragment>
//         )
//     }
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<App></App>);

//Practise Code 21 : Profiler In React

// class NewAccountReports extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             FromDate:'',
//             ToDate:''
//         };
//     }

//     handleChange = e =>{
//         let name = e.target.name;
//         let value =  e.target.value;
//         this.setState({
//             [name] : value
//         });
//     }

//     render(){
//         return(
//         <div>
//             <h2>Welcome to New Accounts Reports Component...</h2>
//             <p>
//                 <label>From Date : <input type='text' name='FromDate'
//                 onChange={this.handleChange} value={this.state.FromDate}></input></label>
//             </p>
//             <p>
//                 <label>To Date : <input type='text' name='ToDate'
//                 onChange={this.handleChange} value={this.state.ToDate}></input></label>
//             </p>    
//             <input type='submit' value='Generate'></input>
//         </div>
//         )
//     }
// }

// class LoansRepaymentReports extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Welcome to Loans Repaymnt Reports Component...</h2>
//             </div>
//         );
//     }
// }

// class ReporsDashboard extends React.Component{
//     constructor(props){
//         super(props);
//     }
    
// callbackFunction=(id, phase, actualDuration, baseDuration, startTime, 
//     commitTime, interaction)=>{
//         console.log('Id is : ' + id + ', Phase is : ' + phase);
//         console.log('Actual Duration is : ' + actualDuration + ' and Base Duration is : ' + baseDuration);
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <h2>Welcome to Reports Dashboard...</h2>
//                 <Profiler id='newAccounts' onRender={this.callbackFunction}>
//                     <NewAccountReports></NewAccountReports>
//                 </Profiler>
//                 <Profiler id='loanRepayments' onRender={this.callbackFunction}>
//                     <LoansRepaymentReports></LoansRepaymentReports>
//                 </Profiler> 
//             </React.Fragment>
//         );
//     }
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<ReporsDashboard></ReporsDashboard>);

//Practise code 20 : Portals in React

// class Employee extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: [],
//             selectedEmployee: null,
//             showModal: false,
//             error: null,
//             loading: true
//         };
//     }

//     componentDidMount() {
//         fetch("https://localhost:7150/api/Employee")
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! Status: ${res.status}`);
//                 }
//                 return res.json();
//             })
//             .then(result => {
//                 this.setState({
//                     employees: Array.isArray(result) ? result : [],
//                     loading: false
//                 });
//             })
//             .catch(error => {
//                 console.error("Fetch failed:", error);
//                 this.setState({ error: error.message, loading: false });
//             });
//     }

//     openEditModal = (emp) => {
//         this.setState({
//             selectedEmployee: emp,
//             showModal: true
//         });
//     };

//     closeModal = () => {
//         this.setState({
//             selectedEmployee: null,
//             showModal: false
//         });
//     };

//     render() {
//         const { employees, selectedEmployee, showModal, loading, error } = this.state;

//         if (loading) return <h3>Loading Employee Data...</h3>;
//         if (error) return <h3 style={{ color: 'red' }}>Error: {error} (Check API & SSL)</h3>;

//         return (
//             <div>
//                 <h2>Employees Data ...</h2>
//                 <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse', width: '100%' }}>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Location</th>
//                             <th>Salary</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {employees.map(emp => (
//                             <tr key={emp.id ?? emp.Id}>
//                                 <td>{emp.id ?? emp.Id}</td>
//                                 <td>{emp.name ?? emp.Name}</td>
//                                 <td>{emp.location ?? emp.Location}</td>
//                                 <td>{emp.salary ?? emp.Salary}</td>
//                                 <td>
//                                     <button onClick={() => this.openEditModal(emp)}>Edit</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 {/* Render one single modal outside the table rows */}
//                 <Modal open={showModal} close={this.closeModal}>
//                     {selectedEmployee && <EmployeeModal employee={selectedEmployee} />}
//                 </Modal>
//             </div>
//         );
//     }
// }

// class Modal extends React.Component {
//     render() {
//         if (!this.props.open) return null;

//         const modalStyle = {
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: '#fff',
//             padding: '20px',
//             border: '1px solid #ccc',
//             boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//             zIndex: 1000
//         };

//         return createPortal(
//             <div style={modalStyle} className='modal'>
//                 <button style={{ float: 'right' }} onClick={this.props.close}>x</button>
//                 {this.props.children}
//             </div>,
//             document.body
//         );
//     }
// }

// class EmployeeModal extends React.Component {
//     render() {
//         const { employee } = this.props;
//         return (
//             <div>
//                 <h3>Employee Details ...</h3>
//                 <p>
//                     <label>Employee Id: <input type='text' defaultValue={employee.id ?? employee.Id} readOnly /></label>
//                 </p>
//                 <p>
//                     <label>Employee Name: <input type='text' defaultValue={employee.name ?? employee.Name} /></label>
//                 </p>
//                 <p>
//                     <label>Employee Location: <input type='text' defaultValue={employee.location ?? employee.Location} /></label>
//                 </p>
//                 <p>
//                     <label>Employee Salary: <input type='text' defaultValue={employee.salary ?? employee.Salary} /></label>
//                 </p>
//                 <input type='button' value='Save' />
//             </div>
//         );
//     }
// }

// const container = document.getElementById("root");
// const newroot = createRoot(container);
// newroot.render(<Employee />);

//Practise Code 19 : Higher Order Components in React

// Helper function to safely read property regardless of PascalCase or camelCase
// const getPropertyValue = (obj, propName) => {
//     if (!obj) return "";
//     if (obj[propName] !== undefined) return obj[propName];

//     // Try camelCase (e.g. "Name" -> "name")
//     const camelCaseProp = propName.charAt(0).toLowerCase() + propName.slice(1);
//     if (obj[camelCaseProp] !== undefined) return obj[camelCaseProp];

//     // Try all lowercase (e.g. "LOCATION" -> "location")
//     const lowerProp = propName.toLowerCase();
//     if (obj[lowerProp] !== undefined) return obj[lowerProp];

//     return "";
// };

// function reportsHOC(InputComponent, inputData) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 data: [],
//                 columns: inputData.columns,
//                 header: inputData.header,
//                 loading: true,
//                 error: null
//             };
//         }

//         componentDidMount() {
//             fetch(inputData.url)
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error(`HTTP error! status: ${res.status}`);
//                     }
//                     return res.json();
//                 })
//                 .then(result => {
//                     console.log(`Data received from ${inputData.url}:`, result);
//                     this.setState({
//                         data: Array.isArray(result) ? result : [],
//                         loading: false
//                     });
//                 })
//                 .catch(error => {
//                     console.error(`Error fetching ${inputData.url}:`, error);
//                     this.setState({
//                         error: error.message,
//                         loading: false
//                     });
//                 });
//         }

//         render() {
//             return <InputComponent data={this.state} />;
//         }
//     };
// }

// class Data extends React.Component {
//     render() {
//         const { header, columns, data, loading, error } = this.props.data;

//         if (loading) {
//             return <div><h3>Loading {header}...</h3></div>;
//         }

//         if (error) {
//             return (
//                 <div style={{ color: "red" }}>
//                     <h3>{header}</h3>
//                     <p>Failed to load data: {error}</p>
//                 </div>
//             );
//         }

//         return (
//             <div style={{ margin: "20px 0" }}>
//                 <h2>{header}</h2>
//                 <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
//                     <thead>
//                         <tr style={{ backgroundColor: "#f2f2f2" }}>
//                             {columns.map(c => (
//                                 <th key={c} style={{ textAlign: "left" }}>
//                                     {c}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.length === 0 ? (
//                             <tr>
//                                 <td colSpan={columns.length} style={{ textAlign: "center" }}>
//                                     No records found.
//                                 </td>
//                             </tr>
//                         ) : (
//                             data.map((row, index) => {
//                                 const rowKey = getPropertyValue(row, "Id") || index;
//                                 return (
//                                     <tr key={rowKey}>
//                                         {columns.map(c => (
//                                             <td key={c}>
//                                                 {String(getPropertyValue(row, c))}
//                                             </td>
//                                         ))}
//                                     </tr>
//                                 );
//                             })
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// const EmployeeReports = reportsHOC(Data, {
//     url: "https://localhost:7150/api/Employee",
//     columns: ["Id", "Name", "Location", "Salary"],
//     header: "Employee Data"
// });

// const DeptReports = reportsHOC(Data, {
//     url: "https://localhost:7150/api/Dept",
//     columns: ["Id", "Name", "Revenue"],
//     header: "Department Data"
// });

// class AdminDashboard extends React.Component {
//     render() {
//         return (
//             <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//                 <EmployeeReports />
//                 <hr style={{ margin: "30px 0" }} />
//                 <DeptReports />
//             </div>
//         );
//     }
// }

// const container = document.getElementById("root") ;
// const newroot = createRoot(container);
// newroot.render(<AdminDashboard />);

//Practise Code 18 : Refs in React , In depth of Refs

// const DemoComponent = React.forwardRef((props, ref) => {
//     function testClick(){
//         ref.current.focus();
//     }
//     return(
//         <button onClick={testClick} >Click</button>
//     )
// });

// function tetsComponent(){
//     let testRef = null;
//     function handleClick(){
//         testRef.focus();
//     }

//     return(
//         <div>
//             <input type='text' ref={e => testRef = e}></input>
//             <input type='button' value='Focus the text input' onClick={handleClick}></input>
//         </div>
//     );
// }

// class Elevator extends React.Component{
//     constructor(props){
//         super(props);
//         this.elevatorRef = React.createRef();
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Welcome to Elevator Ordering Screen...</h2>
//                 <p>
//                     <label>Elevator Name : 
//                         <input type='text' ref={this.elevatorRef}></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label>Elevator Speeed : 
//                         <input type='text'></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label>Elevator Laod : 
//                         <input type='text'></input>
//                     </label>
//                 </p>
//                 <Summary innerRef={this.elevatorRef}></Summary>
//                 <DemoComponent ref={this.elevatorRef}></DemoComponent>
//             </div>
//         );
//     }
// }

// class Summary extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     focusInput=()=>{
//         this.props.innerRef.current.focus();
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Summary Details...</h2>
//                 <p onClick={this.focusInput}>
//                     <label>Elevator Name : <b>Name - 1</b></label>
//                 </p>
//                 <p>
//                     <label>Elevator Speed : <b>10 m/s</b></label>
//                 </p>
//                 <p>
//                     <label>Elevator Laod : <b>550 KG</b></label>
//                 </p>
//             </div>
//         );
//     }
// }



// class QuantityIncrement extends React.Component{
//     constructor(props){
//         super(props);
//         //this.state={quantity:0};
//         this.quantityRef = React.createRef();
//     }

//     incrementQuantity=()=>{
//         //this.setState({quantity : this.state.quantity + 1});
//         this.quantityRef.current.value++;
//     }

//     render(){
//         alert('Test Message');
//         return(
//             <div>
//                 <p>
//                     <label>Enter Quantity : 
//                         <input type='text' ref={this.quantityRef}></input>
//                         <button onClick={this.incrementQuantity}>+</button>
//                     </label>
//                 </p>
//             </div>
//         )
//     }
// }

// class Login extends React.Component{
//     constructor(props){
//         super(props);
//         this.userNameRef = React.createRef();
//     }

//     componentDidMount(){
//         this.userNameRef.current.focus();
//     }
    
//     render(){
//         return(
//             <div>
//                 <h2>Login Screen...</h2>
//                 <p>
//                     <label>Username : <input type='text' ref={this.userNameRef}></input></label>
//                 </p>
//                 <p>
//                     <label>Password : <input type='text'></input></label>
//                 </p>
//                 <button>Login</button>
//             </div>
//         );
//     }
// }

// class VideoPlayer extends React.Component{
//     constructor(props){
//         super(props);
//         this.videoRef = React.createRef();
//     }

//     playVideo=()=>{
//         this.videoRef.current.play();
//     }

//     pauseVideo=()=>{
//         this.videoRef.current.pause();
//     }

//     render(){
//         return(
//             <div>
//                 <video width='300' height='200' controls>
//                     <source src={video} type='video/mp4'></source>
//                 </video>
//                 <div>
//                     <button onClick={this.playVideo}>Play</button>
//                     <button onClick={this.pauseVideo}>Pause</button>
//                 </div>
//             </div>
//         );
//     }
// }

//const element = <QuantityIncrement></QuantityIncrement>;
// const element = <Elevator></Elevator>;
// const container = document.getElementById('root');
// const newroot = createRoot(container);
// newroot.render(element);

//Practise Code 17 : Lifting State Up In React, Error Boundaries in React, Fragments in React

// class CustomErrorBoundary extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={hasError : null }
//     }

//     static getDerivedStateFromError(error){
//         return{hasError : true};
//     }

//     componentDidCatch(error, errorInfo){
//         console.log(error);
//         console.log(errorInfo);
//     }

//     render(){
//         if(this.state.hasError){
//             return(
//                 <React.Fragment>
//                 <div>
//                     <h2>We are having Problems to Load your Preferences now.</h2>
//                 </div>
//                 <div>
//                     <h2>We are having Problems to Load your Preferences again.</h2>
//                 </div>
//                 </React.Fragment>
//             );
//         }
//         else{
//             return this.props.children;
//         }
//     }
// }

// class OrderComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={quantity:'', address:''};
//     }

//     orderInfoChanged=val=>{
//         this.setState({quantity: val});
//     }

//     addressChanged=val=>{
//         this.setState({address: val});
//     }

//     render(){
//         return(
//         <>
//             <h1>Product Order Screen...</h1>
//             <ProductInformationComponent quantity={this.state.quantity}
//                                         onQuantityChange={this.orderInfoChanged}>
//                                         </ProductInformationComponent>
//             <AddressComponent address={this.state.address}
//                               onAddressChange={this.addressChanged}></AddressComponent>
//             <SummaryComponent quantity={this.state.quantity}
//                               address={this.state.address}
//                               onQuantityChange={this.orderInfoChanged}></SummaryComponent>
//         </>
//         );
//     }
// }

// class ProductInformationComponent extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     handleChange=e=>{
//         this.props.onQuantityChange(e.target.value);
//     }

//     render(){
//         return(
//             <div style={{border:'3px solid red'}}>
//                 <h2>Product Information...</h2>
//                 <p>
//                     <label>
//                         Product Name :
//                         <select>
//                             <option value="Product - 1">Product-1</option>
//                             <option value="Product - 2">Product-2</option>
//                             <option value="Product - 3">Product-3</option>
//                         </select>
//                     </label>
//                 </p>
//                 <p>
//                     <label>Enter Quantity : <input type='text' value={this.props.quantity}
//                            onChange={this.handleChange}></input></label>
//                 </p>
//             </div>
//         );
//     }
// }

// class AddressComponent extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     handleChange=e=>{
//         this.props.onAddressChange(e.target.value);
//     }

//     render(){
//         return(
//             <div style={{border:'3px solid red'}}>
//                 <h2>Address Information...</h2>
//                 <p>
//                     <label>Address : <textarea value={this.props.address}
//                            onChange={this.handleChange}></textarea></label>
//                 </p>
//                 <CustomErrorBoundary>
//                     <UserPreferredAddressist></UserPreferredAddressist>
//                 </CustomErrorBoundary>
//             </div>
//         );
//     }
// }

// class UserPreferredAddressist extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         //throw new Error("Not able to Load the Address List");
//         return(
//             <div>
//                 <h2>Your Existing Addresses...</h2>
//                 <p>
//                     Office<br></br>
//                     Marathalli, Banglore - 560037
//                 </p>
//             </div>
//         );
//     }
// }

// class SummaryComponent extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     handleChange=e=>{
//         this.props.onQuantityChange(e.target.value);
//     }

//     render(){
//         return(
//             <div style={{border:'3px solid red'}}>
//                 <h2>Summary Information...</h2>
//                 <p>
//                     <label>Product Name : <b>Product - 1</b></label>
//                 </p>
//                 <p>
//                     <label>Enter Quantity : 
//                         <input type='text' value={this.props.quantity}
//                                onChange={this.handleChange}></input>
//                     </label>
//                 </p>
//                 <p>
//                     <label>Address : <b>{this.props.address}</b></label>
//                 </p>
//                 <button>Place Order</button>
//             </div>
//         )
//     }
// }

// const element = <OrderComponent></OrderComponent>;

// const container = document.getElementById('root');

// const newroot = createRoot(container);

// newroot.render(element);

// Practise Code 16 : Use of Formik, yup validation

// const validateEmployee = empData => {
//     const errors={};
    
//     if(!empData.Name){
//         errors.Name = 'Please Enter Employee Name';
//     }
//     else if(empData.Name.length > 20){
//         errors.Name = 'Employee Name should not exceed 20 characters';
//     }
//     if(!empData.Location){
//         errors.Location = 'Please Enter Employee Location';
//     }

//     if (!empData.EmailId) {
//     errors.EmailId = 'Please Enter Email Id';
//     }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(empData.EmailId)) {
//         errors.EmailId = 'Please Enter a Valid Email Id';
//     }
//     return errors;
// }

// const EmployeeComponent = () => {

//     return (
//         <Formik
//             initialValues={{
//                 Id: '',
//                 Name: '',
//                 Location: '',
//                 Salary: '',
//                 EmailId: '',
//                 Designation: 'SoftwareEngineer'
//             }}

//             validationSchema={yup.object({
//                 Name: yup.string()
//                     .max(20, 'Name should not exceed 20 characters')
//                     .required('Please Enter Employee Name'),

//                 Location: yup.string()
//                     .required('Please Enter Employee Location'),

//                 EmailId: yup.string()
//                     .email('Invalid Email Address')
//                     .required('Please Enter Email Id')
//             })}

//             onSubmit={(values) => {
//                 alert(JSON.stringify(values));
//             }}>
//                 {
//                     props=>(
//                         <div>

//                 <h2>New Employee Form...</h2>

//                 {/* Use Form instead of normal HTML form */}
//                 <Form>

//                     <p>
//                         <label>
//                             Employee Id :
//                         </label>

//                         <Field
//                             name="Id"
//                             type="text"
//                         />
//                     </p>


//                     <p>
//                         <label>
//                             Employee Name :
//                         </label>

//                         <Field
//                             name="Name"
//                             type="text"
//                         />

//                         <br />

//                         <ErrorMessage
//                             name="Name"
//                             component="div"
//                         />
//                     </p>


//                     <p>
//                         <label>
//                             Employee Location :
//                         </label>

//                         <Field
//                             name="Location"
//                             type="text"
//                         />

//                         <br />

//                         <ErrorMessage
//                             name="Location"
//                             component="div"
//                         />
//                     </p>


//                     <p>
//                         <label>
//                             Employee Salary :
//                         </label>

//                         <Field
//                             name="Salary"
//                             type="text"
//                         />
//                     </p>


//                     <p>
//                         <label>
//                             Employee Email Id :
//                         </label>

//                         <Field
//                             name="EmailId"
//                             type="text"
//                         />

//                         <br />

//                         <ErrorMessage
//                             name="EmailId"
//                             component="div"
//                         />
//                     </p>


//                     <p>
//                         <label>
//                             Employee Designation :
//                         </label>

//                         <Field
//                             name="Designation"
//                             as="select"
//                         >
//                             <option value="SoftwareEngineer">
//                                 Software Engineer
//                             </option>

//                             <option value="SeniorSoftwareEngineer">
//                                 Senior Software Engineer
//                             </option>

//                             <option value="Lead">
//                                 Lead
//                             </option>
//                         </Field>
//                     </p>


//                     <button type="submit" disabled={!props.isValid}>
//                         Create
//                     </button>

//                 </Form>

//             </div>
//                     )
//                 }
//         </Formik>
//     );
// };


// const element = <EmployeeComponent />;

// const container = document.getElementById('root');

// const newroot = createRoot(container);

// newroot.render(element);

// Practise Code 15 : Building forms in React

// class EmployeeComponent extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             employee: {
//                 Id: '',
//                 Name: '',
//                 Location: '',
//                 Salary: ''
//             }
//         };
//     }

//     changeHandler = (e) => {

//         const name = e.target.name;
//         const value = e.target.value;

//         this.setState({
//             employee: {
//                 ...this.state.employee,
//                 [name]: value
//             }
//         });
//     };

//     onCreateEmployee = () => {

//         console.log(this.state.employee);

//     };

//     render() {

//         return (
//             <div>

//                 <h2>New Employee Form...</h2>

//                 <form>

//                     <p>
//                         <label>
//                             Employee Id :
//                             <input
//                                 type="text"
//                                 name="Id"
//                                 value={this.state.employee.Id}
//                                 onChange={this.changeHandler}
//                             />
//                         </label>
//                     </p>

//                     <p>
//                         <label>
//                             Employee Name :
//                             <input
//                                 type="text"
//                                 name="Name"
//                                 value={this.state.employee.Name}
//                                 onChange={this.changeHandler}
//                             />
//                         </label>
//                     </p>

//                     <p>
//                         <label>
//                             Employee Location :
//                             <input
//                                 type="text"
//                                 name="Location"
//                                 value={this.state.employee.Location}
//                                 onChange={this.changeHandler}
//                             />
//                         </label>
//                     </p>

//                     <p>
//                         <label>
//                             Employee Salary :
//                             <input
//                                 type="text"
//                                 name="Salary"
//                                 value={this.state.employee.Salary}
//                                 onChange={this.changeHandler}
//                             />
//                         </label>
//                     </p>

//                 </form>

//                 <button onClick={this.onCreateEmployee}>
//                     Create
//                 </button>

//             </div>
//         );
//     }
// }

// const element = <EmployeeComponent />;

// const container = document.getElementById('root');

// const newroot = createRoot(container);

// newroot.render(element);

//Practise Code 14 : Send POST request from React Application to REST API

// class EmployeeComponent extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             message: ''
//         };

//         // Create refs
//         this.idRef = React.createRef();
//         this.nameRef = React.createRef();
//         this.locationRef = React.createRef();
//         this.salaryRef = React.createRef();
//     }

//     onCreateEmployee = () => {

//         let empInfo = {
//             Id: this.idRef.current.value,
//             Name: this.nameRef.current.value,
//             Location: this.locationRef.current.value,
//             Salary: this.salaryRef.current.value
//         };

//         fetch('https://localhost:7150/api/Employee', {
//             method: 'POST',

//             headers: {
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify(empInfo)
//         })
//         .then(response => {

//             if (!response.ok) {
//                 throw new Error('Failed to create employee');
//             }

//             return response.json();
//         })
//         .then(result => {

//             this.setState({
//                 message: 'New Employee is Created Successfully'
//             });

//         })
//         .catch(error => {

//             console.error('Error:', error);

//             this.setState({
//                 message: 'Error while creating Employee'
//             });
//         });
//     }

//     render() {

//         return (
//             <div>

//                 <h1>Employee Component...</h1>

//                 <h2>Please Enter Employee Details...</h2>

//                 <p>
//                     <label>
//                         Employee Id :
//                         <input
//                             type="text"
//                             ref={this.idRef}
//                         />
//                     </label>
//                 </p>

//                 <p>
//                     <label>
//                         Employee Name :
//                         <input
//                             type="text"
//                             ref={this.nameRef}
//                         />
//                     </label>
//                 </p>

//                 <p>
//                     <label>
//                         Employee Location :
//                         <input
//                             type="text"
//                             ref={this.locationRef}
//                         />
//                     </label>
//                 </p>

//                 <p>
//                     <label>
//                         Employee Salary :
//                         <input
//                             type="text"
//                             ref={this.salaryRef}
//                         />
//                     </label>
//                 </p>

//                 <button onClick={this.onCreateEmployee}>
//                     Create
//                 </button>

//                 <p>
//                     <b>{this.state.message}</b>
//                 </p>

//             </div>
//         );
//     }
// }

// const element = <EmployeeComponent />;

// const container = document.getElementById('root');

// const newroot = createRoot(container);

// newroot.render(element);

//Practise Code 13 : Call REST API from React

// class EmployeeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://localhost:7150/api/Employee")
//       .then(res => res.json())
//       .then(result => {
//         this.setState({ employees: result });
//       })
//       .catch(error => console.error("Error fetching employees:", error));
//   }

//   render() {
//     return (
//       <div style={{ padding: '20px' }}>
//         <h2>Employee Details...</h2>
//         <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Salary</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.employees.map(emp => (
//               <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.location}</td>
//                 <td>{emp.salary}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// const element = <EmployeeComponent />;
// const container = document.getElementById('root');
// const newroot = createRoot(container);
// newroot.render(element);

//Practise Code 12 : Iterating through Lists in React

// function Employee(props){
//   return <div style={{border:"3px solid red"}}>
//     <p>
//       <lable>Employee Id : <b>{props.data.Id}</b></lable>
//     </p>
//     <p>
//       <lable>Employee Name : <b>{props.data.Name}</b></lable>
//     </p>
//     <p>
//       <lable>Employee Location : <b>{props.data.Location}</b></lable>
//     </p>
//     <p>
//       <lable>Employee Salary : <b>{props.data.Salary}</b></lable>
//     </p>
//   </div>
// }

// function DisplayEmployees(props){
//   const empList = props.employeeList;

//   const listElements = empList.map((emp)=>
//     <Employee key ={emp.Id} data={emp}></Employee>
//   );

//   return(
//     <div>
//       {listElements}
//     </div>
//   );
// }

// const employees=[
//   {Id:101, Name:'Abhinav', Location:'Banglore', Salary: 25000},
//   {Id:102, Name:'Satish', Location:'Pune', Salary: 35000},
//   {Id:103, Name:'Ajay', Location:'Mumbai', Salary: 45000}
// ];

// const element = <DisplayEmployees employeeList={employees}></DisplayEmployees>
// const newRoot = createRoot(document.getElementById('root'));
// newRoot.render(element);


//Practise Code 11 : Interaction Between React Components

// const EmployeeContext = React.createContext({
//   data:'',
//   changeEmployeeInfo:()=> {}
// });

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       data:{
//         Id : 101,
//         Name : 'Pragim Tech',
//         Location : 'Banglore',
//         Salary : 32000
//       },
//       changeEmployeeInfo: this.updateEmployeeDetails
//     };
//   }

//   updateEmployeeDetails=()=>{
//     this.setState({data: {Id:102}});
//   }

//   render(){
//     return <div>
//       <h2>Welcome to App Component</h2>
//       <p>
//         <label>Employee Id : <b>{this.state.data.Id}</b></label>
//       </p>
//       <EmployeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </EmployeeContext.Provider>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   static contextType = EmployeeContext 
//   render(){
//     return <div>
//       <h2>Welcome to Employee Component</h2>
//       <p>
//         <label>Employee Id : <b>{this.context.data.Id}</b></label>
//       </p>
//       <button onClick={this.context.changeEmployeeInfo}>Update</button>
//     </div>
//   }
// }

// const element = <App></App>
// const newRoot = createRoot(document.getElementById('root'));
// newRoot.render(element);

//Practise Code 10 : React Component Communication using context

// const employeeContext = React.createContext();

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       Id : 101,
//       Name : 'Pragim Tech',
//       Location : 'Banglore',
//       Salary : 32000
//     };
//   }

//   changeEmployeeData=()=>{
//     this.setState({Id:102});
//   }

//   render(){
//     return <div>
//       <h2>Welcome to App Component</h2>
//       <p>
//         <label>Employee Id : <b>{this.state.Id}</b></label>
//       </p>
//       <employeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </employeeContext.Provider>
//       <p>
//         <button onClick={this.changeEmployeeData}>Update</button>
//       </p>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   static contextType = employeeContext;
//   render(){
//     return <div>
//       <h2>Welcome to Employee Component</h2>
//       <p>
//         <label>Employee Id : <b>{this.context.Id}</b></label>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   static contextType = employeeContext;
//   render(){
//     return <div>
//       <h2>Welcome to Salary Component</h2>
//       <p>
//         <label>Employee Id : <b>{this.context.Id}</b></label>
//       </p>
//     </div>
//   }
// }

// const element = <App></App>
// const newRoot = createRoot(document.getElementById('root'));
// newRoot.render(element);

//Practise Code 9 : Interaction between React Components

// class Employee extends React.Component {
//   constructor(props) {
//   super(props);
//   this.state={
//     updatedSalary: null
//   }
//   }

//   getUpdatedSalary=(salary)=>{
//     this.setState({updatedSalary : salary})
//   }

//    render() {
//      return (
//       <div>
//          <h1>Employee Component...</h1>

//          <p>
//           <label>
//             Employee ID : <b>{this.props.Id}</b>
//            </label>
//          </p>

//          <p>
//            <label>
//              Employee Name : <b>{this.props.Name}</b>
//            </label>
//          </p>

//          <p>
//            <label>
//              Employee Location : <b>{this.props.Location}</b>
//            </label>
//          </p>

//          <p>
//           <label>
//              Employee Salary : <b>{this.props.Salary}</b>
//            </label>
//          </p>

//          <p>
//           <label>
//              Updated Total Salary: <b>{this.state.updatedSalary}</b>
//            </label>
//          </p>

//          <Salary BasicSalary={this.props.BasicSalary} HRA = {this.props.HRA}
//                  SpecialAllowance = {this.props.SpecialAllowance}
//                  onSalaryChanged ={this.getUpdatedSalary}></Salary>
//        </div>
//      );
//   }
//  }

//  class Salary extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       basic: this.props.BasicSalary,
//       hra: this.props.HRA,
//       sa: this.props.SpecialAllowance
//     };

//     this.basicRef = React.createRef();
//     this.hraRef = React.createRef();
//     this.saRef = React.createRef();
//   }

//   updateSalary = () => {
//     let salary =
//       parseInt(this.basicRef.current.value) +
//       parseInt(this.hraRef.current.value) +
//       parseInt(this.saRef.current.value);

//     this.props.onSalaryChanged(salary);
//   };

//   render() {
//     return (
//       <div>
//         <h1>Salary Details...</h1>

//         <p>
//           <label>
//             Basic Salary :
//             <input
//               type="text"
//               ref={this.basicRef}
//               defaultValue={this.state.basic}
//             />
//           </label>
//         </p>

//         <p>
//           <label>
//             HRA :
//             <input
//               type="text"
//               ref={this.hraRef}
//               defaultValue={this.state.hra}
//             />
//           </label>
//         </p>

//         <p>
//           <label>
//             Special Allowance :
//             <input
//               type="text"
//               ref={this.saRef}
//               defaultValue={this.state.sa}
//             />
//           </label>
//         </p>

//         <button onClick={this.updateSalary}>
//           Update
//         </button>
//       </div>
//     );
//   }
// }
//  const element = <Employee Id="101" Name="Satish Shelar" Location="Airoli" Salary="43200" 
//                           BasicSalary="20000" HRA="15000" SpecialAllowance="8200"></Employee>

//  const newRoot = createRoot(document.getElementById('root'));
//  newRoot.render(element);

// Practise Code 8 : State In React Class Components

// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       message:'',
//       counter:10
//     };
//   } 

//   onMessageChange(text){
//     this.setState({
//         message:'Message has ' + text.length + ' number of characters'
//     });
//   }

//   render(){
//     return <div>
//       <h2>Welcome to Count Characters Component...</h2>
//       <p>
//         <label>Enter Message : <input type='text' 
//               onChange={e => this.onMessageChange(e.target.value)}></input></label>
//       </p>
//       <p>
//         <label>{this.state.message}</label>
//       </p>
//       <p>
//         <label>{this.state.counter}</label>
//       </p>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   state = {counter:0};
//   addEmployee=()=>{
//     this.setState({counter: this.state.counter + 1});
//     //this.counter = this.counter + 1;
//     // alert("Adding a new Employee");
//     // alert("Add Employee Button is clicked " + this.counter + " times");
//   }
//   render(){
//     return <div>
//       <h2>Welcome to Employee Component...</h2>
//       <p>
//         <button onClick={this.addEmployee}>Add Employee</button>
//       </p>
//       <p>
//         <label>Add Employee Button is clickd : <b>{this.state.counter}</b> times</label>
//       </p>
//     </div>
//   }
// }

// const element = <CountCharacters></CountCharacters>
// const newRoot = createRoot(document.getElementById('root'));
// newRoot.render(element);

// const newElement = <Employee></Employee>
// const newRoot2 = createRoot(document.getElementById('app'));
// newRoot2.render(newElement);

//Practise Code 7 : React Class Components

// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Details...</h2>

//         <p>
//           <label>
//             Employee ID : <b>{this.props.Id}</b>
//           </label>
//         </p>

//         <p>
//           <label>
//             Employee Name : <b>{this.props.Name}</b>
//           </label>
//         </p>

//         <p>
//           <label>
//             Employee Location : <b>{this.props.Location}</b>
//           </label>
//         </p>

//         <p>
//           <label>
//             Employee Salary : <b>{this.props.Salary}</b>
//           </label>
//         </p>

//         <Department
//           DeptName={this.props.DeptName}
//           HeadName={this.props.HeadName}
//         />
//       </div>
//     );
//   }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Department Details...</h2>

//         <p>
//           <label>
//             Dept Name : <b>{this.props.DeptName}</b>
//           </label>
//         </p>

//         <p>
//           <label>
//             Head Name : <b>{this.props.HeadName}</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// const element = (
//   <Employee
//     Id="101"
//     Name="Pragim"
//     Location="Thane"
//     Salary="45000"
//     DeptName="Development"
//     HeadName="Neosoft Technologies"
//   />
// );

// const newRoot = createRoot(document.getElementById('root'));
// newRoot.render(element);

//Practise Code 6 : React Components Arrow Function

// var DisplayEmployeeInfo=(employee)=>{
//   return <div>
//     <h1>Employee Details...</h1>
//     <p>
//       <label>Employee ID : <b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name : <b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location : <b>{employee.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee Salary : <b>{employee.Salary}</b></label>
//     </p>
//     <Department deptName={employee.deptName} headName={employee.headName}></Department>
//   </div>;
// }

// const Department = (deptInfo)=>{
//   return <div>
//     <p>
//       <label>Dept Name : <b>{deptInfo.deptName}</b></label>
//     </p>
//     <p>
//       <label>Dept Head : <b>{deptInfo.headName}</b></label>
//     </p>
//   </div>;
// }

// const element = <DisplayEmployeeInfo Id = "101" Name ="Pragim" Location ="Pune"
// Salary ="25000" deptName="UI Dev" headName="Pragim Tech"></DisplayEmployeeInfo>
// const newroot= createRoot(document.getElementById('root'));
// newroot.render(element);


//Practise Code 5 : React Components

// function DisplayEmployeeInfo(employee){
//   return <div>
//     <p>
//       <label>Employee ID : <b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name : <b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location : <b>{employee.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee ID : <b>{employee.Salary}</b></label>
//     </p>
//   </div>
// }
// const element = <DisplayEmployeeInfo Id = "101" Name ="Pragim" Location ="Pune"
// Salary ="25000"></DisplayEmployeeInfo>
// const newroot= createRoot(document.getElementById('root'));
// newroot.render(element);

// Practise Code 3 : Without JSX

// const element = React.createElement("h1",null, "Welcome to React Programming World...");
// const newroot= createRoot(document.getElementById('root'));
// newroot.render(element);

//Practise Code 4 : Without JSX

// const element = React.createElement("div", {className:"testClass"},
// React.createElement("h1", null, "Welcome to react programming"),
// React.createElement("h1", null, "Understanding the creation of elements")
// );
// const newroot= createRoot(document.getElementById('root'));
// newroot.render(element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//Practise Code 1 : With JSX

// const element = <h1 className='testClass'>Welcome To React Programming...</h1>;
// const root = createRoot(document.getElementById('root'));
// root.render(element);
// const newElement = <h2 className='testClass'>Undestanding the creation of elements in React...</h2>;
// const newroot= createRoot(document.getElementById('app'));
// newroot.render(newElement);

//Practise Code 2 : With JSX

// const element = (
//   <div className='testClass'>
//       <h1>Welcome to React Programming...</h1>
//       <h1>Understanding the Creation of React Elements...</h1>
//   </div>
// );
// const newroot= createRoot(document.getElementById('root'));
// newroot.render(element);
