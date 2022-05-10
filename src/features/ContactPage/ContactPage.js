import './style.scss';
import logo from './../../logo.svg';
import UserContact from './Segment';
import portraitAlex from '../../assets/images/portrait_alex.jpg';
import portraitElo from '../../assets/images/portrait_elo.jpg';
import portraitLogan from '../../assets/images/portrait_logan.jpg';
// import portraitRobin from '../../assets/images/portrait_robin.jpg';
// import portraitMathieu from '../../assets/images/portrait_mathieu.jpg';

function ContactPage() {
  return (
    <div>
      <a href='/dashboard'>
        <img src={logo} alt='Logo Circles' className='circle-logo' />
      </a>
      <h1 className='title'>Contact</h1>
      <div className='container-contacts'>
        <UserContact
          name='Alexandre CREVEL'
          desc='Product Owner'
          portrait={portraitAlex}
          email='alexandre.crevel@outlook.com'
        />
        <UserContact
          name='Elodie BUSTIN'
          desc='Lead Dev Front'
          portrait={portraitElo}
          email=''
        />
        <UserContact
          name='Logan WILLAUMEZ'
          desc='Git Master of the entire world'
          portrait={portraitLogan}
          email=''
        />
        <UserContact
          name='Robin POPPEL'
          desc='SCRUM Master'
          portrait={portraitLogan}
          email=''
        />
        <UserContact
          name='Mathieu TOURTE'
          desc='Lead Dev Back'
          portrait={portraitLogan}
          email=''
        />
      </div>
    </div>
  );
}

export default ContactPage;
