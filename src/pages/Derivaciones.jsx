import React, { useState } from "react";

const Derivaciones = () => {
  const [expandedRow, setExpandedRow] = useState([]);

  const Derivaciones = [
    {
      id: 1,
      fecha: "10/10/2020",
      centroOrigen: "Description of Service 1",
      centroDestino: "Category 1",
      especialidadSolicitada: "Dr. Juan Perez",
      estadoDerivacion: "Pendiente",
    },
    {
      id: 2,
      fecha: "12/10/2020",
      centroOrigen: "Description of Service 2",
      centroDestino: "Category 2",
      especialidadSolicitada: "Dra. Maria Rosas",
      estadoDerivacion: "Enviada",
    },
    {
      id: 3,
      fecha: "13/10/2020",
      centroOrigen: "Description of Service 3",
      centroDestino: "Category 3",
      especialidadSolicitada: "Dr. Juan Perez",
      estadoDerivacion: "Pendiente",
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
                  Centro Origen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Centro Destino
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Especialidad Solicitada
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {" "}
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Derivaciones.map((atencion, index) => (
                <React.Fragment key={atencion.id}>
                  <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.fecha}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.centroOrigen}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.centroDestino}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.especialidadSolicitada}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {atencion.estadoDerivacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900">
                        Print
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Derivaciones;
