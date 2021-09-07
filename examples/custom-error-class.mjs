//@ts-check
import Bugsnag from "@bugsnag/node";
Bugsnag.start({ apiKey: process.env.APIKEY });

class CustomError extends Error {
    name = 'My Custom Error Class'
}

Bugsnag.notify(new CustomError("custom-error MESSAGE"));
