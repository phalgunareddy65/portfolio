import React from 'react';
import profilePic from '../profilepic2.jpeg';
function Home() {
  return (
    <div className="page-container">
      <div className="profile-section">
       <img src={profilePic} alt="Phalguna Profile" className="profile-picture" />
        <h1>Phalguna Reddy</h1>
      </div>

      <section className="info-section">
        <h2>About Me</h2>
        <p>I am a passionate student with a strong background in Artificial intelligence and Machine learning.
             I enjoy working on innovative projects, participating in hackathons, and continuously expanding my technical skill set.
             I have also been a part in GaMUverse's research team to publish a research paper </p>

        <h2>Research Interests</h2>
        <p>Artificial Intelligence, Machine Learning, Natural Language Processing, and Deep Learning.</p>

        <h2>Personal Details</h2>
        <ul>
          <li><strong>Phone Number:</strong> 8106689173</li>
          <li><strong>Personal Email:</strong> phalgunareddy65@gmail.com</li>
          <li><strong>College Email:</strong> se23uari058@mahindrauniversity.edu.in</li>
        </ul>

        <h2>Skills</h2>
        <ul className="skills-list">
          <li>CSS</li>
          <li>Java</li>
          <li>Python</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;