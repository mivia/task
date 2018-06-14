import axios from 'axios';
import { MUTATION_TYPES } from './mutation-types';

export default {
  getIssues: context => {
    return axios.get('./api/issues/GET.json')
      .then(response => {
        context.commit(MUTATION_TYPES.SET_INITIAL_ISSUES, response.data);
      })
  }
}
