const core = require('@actions/core')
const github = require('@actions/github')

try {
    // throw(new Error("some error message"));
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);

    const time = new Data();
    core.setOutput("time", time.toTimeString());

    console.log(JSON.stringify(github));
} catch (error) {
    core.setFailed('function failed when called this')
}

