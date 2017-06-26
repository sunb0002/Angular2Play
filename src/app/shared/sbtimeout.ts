export function sbtimeout(ms: number = 0) {

    // target：实例对象，即 IndexComponent 实例化对象。
    // key：方法名称，即 fn。
    // descriptor：对象描述，同Object.getOwnPropertyDescriptor() 
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