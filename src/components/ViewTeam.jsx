import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewTeam = () => {

  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {

    axios
      .get("http://localhost:3000/view-team")
      .then((response) => {

        console.log(response.data);

        changeData(response.data);
        setLoading(false);

      })
      .catch((error) => {

        console.log(error);
        setLoading(false);

      });

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>



      <div className="container mt-4">

        <h2 className="text-center mb-4">
          View All Teams
        </h2>

        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">

                <tr>
                  <th>Team ID</th>
                  <th>Team Name</th>
                  <th>Leader</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>College</th>
                  <th>Members</th>
                  <th>Project Title</th>
                  <th>Problem Track</th>
                  <th>Technology</th>
                  <th>Mentor</th>
                  <th>Registration Date</th>
                  <th>Table / Station</th>
                </tr>

              </thead>

              <tbody>

                {data.map((value, index) => (

                  <tr key={index}>

                    <td>{value.team_id}</td>
                    <td>{value.team_name}</td>
                    <td>{value.team_leader_name}</td>
                    <td>{value.leader_email}</td>
                    <td>{value.leader_phone}</td>
                    <td>{value.college_name}</td>
                    <td>{value.number_of_members}</td>
                    <td>{value.project_title}</td>
                    <td>{value.problem_statement_track}</td>
                    <td>{value.technology_stack}</td>
                    <td>{value.mentor_name}</td>
                    <td>{value.registration_date}</td>
                    <td>{value.table_station_number}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
};

export default ViewTeam;