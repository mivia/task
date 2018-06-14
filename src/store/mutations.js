import { MUTATION_TYPES } from './mutation-types';
import { ISSUE_STATES } from '../common/constants';
import { clone } from '../../node_modules/ramda';

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
  },
  [MUTATION_TYPES.DELETE_ISSUE] (state, issueToDelete) {
    const issuesCopy = clone(state.issues);
    state.issues = issuesCopy.filter(issue => {
      return issue.id !== issueToDelete.id;
    })
  },
  [MUTATION_TYPES.RESET_ISSUES_STATES] (state) {
    const issuesCopy = clone(state.issues);
    state.issues = issuesCopy.reduce((acc, issue) => {
      const issueContent = {
        title: issue.title,
        description: issue.description,
        state: '',
        id: issue.id
      }
      acc.push(issueContent);
      return acc;
    }, []);
  }
}
