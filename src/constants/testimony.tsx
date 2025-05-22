import author1 from '../assets/images/author-1.webp'
import author2 from '../assets/images/author-2.webp'
import author3 from '../assets/images/author-3.webp' 
import author4 from '../assets/images/author-4.webp'
import type { StaticImageData } from 'next/image';


export type Testimony = {
    rating: number,
    name: string,
    occupation: string,
    testimony: string,
    image: StaticImageData
}

const testimonies: Testimony[] = [
    {
        rating: 4.5,
        name: "Lydia Gibson",
        occupation: "Corporate Consultant, Nairobi",
        testimony: "I needed a reliable vehicle for a long-term project in the city, and Nova Ride exceeded my expectations. The long-term hire was affordable, and the customer service was outstanding.",
        image: author1 
    },
    {
        rating: 4.5,
        name: "Zanele Dlamini",
        occupation: "Bride, Johannesburg",
        testimony: "Nova Ride made my wedding day even more special! The wedding car was elegant and spotless, and the chauffeur was so professional. We arrived in style, right on time.",
        image: author2 
    },
    {
        rating: 4.5,
        name: "Nafisa Yusuf",
        occupation: "Frequent Business Traveler, Nairobi",
        testimony: "I use Nova Ride every time I fly in for meetings. Their airport transfer service is punctual and very comfortable—makes my travel stress-free every time.",
        image: author3 
    },
    {
        rating: 4.5,
        name: "John McCoy",
        occupation: "Luxury Event Planner, Uk",
        testimony: "I often book Nova Ride’s chauffeur service for my VIP clients. The drivers are courteous, the vehicles are immaculate, and the whole experience screams premium quality.",
        image: author4
    }
]

export default testimonies
