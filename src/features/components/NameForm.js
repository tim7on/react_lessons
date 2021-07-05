import React from 'react';
import Input from './input/Input';
import NewForm from './newForm/NewForm'


// Управляемая форма
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            taste: 'lime',
            firstName: '',
            lastName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTaste = this.handleChangeTaste.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(`name is: ${this.state.lastName} ${this.state.firstName}`)
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleChangeTaste(event) {
        this.setState({ taste: event.target.value })
    }
    render() {
        return (
            <NewForm name="Nothing">
                <form onSubmit={this.handleSubmit}>
                    <Input inputType="text" name="firstName" labelName="Имя" onChange={this.handleInputChange} value={this.state.firstName} required />
                    <Input inputType="text" name="lastName" labelName="Фамилия" onChange={this.handleInputChange} value={this.state.lastName} />
                    <Input inputType="submit" name="Name" />
                </form>
            </NewForm>
        );
    }

}

// Неуправляемая форма
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.input = React.createRef();
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         alert('name is: ' + this.input.current.value)
//     }

//     render() {
//         return (
//             <fieldset>
//                 <legend>Имя: {this.state.value}</legend>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" name="name" ref={this.input}/>
//                     <input type="submit" value="Отправить" />
//                 </form>
//             </fieldset>
//         );
//     }

// }


export default NameForm;