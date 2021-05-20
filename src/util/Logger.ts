export class Logger {
    public debug(values: any, groupName: string): void {
        console.group(groupName);
        console.log(values);
        console.groupEnd();
    }
}

