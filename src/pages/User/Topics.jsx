import React from 'react';
import Slider from 'react-slick';
import one from '../../assets/language_learning.jpeg';
import two from '../../assets/math_and_logic.jpeg';
import three from '../../assets/physical_science_and_engineering.jpeg';
import four from '../../assets/health.jpeg';
import five from '../../assets/social_sciences.jpeg';
import six from '../../assets/arts_and_humanities.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const topics = [
  { image: one, title: 'Language Learning' },
  { image: two, title: 'Math and Logic' },
  { image: three, title: 'Physical Science and Engineering' },
  { image: four, title: 'Health' },
  { image: five, title: 'Social Sciences' },
  { image: six, title: 'Arts and Humanities' },
];

const TopicCard = ({ image, title }) => {
  return (
    <div
      className="bg-cover bg-center h-40 flex items-center justify-center text-white text-xl font-bold rounded-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
      {title}
    </div>
  );
};

const Topics = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Explore Topics and Skills</h1>

      {/* Carousel for mobile and iPads */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {topics.map((topic) => (
            <TopicCard key={topic.title} image={topic.image} title={topic.title} />
          ))}
        </Slider>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.title} image={topic.image} title={topic.title} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
