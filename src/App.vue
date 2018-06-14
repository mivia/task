<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 centered">
          <h2 class="txtC" v-if="issues.length">Schibsted test task</h2>
          <h2 class="txtC" v-if="!issues.length">No issues left :(</h2>
          <ul>
            <li v-for="issue in issues">
              <h4>Title:</h4>
              <span>{{issue.title}}</span>
              <h4>Description: </h4>
              <span>{{issue.description}}</span>
              <h4>Issue state:</h4>
              <div class="btn-group dB clearfix" id="states-group" role="group" >
                <button type="button" class="btn btn-secondary" v-on:click="issueStateClicked(state, issue)" v-for="state in issueStates" v-bind:class="getStateClass(state, issue)">{{state}}</button>
              </div>

              <button class="btn btn-warning dB centered" type="button" name="button" v-on:click="deleteIssue(issue)">
                Delete issue
              </button>
            </li>
          </ul>
          <button class="btn btn-danger dB centered" v-if="issues.length" type="button" name="button" v-on:click="resetIssuesStates">
            Reset issues` states
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MUTATION_TYPES } from './store/mutation-types';
import { ISSUE_STATES } from 'constants';

export default {
  name: 'app',
  data() {
    return {
      issueStates: ISSUE_STATES
    }
  },
  methods: {
    deleteIssue: function(issue) {
      this.$store.commit(MUTATION_TYPES.DELETE_ISSUE, issue);
    },
    resetIssuesStates: function () {
      this.$store.commit(MUTATION_TYPES.RESET_ISSUES_STATES);
    },
    issueStateClicked: function (state, issue) {
      this.$store.commit(MUTATION_TYPES.CHANGE_ISSUE_STATE, { state, issue })
    },
    getStateClass: (state, issue) => {
      switch(state) {
        case ISSUE_STATES.OPEN:
          return issue.state === ISSUE_STATES.OPEN ? `state-open active` : `state-open`;
        break;
        case ISSUE_STATES.CLOSED:
          return issue.state === ISSUE_STATES.CLOSED ? 'state-closed active' : 'state-closed';
        break;
        case ISSUE_STATES.PENDING:
          return issue.state === ISSUE_STATES.PENDING ? 'state-pending active' : 'state-pending';
        break;
      }
    }
  },
  computed: {
    issues: function() {
      return this.$store.state.issues;
    }
  }
}
</script>

<style lang="scss">
  @import './css/app.css';

  #states-group {
    margin-bottom: 20px;
  }

  .dB {
    display: block;
  }

  .txtC {
    text-align: center;
  }

  .centered{
    float: none;
    margin: 0 auto;
  }

  .container {
    ul {
      list-style-type: none;
      padding: 0;
      li {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid gray;
      }
    }
  }

  .state {
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
  }

  .state-pending {
    @extend .state;
  }

  .state-open {
    @extend .state;
  }

  .state-closed {
    @extend .state;
  }

  .state-pending.active {
    background-color: gray;
  }

  .state-open.active {
    background-color: green !important;
  }

  .state-closed.active {
    background-color: red;
  }

  .state-pending:hover {
    background-color: gray;
  }

  .state-open:hover {
    background-color: green;
  }

  .state-closed:hover {
    background-color: red;
  }

</style>
