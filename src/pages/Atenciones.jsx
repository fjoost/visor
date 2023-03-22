import React, { useState } from "react";
import "../styles/Atenciones.css";

const Atenciones = () => {
  const [expandedRow, setExpandedRow] = useState([]);

  const Atenciones = [
    {
      id: 1,
      fecha: "10/10/2020",
      servicio: "Description of Service 1",
      categoria: "Category 1",
      profesional: "Dr. Juan Perez",
      meap: true,
      edad_paciente: "20",
      motivo: "Motivo de la consulta",
      anamnesis: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      exploracion: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      fecha: "12/10/2020",
      servicio: "Description of Service 2",
      categoria: "Category 2",
      profesional: "Dra. Maria Rosas",
      meap: true,
      edad_paciente: "11",
      motivo: "Motivo de la consulta",
      anamnesis: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      exploracion: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 3,
      fecha: "13/10/2020",
      servicio: "Description of Service 3",
      categoria: "Category 3",
      profesional: "Dr. Juan Perez",
      meap: true,
      edad_paciente: "22",
      motivo: "Motivo de la consulta",
      anamnesis: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      exploracion: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  const handleExpandRow = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
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
                <td>{atencion.profesional}</td>
                <td>
                  <button onClick={() => handleExpandRow(atencion.id)}>
                    {expandedRow === atencion.id ? "Hide" : "Show"}
                  </button>
                </td>
              </tr>
              {expandedRow === atencion.id && (
                <>
                  <tr>
                    <td colSpan="3">{atencion.meap ? "Meap" : " "}</td>
                    <td colSpan="3">
                      Edad del paciente: {atencion.edad_paciente}
                    </td>
                    <td colSpan="3">Médico: {atencion.profesional}</td>
                  </tr>
                  <tr>
                    <td>Motivo</td>
                    <td>{atencion.motivo}</td>
                  </tr>
                  <tr>
                    <td>Anamnesis</td>
                    <td>{atencion.anamnesis}</td>
                  </tr>
                  <tr>
                    <td>Exploracion</td>
                    <td>{atencion.exploracion}</td>
                  </tr>
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Atenciones;
