import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        adult: 1,
        children: 1,
        spizza: {
            cost: 150,
            count: 1
        },
        mpizza: {
            cost: 200,
            count: 1
        },
        lpizza: {
            cost: 300,
            count: 0
        }
    },
    getters: {
        total({ spizza, mpizza, lpizza }) {
            return (spizza.cost * spizza.count + mpizza.cost * mpizza.count + lpizza.cost * lpizza.count);
        },
        mpizzaCount({ mpizza }) {
            return mpizza.count;
        },
        spizzaCount({ spizza }) {
            return spizza.count;
        },
        lpizzaCount({ lpizza }) {
            return lpizza.count;
        },
        getAdultCount({ adult }) {
            return adult;
        },
        getChildCount({ children }) {
            return children;
        }
    },
    mutations: {
        spizza_increment(state) {
            state.spizza.count += 1;
            if (state.spizza.count == 2) {
                state.spizza.count = 0;
                state.mpizza.count += 1;
                if (state.mpizza.count == 2) {
                    state.mpizza.count = 0;
                    state.lpizza.count += 1;
                }
            }
        },
        mpizza_increment(state) {
            state.mpizza.count += 1;
            if (state.mpizza.count == 2) {
                state.mpizza.count = 0;
                state.lpizza.count += 1;
            }
        },
        lpizza_increment(state) {
            state.lpizza.count += 1;
        },
        adult_increment(state) {
            state.adult += 1;
        },
        child_increment(state) {
            state.children += 1;
        },
        child_decrement(state) {
            state.children -= 1;
        },
        spizza_decrement(state) {
            state.spizza.count -= 1;
        },
        mpizza_decrement(state) {
            state.mpizza.count -= 1;
        },
        lpizza_decrement(state) {
            state.lpizza.count -= 1;
        },
        adult_decrement(state) {
            state.adult -= 1;
        }


    },
    actions: {
        spizzaincrement({ commit }) {
            commit('spizza_increment');
            commit('child_increment');

        },
        mpizzaincrement({ commit }) {
            commit('mpizza_increment');
            commit('adult_increment');
        },
        lpizzaincrement({ commit }) {
            commit('lpizza_increment');
            commit('adult_increment');
            commit('adult_increment');

        },
        adultincrement({ commit }) {
            commit('adult_increment');
            commit('mpizza_increment');
        },
        childincrement({ commit }) {
            commit('child_increment');
            commit('spizza_increment');
        },

        spizzadecrement({ commit }) {
            if (this.state.spizza.count == 1) {
                commit('spizza_decrement');
                commit('child_decrement');
            }
            else {
                console.log('spizzadec')
            }
        },
        mpizzadecrement({ commit }) {
            if (this.state.mpizza.count == 1 && this.state.adult > 1) {
                commit('mpizza_decrement');
                commit('adult_decrement');
            }
            else {
                console.log('mpizzadec')
            }
        },
        lpizzadecrement({ commit }) {
            if (this.state.lpizza.count >= 1 && this.state.adult > 1) {
                commit('lpizza_decrement');
                commit('adult_decrement');
                commit('adult_decrement');
            }
            else {
                console.log('lpizzadec')
            }
        },
        childdecrement({ commit }) {
            if (this.state.children >= 1) {
                commit("child_decrement");

                if (this.state.spizza.count == 1) {
                    commit("spizza_decrement");
                }
                else if (this.state.spizza.count == 0 && this.state.mpizza.count == 0 && this.state.lpizza.count > 0) {
                    commit('spizza_increment');
                    commit('mpizza_increment');
                    commit('lpizza_decrement');
                }

                else if (this.state.mpizza.count == 1 && this.state.spizza.count == 0) {
                    commit('mpizza_decrement');
                    commit('spizza_increment');
                }
                else {
                    return;
                }
            }
        },
        adultdecrement({ commit }) {
            if (this.state.adult > 1) {
                commit("adult_decrement");
                if (this.state.mpizza.count == 1) {
                    commit("mpizza_decrement");
                }
                else if (this.state.spizza.count >= 0 && this.state.mpizza.count == 0 && this.state.lpizza.count > 0) {
                    commit('mpizza_increment');
                    commit('lpizza_decrement');
                }
                else {
                    return;
                }
            }
        }
    },
});