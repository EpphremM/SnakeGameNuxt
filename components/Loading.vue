<template>
  <div
    class="relative grid gap-[3px] grid-cols-3 grid-rows-3 bg-dark-bg w-[109px] h-[109px] p-[5px] rounded-[5px]"
  >
    <div class="loader-box-1 w-[30px] bg-dark-special-bg rounded-[2.5px]"></div>
    <div class="loader-box-2 w-[30px] bg-dark-special-bg rounded-[2.5px]"></div>
    <div
      class="loader-box-3 col-start-3 row-start-1 w-[30px] bg-dark-special-bg rounded-[2.5px]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

onMounted(() => {
  const loadingTimeline = gsap.timeline({
    repeat: 20000,
    defaults: {
      duration: 0.1,
    },
  });

  // Top
  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 2,
      gridColumnStart: 3,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 1,
        gridColumnStart: 3,
        duration: 0.1,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 1,
        gridColumnStart: 2,
      },
      "<"
    );

  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 3,
      gridColumnStart: 3,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 2,
        gridColumnStart: 3,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 1,
        gridColumnStart: 3,
      },
      "<"
    );

  //Right
  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 3,
      gridColumnStart: 2,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 3,
        gridColumnStart: 3,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 2,
        gridColumnStart: 3,
      },
      "<"
    );

  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 3,
      gridColumnStart: 1,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 3,
        gridColumnStart: 2,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 3,
        gridColumnStart: 3,
      },
      "<"
    );

  //Bottom
  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 2,
      gridColumnStart: 1,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 3,
        gridColumnStart: 1,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 3,
        gridColumnStart: 2,
      },
      "<"
    );

  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 1,
      gridColumnStart: 1,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 2,
        gridColumnStart: 1,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 3,
        gridColumnStart: 1,
      },
      "<"
    );

  //Left
  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 1,
      gridColumnStart: 2,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 1,
        gridColumnStart: 1,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 2,
        gridColumnStart: 1,
      },
      "<"
    );

  loadingTimeline
    .to(".loader-box-3", {
      gridRowStart: 1,
      gridColumnStart: 3,
    })
    .to(
      ".loader-box-2",
      {
        gridRowStart: 1,
        gridColumnStart: 2,
      },
      "<"
    )
    .to(
      ".loader-box-1",
      {
        gridRowStart: 1,
        gridColumnStart: 1,
      },
      "<"
    );
});
</script>
