const entries = {
    queryGetEntries: `
    SELECT *
    FROM entries
    ORDER BY id_entry`,
    queryGetEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title`,
    queryAddEntry:`
    INSERT INTO entries(title,content,id_author,category)
    VALUES ($1, $2, (SELECT id_author FROM authors WHERE email=$3), $4)`,
    queryUpdateEntry:`
    UPDATE entries
    SET title=$1, content=$2, category=$3
    WHERE id_entry=$4`,
    queryDeleteEntry:`
    DELETE FROM entries
    WHERE id_entry=$1`,
    querySearchEntryByID:`
    SELECT id_entry
    FROM entries
    WHERE id_entry=$1`
};

const authors = {
    queryGetAuthors:`
    SELECT *
    FROM authors
    ORDER BY id_author`,
    queryGetAuthorByEmail:`
    SELECT a.name,a.surname,a.email,a.image
    FROM authors AS a
    WHERE a.email=$1
    ORDER BY a.id_author`,
    queryAddAuthor:`
    INSERT INTO authors(name,surname,email,image)
    VALUES ($1, $2, $3, $4)`,
    queryUpdateAuthor:`
    UPDATE authors
    SET name=$1, surname=$2, email=$3, image=$4
    WHERE id_author=$5`,
    queryDeleteAuthor:`
    DELETE FROM authors
    WHERE id_author=$1`,
    querySearchAuthorByID:`
    SELECT id_author
    FROM authors
    WHERE id_author=$1`,
    querySearchAuthorByEmail:`
    SELECT email
    FROM authors
    WHERE email=$1`
};


module.exports = {entries, authors};