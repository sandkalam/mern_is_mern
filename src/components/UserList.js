import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await axios.get("http://localhost:5000/users");
    setUser(resp.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers();
  };

  return (
    <div className="row">
      <div className="col-12 mx-auto p-2">
        <div className="h1 text-center mt-2 p-2 border-info border-bottom">
          List Anggota
        </div>
        <Link to={"/create"} className="btn btn-success">
          <i className="bi bi-plus"></i>Tambah Data
        </Link>
        {/* <table className="table table-striped table-hover mt-3 border-info">
          <thead>
            <tr className="p-3">
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Jenis Kelamin</th>
              <th>Operasi</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>
                  <Link
                    to={`/edit/${item._id}`}
                    type="button"
                    className="btn btn-primary mx-2"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <button
                    onClick={() => deleteUser(item._id)}
                    type="button"
                    className="btn btn-danger mx-2"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <div>
          <div className="row">
            {user.map((item, key) => (
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card w-27 m-3" key={item._id}>
                  <div className="card-header bg-primary text-center">
                    <img
                      className="img-fluid rounded"
                      src="https://placehold.co/300x300/png"
                      alt="img"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column justify-content-start">
                      <h5>Name</h5>
                      <p>{item.name}</p>
                      <h5>Email</h5>
                      <p>{item.email}</p>
                      <h5>Gender</h5>
                      <p>{item.gender}</p>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex flex-row justify-content-evenly">
                        <Link
                          to={`/edit/${item._id}`}
                          className="btn btn-primary"
                        >
                          <i className="bi bi-pencil-square text-light"></i>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(item._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
