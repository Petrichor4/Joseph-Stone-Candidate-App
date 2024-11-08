import { useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [cand, setcand] = useState<Candidate>({
    img: '',
    login: '',
    location: '',
    company: '',
    bio: '',
  })
  const getCand = async () => {
    const data: Candidate = await searchGithub();
    console.log(data);
    setcand({
      img: data.img,
      login: data.login,
      location: data.location,
      company: data.company,
      bio: data.bio,
    });
  }
  const saveCand = async () => {
    const data: Candidate = await searchGithubUser(cand.login);
    const savedCand = JSON.parse(localStorage.getItem('savedCand') || '[]');
    savedCand.push(data);
    localStorage.setItem('savedCand', JSON.stringify(savedCand));
  }
  // Create component to handle the search for a list of employees that is randomly generated then selecting just one of the employees from that list=> 
  // function to handle the mouse clicks =>
  // Create component to display the information in a card on the screen =>
  return (
  <div id='cand-display'>
    <h1>CandidateSearch</h1>
    <section id='cand'>
      <img src={`${cand.img}`} alt={cand.login} />
      <h2>{cand.login}</h2>
      <h3>{cand.location}</h3>
      <h4>{cand.company}</h4>
      <p>{cand.bio}</p>
      <button onClick={getCand}>Get Candidate</button>
      <button onClick={saveCand}>Save Candidate</button>
    </section>
  </div>
);
};

export default CandidateSearch;
