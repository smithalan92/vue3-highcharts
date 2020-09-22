<template>
  <div
    class="code-block">
    <div class="code-block-title">
      Code
    </div>
    <div class="code-block__code">
      <pre>
        <code
          v-html="highlightedCode"/>
      </pre>
    </div>
  </div>
</template>
<script>
import hljs from 'highlight.js/lib/core';

export default {
  name: 'CodeBlock',

  props: {
    code: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const highlightedCode = hljs.highlight('vue', props.code).value;
    return {
      highlightedCode,
    };
  },
};
</script>
<style>
.code-block {
  padding: 8px;
  text-align: left;
  width: 70%;
  overflow: hidden;
}

.code-block-title {
  text-align: center;
  font-weight: 600;
}

.code-block__code {
  max-height: 100%;
  overflow: scroll;
}
</style>
