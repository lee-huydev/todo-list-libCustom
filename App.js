import Html from "./core.js";
import { connect } from "./store.js";
import Header from "./components/Header.js";
import Todo from "./components/Todo.js";
import Footer from "./components/Footer.js";
function App({todos}) {
    return Html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && Todo()}
            ${todos.length > 0  && Footer()}
        </section>
    `
}

export default connect()(App)