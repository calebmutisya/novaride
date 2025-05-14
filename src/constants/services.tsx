import longhire from '../assets/svg/longhire.svg'
import wedding from '../assets/svg/wedding.svg'
import airport from '../assets/svg/airport.svg'
import driver from '../assets/svg/driver.svg'

// Typescript type  
export type Service = {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
}


const services =[
    {
        id: 1,
        title: "Long Term Car Hire",
        image: longhire,
        description:"Enjoy Up to 25% discounts on vehicles hired for 30 + days!!",
        link: "/services/longtermhire"
    },
    {
        id: 2,
        title: "Wedding Car Hire",
        image: wedding,
        description:"Clean modern and well-maintained luxury vehicles available for you to hire while at your wedding.",
        link: "/services/weddingservices"
    },
    {
        id: 3,
        title: "Airport Transfer",
        image: airport,
        description:"We offer airport transfers across the major airports and airstrips in the country.",
        link: "/services/airporttransfer"
    },
    {
        id: 4,
        title: "Chauffeur Service",
        image: driver,
        description:"Sit back and relax while our driver takes care of the driving.",
        link: "/services/chauffeurservice"
    }
]

export default services