//@ts-check
import Bugsnag from "@bugsnag/node";
Bugsnag.start({ apiKey: process.env.APIKEY });

Bugsnag.notify(new Error("error with context"), (event)=>{
    event.context = 'My custom context'
});
