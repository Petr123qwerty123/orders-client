export const getDateByString = (dateStr) => {
    if (!isNaN(Date.parse(dateStr))) {
        const date = new Date(dateStr);

        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }

        let month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    return 'undefined';
}