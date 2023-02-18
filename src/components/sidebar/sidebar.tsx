import React, { useEffect, useState } from 'react';
import sidebar from './sidebar.module.scss';
import lukepicture from '../../images/luke.jpg';
import { iUser } from '../../interfaces/iuser';
import { getUser } from '../../services/services';

export function Sidebar() {
  const [sideBar, setSidebar] = useState(true);
  const [user, setUser] = useState<iUser>({
    name: '',
    surname: '',
    position: '',
    email: '',
    phone: '',
    vacationDays: 0,
  });

  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  {
    console.log(user);
  }
  return (
    <div className={sideBar ? sidebar.container : sidebar.containerHidden}>
      <div className={sidebar.toggleBtn} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className={sidebar.header}>
        <div className={sidebar.title}>
          <img src={lukepicture} alt="user" />
          <p>{user.name}</p>
          <p>{user.surname}</p>
        </div>

        <dl>
          <dt>Cargo</dt>
          <dd>{user.position}</dd>
          <dt>E-mail</dt>
          <dd>{user.email}</dd>
          <dt>Teléfono</dt>
          <dd>{user.phone}</dd>
          <dt>Días de vacaciones restantes</dt>
          <dd>{user.vacationDays}</dd>
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
        <p>Desarrollado por Sara ✨</p>
      </div>
    </div>
  );
}
