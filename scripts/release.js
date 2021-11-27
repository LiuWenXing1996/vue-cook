// @ts-check
const chalk = require('chalk')
const execa = require('execa')

async function getGitBranch() {
  const { stdout } = await execa.command('git rev-parse --abbrev-ref HEAD');
  return stdout;
}

async function lint() {
  let checked = true
  try {
    await execa.command('vue-tsc --noEmit');
  } catch (err) {
    checked = false
  }
  return checked
}

async function version() {
  const { stdout } = await execa.command('standard-version');
  return stdout;
}

async function pushToGit() {
  let isSuccess = false
  try {
    await execa.command('git push --follow-tags origin main');
  } catch (err) {
    isSuccess = false
    throw err
  }
  return isSuccess
}

async function main() {
  // 检查分支名
  console.log(chalk.cyan(`正在检查分支名...`))
  const branch = await getGitBranch()
  if (branch !== "main") {
    console.log(chalk.red(`你现在在分支${branch},请使用 git checkout main 切换到主分支main操作`))
    return
  }
  console.log(chalk.blue(`你现在在主分支main`))

  // 类型检查
  console.log(chalk.cyan(`正在进行类型检查...`))
  const typeChecked = await lint()
  if (!typeChecked) {
    console.log(chalk.red(`类型检查出错，请使用 yarn lint 检查详细的类型错误`))
    return
  }
  console.log(chalk.blue(`无类型错误`))

  // 生成版本
  console.log(chalk.cyan(`正在生成版本信息...`))
  const versionInfo = await version()
  console.log(versionInfo)

  // 推送至github
  console.log(chalk.cyan(`正在推送至github...`))
  const pushRes = await pushToGit()
  if (pushRes) {
    console.log(chalk.blue(`推送至github完成,它会触发对应的工作流`))
    console.log(chalk.blue(`打开 https://github.com/LiuWenXing1996/vue-cook/actions 查看`))
  }
}

main().catch(err => {
  console.error(err)
})