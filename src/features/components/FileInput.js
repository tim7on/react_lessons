import React from 'react';
import NewForm from './newForm/NewForm';
import Input from './input/Input';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return (
            <NewForm name="FileInput">
                <form onSubmit={this.handleSubmit}>
                    <Input inputType="file" labelName="Загрузить файл" inRef={this.fileInput} name="firstUp"></Input>
                    <Input inputType="submit"></Input>
                </form>
            </NewForm>
        )
    }
}


export default FileInput;

// import React, {useState} from 'react'

// const FileInput = () => {

//     const [input, setInput] = useState([])
//     const clickHandler = () =>{
//         console.log(input);
//     }
//     return (
//         <div>
//              <input type="file" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
//             <button onClick={clickHandler}>Send</button>
//         </div>
//     )
// }

// export default FileInput

