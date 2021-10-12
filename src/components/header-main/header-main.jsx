import logo from '../../img/logo.svg';

const HeaderMain = () => 
    <header className="header-main">
        <div className="container center">
            <nav className="header-main__navigation">
                <a className="header-main__logo-link" href="/">
                    <img className="header-main__logo-image" src={logo} width="55" height="55" alt="Логотип AVTO MOTO"/>
                    <h1>
                        <div>Avto</div>
                        <div>Moto</div>
                    </h1>
                </a>
                <ul className="header-main__menu">
                    <li className="header-main__menu-item">
                        <a className="header-main__menu-link" href="/cars">
                            Автомобили
                        </a>
                    </li>
                    <li className="header-main__menu-item">
                        <a className="header-main__menu-link" href="/contact-information">
                            Контакты
                        </a>
                    </li>
                    <li className="header-main__menu-item">
                        <a className="header-main__menu-link" href="/services">
                            Услуги
                        </a>
                    </li>
                    <li className="header-main__menu-item">
                        <a className="header-main__menu-link" href="/jobs">
                            Вакансии
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
;

export { HeaderMain };