import { prism, indexAutoGen, smoothScroll } from './modules/ui/'
import type { HTMLElementEvent } from './interface/'

prism()
indexAutoGen()
document.addEventListener('click', (e: HTMLElementEvent<HTMLAnchorElement>) => {
  const target = e.target
  if (!target.classList.contains('js-smooth-scroll')) return
  e.preventDefault()
  const targetId = target.hash
  smoothScroll(targetId)
})

const replace = (): void => {
  const base = {
    ruby: '<ruby class="ns_ruby">$1<rt>$2</rt></ruby>',
    emphasis: '<strong class="ns_emphasis">$1</strong>',
  }
  const reg = {
    ruby: /[|｜](.+?)《(.+?)》/g,
    emphasis: /《《(.+?)》》/g,
  }
  const obj = document.querySelector<HTMLTextAreaElement>('#Base').value
  const replaceBody = obj
    .replace(reg.ruby, base.ruby)
    .replace(reg.emphasis, base.emphasis)
  document.querySelector<HTMLTextAreaElement>('#Output').value = replaceBody
}
const replaceBtn = document.querySelector<HTMLButtonElement>('#ReplaceBtn')
replaceBtn.addEventListener('click', replace)
