import './app1.css'
import $ from 'jquery'

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
