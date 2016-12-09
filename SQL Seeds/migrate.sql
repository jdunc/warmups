DROP TABLE IF EXISTS parties;
DROP TABLE IF EXISTS guests;
CREATE TABLE parties (
  id serial primary key,
  name text NOT NULL default '',
  price integer NOT NULL default 0.00
  );
CREATE TABLE guests (
  id serial primary key,
  concert_id integer NOT NULL REFERENCES parties(id) ON DELETE CASCADE,
  name text NOT NULL DEFAULT '',
  age integer NOT NULL DEFAULT 0
);
