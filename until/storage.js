
const storage = {
    get(key){
        const local = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
        return local
    },
    set(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }
} 
export default storage