import React, { useState } from "react";

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
      diagnostico: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      actuacion: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      diagnostico: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      actuacion: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      diagnostico: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      actuacion: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
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
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Atenciones
        </h2>
        <div className="mx-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Servicio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profesional
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Atenciones.map((atencion, index) => (
                <React.Fragment key={atencion.id}>
                  <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.fecha}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.servicio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.categoria}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.profesional}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => handleExpandRow(atencion.id)}
                      >
                        {expandedRow === atencion.id ? "Hide" : "Show"}
                      </button>
                    </td>
                  </tr>
                  {expandedRow === atencion.id && (
                    <>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.meap ? "Meap" : " "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Edad del paciente: {atencion.edad_paciente}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Medico: {atencion.profesional}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Motivo
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.motivo}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Anamnesis
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.anamnesis}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Exploracion
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.exploracion}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Diagnostico
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.diagnostico}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Actuacion
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.actuacion}
                        </td>
                      </tr>
                    </>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Atenciones;
