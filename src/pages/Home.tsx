import React, { ChangeEvent, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

interface IEmployee {
  name: string;
  email: string;
  phone: string;
}

const Home = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [data, setData] = useState<IEmployee>({
    name: "",
    email: "",
    phone: "",
  });
  const [addEmployee, setAddEmployee] = useState(false);

  const toggleAddEmployee = () => setAddEmployee((prev) => !prev);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onSave = () => {
    if (Object.values(data).some((value) => !value)) {
      return toast.error("Please fill all fields");
    }
    setEmployees((prev) => [...prev, data]);
    toggleAddEmployee();
  };

  if (!localStorage.getItem("user")) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div>
      <div className="d-flex justify-content-end m-2">
        <Button onClick={toggleAddEmployee}>Add Employee</Button>
      </div>
      <Modal show={addEmployee} onHide={toggleAddEmployee}>
        <Modal.Header>New Employee</Modal.Header>
        <Modal.Body className="d-flex flex-column gap-2">
          <Form.Control
            placeholder="Employee name"
            aria-label="Employee"
            aria-describedby="basic-addon1"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
          <Form.Control
            placeholder="Employee email"
            aria-label="employee Email"
            aria-describedby="basic-addon1"
            type="email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
          <Form.Control
            placeholder="Employee phone"
            aria-label="Employee phone"
            aria-describedby="basic-addon1"
            value={data.phone}
            name="phone"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSave}>Save</Button>
        </Modal.Footer>
      </Modal>
      <main>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Employee Phone</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
};

export default Home;
