
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentListIcon, UserIcon, HeartIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import logo from './pet3.png'
import img1 from './petvet.jpg'
import gen from './gen.jpg'
import surg from './surg.png'
import vet from './veteri.jpeg'
import dogImage from './dog.jpg'
import catImage from './cat.jpg'
import birdImage from './bird.jpg'
import smallAnimalsImage from './rabbit.webp'

export const assets = {
    logo,
    img1,
    gen,
    surg,
    vet,
    dogImage,
    catImage,birdImage,smallAnimalsImage
}

export const specialityData = [
    {
        speciality: 'General',
        image: gen
    },
    {
        speciality: 'Surgeon',
        image: surg
    }
]


export const features = [
    {
        name: 'Push to deploy',
        description:
          'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'SSL certificates',
        description:
          'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
      },
      {
        name: 'Simple queues',
        description:
          'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
      },
      {
        name: 'Advanced security',
        description:
          'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
      },
]


export const about = [
    {
      name: "Comprehensive Pet Records",
      description: "Easily manage your pet’s medical history, vaccinations, and vet visits all in one place.",
      icon: ClipboardDocumentListIcon,
    },
    {
      name: "24/7 Vet Support",
      description: "Get instant access to professional veterinary advice anytime, anywhere.",
      icon: UserIcon,
    },
    {
      name: "Personalized Health Tips",
      description: "Receive customized care recommendations based on your pet’s age, breed, and health history.",
      icon: HeartIcon,
    },
    {
      name: "Emergency Assistance",
      description: "Locate the nearest vet clinic or emergency service when your pet needs urgent care.",
      icon: ShieldCheckIcon,
    },
  ];