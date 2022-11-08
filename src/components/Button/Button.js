import { Component } from "../../core";

export class Button extends Component {

    registerEvents() {
        this.addEventListener("click", () => {
            this.dispatchEvent(this.props.eventtype);
        })
    }
     
    componentWillUodate(name, oldValue, newValue) {
        console.log(name, oldValue, newValue)
    }
     
     static get observedAttributes() {
        return ['content', 'classname', 'eventtype']
     }
     
    render() {
        const { content, classname } = this.props;
        return `
            <button type="button" class="btn ${classname}">${content}</button>
        `
    }
}

customElements.define('my-button', Button)