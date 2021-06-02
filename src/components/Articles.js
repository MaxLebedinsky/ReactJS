import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../store/articles/actions';
import { REQUEST_STATUS } from '../utils/constants';

export const Articles = () => {
    const articles = useSelector(state => state.articles.articlesList);
    const articlesStatus = useSelector(state => state.articles.request.status);
    const articlesError = useSelector(state => state.articles.request.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, []);

    console.log('articles: ', articles);

    if (articlesStatus === REQUEST_STATUS.PENDING) {
        return <h3>Loading...</h3>
    }

    if (articlesError) {
        return <h3>Error: {articlesError}</h3>
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