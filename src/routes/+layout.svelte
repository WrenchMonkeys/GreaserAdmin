<script lang="ts">
  import posthog from "posthog-js";
  import 'modern-normalize/modern-normalize.css';
  import '../app.css';
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { beforeNavigate } from "$app/navigation";

  let currentPath = '';

  if (browser) {
    const unsubscribePage = page.subscribe(($page) => {
      if (currentPath && currentPath !== $page.url.pathname) {
        console.log('leaving')
        posthog.capture('$pageleave');
      }
      console.log('entering')
      currentPath = $page.url.pathname;
      posthog.capture('$pageview');
    });

    const handleBeforeUnload = () => {
      posthog.capture('$pageleave');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    beforeNavigate(() => {
      unsubscribePage();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    });
  }
</script>

<slot/>