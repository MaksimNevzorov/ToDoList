import { Component } from "../../../core";
import { todoList } from "../../../services/todolist/Todolist";
import '../../Atoms/Button/Button.js';
import '../../Atoms/Input/Input.js';


export class InputGroup extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
        }
    }
    
    onSave() {
        if(this.state.inputValue) {
            todoList.createTask({
                title: this.state.inputValue,
                inCompleted: false
            })
        }
    }
    
    onInput(evt) {
        this.setState((state) => {
            return {
                ...state,
                inputValue: evt.detail.value,
            }
        })
    }
    
    componentDidMount() {
        this.addEventListener('save-task', this.onSave);       
        this.addEventListener('cusctom-input', this.onInput)        
    }

    render() {
        return `
        <div class='container mt-5'>
            <my-input value="${this.state.inputValue}" type="text" class="form-control" placeholder="Add a new task"></my-input>
            <my-button eventtype='save-task' content="Save" classname="btn btn-outline-primary" type="button" id="button-addon2"></my-button>
            </div>
        `
    }

}

customElements.define('my-input-group', InputGroup)