import React from "react";
import { arrayOf, string } from 'prop-types';


const ListItem = props => {

  ListItem.propTypes = {
    value: string
  }

  const value = props.value;
  return <li>{value}</li>
}

const List = ({ items }) => {
  
  List.propTypes = {
    items: arrayOf(string),
  };
  
  return (
    <ul>{
      items.map(item => <ListItem key={item.toString()} value={item} />)
    }</ul>
  );
}

export default List;