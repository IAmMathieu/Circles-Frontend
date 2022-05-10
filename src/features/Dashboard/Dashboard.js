import Calendar from './Calendar';
import Circle from './Circle';
import NextEvents from './NextEvents';
import LeftPanel from './LeftPanel';
import NewCircle from './NewCircle';
import Carousel from 'react-grid-carousel';

export const Dashboard = ({ logout }) => {
  return (
    <div className='dashboard-container'>
      <LeftPanel logout={logout} />
      <Calendar />
      <NextEvents />
      <div className='circlebox' id='circlebox'>
        <Carousel
          cols={5}
          showDots
          responsiveLayout={[
            { breakpoint: 1800, cols: 4 },
            { breakpoint: 1450, cols: 3 },
            { breakpoint: 1100, cols: 2 },
            { breakpoint: 950, cols: 1 },
          ]}
        >
          <Carousel.Item>
            <NewCircle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
          <Carousel.Item>
            <Circle />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
