import ClipboardJS from 'clipboard'
import { ElMessage } from 'element-plus'
export default (text: string) => {
  const button: HTMLElement | null = document.createElement('button')
  button.setAttribute('data-clipboard-text', text)
  document.body.appendChild(button)
  const clipboard = new ClipboardJS(button)
  clipboard.on('success', (e) => {
    ElMessage.success('复制成功')
    e.clearSelection()
    document.body.removeChild(button)
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboard.destroy()
  })
  button.click()
}