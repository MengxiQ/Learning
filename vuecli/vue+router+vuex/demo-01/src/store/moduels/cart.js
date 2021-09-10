
export const cart = {
    namespaced: true,
    state: () => ({
        products: []
    }),
    getters:{
        products(state){
            return state.products;
        },
        count(state){
            return state.products.length;
        },
        total(state){
            return state.products.map(ele => ele.selected ? ele.quantity * ele.price : 0 ).reduce((previous, current) => previous + current, 0);
        }
    },
    mutations:{
        addProduct(state, payload){
            // payload = Array.isArray(payload) ? payload : new Array(payload);
            // Array.prototype.push.call(state.products, payload);
            payload.selected = true;
            state.products.push(payload)
        },
        setQuantityById(state, payload){
            state.products.forEach((ele, index) => {
                if(ele.id == payload.id){
                    state.products[index].quantity = payload.quantity
                }
            })
        },
        delProductById(state, id){
            const index = state.products.findIndex(ele => {
                return ele.id == id;
            })
            state.products.splice(index,1)
        }
    },
    actions:{
        addProduct(context, payload){
            //判断时候已经添加过该商品
            let isAdded = false;
            let addedItem = null; //如果已经添加了，用于记录
            if(context.state.products.length >= 1) {
                isAdded = !context.state.products.every((ele) => {
                    if (ele.id == payload.id){
                        console.log('match');
                        addedItem = ele;
                        return false //只要有一个返回false，函数值就为false
                    }else{
                        return true 
                    }
                })
            }``
            console.log(isAdded);
            if(isAdded){
                context.dispatch('setQuantityById',{id: payload.id, quantity: addedItem.quantity + 1})
                return Promise.resolve('商品数量+1')
            }else{
                return new Promise((resolve, reject) => {
                    setTimeout(()=> {
                        if(payload){
                            context.commit('addProduct',payload)
                            resolve('添加成功')
                        }else{
                            reject('添加失败')
                        }
                    })
                })
            }
        },
        setQuantityById(context, payload){
            context.commit('setQuantityById', payload)
        },
        delProductById(context, id){
            setTimeout(() => {
                context.commit('delProductById',id);
            })
        },
        payment(context){
            context.state.products.splice(0)
            return Promise.resolve('结算成功')
        }
    }
} 