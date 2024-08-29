import type { CodeSampleSyntax } from '@seamapi/blueprint'

export const formatCode = async (
  content: string,
  syntax: CodeSampleSyntax,
): Promise<string> => {
  switch (syntax) {
    case 'javascript':
      return content
    case 'python':
      return content
    case 'ruby':
      return content
    case 'php':
      return content
    case 'bash':
      return content
    case 'json':
      return content
    default:
      return content
  }
}
