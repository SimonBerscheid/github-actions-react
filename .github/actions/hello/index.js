const core = require('@actions/core')
const github = require('@actions/github')

try {
    // throw(new Error("some error message"));
    const name = core.getInput('who-to-greet');
    console.log(`Hello Mister ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    console.log(JSON.stringify(github, null, '\t'));
} catch (error) {
    console.log(error.message)
    core.setFailed(error.message)
}

