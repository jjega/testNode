export default function flatten (list) {
    // The unit test always respond me list is undefined even if I do return list
    let list_new = [];

    if (Array.isArray(list)) {
        list_new = list.filter((val) => {
            return flatten(val);
        });
    } else {
        return list_new = list;
    }

}
