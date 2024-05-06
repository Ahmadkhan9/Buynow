export const Middlewarelogger = (state) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }
    console.log('action fired')
    console.log('action type :' , action.type)
    console.log('action payload :' , action.payload)
    console.log('action old State :', state.getState())

    next(action)

    console.log('action new State :' , state.getState())
}