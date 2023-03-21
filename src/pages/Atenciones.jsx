import React, { useState } from "react";
import "../styles/Atenciones.css";

const Atenciones = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const Atenciones = [
    {
      id: 1,
      fecha: "10/10/2020",
      servicio: "Description of Service 1",
      categoria: "Category 1",
      profesional: "Dr. Juan Perez",
      meap: true,
      // edad_paciente,
      // motivo,
      // anamnesis,
      // exploracion,
    },
    {
      id: 2,
      fecha: "12/10/2020",
      servicio: "Description of Service 2",
      categoria: "Category 2",
      profesional: "Dra. Maria Rosas",
      meap: true,
      // edad_paciente,
      // motivo,
      // anamnesis,
      // exploracion,
    },
    {
      id: 3,
      fecha: "13/10/2020",
      servicio: "Description of Service 3",
      categoria: "Category 3",
      profesional: "Dr. Juan Perez",
      meap: true,
      // edad_paciente,
      // motivo,
      // anamnesis,
      // exploracion,
    },
  ];

  const handleExpandRow = (id) => {
    const currentIndex = expandedRows.indexOf(id);
    const newExpandedRows = [...expandedRows];

    if (currentIndex === -1) {
      newExpandedRows.push(id);
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

  return (
    <div>
      <h2>Atenciones</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Servicio</th>
            <th>Categoria</th>
            <th>Profesional</th>
          </tr>
        </thead>
        <tbody>
          {Atenciones.map((atencion) => (
            <React.Fragment key={atencion.id}>
              <tr>
                <td>{atencion.fecha}</td>
                <td>{atencion.servicio}</td>
                <td>{atencion.categoria}</td>
                <td>
                  <button onClick={() => handleExpandRow(atencion.id)}>
                    {expandedRows.includes(atencion.id) ? "Hide" : "Show"}
                  </button>
                </td>
              </tr>
              {expandedRows.includes(atencion.id) && (
                <tr>
                  <td colSpan="3">{atencion.servicio}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Atenciones;
