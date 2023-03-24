import React, { useState } from "react";

const Prescripciones = () => {
  const [expandedRow, setExpandedRow] = useState([]);

  const Prescripciones = [
    {
      id: 1,
      estado: "10/10/2020",
      medicamento: "Description of Service 1",
      posologia: "Category 1",
      cronico: "Dr. Juan Perez",
      duracion: true,
      edad_paciente: "20",
      fecha_inicio: "fecha_inicio de la consulta",
      fecha_termino: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      diagnostico: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      exploracion: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      profesional: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      estado: "12/10/2020",
      medicamento: "Description of Service 2",
      posologia: "Category 2",
      cronico: "Dra. Maria Rosas",
      duracion: true,
      edad_paciente: "11",
      fecha_inicio: "fecha_inicio de la consulta",
      fecha_termino:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      diagnostico: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      exploracion: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      profesional: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      estado: "13/10/2020",
      medicamento: "Description of Service 3",
      posologia: "Category 3",
      cronico: "Dr. Juan Perez",
      duracion: true,
      edad_paciente: "22",
      fecha_inicio: "fecha_inicio de la consulta",
      fecha_termino:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      diagnostico: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      exploracion: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      profesional: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
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
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ESTADO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MEDICAMENTO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  POSOLOGÍA
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CRÓNICO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DURACIÓN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  F. DE INICIO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  F. TÉRMINO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DIAGNÓSTICO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PROFESIONAL
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Prescripciones.map((atencion, index) => (
                <React.Fragment key={atencion.id}>
                  <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.estado}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.medicamento}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.posologia}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.cronico}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.duracion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.fecha_inicio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.fecha_termino}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.cronico}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.cronico}
                    </td>
                  </tr>
                  {expandedRow === atencion.id && (
                    <>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.duracion ? "duracion" : " "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Edad del paciente: {atencion.edad_paciente}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Medico: {atencion.cronico}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          fecha_inicio
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.fecha_inicio}
                        </td>
                      </tr>
                      <tr
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          fecha_termino
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.fecha_termino}
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
                          profesional
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {atencion.profesional}
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

export default Prescripciones;
