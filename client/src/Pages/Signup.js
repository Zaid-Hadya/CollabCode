import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import "../style/SignupPage.css";

export default function Signup() {
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState(null);
  const [user, setUser] = useState(null);

  const countryOptions = countryList().getData();
  const languageOptions = [
    { value: "c+", label: "C+" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
  ];

  const UserOption = [
    { value: "user", label: "User" },
    { value: "programmer", label: "Programmer" },
  ];

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form className="signup-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <PhoneInput
              country={"ae"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="region">Region</label>
            <Select
              options={countryOptions}
              value={region}
              onChange={setRegion}
              placeholder="Select a region"
              id="region"
              name="region"
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Preferred Programming Language</label>
            <Select
              options={languageOptions}
              value={language}
              onChange={setLanguage}
              placeholder="Select a language"
              id="language"
              name="language"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="user">Create account as</label>
          <Select
            options={UserOption}
            value={user}
            onChange={setUser}
            placeholder="Select Who you are"
            id="user"
            name="user"
          />
        </div>
        <div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
        </div>
        <p>
          Already have account
          <Link to="/login" className="link">
            Login
          </Link>{" "}
          now
        </p>
      </form>
    </div>
  );
}
