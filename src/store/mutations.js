import { MUTATION_TYPES } from './mutation-types';
import { ISSUE_STATES } from '../common/constants';

export default {
  [MUTATION_TYPES.SET_INITIAL_ISSUES] (state, issues) {
    state.issues = issues;
  },
  [MUTATION_TYPES.CHANGE_ISSUE_STATE] (state, payload) {
    const { state: issueState, issue } = payload;
    if (issue.state === ISSUE_STATES.CLOSED) {
      return;
    }
    if (issue.state === ISSUE_STATES.PENDING && issueState !== ISSUE_STATES.CLOSED) {
      return;
    }
    const issueToEditIndex = state.issues.findIndex(issueToEdit => {
      return issueToEdit.id === issue.id;
    });
    state.issues[issueToEditIndex].state = issueState;
  }
}
