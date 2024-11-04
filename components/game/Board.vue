<template>
  <div
    class="relative border-[1px] border-solid border-dark-special-bg rounded-[5px] grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] w-[43.3125rem] h-[43.3125rem] gap-[0.1875rem] p-[0.1875rem] mx-auto"
  >
    <h2
      class="absolute top-[-3rem] right-0 text-xl font-extrabold text-dark-sub-text"
    >
      {{ score }}
    </h2>
    <div
      v-for="(snakeBody, idx) in snake"
      :style="`grid-row-start: ${snakeBody.y}; grid-column-start: ${snakeBody.x};`"
      :key="idx"
      class="w-full h-full bg-dark-special-bg rounded-[3px]"
    ></div>

    <div
      :style="`grid-row-start: ${foodY}; grid-column-start: ${foodX}`"
      class="relative w-full h-full bg-[#ff6a2f] rounded-[3px]"
    >
      <div
        class="absolute top-0 left-0 w-full h-full blur-[5px] bg-[#ff6a2f]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
let moveRight = 0;
let moveDown = 0;
let tail = 0;
let moveSnakeInterval: number | undefined = undefined;
let lastTime = 0;
let speed = 80;
const foodX = ref<number>();
const foodY = ref<number>();
const { gameOver, setGameOver, resetGameOver } = useGameOver();
const { score } = useScore();
class SnakeBody {
  prevX?: number;
  prevY?: number;
  front?: SnakeBody;
  back?: SnakeBody;
  constructor(public x: Ref<number>, public y: Ref<number>) {}
}

const snake = ref<SnakeBody[]>([new SnakeBody(ref<number>(1), ref<number>(1))]);

const moveSnake = (time: number) => {
  if (
    (snake.value[0].x + moveRight > 31 || snake.value[0].x + moveRight < 0) &&
    moveSnakeInterval
  ) {
    setGameOver();
    return cancelAnimationFrame(moveSnakeInterval);
  }
  if (
    (snake.value[0].y + moveDown > 31 || snake.value[0].y + moveDown < 0) &&
    moveSnakeInterval
  ) {
    setGameOver();
    return cancelAnimationFrame(moveSnakeInterval);
  }
  if (time - lastTime >= speed) {
    snake.value[0].prevY = snake.value[0].y;
    snake.value[0].prevX = snake.value[0].x;
    snake.value[0].x =
      snake.value[0].x + moveRight < 0
        ? 1
        : snake.value[0].x + moveRight > 31
        ? 29
        : snake.value[0].x + moveRight;
    snake.value[0].y =
      snake.value[0].y + moveDown < 0
        ? 1
        : snake.value[0].y + moveDown > 31
        ? 29
        : snake.value[0].y + moveDown;

    if (snake.value.length !== 1) {
      moveSnakeBody();
    }

    if (snake.value[0].x === foodX.value && snake.value[0].y === foodY.value) {
      spawnFood();
      addSnakeBody();
    }
    lastTime = time;
  }
  moveSnakeInterval = requestAnimationFrame(moveSnake);
};

const moveSnakeBody = () => {
  for (let i = 1; i < snake.value.length; i++) {
    snake.value[i].prevX = snake.value[i].x;
    snake.value[i].prevY = snake.value[i].y;
    snake.value[i].x = snake.value[i].front?.prevX || snake.value[i].x;
    snake.value[i].y = snake.value[i].front?.prevY || snake.value[i].y;
  }
};

const spawnFood = () => {
  foodX.value = Math.floor(Math.random() * 30) + 1;
  foodY.value = Math.floor(Math.random() * 30) + 1;
};

const addSnakeBody = () => {
  const newBody = {
    x: snake.value[tail].prevX ?? 1,
    y: snake.value[tail].prevY ?? 1,
  };
  snake.value.push(newBody);
  tail++;
  snake.value[tail - 1].back = snake.value[tail];
  snake.value[tail].front = snake.value[tail - 1];
  score.value++;
};

// watchEffect(() => snake);

onMounted(() => {
  foodX.value = Math.floor(Math.random() * 30) + 1;
  foodY.value = Math.floor(Math.random() * 30) + 1;
  window.addEventListener("keydown", (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight": {
        if (moveRight != -1) {
          moveRight = 1;
          moveDown = 0;
        }
        break;
      }
      case "ArrowLeft": {
        if (moveRight != 1) {
          moveRight = -1;
          moveDown = 0;
        }
        break;
      }
      case "ArrowUp": {
        if (moveDown != 1) {
          moveRight = 0;
          moveDown = -1;
        }
        break;
      }
      case "ArrowDown": {
        if (moveDown != -1) {
          moveRight = 0;
          moveDown = 1;
        }
        break;
      }
    }
    if (moveSnakeInterval) {
      cancelAnimationFrame(moveSnakeInterval);
    }
    moveSnakeInterval = requestAnimationFrame(moveSnake);
  });
});
</script>

<style scoped></style>
