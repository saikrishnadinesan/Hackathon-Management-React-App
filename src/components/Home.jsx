import React from "react";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>

      <Navigation />

      <div className="container mt-5">

        <div className="text-center">

          <h1 className="display-4">
            Hackathon Team Registration System
          </h1>

          <p className="lead mt-4">
            Welcome to the Hackathon Team Registration Portal.
          </p>

          <p>
            Register hackathon teams and view all registered teams using the navigation menu.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Home;