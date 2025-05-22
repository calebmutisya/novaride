import fordpickup from '../assets/car_images/Ford_F150.webp'
import isuzupolo from '../assets/car_images/isuzu_polo.webp'
import mazdacx50 from '../assets/car_images/mazda_cx5.webp'
import sunwin_bus from '../assets/car_images/sunwin_bus.webp'
import allion from '../assets/car_images/toyota_allion.webp'
import axio from '../assets/car_images/toyota_axio.webp'
import harrier from '../assets/car_images/toyota_harrier.webp'
import hiace from '../assets/car_images/toyota_hiace.webp'
import hilux from '../assets/car_images/toyota_hilux.webp'
import markx from '../assets/car_images/toyota_markx.webp'
import premio from '../assets/car_images/toyota_premio.webp'
import rav4 from '../assets/car_images/toyota_rav4.webp'
import vanguard from '../assets/car_images/toyota_vanguard.webp'
import voxy from '../assets/car_images/toyota_voxy.webp'
import fielder from '../assets/car_images/toyota_fielder.webp'
import { StaticImageData } from 'next/image'

export type Fleet = {
    id: number;
    image: StaticImageData;
    type: string;
    title: string;
    capacity: string;
    transmission: string;
    dailyprice: string;
}


const ourfleet =[
    {
        id: 1,
        image: allion,
        type: "Sedan",
        title: "Toyota Allion",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "4500",
    },
    {
        id: 2,
        image: axio,
        type: "Sedan",
        title: "Toyota Axio",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "4500",
    },
    {
        id: 3,
        image: fielder,
        type: "Sedan",
        title: "Toyota Fielder",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "5000",
    },
    
   
    {
        id: 4,
        image: markx,
        type: "Sedan",
        title: "Toyota Mark X",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "5000",
    },
    {
        id: 5,
        image: premio,
        type: "Sedan",
        title: "Toyota Premio",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "5000",
    },
    {
        id: 6,
        image: harrier,
        type: "SUV",
        title: "Toyota Harrier",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "10000",
    },
    {
        id: 7,
        image: rav4,
        type: "SUV",
        title: "Toyota Rav 4",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "7500",
    },
    {
        id: 8,
        image: vanguard,
        type: "SUV",
        title: "Toyota Vanguard",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "6500",
    },
    {
        id: 9,
        image: mazdacx50,
        type: "SUV",
        title: "Mazda CX5",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "8500",
    },
    {
        id: 10,
        image: hilux,
        type: "Pickup",
        title: "Toyota Hilux",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "10000",
    },  
    {
        id: 11,
        image: fordpickup,
        type: "Pickup",
        title: "Ford F150",
        capacity: "4",
        transmission: "Automatic",
        dailyprice: "15000",
    },
    
    {
        id: 12,
        image: voxy,
        type: "Van",
        title: "Toyota Voxy",
        capacity: "8",
        transmission: "Automatic",
        dailyprice: "13000",
    },
    {
        id: 13,
        image: hiace,
        type: "Van",
        title: "Toyota Hiace",
        capacity: "14",
        transmission: "Automatic",
        dailyprice: "15000",
    },
    {
        id: 14,
        image: isuzupolo,
        type: "Bus",
        title: "Isuzu Polo",
        capacity: "33",
        transmission: "Manual",
        dailyprice: "25000",
    },
    {
        id: 15,
        image: sunwin_bus,
        type: "Bus",
        title: "Sunwin Bus",
        capacity: "51",
        transmission: "Manual",
        dailyprice: "35000",
    }
]

export default ourfleet