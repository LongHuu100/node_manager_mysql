// Bởi vì file app đã set global.db = connect ...
// Nên ở đây có thể gọi trực tiếp db luôn mà không cần từ khoá import nhé

db.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});

const author = { name: 'Craig Buckler', city: 'Exmouth' };
db.query('INSERT INTO authors SET ?', author, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

con.query(
  'UPDATE authors SET city = ? Where ID = ?',
  ['Leipzig', 3],
  (err, result) => {
    if (err) throw err;
    console.log(`Changed ${result.changedRows} row(s)`);
  }
);

con.query(
  'DELETE FROM authors WHERE id = ?', [5], (err, result) => {
    if (err) throw err;
    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);
