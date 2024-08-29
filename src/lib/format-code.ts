import type { CodeSampleSyntax } from '@seamapi/blueprint'
import { format as prettier } from 'prettier'

export const formatCode = async (
  content: string,
  syntax: CodeSampleSyntax,
): Promise<string> => {
  switch (syntax) {
    case 'javascript':
      return await prettier(content, { parser: 'typescript' })
    case 'python':
      return content
    case 'ruby':
      return content
    case 'php':
      return content
    case 'bash':
      return content
    case 'json':
      return await prettier(content, { parser: 'json' })
    default:
      return content
  }
}
