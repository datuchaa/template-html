import { State } from "./HomePage.state";
import styles from "./HomePage.styles.css?inline"

export class HomePage extends HTMLElement {
    #state = new State()

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });

        const stylesContainer = document.createElement("style");
        this.root.appendChild(stylesContainer);

        stylesContainer.textContent = styles;
    }

    connectedCallback() {
        const template = document.getElementById("home-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        this.render();
        this.#state.addObserver(() => this.render());

        setTimeout(() => this.loadData(), 1000);
    }

    loadData() {
        this.#state.setData([
            { name: "Product 1", price: 10 },
            { name: "Product 2", price: 20 },
            { name: "Product 3", price: 30 }
        ])
    }

    render() {
        const wrapper = this.root.querySelector("#wrapper");

        if (this.#state.state.loading) {
            return wrapper.textContent = "Loading...";
        }

        wrapper.textContent = "Loaded"
    }
}
