import React from "react";
import "./Numbers.css";

export default function Numbers() {
  return (
    <div className="div">
      <table>
        <tr>
          <td>
            <p className="Number15">15+</p>
          </td>
          <td>
            <p className="Services">Services</p>
          </td>
        </tr>

        <tr>
          <td>
            <p className="Number24">24/7</p>
          </td>
          <td>
            <p className="Available">Available</p>{" "}
          </td>
        </tr>

        <tr>
          <td>
            <p className="Number100">100+</p>
          </td>
          <td>
            <p className="Professional">Professionals</p>{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}
