import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <About />
    <Footer />
  </div>
);

export default Page;
