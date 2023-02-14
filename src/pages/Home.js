import { Fragment } from 'react';
import Header from '../components/header/Header';
import Projects from './Projects';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Projects/>
    </Fragment>
  );
};
export default Home;
