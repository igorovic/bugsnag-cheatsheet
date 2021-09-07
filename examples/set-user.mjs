//@ts-check
import Bugsnag from "@bugsnag/node";
Bugsnag.start({ apiKey: process.env.APIKEY });

Bugsnag.notify(new Error("error with user data"), (event)=>{
    event.setUser('random-id', 'does-not-exist@dyve.dev', 'Igor')
});
