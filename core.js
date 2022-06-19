export default function Html([first, ...string], ...value) {
    const output = value
                    .reduce((prev, curr) => [...prev, curr, string.shift()], [first])
                    .filter(item => item && item !== true || item === 0)
                    .join('')
    return output
}

export function createStore(reducer){
    let state = reducer()
    const roots = new Map()
    function render() {
        for(const [component, root] of roots) {
            root.innerHTML = component()
        }
    }
    return {
        attatch(component, root) {
            roots.set(component, root)
            render()
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        },
        connect(selector = state => state) {
            return (component) => (props, ...args) => {
                return component(Object.assign({}, props, args, selector(state)))
            }
        }
    }
}