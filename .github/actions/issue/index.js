const core = require('@actions/core')
const github = require('@actions/github')

async function createIssue() {
    try {
        const token = core.getInput('token')
        const title = core.getInput('title')
        const body = core.getInput('body')
        const assignees = core.getInput('assignees')

        const octokit = new github.getOctokit(token);

        const response = await octokit.rest.issues.create({
            ...github.context.repo,
            title,
            body,
            assignees: [assignees]
        });

        core.setOutput('issue', JSON.stringify(response.data));
    } catch (error) {
        core.setFailed(error.message)
    }
}

createIssue();
