import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const options = {
  type: 'loop',
  perPage: 6,
  perMove: 1,
  gap: '1rem',
  pagination: false,
  arrows: false,
  breakpoints: {
    600: {
      perPage: 3,
    },
  },
  autoScroll: {
    speed: 0.5,
  },
};

const clients = [
  'qonto.svg',
  'ibm.svg',
  'zalando.svg',
  'mars.svg'
]

export function Carousel() {
  return (

    <Splide options={options} extensions={{ AutoScroll }} aria-label="My Favorite Images">
      {clients.map((client, index) => (
        <SplideSlide key={index} className="flex justify-center items-center">
          <Image src={`/img/clients/${client}`} alt={client} width={100} height={100} />
        </SplideSlide>
      ))}
    </Splide>

  )
}