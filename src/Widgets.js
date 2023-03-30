import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgest() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />

      </div>
      {newsArticle("React is back", "Top news - 999 readers")}
      {newsArticle("Job Layoff's: United States updates", "Top news - 886 readers")}
      {newsArticle("OpenAI hits new high", "Artificial Intelligence - 800 readers")}
      {newsArticle("Is Redux new tool for efficency?", "Code Wars - 123 readers")}
    </div>
  );
}

export default Widgest;
