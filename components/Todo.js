
import Html from '../core.js';
import { connect } from '../store.js'
import Item from './ItemList.js';
function Todo({todos, filter, filters}) {
   return Html`
    <section class="main">
    <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
        onchange="dispatch('checkedAll',this.checked)"
        ${todos.every(filters.completed) && 'checked'}
    >
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
       ${todos.filter(filters[filter.type]). map((elem, index) => Item(elem, index))}
    </ul>
</section>
    `;
}

export default connect()(Todo)
