import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'
import {useTranslation} from 'react-i18next'
import CambioIdioma from './CambioIdioma';

const Navbar = (props) => {

    const {t} = useTranslation(['welcome']);

    return (
        <div className="navbar navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/" exact="true">JJ Cars</Link>
                    <div className="me-auto ms-3">
                        <NavLink className="btn btn-primary me-2" to="/" exact>
                            {t('inicio')}
                        </NavLink>
                        <NavLink className="btn btn-primary me-2" to="/servicios">
                            {t('servicios')}
                        </NavLink>
                        <NavLink className="btn btn-primary me-2" to="/quienes">
                            {t('quienes')}
                        </NavLink>
                        <NavLink className="btn btn-primary me-2" to="/contacto">
                            {t('contacto')}
                        </NavLink>
                        
                    </div>
                    <CambioIdioma></CambioIdioma>
            </div>

        </div>
    )
}

export default withRouter(Navbar)
