import { Component } from "./core";
import { todoList } from "./services/todolist/Todolist";
import "./components/molecules/InputGroup/InputGroup";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    
  }
  
  componentDidMount() {
    todoList.getTasks().then((data) => {
        this.setState((state) => {
          return {
            ...state,
            tasks: data,
          }
        })
    })
  }


  render() {
    return `
        <div class='container mt-5'>
          <my-input-group></my-input-group>
          <ul class="list-group">
          ${this.state.tasks.map((item) => {
            return `
            <li class="list-group-item">
              <div class="form-check d-flex justify-content-between align-items-center">
                <div>
                    <input class="form-check-input" type="checkbox" ${item.IsCompleted ? 'checked' : ''} value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      ${item.title}
                    </label>
                  </div>
                  <div class='d-flex'>
                    <my-button content="Delete" classname="btn btn-danger btn-sm"></my-button>
                    <my-button content="Update" classname="btn btn-sm btn-primary"></my-button>
                  </div>
              </div>
            </li>
            `
          }).join(' ')
          }
          </ul>
        </div>
        `;
  }
}

customElements.define("my-app", App);


{/* <ul class="list-group">
  <li class="list-group-item">
    <div class="form-check d-flex justify-content-between align-items-center">
      <div>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class='d-flex'>
          <my-button content="Delete" classname="btn btn-danger btn-sm"></my-button>
          <my-button content="Update" classname="btn btn-sm btn-primary"></my-button>
        </div>
    </div>
  </li>
</ul> */}