import React, { useState } from 'react';
import styles from './Guide.module.css';

interface GuideProps {
  query: string;
  onClose: () => void;
  onSearch: (query: string) => void; // Add onSearch prop
}

const Guide: React.FC<GuideProps> = ({ query, onClose, onSearch }) => {
  const [isGuideVisible, setIsGuideVisible] = useState(true);

  const handleGuideClose = () => {
    setIsGuideVisible(false);
    onClose();
    console.log('Guide closed');
  };

  const handleSearch = () => {
    onSearch(query);
    handleGuideClose(); // Close the guide after searching
  };

  return (
    <>
      {isGuideVisible && (
        <div className={styles.guideContainer}>
          <div className={styles.guidePopup}>
            <h2 className={styles.guideTitle}>Welcome to the Guide!</h2>
            <p className={styles.guideText}>
              This interactive guide will help you make the most of the search bar and navigate through the page.
            </p>
            <p className={styles.guideText}>
              To use the search bar, simply enter your query and press Enter. The search results will be displayed below.
            </p>
            <p className={styles.guideText}>
              To navigate through the page, use the navigation links provided. Click on &ldquo;Home&rdquo; to go to the home page, &ldquo;About&rdquo; to learn more about the site, and &ldquo;Contact&rdquo; to get in touch with us.
            </p>
            <p className={styles.guideText}>
              Search Query: <span className={styles.guideQuery}>{query}</span>
            </p>
            <button className={styles.guideButton} onClick={handleSearch}>
              Search
            </button>
            
            <button className={styles.closeButton} onClick={handleGuideClose}>
              Close
            </button>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Guide;
