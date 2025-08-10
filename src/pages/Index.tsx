import React from 'react';
import SplineExperience from '../components/SplineExperience';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* The SplineExperience component will render here */}
      <SplineExperience />
      <p style={{ textAlign: 'center', paddingTop: '50vh', color: 'white' }}>
        HomePage component is ready. Waiting for SplineExperience component.
      </p>
    </div>
  );
};

export default HomePage;
