export async function json(file) {

    return fetch(file)
        .then(rs => {
            return rs.json();
        })
        .then(data => {
            return data;
        }).catch(e => {
            console.log(file, e);
        })
}
