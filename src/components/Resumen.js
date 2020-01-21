import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { capitalCase } from '../Helper';

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({datos}) => {

  const {marca, year, plan} = datos;

  if (marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {capitalCase(marca)}</li>
        <li>Plan: {capitalCase(plan)}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </ContenedorResumen>
  )
};

export default Resumen;