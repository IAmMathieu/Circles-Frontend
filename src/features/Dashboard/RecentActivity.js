import Carousel from 'react-grid-carousel';
import NewEntry from './NewEntry';
export const RecentActivity = () => {
  return (
    <div>
      <h3>Activité récente</h3>
      <div className='leftmenu--recent-container'>
        <Carousel
          cols={1}
          rows={3}
          gap={10}
          showDots
          hideArrow
          responsiveLayout={[
            { breakpoint: 1000, cols: 2 },
            { breakpoint: 750, cols: 1 },
          ]}
        >
          <Carousel.Item>
            <NewEntry
              author='Flo'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
          <Carousel.Item>
            <NewEntry
              author='Aleks'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
          <Carousel.Item>
            <NewEntry
              author='Flo'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
          <Carousel.Item>
            <NewEntry
              author='Aleks'
              circle="O'clock"
              event="Ajout d'un anniversaire"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
