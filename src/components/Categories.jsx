import React from "react";

function Categories({items}) {
    console.log(items);
    
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map(num => 'Number' + num)}
      </ul>
    </div>
  );
}

export default Categories;
