import { observerMixin } from "../../mixins/observer";

export class State {
    constructor() {
        this.state = {
            data: [],
            loading: true,
            error: null
        }
    }

    setError(error) {
        this.state.error = error;

        this.notify();
    }

    setData(data) {
        this.state.data = data;
        this.state.loading = false;

        this.notify();
    }
}

Object.assign(State.prototype, observerMixin);