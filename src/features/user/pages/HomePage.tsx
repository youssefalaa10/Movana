import Layout from "../../../layouts/User-Layout";
import HeroSlider from "../components/HeroSlider";
import MovieRow from "../components/MovieRow";

const HomePage = () => {

    return (
        <Layout>
        <div className="mx-4 my-6 p-6 bg-secondary rounded-[25px]">
          <HeroSlider />
          <MovieRow title="You Might Like" />
        </div>
      </Layout>
  );
};

export default HomePage;