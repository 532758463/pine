import { src, dest, parallel } from "gulp";

function copyScss(toDir: string) {
    return function CopyLScss() {
        return src("src/**/*.scss").pipe(dest(toDir));
    };
}

export default parallel(copyScss("lib"), copyScss("es"));
