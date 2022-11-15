import { Component } from "../../../core";
import { debounce } from "../../../utils/debounce";

export class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
        }
        
        this.onInput = this.onInput.bind(this)
    }
    
    componentWillUpdate(name, _, newValue) {
        if(name === 'value') {
            this.setState((state) => {
                return {
                    ...state,
                    value: newValue,
                }
            })
        }
    }
    
    static get observedAttributes() {
        return ['type', 'placeholder', 'value']
    }
    
    onInput(evt) {
        this.dispatch("cusctom-input", { value: evt.target.value});
    }
    
    componentDidMount() {
        this.addEventListener('input', debounce(this.onInput, 1000))
    }
    
    render() {
        return `
        <input 
            type="${this.props.type}" 
            class="form-control" 
            placeholder="${this.props.placeholder}"
            value="${this.state.value}"
            aria-label="Recipient's username" aria-describedby="button-addon2">
        `
    }
}

customElements.define('my-input', Input)