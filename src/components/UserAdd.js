import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
  const [name, setNama] = useState("");
  const [gender, setGender] = useState("Laki-laki");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const simpan = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <div className="card my-3">
            <div className="card-header  bg-primary text-light text-center">
              <h1>{"Tambah Data"}</h1>
            </div>
            <div className="card-body">
              <form action={"/users"} method="post" onSubmit={simpan}>
                <label htmlFor="name">Nama </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setNama(e.target.value)}
                />
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="gender">Jenis Kelamin</label>
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control mb-3"
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <input
                  type="submit"
                  value={"Simpan"}
                  className="form-control mb-3 btn btn-primary"
                />
                <input
                  type="button"
                  className="btn btn-warning form-control"
                  value={"Batal"}
                  onClick={() => navigate("/")}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
