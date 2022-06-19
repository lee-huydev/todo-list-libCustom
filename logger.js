export default function Logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Prev State: ', prevState)
        const nextState = reducer(prevState, action, args)
        console.groupEnd()
        console.log('Next State: ', nextState)
        return nextState
    }
}