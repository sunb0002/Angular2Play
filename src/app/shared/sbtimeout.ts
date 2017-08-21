export function sbtimeout(ms: number = 0) {

    // target：IndexComponent
    // key：fn name.
    // descriptor：Object.getOwnPropertyDescriptor()
    // Using JS metadata reflection API to build/call a __decorate() method
    return (target, key, descriptor) => {

        let orgMethod = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                orgMethod.apply(this, args);
            }, ms);
        };
        return descriptor;
    }

}