import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>application</span> tracker
          </h1>
          <p>
            An application tracking system is a software application that helps companies to manage the recruitment process.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}
