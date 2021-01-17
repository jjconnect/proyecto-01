import React from 'react'
import {useTranslation} from 'react-i18next'

const QuienesSomos = () => {

const {t} = useTranslation(['welcome'])

    return (
        <div>
            <div className="text-center mt-3">
                <h1>{t('pQuienes.tituloH1')}</h1>
                <img alt="" src="https://www.fundeu.es/wp-content/uploads/2011/02/en-loor-en-olor.png" className="mt-3"></img>
            </div>
                <div className="container">
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus harum eveniet 
                    voluptatem assumenda in facere neque! Id tempora tenetur commodi nisi asperiores illo incidunt consectetur, 
                    nostrum voluptatum qui in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro maxime, 
                    iste harum quas incidunt deserunt recusandae laboriosam fugiat odit ipsam dicta fuga neque ducimus ab. 
                    Hic aspernatur quasi dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia tenetur 
                    praesentium fugit recusandae nemo ducimus dicta qui, eaque cumque. Expedita repellat officiis aperiam dicta. 
                    xplicabo voluptas provident natus! Possimus.</p>
                </div>
        </div>

    )
}

export default QuienesSomos
