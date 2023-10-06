const $ = (selector) => document.querySelector(selector)
const canvas = $('#canvas')
const context = canvas.getContext('2d')

const BALL_SPEED = 10

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 100,
  height: 100,
  speed: BALL_SPEED,
  radio: 20,
  delta: {
    x: Math.random() * BALL_SPEED * 2 - BALL_SPEED,
    y: Math.random() * BALL_SPEED * 2 - BALL_SPEED
  }
}

function bounce() {
  const newPositionX = ball.x + ball.delta.x
  const newPositionY = ball.y + ball.delta.y

  if (newPositionX > canvas.width - ball.radio || newPositionX < ball.radio) {
    ball.delta.x = -ball.delta.x
  }

  if (newPositionY > canvas.height - ball.radio || newPositionY < ball.radio) {
    ball.delta.y = -ball.delta.y
  }

  ball.x = newPositionX
  ball.y = newPositionY

  window.requestAnimationFrame(draw)
  setTimeout(bounce, 10)
}

function draw() {
  context.fillStyle = "white"
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.beginPath()
  context.arc(ball.x, ball.y, ball.radio, 0, Math.PI * 2, 1)
  context.fill()
}

bounce()
