import React from 'react'
import {useTranslation} from 'react-i18next'

const Contacto = () => {

    const {t} = useTranslation(['welcome'])

    return (

        <div className="mt-5">
            <h1 className="d-flex justify-content-center ">{t('pContacto.tituloH1')}</h1>
            <div>
            <hr className="mt-5"></hr>
            </div>
                <p className="text-center mt-5"><strong>{t('pContacto.tituloS1')}</strong><a href="mailto: contacto@jjcars.com" target="_blank" rel="noopener noreferrer">contacto@jjcars.com</a></p>
                <p className="text-center"><strong>{t('pContacto.tituloS2')}</strong> +57 301 35 0213</p>
            </div>

    )
}

export default Contacto
