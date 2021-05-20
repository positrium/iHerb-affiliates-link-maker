export class Logger {
    debug(values, groupName) {
        console.group(groupName);
        console.log(values);
        console.groupEnd();
    }
}
//# sourceMappingURL=Logger.js.map