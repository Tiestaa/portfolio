<template>
  <div class="app-wrapper">
    <RetroNavbar />
    <main>
      <slot />
    </main>
    <RetroFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
