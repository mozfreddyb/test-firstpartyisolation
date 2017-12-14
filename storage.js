// storage.js


function stor(o) {
    try {
        document.cookie = JSON.stringify(o);
    } catch(e) {
        console.warn('Couldnt set cookie', e)
    }
    try {
    localStorage.setItem(o, JSON.stringify(o));
    }
    catch(e) {
        console.warn('Couldnt set localStorage', e)
    }
}
8
function retr() {
    let o;
    try {
        o =JSON.parse(localStorage.getItem(o)) || {};
        if ('s' in o && 'd' in o) {
            return o
        } else {
            console.info('localStorage lossy, trying something else');
        }
    } catch(e) {
        console.warn('Couldnt get localStorage', e)
    }
    try {
        if (document.cookie) {
            o = JSON.parse(document.cookie);
            if ('s' in o && 'd' in o) {
                return o
            } else {
                console.info('localStorage lossy, trying something else');
            }
        }
    } catch(e) {
        console.warn('Couldnt get cookie', e)
    }
}