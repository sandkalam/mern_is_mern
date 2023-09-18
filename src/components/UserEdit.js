import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const [name, setNama] = useState("");
  const [gender, setGender] = useState("Laki-laki");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const id = useParams();
  const ids = id.id;

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/user/${ids}`);
    setNama(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };
  const simpan = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/users/${ids}`, {
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
              <h1>{"Edit Data"}</h1>
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
                  value={"Update"}
                  className="form-control mb-3 btn btn-success"
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

export default UserEdit;
