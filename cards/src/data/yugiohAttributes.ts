import DARK from '../assets/icons/attributes/DARK.png'
import DIVINE from '../assets/icons/attributes/DIVINE.png'
import EARTH from '../assets/icons/attributes/EARTH.png'
import WATER from '../assets/icons/attributes/WATER.png'
import FIRE from '../assets/icons/attributes/FIRE.png'
import LIGHT from '../assets/icons/attributes/LIGHT.png'
import WIND from '../assets/icons/attributes/WIND.png'

import { StaticImageData } from 'next/image'

type AttributeImages = {
    [key: string]: StaticImageData;
}

const YugiohAttribute: AttributeImages = {
    'DARK' : DARK,
    'DIVINE' : DIVINE,
    'EARTH' : EARTH,
    'WATER' : WATER,
    'FIRE' : FIRE,
    'LIGHT' : LIGHT,
    'WIND' : WIND
}

export default YugiohAttribute