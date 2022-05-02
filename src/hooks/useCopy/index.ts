import { ElMessage } from "element-plus"

// copy text
export const useCopy = (text: string) => {
 
    navigator.clipboard.writeText(text)
    ElMessage.success('copy success')
}