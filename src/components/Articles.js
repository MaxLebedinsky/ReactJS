import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/constants';

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("request failed with status: " + response.status);
            }
            console.log('response: ', response);
            return response.json();
        })
        .then(data => {
            // console.log(data);
            setArticles(data);
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => setLoading(false));
    }, []);
    console.log('articles: ', articles);

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>Error: {error}</h3>
    }
    return (
        <div className="articles">
            <h2>Articles page</h2>
            <br/>
            {articles.map(article => (
                <div key={article.id}>
                    <h4>{article.title}</h4>
                    <p>{article.summary}</p>
                    <br/>
                </div>
            ))}
        </div>
    )
}