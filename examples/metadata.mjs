//@ts-check
import Bugsnag from "@bugsnag/node";
Bugsnag.start({ apiKey: process.env.APIKEY });

Bugsnag.notify(new Error("error with metadata"), (event)=>{
    event.addMetadata('section-1', {
        message: 'testing metadata'
    })
});
