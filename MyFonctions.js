const { connection } = require('./DbConnect');

function add(first_name, last_name, tel, adress) {
    connection.query('INSERT INTO guest (first_name, last_name, tel, adress) VALUES (?, ?, ?,?)', [first_name, last_name, tel, adress], (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'insertion :', err.message);
            return;
        }
        console.log('Données insérées avec succès');
    });
}

function update(tel, new_first_name,  new_last_name, new_tel, new_adress) {
    

    connection.query("UPDATE guest set first_name= ? , last_name=?, tel=?, adress=? where tel=? ", [new_first_name,  new_last_name, new_tel, new_adress, tel], (err, results) => {
        if (err) {
            console.error('Erreur lors de la modification :', err.message);
            return;
        }
        console.log('Données modifiées avec succès');
    })
}

function del(tel) {
    connection.query("DELETE FROM guest where tel=?", tel,(err, resumts)=>{
        if (err) {
            console.error('Erreur lors de la suppression :', err.message);
            return;
        }
        console.log('Données supprimées avec succès');
    } )
}


function recherche(tel) {
    connection.query("SELECT * FROM guest WHERE tel = ?", [tel], (err, results) => {
        if (err) {
            console.error('Erreur lors de la recherche :', err.message);
            return null;
        }
        console.log(results.length > 0 ? 'Données trouvées' : 'Aucune donnée trouvée');
        
        processSearchResults(results);
    });
}

function processSearchResults(results) {
   
    console.log('Résultats de la recherche:', results);
}

module.exports = { add, update, del, recherche };
