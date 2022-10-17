const store = {

    setUsuario(){
        localStorage.setItem('token','rosario');
    },
    getUsuario(){
        return localStorage.getItem('token');
    },
    deleteUsuario(){
        localStorage.removeItem('token');
    }
}

export default store;