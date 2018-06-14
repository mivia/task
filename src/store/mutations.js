import { MUTATION_TYPES } from './mutation-types';

export default {
  [MUTATION_TYPES.SET_INITIAL_ISSUES] (state, issues) {
    state.issues = issues;
  }
}
