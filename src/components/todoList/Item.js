import React from 'react';
import Button from '../button/Button';
import { iconTypes } from '../../constants/icons';
import { Icon } from '../icon/Icon';
import styles from './ToDoList.module.scss';

// export class ToDoItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   onClickClose = () => {
//     this.props.removeItem(this.props.id);
//   }

//   render() {
//     return (
//       <li className={styles.listItem}>
//         <div className={styles.listItemValueWrapper}>{this.props.item.value}</div>
//         <Button size="small" onClick={this.onClickClose} iconType={iconTypes.cross} />
//       </li>
//     );
//   }
// }

export const Item = (props) => {

  const onClickClose = (e) => {
    props.removeItem(props.id);
  }

  return (
    <li className={styles.listItem}>
      <p className={styles.listItemValueWrapper}>{props.item.value}</p>
      <Button><Icon type={iconTypes.delete} onClick={onClickClose} size="32px" /></Button>
    </li>
  );
}
