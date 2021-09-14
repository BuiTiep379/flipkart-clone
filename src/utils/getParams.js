export default (query) => {
    if (query) {
        // cắt query từ ? thành 2 phần
        // [0]: rỗng
        // [1]: cid=.....
        const queryString = query.split("?")[1];
        if (queryString.length > 0) {
            // params có 2;
            const params = queryString.split("&");
            const paramsObj = {};
            // forEach duyệt qua mỗi param 
            params.forEach(param => {
                const keyValue = param.split("=");
                paramsObj[keyValue[0]] = keyValue[1];
            });
            return paramsObj;
        }

    }
    return {};
}