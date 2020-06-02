import React from 'react';
import './Column.css'
import TabArticle from '../tab-article/TabArticle';

function Column(props) {
  const column = props.column || 2
  return (
    <div className="Column">
      {Array(column).fill(1).map((el, i) =>
        <div className="Column-item">
          <TabArticle key={i}/>
        </div>
      )}
    </div>
  );
}

export default Column;
