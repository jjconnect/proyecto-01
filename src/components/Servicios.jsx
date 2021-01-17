import React from 'react'
import {useTranslation} from 'react-i18next'

const Servicios = () => {

    const {t} = useTranslation(['welcome']);

    return (
        <div className="container mt-3">
            <h1 className="d-flex justify-content-center">{t('pServicios.tituloH1')}</h1>
            <div className="row align-items-center ms-3 mt-5">
                <div className="col-6">
                    <h3>{t('pServicios.tituloH3-1')}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nam blanditiis tenetur optio pariatur aspernatur nulla possimus dignissimos, 
                        tempora exercitationem, repellat amet debitis deserunt veniam delectus, ex maxime explicabo inventore? 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia architecto placeat sit numquam ea voluptas 
                        aliquid dolore, ipsam nam porro, voluptate illum nemo quibusdam nihil quidem eos maxime. Molestiae, possimus?</p>
                </div>
                <div className="col-6">
                    <img 
                        alt="" 
                        src="https://i.planetavenezuela.com.ve/images/2018/0919/170061-pulituraparafaros-opacos-de-carros-enmaracay-20180919230348800.jpg" 
                        className="rounded-2"
                    >
                    </img>
                </div>
            </div>
            <div className="row align-items-center ms-3 mt-5">
                <div className="col-8">
                    <h3>{t('pServicios.tituloH3-2')}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nam blanditiis tenetur optio pariatur aspernatur nulla possimus dignissimos, 
                        tempora exercitationem, repellat amet debitis deserunt veniam delectus, ex maxime explicabo inventore? 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia architecto placeat sit numquam ea voluptas 
                        aliquid dolore, ipsam nam porro, voluptate illum nemo quibusdam nihil quidem eos maxime. Molestiae, possimus?</p>
                </div>
                <div className="col-4">
                    <img 
                        width="300" 
                        alt="" 
                        src="https://previews.123rf.com/images/kadmy/kadmy1312/kadmy131200035/24608361-dos-mec%C3%A1nicos-reparador-emparejan-autom%C3%B3vil-cuerpo-parachoques-en-coche-da%C3%B1ado-en-la-estaci%C3%B3n-de-servicio-de-re.jpg" 
                        className="rounded-2"
                    >
                    </img>
                </div>
            </div>
            <div className="row align-items-center ms-3 mt-5">
                <div className="col-4">
                    <img 
                    width="300" 
                    alt="" 
                    src="https://thumbs.dreamstime.com/z/lavado-de-limpieza-del-t%C3%BAnel-veh%C3%ADculo-en-el-152827368.jpg" 
                    className="rounded-2"
                >
                </img>
                </div>
                <div className="col-8">
                    <h3>{t('pServicios.tituloH3-3')}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi modi quod autem molestias, adipisci 
                        tenetur facere vitae corporis provident impedit repellendus consequuntur dolores eligendi ex expedita? Repudiandae, 
                        facilis repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nam blanditiis tenetur optio pariatur aspernatur nulla possimus dignissimos, 
                        tempora exercitationem, repellat amet debitis deserunt veniam delectus, ex maxime explicabo inventore? 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia architecto placeat sit numquam ea voluptas 
                        aliquid dolore, ipsam nam porro, voluptate illum nemo quibusdam nihil quidem eos maxime. Molestiae, possimus?</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios
