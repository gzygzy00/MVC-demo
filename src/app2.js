import './app2.css'
import $ from 'jquery'

const $tabContent = $('.tab-content')
const $tabBar = $('.tab-bar')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => {
  // console.log(e.target)   // span
  // console.log(e.currentTarget)    // li
  const $li = $(e.currentTarget)
  const index = $li.index()
  localStorage.setItem(localKey, index)

  $li.addClass('selected')
      .siblings().removeClass('selected')

  $tabContent.children().eq(index)
      .addClass('active')
      .siblings().removeClass('active')

})
$tabBar.children().eq(index).trigger('click')