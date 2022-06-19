import Html from '../core.js';
import { connect } from '../store.js';
function Footer({ todos, filters, filter }) {
    const todosLength = todos.filter(elem => elem.completed === false).length
   return Html`
    <footer class="footer">
    <span class="todo-count"><strong>${todosLength}</strong> item left</span>
    <ul class="filters">
        ${Object.keys(filters).map(type => Html`
            <li onclick="dispatch('filter', '${type}')">
                <a class="${filter.type === type && "selected"}" href="#">${type[0].toUpperCase() + type.slice(1)}</a>
            </li> 
        `).join('')}
    </ul>
    ${todos.some(filters.completed) && `<button class="clear-completed" onclick="dispatch('clear')">Clear completed</button>`}
</footer>
    `;
}

export default connect()(Footer)
