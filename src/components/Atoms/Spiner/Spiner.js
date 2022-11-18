import { Component } from "../../../core";

export class Spiner extends Component {
    constructor() {
        super();
        
    }


    static get observedAttributes() { 
        return ['vision']; 
      }
    

    render() {
    const vision = this.props.vision;
        return `
        <div class="spinner-border text-primary " role="status">
           <span class="visually-hidden">Loading...</span>
        </div>
        `
    }

}

customElements.define('loading-spiner', Spiner)