import React from 'react';


function App() {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <img src="./assets/MR-LOGO.jpg" alt="MR. ROVER" style={styles.roverImage} />
      </div>
    </div>
  );
}

const styles = {
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Light blue background
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  roverImage: {
    maxWidth: '50%',
    maxHeight: '50%',
    objectFit: 'contain', // Maintain the aspect ratio of the image
  },
};

export default App;
