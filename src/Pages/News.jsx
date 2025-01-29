import React from 'react';  

const News = () => {  
  // Hardcoded news articles data  
  const newsArticles = [  
    {  
      title: 'New Electric SUVs Hit the Market',  
      description: 'Several automakers are launching new electric SUVs this year, offering consumers more choices for sustainable driving.',  
      url: 'https://example.com/electric-suvs',  
    },  
    {  
      title: 'The Future of Autonomous Vehicles',  
      description: 'As technology advances, autonomous vehicles are becoming a reality on the roads, promising a transformed driving experience.',  
      url: 'https://example.com/autonomous-vehicles',  
    },  
    {  
      title: 'Top 10 Cars of 2025',  
      description: 'Check out the cars that are predicted to lead the market in 2025, highlighting innovations and top features.',  
      url: 'https://example.com/top-cars-2025',  
    },  
    {  
      title: 'Setting New Standards: Hybrid Vehicles',  
      description: 'Hybrids are evolving, combining efficiency with performance. Learn about the latest offerings that are setting new benchmarks.',  
      url: 'https://example.com/hybrid-cars',  
    },  
    {  
      title: 'Revving Up: The Best Performance Cars of 2025',  
      description: 'Discover which high-performance models are set to dominate the roads in 2025, with thrilling designs and capabilities.',  
      url: 'https://example.com/performance-cars',  
    },  
  ];  

  return (  
    <div className=''>  
      <h1 className='mt-16'>Car News</h1>  
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