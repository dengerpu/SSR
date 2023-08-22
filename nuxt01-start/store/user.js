export const state = () => ({
    token: ''
})

export const mutations = {
    M_UPDATE_USER(user, payload) {
        user.token = payload.token;
    }
}

export const actions = {
    A_UPDATE_USER({ commit, user }, payload) {
        //..异步业务
        commit('M_UPDATE_USER', payload)
    }
}