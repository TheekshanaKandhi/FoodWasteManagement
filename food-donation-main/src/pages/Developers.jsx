import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const developers = [
  {
    name: 'THOTA RAM VARUN',
    photo: 'https://media.licdn.com/dms/image/v2/D5635AQFh9wFfyhqYUw/profile-framedphoto-shrink_400_400/B56ZobxYK2JoAc-/0/1761402520554?e=1764795600&v=beta&t=tmBblh2TzVMHcOZ04Aj35wszp5zATGee0Z6f5qiFLbI',
    role: 'JavaScript Developer',
    description: 'A sustainable food management system designed to track, collect, and distribute surplus food to reduce environmental impact.',
    email: 'thotaramvarun26082006@gmail.com',
  },
  {
    name: 'KANDHI THEEKSHANA',
    photo: 'https://avatars.githubusercontent.com/u/163739692?s=400&v=4',
    role: 'React Developer',
    description: 'A sustainable food management system designed to track, collect, and distribute surplus food to reduce environmental impact.',
    email: 'theekshanakandhi@gamil.com',
  },

  // ⭐ Added New Developer
  {
    name: 'M MYTHRI',
    photo: 'https://avatars.githubusercontent.com/u/163739692?s=400&v=4',
    role: 'Backend Developer',
    description: 'A sustainable food management system designed to track, collect, and distribute surplus food to reduce environmental impact.',
    email: 'mlakshmimythri@gamil.com',
  }
];

function Developers() {
  return (
    <div className="md:pt-24 pb-10 lg:px-8 pt-24 bg-gray-100 mx-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">Developed By</h1>
      <div className="flex items-center justify-center flex-col gap-5 md:flex-row">
        {developers.map((developer, index) => (
          <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
            <div className="flex flex-col items-center">
              <img src={developer.photo} alt={developer.name} className="w-32 h-32 rounded-full mb-6" />
              <h2 className="text-2xl font-bold mb-2 font-kalam text-primary-color text-center">{developer.name}</h2>
              <h3 className="text-sm text-gray-100 mb-4">{developer.role}</h3>
              <p className="text-gray-100 text-center mb-4">{developer.description}</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mb-6">Hire Me</button>

              <div className="flex justify-center space-x-6 mb-4">
                <a href={developer.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-colors duration-300 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href={developer.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-colors duration-300 p-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href={developer.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-colors duration-300 p-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>

              <p className="text-gray-100 text-center">{developer.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developers;
