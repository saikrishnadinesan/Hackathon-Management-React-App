import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const AddTeam = () => {
  const [input, changeInput] = useState({
    team_id: "",
    team_name: "",
    team_leader_name: "",
    leader_email: "",
    leader_phone: "",
    college_name: "",
    number_of_members: "",
    project_title: "",
    problem_statement_track: "",
    technology_stack: "",
    mentor_name: "",
    registration_date: "",
    table_station_number: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://localhost:3000/add-team", input)
      .then((response) => {
        console.log(response.data);

        setMessage(response.data.message || "Team Registered Successfully");
        setError("");

        changeInput({
          team_id: "",
          team_name: "",
          team_leader_name: "",
          leader_email: "",
          leader_phone: "",
          college_name: "",
          number_of_members: "",
          project_title: "",
          problem_statement_track: "",
          technology_stack: "",
          mentor_name: "",
          registration_date: "",
          table_station_number: "",
        });
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong");
        }

        setMessage("");
      });
  };

  return (
    <div>
        <Navigation />
      <div className="container mt-4">

        <h2 className="text-center mb-4">Team Registration</h2>

        {message && (
          <div className="alert alert-success">{message}</div>
        )}

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label"><b>Team ID</b></label>
            <input
              type="text"
              className="form-control"
              name="team_id"
              value={input.team_id}
              onChange={inputHandler}
              placeholder="T101"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Team Name</b></label>
            <input
              type="text"
              className="form-control"
              name="team_name"
              value={input.team_name}
              onChange={inputHandler}
              placeholder="Code Warriors"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Team Leader Name</b></label>
            <input
              type="text"
              className="form-control"
              name="team_leader_name"
              value={input.team_leader_name}
              onChange={inputHandler}
              placeholder="River"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Leader Email</b></label>
            <input
              type="email"
              className="form-control"
              name="leader_email"
              value={input.leader_email}
              onChange={inputHandler}
              placeholder="leader@gmail.com"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Leader Phone</b></label>
            <input
              type="text"
              className="form-control"
              name="leader_phone"
              value={input.leader_phone}
              onChange={inputHandler}
              placeholder="9876543210"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>College Name</b></label>
            <input
              type="text"
              className="form-control"
              name="college_name"
              value={input.college_name}
              onChange={inputHandler}
              placeholder="FISAT"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Number of Members</b></label>
            <input
              type="number"
              className="form-control"
              name="number_of_members"
              value={input.number_of_members}
              onChange={inputHandler}
              placeholder="4"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Project Title</b></label>
            <input
              type="text"
              className="form-control"
              name="project_title"
              value={input.project_title}
              onChange={inputHandler}
              placeholder="Smart Parking System"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Problem Statement Track</b></label>
            <input
              type="text"
              className="form-control"
              name="problem_statement_track"
              value={input.problem_statement_track}
              onChange={inputHandler}
              placeholder="Smart Cities"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Technology Stack</b></label>
            <input
              type="text"
              className="form-control"
              name="technology_stack"
              value={input.technology_stack}
              onChange={inputHandler}
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Mentor Name</b></label>
            <input
              type="text"
              className="form-control"
              name="mentor_name"
              value={input.mentor_name}
              onChange={inputHandler}
              placeholder="Dr. John"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Registration Date</b></label>
            <input
              type="date"
              className="form-control"
              name="registration_date"
              value={input.registration_date}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Table / Station Number</b></label>
            <input
              type="text"
              className="form-control"
              name="table_station_number"
              value={input.table_station_number}
              onChange={inputHandler}
              placeholder="A12"
            />
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary w-100"
              onClick={readValue}
            >
              Register Team
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddTeam;