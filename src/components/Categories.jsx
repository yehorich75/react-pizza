import React from "react";

// function Categories({items, onClickItem}) {
//     console.log(items);

//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((name, index) => (
//           <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
//             {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

class Categories extends React.Component {
  state = {
    activeItem: 3,
  }

  onSelectItem = (index) => {
    this.setState({
      activeItem: index
    });
  };

  render() {
    const {items, onClickItem} = this.props;
    return (
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map((name, index) => (
            <li 
              className={this.state.activeItem === index ? 'active' : ''} 
              onClick={() => this.onSelectItem(index)} 
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
