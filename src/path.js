export default function path (paths, obj) {
    if (paths.length > 0 &&  typeof obj !== 'undefined') {
        const currentPos = paths[0];
        paths.splice(0, 1);

        return path(paths, obj[currentPos])

    } else {
        return obj
    }
}
