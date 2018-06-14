import { MUTATION_TYPES } from './mutation-types';
import { ISSUE_STATES } from '../common/constants';
import mutations from './mutations';

describe('mutations tests', () => {
  const state = {
    issues: []
  };
  const backendIssues = [
    {
      "title": "First issue",
      "description": "Some description",
      "state": "PENDING",
      "id": 1
    },
    {
      "title": "Second issue",
      "description": "Some description",
      "state": "OPEN",
      "id": 2
    },
    {
      "title": "Third issue",
      "description": "Some description",
      "state": "CLOSED",
      "id": 3
    }
  ];
  mutations[MUTATION_TYPES.SET_INITIAL_ISSUES](state, backendIssues);
  it('should correctly set initial issues', () => {
    expect(state.issues.length).toBe(backendIssues.length);
  });

  it('should not set issue state to open from pending', () => {
    const issueToChange = state.issues[0];
    const payload = {
      issue: issueToChange,
      state: ISSUE_STATES.OPEN
    };
    mutations[MUTATION_TYPES.CHANGE_ISSUE_STATE](state, payload);
    expect(state.issues[0].state).toBe(ISSUE_STATES.PENDING);
  });

  it('should not set issue state from closed to open or pending', () => {
    const issueToChange = state.issues[2];
    const openPayload = {
      issue: issueToChange,
      state: ISSUE_STATES.OPEN
    };
    const pendingPayload = {
      issue: issueToChange,
      state: ISSUE_STATES.PENDING
    };
    mutations[MUTATION_TYPES.CHANGE_ISSUE_STATE](state, openPayload);
    expect(state.issues[2].state).toBe(ISSUE_STATES.CLOSED);
    mutations[MUTATION_TYPES.CHANGE_ISSUE_STATE](state, pendingPayload);
    expect(state.issues[2].state).toBe(ISSUE_STATES.CLOSED);
  });

  it('should change issue state from open to closed', () => {
    const issueToChange = state.issues[1];
    const payload = {
      issue: issueToChange,
      state: ISSUE_STATES.CLOSED
    };
    mutations[MUTATION_TYPES.CHANGE_ISSUE_STATE](state, payload);
    expect(state.issues[1].state).toBe(ISSUE_STATES.CLOSED);
  });

  it('should delete one issue from the stock', () => {
    const issueToDelete = state.issues[0];
    mutations[MUTATION_TYPES.DELETE_ISSUE](state, issueToDelete);
    expect(state.issues.length).toBe(2);
  });

  it('should reset issues states correctly', () => {
    mutations[MUTATION_TYPES.RESET_ISSUES_STATES](state);
    state.issues.forEach(issue => {
      expect(issue.state).toBe('');
    })
  });
})
