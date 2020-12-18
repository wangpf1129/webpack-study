import x from './1.js';
import img from './assets/1.jpg'


const div =document.querySelector('#app')

div.innerHTML = `
<<img src="${img}" alt="">
`

const btn = document.createElement('button')
btn.innerText = '懒加载'
btn.onclick = ()=>{
 const promise = import('./lazy.js')
  promise.then((module)=>{
    const fn = module.default
    fn()
  },()=>{
    console.log('懒加载模块加载失败')
  })
}

div.appendChild(btn)