# SQL Seeds

Using SQL, build a seed file for the following database tables.

| id | name                          | price |
|----|-------------------------------|-------|
| 1  | Capitol Hill Block Party 2016 | 49.99 |
| 2  | Bumbershoot 2016              | 64.99 |

| id | concert_id | name            | age |
|----|------------|-----------------|-----|
| 1  | 1          | Daniel Bailey   | 52  |
| 2  | 1          | Heidi McGuire   | 30  |
| 3  | 2          | Corey Reyes     | 26  |
| 4  | 2          | Kristi Sheridan | 45  |

Remember to delete all the existing rows from each table before inserting new ones.

Once you're satisfied, feel free to insert more rows to either table as you see fit.

```SQL
DELETE TABLE IF EXISTS parties;
DELETE TABLE IF EXISTS guests;
CREATE TABLE parties (
  id integer serial primary key,
  name string NOT NULL default '',
  price integer NOT NULL default 0.00
  );
  CREATE TABLE guests (
    id integer serial primary key,
    concert_id integer NOT NULL REFERENCES parties.id ON DELETE CASCADE,
    name string NOT NULL DEFAULT '',
    age integer NOT NULL DEFAULT 0
    )```
