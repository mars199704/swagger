<template>
  <div id="swagger-ui" class="swagger-ui"></div>
</template>

<script>
import { onMounted, defineComponent } from "vue";
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";
import "swagger-ui/dist/swagger-ui.css";

export default defineComponent({
  props: {
    fileLocation: {
      type: String,
      default: null,
    },
  },
  setup() {
    onMounted(() => {
      const ui = SwaggerUIBundle({
        spec: require("../../docs/swagger.json"),
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl],
        layout: "StandaloneLayout",
      });

      return ui;
    });

    return;
  },
});
</script>
