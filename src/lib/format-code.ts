import { retry } from '@harisk/retryx'
import * as prettierPluginPhp from '@prettier/plugin-php/standalone'
import * as prettierPluginRuby from '@prettier/plugin-ruby'
import type { SyntaxName } from '@seamapi/blueprint'
import commandExists from 'command-exists'
import { execa } from 'execa'
import { format as prettier } from 'prettier'

export const formatCode = async (
  content: string,
  syntax: SyntaxName,
): Promise<string> => {
  const output = await formatCodeForSyntax(content, syntax)
  return output.trim()
}

const formatCodeForSyntax = async (
  content: string,
  syntax: SyntaxName,
): Promise<string> => {
  switch (syntax) {
    case 'javascript':
      return await formatJavascript(content)
    case 'python':
      return await formatPython(content)
    case 'ruby':
      return await retry(async () => await formatRuby(content))
    case 'php':
      return await formatPhp(content)
    case 'go':
      return await formatGo(content)
    case 'bash':
      return await formatBash(content)
    case 'json':
      return await formatJson(content)
    default:
      return content
  }
}

const formatJavascript = async (content: string): Promise<string> => {
  return await prettier(content, { parser: 'typescript' })
}

const formatPython = async (content: string): Promise<string> => {
  try {
    await commandExists('ruff')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Skipping python formatting: ruff is not installed')
    return content
  }
  const result = await execa({ input: content })`ruff format -`
  return result.stdout
}

const formatRuby = async (content: string): Promise<string> => {
  try {
    await commandExists('ruby')
    await execa({ input: 'require "syntax_tree"' })`ruby`
  } catch {
    // eslint-disable-next-line no-console
    console.warn(
      'Skipping ruby formatting: ruby and syntax_tree are not installed',
    )
    return content
  }
  return await prettier(content, {
    parser: 'ruby',
    plugins: [prettierPluginRuby.default],
    printWidth: 100,
    trailingComma: 'all',
  })
}

const formatGo = async (content: string): Promise<string> => {
  try {
    await commandExists('gofmt')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Skipping go formatting: gofmt is not installed')
    return content
  }
  const result = await execa({ input: content })`gofmt`
  return result.stdout
}

const formatBash = async (content: string): Promise<string> => {
  try {
    await commandExists('shfmt')
  } catch {
    // eslint-disable-next-line no-console
    console.warn('Skipping bash formatting: shfmt is not installed')
    return content
  }
  const result = await execa({ input: content })`shfmt -`
  return result.stdout
}

const formatPhp = async (content: string): Promise<string> => {
  const output = await prettier(content, {
    parser: 'php',
    plugins: [prettierPluginPhp.default],
  })
  return output.split('\n').slice(1).join('\n')
}

export const formatJson = async (content: string): Promise<string> => {
  return await prettier(content, { parser: 'json' })
}
