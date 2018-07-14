export default {
	check_db: ({commit},obj) => commit('CHECK_DB',obj),
	add_db: ({commit}) => commit('ADD_DB'),
	create_db: ({commit},shop) => commit('CREATE_DB',shop),
	update_cur_status: ({commit},obj) => commit('UPDATE_CUR_STATUS',obj),
	clear_items: ({commit}) => commit('CLEAR_ITEMS'),
	reduce_db: ({commit}) => commit('REDUCE_DB'),
	del_db: ({commit},obj) => commit('DEL_DB')
}