<template>
  <div>
    <div class="container">
      <h2>Schibsted test task</h2>
      <ul>
        <li v-for="issue in issues">
          <span>{{issue.title}}</span>
          <span>{{issue.description}}</span>
          <span class="state">
            {{issue.state}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    background-color: gray;
  }

  .state-open {
    @extend .state;
    background-color: green;
  }

  .state-closer {
    @extend .state;
  }
</style>
