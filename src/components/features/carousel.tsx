import { Splide, SplideSlide } from '@splidejs/react-splide';
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
        perPage: 1,
      },
    },
    autoScroll: {
        speed: 0.5,
      },
  };

  const clients = [
    'qonto.svg',
    'ibm.svg',
    'orange.svg',
    'zalando.svg',
    'mars.svg'
  ]

export function Carousel() {
    return (

            <Splide options={options} extensions={ {AutoScroll} } aria-label="My Favorite Images">
                {clients.map((client, index) => (
                    <SplideSlide key={index}>
                        <img src={`/img/clients/${client}`} alt={client} />
                    </SplideSlide>
                ))}
            </Splide>
    
    )
}