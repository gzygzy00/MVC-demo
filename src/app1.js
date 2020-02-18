import './app1.css'
import $ from 'jquery'

const html = `
  <section id="app1">
    <div class="output">
      <span id="count">100</span>
    </div>
    <div class="actions">
      <button class="btnPlus">+1</button>
      <button class="btnMinus">-1</button>
      <button class="btnMultiply">×2</button>
      <button class="btnDivide">÷2</button>
    </div>
  </section>`

const $element = $(html).appendTo($('body>.page'))

const $count = $('#count')
const $btnPlus = $('.btnPlus')
const $btnMinus = $('.btnMinus')
const $btnMultiply = $('.btnMultiply')
const $btnDivide = $('.btnDivide')
const n = localStorage.getItem("n")
$count.text(n || 100)
let num = parseInt($count.text())
$btnPlus.on('click', () => {
  num += 1
  $count.text(num)
  localStorage.setItem("n", num)
})
$btnMinus.on('click', () => {
  num -= 1
  $count.text(num)
  localStorage.setItem("n", num)
})
$btnMultiply.on('click', () => {
  num *= 2
  $count.text(num)
  localStorage.setItem("n", num)
})
$btnDivide.on('click', () => {
  num /= 2
  $count.text(num)
  localStorage.setItem("n", num)
})
