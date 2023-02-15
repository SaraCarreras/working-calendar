import React from 'react';
import sidebar from './sidebar.module.scss';
import lukepicture from '../../images/luke.jpg';

export function Sidebar() {
  return (
    <div className={sidebar.container}>
      <header>
        <div>
          <img src={lukepicture} alt="user" />
          <p> User name from Api .name </p>
          <p>.surname</p>
        </div>

        <dl>
          <dt>Fecha de nacimiento</dt>
          <dd>.</dd>
          <dt>Cargo</dt>
          <dd>.position</dd>
          <dt>E-mail</dt>
          <dd>.email</dd>
          <dt>Teléfono</dt>
          <dd>.phone</dd>
          <dt>Días de vacaciones restantes</dt>
          <dd>.vacationDays</dd>
        </dl>
        <form
          action="mailto:soporte@cloudmanlabs.com"
          method="get"
          target="_blank"
        >
          <input
            type="submit"
            name="submit"
            value=" Informar de un error"
          ></input>
        </form>
      </header>
      <div></div>
    </div>
  );
}
