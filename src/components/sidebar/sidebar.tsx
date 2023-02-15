import React from 'react';
import sidebar from './sidebar.module.scss';
import lukepicture from '../../images/luke.jpg';

export function Sidebar() {
  return (
    <div className={sidebar.container}>
      <div className={sidebar.toggleBtn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className={sidebar.header}>
        <div className={sidebar.title}>
          <img src={lukepicture} alt="user" />
          <p> Luke </p>
          <p>Skywalker</p>
        </div>

        <dl>
          <dt>Fecha de nacimiento</dt>
          <dd>09/10/89</dd>
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
      <div className={sidebar.bottom}>
        <img
          src="https://www.cloudmanlabs.com/img/logo_web.svg"
          alt="cloudmanlabs"
        ></img>
        <p>Desarrolado por Sara ✨</p>
      </div>
    </div>
  );
}
