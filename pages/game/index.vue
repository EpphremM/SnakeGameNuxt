<template>
  <div
    class="border-[1px] border-solid border-dark-special-bg bg-dark-bg p-[1rem] rounded-[5px] flex flex-col gap-5"
  >
    <GameBoard />
    <div>
      <div class="flex w-full justify-center">
        <button
          @click="() => navigateTo('/game', { external: true })"
          class="py-2 px-4 bg-dark-special-bg rounded-[0.3rem] text-dark-bg-lighter"
        >
          Reset
        </button>
      </div>
    </div>
    <div
      v-if="gameOver"
      class="absolute top-0 left-0 w-full h-full z-40 grid place-items-center"
    >
      <div
        class="fixed z-[-1] top-0 left-0 w-full h-svh bg-[#0f111657] backdrop-blur-[5px]"
      ></div>
      <div
        class="rounded-[0.4rem] flex flex-col gap-10 bg-dark-bg-lighter border-[1px] border-solid border-dark-special-bg"
      >
        <h2
          class="bg-dark-special-bg p-4 text-center text-xl text-dark-normal-text font-extrabold"
        >
          Game Over
        </h2>
        <div class="px-4 flex justify-between gap-20">
          <h2 class="text-dark-sub-text">
            Score <span class="block text-dark-special-bg">{{ score }}</span>
          </h2>
          <h2 class="text-dark-sub-text">
            Your highscore
            <span class="block text-dark-special-bg text-right">100</span>
          </h2>
        </div>
        <div class="px-4 pb-4 flex justify-center gap-5">
          <button
            @click="replay"
            class="py-2 px-4 bg-dark-special-bg rounded-[0.3rem] text-dark-bg-lighter"
          >
            Let's Go Again
          </button>
          <button
            @click="goHome"
            class="py-2 px-4 bg-[#ff4c2d] rounded-[0.3rem] text-dark-bg-lighter"
          >
            That's Enough
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { gameOver, resetGameOver } = useGameOver();
const { score } = useScore();

const goHome = async () => {
  resetGameOver();
  await navigateTo("/", { external: true });
};

const replay = async () => {
  resetGameOver();
  await navigateTo("/game", { external: true });
};
</script>

<style scoped></style>
