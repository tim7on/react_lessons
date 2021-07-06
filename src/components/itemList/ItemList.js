import React from 'react';


class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}
         
class ItemsList extends React.Component {
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <ul>
                {
                    this.props.data.items.map(function(item){
                        return <Item key={item} name={item} />
                    })
                }
                </ul>
            </div>);
    }
}
 
export default ItemsList;