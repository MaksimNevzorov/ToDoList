import { Component } from "../../../core";
import { todoList } from '../../../services/todoList/TodoList'
import '../../atoms/Button/Button';
import '../../atoms/Input/Input';
import '../../Atoms/Spiner/Spiner'

export class InputGroup extends Component {

    constructor() {
        super();
        this.state = {
            inLoading: false,
            inputValue: '',
            inError: '',
        }
    }

    onSave() {
        if(this.state.inputValue) {
            this.setState((state) => {
                return {
                    ...state,
                    inLoading: true,
                }
            })
            todoList.createTask({
                title: this.state.inputValue,
                isCompleted: false
            }).then(() => {
                this.setState((state) => {
                    return {
                        ...state,
                        inputValue: "",
                        inLoading: false,
                    }
                   
                }) 
            }).catch((error) => {
            console.error(error)
                this.setState((state) => {
                    return {
                        ...state,
                        inLoading: false,
                        inError: error.message,
                    }
                })
                return
            }).finally(() => {
                this.setState((state) => {
                    return {
                        ...state,
                        inputValue: "",
                        inLoading: false,
                    }
                })
            })
        }
    }

    onInput(evt) {
        this.setState((state) => {
            return {
                ...state,
                inputValue: evt.detail.value
            }
        })
    }

    componentDidMount() {
        this.addEventListener('save-task', this.onSave);
        this.addEventListener('custom-input', this.onInput)
    }

    render() {
        return `
        <div class="input-group mb-3">
        <loading-spiner class=${this.state.inLoading ? 'openspin' : 'closespin'}></loading-spiner>
          <my-input value="${this.state.inputValue}" placeholder="Add a new task" type="text"></my-input>
          <my-button eventtype='save-task' content="Save" classname="btn btn-outline-primary"></my-button>
        </div>
        <div class="input-group mb-3 ${this.state.inLoading ? 'closespin' : 'openspin'}">${this.state.inError}</div>
        `
    }
}

customElements.define('my-input-group', InputGroup)