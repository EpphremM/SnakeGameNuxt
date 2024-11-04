<template>
  <div class="grid place-items-center bg-dark-bg-lighter w-full h-full">
    <div
      class="border-[1px] border-solid border-dark-special-bg flex flex-col gap-10 bg-dark-bg w-[calc(100%-1rem)] max-w-[750px] mx-auto rounded-[0.5rem] p-[3rem]"
    >
      <div class="w-full flex justify-center">
        <h1 class="font-extrabold text-3xl text-dark-sub-text">Welcome</h1>
      </div>
      <div class="flex flex-col gap-5">
        <div class="w-full flex px-20">
          <NuxtLink
            to="/game"
            class="button bg-dark-special-bg w-full text-dark-bg text-center font-extrabold text-xl px-4 py-2 rounded-[0.3rem]"
            >Play Snake</NuxtLink
          >
        </div>

        <div class="px-20 flex gap-5 justify-between">
          <NuxtLink
            to="/login"
            class="button text-dark-bg bg-dark-special-bg font-bold w-full text-center px-4 py-2 rounded-[0.3rem]"
            >Login</NuxtLink
          >
          <NuxtLink
            to="/signup"
            class="button text-dark-bg bg-dark-special-bg font-bold w-full text-center px-4 py-2 rounded-[0.3rem]"
            >Signup</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@media screen and (hover: hover) {
  .button {
    transition: 0.5s cubic-bezier(0.03, 1, 0.85, 1.01);
  }

  .button:hover {
    scale: 1.05;
  }
}
</style>
