import React, { useState } from 'react';
import Counter from '../lesson3/Counter';
import List from '../lesson3/List';

const names = ['Trey', 'Sean', 'Kelly', 'Mac'];
export const CreateObject = () => {

    const [visible, setVisible] = useState(false)

    return (visible ? <div><Counter /><List items={names}></List><button onClick={() => { setVisible(false) }}>Скрыть</button></div> : <button onClick={() => { setVisible(true) }}>Показать</button>)
}
// export default CreateObject;

export class CreateObject2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            text: 'Скрыть'
        };
    }
    componentDidMount() {
        console.log(' CreateObject2 Объект Смонтирован')
    }

    componentWillUnmount() {
        console.log(' CreateObject2 Объект Отмонтирован')
    }
    CurrentVisble = () => {
        if (this.state.show) {
            this.setState({
                show: false,
                text: 'Показать'
            });
        } else {
            this.setState({
                show: true,
                text: 'Скрыть'
            });
        }
    }
    render() {
        return (this.state.show
            ? <div><Counter /><button className='' onClick={this.CurrentVisble}>{this.state.text}</button></div>
            : <button onClick={this.CurrentVisble}>{this.state.text}</button>)
    }
}