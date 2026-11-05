

function test(item, callMeWhenDone) {
    console.log("Hi start the Testcase", item);
    callMeWhenDone();
}

test("Verify the login page is working", async (page) => {
    console.log("Testcase completed");
});