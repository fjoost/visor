import React, { useState } from "react";

const Examenes = () => {
  const [expandedRow, setExpandedRow] = useState([]);

  const Estados = {
    0: "Dentro del rango",
    1: "Anormal",
    2: "14 dias",
  };

  const Examenes = [
    {
      id: 1,
      fecha: "10/10/2020",
      examenParametro: "Description of Service 1",
      resultado: "Category 1",
      estado: "Dr. Juan Perez",
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
      examenParametro: "Description of Service 2",
      resultado: "Category 2",
      estado: "Dra. Maria Rosas",
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
      examenParametro: "Description of Service 3",
      resultado: "Category 3",
      estado: "Dr. Juan Perez",
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
      <div className="relative py-3 sm:max-w-full">
        <div className="mx-auto">
          <table className="w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Examen / Parametro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resultado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Examenes.map((atencion, index) => (
                <React.Fragment key={atencion.id}>
                  <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.fecha}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.examenParametro}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.resultado}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.estado}
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
                          Medico: {atencion.estado}
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

export default Examenes;
