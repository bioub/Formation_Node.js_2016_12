var contacts = [{
    prenom: 'Bill',
    nom: 'Gates',
    id: 123
},{
    prenom: 'Steve',
    nom: 'Jobs',
    id: 456
}];

module.exports = [{
    url: '/contacts',
    method: 'GET',
    callback: (req, res) => {
        res.write('<table>');

        for (let contact of contacts) {
            res.write('<tr>');
            res.write(`<td>${contact.prenom}</td>`);
            res.write('</tr>');
        }

        res.end('</table>');
    }
},{
    url: '/contacts/123',
    method: 'GET',
    callback: (req, res) => {

    }
}];