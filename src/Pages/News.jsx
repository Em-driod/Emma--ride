import React, { useEffect, useState } from 'react';  

// Using a free car news API  
const API_URL = 'https://www.caranddriver.com/rss'  

const News = () => {  
  const [newsArticles, setNewsArticles] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    const fetchNews = async () => {  
      try {  
        const response = await fetch(API_URL);  
        if (!response.ok) {  
          throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        setNewsArticles(data.articles); // adjust based on the API's response structure  
      } catch (error) {  
        setError(error.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchNews();  
  }, []);  

  if (loading) return <div>Loading...</div>;  
  if (error) return <div>Error: {error}</div>;  

  return (  
    <div className=''>  
      <h1>Car News</h1>  
      {newsArticles.length > 0 ? (  
        <ul>  
          {newsArticles.map((article, index) => (  
            <li key={index}>  
              <h2>{article.title}</h2>  
              <p>{article.description}</p>  
              <a href={article.url} target="_blank" rel="noopener noreferrer">  
                Read more  
              </a>  
            </li>  
          ))}  
        </ul>  
      ) : (  
        <p>No news articles available.</p>  
      )}  
    </div>  
  );  
};  

export default News;