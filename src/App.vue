<template>
  <div>
    <div class="container">
      <h2>Schibsted test task</h2>
      <ul>
        <li v-for="issue in issues">
          <span>{{issue.title}}</span>
          <span>{{issue.description}}</span>
          <span v-on:click="issueStateClicked(state, issue)" v-for="state in issueStates" v-bind:class="getStateClass(state, issue)">
            {{state}}
          </span>
        </li>
      </ul>
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
  .container {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    ul {
      list-style-type: none;
      li {
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
