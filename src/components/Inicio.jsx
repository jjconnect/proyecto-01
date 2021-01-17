import React from 'react'
import Carousel from './Carousel'
import {useTranslation} from 'react-i18next'

const Inicio = () => {

const {t} = useTranslation(['welcome'])

    return (
        <div>
            <h1 className="text-center mt-4">{t("pInicio.tituloH1")}</h1>
            <Carousel></Carousel>
            <div className="container mt-3">
                <h3>{t("pInicio.tituloH3")}</h3>
                <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, 
                pariatur aperiam voluptates voluptatem, dicta eveniet corrupti animi repellat deserunt 
                eligendi neque sint distinctio, ratione facilis. Earum nesciunt nemo molestiae cum. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate sit, 
                molestiae laboriosam quae rerum expedita. Fuga laborum in perferendis qui labore dolorem, 
                quo illo unde, odit, vero non ab!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, 
                pariatur aperiam voluptates voluptatem, dicta eveniet corrupti animi repellat deserunt 
                eligendi neque sint distinctio, ratione facilis. Earum nesciunt nemo molestiae cum. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate sit, 
                molestiae laboriosam quae rerum expedita. Fuga laborum in perferendis qui labore dolorem, 
                quo illo unde, odit, vero non ab!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, 
                pariatur aperiam voluptates voluptatem, dicta eveniet corrupti animi repellat deserunt 
                eligendi neque sint distinctio, ratione facilis. Earum nesciunt nemo molestiae cum. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate sit, 
                molestiae laboriosam quae rerum expedita. Fuga laborum in perferendis qui labore dolorem, 
                quo illo unde, odit, vero non ab!</p>
                <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, 
                pariatur aperiam voluptates voluptatem, dicta eveniet corrupti animi repellat deserunt 
                eligendi neque sint distinctio, ratione facilis. Earum nesciunt nemo molestiae cum. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate sit, 
                molestiae laboriosam quae rerum expedita. Fuga laborum in perferendis qui labore dolorem, 
                quo illo unde, odit, vero non ab!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, 
                pariatur aperiam voluptates voluptatem, dicta eveniet corrupti animi repellat deserunt 
                eligendi neque sint distinctio, ratione facilis. Earum nesciunt nemo molestiae cum. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate sit, 
                molestiae laboriosam quae rerum expedita. Fuga laborum in perferendis qui labore dolorem, 
                quo illo unde, odit, vero non ab!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, 
                pariatur aperiam voluptates voluptatem, dicta eveniet corrupti animi repellat deserunt 
                eligendi neque sint distinctio, ratione facilis. Earum nesciunt nemo molestiae cum. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate sit, 
                molestiae laboriosam quae rerum expedita. Fuga laborum in perferendis qui labore dolorem, 
                quo illo unde, odit, vero non ab!</p>
                
            </div>
        </div>
    )
}

export default Inicio
