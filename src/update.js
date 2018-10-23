export default function update (path, val, obj) {
    // The unit test always respond me obj is undefined even if I do return obj. Path and val are ok
    if (paths.length > 0 &&  typeof obj !== 'undefined') {
        const currentPos = paths[0];
        paths.splice(0, 1);
        obj2 = obj.clone();
        obj2[currentPos] = update(paths, val, obj[currentPos]);
        return obj2;

    } else {
        return val;
    }
}

