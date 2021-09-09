//@ts-check
import Bugsnag from "@bugsnag/node";
Bugsnag.start({ apiKey: process.env.APIKEY });

Bugsnag.addMetadata('section-2', {
    message: 'global metadata'
})

Bugsnag.notify(new Error("error with global metadata"));

Bugsnag.notify(new Error("error with metadata"), (event)=>{
    event.addMetadata('section-1', {
        message: 'testing metadata'
    })
});

Bugsnag.notify(new Error("error with metadata"), (event)=>{
    event.addMetadata('section-2', {
        message: 'should override global'
    })
});