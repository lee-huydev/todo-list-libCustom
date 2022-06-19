import Html from '../core.js';
export default function Item(elem, index) {
   return Html`
   ${
      elem.edit
         ? `<input 
            class='edit' 
            value='${elem.title}'
            onkeyup="event.keyCode === 13 && this.value && dispatch('editValue', ${index}, this.value)"
        >`
         : `<li ${
              elem.completed && 'class="completed"'
           } ondblclick="dispatch('edit', ${index})">
    <div class="view">
        <input 
            class="toggle" 
            type="checkbox" 
            ${elem.completed && 'checked'}
            onchange="dispatch('switchChecked', ${index})"
        >
        <label>${elem.title}</label>
        <button 
            class="destroy"
            onclick="dispatch('del', ${index})"
        ></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`
   }
    
`;
}
